'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInterpolatedTemplate = exports.getInterpolationRefs = exports.INTERPOLATION_REFERENCE_REGEX = exports.INTERPOLATION_REFERENCE_ID = undefined;

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The interpolation reference is used to indicate
 * that an interpolation needs to occur when encountered
 * by a visitor.
 */
var INTERPOLATION_REFERENCE_ID = '_react_pug_replace_';

/**
 * Used to check whether a value contains a replace
 * reference or multiple replace references.
 */
var INTERPOLATION_REFERENCE_REGEX = /_react_pug_replace_\d+/g;

/**
 * Check whether the value is a valid interpolation
 * reference.
 * @param { string } value - The value to check
 * @returns { ?Array<string> } The references within
 * the value or null.
 */
function getInterpolationRefs(value) {
  return value.match(INTERPOLATION_REFERENCE_REGEX);
}

/**
 * Convert pug raw template array into a string
 * containing references to interpolations as well
 * a map containing the interpolations.
 * @param { Array<TemplateElement> } tpl - The template array
 * @param { Array<Expression> } interpolations - The interpolations
 * @returns { Object } - The template with interpolation references
 * and a map containing the reference and the interpolation.
 */
function getInterpolatedTemplate(tpl, interpolations) {
  var interpolationRef = new _map2.default();

  var template = tpl.map(function (_ref, index) {
    var value = _ref.value;


    var interpolation = interpolations[index];
    var rawValue = value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' ? value.raw : '';

    if (interpolation) {
      var ref = '' + INTERPOLATION_REFERENCE_ID + index;
      interpolationRef.set(ref, interpolation);
      return '' + String(rawValue) + ref;
    }

    return rawValue;
  }).join('');

  return { template: template, interpolationRef: interpolationRef };
}

exports.INTERPOLATION_REFERENCE_ID = INTERPOLATION_REFERENCE_ID;
exports.INTERPOLATION_REFERENCE_REGEX = INTERPOLATION_REFERENCE_REGEX;
exports.getInterpolationRefs = getInterpolationRefs;
exports.getInterpolatedTemplate = getInterpolatedTemplate;