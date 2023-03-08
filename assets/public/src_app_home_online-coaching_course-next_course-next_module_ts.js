(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_online-coaching_course-next_course-next_module_ts"],{

/***/ 23889:
/*!********************************************************************************!*\
  !*** ./src/app/home/online-coaching/course-next/course-next-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNextPageRoutingModule": () => (/* binding */ CourseNextPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _course_next_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-next.page */ 834);




const routes = [
    {
        path: '',
        component: _course_next_page__WEBPACK_IMPORTED_MODULE_0__.CourseNextPage
    }
];
let CourseNextPageRoutingModule = class CourseNextPageRoutingModule {
};
CourseNextPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseNextPageRoutingModule);



/***/ }),

/***/ 39881:
/*!************************************************************************!*\
  !*** ./src/app/home/online-coaching/course-next/course-next.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNextPageModule": () => (/* binding */ CourseNextPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _course_next_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-next-routing.module */ 23889);
/* harmony import */ var _course_next_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-next.page */ 834);








let CourseNextPageModule = class CourseNextPageModule {
};
CourseNextPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _course_next_routing_module__WEBPACK_IMPORTED_MODULE_1__.CourseNextPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_course_next_page__WEBPACK_IMPORTED_MODULE_2__.CourseNextPage]
    })
], CourseNextPageModule);



/***/ }),

/***/ 834:
/*!**********************************************************************!*\
  !*** ./src/app/home/online-coaching/course-next/course-next.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseNextPage": () => (/* binding */ CourseNextPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_course_next_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./course-next.page.html */ 53924);
/* harmony import */ var _course_next_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-next.page.scss */ 58168);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);











let CourseNextPage = class CourseNextPage {
    constructor(headerTitleService, apiGeneralService, apiLMSService, storage, apiCRMService, alertController) {
        this.headerTitleService = headerTitleService;
        this.apiGeneralService = apiGeneralService;
        this.apiLMSService = apiLMSService;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
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
        this.headerTitleService.title = "NEXT Coaching";
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
            'medicalCollegeName': '',
            'yearOfMedicalSchool': '',
            'programTypeID': '2',
            'batchID': '43'
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                this.apiCRMService.arrCRMRawData["lmsCourse"] = this.apiCRMService.enumLMSCourses[4];
                this.apiCRMService.fnSetCRMRawData();
            }
        });
    }
    setCRMLeadData() {
        this.isLoading = true;
        this.apiCRMService.fnGetCRMLeadData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMLeadData["lmsCourse"] = this.apiCRMService.enumLMSCourses[4];
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
CourseNextPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_4__.ApiLMSService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_2__.ApiCRMService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
CourseNextPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-course-next',
        template: _raw_loader_course_next_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_course_next_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CourseNextPage);



/***/ }),

