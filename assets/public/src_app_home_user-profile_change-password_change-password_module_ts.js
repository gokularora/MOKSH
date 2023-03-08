(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_user-profile_change-password_change-password_module_ts"],{

/***/ 13628:
/*!**************************************!*\
  !*** ./src/app/helper/must-match.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": () => (/* binding */ MustMatch)
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 96088:
/*!*************************************************************************************!*\
  !*** ./src/app/home/user-profile/change-password/change-password-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 51399);




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ 74476:
/*!*****************************************************************************!*\
  !*** ./src/app/home/user-profile/change-password/change-password.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password-routing.module */ 96088);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.page */ 51399);








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordPage]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ 51399:
/*!***************************************************************************!*\
  !*** ./src/app/home/user-profile/change-password/change-password.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-password.page.html */ 63384);
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss */ 30229);
/* harmony import */ var _services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/header-title.service */ 92708);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/auth.service */ 37556);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_helper_must_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helper/must-match */ 13628);









let ChangePasswordPage = class ChangePasswordPage {
    constructor(headerTitleService, formBuilder, toastr, auth) {
        this.headerTitleService = headerTitleService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.auth = auth;
        this.isSubmitted = false;
        this.CurrentDateTime = "";
        this.appLoginID = 0;
        this.headerTitleService.title = "Change Password";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.getUserData();
        this.initForm();
    }
    initForm() {
        this.ionicForm = this.formBuilder.group({
            CurrentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(18)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(18)]],
            RePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        }, {
            validators: (0,src_app_helper_must_match__WEBPACK_IMPORTED_MODULE_5__.MustMatch)('Password', 'RePassword')
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.userData$.subscribe((resp) => {
                //this.arrStorageUserData = resp;          
                this.appLoginID = resp.appLoginID;
            });
        });
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                console.log('Please provide all the required values!');
                return false;
            }
            else {
                var postData = { 'appLoginID': this.appLoginID, 'password': this.ionicForm.value.Password };
                this.auth.changePassword(JSON.stringify(postData)).then(resp => {
                    this.toastr.toastSuccess("Password Updated successfully!");
                    this.isLoading = false;
                })
                    .catch(err => {
                    console.log("Change Passwod ==> " + err);
                    this.ionicForm.invalid;
                    this.isLoading = false;
                });
            }
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePasswordPage);



/***/ }),

/***/ 30229:
/*!*****************************************************************************!*\
  !*** ./src/app/home/user-profile/change-password/change-password.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 63384:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-profile/change-password/change-password.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <form class=\"form-cont no-icon\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.CurrentPassword.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Current Password</ion-label>\r\n            <ion-input maxlength=\"18\" size=\"large\" name=\"username\" type=\"password\" required formControlName=\"CurrentPassword\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.CurrentPassword.errors?.minlength\">Please Enter Valid Password</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.CurrentPassword.errors?.maxlength\">Please Enter Valid Password</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.Password.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">New Password</ion-label>\r\n            <ion-input maxlength=\"18\" size=\"large\" name=\"username\" type=\"password\" required formControlName=\"Password\"></ion-input>\r\n          </ion-item>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.Password.errors?.minlength\">Please Enter Valid Password</span>\r\n          <span class=\"error\" *ngIf=\"isSubmitted && errorControl.Password.errors?.maxlength\">Please Enter Valid Password</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.RePassword.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            <ion-label position=\"floating\">Re-Enter Password</ion-label>\r\n            <ion-input maxlength=\"18\" size=\"large\" name=\"username\" type=\"password\" formControlName=\"RePassword\" required></ion-input>\r\n          </ion-item>\r\n          <!-- <div *ngIf=\"IsSubmitted && errorControl.RePassword.errors\" class=\"required\">            \r\n            <div *ngIf=\"errorControl.RePassword.errors.mustMatch\">Passwords must match</div>\r\n        </div> -->\r\n        <span class=\"error\" *ngIf=\"errorControl.RePassword.errors?.mustMatch\">Password must match</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <section class=\"btn-cont\">\r\n      <ion-button size=\"large\" expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Save\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n        <ion-spinner name=\"dots\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n      </ion-button>\r\n    </section>\r\n  </form>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_user-profile_change-password_change-password_module_ts.js.map