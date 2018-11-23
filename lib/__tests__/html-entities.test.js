'use strict';

var _babelCore = require('babel-core');

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _babelPluginTransformReactJsx = require('babel-plugin-transform-react-jsx');

var _babelPluginTransformReactJsx2 = _interopRequireDefault(_babelPluginTransformReactJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FILENAME = __dirname + '/html-entities.input.js';

var transform = function transform() {
  for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  return (0, _babelCore.transformFileSync)(FILENAME, {
    babelrc: false,
    compact: false,
    plugins: [_2.default].concat(plugins)
  }).code;
};

test('JavaScript output', function () {
  var src = transform();
  expect(src).toMatchSnapshot('transformed source code');
});

test('JSX output', function () {
  var src = transform(_babelPluginTransformReactJsx2.default);
  expect(src).toMatchSnapshot('generated JSX');
});