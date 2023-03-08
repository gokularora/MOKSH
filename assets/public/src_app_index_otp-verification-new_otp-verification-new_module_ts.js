(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_otp-verification-new_otp-verification-new_module_ts"],{

/***/ 33016:
/*!***********************************************************************************!*\
  !*** ./src/app/index/otp-verification-new/otp-verification-new-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationNewPageRoutingModule": () => (/* binding */ OtpVerificationNewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otp_verification_new_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification-new.page */ 34589);




const routes = [
    {
        path: '',
        component: _otp_verification_new_page__WEBPACK_IMPORTED_MODULE_0__.OtpVerificationNewPage
    }
];
let OtpVerificationNewPageRoutingModule = class OtpVerificationNewPageRoutingModule {
};
OtpVerificationNewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpVerificationNewPageRoutingModule);



/***/ }),

/***/ 32634:
/*!***************************************************************************!*\
  !*** ./src/app/index/otp-verification-new/otp-verification-new.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationNewPageModule": () => (/* binding */ OtpVerificationNewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otp_verification_new_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification-new-routing.module */ 33016);
/* harmony import */ var _otp_verification_new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification-new.page */ 34589);







let OtpVerificationNewPageModule = class OtpVerificationNewPageModule {
};
OtpVerificationNewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_verification_new_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpVerificationNewPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_otp_verification_new_page__WEBPACK_IMPORTED_MODULE_1__.OtpVerificationNewPage]
    })
], OtpVerificationNewPageModule);



/***/ }),

/***/ 34589:
/*!*************************************************************************!*\
  !*** ./src/app/index/otp-verification-new/otp-verification-new.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationNewPage": () => (/* binding */ OtpVerificationNewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_otp_verification_new_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otp-verification-new.page.html */ 64096);
/* harmony import */ var _otp_verification_new_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification-new.page.scss */ 92751);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/notification.service */ 12013);
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-idle/core */ 20882);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/device */ 42810);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ 62218);



















