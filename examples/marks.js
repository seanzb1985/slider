webpackJsonp([4],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"rc-slider/assets/index.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
throw new Error("Cannot find module \"rc-slider\"");





var createSliderWithTooltip = __WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a.createSliderWithTooltip;
var Range = createSliderWithTooltip(__WEBPACK_IMPORTED_MODULE_3_rc_slider___default.a.InfiniteRange);

var style = { width: 400, margin: 50 };
var marks = {
  '-10': '-10°C',
  0: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'strong',
    null,
    '0\xB0C'
  ),
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: {
    style: {
      color: 'red'
    },
    label: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'strong',
      null,
      '100\xB0C'
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
  )
), document.getElementById('__react-content'));

/***/ })

},[159]);
//# sourceMappingURL=marks.js.map