(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_moksh-pro_moksh-pro_module_ts"],{

/***/ 17105:
/*!**********************************************************************!*\
  !*** ./src/app/home/top-links/moksh-pro/moksh-pro-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokshProPageRoutingModule": () => (/* binding */ MokshProPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _moksh_pro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moksh-pro.page */ 73633);




const routes = [
    {
        path: '',
        component: _moksh_pro_page__WEBPACK_IMPORTED_MODULE_0__.MokshProPage
    }
];
let MokshProPageRoutingModule = class MokshProPageRoutingModule {
};
MokshProPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MokshProPageRoutingModule);



/***/ }),

/***/ 94011:
/*!**************************************************************!*\
  !*** ./src/app/home/top-links/moksh-pro/moksh-pro.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokshProPageModule": () => (/* binding */ MokshProPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _moksh_pro_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moksh-pro-routing.module */ 17105);
/* harmony import */ var _moksh_pro_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moksh-pro.page */ 73633);








let MokshProPageModule = class MokshProPageModule {
};
MokshProPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _moksh_pro_routing_module__WEBPACK_IMPORTED_MODULE_1__.MokshProPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_moksh_pro_page__WEBPACK_IMPORTED_MODULE_2__.MokshProPage]
    })
], MokshProPageModule);



/***/ }),

/***/ 73633:
/*!************************************************************!*\
  !*** ./src/app/home/top-links/moksh-pro/moksh-pro.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokshProPage": () => (/* binding */ MokshProPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_moksh_pro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./moksh-pro.page.html */ 15067);
/* harmony import */ var _moksh_pro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moksh-pro.page.scss */ 66127);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);










let MokshProPage = class MokshProPage {
    constructor(headerTitle, apiGeneralService, sanitizer, toastr, previewFile) {
        this.headerTitle = headerTitle;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.previewFile = previewFile;
        this.arrServices = [];
        this.webAssetsPath = "";
        this.currentSelected = 0;
        this.SubSelectedTab = "";
        this.arrVideos = [];
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        this.slideOpts = {
            slidesPerView: 2.8,
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
        this.headerTitle.title = "MOKSH PRO";
    }
    ngOnInit() {
        this.getServices();
        this.getVideos();
    }
    getServices() {
        this.arrServices =
            [
                { 'serviceID': 1, 'serviceImage': '', 'serviceName': 'PROGRAM' },
                { 'serviceID': 2, 'serviceImage': '', 'serviceName': 'SUITABILITY' },
                { 'serviceID': 3, 'serviceImage': '', 'serviceName': 'ELIGIBILITY' },
                { 'serviceID': 4, 'serviceImage': '', 'serviceName': 'BENEFITS' },
                { 'serviceID': 5, 'serviceImage': '', 'serviceName': 'SUCCESS STORY' }
            ];
    }
    ionSelected(index) {
        this.currentSelected = index;
    }
    onClickDownload() {
        var brochureLink = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/moksh-pro/MOKSH_Pro_USMLE_Graduates.pdf";
        this.previewFile.preview(brochureLink);
    }
    //#region  Video Section start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 26, 'isActive': true };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/videothumbnails";
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
MokshProPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_6__.PreviewAnyFile }
];
MokshProPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-moksh-pro',
        template: _raw_loader_moksh_pro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_moksh_pro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MokshProPage);



/***/ }),

/***/ 66127:
/*!**************************************************************!*\
  !*** ./src/app/home/top-links/moksh-pro/moksh-pro.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sec-videos {\n  margin: 0px -12px;\n}\n\n.box-prog ion-col ion-label {\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.content-cont .box-prog ion-col.selected:after {\n  width: 15px;\n  height: 15px;\n  bottom: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1va3NoLXByby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxpQkFBQTtBQUVaOztBQURBO0VBQTRCLGdCQUFBO0VBQWtCLG1CQUFBO0FBTTlDOztBQUxBO0VBQStDLFdBQUE7RUFBYSxZQUFBO0VBQWMsWUFBQTtBQVcxRSIsImZpbGUiOiJtb2tzaC1wcm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYy12aWRlb3N7bWFyZ2luOiAwcHggLTEycHg7fVxyXG4uYm94LXByb2cgaW9uLWNvbCBpb24tbGFiZWx7Zm9udC13ZWlnaHQ6IDYwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDt9XHJcbi5jb250ZW50LWNvbnQgLmJveC1wcm9nIGlvbi1jb2wuc2VsZWN0ZWQ6YWZ0ZXJ7d2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDsgYm90dG9tOiAtM3B4O30iXX0= */");

