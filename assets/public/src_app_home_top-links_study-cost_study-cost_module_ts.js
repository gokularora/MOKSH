(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_study-cost_study-cost_module_ts"],{

/***/ 61045:
/*!************************************************************************!*\
  !*** ./src/app/home/top-links/study-cost/study-cost-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyCostPageRoutingModule": () => (/* binding */ StudyCostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _study_cost_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-cost.page */ 80935);




const routes = [
    {
        path: '',
        component: _study_cost_page__WEBPACK_IMPORTED_MODULE_0__.StudyCostPage
    }
];
let StudyCostPageRoutingModule = class StudyCostPageRoutingModule {
};
StudyCostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudyCostPageRoutingModule);



/***/ }),

/***/ 79599:
/*!****************************************************************!*\
  !*** ./src/app/home/top-links/study-cost/study-cost.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyCostPageModule": () => (/* binding */ StudyCostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _study_cost_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-cost-routing.module */ 61045);
/* harmony import */ var _study_cost_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./study-cost.page */ 80935);








let StudyCostPageModule = class StudyCostPageModule {
};
StudyCostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _study_cost_routing_module__WEBPACK_IMPORTED_MODULE_1__.StudyCostPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_study_cost_page__WEBPACK_IMPORTED_MODULE_2__.StudyCostPage]
    })
], StudyCostPageModule);



/***/ }),

/***/ 80935:
/*!**************************************************************!*\
  !*** ./src/app/home/top-links/study-cost/study-cost.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudyCostPage": () => (/* binding */ StudyCostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_study_cost_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./study-cost.page.html */ 4808);
/* harmony import */ var _study_cost_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-cost.page.scss */ 13669);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ 25970);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);














