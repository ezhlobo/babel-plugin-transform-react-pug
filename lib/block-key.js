'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicBlock = exports.StaticBlock = exports.BaseKey = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _pugError = require('pug-error');

var _pugError2 = _interopRequireDefault(_pugError);

var _babelTypes = require('./babel-types');

var _babelTypes2 = _interopRequireDefault(_babelTypes);

var _addString = require('./utils/add-string');

var _addString2 = _interopRequireDefault(_addString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toJsxValue(e) {
  return _babelTypes2.default.asStringLiteral(e) || _babelTypes2.default.jSXExpressionContainer(e);
}

/*
 * We need to auto-generate keys whenever react-pug uses an array as the underlying
 * representation for a static list of elements.
 */

var BaseKey = exports.BaseKey = function () {
  function BaseKey() {
    (0, _classCallCheck3.default)(this, BaseKey);
  }

  (0, _createClass3.default)(BaseKey, [{
    key: 'getKey',
    value: function getKey(fn) {
      fn(_babelTypes2.default.stringLiteral('pug'));
    }
  }, {
    key: 'handleAttributes',
    value: function handleAttributes(attrs) {}
  }, {
    key: 'end',
    value: function end() {}
  }]);
  return BaseKey;
}();

/*
 * Static blocks are used for things like if statements, that may become arrays
 * behind the sceens, but that do not actually involve iteration, and therefore
 * do not require the user to manually supply a key.
 */


var StaticBlock = exports.StaticBlock = function () {
  function StaticBlock(parent, staticBlockID) {
    var _this = this;

    (0, _classCallCheck3.default)(this, StaticBlock);
    this._ended = false;
    this._parentEnded = false;
    this._key = null;
    this._pending = [];
    this._index = 0;

    parent.getKey(function (parentKey) {
      _this._parentEnded = true;
      _this._key = (0, _addString2.default)(parentKey, _babelTypes2.default.stringLiteral(':' + staticBlockID));
      _this._update();
    });
  }

  (0, _createClass3.default)(StaticBlock, [{
    key: '_update',
    value: function _update() {
      if (this._ended && this._parentEnded) {
        var key = this._key;
        if (!key) {
          throw new Error('Expected key to be an expression');
        }
        while (this._pending.length) {
          this._pending.shift()(key);
        }
      }
    }
  }, {
    key: 'getKey',
    value: function getKey(fn) {
      if (this._pending.indexOf(fn) === -1) {
        var index = this._index++;
        this._pending.push(function (key) {
          return fn((0, _addString2.default)(key, _babelTypes2.default.stringLiteral(':' + index)));
        });
      }
      this._update();
    }
  }, {
    key: 'handleAttributes',
    value: function handleAttributes(attrs) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(attrs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _attr = _step.value;

          var attr = _babelTypes2.default.asJSXAttribute(_attr);
          if (attr && _babelTypes2.default.isJSXIdentifier(attr.name, { name: 'key' })) {
            return;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.getKey(function (key) {
        attrs.push(_babelTypes2.default.jSXAttribute(_babelTypes2.default.jSXIdentifier('key'), toJsxValue(key)));
      });
    }
  }, {
    key: 'end',
    value: function end() {
      this._ended = true;
      this._update();
    }
  }]);
  return StaticBlock;
}();

/*
 * Dynamic blocks are used for real iteration, we require the user to add a key to
 * at least one elemnt within the array, and then we build keys for all the other
 * elements from that one intial key.
 */


var DynamicBlock = exports.DynamicBlock = function () {
  function DynamicBlock(parent, srcForError, lineNumberForError) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, DynamicBlock);
    this._ended = false;
    this._localKey = null;
    this._parentEnded = false;
    this._parentKey = null;
    this._pending = [];
    this._index = 0;

    this._srcForError = srcForError;
    this._lineNumberForError = lineNumberForError;
    parent.getKey(function (parentKey) {
      _this2._parentEnded = true;
      _this2._parentKey = parentKey;
      _this2._update();
    });
  }

  (0, _createClass3.default)(DynamicBlock, [{
    key: '_update',
    value: function _update() {
      var parentKey = this._parentKey;
      var localKey = this._localKey;
      if (this._ended && this._parentEnded && localKey) {
        if (!parentKey) {
          throw new Error('There should always be a parent key once it has ended');
        }
        var key = _babelTypes2.default.binaryExpression('+', parentKey, localKey);
        while (this._pending.length) {
          this._pending.shift()(key);
        }
      } else if (this._ended && this._parentEnded && this._pending.length) {
        var err = (0, _pugError2.default)('MISSING_KEY', 'You must specify a key for the first item in any loops.', {
          line: this._lineNumberForError,
          filename: 'pug',
          src: this._srcForError
        });
        throw err;
      }
    }
  }, {
    key: 'getKey',
    value: function getKey(fn) {
      if (this._pending.indexOf(fn) === -1) {
        var index = this._index++;
        this._pending.push(function (key) {
          return fn((0, _addString2.default)(key, _babelTypes2.default.stringLiteral(':' + index)));
        });
      }
      this._update();
    }
  }, {
    key: 'handleAttributes',
    value: function handleAttributes(attrs) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(attrs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _attr = _step2.value;

          var attr = _babelTypes2.default.asJSXAttribute(_attr);
          if (attr && _babelTypes2.default.isJSXIdentifier(attr.name, { name: 'key' })) {
            if (this._localKey) {
              return;
            }
            var value = _babelTypes2.default.asJSXExpressionContainer(attr.value);
            if (value && value.expression) {
              this._localKey = value.expression;
              this._update();
              // remove the attribute and replace with the properly nested version
              attrs.splice(attrs.indexOf(attr), 1);
            } else {
              return;
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.getKey(function (key) {
        attrs.push(_babelTypes2.default.jSXAttribute(_babelTypes2.default.jSXIdentifier('key'), toJsxValue(key)));
      });
    }
  }, {
    key: 'end',
    value: function end() {
      this._ended = true;
      this._update();
    }
  }]);
  return DynamicBlock;
}();