(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_country-list_country-list_module_ts-src_app_services_loader_service_ts"],{

/***/ 72323:
/*!******************************************************************!*\
  !*** ./src/app/home/country-list/country-list-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryListPageRoutingModule": () => (/* binding */ CountryListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _country_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-list.page */ 78829);




const routes = [
    {
        path: '',
        component: _country_list_page__WEBPACK_IMPORTED_MODULE_0__.CountryListPage
    }
];
let CountryListPageRoutingModule = class CountryListPageRoutingModule {
};
CountryListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CountryListPageRoutingModule);



/***/ }),

/***/ 42746:
/*!**********************************************************!*\
  !*** ./src/app/home/country-list/country-list.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryListPageModule": () => (/* binding */ CountryListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _country_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-list-routing.module */ 72323);
/* harmony import */ var _country_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.page */ 78829);








let CountryListPageModule = class CountryListPageModule {
};
CountryListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _country_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.CountryListPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_country_list_page__WEBPACK_IMPORTED_MODULE_2__.CountryListPage]
    })
], CountryListPageModule);



/***/ }),

/***/ 78829:
/*!********************************************************!*\
  !*** ./src/app/home/country-list/country-list.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryListPage": () => (/* binding */ CountryListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_country_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./country-list.page.html */ 49330);
/* harmony import */ var _country_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-list.page.scss */ 34631);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);















let CountryListPage = class CountryListPage {
    constructor(headerTitle, apiProgramsService, auth, router, storage, apiGeneralService, sanitizer, toastr, firebaseAnalytics) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.auth = auth;
        this.router = router;
        this.storage = storage;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.firebaseAnalytics = firebaseAnalytics;
        this.arrCountry = [];
        this.arrCountryAll = [];
        this.webAssetsPath = "";
        this.webVideoPath = "";
        this.arrVideos = [];
        this.slideVideoOpts = { slidesPerView: 1.8 };
        this.previousUrl = null;
        this.currentUrl = null;
        this.headerTitle.title = "Choose Country";
        this.headerTitle.isBack = true;
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd)).subscribe((event) => {
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.url;
            if (this.previousUrl == "/home/universities") {
                this.apiGeneralService.fnSetTracking("update");
            }
        });
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.logEvent("country_list_opened", { 'resp': 'success', 'page': 'country-list' });
        //this.apiGeneralService.fnSetTracking("update");
    }
    // ionViewWillLeave() {
    //   this.apiGeneralService.fnSetTracking(null,null,false,false,false,"update", false);
    // }
    ngOnInit() {
        this.getCountry();
        this.getVideos();
    }
    doRefresh(event) {
        this.getCountry();
        this.getVideos();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    //#region Country Section
    getCountry() {
        let postData = { "ProgInterestId": this.apiGeneralService.arrSelection["progInterestId"], "IsActive": true };
        this.apiProgramsService.getCountryOnProg(JSON.stringify(postData)).then(resp => {
            this.arrCountry = resp;
            this.arrCountryAll = resp;
            this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "coutry/flag";
        })
            .catch(err => {
            console.log("getCountryOnProg: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
        });
    }
    onClickCountry(countryID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.apiProgramsService.resetUniversityFilter("");
            // if(countryID == 6){
            //   this.apiGeneralService.arrSelection["productDepartmentId"] = 2;
            //   this.apiProgramsService.productDepartmentID="2";
            // }
            // else{
            //   this.apiGeneralService.arrSelection["productDepartmentId"] = 1;
            //   this.apiProgramsService.productDepartmentID="1";
            // }
            this.apiGeneralService.arrSelection["countryId"] = countryID;
            this.storage.setObject("arrSelection", this.apiGeneralService.arrSelection);
            this.apiProgramsService.filteredData.progInterestId = this.apiGeneralService.arrSelection["progInterestId"];
            this.apiProgramsService.filteredData.countryId = countryID;
            this.apiGeneralService.fnSetTracking("add", null, null, false, false, false);
            this.router.navigate(['/home/universities']);
        });
    }
    //#endregion
    //#region Search Start
    search(searchbar) {
        var q = searchbar.detail.value;
        if (q.length == 0) {
            this.arrCountry = this.arrCountryAll;
            return;
        }
        if (q.trim() == '') {
            return;
        }
        this.arrCountry = this.arrCountryAll;
        this.arrCountry = this.arrCountry.filter((raw) => {
            let countryName = raw["countryName"] == null ? "" : raw["countryName"];
            if (countryName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            //this.dataCount = this.arrData.length;
            return false;
        });
    }
    clearSearch() {
        this.arrCountry = this.arrCountryAll;
    }
    //#endregion
    //#region Video Section Start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 5, 'isActive': true };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webVideoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/videothumbnails";
                this.arrVideos = resp;
            })
                .catch(err => {
                console.log("getVideos: " + err);
            });
        });
    }
    playVideo(videoSrc) {
        if (videoSrc == "") {
            this.toastr.toastError("Sorry! Currently this video is not available.");
            return false;
        }
        this.iframe = this.sanitizer.bypassSecurityTrustHtml('<iframe src="' + videoSrc + '" frameborder="0" style="width: 100%; height: 300px;"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        this.isVideoOpen = true;
    }
    videoPanelClose() {
        this.iframe = "";
        this.isVideoOpen = false;
    }
};
CountryListPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_6__.ApiProgramsService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__.FirebaseAnalytics }
];
CountryListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-country-list',
        template: _raw_loader_country_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_country_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CountryListPage);



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

