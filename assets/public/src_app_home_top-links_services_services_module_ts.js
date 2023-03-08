(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_services_services_module_ts"],{

/***/ 51209:
/*!********************************************************************!*\
  !*** ./src/app/home/top-links/services/services-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPageRoutingModule": () => (/* binding */ ServicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.page */ 35226);




const routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_0__.ServicesPage
    }
];
let ServicesPageRoutingModule = class ServicesPageRoutingModule {
};
ServicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServicesPageRoutingModule);



/***/ }),

/***/ 9799:
/*!************************************************************!*\
  !*** ./src/app/home/top-links/services/services.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPageModule": () => (/* binding */ ServicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-routing.module */ 51209);
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.page */ 35226);








let ServicesPageModule = class ServicesPageModule {
};
ServicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _services_routing_module__WEBPACK_IMPORTED_MODULE_1__.ServicesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_services_page__WEBPACK_IMPORTED_MODULE_2__.ServicesPage]
    })
], ServicesPageModule);



/***/ }),

/***/ 35226:
/*!**********************************************************!*\
  !*** ./src/app/home/top-links/services/services.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesPage": () => (/* binding */ ServicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./services.page.html */ 75711);
/* harmony import */ var _services_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services.page.scss */ 71369);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);














let ServicesPage = class ServicesPage {
    constructor(headerTitle, apiProgramsService, loader, auth, apiCRMService, storage, apiGeneralService, toastr, sanitizer) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.loader = loader;
        this.auth = auth;
        this.apiCRMService = apiCRMService;
        this.storage = storage;
        this.apiGeneralService = apiGeneralService;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.webAssetsPath = "";
        this.progInterestId = "";
        this.currentSelected = 0;
        this.SubSelectedTab = "a1";
        this.arrServices = [];
        this.rawLeadID = 0;
        this.leadID = 0;
        this.arrCRMRawData = [];
        this.arrUserData = [];
        this.arrSelection = [];
        this.arrVideos = [];
        this.arrVideos1 = { 'videoLink': '', 'videoId': '', 'thumbnailImage': '' };
        this.arrVideos2 = { 'videoLink': '', 'videoId': '', 'thumbnailImage': '' };
        this.arrVideos3 = { 'videoLink': '', 'videoId': '', 'thumbnailImage': '' };
        this.arrVideos4 = { 'videoLink': '', 'videoId': '', 'thumbnailImage': '' };
        this.arrVideos5 = { 'videoLink': '', 'videoId': '', 'thumbnailImage': '' };
        this.arrVideos6 = { 'videoLink': '', 'videoId': '', 'thumbnailImage': '' };
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        this.headerTitle.isBack = false;
        this.headerTitle.title = "MOKSH Services";
    }
    ngOnInit() {
        this.getServices();
        this.getUserData();
        this.getVideos();
    }
    getServices() {
        this.arrServices =
            [
                { 'serviceID': 1, 'serviceImage': 'https://app.moksh16.in/application-centre/assets/mobility-app/services/icon-career-planning.png', 'serviceName': 'Career <br>Guidance' },
                { 'serviceID': 2, 'serviceImage': 'https://app.moksh16.in/application-centre/assets/mobility-app/services/icon-university-application.png', 'serviceName': 'University Application' },
                { 'serviceID': 3, 'serviceImage': 'https://app.moksh16.in/application-centre/assets/mobility-app/services/icon-travel-arrangments.png', 'serviceName': 'Travel Arrangements' },
                { 'serviceID': 4, 'serviceImage': 'https://app.moksh16.in/application-centre/assets/mobility-app/services/icon-post-arrival.png', 'serviceName': 'Post Arrival Services' },
                { 'serviceID': 5, 'serviceImage': 'https://app.moksh16.in/application-centre/assets/mobility-app/services/icon-coaching.png', 'serviceName': 'License Exam Coaching' },
                { 'serviceID': 6, 'serviceImage': 'https://app.moksh16.in/application-centre/assets/mobility-app/services/icon-doctor.png', 'serviceName': 'Medico Placements' },
            ];
    }
    ionSelected(index) {
        this.currentSelected = index;
    }
    requestCallbak() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getSelection();
            if (this.leadID == 0) {
                if (this.rawLeadID == 0) {
                    var mobileNoCode = this.arrUserData["mobileNo"].substring(1, 3);
                    var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
                    this.apiCRMService.arrCRMRawData["LeadPriorityID"] = "4";
                    this.apiCRMService.arrCRMRawData["ContactWhatsappCode"] = mobileNoCode;
                    this.apiCRMService.arrCRMRawData["ContactWhatsapp"] = mobileNo;
                    this.apiCRMService.arrCRMRawData["EmailID"] = this.arrUserData["emailId"];
                    this.apiCRMService.arrCRMRawData["FName"] = this.arrUserData["firstName"];
                    this.apiCRMService.arrCRMRawData["LName"] = this.arrUserData["lastName"];
                    this.apiCRMService.arrCRMRawData["FranchiseeID"] = this.apiCRMService.FranchiseeID;
                    this.apiCRMService.arrCRMRawData["LeadSourceID"] = this.apiCRMService.LeadSourceID;
                    this.apiCRMService.arrCRMRawData["ProductDepartmentID"] = this.apiCRMService.ProductDepartmentMBBS;
                    this.apiCRMService.arrCRMRawData["SubProductDepartmentID"] = this.apiCRMService.ProductSubDepartmentMBBS;
                    this.setCRMRawData();
                }
                else {
                    this.getCRMRawData();
                }
            }
        });
    }
    setCRMRawData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var arrPostdata = this.apiCRMService.arrCRMRawData;
            arrPostdata["InterestedCountryID"] = String(this.arrSelection["countryId"]);
            arrPostdata["InterestedProgramID"] = String(this.arrSelection["progInterestId"]);
            arrPostdata["RawLeadID"] = this.rawLeadID.toString();
            arrPostdata["IsActive"] = false;
            yield this.apiCRMService.setCRMRawData(JSON.stringify(arrPostdata)).then(resp => {
                console.log(resp);
            });
        });
    }
    getCRMRawData() {
        let postdata = { 'RawLeadID': this.rawLeadID };
        this.apiCRMService.getCRMRawData(JSON.stringify(postdata)).then(resp => {
            var data = JSON.parse(resp.d);
            if (this.arrCRMRawData.length > 0) {
                this.arrCRMRawData = data[0];
                this.setCRMRawData();
            }
        });
    }
    getUserData() {
        this.auth.userData$.subscribe((res) => {
            this.arrUserData = res;
            console.log(res.rawLeadID);
            this.rawLeadID = (res.rawLeadID == null ? 0 : res.rawLeadID);
            this.leadID = (res.leadID == null ? 0 : res.leadID);
        });
    }
    getSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("arrSelection").then((resp) => {
                this.arrSelection = resp;
            });
        });
    }
    //== Video Section start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 31 };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.webAssetsPath + "mobility-app/videothumbnails";
                this.arrVideos = resp;
                this.arrVideos.forEach(el => {
                    if (el.videoId == 86) {
                        this.arrVideos1 = el;
                    }
                    if (el.videoId == 87) {
                        this.arrVideos2 = el;
                    }
                    if (el.videoId == 88) {
                        this.arrVideos3 = el;
                    }
                    if (el.videoId == 89) {
                        this.arrVideos4 = el;
                    }
                    if (el.videoId == 90) {
                        this.arrVideos5 = el;
                    }
                    if (el.videoId == 91) {
                        this.arrVideos6 = el;
                    }
                });
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
ServicesPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_8__.ApiProgramsService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__.ApiCRMService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer }
];
ServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-services',
        template: _raw_loader_services_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_services_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServicesPage);



