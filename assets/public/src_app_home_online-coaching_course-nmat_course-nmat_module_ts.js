(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_online-coaching_course-nmat_course-nmat_module_ts"],{

/***/ 75676:
/*!********************************************************************************!*\
  !*** ./src/app/home/online-coaching/course-nmat/course-nmat-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNmatPageRoutingModule": () => (/* binding */ CourseNmatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _course_nmat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-nmat.page */ 39061);




const routes = [
    {
        path: '',
        component: _course_nmat_page__WEBPACK_IMPORTED_MODULE_0__.CourseNmatPage
    }
];
let CourseNmatPageRoutingModule = class CourseNmatPageRoutingModule {
};
CourseNmatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseNmatPageRoutingModule);



/***/ }),

/***/ 9690:
/*!************************************************************************!*\
  !*** ./src/app/home/online-coaching/course-nmat/course-nmat.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNmatPageModule": () => (/* binding */ CourseNmatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _course_nmat_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-nmat-routing.module */ 75676);
/* harmony import */ var _course_nmat_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-nmat.page */ 39061);








let CourseNmatPageModule = class CourseNmatPageModule {
};
CourseNmatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _course_nmat_routing_module__WEBPACK_IMPORTED_MODULE_1__.CourseNmatPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_course_nmat_page__WEBPACK_IMPORTED_MODULE_2__.CourseNmatPage]
    })
], CourseNmatPageModule);



/***/ }),

/***/ 39061:
/*!**********************************************************************!*\
  !*** ./src/app/home/online-coaching/course-nmat/course-nmat.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNmatPage": () => (/* binding */ CourseNmatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_course_nmat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./course-nmat.page.html */ 79842);
/* harmony import */ var _course_nmat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-nmat.page.scss */ 76469);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);












let CourseNmatPage = class CourseNmatPage {
    constructor(headerTitleService, apiGeneralService, apiLMSService, storage, apiCRMService, alert, alertController) {
        this.headerTitleService = headerTitleService;
        this.apiGeneralService = apiGeneralService;
        this.apiLMSService = apiLMSService;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
        this.alert = alert;
        this.alertController = alertController;
        this.AssetsPathSlider = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "slider-images";
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
        this.headerTitleService.title = "NMAT Coaching";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.getReview();
        this.getFaculty();
        this.getUserData();
    }
    doRefresh(event) {
        this.getReview();
        setTimeout(() => { event.target.complete(); }, 2000);
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
            this.webAssetsPathReviews = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/student-review";
        })
            .catch(err => {
            console.log("getReview: " + err);
        });
    }
    onClickFreeTrial() {
        this.isModalOpen = true;
    }
    modalClose() {
        this.isModalOpen = false;
    }
    onClickFreeTrialSubmit() {
        if (this.arrUserData["leadID"] == 0 || this.arrUserData["leadID"] == '' || this.arrUserData["leadID"] == undefined) {
            this.setCRMRawData();
        }
        else {
            this.setCRMLeadData();
        }
        this.isLoading = true;
        let fulName = this.arrUserData["firstName"] + " " + this.arrUserData["lastName"];
        let mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
        var postData = {
            'emailID': this.arrUserData["emailId"],
            'fullname': fulName,
            'studentMobileNo': mobileNo,
            'medicalCollegeName': this.txtCollegeName,
            'yearOfMedicalSchool': this.ddlSchoolYear,
            'programTypeID': '120',
            'batchID': '46'
        };
        this.apiLMSService.fnSubmitFreeTrial(postData).then(resp => {
            if (resp == "registered") {
                this.isSubmitted = true;
            }
            else if (resp == "transfer") {
                this.alertTransfer(postData);
            }
            else if (resp == "exist") {
                this.isModalOpen = false;
            }
            this.isLoading = false;
        });
    }
    alertTransfer(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class', header: "Are you sure to change the course?", message: 'On changing of course, your access to the previous course will be stopped', buttons: [
                    { text: 'No', role: 'cancel', cssClass: 'secondary' },
                    {
                        text: 'Yes', handler: () => {
                            this.isLoading = true;
                            this.apiLMSService.fnTransferCourse(obj).then(resp => { this.isLoading = false; });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setCRMRawData() {
        this.isLoading = true;
        this.apiCRMService.fnGetCRMRawData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMRawData["lmsCourse"] = this.apiCRMService.enumLMSCourses[2];
                this.apiCRMService.fnSetCRMRawData();
            }
        });
    }
    setCRMLeadData() {
        this.isLoading = true;
        this.apiCRMService.fnGetCRMLeadData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMLeadData["lmsCourse"] = this.apiCRMService.enumLMSCourses[2];
                this.apiCRMService.fnSetCRMLeadData();
            }
        });
    }
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.arrUserData = resp;
        });
    }
};
CourseNmatPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_4__.ApiLMSService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_2__.ApiCRMService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController }
];
CourseNmatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-course-nmat',
        template: _raw_loader_course_nmat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_course_nmat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CourseNmatPage);



