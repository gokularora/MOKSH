(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_login_login_module_ts-src_app_services_header-title_service_ts-src_app_services-5acb4a"],{

/***/ 54587:
/*!*****************************************************!*\
  !*** ./src/app/index/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 35689);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 18213:
/*!*********************************************!*\
  !*** ./src/app/index/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 54587);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 35689);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 35689:
/*!*******************************************!*\
  !*** ./src/app/index/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 79338);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 67725);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert.service */ 25970);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);














let LoginPage = class LoginPage {
    constructor(formBuilder, auth, router, toastService, storageService, apiApplicationService, apiCRMService, alert, firebaseAnalytics) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.toastService = toastService;
        this.storageService = storageService;
        this.apiApplicationService = apiApplicationService;
        this.apiCRMService = apiCRMService;
        this.alert = alert;
        this.firebaseAnalytics = firebaseAnalytics;
        this.isSubmitted = false;
        this.savedMobileNo = "";
        this.arrUserData = [];
    }
    ngOnInit() {
        this.initForm();
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.setCurrentScreen("Login");
        this.autoFill();
    }
    //#region Init Form
    initForm() {
        this.ionicForm = this.formBuilder.group({
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^([0-9]{10})$')]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(18)]],
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    //#endregion
    //#region AutoFill Login
    autoFill() {
        this.storageService.getObject("saved").then(resp => {
            if (resp != null) {
                this.savedMobileNo = resp["MobileNo"];
                if (resp["MobileNo"].indexOf('+91') >= 0) {
                    resp["MobileNo"] = resp["MobileNo"].replace('+91', '');
                }
                this.ionicForm.controls.MobileNo.setValue(resp["MobileNo"]);
                this.ionicForm.controls.Password.setValue(resp["Password"]);
            }
        });
    }
    //#endregion
    //#region Submit Login
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.isLoading = true;
            var mobileNo = this.ionicForm.value.MobileNo.toString();
            if (mobileNo.includes('+91')) {
                mobileNo = mobileNo;
            }
            else {
                mobileNo = '+91' + mobileNo;
            }
            this.resetData();
            var data = { "MobileNo": mobileNo, "Password": this.ionicForm.value.Password, "AccessKey": "nTBa3vPUCayrP3WeIxmQrkSSEOaA5nbMowYj47-UrDo" };
            this.auth.login(JSON.stringify(data)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (resp) {
                    this.arrUserData = resp;
                    this.firebaseAnalytics.logEvent("login", { resp: 'success' });
                    this.firebaseAnalytics.setUserId(resp.AppLoginID);
                    yield this.storageService.setString("OAuth", resp.token);
                    yield this.storageService.setObject("userdata", resp);
                    this.apiApplicationService.applicationID = resp.applicationID;
                    if (resp.applicationID != 0 || resp.applicationID != "") {
                        setTimeout(() => {
                            this.getPersonalDetails(resp.applicationID);
                        }, 2000);
                    }
                    var saveData = data;
                    saveData["MobileNo"] = this.ionicForm.value.MobileNo.toString();
                    yield this.storageService.setObject("saved", saveData);
                    setTimeout(() => {
                        this.storageService.getObject("arrSelection").then((respSelection) => {
                            if (respSelection != null) {
                                if (resp.applicationID != 0) {
                                    this.router.navigate(['/home/welcome'], { replaceUrl: true });
                                }
                                else if (this.savedMobileNo != this.ionicForm.value.MobileNo) {
                                    this.router.navigate(['/home/landing-page']);
                                }
                                else {
                                    this.router.navigate(['/home/college-predictor'], { replaceUrl: true });
                                }
                            }
                            else {
                                this.router.navigate(['/home/landing-page']);
                            }
                            setTimeout(() => {
                                this.isLoading = false;
                            }, 500);
                        });
                    }, 500);
                    //this.getRawData();
                    this.updateCRMIfNoRaw();
                }
                else {
                    this.isLoading = false;
                    this.toastService.toastError("Technical Exception! Kindly contact us!");
                    this.firebaseAnalytics.logEvent("login", { resp: 'failed' });
                }
            })).catch(err => {
                this.firebaseAnalytics.logEvent("login", { resp: 'failed' });
                if (err.error.statusCode == 401) {
                    this.alert.basciAlert("Login Failed", "Your mobile no. or password do not match.", "", ['Retry']);
                }
                else {
                    this.toastService.toastError("Oops! Something is wrong here. Please try again or contact our support team.");
                }
                this.isLoading = false;
            });
        }
    }
    //#endregion
    resetData() {
        this.apiCRMService.resetArrRawPosData();
        this.apiCRMService.resetArrLeadPosData();
    }
    //#region get Application Details
    getPersonalDetails(applicationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apiApplicationService.getPersonalDetails(applicationId).then(respPD => {
                if (respPD) {
                    this.storageService.setObject("appdata", respPD);
                }
                else {
                    this.storageService.getObject("userdata").then(resp => {
                        resp["applicationID"] = 0;
                        this.storageService.setObject("userdata", resp);
                    });
                }
            }).catch(err => {
                console.log("getApplicationData " + err);
                this.isLoading = false;
            });
        });
    }
    //#endregion
    //#region CRM
    getCounsellor() {
        var leadType = "";
        var leadID = 0;
        if (this.arrUserData["leadID"] != 0) {
            leadType = "Lead";
            leadID = this.arrUserData["leadID"];
        }
        else {
            leadType = "Raw";
            leadID = this.arrUserData["rawLeadID"];
        }
        let postData = { "LeadID": leadID, "LeadType": leadType };
        this.apiCRMService.getLeadCounsellor(JSON.stringify(postData)).then(resp => {
            var counsellorData = JSON.parse((resp.d));
            this.storageService.setObject("counsellorData", counsellorData[0]);
            this.apiCRMService.arrCounsellor = counsellorData[0];
        });
    }
    getRawData() {
        this.apiCRMService.fnGetCRMRawData().then(resp => {
            console.log(resp);
        });
    }
    updateCRMIfNoRaw() {
        var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
        var emailId = this.arrUserData["emailId"];
        this.apiCRMService.fnCheckDuplicateLead(mobileNo, emailId).then(respLead => {
            console.log("lead: " + respLead);
            if (respLead == 0) {
                this.apiCRMService.fnCheckDuplicateRawLead(mobileNo, emailId).then(respRaw => {
                    console.log("raw: " + respRaw);
                    if (respRaw == 0) {
                        this.setCRMRawData();
                        this.apiCRMService.fnSetCRMRawData().then(RespNew => {
                            if (RespNew > 0) {
                                this.arrUserData["leadID"] = 0;
                                this.arrUserData["rawLeadID"] = RespNew;
                                this.updateRegistration();
                            }
                        });
                    }
                    else {
                        this.arrUserData["leadID"] = 0;
                        this.arrUserData["rawLeadID"] = respRaw["RawLeadID"];
                        this.updateRegistration();
                    }
                });
            }
            else {
                this.arrUserData["leadID"] = respLead["LeadID"];
                this.arrUserData["rawLeadID"] = (respLead["RawLeadID"]) == null ? 0 : respLead["RawLeadID"];
                if (this.arrUserData["rawLeadID"] == 0) {
                    this.apiCRMService.resetArrRawPosData();
                    this.setCRMRawData();
                    //this.apiCRMService.arrCRMRawData["LeadID"] = respLead["LeadID"];
                    this.apiCRMService.arrCRMRawData["ProductDepartmentID"] = respLead["ProductDepartmentID"];
                    this.apiCRMService.arrCRMRawData["SubProductDepartmentID"] = respLead["SubProductDepartmentID"];
                    this.apiCRMService.arrCRMRawData["FranchiseeID"] = respLead["FranchiseeID"];
                    this.apiCRMService.fnSetCRMRawData().then(RespNew => {
                        if (RespNew > 0) {
                            this.arrUserData["leadID"] = respLead["LeadID"];
                            this.arrUserData["rawLeadID"] = RespNew;
                            this.updateRegistration();
                            //Update Lead Data
                            this.apiCRMService.resetArrLeadPosData();
                            respLead["RawLeadID"] = RespNew;
                            this.apiCRMService.arrCRMLeadData = respLead;
                            this.apiCRMService.fnSetCRMLeadData();
                        }
                    });
                }
                else {
                    this.updateRegistration();
                }
            }
        });
    }
    setCRMRawData() {
        this.apiCRMService.resetArrRawPosData();
        var ContactCode = "+91";
        var ContactNo = this.arrUserData["mobileNo"].replace("+91", "");
        this.apiCRMService.arrCRMRawData["AppLoginID"] = this.arrUserData["appLoginID"];
        this.apiCRMService.arrCRMRawData["FName"] = this.arrUserData["firstName"];
        this.apiCRMService.arrCRMRawData["LName"] = this.arrUserData["firstName"];
        this.apiCRMService.arrCRMRawData["ContactWhatsappCode"] = ContactCode;
        this.apiCRMService.arrCRMRawData["ContactWhatsapp"] = ContactNo;
        this.apiCRMService.arrCRMRawData["EmailID"] = this.arrUserData["emailId"];
        this.apiCRMService.arrCRMRawData["DistrictID"] = this.arrUserData["districtID"];
        this.apiCRMService.arrCRMRawData["StateID"] = this.arrUserData["stateID"];
        this.apiCRMService.arrCRMRawData["LeadSourceID"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.defaultLeadSourceId;
        this.apiCRMService.arrCRMRawData["LeadPriorityID"] = "3";
        this.apiCRMService.arrCRMRawData["ProductDepartmentID"] = this.apiCRMService.ProductDepartmentMBBS;
        this.apiCRMService.arrCRMRawData["SubProductDepartmentID"] = this.apiCRMService.ProductSubDepartmentMBBSIndia;
        this.apiCRMService.arrCRMRawData["FranchiseeID"] = "1";
        this.apiCRMService.arrCRMRawData["EmpID"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.defaultEmpID;
        ;
        this.apiCRMService.arrCRMRawData["IsActive"] = true;
        this.apiCRMService.arrCRMRawData["IsMobilityApp"] = true;
    }
    //#endregion
    //#region Update App Login
    updateRegistration() {
        this.storageService.setObject("userdata", this.arrUserData);
        setTimeout(() => {
            this.auth.getAppRegistration().then(resp => {
                var arrData = resp;
                arrData["rawLeadID"] = this.arrUserData["rawLeadID"];
                arrData["leadID"] = this.arrUserData["leadID"];
                this.auth.putAppRegistration(JSON.stringify(arrData)).then(resp => {
                    console.log("submitForm " + resp);
                    this.isLoading = false;
                }).catch(ex => {
                    console.log("updateRegistration()=== " + ex);
                });
            });
        }, 1000);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_7__.ApiApplicationService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__.ApiCRMService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__.FirebaseAnalytics }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



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

/***/ 67725:
/*!*********************************************!*\
  !*** ./src/app/index/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".login-cont > figure {\n  margin: 0px;\n}\n.login-cont > figure > img {\n  max-height: 8rem;\n  object-fit: cover;\n}\n.login-cont > figure figcaption {\n  position: absolute;\n  top: 0px;\n  right: 20px;\n}\n.login-cont > figure figcaption h2 {\n  color: var(--ion-color-primary);\n  font-weight: 700;\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n.login-cont > figure figcaption h2 span {\n  display: block;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 70%;\n  letter-spacing: 1px;\n  margin-top: 5px;\n}\n.login-cont .logo-cont {\n  padding: 5px 1rem;\n}\n.login-cont .logo-cont ion-col {\n  margin: auto 0px;\n}\n.login-cont .logo-cont ion-col img {\n  width: 100%;\n  max-width: 10rem;\n}\n.login-cont .logo-cont ion-col .logo img {\n  max-width: 7rem;\n}\n.login-cont form > ion-text {\n  display: block;\n  background: var(--ion-color-secondary);\n  padding: 8px;\n  margin: 0px -15px;\n}\n.login-cont form > ion-text h3 {\n  margin: 0px;\n  font-size: 1.2rem;\n}\n@media only screen and (max-width: 360px) {\n  .login-cont ion-text h3 {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFTLFdBQUE7QUFDYjtBQUFRO0VBQU0sZ0JBQUE7RUFBa0IsaUJBQUE7QUFJaEM7QUFITTtFQUFZLGtCQUFBO0VBQW9CLFFBQUE7RUFBUyxXQUFBO0FBUS9DO0FBUE07RUFBYywrQkFBQTtFQUFpQyxnQkFBQTtFQUFrQixlQUFBO0VBQWlCLHlCQUFBO0FBYXhGO0FBWk07RUFBbUIsY0FBQTtFQUFnQix5QkFBQTtFQUF3QixjQUFBO0VBQWdCLG1CQUFBO0VBQXFCLGVBQUE7QUFtQnRHO0FBaEJJO0VBQVcsaUJBQUE7QUFtQmY7QUFsQlE7RUFBUSxnQkFBQTtBQXFCaEI7QUFwQlk7RUFBSSxXQUFBO0VBQWEsZ0JBQUE7QUF3QjdCO0FBdEJnQjtFQUFJLGVBQUE7QUF5QnBCO0FBcEJRO0VBQVcsY0FBQTtFQUFnQixzQ0FBQTtFQUF1QyxZQUFBO0VBQWMsaUJBQUE7QUEwQnhGO0FBekJZO0VBQUcsV0FBQTtFQUFhLGlCQUFBO0FBNkI1QjtBQXhCRTtFQUVNO0lBQVksaUJBQUE7RUEyQmxCO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnR7XHJcbiAgICA+IGZpZ3VyZXttYXJnaW46IDBweDtcclxuICAgICAgICA+IGltZ3ttYXgtaGVpZ2h0OiA4cmVtOyBvYmplY3QtZml0OiBjb3Zlcjt9XHJcbiAgICAgIGZpZ2NhcHRpb24ge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjBweDsgcmlnaHQ6IDIwcHg7fVxyXG4gICAgICBmaWdjYXB0aW9uIGgye2NvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMnJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XHJcbiAgICAgIGZpZ2NhcHRpb24gaDIgc3BhbntkaXNwbGF5OiBibG9jazsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgZm9udC1zaXplOiA3MCU7IGxldHRlci1zcGFjaW5nOiAxcHg7IG1hcmdpbi10b3A6IDVweDt9XHJcbiAgICB9XHJcbiAgICAvLy5sb2dvLWNvbnR7d2lkdGg6IDhyZW07IG1hcmdpbjogMHB4IGF1dG87IGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7IHBhZGRpbmc6IDEuNnJlbSAxcmVtOyBib3JkZXItcmFkaXVzOiAzMHB4OyBtYXJnaW4tdG9wOiAtNXJlbTsgYmFja2dyb3VuZDogI2ZmZjsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxO31cclxuICAgIC5sb2dvLWNvbnR7cGFkZGluZzogNXB4IDFyZW07XHJcbiAgICAgICAgaW9uLWNvbHttYXJnaW46IGF1dG8gMHB4O1xyXG4gICAgICAgICAgICBpbWd7d2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTByZW07fVxyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgIGltZ3ttYXgtd2lkdGg6IDdyZW07fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgPiBpb24tdGV4dHtkaXNwbGF5OiBibG9jazsgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTsgcGFkZGluZzogOHB4OyBtYXJnaW46IDBweCAtMTVweDtcclxuICAgICAgICAgICAgaDN7bWFyZ2luOiAwcHg7IGZvbnQtc2l6ZTogMS4ycmVtO31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kKG1heC13aWR0aDozNjBweCl7XHJcbiAgICAubG9naW4tY29udHtcclxuICAgICAgICBpb24tdGV4dCBoM3tmb250LXNpemU6IDEuMnJlbTt9XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 79338:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"pb-0\">\r\n  <div class=\"login-cont\">\r\n    <figure>\r\n      <img src=\"../../assets/login/banner-login1.jpg\" class=\"w-100\">\r\n      <!-- <figcaption>\r\n        <h2 class=\"text-right\">MOKSH <span>Study Abroad</span></h2>\r\n      </figcaption> -->\r\n    </figure>\r\n    <div class=\"logo-cont\">\r\n      <ion-grid fixed>\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n            <figure class=\"text-right logo m-0\">\r\n            <img src=\"../../assets/moksh-logo.png\">\r\n          </figure></ion-col>\r\n          <ion-col size=\"7\">\r\n            <figure class=\"text-left m-0\">\r\n              <img src=\"../../assets/login/img-department.jpg\">\r\n            </figure>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </div>\r\n    <form class=\"form-cont pt-0\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n      <ion-text class=\"text-center\">\r\n        <h3>Sign in to plan a Global Career</h3>\r\n      </ion-text>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.required\"></span>\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n              <ion-label position=\"floating\">Mobile No.</ion-label>\r\n              <ion-input maxlength=\"12\"   type=\"number\" formControlName=\"MobileNo\"></ion-input>\r\n            </ion-item>\r\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please enter 10 digit Mobile No.</span>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.Password.errors?.required\"></span>\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input maxlength=\"30\" size=\"large\" autocomplete=\"off\" type=\"password\" formControlName=\"Password\"></ion-input>\r\n            </ion-item>\r\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.Password.errors?.minlength\">Password length should be between 3 - 18 characters</span>\r\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.Password.errors?.maxlength\">Password length should be between 3 - 18 characters</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <section class=\"text-right ion-padding-top\">\r\n        <ion-text>\r\n          <a [routerLink]=\"['/forgot-password']\" routerLinkActive=\"router-link-active\" class=\"btn-link\">Forgot Password?</a>\r\n        </ion-text>\r\n      </section>\r\n      <section class=\"btn-cont\">\r\n        <ion-button  expand=\"block\" type=\"submit\" [disabled]=\"!ionicForm.valid || isLoading\" color=\"primary\">LOGIN          \r\n          <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n        </ion-button>\r\n      </section>\r\n      \r\n      <section class=\"text-center\">\r\n        <ion-text>\r\n          <p class=\"mb-2\"><strong> Don’t have account?</strong></p>\r\n        </ion-text>\r\n        <ion-button [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\"   expand=\"block\"  fill=\"outline\">REGISTER                  \r\n        </ion-button>\r\n      </section>\r\n    </form>\r\n  </div>\r\n  \r\n</ion-content>\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_index_login_login_module_ts-src_app_services_header-title_service_ts-src_app_services-5acb4a.js.map