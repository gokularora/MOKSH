(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_vlogs_vlogs_module_ts"],{

/***/ 61864:
/*!**************************************************************!*\
  !*** ./src/app/home/top-links/vlogs/vlogs-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VlogsPageRoutingModule": () => (/* binding */ VlogsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vlogs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vlogs.page */ 91012);




const routes = [
    {
        path: '',
        component: _vlogs_page__WEBPACK_IMPORTED_MODULE_0__.VlogsPage
    }
];
let VlogsPageRoutingModule = class VlogsPageRoutingModule {
};
VlogsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VlogsPageRoutingModule);



/***/ }),

/***/ 64130:
/*!******************************************************!*\
  !*** ./src/app/home/top-links/vlogs/vlogs.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VlogsPageModule": () => (/* binding */ VlogsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vlogs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vlogs-routing.module */ 61864);
/* harmony import */ var _vlogs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vlogs.page */ 91012);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let VlogsPageModule = class VlogsPageModule {
};
VlogsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _vlogs_routing_module__WEBPACK_IMPORTED_MODULE_0__.VlogsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_vlogs_page__WEBPACK_IMPORTED_MODULE_1__.VlogsPage]
    })
], VlogsPageModule);



/***/ }),

/***/ 91012:
/*!****************************************************!*\
  !*** ./src/app/home/top-links/vlogs/vlogs.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VlogsPage": () => (/* binding */ VlogsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_vlogs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vlogs.page.html */ 7936);
/* harmony import */ var _vlogs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vlogs.page.scss */ 33);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);









let VlogsPage = class VlogsPage {
    constructor(headerTitle, apiGeneralService, toastr, sanitizer) {
        this.headerTitle = headerTitle;
        this.apiGeneralService = apiGeneralService;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.arrVlogs = [];
        this.AssetsPathVideo = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/videothumbnails";
        this.headerTitle.title = "Vlog Series";
    }
    ngOnInit() {
        this.getVlogs();
    }
    getVlogs() {
        let postData = { 'videoHeaderId': 38, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVlogs = resp;
        }).catch(err => {
            console.log("getVlogs: " + err);
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
VlogsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer }
];
VlogsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-vlogs',
        template: _raw_loader_vlogs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vlogs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VlogsPage);



/***/ }),

/***/ 33:
/*!******************************************************!*\
  !*** ./src/app/home/top-links/vlogs/vlogs.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card img {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZsb2dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFJLGNBQUE7RUFBZ0IsV0FBQTtBQUV4QiIsImZpbGUiOiJ2bG9ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGltZ3tkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7fVxyXG59Il19 */");

/***/ }),

/***/ 7936:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/vlogs/vlogs.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-header></app-header>\n  <div class=\"main-cont\">\n    <ion-card class=\"p-0 m-0 mb-3\" *ngFor=\"let item of arrVlogs\" (click)=\"playVideo(item.videoLink)\">\n          \n      <div>\n        <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n      </div>\n    </ion-card>\n  </div>\n\n\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>    \n      <div [innerHTML]=\"iframe\" class=\"ifram-cont\"></div>\n    </div>\n  </section>\n\n  <app-footer></app-footer>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_vlogs_vlogs_module_ts.js.map