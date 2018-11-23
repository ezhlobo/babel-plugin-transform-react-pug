'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  return _pugFilters2.default.handleFilters((0, _pugParser2.default)((0, _pugStripComments2.default)((0, _pugLexer2.default)(str), { stripUnbuffered: true, stripBuffered: true })));
};

var _pugLexer = require('pug-lexer');

var _pugLexer2 = _interopRequireDefault(_pugLexer);

var _pugParser = require('pug-parser');

var _pugParser2 = _interopRequireDefault(_pugParser);

var _pugFilters = require('pug-filters');

var _pugFilters2 = _interopRequireDefault(_pugFilters);

var _pugStripComments = require('pug-strip-comments');

var _pugStripComments2 = _interopRequireDefault(_pugStripComments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }