(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_register_register_module_ts-src_app_services_header-title_service_ts"],{

/***/ 76988:
/*!***********************************************************!*\
  !*** ./src/app/index/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 12985);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 92529:
/*!***************************************************!*\
  !*** ./src/app/index/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-routing.module */ 76988);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page */ 12985);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_2__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 12985:
/*!*************************************************!*\
  !*** ./src/app/index/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 60978);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 90718);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api-general.service */ 7110);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ 12013);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/device */ 42810);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_device_accounts_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device-accounts/ngx */ 7041);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);


















let RegisterPage = class RegisterPage {
    constructor(formBuilder, auth, toastr, loader, notification, router, apiCRMService, apiGeneral, appVersion, deviceAccounts, alertController, firebaseAnalytics) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.loader = loader;
        this.notification = notification;
        this.router = router;
        this.apiCRMService = apiCRMService;
        this.apiGeneral = apiGeneral;
        this.appVersion = appVersion;
        this.deviceAccounts = deviceAccounts;
        this.alertController = alertController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.isSubmitted = false;
        this.isDuplicate = false;
        this.CurrentDateTime = "";
        this.LeadID = 0;
        this.postData = {};
        this.arrResCountry = [];
        this.arrResState = [];
        this.arrResCity = [];
        this.countryId = 0;
        this.ipAddress = "";
        this.passwordType = "password";
        this.passwordIcon = "eye-outline";
        this.isPwVisible = false;
        this.arrRawExistingData = "";
        this.arrReferral = [];
        this.uniqueId = "";
        this.arrCRMLeadSource = [];
        this.isEmailRead = true;
        this.CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
    }
    ionViewWillEnter() {
        this.auth.isTimeOut == false;
        this.firebaseAnalytics.setCurrentScreen("Register");
    }
    ngOnInit() {
        this.auth.isTimeOut == false;
        this.initForm();
        //this.getgeolocationCountry();
        this.getIpAddress();
        this.getCRMLeadSource();
        _capacitor_device__WEBPACK_IMPORTED_MODULE_8__.Device.getId().then(resp => {
            this.uniqueId = resp["uuid"];
        });
        this.appVersion.getVersionNumber().then(resp => { this.appCodeVersion = resp; });
    }
    //#region  Country, State, City
    getResCountry() {
        let postData = { "countryID": 102, "IsActive": true };
        this.apiGeneral.getResCountry(JSON.stringify(postData)).then(resp => {
            this.arrResCountry = resp;
        }).catch(err => {
            console.log("getResCountry: " + err);
        });
    }
    getResState($event, _countryID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let countryID = ($event == "") ? _countryID : $event.target.value;
            let postData = { "IsActive": true, "countryID": countryID };
            yield this.apiGeneral.getResState(JSON.stringify(postData)).then(resp => {
                this.arrResState = resp;
            }).catch(err => {
                console.log("getResState: " + err);
            });
        });
    }
    getResCity($event, _stateID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let stateID = ($event == "") ? _stateID : $event.target.value;
            let postData = { "IsActive": true, "stateID": stateID };
            yield this.apiGeneral.getResCity(JSON.stringify(postData)).then(resp => {
                this.arrResCity = resp;
            }).catch(err => {
                console.log("getResCity: " + err);
            });
        });
    }
    getgeolocationCountry() {
        this.apiGeneral.getGeolocation().then(resp => {
            console.log(resp);
            if (resp.country_code2 == "IN") {
                this.isIndia = true;
                this.getResState("", 102);
                this.countryId = 102;
            }
            else {
                this.countryId = 0;
                this.isIndia = false;
                this.getResCountry();
            }
        });
    }
    //#endregion
    //#region Get Emails from device
    onClickEmail() {
        if (this.ionicForm.value.EmailID == "" && this.isEmailRead == true) {
            this.getDeviceAccount();
        }
    }
    getDeviceAccount() {
        this.deviceAccounts.get().then(respGet => {
            if (respGet) {
                if (respGet.length > 1) {
                    var obj = [];
                    var index = 0;
                    respGet.forEach(el => {
                        index++;
                        obj.push({ 'name': 'radio' + index, 'type': 'radio', 'label': el["name"], 'value': el["name"] });
                    });
                    this.presentAlertRadio(obj);
                }
                else {
                    this.deviceAccounts.getPermissions().then(respPerm => {
                        this.deviceAccounts.get().then(respGet2 => {
                            console.log("Selected Email: " + respGet2[0]["name"]);
                            this.ionicForm.controls.EmailID.setValue(respGet2[0]["name"]);
                        });
                    });
                }
            }
        });
    }
    presentAlertRadio(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                inputs: obj,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.isEmailRead = false;
                        }
                    }, {
                        text: 'Ok',
                        handler: (res) => {
                            console.log("Selected Email: " + res);
                            this.ionicForm.controls.EmailID.setValue(res);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //#endregion
    //#region getSimIfno
    /*
    getSimInfo() {
      this.sim.hasReadPermission().then((respHasPerm) => {
        console.log("hasReadPermission: " + respHasPerm)
        if (respHasPerm == false) {
          this.sim.requestReadPermission().then(
            () => {
              console.log('Permission granted');
              this.sim.getSimInfo().then(
                (info) => console.log('Sim info: ', info),
                (err) => console.log('Unable to get sim info: ', err)
              );
            },
            () => console.log('Permission denied')
          );
        }
        else {
          this.sim.getSimInfo().then(
            (info) => console.log('Sim info: ', info),
            (err) => console.log('Unable to get sim info: ', err)
          );
        }
      });
    }*/
    //#endregion
    initForm() {
        this.ionicForm = this.formBuilder.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(50)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(50)]],
            EmailID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('^([0-9]{10})$')]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(18)]],
            //RePassword: ['', [Validators.required]],
            //IsAgree: [null, [Validators.required]],
            // countryID: [''],
            // stateID: ['', [Validators.required]],
            // districtID: ['', [Validators.required]],
            referralCode: [''],
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    setRegistration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.postData = {
                "leadID": 0,
                "rawLeadID": 0,
                "applicationID": 0,
                "firstName": this.ionicForm.value.FirstName.toString().trim(),
                "lastName": this.ionicForm.value.LastName.toString().trim(),
                "emailID": this.ionicForm.value.EmailID.toString().trim(),
                // "countryID": this.countryId,
                // "stateID": (this.ionicForm.value.stateID == "") ? null : this.ionicForm.value.stateID,
                // "districtID": (this.ionicForm.value.districtID == "") ? null : this.ionicForm.value.districtID,
                "password": this.ionicForm.value.Password.toString().trim(),
                "mobileNo": "+91" + this.ionicForm.value.MobileNo.toString().trim(),
                "branchId": 1,
                "referralId": null,
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
            yield this.updateCRMIfNoRaw();
            var otpGenerator = __webpack_require__(/*! otp-generator */ 42114);
            var otp = otpGenerator.generate(4, { upperCase: false, alphabets: false, specialChars: false });
            console.log(otp);
            this.auth.OTP = otp; // set in service
            var messageBody = "Hi, " + otp + " is One Time Password (OTP) for MOKSH registration. Please enter the OTP to continue registration.";
            var subject = "MOKSH Registration - One Time Password (OTP)";
            let postSmsData = { "MobileNo": this.ionicForm.value.MobileNo.toString(), "MessageBody": messageBody };
            this.sendSMS(postSmsData);
            var emailmessageBody = "Hi, \n\n Your One Time Password is " + otp + " to register for the MOKSH Career Planner App . Please enter this OTP and complete the registration process in the Mobile App. \n\n Hope you enjoy using this passionately created mobile app:)";
            this.sendEmail(subject, emailmessageBody, this.ionicForm.value.EmailID.toString());
            this.auth.arrRegistrationData = JSON.stringify(this.postData);
            this.firebaseAnalytics.logEvent("register", { action: 'started', page: 'register' });
            this.router.navigate(['/otp-verification']);
            this.isLoading = false;
            setTimeout(() => {
                console.log("Reg Data : " + JSON.stringify(this.postData));
            }, 3000);
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                this.resetData();
                let postData = { "EmailID": this.ionicForm.value.EmailID, "MobileNo": "+91" + this.ionicForm.value.MobileNo };
                yield this.auth.checkDuplicates(JSON.stringify(postData)).then(resp => {
                    if (resp.statusCode == 200) {
                        if (this.ionicForm.value.referralCode != "") {
                            this.getReferrral();
                        }
                        else {
                            this.setRegistration();
                        }
                        this.isLoading = false;
                    }
                    else if (resp.statusCode == 409) {
                        this.toastr.toastError(resp.status);
                        this.isLoading = false;
                        this.ionicForm.invalid;
                        return false;
                    }
                }).catch(err => {
                    this.toastr.toastError(err.error.status);
                    this.sendEmail("Career Planner => Error = > Registration", JSON.stringify(err), "xeraedtech@gmail.com");
                    this.ionicForm.invalid;
                    this.isLoading = false;
                    return false;
                });
            }
        });
    }
    //#region Email SMS
    sendSMS(postData) {
        this.notification.sendSMS(JSON.stringify(postData)).then(resp => {
            console.log(resp.status);
            this.toastr.toastSuccess("OTP Sent Successfully!");
            this.auth.isTimeOut = false;
            this.router.navigate(['/otp-verification']);
        })
            .catch(err => {
            console.log(err.title);
            this.toastr.toastError("OTP not sent due to some technical problem. Please try after some time");
        });
    }
    sendEmail(subject, messageBody, emailId) {
        let postData = { "Subject": subject, "MessageBody": messageBody, "ToAddress": emailId };
        this.notification.sendEmail(JSON.stringify(postData)).then(resp => {
            console.log(resp.status);
            //this.toastr.toastSuccess("OTP sent successfully!");
            this.auth.isTimeOut = false;
            this.router.navigate(['/otp-verification']);
        })
            .catch(err => {
            console.log(err.title);
            this.toastr.toastError("Email not sent due to some technical problem. Please try after some time");
        });
    }
    //#endregion
    getReferrral() {
        let postData = { "referralCode": this.ionicForm.value.referralCode };
        this.auth.getReferral(JSON.stringify(postData)).then(resp => {
            this.setRegistration();
            this.arrReferral = resp;
            console.log(this.arrReferral);
            if (resp.length > 0) {
                if (this.arrReferral[0]["referenceType"] == "Student") {
                    this.postData["referralId"] = this.arrReferral[0]["referralId"];
                }
                if (this.arrReferral[0]["referenceType"] == "Branch" || this.arrReferral[0]["referenceType"] == "Associates") {
                    this.postData["branchId"] = this.arrReferral[0]["branchId"];
                }
            }
        }).catch(err => {
            console.log("getReferrral: " + err);
        });
    }
    resetData() {
        this.apiCRMService.resetArrRawPosData();
        this.apiCRMService.resetArrLeadPosData();
    }
    //#region CRM 
    setCRMRawData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var arrPostdata = this.apiCRMService.arrCRMRawData;
            arrPostdata["rawLeadId"] = 0;
            arrPostdata["fname"] = this.ionicForm.value.FirstName.toString().trim();
            arrPostdata["lname"] = this.ionicForm.value.LastName.toString().trim();
            arrPostdata["contactWhatsappCode"] = "91";
            arrPostdata["contactWhatsapp"] = this.ionicForm.value.MobileNo.toString().trim();
            arrPostdata["contactOtherCode"] = "91";
            arrPostdata["contactOther"] = this.ionicForm.value.MobileNo.toString().trim();
            arrPostdata["emailId"] = this.ionicForm.value.EmailID.toString().trim();
            //arrPostdata["DistrictID"] = this.ionicForm.value.districtID;
            //arrPostdata["StateID"] = this.ionicForm.value.stateID;
            arrPostdata["leadSourceId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.defaultLeadSourceId;
            arrPostdata["leadPriorityId"] = "3";
            arrPostdata["productDepartmentId"] = this.apiCRMService.ProductDepartmentMBBS;
            arrPostdata["subProductDepartmentId"] = this.apiCRMService.ProductSubDepartmentMBBSIndia;
            arrPostdata["franchiseeId"] = "1";
            if (this.arrReferral.length > 0) {
                if (this.arrReferral[0]["referenceType"] == "Branch") {
                    arrPostdata["franchiseeId"] = this.arrReferral[0]["branchId"];
                }
                if (this.arrReferral[0]["referenceType"] == "Associates") {
                    arrPostdata["empId"] = this.arrReferral[0]["empID"];
                    arrPostdata["franchiseeId"] = this.arrReferral[0]["branchId"];
                }
            }
            arrPostdata["createdBy"] = "MobileApp";
            arrPostdata["createdDate"] = this.apiGeneral.getCurrentDateTime();
            arrPostdata["modifiedBy"] = "MobileApp";
            arrPostdata["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
            arrPostdata["createdIp"] = this.ipAddress;
            arrPostdata["modifiedIp"] = this.ipAddress;
            arrPostdata["isActive"] = true;
            arrPostdata["isMobilityApp"] = true;
            yield this.apiCRMService.setCRMRawData(JSON.stringify(arrPostdata)).then(resp => {
                if (resp.statusCode == 200) {
                    var arrData = resp.result;
                    this.postData["rawLeadID"] = (arrData["rawLeadId"] == undefined) ? 0 : parseInt(arrData["rawLeadId"]);
                    this.postData["leadID"] = (arrData["leadId"] == undefined) ? 0 : parseInt(arrData["leadId"]);
                    if (this.arrReferral.length > 0) {
                        this.postData["branchId"] = this.arrReferral[0]["branchId"];
                        this.postData["referralId"] = this.arrReferral[0]["referralId"];
                    }
                    this.auth.arrRegistrationData = JSON.stringify(this.postData); // set in service
                }
            }).catch(ex => {
                console.log(ex);
                this.toastr.toastError("Sorry! Unable to process your request. We are working on it. Please try after sometime");
                this.loader.loadingDismiss();
                this.isLoading = false;
            });
        });
    }
    updateCRMIfNoRaw() {
        var mobileNo = this.postData["mobileNo"].replace('+91', '');
        var emailId = this.postData["emailID"];
        this.apiCRMService.fnCheckDuplicateLead(mobileNo, emailId).then(respLead => {
            console.log("lead: " + respLead);
            if (respLead == 0) {
                this.apiCRMService.fnCheckDuplicateRawLead(mobileNo, emailId).then(respRaw => {
                    console.log("raw: " + respRaw);
                    if (respRaw != 0) {
                        this.postData["leadID"] = 0;
                        this.postData["rawLeadID"] = respRaw["rawLeadId"];
                        this.postData["branchId"] = respRaw["franchiseeId"];
                        var leadSource = (this.arrCRMLeadSource.filter(x => x.LeadSourceID == respRaw["leadSourceId"]))[0]["LeadSource"];
                        if (leadSource == 'MOKSH Mobility App') {
                            leadSource = 'MobileApp';
                        }
                        this.postData["createdBy"] = leadSource;
                        this.postData["modifiedBy"] = leadSource;
                        this.auth.arrRegistrationData = JSON.stringify(this.postData);
                        this.updateCRMRawData(respRaw["rawLeadId"]);
                    }
                    else {
                        this.setCRMRawData();
                    }
                });
            }
            else {
                this.postData["leadID"] = respLead["leadId"];
                this.postData["branchId"] = respLead["franchiseeId"];
                this.postData["rawLeadID"] = (respLead["rawLeadId"]) == null ? 0 : respLead["rawLeadId"];
                var leadSource = (this.arrCRMLeadSource.filter(x => x.LeadSourceID == respLead["leadSourceId"]))[0]["LeadSource"];
                if (leadSource == 'MOKSH Mobility App') {
                    leadSource = 'MobileApp';
                }
                this.postData["createdBy"] = leadSource;
                this.postData["modifiedBy"] = leadSource;
                this.auth.arrRegistrationData = JSON.stringify(this.postData);
                if (this.postData["rawLeadID"] != 0) {
                    this.updateCRMRawData(this.postData["rawLeadID"]);
                }
            }
        });
    }
    updateCRMRawData(rawLeadID) {
        this.apiCRMService.fnGetCRMRawData(rawLeadID).then(resp => {
            if (resp == true) {
                if (this.arrReferral.length > 0 && this.postData["leadID"] == 0 && this.arrReferral[0]["referenceType"] == "Branch") {
                    this.apiCRMService.arrCRMRawData["franchiseeId"] = this.arrReferral[0]["branchId"];
                    this.postData["branchId"] = this.arrReferral[0]["branchId"];
                }
                if (this.arrReferral.length > 0 && this.postData["leadID"] == 0 && this.arrReferral[0]["referenceType"] == "Associates") {
                    this.apiCRMService.arrCRMRawData["empId"] = this.arrReferral[0]["empID"];
                    this.apiCRMService.arrCRMRawData["franchiseeId"] = this.arrReferral[0]["branchId"];
                    this.postData["branchId"] = this.arrReferral[0]["branchId"];
                }
                this.apiCRMService.arrCRMRawData["isMobilityApp"] = true;
                this.apiCRMService.arrCRMRawData["emailId"] = this.postData["emailID"];
                //this.apiCRMService.arrCRMRawData["StateID"] = this.postData["stateID"];
                //this.apiCRMService.arrCRMRawData["DistrictID"] = this.postData["districtID"];
                this.apiCRMService.fnSetCRMRawData();
            }
        });
    }
    getCRMLeadSource() {
        let postData = { 'LeadSourceID': '', 'franchiseeID': '1' };
        this.apiCRMService.getLeadSource(JSON.stringify(postData)).then(resp => {
            resp = JSON.parse(resp.d);
            if (resp.length > 0) {
                this.arrCRMLeadSource = resp;
            }
        });
    }
    //#endregion
    onClickPassword() {
        this.isPwVisible = !this.isPwVisible;
        this.passwordType = (this.isPwVisible == true) ? "text" : "password";
        this.passwordIcon = (this.isPwVisible == true) ? "eye-off-outline" : "eye-outline";
    }
    //#region General FUnction
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__.ApiCRMService },
    { type: _services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__.AppVersion },
    { type: _ionic_native_device_accounts_ngx__WEBPACK_IMPORTED_MODULE_11__.DeviceAccounts },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_12__.FirebaseAnalytics }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



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

