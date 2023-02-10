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
    if (!result.ok) throw new Error(`Error fetching item data: ${result.status}`); 
      const data = await result.json();
      const datalength = data.length;
      const realityGenre = data.filter((show) => show.type === 'Reality');
      const realityLength = realityGenre.length;
      const animationGenre = data.filter((show) => show.type === 'Animation');
      const animationLength = animationGenre.length;
      return [{ title: 'Shows', data, total: datalength }, { title: 'Reality', realityGenre, total: realityLength }, { title: 'Animation', animationGenre, total: animationLength }]; 
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
/* harmony export */   "involvementAPI": () => (/* binding */ involvementAPI)
/* harmony export */ });
/* eslint-disable */
const getAllShowsURL = 'https://api.tvmaze.com/shows';
const apiID = 'AcRwaRusgUzAKbbuJBUq';
const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';



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
  // fetch data from api
  // count reservation
  (0,_modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__["default"])(reservebtnid, reservationCount);
  // display reservation
  (0,_modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(reservebtnid);
  // reservation event handling
  // update  information

  reservePicture.src = selectedObject.image.original;
  reserveName.innerHTML = selectedObject.name;
  reserveLanguage.innerHTML = `Language: ${selectedObject.language}`;
  reserveAverageRuntime.innerHTML = `AverageRuntime: ${selectedObject.averageRuntime}`;
  reserveStatus.innerHTML = `Status: ${selectedObject.status}`;
  reservetype.innerHTML = `Type: ${selectedObject.type}`;
  reserveButton.addEventListener('click', async () => {
    if (userName.value.trim() !== '' && startDate.value.trim() !== '' && endDate.value.trim() !== '') {
      const reservationdata = {
        item_id: +reservebtnid,
        username: userName.value.trim(),
        date_start: startDate.value.trim(),
        date_end: endDate.value.trim(),
      };
      await (0,_modules_reservation_reservationPostAPI_js__WEBPACK_IMPORTED_MODULE_11__["default"])(reservationdata);
      userName.value = '';
      startDate.value = '';
      endDate.value = '';
      (0,_modules_reservation_reservationDisplay_js__WEBPACK_IMPORTED_MODULE_12__["default"])(reservebtnid);
      (0,_modules_reservation_reservationCounter_js__WEBPACK_IMPORTED_MODULE_10__["default"])(reservebtnid, reservationCount);
    } else {
      reservebtnid.preventDefault();
    }
  });
};
  // close button for reservation window
const closeReservationWindow = async () => {
  const reservationClose = document.getElementById('reservationclose');
  const reservation = document.getElementById('reservation');
  reservationClose.addEventListener('click', () => {
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
  
  ///////////////////////////////////////////////////////////
  const userNamecomment = document.getElementById('usernamecomment');
  const userComment= document.getElementById('usercomment');
/////////////////////////////////////////////////////////////
 
  const commentButton = document.getElementById('commentbutton');
  const commentPicture = document.getElementById('commentpicture');
  const commentName = document.getElementById('commentname');
  const commentLanguage = document.getElementById('commentlanguage');
  const commentStatus = document.getElementById('commentstatus');
  const commentAverageRuntime = document.getElementById('commentaverageRuntime');
  const commenttype = document.getElementById('commenttype');
  //const isCard1Active = homeSection1Tag.classList.contains('home_active');
  //const isCard2Active = homeSection2Tag.classList.contains('home_active');
  comment.style.display = 'block';
  // fetch data from api
  // count reservation
  (0,_modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__["default"])(commentbtnid, commentCount);
  // display reservation
  (0,_modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__["default"])(commentbtnid);
  // reservation event handling
  // update  information

  commentPicture.src = selectedcommentObject.image.original;
  commentName.innerHTML = selectedcommentObject.name;
  commentLanguage.innerHTML = `Language: ${selectedcommentObject.language}`;
  commentAverageRuntime.innerHTML = `AverageRuntime: ${selectedcommentObject.averageRuntime}`;
  commentStatus.innerHTML = `Status: ${selectedcommentObject.status}`;
  commenttype.innerHTML = `Type: ${selectedcommentObject.type}`;
  commentButton.addEventListener('click', async () => {
    if ( userNamecomment.value.trim() !== '' && userComment.value.trim() !== '') {
      const commentdata = {
        item_id: +commentbtnid,
        username:  userNamecomment.value.trim(),
        comment: userComment.value.trim(),
        
      };
      await (0,_modules_comment_commentPostAPI_js__WEBPACK_IMPORTED_MODULE_15__["default"])(commentdata);
      userNamecomment.value = '';
      userComment.value = '';
      (0,_modules_comment_commentDisplay_js__WEBPACK_IMPORTED_MODULE_16__["default"])(commentbtnid);
      (0,_modules_comment_commentCounter_js__WEBPACK_IMPORTED_MODULE_14__["default"])(commentbtnid, commentCount);
    } else {
      commentbtnid.preventDefault();
    }
  });
};

const closeCommentWindow = async () => {
  const commentClose = document.getElementById('commentclose');
  const comment = document.getElementById('comment');
  commentClose.addEventListener('click', () => {
    comment.style.display = 'none';
  });
};

bodyTag.addEventListener('click', async (e) => {
  const checkLikeBtn = e.target.classList.contains('like_btn');

  const isReserveContain = e.target.classList.contains('reserve_btn');
  const reservebtnid = e.target.id;
  const showData = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[0];
  const realityData = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[1];
  const animationData = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[2];
  const isCard1Active = homeSection1Tag.classList.contains('home_active');
  const isCard2Active = homeSection2Tag.classList.contains('home_active');
  const isCard3Active = homeSection3Tag.classList.contains('home_active');
  const isCommentContain = e.target.classList.contains('comment_btn');
  const commentbtnid = e.target.id;
  const showcommentData = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[0];
  const realitycommentData = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[1];
  const animationcommentData = (await (0,_api_getAllShows_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_config_js__WEBPACK_IMPORTED_MODULE_3__.getAllShowsURL))[2];
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
    if (isCard1Active) {
      const selectedObject = showData.data.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, selectedObject);
      await closeReservationWindow();
    }
    if (isCard2Active) {
      // eslint-disable-next-line max-len
      const selectedObject = realityData.realityGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, selectedObject);
      await closeReservationWindow();
    }
    if (isCard3Active) {
      // eslint-disable-next-line max-len
      const selectedObject = animationData.animationGenre.find((item) => item.id === Number(reservebtnid));
      await reservationModal(reservebtnid, selectedObject);
      await closeReservationWindow();
    }
  }

  if (isCommentContain){
    if(isCardActive1){
    const selectedcommentObject = showcommentData.data.find((item) => item.id === Number(commentbtnid));
    await commentModal(commentbtnid, selectedcommentObject);
    await closeCommentWindow();
    }
  

  if(isCardActive2){
 // eslint-disable-next-line max-len
 const selectedcommentObject =realitycommentData.realityGenre.find((item) => item.id === Number(commentbtnid));
 await commentModal(commentbtnid, selectedcommentObject);
 await closeCommentWindow();
  }
  if(isCardActive3){
    // eslint-disable-next-line max-len
    const selectedcommentObject =animationcommentData.animationGenre.find((item) => item.id === Number(commentbtnid));
    await commentModal(commentbtnid, selectedcommentObject);
    await closeCommentWindow();
     }
  }
});





















// import './css/home.css';
// import './css/commentStyle.css';
// import getAllShowsURL from './config.js';
// import getAllShows from './api/getAllShows.js';
// import displayHomeUI from './pageUI/displayHomeUI.js';
// import loveImg from './images/love.png';
// import commentUI from './pageUI/commentUI.js';
// import commentCounter from './modules/comment/commentCounter.js';
// import sendComment from './modules/comment/commentPostAPI.js';
// import displayComment from './modules/comment/commentDisplay.js';

// const bodyTag = document.querySelector('.home_body');

// const HomeUI = () => {
//   bodyTag.innerHTML = commentUI() + displayHomeUI();
// };

// HomeUI();

// const navTag = document.querySelector('.nav_list');
// const homeSection1Tag = document.querySelector('.home_section1');
// const homeSection2Tag = document.querySelector('.home_section2');
// const homeSection3Tag = document.querySelector('.home_section3');

// const activateClickedSpan = (par) => {
//   par.classList.add('home_active');
//   par.classList.remove('home_hidden');
// };

// const activateClickedSection = (par) => {
//   par.classList.add('home_active');
//   par.classList.remove('home_hidden');
// };

// const spanActiveRemove = () => {
//   const spanTags = document.querySelectorAll('.home_span');
//   spanTags.forEach((span) => {
//     span.classList.remove('home_active');
//     span.classList.add('home_hidden');
//   });
// };

// const sectionActiveRemove = () => {
//   const sectionTags = document.querySelectorAll('.grid_container');
//   sectionTags.forEach((section) => {
//     section.classList.remove('home_active');
//     section.classList.add('home_hidden');
//   });
// };

// const dynamicNav = async () => {
//   const data = (await getAllShows(getAllShowsURL));
//   let navtemp = '';
//   for (let i = 0; i < data.length; i += 1) {
//     navtemp
//       += `
// <li class="font2 nav_item tab_active" data-tab=${i + 1}>
// ${`${data[i].title} `}<span class="home_span ${i === 0 ? 'home_active' : ''} span${i + 1} span_active">(${data[i].total})</span>
// </li>`;
//   }
//   navTag.innerHTML = navtemp;
// };

// const homeCard1 = async () => {
//   const { data } = (await getAllShows(getAllShowsURL))[0];
//   let articletemp = '';
//   for (let i = 0; i < data.length; i += 1) {
//     articletemp
//       += `<article class="home_article" key=${data[i].id}> 
// <figure>
//  <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
// </figure>

// <div class="home_title">
//   <div>
//     <h3>${data[i].name}</h3>
//   </div>

//   <div>
//     <img id=${data[i].id} class="like_btn" src=${loveImg} alt="">
//     <p class="font4"><span class="count">5</span> likes </p>
//   </div>
// </div>

// <div class="home_buttons">
//   <button id=${data[i].id} class="comment_btn font3">Comments</button>
//   <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
// </div>
// </article>`;
//   }
//   homeSection1Tag.innerHTML = articletemp;
// };

// const homeCard2 = async () => {
//   const data = (await getAllShows(getAllShowsURL))[1].realityGenre;
//   let articletemp = '';
//   for (let i = 0; i < data.length; i += 1) {
//     articletemp
//       += `<article class="home_article" key=${data[i].id}> 
// <figure>
//    <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
// </figure>

// <div class="home_title">
//   <div>
//     <h3>${data[i].name}</h3>
//   </div>

//   <div>
//     <img id=${data[i].id} class="like_btn" src=${loveImg} alt="">
//     <p class="font4"><span class="count">5</span> likes </p>
//   </div>
// </div>

// <div class="home_buttons">
//   <button id=${data[i].id} class="comment_btn font3">Comments</button>
//   <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
// </div>
// </article>`;
//   }
//   homeSection2Tag.innerHTML = articletemp;
// };

// const homeCard3 = async () => {
//   const data = (await getAllShows(getAllShowsURL))[2].animationGenre;
//   let articletemp = '';
//   for (let i = 0; i < data.length; i += 1) {
//     articletemp
//       += `<article class="home_article" key=${data[i].id}> 
// <figure>
//   <img id=${data[i].id} class="imgz" src=${data[i].image.medium} alt="">
// </figure> 
// <div class="home_title">
//   <div>
//     <h3>${data[i].name}</h3>
//   </div> 
//   <div>
//     <img id=${data[i].id} class="like_btn" src=${loveImg} alt="">
//     <p class="font4"><span class="count">5</span> likes </p>
//   </div>
// </div> 
// <div class="home_buttons">
//   <button id=${data[i].id} class="comment_btn font3">Comments</button>
//   <button id=${data[i].id} class="reserve_btn font3">Reservations</button>
// </div>
// </article>`;
//   }
//   homeSection3Tag.innerHTML = articletemp;
// };

// const Tabselector = async () => {
//   navTag.addEventListener('click', async (e) => {
//     const clicked = e.target.closest('.nav_item');
//     const clickedSpan = document.querySelector(`.span${clicked.dataset.tab}`);
//     const clickedSection = document.querySelector(`.home_section${clicked.dataset.tab}`);
//     spanActiveRemove();
//     activateClickedSpan(clickedSpan);
//     sectionActiveRemove();
//     activateClickedSection(clickedSection);
//   });
// };
// window.addEventListener('load', async () => {
//   await dynamicNav();
//   await homeCard1();
//   await homeCard2();
//   await homeCard3();
//   await Tabselector();
// });

// added for comment modal
// const commentModal = async (commentbtnid, selectedcommentObject) => {
//   const commentCount = document.getElementById('commentcount');
//   const comment = document.getElementById('comment');
  
//   ///////////////////////////////////////////////////////////
//   const userNamecomment = document.getElementById('usernamecomment');
//   const userComment= document.getElementById('usercomment');
// /////////////////////////////////////////////////////////////
 
//   const commentButton = document.getElementById('commentbutton');
//   const commentPicture = document.getElementById('commentpicture');
//   const commentName = document.getElementById('commentname');
//   const commentLanguage = document.getElementById('commentlanguage');
//   const commentStatus = document.getElementById('commentstatus');
//   const commentAverageRuntime = document.getElementById('commentaverageRuntime');
//   const commenttype = document.getElementById('commenttype');
//   //const isCard1Active = homeSection1Tag.classList.contains('home_active');
//   //const isCard2Active = homeSection2Tag.classList.contains('home_active');
//   comment.style.display = 'block';
//   // fetch data from api
//   // count reservation
//   commentCounter(commentbtnid, commentCount);
//   // display reservation
//   displayComment(commentbtnid);
//   // reservation event handling
//   // update  information

//   commentPicture.src = selectedcommentObject.image.original;
//   commentName.innerHTML = selectedcommentObject.name;
//   commentLanguage.innerHTML = `Language: ${selectedcommentObject.language}`;
//   commentAverageRuntime.innerHTML = `AverageRuntime: ${selectedcommentObject.averageRuntime}`;
//   commentStatus.innerHTML = `Status: ${selectedcommentObject.status}`;
//   commenttype.innerHTML = `Type: ${selectedcommentObject.type}`;
//   // else if (isCard2Active) {
//   //   reservePicture.src = realityData.data[reservebtnid].image.medium;
//   //   reserveName.innerHTML = realityData.data[reservebtnid].name;
//   //   reserveLanguage.innerHTML = `Language: ${realityData.data[reservebtnid].language}`;
//   //   reserveAverageRuntime.innerHTML = `AverageRuntime: ${realityData.data[reservebtnid].averageRuntime}`;
//   //   reserveStatus.innerHTML = `Status: ${realityData.data[reservebtnid].status}`;
//   //   reservetype.innerHTML = `Type: ${realityData.data[reservebtnid].type}`;
//   // } else {
//   //   reservePicture.src = animationData.data[reservebtnid].image.medium;
//   //   reserveName.innerHTML = animationData.data[reservebtnid].name;
//   //   reserveLanguage.innerHTML = `Language: ${animationData.data[reservebtnid].language}`;
//   //   reserveAverageRuntime.innerHTML = `AverageRuntime: ${animationData.data[reservebtnid].averageRuntime}`;
//   //   reserveStatus.innerHTML = `Status: ${animationData.data[reservebtnid].status}`;
//   //   reservetype.innerHTML = `Type: ${animationData.data[reservebtnid].type}`;
//   // }

