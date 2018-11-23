'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _sanitizeText = require('../utils/sanitize-text');

var _sanitizeText2 = _interopRequireDefault(_sanitizeText);

var _interpolation = require('../utils/interpolation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Find interpolation references in the text
 * and interweave the text with interpolations.
 * @param {string} value - The value to interpolate
 * @param {Array<string>} refs - The array of references
 * @param {Context} context - The context of the expression.
 * @returns {Expression} The interpolation or an array containing
 * text and interpolations.
 */
function buildInterpolation(value, refs, context) {
  var splitText = value.split(_interpolation.INTERPOLATION_REFERENCE_REGEX);

  if (refs.length === 1 && splitText.every(function (text) {
    return text === '';
  })) {
    var ref = context.getInterpolationByRef(refs[0]);
    return ref || _babelTypes2.default.nullLiteral();
  }

  var textArr = splitText.reduce(function (arr, value, index) {
    var valueArr = value ? [_babelTypes2.default.stringLiteral(value)] : [];
    var interpolation = refs[index] ? context.getInterpolationByRef(refs[index]) : null;

    if (interpolation) {
      valueArr.push(interpolation);
    }

    return arr.concat(valueArr);
  }, []);

  return _babelTypes2.default.callExpression(_babelTypes2.default.memberExpression(_babelTypes2.default.arrayExpression(textArr), _babelTypes2.default.identifier('join')), [_babelTypes2.default.stringLiteral('')]);
}

var TextVisitor = {
  jsx: function jsx(_ref, context) {
    var val = _ref.val;

    var refs = (0, _interpolation.getInterpolationRefs)(val);

    if (refs) {
      var expr = buildInterpolation(val, refs, context);
      return _babelTypes2.default.jSXExpressionContainer(expr);
    }

    if (/^\s/.test(val) || /\s$/.test(val)) {
      return _babelTypes2.default.jSXExpressionContainer(_babelTypes2.default.stringLiteral(val));
    }

    var content = (0, _sanitizeText2.default)(val);

    return _babelTypes2.default.jSXText(content);
  },
  expression: function expression(_ref2, context) {
    var val = _ref2.val;

    var refs = (0, _interpolation.getInterpolationRefs)(val);

    if (refs) {
      return buildInterpolation(val, refs, context);
    }

    return _babelTypes2.default.stringLiteral(val);
  }
};

exports.default = TextVisitor;