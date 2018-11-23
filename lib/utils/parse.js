'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parse;

var _babelCore = require('babel-core');

function parse(src, context) {
  try {
    return (0, _babelCore.transform)(src, {
      ast: true,
      babelrc: false,
      code: false,
      parserOpts: context.file.parserOpts,
      plugins: [function (_ref) {
        var t = _ref.types;

        return {
          visitor: {
            ReferencedIdentifier: function ReferencedIdentifier(path) {
              var node = path.node,
                  scope = path.scope;
              var name = node.name,
                  type = node.type;

              if (scope.getBindingIdentifier(name)) return;
              var variable = context.getVariable(name);
              if (variable) {
                path.replaceWith(type === 'JSXIdentifier' ? t.jSXIdentifier(variable.id.name) : variable.id);
              }
            },
            AssignmentExpression: function AssignmentExpression(path) {
              if (t.isIdentifier(path.node.left)) {
                var variable = context.getVariable(path.node.left.name);
                if (variable) {
                  if (variable.kind === 'const') {
                    var err = context.error('CONSTANT_VARIABLE_MUTATION', 'You cannot update "' + path.node.left.name + '" because it is constant');
                    throw err;
                  }
                  path.get('left').replaceWith(variable.id);
                }
              }
            },
            UpdateExpression: function UpdateExpression(path) {
              if (t.isIdentifier(path.node.argument)) {
                var variable = context.getVariable(path.node.argument.name);
                if (variable && variable.kind === 'const') {
                  var err = context.error('CONSTANT_VARIABLE_MUTATION', 'You cannot update "' + path.node.argument.name + '" because it is constant');
                  throw err;
                }
              }
            }
          }
        };
      }]
    }).ast.program.body;
  } catch (ex) {
    var err = context.error('JS_SYNTAX_ERROR', ex.message.replace(/^unknown\: /, ''));
    throw err;
  }
}