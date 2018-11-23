'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _babelCore = require('babel-core');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transformationOptions = {
  babelrc: false,
  plugins: [_2.default]
};

var transformer = function transformer(code) {
  return (0, _babelCore.transform)('pug`' + code + '`', transformationOptions).code;
};

var ExpectedError = /Unescaped attributes/;

test('throws error when pass string', function () {
  var wrapped = function wrapped() {
    return transformer('\n    div(name!="hello")\n  ');
  };

  expect(wrapped).toThrowError(ExpectedError);
});

test('throws error when pass number', function () {
  var wrapped = function wrapped() {
    return transformer('\n    div(name!=42)\n  ');
  };

  expect(wrapped).toThrowError(ExpectedError);
});

test('throws error when pass variable', function () {
  var wrapped = function wrapped() {
    return transformer('\n    - const variable = \'value\'\n    div(name!=variable.toString())\n  ');
  };

  expect(wrapped).toThrowError(ExpectedError);
});

test('does not throw error when pass variable or just string', function () {
  var wrapped = function wrapped() {
    return transformer('\n    - const variable = \'value\'\n    div#id.class(\n      data-string="hello"\n      data-variable=variable\n      data-number=42\n    )\n      div(class=[\'one\', \'two\'])\n  ');
  };

  expect(wrapped).not.toThrowError(ExpectedError);
});

test('does not throw error when pass boolean variables', function () {
  var wrapped = function wrapped() {
    return transformer('\n    div(data-first data-second data-third)\n  ');
  };

  expect(wrapped).not.toThrowError(ExpectedError);
});