module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: hashPassword, verifypassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hashPassword\", function() { return hashPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifypassword\", function() { return verifypassword; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n  const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"hash\"])(password, 12);\n  return hashedPassword;\n}\nasync function verifypassword(password, hashedPassword) {\n  const isValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__[\"compare\"])(password, hashedPassword);\n  return isValid;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC5qcz8zMjRmIl0sIm5hbWVzIjpbImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwidmVyaWZ5cGFzc3dvcmQiLCJpc1ZhbGlkIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sZUFBZUEsWUFBZixDQUE0QkMsUUFBNUIsRUFBc0M7QUFDM0MsUUFBTUMsY0FBYyxHQUFHLE1BQU1DLHFEQUFJLENBQUNGLFFBQUQsRUFBVyxFQUFYLENBQWpDO0FBQ0EsU0FBT0MsY0FBUDtBQUNEO0FBRU0sZUFBZUUsY0FBZixDQUE4QkgsUUFBOUIsRUFBd0NDLGNBQXhDLEVBQXdEO0FBQzdELFFBQU1HLE9BQU8sR0FBRyxNQUFNQyx3REFBTyxDQUFDTCxRQUFELEVBQVdDLGNBQVgsQ0FBN0I7QUFDQSxTQUFPRyxPQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc2gsIGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeXBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(`mongodb+srv://${\"user\"}:${\"wDewiEi9ceXTNfj2\"}@${\"cluster0\"}.xlism.mongodb.net/${\"nextAuth\"}?retryWrites=true&w=majority`);\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIuanM/YmI1MSJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxlQUFlQSxpQkFBZixHQUFtQztBQUN4QyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNsQixpQkFBZ0JDLE1BQXlCLElBQUdBLGtCQUE2QixJQUFHQSxVQUE0QixzQkFBcUJBLFVBQTZCLDhCQUR4SSxDQUFyQjtBQUdBLFNBQU9ILE1BQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcn06JHtwcm9jZXNzLmVudi5tb25nb2RiX3Bhc3N3b3JkfUAke3Byb2Nlc3MuZW52Lm1vbmdvZGJfY2x1c3Rlcn0ueGxpc20ubW9uZ29kYi5uZXQvJHtwcm9jZXNzLmVudi5tb25nb2RiX2RhdGFiYXNlfT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXG4gICk7XG4gIHJldHVybiBjbGllbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n    async authorize(credentials) {\n      const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_3__[\"connectToDatabase\"])();\n      const usersCollection = client.db().collection('users');\n      const user = await usersCollection.findOne({\n        email: credentials.email\n      });\n\n      if (!user) {\n        client.close();\n        throw new Error('No user found!');\n      }\n\n      const isValid = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__[\"verifypassword\"])(credentials.password, user.password);\n\n      if (!isValid) {\n        client.close();\n        throw new Error('Could not log you in!');\n      }\n\n      client.close();\n      return {\n        email: user.email\n      };\n    }\n\n  })],\n  secret: \"Yy1MAPtT+zbgV19B7Jp7BzDoisaOT2C20EjecCmIDWk=\"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiY2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiY2xvc2UiLCJFcnJvciIsImlzVmFsaWQiLCJ2ZXJpZnlwYXNzd29yZCIsInBhc3N3b3JkIiwic2VjcmV0IiwicHJvY2VzcyIsIkpXVF9TRUNSRVQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZUEsK0dBQVEsQ0FBQztBQUN0QkMsU0FBTyxFQUFFO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBRGE7QUFFdEJDLFdBQVMsRUFBRSxDQUNUQyxzRUFBbUIsQ0FBQztBQUNsQixVQUFNQyxTQUFOLENBQWdCQyxXQUFoQixFQUE2QjtBQUMzQixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsaUVBQWlCLEVBQXRDO0FBRUEsWUFBTUMsZUFBZSxHQUFHRixNQUFNLENBQUNHLEVBQVAsR0FBWUMsVUFBWixDQUF1QixPQUF2QixDQUF4QjtBQUVBLFlBQU1DLElBQUksR0FBRyxNQUFNSCxlQUFlLENBQUNJLE9BQWhCLENBQXdCO0FBQ3pDQyxhQUFLLEVBQUVSLFdBQVcsQ0FBQ1E7QUFEc0IsT0FBeEIsQ0FBbkI7O0FBSUEsVUFBSSxDQUFDRixJQUFMLEVBQVc7QUFDVEwsY0FBTSxDQUFDUSxLQUFQO0FBQ0EsY0FBTSxJQUFJQyxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNEOztBQUVELFlBQU1DLE9BQU8sR0FBRyxNQUFNQyxnRUFBYyxDQUNsQ1osV0FBVyxDQUFDYSxRQURzQixFQUVsQ1AsSUFBSSxDQUFDTyxRQUY2QixDQUFwQzs7QUFLQSxVQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaVixjQUFNLENBQUNRLEtBQVA7QUFDQSxjQUFNLElBQUlDLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ0Q7O0FBRURULFlBQU0sQ0FBQ1EsS0FBUDtBQUNBLGFBQU87QUFBRUQsYUFBSyxFQUFFRixJQUFJLENBQUNFO0FBQWQsT0FBUDtBQUNEOztBQTNCaUIsR0FBRCxDQURWLENBRlc7QUFpQ3RCTSxRQUFNLEVBQUVDLDhDQUFzQkM7QUFqQ1IsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgdmVyaWZ5cGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi9saWIvYXV0aCc7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYic7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjogeyBqd3Q6IHRydWUgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBjbGllbnQuZGIoKS5jb2xsZWN0aW9uKCd1c2VycycpO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgdmVyaWZ5cGFzc3dvcmQoXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGxvZyB5b3UgaW4hJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIHsgZW1haWw6IHVzZXIuZW1haWwgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers/credentials\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI/ZGUwNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers/credentials\n");

/***/ })

/******/ });