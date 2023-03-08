(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_academic-details_academic-details_module_ts"],{

/***/ 58370:
/*!*********************************************************************************************!*\
  !*** ./src/app/home/application-center/academic-details/academic-details-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicDetailsPageRoutingModule": () => (/* binding */ AcademicDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _academic_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./academic-details.page */ 70339);




const routes = [
    {
        path: '',
        component: _academic_details_page__WEBPACK_IMPORTED_MODULE_0__.AcademicDetailsPage
    }
];
let AcademicDetailsPageRoutingModule = class AcademicDetailsPageRoutingModule {
};
AcademicDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcademicDetailsPageRoutingModule);



/***/ }),

/***/ 42172:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/academic-details/academic-details.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicDetailsPageModule": () => (/* binding */ AcademicDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _academic_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academic-details-routing.module */ 58370);
/* harmony import */ var _academic_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academic-details.page */ 70339);








let AcademicDetailsPageModule = class AcademicDetailsPageModule {
};
AcademicDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _academic_details_routing_module__WEBPACK_IMPORTED_MODULE_1__.AcademicDetailsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_academic_details_page__WEBPACK_IMPORTED_MODULE_2__.AcademicDetailsPage]
    })
], AcademicDetailsPageModule);



/***/ }),

/***/ 70339:
/*!***********************************************************************************!*\
  !*** ./src/app/home/application-center/academic-details/academic-details.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcademicDetailsPage": () => (/* binding */ AcademicDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_academic_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./academic-details.page.html */ 83408);
/* harmony import */ var _academic_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academic-details.page.scss */ 80164);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);












