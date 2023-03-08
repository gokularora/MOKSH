(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/home.guard */ 3352);
/* harmony import */ var _guards_index_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/index.guard */ 20556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);





const routes = [
    {
        path: '',
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__.HomeGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_api-application_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        canActivate: [_guards_index_guard__WEBPACK_IMPORTED_MODULE_1__.IndexGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_index_index_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./index/index.module */ 30722)).then(m => m.IndexPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/storage.service */ 71188);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api-general.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/splash-screen */ 88592);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/network */ 63848);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17324);
/* harmony import */ var _services_local_notify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/local-notify.service */ 6957);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_api_programs_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/api-programs.service */ 7396);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _capacitor_community_privacy_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor-community/privacy-screen */ 46455);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/app */ 42138);
/* harmony import */ var _services_api_crm_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/api-crm.service */ 77413);























let AppComponent = class AppComponent {
    constructor(platform, statusBar, alertController, _location, toastr, localNotifications, localNotifyService, router, sanitizer, apiProgramsService, apiCRMService, appVersion, apiGeneralService, auth, storage, zone) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.alertController = alertController;
        this._location = _location;
        this.toastr = toastr;
        this.localNotifications = localNotifications;
        this.localNotifyService = localNotifyService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.apiProgramsService = apiProgramsService;
        this.apiCRMService = apiCRMService;
        this.appVersion = appVersion;
        this.apiGeneralService = apiGeneralService;
        this.auth = auth;
        this.storage = storage;
        this.zone = zone;
        this.arrWebinars = [];
        this.arrGetWebinarURL = [];
        this.isModalClosed = false;
        this.arrModalData = { 'Subject': '', 'imageName': '', 'posterId': '', 'JoinUrl': '' };
        this.posterPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.webAssetsPath + "mobility-app/poster/";
        this.slideBannerOpts = { slidesPerView: 1, autoplay: true };
        this.arrSlider = [];
        this.initializeApp();
        //this.startNotify();
        //this.notifyWebinar();
        this.getPoster();
    }
    initializeApp() {
        console.log("initializeApp");
        setTimeout(() => { _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_7__.SplashScreen.hide(); }, 3000);
        this.platform.ready().then(() => {
            this.isAndroid = (this.platform.is('android')) ? true : false;
        });
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString("#ffc409");
        console.log("splash start");
        _capacitor_network__WEBPACK_IMPORTED_MODULE_9__.Network.addListener('networkStatusChange', status => {
            console.log('Network status changed', status);
            this.networkStatus = status.connected;
            console.log(this.networkStatus);
        });
        this.getAppConfig();
        this.backButtonAlert();
        setTimeout(() => {
            this.setCallLog();
            //this.getCounsellorData();
        }, 3000);
    }
    initDeepLink() {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_15__.App.addListener('appUrlOpen', (event) => {
            this.zone.run(() => {
                // Example url: https://beerswift.app/tabs/tab2
                // slug = /tabs/tab2
                const slug = event.url.split(".app").pop();
                if (slug) {
                    this.router.navigateByUrl(slug);
                }
                // If no match, do nothing - let regular routing
                // logic take over
            });
        });
    }
    enableScreesnShot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_community_privacy_screen__WEBPACK_IMPORTED_MODULE_14__.PrivacyScreen.disable();
        });
    }
    disableScreesnShot() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_community_privacy_screen__WEBPACK_IMPORTED_MODULE_14__.PrivacyScreen.enable();
        });
    }
    getAppConfig() {
        let postData = { "name": "MobilityApp" };
        this.apiGeneralService.getSystemEnvironment(JSON.stringify(postData)).then(resp => {
            this.apiGeneralService.objEnviroment = resp[0];
            var newVersion = resp[0]["version"];
            if (resp[0].isUpdatePopup == true) {
                this.isUpdateMandatory = resp[0]["isMandatory"];
                this.appVersion.getVersionNumber().then(respVersion => {
                    if (respVersion != newVersion) {
                        this.isNewVersion = true;
                    }
                });
            }
            if (resp[0]["isScreenshot"] == false) {
                this.disableScreesnShot();
            }
            else if (resp[0]["isScreenshot"] == true) {
                this.enableScreesnShot();
            }
            else {
                this.disableScreesnShot();
            }
        });
    }
    backButtonAlert() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Back press handler!');
            if (this._location.isCurrentPathEqualTo('/home/college-predictor')) {
                console.log('Show Exit Alert!');
                this.showExitConfirm();
            }
            else {
                debugger;
                if (this._location.isCurrentPathEqualTo('/home/scholarship/scholarship-home')) {
                    //if(window.location.href.indexOf('top-links/scholarship') > -1){
                    document.addEventListener('backbutton', function (event) {
                        console.log('addEventListener');
                        event.preventDefault();
                        event.stopPropagation();
                    }, false);
                }
                else {
                    console.log('Navigate to back page');
                    this._location.back();
                }
            }
        });
    }
    onClickUpdateApp() {
        window.open("https://play.google.com/store/apps/details?id=com.moksh16.mobility", '_system');
    }
    //#region App Exit Alert Start
    showExitConfirm() {
        this.alertController.create({
            header: 'App termination',
            message: 'Do you want to close the app?',
            backdropDismiss: false,
            buttons: [{
                    text: 'Stay', role: 'cancel',
                    handler: () => {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Exit',
                    handler: () => {
                        navigator['app'].exitApp();
                    }
                }]
        })
            .then(alert => {
            alert.present();
        });
    }
    //#endregion
    //#region Webinar Popup
    single_notification() {
        // Schedule a single notification
        this.localNotifications.schedule({
            id: 1,
            title: 'The counseling session started',
            text: 'The counseling session ' + this.arrModalData["Subject"] + ' has just started. Please join now',
            sound: this.isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
            vibrate: true
        });
    }
    startNotify() {
        var myInterval;
        myInterval = setInterval(function () {
            if (this.isModalClosed == false) {
                this.notifyWebinar();
            }
            else {
                clearInterval(myInterval);
                setTimeout(() => {
                    this.isModalClosed = false;
                    this.startNotify();
                }, (60000 * 30));
            }
        }.bind(this), 20000);
    }
    notifyWebinar() {
        this.localNotifyService.notify().then((resp) => {
            if (resp == 0) {
                this.isWebinarNotify = false;
            }
            else {
                this.isPoster = false;
                this.arrModalData = resp;
                if (resp) {
                    if (this.isWebinarNotify != true) {
                        this.single_notification();
                    }
                    this.isWebinarNotify = true;
                }
            }
        });
    }
    onClickJoinNow() {
        if (this.arrModalData["JoinUrl"] == "") {
            this.isWebinarNotify = false;
            this.router.navigate(['/home/counselling']);
        }
        else {
            window.open(this.arrModalData["JoinUrl"], '_system');
        }
    }
    onClickModalClose() {
        this.isWebinarNotify = false;
        this.isPoster = false;
        this.isModalClosed = true;
        this.isNewVersion = false;
    }
    //#endregion
    //#region POSTER
    getPoster() {
        var myInterval;
        myInterval = setInterval(() => {
            if (this.router.url.includes('/welcome') || this.router.url.includes('predictor')) {
                this.localNotifyService.initPoster().then((resp) => {
                    if (resp.length > 0) {
                        this.arrSlider = resp;
                        this.isPoster = true;
                    }
                });
            }
            else {
                clearInterval(myInterval);
            }
        }, (6000));
    }
    onClickPoster(item) {
        this.isPoster = false;
        if (this.arrModalData["videoURL"] != "" && this.arrModalData["videoURL"] != undefined) {
            this.playVideo(this.arrModalData["videoURL"]);
        }
        else if (item["internalURL"] != "") {
            this.router.navigate([item["internalURL"]]);
        }
        else {
            if (item["universityId"] != 0) {
                this.router.navigate(['/home/university-details', item["universityId"]]);
                return false;
            }
            if (item["countryId"] != 0) {
                this.apiProgramsService.filteredData.countryId = item["countryId"];
                this.router.navigate(['/home/universities']);
            }
        }
    }
    playVideo(videoSrc) {
        if (videoSrc == "") {
            this.toastr.toastError("Oops! Video is not available.");
            return false;
        }
        this.iframe = this.sanitizer.bypassSecurityTrustHtml('<iframe src="' + videoSrc + '" frameborder="0" style="width: 100%; height: 100%;"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        this.isVideoOpen = true;
    }
    videoPanelClose() {
        this.isVideoOpen = false;
    }
    //#endregion
    setCallLog() {
        this.storage.getObject("userdata").then(resUserData => {
            this.arrUserData = resUserData;
            if (resUserData != null) {
                this.auth.getAppRegistration().then(resp => {
                    if (resp) {
                        resp["lastlogin"] = this.apiGeneralService.getCurrentDateTime();
                        this.auth.putAppRegistration(JSON.stringify(resp));
                    }
                });
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_19__.Location },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_10__.LocalNotifications },
    { type: _services_local_notify_service__WEBPACK_IMPORTED_MODULE_11__.LocalNotifyService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.DomSanitizer },
    { type: _services_api_programs_service__WEBPACK_IMPORTED_MODULE_12__.ApiProgramsService },
    { type: _services_api_crm_service__WEBPACK_IMPORTED_MODULE_16__.ApiCRMService },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__.AppVersion },
    { type: _services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.NgZone }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-idle/core */ 20882);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 77370);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17324);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/interceptor */ 45635);
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-super-tabs/angular */ 94801);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37961);
/* harmony import */ var _ionic_native_device_accounts_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/device-accounts/ngx */ 7041);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 69390);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var _ionic_native_firebase_crashlytics_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/firebase-crashlytics/ngx */ 18152);
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ 62218);
















