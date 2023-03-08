(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_career-plan_career-plan_module_ts"],{

/***/ 6369:
/*!**************************************************************************!*\
  !*** ./src/app/home/top-links/career-plan/career-plan-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareerPlanPageRoutingModule": () => (/* binding */ CareerPlanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _career_plan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./career-plan.page */ 41474);




const routes = [
    {
        path: '',
        component: _career_plan_page__WEBPACK_IMPORTED_MODULE_0__.CareerPlanPage
    }
];
let CareerPlanPageRoutingModule = class CareerPlanPageRoutingModule {
};
CareerPlanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CareerPlanPageRoutingModule);



/***/ }),

/***/ 28915:
/*!******************************************************************!*\
  !*** ./src/app/home/top-links/career-plan/career-plan.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareerPlanPageModule": () => (/* binding */ CareerPlanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _career_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./career-plan-routing.module */ 6369);
/* harmony import */ var _career_plan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./career-plan.page */ 41474);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CareerPlanPageModule = class CareerPlanPageModule {
};
CareerPlanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _career_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__.CareerPlanPageRoutingModule
        ],
        declarations: [_career_plan_page__WEBPACK_IMPORTED_MODULE_1__.CareerPlanPage]
    })
], CareerPlanPageModule);



/***/ }),

/***/ 41474:
/*!****************************************************************!*\
  !*** ./src/app/home/top-links/career-plan/career-plan.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CareerPlanPage": () => (/* binding */ CareerPlanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_career_plan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./career-plan.page.html */ 19207);
/* harmony import */ var _career_plan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./career-plan.page.scss */ 23747);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/toast.service */ 84465);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);











let CareerPlanPage = class CareerPlanPage {
    constructor(headerTitle, apiProgramsService, loader, apiGeneralService, sanitizer, toastr) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.loader = loader;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.webAssetsPath = "";
        this.arrInterestedPrograms = [];
        this.progInterestId = "";
        this.currentSelected = 0;
        this.SubSelectedTab = "a1";
        this.AssetsPathVideo = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "mobility-app/videothumbnails";
        this.arrAllVideos = [];
        this.arrVideoMBBS = [];
        this.slideVideoOpts = {
            slidesPerView: 1.5,
            freeMode: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }
        };
        this.headerTitle.isBack = false;
        this.headerTitle.title = "Career Plan";
    }
    ionVIewWillEnter() {
        this.SubSelectedTab = "a1";
        this.currentSelected = 0;
    }
    ngOnInit() {
        this.getIntersetedProgram();
        this.getMBBSVideos();
    }
    getIntersetedProgram() {
        this.loader.presentLoading();
        var degreeID = 1;
        let postData = { "DegreeId": degreeID, "IsActive": true };
        this.apiProgramsService.getInterestedProgram(JSON.stringify(postData)).then(resp => {
            this.arrInterestedPrograms = resp;
            this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "prog-interest/images";
            this.currentSelected = this.arrInterestedPrograms[0]["progInterestId"];
            this.loader.loadingDismiss();
        })
            .catch(err => {
            console.log("getInterestedPrograms: " + err);
            this.loader.loadingDismiss();
        });
    }
    ionSelectProgram(progInterestId, index) {
        this.progInterestId = progInterestId;
        this.currentSelected = progInterestId;
        if (progInterestId == 1) {
            this.SubSelectedTab = "a1";
        }
        else if (progInterestId = 3) {
            this.SubSelectedTab = "c1";
        }
        else if (progInterestId = 2) {
            this.SubSelectedTab = "b1";
        }
    }
    subTab(subTabId) {
        this.SubSelectedTab = subTabId;
    }
    //== Video Section start
    getMBBSVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 2, 'isActive': true };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.arrVideoMBBS = resp;
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
CareerPlanPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_4__.ApiProgramsService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
CareerPlanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-career-plan',
        template: _raw_loader_career_plan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_career_plan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CareerPlanPage);



/***/ }),

/***/ 23747:
/*!******************************************************************!*\
  !*** ./src/app/home/top-links/career-plan/career-plan.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("form ion-item {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmVlci1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFTLGlCQUFBO0FBQ2IiLCJmaWxlIjoiY2FyZWVyLXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIGlvbi1pdGVte2ZvbnQtc2l6ZTogMC45cmVtO31cclxufSJdfQ== */");