let StudyCostPage = class StudyCostPage {
    constructor(headerTitle, apiGeneral, loader, apiProgramsService, storage, previewFile, toastr, alert, apiGeneralService, callNumber) {
        this.headerTitle = headerTitle;
        this.apiGeneral = apiGeneral;
        this.loader = loader;
        this.apiProgramsService = apiProgramsService;
        this.storage = storage;
        this.previewFile = previewFile;
        this.toastr = toastr;
        this.alert = alert;
        this.apiGeneralService = apiGeneralService;
        this.callNumber = callNumber;
        this.webAssetsPath = "";
        this.arrContent = [];
        this.mobileCatID = "";
        this.currentSelected = 0;
        this.SubSelectedTab = "a1";
        this.costContent = "";
        this.imagePath = "";
        this.arrCountry = [];
        this.arrDegree = [];
        this.arrInterestedPrograms = [];
        this.arrPrograms = [];
        this.arrUniversities = [];
        this.arrSelection = { 'countryId': 0, 'degreeId': 0, 'productDepartmentId': 0, 'progInterestId': 0, 'universityId': 0 };
        this.postData = {
            'countryId': null, 'degreeId': null, 'progInterestId': null, 'programId': null, 'universityId': null
        };
        this.slideOpts = {
            slidesPerView: 3.5,
            freeMode: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }
        };
        this.arrCounsellor = [];
        this.headerTitle.isBack = false;
        this.headerTitle.title = "Study Cost";
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.getCounsellor();
        }, 500);
    }
    ngOnInit() {
        this.getContent();
        this.getSelection();
    }
    //#region  Content Start
    getContent() {
        let postData = { "PageName": "Cost To Study", "IsActive": true };
        this.apiGeneral.getContent(JSON.stringify(postData)).then(resp => {
            this.arrContent = resp;
            this.costContent = this.arrContent[0]["details"];
            this.currentSelected = this.arrContent[0]["mobileCatID"];
            this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/category-contents";
            this.imagePath = this.webAssetsPath + "/" + this.arrContent[0]["mobileCatID"] + "/" + this.arrContent[0]["categoryImage2"];
        })
            .catch(err => {
            console.log("getInterestedPrograms: " + err);
            this.loader.loadingDismiss();
        });
    }
    ionSelectProgram(mobileCatID) {
        this.imagePath = "";
        this.mobileCatID = mobileCatID;
        this.currentSelected = mobileCatID;
        this.arrContent.forEach(i => {
            if (i.mobileCatID == mobileCatID) {
                this.costContent = i.details;
                this.imagePath = this.webAssetsPath + "/" + i.mobileCatID + "/" + i.categoryImage2;
            }
        });
    }
    subTab(subTabId) {
        this.SubSelectedTab = subTabId;
        console.log(subTabId);
    }
    //#endregion
    /** Budget Start*/
    getSelection() {
        this.storage.getObject("arrSelection").then((resp) => {
            this.arrSelection = resp;
            this.getCountry();
        });
    }
    getCountry() {
        let postData = { "IsActive": true, "ProgInterestId": this.apiGeneralService.arrSelection["progInterestId"], };
        this.apiProgramsService.getCountryOnProg(JSON.stringify(postData)).then(resp => {
            this.arrCountry = resp;
        })
            .catch(err => {
            console.log("getCountry: " + err);
        });
    }
    getIntersetedProgram() {
        this.postData.progInterestId = "";
        this.postData.programId = "";
        var degreeID = (this.arrSelection["degreeID"] == "" ? null : this.arrSelection["degreeID"]);
        let postData = { "DegreeId": degreeID, "IsActive": true };
        this.apiProgramsService.getInterestedProgram(JSON.stringify(postData)).then(resp => {
            console.log(resp);
            this.arrInterestedPrograms = resp;
        })
            .catch(err => {
            console.log("getInterestedPrograms: " + err);
        });
    }
    getProgramSpecialization() {
        if (this.arrSelection["progInterestId"] == 1) {
            this.postData["programId"] = 1;
            this.getUniversities();
            return false;
        }
        this.postData.programId = null;
        var progInterestId = (this.arrSelection["progInterestId"] == 0 ? null : this.arrSelection["progInterestId"]);
        var courseId = (this.apiProgramsService.filteredData.courseId == undefined) ? null : this.apiProgramsService.filteredData.courseId;
        let postData = { "ProgInterestId": progInterestId, "CourseId": courseId, "IsActive": true };
        this.apiProgramsService.getProgramSpecialization(JSON.stringify(postData)).then(resp => {
            if (resp) {
                this.arrPrograms = resp;
            }
        })
            .catch(err => {
            console.log("getProgramSpecialization: " + err);
        });
    }
    getUniversities() {
        this.postData["universityId"] = "";
        this.loader.presentLoading();
        let postData = { "countryId": this.postData["countryId"], "programId": this.postData["programId"], "IsActive": true };
        this.apiProgramsService.getUniversities(JSON.stringify(postData)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (resp.length != 0) {
                this.arrUniversities = resp;
            }
            else {
                this.arrUniversities = [];
                this.alert.basciAlert("Sorry, Univeristy is not available for selected country.", "", "", ['OK']);
            }
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 500);
        }))
            .catch(err => {
            console.log("getUniversities: " + err);
            this.loader.loadingDismiss();
        });
    }
    downloadBrochure() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.postData["universityId"] == "" || this.postData["universityId"] == null) {
                this.toastr.toastError("Plase select the university!");
                return false;
            }
            else {
                var arrData = this.arrUniversities.filter(x => x.universityID == this.postData["universityId"]);
                var brochureLink = arrData[0]["brochureLink"];
                if (brochureLink == "") {
                    this.alert.basciAlert("Sorry, Currently brouchure is not available for this Univeristy.", "", "", ['OK']);
                }
                else {
                    brochureLink = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "university/brochure/" + arrData[0].universityID + "/" + arrData[0].brochureLink;
                    console.log(brochureLink);
                    this.previewFile.preview(brochureLink);
                }
                return false;
                this.arrUniversities.forEach(i => {
                    if (this.postData["universityId"] == i.universityID) {
                        var brochureLink = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "university/brochure/" + i.universityID + "/" + i.brochureLink;
                        console.log(brochureLink);
                        this.previewFile.preview(brochureLink);
                    }
                });
            }
        });
    }
    //#region Click to Call
    onClickCall() {
        this.callNumber.callNumber(this.arrCounsellor["empMob1"], true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    //#endregion
    getCounsellor() {
        this.arrCounsellor = this.apiGeneral.arrCounsellor;
    }
};
StudyCostPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_9__.ApiProgramsService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__.PreviewAnyFile },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__.CallNumber }
];
StudyCostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-study-cost',
        template: _raw_loader_study_cost_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_study_cost_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudyCostPage);