//   commentButton.addEventListener('click', async () => {
//     if ( userNamecomment.value.trim() !== '' && userComment.value.trim() !== '') {
//       const commentdata = {
//         item_id: +commentbtnid,
//         username:  userNamecomment.value.trim(),
//         comment: userComment.value.trim(),
        
//       };
//       await sendComment(commentdata);
//       userNamecomment.value = '';
//       userComment.value = '';
//       displayComment(commentbtnid);
//       commentCounter(commentbtnid, commentCount);
//     } else {
//       commentbtnid.preventDefault();
//     }
//   });
// };
  // close button for comment window
// const closeCommentWindow = async () => {
//   const commentClose = document.getElementById('commentclose');
//   const comment = document.getElementById('comment');
//   commentClose.addEventListener('click', () => {
//     comment.style.display = 'none';
//   });
// };

// bodyTag.addEventListener('click', async (e) => {
//   const isCommentContain = e.target.classList.contains('comment_btn');
//   const commentbtnid = e.target.id;
//   const showcommentData = (await getAllShows(getAllShowsURL))[0];
//   const realitycommentData = (await getAllShows(getAllShowsURL))[1];
//   const animationcommentData = (await getAllShows(getAllShowsURL))[2];
//   const isCardActive1 = homeSection1Tag.classList.contains('home_active');
//   const isCardActive2 = homeSection2Tag.classList.contains('home_active');
//   const isCardActive3 = homeSection3Tag.classList.contains('home_active');

//   if (isCommentContain){
//     if(isCardActive1){
//     const selectedcommentObject = showcommentData.data.find((item) => item.id === Number(commentbtnid));
//     await commentModal(commentbtnid, selectedcommentObject);
//     await closeCommentWindow();
//     }
  

//   if(isCardActive2){
//  // eslint-disable-next-line max-len
//  const selectedcommentObject =realitycommentData.realityGenre.find((item) => item.id === Number(commentbtnid));
//  await commentModal(commentbtnid, selectedcommentObject);
//  await closeCommentWindow();
//   }
//   if(isCardActive3){
//     // eslint-disable-next-line max-len
//     const selectedcommentObject =realitycommentData.realityGenre.find((item) => item.id === Number(commentbtnid));
//     await commentModal(commentbtnid, selectedcommentObject);
//     await closeCommentWindow();
//      }
//   }
// });

///////////////////// COMMENT ////////////////////////////////



/***/ }),

/***/ "./src/modules/comment/InvolvementAPI.js":
/*!***********************************************!*\
  !*** ./src/modules/comment/InvolvementAPI.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvolvementAPI": () => (/* binding */ InvolvementAPI),
/* harmony export */   "InvolvementID": () => (/* binding */ InvolvementID)
/* harmony export */ });
const InvolvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const InvolvementID = 'eOrcCP3sdE79tBRIZ6tU';



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
  if (res.length === undefined) {
    return false;
  }
  res.forEach((comment) => { 
    commentlist.innerHTML += `<li>
     ${comment.creation_date} - ${comment.username} - ${comment.comment}
   </li>`;
  });
  return res.length;
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
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/modules/comment/InvolvementAPI.js");


