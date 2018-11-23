'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addString;

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addString(node, rStr) {
  _babelTypes2.default.assertStringLiteral(rStr);
  var lStr = _babelTypes2.default.asStringLiteral(node);
  if (lStr) {
    return _babelTypes2.default.stringLiteral(lStr.value + rStr.value);
  }
  var lBinary = _babelTypes2.default.asBinaryExpression(node, { operator: '+' });
  if (lBinary) {
    var _lStr = _babelTypes2.default.asStringLiteral(lBinary.right);
    if (_lStr) {
      return _babelTypes2.default.binaryExpression('+', lBinary.left, addString(_lStr, rStr));
    }
  }
  return _babelTypes2.default.binaryExpression('+', node, rStr);
}