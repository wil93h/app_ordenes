"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Orders_Orders_jsx"],{

/***/ "./resources/js/pages/Orders/Orders.jsx":
/*!**********************************************!*\
  !*** ./resources/js/pages/Orders/Orders.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Orders: () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/index */ "./resources/js/models/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./resources/js/utilities/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var PurchaseOrders = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_Orders_PurchaseOrders_PurchaseOrders_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./PurchaseOrders/PurchaseOrders */ "./resources/js/pages/Orders/PurchaseOrders/PurchaseOrders.jsx"));
});
var ViewPurchaseOrders = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_pages_Orders_ViewPurchaseOrders_ViewPurchaseOrders_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ViewPurchaseOrders/ViewPurchaseOrders */ "./resources/js/pages/Orders/ViewPurchaseOrders/ViewPurchaseOrders.jsx"));
});
var Orders = function Orders() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_utilities__WEBPACK_IMPORTED_MODULE_1__.RoutesWithNotFound, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: _models_index__WEBPACK_IMPORTED_MODULE_0__.PublicRoutes.MAIN,
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "",
        children: "Ordenes"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: _models_index__WEBPACK_IMPORTED_MODULE_0__.PublicRoutes.PURCHASE_ORDERS,
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PurchaseOrders, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
      path: _models_index__WEBPACK_IMPORTED_MODULE_0__.PublicRoutes.VIEW_PURCHASE_ORDERS,
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ViewPurchaseOrders, {})
    })]
  });
};

/***/ })

}]);