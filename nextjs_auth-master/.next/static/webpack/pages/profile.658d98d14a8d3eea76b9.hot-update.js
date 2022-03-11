webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/kimbohyeon/NextJS/nextjs_auth/components/profile/user-profile.js\";\n\n\n\nfunction UserProfile() {\n  // const [isLoading, setIsLoading] = useState(true);\n  // useEffect(() => {\n  //   getSession().then((session) => {\n  //     if (!session) {\n  //       window.location.href = '/auth';\n  //     } else {\n  //       setIsLoading(false);\n  //     }\n  //   });\n  // }, []);\n  // if (isLoading) {\n  //   return <p className={classes.profile}>Loading...</p>;\n  // }\n  function changePasswordHandler(passwordData) {\n    fetch('/api/user/change-password', {\n      method: 'FETCH'\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _user_profile_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.profile,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Your User Profile\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_profile_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onChangePassword: changePasswordHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5qcz9iOTUwIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwiY2hhbmdlUGFzc3dvcmRIYW5kbGVyIiwicGFzc3dvcmREYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJjbGFzc2VzIiwicHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsR0FBdUI7QUFDckI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxXQUFTQyxxQkFBVCxDQUErQkMsWUFBL0IsRUFBNkM7QUFDM0NDLFNBQUssQ0FBQywyQkFBRCxFQUE4QjtBQUNqQ0MsWUFBTSxFQUFFO0FBRHlCLEtBQTlCLENBQUw7QUFHRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsT0FBNUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMscURBQUQ7QUFBYSxzQkFBZ0IsRUFBRUw7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0tBN0JRRCxXO0FBK0JNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyLXByb2ZpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi9wcm9maWxlLWZvcm0nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi91c2VyLXByb2ZpbGUubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFVzZXJQcm9maWxlKCkge1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBnZXRTZXNzaW9uKCkudGhlbigoc2Vzc2lvbikgPT4ge1xuICAvLyAgICAgaWYgKCFzZXNzaW9uKSB7XG4gIC8vICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hdXRoJztcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyBpZiAoaXNMb2FkaW5nKSB7XG4gIC8vICAgcmV0dXJuIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5Mb2FkaW5nLi4uPC9wPjtcbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkSGFuZGxlcihwYXNzd29yZERhdGEpIHtcbiAgICBmZXRjaCgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcsIHtcbiAgICAgIG1ldGhvZDogJ0ZFVENIJyxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGV9PlxuICAgICAgPGgxPllvdXIgVXNlciBQcm9maWxlPC9oMT5cbiAgICAgIDxQcm9maWxlRm9ybSBvbkNoYW5nZVBhc3N3b3JkPXtjaGFuZ2VQYXNzd29yZEhhbmRsZXJ9IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ }),

/***/ "./node_modules/next-auth/client/_utils.js":
false,

/***/ "./node_modules/next-auth/core/errors.js":
false,

/***/ "./node_modules/next-auth/lib/logger.js":
false,

/***/ "./node_modules/next-auth/lib/parse-url.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/isNativeFunction.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
false,

/***/ "./node_modules/next-auth/node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next-auth/react/index.js":
false,

/***/ "./node_modules/next-auth/react/types.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
false,

/***/ "./node_modules/react/jsx-runtime.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})