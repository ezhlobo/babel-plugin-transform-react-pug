'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _babelTypes = require('../babel-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addLocToAst(_ast) {
  var line = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _babelTypes.getCurrentLocation)().start.line;

  var ast = _ast;
  if (ast.loc) {
    ast.loc = {
      start: { line: line + ast.loc.start.line - 1, column: 0 },
      end: { line: line + ast.loc.end.line - 1, column: 0 }
    };
    (0, _keys2.default)(ast).forEach(function (key) {
      if (Array.isArray(ast[key])) {
        ast[key].forEach(function (n) {
          return addLocToAst(n, line);
        });
      } else if (ast[key] && (0, _typeof3.default)(ast[key]) === 'object') {
        addLocToAst(ast[key], line);
      }
    });
  }
}

exports.default = addLocToAst;