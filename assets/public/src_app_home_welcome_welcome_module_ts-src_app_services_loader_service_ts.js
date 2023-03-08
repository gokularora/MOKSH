(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_welcome_welcome_module_ts-src_app_services_loader_service_ts"],{

/***/ 94580:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 98748:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotifications": () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 94580);

const PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89581:
/*!********************************************************!*\
  !*** ./src/app/home/welcome/welcome-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 50861);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    },
    {
        path: 'medical-pg',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_welcome_medical-pg_medical-pg_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./medical-pg/medical-pg.module */ 83980)).then(m => m.MedicalPgPageModule)
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 94309:
/*!************************************************!*\
  !*** ./src/app/home/welcome/welcome.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 89581);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 50861);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 50861:
/*!**********************************************!*\
  !*** ./src/app/home/welcome/welcome.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.page.html */ 24267);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 93374);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);















let WelcomePage = class WelcomePage {
    constructor(headerTitle, apiProgramsService, router, apiGeneralService, storage, sanitizer, toastr, auth, firebaseAnalytics) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.router = router;
        this.apiGeneralService = apiGeneralService;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.auth = auth;
        this.firebaseAnalytics = firebaseAnalytics;
        this.isLoading = false;
        this.arrCountry = [];
        this.AssetsPathCountry = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "coutry/flag";
        this.AssetsPathSlider = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "slider-images";
        this.webAssetPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath;
        //#region Videos Variable
        this.AssetsPathVideo = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/videothumbnails";
        this.arrAllVideoTopics = [];
        this.arrAllVideos = [];
        this.arrVideoSection1 = [];
        this.arrVideoSection2 = [];
        this.arrVideoSection3 = [];
        this.arrVideoSectionMultiLingual = [];
        this.arrVideoYamuna = [];
        //#endregion
        this.programID = 0;
        this.countryID = 0;
        this.productDepartmentID = 0;
        this.arrSlider = [];
        this.slideOpts = { slidesPerView: 5 };
        this.slideVideoOpts = { slidesPerView: 1.5 };
        this.slideBannerOpts = { slidesPerView: 1, autoplay: true };
        this.MobTrackingId = 0;
        this.arrTrackingData = [];
        this.ipAddress = "";
        //#region Reviews Variables
        this.webAssetsPathReviews = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/student-review";
        this.arrReviews = [];
        //#endregion
        this.slideReviewOpts = { slidesPerView: 1.2 };
        this.apiGeneralService.getStorageSelection();
        this.headerTitle.title = "MBBS Abroad";
        this.headerTitle.isBack = false;
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.setCurrentScreen("mbbs-abroad");
    }
    ngOnInit() {
        this.getStorageSelection();
        this.getSlider();
        this.getVideosYamuna();
        this.getVideos1();
        this.getVideos2();
        this.getVideos3();
        this.getReview();
        //this.initPushNotifications(); 
    }
    doRefresh(event) {
        this.arrVideoSection1 = [];
        this.arrVideoSection2 = [];
        this.arrVideoSection3 = [];
        this.arrVideoSectionMultiLingual = [];
        this.arrVideoYamuna = [];
        this.arrReviews = [];
        this.arrSlider = [];
        this.getSlider();
        //this.getVideosYamuna();
        this.getVideosMultiLingual();
        this.getVideos1();
        this.getVideos2();
        this.getVideos3();
        this.getCountry();
        this.getReview();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    //#region Country Section
    getCountry() {
        if (this.apiProgramsService.arrCountry.length != 0) {
            this.arrCountry = this.apiProgramsService.arrCountry;
            return false;
        }
        this.arrCountry = [];
        let postData = { "ProgInterestId": this.apiGeneralService.arrSelection["progInterestId"], "IsActive": true };
        this.apiProgramsService.getCountryOnProg(JSON.stringify(postData)).then(resp => {
            this.arrCountry = resp;
            this.isLoading = false;
        })
            .catch(err => {
            console.log("getCountry: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
        });
    }
    onClickCountry(countryId) {
        this.apiProgramsService.filteredData.countryId = countryId;
        this.apiGeneralService.arrSelection["countryId"] = countryId;
        this.storage.setObject("arrSelection", this.apiGeneralService.arrSelection);
        this.router.navigate(["/home/universities"]);
    }
    //#endregion
    //#region Apply Now
    onClickApply(countryID, ProgramID, productDepartmentID) {
        this.apiProgramsService.filteredData.countryId = countryID;
        this.apiProgramsService.filteredData.progInterestId = ProgramID;
        this.apiProgramsService.productDepartmentID = productDepartmentID;
        //Update in Storage
        this.apiGeneralService.arrSelection["countryId"] = countryID;
        this.apiGeneralService.arrSelection["progInterestId"] = ProgramID;
        this.apiGeneralService.arrSelection["productDepartmentId"] = productDepartmentID;
        this.storage.setObject("arrSelection", this.apiGeneralService.arrSelection);
        if (productDepartmentID == 1) {
            this.router.navigate(['/home/country-list']);
        }
        else if (productDepartmentID == 2) {
            this.router.navigate(['/home/program-list']);
        }
    }
    //#endregion
    //#region Video Section  
    getVideos1() {
        if (this.apiGeneralService.arrVideoSection1.length != 0) {
            this.arrVideoSection1 = this.apiGeneralService.arrVideoSection1;
            return false;
        }
        let postData = { 'videoHeaderId': 1, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideoSection1 = this.apiGeneralService.arrVideoSection1 = resp;
        }).catch(err => {
            console.log("getVideos1: " + err);
            this.isLoading = false;
        });
    }
    getVideos2() {
        if (this.apiGeneralService.arrVideoSection2.length != 0) {
            this.arrVideoSection2 = this.apiGeneralService.arrVideoSection2;
            return false;
        }
        let postData = { 'videoHeaderId': 2, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideoSection2 = this.apiGeneralService.arrVideoSection2 = resp;
        }).catch(err => {
            console.log("getVideos2: " + err);
            this.isLoading = false;
        });
    }
    getVideos3() {
        if (this.apiGeneralService.arrVideoSection3.length != 0) {
            this.arrVideoSection3 = this.apiGeneralService.arrVideoSection3;
            return false;
        }
        let postData = { 'videoHeaderId': 4, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideoSection3 = this.apiGeneralService.arrVideoSection3 = resp;
        }).catch(err => {
            console.log("getVideos3: " + err);
            this.isLoading = false;
        });
    }
    getVideosMultiLingual() {
        if (this.apiGeneralService.arrVideoSectionMultiLingual.length != 0) {
            this.arrVideoSectionMultiLingual = this.apiGeneralService.arrVideoSectionMultiLingual;
            return false;
        }
        let postData = { 'videoHeaderId': 37, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideoSectionMultiLingual = this.apiGeneralService.arrVideoSectionMultiLingual = resp;
        }).catch(err => {
            console.log("getVideosMultiLingual: " + err);
            this.isLoading = false;
        });
    }
    getVideosYamuna() {
        if (this.apiGeneralService.arrVideoYamuna.length != 0) {
            this.arrVideoYamuna = this.apiGeneralService.arrVideoYamuna;
            return false;
        }
        let postData = { 'videoHeaderId': 37, 'isActive': true };
        this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
            this.arrVideoYamuna = this.apiGeneralService.arrVideoSection3 = resp;
        }).catch(err => {
            console.log("getVideosYamuna: " + err);
            this.isLoading = false;
        });
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
        this.iframe = "";
    }
    //#endregion
    //#region Slider
    getSlider() {
        if (this.apiGeneralService.arrSlider.length != 0) {
            this.arrSlider = this.apiGeneralService.arrSlider;
            return false;
        }
        let postData = { "IsMobile": true, "SliderLocation": "App-Home" };
        this.apiGeneralService.getSlider(JSON.stringify(postData)).then(resp => {
            if (resp) {
                this.arrSlider = this.apiGeneralService.arrSlider = resp;
            }
        })
            .catch(ex => {
            console.log("getSlider() =>" + ex);
        });
    }
    onClickSliderBanner(url) {
        if (url != "") {
            this.router.navigate(["/" + url + ""]);
        }
    }
    //#endregion
    getReview() {
        if (this.apiGeneralService.arrReviews.length != 0) {
            this.arrReviews = this.apiGeneralService.arrReviews;
            return false;
        }
        this.arrReviews = [];
        let postData = { "Category": "MBBS Abroad", "IsActive": true };
        this.apiGeneralService.getReviews(JSON.stringify(postData)).then(resp => {
            this.arrReviews = this.apiGeneralService.arrReviews = resp;
        })
            .catch(err => {
            console.log("getReview: " + err);
        });
    }
    getStorageSelection() {
        this.storage.getObject("arrSelection").then((resp) => {
            this.apiGeneralService.arrSelection = resp;
            this.getCountry();
        });
    }
    initPushNotifications() {
        // Request permission to use push notifications
        // iOS will prompt user and return if they granted permission or not
        // Android will just grant without prompting
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                // Register with Apple / Google to receive push via APNS/FCM
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__.PushNotifications.register();
            }
            else {
                // Show some error
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__.PushNotifications.addListener('registration', (token) => {
            alert('Push registration success, token: ' + token.value);
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__.PushNotifications.addListener('registrationError', (error) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
            alert('Push received: ' + JSON.stringify(notification));
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_10__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
            alert('Push action performed: ' + JSON.stringify(notification));
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_6__.ApiProgramsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseAnalytics }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomePage);



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

/***/ 93374:
/*!************************************************!*\
  !*** ./src/app/home/welcome/welcome.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sec-countries ion-slide figure {\n  margin: 0px;\n  padding: 0px 8px;\n}\n.sec-countries ion-slide figure img {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n}\n.sec-services {\n  margin-bottom: 1.5rem;\n}\n.banner-sec {\n  border-bottom: 1px solid #ddd;\n  padding: 12px;\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRO0VBQU8sV0FBQTtFQUFhLGdCQUFBO0FBQTVCO0FBQ1E7RUFBSSxXQUFBO0VBQWEsWUFBQTtFQUFjLGlCQUFBO0FBSXZDO0FBQUE7RUFBZSxxQkFBQTtBQUlmO0FBSEE7RUFBWSw2QkFBQTtFQUErQixhQUFBO0VBQWUsb0JBQUE7QUFTMUQiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlYy1jb3VudHJpZXN7XHJcbiAgICBpb24tc2xpZGV7XHJcbiAgICAgICAgZmlndXJle21hcmdpbjogMHB4OyBwYWRkaW5nOiAwcHggOHB4O1xyXG4gICAgICAgIGltZ3t3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4OyBvYmplY3QtZml0OiBjb3Zlcjt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5zZWMtc2VydmljZXN7IG1hcmdpbi1ib3R0b206IDEuNXJlbTt9XHJcbi5iYW5uZXItc2Vje2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyBwYWRkaW5nOiAxMnB4OyBwYWRkaW5nLWJvdHRvbTogMXJlbTt9XHJcbiJdfQ== */");

/***/ }),

