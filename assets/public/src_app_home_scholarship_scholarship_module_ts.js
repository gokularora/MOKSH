(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_scholarship_scholarship_module_ts"],{

/***/ 16698:
/*!****************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipPageRoutingModule": () => (/* binding */ ScholarshipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scholarship_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholarship.page */ 4124);




const routes = [
    {
        path: '',
        component: _scholarship_page__WEBPACK_IMPORTED_MODULE_0__.ScholarshipPage
    },
    {
        path: 'scholarship-home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_scholarship_scholarship-home_scholarship-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./scholarship-home/scholarship-home.module */ 37794)).then(m => m.ScholarshipHomePageModule)
    },
    {
        path: 'scholarship-test',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_scholarship_scholarship-test_scholarship-test_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./scholarship-test/scholarship-test.module */ 31073)).then(m => m.ScholarshipTestPageModule)
    }
];
let ScholarshipPageRoutingModule = class ScholarshipPageRoutingModule {
};
ScholarshipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScholarshipPageRoutingModule);



/***/ }),

/***/ 81826:
/*!********************************************************!*\
  !*** ./src/app/home/scholarship/scholarship.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipPageModule": () => (/* binding */ ScholarshipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scholarship_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholarship-routing.module */ 16698);
/* harmony import */ var _scholarship_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship.page */ 4124);







let ScholarshipPageModule = class ScholarshipPageModule {
};
ScholarshipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scholarship_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScholarshipPageRoutingModule
        ],
        declarations: [_scholarship_page__WEBPACK_IMPORTED_MODULE_1__.ScholarshipPage]
    })
], ScholarshipPageModule);



/***/ }),

/***/ 4124:
/*!******************************************************!*\
  !*** ./src/app/home/scholarship/scholarship.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipPage": () => (/* binding */ ScholarshipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scholarship_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scholarship.page.html */ 17562);
/* harmony import */ var _scholarship_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship.page.scss */ 85590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ScholarshipPage = class ScholarshipPage {
    constructor() { }
    ngOnInit() {
    }
};
ScholarshipPage.ctorParameters = () => [];
ScholarshipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-scholarship',
        template: _raw_loader_scholarship_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scholarship_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScholarshipPage);



/***/ }),

/***/ 85590:
/*!********************************************************!*\
  !*** ./src/app/home/scholarship/scholarship.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hvbGFyc2hpcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 17562:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/scholarship/scholarship.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>scholarship</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_scholarship_scholarship_module_ts.js.map