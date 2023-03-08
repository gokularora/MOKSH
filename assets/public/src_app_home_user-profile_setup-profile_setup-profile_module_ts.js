(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_user-profile_setup-profile_setup-profile_module_ts"],{

/***/ 99615:
/*!*********************************************************************************!*\
  !*** ./src/app/home/user-profile/setup-profile/setup-profile-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupProfilePageRoutingModule": () => (/* binding */ SetupProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _setup_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup-profile.page */ 34470);




const routes = [
    {
        path: '',
        component: _setup_profile_page__WEBPACK_IMPORTED_MODULE_0__.SetupProfilePage
    }
];
let SetupProfilePageRoutingModule = class SetupProfilePageRoutingModule {
};
SetupProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetupProfilePageRoutingModule);



/***/ }),

/***/ 12667:
/*!*************************************************************************!*\
  !*** ./src/app/home/user-profile/setup-profile/setup-profile.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupProfilePageModule": () => (/* binding */ SetupProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _setup_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-profile-routing.module */ 99615);
/* harmony import */ var _setup_profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup-profile.page */ 34470);








let SetupProfilePageModule = class SetupProfilePageModule {
};
SetupProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _setup_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.SetupProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_setup_profile_page__WEBPACK_IMPORTED_MODULE_2__.SetupProfilePage]
    })
], SetupProfilePageModule);



/***/ }),

/***/ 34470:
/*!***********************************************************************!*\
  !*** ./src/app/home/user-profile/setup-profile/setup-profile.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupProfilePage": () => (/* binding */ SetupProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setup_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setup-profile.page.html */ 8205);
/* harmony import */ var _setup_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-profile.page.scss */ 58358);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../home.page */ 62267);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/device */ 42810);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_device_accounts_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/device-accounts/ngx */ 7041);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);



