//import { BackgroundMode } from '@ionic-native/background-mode/ngx';









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot({
                rippleEffect: false,
                mode: 'ios'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _ng_idle_core__WEBPACK_IMPORTED_MODULE_22__.NgIdleModule.forRoot(),
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_23__.SuperTabsModule.forRoot()
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_0__.StatusBar,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HTTP_INTERCEPTORS, useClass: _interceptor_interceptor__WEBPACK_IMPORTED_MODULE_8__.Interceptor, multi: true },
            _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_3__.PreviewAnyFile,
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__.ScreenOrientation,
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__.CallNumber,
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__.LocalNotifications,
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__.AppVersion,
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__.SocialSharing,
            _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_10__.PDFGenerator,
            _ionic_native_device_accounts_ngx__WEBPACK_IMPORTED_MODULE_11__.DeviceAccounts,
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__.Clipboard,
            _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_13__.FirebaseAnalytics,
            _ionic_native_firebase_crashlytics_ngx__WEBPACK_IMPORTED_MODULE_14__.FirebaseCrashlytics,
            _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_15__.SmsRetriever
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 3352:
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeGuard": () => (/* binding */ HomeGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);




let HomeGuard = class HomeGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.storageService.getString('OAuth').then(res => {
                if (res.value) {
                    resolve(true);
                }
                else {
                    this.router.navigate(['/login-new']);
                    resolve(false);
                }
            }).catch(err => {
                resolve(false);
            });
        });
    }
};
HomeGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
HomeGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HomeGuard);



/***/ }),

/***/ 20556:
/*!***************************************!*\
  !*** ./src/app/guards/index.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexGuard": () => (/* binding */ IndexGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);




let IndexGuard = class IndexGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.storageService.getObject("userdata").then(res => {
                if (res != null) {
                    if (res["firstName"] == "" || res["firstName"] == null) {
                        this.router.navigate(['/home/user-profile/setup-profile']);
                    }
                    else {
                        this.router.navigate(['/home/welcome']);
                    }
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            })
                .catch(err => {
                resolve(true);
            });
        });
    }
};
IndexGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
IndexGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], IndexGuard);



/***/ }),

/***/ 45635:
/*!********************************************!*\
  !*** ./src/app/interceptor/interceptor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interceptor": () => (/* binding */ Interceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/alert.service */ 25970);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);







let Interceptor = class Interceptor {
    constructor(auth, alert) {
        this.auth = auth;
        this.alert = alert;
        this.counter = 0;
        this.token = "";
    }
    intercept(request, next) {
        this.auth.userData$.subscribe((resp) => {
            if (resp == null) {
                return false;
            }
            else {
                this.token = resp.token;
            }
        });
        if (this.token) {
            if (request.url.includes('api.moksh16.in')) {
                request = request.clone({
                    setHeaders: {
                        'Authorization': 'bearer ' + this.token
                    }
                });
                if (!request.headers.has('Content-Type') && !request.url.includes('AddDocument')) {
                    request = request.clone({
                        setHeaders: {
                            'content-type': 'application/json'
                        }
                    });
                }
            }
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
                // console.log('event--->>>', event);
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            if (error.status === 401) {
                // if (error.error.success === false) {
                //   console.log('Login failed');
                // } else {
                //   this.router.navigate(['/login']);
                // }
                //this.alert.basciAlert("Opps! Session Expired. Please login again.","","",['OK']);
                this.auth.logout();
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
};
Interceptor.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService }
];
Interceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], Interceptor);



/***/ }),

/***/ 25970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    basciAlert(header, subHeader, message, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertController.create({
                header,
                subHeader,
                message,
                buttons
            });
            yield this.alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 77413:
/*!*********************************************!*\
  !*** ./src/app/services/api-crm.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiCRMService": () => (/* binding */ ApiCRMService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);





