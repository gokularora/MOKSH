(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_cmp_cmp_module_ts"],{

/***/ 53504:
/*!**********************************************************!*\
  !*** ./src/app/home/top-links/cmp/cmp-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmpPageRoutingModule": () => (/* binding */ CmpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cmp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmp.page */ 18002);




const routes = [
    {
        path: '',
        component: _cmp_page__WEBPACK_IMPORTED_MODULE_0__.CmpPage
    }
];
let CmpPageRoutingModule = class CmpPageRoutingModule {
};
CmpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CmpPageRoutingModule);



/***/ }),

/***/ 39259:
/*!**************************************************!*\
  !*** ./src/app/home/top-links/cmp/cmp.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmpPageModule": () => (/* binding */ CmpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cmp_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmp-routing.module */ 53504);
/* harmony import */ var _cmp_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmp.page */ 18002);








let CmpPageModule = class CmpPageModule {
};
CmpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cmp_routing_module__WEBPACK_IMPORTED_MODULE_1__.CmpPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_cmp_page__WEBPACK_IMPORTED_MODULE_2__.CmpPage]
    })
], CmpPageModule);



/***/ }),

/***/ 18002:
/*!************************************************!*\
  !*** ./src/app/home/top-links/cmp/cmp.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmpPage": () => (/* binding */ CmpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cmp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cmp.page.html */ 54102);
/* harmony import */ var _cmp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmp.page.scss */ 48963);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);









let CmpPage = class CmpPage {
    //#endregion
    constructor(headerTitleService, apiGeneralService, toastr, sanitizer) {
        this.headerTitleService = headerTitleService;
        this.apiGeneralService = apiGeneralService;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.arrSlider = [];
        this.AssetsPathSlider = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "slider-images";
        this.slideBannerOpts = { slidesPerView: 1, autoplay: true };
        //#region Videos Variable
        this.AssetsPathVideo = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/videothumbnails";
        this.arrAllVideoTopics = [];
        this.arrAllVideos = [];
        this.arrVideoSection1 = [];
        this.arrVideoSection2 = [];
        this.arrVideoSection3 = [];
        this.slideVideoOpts = { slidesPerView: 1.5 };
        this.headerTitleService.title = "Combo Medical Program";
    }
    ngOnInit() {
        this.getSlider();
        this.getVideos1();
    }
    //#region Slider
    getSlider() {
        let postData = { "IsMobile": true, "SliderLocation": "App-CMP" };
        this.apiGeneralService.getSlider(JSON.stringify(postData)).then((resp = []) => {
            if (resp.length) {
                this.arrSlider = resp;
            }
        })
            .catch(ex => {
            console.log("getSlider() =>" + ex);
        });
    }
    //#endregion
    //#region Video
    getVideos1() {
        let postData = { 'videoHeaderId': 23, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideoSection1 = resp;
        }).catch(err => {
            console.log("getVideos3: " + err);
        });
    }
    playVideo(videoSrc) {
        if (videoSrc == "") {
            this.toastr.toastError("Oops! Video is not available.");
            return false;
        }
        this.iframe = this.sanitizer.bypassSecurityTrustHtml('<iframe src="' + videoSrc + '" frameborder="0" style="width: 100%; height: 100%;"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        this.isVideoOpen = true;
    }
    videoPanelClose() {
        this.isVideoOpen = false;
        this.iframe = "";
    }
};
CmpPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
CmpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cmp',
        template: _raw_loader_cmp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cmp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CmpPage);



/***/ }),

/***/ 48963:
/*!**************************************************!*\
  !*** ./src/app/home/top-links/cmp/cmp.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 54102:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/cmp/cmp.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"page-welcome\">\n\n  <!-- <section class=\"sec-video white-box\">\n    <iframe src=\"https://www.youtube.com/embed/RAqn6gA_hCk\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  </section> -->\n\n  <app-top-links></app-top-links>\n\n  <ion-refresher slot=\"fixed\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-cont pt-0\">\n\n    <section class=\"banner-sec\" *ngIf=\"arrSlider?.length > 0\">      \n      <ion-slides [options]=\"slideBannerOpts\" pager=\"true\">\n        <ion-slide *ngFor=\"let item of arrSlider\">\n          <div>\n            <img src=\"{{this.AssetsPathSlider}}/{{item.sliderFor}}/{{item.sliderFileName}}\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n      </section>\n\n\n    <section class=\"sec-videos\">\n      <h5>MOKSH CEO - Super Guidance Sessions</h5>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\n        <ion-slide *ngFor=\"let item of arrVideoSection1\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n           <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>        \n      </ion-slides>\n    </section>\n\n    <section class=\"text-justify\">\n      <p>\n        Around 98% of the MBBS aspirants are not able to crack NEET score above 600 marks. Due to such high competition in India, 15,000+ students go abroad to various countries to study MBBS. However, not everyone gets the permission to go abroad at the age of 18 years. Accordingly, 700,000 students who aspired to become a doctor ultimately end up in B.Sc. program! They still have the dream to become a doctor.\n      </p>\n      <p>\n        More than 7,000 such students who have joined B.Sc. finally complete their dream of becoming a doctor by pursuing “Combo Medical Program” (CMP). This program allows you to utilize the B.Sc. degree in few of the countries which follow US pattern of studies. After B.Sc. one can complete the dream of becoming a licensed physician in just 3.8 years in countries such as Philippines, Malaysia and Caribbean Islands. In Philippines which offers the MBBS course at the cheapest cost, there is an entrance exam namely NMAT. MOKSH Academy prepares the student for NMAT while the student is pursuing B.Sc. \n      </p>\n      <p>\n        Many agents send the students to Philippines without clarity on the problems faced by the students during NMAT exam. These misguided students complete their expensive B.S. program in Philippines spending around Rs. 8 Lacs and then fail to clear NMAT! It is preferable to prepare for NMAT in India and pursue B.Sc. in India at a nominal cost!\n      </p>\n\n      <ion-button [routerLink]=\"['/home/top-links/contact']\" routerLinkActive=\"router-link-active\"  expand=\"block\">\n        Contact Us\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n      </ion-button>\n    </section>\n    \n  \n   \n  </div>\n\n\n   <!-- Video Panel Start -->\n   <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n\n  <app-footer></app-footer>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_cmp_cmp_module_ts.js.map