/***/ }),

/***/ 71369:
/*!************************************************************!*\
  !*** ./src/app/home/top-links/services/services.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content-cont .box-prog ion-col.selected:after {\n  display: none;\n}\n\n.box-prog ion-col ion-label {\n  font-size: 0.8rem;\n  line-height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUErQyxhQUFBO0FBRS9DOztBQURBO0VBQTRCLGlCQUFBO0VBQW1CLGlCQUFBO0FBTS9DIiwiZmlsZSI6InNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbnQgLmJveC1wcm9nIGlvbi1jb2wuc2VsZWN0ZWQ6YWZ0ZXJ7ZGlzcGxheTogbm9uZTt9XHJcbi5ib3gtcHJvZyBpb24tY29sIGlvbi1sYWJlbHtmb250LXNpemU6IDAuOHJlbTsgbGluZS1oZWlnaHQ6IDE1cHg7fSJdfQ== */");

/***/ }),

/***/ 75711:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/services/services.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-top-links></app-top-links>\n\n  <div class=\"main-cont content-cont\">    \n    <h5 class=\"hdng-line\">\n      <span>MOKSH Services</span>\n    </h5>\n\n    <section>\n      <ion-grid fixed class=\"box-prog\">\n        <ion-row class=\"m-0\">\n          <ion-col size=\"4\" *ngFor=\"let item of arrServices; let index = index\" (click)=\"ionSelected(index)\"\n            [ngClass]=\"{selected: index === currentSelected}\">\n            <div>\n              <div>\n                <img src=\"{{item.serviceImage}}\" />\n              </div>\n              <div>\n                <ion-label>\n                  <div [innerHTML]=\"item.serviceName\"></div>\n                </ion-label>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </section>\n\n    <section class=\"tab-content white-box mt-2\">\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 0}\">\n        <ion-text color=\"primary\">\n          <h6>Career Guidance</h6>\n        </ion-text>\n        <section class=\"sec-videos\" *ngIf=\"arrVideos1\">\n          <div>\n            <figure class=\"m-0\" (click)=\"playVideo(arrVideos1.videoLink)\">\n              <img src=\"{{this.webAssetsPath}}/{{arrVideos1.videoId}}/{{arrVideos1.thumbnailImage}}\" class=\"w-100\">\n            </figure>\n          </div>\n        </section>\n        <p>\n          MOKSH provides its honest and unbiased advisory services for the students from the age of 16 years so that\n          they can plan their career well. The major focus is on the science students looking to pursue medical or\n          engineering aspirants. The concept of Career planning does not exist in India as a professional service.\n          However, MOKSH designs individual career of the student and supports it till their Post graduate level in\n          various ways. The current services provided by MOKSH have two options:\n        </p>\n        <ul>\n          <li>Parents coming to us and take advisory services</li>\n          <li>Have hand holding from UG to PG level till achievement of the desired Career goals.</li>\n        </ul>\n        <p>\n          While the first one is for FREE and on online, the second option is provided under MOKSH-PLUS brand and is on\n          chargeable basis. MOKSH-PLUS services involves 4-6 years of hand holding of the student by our academic &\n          career experts to ensure that the student gets settled in the career. Only 50 students per year can be served\n          under MOKSH-PLUS services since it requires personal attention and individual progress tracking. We aim to\n          make it more accessible to meet the high demand.\n        </p>\n\n        <ion-button [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\"  expand=\"block\" color=\"primary\">\n          Get FREE Online Counselling\n        </ion-button>\n\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 1}\">\n        <ion-text color=\"primary\">\n          <h6>University Application</h6>\n        </ion-text>\n        <section class=\"sec-videos\" *ngIf=\"arrVideos2\">\n          <div>\n            <figure class=\"m-0\" (click)=\"playVideo(arrVideos2.videoLink)\">\n              <img src=\"{{this.webAssetsPath}}/{{arrVideos2.videoId}}/{{arrVideos2.thumbnailImage}}\" class=\"w-100\">\n            </figure>\n          </div>\n        </section>\n        <p>\n          Once you realize that it is time to start your journey abroad to study, you start searching for the local\n          admission agents. India is filled with thousands of admission agents in every nook and corner. They are local\n          agents and extremely unprofessional. The students need to have career guidance and not admission agents. These\n          agents cheat the students by taking money and lot of students pay heavy price by losing their dream career.\n          <strong>Why go for such unprofessional local admission agents?</strong>\n        </p>\n        <p>\n          The MOKSH direct university application system allows you to secure your admission is easily available here!\n          It’s a simple 3 step process:\n        </p>\n        <div class=\"ion-grid flow-diagram\">\n          <ion-row>\n            <ion-col>\n              <div style=\"background:#c0504d\"><span>Attend FREE online counselling session</span></div>\n              <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <div style=\"background:#bd9b53\"><span>Finalize your country & university</span></div>\n              <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <div style=\"background:#9bbb59\"><span>Apply directly to the University in just 6 mins</span></div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <br>\n        <p>\n          Start the process now! Attend the next counselling session conducted by MOKSH.\n        </p>\n        <ion-button [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\"   expand=\"block\" color=\"primary\">\n          Register for a Webinar Now\n        </ion-button>\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 2}\">\n        <ion-text color=\"primary\">\n          <h6>Travel Arrangements</h6>\n        </ion-text>\n        <section class=\"sec-videos\" *ngIf=\"arrVideos3\">\n          <div>\n            <figure class=\"m-0\" (click)=\"playVideo(arrVideos3.videoLink)\">\n              <img src=\"{{this.webAssetsPath}}/{{arrVideos3.videoId}}/{{arrVideos3.thumbnailImage}}\" class=\"w-100\">\n            </figure>\n          </div>\n        </section>\n        <p>\n          For the students choosing to go abroad, one of the fear factors in the mind of the parents. The students are\n          always busy making new friendships at the airport itself! You just need not worry even if it is your first\n          overseas travel experience! MOKSH takes care of your complete Pre-departure travel arrangements including:\n        </p>\n        <ul class=\"bullet-list\">\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Document pick up from home!\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Tickets with extra luggage for your initial\n            journey\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Visa documentations & application\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Foreign Exchange before travel\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>FOREX currency card for your local needs on\n            arrival\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Travel Insurance\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Escort to take you right up to the University\n            (Optional)\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Food at the airport for journeys having\n            connecting flights.\n          </li>\n        </ul>\n\n        <!-- <div class=\"hdng-ttl m-0\">\n          <h3 class=\"w-100\">5,000+ Students departed in 9 years</h3>\n        </div>    -->\n        <div style=\"margin: 0px -1.1rem;\">\n        <ion-button expand=\"full\" color=\"secondary\">\n          5,000+ Students departed in 9 years\n        </ion-button>     \n      </div>\n        <!-- <p>\n          We have 3 locations from where we handle the execution such as New Delhi (For North & East India based\n          students), Mumbai (For West India based students) and Hyderabad (For south India based students). Through\n          these offices, we have provided professional services of departure for more than 5000+ students in the last 8\n          years!\n        </p> -->\n      \n\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 3}\">\n        <ion-text color=\"primary\">\n          <h6>Post Arrival Services</h6>\n        </ion-text>\n        <section class=\"sec-videos\" *ngIf=\"arrVideos4\">\n          <div>\n            <figure class=\"m-0\" (click)=\"playVideo(arrVideos4.videoLink)\">\n              <img src=\"{{this.webAssetsPath}}/{{arrVideos4.videoId}}/{{arrVideos4.thumbnailImage}}\" class=\"w-100\">\n            </figure>\n          </div>\n        </section>\n        <p>\n          The first question from the parents is how the students will travel to the university once they arrive. Just\n          remove these fears from your mind when you deal with MOKSH.\n        </p>\n        <p>\n          MOKSH is the only company in India having overseas offices in Russia, Ukraine & Germany. Full-fledged office\n          with permanent staff in these offices always supports the student throughout their journey of education in\n          these countries. The support is available to all MOKSH students choosing to go abroad such as:\n        </p>\n        <ul class=\"bullet-list\">\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Meet and Greet at the destination airport with\n            pick up.\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Coach (AC or Heater) for transfer to the\n            University with food on the way\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Accommodation booking at the destination city\n            including university / private hostels\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Signing Student contract for University\n            registration process\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Initial support for settling down such as visit\n            to market & stores\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Local health insurance & medical check up\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Completion of immigration formalities in the\n            country for getting TRC\n          </li>\n          <li>\n            <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Resident permit extension\n          </li>\n        </ul>\n        <p>\n          MOKSH team in overseas countries are ready to help the students at any point of time during their study\n          duration as long as 6 years!\n        </p>\n        <br>\n        <div class=\"offices\">\n          <ion-text color=\"primary\">\n            <h6>Overseas Offices to support students</h6>\n          </ion-text>\n          \n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"3\"><img alt=\"\" src=\"https://app.moksh16.in/application-centre/assets/coutry/flag/2/Russia.jpg\">\n          \n              </ion-col>\n              <ion-col size=\"9\">\n                <h6>Russia</h6>\n                <div>\n                  Office No.6:11, Vladimirsky lane, Belgorod, Russia.\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3\"><img alt=\"\" src=\"https://app.moksh16.in/application-centre/assets/coutry/flag/3/Ukraine.jpg\">            \n              </ion-col>\n              <ion-col size=\"9\">\n                <h6>Ukraine</h6>\n                <div>\n                  6th floor, office No.1:137, Moskovskyi, Kharkiv, Ukraine.\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3\"><img alt=\"\" src=\"https://app.moksh16.in/application-centre/assets/coutry/flag/6/Germany.jpg\"></ion-col>\n              <ion-col size=\"9\">\n                <h6>Germany</h6>\n                <div>\n                  Gareis Strasse 13, 39106 Magdeburg, Germany\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 4}\">\n        <ion-text color=\"primary\">\n          <h6>License Exam Coaching</h6>\n        </ion-text>\n        <section class=\"sec-videos\" *ngIf=\"arrVideos5\">\n          <div>\n            <figure class=\"m-0\" (click)=\"playVideo(arrVideos5.videoLink)\">\n              <img src=\"{{this.webAssetsPath}}/{{arrVideos5.videoId}}/{{arrVideos5.thumbnailImage}}\" class=\"w-100\">\n            </figure>\n          </div>\n        </section>\n        <p>\n          Just having MBBS degree is of no use since every country has a regulation that the student must pass the local\n          license exam allowing them to practice. Unfortunately, students going through small admission agents do not\n          offer this solution and simply send the student abroad. Due to this reason, the students have suffered badly.\n          Around 61,000 doctors appeared for the license exam in India while only 8,700 of them passed. More than 52,000\n          doctors wasted crucial 6 years of their life along with more than Rs. 20 Lacs of their parents.\n        </p>\n        <ion-button expand=\"block\" [routerLink]=\"['/home/online-coaching']\" routerLinkActive=\"router-link-active\"  color=\"secondary\">\n          Get FREE Trial for NEXT Coaching\n        </ion-button>\n        <br>\n        <p>\n          Generally, the license exams also lead to the PG seat and accordingly, the most important part of your journey\n          during UG level studies, especially MBBS program, is to prepare for the license exam. When the students pursue\n          medicine abroad, they need to prepare for the license exam coaching of the country that they wish to settle\n          down finally. 98% of the Indian doctors prepare for either NEXT (For India) or USMLE (For USA) or FSP (For\n          Germany).\n        </p>\n        <p>\n          To experience, how MOKSH prepares its students for the license exam while they pursue MBBS, just download\n          MOKSH Academy available the play store for FREE!\n        </p>\n\n        <ion-button expand=\"block\" [routerLink]=\"['/home/online-coaching']\" routerLinkActive=\"router-link-active\"  color=\"primary\">\n          Get FREE Trial for USMLE Coaching!\n        </ion-button>\n        <!-- <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"6\">\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/other/playstore-button.png\"\n                class=\"w-100\">\n            </ion-col>\n            <ion-col size=\"6\">\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/other/applestore-button.png\"\n                class=\"w-100\">\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n      </div>\n      <div class=\"\" [ngClass]=\"{active: currentSelected == 5}\">\n        <ion-text color=\"primary\">\n          <h6>Medico Placements</h6>\n        </ion-text>\n        <section class=\"sec-videos\" *ngIf=\"arrVideos6\">\n          <div>\n            <figure class=\"m-0\" (click)=\"playVideo(arrVideos6.videoLink)\">\n              <img src=\"{{this.webAssetsPath}}/{{arrVideos6.videoId}}/{{arrVideos6.thumbnailImage}}\" class=\"w-100\">\n            </figure>\n          </div>\n        </section>\n        <p>\n          MOKSH has established itself into the healthcare segment in various ways. Starting from a journey where it\n          provides NEET score enhancer tools to get admission in India to placing the students for MBBS abroad and\n          preparing them for license exam.\n        </p>\n        <p>\n          The last mile connectivity is the jobs for these medicos. Generally there are 2 types of students who arrive\n          in India from abroad. The doctors who started with MOKSH license exam coaching and cleared the exam while\n          those who did not have quality tools to pass this exam. MOKSH also provides further assistance and support to\n          the doctors to get them settled for both these segments.\n        </p>\n        <p>\n          MOKSH-PRO is a service availed by the doctors to get placed in hospitals in India (In case you have got the\n          license). In case you are yet to get the license or delaying your appearance for the license exam, you can\n          avail of MOKSH-PRO wherein we would coach you for the license exam along with placement in healthcare segment\n          to expose you to practical clinical cases.\n        </p>\n        <ion-button [routerLink]=\"['/home/top-links/moksh-pro']\" routerLinkActive=\"router-link-active\"  expand=\"block\" color=\"primary\">\n          MOKSH Learn and Earn Programs\n        </ion-button>\n      </div>\n    </section>\n  </div>\n\n  <!-- Video Panel Start -->\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_services_services_module_ts.js.map