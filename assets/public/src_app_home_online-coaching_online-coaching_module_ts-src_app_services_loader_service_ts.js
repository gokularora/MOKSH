(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_online-coaching_online-coaching_module_ts-src_app_services_loader_service_ts"],{

/***/ 21516:
/*!************************************************************************!*\
  !*** ./src/app/home/online-coaching/online-coaching-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineCoachingPageRoutingModule": () => (/* binding */ OnlineCoachingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _online_coaching_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online-coaching.page */ 73510);




const routes = [
    {
        path: '',
        component: _online_coaching_page__WEBPACK_IMPORTED_MODULE_0__.OnlineCoachingPage
    },
    {
        path: 'course-usmle',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_online-coaching_course-usmle_course-usmle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./course-usmle/course-usmle.module */ 32464)).then(m => m.CourseUsmlePageModule)
    },
    {
        path: 'course-neet-crash',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_online-coaching_course-neet-crash_course-neet-crash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./course-neet-crash/course-neet-crash.module */ 71014)).then(m => m.CourseNEETCrashPageModule)
    },
    {
        path: 'course-nmat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_online-coaching_course-nmat_course-nmat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./course-nmat/course-nmat.module */ 9690)).then(m => m.CourseNmatPageModule)
    },
    {
        path: 'course-fsp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_online-coaching_course-fsp_course-fsp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./course-fsp/course-fsp.module */ 34486)).then(m => m.CourseFspPageModule)
    },
    {
        path: 'course-next',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_online-coaching_course-next_course-next_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./course-next/course-next.module */ 39881)).then(m => m.CourseNextPageModule)
    }
];
let OnlineCoachingPageRoutingModule = class OnlineCoachingPageRoutingModule {
};
OnlineCoachingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnlineCoachingPageRoutingModule);



/***/ }),

/***/ 22830:
/*!****************************************************************!*\
  !*** ./src/app/home/online-coaching/online-coaching.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineCoachingPageModule": () => (/* binding */ OnlineCoachingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _online_coaching_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-coaching-routing.module */ 21516);
/* harmony import */ var _online_coaching_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-coaching.page */ 73510);








let OnlineCoachingPageModule = class OnlineCoachingPageModule {
};
OnlineCoachingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _online_coaching_routing_module__WEBPACK_IMPORTED_MODULE_1__.OnlineCoachingPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_online_coaching_page__WEBPACK_IMPORTED_MODULE_2__.OnlineCoachingPage]
    })
], OnlineCoachingPageModule);



/***/ }),

/***/ 73510:
/*!**************************************************************!*\
  !*** ./src/app/home/online-coaching/online-coaching.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineCoachingPage": () => (/* binding */ OnlineCoachingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_online_coaching_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./online-coaching.page.html */ 43091);
/* harmony import */ var _online_coaching_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-coaching.page.scss */ 96524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);









let OnlineCoachingPage = class OnlineCoachingPage {
    constructor(headerTitleService, apiGeneralService, apiLMSService, router) {
        this.headerTitleService = headerTitleService;
        this.apiGeneralService = apiGeneralService;
        this.apiLMSService = apiLMSService;
        this.router = router;
        this.slideBannerOpts = { slidesPerView: 1, autoplay: true };
        this.arrSlider = [];
        this.AssetsPathSlider = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "slider-images";
        this.arrServices = [];
        this.slideOpts = {
            slidesPerView: 3.5,
            freeMode: true
        };
        this.currentSelected = 0;
        //#region var Reviews
        this.arrReviews = [];
        this.slideReviewOpts = { slidesPerView: 1.2 };
        this.webAssetsPathReviews = "";
        this.staticIconPath = "https://app.moksh16.in/application-centre/assets/mobility-app/online-coaching/icons/";
        //#endregion
        this.slideFacultyOpts = { slidesPerView: 1.5 };
        this.arrFaculty = [];
        this.arrUserData = [];
        this.isSubmitted = false;
        this.txtCollegeName = "";
        this.ddlSchoolYear = "";
        this.arrResponse = { 'status': 0 };
        this.headerTitleService.title = "MOKSH Academy";
    }
    ngOnInit() {
        this.getSlider();
        this.getReview();
        this.getFaculty();
    }
    doRefresh(event) {
        this.getSlider();
        this.getReview();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    //#region Slider
    getSlider() {
        let postData = { "IsMobile": true, "SliderLocation": "App-Coaching" };
        this.apiGeneralService.getSlider(JSON.stringify(postData)).then(resp => {
            this.arrSlider = resp;
        });
    }
    //#endregion
    ionSelected(index) {
        this.currentSelected = index;
    }
    getFaculty() {
        var data = new FormData();
        data.append("xAction", "getFacultyList");
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        this.apiLMSService.getFacultyList(data).then(resp => {
            this.arrFaculty = resp.data;
        })
            .catch(err => {
            console.log("getFaculty(): " + err);
        });
    }
    getReview() {
        let postData = { "Category": "Online Coaching", "IsActive": true };
        this.apiGeneralService.getReviews(JSON.stringify(postData)).then(resp => {
            this.arrReviews = resp;
            this.webAssetsPathReviews = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/student-review";
        })
            .catch(err => {
            console.log("getReview: " + err);
        });
    }
    slideChanged() {
        console.log("next");
        this.slides.getActiveIndex().then((index) => {
            this.slides.slideTo(index, 2);
        });
    }
    onClickBanner(url) {
        if (url != "") {
            this.router.navigate(["/" + url + ""]);
        }
    }
};
OnlineCoachingPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_2__.ApiLMSService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
OnlineCoachingPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['slides', { static: true },] }]
};
OnlineCoachingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-online-coaching',
        template: _raw_loader_online_coaching_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_online_coaching_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OnlineCoachingPage);



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