let ApiCRMService = class ApiCRMService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
        this.LeadSourceID = "226";
        this.EmpID = "18";
        this.LeadPriorityID = "3";
        this.FranchiseeID = "1";
        this.ProductDepartmentMBBS = "1";
        this.ProductSubDepartmentMBBS = "1";
        this.ProductSubDepartmentMBBSIndia = "17";
        this.ProductDepartmentGermany = "2";
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiCRMUrl;
        this.apiCore = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiCRMUrlCore;
        this.arrCRMRawData = { "rawLeadId": 0, "leadId": 0, "fname": "", "lname": "", "contactWhatsappCode": "", "contactWhatsapp": "", "contactOtherCode": "", "contactOther": "", "emailId": "", "districtId": 0, "stateId": 0, "isMobilityApp": null, "isAcademyApp": null, "predictorPackage": "", "suitableFor": "", "isScholarshipTest": null, "budgetId": 0, "webinarCount": 0, "webinarId": "", "webinarRegistrantKey": "", "webinarJoinUrl": "", "webinarJoinTime": null, "webinarEndTime": null, "webinarLogId": 0, "webinarStatusId": 0, "webinarNotes": "", "groupMeetStatusId": 0, "leadSourceId": 0, "leadPriorityId": 0, "interestedCountryId": 0, "interestedCountryName": "", "interestedProgramId": 0, "interestedProgramName": "", "studentEducationId": 0, "examId": 0, "entranceExamScore": 0, "entranceExamAttempt": "", "callStatusId": 0, "callDispositionStatusId": 0, "leadNotes": "", "productDepartmentId": 0, "subProductDepartmentId": 0, "franchiseeId": 0, "refFranchiseeId": 0, "empId": 0, "allocatedBy": "", "allocatedDate": "2021-10-21T07:43:41.081Z", "createdBy": "", "createdDate": "2021-10-21T07:43:41.081Z", "modifiedBy": "", "modifiedDate": "2021-10-21T07:43:41.081Z", "createdIp": "", "modifiedIp": "", "isActive": null, "webinarLinkId": 0, "appLoginID": 0, "sysProductDepartmentID": 0, "sysSubProductDepartmentID": 0, "lmsCourse": "", "entranceExamRank": 0, "entranceExamYear": 0, "studentEducationYear": 0, "responseCode": 0, "responseMsg": "" };
        this.arrCRMLeadData = { leadId: 0, rawLeadId: null, appLoginID: null, productDepartmentId: null, subProductDepartmentId: null, sysProductDepartmentID: null, sysSubProductDepartmentID: null, leadStatusId: null, leadSourceId: null, leadPriorityId: null, sysLeadPriorityID: null, sysLeadPriorityDate: null, fname: "", lname: "", fatherName: "", motherName: "", fatherContactCode: "", fatherContact: "", motherContactCode: "", motherContact: "", contactWhatsappCode: "", contactWhatsapp: "", contactOtherCode: "", contactOther: "", emailId1: "", emailId2: "", address: "", cityId: null, city: "", districtId: null, districtName: "", stateId: null, state: "", countryId: null, country: "", pincode: "", passportStatus: "", examId: null, entranceExamAttempt: "", entranceExamRank: null, entranceExamScore: null, entranceExamYear: null, studentEducationId: null, studentEducationYear: null, entranceStatusId: null, qualifySubId: null, qualifyMarks: null, isMobilityApp: null, isAcademyApp: null, predictorPackage: "", suitableFor: "", isScholarshipTest: null, lmsCourse: "", budgetId: null, webinarStatusId: null, isWebinarSmsSent: null, isWebinarEmailSent: null, personalStatusId: null, isPersonalSmsSent: null, isPersonalEmailSent: null, groupMeetStatusId: null, isGroupSmsSent: null, isGroupEmailSent: null, teleCounsStatusId: null, isTeleCounsSmsSent: null, isTeleCounsEmailSent: null, leadAttempt: "", countryIds: null, countryNames: "", programIds: null, programNames: "", universityIds: null, universityNames: "", preferredUniversityId: null, preferredUniversityName: "", preferredProgramId: null, preferredProgramName: "", preferredCountryId: null, preferredCountryName: "", callStatusId: null, isReminderReq: null, reminderTime: null, callDispositionStatusId: null, medicalYearId: null, collegeId: null, eventName: "", eventState: "", eventCity: "", eventDate: null, utM_Source: "", utM_Medium: "", reInquiryCount: null, reInquiryDate: null, reInquiryLeadSourceId: null, specialWebinarStatusId: null, orientationSubDepartmentId: null, orientationComments: "", lmsaccess: "", misreportNotes: "", leadSysNotes: "", leadNotes: "", counsellorName: "", createdBy: "", modifiedBy: "", createdDate: null, modifiedDate: null, createdIp: "", modifiedIp: "", franchiseeId: null, appBranchId: null, refBranchId: null, visitBranchId: null, visitDistrictId: null, visitDateTime: null, visitRemark: "", branchVisitRemark: "", isBranchRevealContact: null, isActive: null, isDeleted: null, isSeen: null, empID: null };
        this.arrUserData = [];
        this.arrSelection = [];
        this.arrCounsellor = [];
        this.enumPriority = { 'Not Interested': '1', 'Cold': '2', 'Warm': '3', 'Hot': '4', 'Super Hot': '5', 'Registered': '6' };
        this.enumLMSCourses = ['Foundation', 'NEET Crash', 'NMAT', 'USMLE Step 1', 'FSP', 'NEXT'];
        this.getUserData();
        this.fnGetIpAddress();
    }
    //#region API
    getCPState(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPState';
            return this.http.post(url, postData).toPromise();
        });
    }
    //#region CRM RAW DATA
    setCRMRawData(body) {
        //const url = this.api + 'setRawLead';
        const url = this.apiCore + 'raw/addorUpdateCRMRaw';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
    getCRMRawData(rawLeadId) {
        //const url = this.api + 'getRawLead';
        const url = this.apiCore + 'raw/getCRMRawByID?id=' + rawLeadId;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.get(url, { headers }).toPromise();
    }
    GetCheckDuplicateRawLead(body) {
        //const url = this.api + 'GetCheckDuplicateRawLead';
        const url = this.apiCore + 'raw/ValidateDuplicateRawLead';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
    GetLeadByRawID(body) {
        const url = this.apiCore + 'lead/getCRMLead';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
    GetCheckDuplicateLead(body) {
        //const url = this.api + 'GetCheckDuplicateLead';
        const url = this.apiCore + 'lead/validateDuplicateLead';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
    UpdateSysLeadPriority(body) {
        //const url = this.api + 'UpdateSysLeadPriority';
        const url = this.apiCore + 'lead/updateSysLeadPriority';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(url, body.toString(), { headers }).toPromise();
    }
    //#endregion
    //#region CRM LEAD DATA
    setCRMLeadData(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //const url = this.api + 'lead/addorUpdateCRMLead';
            const url = this.apiCore + 'lead/addorUpdateCRMLead';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body, { headers }).toPromise();
        });
    }
    getCRMLeadData(leadId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.apiCore + 'lead/getCRMLeadByID?id=' + leadId;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.get(url, { headers }).toPromise();
        });
    }
    //#endregion
    //#region Webinar API
    getWebinars(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //const url = this.api + 'GetGotoWebinar';
            const url = this.apiCore + 'gotowebinar/getWebinar';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    getGotoWebinarSystemLog(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'getGotoWebinarSystemLog';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    SetGotoWebinarRegistrant(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'SetGotoWebinarRegistrant';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    getRegisteredWebinar(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //const url = this.api + 'GetRawLeadWebinar';
            const url = this.apiCore + 'raw/getCRMRawWebinarDataList';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body, { headers }).toPromise();
        });
    }
    //#endregion
    getProductDepartment(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'GetProductDepartment';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    getProductSubDepartment(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'GetSubProductDepartment';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    getLeadCounsellor(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            //const url = this.api + 'GetLeadCounsellor';
            const url = this.apiCore + 'general/getLeadCounsellor';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    getLeadSource(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'GetLeadSource';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
            return this.http.post(url, body.toString(), { headers }).toPromise();
        });
    }
    //#endregion
    getCurrentDateTime() {
        var today = new Date();
        return today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + (today.getDate())).slice(-2) + 'T' + ("0" + (today.getHours())).slice(-2) + ':' + ("0" + (today.getMinutes())).slice(-2) + ':' + ("0" + (today.getSeconds())).slice(-2) + '.' + today.getMilliseconds() + '+05:30';
    }
    getIPAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.http.get("http://api.ipify.org/?format=json").toPromise();
        });
    }
    fnGetIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.ipAddress = yield this.getIPAddress().then(x => x.ip);
        });
    }
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.arrUserData = resp;
        });
    }
    // getCustomNotesDateTime() {
    //   var today = new Date();
    //   var newTime = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    //   var newDate = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    //   var newDateTime = newTime + ', ' + newDate.toString().replace(' ', '/').replace(' ', '/');
    //   return newDateTime;
    // }
    //=============== Business Logic ==================\\
    resetArrLeadPosData() {
        this.arrCRMLeadData = { leadId: 0, rawLeadId: null, appLoginID: null, productDepartmentId: null, subProductDepartmentId: null, sysProductDepartmentID: null, sysSubProductDepartmentID: null, leadStatusId: null, leadSourceId: null, leadPriorityId: null, sysLeadPriorityID: null, sysLeadPriorityDate: null, fname: "", lname: "", fatherName: "", motherName: "", fatherContactCode: "", fatherContact: "", motherContactCode: "", motherContact: "", contactWhatsappCode: "", contactWhatsapp: "", contactOtherCode: "", contactOther: "", emailId1: "", emailId2: "", address: "", cityId: null, city: "", districtId: null, districtName: "", stateId: null, state: "", countryId: null, country: "", pincode: "", passportStatus: "", examId: null, entranceExamAttempt: "", entranceExamRank: null, entranceExamScore: null, entranceExamYear: null, studentEducationId: null, studentEducationYear: null, entranceStatusId: null, qualifySubId: null, qualifyMarks: null, isMobilityApp: null, isAcademyApp: null, predictorPackage: "", suitableFor: "", isScholarshipTest: null, lmsCourse: "", budgetId: null, webinarStatusId: null, isWebinarSmsSent: null, isWebinarEmailSent: null, personalStatusId: null, isPersonalSmsSent: null, isPersonalEmailSent: null, groupMeetStatusId: null, isGroupSmsSent: null, isGroupEmailSent: null, teleCounsStatusId: null, isTeleCounsSmsSent: null, isTeleCounsEmailSent: null, leadAttempt: "", countryIds: null, countryNames: "", programIds: null, programNames: "", universityIds: null, universityNames: "", preferredUniversityId: null, preferredUniversityName: "", preferredProgramId: null, preferredProgramName: "", preferredCountryId: null, preferredCountryName: "", callStatusId: null, isReminderReq: null, reminderTime: null, callDispositionStatusId: null, medicalYearId: null, collegeId: null, eventName: "", eventState: "", eventCity: "", eventDate: null, utM_Source: "", utM_Medium: "", reInquiryCount: null, reInquiryDate: null, reInquiryLeadSourceId: null, specialWebinarStatusId: null, orientationSubDepartmentId: null, orientationComments: "", lmsaccess: "", misreportNotes: "", leadSysNotes: "", leadNotes: "", counsellorName: "", createdBy: "", modifiedBy: "", createdDate: null, modifiedDate: null, createdIp: "", modifiedIp: "", franchiseeId: null, appBranchId: null, refBranchId: null, visitBranchId: null, visitDistrictId: null, visitDateTime: null, visitRemark: "", branchVisitRemark: "", isBranchRevealContact: null, isActive: null, isDeleted: null, isSeen: null, empID: null };
    }
    //#region fn Raw Data
    fnGetCRMRawData(rawLeadId) {
        var rawLeadId;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (rawLeadId == undefined) {
                rawLeadId = yield this.storage.getObject("userdata").then((resp) => resp["rawLeadID"]);
            }
            return new Promise((resolve, reject) => {
                this.getCRMRawData(rawLeadId).then(resp => {
                    if (resp) {
                        this.arrCRMRawData = resp;
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }).catch(x => reject(x));
            });
        });
    }
    fnSetCRMRawData() {
        this.arrCRMRawData["modifiedDate"] = this.getCurrentDateTime();
        this.arrCRMRawData["modifiedBy"] = "MobileApp";
        this.arrCRMRawData["modifiedIp"] = this.ipAddress;
        this.arrCRMRawData["leadNotes"] = null;
        this.arrCRMRawData.isMobilityApp = true;
        if (this.arrCRMRawData["rawLeadId"] == "") {
            this.arrCRMRawData["createdDate"] = this.getCurrentDateTime();
            this.arrCRMRawData["createdBy"] = "MobileApp";
            this.arrCRMRawData["createdIp"] = this.ipAddress;
        }
        return new Promise((resolve, reject) => {
            this.setCRMRawData(JSON.stringify(this.arrCRMRawData)).then(resp => {
                if (resp.statusCode == 200) {
                    var arrData = resp.result;
                    resolve(arrData["rawLeadId"]);
                }
                else
                    resolve(0);
                this.resetArrRawPosData();
            });
        });
    }
    fnCheckDuplicateRawLead(ContactNo, EmailID) {
        let postdata = { "ContactOther": ContactNo, "EmailId1": EmailID };
        return new Promise((resolve, reject) => {
            this.GetCheckDuplicateRawLead(JSON.stringify(postdata)).then(resp => {
                //var data = resp;
                if (resp == null) {
                    resolve(0);
                }
                else {
                    resolve(resp);
                }
            });
        });
    }
    resetArrRawPosData() {
        this.arrCRMRawData = { "rawLeadId": 0, "leadId": 0, "fname": "", "lname": "", "contactWhatsappCode": "", "contactWhatsapp": "", "contactOtherCode": "", "contactOther": "", "emailId": "", "districtId": 0, "stateId": 0, "isMobilityApp": null, "isAcademyApp": null, "predictorPackage": "", "suitableFor": "", "isScholarshipTest": null, "budgetId": 0, "webinarCount": 0, "webinarId": "", "webinarRegistrantKey": "", "webinarJoinUrl": "", "webinarJoinTime": null, "webinarEndTime": null, "webinarLogId": 0, "webinarStatusId": 0, "webinarNotes": "", "groupMeetStatusId": 0, "leadSourceId": 0, "leadPriorityId": 0, "interestedCountryId": 0, "interestedCountryName": "", "interestedProgramId": 0, "interestedProgramName": "", "studentEducationId": 0, "examId": 0, "entranceExamScore": 0, "entranceExamAttempt": "", "callStatusId": 0, "callDispositionStatusId": 0, "leadNotes": "", "productDepartmentId": 0, "subProductDepartmentId": 0, "franchiseeId": 0, "refFranchiseeId": 0, "empId": 0, "allocatedBy": "", "allocatedDate": "2021-10-21T07:43:41.081Z", "createdBy": "", "createdDate": "2021-10-21T07:43:41.081Z", "modifiedBy": "", "modifiedDate": "2021-10-21T07:43:41.081Z", "createdIp": "", "modifiedIp": "", "isActive": null, "webinarLinkId": 0, "appLoginID": 0, "sysProductDepartmentID": 0, "sysSubProductDepartmentID": 0, "lmsCourse": "", "entranceExamRank": 0, "entranceExamYear": 0, "studentEducationYear": 0, "responseCode": 0, "responseMsg": "" };
    }
    //#endregion
    //#region fn Lead Data
    fnGetCRMLeadData(leadId) {
        var leadId;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (leadId == undefined) {
                leadId = yield this.storage.getObject("userdata").then((resp) => resp["leadID"]);
            }
            let postdata = { 'LeadID': leadId };
            return new Promise((resolve, reject) => {
                this.getCRMLeadData(leadId).then(resp => {
                    if (resp != null) {
                        this.arrCRMLeadData = resp;
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }
                }).catch(x => reject(x));
            });
        });
    }
    fnSetCRMLeadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.arrCRMLeadData["modifiedDate"] = this.getCurrentDateTime();
            this.arrCRMLeadData["modifiedBy"] = "MobileApp";
            this.arrCRMLeadData["modifiedBy"] = "MobileApp";
            this.arrCRMLeadData["leadNotes"] = null;
            if (this.arrCRMLeadData["leadId"] == "" || this.arrCRMLeadData["leadId"] == null) {
                yield this.storage.getObject("userdata").then((resp) => resp);
                this.arrCRMLeadData["createdDate"] = this.getCurrentDateTime();
                this.arrCRMLeadData["createdBy"] = "MobileApp";
            }
            this.arrCRMLeadData["isActive"] = true;
            this.arrCRMLeadData["isMobilityApp"] = true;
            return new Promise((resolve, reject) => {
                this.setCRMLeadData(JSON.stringify(this.arrCRMLeadData)).then(resp => {
                    //console.log(resp);
                    if (resp.statusCode == 200) {
                        var arrData = resp.result;
                        resolve(arrData);
                    }
                    else
                        resolve(0);
                    this.resetArrLeadPosData();
                });
            });
        });
    }
    fnCheckDuplicateLead(ContactNo, EmailID) {
        let postdata = { "ContactOther": ContactNo, "EmailId1": EmailID };
        return new Promise((resolve, reject) => {
            this.GetCheckDuplicateLead(JSON.stringify(postdata)).then(resp => {
                //var data = JSON.parse(resp.d);
                if (resp == null) {
                    resolve(0);
                }
                else {
                    resolve(resp);
                }
            });
        });
    }
    //#endregion  
    fnGetLeadByRawID(rawLeadID) {
        let postdata = { "rawLeadId": rawLeadID };
        return new Promise((resolve, reject) => {
            this.GetLeadByRawID(JSON.stringify(postdata)).then(resp => {
                var data = resp;
                if (data.length > 0) {
                    resolve(data[0]["leadId"]);
                }
                else {
                    resolve(0);
                }
            });
        });
    }
    updateSysLeadPriority(leadId) {
        if (leadId != 0 && leadId != undefined && leadId != '') {
            let postdata = { "leadId": leadId };
            return new Promise((resolve, reject) => {
                this.UpdateSysLeadPriority(JSON.stringify(postdata));
            });
        }
    }
};
ApiCRMService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
ApiCRMService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiCRMService);



