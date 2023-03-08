(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_index_login-new_login-new_module_ts-src_app_services_header-title_service_ts-src_app_-c1379a"],{

/***/ 64821:
/*!*************************************************************!*\
  !*** ./src/app/index/login-new/login-new-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginNewPageRoutingModule": () => (/* binding */ LoginNewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_new_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-new.page */ 79473);




const routes = [
    {
        path: '',
        component: _login_new_page__WEBPACK_IMPORTED_MODULE_0__.LoginNewPage
    }
];
let LoginNewPageRoutingModule = class LoginNewPageRoutingModule {
};
LoginNewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginNewPageRoutingModule);



/***/ }),

/***/ 66835:
/*!*****************************************************!*\
  !*** ./src/app/index/login-new/login-new.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginNewPageModule": () => (/* binding */ LoginNewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_new_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-new-routing.module */ 64821);
/* harmony import */ var _login_new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-new.page */ 79473);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let LoginNewPageModule = class LoginNewPageModule {
};
LoginNewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_new_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginNewPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_login_new_page__WEBPACK_IMPORTED_MODULE_1__.LoginNewPage]
    })
], LoginNewPageModule);



/***/ }),

/***/ 79473:
/*!***************************************************!*\
  !*** ./src/app/index/login-new/login-new.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginNewPage": () => (/* binding */ LoginNewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_new_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-new.page.html */ 22635);
/* harmony import */ var _login_new_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-new.page.scss */ 29636);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ 12013);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ 62218);













let LoginNewPage = class LoginNewPage {
    constructor(formBuilder, auth, router, storageService, firebaseAnalytics, notification, toastr, smsRetriever) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.storageService = storageService;
        this.firebaseAnalytics = firebaseAnalytics;
        this.notification = notification;
        this.toastr = toastr;
        this.smsRetriever = smsRetriever;
        this.isSubmitted = false;
        this.savedMobileNo = "";
        this.arrUserData = [];
        this.AssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath;
        this.slideBannerOpts = { slidesPerView: 1, autoplay: true };
        this.arrBanner = [];
        this.smsHash = "";
        this.smsRetriever.getAppHash()
            .then(respHash => { console.log(respHash), this.smsHash = respHash; })
            .catch((error) => console.error(error));
    }
    ngOnInit() {
        this.initForm();
        this.getBanner();
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.setCurrentScreen("Login");
        this.autoFill();
        this.isLoading = false;
        this.isSubmitted = false;
    }
    //#region Init Form
    initForm() {
        this.ionicForm = this.formBuilder.group({
            MobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^([0-9]{10})$')]]
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
            //var data = {"MobileNo": mobileNo,"Password": this.ionicForm.value.Password, "AccessKey" : "nTBa3vPUCayrP3WeIxmQrkSSEOaA5nbMowYj47-UrDo"}  
            var otpGenerator = __webpack_require__(/*! otp-generator */ 42114);
            var otp = otpGenerator.generate(4, { upperCase: false, alphabets: false, specialChars: false });
            console.log(otp);
            this.auth.OTP = otp; // set in service
            var messageBody = "Hi, " + otp + " / " + this.smsHash + " is One Time Password (OTP) for MOKSH registration. Please enter the OTP to continue registration.";
            let postSmsData = { "MobileNo": this.ionicForm.value.MobileNo.toString(), "MessageBody": messageBody };
            this.sendSMS(postSmsData);
            //this.router.navigate(['/otp-verification-new'], {queryParams:{no: this.ionicForm.value.MobileNo}});
        }
    }
    //#endregion
    //#region Email SMS
    sendSMS(postData) {
        this.notification.sendSMS(JSON.stringify(postData)).then(resp => {
            console.log(resp.status);
            this.toastr.toastSuccess("An OTP is sent to your mobile number!");
            this.auth.isTimeOut = false;
            this.router.navigate(['/otp-verification-new'], { queryParams: { no: this.ionicForm.value.MobileNo } });
        })
            .catch(err => {
            console.log(err.title);
            this.isLoading = false;
            this.toastr.toastError("OTP not sent due to some technical problem. Please try after some time");
        });
    }
    //#endregion
    getBanner() {
        var path = this.AssetsPath + "mobility-app/login";
        this.arrBanner = [
            { 'id': 1, 'imgPath': path + "/banner1.jpg" },
            { 'id': 2, 'imgPath': path + "/banner2.jpg" },
            { 'id': 3, 'imgPath': path + "/banner3.jpg" },
            { 'id': 4, 'imgPath': path + "/banner4.jpg" },
        ];
    }
};
LoginNewPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_5__.FirebaseAnalytics },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_8__.SmsRetriever }
];
LoginNewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-login-new',
        template: _raw_loader_login_new_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_new_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginNewPage);



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

/***/ 29636:
/*!*****************************************************!*\
  !*** ./src/app/index/login-new/login-new.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".login-cont > figure {\n  margin: 0px;\n}\n.login-cont > figure > img {\n  max-height: 8rem;\n  object-fit: cover;\n}\n.login-cont > figure figcaption {\n  position: absolute;\n  top: 0px;\n  right: 20px;\n}\n.login-cont > figure figcaption h2 {\n  color: var(--ion-color-primary);\n  font-weight: 700;\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n.login-cont > figure figcaption h2 span {\n  display: block;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 70%;\n  letter-spacing: 1px;\n  margin-top: 5px;\n}\n.login-cont .logo-cont {\n  padding: 14px 1rem;\n  background: #eee;\n  margin-bottom: 1rem;\n}\n.login-cont .logo-cont ion-col {\n  margin: auto 0px;\n}\n.login-cont .logo-cont ion-col img {\n  width: 100%;\n  max-width: 10rem;\n}\n.login-cont .logo-cont ion-col .logo img {\n  max-width: 7rem;\n}\n.login-cont form > ion-text {\n  display: block;\n  /*background:var(--ion-color-secondary);*/\n  padding: 8px;\n  margin: 0px -15px;\n}\n.login-cont form > ion-text h3 {\n  margin: 0px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.banner-sec {\n  border-bottom: 1px solid #ddd;\n  padding: 12px;\n  padding-bottom: 1rem;\n}\n.banner-sec ion-slides {\n  border-radius: 5px;\n}\n.banner-sec figure img {\n  border: 0px;\n  --border-radius: 5px;\n  display: block;\n}\n@media only screen and (max-width: 360px) {\n  .login-cont ion-text h3 {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW5ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBUyxXQUFBO0FBQ2I7QUFBUTtFQUFNLGdCQUFBO0VBQWtCLGlCQUFBO0FBSWhDO0FBSE07RUFBWSxrQkFBQTtFQUFvQixRQUFBO0VBQVMsV0FBQTtBQVEvQztBQVBNO0VBQWMsK0JBQUE7RUFBaUMsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQix5QkFBQTtBQWF4RjtBQVpNO0VBQW1CLGNBQUE7RUFBZ0IseUJBQUE7RUFBd0IsY0FBQTtFQUFnQixtQkFBQTtFQUFxQixlQUFBO0FBbUJ0RztBQWhCSTtFQUFXLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLG1CQUFBO0FBcUJyRDtBQXBCUTtFQUFRLGdCQUFBO0FBdUJoQjtBQXRCWTtFQUFJLFdBQUE7RUFBYSxnQkFBQTtBQTBCN0I7QUF4QmdCO0VBQUksZUFBQTtBQTJCcEI7QUF0QlE7RUFBVyxjQUFBO0VBQWdCLHlDQUFBO0VBQTJDLFlBQUE7RUFBYyxpQkFBQTtBQTRCNUY7QUEzQlk7RUFBRyxXQUFBO0VBQWEsaUJBQUE7RUFBbUIsZ0JBQUE7QUFnQy9DO0FBM0JFO0VBQVksNkJBQUE7RUFBOEIsYUFBQTtFQUFjLG9CQUFBO0FBaUMxRDtBQWhDSTtFQUFXLGtCQUFBO0FBbUNmO0FBakNRO0VBQUksV0FBQTtFQUFhLG9CQUFBO0VBQXNCLGNBQUE7QUFzQy9DO0FBbENFO0VBRU07SUFBWSxpQkFBQTtFQXFDbEI7QUFDRiIsImZpbGUiOiJsb2dpbi1uZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnR7XHJcbiAgICA+IGZpZ3VyZXttYXJnaW46IDBweDtcclxuICAgICAgICA+IGltZ3ttYXgtaGVpZ2h0OiA4cmVtOyBvYmplY3QtZml0OiBjb3Zlcjt9XHJcbiAgICAgIGZpZ2NhcHRpb24ge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOjBweDsgcmlnaHQ6IDIwcHg7fVxyXG4gICAgICBmaWdjYXB0aW9uIGgye2NvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMnJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTt9XHJcbiAgICAgIGZpZ2NhcHRpb24gaDIgc3BhbntkaXNwbGF5OiBibG9jazsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgZm9udC1zaXplOiA3MCU7IGxldHRlci1zcGFjaW5nOiAxcHg7IG1hcmdpbi10b3A6IDVweDt9XHJcbiAgICB9XHJcbiAgICAvLy5sb2dvLWNvbnR7d2lkdGg6IDhyZW07IG1hcmdpbjogMHB4IGF1dG87IGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuMSk7IHBhZGRpbmc6IDEuNnJlbSAxcmVtOyBib3JkZXItcmFkaXVzOiAzMHB4OyBtYXJnaW4tdG9wOiAtNXJlbTsgYmFja2dyb3VuZDogI2ZmZjsgcG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxO31cclxuICAgIC5sb2dvLWNvbnR7cGFkZGluZzogMTRweCAxcmVtOyBiYWNrZ3JvdW5kOiAjZWVlOyBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGlvbi1jb2x7bWFyZ2luOiBhdXRvIDBweDtcclxuICAgICAgICAgICAgaW1ne3dpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwcmVtO31cclxuICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICBpbWd7bWF4LXdpZHRoOiA3cmVtO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcm0ge1xyXG4gICAgICAgID4gaW9uLXRleHR7ZGlzcGxheTogYmxvY2s7IC8qYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTsqLyBwYWRkaW5nOiA4cHg7IG1hcmdpbjogMHB4IC0xNXB4O1xyXG4gICAgICAgICAgICBoM3ttYXJnaW46IDBweDsgZm9udC1zaXplOiAxLjJyZW07IGZvbnQtd2VpZ2h0OiA2MDA7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYW5uZXItc2Vje2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO3BhZGRpbmc6IDEycHg7cGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBpb24tc2xpZGVze2JvcmRlci1yYWRpdXM6IDVweDt9XHJcbiAgICBmaWd1cmV7XHJcbiAgICAgICAgaW1ne2JvcmRlcjogMHB4OyAtLWJvcmRlci1yYWRpdXM6IDVweDsgZGlzcGxheTogYmxvY2s7fVxyXG4gICAgfVxyXG59XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWF4LXdpZHRoOjM2MHB4KXtcclxuICAgIC5sb2dpbi1jb250e1xyXG4gICAgICAgIGlvbi10ZXh0IGgze2ZvbnQtc2l6ZTogMS4ycmVtO31cclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ 22635:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/login-new/login-new.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"pb-0\">\n  <div class=\"login-cont\">\n    \n   \n      <section class=\"banner-sec\">      \n        <ion-slides [options]=\"slideBannerOpts\" pager=\"true\">\n          <ion-slide *ngFor=\"let item of arrBanner\">\n            <figure>\n              <img src=\"{{item.imgPath}}\" />\n            </figure>\n          </ion-slide>      \n        </ion-slides>\n        </section>\n   \n\n    <div class=\"logo-cont\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <figure class=\"text-center logo m-0\">\n            <img src=\"../../assets/moksh-logo.png\">\n          </figure></ion-col>\n         \n        </ion-row>\n      </ion-grid>\n      \n    </div>\n    <form class=\"form-cont pt-0\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <ion-text class=\"text-center\">\n        <h3>Sign in to plan a Global Career</h3>\n      </ion-text>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n              <ion-label position=\"floating\">Mobile No.</ion-label>\n              <ion-input maxlength=\"12\"   type=\"number\" formControlName=\"MobileNo\"></ion-input>\n            </ion-item>\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.MobileNo.errors?.pattern\">Please enter 10 digit Mobile No.</span>\n          </ion-col>\n        </ion-row>        \n      </ion-grid>      \n      <section class=\"btn-cont\">\n        <ion-button  expand=\"block\" type=\"submit\" [disabled]=\"!ionicForm.valid || isLoading\" color=\"primary\">Continue          \n          <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n        </ion-button>\n      </section>\n      \n      <section class=\"text-center d-none\">\n        <div class=\"separator mb-3\">\n          <span>OR</span>\n        </div>\n        <ion-text color=\"primary\" [routerLink]=\"['/register']\">\n          Register with Email ID\n        </ion-text>        \n      </section>\n    </form>\n  </div>\n  \n</ion-content>\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_index_login-new_login-new_module_ts-src_app_services_header-title_service_ts-src_app_-c1379a.js.map