(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_predictor-report_predictor-filter_predictor-filter_module_ts"],{

/***/ 10825:
/*!*************************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-filter/predictor-filter-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorFilterPageRoutingModule": () => (/* binding */ PredictorFilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _predictor_filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predictor-filter.page */ 62817);




const routes = [
    {
        path: '',
        component: _predictor_filter_page__WEBPACK_IMPORTED_MODULE_0__.PredictorFilterPage
    }
];
let PredictorFilterPageRoutingModule = class PredictorFilterPageRoutingModule {
};
PredictorFilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PredictorFilterPageRoutingModule);



/***/ }),

/***/ 20719:
/*!*****************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-filter/predictor-filter.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorFilterPageModule": () => (/* binding */ PredictorFilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _predictor_filter_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-filter-routing.module */ 10825);
/* harmony import */ var _predictor_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predictor-filter.page */ 62817);








let PredictorFilterPageModule = class PredictorFilterPageModule {
};
PredictorFilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _predictor_filter_routing_module__WEBPACK_IMPORTED_MODULE_1__.PredictorFilterPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_predictor_filter_page__WEBPACK_IMPORTED_MODULE_2__.PredictorFilterPage]
    })
], PredictorFilterPageModule);



/***/ }),

/***/ 62817:
/*!***************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-filter/predictor-filter.page.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorFilterPage": () => (/* binding */ PredictorFilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_predictor_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./predictor-filter.page.html */ 52866);
/* harmony import */ var _predictor_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-filter.page.scss */ 11346);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let PredictorFilterPage = class PredictorFilterPage {
    constructor(apiPredictorService, apiGeneralService, navCtrl, storage, toastr, router) {
        this.apiPredictorService = apiPredictorService;
        this.apiGeneralService = apiGeneralService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastr = toastr;
        this.router = router;
        this.arrPredictorFormSelection = [];
        this.arrResState = null;
        this.arrResCity = null;
        this.arrBudget = null;
        this.arrManagementType = null;
        this.postData = { 'stateId': null, 'managementTypeId': null, 'budgetId': null };
    }
    ngOnInit() {
        this.getPredictorFormSelection();
        this.getManagemnetType();
        this.getBudget();
        setTimeout(() => {
            if (this.apiPredictorService.arrPredictorFilter != null) {
                this.postData = this.apiPredictorService.arrPredictorFilter;
            }
        }, 500);
    }
    getPredictorFormSelection() {
        this.storage.getObject("predictorForm").then((resp) => {
            this.arrPredictorFormSelection = resp;
            if (resp["CounsellingID"] == 1) {
                this.getResState("", 102);
            }
            else if (resp["CounsellingID"] == 2) {
                this.getResCity("", resp["StateID"]);
            }
        });
    }
    getResState($event, _countryID) {
        let postData = { "IsActive": true, "countryID": _countryID };
        this.apiPredictorService.getCPState(JSON.stringify(postData)).then(resp => {
            this.arrResState = resp;
        });
    }
    getResCity($event, _stateID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let stateID = ($event == "") ? _stateID : $event.target.value;
            let postData = { "IsActive": true, "stateID": stateID };
            yield this.apiGeneralService.getResCity(JSON.stringify(postData)).then(resp => {
                this.arrResCity = resp;
            }).catch(err => {
                console.log("getResCity: " + err);
            });
        });
    }
    getBudget() {
        let postData = { 'isActive': true };
        this.apiPredictorService.getBudget(JSON.stringify(postData)).then(resp => {
            this.arrBudget = (resp.length == 0) ? null : resp;
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getBudget()=> " + ex);
        });
    }
    getManagemnetType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'isActive': true };
            yield this.apiPredictorService.getManagementType(JSON.stringify(postData)).then(resp => {
                this.arrManagementType = (resp.length == 0) ? null : resp;
            }).catch(ex => {
                console.log("getUniversityType()=> " + ex);
            });
        });
    }
    goBack() { this.navCtrl.back(); }
    resetFilter() {
        this.postData = { 'stateId': null, 'managementTypeId': null, 'budgetId': null };
        this.apiPredictorService.arrPredictorFilter = null;
        this.backReload();
    }
    backReload() {
        let navigationExtras = {
            state: { filter: '2' }
        };
        this.router.navigate(['/home/college-predictor/predictor-report'], navigationExtras);
    }
    onClickFilter() {
        this.apiPredictorService.arrPredictorFilter = this.postData;
        this.backReload();
    }
};
PredictorFilterPage.ctorParameters = () => [
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__.ApiPredictorService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
PredictorFilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-predictor-filter',
        template: _raw_loader_predictor_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_predictor_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PredictorFilterPage);



/***/ }),

/***/ 11346:
/*!*****************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-filter/predictor-filter.page.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  width: 100%;\n}\n\nion-item ion-label {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3Rvci1maWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsV0FBQTtBQUVYOztBQURBO0VBQW1CLGlCQUFBO0FBS25CIiwiZmlsZSI6InByZWRpY3Rvci1maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbnt3aWR0aDogMTAwJTt9XHJcbmlvbi1pdGVtIGlvbi1sYWJlbHtmb250LXNpemU6IDAuOXJlbTt9XHJcbiJdfQ== */");

/***/ }),

/***/ 52866:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/predictor-report/predictor-filter/predictor-filter.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\t<ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" ios=\"filter-outline\" md=\"filter-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Filter</ion-title>\n    <ion-buttons fill=\"outline\" slot=\"end\">\n\t\t\t<ion-button (click)=\"goBack()\">\n\t\t\t\tCancel\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>  \n      <ion-col size=\"12\" *ngIf=\"arrResState != null\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label>State</ion-label>\n          <ion-select [(ngModel)]=\"postData.stateId\" interface=\"action-sheet\" (ionChange)=\"getResCity($event,'')\">\n            <ion-select-option [value]=\"item.stateId\" *ngFor=\"let item of arrResState\">{{item.stateName}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>    \n               \n      <ion-col size=\"12\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label>University Type</ion-label>\n          <ion-select [(ngModel)]=\"postData.managementTypeId\" interface=\"action-sheet\" multiple=\"true\" >\n            <ion-select-option [value]=\"item.managementTypeId\" *ngFor=\"let item of arrManagementType\">{{item.managementType}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>      \n      <ion-col size=\"12\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label>Budget</ion-label>\n          <ion-select [(ngModel)]=\"postData.budgetId\" interface=\"action-sheet\">\n            <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col> \n      <ion-col size=\"6\">\n        <section class=\"btn-cont\">\n          <ion-button color=\"medium\" size=\"medium\" extend=\"block\" (click)=\"resetFilter()\">\n            <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n            Reset</ion-button>\n        </section>\n      </ion-col>\n      <ion-col size=\"6\">\n        <section class=\"btn-cont\">\n          <ion-button color=\"primary\" size=\"medium\" extend=\"block\" (click)=\"onClickFilter()\">\n            <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon> Search</ion-button>\n        </section>\n      </ion-col>    \n    </ion-row>\n  </ion-grid>  \n</ion-content>\n<app-footer></app-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_predictor-report_predictor-filter_predictor-filter_module_ts.js.map