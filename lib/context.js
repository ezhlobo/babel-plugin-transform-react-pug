'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _fs = require('fs');

var _pugError = require('pug-error');

var _pugError2 = _interopRequireDefault(_pugError);

var _babelTypes = require('./babel-types');

var _blockKey = require('./block-key');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = function () {
  function Context(params) {
    (0, _classCallCheck3.default)(this, Context);
    this._variables = new _map2.default();
    this.variablesToDeclare = [];
    this._nextBlockID = 0;

    if (!params.definesScope && params.parent) {
      this.variablesToDeclare = params.parent.variablesToDeclare;
    }

    this._parent = params.parent;
    this.key = params.key;
    this.file = params.file;
    this.path = params.path;
    this._interpolations = params.interpolations;
    this._options = params.options;
  }

  (0, _createClass3.default)(Context, [{
    key: 'error',
    value: function error(code, message) {
      var options = {
        filename: this.file.opts.filename,
        line: (0, _babelTypes.getCurrentLocation)().start.line - 1,
        src: null
      };

      if ((0, _fs.existsSync)(options.filename)) {
        options.src = (0, _fs.readFileSync)(this.file.opts.filename, 'utf8');
      }

      return (0, _pugError2.default)(code, message, options);
    }
  }, {
    key: 'noKey',
    value: function noKey(fn) {
      var childContext = new Context({
        definesScope: false,
        key: new _blockKey.BaseKey(),
        parent: this,
        file: this.file,
        path: this.path,
        options: this._options
      });

      var result = fn(childContext);
      childContext.end();

      return result;
    }
  }, {
    key: 'staticBlock',
    value: function staticBlock(fn) {
      var childContext = new Context({
        definesScope: false,
        key: new _blockKey.StaticBlock(this.key, this._nextBlockID++),
        parent: this,
        file: this.file,
        path: this.path,
        options: this._options
      });

      var result = fn(childContext);
      childContext.end();

      return result;
    }
  }, {
    key: 'dynamicBlock',
    value: function dynamicBlock(fn) {
      var childContext = new Context({
        definesScope: true,
        key: new _blockKey.DynamicBlock(this.key, 'src', 0),
        parent: this,
        file: this.file,
        path: this.path,
        options: this._options
      });

      var result = fn(childContext);
      childContext.end();
      return { result: result, variables: childContext.variablesToDeclare };
    }
  }, {
    key: 'end',
    value: function end() {
      this.key.end();
    }
  }, {
    key: 'getVariable',
    value: function getVariable(name) {
      var variable = this._variables.get(name);

      if (variable) {
        return variable;
      }

      if (this._parent) {
        return this._parent.getVariable(name);
      }

      // TODO: maybe actually verify existance/non-const in parent scope?
      return null;
    }
  }, {
    key: 'declareVariable',
    value: function declareVariable(kind, name) {
      if (typeof name !== 'string') {
        throw new Error('variables may only be declared with strings');
      }

      var oldVariable = this._variables.get(name);

      if (oldVariable) {
        if (oldVariable.kind !== 'var' || kind !== 'var') {
          var err = this.error('DUPLICATE_VARIABLE', 'Duplicate variable ' + name + '.');
          throw err;
        }
        return oldVariable;
      }

      var variable = {
        kind: kind,
        id: this.generateUidIdentifier(name)
      };

      this.variablesToDeclare.push(variable.id);
      this._variables.set(name, variable);
      return variable;
    }
  }, {
    key: 'generateUidIdentifier',
    value: function generateUidIdentifier(name) {
      return this.path.scope.generateUidIdentifier(name);
    }
  }, {
    key: 'getBaseLine',
    value: function getBaseLine() {
      return this.path.node.loc.start.line;
    }

    /**
     * Check whether interpolations exist for the context, if not,
     * recursively check the parent context for the interpolation.
     * @param { String } reference - The interpolation reference
     * @returns { ?Expression } The interpolation or nothing.
     */

  }, {
    key: 'getInterpolationByRef',
    value: function getInterpolationByRef(reference) {
      var interpolation = null;

      if (this._interpolations && (interpolation = this._interpolations.get(reference))) {
        return interpolation;
      } else if (this._parent) {
        return this._parent.getInterpolationByRef(reference);
      }

      return this.getInterpolationByRef(reference);
    }
  }], [{
    key: 'create',
    value: function create(file, path, interpolations, params) {
      return new Context({
        definesScope: true,
        key: new _blockKey.BaseKey(),
        parent: null,
        file: file,
        path: path,
        options: params.options,
        interpolations: interpolations
      });
    }
  }]);
  return Context;
}();

exports.default = Context;