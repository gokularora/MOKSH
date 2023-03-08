(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_scholarship_scholarship_module_ts"],{

/***/ 1388:
/*!**************************************************************************!*\
  !*** ./src/app/home/top-links/scholarship/scholarship-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipPageRoutingModule": () => (/* binding */ ScholarshipPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scholarship_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholarship.page */ 65543);




const routes = [
    {
        path: '',
        component: _scholarship_page__WEBPACK_IMPORTED_MODULE_0__.ScholarshipPage
    }
];
let ScholarshipPageRoutingModule = class ScholarshipPageRoutingModule {
};
ScholarshipPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScholarshipPageRoutingModule);



/***/ }),

/***/ 91062:
/*!******************************************************************!*\
  !*** ./src/app/home/top-links/scholarship/scholarship.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipPageModule": () => (/* binding */ ScholarshipPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scholarship_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship-routing.module */ 1388);
/* harmony import */ var _scholarship_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scholarship.page */ 65543);








let ScholarshipPageModule = class ScholarshipPageModule {
};
ScholarshipPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _scholarship_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScholarshipPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_scholarship_page__WEBPACK_IMPORTED_MODULE_2__.ScholarshipPage]
    })
], ScholarshipPageModule);



/***/ }),

/***/ 65543:
/*!****************************************************************!*\
  !*** ./src/app/home/top-links/scholarship/scholarship.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipPage": () => (/* binding */ ScholarshipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scholarship_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scholarship.page.html */ 50673);
/* harmony import */ var _scholarship_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship.page.scss */ 33480);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);












let ScholarshipPage = class ScholarshipPage {
    //#endregion
    constructor(headerTitle, apiGeneral, loader, alertController, apiLMSService, apiGeneralService, toastr, sanitizer) {
        this.headerTitle = headerTitle;
        this.apiGeneral = apiGeneral;
        this.loader = loader;
        this.alertController = alertController;
        this.apiLMSService = apiLMSService;
        this.apiGeneralService = apiGeneralService;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.webAssetsPath = "";
        this.webAssetsPathReviews = "";
        this.arrContent = [];
        this.arrReviews = [];
        this.mobileCatID = "";
        this.currentSelected = 0;
        this.SubSelectedTab = "a1";
        this.costContent = "";
        this.slideOpts = {
            slidesPerView: 3.5,
            freeMode: true
        };
        this.slideReviewOpts = { slidesPerView: 1.2 };
        this.slideCountryOpts = { slidesPerView: 3.5 };
        this.slideScholarshipOpts = { slidesPerView: 1.1 };
        this.arrScholarships = [];
        //#region  Video Variables
        this.webVideoPath = "";
        this.arrVideos = [];
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        this.headerTitle.isBack = false;
        this.headerTitle.title = "Scholarship";
    }
    ngOnInit() {
        this.getScholarships();
        this.getContent();
        this.getReview();
        this.getVideos();
        //this.getIntersetedProgram();
        this.currentYear = new Date().getFullYear();
    }
    getScholarships() {
        this.arrScholarships = this.apiLMSService.arrScholarships;
    }
    //#region Content Start
    getContent() {
        let postData = { "PageName": "Scholarship", "IsActive": true };
        this.apiGeneral.getContent(JSON.stringify(postData)).then(resp => {
            this.arrContent = resp;
            this.costContent = this.arrContent[0]["details"];
            this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/category-contents";
        })
            .catch(err => {
            console.log("getContent: " + err);
        });
    }
    ionSelectProgram(mobileCatID, index) {
        this.mobileCatID = mobileCatID;
        this.currentSelected = index;
        this.arrContent.forEach(i => {
            if (i.mobileCatID == mobileCatID) {
                this.costContent = i.details;
            }
        });
    }
    subTab(subTabId) {
        this.SubSelectedTab = subTabId;
        console.log(subTabId);
    }
    //#endregion
    getReview() {
        let postData = { "Category": "Scholarship", "IsActive": true };
        this.apiGeneral.getReviews(JSON.stringify(postData)).then(resp => {
            this.arrReviews = resp;
            this.webAssetsPathReviews = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/student-review";
        })
            .catch(err => {
            console.log("getReview: " + err);
        });
    }
    //#region  Video Section start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 25, 'isActive': true };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webVideoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "mobility-app/videothumbnails";
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
ScholarshipPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_3__.ApiLMSService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer }
];
ScholarshipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-scholarship',
        template: _raw_loader_scholarship_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scholarship_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScholarshipPage);