/***/ }),

/***/ 7110:
/*!*************************************************!*\
  !*** ./src/app/services/api-general.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiGeneralService": () => (/* binding */ ApiGeneralService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);








let ApiGeneralService = class ApiGeneralService {
    constructor(http, auth, storage, router, socialSharing) {
        this.http = http;
        this.auth = auth;
        this.storage = storage;
        this.router = router;
        this.socialSharing = socialSharing;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.ipAddress = "";
        this.token = "";
        this.CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
        this.mobTrackingId = 0;
        this.mobParentTrackingId = 0;
        this.arrTrackingData = { "mobTrackingId": null, "appLoginId": null, "countryId": null, "progInterestID": null, "universityMainId": null, "universityId": null, "isBrochure": false, "isCallRequest": false, "isApply": false, "inTime": null, "outTime": null, "createdDate": null, "modifiedDate": null, "isActive": true };
        this.arrParentTrackingData = [];
        this.contentCategoryName = "";
        this.arrCounsellor = [];
        this.sliderTopLinksIndex = 0;
        this.sliderTopLinksPredIndex = 0;
        //#region Cache Variables
        this.arrSlider = [];
        this.arrVideoSection1 = [];
        this.arrVideoSection2 = [];
        this.arrVideoSection3 = [];
        this.arrVideoSectionMultiLingual = [];
        this.arrVideoYamuna = [];
        this.arrReviews = [];
        //#endregion
        this.notificationCall = 0;
        this.optedPackage = "";
        this.objEnviroment = {};
        this.getStorageSelection();
        this.fnGetIpAddress();
        if (this.arrUserData == null) {
            this.getUserData();
        }
    }
    //#region Other
    getIPAddress() {
        return this.http.get("http://api.ipify.org/?format=json").toPromise();
    }
    fnGetIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.ipAddress = yield this.getIPAddress().then(x => x.ip);
        });
    }
    getCurrentDateTime(customDate) {
        var today;
        if (customDate == undefined) {
            today = new Date();
        }
        else {
            today = new Date(customDate);
        }
        return today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + (today.getDate())).slice(-2) + 'T' + ("0" + (today.getHours())).slice(-2) + ':' + ("0" + (today.getMinutes())).slice(-2) + ':' + ("0" + (today.getSeconds())).slice(-2) + '.' + today.getMilliseconds() + '+05:30';
        //return today.toISOString();
    }
    getCustomNotesDateTime() {
        var today = new Date();
        var newTime = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        var newDate = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        var newDateTime = newTime + ', ' + newDate.toString().replace(' ', '/').replace(' ', '/');
        return newDateTime;
    }
    getGeolocation() {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.geoLocationURL + "?apiKey=" + src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.geoLocationAPIKey + "&ip=" + this.ipAddress;
        return this.http.get(url).toPromise();
    }
    getUserData() {
        this.storage.getObject("userdata").then(resp => {
            this.arrUserData = resp;
        });
    }
    //#endregion
    getResCountry(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetCountry';
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' }) };
            return this.http.post(url, postData, headerOption).toPromise();
        });
    }
    getResState(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetState';
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' }) };
            return this.http.post(url, postData, headerOption).toPromise();
        });
    }
    getResCity(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetDistrict';
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' }) };
            return this.http.post(url, postData, headerOption).toPromise();
        });
    }
    getBranches(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetBranch';
            return this.http.post(url, postData).toPromise();
        });
    }
    getBranchDistrictMap(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetBranchDistrictMap';
            return this.http.post(url, postData).toPromise();
        });
    }
    getNotitifications(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'CommunicationHandler/GetNotificationList';
            return this.http.post(url, postData).toPromise();
        });
    }
    setNotitifications(body, notificationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (notificationId == 0) {
                const url = this.api + 'CommunicationHandler/AddNotificationList';
                return this.http.post(url, body.toString()).toPromise();
            }
            else {
                const url = this.api + 'CommunicationHandler/UpdateNotificationList';
                return this.http.put(url, body.toString()).toPromise();
            }
        });
    }
    getVideoTopic(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetMobileVideo';
            return this.http.post(url, postData).toPromise();
        });
    }
    getVideos(postData) {
        const url = this.api + 'General/GetMobileVideoSub';
        return this.http.post(url, postData).toPromise();
    }
    getContent(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetMobileCategoryContents ';
            return this.http.post(url, postData).toPromise();
        });
    }
    getReviews(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetStudentReview ';
            return this.http.post(url, postData).toPromise();
        });
    }
    getContentCategory(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetContentCategory  ';
            return this.http.post(url, postData).toPromise();
        });
    }
    getFaqs(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetFaq';
            return this.http.post(url, postData).toPromise();
        });
    }
    getSlider(postData) {
        const url = this.api + 'General/GetSlider';
        return this.http.post(url, postData).toPromise();
    }
    getMobielPoster(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'General/GetMobilePoster';
            return this.http.post(url, postData).toPromise();
        });
    }
    getSystemEnvironment(postData) {
        const url = this.api + 'General/GetSystemEnvironment';
        let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(url, postData, headerOption).toPromise();
    }
    //== Tracking Start
    setMobileTracking(body, MobTrackingId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (MobTrackingId == 0) {
                const url = this.api + 'General/AddMobileTracking';
                return this.http.post(url, body.toString()).toPromise();
            }
            else {
                const url = this.api + 'General/UpdateMobileTracking';
                return this.http.put(url, body.toString()).toPromise();
            }
        });
    }
    fnSetTracking(eventName, universityId, universityMainId, isBrochure, isCallRequest, isApply, isNew) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //if (this.arrUserData["leadID"] != 0) {
            if (this.arrSelection == null) {
                yield this.storage.getObject("arrSelection").then((resp) => {
                    this.arrSelection = resp;
                    if (resp == null) {
                        this.auth.logout();
                    }
                });
            }
            var CurrentDateTime = this.getCurrentDateTime();
            if (eventName == "update") {
                if (this.arrTrackingDataNew == "") {
                    this.resetArrTrackingData();
                    eventName = "add";
                }
                else {
                    this.arrTrackingData = this.arrTrackingDataNew;
                    this.arrTrackingData["outTime"] = CurrentDateTime;
                    this.arrTrackingData["modifiedDate"] = CurrentDateTime;
                }
            }
            if (eventName == "add") {
                this.resetArrTrackingData();
                this.arrTrackingData["mobTrackingId"] = 0;
                this.arrTrackingData["inTime"] = CurrentDateTime;
                this.arrTrackingData["outTime"] = CurrentDateTime;
                this.arrTrackingData["createdDate"] = CurrentDateTime;
                this.arrTrackingData["modifiedDate"] = CurrentDateTime;
                this.arrTrackingData["isActive"] = true;
            }
            this.arrTrackingData["appLoginId"] = this.arrUserData["appLoginID"];
            this.arrTrackingData["countryId"] = (this.arrSelection["countryId"] == "") ? 0 : this.arrSelection["countryId"];
            this.arrTrackingData["progInterestID"] = this.arrSelection["progInterestId"];
            this.arrTrackingData["universityMainId"] = (universityMainId == undefined) ? this.arrTrackingData["universityMainId"] : universityMainId;
            this.arrTrackingData["universityId"] = (universityId == undefined) ? this.arrTrackingData["universityId"] : universityId;
            this.arrTrackingData["isBrochure"] = (isBrochure == undefined) ? this.arrTrackingData["isBrochure"] : isBrochure;
            this.arrTrackingData["isCallRequest"] = (isCallRequest == undefined) ? this.arrTrackingData["isCallRequest"] : isCallRequest;
            this.arrTrackingData["isApply"] = (isApply == undefined) ? this.arrTrackingData["isApply"] : isApply;
            var mobTrackingId = this.arrTrackingData["mobTrackingId"];
            this.setMobileTracking(JSON.stringify(this.arrTrackingData), mobTrackingId).then(resp => {
                this.arrTrackingDataNew = resp.result;
                if (isNew == true) {
                    this.arrTrackingDataNew = "";
                }
            });
            //}
        });
    }
    getStorageSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("arrSelection").then((resp) => {
                this.arrSelection = resp;
                // if(resp == null){
                //   this.router.navigateByUrl("/home/landing-page");
                // }
            });
        });
    }
    resetArrTrackingData() {
        this.arrTrackingData = { "mobTrackingId": null, "appLoginId": null, "countryId": null, "progInterestID": null, "universityMainId": null, "universityId": null, "isBrochure": false, "isCallRequest": false, "isApply": false, "inTime": null, "outTime": null, "createdDate": null, "modifiedDate": null, "isActive": true };
    }
    //== Tracking End
    fnSocialShare(message, subject, file, url, channel) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.socialSharing.share(message, "", file, url).then(resp => resolve(true))
                    .catch((ex) => {
                    resolve(false);
                    reject(ex);
                });
            });
        });
    }
};
ApiGeneralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing }
];
ApiGeneralService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ApiGeneralService);



