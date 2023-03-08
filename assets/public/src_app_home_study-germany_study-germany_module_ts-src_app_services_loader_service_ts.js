(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_study-germany_study-germany_module_ts-src_app_services_loader_service_ts"],{

/***/ 13328:
/*!********************************************************************!*\
  !*** ./src/app/home/study-germany/study-germany-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGermanyPageRoutingModule": () => (/* binding */ StudyGermanyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _study_germany_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-germany.page */ 16202);




const routes = [
    {
        path: '',
        component: _study_germany_page__WEBPACK_IMPORTED_MODULE_0__.StudyGermanyPage
    }
];
let StudyGermanyPageRoutingModule = class StudyGermanyPageRoutingModule {
};
StudyGermanyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudyGermanyPageRoutingModule);



/***/ }),

/***/ 66709:
/*!************************************************************!*\
  !*** ./src/app/home/study-germany/study-germany.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGermanyPageModule": () => (/* binding */ StudyGermanyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _study_germany_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-germany-routing.module */ 13328);
/* harmony import */ var _study_germany_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./study-germany.page */ 16202);








let StudyGermanyPageModule = class StudyGermanyPageModule {
};
StudyGermanyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _study_germany_routing_module__WEBPACK_IMPORTED_MODULE_1__.StudyGermanyPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_study_germany_page__WEBPACK_IMPORTED_MODULE_2__.StudyGermanyPage]
    })
], StudyGermanyPageModule);



/***/ }),

/***/ 16202:
/*!**********************************************************!*\
  !*** ./src/app/home/study-germany/study-germany.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyGermanyPage": () => (/* binding */ StudyGermanyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_study_germany_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./study-germany.page.html */ 83867);
/* harmony import */ var _study_germany_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-germany.page.scss */ 8434);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);













let StudyGermanyPage = class StudyGermanyPage {
    constructor(headerTitle, apiProgramsService, router, auth, apiGeneralService, storage, sanitizer, route, toastr) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.router = router;
        this.auth = auth;
        this.apiGeneralService = apiGeneralService;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.route = route;
        this.toastr = toastr;
        this.isLoading = false;
        this.arrCountry = [];
        this.AssetsPathCountry = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "coutry/flag";
        this.AssetsPathVideo = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/videothumbnails";
        this.arrAllVideoTopics = [];
        this.arrAllVideos = [];
        this.arrVideoSection1 = [];
        this.lblVideoSection1 = "";
        this.programID = 0;
        this.countryID = 0;
        this.productDepartmentID = 0;
        this.arrSelection = [];
        this.slideOpts = {
            slidesPerView: 5,
            freeMode: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }
        };
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
        this.headerTitle.title = "Study in Germany";
        this.headerTitle.isBack = false;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.getVideos();
                this.getVideoTopic();
            }
        });
    }
    ionViewWillEnter() {
        this.getVideos();
        this.getVideoTopic();
    }
    ngOnInit() {
        this.getSelection();
    }
    getSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("arrSelection").then((resp) => {
                this.arrSelection = resp;
                this.programID = resp["progInterestId"];
                this.productDepartmentID = resp["productDepartmentID"];
            });
        });
    }
    getCountry() {
        let postData = { "IsActive": true };
        this.apiProgramsService.getCountry(JSON.stringify(postData)).then(resp => {
            this.arrCountry = resp;
            this.isLoading = false;
        })
            .catch(err => {
            console.log("getCountry: " + err);
            this.isLoading = false;
        });
    }
    getCountryID(countryId) {
        this.apiProgramsService.filteredData, countryId = countryId;
        this.arrSelection["countryId"] = countryId;
        this.storage.setObject("arrSelection", this.arrSelection);
        this.router.navigate(["/home/universities"]);
    }
    applyNow(countryID, ProgramID, productDepartmentID) {
        this.apiProgramsService.filteredData.countryId = countryID;
        this.apiProgramsService.filteredData.programId = ProgramID;
        this.apiProgramsService.productDepartmentID = productDepartmentID;
        //Update in Storage
        this.arrSelection["countryId"] = countryID;
        this.arrSelection["progInterestId"] = ProgramID;
        this.arrSelection["productDepartmentID"] = productDepartmentID;
        this.storage.setObject("arrSelection", this.arrSelection);
        if (productDepartmentID == 1) {
            this.router.navigate(['/home/country-list']);
        }
        else if (productDepartmentID == 2) {
            this.router.navigate(['/home/universities']);
        }
    }
    //== Video Section Start 
    getVideoTopic() {
        let postData = { "countryId": 0, "progInterestId": 0, "isActive": true };
        this.apiGeneralService.getVideoTopic(JSON.stringify(postData)).then(resp => {
            this.arrAllVideoTopics = resp;
        })
            .catch(err => {
            console.log("getVideos: " + err);
            this.isLoading = false;
        });
    }
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let postData = {};
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.arrAllVideos = resp;
                this.arrAllVideos.forEach(i => {
                    if (i.videoHeaderId == 1) {
                        this.arrVideoSection1.push(i);
                    }
                });
            })
                .catch(err => {
                console.log("getVideos: " + err);
                this.isLoading = false;
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
    //== Video Section End
    doRefresh(event) {
        this.getCountry();
        this.getVideos();
        this.getVideoTopic();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
StudyGermanyPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_5__.ApiProgramsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
StudyGermanyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-study-germany',
        template: _raw_loader_study_germany_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_study_germany_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudyGermanyPage);



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

/***/ 8434:
/*!************************************************************!*\
  !*** ./src/app/home/study-germany/study-germany.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkeS1nZXJtYW55LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 83867:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/study-germany/study-germany.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"page-welcome\">\n\n  <!-- <section class=\"sec-video white-box\">\n    <iframe src=\"https://www.youtube.com/embed/RAqn6gA_hCk\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  </section> -->\n\n  <app-top-links></app-top-links>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-cont pt-0\">\n    <section class=\"sec-videos\">\n      <h5>MOKSH CEO - Super Guidance Sessions</h5>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\n        <ion-slide *ngFor=\"let item of arrVideoSection1\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n           <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>        \n      </ion-slides>\n    </section>\n    <section>\n      <h5>Study MS in Germany in English for FREE!</h5>      \n      <figure class=\"m-0\" (click)=\"applyNow(6,5,2)\">\n        <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/study-germany/img-welcome1.jpg\" alt=\"\">\n      </figure>\n    </section>\n  \n    <section>      \n      <figure class=\"m-0\" (click)=\"applyNow(6,5,2)\">\n        <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/study-germany/img-welcome2.jpg\" alt=\"\">\n      </figure>\n    </section>\n    <section>\n      <h5>Study MBA in Germany at the cost of Indian MBA!</h5>      \n      <figure class=\"m-0\" (click)=\"applyNow(6,6,2)\">\n        <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/study-germany/img-welcome3.jpg\" alt=\"\">\n      </figure>\n    </section>\n\n  \n \n  <section>      \n    <figure class=\"m-0\" (click)=\"applyNow(6,1,1)\">\n      <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/img-welcome2.jpg\" alt=\"\">\n    </figure>\n  </section>\n   \n    <section class=\"sec-videos\">\n      <h5>Career planning in Germany</h5>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\n        <ion-slide *ngFor=\"let item of arrVideoSection1\">\n          <div>\n           <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>        \n      </ion-slides>\n    </section>\n  </div>\n\n\n   <!-- Video Panel Start -->\n   <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n\n  <app-footer></app-footer>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_study-germany_study-germany_module_ts-src_app_services_loader_service_ts.js.map