/***/ 34631:
/*!**********************************************************!*\
  !*** ./src/app/home/country-list/country-list.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  font-size: 1rem;\n}\n\nion-list ion-label {\n  text-overflow: unset !important;\n  overflow: unset !important;\n  white-space: unset !important;\n  margin-right: 0px;\n}\n\nion-list ion-label ion-text {\n  display: block;\n  margin-top: 7px;\n  background: var(--ion-color-primary-light);\n  padding: 10px;\n  border-radius: 10px;\n}\n\nion-list ion-label ion-text p {\n  margin-bottom: 0px;\n  color: #555;\n  font-size: 0.85rem;\n  text-align: justify;\n}\n\n.filter-bar {\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBRyxlQUFBO0FBQ0g7O0FBQUE7RUFBb0IsK0JBQUE7RUFBaUMsMEJBQUE7RUFBNEIsNkJBQUE7RUFBK0IsaUJBQUE7QUFPaEg7O0FBTkk7RUFBUyxjQUFBO0VBQWUsZUFBQTtFQUFpQiwwQ0FBQTtFQUE0QyxhQUFBO0VBQWUsbUJBQUE7QUFheEc7O0FBWlE7RUFBRyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsbUJBQUE7QUFrQmhFOztBQWZBO0VBQVksMEJBQUE7QUFtQloiLCJmaWxlIjoiY291bnRyeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5pbWctYXZhdGFye2hlaWdodDogNTBweDsgd2lkdGg6IDUwcHg7fVxyXG5oMntmb250LXNpemU6IDFyZW07fVxyXG5pb24tbGlzdCBpb24tbGFiZWx7IHRleHQtb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7IG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50OyB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBpb24tdGV4dHtkaXNwbGF5OiBibG9jazttYXJnaW4tdG9wOiA3cHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTsgcGFkZGluZzogMTBweDsgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBweyBtYXJnaW4tYm90dG9tOiAwcHg7IGNvbG9yOiAjNTU1OyBmb250LXNpemU6IDAuODVyZW07IHRleHQtYWxpZ246IGp1c3RpZnk7fVxyXG4gICAgfVxyXG59XHJcbi5maWx0ZXItYmFye2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO30iXX0= */");

/***/ }),

/***/ 49330:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/country-list/country-list.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n<ion-content>\r\n  <app-top-links></app-top-links>\r\n\r\n  <div class=\"main-cont\">\r\n    <section class=\"sec-videos mt-1\" *ngIf=\"arrVideos\">\r\n      <h5>How to choose a country</h5>\r\n      <div *ngIf=\"arrVideos?.length == 1\">\r\n      <figure class=\"m-0\" *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\r\n        <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\r\n      </figure>\r\n    </div>\r\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideos?.length > 1\">\r\n        <ion-slide *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\r\n          <div>\r\n            <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </section>\r\n  </div>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid class=\"filter-bar\">\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <ion-text> <strong>Search</strong></ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"9\">\r\n        <ion-searchbar  (ionChange)=\"search($event)\" (ionClear)=\"clearSearch()\"\r\n          placeholder=\"Search Country\"></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"main-cont pt-0\">\r\n    <ion-list class=\"item-list\">\r\n      <ion-item class=\"ion-no-padding\" lines=\"none\" *ngFor=\"let item of arrCountry\"\r\n        (click)=\"onClickCountry(item.countryId)\">\r\n        <ion-avatar slot=\"start\" class=\"img-avatar\" *ngIf=\"item.flagImage; else elseBlock\">\r\n          <img #thenBlock src=\"{{this.webAssetsPath}}/{{item.countryId}}/{{item.flagImage}}\" alt=\"\"\r\n            class=\"white-box border-radius-50 \">\r\n        </ion-avatar>\r\n        <ng-template #elseBlock>\r\n          <ion-avatar slot=\"start\" class=\"img-avatar\">\r\n            <img #elseBlock src=\"../../assets/flag-default.png\" alt=\"\" class=\"white-box border-radius-50 \">\r\n          </ion-avatar>\r\n        </ng-template>\r\n        <ion-label>\r\n          <h2>{{item.countryName}}</h2>\r\n          <ion-text *ngIf=\"item.aboutUniversity\">\r\n            <p>{{item.aboutUniversity}}</p>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-note slot=\"end\">\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <!-- Video Panel Start -->\r\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\r\n    <div class=\"toogle-cont\">\r\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>      \r\n      <ion-grid fixed class=\"padding-md\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div [innerHTML]=\"iframe\"></div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n  <!-- Video Panel End -->\r\n\r\n</ion-content>\r\n<section class=\"footer-links\">\r\n  <div class=\"main-cont\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['/home/counselling']\">Get FREE counselling & choose\r\n            the country\r\n            <ion-icon name=\"headset-outline\" slot=\"start\"></ion-icon>\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</section>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_country-list_country-list_module_ts-src_app_services_loader_service_ts.js.map