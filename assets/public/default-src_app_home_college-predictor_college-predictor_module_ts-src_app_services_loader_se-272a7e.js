(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["default-src_app_home_college-predictor_college-predictor_module_ts-src_app_services_loader_se-272a7e"],{

/***/ 39008:
/*!****************************************************************************!*\
  !*** ./src/app/home/college-predictor/college-predictor-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollegePredictorPageRoutingModule": () => (/* binding */ CollegePredictorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _college_predictor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./college-predictor.page */ 37057);




const routes = [
    {
        path: '',
        component: _college_predictor_page__WEBPACK_IMPORTED_MODULE_0__.CollegePredictorPage
    },
    {
        path: 'counselling-type/:examId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_counselling-type_counselling-type_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./counselling-type/counselling-type.module */ 44522)).then(m => m.CounsellingTypePageModule)
    },
    {
        path: 'predictor-form/:examId/:CounsellingType',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_predictor-form_predictor-form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./predictor-form/predictor-form.module */ 7702)).then(m => m.PredictorFormPageModule)
    },
    {
        path: 'predictor-checkout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_college-predictor_predictor-checkout_predictor-checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./predictor-checkout/predictor-checkout.module */ 68528)).then(m => m.PredictorCheckoutPageModule)
    },
    {
        path: 'predictor-checkout/:type',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_college-predictor_predictor-checkout_predictor-checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./predictor-checkout/predictor-checkout.module */ 68528)).then(m => m.PredictorCheckoutPageModule)
    },
    {
        path: 'predictor-report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_predictor-report_predictor-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./predictor-report/predictor-report.module */ 19388)).then(m => m.PredictorReportPageModule)
    },
    {
        path: 'predictor-report-stagewise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_predictor-report-stagewise_predictor-report-stagewise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./predictor-report-stagewise/predictor-report-stagewise.module */ 85159)).then(m => m.PredictorReportStagewisePageModule)
    },
    {
        path: 'personalized-report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_personalized-report_personalized-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./personalized-report/personalized-report.module */ 321)).then(m => m.PersonalizedReportPageModule)
    },
    {
        path: 'preferential-form',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_preferential-form_preferential-form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./preferential-form/preferential-form.module */ 99277)).then(m => m.PreferentialFormPageModule)
    },
    {
        path: 'mbbs-foundation-course',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_mbbs-foundation-course_mbbs-foundation-course_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mbbs-foundation-course/mbbs-foundation-course.module */ 96606)).then(m => m.MbbsFoundationCoursePageModule)
    },
    {
        path: 'admission-guidance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_admission-guidance_admission-guidance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admission-guidance/admission-guidance.module */ 26157)).then(m => m.AdmissionGuidancePageModule)
    },
    {
        path: 'college-list/:managementId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_college-list_college-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./college-list/college-list.module */ 29023)).then(m => m.CollegeListPageModule)
    }
];
let CollegePredictorPageRoutingModule = class CollegePredictorPageRoutingModule {
};
CollegePredictorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CollegePredictorPageRoutingModule);



/***/ }),

/***/ 70053:
/*!********************************************************************!*\
  !*** ./src/app/home/college-predictor/college-predictor.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollegePredictorPageModule": () => (/* binding */ CollegePredictorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _college_predictor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./college-predictor-routing.module */ 39008);
/* harmony import */ var _college_predictor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./college-predictor.page */ 37057);








let CollegePredictorPageModule = class CollegePredictorPageModule {
};
CollegePredictorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _college_predictor_routing_module__WEBPACK_IMPORTED_MODULE_1__.CollegePredictorPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_college_predictor_page__WEBPACK_IMPORTED_MODULE_2__.CollegePredictorPage]
    })
], CollegePredictorPageModule);



/***/ }),

/***/ 37057:
/*!******************************************************************!*\
  !*** ./src/app/home/college-predictor/college-predictor.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollegePredictorPage": () => (/* binding */ CollegePredictorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_college_predictor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./college-predictor.page.html */ 88371);
/* harmony import */ var _college_predictor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./college-predictor.page.scss */ 37782);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/toast.service */ 84465);
/* harmony import */ var _services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api-general.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);












