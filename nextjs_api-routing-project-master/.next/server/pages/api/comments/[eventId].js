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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/comments/[eventId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/db-utils.js":
/*!*****************************!*\
  !*** ./helpers/db-utils.js ***!
  \*****************************/
/*! exports provided: connectDatabase, insertDocument, getAllDocuments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertDocument\", function() { return insertDocument; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllDocuments\", function() { return getAllDocuments; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDatabase() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://user:wDewiEi9ceXTNfj2@cluster0.xlism.mongodb.net/events?retryWrites=true&w=majority');\n  return client;\n}\nasync function insertDocument(client, collection, document) {\n  const db = client.db();\n  const result = await db.collection(collection).insertOne(document);\n  return result;\n}\nasync function getAllDocuments(client, collection, sort, filter = {}) {\n  const db = client.db();\n  const documents = await db.collection(collection).find(filter).sort(sort).toArray();\n  return documents;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2RiLXV0aWxzLmpzPzI3YTciXSwibmFtZXMiOlsiY29ubmVjdERhdGFiYXNlIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiaW5zZXJ0RG9jdW1lbnQiLCJjb2xsZWN0aW9uIiwiZG9jdW1lbnQiLCJkYiIsInJlc3VsdCIsImluc2VydE9uZSIsImdldEFsbERvY3VtZW50cyIsInNvcnQiLCJmaWx0ZXIiLCJkb2N1bWVudHMiLCJmaW5kIiwidG9BcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxlQUFlQSxlQUFmLEdBQWlDO0FBQ3RDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLG1HQURtQixDQUFyQjtBQUlBLFNBQU9GLE1BQVA7QUFDRDtBQUVNLGVBQWVHLGNBQWYsQ0FBOEJILE1BQTlCLEVBQXNDSSxVQUF0QyxFQUFrREMsUUFBbEQsRUFBNEQ7QUFDakUsUUFBTUMsRUFBRSxHQUFHTixNQUFNLENBQUNNLEVBQVAsRUFBWDtBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQUgsQ0FBY0EsVUFBZCxFQUEwQkksU0FBMUIsQ0FBb0NILFFBQXBDLENBQXJCO0FBRUEsU0FBT0UsTUFBUDtBQUNEO0FBRU0sZUFBZUUsZUFBZixDQUErQlQsTUFBL0IsRUFBdUNJLFVBQXZDLEVBQW1ETSxJQUFuRCxFQUF5REMsTUFBTSxHQUFHLEVBQWxFLEVBQXNFO0FBQzNFLFFBQU1MLEVBQUUsR0FBR04sTUFBTSxDQUFDTSxFQUFQLEVBQVg7QUFFQSxRQUFNTSxTQUFTLEdBQUcsTUFBTU4sRUFBRSxDQUN2QkYsVUFEcUIsQ0FDVkEsVUFEVSxFQUVyQlMsSUFGcUIsQ0FFaEJGLE1BRmdCLEVBR3JCRCxJQUhxQixDQUdoQkEsSUFIZ0IsRUFJckJJLE9BSnFCLEVBQXhCO0FBTUEsU0FBT0YsU0FBUDtBQUNEIiwiZmlsZSI6Ii4vaGVscGVycy9kYi11dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0RGF0YWJhc2UoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8vdXNlcjp3RGV3aUVpOWNlWFROZmoyQGNsdXN0ZXIwLnhsaXNtLm1vbmdvZGIubmV0L2V2ZW50cz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG4gICk7XG5cbiAgcmV0dXJuIGNsaWVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydERvY3VtZW50KGNsaWVudCwgY29sbGVjdGlvbiwgZG9jdW1lbnQpIHtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShkb2N1bWVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERvY3VtZW50cyhjbGllbnQsIGNvbGxlY3Rpb24sIHNvcnQsIGZpbHRlciA9IHt9KSB7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgZG9jdW1lbnRzID0gYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihjb2xsZWN0aW9uKVxuICAgIC5maW5kKGZpbHRlcilcbiAgICAuc29ydChzb3J0KVxuICAgIC50b0FycmF5KCk7XG5cbiAgcmV0dXJuIGRvY3VtZW50cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-utils.js\n");

/***/ }),