/***/ }),

/***/ 33480:
/*!******************************************************************!*\
  !*** ./src/app/home/top-links/scholarship/scholarship.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box-prog ion-col img {\n  background: #fff;\n  border: 1px solid #000;\n  border-radius: 10px;\n  padding: 0.7rem;\n  width: 70px;\n  height: 70px;\n}\n\n.box-prog.bg-primary ion-col ion-label {\n  font-size: 0.85rem;\n  color: #000;\n}\n\n.banner-sec img {\n  height: auto;\n}\n\n.content-cont .box-prog ion-col {\n  height: 100%;\n}\n\n.content-cont .box-prog ion-col.selected:after {\n  display: none;\n}\n\n.content-cont .box-prog ion-col.selected img {\n  background: var(--ion-color-secondary);\n}\n\n.white-box {\n  padding: 1rem;\n}\n\nion-item {\n  font-size: 1rem;\n}\n\n.box-prog.bg-primary {\n  background: var(--ion-color-secondary-light);\n  padding: 0px 4px;\n}\n\n.box-prog.bg-primary ion-col > div {\n  background: transparent;\n  border: 0px;\n}\n\n.uni-logos {\n  margin: 0px -12px;\n  background: var(--ion-color-primary-light);\n  margin-top: 10px;\n  padding-top: 15px;\n}\n\n.uni-logos h6 {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n\n.uni-logos ion-slide {\n  padding: 0px 5px;\n}\n\n.uni-logos figure {\n  margin-bottom: 0px;\n}\n\n.uni-logos figure img {\n  padding: 0px 10px;\n}\n\n.scholarship-list h3 {\n  font-size: 1rem;\n  font-weight: 500;\n  background: var(--ion-color-primary-light);\n  padding: 10px 0px;\n  border-radius: 5px;\n}\n\n.scholarship-list ion-slide {\n  padding: 10px 10px;\n  padding-bottom: 0px;\n}\n\n.scholarship-list .grid-info ion-row ion-col {\n  font-size: 0.9rem;\n  padding: 10px 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9sYXJzaGlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFzQixnQkFBQTtFQUFrQixzQkFBQTtFQUF3QixtQkFBQTtFQUFxQixlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0FBT25IOztBQU5BO0VBQXVDLGtCQUFBO0VBQW9CLFdBQUE7QUFXM0Q7O0FBVkE7RUFBZ0IsWUFBQTtBQWNoQjs7QUFiQTtFQUFnQyxZQUFBO0FBaUJoQzs7QUFkSTtFQUFRLGFBQUE7QUFrQlo7O0FBakJJO0VBQUksc0NBQUE7QUFvQlI7O0FBbEJBO0VBQVcsYUFBQTtBQXNCWDs7QUFyQkE7RUFBUyxlQUFBO0FBeUJUOztBQXZCQTtFQUFxQiw0Q0FBQTtFQUE4QyxnQkFBQTtBQTRCbkU7O0FBM0JBO0VBQW1DLHVCQUFBO0VBQXlCLFdBQUE7QUFnQzVEOztBQTlCQTtFQUFZLGlCQUFBO0VBQW1CLDBDQUFBO0VBQTRDLGdCQUFBO0VBQWtCLGlCQUFBO0FBcUM3Rjs7QUFwQ0k7RUFBRyxpQkFBQTtFQUFtQixnQkFBQTtBQXdDMUI7O0FBdkNJO0VBQVUsZ0JBQUE7QUEwQ2Q7O0FBekNJO0VBQU8sa0JBQUE7QUE0Q1g7O0FBM0NRO0VBQUksaUJBQUE7QUE4Q1o7O0FBekNJO0VBQUcsZUFBQTtFQUFpQixnQkFBQTtFQUFrQiwwQ0FBQTtFQUE0QyxpQkFBQTtFQUFtQixrQkFBQTtBQWlEekc7O0FBaERJO0VBQVUsa0JBQUE7RUFBb0IsbUJBQUE7QUFvRGxDOztBQW5ESTtFQUEyQixpQkFBQTtFQUFrQixpQkFBQTtBQXVEakQiLCJmaWxlIjoic2Nob2xhcnNoaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1wcm9nIGlvbi1jb2wgaW1ne2JhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMXB4IHNvbGlkICMwMDA7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDAuN3JlbTsgd2lkdGg6IDcwcHg7IGhlaWdodDogNzBweDt9XHJcbi5ib3gtcHJvZy5iZy1wcmltYXJ5IGlvbi1jb2wgaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6ICMwMDA7fVxyXG4uYmFubmVyLXNlYyBpbWd7aGVpZ2h0OiBhdXRvO31cclxuLmNvbnRlbnQtY29udCAuYm94LXByb2cgaW9uLWNvbHtoZWlnaHQ6IDEwMCU7fVxyXG5cclxuLmNvbnRlbnQtY29udCAuYm94LXByb2cgaW9uLWNvbC5zZWxlY3RlZHsgXHJcbiAgICAmOmFmdGVye2Rpc3BsYXk6IG5vbmU7fSAgXHJcbiAgICBpbWd7YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7fSAgXHJcbn1cclxuLndoaXRlLWJveHtwYWRkaW5nOiAxcmVtO31cclxuaW9uLWl0ZW17Zm9udC1zaXplOiAxcmVtO31cclxuXHJcbi5ib3gtcHJvZy5iZy1wcmltYXJ5e2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktbGlnaHQpOyBwYWRkaW5nOiAwMHB4IDRweDt9XHJcbi5ib3gtcHJvZy5iZy1wcmltYXJ5IGlvbi1jb2wgPiBkaXZ7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGJvcmRlcjogMHB4O31cclxuXHJcbi51bmktbG9nb3N7IG1hcmdpbjogMHB4IC0xMnB4OyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7IG1hcmdpbi10b3A6IDEwcHg7IHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgaDZ7Zm9udC1zaXplOiAwLjhyZW07IGZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4gICAgaW9uLXNsaWRle3BhZGRpbmc6IDBweCA1cHg7fVxyXG4gICAgZmlndXJle21hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBpbWd7cGFkZGluZzogMHB4IDEwcHg7fVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nob2xhcnNoaXAtbGlzdHtcclxuICAgIGgze2ZvbnQtc2l6ZTogMXJlbTsgZm9udC13ZWlnaHQ6IDUwMDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpOyBwYWRkaW5nOiAxMHB4IDBweDsgYm9yZGVyLXJhZGl1czogNXB4IH1cclxuICAgIGlvbi1zbGlkZXtwYWRkaW5nOiAxMHB4IDEwcHg7IHBhZGRpbmctYm90dG9tOiAwcHg7fVxyXG4gICAgLmdyaWQtaW5mbyBpb24tcm93IGlvbi1jb2x7Zm9udC1zaXplOiAwLjlyZW07cGFkZGluZzoxMHB4IDdweDt9XHJcbn0iXX0= */");