/***/ 96524:
/*!****************************************************************!*\
  !*** ./src/app/home/online-coaching/online-coaching.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sec-reviews {\n  background: var(--ion-color-primary-light);\n  margin: 0px -12px;\n  margin-top: 1rem;\n  padding: 1rem 0px;\n}\n\n.cards-sliders ion-slides {\n  margin: 0px;\n}\n\n.box-prog ion-col ion-label {\n  font-weight: 600;\n}\n\n.box-prog ion-col > div {\n  border-width: 2px;\n}\n\n.content-cont .box-prog ion-col.selected:after {\n  border-right-width: 2px;\n  border-bottom-width: 2px;\n}\n\n.bullet-list li ion-icon {\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ubGluZS1jb2FjaGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSwwQ0FBQTtFQUE0QyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixpQkFBQTtBQUs5Rjs7QUFGSTtFQUFXLFdBQUE7QUFNZjs7QUFIQTtFQUE0QixnQkFBQTtBQU81Qjs7QUFOQTtFQUF3QixpQkFBQTtBQVV4Qjs7QUFSQTtFQUErQyx1QkFBQTtFQUF5Qix3QkFBQTtBQWF4RTs7QUFaQTtFQUF5QiwrQkFBQTtBQWdCekIiLCJmaWxlIjoib25saW5lLWNvYWNoaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWMtcmV2aWV3c3tiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7IG1hcmdpbjogMHB4IC0xMnB4OyBtYXJnaW4tdG9wOiAxcmVtOyBwYWRkaW5nOiAxcmVtIDBweDt9XHJcblxyXG4uY2FyZHMtc2xpZGVyc3tcclxuICAgIGlvbi1zbGlkZXN7bWFyZ2luOiAwcHh9XHJcbn1cclxuXHJcbi5ib3gtcHJvZyBpb24tY29sIGlvbi1sYWJlbHtmb250LXdlaWdodDogNjAwO31cclxuLmJveC1wcm9nIGlvbi1jb2wgPiBkaXZ7Ym9yZGVyLXdpZHRoOiAycHg7fVxyXG5cclxuLmNvbnRlbnQtY29udCAuYm94LXByb2cgaW9uLWNvbC5zZWxlY3RlZDphZnRlcntib3JkZXItcmlnaHQtd2lkdGg6IDJweDsgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O31cclxuLmJ1bGxldC1saXN0IGxpIGlvbi1pY29ue2NvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7fVxyXG5cclxuIl19 */");

/***/ }),

/***/ 43091:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/online-coaching/online-coaching.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-top-links></app-top-links>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-cont pb-0 pt-3 content-cont\">\n    <section>\n      <h5 class=\"hdng-line\"><span>MOKSH Academy</span></h5>\n      <p>\n        MOKSH Academy is India's largest education platform on which 2,500+ students are currently studying in 7 countries. It provides complete solution for students aspiring to become a clinical physician. Starting from NEET-UG exam, it offers multiple license & PG entrance exam coaching.\n      </p>\n    </section>\n    <section class=\"banner-sec\">\n      <div>\n        <figure *ngFor=\"let item of arrSlider\" (click)=\"onClickBanner(item.internalURL)\">\n          <img src=\"{{this.AssetsPathSlider}}/{{item.sliderFor}}/{{item.sliderFileName}}\">\n        </figure>\n      </div>\n    </section>\n\n    <section *ngIf=\"arrReviews\" class=\"sec-faculty\">\n      <h5 class=\"hdng-line\"><span>Our Faculty</span></h5>\n      <!-- <ion-text color=\"primary \">\n        <h6>What our students want to say?</h6>\n      </ion-text> -->\n      <div class=\"cards-sliders type2 text-center\">\n        <ion-slides [options]=\"slideFacultyOpts\">\n          <ion-slide *ngFor=\"let item of arrFaculty\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <figure>\n                      <img src=\"https://www.moksh16.com/uploads/admin_user/{{item.imageName}}\"\n                        *ngIf=\"item.imageName; else elseBlock\" />\n                      <ng-template #elseBlock>\n                        <img src=\"https://app.moksh16.in/images/default-img.jpg\" alt=\"\">\n                      </ng-template>\n                    </figure>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <h6>{{item.displayName}}</h6>\n                    <p class=\"mb-1\">{{item.degree}}</p>\n                    <p class=\"mb-0\">{{item.universitiName}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </section>\n\n    <section *ngIf=\"arrReviews\" class=\"sec-reviews\">\n      <h5 class=\"hdng-line\"><span>What our students want to say?</span></h5>\n      <!-- <ion-text color=\"primary \">\n        <h6>What our students want to say?</h6>\n      </ion-text> -->\n      <div class=\"cards-sliders\">\n        <ion-slides [options]=\"slideReviewOpts\" pager=\"true\">\n          <ion-slide *ngFor=\"let item of arrReviews\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\">\n                    <figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" />\n                    </figure>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <h6> {{item.studentName}}</h6>\n                    <p> {{item.scholarship}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div>\n                <ion-label>\n                  <p class=\"quote\" [innerHTML]=item.comment></p>\n                </ion-label>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </section>\n  </div>\n\n\n  \n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_online-coaching_online-coaching_module_ts-src_app_services_loader_service_ts.js.map