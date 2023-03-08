(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_admission-guidance_admission-guidance_module_ts"],{

/***/ 81339:
/*!************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/admission-guidance/admission-guidance-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmissionGuidancePageRoutingModule": () => (/* binding */ AdmissionGuidancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _admission_guidance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admission-guidance.page */ 39039);




const routes = [
    {
        path: '',
        component: _admission_guidance_page__WEBPACK_IMPORTED_MODULE_0__.AdmissionGuidancePage
    }
];
let AdmissionGuidancePageRoutingModule = class AdmissionGuidancePageRoutingModule {
};
AdmissionGuidancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdmissionGuidancePageRoutingModule);



/***/ }),

/***/ 26157:
/*!****************************************************************************************!*\
  !*** ./src/app/home/college-predictor/admission-guidance/admission-guidance.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmissionGuidancePageModule": () => (/* binding */ AdmissionGuidancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _admission_guidance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admission-guidance-routing.module */ 81339);
/* harmony import */ var _admission_guidance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admission-guidance.page */ 39039);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AdmissionGuidancePageModule = class AdmissionGuidancePageModule {
};
AdmissionGuidancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _admission_guidance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdmissionGuidancePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_admission_guidance_page__WEBPACK_IMPORTED_MODULE_1__.AdmissionGuidancePage]
    })
], AdmissionGuidancePageModule);



/***/ }),

/***/ 39039:
/*!**************************************************************************************!*\
  !*** ./src/app/home/college-predictor/admission-guidance/admission-guidance.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmissionGuidancePage": () => (/* binding */ AdmissionGuidancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_admission_guidance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admission-guidance.page.html */ 91339);
/* harmony import */ var _admission_guidance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admission-guidance.page.scss */ 66299);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let AdmissionGuidancePage = class AdmissionGuidancePage {
    constructor(headerTitleService) {
        this.headerTitleService = headerTitleService;
        this.headerTitleService.title = "Live Admission Guidance";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
    }
};
AdmissionGuidancePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService }
];
AdmissionGuidancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-admission-guidance',
        template: _raw_loader_admission_guidance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admission_guidance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdmissionGuidancePage);



/***/ }),

/***/ 66299:
/*!****************************************************************************************!*\
  !*** ./src/app/home/college-predictor/admission-guidance/admission-guidance.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pc3Npb24tZ3VpZGFuY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 91339:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/admission-guidance/admission-guidance.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n\n<ion-content class=\"content-cont\">\n  <app-top-links-predictor></app-top-links-predictor>\n  <div class=\"main-cont\">\n    <h5 class=\"hdng-line\">\n      <span>Live Admission Guidance</span>\n    </h5>   \n    <section class=\"grey-box primary-light p-2\">\n      <h5 class=\"hdng-line\">\n        <span>WHY THIS SERVICE?</span>\n      </h5>\n      <p>\n        The system of seat allocation is an extremely complex one due to multi-level counselling such as All India and State Level. Further, the complications are created due to various quotas for reservations of the seats. The number of medical aspirants through NEET exam is constantly going up changing the competition scenario. In this dynamic circumstances, a scientific approach and hand holding is needed by the student to understand the actual options based on cut-offs and budget of the student to study to arrive at a final decision quickly.\n      </p>\n    </section>\n    <section class=\"grey-box secondary-light p-2\">\n      <h5 class=\"hdng-line\">\n        <span>WHAT WILL YOU GET?</span>\n      </h5>\n      <p>\n        You can expect the group counselling sessions supported by personal report of individual students under this service. These sessions would clarify your position to get the medical seat in India in either government, private or deemed universities.\n      </p>\n      <p>\n        Just attend these special sessions kept for All India Counselling and the state level counselling (for 25 states in India).\n      </p>\n    </section>\n    <section class=\"grey-box success-light p-2\">\n      <h5 class=\"hdng-line\">\n        <span>WHAT IS THE COST?</span>\n      </h5>\n      <p>\n        In case you wish to avail of this service from MOKSH, you would have to register for PRO Package within NEET Predictor. You can always upgrade from FREE Silver package to PRO by paying merely Rs. 4,999/=.\n      </p>\n    </section>\n    <section class=\"mt-0\">\n      <ion-button [routerLink]=\"['/home/college-predictor/predictor-checkout','upgrade']\" routerLinkActive=\"router-link-active\"  expand=\"block\">Upgrade</ion-button>\n    </section>\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_admission-guidance_admission-guidance_module_ts.js.map