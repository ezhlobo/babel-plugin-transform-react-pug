'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.visitExpressions = visitExpressions;
exports.visitExpression = visitExpression;
exports.visitJsxExpressions = visitJsxExpressions;
exports.visitJsx = visitJsx;

var _babelTypes = require('./babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _visitorsGenerated = require('./visitors.generated.js');

var _visitorsGenerated2 = _interopRequireDefault(_visitorsGenerated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function visitExpressions(nodes, context) {
  var result = [];
  nodes.forEach(function (node, i) {
    if (node.type === 'Block') {
      result.push.apply(result, (0, _toConsumableArray3.default)(visitExpressions(node.nodes, context)));
    } else {
      result.push(visitExpression(node, context));
    }
  });
  return result;
}

function visitExpression(node, context) {
  var line = node.line + context.getBaseLine();
  (0, _babelTypes.setCurrentLocation)({ start: { line: line, column: 0 }, end: { line: line, column: 0 } });
  var v = _visitorsGenerated2.default[node.type];
  if (!v) {
    throw new Error(node.type + ' is not yet supported');
  }
  return v.expression(node, context);
}
function visitJsxExpressions(nodes, context) {
  var result = [];
  nodes.forEach(function (node, i) {
    if (node.type === 'Block') {
      result.push.apply(result, (0, _toConsumableArray3.default)(visitJsxExpressions(node.nodes, context)));
    } else {
      result.push(visitJsx(node, context));
    }
  });
  return result;
}
function visitJsx(node, context) {
  var line = node.line + context.getBaseLine();
  (0, _babelTypes.setCurrentLocation)({ start: { line: line, column: 0 }, end: { line: line, column: 0 } });
  var v = _visitorsGenerated2.default[node.type];
  if (!v) {
    throw new Error(node.type + ' is not yet supported');
  }
  return v.jsx ? v.jsx(node, context) : _babelTypes2.default.jSXExpressionContainer(v.expression(node, context));
}