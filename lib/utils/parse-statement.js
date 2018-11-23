'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseStatement;

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _addLocToAst = require('./add-loc-to-ast');

var _addLocToAst2 = _interopRequireDefault(_addLocToAst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseStatement(src, context) {
  var val = (0, _parse2.default)(src, context);
  if (val.length !== 1) {
    var err = context.error('INVALID_EXPRESSION', 'There was an error parsing the expression "' + src + '".');
    throw err;
  }
  (0, _addLocToAst2.default)(val[0]);
  return val[0];
} // @noflow