(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_counselling-type_counselling-type_module_ts"],{

/***/ 93569:
/*!********************************************************************************************!*\
  !*** ./src/app/home/college-predictor/counselling-type/counselling-type-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounsellingTypePageRoutingModule": () => (/* binding */ CounsellingTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _counselling_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counselling-type.page */ 90673);




const routes = [
    {
        path: '',
        component: _counselling_type_page__WEBPACK_IMPORTED_MODULE_0__.CounsellingTypePage
    }
];
let CounsellingTypePageRoutingModule = class CounsellingTypePageRoutingModule {
};
CounsellingTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CounsellingTypePageRoutingModule);



/***/ }),

/***/ 44522:
/*!************************************************************************************!*\
  !*** ./src/app/home/college-predictor/counselling-type/counselling-type.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounsellingTypePageModule": () => (/* binding */ CounsellingTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _counselling_type_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counselling-type-routing.module */ 93569);
/* harmony import */ var _counselling_type_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counselling-type.page */ 90673);








let CounsellingTypePageModule = class CounsellingTypePageModule {
};
CounsellingTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _counselling_type_routing_module__WEBPACK_IMPORTED_MODULE_1__.CounsellingTypePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_counselling_type_page__WEBPACK_IMPORTED_MODULE_2__.CounsellingTypePage]
    })
], CounsellingTypePageModule);



/***/ }),

/***/ 90673:
/*!**********************************************************************************!*\
  !*** ./src/app/home/college-predictor/counselling-type/counselling-type.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounsellingTypePage": () => (/* binding */ CounsellingTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_counselling_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./counselling-type.page.html */ 45180);
/* harmony import */ var _counselling_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counselling-type.page.scss */ 38036);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/api-predictor.service */ 8478);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);











let CounsellingTypePage = class CounsellingTypePage {
    constructor(headerTitleService, apiGeneral, apiPredictorService, loader, route, storage) {
        this.headerTitleService = headerTitleService;
        this.apiGeneral = apiGeneral;
        this.apiPredictorService = apiPredictorService;
        this.loader = loader;
        this.route = route;
        this.storage = storage;
        this.examId = 0;
        this.arrReviews = [];
        this.webAssetsPathReviews = "";
        this.slideOpts = { slidesPerView: 1.2 };
        this.arrSlider = [];
        this.slideBannerOpts = { slidesPerView: 1, autoplay: true };
        this.AssetsPathSlider = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "slider-images";
        this.arrCounselling = [];
        this.arrSavedPredictor = [];
        this.headerTitleService.isBack = true;
        this.headerTitleService.title = "NEET College Predictor";
        this.examId = this.route.snapshot.params['examId'];
    }
    ionViewWillEnter() {
        this.getUserData(); // getSavedPredictor => getCousellingType()
    }
    ngOnInit() {
        this.getSlider();
        this.getReview();
    }
    doRefresh(event) {
        this.getSlider();
        this.getReview();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getUserData() {
        this.loader.presentLoading();
        this.storage.getObject("userdata").then(resp => {
            this.arrUserData = resp;
            this.getSavedPredictor();
        });
    }
    getCousellingType() {
        let postData = { "IsActive": true };
        this.apiPredictorService.getCousellingType(JSON.stringify(postData)).then(resp => {
            this.arrCounselling = resp.map(t1 => (Object.assign(Object.assign({}, t1), this.arrSavedPredictor.find(t2 => t2.counsellingId === t1.counsellingId))));
            console.log(this.arrCounselling);
            this.loader.loadingDismiss();
        }).catch(ex => {
            console.log("getCousellingType()=> " + ex);
        });
    }
    getSavedPredictor() {
        let postdata = { "ExamID": this.examId, "AppLoginId": this.arrUserData["appLoginID"], "IntakeYear": "2020" };
        this.apiPredictorService.getSavedPredictor(JSON.stringify(postdata)).then(resp => {
            if (resp) {
                this.arrSavedPredictor = resp;
                this.getCousellingType();
                console.log(this.arrCounselling);
            }
        }).catch(ex => {
            console.log("getSavedPredictor" + ex);
            this.loader.loadingDismiss();
        });
    }
    //#region Slider
    getSlider() {
        let postData = { "IsMobile": true, "SliderLocation": "App-Predictor" };
        this.apiGeneral.getSlider(JSON.stringify(postData)).then(resp => {
            this.arrSlider = resp;
        }).catch(ex => {
            console.log("getSlider()=> " + ex);
        });
    }
    //#endregion
    //#region Get Reviews
    getReview() {
        let postData = { "Category": "Predictor", "IsActive": true };
        this.apiGeneral.getReviews(JSON.stringify(postData)).then(resp => {
            this.arrReviews = resp;
            this.webAssetsPathReviews = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/student-review";
        })
            .catch(err => {
            console.log("getReview: " + err);
        });
    }
};
CounsellingTypePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: _services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__.ApiPredictorService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
CounsellingTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-counselling-type',
        template: _raw_loader_counselling_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_counselling_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CounsellingTypePage);



