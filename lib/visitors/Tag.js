'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseExpression = require('../utils/parse-expression');

var _parseExpression2 = _interopRequireDefault(_parseExpression);

var _babelTypes = require('../babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _visitors = require('../visitors');

var _interpolation = require('../utils/interpolation');

var _jsx = require('../utils/jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get children nodes from the node, passing the node's
 * context to the children and generating JSX values.
 * @param {Object} node - The node
 * @param {Context} context - The context to apply to the children
 * nodes
 * @returns {Array<JSXValue>}
 */
function getChildren(node, context) {
  return context.noKey(function (childContext) {
    return (node.code ? [(0, _visitors.visitJsx)(node.code, childContext)] : []).concat((0, _visitors.visitJsxExpressions)(node.block.nodes, childContext));
  });
}

/**
 * Iterate through the node's attributes and convert
 * them into JSX attributes.
 * @param {Object} node - The node
 * @param {Context} context - The context
 * @returns {Array<Attribute>}
 */
function getAttributes(node, context) {
  var classes = [];
  var attrs = node.attrs.map(function (_ref) {
    var name = _ref.name,
        val = _ref.val,
        mustEscape = _ref.mustEscape;

    if (/\.\.\./.test(name) && val === true) {
      return _babelTypes2.default.jSXSpreadAttribute((0, _parseExpression2.default)(name.substr(3), context));
    }

    // TODO: Need to drop all aliases for attributes
    switch (name) {
      case 'for':
        name = 'htmlFor';
        break;
      case 'maxlength':
        name = 'maxLength';
        break;
    }

    var expr = (0, _parseExpression2.default)(val === true ? 'true' : val, context);

    if (!mustEscape) {
      var canSkipEscaping = (name === 'class' || name === 'id') && _babelTypes2.default.isStringLiteral(expr);

      if (!canSkipEscaping) {
        throw context.error('INVALID_EXPRESSION', 'Unescaped attributes are not supported in react-pug');
      }
    }

    if (expr == null) {
      return null;
    }

    if (name === 'class' || name === context._options.classAttribute) {
      classes.push(expr);
      return null;
    }

    var jsxValue = _babelTypes2.default.asStringLiteral(expr) || _babelTypes2.default.asJSXElement(expr) || _babelTypes2.default.jSXExpressionContainer(expr);

    if (/\.\.\./.test(name)) {
      throw new Error('spread attributes must not have a value');
    }

    return _babelTypes2.default.jSXAttribute(_babelTypes2.default.jSXIdentifier(name), jsxValue);
  }).filter(Boolean);

  if (classes.length) {
    var value = classes.every(function (cls) {
      return _babelTypes2.default.isStringLiteral(cls);
    }) ? _babelTypes2.default.stringLiteral(classes.map(function (cls) {
      return cls.value;
    }).join(' ')) : _babelTypes2.default.jSXExpressionContainer(_babelTypes2.default.callExpression(_babelTypes2.default.memberExpression(_babelTypes2.default.arrayExpression(classes), _babelTypes2.default.identifier('join')), [_babelTypes2.default.stringLiteral(' ')]));
    attrs.push(_babelTypes2.default.jSXAttribute(_babelTypes2.default.jSXIdentifier(context._options.classAttribute), value));
  }

  return attrs;
}

/**
 * Retrieve attributes and children of the passed node.
 * @param {Object} node - The node
 * @param {Context} context - The context
 * @returns {Object} Contains the attributes and children
 * of the node.
 */
function getAttributesAndChildren(node, context) {
  var children = getChildren(node, context);

  if (node.attributeBlocks.length) {
    throw new Error('Attribute blocks are not yet supported in react-pug');
  }

  var attrs = getAttributes(node, context);
  context.key.handleAttributes(attrs);

  return { attrs: attrs, children: children };
}

/**
 * Check whether an interpolation exists, if so, check whether
 * the interpolation is a react component and return either
 * the component as a JSX element or the interpolation.
 * @param {string} name - The interpolation reference
 * @param {Context} context - The current context to retrieve
 * the interpolation from
 * @param {Array<JSXValue>} children - Whether the element has
 * attributes or children
 * @returns {?Object} The context's interpolation or a JSX element.
 */
function getInterpolationByContext(name, context, attrs, children) {
  if (!(0, _interpolation.getInterpolationRefs)(name)) {
    return null;
  }

  var interpolation = context.getInterpolationByRef(name);

  var isReactComponent = _babelTypes2.default.isIdentifier(interpolation) && interpolation.name.charAt(0) === interpolation.name.charAt(0).toUpperCase();

  if (attrs.length || children.length) {
    if (isReactComponent) {
      return (0, _jsx.buildJSXElement)(_babelTypes2.default.jSXIdentifier(interpolation.name), attrs, children);
    } else {
      throw context.error('INVALID_EXPRESSION', 'Only components can have children and attributes');
    }
  }

  return interpolation;
}

var TagVisitor = {
  jsx: function jsx(node, context) {
    var _getAttributesAndChil = getAttributesAndChildren(node, context),
        attrs = _getAttributesAndChil.attrs,
        children = _getAttributesAndChil.children;

    var interpolation = getInterpolationByContext(node.name, context, attrs, children);

    if (interpolation != null) {
      return _babelTypes2.default.asJSXElement(interpolation) || _babelTypes2.default.jSXExpressionContainer(interpolation);
    }

    return (0, _jsx.buildJSXElement)(_babelTypes2.default.jSXIdentifier(node.name), attrs, children);
  },
  expression: function expression(node, context) {
    var _getAttributesAndChil2 = getAttributesAndChildren(node, context),
        attrs = _getAttributesAndChil2.attrs,
        children = _getAttributesAndChil2.children;

    var interpolation = getInterpolationByContext(node.name, context, attrs, children);

    if (interpolation != null) {
      return interpolation;
    }

    return (0, _jsx.buildJSXElement)(_babelTypes2.default.jSXIdentifier(node.name), attrs, children);
  }
};

exports.default = TagVisitor;