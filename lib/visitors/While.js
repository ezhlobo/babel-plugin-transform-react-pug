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

function getWhileStatement(node, context, id) {
  var test = (0, _parseExpression2.default)(node.test, context);

  var _context$dynamicBlock = context.dynamicBlock(function (childContext) {
    return (0, _visitors.visitExpressions)(node.block.nodes, context).map(function (exp) {
      return _babelTypes2.default.expressionStatement(_babelTypes2.default.assignmentExpression('=', _babelTypes2.default.memberExpression(id, _babelTypes2.default.memberExpression(id, _babelTypes2.default.identifier('length')), true), exp));
    });
  }),
      body = _context$dynamicBlock.result,
      variables = _context$dynamicBlock.variables;

  if (variables.length) {
    body.unshift(_babelTypes2.default.variableDeclaration('let', variables.map(function (id) {
      return _babelTypes2.default.variableDeclarator(id);
    })));
  }
  return _babelTypes2.default.whileStatement(test, _babelTypes2.default.blockStatement(body));
}

var WhileVisitor = {
  expression: function expression(node, context) {
    var id = context.generateUidIdentifier('pug_nodes');
    return _babelTypes2.default.callExpression(_babelTypes2.default.arrowFunctionExpression([id], _babelTypes2.default.blockStatement([getWhileStatement(node, context, id), _babelTypes2.default.returnStatement(id)])), [_babelTypes2.default.arrayExpression([])]);
  }
};

exports.default = WhileVisitor;