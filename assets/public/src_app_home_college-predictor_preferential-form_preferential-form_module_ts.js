(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_preferential-form_preferential-form_module_ts"],{

/***/ 95779:
/*!**********************************************************************************************!*\
  !*** ./src/app/home/college-predictor/preferential-form/preferential-form-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferentialFormPageRoutingModule": () => (/* binding */ PreferentialFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _preferential_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preferential-form.page */ 38056);




const routes = [
    {
        path: '',
        component: _preferential_form_page__WEBPACK_IMPORTED_MODULE_0__.PreferentialFormPage
    }
];
let PreferentialFormPageRoutingModule = class PreferentialFormPageRoutingModule {
};
PreferentialFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PreferentialFormPageRoutingModule);



/***/ }),

/***/ 99277:
/*!**************************************************************************************!*\
  !*** ./src/app/home/college-predictor/preferential-form/preferential-form.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferentialFormPageModule": () => (/* binding */ PreferentialFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _preferential_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferential-form-routing.module */ 95779);
/* harmony import */ var _preferential_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferential-form.page */ 38056);








let PreferentialFormPageModule = class PreferentialFormPageModule {
};
PreferentialFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _preferential_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.PreferentialFormPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_preferential_form_page__WEBPACK_IMPORTED_MODULE_2__.PreferentialFormPage]
    })
], PreferentialFormPageModule);



/***/ }),

/***/ 38056:
/*!************************************************************************************!*\
  !*** ./src/app/home/college-predictor/preferential-form/preferential-form.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferentialFormPage": () => (/* binding */ PreferentialFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_preferential_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./preferential-form.page.html */ 19735);
/* harmony import */ var _preferential_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preferential-form.page.scss */ 46345);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);















