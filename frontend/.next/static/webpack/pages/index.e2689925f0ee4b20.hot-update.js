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

/***/ "./src/store/agencyStore.ts":
/*!**********************************!*\
  !*** ./src/store/agencyStore.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAgencyStore: function() { return /* binding */ useAgencyStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var _apiConfigStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiConfigStore */ \"./src/store/apiConfigStore.ts\");\n\n\n/**\n * Store for managing agency names and word count data\n * Fetches agency information from the backend API\n */ const useAgencyStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        agencies: [],\n        agencyNames: [],\n        isLoading: false,\n        error: null,\n        setAgencyNames: (agencies)=>set({\n                agencyNames: agencies\n            }),\n        setAgencies: (agencies)=>{\n            // Extract agency names from the agency data\n            const agencyNames = agencies.map((agency)=>agency.name);\n            set({\n                agencies,\n                agencyNames\n            });\n        },\n        fetchAgencyNames: async ()=>{\n            const baseUrl = _apiConfigStore__WEBPACK_IMPORTED_MODULE_0__.useApiConfigStore.getState().baseUrl;\n            if (!baseUrl) {\n                set({\n                    error: \"API base URL not configured\"\n                });\n                return;\n            }\n            try {\n                set({\n                    isLoading: true,\n                    error: null\n                });\n                const response = await fetch(\"\".concat(baseUrl, \"/api/agency-names\"));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch agency names: \".concat(response.statusText));\n                }\n                const data = await response.json();\n                if (data.agency_names && Array.isArray(data.agency_names)) {\n                    set({\n                        agencyNames: data.agency_names,\n                        isLoading: false\n                    });\n                } else {\n                    throw new Error(\"Invalid response format: agency_names array not found\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching agency names:\", error);\n                set({\n                    error: error instanceof Error ? error.message : \"Unknown error occurred\",\n                    isLoading: false\n                });\n            }\n        },\n        fetchAgencyData: async ()=>{\n            const baseUrl = _apiConfigStore__WEBPACK_IMPORTED_MODULE_0__.useApiConfigStore.getState().baseUrl;\n            if (!baseUrl) {\n                set({\n                    error: \"API base URL not configured\"\n                });\n                return;\n            }\n            try {\n                set({\n                    isLoading: true,\n                    error: null\n                });\n                const response = await fetch(\"\".concat(baseUrl, \"/api/agency-data\"));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch agency data: \".concat(response.statusText));\n                }\n                const data = await response.json();\n                if (data.agencies && Array.isArray(data.agencies)) {\n                    const agencies = data.agencies;\n                    const agencyNames = agencies.map((agency)=>agency.name);\n                    set({\n                        agencies,\n                        agencyNames,\n                        isLoading: false\n                    });\n                } else {\n                    throw new Error(\"Invalid response format: agencies array not found\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching agency data:\", error);\n                set({\n                    error: error instanceof Error ? error.message : \"Unknown error occurred\",\n                    isLoading: false\n                });\n            }\n        },\n        // Helper function to get word count for a specific agency and date\n        getWordCountForAgency: (agencyName, dateStr)=>{\n            const { agencies } = get();\n            const agency = agencies.find((a)=>a.name === agencyName);\n            if (!agency || !agency.word_count) {\n                return null;\n            }\n            // The word_count object uses dateStr as a direct key\n            const dateData = agency.word_count[dateStr];\n            if (!dateData) {\n                return null;\n            }\n            return dateData.wordcount;\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTNCLFFBQVEsRUFBRSxHQUFHRDtZQUNyQixNQUFNUSxTQUFTUCxTQUFTNEIsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVyQixJQUFJLEtBQUtrQjtZQUUvQyxJQUFJLENBQUNuQixVQUFVLENBQUNBLE9BQU91QixVQUFVLEVBQUU7Z0JBQ2pDLE9BQU87WUFDVDtZQUVBLHFEQUFxRDtZQUNyRCxNQUFNQyxXQUFXeEIsT0FBT3VCLFVBQVUsQ0FBQ0gsUUFBUTtZQUUzQyxJQUFJLENBQUNJLFVBQVU7Z0JBQ2IsT0FBTztZQUNUO1lBRUEsT0FBT0EsU0FBU0MsU0FBUztRQUMzQjtJQUNGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FnZW5jeVN0b3JlLnRzP2IwYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcbmltcG9ydCB7IHVzZUFwaUNvbmZpZ1N0b3JlIH0gZnJvbSBcIi4vYXBpQ29uZmlnU3RvcmVcIjtcblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIGEgcHJvY2Vzc2VkIHJlZmVyZW5jZSBpbiB3b3JkIGNvdW50IGRhdGFcbiAqL1xuaW50ZXJmYWNlIFByb2Nlc3NlZFJlZmVyZW5jZSB7XG4gIGRhdGU6IHN0cmluZztcbiAgdGl0bGU6IG51bWJlcjtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGNoYXB0ZXI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHdvcmQgY291bnQgZGF0YSBmb3IgYSBzcGVjaWZpYyBkYXRlXG4gKi9cbmludGVyZmFjZSBEYXRlV29yZENvdW50IHtcbiAgZGF0ZTogc3RyaW5nO1xuICB3b3JkY291bnQ6IG51bWJlcjtcbiAgcHJvY2Vzc2VkX3JlZmVyZW5jZXM6IFByb2Nlc3NlZFJlZmVyZW5jZVtdO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYWdlbmN5IGRhdGEgaW5jbHVkaW5nIHdvcmQgY291bnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZ2VuY3lEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICB3b3JkX2NvdW50Pzoge1xuICAgIFtkYXRlS2V5OiBzdHJpbmddOiBEYXRlV29yZENvdW50O1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQWdlbmN5U3RhdGUge1xuICBhZ2VuY2llczogQWdlbmN5RGF0YVtdO1xuICBhZ2VuY3lOYW1lczogc3RyaW5nW107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG4gIHNldEFnZW5jeU5hbWVzOiAoYWdlbmNpZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBzZXRBZ2VuY2llczogKGFnZW5jaWVzOiBBZ2VuY3lEYXRhW10pID0+IHZvaWQ7XG4gIGZldGNoQWdlbmN5TmFtZXM6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGZldGNoQWdlbmN5RGF0YTogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgZ2V0V29yZENvdW50Rm9yQWdlbmN5OiAoYWdlbmN5TmFtZTogc3RyaW5nLCBkYXRlU3RyOiBzdHJpbmcpID0+IG51bWJlciB8IG51bGw7XG59XG5cbi8qKlxuICogU3RvcmUgZm9yIG1hbmFnaW5nIGFnZW5jeSBuYW1lcyBhbmQgd29yZCBjb3VudCBkYXRhXG4gKiBGZXRjaGVzIGFnZW5jeSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBiYWNrZW5kIEFQSVxuICovXG5leHBvcnQgY29uc3QgdXNlQWdlbmN5U3RvcmUgPSBjcmVhdGU8QWdlbmN5U3RhdGU+KChzZXQsIGdldCkgPT4gKHtcbiAgYWdlbmNpZXM6IFtdLFxuICBhZ2VuY3lOYW1lczogW10sXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuXG4gIHNldEFnZW5jeU5hbWVzOiAoYWdlbmNpZXM6IHN0cmluZ1tdKSA9PiBzZXQoeyBhZ2VuY3lOYW1lczogYWdlbmNpZXMgfSksXG5cbiAgc2V0QWdlbmNpZXM6IChhZ2VuY2llczogQWdlbmN5RGF0YVtdKSA9PiB7XG4gICAgLy8gRXh0cmFjdCBhZ2VuY3kgbmFtZXMgZnJvbSB0aGUgYWdlbmN5IGRhdGFcbiAgICBjb25zdCBhZ2VuY3lOYW1lcyA9IGFnZW5jaWVzLm1hcCgoYWdlbmN5KSA9PiBhZ2VuY3kubmFtZSk7XG4gICAgc2V0KHsgYWdlbmNpZXMsIGFnZW5jeU5hbWVzIH0pO1xuICB9LFxuXG4gIGZldGNoQWdlbmN5TmFtZXM6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdXNlQXBpQ29uZmlnU3RvcmUuZ2V0U3RhdGUoKS5iYXNlVXJsO1xuXG4gICAgaWYgKCFiYXNlVXJsKSB7XG4gICAgICBzZXQoeyBlcnJvcjogXCJBUEkgYmFzZSBVUkwgbm90IGNvbmZpZ3VyZWRcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgc2V0KHsgaXNMb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvYWdlbmN5LW5hbWVzYCk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggYWdlbmN5IG5hbWVzOiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGlmIChkYXRhLmFnZW5jeV9uYW1lcyAmJiBBcnJheS5pc0FycmF5KGRhdGEuYWdlbmN5X25hbWVzKSkge1xuICAgICAgICBzZXQoeyBhZ2VuY3lOYW1lczogZGF0YS5hZ2VuY3lfbmFtZXMsIGlzTG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdDogYWdlbmN5X25hbWVzIGFycmF5IG5vdCBmb3VuZFwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhZ2VuY3kgbmFtZXM6XCIsIGVycm9yKTtcbiAgICAgIHNldCh7XG4gICAgICAgIGVycm9yOlxuICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCIsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hBZ2VuY3lEYXRhOiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmFzZVVybCA9IHVzZUFwaUNvbmZpZ1N0b3JlLmdldFN0YXRlKCkuYmFzZVVybDtcblxuICAgIGlmICghYmFzZVVybCkge1xuICAgICAgc2V0KHsgZXJyb3I6IFwiQVBJIGJhc2UgVVJMIG5vdCBjb25maWd1cmVkXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHNldCh7IGlzTG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpL2FnZW5jeS1kYXRhYCk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggYWdlbmN5IGRhdGE6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKGRhdGEuYWdlbmNpZXMgJiYgQXJyYXkuaXNBcnJheShkYXRhLmFnZW5jaWVzKSkge1xuICAgICAgICBjb25zdCBhZ2VuY2llcyA9IGRhdGEuYWdlbmNpZXMgYXMgQWdlbmN5RGF0YVtdO1xuICAgICAgICBjb25zdCBhZ2VuY3lOYW1lcyA9IGFnZW5jaWVzLm1hcCgoYWdlbmN5KSA9PiBhZ2VuY3kubmFtZSk7XG4gICAgICAgIHNldCh7IGFnZW5jaWVzLCBhZ2VuY3lOYW1lcywgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZm9ybWF0OiBhZ2VuY2llcyBhcnJheSBub3QgZm91bmRcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhZ2VuY3kgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgc2V0KHtcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIixcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHdvcmQgY291bnQgZm9yIGEgc3BlY2lmaWMgYWdlbmN5IGFuZCBkYXRlXG4gIGdldFdvcmRDb3VudEZvckFnZW5jeTogKGFnZW5jeU5hbWU6IHN0cmluZywgZGF0ZVN0cjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBhZ2VuY2llcyB9ID0gZ2V0KCk7XG4gICAgY29uc3QgYWdlbmN5ID0gYWdlbmNpZXMuZmluZCgoYSkgPT4gYS5uYW1lID09PSBhZ2VuY3lOYW1lKTtcblxuICAgIGlmICghYWdlbmN5IHx8ICFhZ2VuY3kud29yZF9jb3VudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gVGhlIHdvcmRfY291bnQgb2JqZWN0IHVzZXMgZGF0ZVN0ciBhcyBhIGRpcmVjdCBrZXlcbiAgICBjb25zdCBkYXRlRGF0YSA9IGFnZW5jeS53b3JkX2NvdW50W2RhdGVTdHJdO1xuXG4gICAgaWYgKCFkYXRlRGF0YSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVEYXRhLndvcmRjb3VudDtcbiAgfSxcbn0pKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VBcGlDb25maWdTdG9yZSIsInVzZUFnZW5jeVN0b3JlIiwic2V0IiwiZ2V0IiwiYWdlbmNpZXMiLCJhZ2VuY3lOYW1lcyIsImlzTG9hZGluZyIsImVycm9yIiwic2V0QWdlbmN5TmFtZXMiLCJzZXRBZ2VuY2llcyIsIm1hcCIsImFnZW5jeSIsIm5hbWUiLCJmZXRjaEFnZW5jeU5hbWVzIiwiYmFzZVVybCIsImdldFN0YXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJhZ2VuY3lfbmFtZXMiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwibWVzc2FnZSIsImZldGNoQWdlbmN5RGF0YSIsImdldFdvcmRDb3VudEZvckFnZW5jeSIsImFnZW5jeU5hbWUiLCJkYXRlU3RyIiwiZmluZCIsImEiLCJ3b3JkX2NvdW50IiwiZGF0ZURhdGEiLCJ3b3JkY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/agencyStore.ts\n"));

/***/ })

});