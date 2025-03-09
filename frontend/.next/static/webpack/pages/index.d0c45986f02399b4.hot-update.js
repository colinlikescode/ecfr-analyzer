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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAgencyStore: function() { return /* binding */ useAgencyStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var _apiConfigStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiConfigStore */ \"./src/store/apiConfigStore.ts\");\n\n\n/**\n * Store for managing agency names and word count data\n * Fetches agency information from the backend API\n */ const useAgencyStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        agencies: [],\n        agencyNames: [],\n        isLoading: false,\n        error: null,\n        setAgencyNames: (agencies)=>set({\n                agencyNames: agencies\n            }),\n        setAgencies: (agencies)=>{\n            // Extract agency names from the agency data\n            const agencyNames = agencies.map((agency)=>agency.name);\n            set({\n                agencies,\n                agencyNames\n            });\n        },\n        fetchAgencyNames: async ()=>{\n            const baseUrl = _apiConfigStore__WEBPACK_IMPORTED_MODULE_0__.useApiConfigStore.getState().baseUrl;\n            if (!baseUrl) {\n                set({\n                    error: \"API base URL not configured\"\n                });\n                return;\n            }\n            try {\n                set({\n                    isLoading: true,\n                    error: null\n                });\n                const response = await fetch(\"\".concat(baseUrl, \"/api/agency-names\"));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch agency names: \".concat(response.statusText));\n                }\n                const data = await response.json();\n                if (data.agency_names && Array.isArray(data.agency_names)) {\n                    set({\n                        agencyNames: data.agency_names,\n                        isLoading: false\n                    });\n                } else {\n                    throw new Error(\"Invalid response format: agency_names array not found\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching agency names:\", error);\n                set({\n                    error: error instanceof Error ? error.message : \"Unknown error occurred\",\n                    isLoading: false\n                });\n            }\n        },\n        fetchAgencyData: async ()=>{\n            const baseUrl = _apiConfigStore__WEBPACK_IMPORTED_MODULE_0__.useApiConfigStore.getState().baseUrl;\n            if (!baseUrl) {\n                set({\n                    error: \"API base URL not configured\"\n                });\n                return;\n            }\n            try {\n                set({\n                    isLoading: true,\n                    error: null\n                });\n                const response = await fetch(\"\".concat(baseUrl, \"/api/agency-data\"));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch agency data: \".concat(response.statusText));\n                }\n                const data = await response.json();\n                if (data.agencies && Array.isArray(data.agencies)) {\n                    // Transform the response to our simplified format\n                    const simplifiedAgencies = data.agencies.map((agency)=>{\n                        // Initialize the wordCounts object\n                        const wordCounts = {};\n                        // Extract only the years and wordcount values from the complex word_count object\n                        if (agency.word_count) {\n                            // For each date entry (e.g., \"2023-03-01\")\n                            Object.keys(agency.word_count).forEach((dateKey)=>{\n                                const dateData = agency.word_count[dateKey];\n                                // Extract just the year from the date (e.g., \"2023\")\n                                const year = dateKey.split(\"-\")[0];\n                                // Store just the wordcount for that year\n                                wordCounts[year] = dateData.wordcount;\n                            });\n                        }\n                        return {\n                            name: agency.name,\n                            wordCounts: Object.keys(wordCounts).length > 0 ? wordCounts : undefined\n                        };\n                    });\n                    const agencyNames = simplifiedAgencies.map((agency)=>agency.name);\n                    set({\n                        agencies: simplifiedAgencies,\n                        agencyNames,\n                        isLoading: false\n                    });\n                    console.log(\"Agency data simplified and stored:\", simplifiedAgencies.length);\n                } else {\n                    throw new Error(\"Invalid response format: agencies array not found\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching agency data:\", error);\n                set({\n                    error: error instanceof Error ? error.message : \"Unknown error occurred\",\n                    isLoading: false\n                });\n            }\n        },\n        // Helper function to get word count for a specific agency and year\n        getWordCountForYear: (agencyName, year)=>{\n            const { agencies } = get();\n            const agency = agencies.find((a)=>a.name === agencyName);\n            if (!agency || !agency.wordCounts) {\n                return null;\n            }\n            return agency.wordCounts[year] || null;\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxHQUFHRCxTQUFTRyxTQUFTOzRCQUN2Qzt3QkFDRjt3QkFFQSxPQUFPOzRCQUNMM0IsTUFBTUQsT0FBT0MsSUFBSTs0QkFDakJrQixZQUNFRSxPQUFPQyxJQUFJLENBQUNILFlBQVlVLE1BQU0sR0FBRyxJQUFJVixhQUFhVzt3QkFDdEQ7b0JBQ0Y7b0JBRUEsTUFBTXBDLGNBQWN3QixtQkFBbUJuQixHQUFHLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsSUFBSTtvQkFDbEVWLElBQUk7d0JBQUVFLFVBQVV5Qjt3QkFBb0J4Qjt3QkFBYUMsV0FBVztvQkFBTTtvQkFFbEVvQixRQUFRZ0IsR0FBRyxDQUNULHNDQUNBYixtQkFBbUJXLE1BQU07Z0JBRTdCLE9BQU87b0JBQ0wsTUFBTSxJQUFJckIsTUFBTTtnQkFDbEI7WUFDRixFQUFFLE9BQU9aLE9BQU87Z0JBQ2RtQixRQUFRbkIsS0FBSyxDQUFDLCtCQUErQkE7Z0JBQzdDTCxJQUFJO29CQUNGSyxPQUNFQSxpQkFBaUJZLFFBQVFaLE1BQU1vQixPQUFPLEdBQUc7b0JBQzNDckIsV0FBVztnQkFDYjtZQUNGO1FBQ0Y7UUFFQSxtRUFBbUU7UUFDbkVxQyxxQkFBcUIsQ0FBQ0MsWUFBb0JQO1lBQ3hDLE1BQU0sRUFBRWpDLFFBQVEsRUFBRSxHQUFHRDtZQUNyQixNQUFNUSxTQUFTUCxTQUFTeUMsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVsQyxJQUFJLEtBQUtnQztZQUUvQyxJQUFJLENBQUNqQyxVQUFVLENBQUNBLE9BQU9tQixVQUFVLEVBQUU7Z0JBQ2pDLE9BQU87WUFDVDtZQUVBLE9BQU9uQixPQUFPbUIsVUFBVSxDQUFDTyxLQUFLLElBQUk7UUFDcEM7SUFDRixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hZ2VuY3lTdG9yZS50cz9iMGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5pbXBvcnQgeyB1c2VBcGlDb25maWdTdG9yZSB9IGZyb20gXCIuL2FwaUNvbmZpZ1N0b3JlXCI7XG5cbi8qKlxuICogU2ltcGxlIGludGVyZmFjZSBmb3IgYWdlbmN5IGRhdGEgd2l0aCBqdXN0IHRoZSBuZWVkZWQgd29yZCBjb3VudCBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFnZW5jeURhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHdvcmRDb3VudHM/OiB7XG4gICAgW3llYXI6IHN0cmluZ106IG51bWJlcjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEFnZW5jeVN0YXRlIHtcbiAgYWdlbmNpZXM6IEFnZW5jeURhdGFbXTtcbiAgYWdlbmN5TmFtZXM6IHN0cmluZ1tdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuICBzZXRBZ2VuY3lOYW1lczogKGFnZW5jaWVzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgc2V0QWdlbmNpZXM6IChhZ2VuY2llczogQWdlbmN5RGF0YVtdKSA9PiB2b2lkO1xuICBmZXRjaEFnZW5jeU5hbWVzOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBmZXRjaEFnZW5jeURhdGE6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGdldFdvcmRDb3VudEZvclllYXI6IChhZ2VuY3lOYW1lOiBzdHJpbmcsIHllYXI6IHN0cmluZykgPT4gbnVtYmVyIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBTdG9yZSBmb3IgbWFuYWdpbmcgYWdlbmN5IG5hbWVzIGFuZCB3b3JkIGNvdW50IGRhdGFcbiAqIEZldGNoZXMgYWdlbmN5IGluZm9ybWF0aW9uIGZyb20gdGhlIGJhY2tlbmQgQVBJXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VBZ2VuY3lTdG9yZSA9IGNyZWF0ZTxBZ2VuY3lTdGF0ZT4oKHNldCwgZ2V0KSA9PiAoe1xuICBhZ2VuY2llczogW10sXG4gIGFnZW5jeU5hbWVzOiBbXSxcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGwsXG5cbiAgc2V0QWdlbmN5TmFtZXM6IChhZ2VuY2llczogc3RyaW5nW10pID0+IHNldCh7IGFnZW5jeU5hbWVzOiBhZ2VuY2llcyB9KSxcblxuICBzZXRBZ2VuY2llczogKGFnZW5jaWVzOiBBZ2VuY3lEYXRhW10pID0+IHtcbiAgICAvLyBFeHRyYWN0IGFnZW5jeSBuYW1lcyBmcm9tIHRoZSBhZ2VuY3kgZGF0YVxuICAgIGNvbnN0IGFnZW5jeU5hbWVzID0gYWdlbmNpZXMubWFwKChhZ2VuY3kpID0+IGFnZW5jeS5uYW1lKTtcbiAgICBzZXQoeyBhZ2VuY2llcywgYWdlbmN5TmFtZXMgfSk7XG4gIH0sXG5cbiAgZmV0Y2hBZ2VuY3lOYW1lczogYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB1c2VBcGlDb25maWdTdG9yZS5nZXRTdGF0ZSgpLmJhc2VVcmw7XG5cbiAgICBpZiAoIWJhc2VVcmwpIHtcbiAgICAgIHNldCh7IGVycm9yOiBcIkFQSSBiYXNlIFVSTCBub3QgY29uZmlndXJlZFwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzZXQoeyBpc0xvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9hZ2VuY3ktbmFtZXNgKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBhZ2VuY3kgbmFtZXM6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKGRhdGEuYWdlbmN5X25hbWVzICYmIEFycmF5LmlzQXJyYXkoZGF0YS5hZ2VuY3lfbmFtZXMpKSB7XG4gICAgICAgIHNldCh7IGFnZW5jeU5hbWVzOiBkYXRhLmFnZW5jeV9uYW1lcywgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIkludmFsaWQgcmVzcG9uc2UgZm9ybWF0OiBhZ2VuY3lfbmFtZXMgYXJyYXkgbm90IGZvdW5kXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFnZW5jeSBuYW1lczpcIiwgZXJyb3IpO1xuICAgICAgc2V0KHtcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIixcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEFnZW5jeURhdGE6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gdXNlQXBpQ29uZmlnU3RvcmUuZ2V0U3RhdGUoKS5iYXNlVXJsO1xuXG4gICAgaWYgKCFiYXNlVXJsKSB7XG4gICAgICBzZXQoeyBlcnJvcjogXCJBUEkgYmFzZSBVUkwgbm90IGNvbmZpZ3VyZWRcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgc2V0KHsgaXNMb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvYWdlbmN5LWRhdGFgKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBhZ2VuY3kgZGF0YTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5hZ2VuY2llcyAmJiBBcnJheS5pc0FycmF5KGRhdGEuYWdlbmNpZXMpKSB7XG4gICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgcmVzcG9uc2UgdG8gb3VyIHNpbXBsaWZpZWQgZm9ybWF0XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRBZ2VuY2llcyA9IGRhdGEuYWdlbmNpZXMubWFwKChhZ2VuY3kpID0+IHtcbiAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSB3b3JkQ291bnRzIG9iamVjdFxuICAgICAgICAgIGNvbnN0IHdvcmRDb3VudHM6IHsgW3llYXI6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgICAgICAgICAvLyBFeHRyYWN0IG9ubHkgdGhlIHllYXJzIGFuZCB3b3JkY291bnQgdmFsdWVzIGZyb20gdGhlIGNvbXBsZXggd29yZF9jb3VudCBvYmplY3RcbiAgICAgICAgICBpZiAoYWdlbmN5LndvcmRfY291bnQpIHtcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGRhdGUgZW50cnkgKGUuZy4sIFwiMjAyMy0wMy0wMVwiKVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWdlbmN5LndvcmRfY291bnQpLmZvckVhY2goKGRhdGVLZXkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZURhdGEgPSBhZ2VuY3kud29yZF9jb3VudFtkYXRlS2V5XTtcbiAgICAgICAgICAgICAgLy8gRXh0cmFjdCBqdXN0IHRoZSB5ZWFyIGZyb20gdGhlIGRhdGUgKGUuZy4sIFwiMjAyM1wiKVxuICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZUtleS5zcGxpdChcIi1cIilbMF07XG4gICAgICAgICAgICAgIC8vIFN0b3JlIGp1c3QgdGhlIHdvcmRjb3VudCBmb3IgdGhhdCB5ZWFyXG4gICAgICAgICAgICAgIHdvcmRDb3VudHNbeWVhcl0gPSBkYXRlRGF0YS53b3JkY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogYWdlbmN5Lm5hbWUsXG4gICAgICAgICAgICB3b3JkQ291bnRzOlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3b3JkQ291bnRzKS5sZW5ndGggPiAwID8gd29yZENvdW50cyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBhZ2VuY3lOYW1lcyA9IHNpbXBsaWZpZWRBZ2VuY2llcy5tYXAoKGFnZW5jeSkgPT4gYWdlbmN5Lm5hbWUpO1xuICAgICAgICBzZXQoeyBhZ2VuY2llczogc2ltcGxpZmllZEFnZW5jaWVzLCBhZ2VuY3lOYW1lcywgaXNMb2FkaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIkFnZW5jeSBkYXRhIHNpbXBsaWZpZWQgYW5kIHN0b3JlZDpcIixcbiAgICAgICAgICBzaW1wbGlmaWVkQWdlbmNpZXMubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdDogYWdlbmNpZXMgYXJyYXkgbm90IGZvdW5kXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYWdlbmN5IGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIHNldCh7XG4gICAgICAgIGVycm9yOlxuICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCIsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB3b3JkIGNvdW50IGZvciBhIHNwZWNpZmljIGFnZW5jeSBhbmQgeWVhclxuICBnZXRXb3JkQ291bnRGb3JZZWFyOiAoYWdlbmN5TmFtZTogc3RyaW5nLCB5ZWFyOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGFnZW5jaWVzIH0gPSBnZXQoKTtcbiAgICBjb25zdCBhZ2VuY3kgPSBhZ2VuY2llcy5maW5kKChhKSA9PiBhLm5hbWUgPT09IGFnZW5jeU5hbWUpO1xuXG4gICAgaWYgKCFhZ2VuY3kgfHwgIWFnZW5jeS53b3JkQ291bnRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYWdlbmN5LndvcmRDb3VudHNbeWVhcl0gfHwgbnVsbDtcbiAgfSxcbn0pKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VBcGlDb25maWdTdG9yZSIsInVzZUFnZW5jeVN0b3JlIiwic2V0IiwiZ2V0IiwiYWdlbmNpZXMiLCJhZ2VuY3lOYW1lcyIsImlzTG9hZGluZyIsImVycm9yIiwic2V0QWdlbmN5TmFtZXMiLCJzZXRBZ2VuY2llcyIsIm1hcCIsImFnZW5jeSIsIm5hbWUiLCJmZXRjaEFnZW5jeU5hbWVzIiwiYmFzZVVybCIsImdldFN0YXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJhZ2VuY3lfbmFtZXMiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwibWVzc2FnZSIsImZldGNoQWdlbmN5RGF0YSIsInNpbXBsaWZpZWRBZ2VuY2llcyIsIndvcmRDb3VudHMiLCJ3b3JkX2NvdW50IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJkYXRlS2V5IiwiZGF0ZURhdGEiLCJ5ZWFyIiwic3BsaXQiLCJ3b3JkY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJsb2ciLCJnZXRXb3JkQ291bnRGb3JZZWFyIiwiYWdlbmN5TmFtZSIsImZpbmQiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/agencyStore.ts\n"));

/***/ })

});