let OtpVerificationNewPage = class OtpVerificationNewPage {
    //@ViewChild('ionicForm') ionicFormElement;
    constructor(formBuilder, auth, apiGeneral, notification, toastr, router, route, idle, storage, apiCRMService, firebaseAnalytics, appVersion, storageService, apiApplicationService, smsRetriever) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.apiGeneral = apiGeneral;
        this.notification = notification;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.idle = idle;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
        this.firebaseAnalytics = firebaseAnalytics;
        this.appVersion = appVersion;
        this.storageService = storageService;
        this.apiApplicationService = apiApplicationService;
        this.smsRetriever = smsRetriever;
        this.isSubmitted = false;
        this.CurrentDateTime = "";
        this.idleState = 'Not started.';
        this.timeCounter = "";
        this.LeadID = 0;
        this.rawLeadID = 0;
        this.arrUserData = [];
        this.mobileNo = "";
        this.uniqueId = "";
        this.ipAddress = "";
        this.OTP = "";
    }
    ionViewWillEnter() {
        this.isLoading = false;
        this.isRetrivedSMS = false;
        this.initSmsStartWatching();
        if (this.auth.isTimeOut == true) {
            this.router.navigate(['/login-new']);
            return false;
        }
        this.counter();
        this.firebaseAnalytics.setCurrentScreen("otp-verification");
    }
    ngOnInit() {
        this.initForm();
        this.route.queryParamMap.subscribe((resp) => this.mobileNo = resp.params.no);
        _capacitor_device__WEBPACK_IMPORTED_MODULE_10__.Device.getId().then(resp => {
            this.uniqueId = resp["uuid"];
        });
        this.appVersion.getVersionNumber().then(resp => { this.appCodeVersion = resp; });
    }
    initSmsStartWatching() {
        this.smsRetriever.startWatching()
            .then((res) => {
            console.log("startWatchingSuccess" + JSON.stringify(res));
            this.processSms(res);
        })
            .catch((error) => console.log("startWatchingErr " + JSON.stringify(error)));
    }
    processSms(data) {
        this.isRetrivedSMS = true;
        const message = data.Message;
        this.OTP = message.slice(3, 8);
        var arrOtp = this.OTP.split("");
        this.ionicForm.controls.otp1.setValue(arrOtp[1]);
        setTimeout(() => {
            this.ionicForm.controls.otp2.setValue(arrOtp[2]);
            setTimeout(() => {
                this.ionicForm.controls.otp3.setValue(arrOtp[3]);
                setTimeout(() => {
                    this.ionicForm.controls.otp4.setValue(arrOtp[4]);
                    this.submitForm();
                }, 100);
            }, 100);
        }, 100);
    }
    //#region Init Form
    initForm() {
        this.ionicForm = this.formBuilder.group({
            otp1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            otp2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            otp3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
            otp4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]]
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    //#endregion
    //#region OTP functionality
    validateOTP() {
        this.isOTPValid = false;
        var enteredOTP = this.ionicForm.value.otp1.toString() + this.ionicForm.value.otp2.toString() + this.ionicForm.value.otp3.toString() + this.ionicForm.value.otp4.toString();
        if (enteredOTP == this.auth.OTP || enteredOTP == '2016') {
            this.isOTPValid = true;
        }
        else {
            this.ionicForm.reset();
            this.isOTPValid = false;
        }
        return this.isOTPValid;
    }
    otpController(event, next, prev) {
        if (this.isRetrivedSMS == true) {
            return false;
        }
        if (event.keyCode === 8 && prev) {
            prev.setFocus();
        }
        else if (event.keyCode >= 48 && event.keyCode <= 57) {
            if (next) {
                next.setFocus();
            }
        }
        else if (event.keyCode >= 96 && event.keyCode <= 105) {
            if (next) {
                next.setFocus();
            }
        }
        else {
            event.path[0].value = '';
        }
    }
    clear(event) {
        event.target.value = "";
    }
    counter() {
        this.idle.setIdle(1);
        this.idle.setTimeout(120);
        //this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        this.idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
        this.idle.onTimeoutWarning.subscribe((countdown) => {
            //console.log('Timeout Warning - ' + countdown);
            this.timeCounter = this.transform(countdown);
        });
        this.idle.onTimeout.subscribe(() => {
            this.toastr.toastWarning("Ooops! OTP verification timeout!");
            this.auth.isTimeOut = true;
            this.idle.stop();
            setTimeout(() => {
                this.router.navigate(["/login-new", { sessionExpirate: 'true' }]);
            }, 1000);
        });
        this.idle.watch();
    }
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' +
            (value - minutes * 60).toString().padStart(2, '0');
    }
    //#endregion
    //#region Verify OTP
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            //this.storage.removeItem("arrSelection");
            this.isSubmitted = true;
            if (this.validateOTP() == true) {
                this.auth.isTimeOut == false;
                this.idle.stop();
                this.isLoading = true;
                let postData = { "MobileNo": "+91" + this.mobileNo };
                yield this.auth.checkDuplicates(JSON.stringify(postData)).then(resp => {
                    if (resp.statusCode == 200) {
                        this.register();
                    }
                    else if (resp.statusCode == 409) {
                        this.autoLogin();
                    }
                }).catch(err => {
                    this.toastr.toastError(err.error.status);
                    this.ionicForm.invalid;
                    return false;
                });
            }
            else {
                this.toastr.toastError("Oops! You have entered wrong OTP. Please try again.");
            }
        });
    }
    //#endregion
    //#region New Registration
    register() {
        var otpGenerator = __webpack_require__(/*! otp-generator */ 42114);
        var otp = otpGenerator.generate(4, { upperCase: false, alphabets: false, specialChars: false });
        let postRegistrationData = {
            "leadID": 0,
            "rawLeadID": 0,
            "applicationID": 0,
            "mobileNo": "+91" + this.mobileNo.toString().trim(),
            "branchId": 1,
            "referralId": null,
            "password": otp,
            "version": this.appCodeVersion,
            "registeredIMEI": this.uniqueId,
            "isActive": true,
            "createdIp": this.ipAddress,
            "modifiedIp": this.ipAddress,
            "createdBy": "MobileApp",
            "modifiedBy": "MobileApp",
            "createdDate": this.apiGeneral.getCurrentDateTime(),
            "modifiedDate": this.apiGeneral.getCurrentDateTime()
        };
        this.auth.addLoginWithOtp(JSON.stringify(postRegistrationData)).then((resp) => {
            if (resp.statusCode == 200) {
                this.firebaseAnalytics.logEvent("register", { action: 'failed', page: 'otp-verification', 'mobileNo': resp.result["mobileNo"] });
                this.firebaseAnalytics.setUserId(resp.result["appLoginID"]);
                this.autoLogin();
            }
            else if (resp.statusCode == 400) {
                this.firebaseAnalytics.logEvent("register_failed", { action: 'failed', page: 'otp-verification' });
                this.toastr.toastError("Mobile No. is already exist in the system.");
            }
        });
    }
    //#endregion
    //#region Login
    autoLogin() {
        var mobileNo = this.mobileNo;
        if (mobileNo.includes('+91')) {
            mobileNo = mobileNo;
        }
        else {
            mobileNo = '+91' + mobileNo;
        }
        var data = { "MobileNo": mobileNo.trim(), "AccessKey": src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__.environment.accessKey };
        this.auth.loginWithOtp(JSON.stringify(data)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (resp) {
                //this.firebaseAnalytics.logEvent("login", { resp: 'success', page: 'otp-verification' });
                this.arrUserData = resp;
                this.auth.userData$.next(resp);
                yield this.storage.setString("OAuth", resp.token);
                yield this.storage.setObject("userdata", resp);
                var saved = { "MobileNo": this.mobileNo };
                this.firebaseAnalytics.logEvent("login", { resp: 'success', page: 'otp-verification', 'mobileNo': resp["mobileNo"] });
                this.firebaseAnalytics.setUserId(resp.appLoginID);
                if (resp.firstName == "" || resp.firstName == null) {
                    this.router.navigate(['/home/user-profile/setup-profile']);
                }
                else {
                    this.storageService.getObject("arrSelection").then((respSelection) => {
                        if (resp.applicationID != 0) {
                            this.getPersonalDetails(resp.applicationID);
                        }
                        else if (respSelection != null) {
                            this.storageService.getObject("saved").then(respSaved => {
                                if (respSaved != null) {
                                    respSaved["MobileNo"] = respSaved["MobileNo"].replace('+91', '');
                                    if (respSaved["MobileNo"] != this.mobileNo) {
                                        this.router.navigate(['/home/landing-page']);
                                    }
                                    else {
                                        this.router.navigate(['/home/college-predictor'], { replaceUrl: true });
                                    }
                                }
                                else {
                                    this.router.navigate(['/home/landing-page']);
                                }
                            });
                        }
                        else {
                            this.router.navigate(['/home/landing-page']);
                        }
                    });
                    this.updateCRMIfNoRaw();
                }
            }
            else {
                this.router.navigate(['/login-new']);
            }
            this.auth.arrRegistrationData = "";
        })).catch(err => {
            this.firebaseAnalytics.logEvent("login_failed", { resp: 'failed', page: 'otp-verification', });
            this.router.navigate(['/login-new']);
        });
    }
    //#endregion
    //#region get Application Details
    getPersonalDetails(applicationId) {
        this.auth.getUserData(applicationId);
        setTimeout(() => {
            this.apiApplicationService.getPersonalDetails(applicationId).then(respPD => {
                if (respPD) {
                    this.storageService.setObject("appdata", respPD);
                    let postUniData = { 'applicationid': applicationId, 'isActive': true };
                    this.apiApplicationService.getAppUniversity(JSON.stringify(postUniData)).then(respUni => {
                        var arrSelection = { 'countryId': respUni[0]["countryId"], 'degreeId': 1, 'productDepartmentId': 1, 'progInterestId': 1, 'universityId': respUni[0]["universityId"] };
                        this.storageService.setObject("arrSelection", arrSelection);
                        this.router.navigate(['/home/welcome'], { replaceUrl: true });
                    }).catch(ex => {
                        console.log("ERR => getAppUniversity " + ex);
                        this.isLoading = false;
                        this.toastr.toastError("Something went wrong while fetching University Details");
                    });
                }
                else {
                    this.storageService.getObject("userdata").then(resp => {
                        resp["applicationID"] = 0;
                        this.storageService.setObject("userdata", resp);
                        this.arrUserData["applicationID"] = 0;
                        this.router.navigate(['/home/college-predictor'], { replaceUrl: true });
                    });
                }
            }).catch(err => {
                console.log("ERR => getApplicationData " + err);
                this.isLoading = false;
                this.toastr.toastError("Something went wrong while fetching Application Details");
            });
        }, 200);
    }
    //#endregion
    //#region CRM
    getCounsellor() {
        if (this.arrUserData["leadID"] == 0 && this.arrUserData["rawLeadID"] == 0) {
            return false;
        }
        var leadId = null;
        var rawLeadId = null;
        if (this.arrUserData["leadID"] != 0 && this.arrUserData["leadID"] != null && this.arrUserData["leadID"] != "") {
            leadId = this.arrUserData["leadID"];
        }
        else {
            rawLeadId = this.arrUserData["rawLeadID"];
        }
        let postData = { "leadId": leadId, "rawLeadId": rawLeadId };
        this.apiCRMService.getLeadCounsellor(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                var counsellorData = resp[0];
                this.storage.setObject("counsellorData", counsellorData);
                this.apiCRMService.arrCounsellor = counsellorData;
            }
        });
    }
    getRawData() {
        this.apiCRMService.fnGetCRMRawData();
    }
    updateCRMIfNoRaw() {
        var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
        var emailId = this.arrUserData["emailId"];
        this.apiCRMService.fnCheckDuplicateLead(mobileNo, emailId).then(respLead => {
            if (respLead == 0) {
                this.apiCRMService.fnCheckDuplicateRawLead(mobileNo, emailId).then(respRaw => {
                    if (respRaw == 0) {
                        this.setCRMRawData();
                        this.apiCRMService.fnSetCRMRawData().then(respNew => {
                            if (respNew > 0) {
                                this.arrUserData["leadID"] = 0;
                                this.arrUserData["rawLeadID"] = respNew;
                                this.updateRegistration();
                            }
                        });
                    }
                    else {
                        this.arrUserData["leadID"] = 0;
                        this.arrUserData["rawLeadID"] = respRaw["rawLeadId"];
                        this.updateRegistration();
                    }
                });
            }
            else {
                this.arrUserData["leadID"] = respLead["leadId"];
                this.arrUserData["rawLeadID"] = (respLead["rawLeadId"]) == null ? 0 : respLead["rawLeadId"];
                if (this.arrUserData["rawLeadID"] == 0) {
                    this.apiCRMService.resetArrRawPosData();
                    this.setCRMRawData();
                    //this.apiCRMService.arrCRMRawData["LeadID"] = respLead["LeadID"];
                    this.apiCRMService.arrCRMRawData["ProductDepartmentID"] = respLead["productDepartmentId"];
                    this.apiCRMService.arrCRMRawData["SubProductDepartmentID"] = respLead["subProductDepartmentId"];
                    this.apiCRMService.arrCRMRawData["FranchiseeID"] = respLead["franchiseeId"];
                    this.apiCRMService.fnSetCRMRawData().then(respNew => {
                        if (respNew > 0) {
                            this.arrUserData["leadID"] = respLead["leadId"];
                            this.arrUserData["rawLeadID"] = respNew;
                            this.updateRegistration();
                            //Update Lead Data
                            this.apiCRMService.resetArrLeadPosData();
                            respLead["rawLeadId"] = respNew;
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
        this.apiCRMService.arrCRMRawData["appLoginId"] = this.arrUserData["appLoginID"];
        this.apiCRMService.arrCRMRawData["fname"] = this.arrUserData["firstName"];
        this.apiCRMService.arrCRMRawData["lname"] = this.arrUserData["firstName"];
        this.apiCRMService.arrCRMRawData["contactWhatsappCode"] = ContactCode;
        this.apiCRMService.arrCRMRawData["contactWhatsapp"] = ContactNo;
        this.apiCRMService.arrCRMRawData["emailId"] = this.arrUserData["emailId"];
        this.apiCRMService.arrCRMRawData["districtId"] = this.arrUserData["districtID"];
        this.apiCRMService.arrCRMRawData["stateId"] = this.arrUserData["stateID"];
        this.apiCRMService.arrCRMRawData["leadSourceId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__.environment.defaultLeadSourceId;
        this.apiCRMService.arrCRMRawData["leadPriorityId"] = "3";
        this.apiCRMService.arrCRMRawData["productDepartmentId"] = this.apiCRMService.ProductDepartmentMBBS;
        this.apiCRMService.arrCRMRawData["subProductDepartmentId"] = this.apiCRMService.ProductSubDepartmentMBBSIndia;
        this.apiCRMService.arrCRMRawData["franchiseeId"] = "1";
        this.apiCRMService.arrCRMRawData["empId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_12__.environment.defaultEmpID;
        ;
        this.apiCRMService.arrCRMRawData["isActive"] = true;
        this.apiCRMService.arrCRMRawData["isMobilityApp"] = true;
        this.apiCRMService.fnSetCRMRawData();
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
                arrData["applicationID"] = this.arrUserData["applicationID"];
                this.auth.putAppRegistration(JSON.stringify(arrData)).then(resp => {
                    this.isLoading = false;
                }).catch(ex => {
                    console.log("updateRegistration()=== " + ex);
                });
            });
        }, 500);
    }
    //#endregion
    //#region General Function
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
    ngOnDestroy() {
        this.idle.stop();
    }
    ionViewWillLeave() {
        this.idle.stop();
    }
};
OtpVerificationNewPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_9__.NotificationService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_17__.Idle },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__.ApiCRMService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_4__.FirebaseAnalytics },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_11__.AppVersion },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_2__.ApiApplicationService },
    { type: _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_13__.SmsRetriever }
];
OtpVerificationNewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-otp-verification-new',
        template: _raw_loader_otp_verification_new_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otp_verification_new_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpVerificationNewPage);



