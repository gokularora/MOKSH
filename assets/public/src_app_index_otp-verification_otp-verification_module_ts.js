(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_otp-verification_otp-verification_module_ts"],{

/***/ 14037:
/*!***************************************************************************!*\
  !*** ./src/app/index/otp-verification/otp-verification-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationPageRoutingModule": () => (/* binding */ OtpVerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otp_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification.page */ 17553);




const routes = [
    {
        path: '',
        component: _otp_verification_page__WEBPACK_IMPORTED_MODULE_0__.OtpVerificationPage
    }
];
let OtpVerificationPageRoutingModule = class OtpVerificationPageRoutingModule {
};
OtpVerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpVerificationPageRoutingModule);



/***/ }),

/***/ 95053:
/*!*******************************************************************!*\
  !*** ./src/app/index/otp-verification/otp-verification.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationPageModule": () => (/* binding */ OtpVerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otp_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification-routing.module */ 14037);
/* harmony import */ var _otp_verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification.page */ 17553);







let OtpVerificationPageModule = class OtpVerificationPageModule {
};
OtpVerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpVerificationPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_otp_verification_page__WEBPACK_IMPORTED_MODULE_1__.OtpVerificationPage]
    })
], OtpVerificationPageModule);



/***/ }),

/***/ 17553:
/*!*****************************************************************!*\
  !*** ./src/app/index/otp-verification/otp-verification.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationPage": () => (/* binding */ OtpVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_otp_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otp-verification.page.html */ 44769);
/* harmony import */ var _otp_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification.page.scss */ 30434);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/notification.service */ 12013);
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-idle/core */ 20882);














let OtpVerificationPage = class OtpVerificationPage {
    constructor(formBuilder, auth, loader, notification, toastr, router, idle, storage, apiCRMService, firebaseAnalytics) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.loader = loader;
        this.notification = notification;
        this.toastr = toastr;
        this.router = router;
        this.idle = idle;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
        this.firebaseAnalytics = firebaseAnalytics;
        this.isSubmitted = false;
        this.CurrentDateTime = "";
        this.idleState = 'Not started.';
        this.timeCounter = "";
        this.LeadID = 0;
        this.rawLeadID = 0;
        this.arrUserData = [];
    }
    ionViewWillEnter() {
        if (this.auth.isTimeOut == true) {
            this.router.navigate(['/register']);
        }
        this.counter();
        this.firebaseAnalytics.setCurrentScreen("otp-verification");
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            otp1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            otp2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            otp3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            otp4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.removeItem("arrSelection");
            this.isSubmitted = true;
            if (!this.ionicForm.valid) {
                return false;
            }
            else {
                if (this.validateOTP() == true) {
                    this.loader.presentLoading();
                    this.CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
                    let postData = this.auth.arrRegistrationData;
                    var arrPostData = JSON.parse(postData);
                    this.rawLeadID = arrPostData["rawLeadID"];
                    this.auth.setAppRegistration(postData).then((resp) => {
                        if (resp.statusCode == 200) {
                            this.toastr.toastSuccess("Registered Successfully!");
                            this.firebaseAnalytics.logEvent("register", { action: 'success', page: 'otp-verification' });
                            //#region SMS Notification Start
                            let messageBody = `Hi ` + arrPostData.firstName + `,
Thank you for registering with MOXSH. Your login details are as below.
Email ID: ` + arrPostData.emailID + ` 
Password: ` + arrPostData.password;
                            let postSmsData = { "MobileNo": arrPostData.mobileNo.toString(), "MessageBody": messageBody };
                            this.notification.sendSMS(JSON.stringify(postSmsData)).then(resp => {
                                this.loader.loadingDismiss();
                            })
                                .catch(err => {
                                console.log(err.title);
                                this.toastr.toastError("SMS not sent due to some technical problem.");
                                this.loader.loadingDismiss();
                            });
                            //#endregion
                            this.autoLogin();
                            this.updateCRMRawData(resp.result["appLoginID"]);
                            this.auth.OTP = "";
                            this.loader.loadingDismiss();
                            this.auth.isTimeOut == false;
                            // setTimeout(() => {
                            //   this.alert.basciAlert("Congratulations, MOKSH App is now ready to plan your global career.", "", "", ['OK']);
                            //   this.router.navigate(['/login']);
                            // }, 500);
                        }
                        else if (resp.statusCode == 400) {
                            this.firebaseAnalytics.logEvent("register", { action: 'failed', page: 'otp-verification' });
                            this.toastr.toastError("Email ID or Mobile No. already exist in the system.");
                            this.loader.loadingDismiss();
                        }
                    })
                        .catch(err => {
                        this.firebaseAnalytics.logEvent("register", { action: 'failed', page: 'otp-verification' });
                        console.log("submitForm==> " + +err);
                        this.toastr.toastError(err.status);
                        this.ionicForm.invalid;
                        console.log("end");
                        this.loader.loadingDismiss();
                    });
                }
                else {
                }
            }
        });
    }
    autoLogin() {
        var loginData = JSON.parse(this.auth.arrRegistrationData);
        var mobileNo = loginData["mobileNo"];
        if (mobileNo.includes('+91')) {
            mobileNo = mobileNo;
        }
        else {
            mobileNo = '+91' + mobileNo;
        }
        var data = { "MobileNo": mobileNo.trim(), "Password": loginData["password"].trim(), "AccessKey": "nTBa3vPUCayrP3WeIxmQrkSSEOaA5nbMowYj47-UrDo" };
        this.auth.login(JSON.stringify(data)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (resp) {
                this.firebaseAnalytics.logEvent("login", { resp: 'success', page: 'otp-verification' });
                this.arrUserData = resp;
                yield this.storage.setString("OAuth", resp.token);
                yield this.storage.setObject("userdata", resp);
                if (resp.rawLeadID != 0 || resp.rawLeadID != "") {
                    this.getCounsellor();
                }
                this.router.navigate(['/home/landing-page']);
            }
            else {
                this.router.navigate(['/home/login']);
            }
            this.auth.arrRegistrationData = "";
        })).catch(err => {
            this.firebaseAnalytics.logEvent("login", { resp: 'failed', page: 'otp-verification' });
            this.router.navigate(['/home/login']);
        });
    }
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
    updateCRMRawData(appLoginID) {
        this.apiCRMService.fnGetCRMRawData(this.rawLeadID).then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMRawData["appLoginId"] = appLoginID;
                this.apiCRMService.fnSetCRMRawData();
                //this.auth.arrRegistrationData = "";
            }
        });
    }
    //#endregion
    //#region OTP functionality
    validateOTP() {
        this.isOTPValid = false;
        var enteredOTP = this.ionicForm.value.otp1 + this.ionicForm.value.otp2 + this.ionicForm.value.otp3 + this.ionicForm.value.otp4;
        if (enteredOTP = this.auth.OTP) {
            this.isOTPValid = true;
        }
        else {
            this.isOTPValid = false;
            this.toastr.toastSuccess("Oops! You have entered wrong OTP. Please chcek and try again.");
            return;
        }
        return this.isOTPValid;
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
                this.router.navigate(["/register", { sessionExpirate: 'true' }]);
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
    ngOnDestroy() {
        this.idle.stop();
    }
    ionViewWillLeave() {
        this.idle.stop();
    }
};
OtpVerificationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_12__.Idle },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_3__.ApiCRMService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseAnalytics }
];
OtpVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-otp-verification',
        template: _raw_loader_otp_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otp_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpVerificationPage);



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

/***/ 30434:
/*!*******************************************************************!*\
  !*** ./src/app/index/otp-verification/otp-verification.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".counter h5 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #2ab2df;\n}\n.counter p {\n  color: #999;\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQUcsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsY0FBQTtBQUU1QztBQURJO0VBQUcsV0FBQTtFQUFZLGNBQUE7QUFLbkIiLCJmaWxlIjoib3RwLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvdW50ZXJ7XHJcbiAgICBoNXtmb250LXNpemU6IDEuNnJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6ICMyYWIyZGZ9XHJcbiAgICBwIHtjb2xvcjojOTk5OyBmb250LXNpemU6IDkwJTt9XHJcbn0iXX0= */");

/***/ }),

/***/ 44769:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/otp-verification/otp-verification.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"index/login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"form-cont no-icon\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate (ionFocus)=\"clear($event)\">\r\n     <h3 class=\"text-center\">OTP Verification</h3>\r\n\r\n     <br>\r\n     <div class=\"text-center\">\r\n       <p>We have sent a confirmation code on your mobile number.\r\n         Please enter it below.\r\n       </p>\r\n     </div>\r\n     <div class=\"counter text-center\">\r\n        <h5> {{timeCounter}}</h5>\r\n        <p> OTP will expire in 2 minutes.</p>\r\n     </div>\r\n    \r\n     <br>\r\n    <ion-grid class=\"otp-cont\">     \r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp1.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \r\n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\" type=\"number\" formControlName=\"otp1\" #otp1 (keyup)=\"otpController($event,otp2,'')\"></ion-input>\r\n          </ion-item>          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp2.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \r\n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\"  type=\"number\" formControlName=\"otp2\" #otp2 (keyup)=\"otpController($event,otp3,otp1)\"></ion-input>\r\n          </ion-item>          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp3.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \r\n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\"  type=\"number\" formControlName=\"otp3\" #otp3 (keyup)=\"otpController($event,otp4,otp2)\"></ion-input>\r\n          </ion-item>          \r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.otp4.errors?.required\"></span>\r\n          <ion-item class=\"ion-no-padding\" lines=\"none\">                        \r\n            <ion-input maxlength=\"1\" pattern=\"[0-9]{1}\" size=\"large\"  type=\"number\" formControlName=\"otp4\" #otp4 (keyup)=\"otpController($event,'',otp3)\"></ion-input>\r\n          </ion-item>          \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <br>\r\n    <section class=\"btn-cont\">\r\n      <ion-button size=\"large\" expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Verify\r\n        <ion-ripple-effect></ion-ripple-effect>\r\n      </ion-button>\r\n    </section>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_index_otp-verification_otp-verification_module_ts.js.map