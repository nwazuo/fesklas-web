module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router-context.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n");

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst CircularProgress = ({\n  className\n}) => __jsx(\"div\", {\n  className: `loader ${className}`\n}, __jsx(\"img\", {\n  src: \"/images/loader.svg\",\n  alt: \"loader\",\n  style: {\n    height: 60\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CircularProgress);\nCircularProgress.defaultProps = {\n  className: ''\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzL2luZGV4LmpzP2RkZGQiXSwibmFtZXMiOlsiQ2lyY3VsYXJQcm9ncmVzcyIsImNsYXNzTmFtZSIsImhlaWdodCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWlCO0FBQUssV0FBUyxFQUFHLFVBQVNBLFNBQVU7QUFBcEMsR0FDeEM7QUFBSyxLQUFHLEVBQUMsb0JBQVQ7QUFBOEIsS0FBRyxFQUFDLFFBQWxDO0FBQTJDLE9BQUssRUFBRTtBQUFDQyxVQUFNLEVBQUU7QUFBVDtBQUFsRCxFQUR3QyxDQUExQzs7QUFHZUYsK0VBQWY7QUFDQUEsZ0JBQWdCLENBQUNHLFlBQWpCLEdBQWdDO0FBQzlCRixXQUFTLEVBQUU7QUFEbUIsQ0FBaEMiLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHtjbGFzc05hbWV9KSA9PiA8ZGl2IGNsYXNzTmFtZT17YGxvYWRlciAke2NsYXNzTmFtZX1gfT5cbiAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRlci5zdmdcIiBhbHQ9XCJsb2FkZXJcIiBzdHlsZT17e2hlaWdodDogNjB9fS8+XG48L2Rpdj47XG5leHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xuQ2lyY3VsYXJQcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJydcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/CircularProgress/index.js\n");

/***/ }),

/***/ "./firebaseConfig/index.js":
/*!*********************************!*\
  !*** ./firebaseConfig/index.js ***!
  \*********************************/