/***/ }),

/***/ 7396:
/*!**************************************************!*\
  !*** ./src/app/services/api-programs.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiProgramsService": () => (/* binding */ ApiProgramsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);





let ApiProgramsService = class ApiProgramsService {
    //#endregion
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.ipAddress = "";
        this.productDepartmentID = "";
        this.universityID = "";
        this.universityMainID = "";
        this.applicationYearID = "";
        // countryID = "";
        // degreeID = "";
        // programInteresetID = "";
        // programID = "";
        // courseID = null;
        // universityType = "";
        // universityLanguage = "";
        // budget:any;
        // establishedYear:any;
        // mokshRating:any;
        this.universityName = "";
        this.filteredData = { 'countryId': null, 'degreeId': null, 'courseId': null, 'progInterestId': null, 'programId': null, 'universityType': '', 'universityLanguage': '', 'budget': null, 'establishedYear': null, 'mokshRating': null };
        this.filterCount = 0;
        //#region 
        this.arrCountry = [];
    }
    // getCountry(postData: any): Observable<any> {
    //   const url = this.api + 'Program/GetCountry';
    //   return this.http.post<any>(url, postData)
    //     .pipe(
    //       tap(_ => this.log('response received')),
    //       catchError(this.handleError('getDetails', []))
    //     );
    // }
    getCountry(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetCountry';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getCountryOnProg(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetCountryOnProg';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getDegree(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetDegree';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getInterestedProgram(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetProgramInterest';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getProgramSpecialization(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetProgram';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getUniversities(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'program/getUniversitylist';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getUniversityDetails(universityMianId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'program/GetUniversityID/' + universityMianId;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.get(url, { headers }).toPromise();
        });
    }
    getGallery(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetUniversityGallery';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    GetUniversityFees(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'Program/GetUniversityFees ';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    resetUniversityFilter(arrSelection) {
        if (arrSelection != "") {
            this.filteredData.countryId = arrSelection["countryId"];
            this.filteredData.progInterestId = arrSelection["progInterestId"];
        }
        this.filteredData.universityType = "";
        this.filteredData.universityLanguage = "";
        this.filteredData.budget = null;
        this.filteredData.establishedYear = null;
        this.filteredData.mokshRating = null;
        this.filterCount = 0;
    }
};
ApiProgramsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
ApiProgramsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiProgramsService);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);







