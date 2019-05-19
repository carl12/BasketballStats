/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/start.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/test.jsx":
/*!*****************************!*\
  !*** ./client/src/test.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var React = __webpack_require__(/*! react */ \"react\");\n\nvar Comp = function Comp() {\n  return React.createElement(\"div\", null, \"It worked!\");\n};\n\nmodule.exports = Comp;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL3Rlc3QuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy90ZXN0LmpzeD9mZTVhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgQ29tcCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICBJdCB3b3JrZWQhXG4gIDwvZGl2PlxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/test.jsx\n");

/***/ }),

/***/ "./server/start.jsx":
/*!**************************!*\
  !*** ./server/start.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar unirest = __webpack_require__(/*! unirest */ \"unirest\");\n\nvar mongo = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar ReactDom = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar Comp = __webpack_require__(/*! ../client/src/test.jsx */ \"./client/src/test.jsx\");\n\nvar client = mongo.MongoClient;\nvar leagueData;\nclient.connect('mongodb://localhost:27017/', {\n  useNewUrlParser: true\n}, function (err, client) {\n  if (err) {\n    console.log(err);\n    return;\n  }\n\n  console.log('mongo connected');\n  leagueData = client.db('NbaStats').collection('LeagueData');\n});\nvar app = express();\nvar PORT = 3000;\napp.use(express[\"static\"]('client/public'));\napp.use('/api/team/:teamId/:stat', function (req, res) {\n  var _req$params = req.params,\n      teamId = _req$params.teamId,\n      stat = _req$params.stat;\n  console.log(stat);\n  leagueData.find({\n    TEAM: teamId\n  }).toArray(function (err, val) {\n    var sLen = stat.length;\n\n    if (stat[sLen - 1] !== '%') {\n      var relevant = [];\n      val.forEach(function (player) {\n        return relevant.push({\n          name: player.PLAYER,\n          amount: player[stat]\n        });\n      });\n      relevant.sort(function (a, b) {\n        return a.amount < b.amount ? 1 : -1;\n      });\n      res.send(JSON.stringify(relevant));\n    } else {\n      var _relevant = [];\n      var attemptName = \"\".concat(stat.slice(0, sLen - 1), \"A\");\n      var successName = \"\".concat(stat.slice(0, sLen - 1), \"M\");\n      console.log(val);\n      val.forEach(function (player) {\n        return _relevant.push({\n          name: player.PLAYER,\n          attempts: player[attemptName],\n          successes: player[successName]\n        });\n      });\n\n      _relevant.sort(function (a, b) {\n        return a.attempts < b.attempts ? 1 : -1;\n      });\n\n      console.log(_relevant);\n      res.send(JSON.stringify(_relevant));\n    }\n  });\n});\napp.use('/api/team/:teamId/percent/:stat', function (req, res) {\n  leagueData.find({\n    TEAM: req.params.teamId\n  }).toArray(function (err, val) {\n    var relevant = [];\n    val.forEach(function (player) {\n      return relevant.push({\n        name: player.PLAYER,\n        amount: player[req.params.stat]\n      });\n    });\n    relevant.sort(function (a, b) {\n      return a.amount < b.amount ? 1 : -1;\n    });\n    res.send(JSON.stringify(relevant));\n  });\n});\napp.get('/asdf', function (req, res) {\n  var markup = ReactDom.renderToString(React.createElement(Comp, null));\n  var html = \"\\n    <html>\\n      <body>\\n        before\\n        <div id=\\\"app\\\">\".concat(markup, \"</app>\\n        after\\n    </html>\\n  \");\n  res.end(html);\n});\napp.use('/team/:teamId/:stat', express[\"static\"]('client/public'));\napp.listen(PORT, function () {\n  console.log(\"Listening on port \".concat(PORT));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvc3RhcnQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmVyL3N0YXJ0LmpzeD9hZDY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCB1bmlyZXN0ID0gcmVxdWlyZSgndW5pcmVzdCcpO1xuY29uc3QgbW9uZ28gPSByZXF1aXJlKCdtb25nb2RiJyk7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpO1xuY29uc3QgQ29tcCA9IHJlcXVpcmUoJy4uL2NsaWVudC9zcmMvdGVzdC5qc3gnKTtcblxuY29uc3QgY2xpZW50ID0gbW9uZ28uTW9uZ29DbGllbnQ7XG5sZXQgbGVhZ3VlRGF0YTtcbmNsaWVudC5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3LycsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0sIChlcnIsIGNsaWVudCkgPT4ge1xuICBpZiAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc29sZS5sb2coJ21vbmdvIGNvbm5lY3RlZCcpO1xuICBsZWFndWVEYXRhID0gY2xpZW50LmRiKCdOYmFTdGF0cycpLmNvbGxlY3Rpb24oJ0xlYWd1ZURhdGEnKTtcbn0pO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBQT1JUID0gMzAwMDtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnY2xpZW50L3B1YmxpYycpKTtcblxuYXBwLnVzZSgnL2FwaS90ZWFtLzp0ZWFtSWQvOnN0YXQnLCAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyB0ZWFtSWQsIHN0YXQgfSA9IHJlcS5wYXJhbXM7XG4gIFxuICBjb25zb2xlLmxvZyhzdGF0KTtcbiAgbGVhZ3VlRGF0YS5maW5kKHsgVEVBTTogdGVhbUlkIH0pLnRvQXJyYXkoKGVyciwgdmFsKSA9PiB7XG4gICAgY29uc3Qgc0xlbiA9IHN0YXQubGVuZ3RoO1xuICAgIGlmIChzdGF0W3NMZW4gLSAxXSAhPT0gJyUnKSB7XG4gICAgICBjb25zdCByZWxldmFudCA9IFtdO1xuICAgICAgdmFsLmZvckVhY2gocGxheWVyID0+IHJlbGV2YW50LnB1c2goeyBuYW1lOiBwbGF5ZXIuUExBWUVSLCBhbW91bnQ6IHBsYXllcltzdGF0XSB9KSk7XG4gICAgICByZWxldmFudC5zb3J0KChhLCBiKSA9PiAoKGEuYW1vdW50IDwgYi5hbW91bnQpID8gMSA6IC0xKSk7XG4gICAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZWxldmFudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWxldmFudCA9IFtdO1xuICAgICAgY29uc3QgYXR0ZW1wdE5hbWUgPSBgJHtzdGF0LnNsaWNlKDAsIHNMZW4gLSAxKX1BYDtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NOYW1lID0gYCR7c3RhdC5zbGljZSgwLCBzTGVuIC0gMSl9TWA7XG4gICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgdmFsLmZvckVhY2gocGxheWVyID0+IHJlbGV2YW50LnB1c2goe1xuICAgICAgICBuYW1lOiBwbGF5ZXIuUExBWUVSLFxuICAgICAgICBhdHRlbXB0czogcGxheWVyW2F0dGVtcHROYW1lXSxcbiAgICAgICAgc3VjY2Vzc2VzOiBwbGF5ZXJbc3VjY2Vzc05hbWVdLFxuICAgICAgfSkpO1xuICAgICAgcmVsZXZhbnQuc29ydCgoYSwgYikgPT4gKChhLmF0dGVtcHRzIDwgYi5hdHRlbXB0cykgPyAxIDogLTEpKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlbGV2YW50KTtcbiAgICAgIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHJlbGV2YW50KSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hcHAudXNlKCcvYXBpL3RlYW0vOnRlYW1JZC9wZXJjZW50LzpzdGF0JywgKHJlcSwgcmVzKSA9PiB7XG4gIGxlYWd1ZURhdGEuZmluZCh7IFRFQU06IHJlcS5wYXJhbXMudGVhbUlkIH0pLnRvQXJyYXkoKGVyciwgdmFsKSA9PiB7XG4gICAgY29uc3QgcmVsZXZhbnQgPSBbXTtcbiAgICB2YWwuZm9yRWFjaChwbGF5ZXIgPT4gcmVsZXZhbnQucHVzaCh7IG5hbWU6IHBsYXllci5QTEFZRVIsIGFtb3VudDogcGxheWVyW3JlcS5wYXJhbXMuc3RhdF0gfSkpO1xuICAgIHJlbGV2YW50LnNvcnQoKGEsIGIpID0+ICgoYS5hbW91bnQgPCBiLmFtb3VudCkgPyAxIDogLTEpKTtcbiAgICByZXMuc2VuZChKU09OLnN0cmluZ2lmeShyZWxldmFudCkpO1xuICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvYXNkZicsIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBtYXJrdXAgPSBSZWFjdERvbS5yZW5kZXJUb1N0cmluZyg8Q29tcCAvPik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGh0bWw+XG4gICAgICA8Ym9keT5cbiAgICAgICAgYmVmb3JlXG4gICAgICAgIDxkaXYgaWQ9XCJhcHBcIj4ke21hcmt1cH08L2FwcD5cbiAgICAgICAgYWZ0ZXJcbiAgICA8L2h0bWw+XG4gIGA7XG4gIHJlcy5lbmQoaHRtbCk7XG59KTtcblxuYXBwLnVzZSgnL3RlYW0vOnRlYW1JZC86c3RhdCcsIGV4cHJlc3Muc3RhdGljKCdjbGllbnQvcHVibGljJykpO1xuXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/start.jsx\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIj9kZWZmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "unirest":
/*!**************************!*\
  !*** external "unirest" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unirest\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcmVzdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInVuaXJlc3RcIj85MTA1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXJlc3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///unirest\n");

/***/ })

/******/ });