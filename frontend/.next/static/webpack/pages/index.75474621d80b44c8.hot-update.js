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

/***/ "./src/components/AnimatedNumber.tsx":
/*!*******************************************!*\
  !*** ./src/components/AnimatedNumber.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0.5rem 0;\\n\\n  &::before {\\n    content: \"\";\\n    position: absolute;\\n    width: 150px;\\n    height: 150px;\\n    border-radius: 50%;\\n    background: radial-gradient(\\n      circle at center,\\n      rgba(218, 165, 32, 0.06) 0%,\\n      transparent 70%\\n    );\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    z-index: -1;\\n    opacity: 0;\\n    transition: opacity 0.3s ease;\\n  }\\n\\n  ',\n        \":hover &::before {\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  font-size: 3.5rem;\\n  font-weight: 700;\\n  color: transparent;\\n  margin: 1rem 0;\\n  font-family: \"ProximaNovaSemiBold\", sans-serif;\\n  line-height: 1;\\n  background: linear-gradient(135deg, #daa520 20%, #f5d76e 80%);\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  position: relative;\\n  text-shadow: 0 0 10px rgba(218, 165, 32, 0.3),\\n    0 0 30px rgba(218, 165, 32, 0.1);\\n  opacity: 0;\\n  transform: perspective(1000px) translateY(20px) rotateX(20deg);\\n  animation: numberEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\\n  animation-delay: 0s;\\n  will-change: transform, opacity;\\n  display: inline-block;\\n  text-align: center;\\n  width: 100%;\\n  animation-fill-mode: forwards;\\n\\n  @keyframes numberEntrance {\\n    0% {\\n      opacity: 0;\\n      transform: perspective(1000px) translateY(50px) rotateX(20deg);\\n      filter: blur(8px);\\n    }\\n    50% {\\n      opacity: 0.8;\\n      filter: blur(4px);\\n    }\\n    100% {\\n      opacity: 1;\\n      transform: perspective(1000px) translateY(0) rotateX(0);\\n      filter: blur(0);\\n    }\\n  }\\n\\n  &.glitching {\\n    animation: none;\\n    opacity: 1;\\n    transform: none;\\n    filter: none;\\n    text-shadow: 0 0 10px rgba(218, 165, 32, 0.8),\\n      0 0 20px rgba(218, 165, 32, 0.4), 0 0 30px rgba(218, 165, 32, 0.2);\\n  }\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  transform: translate3d(0, 0, 0);\\n  background: linear-gradient(135deg, #daa520 20%, #f5d76e 80%);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  color: transparent;\\n  pointer-events: none;\\n\\n  &.active {\\n    opacity: 0.8;\\n    animation: glitchAnimation 0.3s ease-in-out infinite alternate;\\n  }\\n\\n  &:nth-child(2) {\\n    background: linear-gradient(135deg, #e5b833 20%, #f8df8b 80%);\\n    -webkit-background-clip: text;\\n    background-clip: text;\\n\\n    &.active {\\n      animation-name: glitchAnimation2;\\n      animation-duration: 0.25s;\\n    }\\n  }\\n\\n  &:nth-child(3) {\\n    background: linear-gradient(135deg, #b8860b 20%, #daa520 80%);\\n    -webkit-background-clip: text;\\n    background-clip: text;\\n\\n    &.active {\\n      animation-name: glitchAnimation3;\\n      animation-duration: 0.35s;\\n    }\\n  }\\n\\n  @keyframes glitchAnimation {\\n    0% {\\n      transform: translate3d(-3px, 1px, 0);\\n    }\\n    20% {\\n      transform: translate3d(2px, -2px, 0);\\n    }\\n    40% {\\n      transform: translate3d(0px, 1px, 0);\\n    }\\n    60% {\\n      transform: translate3d(-2px, 0px, 0);\\n    }\\n    80% {\\n      transform: translate3d(1px, -1px, 0);\\n    }\\n    100% {\\n      transform: translate3d(1px, 2px, 0);\\n    }\\n  }\\n\\n  @keyframes glitchAnimation2 {\\n    0% {\\n      transform: translate3d(2px, -1px, 0);\\n    }\\n    25% {\\n      transform: translate3d(-3px, 2px, 0);\\n    }\\n    50% {\\n      transform: translate3d(1px, 1px, 0);\\n    }\\n    75% {\\n      transform: translate3d(0px, -2px, 0);\\n    }\\n    100% {\\n      transform: translate3d(-1px, 0px, 0);\\n    }\\n  }\\n\\n  @keyframes glitchAnimation3 {\\n    0% {\\n      transform: translate3d(1px, 2px, 0);\\n    }\\n    33% {\\n      transform: translate3d(-2px, -1px, 0);\\n    }\\n    66% {\\n      transform: translate3d(1px, 0px, 0);\\n    }\\n    100% {\\n      transform: translate3d(0px, 1px, 0);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// Define keyframes and styled components for the AnimatedNumber\nconst NumberContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), (props)=>props.theme.hoverSelector);\n_c = NumberContainer;\nconst AgencyCount = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = AgencyCount;\nconst GlitchLayer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject2());\n_c2 = GlitchLayer;\n// Initialize theme object with the hoverSelector\nconst theme = {\n    hoverSelector: \"div\"\n};\nconst AnimatedNumber = (param)=>{\n    let { value, index } = param;\n    _s();\n    const [displayValue, setDisplayValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isGlitching, setIsGlitching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isRevealed, setIsRevealed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // Parse numeric value and suffix\n    const getValueParts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        if (typeof value === \"string\") {\n            const match = value.match(/^([\\d.]+)([MK]?)$/);\n            if (match) {\n                return {\n                    numericValue: match[1],\n                    suffix: match[2]\n                };\n            }\n        }\n        return {\n            numericValue: value,\n            suffix: \"\"\n        };\n    }, [\n        value\n    ]);\n    const { numericValue, suffix } = getValueParts();\n    // Characters to use in the glitch effect\n    const glitchChars = \"0123456789$#@%&^*!?\\xa3€\\xa5\\xa7~\";\n    // Generate a random character from our set\n    const getRandomChar = ()=>glitchChars[Math.floor(Math.random() * glitchChars.length)];\n    // Generate a glitched version of the target value\n    const generateGlitchedValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        let result = \"\";\n        // Keep the original length to avoid layout shifts\n        const padLength = numericValue.length;\n        for(let i = 0; i < padLength; i++){\n            // The closer we get to the final reveal, the more likely to show the correct digit\n            const correctProbability = isRevealed ? 0.9 : 0.3;\n            if (Math.random() > correctProbability) {\n                result += getRandomChar();\n            } else {\n                result += numericValue[i];\n            }\n        }\n        return result + suffix;\n    }, [\n        numericValue,\n        suffix,\n        isRevealed\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Use a fixed delay for all animations instead of a staggered delay based on index\n        const startDelay = 600; // Remove the index * 150 to make all animations start at the same time\n        let glitchCount = 0;\n        const maxGlitches = 15;\n        const initialTimeout = setTimeout(()=>{\n            setIsGlitching(true);\n            // Initial rapid glitch phase\n            const randomChars = Array(numericValue.length).fill(0).map(()=>getRandomChar()).join(\"\");\n            setDisplayValue(randomChars + suffix);\n            // Create an emitter effect that will dispatch multiple glitch updates at varying intervals\n            const emitGlitchUpdate = ()=>{\n                glitchCount++;\n                // Progressive reveal logic\n                if (glitchCount > maxGlitches * 0.6) {\n                    setIsRevealed(true);\n                }\n                if (glitchCount < maxGlitches) {\n                    // During active glitching, update with glitched value\n                    setDisplayValue(generateGlitchedValue());\n                    // Schedule next update with variable timing for more organic feel\n                    const nextDelay = 50 + Math.random() * 100;\n                    setTimeout(emitGlitchUpdate, nextDelay);\n                } else {\n                    // Set the final value\n                    setDisplayValue(value);\n                    // Simply turn off glitching - that's it!\n                    setIsGlitching(false);\n                }\n            };\n            // Start the glitch emitter\n            setTimeout(emitGlitchUpdate, 100);\n        }, startDelay);\n        return ()=>clearTimeout(initialTimeout);\n    }, [\n        value,\n        index,\n        generateGlitchedValue,\n        numericValue.length,\n        suffix\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NumberContainer, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AgencyCount, {\n            ref: nodeRef,\n            \"data-value\": value,\n            style: {\n                \"--index\": \"\".concat(index)\n            },\n            className: isGlitching ? \"glitching\" : \"\",\n            children: [\n                displayValue,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlitchLayer, {\n                    className: isGlitching ? \"active\" : \"\",\n                    children: displayValue\n                }, void 0, false, {\n                    fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n                    lineNumber: 300,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlitchLayer, {\n                    className: isGlitching ? \"active\" : \"\",\n                    children: displayValue\n                }, void 0, false, {\n                    fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n                    lineNumber: 303,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n            lineNumber: 293,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n        lineNumber: 292,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimatedNumber, \"nZtY79CfC8isJ19hx4cM+iVsbJg=\");\n_c3 = AnimatedNumber;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedNumber);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NumberContainer\");\n$RefreshReg$(_c1, \"AgencyCount\");\n$RefreshReg$(_c2, \"GlitchLayer\");\n$RefreshReg$(_c3, \"AnimatedNumber\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0UsTUFBTSxLQUFLO29CQUN2Q1csV0FBV00sa0JBQWtCQztnQkFDL0IsT0FBTztvQkFDTCxzQkFBc0I7b0JBQ3RCaEMsZ0JBQWdCSDtvQkFFaEIseUNBQXlDO29CQUN6Q0ssZUFBZTtnQkFDakI7WUFDRjtZQUVBLDJCQUEyQjtZQUMzQnVCLFdBQVdNLGtCQUFrQjtRQUMvQixHQUFHVjtRQUVILE9BQU8sSUFBTVksYUFBYVQ7SUFDNUIsR0FBRztRQUFDM0I7UUFBT0M7UUFBT2tCO1FBQXVCUixhQUFhTyxNQUFNO1FBQUVOO0tBQU87SUFFckUscUJBQ0UsOERBQUNyQjtRQUFnQkcsT0FBT0E7a0JBQ3RCLDRFQUFDRTtZQUNDeUMsS0FBSzdCO1lBQ0w4QixjQUFZdEM7WUFDWnVDLE9BQU87Z0JBQUUsV0FBVyxHQUFTLE9BQU50QztZQUFRO1lBQy9CdUMsV0FBV3BDLGNBQWMsY0FBYzs7Z0JBRXRDRjs4QkFDRCw4REFBQ0w7b0JBQVkyQyxXQUFXcEMsY0FBYyxXQUFXOzhCQUM5Q0Y7Ozs7Ozs4QkFFSCw4REFBQ0w7b0JBQVkyQyxXQUFXcEMsY0FBYyxXQUFXOzhCQUM5Q0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FwSE1IO01BQUFBO0FBc0hOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkTnVtYmVyLnRzeD85ZjUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBEZWZpbmUga2V5ZnJhbWVzIGFuZCBzdHlsZWQgY29tcG9uZW50cyBmb3IgdGhlIEFuaW1hdGVkTnVtYmVyXG5jb25zdCBOdW1iZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDA7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlIGF0IGNlbnRlcixcbiAgICAgIHJnYmEoMjE4LCAxNjUsIDMyLCAwLjA2KSAwJSxcbiAgICAgIHRyYW5zcGFyZW50IDcwJVxuICAgICk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIH1cblxuICAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuaG92ZXJTZWxlY3Rvcn06aG92ZXIgJjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBBZ2VuY3lDb3VudCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LWZhbWlseTogXCJQcm94aW1hTm92YVNlbWlCb2xkXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZGFhNTIwIDIwJSwgI2Y1ZDc2ZSA4MCUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIxOCwgMTY1LCAzMiwgMC4zKSxcbiAgICAwIDAgMzBweCByZ2JhKDIxOCwgMTY1LCAzMiwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZVkoMjBweCkgcm90YXRlWCgyMGRlZyk7XG4gIGFuaW1hdGlvbjogbnVtYmVyRW50cmFuY2UgMXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuXG4gIEBrZXlmcmFtZXMgbnVtYmVyRW50cmFuY2Uge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgdHJhbnNsYXRlWSg1MHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgZmlsdGVyOiBibHVyKDRweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGVZKDApIHJvdGF0ZVgoMCk7XG4gICAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgfVxuICB9XG5cbiAgJi5nbGl0Y2hpbmcge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjE4LCAxNjUsIDMyLCAwLjgpLFxuICAgICAgMCAwIDIwcHggcmdiYSgyMTgsIDE2NSwgMzIsIDAuNCksIDAgMCAzMHB4IHJnYmEoMjE4LCAxNjUsIDMyLCAwLjIpO1xuICB9XG5gO1xuXG5jb25zdCBHbGl0Y2hMYXllciA9IHN0eWxlZC5zcGFuYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RhYTUyMCAyMCUsICNmNWQ3NmUgODAlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAmLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGFuaW1hdGlvbjogZ2xpdGNoQW5pbWF0aW9uIDAuM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNWI4MzMgMjAlLCAjZjhkZjhiIDgwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGdsaXRjaEFuaW1hdGlvbjI7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjVzO1xuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDMpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYjg4NjBiIDIwJSwgI2RhYTUyMCA4MCUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBnbGl0Y2hBbmltYXRpb24zO1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGdsaXRjaEFuaW1hdGlvbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAxcHgsIDApO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIC0ycHgsIDApO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDFweCwgMCk7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDBweCwgMCk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgLTFweCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDJweCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBnbGl0Y2hBbmltYXRpb24yIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgLTFweCwgMCk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDJweCwgMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMXB4LCAwKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtMnB4LCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDBweCwgMCk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBnbGl0Y2hBbmltYXRpb24zIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMnB4LCAwKTtcbiAgICB9XG4gICAgMzMlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgLTFweCwgMCk7XG4gICAgfVxuICAgIDY2JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMHB4LCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMXB4LCAwKTtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIEluaXRpYWxpemUgdGhlbWUgb2JqZWN0IHdpdGggdGhlIGhvdmVyU2VsZWN0b3JcbmNvbnN0IHRoZW1lID0ge1xuICBob3ZlclNlbGVjdG9yOiBcImRpdlwiLFxufTtcblxuaW50ZXJmYWNlIEFuaW1hdGVkTnVtYmVyUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xufVxuXG5jb25zdCBBbmltYXRlZE51bWJlcjogUmVhY3QuRkM8QW5pbWF0ZWROdW1iZXJQcm9wcz4gPSAoeyB2YWx1ZSwgaW5kZXggfSkgPT4ge1xuICBjb25zdCBbZGlzcGxheVZhbHVlLCBzZXREaXNwbGF5VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0dsaXRjaGluZywgc2V0SXNHbGl0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNSZXZlYWxlZCwgc2V0SXNSZXZlYWxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5vZGVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gUGFyc2UgbnVtZXJpYyB2YWx1ZSBhbmQgc3VmZml4XG4gIGNvbnN0IGdldFZhbHVlUGFydHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXihbXFxkLl0rKShbTUtdPykkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBudW1lcmljVmFsdWU6IG1hdGNoWzFdLFxuICAgICAgICAgIHN1ZmZpeDogbWF0Y2hbMl0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBudW1lcmljVmFsdWU6IHZhbHVlLFxuICAgICAgc3VmZml4OiBcIlwiLFxuICAgIH07XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IHsgbnVtZXJpY1ZhbHVlLCBzdWZmaXggfSA9IGdldFZhbHVlUGFydHMoKTtcblxuICAvLyBDaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgZ2xpdGNoIGVmZmVjdFxuICBjb25zdCBnbGl0Y2hDaGFycyA9IFwiMDEyMzQ1Njc4OSQjQCUmXiohP8Kj4oKswqXCp35cIjtcblxuICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBjaGFyYWN0ZXIgZnJvbSBvdXIgc2V0XG4gIGNvbnN0IGdldFJhbmRvbUNoYXIgPSAoKSA9PlxuICAgIGdsaXRjaENoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdsaXRjaENoYXJzLmxlbmd0aCldO1xuXG4gIC8vIEdlbmVyYXRlIGEgZ2xpdGNoZWQgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0IHZhbHVlXG4gIGNvbnN0IGdlbmVyYXRlR2xpdGNoZWRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAvLyBLZWVwIHRoZSBvcmlnaW5hbCBsZW5ndGggdG8gYXZvaWQgbGF5b3V0IHNoaWZ0c1xuICAgIGNvbnN0IHBhZExlbmd0aCA9IG51bWVyaWNWYWx1ZS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZExlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUaGUgY2xvc2VyIHdlIGdldCB0byB0aGUgZmluYWwgcmV2ZWFsLCB0aGUgbW9yZSBsaWtlbHkgdG8gc2hvdyB0aGUgY29ycmVjdCBkaWdpdFxuICAgICAgY29uc3QgY29ycmVjdFByb2JhYmlsaXR5ID0gaXNSZXZlYWxlZCA/IDAuOSA6IDAuMztcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gY29ycmVjdFByb2JhYmlsaXR5KSB7XG4gICAgICAgIHJlc3VsdCArPSBnZXRSYW5kb21DaGFyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gbnVtZXJpY1ZhbHVlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ICsgc3VmZml4O1xuICB9LCBbbnVtZXJpY1ZhbHVlLCBzdWZmaXgsIGlzUmV2ZWFsZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFVzZSBhIGZpeGVkIGRlbGF5IGZvciBhbGwgYW5pbWF0aW9ucyBpbnN0ZWFkIG9mIGEgc3RhZ2dlcmVkIGRlbGF5IGJhc2VkIG9uIGluZGV4XG4gICAgY29uc3Qgc3RhcnREZWxheSA9IDYwMDsgLy8gUmVtb3ZlIHRoZSBpbmRleCAqIDE1MCB0byBtYWtlIGFsbCBhbmltYXRpb25zIHN0YXJ0IGF0IHRoZSBzYW1lIHRpbWVcbiAgICBsZXQgZ2xpdGNoQ291bnQgPSAwO1xuICAgIGNvbnN0IG1heEdsaXRjaGVzID0gMTU7XG5cbiAgICBjb25zdCBpbml0aWFsVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNHbGl0Y2hpbmcodHJ1ZSk7XG5cbiAgICAgIC8vIEluaXRpYWwgcmFwaWQgZ2xpdGNoIHBoYXNlXG4gICAgICBjb25zdCByYW5kb21DaGFycyA9IEFycmF5KG51bWVyaWNWYWx1ZS5sZW5ndGgpXG4gICAgICAgIC5maWxsKDApXG4gICAgICAgIC5tYXAoKCkgPT4gZ2V0UmFuZG9tQ2hhcigpKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgIHNldERpc3BsYXlWYWx1ZShyYW5kb21DaGFycyArIHN1ZmZpeCk7XG5cbiAgICAgIC8vIENyZWF0ZSBhbiBlbWl0dGVyIGVmZmVjdCB0aGF0IHdpbGwgZGlzcGF0Y2ggbXVsdGlwbGUgZ2xpdGNoIHVwZGF0ZXMgYXQgdmFyeWluZyBpbnRlcnZhbHNcbiAgICAgIGNvbnN0IGVtaXRHbGl0Y2hVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGdsaXRjaENvdW50Kys7XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3NpdmUgcmV2ZWFsIGxvZ2ljXG4gICAgICAgIGlmIChnbGl0Y2hDb3VudCA+IG1heEdsaXRjaGVzICogMC42KSB7XG4gICAgICAgICAgc2V0SXNSZXZlYWxlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnbGl0Y2hDb3VudCA8IG1heEdsaXRjaGVzKSB7XG4gICAgICAgICAgLy8gRHVyaW5nIGFjdGl2ZSBnbGl0Y2hpbmcsIHVwZGF0ZSB3aXRoIGdsaXRjaGVkIHZhbHVlXG4gICAgICAgICAgc2V0RGlzcGxheVZhbHVlKGdlbmVyYXRlR2xpdGNoZWRWYWx1ZSgpKTtcblxuICAgICAgICAgIC8vIFNjaGVkdWxlIG5leHQgdXBkYXRlIHdpdGggdmFyaWFibGUgdGltaW5nIGZvciBtb3JlIG9yZ2FuaWMgZmVlbFxuICAgICAgICAgIGNvbnN0IG5leHREZWxheSA9IDUwICsgTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgICAgICBzZXRUaW1lb3V0KGVtaXRHbGl0Y2hVcGRhdGUsIG5leHREZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBmaW5hbCB2YWx1ZVxuICAgICAgICAgIHNldERpc3BsYXlWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgICAgICAvLyBTaW1wbHkgdHVybiBvZmYgZ2xpdGNoaW5nIC0gdGhhdCdzIGl0IVxuICAgICAgICAgIHNldElzR2xpdGNoaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gU3RhcnQgdGhlIGdsaXRjaCBlbWl0dGVyXG4gICAgICBzZXRUaW1lb3V0KGVtaXRHbGl0Y2hVcGRhdGUsIDEwMCk7XG4gICAgfSwgc3RhcnREZWxheSk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGluaXRpYWxUaW1lb3V0KTtcbiAgfSwgW3ZhbHVlLCBpbmRleCwgZ2VuZXJhdGVHbGl0Y2hlZFZhbHVlLCBudW1lcmljVmFsdWUubGVuZ3RoLCBzdWZmaXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxOdW1iZXJDb250YWluZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxBZ2VuY3lDb3VudFxuICAgICAgICByZWY9e25vZGVSZWZ9XG4gICAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlfVxuICAgICAgICBzdHlsZT17eyBcIi0taW5kZXhcIjogYCR7aW5kZXh9YCB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XG4gICAgICAgIGNsYXNzTmFtZT17aXNHbGl0Y2hpbmcgPyBcImdsaXRjaGluZ1wiIDogXCJcIn1cbiAgICAgID5cbiAgICAgICAge2Rpc3BsYXlWYWx1ZX1cbiAgICAgICAgPEdsaXRjaExheWVyIGNsYXNzTmFtZT17aXNHbGl0Y2hpbmcgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAge2Rpc3BsYXlWYWx1ZX1cbiAgICAgICAgPC9HbGl0Y2hMYXllcj5cbiAgICAgICAgPEdsaXRjaExheWVyIGNsYXNzTmFtZT17aXNHbGl0Y2hpbmcgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAge2Rpc3BsYXlWYWx1ZX1cbiAgICAgICAgPC9HbGl0Y2hMYXllcj5cbiAgICAgIDwvQWdlbmN5Q291bnQ+XG4gICAgPC9OdW1iZXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZE51bWJlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJzdHlsZWQiLCJOdW1iZXJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiaG92ZXJTZWxlY3RvciIsIkFnZW5jeUNvdW50IiwiR2xpdGNoTGF5ZXIiLCJzcGFuIiwiQW5pbWF0ZWROdW1iZXIiLCJ2YWx1ZSIsImluZGV4IiwiZGlzcGxheVZhbHVlIiwic2V0RGlzcGxheVZhbHVlIiwiaXNHbGl0Y2hpbmciLCJzZXRJc0dsaXRjaGluZyIsImlzUmV2ZWFsZWQiLCJzZXRJc1JldmVhbGVkIiwibm9kZVJlZiIsImdldFZhbHVlUGFydHMiLCJtYXRjaCIsIm51bWVyaWNWYWx1ZSIsInN1ZmZpeCIsImdsaXRjaENoYXJzIiwiZ2V0UmFuZG9tQ2hhciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImdlbmVyYXRlR2xpdGNoZWRWYWx1ZSIsInJlc3VsdCIsInBhZExlbmd0aCIsImkiLCJjb3JyZWN0UHJvYmFiaWxpdHkiLCJzdGFydERlbGF5IiwiZ2xpdGNoQ291bnQiLCJtYXhHbGl0Y2hlcyIsImluaXRpYWxUaW1lb3V0Iiwic2V0VGltZW91dCIsInJhbmRvbUNoYXJzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiam9pbiIsImVtaXRHbGl0Y2hVcGRhdGUiLCJuZXh0RGVsYXkiLCJjbGVhclRpbWVvdXQiLCJyZWYiLCJkYXRhLXZhbHVlIiwic3R5bGUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedNumber.tsx\n"));

/***/ })

});