/***/ }),

/***/ 50673:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/scholarship/scholarship.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-top-links></app-top-links>\n  <ion-text color=\"primary\">\n    <h6 class=\"pl-main\">Scholarship worth Rs.1.25 Crore for MBBS</h6>\n  </ion-text>\n  <section class=\"banner-sec\">\n    <div class=\"pl-main\">\n    <figure class=\"m-0\" [routerLink]=\"['/home/scholarship/scholarship-home']\">\n      <!-- <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/scholarship/banner1.jpg\" class=\"w-100\"> -->\n      <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/scholarship/img-banner.jpg\" class=\"w-100\">\n    </figure>\n  </div>\n  </section>\n\n  <div class=\"content-cont pt-3\">\n    <section>\n      <ion-text color=\"primary\">\n        <h6 style=\"padding-left: 12px;\" class=\"mb-0\">Total scholarship is available under MOST {{currentYear}}</h6>\n      </ion-text>\n      <ion-slides pager=\"true\" [options]=\"slideScholarshipOpts\" class=\"scholarship-list\">\n        <ion-slide *ngFor=\"let item of arrScholarships\">\n          <div class=\"white-box p-2 w-100\">\n            <h3>{{item.name}}</h3>\n            <ion-grid fixed class=\"grid-info\">\n              <ion-row>\n                <ion-col size=\"4\"><strong>Scholarships</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.scholarships}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>Marks</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.minMarks}} - {{item.maxMarks}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>Worth (INR)</strong></ion-col>\n                <ion-col size=\"8\"><span>Rs. {{item.worth}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>Participating University</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.remarks}}</span></ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-slide>\n\n      </ion-slides>\n    </section>\n    <section class=\"sec-videos\" *ngIf=\"arrVideos?.length > 0\">\n      <div *ngIf=\"arrVideos?.length == 1\" class=\"pl-main\">\n        <figure class=\"m-0\" *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n          <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\n        </figure>\n      </div>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideos?.length > 1\">\n        <ion-slide *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n            <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </section>\n    <section style=\"padding-top: 12px;\">\n      <ion-text color=\"primary\">\n        <h6 style=\"padding-left: 12px;\">What can you win under MOKSH scholarship?</h6>\n      </ion-text>\n      <ion-grid fixed class=\"box-prog bg-primary\">\n        <ion-row class=\"m-0\">\n          <ion-slides [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of arrContent; let index = index\">\n              <ion-col (click)=\"ionSelectProgram(item.mobileCatID, index)\"\n                [ngClass]=\"{selected: index === currentSelected}\">\n                <div>\n                  <div>\n                    <img src=\"{{this.webAssetsPath}}/{{item.mobileCatID}}/{{item.categoryImage}}\" />\n                  </div>\n                  <div>\n                    <ion-label>{{item.categoryName}}</ion-label>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </ion-grid>\n    </section>\n    <div class=\"main-cont\">\n      <section class=\"tab-content white-box mt-2\">\n        <div class=\"active\">\n          <div [innerHTML]=\"costContent\"></div>\n        </div>\n      </section>\n      <ion-text color=\"primary \">\n        <h6 class=\"mt-3\">Participating universities for scholarship</h6>\n      </ion-text>\n      <section class=\"uni-logos\">\n        <ion-slides [options]=\"slideCountryOpts\">\n          <ion-slide>\n            <figure>\n              <img src=\"https://app.moksh16.in//application-centre/assets/university/logo/289/Orel.png\" alt=\"\"\n                class=\"border-radius-50\">\n              <h6>Orel State University</h6>\n            </figure>\n          </ion-slide>\n          <ion-slide>\n            <figure>\n              <img\n                src=\"https://app.moksh16.in//application-centre/assets/university/logo/197/download-(3).jpg\"\n                alt=\"\" class=\"border-radius-50\">\n              <h6>Kabardino-Balkarian State University</h6>\n            </figure>\n          </ion-slide>\n          <ion-slide>\n            <figure>\n              <img src=\"https://app.moksh16.in//application-centre/assets/university/logo/69/Kazan-s-logo.jpg\" alt=\"\"\n                class=\"border-radius-50\">\n              <h6>Kazan State Medical University</h6>\n            </figure>\n          </ion-slide>\n          <ion-slide>\n            <figure>\n              <img src=\"https://app.moksh16.in//application-centre/assets/university/logo/179/Belgorod-logo.jpg\" alt=\"\"\n                class=\"border-radius-50\">\n              <h6>Belgorod State National University</h6>\n            </figure>\n          </ion-slide>\n          <ion-slide>\n            <figure>\n              <img src=\"https://app.moksh16.in//application-centre/assets/university/logo/220/University_of_Georgia_JPG.JPG\" alt=\"\"\n                class=\"border-radius-50\">\n              <h6>University of Georgia</h6>\n            </figure>\n          </ion-slide>\n          <ion-slide>\n            <figure>\n              <img src=\"https://app.moksh16.in//application-centre/assets/university/logo/200/2a851829e3888e36de279ad16b955ccb.jpg\" alt=\"\"\n                class=\"border-radius-50\">\n              <h6>Bashkir State Medical University</h6>\n            </figure>\n          </ion-slide>\n          <ion-slide>\n            <figure>\n              <img src=\"https://app.moksh16.in//application-centre/assets/university/logo/332/Logi_jpg.jpg\" alt=\"\"\n                class=\"border-radius-50\">\n              <h6>University of Nis</h6>\n            </figure>\n          </ion-slide>\n        </ion-slides>\n      </section>\n      <section *ngIf=\"arrReviews\">\n        <ion-text color=\"primary \">\n          <h6>What our students want to say?</h6>\n        </ion-text>\n        <div class=\"cards-sliders\">\n          <ion-slides [options]=\"slideReviewOpts\" pager=\"true\">\n            <ion-slide *ngFor=\"let item of arrReviews\">\n              <div>\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"3\">\n                      <figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" />\n                      </figure>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                      <h6> {{item.studentName}}</h6>\n                      <p> {{item.scholarship}}</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <div>\n                  <ion-label>\n                    <p class=\"quote\" [innerHTML]=item.comment></p>\n                  </ion-label>\n                </div>\n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </section>\n    </div>\n  </div>\n  <!-- Video Panel Start -->\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_scholarship_scholarship_module_ts.js.map