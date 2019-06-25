webpackJsonp([4],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(176);


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grapecity_rc_slider_assets_index_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grapecity_rc_slider_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__grapecity_rc_slider_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider__);





var createSliderWithTooltip = __WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a.createSliderWithTooltip;
var Range = createSliderWithTooltip(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a.InfiniteRange);

var style = { width: 400, margin: 50 };
var marks = {

  30: '30°',
  90: '90°',
  180: '180°',
  270: '270°',
  360: {
    style: {
      color: 'red'
    },
    label: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'strong',
      null,
      '360\xB0'
    )
  }
};

function log(value) {
  console.log(value); //eslint-disable-line
}
function tipFormatter(value) {
  if (value > 1000) {
    return '正无穷';
  } else if (value < 0) {
    return '负无穷';
  }
  return value;
}

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Infinite slider Range'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Range, { min: 0, max: 1000, onAfterChange: log, defaultValue: [20, 30], minLabel: 'Min', maxLabel: 'Max', step: 1, tipFormatter: tipFormatter })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks, `step=null`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a, { min: -10, marks: marks, step: null, onChange: log, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Sweep'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a, { dots: true, min: 30, max: 360, marks: marks, step: 15, onChange: log, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks, `included=false`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a, { min: -10, marks: marks, included: false, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Slider with marks and steps, `included=false`'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a, { min: -10, marks: marks, step: 10, included: false, defaultValue: 20 })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Range with marks'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a.Range, { min: -10, marks: marks, onChange: log, defaultValue: [20, 25, 30, 40] })
  ),
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      null,
      'Range with marks and steps'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__grapecity_rc_slider___default.a.Range, { min: -10, marks: marks, step: 10, onChange: log, defaultValue: [20, 40] })
  )
), document.getElementById('__react-content'));

/***/ })

},[175]);
//# sourceMappingURL=marks.js.map