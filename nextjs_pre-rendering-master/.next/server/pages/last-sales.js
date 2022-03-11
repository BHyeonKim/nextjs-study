module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/last-sales.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/kimbohyeon/NextJS/pre-rendering/pages/last-sales.js\";\n\n\n\nconst fetcher = url => fetch(url).then(response => response.json());\n\nconst LastSalesPage = props => {\n  const {\n    0: sales,\n    1: setSales\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.sales); //   const [isLoading, setIsLoading] = useState(false);\n\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('https://nextjs-course-2a033-default-rtdb.firebaseio.com/sales.json', fetcher);\n  console.log(error);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (data) {\n      const transformedSales = [];\n\n      for (const key in data) {\n        transformedSales.push({\n          id: key,\n          username: data[key].username,\n          volume: data[key].volume\n        });\n      }\n\n      setSales(transformedSales);\n    }\n  }, [data]); //   useEffect(() => {\n  //     setIsLoading(true);\n  //     fetch('https://nextjs-course-2a033-default-rtdb.firebaseio.com/sales.json')\n  //       .then((response) => response.json())\n  //       .then((data) => {\n  //         const transformedSales = [];\n  //         for (const key in data) {\n  //           transformedSales.push({\n  //             id: key,\n  //             username: data[key].username,\n  //             volume: data[key].volume,\n  //           });\n  //         }\n  //         setSales(transformedSales);\n  //         setIsLoading(false);\n  //       });\n  //   }, []);\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Failed to load.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (!data && !sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading....\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(sale => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: [sale.username, \" - $\", sale.volume]\n    }, sale.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticProps(context) {\n  const response = await fetch('https://nextjs-course-2a033-default-rtdb.firebaseio.com/sales.json');\n  const data = await response.json();\n  const transformedSales = [];\n\n  for (const key in data) {\n    transformedSales.push({\n      id: key,\n      username: data[key].username,\n      volume: data[key].volume\n    });\n  }\n\n  return {\n    props: {\n      sales: transformedSales\n    },\n    revalidate: 10\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXN0LXNhbGVzLmpzPzA1MWQiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInNhbGVzIiwic2V0U2FsZXMiLCJ1c2VTdGF0ZSIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0cmFuc2Zvcm1lZFNhbGVzIiwia2V5IiwicHVzaCIsImlkIiwidXNlcm5hbWUiLCJ2b2x1bWUiLCJtYXAiLCJzYWxlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFJQyxHQUFELElBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBaUJDLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQTlCLENBQXpCOztBQUVBLE1BQU1DLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQ0gsS0FBSyxDQUFDQyxLQUFQLENBQWxDLENBRCtCLENBRS9COztBQUVBLFFBQU07QUFBRUcsUUFBRjtBQUFRQztBQUFSLE1BQWtCQywwQ0FBTSxDQUM1QixvRUFENEIsRUFFNUJiLE9BRjRCLENBQTlCO0FBS0FjLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRUFJLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlMLElBQUosRUFBVTtBQUNSLFlBQU1NLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLFdBQUssTUFBTUMsR0FBWCxJQUFrQlAsSUFBbEIsRUFBd0I7QUFDdEJNLHdCQUFnQixDQUFDRSxJQUFqQixDQUFzQjtBQUNwQkMsWUFBRSxFQUFFRixHQURnQjtBQUVwQkcsa0JBQVEsRUFBRVYsSUFBSSxDQUFDTyxHQUFELENBQUosQ0FBVUcsUUFGQTtBQUdwQkMsZ0JBQU0sRUFBRVgsSUFBSSxDQUFDTyxHQUFELENBQUosQ0FBVUk7QUFIRSxTQUF0QjtBQUtEOztBQUNEYixjQUFRLENBQUNRLGdCQUFELENBQVI7QUFDRDtBQUNGLEdBWlEsRUFZTixDQUFDTixJQUFELENBWk0sQ0FBVCxDQVgrQixDQXlCL0I7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJQyxLQUFKLEVBQVc7QUFDVCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNILEtBQWQsRUFBcUI7QUFDbkIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dBLEtBQUssQ0FBQ2UsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUEsaUJBQ0dBLElBQUksQ0FBQ0gsUUFEUixVQUNzQkcsSUFBSSxDQUFDRixNQUQzQjtBQUFBLE9BQVNFLElBQUksQ0FBQ0osRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0E5REQ7O0FBZ0VPLGVBQWVLLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU10QixRQUFRLEdBQUcsTUFBTUYsS0FBSyxDQUMxQixvRUFEMEIsQ0FBNUI7QUFHQSxRQUFNUyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDQyxJQUFULEVBQW5CO0FBRUEsUUFBTVksZ0JBQWdCLEdBQUcsRUFBekI7O0FBQ0EsT0FBSyxNQUFNQyxHQUFYLElBQWtCUCxJQUFsQixFQUF3QjtBQUN0Qk0sb0JBQWdCLENBQUNFLElBQWpCLENBQXNCO0FBQ3BCQyxRQUFFLEVBQUVGLEdBRGdCO0FBRXBCRyxjQUFRLEVBQUVWLElBQUksQ0FBQ08sR0FBRCxDQUFKLENBQVVHLFFBRkE7QUFHcEJDLFlBQU0sRUFBRVgsSUFBSSxDQUFDTyxHQUFELENBQUosQ0FBVUk7QUFIRSxLQUF0QjtBQUtEOztBQUNELFNBQU87QUFDTGYsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRVM7QUFERixLQURGO0FBSUxVLGNBQVUsRUFBRTtBQUpQLEdBQVA7QUFNRDtBQUVjckIsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmNvbnN0IExhc3RTYWxlc1BhZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZShwcm9wcy5zYWxlcyk7XG4gIC8vICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS0yYTAzMy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvbicsXG4gICAgZmV0Y2hlclxuICApO1xuXG4gIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gIC8vICAgICBmZXRjaCgnaHR0cHM6Ly9uZXh0anMtY291cnNlLTJhMDMzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJylcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gIC8vICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAvLyAgICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgLy8gICAgICAgICAgICAgaWQ6IGtleSxcbiAgLy8gICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgLy8gICAgICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAvLyAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHNldFNhbGVzKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAvLyAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPHA+RmFpbGVkIHRvIGxvYWQuPC9wPjtcbiAgfVxuXG4gIGlmICghZGF0YSAmJiAhc2FsZXMpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7c2FsZXMubWFwKChzYWxlKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxuICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52b2x1bWV9XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9uZXh0anMtY291cnNlLTJhMDMzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uJ1xuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICBpZDoga2V5LFxuICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzYWxlczogdHJhbnNmb3JtZWRTYWxlcyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });