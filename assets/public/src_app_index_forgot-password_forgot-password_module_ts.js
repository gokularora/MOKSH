(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_forgot-password_forgot-password_module_ts"],{

/***/ 71678:
/*!*************************************************************************!*\
  !*** ./src/app/index/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 24372);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 4497:
/*!*****************************************************************!*\
  !*** ./src/app/index/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 71678);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 24372);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 24372:
/*!***************************************************************!*\
  !*** ./src/app/index/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 32673);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 35684);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ 12013);










let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(formBuilder, auth, toastr, notification, router, storage) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastr = toastr;
        this.notification = notification;
        this.router = router;
        this.storage = storage;
        this.isSubmitted = false;
        this.isOpen = false;
        this.OTP = "";
        this.myPassword = "";
        this.isLoading = false;
        this.isLoadingOTP = false;
    }
    ionViewWillEnter() {
        this.autoFill();
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^([0-9]{10})$')]],
        });
        this.OTPForm = this.formBuilder.group({
            otp1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            otp2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            otp3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            otp4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    get errorOTPControl() {
        return this.OTPForm.controls;
    }
    autoFill() {
        this.storage.getObject("saved").then(resp => {
            if (resp != null) {
                this.savedMobileNo = resp["MobileNo"];
                if (resp["MobileNo"].indexOf('+91') >= 0) {
                    resp["MobileNo"] = resp["MobileNo"].replace('+91', '');
                }
                this.ionicForm.controls.MobileNo.setValue(resp["MobileNo"]);
            }
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            this.toastr.toastSuccess("Please provide all the required values!");
            return false;
        }
        else {
            this.isLoading = true;
            let postData = { "MobileNo": "+91" + this.ionicForm.value.MobileNo.toString() };
            this.auth.getPassword(JSON.stringify(postData)).then(resp => {
                if (resp.statusCode == 200) {
                    this.myPassword = resp.password;
                    var otpGenerator = __webpack_require__(/*! otp-generator */ 42114);
                    this.OTP = otpGenerator.generate(4, { upperCase: false, alphabets: false, specialChars: false });
                    console.log(this.OTP);
                    this.isSubmitted = false;
                    this.sendSMSOTP(this.ionicForm.value.MobileNo.toString());
                }
            }).catch(err => {
                this.isLoading = false;
                console.log(err);
                this.toastr.toastError("OTP not sent due to some technical problem. Please try after some time");
            });
        }
    }
    sendSMSOTP(mobileNo) {
        let messageBody = "Hi, " + this.OTP + " is your One Time Password (OTP) for recover your password at MOKSH App. Do not share your OTP with anyone.";
        let postSmsData = { "MobileNo": mobileNo, "MessageBody": messageBody };
        this.notification.sendSMS(JSON.stringify(postSmsData)).then(resp => {
            this.toastr.toastSuccess("OTP Sent Successfully!");
            this.isOpen = true;
            this.isLoading = false;
        }).catch(err => { this.toastr.toastError("OTP not sent due to some technical problem. Please try after some time"); this.isLoading = false; });
    }
    submitForgotPassword() {
        if (!this.OTPForm.valid) {
            this.toastr.toastSuccess("Please Enter OTP!");
            return false;
        }
        else {
            this.isLoadingOTP = true;
            var enteredOTP = `${this.OTPForm.value.otp1}${this.OTPForm.value.otp2}${this.OTPForm.value.otp3}${this.OTPForm.value.otp4}`;
            if (this.OTP == enteredOTP) {
                let messageBody = "Your recovered password for MOKSH App is " + this.myPassword + ". Do not share it with anyone.";
                let postSmsData = { "MobileNo": "91" + this.ionicForm.value.MobileNo.toString(), "MessageBody": messageBody };
                this.notification.sendSMS(JSON.stringify(postSmsData)).then(resp => {
                    console.log(resp.status);
                    this.toastr.toastSuccess("We have sent password on your registered mobile no");
                    this.isOpen = false;
                    setTimeout(() => {
                        this.isLoadingOTP = false;
                        this.router.navigate(["/login"]);
                    }, 1000);
                })
                    .catch(err => {
                    this.isLoadingOTP = false;
                    console.log(err.title);
                    this.toastr.toastError("OTP not sent due to some technical problem. Please try after some time");
                });
                // var subject = "Password for MOKSH Application"
                // this.sendEmail(subject,messageBody,this.ionicForm.value.EmailID.toString())          
            }
            else {
                this.toastr.toastError("You have entered wrong OTP. Please try again with correct OTP");
                this.OTPForm.reset();
                this.isLoadingOTP = false;
            }
        }
    }
    sendEmail(subject, messageBody, emailId) {
        let postData = { "Subject": subject, "MessageBody": messageBody, "ToAddress": emailId };
        this.notification.sendEmail(JSON.stringify(postData)).then(resp => {
            console.log(resp.status);
            this.toastr.toastSuccess("Email Sent Successfully!");
            this.auth.isTimeOut = false;
            this.router.navigate(['/otp-verification']);
        })
            .catch(err => {
            console.log(err.title);
            this.toastr.toastError("OTP not sent due to some technical problem. Please try after some time");
        });
    }
    tooglePanelClose() {
        this.isOpen = false;
    }
    otpController(event, next, prev) {
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
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



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

/***/ 35684:
/*!*****************************************************************!*\
  !*** ./src/app/index/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 32673:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"index/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"form-cont\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <h5 class=\"text-center\">Forgot Password?</h5>\r\n\r\n    <br>\r\n    <div>\r\n      <p class=\"text-center\">Enter your Registered Mobile No and verify to recover your password</p>\r\n    </div>\r\n    \r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.required\"></span>\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n              <ion-label position=\"floating\">Contact No.</ion-label>\r\n              <ion-input maxlength=\"12\" size=\"large\" name=\"username\" type=\"number\" formControlName=\"MobileNo\" required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please provide valid Mobile\r\n              No.</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <section class=\"btn-cont\">\r\n        <ion-button size=\"large\" expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Submit\r\n          <ion-ripple-effect></ion-ripple-effect>\r\n          <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n        </ion-button>\r\n      </section>    \r\n  </form>\r\n\r\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isOpen}\">\r\n    <div class=\"toogle-cont\">\r\n      <ion-text class=\"btn-close\" (click)=\"tooglePanelClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>\r\n      <p>We have sent 4 digit OTP to verify your mobile number.</p>\r\n      <p>Please enter your 4 digit OTP to verify</p>\r\n      <form class=\"form-cont no-icon p-0\" [formGroup]=\"OTPForm\" (ngSubmit)=\"submitForgotPassword()\" (ionFocus)=\"clear($event)\" novalidate>\r\n        <ion-grid class=\"otp-cont\">\r\n          <ion-row>\r\n            <ion-col size=\"3\">\r\n              <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorOTPControl.otp1.errors?.required\"></span>\r\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\" type=\"number\" formControlName=\"otp1\" #otp1\r\n                  (keyup)=\"otpController($event,otp2,'')\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorOTPControl.otp2.errors?.required\"></span>\r\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\" type=\"number\" formControlName=\"otp2\" #otp2\r\n                  (keyup)=\"otpController($event,otp3,otp1)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorOTPControl.otp3.errors?.required\"></span>\r\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\" type=\"number\" formControlName=\"otp3\" #otp3\r\n                  (keyup)=\"otpController($event,otp4,otp2)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorOTPControl.otp4.errors?.required\"></span>\r\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n                <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" type=\"number\" formControlName=\"otp4\" #otp4\r\n                  (keyup)=\"otpController($event,'',otp3)\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <section class=\"btn-cont\">\r\n          <ion-button  expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!OTPForm.valid\">Submit\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoadingOTP\"></ion-spinner>\r\n          </ion-button>\r\n        </section>\r\n      </form>\r\n    </div>\r\n\r\n\r\n  </section>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_index_forgot-password_forgot-password_module_ts.js.map