/***/ }),

/***/ 13669:
/*!****************************************************************!*\
  !*** ./src/app/home/top-links/study-cost/study-cost.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box-prog ion-col img {\n  width: 70%;\n}\n\n.box-prog ion-col ion-label {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.banner-sec img {\n  height: auto;\n}\n\n.content-cont .box-prog ion-col {\n  height: 100%;\n}\n\nion-slides ion-slide {\n  padding-bottom: 10px;\n}\n\n.content-cont .box-prog ion-col.selected:after {\n  height: 18px;\n  width: 18px;\n  bottom: -4px;\n}\n\n.white-box {\n  padding: 1rem;\n}\n\nion-item {\n  font-size: 1rem;\n}\n\n.main-cont .sec-quick-contact {\n  background: var(--ion-color-secondary-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWR5LWNvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNCLFVBQUE7QUFFdEI7O0FBREE7RUFBNEIsaUJBQUE7RUFBbUIsZ0JBQUE7QUFNL0M7O0FBTEE7RUFBZ0IsWUFBQTtBQVNoQjs7QUFSQTtFQUFnQyxZQUFBO0FBWWhDOztBQVZJO0VBQVUsb0JBQUE7QUFjZDs7QUFaQTtFQUErQyxZQUFBO0VBQWMsV0FBQTtFQUFZLFlBQUE7QUFrQnpFOztBQWpCQTtFQUFXLGFBQUE7QUFxQlg7O0FBcEJBO0VBQVMsZUFBQTtBQXdCVDs7QUFyQkk7RUFBbUIsNENBQUE7QUF5QnZCIiwiZmlsZSI6InN0dWR5LWNvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1wcm9nIGlvbi1jb2wgaW1ne3dpZHRoOiA3MCU7fVxyXG4uYm94LXByb2cgaW9uLWNvbCBpb24tbGFiZWx7Zm9udC1zaXplOiAwLjhyZW07IGZvbnQtd2VpZ2h0OiA1MDA7fVxyXG4uYmFubmVyLXNlYyBpbWd7aGVpZ2h0OiBhdXRvO31cclxuLmNvbnRlbnQtY29udCAuYm94LXByb2cgaW9uLWNvbHtoZWlnaHQ6IDEwMCU7fVxyXG5pb24tc2xpZGVze1xyXG4gICAgaW9uLXNsaWRle3BhZGRpbmctYm90dG9tOiAxMHB4O31cclxufVxyXG4uY29udGVudC1jb250IC5ib3gtcHJvZyBpb24tY29sLnNlbGVjdGVkOmFmdGVye2hlaWdodDogMThweDsgd2lkdGg6IDE4cHg7Ym90dG9tOiAtNHB4O31cclxuLndoaXRlLWJveHtwYWRkaW5nOiAxcmVtO31cclxuaW9uLWl0ZW17Zm9udC1zaXplOiAxcmVtO31cclxuXHJcbi5tYWluLWNvbnQge1xyXG4gICAgLnNlYy1xdWljay1jb250YWN0e2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktbGlnaHQpO31cclxufSJdfQ== */");

/***/ }),