let CollegePredictorPage = class CollegePredictorPage {
    constructor(headerTitleService, apiPredictorService, router, apiGeneralService, sanitizer, toastr, firebaseAnalytics) {
        this.headerTitleService = headerTitleService;
        this.apiPredictorService = apiPredictorService;
        this.router = router;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.firebaseAnalytics = firebaseAnalytics;
        this.managementId = 0;
        this.arrExam = [];
        this.webAssetPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath;
        this.slideVideoOpts = { slidesPerView: 1.1 };
        this.arrVideos = [];
        this.webVideoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "mobility-app/videothumbnails";
        this.assetpath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "mobility-app/";
        //#endregion
        this.arrReviews = [];
        this.webAssetsPathReviews = "";
        this.slideOpts = { slidesPerView: 1.2 };
        this.headerTitleService.isBack = false;
        this.headerTitleService.title = "College Predictor";
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.setCurrentScreen("college-predictor");
        this.firebaseAnalytics.logEvent("predictor_home", { 'resp': 'success', 'page': 'college-predictor' });
    }
    ngOnInit() {
        this.webAssetPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath;
        this.getExam();
        this.getVideos();
        this.getReview();
    }
    doRefresh(event) {
        this.getExam();
        this.getVideos();
        this.getReview();
        this.getVideos();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getExam() {
        let postData = { 'IsActive': true };
        this.apiPredictorService.getExamMaster(JSON.stringify(postData)).then(resp => {
            this.arrExam = resp;
        })
            .catch(ex => {
            console.log("getExam() => " + ex);
        });
    }
    onClickExam(examId) {
        this.router.navigate(['/home/college-predictor/counselling-type', examId]);
    }
    //#region Video Section start
    getVideos() {
        let postData = { 'videoHeaderId': 24, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideos = resp;
        }).catch(err => {
            console.log("getVideos: " + err);
        });
    }
    playVideo(videoSrc) {
        if (videoSrc == "") {
            this.toastr.toastError("Sorry! Currently this video is not available.");
            return false;
        }
        this.iframe = this.sanitizer.bypassSecurityTrustHtml('<iframe src="' + videoSrc + '" frameborder="0" style="width: 100%; height: 300px;"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        this.isVideoOpen = true;
    }
    videoPanelClose() {
        this.iframe = "";
        this.isVideoOpen = false;
    }
    //#endregion
    //#region Get Reviews
    getReview() {
        let postData = { "Category": "Predictor", "IsActive": true };
        this.apiGeneralService.getReviews(JSON.stringify(postData)).then(resp => {
            this.arrReviews = resp;
            this.webAssetsPathReviews = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "mobility-app/student-review";
        })
            .catch(err => {
            console.log("getReview: " + err);
        });
    }
};
CollegePredictorPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__.ApiPredictorService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseAnalytics }
];
CollegePredictorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-college-predictor',
        template: _raw_loader_college_predictor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_college_predictor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CollegePredictorPage);



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

