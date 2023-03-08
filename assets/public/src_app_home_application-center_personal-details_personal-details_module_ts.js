(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_personal-details_personal-details_module_ts"],{

/***/ 89205:
/*!*********************************************************************************************!*\
  !*** ./src/app/home/application-center/personal-details/personal-details-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalDetailsPageRoutingModule": () => (/* binding */ PersonalDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _personal_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal-details.page */ 28620);




const routes = [
    {
        path: '',
        component: _personal_details_page__WEBPACK_IMPORTED_MODULE_0__.PersonalDetailsPage
    }
];
let PersonalDetailsPageRoutingModule = class PersonalDetailsPageRoutingModule {
};
PersonalDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonalDetailsPageRoutingModule);



/***/ }),

/***/ 57997:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/personal-details/personal-details.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalDetailsPageModule": () => (/* binding */ PersonalDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _personal_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-details-routing.module */ 89205);
/* harmony import */ var _personal_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-details.page */ 28620);








let PersonalDetailsPageModule = class PersonalDetailsPageModule {
};
PersonalDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _personal_details_routing_module__WEBPACK_IMPORTED_MODULE_1__.PersonalDetailsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_personal_details_page__WEBPACK_IMPORTED_MODULE_2__.PersonalDetailsPage]
    })
], PersonalDetailsPageModule);



/***/ }),

/***/ 28620:
/*!***********************************************************************************!*\
  !*** ./src/app/home/application-center/personal-details/personal-details.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalDetailsPage": () => (/* binding */ PersonalDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_personal_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./personal-details.page.html */ 46635);
/* harmony import */ var _personal_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal-details.page.scss */ 71186);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../home.page */ 62267);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);














