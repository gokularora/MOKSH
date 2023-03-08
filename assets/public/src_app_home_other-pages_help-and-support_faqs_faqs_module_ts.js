(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_other-pages_help-and-support_faqs_faqs_module_ts"],{

/***/ 17084:
/*!*******************************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/faqs/faqs-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageRoutingModule": () => (/* binding */ FaqsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page */ 54313);




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_0__.FaqsPage
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ 1107:
/*!***********************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/faqs/faqs.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageModule": () => (/* binding */ FaqsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-routing.module */ 17084);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page */ 54313);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_1__.FaqsPage]
    })
], FaqsPageModule);



/***/ }),

/***/ 54313:
/*!*********************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/faqs/faqs.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPage": () => (/* binding */ FaqsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faqs.page.html */ 61604);
/* harmony import */ var _faqs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page.scss */ 60238);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);








let FaqsPage = class FaqsPage {
    constructor(headerTitle, apiGeneralService, route, navCtrl) {
        this.headerTitle = headerTitle;
        this.apiGeneralService = apiGeneralService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.arrFaqs = [];
        this.items = [];
        this.contentCategoryId = 0;
        this.categoryName = "";
        this.headerTitle.title = "Help & Support";
        this.headerTitle.isBack = true;
        this.categoryName = this.apiGeneralService.contentCategoryName;
    }
    ngOnInit() {
        this.contentCategoryId = parseInt(this.route.snapshot.params['contentCategoryId']);
        this.getFaq();
    }
    getFaq() {
        let postData = { "IsActive": true, "ContentCategoryID": this.contentCategoryId };
        this.apiGeneralService.getFaqs(JSON.stringify(postData)).then(resp => {
            this.arrFaqs = resp;
        });
    }
    ionSelected(faqId) {
        if (this.currentSelected == faqId) {
            this.currentSelected = 0;
        }
        else {
            this.currentSelected = faqId;
        }
        //this.currentSelected = !this.currentSelected;
    }
    goBack() {
        let animations = {
            animated: true,
            animationDirection: "back"
        };
        this.navCtrl.back(animations);
    }
};
FaqsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
FaqsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-faqs',
        template: _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faqs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FaqsPage);



/***/ }),

/***/ 60238:
/*!***********************************************************************!*\
  !*** ./src/app/home/other-pages/help-and-support/faqs/faqs.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 61604:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/other-pages/help-and-support/faqs/faqs.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n  <div class=\"main-cont\">\n    <h5>{{categoryName}}</h5>\n   <ul class=\"accordian\">\n     <li *ngFor=\"let item of arrFaqs; let index = index\">\n       <ion-item class=\"ion-no-padding\" lines=\"none\" (click)=\"ionSelected(item.faqId)\" [ngClass]=\"{selected: item.faqId === currentSelected}\">\n        {{item.faqQuestion}}\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>    \n       </ion-item>      \n      <article>\n         <div [innerHTML] = \"item.faqAnswer\"></div>\n      </article>\n     </li>    \n   </ul> \n\n   <ng-container *ngIf=\"arrFaqs?.length==0\">\n    <div class=\"no-data text-center\">\n      <h3>Oops! No data found.</h3>\n      <ion-icon name=\"sad-outline\"></ion-icon>\n      <h5>No any Faq's are available for selected topic.</h5>\n\n      <ion-button (click)=\"goBack()\" size=\"medium\" shape=\"round\" color=\"primary\">\n        Back\n      </ion-button>\n    </div>\n  </ng-container>\n  </div>\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_other-pages_help-and-support_faqs_faqs_module_ts.js.map