(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_index_module_ts"],{

/***/ 30283:
/*!***********************************************!*\
  !*** ./src/app/index/index-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageRoutingModule": () => (/* binding */ IndexPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_services_api-application_service_ts"), __webpack_require__.e("default-src_app_services_api-predictor_service_ts"), __webpack_require__.e("default-src_app_home_college-predictor_college-predictor_module_ts-src_app_services_loader_se-272a7e")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/college-predictor/college-predictor.module */ 70053)).then(m => m.CollegePredictorPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_services_api-application_service_ts"), __webpack_require__.e("src_app_index_login_login_module_ts-src_app_services_header-title_service_ts-src_app_services-5acb4a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 18213)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_services_api-application_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_index_register_register_module_ts-src_app_services_header-title_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 92529)).then(m => m.RegisterPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_index_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 4497)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'otp-verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_index_otp-verification_otp-verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./otp-verification/otp-verification.module */ 95053)).then(m => m.OtpVerificationPageModule)
    },
    {
        path: 'login-new',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_services_api-application_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_index_login-new_login-new_module_ts-src_app_services_header-title_service_ts-src_app_-c1379a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login-new/login-new.module */ 66835)).then(m => m.LoginNewPageModule)
    },
    {
        path: 'otp-verification-new',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api-application_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_index_otp-verification-new_otp-verification-new_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp-verification-new/otp-verification-new.module */ 32634)).then(m => m.OtpVerificationNewPageModule)
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ 30722:
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageModule": () => (/* binding */ IndexPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-routing.module */ 30283);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ 40754);







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage]
    })
], IndexPageModule);



/***/ }),

/***/ 40754:
/*!*************************************!*\
  !*** ./src/app/index/index.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./index.page.html */ 79637);
/* harmony import */ var _index_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page.scss */ 43391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let IndexPage = class IndexPage {
    constructor() { }
    ngOnInit() {
    }
};
IndexPage.ctorParameters = () => [];
IndexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IndexPage);



/***/ }),

/***/ 43391:
/*!***************************************!*\
  !*** ./src/app/index/index.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 79637:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>index</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_index_index_module_ts.js.map