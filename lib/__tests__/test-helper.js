'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockConsoleErrors = mockConsoleErrors;
exports.testCompileError = testCompileError;
exports.testRuntimeError = testRuntimeError;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _babelCore = require('babel-core');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mockConsoleErrors() {
  var consoleError = console.error.bind(console);

  beforeAll(function () {
    console.error = jest.fn();
  });

  afterAll(function () {
    console.error = consoleError;
  });
}

function testCompileError(filename) {
  test('Expect an error to be thrown', function () {
    try {
      (0, _babelCore.transformFileSync)(filename, {
        babelrc: false,
        plugins: [_2.default]
      });
    } catch (ex) {
      expect(ex.message).toMatchSnapshot('');
      return;
    }
    throw new Error('Expected an exception');
  });
}

function testRuntimeError(filename) {
  test('Expect an error to be thrown', function () {
    try {
      var src = (0, _babelCore.transformFileSync)(filename, {
        babelrc: false,
        plugins: [_2.default, require('babel-plugin-transform-react-jsx')]
      }).code;
      var m = { exports: {} };
      Function('React,module', src)(_react2.default, m);
    } catch (ex) {
      expect(ex.message).toMatchSnapshot('');
      return;
    }
    throw new Error('Expected an exception');
  });
}

exports.default = function (filename) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  test('JavaScript output', function () {
    expect((0, _babelCore.transformFileSync)(filename, {
      babelrc: false,
      plugins: [[_2.default, options]]
    }).code).toMatchSnapshot('transformed source code');
  });
  test('html output', function () {
    var src = (0, _babelCore.transformFileSync)(filename, {
      babelrc: false,
      plugins: [[_2.default, options], require('babel-plugin-transform-react-jsx')]
    }).code;
    var m = { exports: {} };
    Function('React,module', src)(_react2.default, m);
    expect(_reactTestRenderer2.default.create(m.exports).toJSON()).toMatchSnapshot('generated html');
  });
  test('static html output', function () {
    var src = (0, _babelCore.transformFileSync)(filename, {
      babelrc: false,
      plugins: [[_2.default, options], require('babel-plugin-transform-react-jsx')]
    }).code;
    var m = { exports: {} };
    Function('React,module', src)(_react2.default, m);
    expect(_server2.default.renderToStaticMarkup(m.exports)).toMatchSnapshot('static html');
  });
};