let AcademicDetailsPage = class AcademicDetailsPage {
    constructor(headerTitle, formBuilder, toastr, apiApplicationService, route, navCtrl, loader, router, apiGeneral) {
        this.headerTitle = headerTitle;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.apiApplicationService = apiApplicationService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.loader = loader;
        this.router = router;
        this.apiGeneral = apiGeneral;
        this.ipAddress = "";
        this.isSubmitted = false;
        this.applicationID = "";
        this.arrAcademicData = { "appAcademicId": 0, "schoolName12th": "", "boardName12th": "", "schoolContact12th": "", "yearOfPassing12th": "", "entranceExamScore": "", "currentCollegeName": "", "universityAffiliatedName": "", "currentLevelofCompletion": "", "streamOfStudies": "", "stateLevelExamScore": "", "langaugeProficiencyScore": "", "pgentranceExamScore": "", "workExperience": "", "yearOfExperience": "", "fieldOfExperience": "", "currentDesignation": "", "isActive": true, "createdBy": "", "modifiedBy": "", "createdDate": null, "modifiedDate": null, "createdIp": "", "modifiedIp": "", "applicationId": null };
        this.arrYearOfPassing = [];
        this.arrPersonalDetails = { 'firstName': '', 'lastName': '' };
        this.arrAppUniversities = { 'countryName': '', 'universityName': '' };
        this.headerTitle.title = "Academic Details";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        //this.isPanelOpen = true;
        this.getIpAddress();
        this.applicationID = this.route.snapshot.params['appID'];
        this.getAcademicDetails();
        this.getPersonalDetails();
        this.getAppUniverisityDetails();
        this.getApplicationSteps();
        this.getYears();
        console.log(this.applicationID);
        this.ionicForm = this.formBuilder.group({
            boardName12th: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            yearOfPassing12th: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            entranceExamScore: [''],
            percentage12th: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
        });
    }
    getYears() {
        var prevYear = new Date().getFullYear() + 1;
        var noOfYears = 10;
        for (let index = 0; index < noOfYears; index++) {
            prevYear--;
            this.arrYearOfPassing.push({ 'year': prevYear });
        }
        console.log(this.arrYearOfPassing);
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    getAcademicDetails() {
        let postData = '{"ApplicationId":' + this.applicationID + ',"IsActive":true }';
        this.apiApplicationService.getAcademicDetails(postData).then(resp => {
            if (resp.length > 0) {
                this.arrAcademicData = resp[0];
                var neetScore = [];
                if (this.arrAcademicData["entranceExamScore"] != "") {
                    neetScore = this.arrAcademicData["entranceExamScore"].split(":");
                }
                this.ionicForm.controls.boardName12th.setValue(this.arrAcademicData["boardName12th"]);
                this.ionicForm.controls.yearOfPassing12th.setValue(parseInt(this.arrAcademicData["yearOfPassing12th"]));
                this.ionicForm.controls.entranceExamScore.setValue(neetScore[1]);
                this.ionicForm.controls.percentage12th.setValue(this.arrAcademicData["percentage12th"]);
            }
        });
    }
    getPersonalDetails() {
        this.apiApplicationService.getPersonalDetails(parseInt(this.applicationID)).then(resp => {
            this.arrPersonalDetails = resp;
        }).catch(err => {
            console.log(err);
        });
    }
    getAppUniverisityDetails() {
        let postData = '{"ApplicationId":' + this.applicationID + ',"IsActive":true }';
        this.apiApplicationService.getAppUniversity(postData).then(resp => {
            if (resp.length > 0) {
                this.arrAppUniversities = resp[0];
            }
        });
    }
    getApplicationSteps() {
        this.apiApplicationService.getApplicationSteps().then(resp => {
            if (resp) {
                this.isFirstTime = !resp["serviceSelection"];
            }
        }).catch(err => {
            if (err.error.error == "invalid_token") {
                //this.auth.logout();
            }
        });
    }
    back() {
        this.navCtrl.back();
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.ionicForm.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                if (this.isFirstTime == true) {
                    this.isPanelOpen = true;
                    this.isFirstTime = false;
                    return false;
                }
                this.loader.presentLoading();
                this.isLoading = true;
                this.isSubmitted = true;
                //let IpAddress = this.apiGeneral.getIPAddress();
                this.arrAcademicData["applicationId"] = parseInt(this.applicationID);
                this.arrAcademicData["boardName12th"] = this.ionicForm.value.boardName12th;
                this.arrAcademicData["yearOfPassing12th"] = this.ionicForm.value.yearOfPassing12th.toString();
                this.arrAcademicData["entranceExamScore"] = "NEET:" + this.ionicForm.value.entranceExamScore;
                this.arrAcademicData["percentage12th"] = this.ionicForm.value.percentage12th;
                this.arrAcademicData["createdDate"] = this.apiGeneral.getCurrentDateTime();
                this.arrAcademicData["createdIp"] = this.ipAddress;
                this.arrAcademicData["createdBy"] = "MobileApp";
                this.arrAcademicData["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
                this.arrAcademicData["modifiedIp"] = this.ipAddress;
                this.arrAcademicData["modifiedBy"] = "MobileApp";
                this.apiApplicationService.setAcademicDetails(JSON.stringify(this.arrAcademicData), this.arrAcademicData["appAcademicId"]).then(resp => {
                    this.toastr.toastSuccess("Academic details saved successfully!");
                    this.loader.loadingDismiss();
                    this.isLoading = false;
                    this.isPanelOpen = false;
                    this.router.navigate(["/home/application-center/service-selection", this.applicationID]);
                })
                    .catch(err => {
                    this.ionicForm.invalid;
                    console.log("end");
                    this.loader.loadingDismiss();
                    this.isLoading = false;
                    this.toastr.toastError(err.error.status);
                });
            }
        });
    }
    onClickAgree() {
        this.arrPersonalDetails["isAccept"] = true;
        this.apiApplicationService.putPersonalDetails(JSON.stringify(this.arrPersonalDetails)).then(resp => {
            this.submitForm();
        });
    }
    //== General Function start
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
    panelClose() {
        this.isFirstTime = true;
        this.isPanelOpen = false;
    }
};
AcademicDetailsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__.ApiApplicationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService }
];
AcademicDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-academic-details',
        template: _raw_loader_academic_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_academic_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AcademicDetailsPage);



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