/***/ 37782:
/*!********************************************************************!*\
  !*** ./src/app/home/college-predictor/college-predictor.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".options-sec {\n  background: var(--ion-color-secondary-light);\n  padding: 1rem 12px;\n  position: relative;\n}\n.options-sec:after {\n  content: \"\";\n  display: none;\n  left: 0px;\n  position: absolute;\n  height: 320px;\n  width: 100%;\n  border-radius: 50%;\n  background: var(--ion-color-secondary-light);\n  top: -160px;\n  z-index: -1;\n}\n.options-sec .content {\n  padding: 12px;\n  margin-top: 10px;\n  text-align: justify;\n}\n.options-sec .content p {\n  margin-top: 0px;\n  font-size: 0.95rem;\n}\n.options-sec figure {\n  position: relative;\n}\n.options-sec figure ion-button {\n  bottom: 19px;\n  position: absolute;\n  left: 12px;\n  width: calc(100% - 24px);\n  text-transform: uppercase;\n  border-radius: 5px;\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);\n}\n.options-sec figure img {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n}\n.banner {\n  margin-top: 2rem;\n}\n.banner figure {\n  text-align: center;\n}\n.banner figure img {\n  width: 16rem;\n}\n.colg-type img {\n  height: 45px;\n  width: auto;\n  margin: auto;\n  opacity: 0.8;\n}\n.colg-type h6 {\n  margin-bottom: 0px;\n  margin-top: 3px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  line-height: 15px;\n}\n@media only screen and (max-width: 360px) {\n  .options-sec figure ion-button {\n    font-size: 1rem;\n    letter-spacing: 0px;\n    left: 6px;\n    width: calc(100% - 12px);\n  }\n\n  .colg-type h6 {\n    font-size: 12px;\n    line-height: 12px;\n    margin-top: 6px;\n  }\n\n  .btn-cont ion-button {\n    letter-spacing: 0px !important;\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlZ2UtcHJlZGljdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFhLDRDQUFBO0VBQThDLGtCQUFBO0VBQW1CLGtCQUFBO0FBRTlFO0FBREk7RUFBUSxXQUFBO0VBQWEsYUFBQTtFQUFlLFNBQUE7RUFBVyxrQkFBQTtFQUFvQixhQUFBO0VBQWUsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLDRDQUFBO0VBQThDLFdBQUE7RUFBYSxXQUFBO0FBYWxMO0FBWkk7RUFBUyxhQUFBO0VBQWUsZ0JBQUE7RUFBa0IsbUJBQUE7QUFpQjlDO0FBaEJRO0VBQUUsZUFBQTtFQUFpQixrQkFBQTtBQW9CM0I7QUFsQkk7RUFBTyxrQkFBQTtBQXFCWDtBQXBCUTtFQUFXLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixVQUFBO0VBQWEsd0JBQUE7RUFBMEIseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0IsK0NBQUE7QUE2QjNJO0FBNUJRO0VBQUksa0JBQUE7RUFBcUIsc0JBQUE7QUFnQ2pDO0FBN0JBO0VBQVMsZ0JBQUE7QUFpQ1Q7QUFoQ0k7RUFBUSxrQkFBQTtBQW1DWjtBQWxDUTtFQUFJLFlBQUE7QUFxQ1o7QUFqQ0k7RUFBSSxZQUFBO0VBQWMsV0FBQTtFQUFhLFlBQUE7RUFBYyxZQUFBO0FBd0NqRDtBQXZDSTtFQUFHLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsaUJBQUE7QUE4Q2pGO0FBM0NBO0VBR1k7SUFBVyxlQUFBO0lBQWlCLG1CQUFBO0lBQXFCLFNBQUE7SUFBVyx3QkFBQTtFQWdEdEU7O0VBNUNNO0lBQUcsZUFBQTtJQUFpQixpQkFBQTtJQUFtQixlQUFBO0VBa0Q3Qzs7RUEvQ007SUFBVyw4QkFBQTtJQUFnQyxlQUFBO0VBb0RqRDtBQUNGIiwiZmlsZSI6ImNvbGxlZ2UtcHJlZGljdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm9wdGlvbnMtc2Vje2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktbGlnaHQpOyBwYWRkaW5nOjFyZW0gMTJweDsgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcclxuICAgICY6YWZ0ZXJ7Y29udGVudDogXCJcIjsgZGlzcGxheTogbm9uZTsgbGVmdDogMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMzIwcHg7IHdpZHRoOiAxMDAlOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktbGlnaHQpOyB0b3A6IC0xNjBweDsgei1pbmRleDogLTE7fVxyXG4gICAgLmNvbnRlbnR7cGFkZGluZzogMTJweDsgbWFyZ2luLXRvcDogMTBweDsgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBwe21hcmdpbi10b3A6IDBweDsgZm9udC1zaXplOiAwLjk1cmVtO31cclxuICAgIH1cclxuICAgIGZpZ3VyZXtwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntib3R0b206IDE5cHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTJweDsgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgYm9yZGVyLXJhZGl1czogNXB4OyBib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggcmdiKDAgMCAwIC8gMjUlKTt9XHJcbiAgICAgICAgaW1ne2JvcmRlci1yYWRpdXM6IDVweCA7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7fVxyXG4gICAgfVxyXG59XHJcbi5iYW5uZXJ7IG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBmaWd1cmV7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpbWd7d2lkdGg6IDE2cmVtO31cclxuICAgIH0gICBcclxufVxyXG4uY29sZy10eXBle1xyXG4gICAgaW1ne2hlaWdodDogNDVweDsgd2lkdGg6IGF1dG87IG1hcmdpbjogYXV0bzsgb3BhY2l0eTogMC44O31cclxuICAgIGg2e21hcmdpbi1ib3R0b206IDBweDsgbWFyZ2luLXRvcDogM3B4OyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDAuOXJlbTsgbGluZS1oZWlnaHQ6IDE1cHg7fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzYwcHgpe1xyXG4gICAgLm9wdGlvbnMtc2Vje1xyXG4gICAgICAgIGZpZ3VyZXtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbntmb250LXNpemU6IDFyZW07IGxldHRlci1zcGFjaW5nOiAwcHg7IGxlZnQ6IDZweDsgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sZy10eXBle1xyXG4gICAgICAgIGg2e2ZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDEycHg7IG1hcmdpbi10b3A6IDZweDt9XHJcbiAgICB9XHJcbiAgICAuYnRuLWNvbnR7XHJcbiAgICAgICAgaW9uLWJ1dHRvbntsZXR0ZXItc3BhY2luZzogMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMXJlbTt9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 88371:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/college-predictor.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content >\n  \n  <!-- <app-top-links></app-top-links> -->\n\n<div class=\"predictor-page\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"options-sec\">    \n\n    <section class=\"mb-3\">\n      <p class=\"mt-0 mb-2\">Get college wise cut off, Fees, Seat matrix, NIRF rank etc. </p>\n      <ion-grid fixed class=\"mb-3 text-center colg-type padding-sm\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"white-box p-1\" [routerLink]=\"['./college-list',4]\">\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/icon-govt.png\">\n              <h6>Government Colleges</h6>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"white-box p-1\" [routerLink]=\"['./college-list',5]\" >\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/icon-private.png\">\n              <h6>Private Colleges</h6>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"white-box p-1\" [routerLink]=\"['./college-list',3]\">\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/icon-deemed.png\">\n              <h6>Deemed Universities</h6>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" class=\"mt-2\">\n            <ion-button [routerLink]=\"['./college-list',0]\" expand=\"block\"  shape=\"round\" color=\"dark\" class=\"ion-text-uppercase\">\n              Check all colleges Cut-Off and Fees\n            </ion-button>\n            </ion-col>\n        </ion-row>\n      </ion-grid>       \n    </section>\n\n    <section>\n      <h5 class=\"hdng-line\" *ngIf=\"arrExam.length > 1\">\n        <span>Which Exam are you giving?</span>\n      </h5>     \n      <p class=\"mt-0 mb-2\">Where will you get admission in India?</p> \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col *ngFor=\"let item of arrExam\" (click)=\"onClickExam(item.examId)\">\n            <figure class=\"m-0\">\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/college-predictor-home.jpg\" alt=\"item.examName\" class=\"w-100\">\n              <ion-button  expand=\"block\">\n                Know your MBBS admission chances\n              </ion-button>\n            </figure>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>\n      </section>\n\n      \n      <section>\n      <h5 class=\"hdng-line\">\n        <span>How College Predictor Works?</span>\n      </h5>\n      <section class=\"sec-videos mb-2\">         \n        <div *ngIf=\"arrVideos?.length == 1\">\n          <figure class=\"m-0\" *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n            <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\n          </figure>\n        </div>\n        <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideos?.length > 1\">\n          <ion-slide *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n            <div>\n             <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n            </div>\n          </ion-slide>        \n        </ion-slides>\n      </section>\n\n      <div class=\"white-box content\"> \n        <p>\n          Are you confused about the Medical seat allocation system in India? You have got your NEET score and rank but are not sure of the colleges which can accept you? The high competition in NEET exam with just 2% success ratio makes every student anxious about their future.\n        </p>        \n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> The app would predict your admission chances fitting your score and budget</li>          \n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> Publish Personalized report & summary of admission options </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> Auto generate Choice Filling Form to support MCC online system </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon> Intelligent App making complex admission system easy for you.</li>          \n        </ul>\n      </div>\n      <div class=\"btn-cont\">\n        <ion-button [routerLink]=\"['/home/college-predictor/counselling-type/1']\"  expand=\"block\" class=\"ion-text-uppercase\">\n          Know your MBBS admission chances\n          </ion-button>\n      </div>\n    </section>\n    <section>\n      <div class=\"cards-sliders\">\n        <ion-slides [options]=\"slideOpts\" pager=\"true\">\n          <ion-slide *ngFor=\"let item of arrReviews\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\"><figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" /></figure></ion-col>\n                  <ion-col size=\"9\">\n                    <h6> {{item.studentName}}</h6>\n                    <p> {{item.scholarship}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div>\n                <ion-label>                    \n                  <p class=\"quote\" [innerHTML] = item.comment></p>\n                </ion-label>\n              </div>\n            </div>\n          </ion-slide>           \n        </ion-slides>\n      </div>  \n    </section>  \n  </div>\n  <div class=\"main-cont\">\n    <section class=\"mt-2\">\n      <h5>Your MBBS Abroad Program right up to MD/MS!</h5>\n      <figure class=\"m-0\" [routerLink]=\"['/home/country-list']\" routerLinkActive=\"router-link-active\" >\n        <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/img-welcome2.jpg\" alt=\"\">\n      </figure>\n    </section>\n  </div>\n</div>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n<section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n  <div class=\"toogle-cont\">\n    <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>    \n    <div [innerHTML]=\"iframe\" class=\"ifram-cont\"></div>\n  </div>\n</section>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_home_college-predictor_college-predictor_module_ts-src_app_services_loader_se-272a7e.js.map