let AuthService = class AuthService {
    constructor(http, storageService, router) {
        this.http = http;
        this.storageService = storageService;
        this.router = router;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.arrRegistrationData = "";
        this.OTP = "";
        this.arrRegData = {};
        this.getUserData();
    }
    //#region Mobile App Auth Start
    login(body) {
        const url = this.api + 'login/Login';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    loginWithOtp(body) {
        const url = this.api + 'login/LoginWithOtp';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    getAppRegistration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var authToken = "", loginID = "";
            yield this.getLoginID().then(res => { loginID = res; });
            const url = this.api + 'login/GetLoginID/' + loginID;
            return this.http.get(url).toPromise();
        });
    }
    setAppRegistration(body) {
        const url = this.api + 'login/AddLogin';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    addLoginWithOtp(body) {
        const url = this.api + 'login/AddLoginWithOtp';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    putAppRegistration(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var authToken = "";
            const url = this.api + 'login/UpdateLogin';
            yield this.getToken().then(res => { authToken = res; });
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + authToken }) };
            return this.http.put(url, body.toString(), headerOption).toPromise();
        });
    }
    checkDuplicates(body) {
        const url = this.api + 'login/checkduplicate';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    logout() {
        this.storageService.removeItem("OAuth").then(res => {
            this.storageService.removeItem("userdata");
            this.storageService.removeItem("appdata");
            this.storageService.removeItem("arrAppUni");
            this.storageService.removeItem("counsellorData");
            this.storageService.removeItem("predictorForm");
            this.storageService.removeItem("selectedPackage");
            this.storageService.removeItem("intakeYear");
            this.userData$.next('');
            this.router.navigate(['/login-new'], { replaceUrl: true });
        });
    }
    changePassword(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var authToken = "";
            const url = this.api + 'login/ChangePassword';
            yield this.getToken().then(res => { authToken = res; });
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + authToken }) };
            return this.http.put(url, body.toString(), headerOption).toPromise();
        });
    }
    getLoginID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var loginID = "";
            // await this.userData$.subscribe(data => {
            //   loginID = data.appLoginID;
            // })
            return yield this.storageService.getObject("userdata").then(resp => loginID = resp["appLoginID"]);
        });
    }
    getPassword(body) {
        const url = this.api + 'login/GetPData';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    getReferral(body) {
        const url = this.api + 'login/GetReferral';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    getMyReferrals(body) {
        const url = this.api + 'login/GetMyRefferals';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    //#endregion
    //== Get User Data
    getUserData(applicationID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.getObject("userdata").then(res => {
                var arrData = res;
                if (applicationID != undefined) {
                    arrData["applicationID"] = applicationID;
                    this.storageService.setObject("userdata", arrData);
                }
                this.userData$.next(arrData);
            });
        });
    }
    //== Get Token
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.userData$.subscribe(data => {
                if (data) {
                    token = data.token;
                }
            });
            // if (token == undefined || token == "" || token == null) {
            //   this.getUserData();
            //   await this.userData$.subscribe(data => {
            //     token = data.token;
            //   })
            // }
            return token;
        });
    }
    // getTokenStorage(): string {
    //   var token = localStorage.getItem("_cap_OAuth");
    //   return token;
    // }
    // isTokenExpired(token?: string): boolean {
    //   if(!token) token = this.getTokenStorage();
    //   if(!token) return true;
    //   const date = helper.getTokenExpirationDate(token);
    //   console.log(date);
    //   if(date === undefined) return false;
    //   return !(date.valueOf() > new Date().valueOf());
    // }
    //== Get Appplication ID
    getApplicationID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var appID = "";
            yield this.userData$.subscribe(data => {
                appID = data.applicationID;
            });
            if (appID == undefined) {
                this.getUserData();
                yield this.userData$.subscribe(data => {
                    appID = data.applicationID;
                });
            }
            return appID;
        });
    }
    setRegistration(body) {
        const url = this.api + 'application/AddApplication';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    checkApplicationDuplicates(body) {
        const url = this.api + 'application/checkduplicate';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 6957:
/*!**************************************************!*\
  !*** ./src/app/services/local-notify.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalNotifyService": () => (/* binding */ LocalNotifyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let LocalNotifyService = class LocalNotifyService {
    constructor(apiCRMService, apiGeneralService, storage) {
        this.apiCRMService = apiCRMService;
        this.apiGeneralService = apiGeneralService;
        this.storage = storage;
        this.arrUserData = [];
        this.arrGetWebinarURL = [];
        this.arrWebinars = [];
        this.arrSelection = null;
        this.arrPosterData = [];
        this.arrRegisteredWebinars = [];
        this.counterPoster = 0;
    }
    notify() {
        var currDateTime = new Date().toLocaleString();
        return new Promise((resolve, reject) => {
            if (this.arrWebinars.length == 0) {
                this.getUserDataStorage();
            }
            else {
                var webinarCount = 0;
                this.arrWebinars.forEach(el => {
                    var startTime = new Date(el.StartTime).toLocaleString();
                    var endTime = new Date(el.EndTime).toLocaleString();
                    if (startTime <= currDateTime && endTime >= currDateTime) {
                        webinarCount++;
                        resolve(el);
                    }
                    else {
                        reject;
                    }
                });
                if (webinarCount == 0) {
                    resolve(0);
                }
            }
        });
    }
    getUserDataStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("userdata").then((resp) => {
                this.arrUserData = resp;
                if (this.arrUserData != null) {
                    this.getRegisteredWebinars();
                }
            });
        });
    }
    getRegisteredWebinars() {
        let postData = { "RawLeadID": this.arrUserData["rawLeadID"] };
        this.apiCRMService.getRegisteredWebinar(JSON.stringify(postData)).then((resp) => {
            this.arrRegisteredWebinars = JSON.parse(resp.d);
            this.getWebinars();
        }).catch(ex => {
            console.log("getRegisteredWebinars() => " + ex);
            this.getWebinars();
        });
    }
    getWebinars() {
        let postData = {};
        this.apiCRMService.getWebinars(JSON.stringify(postData)).then((resp) => {
            this.arrWebinars = JSON.parse(resp.d);
            if (this.arrRegisteredWebinars.length > 0) {
                this.arrWebinars.forEach(el => {
                    var arrWebinars = this.arrRegisteredWebinars.filter(x => x.WebinarID == el.WebinarID);
                    el.JoinUrl = (arrWebinars.length > 0) ? arrWebinars[0]["WebinarJoinURL"] : "";
                });
            }
            //this.arrWebinars.push({ 'Subject': "asdasd", 'StartTime': '2021-07-28T16:00:00', 'EndTime': '2021-08-27T02:33:00' })     
        }).catch(ex => {
            console.log("getWebinars() => " + ex);
        });
    }
    // getWebinars() {
    //   let postData = {};
    //   this.apiCRMService.getWebinars(JSON.stringify(postData)).then((resp: any) => {
    //     this.arrWebinars = JSON.parse(resp.d);      
    //     this.notify();
    //   })
    // }
    //#region Poster
    initPoster() {
        return new Promise((resolve, reject) => {
            this.storage.getObject("arrSelection").then((resp) => {
                this.apiGeneralService.arrSelection = resp;
                this.arrSelection = resp;
                if (this.counterPoster == 0) {
                    var country = (resp["countryId"] == "") ? null : resp["countryId"];
                    //var postdata = { "productDepartmentId": resp["productDepartmentId"], "countryId": country, "progInterestId": resp["progInterestId"], "universityId": resp["universityId"], "isMobile": true, "isActive": true }
                    var postdata = { "productDepartmentId": null, "countryId": null, "progInterestId": null, "universityId": null, "isMobile": true, "isActive": true };
                    this.apiGeneralService.getMobielPoster(JSON.stringify(postdata)).then((resp) => {
                        this.counterPoster++;
                        if (this.arrPosterData.length == 0 && this.arrSelection["universityId"] != 0) {
                            postdata["universityId"] = 0;
                            this.apiGeneralService.getMobielPoster(JSON.stringify(postdata)).then((respNew) => {
                                this.arrPosterData = respNew;
                                resolve(respNew);
                            });
                        }
                        else {
                            this.arrPosterData = resp;
                            resolve(this.arrPosterData);
                        }
                    }).catch(ex => {
                        console.log("Err => getMobielPoster() : " + ex);
                        this.arrPosterData = [];
                    });
                }
            });
        });
    }
};
LocalNotifyService.ctorParameters = () => [
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_2__.ApiCRMService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_0__.ApiGeneralService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
LocalNotifyService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LocalNotifyService);



