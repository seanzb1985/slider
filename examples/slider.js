webpackJsonp([2],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180);


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider_assets_index_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider__);



/* eslint react/no-multi-comp: 0, max-len: 0 */






var style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return v + ' %';
}

var SliderWithTooltip = Object(__WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider__["createSliderWithTooltip"])(__WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider___default.a);

var CustomizedSlider = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(CustomizedSlider, _React$Component);

  function CustomizedSlider(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CustomizedSlider);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onSliderChange = function (value) {
      log(value);
      _this.setState({
        value: value
      });
    };

    _this.onAfterChange = function (value) {
      console.log(value); //eslint-disable-line
    };

    _this.state = {
      value: 50
    };
    return _this;
  }

  CustomizedSlider.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider___default.a, { value: this.state.value,
      onChange: this.onSliderChange, onAfterChange: this.onAfterChange
    });
  };

  return CustomizedSlider;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

var DynamicBounds = function (_React$Component2) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(DynamicBounds, _React$Component2);

  function DynamicBounds(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DynamicBounds);

    var _this2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component2.call(this, props));

    _this2.onSliderChange = function (value) {
      log(value);
    };

    _this2.onMinChange = function (e) {
      _this2.setState({
        min: +e.target.value || 0
      });
    };

    _this2.onMaxChange = function (e) {
      _this2.setState({
        max: +e.target.value || 100
      });
    };

    _this2.state = {
      min: 0,
      max: 100
    };
    return _this2;
  }

  DynamicBounds.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'label',
        null,
        'Min: '
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { type: 'number', value: this.state.min, onChange: this.onMinChange }),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'label',
        null,
        'Max: '
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { type: 'number', value: this.state.max, onChange: this.onMaxChange }),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('br', null),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider___default.a, { defaultValue: 50, min: this.state.min, max: this.state.max,
        onChange: this.onSliderChange
      })
    );
  };

  return DynamicBounds;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'p',
      null,
      'Basic Slider'
    ),
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__grapecity_rc_slider___default.a, { onChange: log, max: 360, min: 15, step: 15 })
  )
), document.getElementById('__react-content'));

/***/ })

},[179]);
//# sourceMappingURL=slider.js.map