/*! exports provided: database, auth, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"database\", function() { return database; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"googleAuthProvider\", function() { return googleAuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"githubAuthProvider\", function() { return githubAuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"facebookAuthProvider\", function() { return facebookAuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"twitterAuthProvider\", function() { return twitterAuthProvider; });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n // Initialize Firebase\n\nconst config = {\n  apiKey: \"AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10\",\n  authDomain: \"wieldy-4f59c.firebaseapp.com\",\n  databaseURL: \"https://wieldy-4f59c.firebaseio.com\",\n  projectId: \"wieldy-4f59c\",\n  storageBucket: \"wieldy-4f59c.appspot.com\",\n  messagingSenderId: \"81949884261\"\n};\n\nif (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n}\n\nconst auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\nconst googleAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();\nconst facebookAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();\nconst githubAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GithubAuthProvider();\nconst twitterAuthProvider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.TwitterAuthProvider();\nconst database = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZUNvbmZpZy9pbmRleC5qcz8zOTI5Il0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiZ29vZ2xlQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImdpdGh1YkF1dGhQcm92aWRlciIsIkdpdGh1YkF1dGhQcm92aWRlciIsInR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiZGF0YWJhc2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUUseUNBREs7QUFFYkMsWUFBVSxFQUFFLDhCQUZDO0FBR2JDLGFBQVcsRUFBRSxxQ0FIQTtBQUliQyxXQUFTLEVBQUUsY0FKRTtBQUtiQyxlQUFhLEVBQUUsMEJBTEY7QUFNYkMsbUJBQWlCLEVBQUU7QUFOTixDQUFmOztBQVFBLElBQUksQ0FBQ0MsK0NBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYsaURBQVEsQ0FBQ0csYUFBVCxDQUF1QlYsTUFBdkI7QUFDRDs7QUFDRCxNQUFNVyxJQUFJLEdBQUdKLCtDQUFRLENBQUNJLElBQVQsRUFBYjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLElBQUlMLCtDQUFRLENBQUNJLElBQVQsQ0FBY0Usa0JBQWxCLEVBQTNCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsSUFBSVAsK0NBQVEsQ0FBQ0ksSUFBVCxDQUFjSSxvQkFBbEIsRUFBN0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxJQUFJVCwrQ0FBUSxDQUFDSSxJQUFULENBQWNNLGtCQUFsQixFQUEzQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLElBQUlYLCtDQUFRLENBQUNJLElBQVQsQ0FBY1EsbUJBQWxCLEVBQTVCO0FBRUEsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUSxDQUFDYSxRQUFULEVBQWpCIiwiZmlsZSI6Ii4vZmlyZWJhc2VDb25maWcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUF6LUdQZkEtaE43NG9GaDNYdlhzRjl2UXJsRTV4cFUxMFwiLFxuICBhdXRoRG9tYWluOiBcIndpZWxkeS00ZjU5Yy5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly93aWVsZHktNGY1OWMuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcIndpZWxkeS00ZjU5Y1wiLFxuICBzdG9yYWdlQnVja2V0OiBcIndpZWxkeS00ZjU5Yy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MTk0OTg4NDI2MVwiXG59O1xuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuXG5jb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbmNvbnN0IGZhY2Vib29rQXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIoKTtcbmNvbnN0IGdpdGh1YkF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcigpO1xuY29uc3QgdHdpdHRlckF1dGhQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLlR3aXR0ZXJBdXRoUHJvdmlkZXIoKTtcblxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuXG5leHBvcnQge1xuICBkYXRhYmFzZSxcbiAgYXV0aCxcbiAgZ29vZ2xlQXV0aFByb3ZpZGVyLFxuICBnaXRodWJBdXRoUHJvdmlkZXIsXG4gIGZhY2Vib29rQXV0aFByb3ZpZGVyLFxuICB0d2l0dGVyQXV0aFByb3ZpZGVyXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebaseConfig/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin */ \"./pages/signin.js\");\n/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/use-auth */ \"./util/use-auth.js\");\n/* harmony import */ var _main_dashboard_crm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/dashboard/crm */ \"./pages/main/dashboard/crm.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst homePage = () => {\n  const {\n    user\n  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__[\"useAuth\"])();\n  return user ? __jsx(_main_dashboard_crm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : __jsx(_signin__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvbWVQYWdlIiwidXNlciIsInVzZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNO0FBQUNDO0FBQUQsTUFBU0MsOERBQU8sRUFBdEI7QUFFQSxTQUFPRCxJQUFJLEdBQUcsTUFBQywyREFBRCxPQUFILEdBQXFCLE1BQUMsK0NBQUQsT0FBaEM7QUFDRCxDQUpEOztBQU1lRCx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduSW5QYWdlIGZyb20gXCIuL3NpZ25pblwiO1xuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vdXRpbC91c2UtYXV0aFwiO1xuaW1wb3J0IENybURhc2hib2FyZCBmcm9tIFwiLi9tYWluL2Rhc2hib2FyZC9jcm1cIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHt1c2VyfSA9IHVzZUF1dGgoKTtcblxuICByZXR1cm4gdXNlciA/IDxDcm1EYXNoYm9hcmQvPiA6IDxTaWduSW5QYWdlLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/main/dashboard/crm.js":
/*!*************************************!*\
  !*** ./pages/main/dashboard/crm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/components/CircularProgress */ \"./app/components/CircularProgress/index.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst CRM = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../routes/main/Dashboard/CRM */ \"./routes/main/Dashboard/CRM/index.js\")), {\n  loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null),\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../../routes/main/Dashboard/CRM */ \"./routes/main/Dashboard/CRM/index.js\")],\n    modules: ['../../../routes/main/Dashboard/CRM']\n  }\n});\n\nconst CrmDashboard = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"title\", null, \"CRM Dashboard\")), __jsx(CRM, null));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrmDashboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluL2Rhc2hib2FyZC9jcm0uanM/Y2UxZiJdLCJuYW1lcyI6WyJDUk0iLCJkeW5hbWljIiwibG9hZGluZyIsIkNybURhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUdDLG1EQUFPLENBQUMsTUFBTSwrSkFBUCxFQUFxRDtBQUN0RUMsU0FBTyxFQUFFLE1BQU0sTUFBQyx3RUFBRCxPQUR1RDtBQUFBO0FBQUEsd0NBQXZDLGdGQUF1QztBQUFBLGNBQXZDLG9DQUF1QztBQUFBO0FBQUEsQ0FBckQsQ0FBbkI7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLE1BQ25CLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsTUFBQyxnREFBRCxRQUNFLHFDQURGLENBREYsRUFJRSxNQUFDLEdBQUQsT0FKRixDQURGOztBQVNlQSwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL21haW4vZGFzaGJvYXJkL2NybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcblxuY29uc3QgQ1JNID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL3JvdXRlcy9tYWluL0Rhc2hib2FyZC9DUk0nKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8Q2lyY3VsYXJQcm9ncmVzcy8+LFxufSk7XG5cbmNvbnN0IENybURhc2hib2FyZCA9ICgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkNSTSBEYXNoYm9hcmQ8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8Q1JNLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENybURhc2hib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/main/dashboard/crm.js\n");

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/asyncComponent */ \"./util/asyncComponent.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SignIn = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../routes/customViews/userAuth/SignIn */ \"./routes/customViews/userAuth/SignIn/index.js\")));\n\nconst SignInPage = () => {\n  return __jsx(SignIn, null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduaW4uanM/MGMxZSJdLCJuYW1lcyI6WyJTaWduSW4iLCJhc3luY0NvbXBvbmVudCIsIlNpZ25JblBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBR0Msb0VBQWMsQ0FBQyxNQUFNLDJLQUFQLENBQTdCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFNBQU8sTUFBQyxNQUFELE9BQVA7QUFDRCxDQUZEOztBQUllQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NpZ25pbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXN5bmNDb21wb25lbnQgZnJvbSAnLi4vdXRpbC9hc3luY0NvbXBvbmVudCdcblxuY29uc3QgU2lnbkluID0gYXN5bmNDb21wb25lbnQoKCkgPT4gaW1wb3J0KCcuLi9yb3V0ZXMvY3VzdG9tVmlld3MvdXNlckF1dGgvU2lnbkluJykpO1xuXG5jb25zdCBTaWduSW5QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPFNpZ25Jbi8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5QYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "./util/asyncComponent.js":
/*!********************************!*\
  !*** ./util/asyncComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return asyncComponent; });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/CircularProgress */ \"./app/components/CircularProgress/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction asyncComponent(importComponent) {\n  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {\n    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL2FzeW5jQ29tcG9uZW50LmpzPzU4YWYiXSwibmFtZXMiOlsiYXN5bmNDb21wb25lbnQiLCJpbXBvcnRDb21wb25lbnQiLCJkeW5hbWljIiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULENBQXdCQyxlQUF4QixFQUF5QztBQUV0RCxTQUFPQyxtREFBTyxDQUFDRCxlQUFELEVBQ1o7QUFDRUUsV0FBTyxFQUFFLE1BQU0sTUFBQyx3RUFBRDtBQURqQixHQURZLENBQWQ7QUFJRCIsImZpbGUiOiIuL3V0aWwvYXN5bmNDb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXN5bmNDb21wb25lbnQoaW1wb3J0Q29tcG9uZW50KSB7XG5cbiAgcmV0dXJuIGR5bmFtaWMoaW1wb3J0Q29tcG9uZW50LFxuICAgIHtcbiAgICAgIGxvYWRpbmc6ICgpID0+IDxDaXJjdWxhclByb2dyZXNzLz5cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/asyncComponent.js\n");