let SetupProfilePage = class SetupProfilePage {
    constructor(formBuilder, auth, toastr, loader, router, apiCRMService, apiGeneral, appVersion, deviceAccounts, alertController, firebaseAnalytics, storageService, homePage) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.loader = loader;
        this.router = router;
        this.apiCRMService = apiCRMService;
        this.apiGeneral = apiGeneral;
        this.appVersion = appVersion;
        this.deviceAccounts = deviceAccounts;
        this.alertController = alertController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.storageService = storageService;
        this.homePage = homePage;
        this.isSubmitted = false;
        this.isDuplicate = false;
        this.CurrentDateTime = "";
        this.LeadID = 0;
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
        this.arrRegData = [];
        this.CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.setCurrentScreen("Setup-Profile");
    }
    ngOnInit() {
        this.initForm();
        this.getUserData();
        this.getAppRegistration();
        //this.getgeolocationCountry();
        this.getIpAddress();
        this.getCRMLeadSource();
        _capacitor_device__WEBPACK_IMPORTED_MODULE_9__.Device.getId().then(resp => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
    //#region Get Email Accounts from device
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
    //#region init Form
    initForm() {
        this.ionicForm = this.formBuilder.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(50)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(50)]],
            EmailID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            referralCode: ['']
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    //#endregion
    getUserData() {
        this.storageService.getObject("userdata").then(resp => {
            this.arrUserData = resp;
        });
    }
    //#region getAppLogin
    getAppRegistration() {
        this.auth.getAppRegistration().then(resp => {
            this.arrRegData = resp;
        }).catch(err => {
            this.toastr.toastError("Unable to fetch registration details");
            console.log("ERR => getLoginID() => " + err);
        });
    }
    //#endregion
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                return false;
            }
            else {
                this.resetData();
                this.arrRegData["firstName"] = this.ionicForm.value.FirstName.toString().trim();
                this.arrRegData["lastName"] = this.ionicForm.value.LastName.toString().trim();
                this.arrRegData["emailID"] = this.ionicForm.value.EmailID.toString().trim();
                if (this.ionicForm.value.referralCode != "") {
                    this.getReferrral();
                }
                else {
                    this.updateAppRegistration(true);
                    this.updateCRMIfNoRaw();
                }
            }
        });
    }
    //#region Update App Login
    updateAppRegistration(isRedirect) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.auth.putAppRegistration(JSON.stringify(this.arrRegData)).then(resp => {
                this.arrUserData["emailId"] = this.arrRegData["emailID"];
                this.arrUserData["firstName"] = this.arrRegData["firstName"];
                this.arrUserData["lastName"] = this.arrRegData["lastName"];
                this.arrUserData["leadID"] = this.arrRegData["leadID"];
                this.arrUserData["rawLeadID"] = this.arrRegData["rawLeadID"];
                this.storageService.setObject("userdata", this.arrUserData);
                this.firebaseAnalytics.logEvent("setup_profile", { resp: 'success', page: 'setup-profile', 'mobileNo': this.arrRegData["mobileNo"] });
                this.homePage.getUserData();
                if (isRedirect == true) {
                    setTimeout(() => {
                        this.isLoading = false;
                        this.router.navigate(['/home/landing-page']);
                    }, 1500);
                }
                else {
                    if (this.arrRegData["rawLeadID"] != null && this.arrRegData["rawLeadID"] != 0 && this.arrRegData["rawLeadID"] != '') {
                        this.getCounsellor();
                    }
                }
            }).catch(ex => {
                this.isLoading = false;
                console.log("updateRegistration()=== " + ex);
                this.firebaseAnalytics.logEvent("setup_profile", { resp: 'failed', page: 'setup-profile' });
            });
        });
    }
    getReferrral() {
        let postData = { "referralCode": this.ionicForm.value.referralCode };
        this.auth.getReferral(JSON.stringify(postData)).then(resp => {
            this.arrReferral = resp;
            if (resp.length > 0) {
                this.arrRegData["referralID"] = this.arrReferral[0]["referralId"];
                if (this.arrReferral[0]["referenceType"] == "Branch" || this.arrReferral[0]["referenceType"] == "Associates") {
                    this.arrRegData["branchID"] = this.arrReferral[0]["branchId"];
                }
            }
            this.updateCRMIfNoRaw();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var mobileNo = this.arrRegData["mobileNo"].replace('+91', '');
            var arrPostdata = {};
            if (this.apiGeneral.objEnviroment["isCampaignLive"] == true) {
                arrPostdata = Object.assign({}, this.apiCRMService.arrCRMLeadData);
                arrPostdata["emailid1"] = this.ionicForm.value.EmailID.toString().trim();
                arrPostdata["sysLeadPriorityID"] = this.apiCRMService.enumPriority.Warm;
                arrPostdata["sysLeadPriorityDate"] = this.apiGeneral.getCurrentDateTime();
            }
            else {
                arrPostdata = Object.assign({}, this.apiCRMService.arrCRMRawData);
                arrPostdata["emailid"] = this.ionicForm.value.EmailID.toString().trim();
            }
            arrPostdata["rawLeadId"] = this.apiCRMService.arrCRMLeadData.rawLeadID;
            arrPostdata["fname"] = this.ionicForm.value.FirstName.toString().trim();
            arrPostdata["lname"] = this.ionicForm.value.LastName.toString().trim();
            arrPostdata["contactWhatsappCode"] = "91";
            arrPostdata["contactWhatsapp"] = mobileNo.toString().trim();
            arrPostdata["contactOtherCode"] = "91";
            arrPostdata["contactOther"] = mobileNo.toString().trim();
            arrPostdata["leadSourceId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__.environment.defaultLeadSourceId;
            arrPostdata["leadPriorityId"] = this.apiCRMService.enumPriority.Warm;
            arrPostdata["productDepartmentId"] = this.apiCRMService.ProductDepartmentMBBS;
            arrPostdata["subProductDepartmentId"] = this.apiCRMService.ProductSubDepartmentMBBSIndia;
            arrPostdata["sysProductDepartmentID"] = this.apiCRMService.ProductDepartmentMBBS;
            arrPostdata["sysSubProductDepartmentID"] = this.apiCRMService.ProductSubDepartmentMBBSIndia;
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
            arrPostdata["appLoginID"] = this.arrRegData["appLoginID"];
            arrPostdata["createdBy"] = "MobileApp";
            arrPostdata["createdDate"] = this.apiGeneral.getCurrentDateTime();
            arrPostdata["modifiedBy"] = "MobileApp";
            arrPostdata["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
            arrPostdata["createdIp"] = this.ipAddress;
            arrPostdata["modifiedIp"] = this.ipAddress;
            arrPostdata["isActive"] = true;
            arrPostdata["isMobilityApp"] = true;
            if (this.apiGeneral.objEnviroment["isCampaignLive"] == true) {
                this.apiCRMService.arrCRMLeadData = Object.assign({}, arrPostdata);
                this.apiCRMService.fnSetCRMLeadData().then((arrLeadData) => {
                    if (arrLeadData != 0) {
                        this.arrRegData["leadID"] = arrLeadData["leadId"];
                        this.arrRegData["rawLeadID"] = arrLeadData["rawLeadId"];
                        this.updateAppRegistration(false);
                    }
                });
            }
            else {
                yield this.apiCRMService.setCRMRawData(JSON.stringify(arrPostdata)).then(resp => {
                    if (resp.statusCode == 200 || resp.statusCode == 409) {
                        var arrData = resp.result;
                        this.arrRegData["rawLeadID"] = (arrData["rawLeadId"] == undefined) ? 0 : parseInt(arrData["rawLeadId"]);
                        this.updateAppRegistration(false);
                        if (this.arrRegData["leadID"] != 0) {
                            this.updateCRMLeadData(this.arrRegData["leadID"], this.arrRegData["rawLeadID"]);
                        }
                    }
                    else {
                    }
                }).catch(ex => {
                    this.updateAppRegistration(false);
                    console.log(ex);
                    this.toastr.toastError("Something went wrong while saving lead");
                    this.loader.loadingDismiss();
                    this.isLoading = false;
                });
            }
        });
    }
    updateCRMIfNoRaw() {
        var mobileNo = this.arrRegData["mobileNo"].replace('+91', '');
        var emailId = this.arrRegData["emailID"];
        this.apiCRMService.fnCheckDuplicateLead(mobileNo, emailId).then(respLead => {
            console.log("lead: " + respLead);
            if (respLead == 0) {
                if (this.apiGeneral.objEnviroment["isCampaignLive"] == true) {
                    this.setCRMRawData();
                    return;
                }
                this.apiCRMService.fnCheckDuplicateRawLead(mobileNo, emailId).then(respRaw => {
                    if (respRaw != 0) {
                        this.arrRegData["leadID"] = 0;
                        this.arrRegData["rawLeadID"] = respRaw["rawLeadId"];
                        this.arrRegData["branchID"] = respRaw["franchiseeId"];
                        var leadSource = (this.arrCRMLeadSource.filter(x => x.LeadSourceID == respRaw["leadSourceId"]))[0]["leadSource"];
                        if (leadSource == 'MOKSH Mobility App') {
                            leadSource = 'MobileApp';
                        }
                        this.arrRegData["createdBy"] = leadSource;
                        this.arrRegData["modifiedBy"] = leadSource;
                        //this.auth.arrRegistrationData = JSON.stringify(this.postData);
                        this.updateCRMRawData(respRaw["rawLeadId"]);
                    }
                    else {
                        this.setCRMRawData();
                    }
                });
            }
            else {
                this.arrRegData["referralID"] = null;
                this.arrRegData["leadID"] = respLead["leadId"];
                this.arrRegData["branchID"] = respLead["franchiseeId"];
                this.arrRegData["rawLeadID"] = (respLead["rawLeadId"]) == null ? 0 : respLead["rawLeadId"];
                var leadSource = (this.arrCRMLeadSource.filter(x => x.LeadSourceID == respLead["leadSourceId"]))[0]["LeadSource"];
                if (leadSource == 'MOKSH Mobility App') {
                    leadSource = 'MobileApp';
                }
                this.arrRegData["createdBy"] = leadSource;
                this.arrRegData["modifiedBy"] = leadSource;
                //this.auth.arrRegistrationData = JSON.stringify(this.postData);
                if (this.arrRegData["rawLeadID"] == 0) {
                    this.setCRMRawData();
                }
                else {
                    this.updateCRMRawData(this.arrRegData["rawLeadID"]);
                }
            }
        });
    }
    updateCRMRawData(rawLeadID) {
        this.apiCRMService.fnGetCRMRawData(rawLeadID).then(resp => {
            if (resp == true) {
                if (this.arrReferral.length > 0 && this.arrRegData["leadID"] == 0 && this.arrReferral[0]["referenceType"] == "Branch") {
                    this.apiCRMService.arrCRMRawData["FranchiseeId"] = this.arrReferral[0]["branchId"];
                }
                //If lead is present
                if (this.arrRegData["leadID"] != 0) {
                    this.apiCRMService.arrCRMRawData["franchiseeId"] = this.arrRegData["branchID"];
                    this.apiCRMService.arrCRMRawData["empId"] = null;
                }
                if (this.arrReferral.length > 0 && this.arrRegData["leadID"] == 0 && this.arrReferral[0]["referenceType"] == "Associates") {
                    this.apiCRMService.arrCRMRawData["empId"] = this.arrReferral[0]["empID"];
                    this.apiCRMService.arrCRMRawData["franchiseeId"] = this.arrReferral[0]["branchId"];
                }
                this.apiCRMService.arrCRMRawData["appLoginId"] = this.arrRegData["appLoginID"];
                this.apiCRMService.arrCRMRawData["isMobilityApp"] = true;
                this.apiCRMService.arrCRMRawData["emailId"] = this.arrRegData["emailID"];
                //this.apiCRMService.arrCRMRawData["StateID"] = this.postData["stateID"];
                //this.apiCRMService.arrCRMRawData["DistrictID"] = this.postData["districtID"];
                this.updateAppRegistration(false);
                this.apiCRMService.fnSetCRMRawData();
            }
            else {
                this.setCRMRawData();
            }
        });
    }
    updateCRMLeadData(leadId, rawLeadId) {
        this.apiCRMService.fnGetCRMLeadData(leadId).then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMLeadData["rawLeadId"] = rawLeadId;
                this.apiCRMService.fnSetCRMLeadData();
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
    getCounsellor() {
        var leadType = "";
        var leadID = 0;
        if (this.arrRegData["leadID"] != 0) {
            leadType = "Lead";
            leadID = this.arrRegData["leadID"];
        }
        else {
            leadType = "Raw";
            leadID = this.arrRegData["rawLeadID"];
        }
        let postData = { "LeadID": leadID, "LeadType": leadType };
        this.apiCRMService.getLeadCounsellor(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.storageService.setObject("counsellorData", resp[0]);
                this.apiCRMService.arrCounsellor = this.apiGeneral.arrCounsellor = resp[0];
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
SetupProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_5__.ApiCRMService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__.AppVersion },
    { type: _ionic_native_device_accounts_ngx__WEBPACK_IMPORTED_MODULE_12__.DeviceAccounts },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__.FirebaseAnalytics },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage }
];
SetupProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-setup-profile',
        template: _raw_loader_setup_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setup_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SetupProfilePage);



