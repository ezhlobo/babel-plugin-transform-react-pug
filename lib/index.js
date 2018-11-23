'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function (babel) {
  var t = babel.types;


  (0, _babelTypes.setBabelTypes)(t);

  function isReactPugReference(node) {
    // TODO: do this better
    return t.isIdentifier(node, { name: 'pug' });
  }

  return {
    visitor: {
      TaggedTemplateExpression: function TaggedTemplateExpression(path, state) {
        var node = path.node;
        var _node$quasi = node.quasi,
            quasis = _node$quasi.quasis,
            expressions = _node$quasi.expressions;


        if (isReactPugReference(node.tag) && quasis.length >= 1) {
          var template = void 0,
              interpolationRef = void 0;

          if (expressions.length) {
            var interpolatedTpl = (0, _interpolation.getInterpolatedTemplate)(quasis, expressions);
            template = interpolatedTpl.template;
            interpolationRef = interpolatedTpl.interpolationRef;
          } else {
            template = quasis[0].value.raw;
          }

          var src = template.split('\n');

          var minIndent = (0, _commonPrefix2.default)(src.filter(function (line) {
            return line.trim() !== '';
          }).map(function (line) {
            return (/^[ \t]*/.exec(line)[0]
            );
          }));

          src = src.map(function (line) {
            return line.substr(minIndent.length);
          }).join('\n');

          var ast = (0, _parsePug2.default)(src);
          var context = _context2.default.create(this.file, path, interpolationRef, {
            options: (0, _extends3.default)({}, DEFAULT_OPTIONS, state.opts)
          });
          var transformed = ast.nodes.map(function (node) {
            return (0, _visitors.visitExpression)(node, context);
          });

          var expression = transformed.length === 1 ? transformed[0] : (0, _jsx.buildJSXFragment)(transformed);

          context.variablesToDeclare.forEach(function (id) {
            path.scope.push({ kind: 'let', id: id });
          });

          path.replaceWith(expression);
        }
      }
    }
  };
};

var _commonPrefix = require('common-prefix');

var _commonPrefix2 = _interopRequireDefault(_commonPrefix);

var _parsePug = require('./parse-pug');

var _parsePug2 = _interopRequireDefault(_parsePug);

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _visitors = require('./visitors');

var _interpolation = require('./utils/interpolation');

var _jsx = require('./utils/jsx');

var _babelTypes = require('./babel-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  classAttribute: 'className'
};