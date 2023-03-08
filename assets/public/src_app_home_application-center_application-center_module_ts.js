(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_application-center_module_ts"],{

/***/ 15325:
/*!******************************************************************************!*\
  !*** ./src/app/home/application-center/application-center-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationCenterPageRoutingModule": () => (/* binding */ ApplicationCenterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _application_center_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-center.page */ 53956);




const routes = [
    {
        path: '',
        component: _application_center_page__WEBPACK_IMPORTED_MODULE_0__.ApplicationCenterPage
    },
    {
        path: 'universities',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_universities_universities_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../universities/universities.module */ 88412)).then(m => m.UniversitiesPageModule)
    },
    {
        path: 'personal-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_personal-details_personal-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./personal-details/personal-details.module */ 57997)).then(m => m.PersonalDetailsPageModule)
    },
    {
        path: 'academic-details/:appID',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_academic-details_academic-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./academic-details/academic-details.module */ 42172)).then(m => m.AcademicDetailsPageModule)
    },
    {
        path: 'upload-documents/:appID',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_upload-documents_upload-documents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./upload-documents/upload-documents.module */ 22184)).then(m => m.UploadDocumentsPageModule)
    },
    {
        path: 'service-selection/:appID',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_service-selection_service-selection_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./service-selection/service-selection.module */ 77061)).then(m => m.ServiceSelectionPageModule)
    },
    {
        path: 'payment-selection/:appID',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_application-center_payment-selection_payment-selection_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment-selection/payment-selection.module */ 45935)).then(m => m.PaymentSelectionPageModule)
    },
    {
        path: 'thank-you',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_thank-you_thank-you_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./thank-you/thank-you.module */ 11714)).then(m => m.ThankYouPageModule)
    },
    {
        path: 'track-application/:appID',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_track-application_track-application_module_ts-src_app_service-8b5059")]).then(__webpack_require__.bind(__webpack_require__, /*! ./track-application/track-application.module */ 40153)).then(m => m.TrackApplicationPageModule)
    },
    {
        path: 'checkout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_checkout_checkout_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 49605)).then(m => m.CheckoutPageModule)
    },
    {
        path: 'service-optional/:appID',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_application-center_service-optional_service-optional_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./service-optional/service-optional.module */ 4977)).then(m => m.ServiceOptionalPageModule)
    }
];
let ApplicationCenterPageRoutingModule = class ApplicationCenterPageRoutingModule {
};
ApplicationCenterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplicationCenterPageRoutingModule);



/***/ }),

/***/ 39386:
/*!**********************************************************************!*\
  !*** ./src/app/home/application-center/application-center.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationCenterPageModule": () => (/* binding */ ApplicationCenterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _application_center_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-center-routing.module */ 15325);
/* harmony import */ var _application_center_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-center.page */ 53956);







let ApplicationCenterPageModule = class ApplicationCenterPageModule {
};
ApplicationCenterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _application_center_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplicationCenterPageRoutingModule
        ],
        declarations: [_application_center_page__WEBPACK_IMPORTED_MODULE_1__.ApplicationCenterPage]
    })
], ApplicationCenterPageModule);



/***/ }),

/***/ 53956:
/*!********************************************************************!*\
  !*** ./src/app/home/application-center/application-center.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationCenterPage": () => (/* binding */ ApplicationCenterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_application_center_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./application-center.page.html */ 73967);
/* harmony import */ var _application_center_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application-center.page.scss */ 60786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ApplicationCenterPage = class ApplicationCenterPage {
    constructor() { }
    ngOnInit() {
    }
};
ApplicationCenterPage.ctorParameters = () => [];
ApplicationCenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-application-center',
        template: _raw_loader_application_center_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_application_center_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApplicationCenterPage);



/***/ }),

/***/ 60786:
/*!**********************************************************************!*\
  !*** ./src/app/home/application-center/application-center.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi1jZW50ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 73967:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/application-center.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>application-center</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_application-center_module_ts.js.map