let PersonalDetailsPage = class PersonalDetailsPage {
    constructor(headerTitle, formBuilder, auth, toastr, loader, apiGeneral, apiApplicationService, router, storageService, homePage) {
        this.headerTitle = headerTitle;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.loader = loader;
        this.apiGeneral = apiGeneral;
        this.apiApplicationService = apiApplicationService;
        this.router = router;
        this.storageService = storageService;
        this.homePage = homePage;
        this.ipAddress = "";
        this.isSubmitted = false;
        this.applicationID = 0;
        this.appLoginID = "";
        this.token = "";
        this.arrUserData = "";
        this.arrPersonalData = { 'applicationId': 0, 'studentId': '', 'leadId': 0, 'firstName': '', 'lastName': '', 'fatherName': '', 'fatherNumber': '', 'motherName': '', 'motherNumber': '', 'emailId': '', 'password': '', 'mobileNo': '', 'whatsappNo': '', 'dateOfBirth': null, 'addressLine1': '', 'addCountryId': '', 'addCountryName': '', 'addStateId': '', 'addCityId': '', 'addCityName': '', 'addPincode': '', 'aadhaarNumber': '', 'nationality': '', 'passportAvailability': '', 'passportNumber': '', 'passportExpiryDate': null, 'passportIssuanceDate': null, 'studentSource': '', 'appliedBy': '', 'partnerId': 0, 'branchId': 0, 'applicationYearId': 0, 'productDepartmentId': 0, 'applicationStatus': '', 'notes': '', 'isActive': true, 'createdBy': '', 'modifiedBy': '', 'createdDate': '', 'modifiedDate': '', 'createdIp': '', 'modifiedIp': '', 'lastLogin': '', 'lastLogout': '' };
        this.arrResCountry = [];
        this.arrResState = [];
        this.arrResCity = [];
        this.branchID = "";
        this.arrAppUniversity = {};
        this.arrApplicationYear = [];
        this.arrFields = [];
        this.headerTitle.title = "Personal Details";
    }
    ngOnInit() {
        this.initForm();
        //this.getApplicationFields();
        this.getIpAddress();
        this.getResCountry();
        this.getApplicatinID();
        this.getStoredAppUniversity();
        this.getApplicationYear();
    }
    getApplicatinID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getApplicationID().then(res => {
                console.log("appid:" + res);
                if (res == "0") {
                    this.getAppRegistration();
                }
                else {
                    this.getPersonalDetails();
                }
            });
        });
    }
    getAppRegistration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            yield this.auth.getAppRegistration().then(resp => {
                this.arrUserData = resp;
                var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
                this.appLoginID = this.arrUserData["appLoginID"];
                this.applicationID = this.arrUserData["applicationID"]; // applicationID
                this.arrPersonalData.leadId = this.arrUserData["leadID"];
                this.arrPersonalData.password = this.arrUserData["password"];
                this.ionicForm.controls.FirstName.setValue(this.arrUserData["firstName"]);
                this.ionicForm.controls.LastName.setValue(this.arrUserData["lastName"]);
                this.ionicForm.controls.EmailID.setValue(this.arrUserData["emailID"]);
                this.ionicForm.controls.MobileNo.setValue(mobileNo);
                this.ionicForm.controls.whatsappNo.setValue(mobileNo);
                this.ionicForm.controls.addressLine1.setValue(this.arrUserData["address"]);
                this.ionicForm.controls.addCountryId.setValue(this.arrUserData["countryID"]);
                this.getResState("", this.arrUserData["countryID"]);
                setTimeout(() => {
                    this.ionicForm.controls.addStateId.setValue(this.arrUserData["stateID"]);
                }, 100);
                this.getResCity("", this.arrUserData["stateID"]);
                setTimeout(() => {
                    this.ionicForm.controls.addCityId.setValue(this.arrUserData["districtID"]);
                    this.loader.loadingDismiss();
                }, 100);
            }).catch(err => {
                console.log(err);
                if (err.status == "401") {
                    this.auth.logout();
                }
                this.loader.loadingDismiss();
            });
        });
    }
    getPersonalDetails() {
        this.loader.presentLoading();
        this.apiApplicationService.getPersonalDetails().then(resp => {
            this.arrPersonalData = resp;
            var mobileNo = this.arrPersonalData["mobileNo"].replace('+91', '');
            var whatsappNo = this.arrPersonalData["whatsappNo"].replace('+91', '');
            if (whatsappNo == "")
                whatsappNo = mobileNo;
            this.applicationID = this.arrPersonalData["applicationId"];
            this.ionicForm.controls.FirstName.setValue(this.arrPersonalData["firstName"]);
            this.ionicForm.controls.LastName.setValue(this.arrPersonalData["lastName"]);
            this.ionicForm.controls.EmailID.setValue(this.arrPersonalData["emailId"]);
            this.ionicForm.controls.MobileNo.setValue(mobileNo);
            this.ionicForm.controls.whatsappNo.setValue(whatsappNo);
            this.ionicForm.controls.applicationYearId.setValue(this.arrPersonalData["applicationYearId"]);
            this.ionicForm.controls.dateOfBirth.setValue(this.arrPersonalData["dateOfBirth"]);
            this.ionicForm.controls.addressLine1.setValue(this.arrPersonalData["addressLine1"]);
            this.ionicForm.controls.addCountryId.setValue(this.arrPersonalData["addCountryId"]);
            this.getResState("", this.arrPersonalData["addCountryId"]);
            setTimeout(() => {
                this.ionicForm.controls.addStateId.setValue(this.arrPersonalData["addStateId"]);
            }, 100);
            this.getResCity("", this.arrPersonalData["addStateId"]);
            setTimeout(() => {
                this.ionicForm.controls.addCityId.setValue(this.arrPersonalData["addCityId"]);
            }, 100);
            this.ionicForm.controls.pincode.setValue(this.arrPersonalData["addPincode"]);
            this.ionicForm.controls.passportAvailability.setValue(this.arrPersonalData["passportAvailability"]);
            this.ionicForm.controls.fatherName.setValue(this.arrPersonalData["fatherName"]);
            this.ionicForm.controls.fatherNumber.setValue(this.arrPersonalData["fatherNumber"]);
            this.ionicForm.controls.motherName.setValue(this.arrPersonalData["motherName"]);
            this.ionicForm.controls.motherNumber.setValue(this.arrPersonalData["motherNumber"]);
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 100);
        }).catch(err => {
            console.log(err);
            if (err.status == "401") {
                this.auth.logout();
            }
            this.loader.loadingDismiss();
        });
    }
    getApplicationYear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let ProductDepartmentID = (this.apiGeneral.arrSelection["productDepartmentId"] == "") ? null : parseInt(this.apiGeneral.arrSelection["productDepartmentId"]);
            let postData = { "ProductDepartmentId": ProductDepartmentID, "IsActive": true, "IsOpen": true };
            yield this.apiApplicationService.getApplicationYear(JSON.stringify(postData)).then(resp => {
                var arrMonths = this.apiApplicationService.arrMonths;
                resp.forEach(i => {
                    i.MonthName = arrMonths[i.applicationMonth - 1];
                });
                this.arrApplicationYear = resp;
            })
                .catch(err => {
                console.log("getApplicationYear:" + err);
            });
        });
    }
    //#region GET Country, State, City & Branch
    getResCountry() {
        let postData = { "countryID": 102, "IsActive": true };
        this.apiGeneral.getResCountry(JSON.stringify(postData)).then(resp => {
            this.arrResCountry = resp;
        }).catch(err => {
            console.log("getResCountry: " + err);
        });
    }
    getResState($event, _countryID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let stateID = ($event == "") ? _stateID : $event.target.value;
            let postData = { "IsActive": true, "stateID": stateID };
            yield this.apiGeneral.getResCity(JSON.stringify(postData)).then(resp => {
                this.arrResCity = resp;
            }).catch(err => {
                console.log("getResCity: " + err);
            });
        });
    }
    getBranchID($event, _districtID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let districtID = ($event == "") ? _districtID : $event.target.value;
            let postData = { "DistrictId": districtID, "IsActive": true };
            yield this.apiGeneral.getBranchDistrictMap(JSON.stringify(postData)).then(resp => {
                this.branchID = resp[0]["branchId"];
            }).catch(err => {
                console.log("GetBranchDistrictMap : " + err);
            });
        });
    }
    //#endregion
    //#region  Form Start
    initForm() {
        this.ionicForm = this.formBuilder.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(50)]],
            EmailID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            whatsappNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            applicationYearId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            dateOfBirth: [''],
            addressLine1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            addCountryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            addStateId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            addCityId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^([0-9]{6,7})$')]],
            passportAvailability: ['',],
            fatherName: ['',],
            fatherNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            motherName: ['',],
            motherNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.apiGeneral.getStorageSelection();
            //this.getUserData$();    
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                this.loader.presentLoading();
                let CurrentDateTime = this.apiGeneral.getCurrentDateTime();
                let IpAddress = this.apiGeneral.getIPAddress();
                this.arrPersonalData["applicationId"] = this.applicationID;
                this.arrPersonalData["firstName"] = this.ionicForm.value.FirstName;
                this.arrPersonalData["lastName"] = this.ionicForm.value.LastName;
                this.arrPersonalData["emailId"] = this.ionicForm.value.EmailID;
                this.arrPersonalData["mobileNo"] = "+91" + this.ionicForm.value.MobileNo;
                this.arrPersonalData["whatsappNo"] = (this.ionicForm.value.whatsappNo == '') ? "" : "+91" + this.ionicForm.value.whatsappNo;
                this.arrPersonalData["dateOfBirth"] = (this.ionicForm.value.dateOfBirth == "") ? null : this.ionicForm.value.dateOfBirth;
                this.arrPersonalData["addressLine1"] = this.ionicForm.value.addressLine1;
                this.arrPersonalData["addCountryId"] = (this.ionicForm.value.addCountryId == "") ? null : this.ionicForm.value.addCountryId;
                this.arrPersonalData["addStateId"] = (this.ionicForm.value.addStateId == "") ? null : this.ionicForm.value.addStateId;
                this.arrPersonalData["addCityId"] = (this.ionicForm.value.addCityId == "") ? null : this.ionicForm.value.addCityId;
                this.arrPersonalData["addPincode"] = this.ionicForm.value.pincode;
                this.arrPersonalData["passportAvailability"] = this.ionicForm.value.passportAvailability;
                this.arrPersonalData["fatherName"] = this.ionicForm.value.fatherName;
                this.arrPersonalData["fatherNumber"] = this.ionicForm.value.fatherNumber;
                this.arrPersonalData["motherName"] = this.ionicForm.value.motherName;
                this.arrPersonalData["motherNumber"] = this.ionicForm.value.motherNumber;
                this.arrPersonalData["branchId"] = (this.arrPersonalData["branchId"] == 0) ? parseInt(this.branchID) : this.arrPersonalData["branchId"];
                this.arrPersonalData["applicationYearId"] = this.ionicForm.value.applicationYearId;
                this.arrPersonalData["productDepartmentId"] = (this.arrPersonalData["productDepartmentId"] == 0) ? parseInt(this.apiGeneral.arrSelection["productDepartmentId"]) : this.arrPersonalData["productDepartmentId"];
                this.arrPersonalData["applicationStatus"] = (this.arrPersonalData["applicationStatus"] == '') ? "ApplicationIncomplete" : this.arrPersonalData["applicationStatus"];
                this.arrPersonalData["studentSource"] = (this.arrPersonalData["branchId"] == 1) ? "MokshHO" : "Direct";
                this.arrPersonalData["appliedBy"] = (this.arrPersonalData["appliedBy"] == "") ? "Student" : this.arrPersonalData["appliedBy"];
                this.arrPersonalData["createdDate"] = CurrentDateTime;
                this.arrPersonalData["createdIp"] = this.ipAddress;
                this.arrPersonalData["createdBy"] = "MobileApp";
                this.arrPersonalData["modifiedDate"] = CurrentDateTime;
                this.arrPersonalData["modifiedIp"] = this.ipAddress;
                this.arrPersonalData["modifiedBy"] = "MobileApp";
                this.arrPersonalData["lastLogin"] = null;
                this.arrPersonalData["lastLogout"] = null;
                this.arrPersonalData["leadId"] = this.arrUserData["leadID"];
                this.apiApplicationService.setPersonalDetails(JSON.stringify(this.arrPersonalData)).then(resp => {
                    if (resp.statusCode == 409) {
                        this.toastr.toastError(resp.status);
                        this.loader.loadingDismiss();
                    }
                    else {
                        this.storageService.setObject("appdata", resp.result);
                        if (this.applicationID == 0) { // If new application
                            var _applicationID = resp.result.applicationId;
                            this.applicationID = _applicationID;
                            this.auth.getAppRegistration().then(getApp => {
                                getApp = this.arrUserData;
                                this.arrUserData["applicationID"] = _applicationID;
                                this.auth.putAppRegistration(JSON.stringify(this.arrUserData)).then(putApp => {
                                    this.storageService.getObject("userdata").then(respUser => {
                                        respUser["applicationID"] = _applicationID;
                                        this.storageService.setObject("userdata", respUser);
                                        this.homePage.getUserData();
                                    });
                                    this.auth.getUserData(_applicationID);
                                    this.setAppUniversity(); //Set App University
                                });
                            });
                        }
                        else {
                            this.loader.loadingDismiss();
                            setTimeout(() => {
                                this.router.navigate(["/home/application-center/academic-details", this.applicationID]);
                            }, 500);
                        }
                    }
                })
                    .catch(err => {
                    console.log("setPersonal Details: " + err);
                    this.ionicForm.invalid;
                    this.loader.loadingDismiss();
                    this.toastr.toastError(err.status);
                });
            }
        });
    }
    //#endregion
    getApplicationFields() {
        let postdata = { "IsShowApp": true, "IsActive": true, "FieldSection": "PersonalDetails" };
        this.apiApplicationService.getApplicationField(JSON.stringify(postdata)).then(resp => {
            this.arrFields = resp;
        });
    }
    //#region Application University start
    getStoredAppUniversity() {
        this.storageService.getObject("arrAppUni").then((data) => {
            if (data != null) {
                this.arrAppUniversity = data;
            }
            //this.arrAppUniversity = data;      
        });
    }
    //#endregion
    //#region Set AppUniversity 
    setAppUniversity() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
            this.arrAppUniversity["applicationId"] = this.applicationID;
            this.arrAppUniversity["createdBy"] = "Student";
            this.arrAppUniversity["createdDate"] = CurrentDateTime;
            this.arrAppUniversity["createdIp"] = this.ipAddress;
            if (this.arrAppUniversity == null) {
                this.toastr.toastError("Something is wrong with University Selection. Please try again");
                this.router.navigate(["/home/welcome"]);
                return;
            }
            yield this.apiApplicationService.setAppUniversity(JSON.stringify(this.arrAppUniversity), 0).then(resp => {
                this.toastr.toastSuccess("Personal details saved successfully!");
                this.loader.loadingDismiss();
                this.isLoading = false;
                setTimeout(() => {
                    this.router.navigate(["/home/application-center/academic-details", this.applicationID]);
                }, 500);
            }).catch(err => {
                this.toastr.toastError("Technical issue while saving University Data");
                console.log("setAppUniversity===> " + err);
                this.loader.loadingDismiss();
                return;
            });
        });
    }
    //#endregion
    //== General Function start
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
PersonalDetailsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__.ApiApplicationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage }
];
PersonalDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-personal-details',
        template: _raw_loader_personal_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_personal_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PersonalDetailsPage);



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

