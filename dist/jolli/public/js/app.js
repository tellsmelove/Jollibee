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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jolli/js/app.js":
/*!*****************************!*\
  !*** ./src/jolli/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var overlay = document.getElementById('overlay');
$(document).ready(function () {
  var navbar = $('#navbar');
  var toggle = $('.navbar-items');
  var close = $('.fa-times');
  toggle.on('click', function (e) {
    e.preventDefault();
    navbar.toggleClass('active');
  });
  close.on('click', function (e) {
    e.preventDefault();
    navbar.toggleClass('active');
  });
  var swiper = new Swiper('.swiper-main', {
    spaceBetween: 30,
    effect: 'fade',
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  });
  var person_slider = new Swiper('.swiper-person', {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.pagination-person',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-toi',
      prevEl: '.swiper-button-lui'
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });
  var person_slider = new Swiper('.swiper-newfood', {
    simulateTouch: false,
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 2,
    slidesPerColumn: 2,
    // height: auto,
    loop: true,
    // loopFillGroupWithBlank: true,
    breakpoints: {
      1025: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerColumn: 1,
        simulateTouch: false,
        loop: true
      },
      769: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerColumn: 1,
        simulateTouch: false,
        loop: true
      },
      440: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        simulateTouch: true,
        autoHeight: true,
        loop: true,
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: '.swiper-button-lui',
          prevEl: '.swiper-button-toi'
        }
      }
    }
  });
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
  $('.number-spinner button').on('click', function (e) {
    e.preventDefault();
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    btn.closest('.number-spinner').find('input').val(newVal);
  });
});
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
});

/***/ }),

/***/ "./src/jolli/sass/app.scss":
/*!*********************************!*\
  !*** ./src/jolli/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/jolli/js/app.js ./src/jolli/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kimtrong/learning/Vuta/Jollibee/Jolli/src/jolli/js/app.js */"./src/jolli/js/app.js");
module.exports = __webpack_require__(/*! /home/kimtrong/learning/Vuta/Jollibee/Jolli/src/jolli/sass/app.scss */"./src/jolli/sass/app.scss");


/***/ })

/******/ });