/***/ }),

/***/ "./util/use-auth.js":
/*!**************************!*\
  !*** ./util/use-auth.js ***!
  \**************************/
/*! exports provided: ProvideAuth, useAuth, isUnRestrictedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProvideAuth\", function() { return ProvideAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUnRestrictedRoute\", function() { return isUnRestrictedRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebaseConfig/index */ \"./firebaseConfig/index.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(); // Provider component that wraps your app and makes auth object ..\n// ... available to any child component that calls useAuth().\n\nfunction ProvideAuth({\n  children\n}) {\n  const auth = useProvideAuth();\n  return __jsx(authContext.Provider, {\n    value: auth\n  }, children);\n} // Hook for child components to get the auth object ...\n// ... and re-render when it changes.\n\nconst useAuth = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n}; // Provider hook that creates auth object and handles state\n\nfunction useProvideAuth() {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: isLoadingUser,\n    1: setLoadingUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: isLoading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const fetchStart = () => {\n    setLoading(true);\n    setError('');\n  };\n\n  const fetchSuccess = () => {\n    setLoading(false);\n    setError('');\n  };\n\n  const fetchError = error => {\n    setLoading(false);\n    setError(error.message);\n  }; // Wrap any Firebase methods we want to use making sure ...\n  // ... to save the user to state.\n\n\n  const loginWithSocial = (platform, callbackFun) => {\n    let authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"googleAuthProvider\"];\n\n    if (platform === 'facebook') {\n      authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"facebookAuthProvider\"];\n    }\n\n    if (platform === 'github') {\n      authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"githubAuthProvider\"];\n    }\n\n    if (platform === 'twitter') {\n      authProvider = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"twitterAuthProvider\"];\n    }\n\n    try {\n      fetchStart();\n      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signInWithPopup(authProvider).then(response => {\n        fetchSuccess();\n        setUser(response.user);\n        if (callbackFun) callbackFun();\n        return response.user;\n      }).catch(error => {\n        fetchError(error);\n      });\n    } catch (error) {\n      fetchError(error);\n    }\n  };\n\n  const login = (email, password, callbackFun) => {\n    try {\n      fetchStart();\n      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signInWithEmailAndPassword(email, password).then(response => {\n        fetchSuccess();\n        setUser(response.user);\n        if (callbackFun) callbackFun();\n        return response.user;\n      }).catch(error => {\n        fetchError(error);\n      });\n    } catch (error) {\n      fetchError(error);\n    }\n  };\n\n  const signup = (email, password, callbackFun) => {\n    try {\n      fetchStart();\n      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].createUserWithEmailAndPassword(email, password).then(response => {\n        fetchSuccess();\n        setUser(response.user);\n        if (callbackFun) callbackFun();\n        return response.user;\n      }).catch(error => {\n        fetchError(error);\n      });\n    } catch (error) {\n      fetchError(error);\n    }\n  };\n\n  const signOut = () => {\n    return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].signOut().then(() => {\n      setUser(false);\n    });\n  };\n\n  const sendPasswordResetEmail = (email, callbackFun) => {\n    try {\n      fetchStart();\n      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].sendPasswordResetEmail(email).then(() => {\n        fetchSuccess();\n        if (callbackFun) callbackFun();\n        return true;\n      }).catch(error => {\n        fetchError(error);\n      });\n    } catch (error) {\n      fetchError(error);\n    }\n  };\n\n  const confirmPasswordReset = (code, password, callbackFun) => {\n    try {\n      fetchStart();\n      return _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].confirmPasswordReset(code, password).then(() => {\n        fetchSuccess();\n        if (callbackFun) callbackFun();\n        return true;\n      }).catch(error => {\n        fetchError(error);\n      });\n    } catch (error) {\n      fetchError(error);\n    }\n  }; // Subscribe to user on mount\n  // Because this sets state in the callback it will cause any ...\n  // ... component that utilizes this hook to re-render with the ...\n  // ... latest auth object.\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const unsubscribe = _firebaseConfig_index__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].onAuthStateChanged(user => {\n      if (user) {\n        setUser(user);\n      } else {\n        setUser(false);\n      }\n\n      setLoadingUser(false);\n    }); // Cleanup subscription on unmount\n\n    return () => unsubscribe();\n  }, []); // Return the user object and auth methods\n\n  return {\n    isLoadingUser,\n    isLoading,\n    user,\n    error,\n    login,\n    signup,\n    signOut,\n    sendPasswordResetEmail,\n    confirmPasswordReset,\n    loginWithSocial\n  };\n}\n\nconst isUnRestrictedRoute = pathname => {\n  return pathname === '/signin' || pathname === '/signup';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL3VzZS1hdXRoLmpzPzRiZmEiXSwibmFtZXMiOlsiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZUF1dGgiLCJjaGlsZHJlbiIsImF1dGgiLCJ1c2VQcm92aWRlQXV0aCIsInVzZUF1dGgiLCJ1c2VDb250ZXh0IiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZ1VzZXIiLCJzZXRMb2FkaW5nVXNlciIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hTdGFydCIsImZldGNoU3VjY2VzcyIsImZldGNoRXJyb3IiLCJtZXNzYWdlIiwibG9naW5XaXRoU29jaWFsIiwicGxhdGZvcm0iLCJjYWxsYmFja0Z1biIsImF1dGhQcm92aWRlciIsImdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rQXV0aFByb3ZpZGVyIiwiZ2l0aHViQXV0aFByb3ZpZGVyIiwidHdpdHRlckF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWdudXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0Iiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29kZSIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiaXNVblJlc3RyaWN0ZWRSb3V0ZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFRQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQyxDLENBR0E7QUFDQTs7QUFFTyxTQUFTQyxXQUFULENBQXFCO0FBQUNDO0FBQUQsQ0FBckIsRUFBaUM7QUFDdEMsUUFBTUMsSUFB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SztBQVFMQywwQkFSSztBQVNMQyx3QkFUSztBQVVMcEI7QUFWSyxHQUFQO0FBWUQ7O0FBRU0sTUFBTXlCLG1CQUFtQixHQUFJQyxRQUFELElBQWM7QUFDL0MsU0FBT0EsUUFBUSxLQUFLLFNBQWIsSUFBMEJBLFFBQVEsS0FBSyxTQUE5QztBQUNELENBRk0iLCJmaWxlIjoiLi91dGlsL3VzZS1hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBhdXRoLFxuICBmYWNlYm9va0F1dGhQcm92aWRlcixcbiAgZ2l0aHViQXV0aFByb3ZpZGVyLFxuICBnb29nbGVBdXRoUHJvdmlkZXIsXG4gIHR3aXR0ZXJBdXRoUHJvdmlkZXJcbn0gZnJvbSBcIi4uL2ZpcmViYXNlQ29uZmlnL2luZGV4XCI7XG5cbmNvbnN0IGF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5cbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0aGF0IHdyYXBzIHlvdXIgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUF1dGgoe2NoaWxkcmVufSkge1xuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xufVxuXG4vLyBIb29rIGZvciBjaGlsZCBjb21wb25lbnRzIHRvIGdldCB0aGUgYXV0aCBvYmplY3QgLi4uXG4vLyAuLi4gYW5kIHJlLXJlbmRlciB3aGVuIGl0IGNoYW5nZXMuXG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XG59O1xuXG5cbi8vIFByb3ZpZGVyIGhvb2sgdGhhdCBjcmVhdGVzIGF1dGggb2JqZWN0IGFuZCBoYW5kbGVzIHN0YXRlXG5cbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZ1VzZXIsIHNldExvYWRpbmdVc2VyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgZmV0Y2hTdGFydCA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgfVxuXG4gIGNvbnN0IGZldGNoU3VjY2VzcyA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaEVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gIH1cblxuICAvLyBXcmFwIGFueSBGaXJlYmFzZSBtZXRob2RzIHdlIHdhbnQgdG8gdXNlIG1ha2luZyBzdXJlIC4uLlxuICAvLyAuLi4gdG8gc2F2ZSB0aGUgdXNlciB0byBzdGF0ZS5cblxuICBjb25zdCBsb2dpbldpdGhTb2NpYWwgPSAocGxhdGZvcm0sIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgbGV0IGF1dGhQcm92aWRlciA9IGdvb2dsZUF1dGhQcm92aWRlcjtcbiAgICBpZiAocGxhdGZvcm0gPT09ICdmYWNlYm9vaycpIHtcbiAgICAgIGF1dGhQcm92aWRlciA9IGZhY2Vib29rQXV0aFByb3ZpZGVyO1xuICAgIH1cblxuICAgIGlmIChwbGF0Zm9ybSA9PT0gJ2dpdGh1YicpIHtcbiAgICAgIGF1dGhQcm92aWRlciA9IGdpdGh1YkF1dGhQcm92aWRlcjtcbiAgICB9XG5cbiAgICBpZiAocGxhdGZvcm0gPT09ICd0d2l0dGVyJykge1xuICAgICAgYXV0aFByb3ZpZGVyID0gdHdpdHRlckF1dGhQcm92aWRlcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZmV0Y2hTdGFydCgpO1xuICAgICAgcmV0dXJuIGF1dGguc2lnbkluV2l0aFBvcHVwKGF1dGhQcm92aWRlcilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2dpbiA9IChlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZldGNoU3RhcnQoKTtcbiAgICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgZmV0Y2hTdGFydCgpO1xuICAgICAgcmV0dXJuIGF1dGguY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcik7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS51c2VyO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gKGVtYWlsLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBmZXRjaFN0YXJ0KCk7XG4gICAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVzZXQgPSAoY29kZSwgcGFzc3dvcmQsIGNhbGxiYWNrRnVuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGZldGNoU3RhcnQoKTtcbiAgICAgIHJldHVybiBhdXRoLmNvbmZpcm1QYXNzd29yZFJlc2V0KGNvZGUsIHBhc3N3b3JkKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrRnVuKSBjYWxsYmFja0Z1bigpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBmZXRjaEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHVzZXIgb24gbW91bnRcbiAgLy8gQmVjYXVzZSB0aGlzIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrIGl0IHdpbGwgY2F1c2UgYW55IC4uLlxuICAvLyAuLi4gY29tcG9uZW50IHRoYXQgdXRpbGl6ZXMgdGhpcyBob29rIHRvIHJlLXJlbmRlciB3aXRoIHRoZSAuLi5cbiAgLy8gLi4uIGxhdGVzdCBhdXRoIG9iamVjdC5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VXNlcihmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xuICByZXR1cm4ge1xuICAgIGlzTG9hZGluZ1VzZXIsXG4gICAgaXNMb2FkaW5nLFxuICAgIHVzZXIsXG4gICAgZXJyb3IsXG4gICAgbG9naW4sXG4gICAgc2lnbnVwLFxuICAgIHNpZ25PdXQsXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCxcbiAgICBjb25maXJtUGFzc3dvcmRSZXNldCxcbiAgICBsb2dpbldpdGhTb2NpYWxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzVW5SZXN0cmljdGVkUm91dGUgPSAocGF0aG5hbWUpID0+IHtcbiAgcmV0dXJuIHBhdGhuYW1lID09PSAnL3NpZ25pbicgfHwgcGF0aG5hbWUgPT09ICcvc2lnbnVwJ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/use-auth.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "@ant-design/icons/lib/icons/FacebookOutlined":
/*!***************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/FacebookOutlined" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons/lib/icons/FacebookOutlined\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvRmFjZWJvb2tPdXRsaW5lZFwiPzgzM2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0ZhY2Vib29rT3V0bGluZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvRmFjZWJvb2tPdXRsaW5lZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons/lib/icons/FacebookOutlined\n");

/***/ }),

