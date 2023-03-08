(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_user-profile_edit-profile_edit-profile_module_ts"],{

/***/ 55763:
/*!*******************************************************************************!*\
  !*** ./src/app/home/user-profile/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 34762);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 25164:
/*!***********************************************************************!*\
  !*** ./src/app/home/user-profile/edit-profile/edit-profile.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 55763);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 34762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 34762:
/*!*********************************************************************!*\
  !*** ./src/app/home/user-profile/edit-profile/edit-profile.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-profile.page.html */ 56918);
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss */ 28873);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);










let EditProfilePage = class EditProfilePage {
    constructor(headerTitle, formBuilder, auth, toastr, loader, apiGeneral) {
        this.headerTitle = headerTitle;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.loader = loader;
        this.apiGeneral = apiGeneral;
        this.isSubmitted = false;
        this.applicationID = "";
        this.token = "";
        this.arrUserData = "";
        this.arrResCountry = [];
        this.arrResState = [];
        this.arrResCity = [];
        this.ipAddress = "";
        this.headerTitle.title = "Edit Profile";
    }
    ngOnInit() {
        this.getIpAddress();
        this.getResCountry();
        //this.getUserData$();
        this.getUserAllData();
        this.ionicForm = this.formBuilder.group({
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(50)]],
            EmailID: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            MobileNo: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            addressLine1: ['', []],
            addCountryId: [''],
            addStateId: [''],
            addCityId: ['']
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.getUserAllData();
        }, 500);
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    getUserAllData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            yield this.auth.getAppRegistration().then(resp => {
                this.arrUserData = resp;
                this.ionicForm.controls.FirstName.setValue(this.arrUserData["firstName"]);
                this.ionicForm.controls.LastName.setValue(this.arrUserData["lastName"]);
                this.ionicForm.controls.EmailID.setValue(this.arrUserData["emailID"]);
                this.ionicForm.controls.MobileNo.setValue(this.arrUserData["mobileNo"]);
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
    getResCountry() {
        let postData = { "countryID": 102, "IsActive": true };
        this.apiGeneral.getResCountry(JSON.stringify(postData)).then(resp => {
            this.arrResCountry = resp;
        }).catch(err => {
            console.log("getResCountry: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
        });
    }
    getResState($event, _countryID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let countryID = ($event == "") ? _countryID : $event.target.value;
            let postData = { "IsActive": true, "countryID": countryID };
            yield this.apiGeneral.getResState(JSON.stringify(postData)).then(resp => {
                this.arrResState = resp;
            }).catch(err => {
                console.log("getResState: " + err);
                if (err.status == "401") {
                    this.auth.logout();
                }
            });
        });
    }
    getResCity($event, _stateID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let stateID = ($event == "") ? _stateID : $event.target.value;
            let postData = { "IsActive": true, "stateID": stateID };
            yield this.apiGeneral.getResCity(JSON.stringify(postData)).then(resp => {
                this.arrResCity = resp;
            }).catch(err => {
                console.log("getResCity: " + err);
                if (err.status == "401") {
                    this.auth.logout();
                }
            });
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            this.isLoading = true;
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                let CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
                this.arrUserData["firstName"] = this.ionicForm.value.FirstName;
                this.arrUserData["lastName"] = this.ionicForm.value.LastName;
                this.arrUserData["gender"] = "";
                this.arrUserData["address"] = this.ionicForm.value.addressLine1;
                this.arrUserData["countryID"] = this.ionicForm.value.addCountryId;
                this.arrUserData["stateID"] = this.ionicForm.value.addStateId;
                this.arrUserData["districtID"] = this.ionicForm.value.addCityId;
                this.arrUserData["modifiedDate"] = CurrentDateTime;
                this.arrUserData["modifiedIp"] = this.ipAddress;
                this.arrUserData["modifiedBy"] = (this.ionicForm.value.FirstName + " " + this.ionicForm.value.LastName).trim();
                this.auth.putAppRegistration(JSON.stringify(this.arrUserData)).then(resp => {
                    console.log("submitForm " + resp);
                    this.toastr.toastSuccess("Data Saved Successfully!");
                    this.loader.loadingDismiss();
                    this.isLoading = false;
                })
                    .catch(err => {
                    this.toastr.toastError(err.error.status);
                    this.ionicForm.invalid;
                    console.log("end");
                    this.loader.loadingDismiss();
                    this.isLoading = false;
                });
            }
        });
    }
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__.HeaderTitleService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProfilePage);



/***/ }),

/***/ 28873:
/*!***********************************************************************!*\
  !*** ./src/app/home/user-profile/edit-profile/edit-profile.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 56918:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-profile/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  <form class=\"form-cont no-icon\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">First Name</ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" name=\"username\" type=\"text\" formControlName=\"FirstName\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.minlength\">Valid First Name\r\n            Required</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.maxlength\">Valid First Name\r\n            Required</span>\r\n\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Last Name</ion-label>\r\n            <ion-input maxlength=\"50\" size=\"large\" name=\"username\" type=\"text\" formControlName=\"LastName\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.minlength\">Valid Last Name\r\n            Required</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.LastName.errors?.maxlength\">Valid First Name\r\n            Required</span>\r\n\r\n        </ion-col>\r\n      \r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"mail-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Email iD</ion-label>\r\n            <ion-input maxlength=\"60\" size=\"large\" name=\"username\" type=\"email\" formControlName=\"EmailID\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.EmailID.errors?.pattern\">Please provide valid Email\r\n            ID</span>\r\n        </ion-col>\r\n     \r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"call-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Contact No.</ion-label>\r\n            <ion-input maxlength=\"14\" size=\"large\" name=\"username\" type=\"text\" formControlName=\"MobileNo\" required>\r\n            </ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please provide valid Mobile No.</span>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"call-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Address</ion-label>\r\n            <ion-input name=\"addressLine1\" type=\"text\" formControlName=\"addressLine1\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-label position=\"floating\">Country</ion-label>\r\n              <ion-select formControlName=\"addCountryId\" interface=\"action-sheet\" (ionChange)=\"getResState($event,'')\">\r\n                <ion-select-option [value]=\"val.countryId\" *ngFor=\"let val of arrResCountry\">{{val.countryName}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-label position=\"floating\">State</ion-label>\r\n              <ion-select formControlName=\"addStateId\" interface=\"action-sheet\" (ionChange)=\"getResCity($event,'')\">\r\n                <ion-select-option [value]=\"val.stateId\" *ngFor=\"let val of arrResState\">{{val.stateName}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-label position=\"floating\">City</ion-label>\r\n              <ion-select formControlName=\"addCityId\" interface=\"action-sheet\">\r\n                <ion-select-option [value]=\"val.districtId\" *ngFor=\"let val of arrResCity\">{{val.districtName}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>         \r\n      </ion-row>\r\n    </ion-grid>\r\n    <section class=\"btn-cont\">\r\n      <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Save\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-spinner name=\"dots\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n      </ion-button>\r\n    </section>\r\n  </form>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_user-profile_edit-profile_edit-profile_module_ts.js.map