let PreferentialFormPage = class PreferentialFormPage {
    constructor(headerTitleService, apiPredictorService, loader, storage, auth, pdfGenerator, toastr, sanitizer, apiGeneralService, router) {
        this.headerTitleService = headerTitleService;
        this.apiPredictorService = apiPredictorService;
        this.loader = loader;
        this.storage = storage;
        this.auth = auth;
        this.pdfGenerator = pdfGenerator;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.apiGeneralService = apiGeneralService;
        this.router = router;
        this.arrPredictorForm = [];
        this.arrChoiceForm = [];
        this.arrPredictor = [];
        this.resultCount = 0;
        this.rank = 0;
        this.lblRank = "";
        this.arrPersonalData = { 'categoryName': '', 'firstName': '', 'lastName': '', 'personWithDisability': '', 'dateTime': null, 'planAlertMessage': '', 'predictorPackage': '', 'quotaName': '', 'rank': '', 'score': '', 'subCategoryName': '', 'studentMaxBudget': null, 'budgetName': '' };
        this.arrUserData = [];
        this.arrSavedPredictor = [];
        this.counsellingIdOther = 0;
        this.counsellingName = "";
        this.counsellingNameOther = "";
        //#region Video Variables  
        this.arrVideo = [];
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        this.counsellingId = 1;
        this.headerTitleService.title = "Choice Filling Form";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.getVideo();
        this.lblRank = this.apiPredictorService.lblRank;
        this.getUserData();
        this.getCPChoiceForm(1);
        this.getActivatedpackage();
    }
    getRank() {
        let postdata = { "MaxRank": this.arrPredictorForm["MaxRank"], "ExamID": this.arrPredictorForm["ExamID"] };
        this.apiPredictorService.getRank(JSON.stringify(postdata)).then(resp => {
            this.rank = resp["maxRank"];
        });
    }
    getCPChoiceForm(counsellingId) {
        this.arrPredictorForm = [];
        this.loader.presentLoading();
        this.storage.getObject("predictorForm").then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (res) {
                this.arrPredictorForm = res;
                if (res.CounsellingID == 1) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[0];
                    this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[1];
                    this.counsellingIdOther = 2;
                }
                else if (res.CounsellingID == 2) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[1];
                    this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[0];
                    this.counsellingIdOther = 1;
                }
                var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
                let postdata = { "ExamID": this.arrPredictorForm["ExamID"], "AppLoginId": this.arrUserData["appLoginID"], "IntakeYear": intakeYear, "counsellingId": counsellingId };
                this.apiPredictorService.getCPChoiceForm(JSON.stringify(postdata)).then(resp => {
                    this.arrChoiceForm = resp.data;
                    this.arrChoiceForm.forEach(el => {
                        var digits = el.totalBudgetD.toString().length;
                        if (digits > 7) {
                            el.budgetFormat = parseFloat((el.totalBudgetD / 10000000).toString()).toFixed(2) + " Cr";
                        }
                        else if (digits > 6) {
                            el.budgetFormat = parseFloat((el.totalBudgetD / 100000).toString()).toFixed(2) + " Lacs";
                        }
                    });
                    this.arrPersonalData = resp.header;
                    this.loader.loadingDismiss();
                }).catch(x => {
                    this.toastr.toastError("Unable to fetch Choice Filling Form. Please try again later");
                    this.loader.loadingDismiss();
                });
                this.getSavedPredictor();
            }
        })).catch(ex => {
            this.loader.loadingDismiss();
        });
    }
    getSavedPredictor() {
        if (this.arrSavedPredictor.length == 0) {
            let postdata = { "ExamID": this.arrPredictorForm["ExamID"], "AppLoginId": this.arrPredictorForm["AppLoginId"], "IntakeYear": "2020" };
            this.apiPredictorService.getSavedPredictor(JSON.stringify(postdata)).then(resp => {
                if (resp) {
                    this.arrSavedPredictor = resp;
                    this.isDisabled = (this.arrSavedPredictor.length == 1) ? true : false;
                    var arrData = this.arrSavedPredictor.filter(x => x.counsellingId != this.arrPredictorForm["CounsellingID"]);
                    if (arrData.length > 0) {
                        this.isOtherCounselling = true;
                        this.counsellingIdOther = arrData[0]["counsellingId"];
                        if (arrData[0]["counsellingId"] == 1) {
                            this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[0];
                        }
                        else if (arrData[0]["counsellingId"] == 2) {
                            this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[1];
                        }
                    }
                    else {
                        this.isOtherCounselling = false;
                    }
                    console.log("IsVisited " + this.isOtherCounselling);
                }
                else {
                    this.isDisabled = true;
                }
            });
        }
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.userData$.subscribe((resp) => {
                this.arrUserData = resp;
            });
        });
    }
    onClickGeneratePDF() {
        var currentDate = new Date();
        var uniqNo = currentDate.getMinutes() + currentDate.getMilliseconds();
        if (this.arrActivatedpackage["packageId"] == 1) {
            this.router.navigate(['/home/college-predictor/predictor-checkout', 'upgrade']);
        }
        else {
            var appLoginID = this.arrUserData["appLoginID"];
            var url = "https://app.moksh16.in/application-centre/assets/college-predictor/choice-form/pdf-files/" + appLoginID + "/ChoiceFillingForm.html?id=" + uniqNo;
            let options = {
                documentSize: 'A4',
                type: 'share'
            };
            this.pdfGenerator.fromURL(url, options).then(base64String => console.log(base64String));
        }
    }
    onClickTab(counsellingId) {
        this.counsellingId = counsellingId;
        this.getCPChoiceForm(counsellingId);
    }
    getActivatedpackage() {
        this.storage.getObject("selectedPackage").then(resp => {
            this.arrActivatedpackage = resp;
        });
    }
    //#region Video
    getVideo() {
        if (this.arrVideo.length == 0) {
            this.arrVideo = [];
            let postData = { 'videoHeaderId': 30, 'isActive': true };
            this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.arrVideo = resp;
                this.arrVideo.forEach(e => {
                    e.thumbnailImage = (e.universityLogo != "") ? src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.webAssetsPath + "mobility-app/videothumbnails/" + e.videoId + "/" + e.thumbnailImage : "";
                });
            })
                .catch(err => {
                console.log("getVideos: " + err);
            });
        }
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
PreferentialFormPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__.HeaderTitleService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_8__.ApiPredictorService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_9__.PDFGenerator },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
PreferentialFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-preferential-form',
        template: _raw_loader_preferential_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_preferential_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PreferentialFormPage);



/***/ }),

