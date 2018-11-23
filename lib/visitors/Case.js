'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseExpression = require('../utils/parse-expression');

var _parseExpression2 = _interopRequireDefault(_parseExpression);

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _visitors = require('../visitors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertCases(nodes, context, needle) {
  if (nodes.length === 0) {
    return _babelTypes2.default.identifier('undefined');
  }
  var node = nodes[0];
  var consequent = context.staticBlock(function (childContext) {
    var children = (0, _visitors.visitExpressions)(node.block.nodes, childContext);
    if (children.length === 1) {
      return children[0];
    }
    if (children.length === 0) {
      return _babelTypes2.default.identifier('undefined');
    }
    return _babelTypes2.default.arrayExpression(children);
  });
  if (node.expr === 'default') {
    return consequent;
  }
  var test = _babelTypes2.default.binaryExpression('===', needle, (0, _parseExpression2.default)(node.expr, context));
  var alternate = convertCases(nodes.slice(1), context, needle);
  return _babelTypes2.default.conditionalExpression(test, consequent, alternate);
}

var ConditionalVisitor = {
  expression: function expression(node, context) {
    var needle = (0, _parseExpression2.default)(node.expr, context);
    var id = _babelTypes2.default.asIdentifier(needle) || context.declareVariable('const', context.generateUidIdentifier('case_variable').name).id;
    var cases = convertCases(node.block.nodes, context, id);
    if (!_babelTypes2.default.isIdentifier(needle)) {
      return _babelTypes2.default.sequenceExpression([_babelTypes2.default.assignmentExpression('=', id, needle), cases]);
    }
    return cases;
  }
};
exports.default = ConditionalVisitor;