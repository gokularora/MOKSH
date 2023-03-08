(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_other-pages_other-pages_module_ts"],{

/***/ 92550:
/*!****************************************************************!*\
  !*** ./src/app/home/other-pages/other-pages-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPagesPageRoutingModule": () => (/* binding */ OtherPagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _other_pages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-pages.page */ 58673);




const routes = [
    {
        path: '',
        component: _other_pages_page__WEBPACK_IMPORTED_MODULE_0__.OtherPagesPage
    },
    {
        path: 'branch-locator',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_other-pages_branch-locator_branch-locator_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./branch-locator/branch-locator.module */ 10961)).then(m => m.BranchLocatorPageModule)
    },
    {
        path: 'special-offers',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_other-pages_special-offers_special-offers_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./special-offers/special-offers.module */ 36567)).then(m => m.SpecialOffersPageModule)
    },
    {
        path: 'help-and-support',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_other-pages_help-and-support_help-and-support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./help-and-support/help-and-support.module */ 79159)).then(m => m.HelpAndSupportPageModule)
    }
];
let OtherPagesPageRoutingModule = class OtherPagesPageRoutingModule {
};
OtherPagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtherPagesPageRoutingModule);



/***/ }),

/***/ 58215:
/*!********************************************************!*\
  !*** ./src/app/home/other-pages/other-pages.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPagesPageModule": () => (/* binding */ OtherPagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _other_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-pages-routing.module */ 92550);
/* harmony import */ var _other_pages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-pages.page */ 58673);







let OtherPagesPageModule = class OtherPagesPageModule {
};
OtherPagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _other_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherPagesPageRoutingModule
        ],
        declarations: [_other_pages_page__WEBPACK_IMPORTED_MODULE_1__.OtherPagesPage]
    })
], OtherPagesPageModule);



/***/ }),

/***/ 58673:
/*!******************************************************!*\
  !*** ./src/app/home/other-pages/other-pages.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherPagesPage": () => (/* binding */ OtherPagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_other_pages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./other-pages.page.html */ 16498);
/* harmony import */ var _other_pages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other-pages.page.scss */ 63517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let OtherPagesPage = class OtherPagesPage {
    constructor() { }
    ngOnInit() {
    }
};
OtherPagesPage.ctorParameters = () => [];
OtherPagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-other-pages',
        template: _raw_loader_other_pages_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_other_pages_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtherPagesPage);



/***/ }),

/***/ 63517:
/*!********************************************************!*\
  !*** ./src/app/home/other-pages/other-pages.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdGhlci1wYWdlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 16498:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/other-pages/other-pages.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>other-pages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_other-pages_other-pages_module_ts.js.map