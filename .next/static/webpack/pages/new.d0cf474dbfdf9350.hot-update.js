"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new",{

/***/ "./pages/components/Form.jsx":
/*!***********************************!*\
  !*** ./pages/components/Form.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst yupSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n    name: yup__WEBPACK_IMPORTED_MODULE_2__.string\n});\nconst Form = ()=>{\n    _s();\n    const { useForm } = useForm({});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"w-1/2 flex flex-col justify-center items-center gap-4 border p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-2 py-1 text-black\",\n                type: \"text\",\n                name: \"name\",\n                placeholder: \"Name here\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Web Development\\\\MERN Stack\\\\Next js\\\\learingpagerouterinnextjs\\\\pages\\\\components\\\\Form.jsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-2 py-1 text-black\",\n                type: \"email\",\n                name: \"email\",\n                placeholder: \"Email here\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Web Development\\\\MERN Stack\\\\Next js\\\\learingpagerouterinnextjs\\\\pages\\\\components\\\\Form.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-2 py-1 text-black\",\n                type: \"password\",\n                name: \"password\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Web Development\\\\MERN Stack\\\\Next js\\\\learingpagerouterinnextjs\\\\pages\\\\components\\\\Form.jsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"px-2 py-1 text-black\",\n                type: \"password\",\n                name: \"confirmPassword\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Web Development\\\\MERN Stack\\\\Next js\\\\learingpagerouterinnextjs\\\\pages\\\\components\\\\Form.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Web Development\\\\MERN Stack\\\\Next js\\\\learingpagerouterinnextjs\\\\pages\\\\components\\\\Form.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"PW63b8i2pAh+yDKzadgMLngjdio=\", true);\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Zvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2Y7QUFDM0IsTUFBTUcsWUFBWUQsdUNBQVUsR0FBR0csS0FBSyxDQUFDO0lBQ2pDQyxNQUFNSix1Q0FBVTtBQUNwQjtBQUNBLE1BQU1NLE9BQU87O0lBQ1QsTUFBTSxFQUFDUCxPQUFPLEVBQUUsR0FBR0EsUUFBUSxDQUUzQjtJQUNGLHFCQUNFLDhEQUFDUTtRQUFNQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQXVCRSxNQUFLO2dCQUFPTixNQUFLO2dCQUFPTyxhQUFZOzs7Ozs7MEJBQzVFLDhEQUFDRjtnQkFBTUQsV0FBVTtnQkFBdUJFLE1BQUs7Z0JBQVFOLE1BQUs7Z0JBQVFPLGFBQVk7Ozs7OzswQkFDOUUsOERBQUNGO2dCQUFNRCxXQUFVO2dCQUF1QkUsTUFBSztnQkFBV04sTUFBSzs7Ozs7OzBCQUM3RCw4REFBQ0s7Z0JBQU1ELFdBQVU7Z0JBQXVCRSxNQUFLO2dCQUFXTixNQUFLOzs7Ozs7Ozs7Ozs7QUFHckU7R0FaTUU7S0FBQUE7QUFjTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0Zvcm0uanN4PzcxMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xyXG5jb25zdCB5dXBTY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgbmFtZTogeXVwLnN0cmluZ1xyXG59KVxyXG5jb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3VzZUZvcm0sfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gIGNsYXNzTmFtZT0ndy0xLzIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgYm9yZGVyIHAtNCc+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtYmxhY2snIHR5cGU9XCJ0ZXh0XCIgbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9J05hbWUgaGVyZScgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdweC0yIHB5LTEgdGV4dC1ibGFjaycgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9J0VtYWlsIGhlcmUnIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtYmxhY2snIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncHgtMiBweS0xIHRleHQtYmxhY2snIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIi8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsInl1cCIsInl1cFNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwibmFtZSIsInN0cmluZyIsIkZvcm0iLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Form.jsx\n"));

/***/ })

});