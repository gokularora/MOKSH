(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_landing-page_landing-page_module_ts"],{

/***/ 65685:
/*!******************************************************************!*\
  !*** ./src/app/home/landing-page/landing-page-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageRoutingModule": () => (/* binding */ LandingPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-page.page */ 63554);




const routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_0__.LandingPagePage
    }
];
let LandingPagePageRoutingModule = class LandingPagePageRoutingModule {
};
LandingPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingPagePageRoutingModule);



/***/ }),

/***/ 83281:
/*!**********************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePageModule": () => (/* binding */ LandingPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page-routing.module */ 65685);
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.page */ 63554);








let LandingPagePageModule = class LandingPagePageModule {
};
LandingPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.LandingPagePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_2__.LandingPagePage]
    })
], LandingPagePageModule);



/***/ }),

/***/ 63554:
/*!********************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPagePage": () => (/* binding */ LandingPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_landing_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing-page.page.html */ 5628);
/* harmony import */ var _landing_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.page.scss */ 71286);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api-general.service */ 7110);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/loader.service */ 38555);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);















let LandingPagePage = class LandingPagePage {
    constructor(headerTitle, apiCRMService, apiProgramsService, apiGeneralService, toastService, router, storage, auth, loader, alertController, firebaseAnalytics) {
        this.headerTitle = headerTitle;
        this.apiCRMService = apiCRMService;
        this.apiProgramsService = apiProgramsService;
        this.apiGeneralService = apiGeneralService;
        this.toastService = toastService;
        this.router = router;
        this.storage = storage;
        this.auth = auth;
        this.loader = loader;
        this.alertController = alertController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.arrInterestedPrograms = [];
        this.arrDegree = [];
        this.webAssetsPath = "";
        this.formData = { 'subDepartmentId': '', 'educationId': '', 'examId': '' };
        this.currentSelected = null;
        this.degreeId = 0;
        this.progInterestId = 0;
        this.arrUserData = [];
        this.arrCRMRawData = [];
        this.unit = "2";
        this.arrNextYear = [];
        this.arrPrevYear = [];
        this.selectedEduYear = 0;
        this.headerTitle.title = "Select a Preferred Course";
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.setCurrentScreen("landing-page");
    }
    ngOnInit() {
        this.getYears();
    }
    getYears() {
        var nextYear = new Date().getFullYear() - 1;
        var prevYear = new Date().getFullYear() + 1;
        var noOfYears = 5;
        for (let index = 1; index < noOfYears; index++) {
            nextYear++;
            this.arrNextYear.push({ 'name': 'radio' + index, 'type': 'radio', 'label': nextYear, 'value': nextYear });
        }
        console.log(this.arrNextYear);
        for (let index = 0; index < noOfYears; index++) {
            prevYear--;
            this.arrPrevYear.push({ 'name': 'radio' + index, 'type': 'radio', 'label': prevYear, 'value': prevYear });
        }
    }
    fillData() {
        if (this.apiGeneralService.arrSelection == null) {
            return false;
        }
        this.formData["degreeId"] = this.apiGeneralService.arrSelection["degreeId"].toString();
        this.currentSelected = this.apiGeneralService.arrSelection["progInterestId"];
        this.progInterestId = this.apiGeneralService.arrSelection["progInterestId"];
    }
    submit() {
        if (this.formData["educationId"] == "" || this.formData["subDepartmentId"] == '') {
            this.toastService.toastError("Please Select Academic level and Program");
            return false;
        }
        else {
            this.firebaseAnalytics.logEvent("course_selection", { 'resp': 'success', 'page': 'landing-page' });
            if (this.formData["examId"] == "") {
                this.toastService.toastError("Please select your attempt for NEET 2022");
                return false;
            }
            var arrSelection = {};
            arrSelection = { 'degreeId': 1, 'progInterestId': 1, 'countryId': '', 'productDepartmentId': 1, 'universityId': 0 }; //temp selected default value 17 Jul 2021
            this.apiGeneralService.arrSelection = arrSelection;
            this.storage.setObject("arrSelection", arrSelection);
            if (this.formData.subDepartmentId == "1") {
                this.router.navigate(["/home/welcome"], { replaceUrl: true });
            }
            else {
                this.router.navigate(["/home/college-predictor"], { replaceUrl: true });
            }
            setTimeout(() => {
                this.getUserDataStorage();
            }, 1000);
            //this.getUserDataStorage();
        }
    }
    onChangeAcademy($event) {
        var educationId = $event.target.value;
        if (educationId == 7) {
            this.presentAlertRadio(this.arrNextYear);
        }
        else if (educationId == 8) {
            this.presentAlertRadio(this.arrPrevYear);
        }
    }
    presentAlertRadio(arrYear) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(arrYear);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Please Select Year',
                inputs: arrYear,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (ex) => {
                            this.selectedEduYear = ex;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //#region Old Code Started
    /*
      ngOnInit() {
        this.getDegree();
        this.getIntersetedProgram();
      }
      fillData(){
        if(this.apiGeneralService.arrSelection== null){
          return false;
        }
        this.formData["degreeId"] = this.apiGeneralService.arrSelection["degreeId"].toString();
        this.ionSelectDegree(this.apiGeneralService.arrSelection["degreeId"]);
        this.currentSelected = this.apiGeneralService.arrSelection["progInterestId"];
        this.progInterestId = this.apiGeneralService.arrSelection["progInterestId"];
      }
    //#region Get Degree & Program
      async getDegree(){
        let postData = {"IsActive": true}
        await this.apiProgramsService.getDegree(JSON.stringify(postData)).then(resp => {
          resp.forEach(i => {
            if(i.degreeId==1){i.fill = "solid"}
            else{i.fill = "outline"}
            this.arrDegree.push(i);
            this.fillData();
          });
        })
        .catch(err => {
          console.log("getDegree: " + err);
        })
      }
      getIntersetedProgram(){
        var degreeID = (this.degreeId == 0 ? 1 : this.degreeId);
        let postData = {"DegreeId": degreeID,"IsActive": true}
        this.apiProgramsService.getInterestedProgram(JSON.stringify(postData)).then((resp:any) => {
          this.arrInterestedPrograms = [];
          if (resp.length != 0) {
            this.arrInterestedPrograms = resp;
            this.webAssetsPath = environment.webAssetsPath + "prog-interest/images";
          }
          console.log(this.arrInterestedPrograms);
        })
        .catch(err => {
          console.log("getInterestedPrograms: " + err);
          
        })
      }
    //#endregion
      
    ionSelectDegree(degreeId){
        this.degreeId = degreeId;
        this.getIntersetedProgram();
      }
      ionSelectProgram(progInterestId){
        this.progInterestId = progInterestId;
        this.currentSelected = progInterestId;
      }
      submit(){
        if(this.degreeId == 0 || this.progInterestId == 0){
          this.toastService.toastError("Please Select Degree and Course");
          return false;
        }
        else{
          var arrSelection = {};
          var  productDepartmentID = 0;
          this.apiProgramsService.filteredData.progInterestId = this.progInterestId.toString();
          this.apiProgramsService.filteredData.degreeId = this.degreeId.toString();
          if(this.progInterestId == 1 || this.progInterestId == 4){
            this.apiProgramsService.productDepartmentID = "1";
            productDepartmentID = 1;
            arrSelection = {'degreeId': this.degreeId, 'progInterestId': this.progInterestId, 'countryId':'', 'productDepartmentId': productDepartmentID ,'universityId':0}
            this.apiGeneralService.arrSelection = arrSelection;
            this.storage.setObject("arrSelection", arrSelection);
            this.router.navigate(["/home/college-predictor"]);
          }
          else if(this.progInterestId == 3 || this.progInterestId == 5){
            this.apiProgramsService.productDepartmentID = "2";
            productDepartmentID = 1;
            arrSelection = {'degreeID': this.degreeId, 'progInterestId': this.progInterestId, 'countryId':'', 'productDepartmentId': productDepartmentID, 'universityId':0 }
            this.apiGeneralService.arrSelection = arrSelection;
            this.storage.setObject("arrSelection", arrSelection);
            this.router.navigate(["/home/study-germany"]);
          }
          this.getUserDataStorage();
        }
        console.log(this.formData.degreeId);
      }
      */
    //#endregion
    //#region Update CRM Data
    getUserDataStorage() {
        this.storage.getObject("userdata").then((resp) => {
            this.arrUserData = resp;
            if (this.arrUserData["leadID"] == 0) {
                this.setCRMRawData();
            }
            else {
                this.setCRMLeadData();
            }
        });
    }
    setCRMRawData() {
        this.apiCRMService.fnGetCRMRawData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMRawData["studentEducationId"] = this.formData["educationId"];
                this.apiCRMService.arrCRMRawData["examId"] = this.formData["examId"];
                this.apiCRMService.arrCRMRawData["studentEducationYear"] = null;
                this.apiCRMService.arrCRMRawData["interestedProgramId"] = "1";
                this.apiCRMService.arrCRMRawData["modifiedBy"] = "MobileApp";
                this.apiCRMService.arrCRMRawData["modifiedDate"] = this.apiGeneralService.CurrentDateTime;
                if (this.arrUserData["leadID"] == 0) {
                    this.apiCRMService.arrCRMRawData["productDepartmentId"] = "1";
                    this.apiCRMService.arrCRMRawData["subProductDepartmentId"] = this.formData.subDepartmentId;
                }
                this.apiCRMService.fnSetCRMRawData();
            }
            else {
                this.toastService.toastWarning("Lead data not available!");
            }
        });
    }
    setCRMLeadData() {
        this.apiCRMService.fnGetCRMLeadData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMLeadData["studentEducationId"] = this.formData["educationId"];
                this.apiCRMService.arrCRMLeadData["examId"] = this.formData["examId"];
                this.apiCRMService.arrCRMLeadData["studentEducationYear"] = null;
                this.apiCRMService.arrCRMLeadData["interestedProgramId"] = "1";
                this.apiCRMService.arrCRMLeadData["modifiedBy"] = "MobileApp";
                this.apiCRMService.arrCRMLeadData["modifiedDate"] = this.apiGeneralService.CurrentDateTime;
                if (this.arrUserData["leadID"] == 0) {
                    this.apiCRMService.arrCRMLeadData["productDepartmentId"] = "1";
                    this.apiCRMService.arrCRMLeadData["subProductDepartmentId"] = this.formData.subDepartmentId;
                }
                this.apiCRMService.fnSetCRMLeadData();
            }
            else {
                this.toastService.toastWarning("Lead data not available!");
            }
        });
    }
    //#endregion  Update CRM Data
    logout() {
        this.auth.logout();
    }
};
LandingPagePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTitleService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_4__.ApiCRMService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_9__.ApiProgramsService },
    { type: _services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseAnalytics }
];
LandingPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-landing-page',
        template: _raw_loader_landing_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingPagePage);



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

