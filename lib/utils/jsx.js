'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildJSXElement = buildJSXElement;
exports.buildJSXFragment = buildJSXFragment;

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildJSXElement(tag, attrs, children) {
  var noChildren = children.length === 0;

  var open = _babelTypes2.default.jSXOpeningElement(tag, attrs, noChildren);

  var close = noChildren ? null : _babelTypes2.default.jSXClosingElement(tag);

  return _babelTypes2.default.jSXElement(open, close, children, noChildren);
}

// TODO: This can be replaced when migrating to Babel 7 as JSXFragment
// has been added in v7.0.0-beta.30.


function buildJSXFragment(children) {
  var fragmentExpression = _babelTypes2.default.jSXMemberExpression(_babelTypes2.default.jSXIdentifier('React'), _babelTypes2.default.jSXIdentifier('Fragment'));
  return buildJSXElement(fragmentExpression, [], children);
}