/***/ }),

/***/ 76469:
/*!************************************************************************!*\
  !*** ./src/app/home/online-coaching/course-nmat/course-nmat.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2Utbm1hdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 79842:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/online-coaching/course-nmat/course-nmat.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-cont content-cont\">\n    <section class=\"banner-sec\">\n      <figure>\n        <img src=\"{{AssetsPathSlider}}/mobile-app/Banner-Coaching-NMAT.jpg\" alt=\"\">\n      </figure>\n    </section>\n\n    <section class=\"mt-0\">\n\n      <h5 class=\"hdng-line\"><span>Concept</span></h5>\n      <p>\n        The students opting for admission to 3.8 Years of MD Degree program (equivalent to MBBS degree) in Philippines\n        need to clear NMAT entrance exam. The students opting for this Combo Medical Program since B.Sc. in India is for\n        3 years and MBBS in Philippines is for 3.8 years. The program saves around Rs. 8-10 lacs for every student since\n        they need not spend cost of BS in Philippines.\n      </p>\n    </section>\n    <section>\n      <h5 class=\"hdng-line\"><span>About Exam</span></h5>\n      <p>\n        This exam needs to be cleared during your B.Sc. course before entering into MD course. MOKSH Academy is the only\n        provider of NMAT (Part 1) & NMAT (Part 2) online coaching in India and has 1,000+ students currently preparing\n        for this\n        exam online.\n      </p>\n\n    </section>\n    <section>\n\n      <h5 class=\"hdng-line\"><span>MOKSH NMAT Batches</span></h5>\n      <p>\n        Every year, 3 different types of NMAT batches are conducted by MOKSH Academy.\n      </p>\n      <ion-grid fixed class=\"grid-info mb-3\">\n        <ion-row>\n          <ion-col size=\"4\"><strong>Slow paced</strong></ion-col>\n          <ion-col size=\"8\"><span>8 Months of NMAT I and 16 months of NMAT II)</span></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\"><strong>Moderate </strong></ion-col>\n          <ion-col size=\"8\"><span>6 Months of NMAT I and 9 months of NMAT II)</span></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\"><strong>Intensive </strong></ion-col>\n          <ion-col size=\"8\"><span>3 Months of NMAT I and 3 months of NMAT II)</span></ion-col>\n        </ion-row>\n      </ion-grid>\n      <p class=\"mb-0\">\n        The 75% of the curriculum of NEET-UG matches with NMAT I syllabus. This helps the students to prepare for the\n        NEET-UG exam in India before leaving for MBBS course. Many of the NEET un-qualified students join this course so\n        that both the conditions are satisfied such as NEET qualification in India as well as NMAT exam qualification\n        for Philippines.\n      </p>\n    </section>\n    <section class=\"mt-0\">\n      <ion-button (click)=\"onClickFreeTrialSubmit()\" expand=\"block\">\n        Get Free Trial Access\n        <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n      </ion-button>\n    </section>\n    <section>\n      <h5 class=\"hdng-line\"><span>Suitability</span></h5>\n      <p>\n        You should select the batch based on the current academic year so as to seamlessly match with your departure for\n        MBBS program in Philippines.\n      </p>\n      <ion-grid fixed class=\"grid-info\">\n        <ion-row>\n          <ion-col size=\"4\"><strong>B.Sc. 1st Year </strong></ion-col>\n          <ion-col size=\"8\"><span>24 months Slow paced batch</span></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\"><strong>B.Sc. 2nd Year </strong></ion-col>\n          <ion-col size=\"8\"><span>12 months Moderate Batch</span></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\"><strong>B.Sc. 3rd Year </strong></ion-col>\n          <ion-col size=\"8\"><span>6 Months Intensive Batch</span></ion-col>\n        </ion-row>\n      </ion-grid>\n    </section>\n\n\n\n    <section *ngIf=\"arrReviews\" class=\"sec-faculty\">\n      <h5 class=\"hdng-line\"><span>Our Faculty</span></h5>\n      <!-- <ion-text color=\"primary \">\n        <h6>What our students want to say?</h6>\n      </ion-text> -->\n      <div class=\"cards-sliders type2\">\n        <ion-slides [options]=\"slideFacultyOpts\">\n          <ion-slide *ngFor=\"let item of arrFaculty\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <figure>\n                      <img src=\"https://www.moksh16.com/uploads/admin_user/{{item.imageName}}\"\n                        *ngIf=\"item.imageName; else elseBlock\" />\n                      <ng-template #elseBlock>\n                        <img src=\"https://app.moksh16.in/images/default-img.jpg\" alt=\"\">\n                      </ng-template>\n                    </figure>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <h6>{{item.displayName}}</h6>\n                    <p class=\"mb-1\">{{item.degree}}</p>\n                    <p class=\"mb-0\">{{item.universitiName}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </section>\n\n    <section *ngIf=\"arrReviews\" class=\"sec-reviews\">\n      <h5 class=\"hdng-line\"><span>What our students want to say?</span></h5>\n      <!-- <ion-text color=\"primary \">\n        <h6>What our students want to say?</h6>\n      </ion-text> -->\n      <div class=\"cards-sliders\">\n        <ion-slides [options]=\"slideReviewOpts\" pager=\"true\">\n          <ion-slide *ngFor=\"let item of arrReviews\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\">\n                    <figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" />\n                    </figure>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <h6> {{item.studentName}}</h6>\n                    <p> {{item.scholarship}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div>\n                <ion-label>\n                  <p class=\"quote\" [innerHTML]=item.comment></p>\n                </ion-label>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </section>\n  </div>\n\n\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isModalOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"modalClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <ng-container *ngIf=\"!isSubmitted\">\n        <div class=\"form-cont no-icon\">\n          <div class=\"text-center\">\n            <ion-text color=\"primary\">\n              <h6 class=\"m-0\">Please fill the details as below</h6>\n            </ion-text>\n          </div>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label position=\"floating\">Your college name</ion-label>\n            <ion-input [(ngModel)]=\"txtCollegeName\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label position=\"floating\">Select Year</ion-label>\n            <ion-select interface=\"action-sheet\" [(ngModel)]=\"ddlSchoolYear\">\n              <ion-select-option value=\"\">Select School Year</ion-select-option>\n              <ion-select-option value=\"1st_Year\">1st Year</ion-select-option>\n              <ion-select-option value=\"2nd_Year\">2nd Year</ion-select-option>\n              <ion-select-option value=\"3rd_Year\">3rd Year</ion-select-option>\n              <ion-select-option value=\"Intern\">Intern</ion-select-option>\n              <ion-select-option value=\"Final_Year\">Final Year</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"btn-cont mt-3\">\n            <ion-button (click)=\"onClickFreeTrialSubmit()\" expand=\"block\">Apply for FREE Trial\n              <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n            </ion-button>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"isSubmitted\">       \n        <div>\n          <h4>Congrats! Your Free Trial is activated Now.</h4>\n          <p class=\"text-justify\">\n            Your credentials for a FREE trial providing access to MOKSH Academy owned unique individual learning\n            platform for license exam online coaching has been mailed to you. The access to the platform is currently\n            available for web (to be used on laptop or PC Only).\n            <br><br>\n            MOKSH Academy mobile app is being launched on 1st Nov, 2021 and you would be able to use the same login\n            credentials to access the coaching contents from any Android based smartphone by the time you start new\n            academic year in 2021.\n          </p>\n          <br><br>\n        </div>\n      </ng-container>\n    </div>\n  </section>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_online-coaching_course-nmat_course-nmat_module_ts.js.map