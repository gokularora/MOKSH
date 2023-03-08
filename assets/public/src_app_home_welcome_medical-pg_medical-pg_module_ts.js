(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_welcome_medical-pg_medical-pg_module_ts"],{

/***/ 60179:
/*!**********************************************************************!*\
  !*** ./src/app/home/welcome/medical-pg/medical-pg-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalPgPageRoutingModule": () => (/* binding */ MedicalPgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _medical_pg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-pg.page */ 28536);




const routes = [
    {
        path: '',
        component: _medical_pg_page__WEBPACK_IMPORTED_MODULE_0__.MedicalPgPage
    }
];
let MedicalPgPageRoutingModule = class MedicalPgPageRoutingModule {
};
MedicalPgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MedicalPgPageRoutingModule);



/***/ }),

/***/ 83980:
/*!**************************************************************!*\
  !*** ./src/app/home/welcome/medical-pg/medical-pg.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalPgPageModule": () => (/* binding */ MedicalPgPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _medical_pg_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-pg-routing.module */ 60179);
/* harmony import */ var _medical_pg_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medical-pg.page */ 28536);








let MedicalPgPageModule = class MedicalPgPageModule {
};
MedicalPgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _medical_pg_routing_module__WEBPACK_IMPORTED_MODULE_1__.MedicalPgPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_medical_pg_page__WEBPACK_IMPORTED_MODULE_2__.MedicalPgPage]
    })
], MedicalPgPageModule);



/***/ }),

/***/ 28536:
/*!************************************************************!*\
  !*** ./src/app/home/welcome/medical-pg/medical-pg.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalPgPage": () => (/* binding */ MedicalPgPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_medical_pg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./medical-pg.page.html */ 76862);
/* harmony import */ var _medical_pg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-pg.page.scss */ 54412);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let MedicalPgPage = class MedicalPgPage {
    constructor(headerTitleService) {
        this.headerTitleService = headerTitleService;
        this.headerTitleService.title = "Medical PG";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
    }
};
MedicalPgPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService }
];
MedicalPgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-medical-pg',
        template: _raw_loader_medical_pg_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_medical_pg_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MedicalPgPage);



/***/ }),

/***/ 54412:
/*!**************************************************************!*\
  !*** ./src/app/home/welcome/medical-pg/medical-pg.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2FsLXBnLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 76862:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/welcome/medical-pg/medical-pg.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n  <app-top-links></app-top-links>\n\n  <div class=\"main-cont content-cont\">\n   <section>\n    <h5 class=\"hdng-line\">\n      <span>Medical PG in India </span>\n    </h5>\n\n    <div class=\"white-box p-2\">\n    <p>\n      The doctors learn throughout their life. Just having MBBS degree after cracking NEET-UG is just a beginning of your journey. The most successful moment is when you would enter into Post Graduate course (PG) leading to MD / MS degree via NEET-PG <strong>(From 2022 onward, it is being replaced by NEXT)</strong> . Around 160,000 doctors appear for NEET-PG for a seat while only 9,500 PG seats are available in India. The ratio of UG to PG seats in India is extremely skewed allowing only one doctor to reach PG stage out of 12 who appear for the NEET-PG!\n    </p>\n    <p>\n      The doctors in India and those going abroad have understood that the exit exam from MBBS is also an entry exam for PG courses. Accordingly, all the doctors start preparing for NEXT since 1st year of MBBS course. NEXT 1 is based mainly on theory while NEXT 2 would be practical. In order to get the practice license, you would need to qualify in these exams else would not get the license.\n    </p>\n    <p>\n      Every student advised by MOKSH gets access to NEXT Exam Prep coaching as a default. It ensures proper career planning and execution.\n    </p>\n    <ion-button [routerLink]=\"['/home/online-coaching']\" expand=\"block\">     \n     Get FREE Trial for FMGE / NEXT Coaching      \n    </ion-button>\n  </div>\n   </section>\n\n   <section>\n    <h5 class=\"hdng-line\">\n      <span>Residency in USA (Clinical PG)</span>\n    </h5>\n    <div class=\"white-box p-2\">\n    <p>\n      There is a misconception in India that USMLE exam to enter the Medical PG program in USA is difficult. In fact 96% of the student pass Step 1 exam and the ratio of successful clinical graduate to enter into residency (PG program) is 2:1 in USA. Another huge benefit of pursuing your residency in USA is the high stipend (around USD 60,000 or Rs. 45 Lacs per year during the course). It allows the doctors to settle down in life much faster than in India.\n    </p>\n    <p>\n      The quality of environment and the level of respect apart from systematic approach to healthcare in USA are far better than in India. Accordingly, around 26% of the IMG in USA are Indian doctors. The students have started this course from the 1st year itself. MOKSH is currently supporting 650+ Indian doctors in India and 7 different countries by providing:\n    </p>\n\n    <ul class=\"bullet-list md\">\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Clear & honest guidance towards the career plan </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>USMLE Step 1 and 2CK coaching with live lectures </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Test platform for Step1 and 2CK exams</li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Clerkship in US based teaching hospitals </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Full guidance for CV creation </li>    \n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Visa interview training/li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Support for ERAS application system</li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Services includes guidance for Match</li>\n    </ul>\n\n    <ion-button [routerLink]=\"['/home/online-coaching']\"  expand=\"block\">\n      FREE Trial for USMLE Step 1 Coaching      \n    </ion-button>\n    </div>\n   </section>\n\n   <section>\n    <h5 class=\"hdng-line\">\n      <span>Medical PG in Germany </span>\n    </h5>\n    <div class=\"white-box p-2\">\n    <p>\n      Many doctors in India study at private medical colleges wherein the quality of education is quite low. Apart, the patients flow is very low due to small size of hospitals in rural belt of India. Such doctors do not have the courage to opt for USMLE exam and do not start their journey to prepare for it at the right time. The difficulty in getting a medical PG seat in India and not preparing for USMLE exams leads the doctors to go for German option. Also, the guaranteed residency in Germany is a very attractive factor for the doctors to opt for this option.\n    </p>\n    <p>\n      MOKSH supports the applicants with various services including:\n    </p>\n\n    <ul class=\"bullet-list md\">\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Clear & honest guidance towards the complicated career plan </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>A1 and A2 level of German language tutoring with live online coaching </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Test platform for B1 and B2 level of German language</li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Placement into C1 and FSP coaching within Germany </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Visa interview training </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Opening the blocked account before Visa interview </li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Support for CV creation and hospital applications in Germany</li>\n      <li><ion-icon name=\"checkmark-circle\"></ion-icon>Support for Blue Card application </li>\n    </ul>\n\n    <ion-button [routerLink]=\"['/home/online-coaching']\"  expand=\"block\">\n      Access to German lang + FSP Course       \n    </ion-button>\n  </div>\n  \n   </section>\n  </div>\n\n</ion-content>\n<app-footer-short-cut></app-footer-short-cut>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_welcome_medical-pg_medical-pg_module_ts.js.map