/***/ 80164:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/academic-details/academic-details.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".modalheader {\n  position: absolute;\n  top: 0px;\n  background: #eee;\n  left: 0px;\n  width: 100%;\n  padding: 15px;\n}\n.modalheader img {\n  width: 50px;\n  position: absolute;\n  left: 14px;\n  top: 19px;\n}\n.modalheader h5 {\n  padding-left: 60px;\n  margin: 0px;\n}\n.toogle-panel .toogle-cont {\n  padding-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYWRlbWljLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWEsa0JBQUE7RUFBb0IsUUFBQTtFQUFVLGdCQUFBO0VBQWtCLFNBQUE7RUFBVyxXQUFBO0VBQWEsYUFBQTtBQU9yRjtBQU5JO0VBQUksV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxTQUFBO0FBWXJEO0FBWEk7RUFBRyxrQkFBQTtFQUFvQixXQUFBO0FBZTNCO0FBYkE7RUFBMkIsaUJBQUE7QUFpQjNCIiwiZmlsZSI6ImFjYWRlbWljLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsaGVhZGVye3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IGJhY2tncm91bmQ6ICNlZWU7IGxlZnQ6IDBweDsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDE1cHg7XHJcbiAgICBpbWd7d2lkdGg6IDUwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMTRweDsgdG9wOiAxOXB4O31cclxuICAgIGg1e3BhZGRpbmctbGVmdDogNjBweDsgbWFyZ2luOiAwcHg7fVxyXG59XHJcbi50b29nbGUtcGFuZWwgLnRvb2dsZS1jb250e3BhZGRpbmctdG9wOiA4MHB4O30iXX0= */");

/***/ }),

/***/ 83408:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/academic-details/academic-details.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-nav-steps></app-nav-steps>\r\n  <form class=\"form-cont no-icon\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>   \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.boardName12th.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">12th Board <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" name=\"boardName12th\" type=\"text\" formControlName=\"boardName12th\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>        \r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.yearOfPassing12th.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Year of Passing <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-select formControlName=\"yearOfPassing12th\" interface=\"action-sheet\">\r\n              <ion-select-option [value]=\"\">Select</ion-select-option>\r\n              <ion-select-option [value]=\"item.year\" *ngFor=\"let item of arrYearOfPassing\">{{item.year}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>   \r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.percentage12th.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">12th PCB Percentage <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" name=\"percentage12th\" type=\"number\" formControlName=\"percentage12th\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-col>     \r\n        <ion-col size=\"12\">\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">NEET Score</ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" name=\"entranceExamScore\" type=\"number\" formControlName=\"entranceExamScore\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <section class=\"btn-cont footerfixed\">\r\n      <div class=\"main-cont\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\r\n              <ion-button expand=\"block\" fill=\"outline\" (click)=\"back()\">Prev\r\n                <ion-ripple-effect></ion-ripple-effect>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n              <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Next\r\n                <ion-ripple-effect></ion-ripple-effect>\r\n                <ion-spinner name=\"dots\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </section>\r\n  </form>\r\n</ion-content>\r\n\r\n<section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isPanelOpen}\">\r\n  <div class=\"toogle-cont\">     \r\n    <div>\r\n      <div class=\"modalheader\">\r\n        <img src=\"../../../../assets/moksh-logo-header.png\">\r\n        <h5>MOXSH OVERSEAS EDUCON PRIVATE LIMITED</h5>\r\n      </div>\r\n      <h6>STUDENT SERVICE CONTRACT </h6>\r\n      <p class=\"text-justify\">\r\n        I <strong> {{arrPersonalDetails.firstName}}  {{arrPersonalDetails.lastName}}</strong> agree to register with MOXSH OVERSEAS EDUCON PRIVATE LIMITED towards Counseling, Guidance and reserving the seat for MBBS or MD ( Equivalent to MBBS) Program to Study in {{arrAppUniversities.countryName}}  at  <strong>{{arrAppUniversities.universityName}}</strong> and agree to pay as per opted services. I understand and agree that in order to have a smooth departure to my destination, I would clear all my dues as per schedule before my departure from India.\r\n      </p>\r\n      <br>\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"panelClose()\" expand=\"block\" fill=\"outline\">\r\n              Close\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button (click)=\"onClickAgree()\" expand=\"block\">\r\n              I Agree\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_academic-details_academic-details_module_ts.js.map