/***/ "./pages/api/comments/[eventId].js":
/*!*****************************************!*\
  !*** ./pages/api/comments/[eventId].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_db_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/db-utils */ \"./helpers/db-utils.js\");\n\n\nasync function handler(req, res) {\n  const {\n    eventId\n  } = req.query;\n  let client;\n\n  try {\n    client = await Object(_helpers_db_utils__WEBPACK_IMPORTED_MODULE_0__[\"connectDatabase\"])();\n  } catch (error) {\n    res.status(500).json({\n      message: 'Connecting to the database failed.'\n    });\n    return;\n  }\n\n  if (req.method === 'POST') {\n    const {\n      email,\n      name,\n      text\n    } = req.body; // server-side validation\n\n    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {\n      res.status(422).json({\n        message: 'Invalid input.'\n      });\n      client.close();\n      return;\n    }\n\n    const newComment = {\n      email,\n      name,\n      text,\n      eventId\n    };\n    let result;\n\n    try {\n      result = await Object(_helpers_db_utils__WEBPACK_IMPORTED_MODULE_0__[\"insertDocument\"])(client, 'comments', newComment);\n      newComment._id = result.insertedId;\n      res.status(201).json({\n        message: 'Added successfully!',\n        comment: newComment\n      });\n    } catch (error) {\n      res.status(500).json({\n        message: 'Inserting comment failed.'\n      });\n    }\n  }\n\n  if (req.method === 'GET') {\n    let documents;\n\n    try {\n      documents = await Object(_helpers_db_utils__WEBPACK_IMPORTED_MODULE_0__[\"getAllDocuments\"])(client, 'comments', {\n        _id: -1\n      }, {\n        eventId\n      });\n      res.status(200).json({\n        comments: documents\n      });\n    } catch (error) {\n      res.status(500).json({\n        message: 'Getting comments failed.'\n      });\n    }\n  }\n\n  client.close();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzPzNjNGEiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImV2ZW50SWQiLCJxdWVyeSIsImNsaWVudCIsImNvbm5lY3REYXRhYmFzZSIsImVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJtZXRob2QiLCJlbWFpbCIsIm5hbWUiLCJ0ZXh0IiwiYm9keSIsImluY2x1ZGVzIiwidHJpbSIsImNsb3NlIiwibmV3Q29tbWVudCIsInJlc3VsdCIsImluc2VydERvY3VtZW50IiwiX2lkIiwiaW5zZXJ0ZWRJZCIsImNvbW1lbnQiLCJkb2N1bWVudHMiLCJnZXRBbGxEb2N1bWVudHMiLCJjb21tZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQU1BLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixRQUFNO0FBQUVDO0FBQUYsTUFBY0YsR0FBRyxDQUFDRyxLQUF4QjtBQUVBLE1BQUlDLE1BQUo7O0FBRUEsTUFBSTtBQUNGQSxVQUFNLEdBQUcsTUFBTUMseUVBQWUsRUFBOUI7QUFDRCxHQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RMLE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDRDs7QUFFRCxNQUFJVCxHQUFHLENBQUNVLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNO0FBQUVDLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLFFBQXdCYixHQUFHLENBQUNjLElBQWxDLENBRHlCLENBR3pCOztBQUNBLFFBQ0UsQ0FBQ0gsS0FBSyxDQUFDSSxRQUFOLENBQWUsR0FBZixDQUFELElBQ0EsQ0FBQ0gsSUFERCxJQUVBQSxJQUFJLENBQUNJLElBQUwsT0FBZ0IsRUFGaEIsSUFHQSxDQUFDSCxJQUhELElBSUFBLElBQUksQ0FBQ0csSUFBTCxPQUFnQixFQUxsQixFQU1FO0FBQ0FmLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0FMLFlBQU0sQ0FBQ2EsS0FBUDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUMsVUFBVSxHQUFHO0FBQ2pCUCxXQURpQjtBQUVqQkMsVUFGaUI7QUFHakJDLFVBSGlCO0FBSWpCWDtBQUppQixLQUFuQjtBQU9BLFFBQUlpQixNQUFKOztBQUVBLFFBQUk7QUFDRkEsWUFBTSxHQUFHLE1BQU1DLHdFQUFjLENBQUNoQixNQUFELEVBQVMsVUFBVCxFQUFxQmMsVUFBckIsQ0FBN0I7QUFDQUEsZ0JBQVUsQ0FBQ0csR0FBWCxHQUFpQkYsTUFBTSxDQUFDRyxVQUF4QjtBQUNBckIsU0FBRyxDQUNBTSxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVE7QUFBRUMsZUFBTyxFQUFFLHFCQUFYO0FBQWtDYyxlQUFPLEVBQUVMO0FBQTNDLE9BRlI7QUFHRCxLQU5ELENBTUUsT0FBT1osS0FBUCxFQUFjO0FBQ2RMLFNBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJVCxHQUFHLENBQUNVLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QixRQUFJYyxTQUFKOztBQUNBLFFBQUk7QUFDRkEsZUFBUyxHQUFHLE1BQU1DLHlFQUFlLENBQy9CckIsTUFEK0IsRUFFL0IsVUFGK0IsRUFHL0I7QUFBRWlCLFdBQUcsRUFBRSxDQUFDO0FBQVIsT0FIK0IsRUFJL0I7QUFBRW5CO0FBQUYsT0FKK0IsQ0FBakM7QUFNQUQsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRWtCLGdCQUFRLEVBQUVGO0FBQVosT0FBckI7QUFDRCxLQVJELENBUUUsT0FBT2xCLEtBQVAsRUFBYztBQUNkTCxTQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNEO0FBQ0Y7O0FBRURMLFFBQU0sQ0FBQ2EsS0FBUDtBQUNEOztBQUVjbEIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29tbWVudHMvW2V2ZW50SWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29ubmVjdERhdGFiYXNlLFxuICBnZXRBbGxEb2N1bWVudHMsXG4gIGluc2VydERvY3VtZW50LFxufSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2RiLXV0aWxzJztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGV2ZW50SWQgfSA9IHJlcS5xdWVyeTtcblxuICBsZXQgY2xpZW50O1xuXG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdERhdGFiYXNlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnQ29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2UgZmFpbGVkLicgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIHRleHQgfSA9IHJlcS5ib2R5O1xuXG4gICAgLy8gc2VydmVyLXNpZGUgdmFsaWRhdGlvblxuICAgIGlmIChcbiAgICAgICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8XG4gICAgICAhbmFtZSB8fFxuICAgICAgbmFtZS50cmltKCkgPT09ICcnIHx8XG4gICAgICAhdGV4dCB8fFxuICAgICAgdGV4dC50cmltKCkgPT09ICcnXG4gICAgKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIGlucHV0LicgfSk7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdDb21tZW50ID0ge1xuICAgICAgZW1haWwsXG4gICAgICBuYW1lLFxuICAgICAgdGV4dCxcbiAgICAgIGV2ZW50SWQsXG4gICAgfTtcblxuICAgIGxldCByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgaW5zZXJ0RG9jdW1lbnQoY2xpZW50LCAnY29tbWVudHMnLCBuZXdDb21tZW50KTtcbiAgICAgIG5ld0NvbW1lbnQuX2lkID0gcmVzdWx0Lmluc2VydGVkSWQ7XG4gICAgICByZXNcbiAgICAgICAgLnN0YXR1cygyMDEpXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogJ0FkZGVkIHN1Y2Nlc3NmdWxseSEnLCBjb21tZW50OiBuZXdDb21tZW50IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnNlcnRpbmcgY29tbWVudCBmYWlsZWQuJyB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBsZXQgZG9jdW1lbnRzO1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudHMgPSBhd2FpdCBnZXRBbGxEb2N1bWVudHMoXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgJ2NvbW1lbnRzJyxcbiAgICAgICAgeyBfaWQ6IC0xIH0sXG4gICAgICAgIHsgZXZlbnRJZCB9XG4gICAgICApO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb21tZW50czogZG9jdW1lbnRzIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdHZXR0aW5nIGNvbW1lbnRzIGZhaWxlZC4nIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWVudC5jbG9zZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/comments/[eventId].js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });