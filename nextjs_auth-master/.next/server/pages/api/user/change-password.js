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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/change-password.js");
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

/***/ "./pages/api/user/change-password.js":
/*!*******************************************!*\
  !*** ./pages/api/user/change-password.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ \"./lib/db.js\");\n\n\n\n\nasync function handler(req, res) {\n  if (req.method !== 'PATCH') {\n    return;\n  }\n\n  const session = await Object(next_auth_react__WEBPACK_IMPORTED_MODULE_0__[\"getSession\"])({\n    req: req\n  });\n\n  if (!session) {\n    res.status(401).json({\n      message: 'Not authenticated!'\n    }); // code 401 means authentication is missing\n\n    return;\n  }\n\n  const userEmail = session.user.email;\n  const oldPassword = req.body.oldPassword;\n  const newPassword = req.body.newPassword;\n  const client = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"connectToDatabase\"])();\n  const usersCollection = client.db().collection('users');\n  const user = await usersCollection.findOne({\n    email: userEmail\n  });\n\n  if (!user) {\n    res.status(404).json({\n      message: 'User not found!'\n    });\n    client.close();\n    return;\n  }\n\n  const currentPassword = user.password;\n  const passwordsAreWEqual = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"verifypassword\"])(oldPassword, currentPassword);\n\n  if (!passwordsAreWEqual) {\n    res.status(403).json({\n      message: 'Invalid password.'\n    });\n    client.close();\n    return;\n  }\n\n  const hashedPassword = await Object(_lib_auth__WEBPACK_IMPORTED_MODULE_1__[\"hashPassword\"])(newPassword);\n  const result = await usersCollection.updateOne({\n    email: userEmail\n  }, {\n    $set: {\n      password: hashedPassword\n    }\n  });\n  client.close();\n  res.status(200).json({\n    message: 'Password updated!'\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQuanM/NzQ1YyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXJFbWFpbCIsInVzZXIiLCJlbWFpbCIsIm9sZFBhc3N3b3JkIiwiYm9keSIsIm5ld1Bhc3N3b3JkIiwiY2xpZW50IiwiY29ubmVjdFRvRGF0YWJhc2UiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiY2xvc2UiLCJjdXJyZW50UGFzc3dvcmQiLCJwYXNzd29yZCIsInBhc3N3b3Jkc0FyZVdFcXVhbCIsInZlcmlmeXBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoUGFzc3dvcmQiLCJyZXN1bHQiLCJ1cGRhdGVPbmUiLCIkc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxPQUFuQixFQUE0QjtBQUMxQjtBQUNEOztBQUVELFFBQU1DLE9BQU8sR0FBRyxNQUFNQyxrRUFBVSxDQUFDO0FBQUVKLE9BQUcsRUFBRUE7QUFBUCxHQUFELENBQWhDOztBQUVBLE1BQUksQ0FBQ0csT0FBTCxFQUFjO0FBQ1pGLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLEVBRFksQ0FDNkM7O0FBQ3pEO0FBQ0Q7O0FBRUQsUUFBTUMsU0FBUyxHQUFHTCxPQUFPLENBQUNNLElBQVIsQ0FBYUMsS0FBL0I7QUFDQSxRQUFNQyxXQUFXLEdBQUdYLEdBQUcsQ0FBQ1ksSUFBSixDQUFTRCxXQUE3QjtBQUNBLFFBQU1FLFdBQVcsR0FBR2IsR0FBRyxDQUFDWSxJQUFKLENBQVNDLFdBQTdCO0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLGlFQUFpQixFQUF0QztBQUVBLFFBQU1DLGVBQWUsR0FBR0YsTUFBTSxDQUFDRyxFQUFQLEdBQVlDLFVBQVosQ0FBdUIsT0FBdkIsQ0FBeEI7QUFFQSxRQUFNVCxJQUFJLEdBQUcsTUFBTU8sZUFBZSxDQUFDRyxPQUFoQixDQUF3QjtBQUFFVCxTQUFLLEVBQUVGO0FBQVQsR0FBeEIsQ0FBbkI7O0FBRUEsTUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDVFIsT0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDQU8sVUFBTSxDQUFDTSxLQUFQO0FBQ0E7QUFDRDs7QUFFRCxRQUFNQyxlQUFlLEdBQUdaLElBQUksQ0FBQ2EsUUFBN0I7QUFDQSxRQUFNQyxrQkFBa0IsR0FBRyxNQUFNQyxnRUFBYyxDQUFDYixXQUFELEVBQWNVLGVBQWQsQ0FBL0M7O0FBRUEsTUFBSSxDQUFDRSxrQkFBTCxFQUF5QjtBQUN2QnRCLE9BQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0FPLFVBQU0sQ0FBQ00sS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUssY0FBYyxHQUFHLE1BQU1DLDhEQUFZLENBQUNiLFdBQUQsQ0FBekM7QUFFQSxRQUFNYyxNQUFNLEdBQUcsTUFBTVgsZUFBZSxDQUFDWSxTQUFoQixDQUNuQjtBQUFFbEIsU0FBSyxFQUFFRjtBQUFULEdBRG1CLEVBRW5CO0FBQUVxQixRQUFJLEVBQUU7QUFBRVAsY0FBUSxFQUFFRztBQUFaO0FBQVIsR0FGbUIsQ0FBckI7QUFLQVgsUUFBTSxDQUFDTSxLQUFQO0FBQ0FuQixLQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFyQjtBQUNEOztBQUVjUixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgaGFzaFBhc3N3b3JkLCB2ZXJpZnlwYXNzd29yZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9hdXRoJztcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RiJztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BBVENIJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiByZXEgfSk7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnTm90IGF1dGhlbnRpY2F0ZWQhJyB9KTsgLy8gY29kZSA0MDEgbWVhbnMgYXV0aGVudGljYXRpb24gaXMgbWlzc2luZ1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHVzZXJFbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcbiAgY29uc3Qgb2xkUGFzc3dvcmQgPSByZXEuYm9keS5vbGRQYXNzd29yZDtcbiAgY29uc3QgbmV3UGFzc3dvcmQgPSByZXEuYm9keS5uZXdQYXNzd29yZDtcblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuXG4gIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGNsaWVudC5kYigpLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCEnIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRQYXNzd29yZCA9IHVzZXIucGFzc3dvcmQ7XG4gIGNvbnN0IHBhc3N3b3Jkc0FyZVdFcXVhbCA9IGF3YWl0IHZlcmlmeXBhc3N3b3JkKG9sZFBhc3N3b3JkLCBjdXJyZW50UGFzc3dvcmQpO1xuXG4gIGlmICghcGFzc3dvcmRzQXJlV0VxdWFsKSB7XG4gICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBwYXNzd29yZC4nIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKG5ld1Bhc3N3b3JkKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24udXBkYXRlT25lKFxuICAgIHsgZW1haWw6IHVzZXJFbWFpbCB9LFxuICAgIHsgJHNldDogeyBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQgfSB9XG4gICk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1Bhc3N3b3JkIHVwZGF0ZWQhJyB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/change-password.js\n");

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

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcmVhY3RcIj8xMmY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC9yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/react\n");

/***/ })

/******/ });