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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0.5rem 0;\\n\\n  &::before {\\n    content: \"\";\\n    position: absolute;\\n    width: 150px;\\n    height: 150px;\\n    border-radius: 50%;\\n    background: radial-gradient(\\n      circle at center,\\n      rgba(218, 165, 32, 0.06) 0%,\\n      transparent 70%\\n    );\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    z-index: -1;\\n    opacity: 0;\\n    transition: opacity 0.3s ease;\\n  }\\n\\n  ',\n        \":hover &::before {\\n    opacity: 1;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  font-size: 3.5rem;\\n  font-weight: 700;\\n  color: transparent;\\n  margin: 1rem 0;\\n  font-family: \"ProximaNovaSemiBold\", sans-serif;\\n  line-height: 1;\\n  background: linear-gradient(135deg, #daa520 20%, #f5d76e 80%);\\n  background-clip: text;\\n  -webkit-background-clip: text;\\n  position: relative;\\n  text-shadow: 0 0 10px rgba(218, 165, 32, 0.3),\\n    0 0 30px rgba(218, 165, 32, 0.1);\\n  opacity: 0;\\n  transform: perspective(1000px) translateY(20px) rotateX(20deg);\\n  animation: numberEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\\n  animation-delay: 0s;\\n  will-change: transform, opacity;\\n  display: inline-block;\\n  text-align: center;\\n  width: 100%;\\n  animation-fill-mode: forwards;\\n\\n  @keyframes numberEntrance {\\n    0% {\\n      opacity: 0;\\n      transform: perspective(1000px) translateY(50px) rotateX(20deg);\\n      filter: blur(8px);\\n    }\\n    50% {\\n      opacity: 0.8;\\n      filter: blur(4px);\\n    }\\n    100% {\\n      opacity: 1;\\n      transform: perspective(1000px) translateY(0) rotateX(0);\\n      filter: blur(0);\\n    }\\n  }\\n\\n  &.glitching {\\n    animation: none;\\n    opacity: 1;\\n    transform: none;\\n    filter: none;\\n    text-shadow: 0 0 10px rgba(218, 165, 32, 0.8),\\n      0 0 20px rgba(218, 165, 32, 0.4), 0 0 30px rgba(218, 165, 32, 0.2);\\n  }\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  opacity: 0;\\n  transform: translate3d(0, 0, 0);\\n  background: linear-gradient(135deg, #daa520 20%, #f5d76e 80%);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  color: transparent;\\n  pointer-events: none;\\n\\n  &.active {\\n    opacity: 0.8;\\n    animation: glitchAnimation 0.3s ease-in-out infinite alternate;\\n  }\\n\\n  &:nth-child(2) {\\n    background: linear-gradient(135deg, #e5b833 20%, #f8df8b 80%);\\n    -webkit-background-clip: text;\\n    background-clip: text;\\n\\n    &.active {\\n      animation-name: glitchAnimation2;\\n      animation-duration: 0.3s;\\n    }\\n  }\\n\\n  &:nth-child(3) {\\n    background: linear-gradient(135deg, #b8860b 20%, #daa520 80%);\\n    -webkit-background-clip: text;\\n    background-clip: text;\\n\\n    &.active {\\n      animation-name: glitchAnimation3;\\n      animation-duration: 0.3s;\\n    }\\n  }\\n\\n  @keyframes glitchAnimation {\\n    0% {\\n      transform: translate3d(-3px, 1px, 0);\\n    }\\n    20% {\\n      transform: translate3d(2px, -2px, 0);\\n    }\\n    40% {\\n      transform: translate3d(0px, 1px, 0);\\n    }\\n    60% {\\n      transform: translate3d(-2px, 0px, 0);\\n    }\\n    80% {\\n      transform: translate3d(1px, -1px, 0);\\n    }\\n    100% {\\n      transform: translate3d(1px, 2px, 0);\\n    }\\n  }\\n\\n  @keyframes glitchAnimation2 {\\n    0% {\\n      transform: translate3d(2px, -1px, 0);\\n    }\\n    25% {\\n      transform: translate3d(-3px, 2px, 0);\\n    }\\n    50% {\\n      transform: translate3d(1px, 1px, 0);\\n    }\\n    75% {\\n      transform: translate3d(0px, -2px, 0);\\n    }\\n    100% {\\n      transform: translate3d(-1px, 0px, 0);\\n    }\\n  }\\n\\n  @keyframes glitchAnimation3 {\\n    0% {\\n      transform: translate3d(1px, 2px, 0);\\n    }\\n    33% {\\n      transform: translate3d(-2px, -1px, 0);\\n    }\\n    66% {\\n      transform: translate3d(1px, 0px, 0);\\n    }\\n    100% {\\n      transform: translate3d(0px, 1px, 0);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n// Define keyframes and styled components for the AnimatedNumber\nconst NumberContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), (props)=>props.theme.hoverSelector);\n_c = NumberContainer;\nconst AgencyCount = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c1 = AgencyCount;\nconst GlitchLayer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject2());\n_c2 = GlitchLayer;\n// Initialize theme object with the hoverSelector\nconst theme = {\n    hoverSelector: \"div\"\n};\nconst AnimatedNumber = (param)=>{\n    let { value, index } = param;\n    _s();\n    const [displayValue, setDisplayValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isGlitching, setIsGlitching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isRevealed, setIsRevealed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const animationRunningRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    // Parse numeric value and suffix\n    const getValueParts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        if (typeof value === \"string\") {\n            const match = value.match(/^([\\d.]+)([MK]?)$/);\n            if (match) {\n                return {\n                    numericValue: match[1],\n                    suffix: match[2]\n                };\n            }\n        }\n        return {\n            numericValue: value,\n            suffix: \"\"\n        };\n    }, [\n        value\n    ]);\n    const { numericValue, suffix } = getValueParts();\n    // Characters to use in the glitch effect\n    const glitchChars = \"0123456789$#@%&^*!?\\xa3€\\xa5\\xa7~\";\n    // Generate a random character from our set\n    const getRandomChar = ()=>glitchChars[Math.floor(Math.random() * glitchChars.length)];\n    // Generate a glitched version of the target value\n    const generateGlitchedValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        let result = \"\";\n        // Keep the original length to avoid layout shifts\n        const padLength = numericValue.length;\n        for(let i = 0; i < padLength; i++){\n            // The closer we get to the final reveal, the more likely to show the correct digit\n            const correctProbability = isRevealed ? 0.9 : 0.3;\n            if (Math.random() > correctProbability) {\n                result += getRandomChar();\n            } else {\n                result += numericValue[i];\n            }\n        }\n        return result + suffix;\n    }, [\n        numericValue,\n        suffix,\n        isRevealed\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Prevent running animation if it's already in progress or has completed\n        if (animationRunningRef.current) return;\n        animationRunningRef.current = true;\n        // Use a fixed delay for all animations instead of a staggered delay based on index\n        const startDelay = 600; // Remove the index * 150 to make all animations start at the same time\n        let glitchCount = 0;\n        const maxGlitches = 15;\n        const initialTimeout = setTimeout(()=>{\n            setIsGlitching(true);\n            // Initial rapid glitch phase\n            const randomChars = Array(numericValue.length).fill(0).map(()=>getRandomChar()).join(\"\");\n            setDisplayValue(randomChars + suffix);\n            // Create an emitter effect that will dispatch multiple glitch updates at fixed intervals\n            const emitGlitchUpdate = ()=>{\n                glitchCount++;\n                // Progressive reveal logic\n                if (glitchCount > maxGlitches * 0.6) {\n                    setIsRevealed(true);\n                }\n                if (glitchCount < maxGlitches) {\n                    // During active glitching, update with glitched value\n                    setDisplayValue(generateGlitchedValue());\n                    // Use fixed timing for more consistent duration across all animations\n                    const nextDelay = 80; // Fixed delay instead of random\n                    setTimeout(emitGlitchUpdate, nextDelay);\n                } else {\n                    // Set the final value\n                    setDisplayValue(value);\n                    // Simply turn off glitching - that's it!\n                    setIsGlitching(false);\n                }\n            };\n            // Start the glitch emitter\n            setTimeout(emitGlitchUpdate, 100);\n        }, startDelay);\n        return ()=>{\n            clearTimeout(initialTimeout);\n            // Reset the animation running flag if component unmounts\n            animationRunningRef.current = false;\n        };\n    // Use a more stable dependency array that won't trigger re-renders\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        value,\n        numericValue.length,\n        suffix\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NumberContainer, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AgencyCount, {\n            ref: nodeRef,\n            \"data-value\": value,\n            className: isGlitching ? \"glitching\" : \"\",\n            children: [\n                displayValue,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlitchLayer, {\n                    className: isGlitching ? \"active\" : \"\",\n                    children: displayValue\n                }, void 0, false, {\n                    fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n                    lineNumber: 311,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlitchLayer, {\n                    className: isGlitching ? \"active\" : \"\",\n                    children: displayValue\n                }, void 0, false, {\n                    fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n                    lineNumber: 314,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n            lineNumber: 305,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/colinsnyder/Desktop/government/frontend/src/components/AnimatedNumber.tsx\",\n        lineNumber: 304,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimatedNumber, \"x77gmTuXoBTxdrn2zUgGpvNA7NM=\");\n_c3 = AnimatedNumber;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedNumber);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"NumberContainer\");\n$RefreshReg$(_c1, \"AgencyCount\");\n$RefreshReg$(_c2, \"GlitchLayer\");\n$RefreshReg$(_c3, \"AnimatedNumber\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDaEI7Z0JBRUEsSUFBSW9CLGNBQWNDLGFBQWE7b0JBQzdCLHNEQUFzRDtvQkFDdER6QixnQkFBZ0JpQjtvQkFFaEIsc0VBQXNFO29CQUN0RSxNQUFNaUIsWUFBWSxJQUFJLGdDQUFnQztvQkFDdERQLFdBQVdNLGtCQUFrQkM7Z0JBQy9CLE9BQU87b0JBQ0wsc0JBQXNCO29CQUN0QmxDLGdCQUFnQkg7b0JBRWhCLHlDQUF5QztvQkFDekNLLGVBQWU7Z0JBQ2pCO1lBQ0Y7WUFFQSwyQkFBMkI7WUFDM0J5QixXQUFXTSxrQkFBa0I7UUFDL0IsR0FBR1Y7UUFFSCxPQUFPO1lBQ0xZLGFBQWFUO1lBQ2IseURBQXlEO1lBQ3pEcEIsb0JBQW9CZ0IsT0FBTyxHQUFHO1FBQ2hDO0lBQ0EsbUVBQW1FO0lBQ25FLHVEQUF1RDtJQUN6RCxHQUFHO1FBQUN6QjtRQUFPWSxhQUFhTyxNQUFNO1FBQUVOO0tBQU87SUFFdkMscUJBQ0UsOERBQUN0QjtRQUFnQkcsT0FBT0E7a0JBQ3RCLDRFQUFDRTtZQUNDMkMsS0FBSy9CO1lBQ0xnQyxjQUFZeEM7WUFDWnlDLFdBQVdyQyxjQUFjLGNBQWM7O2dCQUV0Q0Y7OEJBQ0QsOERBQUNMO29CQUFZNEMsV0FBV3JDLGNBQWMsV0FBVzs4QkFDOUNGOzs7Ozs7OEJBRUgsOERBQUNMO29CQUFZNEMsV0FBV3JDLGNBQWMsV0FBVzs4QkFDOUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBL0hNSDtNQUFBQTtBQWlJTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZE51bWJlci50c3g/OWY1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gRGVmaW5lIGtleWZyYW1lcyBhbmQgc3R5bGVkIGNvbXBvbmVudHMgZm9yIHRoZSBBbmltYXRlZE51bWJlclxuY29uc3QgTnVtYmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgICByZ2JhKDIxOCwgMTY1LCAzMiwgMC4wNikgMCUsXG4gICAgICB0cmFuc3BhcmVudCA3MCVcbiAgICApO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB9XG5cbiAgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmhvdmVyU2VsZWN0b3J9OmhvdmVyICY6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgQWdlbmN5Q291bnQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDFyZW0gMDtcbiAgZm9udC1mYW1pbHk6IFwiUHJveGltYU5vdmFTZW1pQm9sZFwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RhYTUyMCAyMCUsICNmNWQ3NmUgODAlKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyMTgsIDE2NSwgMzIsIDAuMyksXG4gICAgMCAwIDMwcHggcmdiYSgyMTgsIDE2NSwgMzIsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGVZKDIwcHgpIHJvdGF0ZVgoMjBkZWcpO1xuICBhbmltYXRpb246IG51bWJlckVudHJhbmNlIDFzIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcblxuICBAa2V5ZnJhbWVzIG51bWJlckVudHJhbmNlIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZVkoNTBweCkgcm90YXRlWCgyMGRlZyk7XG4gICAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGZpbHRlcjogYmx1cig0cHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgdHJhbnNsYXRlWSgwKSByb3RhdGVYKDApO1xuICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgIH1cbiAgfVxuXG4gICYuZ2xpdGNoaW5nIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgZmlsdGVyOiBub25lO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCByZ2JhKDIxOCwgMTY1LCAzMiwgMC44KSxcbiAgICAgIDAgMCAyMHB4IHJnYmEoMjE4LCAxNjUsIDMyLCAwLjQpLCAwIDAgMzBweCByZ2JhKDIxOCwgMTY1LCAzMiwgMC4yKTtcbiAgfVxuYDtcblxuY29uc3QgR2xpdGNoTGF5ZXIgPSBzdHlsZWQuc3BhbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkYWE1MjAgMjAlLCAjZjVkNzZlIDgwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBhbmltYXRpb246IGdsaXRjaEFuaW1hdGlvbiAwLjNzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgfVxuXG4gICY6bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTViODMzIDIwJSwgI2Y4ZGY4YiA4MCUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBnbGl0Y2hBbmltYXRpb24yO1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIH1cbiAgfVxuXG4gICY6bnRoLWNoaWxkKDMpIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYjg4NjBiIDIwJSwgI2RhYTUyMCA4MCUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBnbGl0Y2hBbmltYXRpb24zO1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgZ2xpdGNoQW5pbWF0aW9uIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDFweCwgMCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgLTJweCwgMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMXB4LCAwKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMHB4LCAwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAtMXB4LCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMnB4LCAwKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGdsaXRjaEFuaW1hdGlvbjIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAtMXB4LCAwKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMnB4LCAwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAxcHgsIDApO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0ycHgsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMHB4LCAwKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGdsaXRjaEFuaW1hdGlvbjMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAycHgsIDApO1xuICAgIH1cbiAgICAzMyUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAtMXB4LCAwKTtcbiAgICB9XG4gICAgNjYlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwcHgsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAxcHgsIDApO1xuICAgIH1cbiAgfVxuYDtcblxuLy8gSW5pdGlhbGl6ZSB0aGVtZSBvYmplY3Qgd2l0aCB0aGUgaG92ZXJTZWxlY3RvclxuY29uc3QgdGhlbWUgPSB7XG4gIGhvdmVyU2VsZWN0b3I6IFwiZGl2XCIsXG59O1xuXG5pbnRlcmZhY2UgQW5pbWF0ZWROdW1iZXJQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGluZGV4OiBudW1iZXI7XG59XG5cbmNvbnN0IEFuaW1hdGVkTnVtYmVyOiBSZWFjdC5GQzxBbmltYXRlZE51bWJlclByb3BzPiA9ICh7IHZhbHVlLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IFtkaXNwbGF5VmFsdWUsIHNldERpc3BsYXlWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzR2xpdGNoaW5nLCBzZXRJc0dsaXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JldmVhbGVkLCBzZXRJc1JldmVhbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgbm9kZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgYW5pbWF0aW9uUnVubmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgLy8gUGFyc2UgbnVtZXJpYyB2YWx1ZSBhbmQgc3VmZml4XG4gIGNvbnN0IGdldFZhbHVlUGFydHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgbWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXihbXFxkLl0rKShbTUtdPykkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBudW1lcmljVmFsdWU6IG1hdGNoWzFdLFxuICAgICAgICAgIHN1ZmZpeDogbWF0Y2hbMl0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBudW1lcmljVmFsdWU6IHZhbHVlLFxuICAgICAgc3VmZml4OiBcIlwiLFxuICAgIH07XG4gIH0sIFt2YWx1ZV0pO1xuXG4gIGNvbnN0IHsgbnVtZXJpY1ZhbHVlLCBzdWZmaXggfSA9IGdldFZhbHVlUGFydHMoKTtcblxuICAvLyBDaGFyYWN0ZXJzIHRvIHVzZSBpbiB0aGUgZ2xpdGNoIGVmZmVjdFxuICBjb25zdCBnbGl0Y2hDaGFycyA9IFwiMDEyMzQ1Njc4OSQjQCUmXiohP8Kj4oKswqXCp35cIjtcblxuICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBjaGFyYWN0ZXIgZnJvbSBvdXIgc2V0XG4gIGNvbnN0IGdldFJhbmRvbUNoYXIgPSAoKSA9PlxuICAgIGdsaXRjaENoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdsaXRjaENoYXJzLmxlbmd0aCldO1xuXG4gIC8vIEdlbmVyYXRlIGEgZ2xpdGNoZWQgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0IHZhbHVlXG4gIGNvbnN0IGdlbmVyYXRlR2xpdGNoZWRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAvLyBLZWVwIHRoZSBvcmlnaW5hbCBsZW5ndGggdG8gYXZvaWQgbGF5b3V0IHNoaWZ0c1xuICAgIGNvbnN0IHBhZExlbmd0aCA9IG51bWVyaWNWYWx1ZS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZExlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUaGUgY2xvc2VyIHdlIGdldCB0byB0aGUgZmluYWwgcmV2ZWFsLCB0aGUgbW9yZSBsaWtlbHkgdG8gc2hvdyB0aGUgY29ycmVjdCBkaWdpdFxuICAgICAgY29uc3QgY29ycmVjdFByb2JhYmlsaXR5ID0gaXNSZXZlYWxlZCA/IDAuOSA6IDAuMztcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gY29ycmVjdFByb2JhYmlsaXR5KSB7XG4gICAgICAgIHJlc3VsdCArPSBnZXRSYW5kb21DaGFyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gbnVtZXJpY1ZhbHVlW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ICsgc3VmZml4O1xuICB9LCBbbnVtZXJpY1ZhbHVlLCBzdWZmaXgsIGlzUmV2ZWFsZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFByZXZlbnQgcnVubmluZyBhbmltYXRpb24gaWYgaXQncyBhbHJlYWR5IGluIHByb2dyZXNzIG9yIGhhcyBjb21wbGV0ZWRcbiAgICBpZiAoYW5pbWF0aW9uUnVubmluZ1JlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBhbmltYXRpb25SdW5uaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgLy8gVXNlIGEgZml4ZWQgZGVsYXkgZm9yIGFsbCBhbmltYXRpb25zIGluc3RlYWQgb2YgYSBzdGFnZ2VyZWQgZGVsYXkgYmFzZWQgb24gaW5kZXhcbiAgICBjb25zdCBzdGFydERlbGF5ID0gNjAwOyAvLyBSZW1vdmUgdGhlIGluZGV4ICogMTUwIHRvIG1ha2UgYWxsIGFuaW1hdGlvbnMgc3RhcnQgYXQgdGhlIHNhbWUgdGltZVxuICAgIGxldCBnbGl0Y2hDb3VudCA9IDA7XG4gICAgY29uc3QgbWF4R2xpdGNoZXMgPSAxNTtcblxuICAgIGNvbnN0IGluaXRpYWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0dsaXRjaGluZyh0cnVlKTtcblxuICAgICAgLy8gSW5pdGlhbCByYXBpZCBnbGl0Y2ggcGhhc2VcbiAgICAgIGNvbnN0IHJhbmRvbUNoYXJzID0gQXJyYXkobnVtZXJpY1ZhbHVlLmxlbmd0aClcbiAgICAgICAgLmZpbGwoMClcbiAgICAgICAgLm1hcCgoKSA9PiBnZXRSYW5kb21DaGFyKCkpXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgc2V0RGlzcGxheVZhbHVlKHJhbmRvbUNoYXJzICsgc3VmZml4KTtcblxuICAgICAgLy8gQ3JlYXRlIGFuIGVtaXR0ZXIgZWZmZWN0IHRoYXQgd2lsbCBkaXNwYXRjaCBtdWx0aXBsZSBnbGl0Y2ggdXBkYXRlcyBhdCBmaXhlZCBpbnRlcnZhbHNcbiAgICAgIGNvbnN0IGVtaXRHbGl0Y2hVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGdsaXRjaENvdW50Kys7XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3NpdmUgcmV2ZWFsIGxvZ2ljXG4gICAgICAgIGlmIChnbGl0Y2hDb3VudCA+IG1heEdsaXRjaGVzICogMC42KSB7XG4gICAgICAgICAgc2V0SXNSZXZlYWxlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnbGl0Y2hDb3VudCA8IG1heEdsaXRjaGVzKSB7XG4gICAgICAgICAgLy8gRHVyaW5nIGFjdGl2ZSBnbGl0Y2hpbmcsIHVwZGF0ZSB3aXRoIGdsaXRjaGVkIHZhbHVlXG4gICAgICAgICAgc2V0RGlzcGxheVZhbHVlKGdlbmVyYXRlR2xpdGNoZWRWYWx1ZSgpKTtcblxuICAgICAgICAgIC8vIFVzZSBmaXhlZCB0aW1pbmcgZm9yIG1vcmUgY29uc2lzdGVudCBkdXJhdGlvbiBhY3Jvc3MgYWxsIGFuaW1hdGlvbnNcbiAgICAgICAgICBjb25zdCBuZXh0RGVsYXkgPSA4MDsgLy8gRml4ZWQgZGVsYXkgaW5zdGVhZCBvZiByYW5kb21cbiAgICAgICAgICBzZXRUaW1lb3V0KGVtaXRHbGl0Y2hVcGRhdGUsIG5leHREZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2V0IHRoZSBmaW5hbCB2YWx1ZVxuICAgICAgICAgIHNldERpc3BsYXlWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgICAgICAvLyBTaW1wbHkgdHVybiBvZmYgZ2xpdGNoaW5nIC0gdGhhdCdzIGl0IVxuICAgICAgICAgIHNldElzR2xpdGNoaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gU3RhcnQgdGhlIGdsaXRjaCBlbWl0dGVyXG4gICAgICBzZXRUaW1lb3V0KGVtaXRHbGl0Y2hVcGRhdGUsIDEwMCk7XG4gICAgfSwgc3RhcnREZWxheSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGluaXRpYWxUaW1lb3V0KTtcbiAgICAgIC8vIFJlc2V0IHRoZSBhbmltYXRpb24gcnVubmluZyBmbGFnIGlmIGNvbXBvbmVudCB1bm1vdW50c1xuICAgICAgYW5pbWF0aW9uUnVubmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBVc2UgYSBtb3JlIHN0YWJsZSBkZXBlbmRlbmN5IGFycmF5IHRoYXQgd29uJ3QgdHJpZ2dlciByZS1yZW5kZXJzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbdmFsdWUsIG51bWVyaWNWYWx1ZS5sZW5ndGgsIHN1ZmZpeF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE51bWJlckNvbnRhaW5lciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEFnZW5jeUNvdW50XG4gICAgICAgIHJlZj17bm9kZVJlZn1cbiAgICAgICAgZGF0YS12YWx1ZT17dmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17aXNHbGl0Y2hpbmcgPyBcImdsaXRjaGluZ1wiIDogXCJcIn1cbiAgICAgID5cbiAgICAgICAge2Rpc3BsYXlWYWx1ZX1cbiAgICAgICAgPEdsaXRjaExheWVyIGNsYXNzTmFtZT17aXNHbGl0Y2hpbmcgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAge2Rpc3BsYXlWYWx1ZX1cbiAgICAgICAgPC9HbGl0Y2hMYXllcj5cbiAgICAgICAgPEdsaXRjaExheWVyIGNsYXNzTmFtZT17aXNHbGl0Y2hpbmcgPyBcImFjdGl2ZVwiIDogXCJcIn0+XG4gICAgICAgICAge2Rpc3BsYXlWYWx1ZX1cbiAgICAgICAgPC9HbGl0Y2hMYXllcj5cbiAgICAgIDwvQWdlbmN5Q291bnQ+XG4gICAgPC9OdW1iZXJDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZE51bWJlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJzdHlsZWQiLCJOdW1iZXJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiaG92ZXJTZWxlY3RvciIsIkFnZW5jeUNvdW50IiwiR2xpdGNoTGF5ZXIiLCJzcGFuIiwiQW5pbWF0ZWROdW1iZXIiLCJ2YWx1ZSIsImluZGV4IiwiZGlzcGxheVZhbHVlIiwic2V0RGlzcGxheVZhbHVlIiwiaXNHbGl0Y2hpbmciLCJzZXRJc0dsaXRjaGluZyIsImlzUmV2ZWFsZWQiLCJzZXRJc1JldmVhbGVkIiwibm9kZVJlZiIsImFuaW1hdGlvblJ1bm5pbmdSZWYiLCJnZXRWYWx1ZVBhcnRzIiwibWF0Y2giLCJudW1lcmljVmFsdWUiLCJzdWZmaXgiLCJnbGl0Y2hDaGFycyIsImdldFJhbmRvbUNoYXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJnZW5lcmF0ZUdsaXRjaGVkVmFsdWUiLCJyZXN1bHQiLCJwYWRMZW5ndGgiLCJpIiwiY29ycmVjdFByb2JhYmlsaXR5IiwiY3VycmVudCIsInN0YXJ0RGVsYXkiLCJnbGl0Y2hDb3VudCIsIm1heEdsaXRjaGVzIiwiaW5pdGlhbFRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmFuZG9tQ2hhcnMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJqb2luIiwiZW1pdEdsaXRjaFVwZGF0ZSIsIm5leHREZWxheSIsImNsZWFyVGltZW91dCIsInJlZiIsImRhdGEtdmFsdWUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedNumber.tsx\n"));

/***/ })

});