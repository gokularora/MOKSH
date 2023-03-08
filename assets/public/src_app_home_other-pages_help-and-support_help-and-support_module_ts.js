(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_other-pages_help-and-support_help-and-support_module_ts"],{

/***/ 91329:
/*!**************************************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/help-and-support-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportPageRoutingModule": () => (/* binding */ HelpAndSupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _help_and_support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-and-support.page */ 68278);




const routes = [
    {
        path: '',
        component: _help_and_support_page__WEBPACK_IMPORTED_MODULE_0__.HelpAndSupportPage
    },
    {
        path: 'faqs/:contentCategoryId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_other-pages_help-and-support_faqs_faqs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./faqs/faqs.module */ 1107)).then(m => m.FaqsPageModule)
    }
];
let HelpAndSupportPageRoutingModule = class HelpAndSupportPageRoutingModule {
};
HelpAndSupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpAndSupportPageRoutingModule);



/***/ }),

/***/ 79159:
/*!******************************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/help-and-support.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportPageModule": () => (/* binding */ HelpAndSupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _help_and_support_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-and-support-routing.module */ 91329);
/* harmony import */ var _help_and_support_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-and-support.page */ 68278);








let HelpAndSupportPageModule = class HelpAndSupportPageModule {
};
HelpAndSupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _help_and_support_routing_module__WEBPACK_IMPORTED_MODULE_1__.HelpAndSupportPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_help_and_support_page__WEBPACK_IMPORTED_MODULE_2__.HelpAndSupportPage]
    })
], HelpAndSupportPageModule);



/***/ }),

/***/ 68278:
/*!****************************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/help-and-support.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpAndSupportPage": () => (/* binding */ HelpAndSupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_help_and_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./help-and-support.page.html */ 30249);
/* harmony import */ var _help_and_support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-and-support.page.scss */ 37907);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);









let HelpAndSupportPage = class HelpAndSupportPage {
    constructor(headerTitle, apiGeneralService, router, loader) {
        this.headerTitle = headerTitle;
        this.apiGeneralService = apiGeneralService;
        this.router = router;
        this.loader = loader;
        this.arrCategory = [];
        this.webAssetsPath = "";
        this.headerTitle.title = "Help & Support";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.getFaqCategory();
    }
    getFaqCategory() {
        this.loader.presentLoading();
        let postData = { "IsActive": true, "ContentFor": "FAQ" };
        this.apiGeneralService.getContentCategory(JSON.stringify(postData)).then(resp => {
            this.arrCategory = resp;
            this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/category";
            this.loader.loadingDismiss();
        }).catch(err => {
            console.log(err);
            this.loader.loadingDismiss();
        });
    }
    onClickCategory(contentCategoryId, categoryName) {
        this.apiGeneralService.contentCategoryName = categoryName;
        this.router.navigate(['/home/other-pages/help-and-support/faqs', contentCategoryId]);
    }
};
HelpAndSupportPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
HelpAndSupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-help-and-support',
        template: _raw_loader_help_and_support_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_help_and_support_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HelpAndSupportPage);



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

/***/ 37907:
/*!******************************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/help-and-support.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWFuZC1zdXBwb3J0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 30249:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/other-pages/help-and-support/help-and-support.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-top-links></app-top-links>\n  <div class=\"main-cont\">\n    <h5>What can we help you with?</h5>\n    <ion-grid class=\"box-prog\">\n      <ion-row >\n        <ion-col size=\"6\" *ngFor=\"let item of arrCategory\" (click)=\"onClickCategory(item.contentCategoryId, item.categoryName)\">         \n          <div>  \n            <div>\n              <img src=\"{{this.webAssetsPath}}/{{item.contentCategoryId}}/{{item.categoryImage}}\" />\n            </div>      \n            <div>\n              <ion-label>{{item.categoryName}}</ion-label>\n            </div>\n          </div>\n        </ion-col>       \n      </ion-row>\n    </ion-grid>    \n  </div>\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_other-pages_help-and-support_help-and-support_module_ts.js.map