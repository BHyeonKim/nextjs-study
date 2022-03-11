webpackHotUpdate_N_E("pages/last-sales",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.js":
false,

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/kimbohyeon/NextJS/pre-rendering/pages/last-sales.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (response) {\n    return response.json();\n  });\n};\n\nvar LastSalesPage = function LastSalesPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.sales),\n      sales = _useState[0],\n      setSales = _useState[1]; //   const [isLoading, setIsLoading] = useState(false);\n\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://nextjs-course-2a033-default-rtdb.firebaseio.com/sales.json', fetcher),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  console.log(error);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (data) {\n      var transformedSales = [];\n\n      for (var key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    }\n  }, [data]); //   useEffect(() => {\n  //     setIsLoading(true);\n  //     fetch('https://nextjs-course-2a033-default-rtdb.firebaseio.com/sales.json')\n  //       .then((response) => response.json())\n  //       .then((data) => {\n  //         const transformedSales = [];\n  //         for (const key in data) {\n  //           transformedSales.push({\n  //             id: key,\n  //             username: data[key].username,\n  //             volume: data[key].volume,\n  //           });\n  //         }\n  //         setSales(transformedSales);\n  //         setIsLoading(false);\n  //       });\n  //   }, []);\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!data && !sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading....\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(function (sale) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [sale.username, \" - $\", sale.volume]\n      }, sale.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(LastSalesPage, \"lghZNGWenZyG6yG7jPC9/EhXHmw=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = LastSalesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"LastSalesPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8wNTFkIl0sIm5hbWVzIjpbImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJMYXN0U2FsZXNQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNhbGVzIiwic2V0U2FsZXMiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidHJhbnNmb3JtZWRTYWxlcyIsImtleSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwibWFwIiwic2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsUUFBRDtBQUFBLFdBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsR0FBaEIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsS0FBUCxDQURIO0FBQUEsTUFDeEJBLEtBRHdCO0FBQUEsTUFDakJDLFFBRGlCLGlCQUUvQjs7O0FBRitCLGdCQUlQQyxtREFBTSxDQUM1QixvRUFENEIsRUFFNUJYLE9BRjRCLENBSkM7QUFBQSxNQUl2QlksSUFKdUIsV0FJdkJBLElBSnVCO0FBQUEsTUFJakJDLEtBSmlCLFdBSWpCQSxLQUppQjs7QUFTL0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLElBQUosRUFBVTtBQUNSLFVBQU1LLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLFdBQUssSUFBTUMsR0FBWCxJQUFrQk4sSUFBbEIsRUFBd0I7QUFDdEJLLHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNwQkMsWUFBRSxFQUFFRixHQURnQjtBQUVwQkcsa0JBQVEsRUFBRVQsSUFBSSxDQUFDTSxHQUFELENBQUosQ0FBVUcsUUFGQTtBQUdwQkMsZ0JBQU0sRUFBRVYsSUFBSSxDQUFDTSxHQUFELENBQUosQ0FBVUk7QUFIRSxTQUF0QjtBQUtEOztBQUNEWixjQUFRLENBQUNPLGdCQUFELENBQVI7QUFDRDtBQUNGLEdBWlEsRUFZTixDQUFDTCxJQUFELENBWk0sQ0FBVCxDQVgrQixDQXlCL0I7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxLQUFKLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0gsS0FBZCxFQUFxQjtBQUNuQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxjQUNHQSxLQUFLLENBQUNjLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsMEJBQ1Q7QUFBQSxtQkFDR0EsSUFBSSxDQUFDSCxRQURSLFVBQ3NCRyxJQUFJLENBQUNGLE1BRDNCO0FBQUEsU0FBU0UsSUFBSSxDQUFDSixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTlERDs7R0FBTWQsYTtVQUlvQkssMkM7OztLQUpwQkwsYTs7QUFzRlNBLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGFzdC1zYWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5jb25zdCBMYXN0U2FsZXNQYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUocHJvcHMuc2FsZXMpO1xuICAvLyAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtMmEwMzMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nLFxuICAgIGZldGNoZXJcbiAgKTtcblxuICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgICAgZmV0Y2goJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS0yYTAzMy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbicpXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcblxuICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgLy8gICAgICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gIC8vICAgICAgICAgICAgIGlkOiBrZXksXG4gIC8vICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gIC8vICAgICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgLy8gICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICB9LCBbXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPkZhaWxlZCB0byBsb2FkLjwvcD47XG4gIH1cblxuICBpZiAoIWRhdGEgJiYgIXNhbGVzKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS0yYTAzMy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbidcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG4gIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAgICAgaWQ6IGtleSxcbiAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2FsZXM6IHRyYW5zZm9ybWVkU2FsZXMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ })

})