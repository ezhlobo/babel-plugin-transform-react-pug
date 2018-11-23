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

function getLoop(node, context, id, arrayToIterateOver, arrayLength) {
  var index = node.key ? _babelTypes2.default.identifier(node.key) : context.generateUidIdentifier('pug_index');
  var init = _babelTypes2.default.variableDeclaration('let', [_babelTypes2.default.variableDeclarator(index, _babelTypes2.default.numericLiteral(0))]);
  var test = _babelTypes2.default.binaryExpression('<', index, arrayLength);
  var update = _babelTypes2.default.updateExpression('++', index);

  var _context$dynamicBlock = context.dynamicBlock(function (childContext) {
    return [_babelTypes2.default.variableDeclaration('const', [_babelTypes2.default.variableDeclarator(_babelTypes2.default.identifier(node.val), _babelTypes2.default.memberExpression(arrayToIterateOver, index, true))])].concat((0, _visitors.visitExpressions)(node.block.nodes, childContext).map(function (exp) {
      return _babelTypes2.default.expressionStatement(_babelTypes2.default.assignmentExpression('=', _babelTypes2.default.memberExpression(id, _babelTypes2.default.memberExpression(id, _babelTypes2.default.identifier('length')), true), exp));
    }));
  }),
      body = _context$dynamicBlock.result,
      variables = _context$dynamicBlock.variables;

  if (variables.length) {
    body.unshift(_babelTypes2.default.variableDeclaration('let', variables.map(function (id) {
      return _babelTypes2.default.variableDeclarator(id);
    })));
  }
  return _babelTypes2.default.forStatement(init, test, update, _babelTypes2.default.blockStatement(body));
}

function getAlternate(node, context) {
  return context.staticBlock(function (childContext) {
    var children = (0, _visitors.visitExpressions)(node.alternate ? node.alternate.nodes : [], childContext);
    if (children.length === 0) {
      return _babelTypes2.default.identifier('undefined');
    }
    if (children.length === 1) {
      return children[0];
    }
    return _babelTypes2.default.arrayExpression(children);
  });
}
function getTypeErrorTest(node, context, arrayToIterateOver) {
  return _babelTypes2.default.ifStatement(_babelTypes2.default.unaryExpression('!', _babelTypes2.default.logicalExpression('||', _babelTypes2.default.binaryExpression('==', arrayToIterateOver, _babelTypes2.default.nullLiteral()), _babelTypes2.default.callExpression(_babelTypes2.default.memberExpression(_babelTypes2.default.identifier('Array'), _babelTypes2.default.identifier('isArray')), [arrayToIterateOver]))), _babelTypes2.default.throwStatement(_babelTypes2.default.newExpression(_babelTypes2.default.identifier('Error'), [_babelTypes2.default.stringLiteral('Expected "' + node.obj + '" to be an array because it is passed to each.')])));
}

var WhileVisitor = {
  expression: function expression(node, context) {
    var id = context.generateUidIdentifier('pug_nodes');

    var arrayToIterateOver = context.generateUidIdentifier('pug_arr');
    var arrayLength = _babelTypes2.default.memberExpression(arrayToIterateOver, _babelTypes2.default.identifier('length'));

    var typeErrorTest = getTypeErrorTest(node, context, arrayToIterateOver);
    var loop = getLoop(node, context, id, arrayToIterateOver, arrayLength);
    var alternate = getAlternate(node, context);

    var body = _babelTypes2.default.blockStatement([typeErrorTest, _babelTypes2.default.ifStatement(_babelTypes2.default.logicalExpression('||', _babelTypes2.default.binaryExpression('==', arrayToIterateOver, _babelTypes2.default.nullLiteral()), _babelTypes2.default.binaryExpression('===', arrayLength, _babelTypes2.default.numericLiteral(0))), _babelTypes2.default.returnStatement(alternate)), loop, _babelTypes2.default.returnStatement(id)]);

    return _babelTypes2.default.callExpression(_babelTypes2.default.arrowFunctionExpression([id, arrayToIterateOver], body), [_babelTypes2.default.arrayExpression([]), (0, _parseExpression2.default)(node.obj, context)]);
  }
};

exports.default = WhileVisitor;