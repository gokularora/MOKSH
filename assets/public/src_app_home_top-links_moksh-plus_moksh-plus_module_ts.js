(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_moksh-plus_moksh-plus_module_ts"],{

/***/ 52112:
/*!************************************************************************!*\
  !*** ./src/app/home/top-links/moksh-plus/moksh-plus-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokshPlusPageRoutingModule": () => (/* binding */ MokshPlusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _moksh_plus_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moksh-plus.page */ 58019);




const routes = [
    {
        path: '',
        component: _moksh_plus_page__WEBPACK_IMPORTED_MODULE_0__.MokshPlusPage
    }
];
let MokshPlusPageRoutingModule = class MokshPlusPageRoutingModule {
};
MokshPlusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MokshPlusPageRoutingModule);



/***/ }),

/***/ 9254:
/*!****************************************************************!*\
  !*** ./src/app/home/top-links/moksh-plus/moksh-plus.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokshPlusPageModule": () => (/* binding */ MokshPlusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _moksh_plus_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moksh-plus-routing.module */ 52112);
/* harmony import */ var _moksh_plus_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moksh-plus.page */ 58019);








let MokshPlusPageModule = class MokshPlusPageModule {
};
MokshPlusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _moksh_plus_routing_module__WEBPACK_IMPORTED_MODULE_1__.MokshPlusPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_moksh_plus_page__WEBPACK_IMPORTED_MODULE_2__.MokshPlusPage]
    })
], MokshPlusPageModule);



/***/ }),

/***/ 58019:
/*!**************************************************************!*\
  !*** ./src/app/home/top-links/moksh-plus/moksh-plus.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MokshPlusPage": () => (/* binding */ MokshPlusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_moksh_plus_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./moksh-plus.page.html */ 56016);
/* harmony import */ var _moksh_plus_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moksh-plus.page.scss */ 23382);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);











let MokshPlusPage = class MokshPlusPage {
    constructor(headerTitle, call, apiCRMService, apiGeneralService, sanitizer, toastr) {
        this.headerTitle = headerTitle;
        this.call = call;
        this.apiCRMService = apiCRMService;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.arrServices = [];
        this.webAssetsPath = "";
        this.arrVideoMBBS = [];
        this.currentSelected = 0;
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        this.arrCounsellor = { "empMob2": "", "empMob1": "" };
        this.headerTitle.isBack = false;
        this.headerTitle.title = "MOKSH PLUS";
    }
    ngOnInit() {
        setTimeout(() => {
            this.getCounsellor();
        }, 500);
        this.getVideos();
    }
    onClickCall() {
        console.log(this.apiCRMService.arrCounsellor["empMob1"]);
        this.call.callNumber(this.apiCRMService.arrCounsellor["empMob1"], true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    getCounsellor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.arrCounsellor = this.apiCRMService.arrCounsellor;
        });
    }
    //#region Video Section start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 27 };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "mobility-app/videothumbnails";
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
MokshPlusPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__.CallNumber },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__.ApiCRMService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService }
];
MokshPlusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-moksh-plus',
        template: _raw_loader_moksh_plus_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_moksh_plus_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MokshPlusPage);



/***/ }),

/***/ 23382:
/*!****************************************************************!*\
  !*** ./src/app/home/top-links/moksh-plus/moksh-plus.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slide {\n  padding-bottom: 10px;\n}\n\n.box-prog ion-col ion-label {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1va3NoLXBsdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsb0JBQUE7QUFFVjs7QUFEQTtFQUE0QixnQkFBQTtBQUs1QiIsImZpbGUiOiJtb2tzaC1wbHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXtwYWRkaW5nLWJvdHRvbTogMTBweDt9XHJcbi5ib3gtcHJvZyBpb24tY29sIGlvbi1sYWJlbHtmb250LXdlaWdodDogNjAwOyB9Il19 */");

/***/ }),

/***/ 56016:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/moksh-plus/moksh-plus.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-top-links></app-top-links>\n\n  <div class=\"main-cont content-cont\">\n    <h5 class=\"hdng-line\">\n      <span>MOKSH PLUS</span>\n    </h5>\n    <section class=\"sec-videos\" *ngIf=\"arrVideoMBBS?.length > 0\">      \n      <div *ngIf=\"arrVideoMBBS?.length == 1\">\n      <figure class=\"m-0\" *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\n        <img src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\n      </figure>\n    </div>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideoMBBS?.length > 1\">\n        <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n            <img src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </section>\n    <section>\n      <p>\n        Are you giving your 10th level exam and confused about the career options? The parents are not sure as to what career you should pursue? You have not identified your passion? MOKSH-PLUS is the career guiding and execution service from MOKSH. Many people have asked us why our website is www.moksh16.com and here is the answer. Our services start from the 16 year teenager and we get associated with the learner till they get settled in their professional career. \n      </p>\n      <p>\n        MOKSH-PLUS ensures that you reach your dream career right up to PG and settle down in your life. This service from MOKSH lasts for 6-10 years depending on the option. At the moment, MOKSH is serving only the students who are found to be suitable for the Science stream, looking for either medicine, engineering or business programs.\n      </p>\n      <br>\n      <ion-text color=\"primary\">\n        <h6>Book a FREE online  session with counsellor</h6>\n      </ion-text>\n        <figure class=\"\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n          <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n        </figure>\n        \n        </section>  \n        \n        <section>\n          <h5 class=\"hdng-line\">\n            <span>Services under MOKSH-Plus</span>\n          </h5>          \n          <ul class=\"bullet-list md\">\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Understanding the child's career inclination</li>\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Making a long term customized Career Plan</li>\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Providing Career Assistant for student progress</li>\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Plan diversion alerts to the parents</li>\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Closed tracking & reporting on career path </li>\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Support till the child settles down professionally</li>\n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Constant mentoring to shape the career </li>\n          </ul>\n        </section>\n      <section>    \n      <ion-grid fixed *ngIf=\"arrCounsellor\">\n        <ion-row>\n          <ion-col *ngIf=\"arrCounsellor.EmpMob2\">\n            <ion-button href=\"https://wa.me/91{{arrCounsellor.EmpMob2}}&amp;text=\" target=\"_blank\" expand=\"block\" shape=\"round\" color=\"success\">\n            Chat Now  <ion-icon name=\"logo-whatsapp\" slot=\"end\"></ion-icon>\n          </ion-button> \n        </ion-col>\n          <ion-col>\n            <ion-button (click)=\"onClickCall()\" expand=\"block\"   shape=\"round\">Call Now\n              <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon></ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </section>\n  </div>\n\n  <!-- Video Panel Start -->\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_moksh-plus_moksh-plus_module_ts.js.map