/***/ "@ant-design/icons/lib/icons/GithubOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/GithubOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons/lib/icons/GithubOutlined\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvR2l0aHViT3V0bGluZWRcIj9lODNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9HaXRodWJPdXRsaW5lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9HaXRodWJPdXRsaW5lZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons/lib/icons/GithubOutlined\n");

/***/ }),

/***/ "@ant-design/icons/lib/icons/GoogleOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/GoogleOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons/lib/icons/GoogleOutlined\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvR29vZ2xlT3V0bGluZWRcIj85ZDFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Hb29nbGVPdXRsaW5lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Hb29nbGVPdXRsaW5lZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons/lib/icons/GoogleOutlined\n");

/***/ }),

/***/ "@ant-design/icons/lib/icons/TwitterOutlined":
/*!**************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/TwitterOutlined" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons/lib/icons/TwitterOutlined\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvVHdpdHRlck91dGxpbmVkXCI/OTFkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvVHdpdHRlck91dGxpbmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1R3aXR0ZXJPdXRsaW5lZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons/lib/icons/TwitterOutlined\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"d3-scale\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkMy1zY2FsZVwiP2JmNjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZDMtc2NhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkMy1zY2FsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///d3-scale\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCI/ODYwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pbnRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intl\n");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-simple-maps":
/*!************************************!*\
  !*** external "react-simple-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-simple-maps\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaW1wbGUtbWFwc1wiP2EyMTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc2ltcGxlLW1hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaW1wbGUtbWFwc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-simple-maps\n");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recharts\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNoYXJ0c1wiPzg1ZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVjaGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///recharts\n");

/***/ })

/******/ });