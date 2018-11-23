'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _parseExpression = require('../utils/parse-expression');

var _parseExpression2 = _interopRequireDefault(_parseExpression);

var _parseStatement = require('../utils/parse-statement');

var _parseStatement2 = _interopRequireDefault(_parseStatement);

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function visitBufferedCode(node, context) {
  return (0, _parseExpression2.default)(node.val, context);
}

function declareProperty(kind, prop, context) {
  switch (prop.type) {
    case 'RestProperty':
      return (0, _extends3.default)({}, prop, { argument: declareLVal(kind, prop.argument, context) });
    case 'ObjectProperty':
      return (0, _extends3.default)({}, prop, { value: prop.value && declareLVal(kind, prop.value, context) });
    default:
      throw new Error('Unexpected Property Type, ' + prop.type);
  }
}
function declareLVal(kind, val, context) {
  switch (val.type) {
    case 'ArrayPattern':
      return (0, _extends3.default)({}, val, { elements: val.elements.map(function (el) {
          return declareLVal(kind, el, context);
        }) });
    case 'Identifier':
      return context.declareVariable(kind, val.name).id;
    case 'ObjectPattern':
      return (0, _extends3.default)({}, val, { properties: val.properties.map(function (p) {
          return declareProperty(kind, p, context);
        }) });
    case 'RestElement':
      return (0, _extends3.default)({}, val, { argument: declareLVal(kind, val.argument, context) });
    default:
      throw new Error('Unexpected Left Value Type, ' + val.type);
  }
}
function visitUnbufferedCode(node, context) {
  // TODO: hoist and rename `const` and `let` variables
  var statement = (0, _parseStatement2.default)(node.val, context);
  var variableDeclaration = _babelTypes2.default.asVariableDeclaration(statement);
  if (variableDeclaration) {
    var kind = variableDeclaration.kind;
    var expressions = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(variableDeclaration.declarations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var declaration = _step.value;

        var lval = declareLVal(kind, declaration.id, context);
        expressions.push(_babelTypes2.default.assignmentExpression('=', lval, declaration.init || _babelTypes2.default.identifier('undefined')));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    expressions.push(_babelTypes2.default.identifier('undefined'));
    return _babelTypes2.default.sequenceExpression(expressions);
  }
  if (_babelTypes2.default.isExpressionStatement(statement)) {
    return _babelTypes2.default.sequenceExpression([statement.expression, _babelTypes2.default.identifier('undefined')]);
  }
  return _babelTypes2.default.callExpression(_babelTypes2.default.arrowFunctionExpression([], _babelTypes2.default.blockStatement([statement])), []);
}

var CodeVisitor = {
  expression: function expression(node, context) {
    if (node.buffer && !node.mustEscape) {
      throw new Error('Unescaped, buffered code is not supported in react-pug');
    }
    if (node.buffer) {
      return visitBufferedCode(node, context);
    } else {
      return visitUnbufferedCode(node, context);
    }
  }
};

exports.default = CodeVisitor;