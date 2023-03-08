(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_thank-you_thank-you_module_ts-src_app_services_loader_service_ts"],{

/***/ 20995:
/*!*******************************************************************************!*\
  !*** ./src/app/home/application-center/thank-you/thank-you-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPageRoutingModule": () => (/* binding */ ThankYouPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thank-you.page */ 73351);




const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_0__.ThankYouPage
    }
];
let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {
};
ThankYouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThankYouPageRoutingModule);



/***/ }),

/***/ 11714:
/*!***********************************************************************!*\
  !*** ./src/app/home/application-center/thank-you/thank-you.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPageModule": () => (/* binding */ ThankYouPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thank-you-routing.module */ 20995);
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you.page */ 73351);








let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_1__.ThankYouPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_2__.ThankYouPage]
    })
], ThankYouPageModule);



/***/ }),

/***/ 73351:
/*!*********************************************************************!*\
  !*** ./src/app/home/application-center/thank-you/thank-you.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPage": () => (/* binding */ ThankYouPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./thank-you.page.html */ 62465);
/* harmony import */ var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thank-you.page.scss */ 81573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);






let ThankYouPage = class ThankYouPage {
    constructor(router, headerTitle) {
        this.router = router;
        this.headerTitle = headerTitle;
        this.headerTitle.title = "Thank you";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
    }
};
ThankYouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService }
];
ThankYouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-thank-you',
        template: _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ThankYouPage);



/***/ }),

/***/ 92708:
/*!**************************************************!*\
  !*** ./src/app/services/header-title.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderTitleService": () => (/* binding */ HeaderTitleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let HeaderTitleService = class HeaderTitleService {
    constructor() {
        this.title = "";
        this.isBack = false;
        this.isMenu = true;
    }
};
HeaderTitleService.ctorParameters = () => [];
HeaderTitleService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], HeaderTitleService);



/***/ }),

/***/ 38555:
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoaderService = class LoaderService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
                duration: 7000,
                cssClass: 'custom-loader',
                spinner: 'lines'
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    loadingDismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => {
                return this.loadingController.dismiss();
            }, 0);
        });
    }
};
LoaderService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoaderService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ 81573:
/*!***********************************************************************!*\
  !*** ./src/app/home/application-center/thank-you/thank-you.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUyxlQUFBO0FBRVQiLCJmaWxlIjoidGhhbmsteW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue2ZvbnQtc2l6ZTogNHJlbTt9Il19 */");

/***/ }),

/***/ 62465:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/thank-you/thank-you.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-cont thank you-cont text-center\">\r\n    \r\n    <br><br>\r\n    <br>\r\n    <ion-icon name=\"happy-outline\" color=\"success\"></ion-icon>\r\n    <br>\r\n    <ion-text color=\"success\">\r\n      <h1>Thank you</h1>\r\n    </ion-text>\r\n    <br><br>\r\n      <ion-text color=\"medium\">\r\n        <h4>We have received your request for payment.</h4>\r\n      </ion-text>\r\n   \r\n\r\n  </div>\r\n\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_thank-you_thank-you_module_ts-src_app_services_loader_service_ts.js.map