/***/ 71286:
/*!**********************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  display: block;\n  color: #000 !important;\n}\n\nion-icon {\n  font-size: 1.8rem;\n}\n\nion-menu-button {\n  font-size: 2rem;\n}\n\nion-toolbar {\n  border: 0px !important;\n  --min-height:3rem;\n}\n\nion-title {\n  text-align: left;\n  position: relative;\n  padding-left: initial;\n}\n\nion-header {\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);\n}\n\nion-header .nav-list {\n  position: absolute;\n  right: 0px;\n  top: -2px;\n  z-index: 2;\n  margin: 0px;\n}\n\nion-header .nav-list > li {\n  display: inline-block;\n  width: 3rem;\n  text-align: center;\n  position: relative;\n}\n\nion-header .nav-list > li.istrue {\n  position: relative;\n}\n\nion-header .nav-list > li.istrue:after {\n  content: \"\";\n  position: absolute;\n  bottom: -7px;\n  background: #fff;\n  height: 20px;\n  width: 20px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  transform: rotate(45deg);\n}\n\nion-header .nav-list > li > a {\n  position: relative;\n  display: inline-block;\n  padding: 12px 5px;\n  color: #000;\n}\n\nion-header .nav-list > li.nav-whatsapp > a {\n  color: #3f9526;\n}\n\nion-header .nav-list > li.nav-home {\n  margin-left: 5px;\n}\n\nion-header .nav-list > li.nav-home > a {\n  background-color: #fff;\n}\n\nion-header .nav-list ion-badge {\n  position: absolute;\n  z-index: 2;\n  right: 5px;\n  top: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-item {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQWdCLHNCQUFBO0FBQXBCOztBQUVBO0VBQVMsaUJBQUE7QUFFVDs7QUFEQTtFQUFnQixlQUFBO0FBS2hCOztBQUpBO0VBQVksc0JBQUE7RUFBd0IsaUJBQUE7QUFTcEM7O0FBUEE7RUFBVSxnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixxQkFBQTtBQWFoRDs7QUFaQTtFQUFXLDhDQUFBO0FBZ0JYOztBQWZBO0VBQXNCLGtCQUFBO0VBQW9CLFVBQUE7RUFBYSxTQUFBO0VBQVUsVUFBQTtFQUFZLFdBQUE7QUF1QjdFOztBQXRCSTtFQUFNLHFCQUFBO0VBQXVCLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixrQkFBQTtBQTRCbEU7O0FBM0JRO0VBQVMsa0JBQUE7QUE4QmpCOztBQTdCWTtFQUFRLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsZ0JBQUE7RUFBa0IsWUFBQTtFQUFjLFdBQUE7RUFBYSxTQUFBO0VBQVcsVUFBQTtFQUFZLGdCQUFBO0VBQWtCLHdCQUFBO0FBeUN6Sjs7QUF2Q1E7RUFBSSxrQkFBQTtFQUFvQixxQkFBQTtFQUF1QixpQkFBQTtFQUFrQixXQUFBO0FBNkN6RTs7QUEzQ0k7RUFBc0IsY0FBQTtBQThDMUI7O0FBN0NJO0VBQWUsZ0JBQUE7QUFnRG5COztBQS9DUTtFQUFLLHNCQUFBO0FBa0RiOztBQWhESTtFQUFVLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxVQUFBO0VBQVksUUFBQTtFQUFVLGlCQUFBO0VBQW1CLGtCQUFBO0FBd0R2Rjs7QUFyREE7RUFBUyxpQkFBQTtBQXlEVCIsImZpbGUiOiJsYW5kaW5nLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcbmlvbi1pY29ue2ZvbnQtc2l6ZTogMS44cmVtO31cclxuaW9uLW1lbnUtYnV0dG9ue2ZvbnQtc2l6ZTogMnJlbTt9XHJcbmlvbi10b29sYmFye2JvcmRlcjogMHB4ICFpbXBvcnRhbnQ7IC0tbWluLWhlaWdodDozcmVtO31cclxuXHJcbmlvbi10aXRsZXt0ZXh0LWFsaWduOiBsZWZ0OyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctbGVmdDogaW5pdGlhbDt9XHJcbmlvbi1oZWFkZXJ7Ym94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4yKTt9XHJcbmlvbi1oZWFkZXIgLm5hdi1saXN0IHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwMHB4OyB0b3A6LTJweDsgei1pbmRleDogMjsgbWFyZ2luOiAwcHg7XHJcbiAgICA+IGxpIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAzcmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmLmlzdHJ1ZXtwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7Y29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAtN3B4OyBiYWNrZ3JvdW5kOiAjZmZmOyBoZWlnaHQ6IDIwcHg7IHdpZHRoOiAyMHB4OyBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7IG1hcmdpbjogMHB4IGF1dG87IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTt9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgPiBhe3Bvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggNXB4OyBjb2xvcjogIzAwMH1cclxuICAgIH1cclxuICAgID4gbGkubmF2LXdoYXRzYXBwID4gYXtjb2xvcjogIzNmOTUyNjt9XHJcbiAgICA+IGxpLm5hdi1ob21leyBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgID4gYXsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9ICAgICAgICBcclxuICAgIH1cclxuICAgIGlvbi1iYWRnZXtwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDI7IHJpZ2h0OiA1cHg7IHRvcDogOHB4OyBwYWRkaW5nLWxlZnQ6IDVweDsgcGFkZGluZy1yaWdodDogNXB4O31cclxufVxyXG5cclxuaW9uLWl0ZW17Zm9udC1zaXplOiAwLjlyZW07fSJdfQ== */");