/***/ 24267:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/welcome/welcome.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content class=\"page-welcome\">\r\n\r\n  <!-- <section class=\"sec-video white-box\">\r\n    <iframe src=\"https://www.youtube.com/embed/RAqn6gA_hCk\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n  </section> -->\r\n\r\n\r\n  <section class=\"banner-sec\">\r\n    <ion-slides [options]=\"slideBannerOpts\" pager=\"true\">\r\n      <ion-slide *ngFor=\"let item of arrSlider\" (click)=\"onClickSliderBanner(item.internalURL)\">\r\n        <div>\r\n          <img src=\"{{this.AssetsPathSlider}}/{{item.sliderFor}}/{{item.sliderFileName}}\">\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </section>\r\n  <app-top-links></app-top-links>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"main-cont pt-0\">\r\n    <section class=\"sec-videos\" style=\"background: var(--ion-color-secondary-light)\">\r\n      <h5>MBBS Career Guidance Multilingual <ion-badge slot=\"start\">New</ion-badge>\r\n      </h5>\r\n      <ion-slides [options]=\"arrVideoSectionMultiLingual\" pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of arrVideoYamuna\" (click)=\"playVideo(item.videoLink)\">\r\n          <div>\r\n            <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </section>\r\n\r\n    <section>\r\n      <h5>Your MBBS Abroad Program right up to MD/MS!</h5>\r\n      <figure class=\"m-0\" [routerLink]=\"['/home/country-list']\">\r\n        <img src=\"{{webAssetPath}}/mobility-app/img-welcome2.jpg\" alt=\"\">\r\n      </figure>\r\n    </section>\r\n    <section class=\"sec-videos\">\r\n      <h5>MOKSH CEO - Super Guidance Sessions</h5>\r\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of arrVideoSection1\" (click)=\"playVideo(item.videoLink)\">\r\n          <div>\r\n            <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </section>\r\n\r\n    <section class=\"sec-quick-contact\">\r\n      <ion-grid fixed class=\"w-100 pl-main\">\r\n        <ion-row>\r\n          <ion-col size=\"3\" class=\"text-center\">\r\n            <img src=\"{{webAssetPath}}/mobility-app/icon-consulting.png\">\r\n          </ion-col>\r\n          <ion-col size=\"9\">\r\n            <h5>Need help with Medical License Exams Coaching?</h5>\r\n            <p>Let our experts plan your career till MD / MS</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button [routerLink]=\"['/home/online-coaching']\" expand=\"block\">\r\n              Start your FREE trial now\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </section>\r\n    <section class=\"mt-0\">\r\n      <h5>Largest Scholarship for MBBS Students</h5>\r\n      <figure class=\"m-0\" [routerLink]=\"['/home/top-links/scholarship']\">\r\n        <img src=\"{{webAssetPath}}/mobility-app/scholarship/img-banner2.jpg\" alt=\"\">\r\n      </figure>\r\n    </section>\r\n\r\n    <!--\r\n    <section class=\"sec-product\">\r\n      <h3 class=\"hdng-line\"><span> Apply online is now easy</span></h3>\r\n      <ion-grid class=\"padding-md\">\r\n        <ion-row>\r\n          <ion-col size=\"6\" (click)=\"onClickApply(null,1,1)\">\r\n            <div class=\"white-box\">\r\n              <img src=\"../../assets/welcome/img-mbbs-abroad.jpg\" alt=\"\">\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\" (click)=\"onClickApply(6,null,2)\">\r\n            <div class=\"white-box\">\r\n              <img src=\"../../assets/welcome/img-study-germany.jpg\" alt=\"\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </section>\r\n\r\n    <section class=\"sec-features\">\r\n      <ion-grid class=\"padding-md grid-lines text-center\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <img src=\"../../assets/icons/icon-university.png\" alt=\"\">\r\n            <h6>Find University</h6>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <img src=\"../../assets/icons/icon-councelling.png\" alt=\"\">\r\n            <h6>View Past Counselling Sessions</h6>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </section>\r\n    -->\r\n    <section class=\"sec-countries text-center\">\r\n      <h5><span>Select a Country to pursue MBBS Abroad</span></h5>\r\n      <ion-slides [options]=\"slideOpts\">\r\n        <ion-slide *ngFor=\"let item of arrCountry\" (click)=\"onClickCountry(item.countryId)\">\r\n          <figure>\r\n            <img src=\"{{this.AssetsPathCountry}}/{{item.countryId}}/{{item.flagImage}}\" alt=\"\"\r\n              class=\"white-box border-radius-50\" *ngIf=\"item.flagImage; else elseBlock\">\r\n            <ng-template #elseBlock>\r\n              <img #elseBlock src=\"../../assets/flag-default.png\" alt=\"\" class=\"border-radius-50 \">\r\n            </ng-template>\r\n            <h6>{{item.countryName}}</h6>\r\n          </figure>\r\n        </ion-slide>\r\n      </ion-slides>\r\n      <div class=\"grey-box secondary-light p-1\"><small> Everyone can become a doctor ! 15,000+ students go abroad for\r\n          MBBS course every year. Currently, 50,000+ doctors are practicing in India who graduated from 20+ different\r\n          countries.</small></div>\r\n    </section>\r\n    <section>\r\n      <ion-text>\r\n        <h5><span>Vlog Series </span>\r\n          <ion-badge slot=\"start\">New</ion-badge>\r\n        </h5>\r\n      </ion-text>\r\n      <figure class=\"m-0\" [routerLink]=\"['/home/top-links/vlogs']\" routerLinkActive=\"router-link-active\">\r\n        <img src=\"{{webAssetPath}}/mobility-app/vlog/banenr-vlog.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\r\n      </figure>\r\n    </section>\r\n    <section class=\"sec-videos\">\r\n      <h5>License Exam Prep during MBBS Abroad</h5>\r\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of arrVideoSection2\" (click)=\"playVideo(item.videoLink)\">\r\n          <div>\r\n            <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </section>\r\n    <section>\r\n      <ion-text>\r\n        <h5><span>Book a FREE slot - Session on MBBS Abroad</span></h5>\r\n      </ion-text>\r\n      <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\">\r\n        <img src=\"{{webAssetPath}}/mobility-app/home/personal-counselling.jpg\" class=\"w-100\"\r\n          style=\"border-radius: 10px;\">\r\n      </figure>\r\n    </section>\r\n    <section *ngIf=\"arrReviews?.length > 0\" class=\"sec-reviews\">\r\n      <ion-text>\r\n        <h5><span>What our students want to say?</span></h5>\r\n      </ion-text>\r\n      <div class=\"cards-sliders\">\r\n        <ion-slides [options]=\"slideReviewOpts\" pager=\"true\">\r\n          <ion-slide *ngFor=\"let item of arrReviews\">\r\n            <div>\r\n              <ion-grid fixed>\r\n                <ion-row>\r\n                  <ion-col size=\"3\">\r\n                    <figure><img src=\"{{this.webAssetsPathReviews}}/{{item.studentReviewID}}/{{item.studentImage}}\" />\r\n                    </figure>\r\n                  </ion-col>\r\n                  <ion-col size=\"9\">\r\n                    <h6> {{item.studentName}}</h6>\r\n                    <p> {{item.scholarship}}</p>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n              <div>\r\n                <ion-label>\r\n                  <p class=\"quote\" [innerHTML]=item.comment></p>\r\n                </ion-label>\r\n              </div>\r\n            </div>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"sec-videos\">\r\n      <h5>MBBS Career Guidance Multilingual</h5>\r\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of arrVideoSection3\" (click)=\"playVideo(item.videoLink)\">\r\n          <div>\r\n            <img src=\"{{this.AssetsPathVideo}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </section>\r\n  </div>\r\n  <app-footer-short-cut></app-footer-short-cut>\r\n</ion-content>\r\n<section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\r\n  <div class=\"toogle-cont\">\r\n    <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ion-text>\r\n    <div [innerHTML]=\"iframe\" class=\"ifram-cont\"></div>\r\n  </div>\r\n</section>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_welcome_welcome_module_ts-src_app_services_loader_service_ts.js.map