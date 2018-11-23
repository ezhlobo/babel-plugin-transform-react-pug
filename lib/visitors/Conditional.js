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

// [ "JSXExpressionContainer", "ConditionalExpression", "IfStatement" ]

var ConditionalVisitor = {
  expression: function expression(node, context) {
    if (node.alternate && node.alternate.type === 'Conditional') {
      node.alternate = { nodes: [node.alternate] };
    }
    var test = (0, _parseExpression2.default)(node.test, context);

    var consequent = context.staticBlock(function (childContext) {
      var children = (0, _visitors.visitExpressions)(node.consequent.nodes, childContext);
      if (children.length === 1) {
        return children[0];
      }
      if (children.length === 0) {
        return _babelTypes2.default.identifier('undefined');
      }
      return _babelTypes2.default.arrayExpression(children);
    });
    var alternate = context.staticBlock(function (childContext) {
      var children = (0, _visitors.visitExpressions)(node.alternate ? node.alternate.type === 'Conditional' ? [node.alternate] : node.alternate.nodes : [], childContext);
      if (children.length === 1) {
        return children[0];
      }
      if (children.length === 0) {
        return _babelTypes2.default.identifier('undefined');
      }
      return _babelTypes2.default.arrayExpression(children);
    });

    return _babelTypes2.default.conditionalExpression(test, consequent, alternate);
  }
};

exports.default = ConditionalVisitor;