/***/ 71186:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/personal-details/personal-details.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 46635:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/personal-details/personal-details.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-nav-steps></app-nav-steps>\r\n  <form class=\"form-cont no-icon pt-0 pb-4\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>    \r\n    <ion-grid class=\"padding-sm\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">First Name <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" name=\"username\" type=\"text\" formControlName=\"FirstName\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.minlength\">Valid First Name\r\n            Required</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.maxlength\">Valid First Name\r\n            Required</span>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Last Name <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" type=\"text\" formControlName=\"LastName\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.minlength\">Valid Last Name\r\n            Required</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.maxlength\">Valid First Name\r\n            Required</span>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">            \r\n            <ion-label position=\"floating\">Contact No. <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"14\" size=\"large\" type=\"text\" formControlName=\"MobileNo\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please provide valid Mobile No.</span>\r\n        </ion-col>\r\n        <ion-col size=\"6\">       \r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.whatsappNo.errors?.required\"></span>   \r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">            \r\n            <ion-label position=\"floating\">Whats App No. <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"14\" size=\"large\" name=\"whatsappNo\" type=\"text\" formControlName=\"whatsappNo\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please provide valid Whatsapp No.</span>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"mail-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Email ID <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input maxlength=\"60\" size=\"large\" name=\"username\" type=\"email\" formControlName=\"EmailID\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.pattern\">Please provide valid Email\r\n            ID</span>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.applicationYearId.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"mail-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Intake Year <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-select formControlName=\"applicationYearId\" interface=\"action-sheet\">\r\n              <ion-select-option [value]=\"val.applicationYearId\" *ngFor=\"let val of arrApplicationYear\">{{val.MonthName}} {{val.applicationYear}}</ion-select-option>\r\n            </ion-select>           \r\n          </ion-item>        \r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">            \r\n            <ion-label position=\"floating\">Date of Birth</ion-label>\r\n            <ion-datetime displayFormat=\"DD MMM YYYY\" [max]=\"2010\" formControlName=\"dateOfBirth\"></ion-datetime>            \r\n          </ion-item>          \r\n        </ion-col>               \r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.passportAvailability.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-label position=\"floating\">Passport Availability <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-select formControlName=\"passportAvailability\" interface=\"action-sheet\">\r\n              <ion-select-option value=\"\">Select</ion-select-option>\r\n              <ion-select-option value=\"Available\">Available</ion-select-option>\r\n              <ion-select-option value=\"Applied\">Applied</ion-select-option>\r\n              <ion-select-option value=\"Yet_to_Apply\">Yet to Apply</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>        \r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.addressLine1.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">            \r\n            <ion-label position=\"floating\">Address <ion-text color=\"primary\">*</ion-text></ion-label>\r\n            <ion-input name=\"addressLine1\" type=\"text\" formControlName=\"addressLine1\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-label position=\"floating\">Country <ion-text color=\"primary\">*</ion-text></ion-label>\r\n              <ion-select formControlName=\"addCountryId\" interface=\"action-sheet\" (ionChange)=\"getResState($event,'')\">\r\n                <ion-select-option [value]=\"val.countryId\" *ngFor=\"let val of arrResCountry\">{{val.countryName}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-label position=\"floating\">State <ion-text color=\"primary\">*</ion-text></ion-label>\r\n              <ion-select formControlName=\"addStateId\" interface=\"action-sheet\" (ionChange)=\"getResCity($event,'')\">\r\n                <ion-select-option [value]=\"val.stateId\" *ngFor=\"let val of arrResState\">{{val.stateName}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-label position=\"floating\">City <ion-text color=\"primary\">*</ion-text></ion-label>\r\n              <ion-select formControlName=\"addCityId\" interface=\"action-sheet\" (ionChange)=\"getBranchID($event,'')\">\r\n                <ion-select-option [value]=\"val.districtId\" *ngFor=\"let val of arrResCity\">{{val.districtName}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"d-none\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \r\n              <ion-label position=\"floating\">Pin Code</ion-label>\r\n              <ion-input name=\"pincode\" type=\"text\" formControlName=\"pincode\"></ion-input>\r\n            </ion-item>\r\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.pincode.errors?.pattern\">Please enter valid Pin Code</span>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"d-none\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \r\n              <ion-label position=\"floating\">Father Name</ion-label>\r\n              <ion-input name=\"fatherName\" type=\"text\" formControlName=\"fatherName\"></ion-input>\r\n            </ion-item>            \r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"d-none\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \r\n              <ion-label position=\"floating\">Father Contact No.</ion-label>\r\n              <ion-input name=\"fatherNumber\" type=\"text\" formControlName=\"fatherNumber\"></ion-input>\r\n            </ion-item>            \r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"d-none\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \r\n              <ion-label position=\"floating\">Mother Name</ion-label>\r\n              <ion-input name=\"motherName\" type=\"text\" formControlName=\"motherName\"></ion-input>\r\n            </ion-item>            \r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"d-none\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \r\n              <ion-label position=\"floating\">Mother Contact No.</ion-label>\r\n              <ion-input name=\"motherNumber\" type=\"text\" formControlName=\"motherNumber\"></ion-input>\r\n            </ion-item>            \r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-grid>    \r\n    <section class=\"btn-cont footerfixed\">\r\n      <div class=\"main-cont\">\r\n        <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Next                            \r\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-button>\r\n    </div>\r\n    </section>\r\n  </form>\r\n</ion-content>\r\n\r\n<!-- <app-footer></app-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_personal-details_personal-details_module_ts.js.map