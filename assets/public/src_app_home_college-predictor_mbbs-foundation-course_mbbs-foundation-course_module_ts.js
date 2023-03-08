(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_mbbs-foundation-course_mbbs-foundation-course_module_ts"],{

/***/ 14233:
/*!********************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/mbbs-foundation-course/mbbs-foundation-course-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MbbsFoundationCoursePageRoutingModule": () => (/* binding */ MbbsFoundationCoursePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mbbs_foundation_course_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mbbs-foundation-course.page */ 94808);




const routes = [
    {
        path: '',
        component: _mbbs_foundation_course_page__WEBPACK_IMPORTED_MODULE_0__.MbbsFoundationCoursePage
    }
];
let MbbsFoundationCoursePageRoutingModule = class MbbsFoundationCoursePageRoutingModule {
};
MbbsFoundationCoursePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MbbsFoundationCoursePageRoutingModule);



/***/ }),

/***/ 96606:
/*!************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/mbbs-foundation-course/mbbs-foundation-course.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MbbsFoundationCoursePageModule": () => (/* binding */ MbbsFoundationCoursePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mbbs_foundation_course_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mbbs-foundation-course-routing.module */ 14233);
/* harmony import */ var _mbbs_foundation_course_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mbbs-foundation-course.page */ 94808);








let MbbsFoundationCoursePageModule = class MbbsFoundationCoursePageModule {
};
MbbsFoundationCoursePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mbbs_foundation_course_routing_module__WEBPACK_IMPORTED_MODULE_1__.MbbsFoundationCoursePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_mbbs_foundation_course_page__WEBPACK_IMPORTED_MODULE_2__.MbbsFoundationCoursePage]
    })
], MbbsFoundationCoursePageModule);



/***/ }),

/***/ 94808:
/*!**********************************************************************************************!*\
  !*** ./src/app/home/college-predictor/mbbs-foundation-course/mbbs-foundation-course.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MbbsFoundationCoursePage": () => (/* binding */ MbbsFoundationCoursePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mbbs_foundation_course_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mbbs-foundation-course.page.html */ 24829);
/* harmony import */ var _mbbs_foundation_course_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mbbs-foundation-course.page.scss */ 18620);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);











let MbbsFoundationCoursePage = class MbbsFoundationCoursePage {
    //#endregion
    constructor(headerTitleService, apiGeneralService, sanitizer, toastr, apiCRMService, alertService) {
        this.headerTitleService = headerTitleService;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.apiCRMService = apiCRMService;
        this.alertService = alertService;
        //#region Video Variable
        this.webAssetsPath = "";
        this.arrVideos = [];
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        headerTitleService.title = "MBBS Foundation Course";
        headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.getVideos();
    }
    onClickRegister() {
        this.setCRMRawData();
    }
    //#region CRM Update
    setCRMRawData() {
        this.isLoading = true;
        this.apiCRMService.fnGetCRMLeadData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMRawData["lmsCourse"] = this.apiCRMService.enumLMSCourses[0];
                this.apiCRMService.fnSetCRMLeadData().then((arrLeadData) => {
                    if (arrLeadData != 0) {
                        this.alertService.basciAlert("Thank you for Registration", "We have received your request. Our counsellor will call you shortly", "", ['OK']);
                    }
                    else {
                        this.alertService.basciAlert("Registration failed. Please contact our support team", "", "", ['OK']);
                    }
                    this.isLoading = false;
                });
            }
            else {
                this.isLoading = false;
                this.alertService.basciAlert("Sorry, we are unable to proceed your request at this time.", "", "", ['OK']);
            }
        });
    }
    //#endregion
    //#region  Video Section start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 32 };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/videothumbnails";
                this.arrVideos = resp;
            })
                .catch(err => {
                console.log("getVideos: " + err);
            });
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
};
MbbsFoundationCoursePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__.ApiCRMService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
MbbsFoundationCoursePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-mbbs-foundation-course',
        template: _raw_loader_mbbs_foundation_course_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mbbs_foundation_course_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MbbsFoundationCoursePage);



/***/ }),

/***/ 18620:
/*!************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/mbbs-foundation-course/mbbs-foundation-course.page.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYmJzLWZvdW5kYXRpb24tY291cnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 24829:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/mbbs-foundation-course/mbbs-foundation-course.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"content-cont\">\n  <app-top-links-predictor></app-top-links-predictor>\n  <div class=\"main-cont\">\n    <h5 class=\"hdng-line\">\n      <span>MBBS Foundation Course</span>\n    </h5>\n\n    <section class=\"sec-videos\" *ngIf=\"arrVideos?.length > 0\">\n      <div *ngIf=\"arrVideos?.length == 1\">\n        <figure class=\"m-0\" *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n          <img src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\n        </figure>\n      </div>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideos?.length > 1\">\n        <ion-slide *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n            <img src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </section>\n    <section class=\"grey-box primary-light p-2\">\n      <h5 class=\"hdng-line\">\n        <span>WHY THIS COURSE?</span>\n      </h5>\n      <p>\n        The medical aspirants looking to enter into medicine course know little of the curriculum and challenges faced\n        once they join a med school. MOKSH has created a course for its registered students which would be conducted by\n        India’s best doctors who would passionately explain their journey as a doctor!\n      </p>\n    </section>\n    <section class=\"grey-box secondary-light p-2\">\n      <h5 class=\"hdng-line\">\n        <span>WHAT WILL YOU GET?</span>\n      </h5>\n      <p>\n        There are several objectives of conducting this course for freshman doctors. One of the major reasons is to\n        understand the challenges lying ahead of you and the importance of each of the subjects taught to you in the\n        next 4.5 years. The course has been designed by the passionate doctors for you. These are the same doctors who\n        have reviewed thousands of questions and explanations on the MOKSH Academy platform created for you to clear the\n        license exams such as FMGE / NExT or USMLE!\n      </p>\n    </section>\n    <section class=\"grey-box success-light p-2\">\n      <h5 class=\"hdng-line\">\n        <span>WHAT IS THE COST?</span>\n      </h5>\n      <p>\n        The course costs Rs. 9,900 and every student entering into MBBS this year should attend it. MOKSH registered\n        students would get it absolutely free of cost!\n      </p>\n    </section>\n    <section class=\"mt-0\">\n      <ion-button expand=\"block\" (click)=\"onClickRegister()\">Register for the course\n        <ion-icon name=\"trending-up-outline\" slot=\"end\"></ion-icon>\n        <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n      </ion-button>\n    </section>\n\n  </div>\n\n  \n\n</ion-content>\n\n<!-- Video Panel Start -->\n<section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n  <div class=\"toogle-cont\">\n    <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>        \n    <ion-grid fixed class=\"padding-md\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div [innerHTML]=\"iframe\" ></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</section>\n<!-- Video Panel End -->");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_mbbs-foundation-course_mbbs-foundation-course_module_ts.js.map