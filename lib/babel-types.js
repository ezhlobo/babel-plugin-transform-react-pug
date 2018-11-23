'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getCurrentLocation = getCurrentLocation;
exports.setCurrentLocation = setCurrentLocation;
exports.setBabelTypes = setBabelTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var t = null;
var currentLocation = null;
function getCurrentLocation() {
  return currentLocation;
}
function setCurrentLocation(loc) {
  return currentLocation = loc;
}
function setBabelTypes(_t) {
  return t = _t;
}

var BabelTypes = {
  anyTypeAnnotation: function anyTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.AnyTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  arrayExpression: function arrayExpression(elements) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ArrayExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  arrayPattern: function arrayPattern(elements, typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ArrayPattern.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  arrayTypeAnnotation: function arrayTypeAnnotation(elementType) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ArrayTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  arrowFunctionExpression: function arrowFunctionExpression(params, body, async) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ArrowFunctionExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  assignmentExpression: function assignmentExpression(operator, left, right) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.AssignmentExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  assignmentPattern: function assignmentPattern(left, right) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.AssignmentPattern.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  awaitExpression: function awaitExpression(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.AwaitExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  binaryExpression: function binaryExpression(operator, left, right) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BinaryExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  bindExpression: function bindExpression(object, callee) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BindExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  blockStatement: function blockStatement(body, directives) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BlockStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  booleanLiteral: function booleanLiteral(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BooleanLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  booleanLiteralTypeAnnotation: function booleanLiteralTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BooleanLiteralTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  booleanTypeAnnotation: function booleanTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BooleanTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  breakStatement: function breakStatement(label) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.BreakStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  callExpression: function callExpression(callee, _arguments) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.CallExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  catchClause: function catchClause(param, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.CatchClause.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  classBody: function classBody(body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ClassBody.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  classDeclaration: function classDeclaration(id, superClass, body, decorators) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ClassDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  classExpression: function classExpression(id, superClass, body, decorators) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ClassExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  classImplements: function classImplements(id, typeParameters) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ClassImplements.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  classMethod: function classMethod(kind, key, params, body, computed, _static) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ClassMethod.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  classProperty: function classProperty(key, value, typeAnnotation, decorators, computed) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ClassProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  conditionalExpression: function conditionalExpression(test, consequent, alternate) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ConditionalExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  continueStatement: function continueStatement(label) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ContinueStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  debuggerStatement: function debuggerStatement() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DebuggerStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareClass: function declareClass(id, typeParameters, _extends, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareClass.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareExportDeclaration: function declareExportDeclaration(declaration, specifiers, source) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareExportDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareFunction: function declareFunction(id) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareFunction.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareInterface: function declareInterface(id, typeParameters, _extends, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareInterface.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareModule: function declareModule(id, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareModule.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareModuleExports: function declareModuleExports(typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareModuleExports.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareOpaqueType: function declareOpaqueType(id, typeParameters, supertype) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareOpaqueType.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareTypeAlias: function declareTypeAlias(id, typeParameters, right) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareTypeAlias.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  declareVariable: function declareVariable(id) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DeclareVariable.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  decorator: function decorator(expression) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Decorator.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  directive: function directive(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Directive.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  directiveLiteral: function directiveLiteral(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DirectiveLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  doExpression: function doExpression(body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DoExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  doWhileStatement: function doWhileStatement(test, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.DoWhileStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  emptyStatement: function emptyStatement() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.EmptyStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  emptyTypeAnnotation: function emptyTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.EmptyTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  existentialTypeParam: function existentialTypeParam() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExistentialTypeParam.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  exportAllDeclaration: function exportAllDeclaration(source) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExportAllDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  exportDefaultDeclaration: function exportDefaultDeclaration(declaration) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExportDefaultDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  exportDefaultSpecifier: function exportDefaultSpecifier(exported) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExportDefaultSpecifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  exportNamedDeclaration: function exportNamedDeclaration(declaration, specifiers, source) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExportNamedDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  exportNamespaceSpecifier: function exportNamespaceSpecifier(exported) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExportNamespaceSpecifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  exportSpecifier: function exportSpecifier(local, exported) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExportSpecifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  expressionStatement: function expressionStatement(expression) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ExpressionStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  file: function file(program, comments, tokens) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.File.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  forAwaitStatement: function forAwaitStatement(left, right, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ForAwaitStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  forInStatement: function forInStatement(left, right, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ForInStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  forOfStatement: function forOfStatement(left, right, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ForOfStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  forStatement: function forStatement(init, test, update, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ForStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  functionDeclaration: function functionDeclaration(id, params, body, generator, async) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.FunctionDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  functionExpression: function functionExpression(id, params, body, generator, async) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.FunctionExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  functionTypeAnnotation: function functionTypeAnnotation(typeParameters, params, rest, returnType) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.FunctionTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  functionTypeParam: function functionTypeParam(name, typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.FunctionTypeParam.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  genericTypeAnnotation: function genericTypeAnnotation(id, typeParameters) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.GenericTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  identifier: function identifier(name) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Identifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  ifStatement: function ifStatement(test, consequent, alternate) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.IfStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  import: function _import() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Import.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  importDeclaration: function importDeclaration(specifiers, source) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ImportDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  importDefaultSpecifier: function importDefaultSpecifier(local) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ImportDefaultSpecifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  importNamespaceSpecifier: function importNamespaceSpecifier(local) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ImportNamespaceSpecifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  importSpecifier: function importSpecifier(local, imported) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ImportSpecifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  interfaceDeclaration: function interfaceDeclaration(id, typeParameters, _extends, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.InterfaceDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  interfaceExtends: function interfaceExtends(id, typeParameters) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.InterfaceExtends.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  intersectionTypeAnnotation: function intersectionTypeAnnotation(types) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.IntersectionTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXAttribute: function jSXAttribute(name, value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXAttribute.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXClosingElement: function jSXClosingElement(name) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXClosingElement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXElement: function jSXElement(openingElement, closingElement, children, selfClosing) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXElement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXEmptyExpression: function jSXEmptyExpression() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXEmptyExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXExpressionContainer: function jSXExpressionContainer(expression) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXExpressionContainer.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXIdentifier: function jSXIdentifier(name) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXIdentifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXMemberExpression: function jSXMemberExpression(object, property) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXMemberExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXNamespacedName: function jSXNamespacedName(namespace, name) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXNamespacedName.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXOpeningElement: function jSXOpeningElement(name, attributes, selfClosing) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXOpeningElement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXSpreadAttribute: function jSXSpreadAttribute(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXSpreadAttribute.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXSpreadChild: function jSXSpreadChild(expression) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXSpreadChild.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  jSXText: function jSXText(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.JSXText.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  labeledStatement: function labeledStatement(label, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.LabeledStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  logicalExpression: function logicalExpression(operator, left, right) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.LogicalExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  memberExpression: function memberExpression(object, property, computed) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.MemberExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  metaProperty: function metaProperty(meta, property) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.MetaProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  mixedTypeAnnotation: function mixedTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.MixedTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  newExpression: function newExpression(callee, _arguments) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NewExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  noop: function noop() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Noop.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  nullLiteral: function nullLiteral() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NullLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  nullLiteralTypeAnnotation: function nullLiteralTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NullLiteralTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  nullableTypeAnnotation: function nullableTypeAnnotation(typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NullableTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  numberTypeAnnotation: function numberTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NumberTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  numericLiteral: function numericLiteral(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NumericLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  numericLiteralTypeAnnotation: function numericLiteralTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.NumericLiteralTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectExpression: function objectExpression(properties) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectMethod: function objectMethod(kind, key, params, body, computed) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectMethod.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectPattern: function objectPattern(properties, typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectPattern.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectProperty: function objectProperty(key, value, computed, shorthand, decorators) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectTypeAnnotation: function objectTypeAnnotation(properties, indexers, callProperties) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectTypeCallProperty: function objectTypeCallProperty(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectTypeCallProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectTypeIndexer: function objectTypeIndexer(id, key, value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectTypeIndexer.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectTypeProperty: function objectTypeProperty(key, value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectTypeProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  objectTypeSpreadProperty: function objectTypeSpreadProperty(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ObjectTypeSpreadProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  opaqueType: function opaqueType(id, typeParameters, impltype, supertype) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.OpaqueType.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  parenthesizedExpression: function parenthesizedExpression(expression) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ParenthesizedExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  program: function program(body, directives) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Program.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  qualifiedTypeIdentifier: function qualifiedTypeIdentifier(id, qualification) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.QualifiedTypeIdentifier.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  regExpLiteral: function regExpLiteral(pattern, flags) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.RegExpLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  restElement: function restElement(argument, typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.RestElement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  restProperty: function restProperty(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.RestProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  returnStatement: function returnStatement(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ReturnStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  sequenceExpression: function sequenceExpression(expressions) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.SequenceExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  spreadElement: function spreadElement(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.SpreadElement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  spreadProperty: function spreadProperty(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.SpreadProperty.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  stringLiteral: function stringLiteral(value) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.StringLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  stringLiteralTypeAnnotation: function stringLiteralTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.StringLiteralTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  stringTypeAnnotation: function stringTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.StringTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  super: function _super() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.Super.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  switchCase: function switchCase(test, consequent) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.SwitchCase.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  switchStatement: function switchStatement(discriminant, cases) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.SwitchStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  taggedTemplateExpression: function taggedTemplateExpression(tag, quasi) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TaggedTemplateExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  templateElement: function templateElement(value, tail) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TemplateElement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  templateLiteral: function templateLiteral(quasis, expressions) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TemplateLiteral.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  thisExpression: function thisExpression() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ThisExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  thisTypeAnnotation: function thisTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ThisTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  throwStatement: function throwStatement(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.ThrowStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  tryStatement: function tryStatement(block, handler, finalizer) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TryStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  tupleTypeAnnotation: function tupleTypeAnnotation(types) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TupleTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeAlias: function typeAlias(id, typeParameters, right) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeAlias.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeAnnotation: function typeAnnotation(_typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeCastExpression: function typeCastExpression(expression, typeAnnotation) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeCastExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeParameter: function typeParameter(bound) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeParameter.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeParameterDeclaration: function typeParameterDeclaration(params) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeParameterDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeParameterInstantiation: function typeParameterInstantiation(params) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeParameterInstantiation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  typeofTypeAnnotation: function typeofTypeAnnotation(argument) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.TypeofTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  unaryExpression: function unaryExpression(operator, argument, prefix) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.UnaryExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  unionTypeAnnotation: function unionTypeAnnotation(types) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.UnionTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  updateExpression: function updateExpression(operator, argument, prefix) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.UpdateExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  variableDeclaration: function variableDeclaration(kind, declarations) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.VariableDeclaration.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  variableDeclarator: function variableDeclarator(id, init) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.VariableDeclarator.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  voidTypeAnnotation: function voidTypeAnnotation() {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.VoidTypeAnnotation.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  whileStatement: function whileStatement(test, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.WhileStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  withStatement: function withStatement(object, body) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.WithStatement.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  yieldExpression: function yieldExpression(argument, delegate) {
    var args = [].slice.call(arguments);
    var loc = args[args.length - 1];
    var hasLoc = loc && (typeof loc === 'undefined' ? 'undefined' : (0, _typeof3.default)(loc)) === 'object' && (0, _typeof3.default)(loc.start) === 'object' && (0, _typeof3.default)(loc.end) === 'object';
    if (hasLoc) {
      args.pop();
    }
    return (0, _extends4.default)({}, t.YieldExpression.apply(t, args), { loc: hasLoc ? loc : getCurrentLocation() });
  },
  isAnyTypeAnnotation: function isAnyTypeAnnotation(value, opts) {
    return t.isAnyTypeAnnotation.apply(t, arguments);
  },
  isArrayExpression: function isArrayExpression(value, opts) {
    return t.isArrayExpression.apply(t, arguments);
  },
  isArrayPattern: function isArrayPattern(value, opts) {
    return t.isArrayPattern.apply(t, arguments);
  },
  isArrayTypeAnnotation: function isArrayTypeAnnotation(value, opts) {
    return t.isArrayTypeAnnotation.apply(t, arguments);
  },
  isArrowFunctionExpression: function isArrowFunctionExpression(value, opts) {
    return t.isArrowFunctionExpression.apply(t, arguments);
  },
  isAssignmentExpression: function isAssignmentExpression(value, opts) {
    return t.isAssignmentExpression.apply(t, arguments);
  },
  isAssignmentPattern: function isAssignmentPattern(value, opts) {
    return t.isAssignmentPattern.apply(t, arguments);
  },
  isAwaitExpression: function isAwaitExpression(value, opts) {
    return t.isAwaitExpression.apply(t, arguments);
  },
  isBinaryExpression: function isBinaryExpression(value, opts) {
    return t.isBinaryExpression.apply(t, arguments);
  },
  isBindExpression: function isBindExpression(value, opts) {
    return t.isBindExpression.apply(t, arguments);
  },
  isBlockStatement: function isBlockStatement(value, opts) {
    return t.isBlockStatement.apply(t, arguments);
  },
  isBooleanLiteral: function isBooleanLiteral(value, opts) {
    return t.isBooleanLiteral.apply(t, arguments);
  },
  isBooleanLiteralTypeAnnotation: function isBooleanLiteralTypeAnnotation(value, opts) {
    return t.isBooleanLiteralTypeAnnotation.apply(t, arguments);
  },
  isBooleanTypeAnnotation: function isBooleanTypeAnnotation(value, opts) {
    return t.isBooleanTypeAnnotation.apply(t, arguments);
  },
  isBreakStatement: function isBreakStatement(value, opts) {
    return t.isBreakStatement.apply(t, arguments);
  },
  isCallExpression: function isCallExpression(value, opts) {
    return t.isCallExpression.apply(t, arguments);
  },
  isCatchClause: function isCatchClause(value, opts) {
    return t.isCatchClause.apply(t, arguments);
  },
  isClassBody: function isClassBody(value, opts) {
    return t.isClassBody.apply(t, arguments);
  },
  isClassDeclaration: function isClassDeclaration(value, opts) {
    return t.isClassDeclaration.apply(t, arguments);
  },
  isClassExpression: function isClassExpression(value, opts) {
    return t.isClassExpression.apply(t, arguments);
  },
  isClassImplements: function isClassImplements(value, opts) {
    return t.isClassImplements.apply(t, arguments);
  },
  isClassMethod: function isClassMethod(value, opts) {
    return t.isClassMethod.apply(t, arguments);
  },
  isClassProperty: function isClassProperty(value, opts) {
    return t.isClassProperty.apply(t, arguments);
  },
  isConditionalExpression: function isConditionalExpression(value, opts) {
    return t.isConditionalExpression.apply(t, arguments);
  },
  isContinueStatement: function isContinueStatement(value, opts) {
    return t.isContinueStatement.apply(t, arguments);
  },
  isDebuggerStatement: function isDebuggerStatement(value, opts) {
    return t.isDebuggerStatement.apply(t, arguments);
  },
  isDeclareClass: function isDeclareClass(value, opts) {
    return t.isDeclareClass.apply(t, arguments);
  },
  isDeclareExportDeclaration: function isDeclareExportDeclaration(value, opts) {
    return t.isDeclareExportDeclaration.apply(t, arguments);
  },
  isDeclareFunction: function isDeclareFunction(value, opts) {
    return t.isDeclareFunction.apply(t, arguments);
  },
  isDeclareInterface: function isDeclareInterface(value, opts) {
    return t.isDeclareInterface.apply(t, arguments);
  },
  isDeclareModule: function isDeclareModule(value, opts) {
    return t.isDeclareModule.apply(t, arguments);
  },
  isDeclareModuleExports: function isDeclareModuleExports(value, opts) {
    return t.isDeclareModuleExports.apply(t, arguments);
  },
  isDeclareOpaqueType: function isDeclareOpaqueType(value, opts) {
    return t.isDeclareOpaqueType.apply(t, arguments);
  },
  isDeclareTypeAlias: function isDeclareTypeAlias(value, opts) {
    return t.isDeclareTypeAlias.apply(t, arguments);
  },
  isDeclareVariable: function isDeclareVariable(value, opts) {
    return t.isDeclareVariable.apply(t, arguments);
  },
  isDecorator: function isDecorator(value, opts) {
    return t.isDecorator.apply(t, arguments);
  },
  isDirective: function isDirective(value, opts) {
    return t.isDirective.apply(t, arguments);
  },
  isDirectiveLiteral: function isDirectiveLiteral(value, opts) {
    return t.isDirectiveLiteral.apply(t, arguments);
  },
  isDoExpression: function isDoExpression(value, opts) {
    return t.isDoExpression.apply(t, arguments);
  },
  isDoWhileStatement: function isDoWhileStatement(value, opts) {
    return t.isDoWhileStatement.apply(t, arguments);
  },
  isEmptyStatement: function isEmptyStatement(value, opts) {
    return t.isEmptyStatement.apply(t, arguments);
  },
  isEmptyTypeAnnotation: function isEmptyTypeAnnotation(value, opts) {
    return t.isEmptyTypeAnnotation.apply(t, arguments);
  },
  isExistentialTypeParam: function isExistentialTypeParam(value, opts) {
    return t.isExistentialTypeParam.apply(t, arguments);
  },
  isExportAllDeclaration: function isExportAllDeclaration(value, opts) {
    return t.isExportAllDeclaration.apply(t, arguments);
  },
  isExportDefaultDeclaration: function isExportDefaultDeclaration(value, opts) {
    return t.isExportDefaultDeclaration.apply(t, arguments);
  },
  isExportDefaultSpecifier: function isExportDefaultSpecifier(value, opts) {
    return t.isExportDefaultSpecifier.apply(t, arguments);
  },
  isExportNamedDeclaration: function isExportNamedDeclaration(value, opts) {
    return t.isExportNamedDeclaration.apply(t, arguments);
  },
  isExportNamespaceSpecifier: function isExportNamespaceSpecifier(value, opts) {
    return t.isExportNamespaceSpecifier.apply(t, arguments);
  },
  isExportSpecifier: function isExportSpecifier(value, opts) {
    return t.isExportSpecifier.apply(t, arguments);
  },
  isExpressionStatement: function isExpressionStatement(value, opts) {
    return t.isExpressionStatement.apply(t, arguments);
  },
  isFile: function isFile(value, opts) {
    return t.isFile.apply(t, arguments);
  },
  isForAwaitStatement: function isForAwaitStatement(value, opts) {
    return t.isForAwaitStatement.apply(t, arguments);
  },
  isForInStatement: function isForInStatement(value, opts) {
    return t.isForInStatement.apply(t, arguments);
  },
  isForOfStatement: function isForOfStatement(value, opts) {
    return t.isForOfStatement.apply(t, arguments);
  },
  isForStatement: function isForStatement(value, opts) {
    return t.isForStatement.apply(t, arguments);
  },
  isFunctionDeclaration: function isFunctionDeclaration(value, opts) {
    return t.isFunctionDeclaration.apply(t, arguments);
  },
  isFunctionExpression: function isFunctionExpression(value, opts) {
    return t.isFunctionExpression.apply(t, arguments);
  },
  isFunctionTypeAnnotation: function isFunctionTypeAnnotation(value, opts) {
    return t.isFunctionTypeAnnotation.apply(t, arguments);
  },
  isFunctionTypeParam: function isFunctionTypeParam(value, opts) {
    return t.isFunctionTypeParam.apply(t, arguments);
  },
  isGenericTypeAnnotation: function isGenericTypeAnnotation(value, opts) {
    return t.isGenericTypeAnnotation.apply(t, arguments);
  },
  isIdentifier: function isIdentifier(value, opts) {
    return t.isIdentifier.apply(t, arguments);
  },
  isIfStatement: function isIfStatement(value, opts) {
    return t.isIfStatement.apply(t, arguments);
  },
  isImport: function isImport(value, opts) {
    return t.isImport.apply(t, arguments);
  },
  isImportDeclaration: function isImportDeclaration(value, opts) {
    return t.isImportDeclaration.apply(t, arguments);
  },
  isImportDefaultSpecifier: function isImportDefaultSpecifier(value, opts) {
    return t.isImportDefaultSpecifier.apply(t, arguments);
  },
  isImportNamespaceSpecifier: function isImportNamespaceSpecifier(value, opts) {
    return t.isImportNamespaceSpecifier.apply(t, arguments);
  },
  isImportSpecifier: function isImportSpecifier(value, opts) {
    return t.isImportSpecifier.apply(t, arguments);
  },
  isInterfaceDeclaration: function isInterfaceDeclaration(value, opts) {
    return t.isInterfaceDeclaration.apply(t, arguments);
  },
  isInterfaceExtends: function isInterfaceExtends(value, opts) {
    return t.isInterfaceExtends.apply(t, arguments);
  },
  isIntersectionTypeAnnotation: function isIntersectionTypeAnnotation(value, opts) {
    return t.isIntersectionTypeAnnotation.apply(t, arguments);
  },
  isJSXAttribute: function isJSXAttribute(value, opts) {
    return t.isJSXAttribute.apply(t, arguments);
  },
  isJSXClosingElement: function isJSXClosingElement(value, opts) {
    return t.isJSXClosingElement.apply(t, arguments);
  },
  isJSXElement: function isJSXElement(value, opts) {
    return t.isJSXElement.apply(t, arguments);
  },
  isJSXEmptyExpression: function isJSXEmptyExpression(value, opts) {
    return t.isJSXEmptyExpression.apply(t, arguments);
  },
  isJSXExpressionContainer: function isJSXExpressionContainer(value, opts) {
    return t.isJSXExpressionContainer.apply(t, arguments);
  },
  isJSXIdentifier: function isJSXIdentifier(value, opts) {
    return t.isJSXIdentifier.apply(t, arguments);
  },
  isJSXMemberExpression: function isJSXMemberExpression(value, opts) {
    return t.isJSXMemberExpression.apply(t, arguments);
  },
  isJSXNamespacedName: function isJSXNamespacedName(value, opts) {
    return t.isJSXNamespacedName.apply(t, arguments);
  },
  isJSXOpeningElement: function isJSXOpeningElement(value, opts) {
    return t.isJSXOpeningElement.apply(t, arguments);
  },
  isJSXSpreadAttribute: function isJSXSpreadAttribute(value, opts) {
    return t.isJSXSpreadAttribute.apply(t, arguments);
  },
  isJSXSpreadChild: function isJSXSpreadChild(value, opts) {
    return t.isJSXSpreadChild.apply(t, arguments);
  },
  isJSXText: function isJSXText(value, opts) {
    return t.isJSXText.apply(t, arguments);
  },
  isLabeledStatement: function isLabeledStatement(value, opts) {
    return t.isLabeledStatement.apply(t, arguments);
  },
  isLogicalExpression: function isLogicalExpression(value, opts) {
    return t.isLogicalExpression.apply(t, arguments);
  },
  isMemberExpression: function isMemberExpression(value, opts) {
    return t.isMemberExpression.apply(t, arguments);
  },
  isMetaProperty: function isMetaProperty(value, opts) {
    return t.isMetaProperty.apply(t, arguments);
  },
  isMixedTypeAnnotation: function isMixedTypeAnnotation(value, opts) {
    return t.isMixedTypeAnnotation.apply(t, arguments);
  },
  isNewExpression: function isNewExpression(value, opts) {
    return t.isNewExpression.apply(t, arguments);
  },
  isNoop: function isNoop(value, opts) {
    return t.isNoop.apply(t, arguments);
  },
  isNullLiteral: function isNullLiteral(value, opts) {
    return t.isNullLiteral.apply(t, arguments);
  },
  isNullLiteralTypeAnnotation: function isNullLiteralTypeAnnotation(value, opts) {
    return t.isNullLiteralTypeAnnotation.apply(t, arguments);
  },
  isNullableTypeAnnotation: function isNullableTypeAnnotation(value, opts) {
    return t.isNullableTypeAnnotation.apply(t, arguments);
  },
  isNumberTypeAnnotation: function isNumberTypeAnnotation(value, opts) {
    return t.isNumberTypeAnnotation.apply(t, arguments);
  },
  isNumericLiteral: function isNumericLiteral(value, opts) {
    return t.isNumericLiteral.apply(t, arguments);
  },
  isNumericLiteralTypeAnnotation: function isNumericLiteralTypeAnnotation(value, opts) {
    return t.isNumericLiteralTypeAnnotation.apply(t, arguments);
  },
  isObjectExpression: function isObjectExpression(value, opts) {
    return t.isObjectExpression.apply(t, arguments);
  },
  isObjectMethod: function isObjectMethod(value, opts) {
    return t.isObjectMethod.apply(t, arguments);
  },
  isObjectPattern: function isObjectPattern(value, opts) {
    return t.isObjectPattern.apply(t, arguments);
  },
  isObjectProperty: function isObjectProperty(value, opts) {
    return t.isObjectProperty.apply(t, arguments);
  },
  isObjectTypeAnnotation: function isObjectTypeAnnotation(value, opts) {
    return t.isObjectTypeAnnotation.apply(t, arguments);
  },
  isObjectTypeCallProperty: function isObjectTypeCallProperty(value, opts) {
    return t.isObjectTypeCallProperty.apply(t, arguments);
  },
  isObjectTypeIndexer: function isObjectTypeIndexer(value, opts) {
    return t.isObjectTypeIndexer.apply(t, arguments);
  },
  isObjectTypeProperty: function isObjectTypeProperty(value, opts) {
    return t.isObjectTypeProperty.apply(t, arguments);
  },
  isObjectTypeSpreadProperty: function isObjectTypeSpreadProperty(value, opts) {
    return t.isObjectTypeSpreadProperty.apply(t, arguments);
  },
  isOpaqueType: function isOpaqueType(value, opts) {
    return t.isOpaqueType.apply(t, arguments);
  },
  isParenthesizedExpression: function isParenthesizedExpression(value, opts) {
    return t.isParenthesizedExpression.apply(t, arguments);
  },
  isProgram: function isProgram(value, opts) {
    return t.isProgram.apply(t, arguments);
  },
  isQualifiedTypeIdentifier: function isQualifiedTypeIdentifier(value, opts) {
    return t.isQualifiedTypeIdentifier.apply(t, arguments);
  },
  isRegExpLiteral: function isRegExpLiteral(value, opts) {
    return t.isRegExpLiteral.apply(t, arguments);
  },
  isRestElement: function isRestElement(value, opts) {
    return t.isRestElement.apply(t, arguments);
  },
  isRestProperty: function isRestProperty(value, opts) {
    return t.isRestProperty.apply(t, arguments);
  },
  isReturnStatement: function isReturnStatement(value, opts) {
    return t.isReturnStatement.apply(t, arguments);
  },
  isSequenceExpression: function isSequenceExpression(value, opts) {
    return t.isSequenceExpression.apply(t, arguments);
  },
  isSpreadElement: function isSpreadElement(value, opts) {
    return t.isSpreadElement.apply(t, arguments);
  },
  isSpreadProperty: function isSpreadProperty(value, opts) {
    return t.isSpreadProperty.apply(t, arguments);
  },
  isStringLiteral: function isStringLiteral(value, opts) {
    return t.isStringLiteral.apply(t, arguments);
  },
  isStringLiteralTypeAnnotation: function isStringLiteralTypeAnnotation(value, opts) {
    return t.isStringLiteralTypeAnnotation.apply(t, arguments);
  },
  isStringTypeAnnotation: function isStringTypeAnnotation(value, opts) {
    return t.isStringTypeAnnotation.apply(t, arguments);
  },
  isSuper: function isSuper(value, opts) {
    return t.isSuper.apply(t, arguments);
  },
  isSwitchCase: function isSwitchCase(value, opts) {
    return t.isSwitchCase.apply(t, arguments);
  },
  isSwitchStatement: function isSwitchStatement(value, opts) {
    return t.isSwitchStatement.apply(t, arguments);
  },
  isTaggedTemplateExpression: function isTaggedTemplateExpression(value, opts) {
    return t.isTaggedTemplateExpression.apply(t, arguments);
  },
  isTemplateElement: function isTemplateElement(value, opts) {
    return t.isTemplateElement.apply(t, arguments);
  },
  isTemplateLiteral: function isTemplateLiteral(value, opts) {
    return t.isTemplateLiteral.apply(t, arguments);
  },
  isThisExpression: function isThisExpression(value, opts) {
    return t.isThisExpression.apply(t, arguments);
  },
  isThisTypeAnnotation: function isThisTypeAnnotation(value, opts) {
    return t.isThisTypeAnnotation.apply(t, arguments);
  },
  isThrowStatement: function isThrowStatement(value, opts) {
    return t.isThrowStatement.apply(t, arguments);
  },
  isTryStatement: function isTryStatement(value, opts) {
    return t.isTryStatement.apply(t, arguments);
  },
  isTupleTypeAnnotation: function isTupleTypeAnnotation(value, opts) {
    return t.isTupleTypeAnnotation.apply(t, arguments);
  },
  isTypeAlias: function isTypeAlias(value, opts) {
    return t.isTypeAlias.apply(t, arguments);
  },
  isTypeAnnotation: function isTypeAnnotation(value, opts) {
    return t.isTypeAnnotation.apply(t, arguments);
  },
  isTypeCastExpression: function isTypeCastExpression(value, opts) {
    return t.isTypeCastExpression.apply(t, arguments);
  },
  isTypeParameter: function isTypeParameter(value, opts) {
    return t.isTypeParameter.apply(t, arguments);
  },
  isTypeParameterDeclaration: function isTypeParameterDeclaration(value, opts) {
    return t.isTypeParameterDeclaration.apply(t, arguments);
  },
  isTypeParameterInstantiation: function isTypeParameterInstantiation(value, opts) {
    return t.isTypeParameterInstantiation.apply(t, arguments);
  },
  isTypeofTypeAnnotation: function isTypeofTypeAnnotation(value, opts) {
    return t.isTypeofTypeAnnotation.apply(t, arguments);
  },
  isUnaryExpression: function isUnaryExpression(value, opts) {
    return t.isUnaryExpression.apply(t, arguments);
  },
  isUnionTypeAnnotation: function isUnionTypeAnnotation(value, opts) {
    return t.isUnionTypeAnnotation.apply(t, arguments);
  },
  isUpdateExpression: function isUpdateExpression(value, opts) {
    return t.isUpdateExpression.apply(t, arguments);
  },
  isVariableDeclaration: function isVariableDeclaration(value, opts) {
    return t.isVariableDeclaration.apply(t, arguments);
  },
  isVariableDeclarator: function isVariableDeclarator(value, opts) {
    return t.isVariableDeclarator.apply(t, arguments);
  },
  isVoidTypeAnnotation: function isVoidTypeAnnotation(value, opts) {
    return t.isVoidTypeAnnotation.apply(t, arguments);
  },
  isWhileStatement: function isWhileStatement(value, opts) {
    return t.isWhileStatement.apply(t, arguments);
  },
  isWithStatement: function isWithStatement(value, opts) {
    return t.isWithStatement.apply(t, arguments);
  },
  isYieldExpression: function isYieldExpression(value, opts) {
    return t.isYieldExpression.apply(t, arguments);
  },
  assertAnyTypeAnnotation: function assertAnyTypeAnnotation(value, opts) {
    return t.assertAnyTypeAnnotation.apply(t, arguments);
  },
  assertArrayExpression: function assertArrayExpression(value, opts) {
    return t.assertArrayExpression.apply(t, arguments);
  },
  assertArrayPattern: function assertArrayPattern(value, opts) {
    return t.assertArrayPattern.apply(t, arguments);
  },
  assertArrayTypeAnnotation: function assertArrayTypeAnnotation(value, opts) {
    return t.assertArrayTypeAnnotation.apply(t, arguments);
  },
  assertArrowFunctionExpression: function assertArrowFunctionExpression(value, opts) {
    return t.assertArrowFunctionExpression.apply(t, arguments);
  },
  assertAssignmentExpression: function assertAssignmentExpression(value, opts) {
    return t.assertAssignmentExpression.apply(t, arguments);
  },
  assertAssignmentPattern: function assertAssignmentPattern(value, opts) {
    return t.assertAssignmentPattern.apply(t, arguments);
  },
  assertAwaitExpression: function assertAwaitExpression(value, opts) {
    return t.assertAwaitExpression.apply(t, arguments);
  },
  assertBinaryExpression: function assertBinaryExpression(value, opts) {
    return t.assertBinaryExpression.apply(t, arguments);
  },
  assertBindExpression: function assertBindExpression(value, opts) {
    return t.assertBindExpression.apply(t, arguments);
  },
  assertBlockStatement: function assertBlockStatement(value, opts) {
    return t.assertBlockStatement.apply(t, arguments);
  },
  assertBooleanLiteral: function assertBooleanLiteral(value, opts) {
    return t.assertBooleanLiteral.apply(t, arguments);
  },
  assertBooleanLiteralTypeAnnotation: function assertBooleanLiteralTypeAnnotation(value, opts) {
    return t.assertBooleanLiteralTypeAnnotation.apply(t, arguments);
  },
  assertBooleanTypeAnnotation: function assertBooleanTypeAnnotation(value, opts) {
    return t.assertBooleanTypeAnnotation.apply(t, arguments);
  },
  assertBreakStatement: function assertBreakStatement(value, opts) {
    return t.assertBreakStatement.apply(t, arguments);
  },
  assertCallExpression: function assertCallExpression(value, opts) {
    return t.assertCallExpression.apply(t, arguments);
  },
  assertCatchClause: function assertCatchClause(value, opts) {
    return t.assertCatchClause.apply(t, arguments);
  },
  assertClassBody: function assertClassBody(value, opts) {
    return t.assertClassBody.apply(t, arguments);
  },
  assertClassDeclaration: function assertClassDeclaration(value, opts) {
    return t.assertClassDeclaration.apply(t, arguments);
  },
  assertClassExpression: function assertClassExpression(value, opts) {
    return t.assertClassExpression.apply(t, arguments);
  },
  assertClassImplements: function assertClassImplements(value, opts) {
    return t.assertClassImplements.apply(t, arguments);
  },
  assertClassMethod: function assertClassMethod(value, opts) {
    return t.assertClassMethod.apply(t, arguments);
  },
  assertClassProperty: function assertClassProperty(value, opts) {
    return t.assertClassProperty.apply(t, arguments);
  },
  assertConditionalExpression: function assertConditionalExpression(value, opts) {
    return t.assertConditionalExpression.apply(t, arguments);
  },
  assertContinueStatement: function assertContinueStatement(value, opts) {
    return t.assertContinueStatement.apply(t, arguments);
  },
  assertDebuggerStatement: function assertDebuggerStatement(value, opts) {
    return t.assertDebuggerStatement.apply(t, arguments);
  },
  assertDeclareClass: function assertDeclareClass(value, opts) {
    return t.assertDeclareClass.apply(t, arguments);
  },
  assertDeclareExportDeclaration: function assertDeclareExportDeclaration(value, opts) {
    return t.assertDeclareExportDeclaration.apply(t, arguments);
  },
  assertDeclareFunction: function assertDeclareFunction(value, opts) {
    return t.assertDeclareFunction.apply(t, arguments);
  },
  assertDeclareInterface: function assertDeclareInterface(value, opts) {
    return t.assertDeclareInterface.apply(t, arguments);
  },
  assertDeclareModule: function assertDeclareModule(value, opts) {
    return t.assertDeclareModule.apply(t, arguments);
  },
  assertDeclareModuleExports: function assertDeclareModuleExports(value, opts) {
    return t.assertDeclareModuleExports.apply(t, arguments);
  },
  assertDeclareOpaqueType: function assertDeclareOpaqueType(value, opts) {
    return t.assertDeclareOpaqueType.apply(t, arguments);
  },
  assertDeclareTypeAlias: function assertDeclareTypeAlias(value, opts) {
    return t.assertDeclareTypeAlias.apply(t, arguments);
  },
  assertDeclareVariable: function assertDeclareVariable(value, opts) {
    return t.assertDeclareVariable.apply(t, arguments);
  },
  assertDecorator: function assertDecorator(value, opts) {
    return t.assertDecorator.apply(t, arguments);
  },
  assertDirective: function assertDirective(value, opts) {
    return t.assertDirective.apply(t, arguments);
  },
  assertDirectiveLiteral: function assertDirectiveLiteral(value, opts) {
    return t.assertDirectiveLiteral.apply(t, arguments);
  },
  assertDoExpression: function assertDoExpression(value, opts) {
    return t.assertDoExpression.apply(t, arguments);
  },
  assertDoWhileStatement: function assertDoWhileStatement(value, opts) {
    return t.assertDoWhileStatement.apply(t, arguments);
  },
  assertEmptyStatement: function assertEmptyStatement(value, opts) {
    return t.assertEmptyStatement.apply(t, arguments);
  },
  assertEmptyTypeAnnotation: function assertEmptyTypeAnnotation(value, opts) {
    return t.assertEmptyTypeAnnotation.apply(t, arguments);
  },
  assertExistentialTypeParam: function assertExistentialTypeParam(value, opts) {
    return t.assertExistentialTypeParam.apply(t, arguments);
  },
  assertExportAllDeclaration: function assertExportAllDeclaration(value, opts) {
    return t.assertExportAllDeclaration.apply(t, arguments);
  },
  assertExportDefaultDeclaration: function assertExportDefaultDeclaration(value, opts) {
    return t.assertExportDefaultDeclaration.apply(t, arguments);
  },
  assertExportDefaultSpecifier: function assertExportDefaultSpecifier(value, opts) {
    return t.assertExportDefaultSpecifier.apply(t, arguments);
  },
  assertExportNamedDeclaration: function assertExportNamedDeclaration(value, opts) {
    return t.assertExportNamedDeclaration.apply(t, arguments);
  },
  assertExportNamespaceSpecifier: function assertExportNamespaceSpecifier(value, opts) {
    return t.assertExportNamespaceSpecifier.apply(t, arguments);
  },
  assertExportSpecifier: function assertExportSpecifier(value, opts) {
    return t.assertExportSpecifier.apply(t, arguments);
  },
  assertExpressionStatement: function assertExpressionStatement(value, opts) {
    return t.assertExpressionStatement.apply(t, arguments);
  },
  assertFile: function assertFile(value, opts) {
    return t.assertFile.apply(t, arguments);
  },
  assertForAwaitStatement: function assertForAwaitStatement(value, opts) {
    return t.assertForAwaitStatement.apply(t, arguments);
  },
  assertForInStatement: function assertForInStatement(value, opts) {
    return t.assertForInStatement.apply(t, arguments);
  },
  assertForOfStatement: function assertForOfStatement(value, opts) {
    return t.assertForOfStatement.apply(t, arguments);
  },
  assertForStatement: function assertForStatement(value, opts) {
    return t.assertForStatement.apply(t, arguments);
  },
  assertFunctionDeclaration: function assertFunctionDeclaration(value, opts) {
    return t.assertFunctionDeclaration.apply(t, arguments);
  },
  assertFunctionExpression: function assertFunctionExpression(value, opts) {
    return t.assertFunctionExpression.apply(t, arguments);
  },
  assertFunctionTypeAnnotation: function assertFunctionTypeAnnotation(value, opts) {
    return t.assertFunctionTypeAnnotation.apply(t, arguments);
  },
  assertFunctionTypeParam: function assertFunctionTypeParam(value, opts) {
    return t.assertFunctionTypeParam.apply(t, arguments);
  },
  assertGenericTypeAnnotation: function assertGenericTypeAnnotation(value, opts) {
    return t.assertGenericTypeAnnotation.apply(t, arguments);
  },
  assertIdentifier: function assertIdentifier(value, opts) {
    return t.assertIdentifier.apply(t, arguments);
  },
  assertIfStatement: function assertIfStatement(value, opts) {
    return t.assertIfStatement.apply(t, arguments);
  },
  assertImport: function assertImport(value, opts) {
    return t.assertImport.apply(t, arguments);
  },
  assertImportDeclaration: function assertImportDeclaration(value, opts) {
    return t.assertImportDeclaration.apply(t, arguments);
  },
  assertImportDefaultSpecifier: function assertImportDefaultSpecifier(value, opts) {
    return t.assertImportDefaultSpecifier.apply(t, arguments);
  },
  assertImportNamespaceSpecifier: function assertImportNamespaceSpecifier(value, opts) {
    return t.assertImportNamespaceSpecifier.apply(t, arguments);
  },
  assertImportSpecifier: function assertImportSpecifier(value, opts) {
    return t.assertImportSpecifier.apply(t, arguments);
  },
  assertInterfaceDeclaration: function assertInterfaceDeclaration(value, opts) {
    return t.assertInterfaceDeclaration.apply(t, arguments);
  },
  assertInterfaceExtends: function assertInterfaceExtends(value, opts) {
    return t.assertInterfaceExtends.apply(t, arguments);
  },
  assertIntersectionTypeAnnotation: function assertIntersectionTypeAnnotation(value, opts) {
    return t.assertIntersectionTypeAnnotation.apply(t, arguments);
  },
  assertJSXAttribute: function assertJSXAttribute(value, opts) {
    return t.assertJSXAttribute.apply(t, arguments);
  },
  assertJSXClosingElement: function assertJSXClosingElement(value, opts) {
    return t.assertJSXClosingElement.apply(t, arguments);
  },
  assertJSXElement: function assertJSXElement(value, opts) {
    return t.assertJSXElement.apply(t, arguments);
  },
  assertJSXEmptyExpression: function assertJSXEmptyExpression(value, opts) {
    return t.assertJSXEmptyExpression.apply(t, arguments);
  },
  assertJSXExpressionContainer: function assertJSXExpressionContainer(value, opts) {
    return t.assertJSXExpressionContainer.apply(t, arguments);
  },
  assertJSXIdentifier: function assertJSXIdentifier(value, opts) {
    return t.assertJSXIdentifier.apply(t, arguments);
  },
  assertJSXMemberExpression: function assertJSXMemberExpression(value, opts) {
    return t.assertJSXMemberExpression.apply(t, arguments);
  },
  assertJSXNamespacedName: function assertJSXNamespacedName(value, opts) {
    return t.assertJSXNamespacedName.apply(t, arguments);
  },
  assertJSXOpeningElement: function assertJSXOpeningElement(value, opts) {
    return t.assertJSXOpeningElement.apply(t, arguments);
  },
  assertJSXSpreadAttribute: function assertJSXSpreadAttribute(value, opts) {
    return t.assertJSXSpreadAttribute.apply(t, arguments);
  },
  assertJSXSpreadChild: function assertJSXSpreadChild(value, opts) {
    return t.assertJSXSpreadChild.apply(t, arguments);
  },
  assertJSXText: function assertJSXText(value, opts) {
    return t.assertJSXText.apply(t, arguments);
  },
  assertLabeledStatement: function assertLabeledStatement(value, opts) {
    return t.assertLabeledStatement.apply(t, arguments);
  },
  assertLogicalExpression: function assertLogicalExpression(value, opts) {
    return t.assertLogicalExpression.apply(t, arguments);
  },
  assertMemberExpression: function assertMemberExpression(value, opts) {
    return t.assertMemberExpression.apply(t, arguments);
  },
  assertMetaProperty: function assertMetaProperty(value, opts) {
    return t.assertMetaProperty.apply(t, arguments);
  },
  assertMixedTypeAnnotation: function assertMixedTypeAnnotation(value, opts) {
    return t.assertMixedTypeAnnotation.apply(t, arguments);
  },
  assertNewExpression: function assertNewExpression(value, opts) {
    return t.assertNewExpression.apply(t, arguments);
  },
  assertNoop: function assertNoop(value, opts) {
    return t.assertNoop.apply(t, arguments);
  },
  assertNullLiteral: function assertNullLiteral(value, opts) {
    return t.assertNullLiteral.apply(t, arguments);
  },
  assertNullLiteralTypeAnnotation: function assertNullLiteralTypeAnnotation(value, opts) {
    return t.assertNullLiteralTypeAnnotation.apply(t, arguments);
  },
  assertNullableTypeAnnotation: function assertNullableTypeAnnotation(value, opts) {
    return t.assertNullableTypeAnnotation.apply(t, arguments);
  },
  assertNumberTypeAnnotation: function assertNumberTypeAnnotation(value, opts) {
    return t.assertNumberTypeAnnotation.apply(t, arguments);
  },
  assertNumericLiteral: function assertNumericLiteral(value, opts) {
    return t.assertNumericLiteral.apply(t, arguments);
  },
  assertNumericLiteralTypeAnnotation: function assertNumericLiteralTypeAnnotation(value, opts) {
    return t.assertNumericLiteralTypeAnnotation.apply(t, arguments);
  },
  assertObjectExpression: function assertObjectExpression(value, opts) {
    return t.assertObjectExpression.apply(t, arguments);
  },
  assertObjectMethod: function assertObjectMethod(value, opts) {
    return t.assertObjectMethod.apply(t, arguments);
  },
  assertObjectPattern: function assertObjectPattern(value, opts) {
    return t.assertObjectPattern.apply(t, arguments);
  },
  assertObjectProperty: function assertObjectProperty(value, opts) {
    return t.assertObjectProperty.apply(t, arguments);
  },
  assertObjectTypeAnnotation: function assertObjectTypeAnnotation(value, opts) {
    return t.assertObjectTypeAnnotation.apply(t, arguments);
  },
  assertObjectTypeCallProperty: function assertObjectTypeCallProperty(value, opts) {
    return t.assertObjectTypeCallProperty.apply(t, arguments);
  },
  assertObjectTypeIndexer: function assertObjectTypeIndexer(value, opts) {
    return t.assertObjectTypeIndexer.apply(t, arguments);
  },
  assertObjectTypeProperty: function assertObjectTypeProperty(value, opts) {
    return t.assertObjectTypeProperty.apply(t, arguments);
  },
  assertObjectTypeSpreadProperty: function assertObjectTypeSpreadProperty(value, opts) {
    return t.assertObjectTypeSpreadProperty.apply(t, arguments);
  },
  assertOpaqueType: function assertOpaqueType(value, opts) {
    return t.assertOpaqueType.apply(t, arguments);
  },
  assertParenthesizedExpression: function assertParenthesizedExpression(value, opts) {
    return t.assertParenthesizedExpression.apply(t, arguments);
  },
  assertProgram: function assertProgram(value, opts) {
    return t.assertProgram.apply(t, arguments);
  },
  assertQualifiedTypeIdentifier: function assertQualifiedTypeIdentifier(value, opts) {
    return t.assertQualifiedTypeIdentifier.apply(t, arguments);
  },
  assertRegExpLiteral: function assertRegExpLiteral(value, opts) {
    return t.assertRegExpLiteral.apply(t, arguments);
  },
  assertRestElement: function assertRestElement(value, opts) {
    return t.assertRestElement.apply(t, arguments);
  },
  assertRestProperty: function assertRestProperty(value, opts) {
    return t.assertRestProperty.apply(t, arguments);
  },
  assertReturnStatement: function assertReturnStatement(value, opts) {
    return t.assertReturnStatement.apply(t, arguments);
  },
  assertSequenceExpression: function assertSequenceExpression(value, opts) {
    return t.assertSequenceExpression.apply(t, arguments);
  },
  assertSpreadElement: function assertSpreadElement(value, opts) {
    return t.assertSpreadElement.apply(t, arguments);
  },
  assertSpreadProperty: function assertSpreadProperty(value, opts) {
    return t.assertSpreadProperty.apply(t, arguments);
  },
  assertStringLiteral: function assertStringLiteral(value, opts) {
    return t.assertStringLiteral.apply(t, arguments);
  },
  assertStringLiteralTypeAnnotation: function assertStringLiteralTypeAnnotation(value, opts) {
    return t.assertStringLiteralTypeAnnotation.apply(t, arguments);
  },
  assertStringTypeAnnotation: function assertStringTypeAnnotation(value, opts) {
    return t.assertStringTypeAnnotation.apply(t, arguments);
  },
  assertSuper: function assertSuper(value, opts) {
    return t.assertSuper.apply(t, arguments);
  },
  assertSwitchCase: function assertSwitchCase(value, opts) {
    return t.assertSwitchCase.apply(t, arguments);
  },
  assertSwitchStatement: function assertSwitchStatement(value, opts) {
    return t.assertSwitchStatement.apply(t, arguments);
  },
  assertTaggedTemplateExpression: function assertTaggedTemplateExpression(value, opts) {
    return t.assertTaggedTemplateExpression.apply(t, arguments);
  },
  assertTemplateElement: function assertTemplateElement(value, opts) {
    return t.assertTemplateElement.apply(t, arguments);
  },
  assertTemplateLiteral: function assertTemplateLiteral(value, opts) {
    return t.assertTemplateLiteral.apply(t, arguments);
  },
  assertThisExpression: function assertThisExpression(value, opts) {
    return t.assertThisExpression.apply(t, arguments);
  },
  assertThisTypeAnnotation: function assertThisTypeAnnotation(value, opts) {
    return t.assertThisTypeAnnotation.apply(t, arguments);
  },
  assertThrowStatement: function assertThrowStatement(value, opts) {
    return t.assertThrowStatement.apply(t, arguments);
  },
  assertTryStatement: function assertTryStatement(value, opts) {
    return t.assertTryStatement.apply(t, arguments);
  },
  assertTupleTypeAnnotation: function assertTupleTypeAnnotation(value, opts) {
    return t.assertTupleTypeAnnotation.apply(t, arguments);
  },
  assertTypeAlias: function assertTypeAlias(value, opts) {
    return t.assertTypeAlias.apply(t, arguments);
  },
  assertTypeAnnotation: function assertTypeAnnotation(value, opts) {
    return t.assertTypeAnnotation.apply(t, arguments);
  },
  assertTypeCastExpression: function assertTypeCastExpression(value, opts) {
    return t.assertTypeCastExpression.apply(t, arguments);
  },
  assertTypeParameter: function assertTypeParameter(value, opts) {
    return t.assertTypeParameter.apply(t, arguments);
  },
  assertTypeParameterDeclaration: function assertTypeParameterDeclaration(value, opts) {
    return t.assertTypeParameterDeclaration.apply(t, arguments);
  },
  assertTypeParameterInstantiation: function assertTypeParameterInstantiation(value, opts) {
    return t.assertTypeParameterInstantiation.apply(t, arguments);
  },
  assertTypeofTypeAnnotation: function assertTypeofTypeAnnotation(value, opts) {
    return t.assertTypeofTypeAnnotation.apply(t, arguments);
  },
  assertUnaryExpression: function assertUnaryExpression(value, opts) {
    return t.assertUnaryExpression.apply(t, arguments);
  },
  assertUnionTypeAnnotation: function assertUnionTypeAnnotation(value, opts) {
    return t.assertUnionTypeAnnotation.apply(t, arguments);
  },
  assertUpdateExpression: function assertUpdateExpression(value, opts) {
    return t.assertUpdateExpression.apply(t, arguments);
  },
  assertVariableDeclaration: function assertVariableDeclaration(value, opts) {
    return t.assertVariableDeclaration.apply(t, arguments);
  },
  assertVariableDeclarator: function assertVariableDeclarator(value, opts) {
    return t.assertVariableDeclarator.apply(t, arguments);
  },
  assertVoidTypeAnnotation: function assertVoidTypeAnnotation(value, opts) {
    return t.assertVoidTypeAnnotation.apply(t, arguments);
  },
  assertWhileStatement: function assertWhileStatement(value, opts) {
    return t.assertWhileStatement.apply(t, arguments);
  },
  assertWithStatement: function assertWithStatement(value, opts) {
    return t.assertWithStatement.apply(t, arguments);
  },
  assertYieldExpression: function assertYieldExpression(value, opts) {
    return t.assertYieldExpression.apply(t, arguments);
  },
  asAnyTypeAnnotation: function asAnyTypeAnnotation(value, opts) {
    return t.isAnyTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asArrayExpression: function asArrayExpression(value, opts) {
    return t.isArrayExpression.apply(t, arguments) ? value : undefined;
  },
  asArrayPattern: function asArrayPattern(value, opts) {
    return t.isArrayPattern.apply(t, arguments) ? value : undefined;
  },
  asArrayTypeAnnotation: function asArrayTypeAnnotation(value, opts) {
    return t.isArrayTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asArrowFunctionExpression: function asArrowFunctionExpression(value, opts) {
    return t.isArrowFunctionExpression.apply(t, arguments) ? value : undefined;
  },
  asAssignmentExpression: function asAssignmentExpression(value, opts) {
    return t.isAssignmentExpression.apply(t, arguments) ? value : undefined;
  },
  asAssignmentPattern: function asAssignmentPattern(value, opts) {
    return t.isAssignmentPattern.apply(t, arguments) ? value : undefined;
  },
  asAwaitExpression: function asAwaitExpression(value, opts) {
    return t.isAwaitExpression.apply(t, arguments) ? value : undefined;
  },
  asBinaryExpression: function asBinaryExpression(value, opts) {
    return t.isBinaryExpression.apply(t, arguments) ? value : undefined;
  },
  asBindExpression: function asBindExpression(value, opts) {
    return t.isBindExpression.apply(t, arguments) ? value : undefined;
  },
  asBlockStatement: function asBlockStatement(value, opts) {
    return t.isBlockStatement.apply(t, arguments) ? value : undefined;
  },
  asBooleanLiteral: function asBooleanLiteral(value, opts) {
    return t.isBooleanLiteral.apply(t, arguments) ? value : undefined;
  },
  asBooleanLiteralTypeAnnotation: function asBooleanLiteralTypeAnnotation(value, opts) {
    return t.isBooleanLiteralTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asBooleanTypeAnnotation: function asBooleanTypeAnnotation(value, opts) {
    return t.isBooleanTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asBreakStatement: function asBreakStatement(value, opts) {
    return t.isBreakStatement.apply(t, arguments) ? value : undefined;
  },
  asCallExpression: function asCallExpression(value, opts) {
    return t.isCallExpression.apply(t, arguments) ? value : undefined;
  },
  asCatchClause: function asCatchClause(value, opts) {
    return t.isCatchClause.apply(t, arguments) ? value : undefined;
  },
  asClassBody: function asClassBody(value, opts) {
    return t.isClassBody.apply(t, arguments) ? value : undefined;
  },
  asClassDeclaration: function asClassDeclaration(value, opts) {
    return t.isClassDeclaration.apply(t, arguments) ? value : undefined;
  },
  asClassExpression: function asClassExpression(value, opts) {
    return t.isClassExpression.apply(t, arguments) ? value : undefined;
  },
  asClassImplements: function asClassImplements(value, opts) {
    return t.isClassImplements.apply(t, arguments) ? value : undefined;
  },
  asClassMethod: function asClassMethod(value, opts) {
    return t.isClassMethod.apply(t, arguments) ? value : undefined;
  },
  asClassProperty: function asClassProperty(value, opts) {
    return t.isClassProperty.apply(t, arguments) ? value : undefined;
  },
  asConditionalExpression: function asConditionalExpression(value, opts) {
    return t.isConditionalExpression.apply(t, arguments) ? value : undefined;
  },
  asContinueStatement: function asContinueStatement(value, opts) {
    return t.isContinueStatement.apply(t, arguments) ? value : undefined;
  },
  asDebuggerStatement: function asDebuggerStatement(value, opts) {
    return t.isDebuggerStatement.apply(t, arguments) ? value : undefined;
  },
  asDeclareClass: function asDeclareClass(value, opts) {
    return t.isDeclareClass.apply(t, arguments) ? value : undefined;
  },
  asDeclareExportDeclaration: function asDeclareExportDeclaration(value, opts) {
    return t.isDeclareExportDeclaration.apply(t, arguments) ? value : undefined;
  },
  asDeclareFunction: function asDeclareFunction(value, opts) {
    return t.isDeclareFunction.apply(t, arguments) ? value : undefined;
  },
  asDeclareInterface: function asDeclareInterface(value, opts) {
    return t.isDeclareInterface.apply(t, arguments) ? value : undefined;
  },
  asDeclareModule: function asDeclareModule(value, opts) {
    return t.isDeclareModule.apply(t, arguments) ? value : undefined;
  },
  asDeclareModuleExports: function asDeclareModuleExports(value, opts) {
    return t.isDeclareModuleExports.apply(t, arguments) ? value : undefined;
  },
  asDeclareOpaqueType: function asDeclareOpaqueType(value, opts) {
    return t.isDeclareOpaqueType.apply(t, arguments) ? value : undefined;
  },
  asDeclareTypeAlias: function asDeclareTypeAlias(value, opts) {
    return t.isDeclareTypeAlias.apply(t, arguments) ? value : undefined;
  },
  asDeclareVariable: function asDeclareVariable(value, opts) {
    return t.isDeclareVariable.apply(t, arguments) ? value : undefined;
  },
  asDecorator: function asDecorator(value, opts) {
    return t.isDecorator.apply(t, arguments) ? value : undefined;
  },
  asDirective: function asDirective(value, opts) {
    return t.isDirective.apply(t, arguments) ? value : undefined;
  },
  asDirectiveLiteral: function asDirectiveLiteral(value, opts) {
    return t.isDirectiveLiteral.apply(t, arguments) ? value : undefined;
  },
  asDoExpression: function asDoExpression(value, opts) {
    return t.isDoExpression.apply(t, arguments) ? value : undefined;
  },
  asDoWhileStatement: function asDoWhileStatement(value, opts) {
    return t.isDoWhileStatement.apply(t, arguments) ? value : undefined;
  },
  asEmptyStatement: function asEmptyStatement(value, opts) {
    return t.isEmptyStatement.apply(t, arguments) ? value : undefined;
  },
  asEmptyTypeAnnotation: function asEmptyTypeAnnotation(value, opts) {
    return t.isEmptyTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asExistentialTypeParam: function asExistentialTypeParam(value, opts) {
    return t.isExistentialTypeParam.apply(t, arguments) ? value : undefined;
  },
  asExportAllDeclaration: function asExportAllDeclaration(value, opts) {
    return t.isExportAllDeclaration.apply(t, arguments) ? value : undefined;
  },
  asExportDefaultDeclaration: function asExportDefaultDeclaration(value, opts) {
    return t.isExportDefaultDeclaration.apply(t, arguments) ? value : undefined;
  },
  asExportDefaultSpecifier: function asExportDefaultSpecifier(value, opts) {
    return t.isExportDefaultSpecifier.apply(t, arguments) ? value : undefined;
  },
  asExportNamedDeclaration: function asExportNamedDeclaration(value, opts) {
    return t.isExportNamedDeclaration.apply(t, arguments) ? value : undefined;
  },
  asExportNamespaceSpecifier: function asExportNamespaceSpecifier(value, opts) {
    return t.isExportNamespaceSpecifier.apply(t, arguments) ? value : undefined;
  },
  asExportSpecifier: function asExportSpecifier(value, opts) {
    return t.isExportSpecifier.apply(t, arguments) ? value : undefined;
  },
  asExpressionStatement: function asExpressionStatement(value, opts) {
    return t.isExpressionStatement.apply(t, arguments) ? value : undefined;
  },
  asFile: function asFile(value, opts) {
    return t.isFile.apply(t, arguments) ? value : undefined;
  },
  asForAwaitStatement: function asForAwaitStatement(value, opts) {
    return t.isForAwaitStatement.apply(t, arguments) ? value : undefined;
  },
  asForInStatement: function asForInStatement(value, opts) {
    return t.isForInStatement.apply(t, arguments) ? value : undefined;
  },
  asForOfStatement: function asForOfStatement(value, opts) {
    return t.isForOfStatement.apply(t, arguments) ? value : undefined;
  },
  asForStatement: function asForStatement(value, opts) {
    return t.isForStatement.apply(t, arguments) ? value : undefined;
  },
  asFunctionDeclaration: function asFunctionDeclaration(value, opts) {
    return t.isFunctionDeclaration.apply(t, arguments) ? value : undefined;
  },
  asFunctionExpression: function asFunctionExpression(value, opts) {
    return t.isFunctionExpression.apply(t, arguments) ? value : undefined;
  },
  asFunctionTypeAnnotation: function asFunctionTypeAnnotation(value, opts) {
    return t.isFunctionTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asFunctionTypeParam: function asFunctionTypeParam(value, opts) {
    return t.isFunctionTypeParam.apply(t, arguments) ? value : undefined;
  },
  asGenericTypeAnnotation: function asGenericTypeAnnotation(value, opts) {
    return t.isGenericTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asIdentifier: function asIdentifier(value, opts) {
    return t.isIdentifier.apply(t, arguments) ? value : undefined;
  },
  asIfStatement: function asIfStatement(value, opts) {
    return t.isIfStatement.apply(t, arguments) ? value : undefined;
  },
  asImport: function asImport(value, opts) {
    return t.isImport.apply(t, arguments) ? value : undefined;
  },
  asImportDeclaration: function asImportDeclaration(value, opts) {
    return t.isImportDeclaration.apply(t, arguments) ? value : undefined;
  },
  asImportDefaultSpecifier: function asImportDefaultSpecifier(value, opts) {
    return t.isImportDefaultSpecifier.apply(t, arguments) ? value : undefined;
  },
  asImportNamespaceSpecifier: function asImportNamespaceSpecifier(value, opts) {
    return t.isImportNamespaceSpecifier.apply(t, arguments) ? value : undefined;
  },
  asImportSpecifier: function asImportSpecifier(value, opts) {
    return t.isImportSpecifier.apply(t, arguments) ? value : undefined;
  },
  asInterfaceDeclaration: function asInterfaceDeclaration(value, opts) {
    return t.isInterfaceDeclaration.apply(t, arguments) ? value : undefined;
  },
  asInterfaceExtends: function asInterfaceExtends(value, opts) {
    return t.isInterfaceExtends.apply(t, arguments) ? value : undefined;
  },
  asIntersectionTypeAnnotation: function asIntersectionTypeAnnotation(value, opts) {
    return t.isIntersectionTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asJSXAttribute: function asJSXAttribute(value, opts) {
    return t.isJSXAttribute.apply(t, arguments) ? value : undefined;
  },
  asJSXClosingElement: function asJSXClosingElement(value, opts) {
    return t.isJSXClosingElement.apply(t, arguments) ? value : undefined;
  },
  asJSXElement: function asJSXElement(value, opts) {
    return t.isJSXElement.apply(t, arguments) ? value : undefined;
  },
  asJSXEmptyExpression: function asJSXEmptyExpression(value, opts) {
    return t.isJSXEmptyExpression.apply(t, arguments) ? value : undefined;
  },
  asJSXExpressionContainer: function asJSXExpressionContainer(value, opts) {
    return t.isJSXExpressionContainer.apply(t, arguments) ? value : undefined;
  },
  asJSXIdentifier: function asJSXIdentifier(value, opts) {
    return t.isJSXIdentifier.apply(t, arguments) ? value : undefined;
  },
  asJSXMemberExpression: function asJSXMemberExpression(value, opts) {
    return t.isJSXMemberExpression.apply(t, arguments) ? value : undefined;
  },
  asJSXNamespacedName: function asJSXNamespacedName(value, opts) {
    return t.isJSXNamespacedName.apply(t, arguments) ? value : undefined;
  },
  asJSXOpeningElement: function asJSXOpeningElement(value, opts) {
    return t.isJSXOpeningElement.apply(t, arguments) ? value : undefined;
  },
  asJSXSpreadAttribute: function asJSXSpreadAttribute(value, opts) {
    return t.isJSXSpreadAttribute.apply(t, arguments) ? value : undefined;
  },
  asJSXSpreadChild: function asJSXSpreadChild(value, opts) {
    return t.isJSXSpreadChild.apply(t, arguments) ? value : undefined;
  },
  asJSXText: function asJSXText(value, opts) {
    return t.isJSXText.apply(t, arguments) ? value : undefined;
  },
  asLabeledStatement: function asLabeledStatement(value, opts) {
    return t.isLabeledStatement.apply(t, arguments) ? value : undefined;
  },
  asLogicalExpression: function asLogicalExpression(value, opts) {
    return t.isLogicalExpression.apply(t, arguments) ? value : undefined;
  },
  asMemberExpression: function asMemberExpression(value, opts) {
    return t.isMemberExpression.apply(t, arguments) ? value : undefined;
  },
  asMetaProperty: function asMetaProperty(value, opts) {
    return t.isMetaProperty.apply(t, arguments) ? value : undefined;
  },
  asMixedTypeAnnotation: function asMixedTypeAnnotation(value, opts) {
    return t.isMixedTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asNewExpression: function asNewExpression(value, opts) {
    return t.isNewExpression.apply(t, arguments) ? value : undefined;
  },
  asNoop: function asNoop(value, opts) {
    return t.isNoop.apply(t, arguments) ? value : undefined;
  },
  asNullLiteral: function asNullLiteral(value, opts) {
    return t.isNullLiteral.apply(t, arguments) ? value : undefined;
  },
  asNullLiteralTypeAnnotation: function asNullLiteralTypeAnnotation(value, opts) {
    return t.isNullLiteralTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asNullableTypeAnnotation: function asNullableTypeAnnotation(value, opts) {
    return t.isNullableTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asNumberTypeAnnotation: function asNumberTypeAnnotation(value, opts) {
    return t.isNumberTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asNumericLiteral: function asNumericLiteral(value, opts) {
    return t.isNumericLiteral.apply(t, arguments) ? value : undefined;
  },
  asNumericLiteralTypeAnnotation: function asNumericLiteralTypeAnnotation(value, opts) {
    return t.isNumericLiteralTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asObjectExpression: function asObjectExpression(value, opts) {
    return t.isObjectExpression.apply(t, arguments) ? value : undefined;
  },
  asObjectMethod: function asObjectMethod(value, opts) {
    return t.isObjectMethod.apply(t, arguments) ? value : undefined;
  },
  asObjectPattern: function asObjectPattern(value, opts) {
    return t.isObjectPattern.apply(t, arguments) ? value : undefined;
  },
  asObjectProperty: function asObjectProperty(value, opts) {
    return t.isObjectProperty.apply(t, arguments) ? value : undefined;
  },
  asObjectTypeAnnotation: function asObjectTypeAnnotation(value, opts) {
    return t.isObjectTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asObjectTypeCallProperty: function asObjectTypeCallProperty(value, opts) {
    return t.isObjectTypeCallProperty.apply(t, arguments) ? value : undefined;
  },
  asObjectTypeIndexer: function asObjectTypeIndexer(value, opts) {
    return t.isObjectTypeIndexer.apply(t, arguments) ? value : undefined;
  },
  asObjectTypeProperty: function asObjectTypeProperty(value, opts) {
    return t.isObjectTypeProperty.apply(t, arguments) ? value : undefined;
  },
  asObjectTypeSpreadProperty: function asObjectTypeSpreadProperty(value, opts) {
    return t.isObjectTypeSpreadProperty.apply(t, arguments) ? value : undefined;
  },
  asOpaqueType: function asOpaqueType(value, opts) {
    return t.isOpaqueType.apply(t, arguments) ? value : undefined;
  },
  asParenthesizedExpression: function asParenthesizedExpression(value, opts) {
    return t.isParenthesizedExpression.apply(t, arguments) ? value : undefined;
  },
  asProgram: function asProgram(value, opts) {
    return t.isProgram.apply(t, arguments) ? value : undefined;
  },
  asQualifiedTypeIdentifier: function asQualifiedTypeIdentifier(value, opts) {
    return t.isQualifiedTypeIdentifier.apply(t, arguments) ? value : undefined;
  },
  asRegExpLiteral: function asRegExpLiteral(value, opts) {
    return t.isRegExpLiteral.apply(t, arguments) ? value : undefined;
  },
  asRestElement: function asRestElement(value, opts) {
    return t.isRestElement.apply(t, arguments) ? value : undefined;
  },
  asRestProperty: function asRestProperty(value, opts) {
    return t.isRestProperty.apply(t, arguments) ? value : undefined;
  },
  asReturnStatement: function asReturnStatement(value, opts) {
    return t.isReturnStatement.apply(t, arguments) ? value : undefined;
  },
  asSequenceExpression: function asSequenceExpression(value, opts) {
    return t.isSequenceExpression.apply(t, arguments) ? value : undefined;
  },
  asSpreadElement: function asSpreadElement(value, opts) {
    return t.isSpreadElement.apply(t, arguments) ? value : undefined;
  },
  asSpreadProperty: function asSpreadProperty(value, opts) {
    return t.isSpreadProperty.apply(t, arguments) ? value : undefined;
  },
  asStringLiteral: function asStringLiteral(value, opts) {
    return t.isStringLiteral.apply(t, arguments) ? value : undefined;
  },
  asStringLiteralTypeAnnotation: function asStringLiteralTypeAnnotation(value, opts) {
    return t.isStringLiteralTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asStringTypeAnnotation: function asStringTypeAnnotation(value, opts) {
    return t.isStringTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asSuper: function asSuper(value, opts) {
    return t.isSuper.apply(t, arguments) ? value : undefined;
  },
  asSwitchCase: function asSwitchCase(value, opts) {
    return t.isSwitchCase.apply(t, arguments) ? value : undefined;
  },
  asSwitchStatement: function asSwitchStatement(value, opts) {
    return t.isSwitchStatement.apply(t, arguments) ? value : undefined;
  },
  asTaggedTemplateExpression: function asTaggedTemplateExpression(value, opts) {
    return t.isTaggedTemplateExpression.apply(t, arguments) ? value : undefined;
  },
  asTemplateElement: function asTemplateElement(value, opts) {
    return t.isTemplateElement.apply(t, arguments) ? value : undefined;
  },
  asTemplateLiteral: function asTemplateLiteral(value, opts) {
    return t.isTemplateLiteral.apply(t, arguments) ? value : undefined;
  },
  asThisExpression: function asThisExpression(value, opts) {
    return t.isThisExpression.apply(t, arguments) ? value : undefined;
  },
  asThisTypeAnnotation: function asThisTypeAnnotation(value, opts) {
    return t.isThisTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asThrowStatement: function asThrowStatement(value, opts) {
    return t.isThrowStatement.apply(t, arguments) ? value : undefined;
  },
  asTryStatement: function asTryStatement(value, opts) {
    return t.isTryStatement.apply(t, arguments) ? value : undefined;
  },
  asTupleTypeAnnotation: function asTupleTypeAnnotation(value, opts) {
    return t.isTupleTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asTypeAlias: function asTypeAlias(value, opts) {
    return t.isTypeAlias.apply(t, arguments) ? value : undefined;
  },
  asTypeAnnotation: function asTypeAnnotation(value, opts) {
    return t.isTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asTypeCastExpression: function asTypeCastExpression(value, opts) {
    return t.isTypeCastExpression.apply(t, arguments) ? value : undefined;
  },
  asTypeParameter: function asTypeParameter(value, opts) {
    return t.isTypeParameter.apply(t, arguments) ? value : undefined;
  },
  asTypeParameterDeclaration: function asTypeParameterDeclaration(value, opts) {
    return t.isTypeParameterDeclaration.apply(t, arguments) ? value : undefined;
  },
  asTypeParameterInstantiation: function asTypeParameterInstantiation(value, opts) {
    return t.isTypeParameterInstantiation.apply(t, arguments) ? value : undefined;
  },
  asTypeofTypeAnnotation: function asTypeofTypeAnnotation(value, opts) {
    return t.isTypeofTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asUnaryExpression: function asUnaryExpression(value, opts) {
    return t.isUnaryExpression.apply(t, arguments) ? value : undefined;
  },
  asUnionTypeAnnotation: function asUnionTypeAnnotation(value, opts) {
    return t.isUnionTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asUpdateExpression: function asUpdateExpression(value, opts) {
    return t.isUpdateExpression.apply(t, arguments) ? value : undefined;
  },
  asVariableDeclaration: function asVariableDeclaration(value, opts) {
    return t.isVariableDeclaration.apply(t, arguments) ? value : undefined;
  },
  asVariableDeclarator: function asVariableDeclarator(value, opts) {
    return t.isVariableDeclarator.apply(t, arguments) ? value : undefined;
  },
  asVoidTypeAnnotation: function asVoidTypeAnnotation(value, opts) {
    return t.isVoidTypeAnnotation.apply(t, arguments) ? value : undefined;
  },
  asWhileStatement: function asWhileStatement(value, opts) {
    return t.isWhileStatement.apply(t, arguments) ? value : undefined;
  },
  asWithStatement: function asWithStatement(value, opts) {
    return t.isWithStatement.apply(t, arguments) ? value : undefined;
  },
  asYieldExpression: function asYieldExpression(value, opts) {
    return t.isYieldExpression.apply(t, arguments) ? value : undefined;
  }
};

exports.default = BabelTypes;