/***/ }),

/***/ 19207:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/career-plan/career-plan.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-top-links></app-top-links>\r\n\r\n  <div class=\"main-cont content-cont\">\r\n    <h5 class=\"hdng-line\">\r\n      <span>Plan your career with MOKSH</span>\r\n    </h5>\r\n\r\n    <section>      \r\n      <ion-grid fixed class=\"box-prog\">\r\n        <ion-row class=\"m-0\">\r\n          <ion-col *ngFor=\"let item of arrInterestedPrograms; let index = index\"\r\n            (click)=\"ionSelectProgram(item.progInterestId, index)\"\r\n            [ngClass]=\"{selected: item.progInterestId === currentSelected}\">\r\n            <div>\r\n              <div>\r\n                <img src=\"{{this.webAssetsPath}}/{{item.progInterestId}}/{{item.progInterestImage}}\" />\r\n              </div>\r\n              <div>\r\n                <ion-label>{{item.programInterest}}</ion-label>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </section>\r\n\r\n    <section class=\"tab-content white-box mt-2\">\r\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 1}\">\r\n        <ion-text color=\"primary\">\r\n          <h6>Career Planning - MBBS</h6>\r\n        </ion-text>\r\n\r\n        <p>\r\n          In order to provide optimum healthcare services to Indian population, India needs to have more than 1 Mn+\r\n          licensed physicians across the country except for 11 states, majorly in South India. In such circumstances,\r\n          the career of a doctor provides adequate opportunity to earn, get respect and a high value for the degree.\r\n        </p>\r\n        <figure>\r\n          <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/career-plan/img-graph.jpg\" alt=\"\">\r\n        </figure>\r\n        <ion-button [routerLink]=\"['/home/top-links/moksh-plus']\" routerLinkActive=\"router-link-active\"  expand=\"block\" >\r\n          MOKSH Plus\r\n        </ion-button>\r\n        <br><br>\r\n        <article>\r\n          <ion-text color=\"primary\">\r\n            <h6>Is it easy to become a doctor in India?</h6>\r\n          </ion-text>\r\n          <p>\r\n            With 16 Lacs + NEET UG aspirants in India and only 35,000 government seats, it becomes an extremely\r\n            pressured time till you get a medical seat. It amounts to hardly 2% success ratio. It means 98% of the students need to\r\n            compromise on their career dream of becoming a doctor. The next option for these aspirants is private medical colleges\r\n            or Deemed universities. The cost to study in these colleges works to Rs. 60 Lacs+. Hence, the entry point is\r\n            very difficult for the students even though the doctors are in huge need in India.\r\n          </p>\r\n          <ion-button [routerLink]=\"['/home/college-predictor']\" routerLinkActive=\"router-link-active\"  expand=\"block\"  color=\"secondary\">\r\n            College Predictor\r\n          </ion-button>\r\n        </article>\r\n        <article>\r\n          <ion-text color=\"primary\">\r\n            <h6>Easy & Guaranteed Options to pursue MBBS</h6>\r\n          </ion-text>\r\n          <p>\r\n            Under these circumstances, most of the students either do not have the required merit or do not have such\r\n            large budgets. Do you simply let go of your dreams? NO! There are 2 options for Indian students to become a\r\n            doctor with a guarantee and at a low cost!\r\n          </p>\r\n          <h6><em>- Option 1 : MBBS Abroad </em></h6>\r\n          \r\n          <p>\r\n            One of the options chosen by the students is to study medicine abroad leading to an acceptable MBBS degree. Recently, NMC (National Medical Commission) has given permission to the Indian students to study anywhere across the world, including India, in any medical institute. However, on return, the students would have to appear for the National Exit Test (NEXT). A uniform global education is being created by NMC. <strong>Every Indian doctor having a medical graduate degree from any institute across the world and qualifies in NEXT can practice in India!</strong>\r\n          </p>\r\n          <ion-button [routerLink]=\"['/home/welcome']\" routerLinkActive=\"router-link-active\"  expand=\"block\"  fill=\"outline\" color=\"primary\">\r\n            Know more about MBBS Abroad\r\n          </ion-button>\r\n          <br>\r\n          <h6><em>- Option 2 : Combo Medical Program </em></h6>\r\n          <p>\r\n            Due to the traditional thinking and major Indian population having no exposure to the global travel, the parents are not that open to send their children at an age of 18 years. Further, more than 50% of the NEET aspirants are girls. Indian parents being more protective towards a girl child, they decide not to send them abroad thinking of safety or security as an issue. Around 80% of the NEET aspirants finally choose to pursue B.Sc program in India. For such NEET aspirants, there is another option which is called <strong> Combo Medical Program (CMP).</strong> \r\n          </p>\r\n          <ion-button [routerLink]=\"['/home/top-links/cmp']\" expand=\"block\"  fill=\"outline\" color=\"primary\">\r\n            Know more about CMP\r\n          </ion-button>         \r\n         \r\n        </article>\r\n        <article>\r\n          <ion-text><h6>Benefits of CMP:</h6></ion-text> \r\n          <ul>\r\n            <li>You can appear for NEET again in the next year since you are in India</li>\r\n            <li>The first of NMAT program includes complete portion of NEET so you save on extra coaching</li>\r\n            <li>Easy to convince parents to send you abroad once you turn 20 years and more matured.</li>\r\n            <li>Even if you are NEET unqualified, you can still join this program.</li>\r\n          </ul>\r\n        </article>\r\n        <article>\r\n          <ion-text color=\"primary\">\r\n            <h6>Your course for MBBS right up to MD / MS</h6>\r\n          </ion-text>\r\n        </article>\r\n        <article>\r\n          <ion-grid fixed class=\"box-prog mb-2\">\r\n            <ion-row class=\"m-0\">\r\n              <ion-col (click)=\"subTab('a1')\" [ngClass]=\"{selected: 'a1' === SubSelectedTab}\">\r\n                <div>\r\n                  <ion-label>UG Level Studies</ion-label>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col (click)=\"subTab('a2')\" [ngClass]=\"{selected: 'a2' === SubSelectedTab}\">\r\n                <div>\r\n                  <ion-label>License Exam Clearance</ion-label>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col (click)=\"subTab('a3')\" [ngClass]=\"{selected: 'a3' === SubSelectedTab}\">\r\n                <div>\r\n                  <ion-label>PG Level Entry</ion-label>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n        <div *ngIf=\"SubSelectedTab=='a1'\">\r\n          <h5>UG Level Studies</h5>\r\n          <p>\r\n            There are 19 subjects covered during UG level course leading to MBBS degree in India. The course duration is for 4.5 years with segments such as Pre Clinical, Para Clinical and Clinical lasting for 1.5 years each. In other countries such as Russia, Ukraine, China etc. the same 19 subjects are covered but there would be an added language learning included in the course.\r\n          </p>\r\n          <p>\r\n            With NMC opening up the entire world for you to study MBBS, there is no dearth of medical seats. Ultimately, wherever you study, you would have to qualify in the common last year license exam (NEXT). Hence if you feel, you are not going to score above 600 in NEET, you should start securing seat in top ranked university abroad or avail of the CMP to ensure your UG level is completed and your first milestone of becoming a doctor has been achieved.\r\n          </p>\r\n          <p>\r\n            The most important thing is to prepare for license exam during your MBBS course. Start from the very first year and you have your goals in sight! Generally, 98% of the Indian students choose from 3 exams such as NEXT (For Indian License), USMLE (For US license) and FSP (For German License).\r\n          </p>\r\n\r\n\r\n          \r\n        </div>\r\n        <div *ngIf=\"SubSelectedTab=='a2'\">\r\n          <h5>License Exam Clearance</h5>\r\n          <p>\r\n            No point in becoming a doctor if you cannot qualify in license exam. Even if you have degree of MBBS, you would not be allowed to practice in India. Around 86% of the students who appeared for FMGE (Earlier exam for MBBS graduated passing from abroad) failed since they did not have access to the learning tool. \r\n          </p>\r\n          <section class=\"sec-videos mb-3\">\r\n            <h5>Medical License Exam Preparation</h5>\r\n            <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n              <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\r\n                <div>\r\n                 <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n                </div>\r\n              </ion-slide>        \r\n            </ion-slides>\r\n          </section>\r\n         \r\n          <ion-button expand=\"block\"  color=\"success\" [routerLink]=\"['/home/online-coaching']\" routerLinkActive=\"router-link-active\" >\r\n            Know More <ion-icon name=\"logo-android\" slot=\"start\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        <div *ngIf=\"SubSelectedTab=='a3'\">\r\n          <h5>PG Level Entry</h5>\r\n          <p>\r\n            The value of a doctor is actually realized once a doctor achieves the degree of MD / MS. Only MBBS degree is slowly losing its sheen and importance. Under such circumstances, every student needs to prepare for the Exit Licensed cum PG Entrance exam (NEXT for India). \r\n          </p>\r\n          <p>\r\n            Huge varieties of clinical and non-clinical specializations can be pursued by the doctors during Post Graduate (NG) studies. It all depends on the merit / score in the NEXT exam (Earlier it was done through NEET-PG exam and now it has been replaced by NEXT). Around 1.60 Lac doctors appeared for NEET-PG in 2020. However, the number of PG seats in the government medical colleges is hardly 10,000. Every year, more than 80,000 doctors from India and 15,000 doctors who graduated from abroad get added into this list! The PG seat in a private medical college costs well above Rs. 1 Crore and it is out of pocket for most of the doctors in India.\r\n          </p>\r\n          <p>\r\n            Only 1 doctor reaches the stage of PG course from a Government college out of 16 doctors appearing for NEET-PG! In such difficult circumstances, the other option is to prepare for USMLE where in the student earns more than Rs. 45 Lacs per year during residency in USA. Further, the ratio is well maintained between UG to PG in USA and accordingly, one out of every 2 doctors appearing for USMLE exam makes to residency!\r\n          </p>\r\n          <p>\r\n            The latest trend is to prepare for the license exam such as NEXT or USMLE during the MBBS course, right from the first year so that your entire career dream is achieved.\r\n          </p>\r\n        </div>\r\n        <br>\r\n        <div class=\"landing-steps-cont mt-3 mb-3 d-none\">\r\n          <h5>Let us plan your career</h5>\r\n          <form>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item class=\"ion-no-padding\">\r\n                    <ion-label position=\"stacked\">1.\tWhen are you appearing for NEET? </ion-label>\r\n                    <ion-select interface=\"action-sheet\" value=\"Select\">\r\n                      <ion-select-option value=\"Select\">Select</ion-select-option>\r\n                      <ion-select-option value=\"I_am_a_repeater\">I am a repeater</ion-select-option>\r\n                      <ion-select-option value=\"Appear_in_this_year\">Appear in this year</ion-select-option>\r\n                      <ion-select-option value=\"Will_apear_later\">Will apear later</ion-select-option>                    \r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-item class=\"ion-no-padding\">\r\n                    <ion-label position=\"stacked\">2.\tWhich option makes sense to you?</ion-label>\r\n                    <ion-select interface=\"action-sheet\" value=\"Select\">\r\n                      <ion-select-option value=\"Select\">Select</ion-select-option>\r\n                      <ion-select-option value=\"MBBS_Abroad\">MBBS Abroad</ion-select-option>\r\n                      <ion-select-option value=\"Combo_Medical_Program\">Combo Medical Program</ion-select-option>\r\n                      <ion-select-option value=\"Repeat_for_MBBS_in_India\">Repeat for MBBS in India</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-item class=\"ion-no-padding\">\r\n                    <ion-label position=\"stacked\">3.\tLike to attend Career planning session? </ion-label>\r\n                    <ion-select interface=\"action-sheet\" value=\"Select\">\r\n                      <ion-select-option value=\"Select\">Select</ion-select-option>\r\n                      <ion-select-option value=\"Online_Counselling\">Online Counselling</ion-select-option>\r\n                      <ion-select-option value=\"Tele_Counselling\">Tele Counselling</ion-select-option>\r\n                      <ion-select-option value=\"Personal_Counselling\">Personal Counselling</ion-select-option>\r\n                      <ion-select-option value=\"Not_interested\">Not interested</ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </ion-col>              \r\n              </ion-row>\r\n            </ion-grid>        \r\n            <ion-button  color=\"secondary\"> Submit</ion-button>   \r\n          </form>\r\n        </div>\r\n      </article>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 2}\">\r\n        <ion-text color=\"primary\">\r\n          <h6>Career Planning - Bussiness</h6>\r\n        </ion-text>\r\n        <article>\r\n          <section class=\"sec-videos mb-3\">\r\n            <h5>UG Level Studies</h5>\r\n            <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n              <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\r\n                <div>\r\n                 <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n                </div>\r\n              </ion-slide>        \r\n            </ion-slides>\r\n          </section>\r\n          <p>\r\n            MOKSH Academy currently serves 3000+ students in 7 different countries by providing high quality medical licensing exam preparation tools. Top global faculty provide live class to knowledge hungry Indian & international students to prepare for exams such as NEXT / USMLE / FMGE / FSP etc.\r\n          </p>\r\n          <p>\r\n            Recently, National Medical Commission (NMC) in India passed a bill for doctors in Indian parliament making it mandatory for every doctor to qualify in NEXT exam in order to get the license to practice in India. Around 300,000 doctors are suddenly looking for high quality coaching, tutoring and test series. MOKSH Academy provides the best tools for NEXT:\r\n          </p>\r\n          <ul class=\"bullet-list\">\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>India’s largest Exam styled QBank for Medicos with segregation on subject & systems </li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Video explanations for every question attempted by you </li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Simulated Test platform </li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Weakness identifier to create your study planner to enhance the score</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Performance Analytics</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Predictive Scores </li>          \r\n          </ul>\r\n        </article>\r\n        <article>\r\n          <section class=\"sec-videos\">\r\n            <h5>UG Level Studies</h5>\r\n            <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n              <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\r\n                <div>\r\n                 <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n                </div>\r\n              </ion-slide>        \r\n            </ion-slides>\r\n          </section>\r\n          <p>\r\n            MOKSH Academy provides USMLE coaching to 650+ Indian doctors currently studying in various Indian medical institutions. MOKSH Academy is completely changing the way in which the education is parted. From theory based long hours of coaching, it has shifted to <strong>Patient Centred Learning</strong>.\r\n          </p>\r\n          <p>\r\n            The program offers:\r\n          </p>\r\n          <ul class=\"bullet-list\">\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Live class by top global faculty from US and 4 more countries</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Review lectures library</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Thousands of solved Patient cases</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Active learning & mentorship by MOKSH Step 1 successful students </li>          \r\n          </ul>\r\n        </article>\r\n        <article>\r\n          <section class=\"sec-videos\">\r\n            <h5>UG Level Studies</h5>\r\n            <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n              <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\r\n                <div>\r\n                 <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n                </div>\r\n              </ion-slide>        \r\n            </ion-slides>\r\n          </section>\r\n          <p>\r\n            Apart from these, there are many other preparatory courses on MOKSH Academy platform with full focus on healthcare segment such as:\r\n          </p>\r\n          <ul class=\"bullet-list\">\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Certified Pre Med program as per American standards leading to BS</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>NCLEX exam coaching for Nursing</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>NMAT entrance exam for medicine in Philippines </li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>OET exam for healthcare segment</li>\r\n          </ul>\r\n        </article>\r\n      </div>\r\n\r\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 3}\">\r\n        <ion-text color=\"primary\">\r\n          <h6>Career Planning - Engineering</h6>\r\n        </ion-text>\r\n        <p>\r\n          The main reason for getting into engineering programs used to be the employment around 5 years back. Around 1.35 Million students used to appear for JEE entrance exam to get into IITs which offered no more than 10,000 seats across the country. Over a period of time, huge number of private colleges has been established in India and the employability factor from these low quality private institutions is extremely low. Accordingly, there is a huge drop in the interest of the students to take up engineering as their option in India. Lots of private engineering colleges have been shut since the number of students appearing for JEE was no more than 1.10 Million by 2020!\r\n        </p>\r\n        <figure>\r\n          <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/career-plan/JEE-Main-Registration-Statistics.jpg\" alt=\"\">\r\n        </figure>\r\n        <p>\r\n          The success ratio of Indian students via JEE is hardly 1% and the balance 99% of the students have to join other local colleges or deemed universities. The students must look at NASSCOM report on unemployable engineers to create a career plan in advance.\r\n        </p>\r\n        <p>\r\n          On average, a student spends around Rs. 10 Lacs for becoming an engineer from an average level college including fees, hostel, living charges etc. At the end of the journey, the engineer does not get a job of his choice. Finally, they need to pursue MBA course to get employable in India!\r\n        </p>\r\n        <ion-grid fixed class=\"box-prog mb-2\">\r\n          <ion-row class=\"m-0\">\r\n            <ion-col (click)=\"subTab('c1')\" [ngClass]=\"{selected: 'c1' === SubSelectedTab}\">\r\n              <div>\r\n                <ion-label>UG Level Studies</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col (click)=\"subTab('c2')\" [ngClass]=\"{selected: 'c2' === SubSelectedTab}\">\r\n              <div>\r\n                <ion-label>License Exam Clearance</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col (click)=\"subTab('c3')\" [ngClass]=\"{selected: 'c3' === SubSelectedTab}\">\r\n              <div>\r\n                <ion-label>PG Level Entry</ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div *ngIf=\"SubSelectedTab=='c1'\">\r\n          <section class=\"sec-videos\">\r\n            <h5>UG Level Studies</h5>\r\n            <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n              <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\r\n                <div>\r\n                 <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n                </div>\r\n              </ion-slide>        \r\n            </ion-slides>\r\n          </section>\r\n          <p>\r\n            It is important to open up the mind. The world is getting global and connected. Every engineer need to be ready to be part of the Global opportunities. In case you are not sure to get into IIT due to extreme competition in India, it might be a better option to focus on global education options. In case of engineering courses, you can’t get better option than Germany!\r\n          </p>\r\n          <p>\r\n            There are 3 options for an Indian student after 12th for engineering career:\r\n          </p>\r\n          <ul class=\"bullet-list\">\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Try your best to crack JEE to get into the best IIT in India</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Apply for international courses at Indian engineering courses</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Apply for studeinkolleg + Free B. Tech degree program in Germany</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"SubSelectedTab=='c2'\">\r\n          <h5>License Exam Clearance</h5>\r\n          <p>\r\n            Generally, most of the students prepare for their PG entrance exams in India such as GATE or CAT during their 3rd / 4th year of engineering. In case the student has a global career plan, they generally prepare for GRE or GMAT which are known internationally. The students looking for a global career in Europe would also need to have an added skills of language learning.\r\n          </p>\r\n          <p>\r\n            The top notch universities in USA and Canada always expect you to have experience of minimum 3-5 years before which you can apply for MBA course. However, in Germany, the top ranking public universities such as OVGU allow you to continue with your education in MBA courses.\r\n          </p>\r\n        </div>\r\n        <div *ngIf=\"SubSelectedTab=='c3'\">\r\n          <h5>PG Level Entry</h5>\r\n          <p>\r\n            In India, a B. Tech is generally considered to be enough to start a job. However, in developed countries, an engineer generally specializes in a subject and pursues Masters before starting the employment journey. For many students, it is difficult to go abroad at a UG level. In fact, 88% of the students having a global career dream depart for international education at PG level. This is due to traditional way of upbringing in Indian family wherein we treat the child as matured only once he crosses the age of 20 years!\r\n          </p>\r\n          <p>\r\n            There are 3 options to complete your journey right up to PG in Engineering & become a global engineer:\r\n          </p>\r\n          <ul class=\"bullet-list\">\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Pursue B. Tech course in India and go for PG level in Germany with FREE education</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>B. Tech course abroad with same cost as Indian engineering course + M. Tech in Germany</li>\r\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>B. Tech course for FREE in Germany + M. Tech in Germany for FREE</li>\r\n          </ul>\r\n          <p>\r\n            Around 25,000 Indian students are currently studying in Germany and getting great employment opportunity at a much better pay scale.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </section>    \r\n  </div>\r\n\r\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\r\n    <div class=\"toogle-cont\">\r\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>        \r\n      <ion-grid fixed class=\"padding-md\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div [innerHTML]=\"iframe\" >\r\n              <!-- <iframe [src]=\"videoURL\" class=“embed-responsive-item” frameborder=\"0\" style=\"width: 100%; height: 300px;\"allow=\"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n  <app-footer-short-cut></app-footer-short-cut>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_career-plan_career-plan_module_ts.js.map