/***/ }),

/***/ 38036:
/*!************************************************************************************!*\
  !*** ./src/app/home/college-predictor/counselling-type/counselling-type.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".predictor-page .top-cont {\n  padding-top: 15px;\n}\n.predictor-page .top-cont figure {\n  padding: 3rem 0px;\n}\n.banner-sec {\n  border-bottom: 1px solid #ddd;\n  padding: 12px;\n  padding-bottom: 1rem;\n}\n.offices > ion-grid > ion-row {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.offices > ion-grid > ion-row > ion-col h5 {\n  margin-bottom: 5px;\n}\n.offices > ion-grid > ion-row > ion-col img {\n  height: auto;\n  border: 0px;\n  width: 90%;\n}\n.offices > ion-grid > ion-row.predicted {\n  background: #e8f1e4;\n}\n.offices > ion-grid > ion-row.not-predicted + ion-row ion-col:not(:last-child) {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: none;\n}\n.offices > ion-grid > ion-row.not-predicted + ion-row ion-button {\n  pointer-events: none;\n}\n.box-prog.chance-cont ion-col > div {\n  padding-bottom: 6px;\n}\n.col-chances {\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  padding-top: 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW5zZWxsaW5nLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQVUsaUJBQUE7QUFDZDtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUlBO0VBQVksNkJBQUE7RUFBK0IsYUFBQTtFQUFlLG9CQUFBO0FBRTFEO0FBRU07RUFBVyxpQkFBQTtFQUFtQixvQkFBQTtBQUdwQztBQURXO0VBQUcsa0JBQUE7QUFJZDtBQUhZO0VBQUksWUFBQTtFQUFjLFdBQUE7RUFBYSxVQUFBO0FBUTNDO0FBTlE7RUFBWSxtQkFBQTtBQVNwQjtBQVBVO0VBQ0UsWUFBQTtFQUFjLG9CQUFBO0VBQXNCLFlBQUE7QUFXaEQ7QUFUVTtFQUFXLG9CQUFBO0FBWXJCO0FBUEU7RUFBb0MsbUJBQUE7QUFXdEM7QUFWRTtFQUFhLHdDQUFBO0VBQXVDLGdCQUFBO0VBQWtCLGVBQUE7QUFnQnhFIiwiZmlsZSI6ImNvdW5zZWxsaW5nLXR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZWRpY3Rvci1wYWdle1xyXG4gICAgLnRvcC1jb250e3BhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZmlndXJle1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG59XHJcblxyXG4uYmFubmVyLXNlY3tib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgcGFkZGluZzogMTJweDsgcGFkZGluZy1ib3R0b206IDFyZW07fVxyXG5cclxuLm9mZmljZXN7IFxyXG4gICAgPiBpb24tZ3JpZHtcclxuICAgICAgPiBpb24tcm93IHtwYWRkaW5nLXRvcDogMTVweDsgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICA+IGlvbi1jb2x7XHJcbiAgICAgICAgICAgaDV7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuICAgICAgICAgICAgaW1ne2hlaWdodDogYXV0bzsgYm9yZGVyOiAwcHg7IHdpZHRoOiA5MCU7fSAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucHJlZGljdGVke2JhY2tncm91bmQ6ICNlOGYxZTQ7fVxyXG4gICAgICAgICYubm90LXByZWRpY3RlZCArIGlvbi1yb3d7XHJcbiAgICAgICAgICBpb24tY29sOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IGN1cnNvcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1idXR0b257cG9pbnRlci1ldmVudHM6IG5vbmU7fVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYm94LXByb2cuY2hhbmNlLWNvbnQgaW9uLWNvbCA+IGRpdntwYWRkaW5nLWJvdHRvbTogNnB4O31cclxuICAuY29sLWNoYW5jZXN7Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTsgcGFkZGluZy10b3A6IDhweDsgbWFyZ2luLXRvcDogNXB4OyB9Il19 */");

/***/ }),