/***/ }),

/***/ 58358:
/*!*************************************************************************!*\
  !*** ./src/app/home/user-profile/setup-profile/setup-profile.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR1cC1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8205:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-profile/setup-profile/setup-profile.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"index/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"pb-0\">\n  <form class=\"form-cont\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n     <h4 class=\"text-center mb-0\">Setup your Profile</h4>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-label position=\"floating\">First Name <ion-text color=\"primary\">*</ion-text></ion-label>            \n            <ion-input maxlength=\"50\"  name=\"username\" type=\"text\" formControlName=\"FirstName\" required></ion-input>            \n          </ion-item>\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.minlength\">Valid First Name Required</span>\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.maxlength\">Valid First Name Required</span>          \n        </ion-col>\n        <ion-col size=\"6\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-label position=\"floating\">Last Name <ion-text color=\"primary\">*</ion-text></ion-label>\n            <ion-input maxlength=\"50\"  name=\"username\" type=\"text\" formControlName=\"LastName\" required></ion-input>\n          </ion-item>\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.minlength\">Valid Last Name Required</span>\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.maxlength\">Valid First Name Required</span>          \n        </ion-col>\n      </ion-row>     \n     \n      <ion-row>\n        <ion-col size=\"12\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"mail-outline\"></ion-icon>\n            <ion-label position=\"floating\">Email ID (For Scholarship Aspirants) <ion-text color=\"primary\">*</ion-text></ion-label>\n            <ion-input maxlength=\"60\"  name=\"username\" type=\"email\" formControlName=\"EmailID\" (ionFocus)=\"onClickEmail()\" ></ion-input>\n          </ion-item>\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.pattern\">Please provide valid Email ID</span>\n        </ion-col>\n      </ion-row>\n      <!--\n      <ion-row *ngIf=\"!isIndia\">\n        <ion-col size=\"12\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.countryID.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n            <ion-label position=\"floating\">Country <ion-text color=\"primary\">*</ion-text></ion-label>\n            <ion-select formControlName=\"countryID\" interface=\"action-sheet\" (ionChange)=\"getResState($event,'')\">\n              <ion-select-option [value]=\"val.countryId\" *ngFor=\"let val of arrResCountry\">{{val.countryName}}</ion-select-option>\n            </ion-select>\n          </ion-item>          \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.stateID.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n            <ion-label position=\"floating\">State <ion-text color=\"primary\">*</ion-text></ion-label>\n            <ion-select formControlName=\"stateID\" interface=\"action-sheet\" (ionChange)=\"getResCity($event,'')\">\n              <ion-select-option [value]=\"val.stateId\" *ngFor=\"let val of arrResState\">{{val.stateName}}</ion-select-option>\n            </ion-select>\n          </ion-item>          \n        </ion-col>\n        <ion-col size=\"6\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.districtID.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n            <ion-label position=\"floating\">City <ion-text color=\"primary\">*</ion-text></ion-label>\n            <ion-select formControlName=\"districtID\" interface=\"action-sheet\">\n              <ion-select-option [value]=\"val.districtId\" *ngFor=\"let val of arrResCity\">{{val.districtName}}</ion-select-option>\n            </ion-select>\n          </ion-item>          \n        </ion-col>\n      </ion-row>  \n      -->    \n      <ion-row>\n        <ion-col size=\"12\">          \n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"gift-outline\"></ion-icon>\n            <ion-label position=\"floating\">Referral Code </ion-label>\n            <ion-input maxlength=\"50\"  name=\"referralCode\" type=\"text\" formControlName=\"referralCode\"></ion-input>\n          </ion-item>\n          \n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col size=\"12\">\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.RePassword.errors?.required\"></span>\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            <ion-label position=\"floating\">Re-Enter Password</ion-label>\n            <ion-input maxlength=\"18\"  name=\"username\" type=\"password\" formControlName=\"RePassword\" required></ion-input>\n          </ion-item>\n         \n        <span class=\"error\" *ngIf=\"errorControl.RePassword.errors?.mustMatch\">Password must match</span>\n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col>\n          <ion-item class=\"ion-no-padding item-checkbox\" lines=\"none\">            \n            <ion-checkbox slot=\"start\" formControlName=\"IsAgree\" required></ion-checkbox>\n            <ion-label>I agree to the terms and conditions</ion-label>\n          </ion-item>\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.IsAgree.errors?.required\">Please agree to the Terms & Conditions</span>\n        </ion-col>\n      </ion-row>   -->   \n    </ion-grid>\n    <section class=\"btn-cont mb-0\">\n      <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Submit        \n        <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n      </ion-button>      \n    </section>\n  </form>  \n</ion-content>\n<app-footer></app-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_user-profile_setup-profile_setup-profile_module_ts.js.map