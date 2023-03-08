(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_other-pages_special-offers_special-offers_module_ts-src_app_services_loader_service_ts"],{

/***/ 17530:
/*!**********************************************************************************!*\
  !*** ./src/app/home/other-pages/special-offers/special-offers-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialOffersPageRoutingModule": () => (/* binding */ SpecialOffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _special_offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special-offers.page */ 18574);




const routes = [
    {
        path: '',
        component: _special_offers_page__WEBPACK_IMPORTED_MODULE_0__.SpecialOffersPage
    }
];
let SpecialOffersPageRoutingModule = class SpecialOffersPageRoutingModule {
};
SpecialOffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecialOffersPageRoutingModule);



/***/ }),

/***/ 36567:
/*!**************************************************************************!*\
  !*** ./src/app/home/other-pages/special-offers/special-offers.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialOffersPageModule": () => (/* binding */ SpecialOffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _special_offers_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special-offers-routing.module */ 17530);
/* harmony import */ var _special_offers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-offers.page */ 18574);








let SpecialOffersPageModule = class SpecialOffersPageModule {
};
SpecialOffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _special_offers_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpecialOffersPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_special_offers_page__WEBPACK_IMPORTED_MODULE_2__.SpecialOffersPage]
    })
], SpecialOffersPageModule);



/***/ }),

/***/ 18574:
/*!************************************************************************!*\
  !*** ./src/app/home/other-pages/special-offers/special-offers.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialOffersPage": () => (/* binding */ SpecialOffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_special_offers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./special-offers.page.html */ 54220);
/* harmony import */ var _special_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./special-offers.page.scss */ 74833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);








let SpecialOffersPage = class SpecialOffersPage {
    constructor(headerTitle, apiApplicationService, storage, apiCRMService) {
        this.headerTitle = headerTitle;
        this.apiApplicationService = apiApplicationService;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
        this.arrOffers = [];
        this.arrUserData = [];
        this.headerTitle.title = "Special Offers";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.getUserData();
    }
    doRefresh(event) {
        this.getOffers();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getOffers() {
        let postData = { "IsActive": true, "IsPromoteToDashboard": true };
        this.apiApplicationService.getPromoCode(JSON.stringify(postData)).then(resp => {
            this.arrOffers = resp;
            if (!(this.arrUserData["leadID"] == 0 || this.arrUserData["leadID"] == null)) {
                this.getUserOffers();
            }
        });
    }
    getUserOffers() {
        let postData = { "IsActive": true, "leadID": this.arrUserData["leadID"] };
        this.apiApplicationService.getPromoCode(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                resp.forEach(el => {
                    this.arrOffers.push(el);
                });
            }
        });
    }
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.apiCRMService.arrUserData = resp;
            this.arrUserData = resp;
            this.getOffers();
        });
    }
};
SpecialOffersPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_3__.ApiApplicationService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__.ApiCRMService }
];
SpecialOffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-special-offers',
        template: _raw_loader_special_offers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_special_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpecialOffersPage);



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

/***/ 74833:
/*!**************************************************************************!*\
  !*** ./src/app/home/other-pages/special-offers/special-offers.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjaWFsLW9mZmVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 54220:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/other-pages/special-offers/special-offers.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n  <div class=\"main-cont\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    \n    <ion-grid fixed class=\"offer-list\">\n      <ion-row *ngFor=\"let item of arrOffers\">\n        <ion-col size=\"4\">\n          <div class=\"offer-dep\">MBBS Abroad</div>\n          <div>\n            <div *ngIf=\"item.discountType == 'Amount'\" class=\"amnt-cont\">{{item.discount | currency:'INR':'symbol':'3.0'}} <small>OFF</small></div>\n            <div *ngIf=\"item.discountType == 'Percentage'\" class=\"amnt-cont\">{{item.discount}}% <small>OFF</small></div>\n            <div *ngIf=\"item.discountType == 'Service'\" class=\"amnt-cont\">{{item.discount| currency:'INR':'symbol':'0.0'}} <small>Charges</small></div>\n          </div>\n        \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>{{item.description}}</div>\n\n          <div class=\"offer-code\">Use Code: {{item.promoCode}}</div>\n          <div class=\"expiry\">Expiry date: {{item.promoExpiryDate | date: 'dd/MM/yyyy'}}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n    \n    <ng-container *ngIf=\"arrOffers?.length == 0\">\n      <div class=\"no-data text-center\">\n        <h3>Oops! No Offers Available.</h3>\n        <ion-icon name=\"sad-outline\"></ion-icon>\n        <h5>No any offer is available at this time. Kindly check after some time.</h5>\n\n        <ion-button [routerLink]=\"['/home/welcome']\" size=\"medium\" shape=\"round\" color=\"primary\">\n          Back to Home\n        </ion-button>\n      </div>\n    </ng-container>\n  </div>\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_other-pages_special-offers_special-offers_module_ts-src_app_services_loader_service_ts.js.map