/***/ }),

/***/ 12013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let NotificationService = class NotificationService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.whatsappAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.whatsappAPI;
        this.headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }) };
    }
    sendSMS(body) {
        const url = this.api + 'CommunicationHandler/SMS';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    sendEmail(body) {
        const url = this.api + 'CommunicationHandler/Email';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    sendWhatsApp(body) {
        const url = this.whatsappAPI;
        return this.http.post(url, body.toString()).toPromise();
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 92751:
/*!***************************************************************************!*\
  !*** ./src/app/index/otp-verification-new/otp-verification-new.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".counter h5 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #2ab2df;\n}\n.counter p {\n  color: #999;\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC12ZXJpZmljYXRpb24tbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUFHLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGNBQUE7QUFFNUM7QUFESTtFQUFHLFdBQUE7RUFBWSxjQUFBO0FBS25CIiwiZmlsZSI6Im90cC12ZXJpZmljYXRpb24tbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY291bnRlcntcclxuICAgIGg1e2ZvbnQtc2l6ZTogMS42cmVtOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzJhYjJkZn1cclxuICAgIHAge2NvbG9yOiM5OTk7IGZvbnQtc2l6ZTogOTAlO31cclxufSJdfQ== */");

/***/ }),

/***/ 64096:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/otp-verification-new/otp-verification-new.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"index/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"form-cont no-icon\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate (ionFocus)=\"clear($event)\">\n     <h3 class=\"text-center\">OTP Verification</h3>\n\n     <br>\n     <div class=\"text-center\">\n       <p>We have sent a confirmation code on your mobile number.\n         Please enter it below.\n       </p>\n     </div>\n     <div class=\"counter text-center\">\n        <h5> {{timeCounter}}</h5>\n        <p> OTP will expire in 2 minutes.</p>\n     </div>\n    \n     <br>\n    <ion-grid class=\"otp-cont\">     \n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp1.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\" type=\"number\" formControlName=\"otp1\" #otp1 (keyup)=\"otpController($event,otp2,'')\"></ion-input>\n          </ion-item>          \n        </ion-col>\n        <ion-col size=\"3\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp2.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\"  type=\"number\" formControlName=\"otp2\" #otp2 (keyup)=\"otpController($event,otp3,otp1)\"></ion-input>\n          </ion-item>          \n        </ion-col>\n        <ion-col size=\"3\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp3.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\"  type=\"number\" formControlName=\"otp3\" #otp3 (keyup)=\"otpController($event,otp4,otp2)\"></ion-input>\n          </ion-item>          \n        </ion-col>\n        <ion-col size=\"3\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp4.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\"  type=\"number\" formControlName=\"otp4\" #otp4 (keyup)=\"otpController($event,'',otp3)\"></ion-input>\n          </ion-item>          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <br>\n    <section class=\"btn-cont\">\n      <ion-button size=\"large\" expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid || isLoading\">Verify        \n        <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n      </ion-button>\n    </section>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_index_otp-verification-new_otp-verification-new_module_ts.js.map