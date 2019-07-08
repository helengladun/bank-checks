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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/enums/limits.ts":
/*!*****************************!*\
  !*** ./app/enums/limits.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Limits;\n    (function (Limits) {\n        Limits[Limits[\"zero\"] = 0] = \"zero\";\n        Limits[Limits[\"one\"] = 1] = \"one\";\n        Limits[Limits[\"ten\"] = 10] = \"ten\";\n        Limits[Limits[\"twenty\"] = 20] = \"twenty\";\n        Limits[Limits[\"hundred\"] = 100] = \"hundred\";\n        Limits[Limits[\"thousand\"] = 1000] = \"thousand\";\n        Limits[Limits[\"million\"] = 1000000] = \"million\";\n    })(Limits = exports.Limits || (exports.Limits = {}));\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/enums/limits.ts?");

/***/ }),

/***/ "./app/helpers/converter.ts":
/*!**********************************!*\
  !*** ./app/helpers/converter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../libraries/numbers-dictionary */ \"./app/libraries/numbers-dictionary.ts\"), __webpack_require__(/*! ./get-texted-number */ \"./app/helpers/get-texted-number.ts\"), __webpack_require__(/*! ../enums/limits */ \"./app/enums/limits.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, numbers_dictionary_1, get_texted_number_1, limits_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    exports.converter = (num) => {\n        if (num >= limits_1.Limits.zero && num <= limits_1.Limits.twenty) {\n            return numbers_dictionary_1.numbersDictionary[num];\n        }\n        if (num > limits_1.Limits.twenty && num < limits_1.Limits.hundred) {\n            return get_texted_number_1.getTextedNumber(num, limits_1.Limits.ten);\n        }\n        if (num >= limits_1.Limits.hundred && num < limits_1.Limits.thousand) {\n            return get_texted_number_1.getTextedNumber(num, limits_1.Limits.hundred);\n        }\n        if (num >= limits_1.Limits.thousand && num <= limits_1.Limits.million) {\n            return get_texted_number_1.getTextedNumber(num, limits_1.Limits.thousand);\n        }\n        return '';\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/helpers/converter.ts?");

/***/ }),

/***/ "./app/helpers/division.ts":
/*!*********************************!*\
  !*** ./app/helpers/division.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    exports.getMainPart = (num, divider) => Math.floor(num / divider);\n    exports.getRemainder = (num, divider) => num % divider;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/helpers/division.ts?");

/***/ }),

/***/ "./app/helpers/get-message.ts":
/*!************************************!*\
  !*** ./app/helpers/get-message.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../libraries/numbers-dictionary */ \"./app/libraries/numbers-dictionary.ts\"), __webpack_require__(/*! ./converter */ \"./app/helpers/converter.ts\"), __webpack_require__(/*! ../enums/limits */ \"./app/enums/limits.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, numbers_dictionary_1, converter_1, limits_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    exports.getMessage = (params) => {\n        let additionalText = '';\n        let preText = '';\n        let restText = '';\n        if (params.main > limits_1.Limits.twenty) {\n            preText = converter_1.converter(params.main);\n        }\n        if (params.divider === limits_1.Limits.ten) {\n            params.main *= 10;\n        }\n        if (params.divider && params.divider >= limits_1.Limits.hundred) {\n            additionalText = numbers_dictionary_1.numbersDictionary[params.divider];\n        }\n        if (params.remainder) {\n            restText = converter_1.converter(params.remainder);\n        }\n        return [preText, numbers_dictionary_1.numbersDictionary[params.main], additionalText, restText].filter(Boolean).join(' ');\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/helpers/get-message.ts?");

/***/ }),

/***/ "./app/helpers/get-texted-number.ts":
/*!******************************************!*\
  !*** ./app/helpers/get-texted-number.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./division */ \"./app/helpers/division.ts\"), __webpack_require__(/*! ./get-message */ \"./app/helpers/get-message.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, division_1, get_message_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    exports.getTextedNumber = (num, divider) => {\n        const mainNum = division_1.getMainPart(num, divider);\n        const restNum = division_1.getRemainder(num, divider);\n        const text = get_message_1.getMessage({ main: mainNum, remainder: restNum, divider: divider });\n        return text;\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/helpers/get-texted-number.ts?");

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./helpers/converter */ \"./app/helpers/converter.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, converter_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    console.log(converter_1.converter(23459));\n    window.converter = converter_1.converter;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/index.ts?");

/***/ }),

/***/ "./app/libraries/numbers-dictionary.ts":
/*!*********************************************!*\
  !*** ./app/libraries/numbers-dictionary.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    exports.numbersDictionary = {\n        0: 'zero',\n        1: 'one',\n        2: 'two',\n        3: 'three',\n        4: 'four',\n        5: 'five',\n        6: 'six',\n        7: 'seven',\n        8: 'eight',\n        9: 'nine',\n        10: 'ten',\n        11: 'eleven',\n        12: 'twelve',\n        13: 'thirteen',\n        14: 'fourtheen',\n        15: 'fifteen',\n        16: 'sixteen',\n        17: 'seventeen',\n        18: 'eighteen',\n        19: 'nineteen',\n        20: 'twenty',\n        30: 'thirty',\n        40: 'fourty',\n        50: 'fifty',\n        60: 'sixty',\n        70: 'seventy',\n        80: 'eighty',\n        90: 'ninety',\n        100: 'hundred',\n        1000: 'thousand',\n    };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/libraries/numbers-dictionary.ts?");

/***/ })

/******/ });