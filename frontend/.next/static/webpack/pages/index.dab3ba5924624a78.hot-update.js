"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedStatValue.tsx":
/*!**********************************************!*\
  !*** ./src/components/AnimatedStatValue.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  font-family: \"ProximaNovaSemiBold\", sans-serif;\\n  font-size: 2.75rem;\\n  font-weight: 700;\\n  color: transparent;\\n  background: linear-gradient(135deg, #b31942, #e63e6d);\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  margin-bottom: 0.375rem;\\n  letter-spacing: -0.02em;\\n  line-height: 1;\\n  opacity: 0;\\n  animation: simpleValueEntrance 1s ease-out forwards;\\n  animation-delay: 0.3s;\\n  position: relative;\\n  display: inline-block;\\n  text-align: center;\\n  width: 100%;\\n\\n  @keyframes simpleValueEntrance {\\n    0% {\\n      opacity: 0;\\n      transform: translateY(10px);\\n    }\\n    100% {\\n      opacity: 1;\\n      transform: translateY(0);\\n    }\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst StatValue = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject());\n_c = StatValue;\nconst AnimatedStatValue = (param)=>{\n    let { value, index, isWords = false } = param;\n    // Format number with abbreviations for thousands (K) and millions (M)\n    const formatNumberWithAbbreviation = (value)=>{\n        // Parse the number by removing commas\n        const numValue = parseFloat(value.replace(/,/g, \"\"));\n        if (numValue >= 1000000) {\n            return (numValue / 1000000).toFixed(2) + \"M\";\n        } else if (numValue >= 1000) {\n            return (numValue / 1000).toFixed(2) + \"K\";\n        } else {\n            return numValue.toString();\n        }\n    };\n    const displayValue = isWords ? formatNumberWithAbbreviation(value) : value;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"number-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StatValue, {\n            style: {\n                \"--index\": \"\".concat(index)\n            },\n            children: displayValue\n        }, void 0, false, {\n            fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedStatValue.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedStatValue.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = AnimatedStatValue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedStatValue);\nvar _c, _c1;\n$RefreshReg$(_c, \"StatValue\");\n$RefreshReg$(_c1, \"AnimatedStatValue\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFN0YXRWYWx1ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFFdkMsTUFBTUUsWUFBWUQsOERBQVc7S0FBdkJDO0FBcUNOLE1BQU1FLG9CQUFzRDtRQUFDLEVBQzNEQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsVUFBVSxLQUFLLEVBQ2hCO0lBQ0Msc0VBQXNFO0lBQ3RFLE1BQU1DLCtCQUErQixDQUFDSDtRQUNwQyxzQ0FBc0M7UUFDdEMsTUFBTUksV0FBV0MsV0FBV0wsTUFBTU0sT0FBTyxDQUFDLE1BQU07UUFFaEQsSUFBSUYsWUFBWSxTQUFTO1lBQ3ZCLE9BQU8sQ0FBQ0EsV0FBVyxPQUFNLEVBQUdHLE9BQU8sQ0FBQyxLQUFLO1FBQzNDLE9BQU8sSUFBSUgsWUFBWSxNQUFNO1lBQzNCLE9BQU8sQ0FBQ0EsV0FBVyxJQUFHLEVBQUdHLE9BQU8sQ0FBQyxLQUFLO1FBQ3hDLE9BQU87WUFDTCxPQUFPSCxTQUFTSSxRQUFRO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlUCxVQUFVQyw2QkFBNkJILFNBQVNBO0lBRXJFLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDZDtZQUFVZSxPQUFPO2dCQUFFLFdBQVcsR0FBUyxPQUFOWDtZQUFRO3NCQUN2Q1E7Ozs7Ozs7Ozs7O0FBSVQ7TUE1Qk1WO0FBOEJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRTdGF0VmFsdWUudHN4P2JlYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3RhdFZhbHVlID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhU2VtaUJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiMzE5NDIsICNlNjNlNmQpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IHNpbXBsZVZhbHVlRW50cmFuY2UgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQGtleWZyYW1lcyBzaW1wbGVWYWx1ZUVudHJhbmNlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgQW5pbWF0ZWRTdGF0VmFsdWVQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG4gIGlzV29yZHM/OiBib29sZWFuO1xufVxuXG5jb25zdCBBbmltYXRlZFN0YXRWYWx1ZTogUmVhY3QuRkM8QW5pbWF0ZWRTdGF0VmFsdWVQcm9wcz4gPSAoe1xuICB2YWx1ZSxcbiAgaW5kZXgsXG4gIGlzV29yZHMgPSBmYWxzZSxcbn0pID0+IHtcbiAgLy8gRm9ybWF0IG51bWJlciB3aXRoIGFiYnJldmlhdGlvbnMgZm9yIHRob3VzYW5kcyAoSykgYW5kIG1pbGxpb25zIChNKVxuICBjb25zdCBmb3JtYXROdW1iZXJXaXRoQWJicmV2aWF0aW9uID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAvLyBQYXJzZSB0aGUgbnVtYmVyIGJ5IHJlbW92aW5nIGNvbW1hc1xuICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpKTtcblxuICAgIGlmIChudW1WYWx1ZSA+PSAxMDAwMDAwKSB7XG4gICAgICByZXR1cm4gKG51bVZhbHVlIC8gMTAwMDAwMCkudG9GaXhlZCgyKSArIFwiTVwiO1xuICAgIH0gZWxzZSBpZiAobnVtVmFsdWUgPj0gMTAwMCkge1xuICAgICAgcmV0dXJuIChudW1WYWx1ZSAvIDEwMDApLnRvRml4ZWQoMikgKyBcIktcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGlzV29yZHMgPyBmb3JtYXROdW1iZXJXaXRoQWJicmV2aWF0aW9uKHZhbHVlKSA6IHZhbHVlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXItY29udGFpbmVyXCI+XG4gICAgICA8U3RhdFZhbHVlIHN0eWxlPXt7IFwiLS1pbmRleFwiOiBgJHtpbmRleH1gIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc30+XG4gICAgICAgIHtkaXNwbGF5VmFsdWV9XG4gICAgICA8L1N0YXRWYWx1ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkU3RhdFZhbHVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiU3RhdFZhbHVlIiwic3BhbiIsIkFuaW1hdGVkU3RhdFZhbHVlIiwidmFsdWUiLCJpbmRleCIsImlzV29yZHMiLCJmb3JtYXROdW1iZXJXaXRoQWJicmV2aWF0aW9uIiwibnVtVmFsdWUiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImRpc3BsYXlWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedStatValue.tsx\n"));

/***/ })

});