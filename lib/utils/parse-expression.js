'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseExpression;

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _addLocToAst = require('./add-loc-to-ast');

var _addLocToAst2 = _interopRequireDefault(_addLocToAst);

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _interpolation = require('./interpolation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseExpression(src, context) {
  if ((0, _interpolation.getInterpolationRefs)(src)) {
    var matched = src.split(_interpolation.INTERPOLATION_REFERENCE_REGEX);
    var isInterpolation = matched.every(function (text) {
      return text === '';
    });

    if (!isInterpolation) {
      var errMsg = matched.length === 1 ? 'Interpolation does not exist' : 'Only an interpolation can be specified. You may want to remove ' + matched.join(' ') + '.';
      throw context.error('INVALID_EXPRESSION', errMsg);
    }

    var interpolation = context.getInterpolationByRef(src);

    if (interpolation == null) {
      throw context.error('INVALID_EXPRESSION', 'Interpolation does not exist for ' + src);
    }

    return interpolation;
  }

  var val = (0, _parse2.default)('x = (' + src + ');', context);

  if (val.length !== 1) {
    var err = context.error('INVALID_EXPRESSION', 'There was an error parsing the expression ' + src + '.');
    throw err;
  }

  var expressionStatement = _babelTypes2.default.asExpressionStatement(val[0]);

  var assignmentExpression = expressionStatement && _babelTypes2.default.asAssignmentExpression(expressionStatement.expression);

  if (!assignmentExpression) {
    var _err = context.error('INVALID_EXPRESSION', 'There was an error parsing the expression ' + src + '.');
    throw _err;
  }

  (0, _addLocToAst2.default)(assignmentExpression);
  return assignmentExpression.right;
}