/***/ }),

/***/ 71188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 96628);



let StorageService = class StorageService {
    constructor() { }
    setString(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key, value });
        });
    }
    getString(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key }));
        });
    }
    setObject(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({ key, value: JSON.stringify(value) });
        });
    }
    getObject(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const ret = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key });
            return JSON.parse(ret.value);
        });
    }
    removeItem(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.remove({ key });
        });
    }
    clear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 84465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    toastError(infoMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 3000,
                position: 'top',
                color: 'danger',
                buttons: [
                    {
                        side: 'start',
                        icon: 'alert-circle-outline',
                    }
                ]
            });
            toast.present();
        });
    }
    toastSuccess(infoMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 3000,
                position: 'top',
                color: 'success',
                buttons: [
                    {
                        side: 'start',
                        icon: 'checkmark-outline',
                    }
                ]
            });
            toast.present();
        });
    }
    toastWarning(infoMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 3000,
                position: 'top',
                color: 'warning',
                buttons: [
                    {
                        side: 'start',
                        icon: 'warning-outline',
                    }
                ]
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    accessKey: 'nTBa3vPUCayrP3WeIxmQrkSSEOaA5nbMowYj47-UrDo',
    apiUrl: 'https://api.moksh16.in/api/',
    apiCRMUrl: 'https://crm.moksh16.in/webservices/WSLead.asmx/',
    apiCRMUrlCore: 'https://apicrm.moksh16.in/api/',
    apiMokshUrl: 'https://app.moksh16.in/webservices/',
    apiLMSUrl: ' https://www.moksh16.com/coaching/services/index.php',
    apiLMSBlogUrl: 'https://www.moksh16.com/blog/services/index.php',
    webAssetsPath: "https://app.moksh16.in/application-centre/assets/",
    razor_apiUrl: 'https://api.razorpay.com/v1/',
    razor_key: "rzp_live_aUXk5JsL5vWjaV",
    razor_secret: "uMxtpUL8niQssXfDx3RfwMTW",
    //Testing
    // razor_key : "rzp_test_8lNuk7DSlrw1GR",  
    // razor_secret : "LRY3cPQlG2u0xGlQzEmmHsGc",
    razor_auth: "cnpwX2xpdmVfYVVYazVKc0w1dldqYVY6dU14dHBVTDhuaVFzc1hmRHgzUmZ3TVRX",
    whatsappAPI: "https://app.nextel.io/api/wtemplate?key=STU0VEtjak50cDUxN0RCajhQVE9EZz09",
    geoLocationURL: "https://api.ipgeolocation.io/ipgeo",
    geoLocationAPIKey: "c451b32558544957bbed22635c72220e",
    defaultLeadSourceId: "226",
    defaultEmpID: "18",
    counsellorNo: "9699360370",
    linkAndroidApp: "https://bit.ly/37slNcU"
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://api.moksh16.in/api/',
    webAssetsPath: "https://app.moksh16.in/application-centre/assets/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 45222:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./super-tab-button_2.entry.js": [
		67553,
		"common",
		"node_modules_ionic-super-tabs_core_dist_esm_super-tab-button_2_entry_js"
	],
	"./super-tab-indicator.entry.js": [
		43250,
		"node_modules_ionic-super-tabs_core_dist_esm_super-tab-indicator_entry_js"
	],
	"./super-tab_3.entry.js": [
		22567,
		"common",
		"node_modules_ionic-super-tabs_core_dist_esm_super-tab_3_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 45222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-toolbar [color]=\"networkStatus ? 'primary' : 'danger'\" *ngIf=\"networkStatus == false\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"warning\"></ion-icon>\r\n          </ion-button>            \r\n      </ion-buttons>\r\n    <ion-title>\r\n        {{networkStatus ? \"You are now Online\" : \"Low Internet Connection\"}}\r\n    </ion-title>\r\n  </ion-toolbar>  \r\n  <ion-router-outlet></ion-router-outlet>\r\n\r\n\r\n  <div class=\"modal-cont modal-reminder\" [ngClass]=\"{active: isNewVersion}\">\r\n    <div class=\"modal-wrapper\">\r\n      <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\" *ngIf=\"!isUpdateMandatory\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>\r\n      <div class=\"modal-head\">\r\n        <figure>\r\n          <img src=\"../assets/icons/bell.png\"/>\r\n        </figure>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <h5>\r\n            A new and faster version is created for you. Just update the version and enjoy super tech now!\r\n          </h5>          \r\n          <ion-button (click)=\"onClickUpdateApp()\" expand=\"block\" shape=\"round\">\r\n            Update Now\r\n          </ion-button>          \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-cont modal-reminder\" [ngClass]=\"{active: isWebinarNotify}\">\r\n    <div class=\"modal-wrapper\">\r\n      <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>\r\n      <div class=\"modal-head\">\r\n        <figure>\r\n          <img src=\"../assets/icons/bell.png\"/>\r\n        </figure>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <h5>\r\n            The counseling session <ion-text color=\"primary\">{{arrModalData.Subject}}</ion-text> has just started. It can change your Career!\r\n          </h5>          \r\n          <ion-button (click)=\"onClickJoinNow()\" expand=\"block\" shape=\"round\">\r\n            {{arrModalData.JoinUrl == '' ? 'Register Now' : 'Join Now'}}\r\n          </ion-button>\r\n          <p>\r\n            If it's difficult for you to attend now, no problem.. We will remind you when it's conducted next time. So relax 😎 \r\n          </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal-cont modal-poster\" [ngClass]=\"{active: isPoster}\">\r\n    <div class=\"modal-wrapper\">\r\n      <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>\r\n      <div class=\"modal-body\">\r\n        <figure class=\"m-0\"   *ngIf=\"arrSlider?.length == 1\">\r\n          <img src=\"{{posterPath}}{{item.posterId}}/{{item.imageName}}\" alt=\"\" *ngFor=\"let item of arrSlider\" (click)=\"onClickPoster(item)\">\r\n        </figure>\r\n        <ion-slides [options]=\"slideBannerOpts\" pager=\"true\" *ngIf=\"arrSlider?.length > 1\">\r\n          <ion-slide *ngFor=\"let item of arrSlider\" (click)=\"onClickPoster(item)\">\r\n            <div>\r\n              <img src=\"{{posterPath}}{{item.posterId}}/{{item.imageName}}\">\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <section class=\"video-play-cont potrait toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\r\n    <div class=\"toogle-cont\">\r\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>      \r\n      <div [innerHTML]=\"iframe\" class=\"ifram-cont\"></div>\r\n    </div>\r\n  </section>\r\n</ion-app>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map