/***/ 45180:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/counselling-type/counselling-type.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <section class=\"banner-sec\">      \n    <ion-slides [options]=\"slideBannerOpts\" pager=\"true\">\n      <ion-slide *ngFor=\"let item of arrSlider\">\n        <div>\n          <img src=\"{{this.AssetsPathSlider}}/{{item.sliderFor}}/{{item.sliderFileName}}\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n    </section>\n\n  <div class=\"main-cont content-cont predictor-page\">\n    <div class=\"top-cont\">\n      <h5 class=\"hdng-line\">\n        <span>NEET Data Driven College Prediction</span>\n      </h5>  \n      <div class=\"offices text-left\">                        \n        <ion-grid fixed>\n          <ion-row *ngFor=\"let item of arrCounselling\" class=\"{{item.predictorConfigId ? 'predicted p-1 m-0' : 'not-predicted p-1 m-0'}}\">            \n            <ion-col size=\"3\"><img alt=\"\" src=\"https://app.moksh16.in/application-centre/assets/mobility-app/predictor/icon-predictor.png\">        \n            </ion-col>\n            <ion-col size=\"9\">              \n              <h5>{{item.counsellingName}} </h5>\n              <div class=\"mb-1 text-justify\">Get the complete list of colleges with chances where you would get admission based on your NEET score and category via {{item.counsellingName}}.</div>                \n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"item.predictorConfigId\" class=\"col-chances\">\n              <h6 class=\"mb-1 text-center\">Your chances via {{item.counsellingName}}</h6>\n              <ion-grid fixed class=\"box-prog chance-cont pt-0\">\n                <ion-row class=\"m-0\">\n                  <ion-col size=\"3\">\n                    <div class=\"border-success\"><ion-label class=\"mt-0\"><div>Sure to <br>Get<div class=\"count\">{{item.sureToget}}</div></div></ion-label></div>\n                  </ion-col> \n                  <ion-col size=\"3\">\n                    <div class=\"border-orange\"><ion-label class=\"mt-0\"><div>High Chance<div class=\"count\">{{item.highChance}}</div></div></ion-label></div>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                    <div class=\"border-warning\"><ion-label class=\"mt-0\"><div>Low Chance<div class=\"count\">{{item.averageChance}}</div></div></ion-label></div>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                    <div class=\"border-danger\"><ion-label class=\"mt-0\"><div>Very Difficult<div class=\"count\">{{item.toughChance}}</div></div></ion-label></div>\n                  </ion-col>      \n                </ion-row>\n              </ion-grid>\n            </ion-col>\n            <ion-col size=\"12\" class=\"mt-1\">\n              <ion-button [routerLink]=\"['/home/college-predictor/predictor-form',examId,item.counsellingId]\" routerLinkActive=\"router-link-active\"  expand=\"block\" color=\"{{item.predictorConfigId ? 'success' : 'primary'}}\" >\n                Predict {{item.predictorConfigId ? 'Again' : 'Now'}} <ion-icon name=\"chevron-forward-circle-outline\" slot=\"end\"></ion-icon>\n              </ion-button>   \n            </ion-col>\n            <ion-col size=\"12\"  *ngIf=\"!item.predictorConfigId && item.counsellingId == 2\">\n              <p class=\"text-center grey-box p-1 primary-light mb-0\" style=\"font-size: 0.9rem;\">\n                {{item.counsellingName}} shall be enabled once you have completed the process of All India Counselling.\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"p-1 m-0\">\n            <ion-col sie=\"12\">\n              <h5 class=\"hdng-line mb-3\">\n                <span>College Predictor Features</span>\n              </h5> \n              <ul class=\"bullet-list\">\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>All India NEET Rank Prediction </span></li>                \n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>College wise prediction based on AIQ</span></li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>College wise prediction based on State level Quota</span></li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>Past cut-offs & Fees for probable colleges</span></li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>Handholding through Counselling sessions</span></li>                \n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>NEET Score based personalized report</span></li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>Auto generated Choice Filling Form</span></li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> <span>Free Access to MBBS Foundation Course</span></li>\n              </ul>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <section class=\"bottom-cont\" *ngIf=\"arrReviews\">      \n        <div class=\"cards-sliders\">\n          <ion-slides [options]=\"slideOpts\" pager=\"true\">\n            <ion-slide *ngFor=\"let item of arrReviews\">\n              <div>\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"3\"><figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" /></figure></ion-col>\n                    <ion-col size=\"9\">\n                      <h6> {{item.studentName}}</h6>\n                      <p> {{item.scholarship}}</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <div>\n                  <ion-label>                    \n                    <p class=\"quote\" [innerHTML] = item.comment></p>\n                  </ion-label>\n                </div>\n              </div>\n            </ion-slide>           \n          </ion-slides>\n        </div>      \n    </section>\n  </div>\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_counselling-type_counselling-type_module_ts.js.map