/***/ 46345:
/*!**************************************************************************************!*\
  !*** ./src/app/home/college-predictor/preferential-form/preferential-form.page.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid-info.table ion-col {\n  text-align: center;\n}\n\n.grid-info.table ion-col:nth-child(2) {\n  text-align: left;\n}\n\n.grid-info.table ion-col p {\n  margin-bottom: 6px;\n}\n\n.grid-info.table ion-col p span {\n  display: inline-block;\n  opacity: 0.8;\n  margin-right: 5px;\n}\n\n.main-cont.blured {\n  position: relative;\n}\n\n.main-cont.blured > .grey-box {\n  position: fixed;\n  bottom: 100px;\n  z-index: 9;\n  left: 24px;\n  width: calc(100% - 48px);\n  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);\n}\n\n.report-cont.blured {\n  position: relative;\n  pointer-events: none;\n  cursor: default;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n}\n\nion-tab-bar {\n  border: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZlcmVudGlhbC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF5QixrQkFBQTtBQUV6Qjs7QUFEQTtFQUFzQyxnQkFBQTtBQUt0Qzs7QUFKQTtFQUEyQixrQkFBQTtBQVEzQjs7QUFQSTtFQUFLLHFCQUFBO0VBQXVCLFlBQUE7RUFBYyxpQkFBQTtBQVk5Qzs7QUFSQTtFQUFrQixrQkFBQTtBQVlsQjs7QUFYSTtFQUFZLGVBQUE7RUFBaUIsYUFBQTtFQUFlLFVBQUE7RUFBWSxVQUFBO0VBQVksd0JBQUE7RUFBMEIsK0NBQUE7QUFtQmxHOztBQWhCSTtFQUFVLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGVBQUE7RUFBaUIsaUJBQUE7RUFBbUIseUJBQUE7QUF3QjVGOztBQW5CQTtFQUFZLHNCQUFBO0FBdUJaIiwiZmlsZSI6InByZWZlcmVudGlhbC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWluZm8udGFibGUgaW9uLWNvbHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uZ3JpZC1pbmZvLnRhYmxlIGlvbi1jb2w6bnRoLWNoaWxkKDIpe3RleHQtYWxpZ246IGxlZnQ7fVxyXG4uZ3JpZC1pbmZvLnRhYmxlIGlvbi1jb2wgcHttYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBzcGFue2Rpc3BsYXk6IGlubGluZS1ibG9jazsgb3BhY2l0eTogMC44OyBtYXJnaW4tcmlnaHQ6IDVweDt9XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250LmJsdXJlZHtwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICA+IC5ncmV5LWJveHtwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMTAwcHg7IHotaW5kZXg6IDk7IGxlZnQ6IDI0cHg7IHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTsgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDNweCByZ2IoMCAwIDAgLyAyMCUpfVxyXG59XHJcbi5yZXBvcnQtY29udHtcclxuICAgICYuYmx1cmVkeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBvaW50ZXItZXZlbnRzOiBub25lOyBjdXJzb3I6IGRlZmF1bHQ7IGZpbHRlcjogYmx1cigycHgpOyAtd2Via2l0LWZpbHRlcjogYmx1cigycHgpOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10YWItYmFye2JvcmRlcjogMXB4IHNvbGlkICNkZGQ7fSJdfQ== */");

/***/ }),