/***/ 90718:
/*!***************************************************!*\
  !*** ./src/app/index/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 60978:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"index/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"pb-0\">\r\n  <form class=\"form-cont\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n     <h4 class=\"text-center mb-0\">Setup your Profile</h4>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">First Name <ion-text color=\"primary\">*</ion-text></ion-label>            \r\n            <ion-input maxlength=\"50\"  name=\"username\" type=\"text\" formControlName=\"FirstName\" required></ion-input>            \r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.minlength\">Valid First Name Required</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.maxlength\">Valid First Name Required</span>          \r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Last Name <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"50\"  name=\"username\" type=\"text\" formControlName=\"LastName\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.minlength\">Valid Last Name Required</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.maxlength\">Valid First Name Required</span>          \r\n        </ion-col>\r\n      </ion-row>     \r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"call-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Mobile No. <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"12\"  name=\"username\" type=\"number\" formControlName=\"MobileNo\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please provide valid Mobile No.</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"mail-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Email ID (For Scholarship Aspirants) <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"60\"  name=\"username\" type=\"email\" formControlName=\"EmailID\" (ionFocus)=\"onClickEmail()\" ></ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.pattern\">Please provide valid Email ID</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!--\r\n      <ion-row *ngIf=\"!isIndia\">\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.countryID.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Country <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-select formControlName=\"countryID\" interface=\"action-sheet\" (ionChange)=\"getResState($event,'')\">\r\n              <ion-select-option [value]=\"val.countryId\" *ngFor=\"let val of arrResCountry\">{{val.countryName}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>          \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.stateID.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">State <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-select formControlName=\"stateID\" interface=\"action-sheet\" (ionChange)=\"getResCity($event,'')\">\r\n              <ion-select-option [value]=\"val.stateId\" *ngFor=\"let val of arrResState\">{{val.stateName}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>          \r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.districtID.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"location-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">City <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-select formControlName=\"districtID\" interface=\"action-sheet\">\r\n              <ion-select-option [value]=\"val.districtId\" *ngFor=\"let val of arrResCity\">{{val.districtName}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>          \r\n        </ion-col>\r\n      </ion-row>  \r\n      -->    \r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.Password.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Password <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"18\"  name=\"username\" type=\"{{passwordType}}\" required formControlName=\"Password\"></ion-input>\r\n            <ion-icon name=\"{{passwordIcon}}\" class=\"icon-right\" (click)=\"onClickPassword()\"></ion-icon>\r\n            \r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.Password.errors?.minlength\">Please Enter Valid Password</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.Password.errors?.maxlength\">Please Enter Valid Password</span>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"12\">          \r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"gift-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Referral Code </ion-label>\r\n            <ion-input maxlength=\"50\"  name=\"referralCode\" type=\"text\" formControlName=\"referralCode\"></ion-input>\r\n          </ion-item>\r\n          \r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.RePassword.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Re-Enter Password</ion-label>\r\n            <ion-input maxlength=\"18\"  name=\"username\" type=\"password\" formControlName=\"RePassword\" required></ion-input>\r\n          </ion-item>\r\n         \r\n        <span class=\"error\" *ngIf=\"errorControl.RePassword.errors?.mustMatch\">Password must match</span>\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item class=\"ion-no-padding item-checkbox\" lines=\"none\">            \r\n            <ion-checkbox slot=\"start\" formControlName=\"IsAgree\" required></ion-checkbox>\r\n            <ion-label>I agree to the terms and conditions</ion-label>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.IsAgree.errors?.required\">Please agree to the Terms & Conditions</span>\r\n        </ion-col>\r\n      </ion-row>   -->   \r\n    </ion-grid>\r\n    <section class=\"btn-cont mb-0\">\r\n      <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid || isLoading\">Register        \r\n        <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n      </ion-button>      \r\n    </section>\r\n  </form>  \r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_index_register_register_module_ts-src_app_services_header-title_service_ts.js.map