/***/ 58168:
/*!************************************************************************!*\
  !*** ./src/app/home/online-coaching/course-next/course-next.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2UtbmV4dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 53924:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/online-coaching/course-next/course-next.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-cont content-cont\">\n    <section class=\"banner-sec\">\n      <figure>\n        <img src=\"{{AssetsPathSlider}}/mobile-app/Banner-next.jpg\" alt=\"\">\n      </figure>\n    </section>\n\n    <section class=\"mt-0\">\n\n      <h5 class=\"hdng-line\"><span>What will you get?</span></h5>\n      <p>\n        The course is designed & conducted by the top faculty in India having a total experience of 250 Years of teaching. You will get ample support to succeed via this course such as:\n      </p>\n      <ul class=\"bullet-list\">\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Live class by top faculty with vast teaching experience </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Structured Video library  </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>30,000+ Q-Bank for all 19 subjects </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Review answers with images and explanations </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Test Series with unlimited full length Mock Tests </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Test assessment & full insight with analytics  </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Weakness identifier & auto assignment feature  </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Live doubt clearance session </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Live interactive mentorship for student progress review </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Individual learning platform technology  </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Notes for last minute preparation  </li>\n      </ul>\n    </section>\n    \n    <section>\n      <h5 class=\"hdng-line\"><span>How will it benefit?</span></h5>\n      <p>\n        The students preparing for the last 45 days would have benefits such as:\n      </p>\n      <ul class=\"bullet-list\">\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Conceptual live MCQ solving sessions </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Master the time management </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Get used to NEXT1 & NEXT2 exam & get intomode</li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Identify your weaknesses to enhance score by 50-75 marks </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Recall videos for last minute prep </li>\n        <li><ion-icon name=\"checkmark-circle\"></ion-icon>Learn the tricks and tips to crack exam and memorize </li>\n      </ul>\n    </section>\n\n    <section>\n      <h5 class=\"hdng-line\"><span>How to access?</span></h5>\n      <p>\n        Just click on the button to access the course for FREE! You would receive login credentials to your own individual learning platform on your registered mail ID on MOKSH App or web page.\n      </p>\n      <p>\n        The learning platform is available on web only <em> (The MOKSH Academy App will be available for NEXT students only)</em> and accordingly, you should have a laptop or a desktop to access the MOKSH platform.Just login and you would seamlessly get into the NEET Crash course batch.\n      </p>\n    </section>\n\n    <section>\n      <h5 class=\"hdng-line\"><span>How much does it cost?</span></h5>\n      <p>\n        The course is absolutely FREE of cost for the medical aspirants. It allows you to continue with the FREE access till you maintain yourself with a high level of engagement and remain in the Green Zone. The moment you start slipping into the red zone, the free access would be automatically deactivated. You would then have to purchase the app access by paying through App.\n      </p>\n      <p>\n        The new MOKSH Academy App will be made available before March, 2022. Till that time, you can access the technology and contents with Q-Bank over a web based platform on your desktop and laptop. \n      </p>\n    </section>\n    \n\n    <section class=\"mt-0\">\n      <ion-button (click)=\"onClickFreeTrialSubmit()\" expand=\"block\">\n        Get Free Trial Access\n        <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n      </ion-button>\n    </section>\n\n    <section *ngIf=\"arrReviews\" class=\"sec-faculty\">\n      <h5 class=\"hdng-line\"><span>Our Faculty</span></h5>\n      <!-- <ion-text color=\"primary \">\n        <h6>What our students want to say?</h6>\n      </ion-text> -->\n      <div class=\"cards-sliders type2\">\n        <ion-slides [options]=\"slideFacultyOpts\">\n          <ion-slide *ngFor=\"let item of arrFaculty\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <figure>\n                      <img src=\"https://www.moksh16.com/uploads/admin_user/{{item.imageName}}\"\n                        *ngIf=\"item.imageName; else elseBlock\" />\n                      <ng-template #elseBlock>\n                        <img src=\"https://app.moksh16.in/images/default-img.jpg\" alt=\"\">\n                      </ng-template>\n                    </figure>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <h6>{{item.displayName}}</h6>\n                    <p class=\"mb-1\">{{item.degree}}</p>\n                    <p class=\"mb-0\">{{item.universitiName}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </section>\n\n    <section *ngIf=\"arrReviews\" class=\"sec-reviews\">\n      <h5 class=\"hdng-line\"><span>What our students want to say?</span></h5>\n      <!-- <ion-text color=\"primary \">\n        <h6>What our students want to say?</h6>\n      </ion-text> -->\n      <div class=\"cards-sliders\">\n        <ion-slides [options]=\"slideReviewOpts\" pager=\"true\">\n          <ion-slide *ngFor=\"let item of arrReviews\">\n            <div>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\">\n                    <figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" />\n                    </figure>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                    <h6> {{item.studentName}}</h6>\n                    <p> {{item.scholarship}}</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <div>\n                <ion-label>\n                  <p class=\"quote\" [innerHTML]=item.comment></p>\n                </ion-label>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </section>\n  </div>\n\n\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isModalOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"modalClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <ng-container *ngIf=\"!isSubmitted\">\n        <div class=\"form-cont no-icon\">\n          <div class=\"text-center\">\n            <ion-text color=\"primary\">\n              <h6 class=\"m-0\">Please fill the details as below</h6>\n            </ion-text>\n          </div>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label position=\"floating\">Your medical college name</ion-label>\n            <ion-input [(ngModel)]=\"txtCollegeName\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label position=\"floating\">Select Year</ion-label>\n            <ion-select interface=\"action-sheet\" [(ngModel)]=\"ddlSchoolYear\">\n              <ion-select-option value=\"\">Select Medical School Year</ion-select-option>\n              <ion-select-option value=\"1st_Year\">1st Year</ion-select-option>\n              <ion-select-option value=\"2nd_Year\">2nd Year</ion-select-option>\n              <ion-select-option value=\"3rd_Year\">3rd Year</ion-select-option>\n              <ion-select-option value=\"Intern\">Intern</ion-select-option>\n              <ion-select-option value=\"Final_Year\">Final Year</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"btn-cont mt-3\">\n            <ion-button (click)=\"onClickFreeTrialSubmit()\" expand=\"block\">Apply for FREE Trial\n              <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n            </ion-button>\n          </div>\n\n        </div>\n      </ng-container>\n      <ng-container *ngIf=\"isSubmitted\">       \n        <div>\n          <h4>Congrats! Your Free Trial is activated Now.</h4>\n          <p class=\"text-justify\">\n            Your credentials for a FREE trial providing access to MOKSH Academy owned unique individual learning\n            platform for license exam online coaching has been mailed to you. The access to the platform is currently\n            available for web (to be used on laptop or PC Only).\n            <br><br>\n            MOKSH Academy mobile app is being launched on 1st Nov, 2021 and you would be able to use the same login\n            credentials to access the coaching contents from any Android based smartphone by the time you start new\n            academic year in 2021.\n          </p>\n          <br><br>\n        </div>\n      </ng-container>\n    </div>\n  </section>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_online-coaching_course-next_course-next_module_ts.js.map