const getComment = async (id) => {
  try { 
    const res = await fetch(`${_InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementAPI + _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementID}/comments?item_id=${id}`); 
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
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/modules/comment/InvolvementAPI.js");


const sendComment = async (user_Comment) => {
  try {
    const res = await fetch(`${_InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementAPI + _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementID}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/Json',
        charset: 'utf-8',
      },
      body: JSON.stringify(user_Comment),
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

/***/ "./src/modules/reservation/InvolvementAPI.js":
/*!***************************************************!*\
  !*** ./src/modules/reservation/InvolvementAPI.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvolvementAPI": () => (/* binding */ InvolvementAPI),
/* harmony export */   "InvolvementID": () => (/* binding */ InvolvementID)
/* harmony export */ });
const InvolvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const InvolvementID = 'eOrcCP3sdE79tBRIZ6tU';



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
  if (res.length === undefined) {
    return false;
  }
  res.forEach((reserve) => {
    reservedate.innerHTML += `<li>
     ${reserve.date_start} - ${reserve.date_end} - ${reserve.username}
   </li>`;
  });
  return res.length;
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
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/modules/reservation/InvolvementAPI.js");


const getReservation = async (id) => {
  try {
    const res = await fetch(`${_InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementAPI + _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementID}/reservations?item_id=${id}`);
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
/* harmony import */ var _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementAPI.js */ "./src/modules/reservation/InvolvementAPI.js");


const sendReservation = async (userReservation) => {
  try {
    const res = await fetch(`${_InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementAPI + _InvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.InvolvementID}/reservations/`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGdCQUFnQixpQkFBaUIsNkJBQTZCLDZDQUE2QyxLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLHNCQUFzQixpQkFBaUIsOEJBQThCLHNCQUFzQixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixLQUFLLDZCQUE2QixvQkFBb0IsMEJBQTBCLGtCQUFrQixLQUFLLHVCQUF1QixvQkFBb0IsdUJBQXVCLG1CQUFtQixLQUFLLDZCQUE2QixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw2QkFBNkIsS0FBSyxzQ0FBc0MsNkJBQTZCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLHVCQUF1QixpQkFBaUIsd0JBQXdCLEtBQUssaUNBQWlDLHdCQUF3Qiw4QkFBOEIseUJBQXlCLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDhCQUE4QixLQUFLLDRCQUE0QixvQkFBb0IscUNBQXFDLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDhCQUE4QixLQUFLLDZCQUE2QixzQkFBc0IsOEJBQThCLHlCQUF5QixLQUFLLHNCQUFzQix1QkFBdUIsMEJBQTBCLEtBQUsscUJBQXFCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssMEJBQTBCLHNCQUFzQiw4QkFBOEIseUJBQXlCLEtBQUssNkJBQTZCLGlCQUFpQiwrQkFBK0IsOEJBQThCLEtBQUssZ0NBQWdDLGlCQUFpQixvQkFBb0IsK0JBQStCLDhCQUE4QixLQUFLLDBDQUEwQyx1QkFBdUIsd0JBQXdCLEtBQUssNkNBQTZDLHVCQUF1Qix3QkFBd0IsS0FBSyw4QkFBOEIsaUJBQWlCLCtCQUErQiw4QkFBOEIsc0JBQXNCLHVCQUF1QixLQUFLLCtFQUErRSx3QkFBd0IseUJBQXlCLDBCQUEwQixvQkFBb0IscUNBQXFDLEtBQUssV0FBVywyRkFBMkYsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksNkJBQTZCLGdCQUFnQixpQkFBaUIsNkJBQTZCLDZDQUE2QyxLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLHNCQUFzQixpQkFBaUIsOEJBQThCLHNCQUFzQixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixLQUFLLDZCQUE2QixvQkFBb0IsMEJBQTBCLGtCQUFrQixLQUFLLHVCQUF1QixvQkFBb0IsdUJBQXVCLG1CQUFtQixLQUFLLDZCQUE2QixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw2QkFBNkIsS0FBSyxzQ0FBc0MsNkJBQTZCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLHVCQUF1QixpQkFBaUIsd0JBQXdCLEtBQUssaUNBQWlDLHdCQUF3Qiw4QkFBOEIseUJBQXlCLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDhCQUE4QixLQUFLLDRCQUE0QixvQkFBb0IscUNBQXFDLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDhCQUE4QixLQUFLLDZCQUE2QixzQkFBc0IsOEJBQThCLHlCQUF5QixLQUFLLHNCQUFzQix1QkFBdUIsMEJBQTBCLEtBQUsscUJBQXFCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssMEJBQTBCLHNCQUFzQiw4QkFBOEIseUJBQXlCLEtBQUssNkJBQTZCLGlCQUFpQiwrQkFBK0IsOEJBQThCLEtBQUssZ0NBQWdDLGlCQUFpQixvQkFBb0IsK0JBQStCLDhCQUE4QixLQUFLLDBDQUEwQyx1QkFBdUIsd0JBQXdCLEtBQUssNkNBQTZDLHVCQUF1Qix3QkFBd0IsS0FBSyw4QkFBOEIsaUJBQWlCLCtCQUErQiw4QkFBOEIsc0JBQXNCLHVCQUF1QixLQUFLLCtFQUErRSx3QkFBd0IseUJBQXlCLDBCQUEwQixvQkFBb0IscUNBQXFDLEtBQUssdUJBQXVCO0FBQzFtTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsMkNBQTJDLEtBQUssc0JBQXNCLGlCQUFpQixtQkFBbUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSywwQkFBMEIsdUJBQXVCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLGlCQUFpQixLQUFLLHlCQUF5QixxQkFBcUIsK0NBQStDLEtBQUssZUFBZSx5QkFBeUIsMEJBQTBCLDhCQUE4QixLQUFLLGtCQUFrQix5QkFBeUIsS0FBSyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsS0FBSyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixtQkFBbUIsS0FBSyx5QkFBeUIsaUJBQWlCLG1CQUFtQixvQkFBb0IsNENBQTRDLGdCQUFnQixLQUFLLDhCQUE4QixrQkFBa0IsS0FBSyxlQUFlLG1CQUFtQix3QkFBd0IsOEJBQThCLGtCQUFrQixLQUFLLHFCQUFxQixvQkFBb0IscUNBQXFDLHNCQUFzQixLQUFLLHVCQUF1QixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLG9DQUFvQyxpQkFBaUIsbUJBQW1CLHNCQUFzQiwrQkFBK0IsS0FBSyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixzQkFBc0IsK0JBQStCLEtBQUssc0JBQXNCLGlCQUFpQixtQkFBbUIsdUJBQXVCLGtDQUFrQyxzQkFBc0IsS0FBSyxzQkFBc0IsMEJBQTBCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLHFCQUFxQixvQkFBb0IsbUJBQW1CLDZCQUE2Qiw4QkFBOEIseUJBQXlCLEtBQUssa0JBQWtCLDRCQUE0QixtQkFBbUIsS0FBSyxtREFBbUQsb0JBQW9CLG1CQUFtQixxQkFBcUIsc0JBQXNCLCtCQUErQixrQkFBa0IsT0FBTyw0QkFBNEIseUJBQXlCLHNCQUFzQixzQ0FBc0Msa0JBQWtCLDRCQUE0QixPQUFPLDJCQUEyQixtQkFBbUIscUJBQXFCLHNCQUFzQiw4Q0FBOEMsa0JBQWtCLE9BQU8sS0FBSyxXQUFXLG1GQUFtRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssNEJBQTRCLGdCQUFnQixpQkFBaUIsNkJBQTZCLDJDQUEyQyxLQUFLLHNCQUFzQixpQkFBaUIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssMEJBQTBCLHVCQUF1QixvQkFBb0Isb0NBQW9DLDBCQUEwQixpQkFBaUIsS0FBSyx5QkFBeUIscUJBQXFCLCtDQUErQyxLQUFLLGVBQWUseUJBQXlCLDBCQUEwQiw4QkFBOEIsS0FBSyxrQkFBa0IseUJBQXlCLEtBQUssZ0JBQWdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUsseUJBQXlCLGlCQUFpQixtQkFBbUIsb0JBQW9CLDRDQUE0QyxnQkFBZ0IsS0FBSyw4QkFBOEIsa0JBQWtCLEtBQUssZUFBZSxtQkFBbUIsd0JBQXdCLDhCQUE4QixrQkFBa0IsS0FBSyxxQkFBcUIsb0JBQW9CLHFDQUFxQyxzQkFBc0IsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyxvQ0FBb0MsaUJBQWlCLG1CQUFtQixzQkFBc0IsK0JBQStCLEtBQUssb0NBQW9DLGtCQUFrQixtQkFBbUIsc0JBQXNCLCtCQUErQixLQUFLLHNCQUFzQixpQkFBaUIsbUJBQW1CLHVCQUF1QixrQ0FBa0Msc0JBQXNCLEtBQUssc0JBQXNCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IsS0FBSyxxQkFBcUIsb0JBQW9CLG1CQUFtQiw2QkFBNkIsOEJBQThCLHlCQUF5QixLQUFLLGtCQUFrQiw0QkFBNEIsbUJBQW1CLEtBQUssbURBQW1ELG9CQUFvQixtQkFBbUIscUJBQXFCLHNCQUFzQiwrQkFBK0Isa0JBQWtCLE9BQU8sNEJBQTRCLHlCQUF5QixzQkFBc0Isc0NBQXNDLGtCQUFrQiw0QkFBNEIsT0FBTywyQkFBMkIsbUJBQW1CLHFCQUFxQixzQkFBc0IsOENBQThDLGtCQUFrQixPQUFPLEtBQUssdUJBQXVCO0FBQ2g3TjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsNkNBQTZDLEtBQUssc0JBQXNCLG9CQUFvQiw2QkFBNkIsc0JBQXNCLGlCQUFpQiw4QkFBOEIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLDhCQUE4Qix1QkFBdUIseUJBQXlCLEtBQUssNkJBQTZCLG9CQUFvQiwwQkFBMEIsa0JBQWtCLEtBQUssdUJBQXVCLG9CQUFvQix1QkFBdUIsbUJBQW1CLEtBQUssNkJBQTZCLGtCQUFrQixzQkFBc0IsdUJBQXVCLDZCQUE2QixLQUFLLHNDQUFzQyw2QkFBNkIsd0JBQXdCLDBCQUEwQixtQkFBbUIsdUJBQXVCLGlCQUFpQix3QkFBd0IsS0FBSyxpQ0FBaUMsd0JBQXdCLDhCQUE4Qix5QkFBeUIsS0FBSyw0QkFBNEIsb0JBQW9CLDZCQUE2QixrQkFBa0IsOEJBQThCLEtBQUssNEJBQTRCLG9CQUFvQixxQ0FBcUMsdUJBQXVCLHVCQUF1Qix1QkFBdUIsS0FBSyw0QkFBNEIsb0JBQW9CLDZCQUE2QixrQkFBa0IsOEJBQThCLEtBQUssaUNBQWlDLHNCQUFzQiw4QkFBOEIseUJBQXlCLEtBQUssc0JBQXNCLHVCQUF1QiwwQkFBMEIsS0FBSyx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsS0FBSyw4QkFBOEIsc0JBQXNCLDhCQUE4Qix5QkFBeUIsS0FBSyxpQ0FBaUMsaUJBQWlCLCtCQUErQiw4QkFBOEIsS0FBSyw4Q0FBOEMsdUJBQXVCLHdCQUF3QixLQUFLLGtDQUFrQyxpQkFBaUIsK0JBQStCLDhCQUE4QixzQkFBc0IsdUJBQXVCLEtBQUssK0VBQStFLHdCQUF3Qix5QkFBeUIsMEJBQTBCLG9CQUFvQixxQ0FBcUMsS0FBSyxXQUFXLCtGQUErRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksNkJBQTZCLGdCQUFnQixpQkFBaUIsNkJBQTZCLDZDQUE2QyxLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLHNCQUFzQixpQkFBaUIsOEJBQThCLHNCQUFzQixvQkFBb0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIsdUJBQXVCLHlCQUF5QixLQUFLLDZCQUE2QixvQkFBb0IsMEJBQTBCLGtCQUFrQixLQUFLLHVCQUF1QixvQkFBb0IsdUJBQXVCLG1CQUFtQixLQUFLLDZCQUE2QixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw2QkFBNkIsS0FBSyxzQ0FBc0MsNkJBQTZCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLHVCQUF1QixpQkFBaUIsd0JBQXdCLEtBQUssaUNBQWlDLHdCQUF3Qiw4QkFBOEIseUJBQXlCLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDhCQUE4QixLQUFLLDRCQUE0QixvQkFBb0IscUNBQXFDLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEtBQUssNEJBQTRCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLDhCQUE4QixLQUFLLGlDQUFpQyxzQkFBc0IsOEJBQThCLHlCQUF5QixLQUFLLHNCQUFzQix1QkFBdUIsMEJBQTBCLEtBQUsseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssOEJBQThCLHNCQUFzQiw4QkFBOEIseUJBQXlCLEtBQUssaUNBQWlDLGlCQUFpQiwrQkFBK0IsOEJBQThCLEtBQUssOENBQThDLHVCQUF1Qix3QkFBd0IsS0FBSyxrQ0FBa0MsaUJBQWlCLCtCQUErQiw4QkFBOEIsc0JBQXNCLHVCQUF1QixLQUFLLCtFQUErRSx3QkFBd0IseUJBQXlCLDBCQUEwQixvQkFBb0IscUNBQXFDLEtBQUssdUJBQXVCO0FBQ2hvTTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNkc7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2RkFBTzs7OztBQUl1RDtBQUMvRSxPQUFPLGlFQUFlLDZGQUFPLElBQUksb0dBQWMsR0FBRyxvR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFxRztBQUNyRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSStDO0FBQ3ZFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlIO0FBQ2pIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsaUdBQU87Ozs7QUFJMkQ7QUFDbkYsT0FBTyxpRUFBZSxpR0FBTyxJQUFJLHdHQUFjLEdBQUcsd0dBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHNEQUFjLENBQUMsRUFBRSw2Q0FBSyxDQUFDO0FBQ2hFLGlFQUFpRSxjQUFjO0FBQy9FO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ2IxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsY0FBYztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUNBQXlDLElBQUksc0RBQXNELElBQUksNERBQTREO0FBQ25MLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkIwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQWMsR0FBRyw2Q0FBSyxDQUFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLGlFQUFpRSxjQUFjO0FBQy9FO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEIzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p3QjtBQUNZO0FBQ0o7QUFDYTtBQUNFO0FBQ087QUFDZDtBQUNPO0FBQ0U7QUFDSztBQUN1QjtBQUNIO0FBQ0c7QUFDL0I7QUFDbUI7QUFDSDtBQUNHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0VBQWEsS0FBSyxpRUFBUyxLQUFLLG9FQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQVcsQ0FBQyxzREFBYztBQUNoRDtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLGlEQUFpRCxNQUFNO0FBQ3ZELEVBQUUsR0FBRyxlQUFlLEVBQUUseUJBQXlCLDhCQUE4QixNQUFNLE9BQU8sZ0JBQWdCLGNBQWM7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPLFNBQVMsK0RBQVcsQ0FBQyxzREFBYztBQUNwRCx5QkFBeUIsK0RBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0EsOENBQThDLFdBQVc7QUFDekQ7QUFDQSxXQUFXLFlBQVksbUJBQW1CLHNCQUFzQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWSxLQUFLLFlBQVksdUJBQXVCLDZDQUFPLEVBQUU7QUFDL0UsNkNBQTZDLFdBQVcsYUFBYSxXQUFXLEdBQUcsZ0NBQWdDLFVBQVUsc0NBQXNDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrREFBVyxDQUFDLHNEQUFjO0FBQ2hELHlCQUF5QiwrREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQSw4Q0FBOEMsV0FBVztBQUN6RDtBQUNBLGFBQWEsWUFBWSxtQkFBbUIsc0JBQXNCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZLEtBQUssWUFBWSx1QkFBdUIsNkNBQU8sRUFBRTtBQUMvRSw2Q0FBNkMsV0FBVyxhQUFhLFdBQVcsR0FBRyxnQ0FBZ0MsVUFBVSxzQ0FBc0M7QUFDbks7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtEQUFXLENBQUMsc0RBQWM7QUFDaEQseUJBQXlCLCtEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0EsWUFBWSxZQUFZLG1CQUFtQixzQkFBc0I7QUFDakU7QUFDQTtBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWSxLQUFLLFlBQVksdUJBQXVCLDZDQUFPLEVBQUU7QUFDL0UsNkNBQTZDLFdBQVcsYUFBYSxXQUFXLEdBQUcsZ0NBQWdDLFVBQVUsc0NBQXNDO0FBQ25LO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELG9CQUFvQjtBQUMzRSxrRUFBa0Usb0JBQW9CO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFXO0FBQ25CO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQWtCO0FBQ3BCO0FBQ0EsRUFBRSx1RkFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx3QkFBd0I7QUFDbkUsdURBQXVELDhCQUE4QjtBQUNyRix1Q0FBdUMsc0JBQXNCO0FBQzdELG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUZBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1RkFBa0I7QUFDeEIsTUFBTSx1RkFBa0I7QUFDeEIsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsb0JBQW9CO0FBQ3pFLGdFQUFnRSxvQkFBb0I7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsZ0VBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtEQUFXO0FBQ3JDO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtFQUFjO0FBQ2hCO0FBQ0EsRUFBRSwrRUFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtCQUErQjtBQUMxRSx1REFBdUQscUNBQXFDO0FBQzVGLHVDQUF1Qyw2QkFBNkI7QUFDcEUsbUNBQW1DLDJCQUEyQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrRUFBVztBQUN2QjtBQUNBO0FBQ0EsTUFBTSwrRUFBYztBQUNwQixNQUFNLCtFQUFjO0FBQ3BCLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtEQUFXLENBQUMsc0RBQWM7QUFDcEQsNkJBQTZCLCtEQUFXLENBQUMsc0RBQWM7QUFDdkQsK0JBQStCLCtEQUFXLENBQUMsc0RBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrREFBVyxDQUFDLHNEQUFjO0FBQzNELG9DQUFvQywrREFBVyxDQUFDLHNEQUFjO0FBQzlELHNDQUFzQywrREFBVyxDQUFDLHNEQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsR0FBRztBQUN2RCx1QkFBdUI7QUFDdkI7QUFDQSxVQUFVLCtEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFELEtBQUssR0FBRyxlQUFlLEVBQUUseUJBQXlCLDhCQUE4QixNQUFNLE9BQU8sZ0JBQWdCLGNBQWM7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsY0FBYyxZQUFZLG1CQUFtQixzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVksdUJBQXVCLFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGdCQUFnQixZQUFZLG1CQUFtQixzQkFBc0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVksdUJBQXVCLFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGVBQWUsWUFBWSxtQkFBbUIsc0JBQXNCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLFlBQVksdUJBQXVCLFNBQVM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsb0JBQW9CO0FBQzlFLHFFQUFxRSxvQkFBb0I7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0JBQStCO0FBQzdFLDBEQUEwRCxxQ0FBcUM7QUFDL0YsMENBQTBDLDZCQUE2QjtBQUN2RSxzQ0FBc0MsMkJBQTJCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3Q0FBd0M7QUFDM0YsK0RBQStELDhDQUE4QztBQUM3RywrQ0FBK0Msc0NBQXNDO0FBQ3JGLDJDQUEyQyxvQ0FBb0M7QUFDL0UsVUFBVTtBQUNWO0FBQ0E7QUFDQSxtREFBbUQsMENBQTBDO0FBQzdGLCtEQUErRCxnREFBZ0Q7QUFDL0csK0NBQStDLHdDQUF3QztBQUN2RiwyQ0FBMkMsc0NBQXNDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwdEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y0QztBQUM1QztBQUNBO0FBQ0EscUJBQXFCLDZEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUM1QztBQUNBO0FBQ0Esb0JBQW9CLDZEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1QkFBdUIsSUFBSSxrQkFBa0IsSUFBSTtBQUN4RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNqQnVDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4REFBYyxHQUFHLDZEQUFhLENBQUMsb0JBQW9CLEdBQUc7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhEQUFjLEdBQUcsNkRBQWEsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDdEIxQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGb0Q7QUFDcEQ7QUFDQTtBQUNBLHFCQUFxQixpRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNabUI7QUFDcEQ7QUFDQTtBQUNBLG9CQUFvQixpRUFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0JBQW9CLElBQUksa0JBQWtCLElBQUk7QUFDckQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNqQm1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4REFBYyxHQUFHLDZEQUFhLENBQUMsd0JBQXdCLEdBQUc7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNkdUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhEQUFjLEdBQUcsNkRBQWEsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN0QjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQSxxREFBcUQsK0NBQVUsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsK0NBQVUsRUFBRTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsK0NBQVUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNwQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2Nzcy9jb21tZW50U3R5bGUuY3NzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9jc3MvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2Nzcy9yZXNlcnZhdGlvblN0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9jc3MvY29tbWVudFN0eWxlLmNzcz8xMjA4Iiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9jc3MvaG9tZS5jc3M/MDg0NSIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvY3NzL3Jlc2VydmF0aW9uU3R5bGUuY3NzPzk0NWUiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvYXBpL2dldEFsbExpa2VzLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9hcGkvZ2V0QWxsU2hvd3MuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2FwaS9wb3N0QWxsTGlrZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL21vZHVsZXMvY29tbWVudC9JbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9jb21tZW50L2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnQvY29tbWVudERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL21vZHVsZXMvY29tbWVudC9jb21tZW50R2V0QVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnQvY29tbWVudFBvc3RBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb24vSW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25Db3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkdldEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZTIvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvblBvc3RBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL3BhZ2VVSS9jb21tZW50VUkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUyLy4vc3JjL3BhZ2VVSS9kaXNwbGF5SG9tZVVJLmpzIiwid2VicGFjazovL2NhcHN0b25lMi8uL3NyYy9wYWdlVUkvcmVzZXJ2YXRpb25VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGltYWdlaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aW1hZ2UgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM3LjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogNi4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRpbWFnZWhvbGRlciA+IGJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAtMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRuYW1laG9sZGVyID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRuYW1laG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRuYW1lZGV0YWlsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY29sdW1uLWdhcDogLTVweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRsaXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGlucHV0IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbW1lbnQgPiB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbW1lbnQgPiBidXR0b24ge1xcclxcbiAgd2lkdGg6IDQ1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdXNlZCBvbmx5IHRvIGNoZWNrIHdoaWNoIGJ1dHRvbiB3aGVyZSBmaXJlZCAqL1xcclxcbi5idXR0b25jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMzAwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDAwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb21tZW50U3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50aW1hZ2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRpbWFnZSA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGltYWdlaG9sZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudG5hbWVob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudG5hbWVob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudG5hbWVkZXRhaWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGhvbGRlciA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudGxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gaW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRjb21tZW50ID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGNvbW1lbnQgPiB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkY29tbWVudCA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1c2VkIG9ubHkgdG8gY2hlY2sgd2hpY2ggYnV0dG9uIHdoZXJlIGZpcmVkICovXFxyXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9oZWFkZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9oZWFkZXIgbmF2IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdl9pdGVtOmhvdmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJweCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig3OCwgNzYsIDc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgcGFkZGluZzogMThweCAyNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb250MSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udDIge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb250NCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udDUge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYXJ0aWNsZSBmaWd1cmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbWd6IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYnV0dG9ucyAuY29tbWVudF9idG4ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYnV0dG9ucyAucmVzZXJ2ZV9idG4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4ICM4ODg7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2Zvb3RlciB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfYWN0aXZlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2hpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViaWNvbiB7XFxyXFxuICB3aWR0aDogMS4ycmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAtMTJweCAzcHggLTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXHJcXG4gIC5ob21lX2hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMzBweCAwIDYwcHggMDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhvbWVfaGVhZGVyIG5hdiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ3JpZF9jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdhcDogODBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2hlYWRlciB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMCA2MHB4IDA7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lX2hlYWRlciBuYXYge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2X2l0ZW06aG92ZXIge1xcclxcbiAgcGFkZGluZzogMnB4IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDc4LCA3NiwgNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBwYWRkaW5nOiAxOHB4IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb250MiB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udDMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQ0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb250NSB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9hcnRpY2xlIGZpZ3VyZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ3oge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV90aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9idXR0b25zIC5jb21tZW50X2J0biB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9idXR0b25zIC5yZXNlcnZlX2J0biB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZzogNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZV9hY3RpdmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVfaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naXRodWJpY29uIHtcXHJcXG4gIHdpZHRoOiAxLjJyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IC0xMnB4IDNweCAtNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcbiAgLmhvbWVfaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDAgNjBweCAwO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaG9tZV9oZWFkZXIgbmF2IHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ncmlkX2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgZ2FwOiA4MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlaW1hZ2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZWltYWdlaG9sZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVkZXRhaWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlZGF0ZSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzZXJ2YXRpb24gPiBpbnB1dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1c2VkIG9ubHkgdG8gY2hlY2sgd2hpY2ggYnV0dG9uIHdoZXJlIGZpcmVkICovXFxyXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2VydmF0aW9uU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0RBQWdEO0FBQ2hEO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlaW1hZ2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVpbWFnZSA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzcuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZWltYWdlaG9sZGVyID4gYnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIgPiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZW5hbWVkZXRhaWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2x1bW4tZ2FwOiAtNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVkYXRlaG9sZGVyID4gaDIge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlZGF0ZSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc2VydmF0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzZXJ2YXRpb24gPiBpbnB1dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNlcnZhdGlvbiA+IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1c2VkIG9ubHkgdG8gY2hlY2sgd2hpY2ggYnV0dG9uIHdoZXJlIGZpcmVkICovXFxyXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50U3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21tZW50U3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvblN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb25TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaW52b2x2ZW1lbnRBUEksIGFwaUlEIH0gZnJvbSAnLi4vY29uZmlnLmpzJztcclxuXHJcbmNvbnN0IGdldEFsbExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRBUEl9JHthcGlJRH0vbGlrZXNgKSk7XHJcbiAgICBpZiAoIXJlc3VsdC5vaykgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBmZXRjaGluZyBpdGVtIGRhdGE6ICR7cmVzdWx0LnN0YXR1c31gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbExpa2VzOyIsIi8qIGVzbGludC1kaXNhYmxlICovXHJcbiBcclxuY29uc3QgZ2V0QWxsU2hvd3MgPSBhc3luYyAoYmFzZVVSTCkgPT4ge1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChiYXNlVVJMKTtcclxuICAgIGlmICghcmVzdWx0Lm9rKSB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGl0ZW0gZGF0YTogJHtyZXN1bHQuc3RhdHVzfWApOyBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgIGNvbnN0IGRhdGFsZW5ndGggPSBkYXRhLmxlbmd0aDtcclxuICAgICAgY29uc3QgcmVhbGl0eUdlbnJlID0gZGF0YS5maWx0ZXIoKHNob3cpID0+IHNob3cudHlwZSA9PT0gJ1JlYWxpdHknKTtcclxuICAgICAgY29uc3QgcmVhbGl0eUxlbmd0aCA9IHJlYWxpdHlHZW5yZS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkdlbnJlID0gZGF0YS5maWx0ZXIoKHNob3cpID0+IHNob3cudHlwZSA9PT0gJ0FuaW1hdGlvbicpO1xyXG4gICAgICBjb25zdCBhbmltYXRpb25MZW5ndGggPSBhbmltYXRpb25HZW5yZS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBbeyB0aXRsZTogJ1Nob3dzJywgZGF0YSwgdG90YWw6IGRhdGFsZW5ndGggfSwgeyB0aXRsZTogJ1JlYWxpdHknLCByZWFsaXR5R2VucmUsIHRvdGFsOiByZWFsaXR5TGVuZ3RoIH0sIHsgdGl0bGU6ICdBbmltYXRpb24nLCBhbmltYXRpb25HZW5yZSwgdG90YWw6IGFuaW1hdGlvbkxlbmd0aCB9XTsgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFsbFNob3dzOyAiLCJpbXBvcnQgeyBpbnZvbHZlbWVudEFQSSwgYXBpSUQgfSBmcm9tICcuLi9jb25maWcuanMnO1xyXG5cclxuY29uc3QgcG9zdEFsbExpa2VzID0gYXN5bmMgKHBhcikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtpbnZvbHZlbWVudEFQSSArIGFwaUlEfS9saWtlcy9gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9Kc29uJyxcclxuICAgICAgICBjaGFyc2V0OiAndXRmLTgnLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXIpLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlc3VsdC5vaykgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBmZXRjaGluZyBpdGVtIGRhdGE6ICR7cmVzdWx0LnN0YXR1c31gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0QWxsTGlrZXM7IiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuY29uc3QgZ2V0QWxsU2hvd3NVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XHJcbmNvbnN0IGFwaUlEID0gJ0FjUndhUnVzZ1V6QUtiYnVKQlVxJztcclxuY29uc3QgaW52b2x2ZW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuXHJcbmV4cG9ydCB7IGdldEFsbFNob3dzVVJMLCBpbnZvbHZlbWVudEFQSSwgYXBpSUQgfTsiLCJpbXBvcnQgJy4vY3NzL2hvbWUuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9yZXNlcnZhdGlvblN0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvY29tbWVudFN0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGdldEFsbFNob3dzVVJMIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5pbXBvcnQgZ2V0QWxsU2hvd3MgZnJvbSAnLi9hcGkvZ2V0QWxsU2hvd3MuanMnO1xyXG5pbXBvcnQgZGlzcGxheUhvbWVVSSBmcm9tICcuL3BhZ2VVSS9kaXNwbGF5SG9tZVVJLmpzJztcclxuaW1wb3J0IGxvdmVJbWcgZnJvbSAnLi9pbWFnZXMvbG92ZS5wbmcnO1xyXG5pbXBvcnQgZ2V0QWxsTGlrZXMgZnJvbSAnLi9hcGkvZ2V0QWxsTGlrZXMuanMnO1xyXG5pbXBvcnQgcG9zdEFsbExpa2VzIGZyb20gJy4vYXBpL3Bvc3RBbGxMaWtlcy5qcyc7XHJcbmltcG9ydCByZXNlcnZhdGlvblVJIGZyb20gJy4vcGFnZVVJL3Jlc2VydmF0aW9uVUkuanMnO1xyXG5pbXBvcnQgcmVzZXJ2YXRpb25Db3VudGVyIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkNvdW50ZXIuanMnO1xyXG5pbXBvcnQgc2VuZFJlc2VydmF0aW9uIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvblBvc3RBUEkuanMnO1xyXG5pbXBvcnQgZGlzcGxheVJlc2VydmF0aW9uIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkRpc3BsYXkuanMnO1xyXG5pbXBvcnQgY29tbWVudFVJIGZyb20gJy4vcGFnZVVJL2NvbW1lbnRVSS5qcyc7IFxyXG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudENvdW50ZXIuanMnO1xyXG5pbXBvcnQgc2VuZENvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudFBvc3RBUEkuanMnO1xyXG5pbXBvcnQgZGlzcGxheUNvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudERpc3BsYXkuanMnO1xyXG5cclxuY29uc3QgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2JvZHknKTtcclxuXHJcbmNvbnN0IEhvbWVVSSA9ICgpID0+IHtcclxuICBib2R5VGFnLmlubmVySFRNTCA9ICcnO1xyXG4gIGJvZHlUYWcuaW5uZXJIVE1MID0gcmVzZXJ2YXRpb25VSSgpICsgY29tbWVudFVJKCkgKyBkaXNwbGF5SG9tZVVJKCk7XHJcbn07XHJcblxyXG5Ib21lVUkoKTtcclxuXHJcbmNvbnN0IG5hdlRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfbGlzdCcpO1xyXG5jb25zdCBob21lU2VjdGlvbjFUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9zZWN0aW9uMScpO1xyXG5jb25zdCBob21lU2VjdGlvbjJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9zZWN0aW9uMicpO1xyXG5jb25zdCBob21lU2VjdGlvbjNUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9zZWN0aW9uMycpO1xyXG5cclxuY29uc3QgYWN0aXZhdGVDbGlja2VkU3BhbiA9IChwYXIpID0+IHtcclxuICBwYXIuY2xhc3NMaXN0LmFkZCgnaG9tZV9hY3RpdmUnKTtcclxuICBwYXIuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZV9oaWRkZW4nKTtcclxufTtcclxuXHJcbmNvbnN0IGFjdGl2YXRlQ2xpY2tlZFNlY3Rpb24gPSAocGFyKSA9PiB7XHJcbiAgcGFyLmNsYXNzTGlzdC5hZGQoJ2hvbWVfYWN0aXZlJyk7XHJcbiAgcGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWVfaGlkZGVuJyk7XHJcbn07XHJcblxyXG5jb25zdCBzcGFuQWN0aXZlUmVtb3ZlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNwYW5UYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfc3BhbicpO1xyXG4gIHNwYW5UYWdzLmZvckVhY2goKHNwYW4pID0+IHtcclxuICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZV9hY3RpdmUnKTtcclxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaG9tZV9oaWRkZW4nKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb25BY3RpdmVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvblRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZF9jb250YWluZXInKTtcclxuICBzZWN0aW9uVGFncy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWVfYWN0aXZlJyk7XHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWVfaGlkZGVuJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkeW5hbWljTmF2ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKTtcclxuICBsZXQgbmF2dGVtcCA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgbmF2dGVtcFxyXG4gICAgICArPSBgXHJcbjxsaSBjbGFzcz1cImZvbnQyIG5hdl9pdGVtIHRhYl9hY3RpdmVcIiBkYXRhLXRhYj0ke2kgKyAxfT5cclxuJHtgJHtkYXRhW2ldLnRpdGxlfSBgfTxzcGFuIGNsYXNzPVwiaG9tZV9zcGFuICR7aSA9PT0gMCA/ICdob21lX2FjdGl2ZScgOiAnJ30gc3BhbiR7aSArIDF9IHNwYW5fYWN0aXZlXCI+KCR7ZGF0YVtpXS50b3RhbH0pPC9zcGFuPlxyXG48L2xpPmA7XHJcbiAgfVxyXG4gIG5hdlRhZy5pbm5lckhUTUwgPSBuYXZ0ZW1wO1xyXG59O1xyXG5cclxuY29uc3QgaG9tZUNhcmQxID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSlbMF07XHJcbiAgY29uc3QgbGlrZURhdGEgPSBhd2FpdCBnZXRBbGxMaWtlcygpO1xyXG4gIGRhdGEuZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgbGlrZURhdGEuZm9yRWFjaCgoeSkgPT4ge1xyXG4gICAgICBpZiAocGFyc2VGbG9hdCh5Lml0ZW1faWQpID09PSB4LmlkKSB7XHJcbiAgICAgICAgeC5saWtlID0geS5saWtlcztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgbGV0IGFydGljbGV0ZW1wID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBhcnRpY2xldGVtcFxyXG4gICAgICArPSBgPGFydGljbGUgY2xhc3M9XCJob21lX2FydGljbGVcIiBrZXk9JHtkYXRhW2ldLmlkfT4gXHJcbjxmaWd1cmU+XHJcbiA8aW1nIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJpbWd6XCIgc3JjPSR7ZGF0YVtpXS5pbWFnZS5tZWRpdW19IGFsdD1cIlwiPlxyXG48L2ZpZ3VyZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJob21lX3RpdGxlXCI+XHJcbiAgPGRpdj5cclxuICAgIDxoMz4ke2RhdGFbaV0ubmFtZX08L2gzPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2PlxyXG4gIDxpbWcgZGF0YS10YWI9JHtkYXRhW2ldLmlkfSBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwibGlrZV9idG5cIiBzcmM9JHtsb3ZlSW1nfSBhbHQ9XCJcIj5cclxuICA8cCBjbGFzcz1cImZvbnQ0XCI+PHNwYW4gY2xhc3M9XCJjb3VudCBjb3VudCR7ZGF0YVtpXS5pZH1cIiBkYXRhLXRhYj0ke2RhdGFbaV0uaWR9PiR7ZGF0YVtpXS5saWtlID8gZGF0YVtpXS5saWtlIDogMH08L3NwYW4+ICR7ZGF0YVtpXS5saWtlIDw9IDEgPyAnbGlrZScgOiAnbGlrZXMnfSA8L3A+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJob21lX2J1dHRvbnNcIj5cclxuICA8YnV0dG9uIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJjb21tZW50X2J0biBmb250M1wiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwicmVzZXJ2ZV9idG4gZm9udDNcIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjwvYXJ0aWNsZT5gO1xyXG4gIH1cclxuICBob21lU2VjdGlvbjFUYWcuaW5uZXJIVE1MID0gYXJ0aWNsZXRlbXA7XHJcbn07XHJcblxyXG5jb25zdCBob21lQ2FyZDIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IChhd2FpdCBnZXRBbGxTaG93cyhnZXRBbGxTaG93c1VSTCkpWzFdLnJlYWxpdHlHZW5yZTtcclxuICBjb25zdCBsaWtlRGF0YSA9IGF3YWl0IGdldEFsbExpa2VzKCk7XHJcbiAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XHJcbiAgICBsaWtlRGF0YS5mb3JFYWNoKCh5KSA9PiB7XHJcbiAgICAgIGlmIChwYXJzZUZsb2F0KHkuaXRlbV9pZCkgPT09IHguaWQpIHtcclxuICAgICAgICB4Lmxpa2UgPSB5Lmxpa2VzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBsZXQgYXJ0aWNsZXRlbXAgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGFydGljbGV0ZW1wXHJcbiAgICAgICs9IGA8YXJ0aWNsZSBjbGFzcz1cImhvbWVfYXJ0aWNsZVwiIGtleT0ke2RhdGFbaV0uaWR9PiBcclxuPGZpZ3VyZT5cclxuICAgPGltZyBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiaW1nelwiIHNyYz0ke2RhdGFbaV0uaW1hZ2UubWVkaXVtfSBhbHQ9XCJcIj5cclxuPC9maWd1cmU+XHJcblxyXG48ZGl2IGNsYXNzPVwiaG9tZV90aXRsZVwiPlxyXG4gIDxkaXY+XHJcbiAgICA8aDM+JHtkYXRhW2ldLm5hbWV9PC9oMz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdj5cclxuICA8aW1nIGRhdGEtdGFiPSR7ZGF0YVtpXS5pZH0gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImxpa2VfYnRuXCIgc3JjPSR7bG92ZUltZ30gYWx0PVwiXCI+XHJcbiAgPHAgY2xhc3M9XCJmb250NFwiPjxzcGFuIGNsYXNzPVwiY291bnQgY291bnQke2RhdGFbaV0uaWR9XCIgZGF0YS10YWI9JHtkYXRhW2ldLmlkfT4ke2RhdGFbaV0ubGlrZSA/IGRhdGFbaV0ubGlrZSA6IDB9PC9zcGFuPiAke2RhdGFbaV0ubGlrZSA8PSAxID8gJ2xpa2UnIDogJ2xpa2VzJ30gPC9wPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiaG9tZV9idXR0b25zXCI+XHJcbiAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiY29tbWVudF9idG4gZm9udDNcIj5Db21tZW50czwvYnV0dG9uPlxyXG4gIDxidXR0b24gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cInJlc2VydmVfYnRuIGZvbnQzXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L2FydGljbGU+YDtcclxuICB9XHJcbiAgaG9tZVNlY3Rpb24yVGFnLmlubmVySFRNTCA9IGFydGljbGV0ZW1wO1xyXG59O1xyXG5cclxuY29uc3QgaG9tZUNhcmQzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsyXS5hbmltYXRpb25HZW5yZTtcclxuICBjb25zdCBsaWtlRGF0YSA9IGF3YWl0IGdldEFsbExpa2VzKCk7XHJcbiAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XHJcbiAgICBsaWtlRGF0YS5mb3JFYWNoKCh5KSA9PiB7XHJcbiAgICAgIGlmIChwYXJzZUZsb2F0KHkuaXRlbV9pZCkgPT09IHguaWQpIHtcclxuICAgICAgICB4Lmxpa2UgPSB5Lmxpa2VzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBsZXQgYXJ0aWNsZXRlbXAgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGFydGljbGV0ZW1wXHJcbiAgICAgICs9IGA8YXJ0aWNsZSBjbGFzcz1cImhvbWVfYXJ0aWNsZVwiIGtleT0ke2RhdGFbaV0uaWR9PiBcclxuPGZpZ3VyZT5cclxuICA8aW1nIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJpbWd6XCIgc3JjPSR7ZGF0YVtpXS5pbWFnZS5tZWRpdW19IGFsdD1cIlwiPlxyXG48L2ZpZ3VyZT4gXHJcbjxkaXYgY2xhc3M9XCJob21lX3RpdGxlXCI+XHJcbiAgPGRpdj5cclxuICAgIDxoMz4ke2RhdGFbaV0ubmFtZX08L2gzPlxyXG4gIDwvZGl2PiBcclxuICA8ZGl2PlxyXG4gIDxpbWcgZGF0YS10YWI9JHtkYXRhW2ldLmlkfSBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwibGlrZV9idG5cIiBzcmM9JHtsb3ZlSW1nfSBhbHQ9XCJcIj5cclxuICA8cCBjbGFzcz1cImZvbnQ0XCI+PHNwYW4gY2xhc3M9XCJjb3VudCBjb3VudCR7ZGF0YVtpXS5pZH1cIiBkYXRhLXRhYj0ke2RhdGFbaV0uaWR9PiR7ZGF0YVtpXS5saWtlID8gZGF0YVtpXS5saWtlIDogMH08L3NwYW4+ICR7ZGF0YVtpXS5saWtlIDw9IDEgPyAnbGlrZScgOiAnbGlrZXMnfSA8L3A+XHJcbjwvZGl2PlxyXG48L2Rpdj4gXHJcbjxkaXYgY2xhc3M9XCJob21lX2J1dHRvbnNcIj5cclxuICA8YnV0dG9uIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJjb21tZW50X2J0biBmb250M1wiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwicmVzZXJ2ZV9idG4gZm9udDNcIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjwvYXJ0aWNsZT5gO1xyXG4gIH1cclxuICBob21lU2VjdGlvbjNUYWcuaW5uZXJIVE1MID0gYXJ0aWNsZXRlbXA7XHJcbn07XHJcblxyXG5jb25zdCByZXJlbmRlckNhcmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGhvbWVDYXJkMSgpO1xyXG4gIGF3YWl0IGhvbWVDYXJkMigpO1xyXG4gIGF3YWl0IGhvbWVDYXJkMygpO1xyXG59O1xyXG5cclxuY29uc3QgVGFic2VsZWN0b3IgPSBhc3luYyAoKSA9PiB7XHJcbiAgbmF2VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2X2l0ZW0nKTtcclxuICAgIGNvbnN0IGNsaWNrZWRTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNwYW4ke2NsaWNrZWQuZGF0YXNldC50YWJ9YCk7XHJcbiAgICBjb25zdCBjbGlja2VkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob21lX3NlY3Rpb24ke2NsaWNrZWQuZGF0YXNldC50YWJ9YCk7XHJcbiAgICBzcGFuQWN0aXZlUmVtb3ZlKCk7XHJcbiAgICBhY3RpdmF0ZUNsaWNrZWRTcGFuKGNsaWNrZWRTcGFuKTtcclxuICAgIHNlY3Rpb25BY3RpdmVSZW1vdmUoKTtcclxuICAgIGFjdGl2YXRlQ2xpY2tlZFNlY3Rpb24oY2xpY2tlZFNlY3Rpb24pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgZHluYW1pY05hdigpO1xyXG4gIGF3YWl0IHJlcmVuZGVyQ2FyZHMoKTtcclxuICBhd2FpdCBnZXRBbGxMaWtlcygpO1xyXG4gIGF3YWl0IFRhYnNlbGVjdG9yKCk7XHJcbn0pO1xyXG5cclxuLy8gYWRkZWQgZm9yIHJlc2VydmF0aW9uIG1vZGFsXHJcbmNvbnN0IHJlc2VydmF0aW9uTW9kYWwgPSBhc3luYyAocmVzZXJ2ZWJ0bmlkLCBzZWxlY3RlZE9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25jb3VudCcpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uJyk7XHJcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKTtcclxuICBjb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRkYXRlJyk7XHJcbiAgY29uc3QgZW5kRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRkYXRlJyk7XHJcbiAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZlYnV0dG9uJyk7XHJcbiAgY29uc3QgcmVzZXJ2ZVBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZXBpY3R1cmUnKTtcclxuICBjb25zdCByZXNlcnZlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZlbmFtZScpO1xyXG4gIGNvbnN0IHJlc2VydmVMYW5ndWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZlbGFuZ3VhZ2UnKTtcclxuICBjb25zdCByZXNlcnZlU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmVzdGF0dXMnKTtcclxuICBjb25zdCByZXNlcnZlQXZlcmFnZVJ1bnRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZWF2ZXJhZ2VSdW50aW1lJyk7XHJcbiAgY29uc3QgcmVzZXJ2ZXR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZXR5cGUnKTtcclxuICByZXNlcnZhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYXBpXHJcbiAgLy8gY291bnQgcmVzZXJ2YXRpb25cclxuICByZXNlcnZhdGlvbkNvdW50ZXIocmVzZXJ2ZWJ0bmlkLCByZXNlcnZhdGlvbkNvdW50KTtcclxuICAvLyBkaXNwbGF5IHJlc2VydmF0aW9uXHJcbiAgZGlzcGxheVJlc2VydmF0aW9uKHJlc2VydmVidG5pZCk7XHJcbiAgLy8gcmVzZXJ2YXRpb24gZXZlbnQgaGFuZGxpbmdcclxuICAvLyB1cGRhdGUgIGluZm9ybWF0aW9uXHJcblxyXG4gIHJlc2VydmVQaWN0dXJlLnNyYyA9IHNlbGVjdGVkT2JqZWN0LmltYWdlLm9yaWdpbmFsO1xyXG4gIHJlc2VydmVOYW1lLmlubmVySFRNTCA9IHNlbGVjdGVkT2JqZWN0Lm5hbWU7XHJcbiAgcmVzZXJ2ZUxhbmd1YWdlLmlubmVySFRNTCA9IGBMYW5ndWFnZTogJHtzZWxlY3RlZE9iamVjdC5sYW5ndWFnZX1gO1xyXG4gIHJlc2VydmVBdmVyYWdlUnVudGltZS5pbm5lckhUTUwgPSBgQXZlcmFnZVJ1bnRpbWU6ICR7c2VsZWN0ZWRPYmplY3QuYXZlcmFnZVJ1bnRpbWV9YDtcclxuICByZXNlcnZlU3RhdHVzLmlubmVySFRNTCA9IGBTdGF0dXM6ICR7c2VsZWN0ZWRPYmplY3Quc3RhdHVzfWA7XHJcbiAgcmVzZXJ2ZXR5cGUuaW5uZXJIVE1MID0gYFR5cGU6ICR7c2VsZWN0ZWRPYmplY3QudHlwZX1gO1xyXG4gIHJlc2VydmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodXNlck5hbWUudmFsdWUudHJpbSgpICE9PSAnJyAmJiBzdGFydERhdGUudmFsdWUudHJpbSgpICE9PSAnJyAmJiBlbmREYXRlLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgY29uc3QgcmVzZXJ2YXRpb25kYXRhID0ge1xyXG4gICAgICAgIGl0ZW1faWQ6ICtyZXNlcnZlYnRuaWQsXHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lLnZhbHVlLnRyaW0oKSxcclxuICAgICAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGUudmFsdWUudHJpbSgpLFxyXG4gICAgICAgIGRhdGVfZW5kOiBlbmREYXRlLnZhbHVlLnRyaW0oKSxcclxuICAgICAgfTtcclxuICAgICAgYXdhaXQgc2VuZFJlc2VydmF0aW9uKHJlc2VydmF0aW9uZGF0YSk7XHJcbiAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgIHN0YXJ0RGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICBlbmREYXRlLnZhbHVlID0gJyc7XHJcbiAgICAgIGRpc3BsYXlSZXNlcnZhdGlvbihyZXNlcnZlYnRuaWQpO1xyXG4gICAgICByZXNlcnZhdGlvbkNvdW50ZXIocmVzZXJ2ZWJ0bmlkLCByZXNlcnZhdGlvbkNvdW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc2VydmVidG5pZC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4gIC8vIGNsb3NlIGJ1dHRvbiBmb3IgcmVzZXJ2YXRpb24gd2luZG93XHJcbmNvbnN0IGNsb3NlUmVzZXJ2YXRpb25XaW5kb3cgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb25DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbmNsb3NlJyk7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb24nKTtcclxuICByZXNlcnZhdGlvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXJ2YXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxufTtcclxuXHJcbm5hdlRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgY29uc3QgY2xpY2tlZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5uYXZfaXRlbScpO1xyXG4gIGNvbnN0IGNsaWNrZWRTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNwYW4ke2NsaWNrZWQuZGF0YXNldC50YWJ9YCk7XHJcbiAgY29uc3QgY2xpY2tlZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaG9tZV9zZWN0aW9uJHtjbGlja2VkLmRhdGFzZXQudGFifWApO1xyXG4gIHNwYW5BY3RpdmVSZW1vdmUoKTtcclxuICBhY3RpdmF0ZUNsaWNrZWRTcGFuKGNsaWNrZWRTcGFuKTtcclxuICBzZWN0aW9uQWN0aXZlUmVtb3ZlKCk7XHJcbiAgYWN0aXZhdGVDbGlja2VkU2VjdGlvbihjbGlja2VkU2VjdGlvbik7XHJcbn0pO1xyXG5cclxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoY291bnRPYmopID0+IHtcclxuICBhd2FpdCBwb3N0QWxsTGlrZXMoY291bnRPYmopO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheUNhcmRDb3VudCA9IGFzeW5jIChjb3VudFVJLCBpZCkgPT4ge1xyXG4gIGNvbnN0IGxpa2VBcnJheSA9IGF3YWl0IGdldEFsbExpa2VzKCk7XHJcbiAgbGlrZUFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uaXRlbV9pZCA9PT0gaWQpIHtcclxuICAgICAgY29uc3QgeyBsaWtlcyB9ID0gaXRlbTtcclxuICAgICAgY291bnRVSS5pbm5lckhUTUwgPSBsaWtlcztcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudFVJO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY29tbWVudE1vZGFsID0gYXN5bmMgKGNvbW1lbnRidG5pZCwgc2VsZWN0ZWRjb21tZW50T2JqZWN0KSA9PiB7XHJcbiAgY29uc3QgY29tbWVudENvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRjb3VudCcpO1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xyXG4gIFxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgY29uc3QgdXNlck5hbWVjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lY29tbWVudCcpO1xyXG4gIGNvbnN0IHVzZXJDb21tZW50PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcmNvbW1lbnQnKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gXHJcbiAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50YnV0dG9uJyk7XHJcbiAgY29uc3QgY29tbWVudFBpY3R1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHBpY3R1cmUnKTtcclxuICBjb25zdCBjb21tZW50TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50bmFtZScpO1xyXG4gIGNvbnN0IGNvbW1lbnRMYW5ndWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50bGFuZ3VhZ2UnKTtcclxuICBjb25zdCBjb21tZW50U3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzdGF0dXMnKTtcclxuICBjb25zdCBjb21tZW50QXZlcmFnZVJ1bnRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGF2ZXJhZ2VSdW50aW1lJyk7XHJcbiAgY29uc3QgY29tbWVudHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHR5cGUnKTtcclxuICAvL2NvbnN0IGlzQ2FyZDFBY3RpdmUgPSBob21lU2VjdGlvbjFUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG4gIC8vY29uc3QgaXNDYXJkMkFjdGl2ZSA9IGhvbWVTZWN0aW9uMlRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XHJcbiAgY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYXBpXHJcbiAgLy8gY291bnQgcmVzZXJ2YXRpb25cclxuICBjb21tZW50Q291bnRlcihjb21tZW50YnRuaWQsIGNvbW1lbnRDb3VudCk7XHJcbiAgLy8gZGlzcGxheSByZXNlcnZhdGlvblxyXG4gIGRpc3BsYXlDb21tZW50KGNvbW1lbnRidG5pZCk7XHJcbiAgLy8gcmVzZXJ2YXRpb24gZXZlbnQgaGFuZGxpbmdcclxuICAvLyB1cGRhdGUgIGluZm9ybWF0aW9uXHJcblxyXG4gIGNvbW1lbnRQaWN0dXJlLnNyYyA9IHNlbGVjdGVkY29tbWVudE9iamVjdC5pbWFnZS5vcmlnaW5hbDtcclxuICBjb21tZW50TmFtZS5pbm5lckhUTUwgPSBzZWxlY3RlZGNvbW1lbnRPYmplY3QubmFtZTtcclxuICBjb21tZW50TGFuZ3VhZ2UuaW5uZXJIVE1MID0gYExhbmd1YWdlOiAke3NlbGVjdGVkY29tbWVudE9iamVjdC5sYW5ndWFnZX1gO1xyXG4gIGNvbW1lbnRBdmVyYWdlUnVudGltZS5pbm5lckhUTUwgPSBgQXZlcmFnZVJ1bnRpbWU6ICR7c2VsZWN0ZWRjb21tZW50T2JqZWN0LmF2ZXJhZ2VSdW50aW1lfWA7XHJcbiAgY29tbWVudFN0YXR1cy5pbm5lckhUTUwgPSBgU3RhdHVzOiAke3NlbGVjdGVkY29tbWVudE9iamVjdC5zdGF0dXN9YDtcclxuICBjb21tZW50dHlwZS5pbm5lckhUTUwgPSBgVHlwZTogJHtzZWxlY3RlZGNvbW1lbnRPYmplY3QudHlwZX1gO1xyXG4gIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIHVzZXJOYW1lY29tbWVudC52YWx1ZS50cmltKCkgIT09ICcnICYmIHVzZXJDb21tZW50LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgY29uc3QgY29tbWVudGRhdGEgPSB7XHJcbiAgICAgICAgaXRlbV9pZDogK2NvbW1lbnRidG5pZCxcclxuICAgICAgICB1c2VybmFtZTogIHVzZXJOYW1lY29tbWVudC52YWx1ZS50cmltKCksXHJcbiAgICAgICAgY29tbWVudDogdXNlckNvbW1lbnQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgICBhd2FpdCBzZW5kQ29tbWVudChjb21tZW50ZGF0YSk7XHJcbiAgICAgIHVzZXJOYW1lY29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICB1c2VyQ29tbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICBkaXNwbGF5Q29tbWVudChjb21tZW50YnRuaWQpO1xyXG4gICAgICBjb21tZW50Q291bnRlcihjb21tZW50YnRuaWQsIGNvbW1lbnRDb3VudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21tZW50YnRuaWQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlQ29tbWVudFdpbmRvdyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb21tZW50Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGNsb3NlJyk7XHJcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcbiAgY29tbWVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuYm9keVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tMaWtlQnRuID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWtlX2J0bicpO1xyXG5cclxuICBjb25zdCBpc1Jlc2VydmVDb250YWluID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNlcnZlX2J0bicpO1xyXG4gIGNvbnN0IHJlc2VydmVidG5pZCA9IGUudGFyZ2V0LmlkO1xyXG4gIGNvbnN0IHNob3dEYXRhID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSlbMF07XHJcbiAgY29uc3QgcmVhbGl0eURhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsxXTtcclxuICBjb25zdCBhbmltYXRpb25EYXRhID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSlbMl07XHJcbiAgY29uc3QgaXNDYXJkMUFjdGl2ZSA9IGhvbWVTZWN0aW9uMVRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XHJcbiAgY29uc3QgaXNDYXJkMkFjdGl2ZSA9IGhvbWVTZWN0aW9uMlRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XHJcbiAgY29uc3QgaXNDYXJkM0FjdGl2ZSA9IGhvbWVTZWN0aW9uM1RhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XHJcbiAgY29uc3QgaXNDb21tZW50Q29udGFpbiA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tbWVudF9idG4nKTtcclxuICBjb25zdCBjb21tZW50YnRuaWQgPSBlLnRhcmdldC5pZDtcclxuICBjb25zdCBzaG93Y29tbWVudERhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVswXTtcclxuICBjb25zdCByZWFsaXR5Y29tbWVudERhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsxXTtcclxuICBjb25zdCBhbmltYXRpb25jb21tZW50RGF0YSA9IChhd2FpdCBnZXRBbGxTaG93cyhnZXRBbGxTaG93c1VSTCkpWzJdO1xyXG4gIGNvbnN0IGlzQ2FyZEFjdGl2ZTEgPSBob21lU2VjdGlvbjFUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG4gIGNvbnN0IGlzQ2FyZEFjdGl2ZTIgPSBob21lU2VjdGlvbjJUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG4gIGNvbnN0IGlzQ2FyZEFjdGl2ZTMgPSBob21lU2VjdGlvbjNUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG5cclxuXHJcbiAgaWYgKGNoZWNrTGlrZUJ0bikge1xyXG4gICAgY29uc3QgY2xpY2tlZExpa2UgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGlkID0gY2xpY2tlZExpa2UuZGF0YXNldC50YWI7XHJcbiAgICBjb25zdCBjb3VudFVJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvdW50JHtpZH1gKTtcclxuICAgIGNvbnN0IGNvdW50T2JqID0geyBpdGVtX2lkOiBpZCB9O1xyXG4gICAgYXdhaXQgcG9zdExpa2UoY291bnRPYmopO1xyXG4gICAgYXdhaXQgZ2V0QWxsTGlrZXMoKTtcclxuICAgIGF3YWl0IGRpc3BsYXlDYXJkQ291bnQoY291bnRVSSwgaWQpO1xyXG4gICAgYXdhaXQgcmVyZW5kZXJDYXJkcygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzUmVzZXJ2ZUNvbnRhaW4pIHtcclxuICAgIGlmIChpc0NhcmQxQWN0aXZlKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gc2hvd0RhdGEuZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBOdW1iZXIocmVzZXJ2ZWJ0bmlkKSk7XHJcbiAgICAgIGF3YWl0IHJlc2VydmF0aW9uTW9kYWwocmVzZXJ2ZWJ0bmlkLCBzZWxlY3RlZE9iamVjdCk7XHJcbiAgICAgIGF3YWl0IGNsb3NlUmVzZXJ2YXRpb25XaW5kb3coKTtcclxuICAgIH1cclxuICAgIGlmIChpc0NhcmQyQWN0aXZlKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gcmVhbGl0eURhdGEucmVhbGl0eUdlbnJlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihyZXNlcnZlYnRuaWQpKTtcclxuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Nb2RhbChyZXNlcnZlYnRuaWQsIHNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgYXdhaXQgY2xvc2VSZXNlcnZhdGlvbldpbmRvdygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQ2FyZDNBY3RpdmUpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBhbmltYXRpb25EYXRhLmFuaW1hdGlvbkdlbnJlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihyZXNlcnZlYnRuaWQpKTtcclxuICAgICAgYXdhaXQgcmVzZXJ2YXRpb25Nb2RhbChyZXNlcnZlYnRuaWQsIHNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgYXdhaXQgY2xvc2VSZXNlcnZhdGlvbldpbmRvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQ29tbWVudENvbnRhaW4pe1xyXG4gICAgaWYoaXNDYXJkQWN0aXZlMSl7XHJcbiAgICBjb25zdCBzZWxlY3RlZGNvbW1lbnRPYmplY3QgPSBzaG93Y29tbWVudERhdGEuZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBOdW1iZXIoY29tbWVudGJ0bmlkKSk7XHJcbiAgICBhd2FpdCBjb21tZW50TW9kYWwoY29tbWVudGJ0bmlkLCBzZWxlY3RlZGNvbW1lbnRPYmplY3QpO1xyXG4gICAgYXdhaXQgY2xvc2VDb21tZW50V2luZG93KCk7XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gIGlmKGlzQ2FyZEFjdGl2ZTIpe1xyXG4gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuIGNvbnN0IHNlbGVjdGVkY29tbWVudE9iamVjdCA9cmVhbGl0eWNvbW1lbnREYXRhLnJlYWxpdHlHZW5yZS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBOdW1iZXIoY29tbWVudGJ0bmlkKSk7XHJcbiBhd2FpdCBjb21tZW50TW9kYWwoY29tbWVudGJ0bmlkLCBzZWxlY3RlZGNvbW1lbnRPYmplY3QpO1xyXG4gYXdhaXQgY2xvc2VDb21tZW50V2luZG93KCk7XHJcbiAgfVxyXG4gIGlmKGlzQ2FyZEFjdGl2ZTMpe1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgIGNvbnN0IHNlbGVjdGVkY29tbWVudE9iamVjdCA9YW5pbWF0aW9uY29tbWVudERhdGEuYW5pbWF0aW9uR2VucmUuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGNvbW1lbnRidG5pZCkpO1xyXG4gICAgYXdhaXQgY29tbWVudE1vZGFsKGNvbW1lbnRidG5pZCwgc2VsZWN0ZWRjb21tZW50T2JqZWN0KTtcclxuICAgIGF3YWl0IGNsb3NlQ29tbWVudFdpbmRvdygpO1xyXG4gICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgJy4vY3NzL2hvbWUuY3NzJztcclxuLy8gaW1wb3J0ICcuL2Nzcy9jb21tZW50U3R5bGUuY3NzJztcclxuLy8gaW1wb3J0IGdldEFsbFNob3dzVVJMIGZyb20gJy4vY29uZmlnLmpzJztcclxuLy8gaW1wb3J0IGdldEFsbFNob3dzIGZyb20gJy4vYXBpL2dldEFsbFNob3dzLmpzJztcclxuLy8gaW1wb3J0IGRpc3BsYXlIb21lVUkgZnJvbSAnLi9wYWdlVUkvZGlzcGxheUhvbWVVSS5qcyc7XHJcbi8vIGltcG9ydCBsb3ZlSW1nIGZyb20gJy4vaW1hZ2VzL2xvdmUucG5nJztcclxuLy8gaW1wb3J0IGNvbW1lbnRVSSBmcm9tICcuL3BhZ2VVSS9jb21tZW50VUkuanMnO1xyXG4vLyBpbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudENvdW50ZXIuanMnO1xyXG4vLyBpbXBvcnQgc2VuZENvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudFBvc3RBUEkuanMnO1xyXG4vLyBpbXBvcnQgZGlzcGxheUNvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQvY29tbWVudERpc3BsYXkuanMnO1xyXG5cclxuLy8gY29uc3QgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2JvZHknKTtcclxuXHJcbi8vIGNvbnN0IEhvbWVVSSA9ICgpID0+IHtcclxuLy8gICBib2R5VGFnLmlubmVySFRNTCA9IGNvbW1lbnRVSSgpICsgZGlzcGxheUhvbWVVSSgpO1xyXG4vLyB9O1xyXG5cclxuLy8gSG9tZVVJKCk7XHJcblxyXG4vLyBjb25zdCBuYXZUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X2xpc3QnKTtcclxuLy8gY29uc3QgaG9tZVNlY3Rpb24xVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfc2VjdGlvbjEnKTtcclxuLy8gY29uc3QgaG9tZVNlY3Rpb24yVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfc2VjdGlvbjInKTtcclxuLy8gY29uc3QgaG9tZVNlY3Rpb24zVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfc2VjdGlvbjMnKTtcclxuXHJcbi8vIGNvbnN0IGFjdGl2YXRlQ2xpY2tlZFNwYW4gPSAocGFyKSA9PiB7XHJcbi8vICAgcGFyLmNsYXNzTGlzdC5hZGQoJ2hvbWVfYWN0aXZlJyk7XHJcbi8vICAgcGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWVfaGlkZGVuJyk7XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBhY3RpdmF0ZUNsaWNrZWRTZWN0aW9uID0gKHBhcikgPT4ge1xyXG4vLyAgIHBhci5jbGFzc0xpc3QuYWRkKCdob21lX2FjdGl2ZScpO1xyXG4vLyAgIHBhci5jbGFzc0xpc3QucmVtb3ZlKCdob21lX2hpZGRlbicpO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3Qgc3BhbkFjdGl2ZVJlbW92ZSA9ICgpID0+IHtcclxuLy8gICBjb25zdCBzcGFuVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX3NwYW4nKTtcclxuLy8gICBzcGFuVGFncy5mb3JFYWNoKChzcGFuKSA9PiB7XHJcbi8vICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWVfYWN0aXZlJyk7XHJcbi8vICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2hvbWVfaGlkZGVuJyk7XHJcbi8vICAgfSk7XHJcbi8vIH07XHJcblxyXG4vLyBjb25zdCBzZWN0aW9uQWN0aXZlUmVtb3ZlID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHNlY3Rpb25UYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWRfY29udGFpbmVyJyk7XHJcbi8vICAgc2VjdGlvblRhZ3MuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4vLyAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lX2FjdGl2ZScpO1xyXG4vLyAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lX2hpZGRlbicpO1xyXG4vLyAgIH0pO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgZHluYW1pY05hdiA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCBkYXRhID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSk7XHJcbi8vICAgbGV0IG5hdnRlbXAgPSAnJztcclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcclxuLy8gICAgIG5hdnRlbXBcclxuLy8gICAgICAgKz0gYFxyXG4vLyA8bGkgY2xhc3M9XCJmb250MiBuYXZfaXRlbSB0YWJfYWN0aXZlXCIgZGF0YS10YWI9JHtpICsgMX0+XHJcbi8vICR7YCR7ZGF0YVtpXS50aXRsZX0gYH08c3BhbiBjbGFzcz1cImhvbWVfc3BhbiAke2kgPT09IDAgPyAnaG9tZV9hY3RpdmUnIDogJyd9IHNwYW4ke2kgKyAxfSBzcGFuX2FjdGl2ZVwiPigke2RhdGFbaV0udG90YWx9KTwvc3Bhbj5cclxuLy8gPC9saT5gO1xyXG4vLyAgIH1cclxuLy8gICBuYXZUYWcuaW5uZXJIVE1MID0gbmF2dGVtcDtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGhvbWVDYXJkMSA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCB7IGRhdGEgfSA9IChhd2FpdCBnZXRBbGxTaG93cyhnZXRBbGxTaG93c1VSTCkpWzBdO1xyXG4vLyAgIGxldCBhcnRpY2xldGVtcCA9ICcnO1xyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xyXG4vLyAgICAgYXJ0aWNsZXRlbXBcclxuLy8gICAgICAgKz0gYDxhcnRpY2xlIGNsYXNzPVwiaG9tZV9hcnRpY2xlXCIga2V5PSR7ZGF0YVtpXS5pZH0+IFxyXG4vLyA8ZmlndXJlPlxyXG4vLyAgPGltZyBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiaW1nelwiIHNyYz0ke2RhdGFbaV0uaW1hZ2UubWVkaXVtfSBhbHQ9XCJcIj5cclxuLy8gPC9maWd1cmU+XHJcblxyXG4vLyA8ZGl2IGNsYXNzPVwiaG9tZV90aXRsZVwiPlxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8aDM+JHtkYXRhW2ldLm5hbWV9PC9oMz5cclxuLy8gICA8L2Rpdj5cclxuXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIDxpbWcgaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImxpa2VfYnRuXCIgc3JjPSR7bG92ZUltZ30gYWx0PVwiXCI+XHJcbi8vICAgICA8cCBjbGFzcz1cImZvbnQ0XCI+PHNwYW4gY2xhc3M9XCJjb3VudFwiPjU8L3NwYW4+IGxpa2VzIDwvcD5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcblxyXG4vLyA8ZGl2IGNsYXNzPVwiaG9tZV9idXR0b25zXCI+XHJcbi8vICAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiY29tbWVudF9idG4gZm9udDNcIj5Db21tZW50czwvYnV0dG9uPlxyXG4vLyAgIDxidXR0b24gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cInJlc2VydmVfYnRuIGZvbnQzXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L2FydGljbGU+YDtcclxuLy8gICB9XHJcbi8vICAgaG9tZVNlY3Rpb24xVGFnLmlubmVySFRNTCA9IGFydGljbGV0ZW1wO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgaG9tZUNhcmQyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsxXS5yZWFsaXR5R2VucmU7XHJcbi8vICAgbGV0IGFydGljbGV0ZW1wID0gJyc7XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICBhcnRpY2xldGVtcFxyXG4vLyAgICAgICArPSBgPGFydGljbGUgY2xhc3M9XCJob21lX2FydGljbGVcIiBrZXk9JHtkYXRhW2ldLmlkfT4gXHJcbi8vIDxmaWd1cmU+XHJcbi8vICAgIDxpbWcgaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImltZ3pcIiBzcmM9JHtkYXRhW2ldLmltYWdlLm1lZGl1bX0gYWx0PVwiXCI+XHJcbi8vIDwvZmlndXJlPlxyXG5cclxuLy8gPGRpdiBjbGFzcz1cImhvbWVfdGl0bGVcIj5cclxuLy8gICA8ZGl2PlxyXG4vLyAgICAgPGgzPiR7ZGF0YVtpXS5uYW1lfTwvaDM+XHJcbi8vICAgPC9kaXY+XHJcblxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8aW1nIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJsaWtlX2J0blwiIHNyYz0ke2xvdmVJbWd9IGFsdD1cIlwiPlxyXG4vLyAgICAgPHAgY2xhc3M9XCJmb250NFwiPjxzcGFuIGNsYXNzPVwiY291bnRcIj41PC9zcGFuPiBsaWtlcyA8L3A+XHJcbi8vICAgPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG5cclxuLy8gPGRpdiBjbGFzcz1cImhvbWVfYnV0dG9uc1wiPlxyXG4vLyAgIDxidXR0b24gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImNvbW1lbnRfYnRuIGZvbnQzXCI+Q29tbWVudHM8L2J1dHRvbj5cclxuLy8gICA8YnV0dG9uIGlkPSR7ZGF0YVtpXS5pZH0gY2xhc3M9XCJyZXNlcnZlX2J0biBmb250M1wiPlJlc2VydmF0aW9uczwvYnV0dG9uPlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9hcnRpY2xlPmA7XHJcbi8vICAgfVxyXG4vLyAgIGhvbWVTZWN0aW9uMlRhZy5pbm5lckhUTUwgPSBhcnRpY2xldGVtcDtcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGhvbWVDYXJkMyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCBkYXRhID0gKGF3YWl0IGdldEFsbFNob3dzKGdldEFsbFNob3dzVVJMKSlbMl0uYW5pbWF0aW9uR2VucmU7XHJcbi8vICAgbGV0IGFydGljbGV0ZW1wID0gJyc7XHJcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICBhcnRpY2xldGVtcFxyXG4vLyAgICAgICArPSBgPGFydGljbGUgY2xhc3M9XCJob21lX2FydGljbGVcIiBrZXk9JHtkYXRhW2ldLmlkfT4gXHJcbi8vIDxmaWd1cmU+XHJcbi8vICAgPGltZyBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiaW1nelwiIHNyYz0ke2RhdGFbaV0uaW1hZ2UubWVkaXVtfSBhbHQ9XCJcIj5cclxuLy8gPC9maWd1cmU+IFxyXG4vLyA8ZGl2IGNsYXNzPVwiaG9tZV90aXRsZVwiPlxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8aDM+JHtkYXRhW2ldLm5hbWV9PC9oMz5cclxuLy8gICA8L2Rpdj4gXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIDxpbWcgaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cImxpa2VfYnRuXCIgc3JjPSR7bG92ZUltZ30gYWx0PVwiXCI+XHJcbi8vICAgICA8cCBjbGFzcz1cImZvbnQ0XCI+PHNwYW4gY2xhc3M9XCJjb3VudFwiPjU8L3NwYW4+IGxpa2VzIDwvcD5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9kaXY+IFxyXG4vLyA8ZGl2IGNsYXNzPVwiaG9tZV9idXR0b25zXCI+XHJcbi8vICAgPGJ1dHRvbiBpZD0ke2RhdGFbaV0uaWR9IGNsYXNzPVwiY29tbWVudF9idG4gZm9udDNcIj5Db21tZW50czwvYnV0dG9uPlxyXG4vLyAgIDxidXR0b24gaWQ9JHtkYXRhW2ldLmlkfSBjbGFzcz1cInJlc2VydmVfYnRuIGZvbnQzXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L2FydGljbGU+YDtcclxuLy8gICB9XHJcbi8vICAgaG9tZVNlY3Rpb24zVGFnLmlubmVySFRNTCA9IGFydGljbGV0ZW1wO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgVGFic2VsZWN0b3IgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgbmF2VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuLy8gICAgIGNvbnN0IGNsaWNrZWQgPSBlLnRhcmdldC5jbG9zZXN0KCcubmF2X2l0ZW0nKTtcclxuLy8gICAgIGNvbnN0IGNsaWNrZWRTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNwYW4ke2NsaWNrZWQuZGF0YXNldC50YWJ9YCk7XHJcbi8vICAgICBjb25zdCBjbGlja2VkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob21lX3NlY3Rpb24ke2NsaWNrZWQuZGF0YXNldC50YWJ9YCk7XHJcbi8vICAgICBzcGFuQWN0aXZlUmVtb3ZlKCk7XHJcbi8vICAgICBhY3RpdmF0ZUNsaWNrZWRTcGFuKGNsaWNrZWRTcGFuKTtcclxuLy8gICAgIHNlY3Rpb25BY3RpdmVSZW1vdmUoKTtcclxuLy8gICAgIGFjdGl2YXRlQ2xpY2tlZFNlY3Rpb24oY2xpY2tlZFNlY3Rpb24pO1xyXG4vLyAgIH0pO1xyXG4vLyB9O1xyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcclxuLy8gICBhd2FpdCBkeW5hbWljTmF2KCk7XHJcbi8vICAgYXdhaXQgaG9tZUNhcmQxKCk7XHJcbi8vICAgYXdhaXQgaG9tZUNhcmQyKCk7XHJcbi8vICAgYXdhaXQgaG9tZUNhcmQzKCk7XHJcbi8vICAgYXdhaXQgVGFic2VsZWN0b3IoKTtcclxuLy8gfSk7XHJcblxyXG4vLyBhZGRlZCBmb3IgY29tbWVudCBtb2RhbFxyXG4vLyBjb25zdCBjb21tZW50TW9kYWwgPSBhc3luYyAoY29tbWVudGJ0bmlkLCBzZWxlY3RlZGNvbW1lbnRPYmplY3QpID0+IHtcclxuLy8gICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGNvdW50Jyk7XHJcbi8vICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcbiAgXHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gICBjb25zdCB1c2VyTmFtZWNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWVjb21tZW50Jyk7XHJcbi8vICAgY29uc3QgdXNlckNvbW1lbnQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyY29tbWVudCcpO1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiBcclxuLy8gICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRidXR0b24nKTtcclxuLy8gICBjb25zdCBjb21tZW50UGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cGljdHVyZScpO1xyXG4vLyAgIGNvbnN0IGNvbW1lbnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRuYW1lJyk7XHJcbi8vICAgY29uc3QgY29tbWVudExhbmd1YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRsYW5ndWFnZScpO1xyXG4vLyAgIGNvbnN0IGNvbW1lbnRTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHN0YXR1cycpO1xyXG4vLyAgIGNvbnN0IGNvbW1lbnRBdmVyYWdlUnVudGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50YXZlcmFnZVJ1bnRpbWUnKTtcclxuLy8gICBjb25zdCBjb21tZW50dHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50dHlwZScpO1xyXG4vLyAgIC8vY29uc3QgaXNDYXJkMUFjdGl2ZSA9IGhvbWVTZWN0aW9uMVRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWVfYWN0aXZlJyk7XHJcbi8vICAgLy9jb25zdCBpc0NhcmQyQWN0aXZlID0gaG9tZVNlY3Rpb24yVGFnLmNsYXNzTGlzdC5jb250YWlucygnaG9tZV9hY3RpdmUnKTtcclxuLy8gICBjb21tZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBhcGlcclxuLy8gICAvLyBjb3VudCByZXNlcnZhdGlvblxyXG4vLyAgIGNvbW1lbnRDb3VudGVyKGNvbW1lbnRidG5pZCwgY29tbWVudENvdW50KTtcclxuLy8gICAvLyBkaXNwbGF5IHJlc2VydmF0aW9uXHJcbi8vICAgZGlzcGxheUNvbW1lbnQoY29tbWVudGJ0bmlkKTtcclxuLy8gICAvLyByZXNlcnZhdGlvbiBldmVudCBoYW5kbGluZ1xyXG4vLyAgIC8vIHVwZGF0ZSAgaW5mb3JtYXRpb25cclxuXHJcbi8vICAgY29tbWVudFBpY3R1cmUuc3JjID0gc2VsZWN0ZWRjb21tZW50T2JqZWN0LmltYWdlLm9yaWdpbmFsO1xyXG4vLyAgIGNvbW1lbnROYW1lLmlubmVySFRNTCA9IHNlbGVjdGVkY29tbWVudE9iamVjdC5uYW1lO1xyXG4vLyAgIGNvbW1lbnRMYW5ndWFnZS5pbm5lckhUTUwgPSBgTGFuZ3VhZ2U6ICR7c2VsZWN0ZWRjb21tZW50T2JqZWN0Lmxhbmd1YWdlfWA7XHJcbi8vICAgY29tbWVudEF2ZXJhZ2VSdW50aW1lLmlubmVySFRNTCA9IGBBdmVyYWdlUnVudGltZTogJHtzZWxlY3RlZGNvbW1lbnRPYmplY3QuYXZlcmFnZVJ1bnRpbWV9YDtcclxuLy8gICBjb21tZW50U3RhdHVzLmlubmVySFRNTCA9IGBTdGF0dXM6ICR7c2VsZWN0ZWRjb21tZW50T2JqZWN0LnN0YXR1c31gO1xyXG4vLyAgIGNvbW1lbnR0eXBlLmlubmVySFRNTCA9IGBUeXBlOiAke3NlbGVjdGVkY29tbWVudE9iamVjdC50eXBlfWA7XHJcbi8vICAgLy8gZWxzZSBpZiAoaXNDYXJkMkFjdGl2ZSkge1xyXG4vLyAgIC8vICAgcmVzZXJ2ZVBpY3R1cmUuc3JjID0gcmVhbGl0eURhdGEuZGF0YVtyZXNlcnZlYnRuaWRdLmltYWdlLm1lZGl1bTtcclxuLy8gICAvLyAgIHJlc2VydmVOYW1lLmlubmVySFRNTCA9IHJlYWxpdHlEYXRhLmRhdGFbcmVzZXJ2ZWJ0bmlkXS5uYW1lO1xyXG4vLyAgIC8vICAgcmVzZXJ2ZUxhbmd1YWdlLmlubmVySFRNTCA9IGBMYW5ndWFnZTogJHtyZWFsaXR5RGF0YS5kYXRhW3Jlc2VydmVidG5pZF0ubGFuZ3VhZ2V9YDtcclxuLy8gICAvLyAgIHJlc2VydmVBdmVyYWdlUnVudGltZS5pbm5lckhUTUwgPSBgQXZlcmFnZVJ1bnRpbWU6ICR7cmVhbGl0eURhdGEuZGF0YVtyZXNlcnZlYnRuaWRdLmF2ZXJhZ2VSdW50aW1lfWA7XHJcbi8vICAgLy8gICByZXNlcnZlU3RhdHVzLmlubmVySFRNTCA9IGBTdGF0dXM6ICR7cmVhbGl0eURhdGEuZGF0YVtyZXNlcnZlYnRuaWRdLnN0YXR1c31gO1xyXG4vLyAgIC8vICAgcmVzZXJ2ZXR5cGUuaW5uZXJIVE1MID0gYFR5cGU6ICR7cmVhbGl0eURhdGEuZGF0YVtyZXNlcnZlYnRuaWRdLnR5cGV9YDtcclxuLy8gICAvLyB9IGVsc2Uge1xyXG4vLyAgIC8vICAgcmVzZXJ2ZVBpY3R1cmUuc3JjID0gYW5pbWF0aW9uRGF0YS5kYXRhW3Jlc2VydmVidG5pZF0uaW1hZ2UubWVkaXVtO1xyXG4vLyAgIC8vICAgcmVzZXJ2ZU5hbWUuaW5uZXJIVE1MID0gYW5pbWF0aW9uRGF0YS5kYXRhW3Jlc2VydmVidG5pZF0ubmFtZTtcclxuLy8gICAvLyAgIHJlc2VydmVMYW5ndWFnZS5pbm5lckhUTUwgPSBgTGFuZ3VhZ2U6ICR7YW5pbWF0aW9uRGF0YS5kYXRhW3Jlc2VydmVidG5pZF0ubGFuZ3VhZ2V9YDtcclxuLy8gICAvLyAgIHJlc2VydmVBdmVyYWdlUnVudGltZS5pbm5lckhUTUwgPSBgQXZlcmFnZVJ1bnRpbWU6ICR7YW5pbWF0aW9uRGF0YS5kYXRhW3Jlc2VydmVidG5pZF0uYXZlcmFnZVJ1bnRpbWV9YDtcclxuLy8gICAvLyAgIHJlc2VydmVTdGF0dXMuaW5uZXJIVE1MID0gYFN0YXR1czogJHthbmltYXRpb25EYXRhLmRhdGFbcmVzZXJ2ZWJ0bmlkXS5zdGF0dXN9YDtcclxuLy8gICAvLyAgIHJlc2VydmV0eXBlLmlubmVySFRNTCA9IGBUeXBlOiAke2FuaW1hdGlvbkRhdGEuZGF0YVtyZXNlcnZlYnRuaWRdLnR5cGV9YDtcclxuLy8gICAvLyB9XHJcblxyXG4vLyAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbi8vICAgICBpZiAoIHVzZXJOYW1lY29tbWVudC52YWx1ZS50cmltKCkgIT09ICcnICYmIHVzZXJDb21tZW50LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuLy8gICAgICAgY29uc3QgY29tbWVudGRhdGEgPSB7XHJcbi8vICAgICAgICAgaXRlbV9pZDogK2NvbW1lbnRidG5pZCxcclxuLy8gICAgICAgICB1c2VybmFtZTogIHVzZXJOYW1lY29tbWVudC52YWx1ZS50cmltKCksXHJcbi8vICAgICAgICAgY29tbWVudDogdXNlckNvbW1lbnQudmFsdWUudHJpbSgpLFxyXG4gICAgICAgIFxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgICBhd2FpdCBzZW5kQ29tbWVudChjb21tZW50ZGF0YSk7XHJcbi8vICAgICAgIHVzZXJOYW1lY29tbWVudC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgICB1c2VyQ29tbWVudC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgICBkaXNwbGF5Q29tbWVudChjb21tZW50YnRuaWQpO1xyXG4vLyAgICAgICBjb21tZW50Q291bnRlcihjb21tZW50YnRuaWQsIGNvbW1lbnRDb3VudCk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBjb21tZW50YnRuaWQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuLy8gfTtcclxuICAvLyBjbG9zZSBidXR0b24gZm9yIGNvbW1lbnQgd2luZG93XHJcbi8vIGNvbnN0IGNsb3NlQ29tbWVudFdpbmRvdyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCBjb21tZW50Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudGNsb3NlJyk7XHJcbi8vICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcbi8vICAgY29tbWVudENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgY29tbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4vLyAgIH0pO1xyXG4vLyB9O1xyXG5cclxuLy8gYm9keVRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbi8vICAgY29uc3QgaXNDb21tZW50Q29udGFpbiA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tbWVudF9idG4nKTtcclxuLy8gICBjb25zdCBjb21tZW50YnRuaWQgPSBlLnRhcmdldC5pZDtcclxuLy8gICBjb25zdCBzaG93Y29tbWVudERhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVswXTtcclxuLy8gICBjb25zdCByZWFsaXR5Y29tbWVudERhdGEgPSAoYXdhaXQgZ2V0QWxsU2hvd3MoZ2V0QWxsU2hvd3NVUkwpKVsxXTtcclxuLy8gICBjb25zdCBhbmltYXRpb25jb21tZW50RGF0YSA9IChhd2FpdCBnZXRBbGxTaG93cyhnZXRBbGxTaG93c1VSTCkpWzJdO1xyXG4vLyAgIGNvbnN0IGlzQ2FyZEFjdGl2ZTEgPSBob21lU2VjdGlvbjFUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG4vLyAgIGNvbnN0IGlzQ2FyZEFjdGl2ZTIgPSBob21lU2VjdGlvbjJUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG4vLyAgIGNvbnN0IGlzQ2FyZEFjdGl2ZTMgPSBob21lU2VjdGlvbjNUYWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lX2FjdGl2ZScpO1xyXG5cclxuLy8gICBpZiAoaXNDb21tZW50Q29udGFpbil7XHJcbi8vICAgICBpZihpc0NhcmRBY3RpdmUxKXtcclxuLy8gICAgIGNvbnN0IHNlbGVjdGVkY29tbWVudE9iamVjdCA9IHNob3djb21tZW50RGF0YS5kYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihjb21tZW50YnRuaWQpKTtcclxuLy8gICAgIGF3YWl0IGNvbW1lbnRNb2RhbChjb21tZW50YnRuaWQsIHNlbGVjdGVkY29tbWVudE9iamVjdCk7XHJcbi8vICAgICBhd2FpdCBjbG9zZUNvbW1lbnRXaW5kb3coKTtcclxuLy8gICAgIH1cclxuICBcclxuXHJcbi8vICAgaWYoaXNDYXJkQWN0aXZlMil7XHJcbi8vICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4vLyAgY29uc3Qgc2VsZWN0ZWRjb21tZW50T2JqZWN0ID1yZWFsaXR5Y29tbWVudERhdGEucmVhbGl0eUdlbnJlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihjb21tZW50YnRuaWQpKTtcclxuLy8gIGF3YWl0IGNvbW1lbnRNb2RhbChjb21tZW50YnRuaWQsIHNlbGVjdGVkY29tbWVudE9iamVjdCk7XHJcbi8vICBhd2FpdCBjbG9zZUNvbW1lbnRXaW5kb3coKTtcclxuLy8gICB9XHJcbi8vICAgaWYoaXNDYXJkQWN0aXZlMyl7XHJcbi8vICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4vLyAgICAgY29uc3Qgc2VsZWN0ZWRjb21tZW50T2JqZWN0ID1yZWFsaXR5Y29tbWVudERhdGEucmVhbGl0eUdlbnJlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IE51bWJlcihjb21tZW50YnRuaWQpKTtcclxuLy8gICAgIGF3YWl0IGNvbW1lbnRNb2RhbChjb21tZW50YnRuaWQsIHNlbGVjdGVkY29tbWVudE9iamVjdCk7XHJcbi8vICAgICBhd2FpdCBjbG9zZUNvbW1lbnRXaW5kb3coKTtcclxuLy8gICAgICB9XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLyBDT01NRU5UIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4iLCJjb25zdCBJbnZvbHZlbWVudEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xyXG5jb25zdCBJbnZvbHZlbWVudElEID0gJ2VPcmNDUDNzZEU3OXRCUklaNnRVJztcclxuXHJcbmV4cG9ydCB7IEludm9sdmVtZW50QVBJLCBJbnZvbHZlbWVudElEIH07IiwiaW1wb3J0IGdldENvbW1lbnQgZnJvbSAnLi9jb21tZW50R2V0QVBJLmpzJztcclxuXHJcbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXN5bmMgKGlkLCBjb21tZW50Q291bnQpID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XHJcbiAgLy8gY291bnQgY29tbWVudFxyXG4gIGNvbW1lbnRDb3VudC5pbm5lckhUTUwgPSAnJztcclxuICBpZiAoZGF0YS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29tbWVudENvdW50LmlubmVySFRNTCArPSAnQ29tbWVudHMnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb21tZW50Q291bnQuaW5uZXJIVE1MICs9IGBDb21tZW50cygke2RhdGEubGVuZ3RofSlgO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IGdldENvbW1lbnQgZnJvbSAnLi9jb21tZW50R2V0QVBJLmpzJztcclxuXHJcbmNvbnN0IGRpc3BsYXlDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XHJcbiAgY29uc3QgY29tbWVudGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudGxpc3QnKTtcclxuICBjb21tZW50bGlzdC5pbm5lckhUTUwgPSAnJztcclxuICBpZiAocmVzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJlcy5mb3JFYWNoKChjb21tZW50KSA9PiB7IFxyXG4gICAgY29tbWVudGxpc3QuaW5uZXJIVE1MICs9IGA8bGk+XHJcbiAgICAgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9IC0gJHtjb21tZW50LnVzZXJuYW1lfSAtICR7Y29tbWVudC5jb21tZW50fVxyXG4gICA8L2xpPmA7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlcy5sZW5ndGg7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudDsiLCJpbXBvcnQgeyBJbnZvbHZlbWVudEFQSSwgSW52b2x2ZW1lbnRJRCB9IGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHRyeSB7IFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7SW52b2x2ZW1lbnRBUEkgKyBJbnZvbHZlbWVudElEfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7IFxyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTsgXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50OyIsImltcG9ydCB7IEludm9sdmVtZW50QVBJLCBJbnZvbHZlbWVudElEIH0gZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XHJcblxyXG5jb25zdCBzZW5kQ29tbWVudCA9IGFzeW5jICh1c2VyX0NvbW1lbnQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7SW52b2x2ZW1lbnRBUEkgKyBJbnZvbHZlbWVudElEfS9jb21tZW50cy9gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9Kc29uJyxcclxuICAgICAgICBjaGFyc2V0OiAndXRmLTgnLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyX0NvbW1lbnQpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgc2VuZENvbW1lbnQ7IiwiY29uc3QgSW52b2x2ZW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuY29uc3QgSW52b2x2ZW1lbnRJRCA9ICdlT3JjQ1Azc2RFNzl0QlJJWjZ0VSc7XHJcblxyXG5leHBvcnQgeyBJbnZvbHZlbWVudEFQSSwgSW52b2x2ZW1lbnRJRCB9OyIsImltcG9ydCBnZXRSZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uR2V0QVBJLmpzJztcclxuXHJcbmNvbnN0IHJlc2VydmF0aW9uQ291bnRlciA9IGFzeW5jIChpZCwgcmVzZXJ2YXRpb25Db3VudCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRSZXNlcnZhdGlvbihpZCk7XHJcbiAgLy8gY291bnQgcmVzZXJ2YXRpb25cclxuICByZXNlcnZhdGlvbkNvdW50LmlubmVySFRNTCA9ICcnO1xyXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXNlcnZhdGlvbkNvdW50LmlubmVySFRNTCArPSAnUmVzZXJ2YXRpb25zJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzZXJ2YXRpb25Db3VudC5pbm5lckhUTUwgKz0gYFJlc2VydmF0aW9ucygke2RhdGEubGVuZ3RofSlgO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25Db3VudGVyOyIsImltcG9ydCBnZXRSZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uR2V0QVBJLmpzJztcclxuXHJcbmNvbnN0IGRpc3BsYXlSZXNlcnZhdGlvbiA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldFJlc2VydmF0aW9uKGlkKTtcclxuICBjb25zdCByZXNlcnZlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZlZGF0ZScpO1xyXG4gIHJlc2VydmVkYXRlLmlubmVySFRNTCA9ICcnO1xyXG4gIGlmIChyZXMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmVzLmZvckVhY2goKHJlc2VydmUpID0+IHtcclxuICAgIHJlc2VydmVkYXRlLmlubmVySFRNTCArPSBgPGxpPlxyXG4gICAgICR7cmVzZXJ2ZS5kYXRlX3N0YXJ0fSAtICR7cmVzZXJ2ZS5kYXRlX2VuZH0gLSAke3Jlc2VydmUudXNlcm5hbWV9XHJcbiAgIDwvbGk+YDtcclxuICB9KTtcclxuICByZXR1cm4gcmVzLmxlbmd0aDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlSZXNlcnZhdGlvbjsiLCJpbXBvcnQgeyBJbnZvbHZlbWVudEFQSSwgSW52b2x2ZW1lbnRJRCB9IGZyb20gJy4vSW52b2x2ZW1lbnRBUEkuanMnO1xyXG5cclxuY29uc3QgZ2V0UmVzZXJ2YXRpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7SW52b2x2ZW1lbnRBUEkgKyBJbnZvbHZlbWVudElEfS9yZXNlcnZhdGlvbnM/aXRlbV9pZD0ke2lkfWApO1xyXG4gICAgaWYgKHJlcy5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldFJlc2VydmF0aW9uOyIsImltcG9ydCB7IEludm9sdmVtZW50QVBJLCBJbnZvbHZlbWVudElEIH0gZnJvbSAnLi9JbnZvbHZlbWVudEFQSS5qcyc7XHJcblxyXG5jb25zdCBzZW5kUmVzZXJ2YXRpb24gPSBhc3luYyAodXNlclJlc2VydmF0aW9uKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0ludm9sdmVtZW50QVBJICsgSW52b2x2ZW1lbnRJRH0vcmVzZXJ2YXRpb25zL2AsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL0pzb24nLFxyXG4gICAgICAgIGNoYXJzZXQ6ICd1dGYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJSZXNlcnZhdGlvbiksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBzZW5kUmVzZXJ2YXRpb247IiwiY29uc3QgY29tbWVudFVJID0gKCkgPT4gYCA8c2VjdGlvbiBjbGFzcz1cImNvbW1lbnRcIiBpZD1cImNvbW1lbnRcIj5cclxuPHNlY3Rpb24gY2xhc3M9XCJjb21tZW50aW1hZ2Vob2xkZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiY29tbWVudGltYWdlXCI+XHJcbiAgICA8aW1nXHJcbiAgICAgIGlkPVwiY29tbWVudHBpY3R1cmVcIlxyXG4gICAgICBhbHQ9XCJtb3ZpZW5hbWVcIlxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uIGlkPVwiY29tbWVudGNsb3NlXCI+WDwvYnV0dG9uPlxyXG48L3NlY3Rpb24+XHJcbjxzZWN0aW9uIGNsYXNzPVwiY29tbWVudG5hbWVob2xkZXJcIj5cclxuICA8aDIgaWQ9XCJjb21tZW50bmFtZVwiPjwvaDI+XHJcbiAgPHVsIGNsYXNzPVwiY29tbWVudG5hbWVkZXRhaWxcIj5cclxuICAgIDxsaSBpZD1cImNvbW1lbnR0eXBlXCI+IDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJjb21tZW50bGFuZ3VhZ2VcIj4gPC9saT5cclxuICAgIDxsaSBpZD1cImNvbW1lbnRzdGF0dXNcIj4gPC9saT5cclxuICAgIDxsaSBpZD0nY29tbWVudGF2ZXJhZ2VSdW50aW1lJz4gPC9saT5cclxuICA8L3VsPlxyXG48L3NlY3Rpb24+XHJcbjxzZWN0aW9uIGNsYXNzPVwiY29tbWVudGhvbGRlclwiPlxyXG4gIDxoMiBpZD1cImNvbW1lbnRjb3VudFwiPjwvaDI+XHJcbiAgPHVsIGNsYXNzPVwiY29tbWVudGxpc3RcIj48L3VsPlxyXG48L3NlY3Rpb24+XHJcbjxzZWN0aW9uIGNsYXNzPVwiYWRkY29tbWVudFwiPlxyXG4gIDxoMj5BZGQgYSBjb21tZW50PC9oMj5cclxuICA8aW5wdXQgaWQ9XCJ1c2VybmFtZWNvbW1lbnRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cclxuXHJcbiAgPHRleHRhcmVhIGlkPVwidXNlcmNvbW1lbnRcIiByZXF1aXJlZCAgcGxhY2Vob2xkZXI9XCIgS2luZGx5IGFkZCBhIGNvbW1lbnQuLi5cIiA+PC90ZXh0YXJlYT5cclxuICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudGJ1dHRvblwiIGlkPVwiY29tbWVudGJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuPC9zZWN0aW9uPlxyXG48L3NlY3Rpb24+YDtcclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudFVJOyIsImltcG9ydCBnaXRodWJJY29uIGZyb20gJy4uL2ltYWdlcy9naXRodWIuc3ZnJztcclxuXHJcbmNvbnN0IGRpc3BsYXlIb21lVUkgPSAoKSA9PiBgXHJcbjxoZWFkZXIgY2xhc3M9XCJob21lX2hlYWRlclwiPlxyXG5cclxuPGRpdiBjbGFzcz1cImxvZ29cIj5cclxuICA8aDEgY2xhc3M9XCJmb250MVwiPkNhcCA8YnI+IEZsaXggPC9oMT5cclxuPC9kaXY+XHJcblxyXG48bmF2IGNsYXNzPVwibmF2X2xpc3RcIj5cclxuIFxyXG48L25hdj5cclxuXHJcbjwvaGVhZGVyPlxyXG5cclxuPHNlY3Rpb24gY2xhc3M9XCJob21lX3NlY3Rpb24xIGdyaWRfY29udGFpbmVyIGhvbWVfYWN0aXZlXCI+PC9zZWN0aW9uPlxyXG48c2VjdGlvbiBjbGFzcz1cImhvbWVfc2VjdGlvbjIgZ3JpZF9jb250YWluZXIgaG9tZV9oaWRkZW5cIj48L3NlY3Rpb24+XHJcbjxzZWN0aW9uIGNsYXNzPVwiaG9tZV9zZWN0aW9uMyBncmlkX2NvbnRhaW5lciBob21lX2hpZGRlblwiPjwvc2VjdGlvbj5cclxuXHJcbjxmb290ZXIgY2xhc3M9XCJob21lX2Zvb3RlclwiPlxyXG48cCBjbGFzcz1cImZvbnQ1XCI+JiMxNjk7IENyZWF0ZWQgYnkgTWljcm92ZXJzZSBzdHVkZW50czsgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRW1la2FFbW1hbnVlbFwiIHRhcmdldD1cIl9ibGFua1wiXHJcbj48c3Ryb25nXHJcbiAgPkVtZWthIEVtbWFudWVsPHNwYW4+PGltZyBjbGFzcz1cImdpdGh1Ymljb25cIiBzcmM9JHtnaXRodWJJY29ufSBhbHQ9XCJcIiBpZD1cImdpdGh1YjFcIiAvPjwvc3Bhbj48L3N0cm9uZ1xyXG4+PC9hPlxyXG48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2p1Z29zYWNrXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuPjxzdHJvbmdcclxuICA+IFpld2R1PHNwYW4+PGltZyBjbGFzcz1cImdpdGh1Ymljb25cIiBzcmM9JHtnaXRodWJJY29ufSBhbHQ9XCJcIiBpZD1cImdpdGh1YjFcIiAvPjwvc3Bhbj48L3N0cm9uZ1xyXG4+PC9hPlxyXG48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3pld2R1NDQ0XCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuPjxzdHJvbmdcclxuICA+IEp1Z29zbGF2PHNwYW4+PGltZyBjbGFzcz1cImdpdGh1Ymljb25cIiBzcmM9JHtnaXRodWJJY29ufSBhbHQ9XCJcIiBpZD1cImdpdGh1YjFcIiAvPjwvc3Bhbj48L3N0cm9uZ1xyXG4+PC9hPlxyXG4gdW5kZXIgQ0MgQlktU0EgbGljZW5zZTwvcD4gXHJcbjwvZm9vdGVyPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWVVSTsiLCJjb25zdCByZXNlcnZhdGlvblVJID0gKCkgPT4gYCA8c2VjdGlvbiBjbGFzcz1cInJlc2VydmF0aW9uXCIgaWQ9XCJyZXNlcnZhdGlvblwiPlxyXG48c2VjdGlvbiBjbGFzcz1cInJlc2VydmVpbWFnZWhvbGRlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJyZXNlcnZlaW1hZ2VcIj5cclxuICAgIDxpbWdcclxuICAgICAgaWQ9XCJyZXNlcnZlcGljdHVyZVwiXHJcbiAgICAgIGFsdD1cIm1vdmllbmFtZVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gaWQ9XCJyZXNlcnZhdGlvbmNsb3NlXCI+WDwvYnV0dG9uPlxyXG48L3NlY3Rpb24+XHJcbjxzZWN0aW9uIGNsYXNzPVwicmVzZXJ2ZW5hbWVob2xkZXJcIj5cclxuICA8aDIgaWQ9XCJyZXNlcnZlbmFtZVwiPjwvaDI+XHJcbiAgPHVsIGNsYXNzPVwicmVzZXJ2ZW5hbWVkZXRhaWxcIj5cclxuICAgIDxsaSBpZD1cInJlc2VydmV0eXBlXCI+IDwvbGk+XHJcbiAgICA8bGkgaWQ9XCJyZXNlcnZlbGFuZ3VhZ2VcIj4gPC9saT5cclxuICAgIDxsaSBpZD1cInJlc2VydmVzdGF0dXNcIj4gPC9saT5cclxuICAgIDxsaSBpZD0ncmVzZXJ2ZWF2ZXJhZ2VSdW50aW1lJz4gPC9saT5cclxuICA8L3VsPlxyXG48L3NlY3Rpb24+XHJcbjxzZWN0aW9uIGNsYXNzPVwicmVzZXJ2ZWRhdGVob2xkZXJcIj5cclxuICA8aDIgaWQ9XCJyZXNlcnZhdGlvbmNvdW50XCI+PC9oMj5cclxuICA8dWwgY2xhc3M9XCJyZXNlcnZlZGF0ZVwiPjwvdWw+XHJcbjwvc2VjdGlvbj5cclxuPHNlY3Rpb24gY2xhc3M9XCJhZGRyZXNlcnZhdGlvblwiPlxyXG4gIDxoMj5BZGQgYSByZXNlcnZhdGlvbjwvaDI+XHJcbiAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cclxuICA8aW5wdXRcclxuICAgIGlkPVwic3RhcnRkYXRlXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIHBsYWNlaG9sZGVyPVwic3RhcnQgRGF0ZVwiXHJcbiAgICBvbmZvY3VzPVwiKHRoaXMudHlwZT0nZGF0ZScpXCJcclxuICAvPlxyXG4gIDxpbnB1dFxyXG4gICAgaWQ9XCJlbmRkYXRlXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIHBsYWNlaG9sZGVyPVwiRW5kIERhdGVcIlxyXG4gICAgb25mb2N1cz1cIih0aGlzLnR5cGU9J2RhdGUnKVwiXHJcbiAgLz5cclxuICA8YnV0dG9uIGNsYXNzPVwicmVzZXJ2ZWJ1dHRvblwiIGlkPVwicmVzZXJ2ZWJ1dHRvblwiPlJlc2VydmU8L2J1dHRvbj5cclxuPC9zZWN0aW9uPlxyXG48L3NlY3Rpb24+YDtcclxuZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25VSTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=