/***/ 4808:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/study-cost/study-cost.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content> \n\n  <app-header></app-header>\n  <app-top-links></app-top-links>\n  \n  <!-- <section class=\"banner-sec\">\n    <figure class=\"m-0\">\n      <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/study-cost/img1.jpg\" class=\"w-100\">\n    </figure>\n  </section> -->\n\n  <div class=\"main-cont content-cont\">\n    <h5 class=\"hdng-line\">\n      <span>Different costs involved to study abroad</span>\n    </h5>\n    <section>      \n      <ion-grid fixed class=\"box-prog\">\n        <ion-row class=\"m-0\">\n          <ion-slides [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let item of arrContent\">\n          <ion-col (click)=\"ionSelectProgram(item.mobileCatID)\" [ngClass]=\"{selected: item.mobileCatID == currentSelected}\">\n            <div>\n              <div>\n                <img src=\"{{this.webAssetsPath}}/{{item.mobileCatID}}/{{item.categoryImage}}\" />\n              </div>\n              <div>\n                <ion-label>{{item.categoryName}}</ion-label>\n              </div>\n            </div>\n          </ion-col>\n          </ion-slide>\n          </ion-slides>\n        </ion-row>\n      </ion-grid>\n    </section>\n\n    <section class=\"tab-content white-box mt-2\">\n      <div class=\"active\">   \n        <figure *ngIf=\"imagePath\">\n        <img [src]=\"imagePath\" />    \n      </figure>\n        <div [innerHTML] = \"costContent\"></div> \n      </div>\n    </section>\n    <section class=\"mt-1\">\n      <ion-button (click)=\"onClickCall()\" expand=\"block\" color=\"secondary\">\n        CALL FOR MORE DETAILS <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n      </ion-button>\n      </section>\n\n    <section class=\"sec-quick-contact\">\n      <ion-grid fixed class=\"w-100\">\n        <ion-row>\n          <ion-col size=\"3\" class=\"text-center\"> \n            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/icon-consulting.png\">\n          </ion-col>\n          <ion-col size=\"9\"><h5>Prepare for NEXT / USMLE Exams during MBBS course!</h5>\n            <p>Let our experts plan your career till MD / MS</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button [routerLink]=\"['/home/online-coaching']\"  expand=\"block\">\n              Start your FREE trial now\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </section>\n    <section>\n      <div class=\"landing-steps-cont\">\n        <h5>Your budget to Study Abroad </h5>\n        \n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-label>Interested Country</ion-label>\n                  <ion-select [(ngModel)]=\"postData.countryId\" interface=\"action-sheet\" (ionChange)=\"getProgramSpecialization()\">\n                    <ion-select-option [value]=\"item.countryId\" *ngFor=\"let item of arrCountry\">\n                      {{item.countryName}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>              \n              <ion-col size=\"12\" *ngIf=\"arrSelection.progInterestId !=1\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-label>Program Specialization</ion-label>\n                  <ion-select [(ngModel)]=\"postData.programId\" interface=\"action-sheet\" (ionChange)=\"getUniversities()\">\n                    <ion-select-option [value]=\"item.programId\" *ngFor=\"let item of arrPrograms\">\n                      {{item.programName}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-label>University</ion-label>\n                  <ion-select [(ngModel)]=\"postData.universityId\" interface=\"action-sheet\">\n                    <ion-select-option [value]=\"item.universityID\" *ngFor=\"let item of arrUniversities\">\n                      {{item.universityName}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>        \n          <ion-button (click)=\"downloadBrochure()\" shape=\"round\" color=\"secondary\">\n            Download Brouchure\n            <ion-icon name=\"cloud-download-outline\" slot=\"end\"></ion-icon>\n          </ion-button>   \n      </div>\n      <br><br>\n    </section>\n    <section>\n      <ion-text>\n        <h5><span>Book a FREE online  session with counsellor</span></h5>        \n      </ion-text>\n        <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n          <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n        </figure>\n    </section>\n  </div>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_study-cost_study-cost_module_ts.js.map