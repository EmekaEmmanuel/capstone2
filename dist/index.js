"use strict";
(self["webpackChunkcapstone2"] = self["webpackChunkcapstone2"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/commentStyle.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/commentStyle.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.comment {\r\n  display: none;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 90%;\r\n  border: 2px solid black;\r\n  margin-left: 5%;\r\n  padding: 20px;\r\n  padding-left: 200px;\r\n  padding-right: 60px;\r\n  background-color: white;\r\n  max-height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentimageholder {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n}\r\n\r\n.commentimage {\r\n  display: flex;\r\n  margin-right: 5%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.commentimage > img {\r\n  width: 100%;\r\n  height: 37.5rem;\r\n  margin-bottom: 0;\r\n  padding-right: 6.25rem;\r\n}\r\n\r\n.commentimageholder > button {\r\n  align-self: flex-start;\r\n  font-size: 2.5rem;\r\n  font-weight: bolder;\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  margin-top: -0.5%;\r\n}\r\n\r\n.commentnameholder > h2 {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.commentnameholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.commentnamedetail {\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  list-style: none;\r\n  column-gap: -5px;\r\n  text-align: left;\r\n}\r\n\r\n.commentholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.commentholder > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.commentlist {\r\n  list-style: none;\r\n  padding-right: 20px;\r\n}\r\n\r\n.addcomment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.addcomment > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.addcomment > input {\r\n  width: 50%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n}\r\n\r\n.addcomment > textarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n}\r\n\r\n.addcomment > input::placeholder {\r\n  font-weight: 400;\r\n  padding-left: 5px;\r\n}\r\n\r\n.addcomment > textarea::placeholder {\r\n  font-weight: 400;\r\n  padding-left: 5px;\r\n}\r\n\r\n.addcomment > button {\r\n  width: 45%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* used only to check which button where fired */\r\n.buttoncontainer {\r\n  margin-top: 300px;\r\n  margin-left: 400px;\r\n  margin-right: 400px;\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/commentStyle.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA,gDAAgD;AAChD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;AAChC","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.comment {\r\n  display: none;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 90%;\r\n  border: 2px solid black;\r\n  margin-left: 5%;\r\n  padding: 20px;\r\n  padding-left: 200px;\r\n  padding-right: 60px;\r\n  background-color: white;\r\n  max-height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentimageholder {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n}\r\n\r\n.commentimage {\r\n  display: flex;\r\n  margin-right: 5%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.commentimage > img {\r\n  width: 100%;\r\n  height: 37.5rem;\r\n  margin-bottom: 0;\r\n  padding-right: 6.25rem;\r\n}\r\n\r\n.commentimageholder > button {\r\n  align-self: flex-start;\r\n  font-size: 2.5rem;\r\n  font-weight: bolder;\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  margin-top: -0.5%;\r\n}\r\n\r\n.commentnameholder > h2 {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.commentnameholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.commentnamedetail {\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  list-style: none;\r\n  column-gap: -5px;\r\n  text-align: left;\r\n}\r\n\r\n.commentholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.commentholder > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.commentlist {\r\n  list-style: none;\r\n  padding-right: 20px;\r\n}\r\n\r\n.addcomment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.addcomment > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.addcomment > input {\r\n  width: 50%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n}\r\n\r\n.addcomment > textarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n}\r\n\r\n.addcomment > input::placeholder {\r\n  font-weight: 400;\r\n  padding-left: 5px;\r\n}\r\n\r\n.addcomment > textarea::placeholder {\r\n  font-weight: 400;\r\n  padding-left: 5px;\r\n}\r\n\r\n.addcomment > button {\r\n  width: 45%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* used only to check which button where fired */\r\n.buttoncontainer {\r\n  margin-top: 300px;\r\n  margin-left: 400px;\r\n  margin-right: 400px;\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.home_header {\r\n  width: 80%;\r\n  margin: auto;\r\n  display: flex;\r\n  padding: 30px 0 60px 0;\r\n  gap: 20px;\r\n}\r\n\r\n.home_header nav {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.nav_item:hover {\r\n  padding: 2px 0;\r\n  border-bottom: 1px solid rgb(78, 76, 76);\r\n}\r\n\r\n.logo {\r\n  padding: 18px 25px;\r\n  border-radius: 50px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.logo h1 {\r\n  text-align: center;\r\n}\r\n\r\n.font1 {\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n\r\n.font2 {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n\r\n.font3 {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n\r\n.font4 {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: black;\r\n}\r\n\r\n.font5 {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: black;\r\n}\r\n\r\n.grid_container {\r\n  width: 80%;\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 80px;\r\n}\r\n\r\n.home_article figure {\r\n  width: 100%;\r\n}\r\n\r\n.imgz {\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n}\r\n\r\n.home_title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px 0;\r\n}\r\n\r\n.home_buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.home_buttons .comment_btn {\r\n  width: 90%;\r\n  margin: auto;\r\n  padding: 15px 0;\r\n  box-shadow: 5px 5px #888;\r\n}\r\n\r\n.home_buttons .reserve_btn {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 15px 0;\r\n  box-shadow: 5px 5px #888;\r\n}\r\n\r\n.home_footer {\r\n  width: 90%;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  border-top: 1px solid black;\r\n  padding: 40px 0;\r\n}\r\n\r\n.home_active {\r\n  visibility: visible;\r\n}\r\n\r\n.home_hidden {\r\n  display: none;\r\n}\r\n\r\n.githubicon {\r\n  width: 1.2rem;\r\n  color: white;\r\n  margin: -12px 3px -6px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  .home_header {\r\n    width: 90%;\r\n    margin: auto;\r\n    display: flex;\r\n    padding: 30px 0 60px 0;\r\n    gap: 20px;\r\n  }\r\n\r\n  .home_header nav {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 40px;\r\n    align-items: center;\r\n  }\r\n\r\n  .grid_container {\r\n    width: 90%;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 80px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE;IACE,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,SAAS;IACT,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,SAAS;EACX;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.home_header {\r\n  width: 80%;\r\n  margin: auto;\r\n  display: flex;\r\n  padding: 30px 0 60px 0;\r\n  gap: 20px;\r\n}\r\n\r\n.home_header nav {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.nav_item:hover {\r\n  padding: 2px 0;\r\n  border-bottom: 1px solid rgb(78, 76, 76);\r\n}\r\n\r\n.logo {\r\n  padding: 18px 25px;\r\n  border-radius: 50px;\r\n  border: 1px solid black;\r\n}\r\n\r\n.logo h1 {\r\n  text-align: center;\r\n}\r\n\r\n.font1 {\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n\r\n.font2 {\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n\r\n.font3 {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: black;\r\n}\r\n\r\n.font4 {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: black;\r\n}\r\n\r\n.font5 {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: black;\r\n}\r\n\r\n.grid_container {\r\n  width: 80%;\r\n  margin: auto;\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 80px;\r\n}\r\n\r\n.home_article figure {\r\n  width: 100%;\r\n}\r\n\r\n.imgz {\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n}\r\n\r\n.home_title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px 0;\r\n}\r\n\r\n.home_buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.home_buttons .comment_btn {\r\n  width: 90%;\r\n  margin: auto;\r\n  padding: 15px 0;\r\n  box-shadow: 5px 5px #888;\r\n}\r\n\r\n.home_buttons .reserve_btn {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 15px 0;\r\n  box-shadow: 5px 5px #888;\r\n}\r\n\r\n.home_footer {\r\n  width: 90%;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  border-top: 1px solid black;\r\n  padding: 40px 0;\r\n}\r\n\r\n.home_active {\r\n  visibility: visible;\r\n}\r\n\r\n.home_hidden {\r\n  display: none;\r\n}\r\n\r\n.githubicon {\r\n  width: 1.2rem;\r\n  color: white;\r\n  margin: -12px 3px -6px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n  .home_header {\r\n    width: 90%;\r\n    margin: auto;\r\n    display: flex;\r\n    padding: 30px 0 60px 0;\r\n    gap: 20px;\r\n  }\r\n\r\n  .home_header nav {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 40px;\r\n    align-items: center;\r\n  }\r\n\r\n  .grid_container {\r\n    width: 90%;\r\n    margin: auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 80px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reservationStyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reservationStyle.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.reservation {\r\n  display: none;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 90%;\r\n  border: 2px solid black;\r\n  margin-left: 5%;\r\n  padding: 20px;\r\n  padding-left: 200px;\r\n  padding-right: 60px;\r\n  background-color: white;\r\n  max-height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reserveimageholder {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n}\r\n\r\n.reserveimage {\r\n  display: flex;\r\n  margin-right: 5%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.reserveimage > img {\r\n  width: 100%;\r\n  height: 37.5rem;\r\n  margin-bottom: 0;\r\n  padding-right: 6.25rem;\r\n}\r\n\r\n.reserveimageholder > button {\r\n  align-self: flex-start;\r\n  font-size: 2.5rem;\r\n  font-weight: bolder;\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  margin-top: -0.5%;\r\n}\r\n\r\n.reservenameholder > h2 {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.reservenameholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.reservenamedetail {\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  list-style: none;\r\n  column-gap: -5px;\r\n  text-align: left;\r\n}\r\n\r\n.reservedateholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.reservedateholder > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.reservedate {\r\n  list-style: none;\r\n  padding-right: 20px;\r\n}\r\n\r\n.addreservation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.addreservation > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.addreservation > input {\r\n  width: 50%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n}\r\n\r\n.addreservation > input::placeholder {\r\n  font-weight: 400;\r\n  padding-left: 5px;\r\n}\r\n\r\n.addreservation > button {\r\n  width: 45%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* used only to check which button where fired */\r\n.buttoncontainer {\r\n  margin-top: 300px;\r\n  margin-left: 400px;\r\n  margin-right: 400px;\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/reservationStyle.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,UAAU;EACV,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,wBAAwB;EACxB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA,gDAAgD;AAChD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;AAChC","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.reservation {\r\n  display: none;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  width: 90%;\r\n  border: 2px solid black;\r\n  margin-left: 5%;\r\n  padding: 20px;\r\n  padding-left: 200px;\r\n  padding-right: 60px;\r\n  background-color: white;\r\n  max-height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reserveimageholder {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n}\r\n\r\n.reserveimage {\r\n  display: flex;\r\n  margin-right: 5%;\r\n  flex-grow: 1;\r\n}\r\n\r\n.reserveimage > img {\r\n  width: 100%;\r\n  height: 37.5rem;\r\n  margin-bottom: 0;\r\n  padding-right: 6.25rem;\r\n}\r\n\r\n.reserveimageholder > button {\r\n  align-self: flex-start;\r\n  font-size: 2.5rem;\r\n  font-weight: bolder;\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n  margin-top: -0.5%;\r\n}\r\n\r\n.reservenameholder > h2 {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.reservenameholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.reservenamedetail {\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  list-style: none;\r\n  column-gap: -5px;\r\n  text-align: left;\r\n}\r\n\r\n.reservedateholder {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.reservedateholder > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.reservedate {\r\n  list-style: none;\r\n  padding-right: 20px;\r\n}\r\n\r\n.addreservation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.addreservation > h2 {\r\n  font-size: 25px;\r\n  margin-bottom: 0.625rem;\r\n  align-self: center;\r\n}\r\n\r\n.addreservation > input {\r\n  width: 50%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n}\r\n\r\n.addreservation > input::placeholder {\r\n  font-weight: 400;\r\n  padding-left: 5px;\r\n}\r\n\r\n.addreservation > button {\r\n  width: 45%;\r\n  margin-bottom: 0.9375rem;\r\n  border: 2px solid black;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* used only to check which button where fired */\r\n.buttoncontainer {\r\n  margin-top: 300px;\r\n  margin-left: 400px;\r\n  margin-right: 400px;\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/commentStyle.css":
/*!**********************************!*\
  !*** ./src/css/commentStyle.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_commentStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./commentStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/commentStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_commentStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_commentStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_commentStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_commentStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reservationStyle.css":
/*!**************************************!*\
  !*** ./src/css/reservationStyle.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reservationStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reservationStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reservationStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reservationStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reservationStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reservationStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reservationStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/getAllLikes.js":
/*!********************************!*\
  !*** ./src/api/getAllLikes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");


const getAllLikes = async () => {
  try {
    const result = await (await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPI}${_config_js__WEBPACK_IMPORTED_MODULE_0__.apiID}/likes`));
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`);
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllLikes);

/***/ }),

/***/ "./src/api/getAllShows.js":
/*!********************************!*\
  !*** ./src/api/getAllShows.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */

const getAllShows = async (baseURL) => {

  try {
    const result = await fetch(baseURL);
    let dataArr = []
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`);
    const data = await result.json();
    const datalength = data.length;
    const realityGenre = data.filter((show) => show.type === 'Reality');
    const realityLength = realityGenre.length;
    const animationGenre = data.filter((show) => show.type === 'Animation');
    const animationLength = animationGenre.length;
    dataArr = [{ title: 'Shows', data, total: datalength }, { title: 'Reality', realityGenre, total: realityLength }, { title: 'Animation', animationGenre, total: animationLength }];
    return dataArr 
  } catch (error) {
    throw new Error();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllShows); 

/***/ }),

/***/ "./src/api/postAllLikes.js":
/*!*********************************!*\
  !*** ./src/api/postAllLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/config.js");


const postAllLikes = async (par) => {
  try {
    const result = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPI + _config_js__WEBPACK_IMPORTED_MODULE_0__.apiID}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(par),
    });
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAllLikes);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiID": () => (/* binding */ apiID),
/* harmony export */   "getAllShowsURL": () => (/* binding */ getAllShowsURL),
/* harmony export */   "involvementAPI": () => (/* binding */ involvementAPI),
/* harmony export */   "involvementID": () => (/* binding */ involvementID)
/* harmony export */ });
const getAllShowsURL = 'https://api.tvmaze.com/shows';
const apiID = 'AcRwaRusgUzAKbbuJBUq';
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const involvementID = 'eOrcCP3sdE79tBRIZ6tU';



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/home.css */ "./src/css/home.css");
/* harmony import */ var _css_reservationStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reservationStyle.css */ "./src/css/reservationStyle.css");
/* harmony import */ var _css_commentStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/commentStyle.css */ "./src/css/commentStyle.css");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var _api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/getAllShows.js */ "./src/api/getAllShows.js");
/* harmony import */ var _pageUI_displayHomeUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageUI/displayHomeUI.js */ "./src/pageUI/displayHomeUI.js");
/* harmony import */ var _images_love_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/love.png */ "./src/images/love.png");
/* harmony import */ var _api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/getAllLikes.js */ "./src/api/getAllLikes.js");
/* harmony import */ var _api_postAllLikes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/postAllLikes.js */ "./src/api/postAllLikes.js");
/* harmony import */ var _pageUI_reservationUI_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pageUI/reservationUI.js */ "./src/pageUI/reservationUI.js");
/* harmony import */ var _modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/reservation/reservationCounter.js */ "./src/modules/reservation/reservationCounter.js");
/* harmony import */ var _modules_reservation_reservationPostAPI_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/reservation/reservationPostAPI.js */ "./src/modules/reservation/reservationPostAPI.js");
/* harmony import */ var _modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/reservation/reservationDisplay.js */ "./src/modules/reservation/reservationDisplay.js");
/* harmony import */ var _pageUI_commentUI_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pageUI/commentUI.js */ "./src/pageUI/commentUI.js");
/* harmony import */ var _modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/comment/commentCounter.js */ "./src/modules/comment/commentCounter.js");
/* harmony import */ var _modules_comment_commentPostAPI_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/comment/commentPostAPI.js */ "./src/modules/comment/commentPostAPI.js");
/* harmony import */ var _modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/comment/commentDisplay.js */ "./src/modules/comment/commentDisplay.js");


















const bodyTag = document.querySelector('.home_body');

const HomeUI = () => {
  bodyTag.innerHTML = '';
  bodyTag.innerHTML = (0,_pageUI_reservationUI_js__WEBPACK_IMPORTED_MODULE_9__["default"])() + (0,_pageUI_commentUI_js__WEBPACK_IMPORTED_MODULE_13__["default"])() + (0,_pageUI_displayHomeUI_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

HomeUI();

const navTag = document.querySelector('.nav_list');
const homeSection1Tag = document.querySelector('.home_section1');
const homeSection2Tag = document.querySelector('.home_section2');
const homeSection3Tag = document.querySelector('.home_section3');

const activateClickedSpan = (par) => {
  par.classList.add('home_active');
  par.classList.remove('home_hidden');
};

const activateClickedSection = (par) => {
  par.classList.add('home_active');
  par.classList.remove('home_hidden');
};

const spanActiveRemove = () => {
  const spanTags = document.querySelectorAll('.home_span');
  spanTags.forEach((span) => {
    span.classList.remove('home_active');
    span.classList.add('home_hidden');
  });
};

const sectionActiveRemove = () => {
  const sectionTags = document.querySelectorAll('.grid_container');
  sectionTags.forEach((section) => {
    section.classList.remove('home_active');
    section.classList.add('home_hidden');
  });
};

const dynamicNav = async () => {
  const data = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL));
  let navtemp = '';
  for (let i = 0; i < data.length; i += 1) {
    navtemp
      += `
<li class="font2 nav_item tab_active" data-tab=${i + 1}>
${`${data[i].title} `}<span class="home_span ${i === 0 ? 'home_active' : ''} span${i + 1} span_active">(${data[i].total})</span>
</li>`;
  }
  navTag.innerHTML = navtemp;
};

const homeCard1 = async () => {
  const { data } = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[0];
  const likeData = await (0,_api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (parseFloat(y.item_id) === x.id) {
        x.like = y.likes;
      }
    });
  });
  let articletemp = '';
  for (let i = 0; i < data.length; i += 1) {
    articletemp
      += `<article class="home_article" key=${data[i].id}> 
<figure>
 <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure>

<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div>

  <div>
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${_images_love_png__WEBPACK_IMPORTED_MODULE_6__} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? 'like' : 'likes'} </p>
</div>
</div>

<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;
  }
  homeSection1Tag.innerHTML = articletemp;
};

const homeCard2 = async () => {
  const data = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[1].realityGenre;
  const likeData = await (0,_api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (parseFloat(y.item_id) === x.id) {
        x.like = y.likes;
      }
    });
  });
  let articletemp = '';
  for (let i = 0; i < data.length; i += 1) {
    articletemp
      += `<article class="home_article" key=${data[i].id}> 
<figure>
   <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure>

<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div>

  <div>
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${_images_love_png__WEBPACK_IMPORTED_MODULE_6__} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? 'like' : 'likes'} </p>
</div>
</div>

<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;
  }
  homeSection2Tag.innerHTML = articletemp;
};

const homeCard3 = async () => {
  const data = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[2].animationGenre;
  const likeData = await (0,_api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  data.forEach((x) => {
    likeData.forEach((y) => {
      if (parseFloat(y.item_id) === x.id) {
        x.like = y.likes;
      }
    });
  });
  let articletemp = '';
  for (let i = 0; i < data.length; i += 1) {
    articletemp
      += `<article class="home_article" key=${data[i].id}> 
<figure>
  <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
</figure> 
<div class="home_title">
  <div>
    <h3>${data[i].name}</h3>
  </div> 
  <div>
  <img data-tab=${data[i].id} id=${data[i].id} class="like_btn" src=${_images_love_png__WEBPACK_IMPORTED_MODULE_6__} alt="">
  <p class="font4"><span class="count count${data[i].id}" data-tab=${data[i].id}>${data[i].like ? data[i].like : 0}</span> ${data[i].like <= 1 ? 'like' : 'likes'} </p>
</div>
</div> 
<div class="home_buttons">
  <button id=${data[i].id} class="comment_btn font3">Comments</button>
  <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
</div>
</article>`;
  }
  homeSection3Tag.innerHTML = articletemp;
};

const rerenderCards = async () => {
  await homeCard1();
  await homeCard2();
  await homeCard3();
};

const Tabselector = async () => {
  navTag.addEventListener('click', async (e) => {
    const clicked = e.target.closest('.nav_item');
    const clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`);
    const clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`);
    spanActiveRemove();
    activateClickedSpan(clickedSpan);
    sectionActiveRemove();
    activateClickedSection(clickedSection);
  });
};

window.addEventListener('load', async () => {
  await dynamicNav();
  await rerenderCards();
  await (0,_api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  await Tabselector();
});
// close button for reservation window

// added for reservation modal
const reservationModal = async (reservebtnid, selectedObject) => {
  const reservationCount = document.getElementById('reservationcount');
  const reservation = document.getElementById('reservation');
  const userName = document.getElementById('username');
  const startDate = document.getElementById('startdate');
  const endDate = document.getElementById('enddate');
  const reserveButton = document.getElementById('reservebutton');
  const reservePicture = document.getElementById('reservepicture');
  const reserveName = document.getElementById('reservename');
  const reserveLanguage = document.getElementById('reservelanguage');
  const reserveStatus = document.getElementById('reservestatus');
  const reserveAverageRuntime = document.getElementById('reserveaverageRuntime');
  const reservetype = document.getElementById('reservetype');
  reservation.style.display = 'block';

  // display reservation
  // reservation event handling
  // update  information

  reservePicture.src = selectedObject.image.original;
  reserveName.innerHTML = selectedObject.name;
  reserveLanguage.innerHTML = `Language: ${selectedObject.language}`;
  reserveAverageRuntime.innerHTML = `AverageRuntime: ${selectedObject.averageRuntime}`;
  reserveStatus.innerHTML = `Status: ${selectedObject.status}`;
  reservetype.innerHTML = `Type: ${selectedObject.type}`;

  reserveButton.addEventListener('click', async (e) => {
    if (userName.value.trim() !== '' && startDate.value.trim() !== '' && endDate.value.trim() !== '') {
      await (0,_modules_reservation_reservationPostAPI_js__WEBPACK_IMPORTED_MODULE_11__["default"])({
        item_id: +reservebtnid,
        username: userName.value.trim(),
        date_start: startDate.value.trim(),
        date_end: endDate.value.trim(),
      });
      userName.value = '';
      startDate.value = '';
      endDate.value = '';
      await (0,_modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(reservebtnid);
      await (0,_modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__["default"])(reservebtnid, reservationCount);
    } else {
      e.preventDefault();
    }
  }, { once: false });
};
const closeReservationWindow = () => {
  const reservationClose = document.getElementById('reservationclose');
  const reservation = document.getElementById('reservation');
  reservationClose.addEventListener('click', () => {
    window.location.reload();
    reservation.style.display = 'none';
  });
};
navTag.addEventListener('click', async (e) => {
  const clicked = e.target.closest('.nav_item');
  const clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`);
  const clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`);
  spanActiveRemove();
  activateClickedSpan(clickedSpan);
  sectionActiveRemove();
  activateClickedSection(clickedSection);
});

const postLike = async (countObj) => {
  await (0,_api_postAllLikes_js__WEBPACK_IMPORTED_MODULE_8__["default"])(countObj);
};

const displayCardCount = async (countUI, id) => {
  const likeArray = await (0,_api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  likeArray.filter((item) => {
    if (item.item_id === id) {
      const { likes } = item;
      countUI.innerHTML = likes;
    }
    return countUI;
  });
};

const commentModal = async (commentbtnid, selectedcommentObject) => {
  const commentCount = document.getElementById('commentcount');
  const comment = document.getElementById('comment');
  const userNamecomment = document.getElementById('usernamecomment');
  const userComment = document.getElementById('usercomment');
  const commentButton = document.getElementById('commentbutton');
  const commentPicture = document.getElementById('commentpicture');
  const commentName = document.getElementById('commentname');
  const commentLanguage = document.getElementById('commentlanguage');
  const commentStatus = document.getElementById('commentstatus');
  const commentAverageRuntime = document.getElementById('commentaverageRuntime');
  const commenttype = document.getElementById('commenttype');
  comment.style.display = 'block';

  // reservation event handling
  // update  information

  commentPicture.src = selectedcommentObject.image.original;
  commentName.innerHTML = selectedcommentObject.name;
  commentLanguage.innerHTML = `Language: ${selectedcommentObject.language}`;
  commentAverageRuntime.innerHTML = `AverageRuntime: ${selectedcommentObject.averageRuntime}`;
  commentStatus.innerHTML = `Status: ${selectedcommentObject.status}`;
  commenttype.innerHTML = `Type: ${selectedcommentObject.type}`;
  commentButton.addEventListener('click', async () => {
    if (userNamecomment.value.trim() !== '' && userComment.value.trim() !== '') {
      await (0,_modules_comment_commentPostAPI_js__WEBPACK_IMPORTED_MODULE_15__["default"])({
        item_id: +commentbtnid,
        username: userNamecomment.value.trim(),
        comment: userComment.value.trim(),

      });
      userNamecomment.value = '';
      userComment.value = '';

      await (0,_modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__["default"])(commentbtnid);
      await (0,_modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__["default"])(commentbtnid, commentCount);
    } else {
      commentbtnid.preventDefault();
    }
  }, { once: false });
};

const closeCommentWindow = () => {
  const commentClose = document.getElementById('commentclose');
  const comment = document.getElementById('comment');
  commentClose.addEventListener('click', () => {
    window.location.reload();
    comment.style.display = 'none';
  });
};

bodyTag.addEventListener('click', async (e) => {
  const checkLikeBtn = e.target.classList.contains('like_btn');

  const isReserveContain = e.target.classList.contains('reserve_btn');
  const reservebtnid = e.target.id;
  const show = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[0];
  const reality = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[1];
  const animation = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[2];
  const isCard1Active = homeSection1Tag.classList.contains('home_active');
  const isCard2Active = homeSection2Tag.classList.contains('home_active');
  const isCard3Active = homeSection3Tag.classList.contains('home_active');

  const isCommentContain = e.target.classList.contains('comment_btn');
  const commentbtnid = e.target.id;
  const isCardActive1 = homeSection1Tag.classList.contains('home_active');
  const isCardActive2 = homeSection2Tag.classList.contains('home_active');
  const isCardActive3 = homeSection3Tag.classList.contains('home_active');

  if (checkLikeBtn) {
    const clickedLike = e.target;
    const id = clickedLike.dataset.tab;
    const countUI = document.querySelector(`.count${id}`);
    const countObj = { item_id: id };
    await postLike(countObj);
    await (0,_api_getAllLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    await displayCardCount(countUI, id);
    await rerenderCards();
  }

  if (isReserveContain) {
    const reservationCount = document.getElementById('reservationcount');
    if (isCard1Active) {
      const reservation = show.data.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, reservation);
      await (0,_modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(reservebtnid);
      await (0,_modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__["default"])(reservebtnid, reservationCount);
      return false;
    }
    if (isCard2Active) {
      const reservation = reality.realityGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, reservation);
      await (0,_modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(reservebtnid);
      await (0,_modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__["default"])(reservebtnid, reservationCount);
      return false;
    }
    if (isCard3Active) {
      const reservation = animation.animationGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, reservation);
      await (0,_modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(reservebtnid);
      await (0,_modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__["default"])(reservebtnid, reservationCount);
      return false;
    }
  }

  if (isCommentContain) {
    const commentCount = document.getElementById('commentcount');
    if (isCardActive1) {
      const comment = show.data.find((item) => item.id === Number(commentbtnid));
      await commentModal(commentbtnid, comment);
      await (0,_modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__["default"])(commentbtnid);
      await (0,_modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__["default"])(commentbtnid, commentCount);
      return false;
    }

    if (isCardActive2) {
      const comment = reality.realityGenre.find((item) => item.id === Number(commentbtnid));
      await commentModal(commentbtnid, comment);
      await (0,_modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__["default"])(commentbtnid);
      await (0,_modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__["default"])(commentbtnid, commentCount);
      return false;
    }
    if (isCardActive3) {
      const comment = animation.animationGenre.find((item) => item.id === Number(commentbtnid));
      await commentModal(commentbtnid, comment);
      await (0,_modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__["default"])(commentbtnid);
      await (0,_modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__["default"])(commentbtnid, commentCount);
      return false;
    }
  }
  return false;
});
closeCommentWindow();
closeReservationWindow();

/***/ }),

/***/ "./src/modules/comment/commentCounter.js":
/*!***********************************************!*\
  !*** ./src/modules/comment/commentCounter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentGetAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentGetAPI.js */ "./src/modules/comment/commentGetAPI.js");


const commentCounter = async (id, commentCount) => {
  const data = await (0,_commentGetAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  // count comment
  commentCount.innerHTML = '';
  if (data.length === undefined) {
    commentCount.innerHTML += 'Comments';
  } else {
    commentCount.innerHTML += `Comments(${data.length})`;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/comment/commentDisplay.js":
/*!***********************************************!*\
  !*** ./src/modules/comment/commentDisplay.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentGetAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentGetAPI.js */ "./src/modules/comment/commentGetAPI.js");


const displayComment = async (id) => {
  const res = await (0,_commentGetAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  const commentlist = document.querySelector('.commentlist');
  commentlist.innerHTML = '';
  if (res.length !== undefined) {
    res.forEach((comment) => {
      commentlist.innerHTML += `<li>
     ${comment.creation_date} - ${comment.username} - ${comment.comment}
   </li>`;
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);

/***/ }),

/***/ "./src/modules/comment/commentGetAPI.js":
/*!**********************************************!*\
  !*** ./src/modules/comment/commentGetAPI.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


const getComment = async (id) => {
  try {
    const res = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPI + _config_js__WEBPACK_IMPORTED_MODULE_0__.involvementID}/comments?item_id=${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return false;
  } catch (error) {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComment);

/***/ }),

/***/ "./src/modules/comment/commentPostAPI.js":
/*!***********************************************!*\
  !*** ./src/modules/comment/commentPostAPI.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


const sendComment = async (userComment) => {
  try {
    const res = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPI + _config_js__WEBPACK_IMPORTED_MODULE_0__.involvementID}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(userComment),
    });

    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComment);

/***/ }),

/***/ "./src/modules/reservation/reservationCounter.js":
/*!*******************************************************!*\
  !*** ./src/modules/reservation/reservationCounter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reservationGetAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationGetAPI.js */ "./src/modules/reservation/reservationGetAPI.js");


const reservationCounter = async (id, reservationCount) => {
  const data = await (0,_reservationGetAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  // count reservation
  reservationCount.innerHTML = '';
  if (data.length === undefined) {
    reservationCount.innerHTML += 'Reservations';
  } else {
    reservationCount.innerHTML += `Reservations(${data.length})`;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCounter);

/***/ }),

/***/ "./src/modules/reservation/reservationDisplay.js":
/*!*******************************************************!*\
  !*** ./src/modules/reservation/reservationDisplay.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reservationGetAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationGetAPI.js */ "./src/modules/reservation/reservationGetAPI.js");


const displayReservation = async (id) => {
  const res = await (0,_reservationGetAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  const reservedate = document.querySelector('.reservedate');
  reservedate.innerHTML = '';
  if (res.length !== undefined) {
    res.forEach((reserve) => {
      reservedate.innerHTML += `<li>
     ${reserve.date_start} - ${reserve.date_end} - ${reserve.username}
   </li>`;
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayReservation);

/***/ }),

/***/ "./src/modules/reservation/reservationGetAPI.js":
/*!******************************************************!*\
  !*** ./src/modules/reservation/reservationGetAPI.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


const getReservation = async (id) => {
  try {
    const res = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPI + _config_js__WEBPACK_IMPORTED_MODULE_0__.involvementID}/reservations?item_id=${id}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return false;
  } catch (error) {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getReservation);

/***/ }),

/***/ "./src/modules/reservation/reservationPostAPI.js":
/*!*******************************************************!*\
  !*** ./src/modules/reservation/reservationPostAPI.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");


const sendReservation = async (userReservation) => {
  try {
    const res = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPI + _config_js__WEBPACK_IMPORTED_MODULE_0__.involvementID}/reservations/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(userReservation),
    });

    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendReservation);

/***/ }),

/***/ "./src/pageUI/commentUI.js":
/*!*********************************!*\
  !*** ./src/pageUI/commentUI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentUI = () => ` <section class="comment" id="comment">
<section class="commentimageholder">
  <div class="commentimage">
    <img
      id="commentpicture"
      alt="moviename"
    />
  </div>
  <button id="commentclose">X</button>
</section>
<section class="commentnameholder">
  <h2 id="commentname"></h2>
  <ul class="commentnamedetail">
    <li id="commenttype"> </li>
    <li id="commentlanguage"> </li>
    <li id="commentstatus"> </li>
    <li id='commentaverageRuntime'> </li>
  </ul>
</section>
<section class="commentholder">
  <h2 id="commentcount"></h2>
  <ul class="commentlist"></ul>
</section>
<section class="addcomment">
  <h2>Add a comment</h2>
  <input id="usernamecomment" type="text" placeholder="Your Name" />

  <textarea id="usercomment" required  placeholder=" Kindly add a comment..." ></textarea>
  <button class="commentbutton" id="commentbutton">Comment</button>
</section>
</section>`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentUI);

/***/ }),

/***/ "./src/pageUI/displayHomeUI.js":
/*!*************************************!*\
  !*** ./src/pageUI/displayHomeUI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/github.svg */ "./src/images/github.svg");


const displayHomeUI = () => `
<header class="home_header">

<div class="logo">
  <h1 class="font1">Cap <br> Flix </h1>
</div>

<nav class="nav_list">
 
</nav>

</header>

<section class="home_section1 grid_container home_active"></section>
<section class="home_section2 grid_container home_hidden"></section>
<section class="home_section3 grid_container home_hidden"></section>

<footer class="home_footer">
<p class="font5">&#169; Created by Microverse students;  <a href="https://github.com/EmekaEmmanuel" target="_blank"
><strong
  >Emeka Emmanuel<span><img class="githubicon" src=${_images_github_svg__WEBPACK_IMPORTED_MODULE_0__} alt="" id="github1" /></span></strong
></a>
<a href="https://github.com/jugosack" target="_blank"
><strong
  > Zewdu<span><img class="githubicon" src=${_images_github_svg__WEBPACK_IMPORTED_MODULE_0__} alt="" id="github1" /></span></strong
></a>
<a href="https://github.com/zewdu444" target="_blank"
><strong
  > Jugoslav<span><img class="githubicon" src=${_images_github_svg__WEBPACK_IMPORTED_MODULE_0__} alt="" id="github1" /></span></strong
></a>
 under CC BY-SA license</p> 
</footer>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHomeUI);

/***/ }),

/***/ "./src/pageUI/reservationUI.js":
/*!*************************************!*\
  !*** ./src/pageUI/reservationUI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reservationUI = () => ` <section class="reservation" id="reservation">
<section class="reserveimageholder">
  <div class="reserveimage">
    <img
      id="reservepicture"
      alt="moviename"
    />
  </div>
  <button id="reservationclose">X</button>
</section>
<section class="reservenameholder">
  <h2 id="reservename"></h2>
  <ul class="reservenamedetail">
    <li id="reservetype"> </li>
    <li id="reservelanguage"> </li>
    <li id="reservestatus"> </li>
    <li id='reserveaverageRuntime'> </li>
  </ul>
</section>
<section class="reservedateholder">
  <h2 id="reservationcount"></h2>
  <ul class="reservedate"></ul>
</section>
<section class="addreservation">
  <h2>Add a reservation</h2>
  <input id="username" type="text" placeholder="Your Name" />
  <input
    id="startdate"
    type="text"
    placeholder="start Date"
    onfocus="(this.type='date')"
  />
  <input
    id="enddate"
    type="text"
    placeholder="End Date"
    onfocus="(this.type='date')"
  />
  <button class="reservebutton" id="reservebutton">Reserve</button>
</section>
</section>`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationUI);

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b21c250a99986431958.svg";

/***/ }),

/***/ "./src/images/love.png":
/*!*****************************!*\
  !*** ./src/images/love.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c04f70b77262f5245b95.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdEI5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JzQjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQSxxREFBcUQsK0NBQVUsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0NBQVUsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsK0NBQVUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ3BDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvY3NzL2NvbW1lbnRTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvY3NzL3Jlc2VydmF0aW9uU3R5bGUuY3NzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2Nzcy9jb21tZW50U3R5bGUuY3NzPzEyMDgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2Nzcy9ob21lLmNzcz8wODQ1Iiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9jc3MvcmVzZXJ2YXRpb25TdHlsZS5jc3M/OTQ1ZSIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9hcGkvZ2V0QWxsTGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2FwaS9nZXRBbGxTaG93cy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvYXBpL3Bvc3RBbGxMaWtlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9jb21tZW50L2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnQvY29tbWVudERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL21vZHVsZXMvY29tbWVudC9jb21tZW50R2V0QVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnQvY29tbWVudFBvc3RBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25Db3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkdldEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvblBvc3RBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL3BhZ2VVSS9jb21tZW50VUkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL3BhZ2VVSS9kaXNwbGF5SG9tZVVJLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9wYWdlVUkvcmVzZXJ2YXRpb25VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGltYWdlaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aW1hZ2UgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM3LjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogNi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRpbWFnZWhvbGRlciA+IGJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAtMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRuYW1laG9sZGVyID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRuYW1laG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRuYW1lZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY29sdW1uLWdhcDogLTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRsaXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGlucHV0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbW1lbnQgPiB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbW1lbnQgPiBidXR0b24ge1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdXNlZCBvbmx5IHRvIGNoZWNrIHdoaWNoIGJ1dHRvbiB3aGVyZSBmaXJlZCAqL1xcclxcbi5idXR0b25jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDAwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb21tZW50U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aW1hZ2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRpbWFnZSA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGltYWdlaG9sZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudG5hbWVob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudG5hbWVob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudG5hbWVkZXRhaWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGhvbGRlciA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gaW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbW1lbnQgPiB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1c2VkIG9ubHkgdG8gY2hlY2sgd2hpY2ggYnV0dG9uIHdoZXJlIGZpcmVkICovXFxyXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9oZWFkZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9oZWFkZXIgbmF2IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9pdGVtOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJweCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig3OCwgNzYsIDc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgcGFkZGluZzogMThweCAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb250MSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udDIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb250NCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udDUge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYXJ0aWNsZSBmaWd1cmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWd6IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYnV0dG9ucyAuY29tbWVudF9idG4ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYnV0dG9ucyAucmVzZXJ2ZV9idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2Zvb3RlciB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2hpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViaWNvbiB7XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAtMTJweCAzcHggLTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXHJcXG4gIC5ob21lX2hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWVfaGVhZGVyIG5hdiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ3JpZF9jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdhcDogODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2hlYWRlciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMCA2MHB4IDA7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2hlYWRlciBuYXYge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X2l0ZW06aG92ZXIge1xcclxcbiAgcGFkZGluZzogMnB4IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDc4LCA3NiwgNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb250MiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udDMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb250NSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9hcnRpY2xlIGZpZ3VyZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ3oge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV90aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9idXR0b25zIC5jb21tZW50X2J0biB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9idXR0b25zIC5yZXNlcnZlX2J0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZzogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9hY3RpdmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naXRodWJpY29uIHtcXHJcXG4gIHdpZHRoOiAxLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IC0xMnB4IDNweCAtNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgLmhvbWVfaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZV9oZWFkZXIgbmF2IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ncmlkX2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgZ2FwOiA4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlaW1hZ2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZWltYWdlaG9sZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVkZXRhaWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlZGF0ZSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzZXJ2YXRpb24gPiBpbnB1dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1c2VkIG9ubHkgdG8gY2hlY2sgd2hpY2ggYnV0dG9uIHdoZXJlIGZpcmVkICovXFxyXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2VydmF0aW9uU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlaW1hZ2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZWltYWdlaG9sZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVkZXRhaWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlZGF0ZSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzZXJ2YXRpb24gPiBpbnB1dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1c2VkIG9ubHkgdG8gY2hlY2sgd2hpY2ggYnV0dG9uIHdoZXJlIGZpcmVkICovXFxyXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50U3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50U3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvblN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb25TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW52b2x2ZW1lbnRBUEksIGFwaUlEIH0gZnJvbSAnLi4vY29uZmlnLmpzJztcblxuY29uc3QgZ2V0QWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgKGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QVBJfSR7YXBpSUR9L2xpa2VzYCkpO1xuICAgIGlmICghcmVzdWx0Lm9rKSB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGl0ZW0gZGF0YTogJHtyZXN1bHQuc3RhdHVzfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxMaWtlczsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5cclxuY29uc3QgZ2V0QWxsU2hvd3MgPSBhc3luYyAoYmFzZVVSTCkgPT4ge1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYmFzZVVSTCk7XHJcbiAgICBsZXQgZGF0YUFyciA9IFtdXHJcbiAgICBpZiAoIXJlc3VsdC5vaykgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBmZXRjaGluZyBpdGVtIGRhdGE6ICR7cmVzdWx0LnN0YXR1c31gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgY29uc3QgZGF0YWxlbmd0aCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgY29uc3QgcmVhbGl0eUdlbnJlID0gZGF0YS5maWx0ZXIoKHNob3cpID0+IHNob3cudHlwZSA9PT0gJ1JlYWxpdHknKTtcclxuICAgIGNvbnN0IHJlYWxpdHlMZW5ndGggPSByZWFsaXR5R2VucmUubGVuZ3RoO1xyXG4gICAgY29uc3QgYW5pbWF0aW9uR2VucmUgPSBkYXRhLmZpbHRlcigoc2hvdykgPT4gc2hvdy50eXBlID09PSAnQW5pbWF0aW9uJyk7XHJcbiAgICBjb25zdCBhbmltYXRpb25MZW5ndGggPSBhbmltYXRpb25HZW5yZS5sZW5ndGg7XHJcbiAgICBkYXRhQXJyID0gW3sgdGl0bGU6ICdTaG93cycsIGRhdGEsIHRvdGFsOiBkYXRhbGVuZ3RoIH0sIHsgdGl0bGU6ICdSZWFsaXR5JywgcmVhbGl0eUdlbnJlLCB0b3RhbDogcmVhbGl0eUxlbmd0aCB9LCB7IHRpdGxlOiAnQW5pbWF0aW9uJywgYW5pbWF0aW9uR2VucmUsIHRvdGFsOiBhbmltYXRpb25MZW5ndGggfV07XHJcbiAgICByZXR1cm4gZGF0YUFyciBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsU2hvd3M7ICIsImltcG9ydCB7IGludm9sdmVtZW50QVBJLCBhcGlJRCB9IGZyb20gJy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHBvc3RBbGxMaWtlcyA9IGFzeW5jIChwYXIpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEFQSSArIGFwaUlEfS9saWtlcy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9Kc29uJyxcbiAgICAgICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXIpLFxuICAgIH0pO1xuICAgIGlmICghcmVzdWx0Lm9rKSB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGl0ZW0gZGF0YTogJHtyZXN1bHQuc3RhdHVzfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdEFsbExpa2VzOyIsImNvbnN0IGdldEFsbFNob3dzVVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3QgYXBpSUQgPSAnQWNSd2FSdXNnVXpBS2JidUpCVXEnO1xuY29uc3QgaW52b2x2ZW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGludm9sdmVtZW50SUQgPSAnZU9yY0NQM3NkRTc5dEJSSVo2dFUnO1xuXG5leHBvcnQge1xuICBnZXRBbGxTaG93c1VSTCwgaW52b2x2ZW1lbnRBUEksIGFwaUlELCBpbnZvbHZlbWVudElELFxufTsiLCJpbXBvcnQgJy4vY3NzL2hvbWUuY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXJ2YXRpb25TdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9jb21tZW50U3R5bGUuY3NzJztcbmltcG9ydCB7IGdldEFsbFNob3dzVVJMIH0gZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IGdldEFsbFNob3dzIGZyb20gJy4vYXBpL2dldEFsbFNob3dzLmpzJztcbmltcG9ydCBkaXNwbGF5SG9tZVVJIGZyb20gJy4vcGFnZVVJL2Rpc3BsYXlIb21lVUkuanMnO1xuaW1wb3J0IGxvdmVJbWcgZnJvbSAnLi9pbWFnZXMvbG92ZS5wbmcnO1xuaW1wb3J0IGdldEFsbExpa2VzIGZyb20gJy4vYXBpL2dldEFsbExpa2VzLmpzJztcbmltcG9ydCBwb3N0QWxsTGlrZXMgZnJvbSAnLi9hcGkvcG9zdEFsbExpa2VzLmpzJztcbmltcG9ydCByZXNlcnZhdGlvblVJIGZyb20gJy4vcGFnZVVJL3Jlc2VydmF0aW9uVUkuanMnO1xuaW1wb3J0IHJlc2VydmF0aW9uQ291bnRlciBmcm9tICcuL21vZHVsZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25Db3VudGVyLmpzJztcbmltcG9ydCBzZW5kUmVzZXJ2YXRpb24gZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uUG9zdEFQSS5qcyc7XG5pbXBvcnQgZGlzcGxheVJlc2VydmF0aW9uIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkRpc3BsYXkuanMnO1xuaW1wb3J0IGNvbW1lbnRVSSBmcm9tICcuL3BhZ2VVSS9jb21tZW50VUkuanMnO1xuaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9jb21tZW50L2NvbW1lbnRDb3VudGVyLmpzJztcbmltcG9ydCBzZW5kQ29tbWVudCBmcm9tICcuL21vZHVsZXMvY29tbWVudC9jb21tZW50UG9zdEFQSS5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudERpc3BsYXkuanMnO1xuXG5jb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfYm9keScpO1xuXG5jb25zdCBIb21lVUkgPSAoKSA9PiB7XG4gIGJvZHlUYWcuaW5uZXJIVE1MID0gJyc7XG4gIGJvZHlUYWcuaW5uZXJIVE1MID0gcmVzZXJ2YXRpb25VSSgpICsgY29tbWVudFVJKCkgKyBkaXNwbGF5SG9tZVVJKCk7XG59O1xuXG5Ib21lVUkoKTtcblxuY29uc3QgbmF2VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9saXN0Jyk7XG5jb25zdCBob21lU2VjdGlvbjFUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9zZWN0aW9uMScpO1xuY29uc3QgaG9tZVNlY3Rpb24yVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfc2VjdGlvbjInKTtcbmNvbnN0IGhvbWVTZWN0aW9uM1RhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3NlY3Rpb24zJyk7XG5cbmNvbnN0IGFjdGl2YXRlQ2xpY2tlZFNwYW4gPSAocGFyKSA9PiB7XG4gIHBhci5jbGFzc0xpc3QuYWRkKCdob21lX2FjdGl2ZScpO1xuICBwYXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZV9oaWRkZW4nKTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2xpY2tlZFNlY3Rpb24gPSAocGFyKSA9PiB7XG4gIHBhci5jbGFzc0xpc3QuYWRkKCdob21lX2FjdGl2ZScpO1xuICBwYXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZV9oaWRkZW4nKTtcbn07XG5cbmNvbnN0IHNwYW5BY3RpdmVSZW1vdmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNwYW5UYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfc3BhbicpO1xuICBzcGFuVGFncy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lX2FjdGl2ZScpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaG9tZV9oaWRkZW4nKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZWN0aW9uQWN0aXZlUmVtb3ZlID0gKCkgPT4ge1xuICBjb25zdCBzZWN0aW9uVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkX2NvbnRhaW5lcicpO1xuICBzZWN0aW9uVGFncy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lX2FjdGl2ZScpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaG9tZV9oaWRkZW4nKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkeW5hbWljTmF2ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSk7XG4gIGxldCBuYXZ0ZW1wID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG5hdnRlbXBcbiAgICAgICs9IGBcbjxsaSBjbGFzcz1cImZvbnQyIG5hdl9pdGVtIHRhYl9hY3RpdmVcIiBkYXRhLXRhYj0ke2kgKyAxfT5cbiR7YCR7ZGF0YVtpXS50aXRsZX0gYH08c3BhbiBjbGFzcz1cImhvbWVfc3BhbiAke2kgPT09IDAgPyAnaG9tZV9hY3RpdmUnIDogJyd9IHNwYW4ke2kgKyAxfSBzcGFuX2FjdGl2ZVwiPigke2RhdGFbaV0udG90YWx9KTwvc3Bhbj5cbjwvbGk+YDtcbiAgfVxuICBuYXZUYWcuaW5uZXJIVE1MID0gbmF2dGVtcDtcbn07XG5cbmNvbnN0IGhvbWVDYXJkMSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVswXTtcbiAgY29uc3QgbGlrZURhdGEgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xuICBkYXRhLmZvckVhY2goKHgpID0+IHtcbiAgICBsaWtlRGF0YS5mb3JFYWNoKCh5KSA9PiB7XG4gICAgICBpZiAocGFyc2VGbG9hdCh5Lml0ZW1faWQpID09PSB4LmlkKSB7XG4gICAgICAgIHgubGlrZSA9IHkubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBsZXQgYXJ0aWNsZXRlbXAgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJ0aWNsZXRlbXBcbiAgICAgICs9IGA8YXJ0aWNsZSBjbGFzcz1cImhvbWVfYXJ0aWNsZVwiIGtleT0ke2RhdGFbaV0uaWR9PiBcbjxmaWd1cmU+XG4gPGltZyBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiaW1nelwiIHNyYz0ke2RhdGFbaV0uaW1hZ2UubWVkaXVtfSBhbHQ9XCJcIj5cbjwvZmlndXJlPlxuXG48ZGl2IGNsYXNzPVwiaG9tZV90aXRsZVwiPlxuICA8ZGl2PlxuICAgIDxoMz4ke2RhdGFbaV0ubmFtZX08L2gzPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICA8aW1nIGRhdGEtdGFiPSR7ZGF0YVtpXS5pZH0gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImxpa2VfYnRuXCIgc3JjPSR7bG92ZUltZ30gYWx0PVwiXCI+XG4gIDxwIGNsYXNzPVwiZm9udDRcIj48c3BhbiBjbGFzcz1cImNvdW50IGNvdW50JHtkYXRhW2ldLmlkfVwiIGRhdGEtdGFiPSR7ZGF0YVtpXS5pZH0+JHtkYXRhW2ldLmxpa2UgPyBkYXRhW2ldLmxpa2UgOiAwfTwvc3Bhbj4gJHtkYXRhW2ldLmxpa2UgPD0gMSA/ICdsaWtlJyA6ICdsaWtlcyd9IDwvcD5cbjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJob21lX2J1dHRvbnNcIj5cbiAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiY29tbWVudF9idG4gZm9udDNcIj5Db21tZW50czwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJyZXNlcnZlX2J0biBmb250M1wiPlJlc2VydmF0aW9uczwvYnV0dG9uPlxuPC9kaXY+XG48L2FydGljbGU+YDtcbiAgfVxuICBob21lU2VjdGlvbjFUYWcuaW5uZXJIVE1MID0gYXJ0aWNsZXRlbXA7XG59O1xuXG5jb25zdCBob21lQ2FyZDIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsxXS5yZWFsaXR5R2VucmU7XG4gIGNvbnN0IGxpa2VEYXRhID0gYXdhaXQgZ2V0QWxsTGlrZXMoKTtcbiAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgbGlrZURhdGEuZm9yRWFjaCgoeSkgPT4ge1xuICAgICAgaWYgKHBhcnNlRmxvYXQoeS5pdGVtX2lkKSA9PT0geC5pZCkge1xuICAgICAgICB4Lmxpa2UgPSB5Lmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgbGV0IGFydGljbGV0ZW1wID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGFydGljbGV0ZW1wXG4gICAgICArPSBgPGFydGljbGUgY2xhc3M9XCJob21lX2FydGljbGVcIiBrZXk9JHtkYXRhW2ldLmlkfT4gXG48ZmlndXJlPlxuICAgPGltZyBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiaW1nelwiIHNyYz0ke2RhdGFbaV0uaW1hZ2UubWVkaXVtfSBhbHQ9XCJcIj5cbjwvZmlndXJlPlxuXG48ZGl2IGNsYXNzPVwiaG9tZV90aXRsZVwiPlxuICA8ZGl2PlxuICAgIDxoMz4ke2RhdGFbaV0ubmFtZX08L2gzPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICA8aW1nIGRhdGEtdGFiPSR7ZGF0YVtpXS5pZH0gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImxpa2VfYnRuXCIgc3JjPSR7bG92ZUltZ30gYWx0PVwiXCI+XG4gIDxwIGNsYXNzPVwiZm9udDRcIj48c3BhbiBjbGFzcz1cImNvdW50IGNvdW50JHtkYXRhW2ldLmlkfVwiIGRhdGEtdGFiPSR7ZGF0YVtpXS5pZH0+JHtkYXRhW2ldLmxpa2UgPyBkYXRhW2ldLmxpa2UgOiAwfTwvc3Bhbj4gJHtkYXRhW2ldLmxpa2UgPD0gMSA/ICdsaWtlJyA6ICdsaWtlcyd9IDwvcD5cbjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJob21lX2J1dHRvbnNcIj5cbiAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiY29tbWVudF9idG4gZm9udDNcIj5Db21tZW50czwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJyZXNlcnZlX2J0biBmb250M1wiPlJlc2VydmF0aW9uczwvYnV0dG9uPlxuPC9kaXY+XG48L2FydGljbGU+YDtcbiAgfVxuICBob21lU2VjdGlvbjJUYWcuaW5uZXJIVE1MID0gYXJ0aWNsZXRlbXA7XG59O1xuXG5jb25zdCBob21lQ2FyZDMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsyXS5hbmltYXRpb25HZW5yZTtcbiAgY29uc3QgbGlrZURhdGEgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xuICBkYXRhLmZvckVhY2goKHgpID0+IHtcbiAgICBsaWtlRGF0YS5mb3JFYWNoKCh5KSA9PiB7XG4gICAgICBpZiAocGFyc2VGbG9hdCh5Lml0ZW1faWQpID09PSB4LmlkKSB7XG4gICAgICAgIHgubGlrZSA9IHkubGlrZXM7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBsZXQgYXJ0aWNsZXRlbXAgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYXJ0aWNsZXRlbXBcbiAgICAgICs9IGA8YXJ0aWNsZSBjbGFzcz1cImhvbWVfYXJ0aWNsZVwiIGtleT0ke2RhdGFbaV0uaWR9PiBcbjxmaWd1cmU+XG4gIDxpbWcgaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImltZ3pcIiBzcmM9JHtkYXRhW2ldLmltYWdlLm1lZGl1bX0gYWx0PVwiXCI+XG48L2ZpZ3VyZT4gXG48ZGl2IGNsYXNzPVwiaG9tZV90aXRsZVwiPlxuICA8ZGl2PlxuICAgIDxoMz4ke2RhdGFbaV0ubmFtZX08L2gzPlxuICA8L2Rpdj4gXG4gIDxkaXY+XG4gIDxpbWcgZGF0YS10YWI9JHtkYXRhW2ldLmlkfSBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwibGlrZV9idG5cIiBzcmM9JHtsb3ZlSW1nfSBhbHQ9XCJcIj5cbiAgPHAgY2xhc3M9XCJmb250NFwiPjxzcGFuIGNsYXNzPVwiY291bnQgY291bnQke2RhdGFbaV0uaWR9XCIgZGF0YS10YWI9JHtkYXRhW2ldLmlkfT4ke2RhdGFbaV0ubGlrZSA/IGRhdGFbaV0ubGlrZSA6IDB9PC9zcGFuPiAke2RhdGFbaV0ubGlrZSA8PSAxID8gJ2xpa2UnIDogJ2xpa2VzJ30gPC9wPlxuPC9kaXY+XG48L2Rpdj4gXG48ZGl2IGNsYXNzPVwiaG9tZV9idXR0b25zXCI+XG4gIDxidXR0b24gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImNvbW1lbnRfYnRuIGZvbnQzXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwicmVzZXJ2ZV9idG4gZm9udDNcIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj5cbjwvZGl2PlxuPC9hcnRpY2xlPmA7XG4gIH1cbiAgaG9tZVNlY3Rpb24zVGFnLmlubmVySFRNTCA9IGFydGljbGV0ZW1wO1xufTtcblxuY29uc3QgcmVyZW5kZXJDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgaG9tZUNhcmQxKCk7XG4gIGF3YWl0IGhvbWVDYXJkMigpO1xuICBhd2FpdCBob21lQ2FyZDMoKTtcbn07XG5cbmNvbnN0IFRhYnNlbGVjdG9yID0gYXN5bmMgKCkgPT4ge1xuICBuYXZUYWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2X2l0ZW0nKTtcbiAgICBjb25zdCBjbGlja2VkU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zcGFuJHtjbGlja2VkLmRhdGFzZXQudGFifWApO1xuICAgIGNvbnN0IGNsaWNrZWRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbWVfc2VjdGlvbiR7Y2xpY2tlZC5kYXRhc2V0LnRhYn1gKTtcbiAgICBzcGFuQWN0aXZlUmVtb3ZlKCk7XG4gICAgYWN0aXZhdGVDbGlja2VkU3BhbihjbGlja2VkU3Bhbik7XG4gICAgc2VjdGlvbkFjdGl2ZVJlbW92ZSgpO1xuICAgIGFjdGl2YXRlQ2xpY2tlZFNlY3Rpb24oY2xpY2tlZFNlY3Rpb24pO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBkeW5hbWljTmF2KCk7XG4gIGF3YWl0IHJlcmVuZGVyQ2FyZHMoKTtcbiAgYXdhaXQgZ2V0QWxsTGlrZXMoKTtcbiAgYXdhaXQgVGFic2VsZWN0b3IoKTtcbn0pO1xuLy8gY2xvc2UgYnV0dG9uIGZvciByZXNlcnZhdGlvbiB3aW5kb3dcblxuLy8gYWRkZWQgZm9yIHJlc2VydmF0aW9uIG1vZGFsXG5jb25zdCByZXNlcnZhdGlvbk1vZGFsID0gYXN5bmMgKHJlc2VydmVidG5pZCwgc2VsZWN0ZWRPYmplY3QpID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb25Db3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbmNvdW50Jyk7XG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJyk7XG4gIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydGRhdGUnKTtcbiAgY29uc3QgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRkYXRlJyk7XG4gIGNvbnN0IHJlc2VydmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZWJ1dHRvbicpO1xuICBjb25zdCByZXNlcnZlUGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZlcGljdHVyZScpO1xuICBjb25zdCByZXNlcnZlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZlbmFtZScpO1xuICBjb25zdCByZXNlcnZlTGFuZ3VhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZWxhbmd1YWdlJyk7XG4gIGNvbnN0IHJlc2VydmVTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZXN0YXR1cycpO1xuICBjb25zdCByZXNlcnZlQXZlcmFnZVJ1bnRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZWF2ZXJhZ2VSdW50aW1lJyk7XG4gIGNvbnN0IHJlc2VydmV0eXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmV0eXBlJyk7XG4gIHJlc2VydmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIC8vIGRpc3BsYXkgcmVzZXJ2YXRpb25cbiAgLy8gcmVzZXJ2YXRpb24gZXZlbnQgaGFuZGxpbmdcbiAgLy8gdXBkYXRlICBpbmZvcm1hdGlvblxuXG4gIHJlc2VydmVQaWN0dXJlLnNyYyA9IHNlbGVjdGVkT2JqZWN0LmltYWdlLm9yaWdpbmFsO1xuICByZXNlcnZlTmFtZS5pbm5lckhUTUwgPSBzZWxlY3RlZE9iamVjdC5uYW1lO1xuICByZXNlcnZlTGFuZ3VhZ2UuaW5uZXJIVE1MID0gYExhbmd1YWdlOiAke3NlbGVjdGVkT2JqZWN0Lmxhbmd1YWdlfWA7XG4gIHJlc2VydmVBdmVyYWdlUnVudGltZS5pbm5lckhUTUwgPSBgQXZlcmFnZVJ1bnRpbWU6ICR7c2VsZWN0ZWRPYmplY3QuYXZlcmFnZVJ1bnRpbWV9YDtcbiAgcmVzZXJ2ZVN0YXR1cy5pbm5lckhUTUwgPSBgU3RhdHVzOiAke3NlbGVjdGVkT2JqZWN0LnN0YXR1c31gO1xuICByZXNlcnZldHlwZS5pbm5lckhUTUwgPSBgVHlwZTogJHtzZWxlY3RlZE9iamVjdC50eXBlfWA7XG5cbiAgcmVzZXJ2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKHVzZXJOYW1lLnZhbHVlLnRyaW0oKSAhPT0gJycgJiYgc3RhcnREYXRlLnZhbHVlLnRyaW0oKSAhPT0gJycgJiYgZW5kRGF0ZS52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBhd2FpdCBzZW5kUmVzZXJ2YXRpb24oe1xuICAgICAgICBpdGVtX2lkOiArcmVzZXJ2ZWJ0bmlkLFxuICAgICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUudHJpbSgpLFxuICAgICAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGUudmFsdWUudHJpbSgpLFxuICAgICAgICBkYXRlX2VuZDogZW5kRGF0ZS52YWx1ZS50cmltKCksXG4gICAgICB9KTtcbiAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICBzdGFydERhdGUudmFsdWUgPSAnJztcbiAgICAgIGVuZERhdGUudmFsdWUgPSAnJztcbiAgICAgIGF3YWl0IGRpc3BsYXlSZXNlcnZhdGlvbihyZXNlcnZlYnRuaWQpO1xuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Db3VudGVyKHJlc2VydmVidG5pZCwgcmVzZXJ2YXRpb25Db3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sIHsgb25jZTogZmFsc2UgfSk7XG59O1xuY29uc3QgY2xvc2VSZXNlcnZhdGlvbldpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXJ2YXRpb25DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbmNsb3NlJyk7XG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJyk7XG4gIHJlc2VydmF0aW9uQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIHJlc2VydmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufTtcbm5hdlRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2X2l0ZW0nKTtcbiAgY29uc3QgY2xpY2tlZFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3BhbiR7Y2xpY2tlZC5kYXRhc2V0LnRhYn1gKTtcbiAgY29uc3QgY2xpY2tlZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaG9tZV9zZWN0aW9uJHtjbGlja2VkLmRhdGFzZXQudGFifWApO1xuICBzcGFuQWN0aXZlUmVtb3ZlKCk7XG4gIGFjdGl2YXRlQ2xpY2tlZFNwYW4oY2xpY2tlZFNwYW4pO1xuICBzZWN0aW9uQWN0aXZlUmVtb3ZlKCk7XG4gIGFjdGl2YXRlQ2xpY2tlZFNlY3Rpb24oY2xpY2tlZFNlY3Rpb24pO1xufSk7XG5cbmNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGNvdW50T2JqKSA9PiB7XG4gIGF3YWl0IHBvc3RBbGxMaWtlcyhjb3VudE9iaik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2FyZENvdW50ID0gYXN5bmMgKGNvdW50VUksIGlkKSA9PiB7XG4gIGNvbnN0IGxpa2VBcnJheSA9IGF3YWl0IGdldEFsbExpa2VzKCk7XG4gIGxpa2VBcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBpZCkge1xuICAgICAgY29uc3QgeyBsaWtlcyB9ID0gaXRlbTtcbiAgICAgIGNvdW50VUkuaW5uZXJIVE1MID0gbGlrZXM7XG4gICAgfVxuICAgIHJldHVybiBjb3VudFVJO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRNb2RhbCA9IGFzeW5jIChjb21tZW50YnRuaWQsIHNlbGVjdGVkY29tbWVudE9iamVjdCkgPT4ge1xuICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGNvdW50Jyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xuICBjb25zdCB1c2VyTmFtZWNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWVjb21tZW50Jyk7XG4gIGNvbnN0IHVzZXJDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJjb21tZW50Jyk7XG4gIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGJ1dHRvbicpO1xuICBjb25zdCBjb21tZW50UGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cGljdHVyZScpO1xuICBjb25zdCBjb21tZW50TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50bmFtZScpO1xuICBjb25zdCBjb21tZW50TGFuZ3VhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGxhbmd1YWdlJyk7XG4gIGNvbnN0IGNvbW1lbnRTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHN0YXR1cycpO1xuICBjb25zdCBjb21tZW50QXZlcmFnZVJ1bnRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGF2ZXJhZ2VSdW50aW1lJyk7XG4gIGNvbnN0IGNvbW1lbnR0eXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnR0eXBlJyk7XG4gIGNvbW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgLy8gcmVzZXJ2YXRpb24gZXZlbnQgaGFuZGxpbmdcbiAgLy8gdXBkYXRlICBpbmZvcm1hdGlvblxuXG4gIGNvbW1lbnRQaWN0dXJlLnNyYyA9IHNlbGVjdGVkY29tbWVudE9iamVjdC5pbWFnZS5vcmlnaW5hbDtcbiAgY29tbWVudE5hbWUuaW5uZXJIVE1MID0gc2VsZWN0ZWRjb21tZW50T2JqZWN0Lm5hbWU7XG4gIGNvbW1lbnRMYW5ndWFnZS5pbm5lckhUTUwgPSBgTGFuZ3VhZ2U6ICR7c2VsZWN0ZWRjb21tZW50T2JqZWN0Lmxhbmd1YWdlfWA7XG4gIGNvbW1lbnRBdmVyYWdlUnVudGltZS5pbm5lckhUTUwgPSBgQXZlcmFnZVJ1bnRpbWU6ICR7c2VsZWN0ZWRjb21tZW50T2JqZWN0LmF2ZXJhZ2VSdW50aW1lfWA7XG4gIGNvbW1lbnRTdGF0dXMuaW5uZXJIVE1MID0gYFN0YXR1czogJHtzZWxlY3RlZGNvbW1lbnRPYmplY3Quc3RhdHVzfWA7XG4gIGNvbW1lbnR0eXBlLmlubmVySFRNTCA9IGBUeXBlOiAke3NlbGVjdGVkY29tbWVudE9iamVjdC50eXBlfWA7XG4gIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHVzZXJOYW1lY29tbWVudC52YWx1ZS50cmltKCkgIT09ICcnICYmIHVzZXJDb21tZW50LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGF3YWl0IHNlbmRDb21tZW50KHtcbiAgICAgICAgaXRlbV9pZDogK2NvbW1lbnRidG5pZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lY29tbWVudC52YWx1ZS50cmltKCksXG4gICAgICAgIGNvbW1lbnQ6IHVzZXJDb21tZW50LnZhbHVlLnRyaW0oKSxcblxuICAgICAgfSk7XG4gICAgICB1c2VyTmFtZWNvbW1lbnQudmFsdWUgPSAnJztcbiAgICAgIHVzZXJDb21tZW50LnZhbHVlID0gJyc7XG5cbiAgICAgIGF3YWl0IGRpc3BsYXlDb21tZW50KGNvbW1lbnRidG5pZCk7XG4gICAgICBhd2FpdCBjb21tZW50Q291bnRlcihjb21tZW50YnRuaWQsIGNvbW1lbnRDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbW1lbnRidG5pZC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSwgeyBvbmNlOiBmYWxzZSB9KTtcbn07XG5cbmNvbnN0IGNsb3NlQ29tbWVudFdpbmRvdyA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRjbG9zZScpO1xuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKTtcbiAgY29tbWVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBjb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufTtcblxuYm9keVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IGNoZWNrTGlrZUJ0biA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlrZV9idG4nKTtcblxuICBjb25zdCBpc1Jlc2VydmVDb250YWluID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNlcnZlX2J0bicpO1xuICBjb25zdCByZXNlcnZlYnRuaWQgPSBlLnRhcmdldC5pZDtcbiAgY29uc3Qgc2hvdyA9IChhd2FpdCBnZXRBbGxTaG93cyhnZXRBbGxTaG93c1VSTCkpWzBdO1xuICBjb25zdCByZWFsaXR5ID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSlbMV07XG4gIGNvbnN0IGFuaW1hdGlvbiA9IChhd2FpdCBnZXRBbGxTaG93cyhnZXRBbGxTaG93c1VSTCkpWzJdO1xuICBjb25zdCBpc0NhcmQxQWN0aXZlID0gaG9tZVNlY3Rpb24xVGFnLmNsYXNzTGlzdC5jb250YWlucygnaG9tZV9hY3RpdmUnKTtcbiAgY29uc3QgaXNDYXJkMkFjdGl2ZSA9IGhvbWVTZWN0aW9uMlRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XG4gIGNvbnN0IGlzQ2FyZDNBY3RpdmUgPSBob21lU2VjdGlvbjNUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xuXG4gIGNvbnN0IGlzQ29tbWVudENvbnRhaW4gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnRfYnRuJyk7XG4gIGNvbnN0IGNvbW1lbnRidG5pZCA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBpc0NhcmRBY3RpdmUxID0gaG9tZVNlY3Rpb24xVGFnLmNsYXNzTGlzdC5jb250YWlucygnaG9tZV9hY3RpdmUnKTtcbiAgY29uc3QgaXNDYXJkQWN0aXZlMiA9IGhvbWVTZWN0aW9uMlRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XG4gIGNvbnN0IGlzQ2FyZEFjdGl2ZTMgPSBob21lU2VjdGlvbjNUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xuXG4gIGlmIChjaGVja0xpa2VCdG4pIHtcbiAgICBjb25zdCBjbGlja2VkTGlrZSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGlkID0gY2xpY2tlZExpa2UuZGF0YXNldC50YWI7XG4gICAgY29uc3QgY291bnRVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb3VudCR7aWR9YCk7XG4gICAgY29uc3QgY291bnRPYmogPSB7IGl0ZW1faWQ6IGlkIH07XG4gICAgYXdhaXQgcG9zdExpa2UoY291bnRPYmopO1xuICAgIGF3YWl0IGdldEFsbExpa2VzKCk7XG4gICAgYXdhaXQgZGlzcGxheUNhcmRDb3VudChjb3VudFVJLCBpZCk7XG4gICAgYXdhaXQgcmVyZW5kZXJDYXJkcygpO1xuICB9XG5cbiAgaWYgKGlzUmVzZXJ2ZUNvbnRhaW4pIHtcbiAgICBjb25zdCByZXNlcnZhdGlvbkNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uY291bnQnKTtcbiAgICBpZiAoaXNDYXJkMUFjdGl2ZSkge1xuICAgICAgY29uc3QgcmVzZXJ2YXRpb24gPSBzaG93LmRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKHJlc2VydmVidG5pZCkpO1xuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Nb2RhbChyZXNlcnZlYnRuaWQsIHJlc2VydmF0aW9uKTtcbiAgICAgIGF3YWl0IGRpc3BsYXlSZXNlcnZhdGlvbihyZXNlcnZlYnRuaWQpO1xuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Db3VudGVyKHJlc2VydmVidG5pZCwgcmVzZXJ2YXRpb25Db3VudCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc0NhcmQyQWN0aXZlKSB7XG4gICAgICBjb25zdCByZXNlcnZhdGlvbiA9IHJlYWxpdHkucmVhbGl0eUdlbnJlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihyZXNlcnZlYnRuaWQpKTtcbiAgICAgIGF3YWl0IHJlc2VydmF0aW9uTW9kYWwocmVzZXJ2ZWJ0bmlkLCByZXNlcnZhdGlvbik7XG4gICAgICBhd2FpdCBkaXNwbGF5UmVzZXJ2YXRpb24ocmVzZXJ2ZWJ0bmlkKTtcbiAgICAgIGF3YWl0IHJlc2VydmF0aW9uQ291bnRlcihyZXNlcnZlYnRuaWQsIHJlc2VydmF0aW9uQ291bnQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNDYXJkM0FjdGl2ZSkge1xuICAgICAgY29uc3QgcmVzZXJ2YXRpb24gPSBhbmltYXRpb24uYW5pbWF0aW9uR2VucmUuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKHJlc2VydmVidG5pZCkpO1xuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Nb2RhbChyZXNlcnZlYnRuaWQsIHJlc2VydmF0aW9uKTtcbiAgICAgIGF3YWl0IGRpc3BsYXlSZXNlcnZhdGlvbihyZXNlcnZlYnRuaWQpO1xuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Db3VudGVyKHJlc2VydmVidG5pZCwgcmVzZXJ2YXRpb25Db3VudCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQ29tbWVudENvbnRhaW4pIHtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGNvdW50Jyk7XG4gICAgaWYgKGlzQ2FyZEFjdGl2ZTEpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBzaG93LmRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGNvbW1lbnRidG5pZCkpO1xuICAgICAgYXdhaXQgY29tbWVudE1vZGFsKGNvbW1lbnRidG5pZCwgY29tbWVudCk7XG4gICAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChjb21tZW50YnRuaWQpO1xuICAgICAgYXdhaXQgY29tbWVudENvdW50ZXIoY29tbWVudGJ0bmlkLCBjb21tZW50Q291bnQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0NhcmRBY3RpdmUyKSB7XG4gICAgICBjb25zdCBjb21tZW50ID0gcmVhbGl0eS5yZWFsaXR5R2VucmUuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGNvbW1lbnRidG5pZCkpO1xuICAgICAgYXdhaXQgY29tbWVudE1vZGFsKGNvbW1lbnRidG5pZCwgY29tbWVudCk7XG4gICAgICBhd2FpdCBkaXNwbGF5Q29tbWVudChjb21tZW50YnRuaWQpO1xuICAgICAgYXdhaXQgY29tbWVudENvdW50ZXIoY29tbWVudGJ0bmlkLCBjb21tZW50Q291bnQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNDYXJkQWN0aXZlMykge1xuICAgICAgY29uc3QgY29tbWVudCA9IGFuaW1hdGlvbi5hbmltYXRpb25HZW5yZS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBOdW1iZXIoY29tbWVudGJ0bmlkKSk7XG4gICAgICBhd2FpdCBjb21tZW50TW9kYWwoY29tbWVudGJ0bmlkLCBjb21tZW50KTtcbiAgICAgIGF3YWl0IGRpc3BsYXlDb21tZW50KGNvbW1lbnRidG5pZCk7XG4gICAgICBhd2FpdCBjb21tZW50Q291bnRlcihjb21tZW50YnRuaWQsIGNvbW1lbnRDb3VudCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuY2xvc2VDb21tZW50V2luZG93KCk7XG5jbG9zZVJlc2VydmF0aW9uV2luZG93KCk7IiwiaW1wb3J0IGdldENvbW1lbnQgZnJvbSAnLi9jb21tZW50R2V0QVBJLmpzJztcblxuY29uc3QgY29tbWVudENvdW50ZXIgPSBhc3luYyAoaWQsIGNvbW1lbnRDb3VudCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XG4gIC8vIGNvdW50IGNvbW1lbnRcbiAgY29tbWVudENvdW50LmlubmVySFRNTCA9ICcnO1xuICBpZiAoZGF0YS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbW1lbnRDb3VudC5pbm5lckhUTUwgKz0gJ0NvbW1lbnRzJztcbiAgfSBlbHNlIHtcbiAgICBjb21tZW50Q291bnQuaW5uZXJIVE1MICs9IGBDb21tZW50cygke2RhdGEubGVuZ3RofSlgO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IGdldENvbW1lbnQgZnJvbSAnLi9jb21tZW50R2V0QVBJLmpzJztcblxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XG4gIGNvbnN0IGNvbW1lbnRsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRsaXN0Jyk7XG4gIGNvbW1lbnRsaXN0LmlubmVySFRNTCA9ICcnO1xuICBpZiAocmVzLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmVzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbW1lbnRsaXN0LmlubmVySFRNTCArPSBgPGxpPlxuICAgICAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gLSAke2NvbW1lbnQudXNlcm5hbWV9IC0gJHtjb21tZW50LmNvbW1lbnR9XG4gICA8L2xpPmA7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50OyIsImltcG9ydCB7IGludm9sdmVtZW50QVBJLCBpbnZvbHZlbWVudElEIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50QVBJICsgaW52b2x2ZW1lbnRJRH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50OyIsImltcG9ydCB7IGludm9sdmVtZW50QVBJLCBpbnZvbHZlbWVudElEIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3Qgc2VuZENvbW1lbnQgPSBhc3luYyAodXNlckNvbW1lbnQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEFQSSArIGludm9sdmVtZW50SUR9L2NvbW1lbnRzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL0pzb24nLFxuICAgICAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJDb21tZW50KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHNlbmRDb21tZW50OyIsImltcG9ydCBnZXRSZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uR2V0QVBJLmpzJztcblxuY29uc3QgcmVzZXJ2YXRpb25Db3VudGVyID0gYXN5bmMgKGlkLCByZXNlcnZhdGlvbkNvdW50KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSZXNlcnZhdGlvbihpZCk7XG4gIC8vIGNvdW50IHJlc2VydmF0aW9uXG4gIHJlc2VydmF0aW9uQ291bnQuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVzZXJ2YXRpb25Db3VudC5pbm5lckhUTUwgKz0gJ1Jlc2VydmF0aW9ucyc7XG4gIH0gZWxzZSB7XG4gICAgcmVzZXJ2YXRpb25Db3VudC5pbm5lckhUTUwgKz0gYFJlc2VydmF0aW9ucygke2RhdGEubGVuZ3RofSlgO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25Db3VudGVyOyIsImltcG9ydCBnZXRSZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uR2V0QVBJLmpzJztcblxuY29uc3QgZGlzcGxheVJlc2VydmF0aW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldFJlc2VydmF0aW9uKGlkKTtcbiAgY29uc3QgcmVzZXJ2ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2ZWRhdGUnKTtcbiAgcmVzZXJ2ZWRhdGUuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChyZXMubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXMuZm9yRWFjaCgocmVzZXJ2ZSkgPT4ge1xuICAgICAgcmVzZXJ2ZWRhdGUuaW5uZXJIVE1MICs9IGA8bGk+XG4gICAgICR7cmVzZXJ2ZS5kYXRlX3N0YXJ0fSAtICR7cmVzZXJ2ZS5kYXRlX2VuZH0gLSAke3Jlc2VydmUudXNlcm5hbWV9XG4gICA8L2xpPmA7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlSZXNlcnZhdGlvbjsiLCJpbXBvcnQgeyBpbnZvbHZlbWVudEFQSSwgaW52b2x2ZW1lbnRJRCB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IGdldFJlc2VydmF0aW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEkgKyBpbnZvbHZlbWVudElEfS9yZXNlcnZhdGlvbnM/aXRlbV9pZD0ke2lkfWApO1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBnZXRSZXNlcnZhdGlvbjsiLCJpbXBvcnQgeyBpbnZvbHZlbWVudEFQSSwgaW52b2x2ZW1lbnRJRCB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNvbnN0IHNlbmRSZXNlcnZhdGlvbiA9IGFzeW5jICh1c2VyUmVzZXJ2YXRpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEFQSSArIGludm9sdmVtZW50SUR9L3Jlc2VydmF0aW9ucy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9Kc29uJyxcbiAgICAgICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyUmVzZXJ2YXRpb24pLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgc2VuZFJlc2VydmF0aW9uOyIsImNvbnN0IGNvbW1lbnRVSSA9ICgpID0+IGAgPHNlY3Rpb24gY2xhc3M9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCI+XG48c2VjdGlvbiBjbGFzcz1cImNvbW1lbnRpbWFnZWhvbGRlclwiPlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudGltYWdlXCI+XG4gICAgPGltZ1xuICAgICAgaWQ9XCJjb21tZW50cGljdHVyZVwiXG4gICAgICBhbHQ9XCJtb3ZpZW5hbWVcIlxuICAgIC8+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGlkPVwiY29tbWVudGNsb3NlXCI+WDwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuPHNlY3Rpb24gY2xhc3M9XCJjb21tZW50bmFtZWhvbGRlclwiPlxuICA8aDIgaWQ9XCJjb21tZW50bmFtZVwiPjwvaDI+XG4gIDx1bCBjbGFzcz1cImNvbW1lbnRuYW1lZGV0YWlsXCI+XG4gICAgPGxpIGlkPVwiY29tbWVudHR5cGVcIj4gPC9saT5cbiAgICA8bGkgaWQ9XCJjb21tZW50bGFuZ3VhZ2VcIj4gPC9saT5cbiAgICA8bGkgaWQ9XCJjb21tZW50c3RhdHVzXCI+IDwvbGk+XG4gICAgPGxpIGlkPSdjb21tZW50YXZlcmFnZVJ1bnRpbWUnPiA8L2xpPlxuICA8L3VsPlxuPC9zZWN0aW9uPlxuPHNlY3Rpb24gY2xhc3M9XCJjb21tZW50aG9sZGVyXCI+XG4gIDxoMiBpZD1cImNvbW1lbnRjb3VudFwiPjwvaDI+XG4gIDx1bCBjbGFzcz1cImNvbW1lbnRsaXN0XCI+PC91bD5cbjwvc2VjdGlvbj5cbjxzZWN0aW9uIGNsYXNzPVwiYWRkY29tbWVudFwiPlxuICA8aDI+QWRkIGEgY29tbWVudDwvaDI+XG4gIDxpbnB1dCBpZD1cInVzZXJuYW1lY29tbWVudFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiAvPlxuXG4gIDx0ZXh0YXJlYSBpZD1cInVzZXJjb21tZW50XCIgcmVxdWlyZWQgIHBsYWNlaG9sZGVyPVwiIEtpbmRseSBhZGQgYSBjb21tZW50Li4uXCIgPjwvdGV4dGFyZWE+XG4gIDxidXR0b24gY2xhc3M9XCJjb21tZW50YnV0dG9uXCIgaWQ9XCJjb21tZW50YnV0dG9uXCI+Q29tbWVudDwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuPC9zZWN0aW9uPmA7XG5leHBvcnQgZGVmYXVsdCBjb21tZW50VUk7IiwiaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi4vaW1hZ2VzL2dpdGh1Yi5zdmcnO1xuXG5jb25zdCBkaXNwbGF5SG9tZVVJID0gKCkgPT4gYFxuPGhlYWRlciBjbGFzcz1cImhvbWVfaGVhZGVyXCI+XG5cbjxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gIDxoMSBjbGFzcz1cImZvbnQxXCI+Q2FwIDxicj4gRmxpeCA8L2gxPlxuPC9kaXY+XG5cbjxuYXYgY2xhc3M9XCJuYXZfbGlzdFwiPlxuIFxuPC9uYXY+XG5cbjwvaGVhZGVyPlxuXG48c2VjdGlvbiBjbGFzcz1cImhvbWVfc2VjdGlvbjEgZ3JpZF9jb250YWluZXIgaG9tZV9hY3RpdmVcIj48L3NlY3Rpb24+XG48c2VjdGlvbiBjbGFzcz1cImhvbWVfc2VjdGlvbjIgZ3JpZF9jb250YWluZXIgaG9tZV9oaWRkZW5cIj48L3NlY3Rpb24+XG48c2VjdGlvbiBjbGFzcz1cImhvbWVfc2VjdGlvbjMgZ3JpZF9jb250YWluZXIgaG9tZV9oaWRkZW5cIj48L3NlY3Rpb24+XG5cbjxmb290ZXIgY2xhc3M9XCJob21lX2Zvb3RlclwiPlxuPHAgY2xhc3M9XCJmb250NVwiPiYjMTY5OyBDcmVhdGVkIGJ5IE1pY3JvdmVyc2Ugc3R1ZGVudHM7ICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0VtZWthRW1tYW51ZWxcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuPjxzdHJvbmdcbiAgPkVtZWthIEVtbWFudWVsPHNwYW4+PGltZyBjbGFzcz1cImdpdGh1Ymljb25cIiBzcmM9JHtnaXRodWJJY29ufSBhbHQ9XCJcIiBpZD1cImdpdGh1YjFcIiAvPjwvc3Bhbj48L3N0cm9uZ1xuPjwvYT5cbjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vanVnb3NhY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuPjxzdHJvbmdcbiAgPiBaZXdkdTxzcGFuPjxpbWcgY2xhc3M9XCJnaXRodWJpY29uXCIgc3JjPSR7Z2l0aHViSWNvbn0gYWx0PVwiXCIgaWQ9XCJnaXRodWIxXCIgLz48L3NwYW4+PC9zdHJvbmdcbj48L2E+XG48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3pld2R1NDQ0XCIgdGFyZ2V0PVwiX2JsYW5rXCJcbj48c3Ryb25nXG4gID4gSnVnb3NsYXY8c3Bhbj48aW1nIGNsYXNzPVwiZ2l0aHViaWNvblwiIHNyYz0ke2dpdGh1Ykljb259IGFsdD1cIlwiIGlkPVwiZ2l0aHViMVwiIC8+PC9zcGFuPjwvc3Ryb25nXG4+PC9hPlxuIHVuZGVyIENDIEJZLVNBIGxpY2Vuc2U8L3A+IFxuPC9mb290ZXI+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZVVJOyIsImNvbnN0IHJlc2VydmF0aW9uVUkgPSAoKSA9PiBgIDxzZWN0aW9uIGNsYXNzPVwicmVzZXJ2YXRpb25cIiBpZD1cInJlc2VydmF0aW9uXCI+XG48c2VjdGlvbiBjbGFzcz1cInJlc2VydmVpbWFnZWhvbGRlclwiPlxuICA8ZGl2IGNsYXNzPVwicmVzZXJ2ZWltYWdlXCI+XG4gICAgPGltZ1xuICAgICAgaWQ9XCJyZXNlcnZlcGljdHVyZVwiXG4gICAgICBhbHQ9XCJtb3ZpZW5hbWVcIlxuICAgIC8+XG4gIDwvZGl2PlxuICA8YnV0dG9uIGlkPVwicmVzZXJ2YXRpb25jbG9zZVwiPlg8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbjxzZWN0aW9uIGNsYXNzPVwicmVzZXJ2ZW5hbWVob2xkZXJcIj5cbiAgPGgyIGlkPVwicmVzZXJ2ZW5hbWVcIj48L2gyPlxuICA8dWwgY2xhc3M9XCJyZXNlcnZlbmFtZWRldGFpbFwiPlxuICAgIDxsaSBpZD1cInJlc2VydmV0eXBlXCI+IDwvbGk+XG4gICAgPGxpIGlkPVwicmVzZXJ2ZWxhbmd1YWdlXCI+IDwvbGk+XG4gICAgPGxpIGlkPVwicmVzZXJ2ZXN0YXR1c1wiPiA8L2xpPlxuICAgIDxsaSBpZD0ncmVzZXJ2ZWF2ZXJhZ2VSdW50aW1lJz4gPC9saT5cbiAgPC91bD5cbjwvc2VjdGlvbj5cbjxzZWN0aW9uIGNsYXNzPVwicmVzZXJ2ZWRhdGVob2xkZXJcIj5cbiAgPGgyIGlkPVwicmVzZXJ2YXRpb25jb3VudFwiPjwvaDI+XG4gIDx1bCBjbGFzcz1cInJlc2VydmVkYXRlXCI+PC91bD5cbjwvc2VjdGlvbj5cbjxzZWN0aW9uIGNsYXNzPVwiYWRkcmVzZXJ2YXRpb25cIj5cbiAgPGgyPkFkZCBhIHJlc2VydmF0aW9uPC9oMj5cbiAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cbiAgPGlucHV0XG4gICAgaWQ9XCJzdGFydGRhdGVcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBwbGFjZWhvbGRlcj1cInN0YXJ0IERhdGVcIlxuICAgIG9uZm9jdXM9XCIodGhpcy50eXBlPSdkYXRlJylcIlxuICAvPlxuICA8aW5wdXRcbiAgICBpZD1cImVuZGRhdGVcIlxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBwbGFjZWhvbGRlcj1cIkVuZCBEYXRlXCJcbiAgICBvbmZvY3VzPVwiKHRoaXMudHlwZT0nZGF0ZScpXCJcbiAgLz5cbiAgPGJ1dHRvbiBjbGFzcz1cInJlc2VydmVidXR0b25cIiBpZD1cInJlc2VydmVidXR0b25cIj5SZXNlcnZlPC9idXR0b24+XG48L3NlY3Rpb24+XG48L3NlY3Rpb24+YDtcbmV4cG9ydCBkZWZhdWx0IHJlc2VydmF0aW9uVUk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9