/***/ 19735:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/preferential-form/preferential-form.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"content-cont\">\n\n  <app-top-links-predictor></app-top-links-predictor>\n\n  <div class=\"main-cont\">\n    <h5 class=\"hdng-line\">\n      <span>Auto Generated Choice Filling Form</span>\n    </h5>\n\n    <section class=\"sec-videos\">\n      <div *ngIf=\"arrVideo?.length == 1\">\n        <figure class=\"m-0\" *ngFor=\"let item of arrVideo\" (click)=\"playVideo(item.videoLink)\">\n          <ion-img [src]=\"item.thumbnailImage\" class=\"w-100\"></ion-img>\n        </figure>\n      </div>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideo?.length > 1\">\n        <ion-slide *ngFor=\"let item of arrVideo\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n            <ion-img [src]=\"item.thumbnailImage\" class=\"w-100\"></ion-img>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </section>\n  </div>\n\n  <div class=\"main-cont\" [ngClass]=\"{blured: isDisabled}\">\n    <div *ngIf=\"isDisabled\" class=\"grey-box p-2 secondary-light\">\n      <h6 style=\"font-weight: 500;\">Choice Filling Form will be activated after completing both {{counsellingName}} as\n        well as {{counsellingNameOther}}.</h6>\n      <div>\n        <ion-button [routerLink]=\"['/home/college-predictor/predictor-form/1',counsellingIdOther]\" expand=\"block\"\n          color=\"secondary\">\n          Comlpete {{counsellingNameOther}}\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"report-cont\" [ngClass]=\"{blured: isDisabled}\">\n\n      <!-- <section>      \n      <div class=\"grey-box p-2 secondary-light\" *ngIf=\"!isOtherCounselling\">\n        <p>\n          Please note that this choice filling form is generated on the basis of {{this.counsellingName}}. You must try\n          to check your options for more colleges via {{this.counsellingNameOther}}.\n        </p>\n        <ion-button [routerLink]=\"['/home/college-predictor/predictor-form/1',counsellingIdOther]\"\n          routerLinkActive=\"router-link-active\" expand=\"block\" color=\"secondary\">\n          Check {{counsellingNameOther}}\n        </ion-button>\n      </div>\n    </section> -->\n\n      <section *ngIf=\"arrActivatedpackage\" class=\"mt-1\">\n        <div class=\"grey-box p-1 secondary-light\" *ngIf=\"arrActivatedpackage.packageId < 3\">\n          <p class=\"mb-0\">You have partial access to this feature providing the LIMITED list of colleges only as you\n            selected <strong>{{arrActivatedpackage.packageName}} Package.</strong> </p>\n        </div>\n      </section>\n      <section class=\"mt-1\" *ngIf=\"arrChoiceForm?.length > 0\">\n        <ion-grid fixed class=\"service-list type3\">\n          <ion-row>\n            <ion-col size=\"6\"><span>Name</span><span class=\"abs\">:</span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.firstName}} {{arrPersonalData.lastName}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Rank</span><span class=\"abs\">:</span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.rank}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Category</span> <span class=\"abs\">:</span></ion-col>\n            <ion-col size=\"6\"><strong> {{arrPersonalData.categoryName}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Sub-Category<span class=\"abs\">:</span></span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.subCategoryName}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Person with disability<span class=\"abs\">:</span></span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.personWithDisability}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Quota<span class=\"abs\">:</span></span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.quotaName}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Budget<span class=\"abs\">:</span></span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.budgetName}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>NEET Score<span class=\"abs\">:</span></span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.score}}</strong></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\"><span>Package<span class=\"abs\">:</span></span></ion-col>\n            <ion-col size=\"6\"><strong>{{arrPersonalData.predictorPackage}}</strong></ion-col>\n          </ion-row>\n        </ion-grid>\n      </section>\n\n      <ion-tab-bar slot=\"top\">\n        <ion-tab-button selected=\"{{counsellingId == 1 ? true : false}}\" (click)=\"onClickTab(1)\">\n          <ion-label>All India Counselling</ion-label>\n        </ion-tab-button>\n        <ion-tab-button  selected=\"{{counsellingId == 2 ? true : false}}\" (click)=\"onClickTab(2)\"\n          routerLinkActive=\"router-link-active\">\n          <ion-label>State Counselling</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n      \n      <section *ngIf=\"arrChoiceForm?.length > 0\" class=\"mt-2\">\n        <ion-button (click)=\"onClickGeneratePDF()\" expand=\"block\">\n          Download Choice Filling Form\n          <ion-icon name=\"cloud-download-outline\" slot=\"end\"></ion-icon>\n        </ion-button>\n      </section>\n      <section *ngIf=\"arrChoiceForm?.length > 0\" class=\"mt-0 pt-1\">\n        <ion-grid fixed class=\"grid-info table mb-3\">\n          <ion-row class=\"head\">\n            <ion-col size=\"2\"><strong>Sr No.</strong></ion-col>\n            <ion-col size=\"10\"><strong>College Name</strong></ion-col>\n          </ion-row>\n          <!-- <ion-virtual-scroll [items]=\"arrChoiceForm\" approxItemHeight=\"100px\"> -->\n          <ion-row *ngFor=\"let item of arrChoiceForm ; let i = index\">\n            <ion-col size=\"2\"><strong>{{i+1}}</strong></ion-col>\n            <ion-col size=\"10\">\n              <h6>{{item.collegeName}}</h6>\n              <p><span>Mngmt: </span> <strong>{{item.managementType}}</strong></p>\n              <p><span>Seat Type: </span> <strong>{{item.seatType}}</strong></p>\n              <p><span>Counselling: </span> <strong>{{item.counsellingName}}</strong></p>\n              <p><span>Budget: </span> <strong>Rs. {{item.budgetFormat}}</strong></p>\n              <p><span>Expected Cut-Off Rank: </span> <strong>{{item.maxRank}}</strong></p>\n              <p class=\"mb-0\"><span>Chances: </span> <strong\n                  [ngClass]=\"{'text-danger': item.admissionChances == 'Very Difficult','text-warning': item.admissionChances == 'Low Chance', 'text-orange': item.admissionChances == 'High Chance','text-success': item.admissionChances == 'Sure to Get'}\">{{item.admissionChances}} </strong>\n                   <ion-text color=\"primary\" *ngIf=\"item.totalBudgetD > arrPersonalData.studentMaxBudget\"><em> (Exceeds Budget)</em></ion-text>\n              </p>\n            </ion-col>\n          </ion-row>\n          <!-- </ion-virtual-scroll> -->\n        </ion-grid>\n      </section>\n\n      <section *ngIf=\"arrChoiceForm?.length > 0\">\n        <ion-button (click)=\"onClickGeneratePDF()\" expand=\"block\">\n          Download Choice Filling Form\n          <ion-icon name=\"cloud-download-outline\" slot=\"end\"></ion-icon>\n        </ion-button>\n      </section>\n    </div>\n  </div>\n\n  <!-- Video Panel Start -->\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_preferential-form_preferential-form_module_ts.js.map