/***/ }),

/***/ 5628:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-page/landing-page.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"warning\">\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" (click)=\"back()\" *ngIf=\"isBack\"></ion-back-button>\r\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title>&nbsp;&nbsp;Select Course</ion-title>\r\n    <ul class=\"nav-list\">\r\n      <!-- <li class=\"nav-whatsapp\"><a href=\"https://91{{counsellorWhatsAppNo}}&amp;text=\" target=\"_blank\">\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n        </a></li> -->\r\n      <li (click)=\"logout()\">\r\n        <a>\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"pb-0\">\r\n  <section class=\"banner-sec\">\r\n    <figure class=\"m-0\">\r\n      <img src=\"../../assets/landing/img-banner.jpg\" class=\"w-100\">\r\n    </figure>\r\n  </section>\r\n  <section class=\"main-cont mt-0 pt-0\">\r\n    <div class=\"landing-steps-cont\">\r\n      <h5>3 Steps to start your Global Career!</h5>\r\n\r\n      <ul class=\"landing-steps\">\r\n        <li> <span>1.</span>\r\n          <div class=\"ttl mb-1\">Choose your current academic level</div>\r\n          <!-- <ion-item class=\"ion-no-padding\" lines=\"none\">            \r\n           <ion-label>Select</ion-label>\r\n             <ion-select  interface=\"action-sheet\" [(ngModel)]=\"formData.educationId\">              \r\n              <ion-select-option value=\"7\">12th Persuing</ion-select-option>\r\n              <ion-select-option value=\"8\">12th Passed</ion-select-option>              \r\n            </ion-select> -->\r\n            <div> \r\n            <ion-radio-group name=\"rdEducation\" [(ngModel)]=\"formData.educationId\" >\r\n              <ion-row>                  \r\n                <ion-col>\r\n                  <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                    <ion-radio value=\"7\" slot=\"start\" ></ion-radio>\r\n                    <ion-label>12th Persuing</ion-label>\r\n                  </ion-item>\r\n                </ion-col>               \r\n                <ion-col>\r\n                  <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                    <ion-radio value=\"8\" slot=\"start\" ></ion-radio>\r\n                    <ion-label>12th Passed</ion-label>\r\n                  </ion-item>\r\n                </ion-col> \r\n              </ion-row>\r\n            </ion-radio-group>\r\n            </div>\r\n          <!-- </ion-item>  -->\r\n          </li>\r\n          <li> <span>2.</span>\r\n            <div class=\"ttl\">What course would you like to pursue?</div>\r\n            <div> \r\n              <ion-radio-group  [(ngModel)]=\"formData.subDepartmentId\" >\r\n                <ion-row>                  \r\n                  <ion-col>\r\n                    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                      <ion-radio value=\"17\" slot=\"start\" ></ion-radio>\r\n                      <ion-label>MBBS India</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>               \r\n                  <ion-col>\r\n                    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                      <ion-radio value=\"1\" slot=\"start\" ></ion-radio>\r\n                      <ion-label>MBBS Abroad</ion-label>\r\n                    </ion-item>\r\n                  </ion-col> \r\n                </ion-row>\r\n              </ion-radio-group>\r\n            </div>         \r\n          </li>\r\n          <li> <span>3.</span>\r\n            <div class=\"ttl\">Your attempt for NEET 2022?</div>\r\n            <div>\r\n              <ion-radio-group name=\"examId\" [(ngModel)]=\"formData.examId\">\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                      <ion-radio value=\"15\" slot=\"start\"></ion-radio>\r\n                      <ion-label>First Time</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                      <ion-radio value=\"17\" slot=\"start\"></ion-radio>\r\n                      <ion-label>Repeater</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-radio-group>\r\n            </div>\r\n          </li>         \r\n      </ul>      \r\n      <ion-button (click)=\"submit()\"  color=\"primary\">\r\n        Start checking your options NOW!\r\n      </ion-button>      \r\n    </div>\r\n  </section>\r\n <br><br>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_landing-page_landing-page_module_ts.js.map