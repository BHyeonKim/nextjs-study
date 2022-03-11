webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./components/input/comments.js":
/*!**************************************!*\
  !*** ./components/input/comments.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\n\nvar _jsxFileName = \"/Users/kimbohyeon/NextJS/nextjs_api-routing-project/components/input/comments.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Comments(props) {\n  _s();\n\n  var eventId = props.eventId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showComments = _useState[0],\n      setShowComments = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      comments = _useState2[0],\n      setComments = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isFetchingComments = _useState3[0],\n      setIsFetchingComments = _useState3[1];\n\n  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (showComments) {\n      setIsFetchingComments(true);\n      fetch(\"/api/comments/\".concat(eventId)).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        setComments(data.comments);\n      });\n    }\n  }, [showComments]);\n\n  function toggleCommentsHandler() {\n    setShowComments(function (prevStatus) {\n      return !prevStatus;\n    });\n  }\n\n  function addCommentHandler(commentData) {\n    notificationCtx.showNotification({\n      title: 'Sending comment',\n      message: 'Your comment is currently being stored into a database.',\n      status: 'pending'\n    }); // send data to API\n\n    fetch(\"/api/comments/\".concat(eventId), {\n      method: 'POST',\n      body: JSON.stringify(commentData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (response) {\n      if (response.ok) {\n        return response.json();\n      }\n\n      return response.json().then(function (data) {\n        throw new Error(data.message || 'Something went wrong!');\n      });\n    }).then(function (data) {\n      notificationCtx.showNotification({\n        title: 'Success!',\n        message: 'Your comment was saved.',\n        status: 'success'\n      });\n    })[\"catch\"](function (error) {\n      notificationCtx.showNotification({\n        title: 'Error!',\n        message: error.message,\n        status: 'error'\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _comments_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.comments,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: toggleCommentsHandler,\n      children: [showComments ? 'Hide' : 'Show', \" Comments\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_new_comment__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onAddComment: addCommentHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 24\n    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_comment_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      items: comments\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Comments, \"Qfxdqm7BoR9FtwxUjEt9dhfTUWk=\");\n\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz83NDFkIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicHJvcHMiLCJldmVudElkIiwidXNlU3RhdGUiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiaXNGZXRjaGluZ0NvbW1lbnRzIiwic2V0SXNGZXRjaGluZ0NvbW1lbnRzIiwibm90aWZpY2F0aW9uQ3R4IiwidXNlQ29udGV4dCIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidG9nZ2xlQ29tbWVudHNIYW5kbGVyIiwicHJldlN0YXR1cyIsImFkZENvbW1lbnRIYW5kbGVyIiwiY29tbWVudERhdGEiLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJtZXNzYWdlIiwic3RhdHVzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImVycm9yIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLE1BQ2ZDLE9BRGUsR0FDSEQsS0FERyxDQUNmQyxPQURlOztBQUFBLGtCQUdpQkMsc0RBQVEsQ0FBQyxLQUFELENBSHpCO0FBQUEsTUFHaEJDLFlBSGdCO0FBQUEsTUFHRkMsZUFIRTs7QUFBQSxtQkFJU0Ysc0RBQVEsQ0FBQyxFQUFELENBSmpCO0FBQUEsTUFJaEJHLFFBSmdCO0FBQUEsTUFJTkMsV0FKTTs7QUFBQSxtQkFLNkJKLHNEQUFRLENBQUMsS0FBRCxDQUxyQztBQUFBLE1BS2hCSyxrQkFMZ0I7QUFBQSxNQUtJQyxxQkFMSjs7QUFPdkIsTUFBTUMsZUFBZSxHQUFHQyx3REFBVSxDQUFDQyxtRUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVCxZQUFKLEVBQWtCO0FBQ2hCSywyQkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0FLLFdBQUsseUJBQWtCWixPQUFsQixFQUFMLENBQ0dhLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxPQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZFgsbUJBQVcsQ0FBQ1csSUFBSSxDQUFDWixRQUFOLENBQVg7QUFDRCxPQUpIO0FBS0Q7QUFDRixHQVRRLEVBU04sQ0FBQ0YsWUFBRCxDQVRNLENBQVQ7O0FBV0EsV0FBU2UscUJBQVQsR0FBaUM7QUFDL0JkLG1CQUFlLENBQUMsVUFBQ2UsVUFBRDtBQUFBLGFBQWdCLENBQUNBLFVBQWpCO0FBQUEsS0FBRCxDQUFmO0FBQ0Q7O0FBRUQsV0FBU0MsaUJBQVQsQ0FBMkJDLFdBQTNCLEVBQXdDO0FBQ3RDWixtQkFBZSxDQUFDYSxnQkFBaEIsQ0FBaUM7QUFDL0JDLFdBQUssRUFBRSxpQkFEd0I7QUFFL0JDLGFBQU8sRUFBRSx5REFGc0I7QUFHL0JDLFlBQU0sRUFBRTtBQUh1QixLQUFqQyxFQURzQyxDQU90Qzs7QUFDQVosU0FBSyx5QkFBa0JaLE9BQWxCLEdBQTZCO0FBQ2hDeUIsWUFBTSxFQUFFLE1BRHdCO0FBRWhDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixXQUFmLENBRjBCO0FBR2hDUyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUh1QixLQUE3QixDQUFMLENBT0doQixJQVBILENBT1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2dCLEVBQWIsRUFBaUI7QUFDZixlQUFPaEIsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRDs7QUFFRCxhQUFPRCxRQUFRLENBQUNDLElBQVQsR0FBZ0JGLElBQWhCLENBQXFCLFVBQUNHLElBQUQsRUFBVTtBQUNwQyxjQUFNLElBQUllLEtBQUosQ0FBVWYsSUFBSSxDQUFDTyxPQUFMLElBQWdCLHVCQUExQixDQUFOO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FmSCxFQWdCR1YsSUFoQkgsQ0FnQlEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RSLHFCQUFlLENBQUNhLGdCQUFoQixDQUFpQztBQUMvQkMsYUFBSyxFQUFFLFVBRHdCO0FBRS9CQyxlQUFPLEVBQUUseUJBRnNCO0FBRy9CQyxjQUFNLEVBQUU7QUFIdUIsT0FBakM7QUFLRCxLQXRCSCxXQXVCUyxVQUFDUSxLQUFELEVBQVc7QUFDaEJ4QixxQkFBZSxDQUFDYSxnQkFBaEIsQ0FBaUM7QUFDL0JDLGFBQUssRUFBRSxRQUR3QjtBQUUvQkMsZUFBTyxFQUFFUyxLQUFLLENBQUNULE9BRmdCO0FBRy9CQyxjQUFNLEVBQUU7QUFIdUIsT0FBakM7QUFLRCxLQTdCSDtBQThCRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRVMsMkRBQU8sQ0FBQzdCLFFBQTVCO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVhLHFCQUFqQjtBQUFBLGlCQUNHZixZQUFZLEdBQUcsTUFBSCxHQUFZLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBSUdBLFlBQVksaUJBQUkscUVBQUMsb0RBQUQ7QUFBWSxrQkFBWSxFQUFFaUI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpuQixFQUtHakIsWUFBWSxpQkFBSSxxRUFBQyxxREFBRDtBQUFhLFdBQUssRUFBRUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXpFUU4sUTs7S0FBQUEsUTtBQTJFTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vY29tbWVudC1saXN0JztcbmltcG9ydCBOZXdDb21tZW50IGZyb20gJy4vbmV3LWNvbW1lbnQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jb21tZW50cy5tb2R1bGUuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0JztcblxuZnVuY3Rpb24gQ29tbWVudHMocHJvcHMpIHtcbiAgY29uc3QgeyBldmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzRmV0Y2hpbmdDb21tZW50cywgc2V0SXNGZXRjaGluZ0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3dDb21tZW50cykge1xuICAgICAgc2V0SXNGZXRjaGluZ0NvbW1lbnRzKHRydWUpO1xuICAgICAgZmV0Y2goYC9hcGkvY29tbWVudHMvJHtldmVudElkfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldENvbW1lbnRzKGRhdGEuY29tbWVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtzaG93Q29tbWVudHNdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVDb21tZW50c0hhbmRsZXIoKSB7XG4gICAgc2V0U2hvd0NvbW1lbnRzKChwcmV2U3RhdHVzKSA9PiAhcHJldlN0YXR1cyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDb21tZW50SGFuZGxlcihjb21tZW50RGF0YSkge1xuICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgIHRpdGxlOiAnU2VuZGluZyBjb21tZW50JyxcbiAgICAgIG1lc3NhZ2U6ICdZb3VyIGNvbW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIHN0b3JlZCBpbnRvIGEgZGF0YWJhc2UuJyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgIH0pO1xuXG4gICAgLy8gc2VuZCBkYXRhIHRvIEFQSVxuICAgIGZldGNoKGAvYXBpL2NvbW1lbnRzLyR7ZXZlbnRJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgICAgICBtZXNzYWdlOiAnWW91ciBjb21tZW50IHdhcyBzYXZlZC4nLFxuICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50c30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzSGFuZGxlcn0+XG4gICAgICAgIHtzaG93Q29tbWVudHMgPyAnSGlkZScgOiAnU2hvdyd9IENvbW1lbnRzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzaG93Q29tbWVudHMgJiYgPE5ld0NvbW1lbnQgb25BZGRDb21tZW50PXthZGRDb21tZW50SGFuZGxlcn0gLz59XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxDb21tZW50TGlzdCBpdGVtcz17Y29tbWVudHN9IC8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n");

/***/ })

})