/***/ }),

/***/ 15067:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/moksh-pro/moksh-pro.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-top-links></app-top-links>\n\n  <div class=\"main-cont content-cont\">\n    <h5 class=\"hdng-line\">\n      <span>MOKSH PRO</span>\n    </h5>\n    <section class=\"sec-videos\" *ngIf=\"arrVideos?.length > 0\">      \n      <div *ngIf=\"arrVideos?.length == 1\">\n      <figure class=\"m-0\" *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n        <img src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\n      </figure>\n    </div>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideos?.length > 1\">\n        <ion-slide *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n            <img src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </section>\n    <section class=\"mt-0\">\n      <p>\n        Till 2020, all the doctors who passed from Indian medical colleges (Government or Private) got the license to practice in India without qualifying in any exam. It means, all the doctors were employable in healthcare segment such as hospitals without any hassles. However, the students completing their studies abroad had to qualify in a licensing exam namely FMGE. The result of FMGE in the 4 years period from 2015 to 2019 was only 11,500 qualified out of around 74,000 attempts totally. It means, there is a huge flow of doctors in India who are not yet licensed and are not able to practice. This is the most frustrating period for all the doctors. Currently there are around 75,000 Indians studying medicine abroad out of which 15,000 are in their final year of MBBS program.\n      </p>\n      <ion-text color=\"primary\">\n      <h6>Book a FREE online  session with counsellor</h6>\n    </ion-text>\n      <figure class=\"m-0 mb-4\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n        <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n      </figure>\n      <br>\n      <p>\n        Further, by 2020, the NMC has announced that even the doctor passing MBBS from Indian medical colleges would also have to appear for this common exit & license exam which has been newly named as NEXT (National Exit Test). Around 300,000 doctors are currently studying in India in 500+ medical colleges. Out of these around 70,000 students are in their final year. It is expected that this will produce a huge flow of doctors who are not licensed. They cannot be employed at the hospitals! So what do they do?\n      </p>\n      <p>\n        They come to us and join MOKSH-PRO, a unique <strong>Training & Placement program</strong>.\n      </p>\n    </section>\n    <section>\n      <ion-grid fixed class=\"box-prog\">\n        <ion-row class=\"m-0\">\n          <ion-slides [options]=\"slideOpts\" class=\"pb-2\">\n            <ion-slide *ngFor=\"let item of arrServices; let index = index\">\n              <ion-col (click)=\"ionSelected(index)\" [ngClass]=\"{selected: index === currentSelected}\">\n                <div>                  \n                    <ion-label class=\"mt-0\">\n                      <div [innerHTML]=\"item.serviceName\"> </div>\n                    </ion-label>                  \n                </div>\n              </ion-col>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </ion-grid>\n    </section>\n   \n    <section class=\"tab-content white-box mt-2\">\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 0}\">\n        <article>\n          <ion-text color=\"primary\"><h6>About MOKSH-PRO Solution</h6></ion-text>             \n              <p>\n                MOKSH Academy has created a unique association within healthcare sector such as hospitals, Scribe industry and Pharmaceutical companies wherein the doctors with or without a practice license would be allowed to work to gain practical knowledge. Apart from this, MOKSH Academy would also be providing:\n              </p>\n              <ul class=\"bullet-list\">\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Coaching for NEXT / USMLE / FSP </li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Accommodation during their employment period </li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Training for special job roles such as Coder for a Virtual Scribe Industry </li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Access to huge case studies library </li>\n                <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Interaction with US physicians on real time basis </li>        \n              </ul>\n              <p>\n                The program is partly funded by the industry till the student clears the exam. This program comes with a mandatory 18 months of employment period, even if the doctor passes. On the other hand, the doctors can choose to continue with their employment with high salary even after passing the license exam.\n              </p>\n          <ion-grid fixed class=\"m-0\">\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-button expand=\"block\" (click)=\"onClickDownload()\" shape=\"round\">Download Brochure\n                  <ion-icon name=\"cloud-download-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <!-- <ion-col size=\"12\">\n                <ion-button (click)=\"onClick()\" expand=\"block\" color=\"success\" shape=\"round\">Register for a Webinar\n                  <ion-icon name=\"videocam-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n              </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </article>\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 1}\">\n        <ion-text color=\"primary\"><h6>Who can join MOKSH-PRO?</h6></ion-text>\n        <p>Various categories of doctors join MOKSH-PRO course.</p>\n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Doctors in their last year of MBBS program in abroad wishing to prepare for license exams such as NEXT / USMLE or\n            FMGE but need it for FREE! </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Graduates who have failed in FMGE and are looking for a fresh start for attempting NEXT </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Graduates who are looking for quality USMLE Step 1 & 2CK coaching but cannot spend. </li>        \n        </ul>\n        <br>\n        <div class=\"ion-grid flow-diagram\">\n          <ion-row>\n            <ion-col>\n              <div style=\"background:#c0504d\"><span>160,000 Last year students</span></div>\n              <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <div style=\"background:#bd9b53\"><span>Around 25,000 Doctors</span></div>\n              <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <div style=\"background:#9bbb59\"><span>10,000 Last year students</span></div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 2}\"> \n        <ion-text color=\"primary\"><h6>Selection process for MOKSH-PRO Course</h6></ion-text>\n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The doctors should be from anyone of the above categories and choose their next career plan.  They would have to submit their basic CV for the consideration.                                       </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>They would be interviewed by the employer online for English language communication as well as basic clinical skills and the selected doctors would be issued a conditional employment letter.      </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The doctor pays only the initial deposit and their minimum 18 month long USMLE Step 1 & Step 2CK class starts on MOKSH LMS.                                                                         </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The doctor is booked for an accommodation by MOKSH without any charges and starts the internship at the employer location.                                                                          </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The doctor would be further trained for one month and if finalized to be sponsored by the employer, a confirmed employment letter would be issued.                                                  </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The doctor does not pay anything to MOKSH since the whole program is sponsored by the industry while they learn on real time patient cases of US physicians.                                        </li>\n        </ul>\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 3}\"> \n        <ion-text color=\"primary\"><h6>Benefits of joining MOKSH-PRO course</h6></ion-text>\n        <p>\n          A huge chunk of doctors spend a lot of time after MBBS to get the license via or to enter into PG program through NEET-PG. During this period, there is no earning for the doctors and most of the time goes in preparation of the exam. Furthermore, this preparation happens at a huge of money and time. Slowly, the exam pattern is changing from theory to more focus on patient cases based questions since both these exams are now replaced by National Exit Test (NEXT) from 2021 onward.\n        </p>\n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Free preparation for NEXT / USMLE with unlimited validity                         </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Option to continue earning around Rs. 6 Lacs per annum post clearance of the exam </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Access to actual patient cases from USA on real time basis                        </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Industry sponsored lodging & boarding during your coaching period                 </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>You start getting practical insight even if you do not have the license           </li>          \n        </ul>\n        <ion-button expand=\"block\" [routerLink]=\"['/home/online-coaching']\" routerLinkActive=\"router-link-active\" >\n          GET FREE access to MOKSH coaching\n        </ion-button>\n      </div>\n\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 4}\"> \n        <ion-text color=\"primary\"><h6>How many doctors are already working?</h6></ion-text>\n        <p>\n          Under this program, there are more than 500 doctors accessing the real time patient cases as well as MOKSH coaching platform absolutely free of cost!\n        </p>\n        <p>\n          On joining the MOKSH coaching for NEXT or USMLE, every student would get a chance to participate in MOKSH-PRO which is more like an <strong>industry sponsored program</strong> . It must be noted that there is only 30% success ratio for you to get selected for MOKSH-PRO course. Out of 100 students applying, around 30 students are finally found suitable for the employment + Free Training program.\n        </p>\n        <p>\n          The students also have an option to join normal MOKSH Academy for NEXT / USMLE without this PRO course! However, they would have to pay for the course as per the standard fees structure.\n        </p>\n      </div>\n    </section>\n\n    <section>      \n      \n    </section>\n  </div>\n\n  <!-- Video Panel Start -->\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_moksh-pro_moksh-pro_module_ts.js.map