(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_user-profile_my-referrals_my-referrals_module_ts"],{

/***/ 53233:
/*!*******************************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/my-referrals-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReferralsPageRoutingModule": () => (/* binding */ MyReferralsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_referrals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-referrals.page */ 81198);




const routes = [
    {
        path: '',
        component: _my_referrals_page__WEBPACK_IMPORTED_MODULE_0__.MyReferralsPage
    },
    {
        path: 'redeem-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_user-profile_my-referrals_redeem-history_redeem-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./redeem-history/redeem-history.module */ 26700)).then(m => m.RedeemHistoryPageModule)
    }
];
let MyReferralsPageRoutingModule = class MyReferralsPageRoutingModule {
};
MyReferralsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyReferralsPageRoutingModule);



/***/ }),

/***/ 15964:
/*!***********************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/my-referrals.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReferralsPageModule": () => (/* binding */ MyReferralsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_referrals_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-referrals-routing.module */ 53233);
/* harmony import */ var _my_referrals_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-referrals.page */ 81198);








let MyReferralsPageModule = class MyReferralsPageModule {
};
MyReferralsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_referrals_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyReferralsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
        ],
        declarations: [_my_referrals_page__WEBPACK_IMPORTED_MODULE_2__.MyReferralsPage]
    })
], MyReferralsPageModule);



/***/ }),

/***/ 81198:
/*!*********************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/my-referrals.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReferralsPage": () => (/* binding */ MyReferralsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_referrals_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-referrals.page.html */ 91528);
/* harmony import */ var _my_referrals_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-referrals.page.scss */ 86561);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);














let MyReferralsPage = class MyReferralsPage {
    constructor(headerTitleService, auth, storage, toastr, apiGeneralService, apiPredictorService, alert, router, loader) {
        this.headerTitleService = headerTitleService;
        this.auth = auth;
        this.storage = storage;
        this.toastr = toastr;
        this.apiGeneralService = apiGeneralService;
        this.apiPredictorService = apiPredictorService;
        this.alert = alert;
        this.router = router;
        this.loader = loader;
        this.userData = [];
        this.arrMyReferrals = [];
        this.arrMyReferralsFiltered = [];
        this.arrRedeem = [];
        this.arrRedeemInfo = { 'packageName': '', 'redeemableAmount': '', 'redeemedAmount': '' };
        this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.webAssetsPath;
        this.selectedTab = 0;
        this.countValidRef = 0;
        this.countPendingRef = 0;
        this.headerTitleService.title = "My Referrals";
        this.headerTitleService.isBack = true;
    }
    ionViewWillEnter() {
        this.getUserData();
    }
    ngOnInit() {
    }
    doRefresh(event) {
        this.getUserData();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.userData = resp;
            this.getMyReferrrals();
            this.getRedeemableAmount();
            this.getRedeemInfo();
        });
    }
    getMyReferrrals() {
        let postData = { "AppLoginID": this.userData["appLoginID"] };
        this.auth.getMyReferrals(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrMyReferrals = resp;
                this.arrMyReferralsFiltered = resp.filter(x => x.referralAmount != 0);
                this.countValidRef = Object.keys(resp.filter(x => x.referralAmount != 0)).length;
                this.countPendingRef = Object.keys(resp.filter(x => x.referralAmount == 0)).length;
                this.selectedTab = 1;
            }
        }).catch(err => {
            console.log("getReferrrals: " + err);
        });
    }
    getRedeemableAmount() {
        let postData = { "AppLoginID": this.userData["appLoginID"] };
        this.apiPredictorService.getCPRedeemableAmount(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrRedeem = resp;
            }
        }).catch(err => {
            console.log("getRedeemableAmount: " + err);
        });
    }
    getRedeemInfo() {
        let postData = { "AppLoginID": this.userData["appLoginID"] };
        this.apiPredictorService.getCPRedeemInfo(JSON.stringify(postData)).then(resp => {
            if (resp) {
                this.arrRedeemInfo = resp;
            }
        }).catch(err => {
            console.log("getRedeemInfo: " + err);
        });
    }
    onClickSocialShare() {
        this.isWALoading = true;
        var inviteCode = this.userData["referralCode"];
        var message = "I’m inviting you to use MOKSH Career Planner, it will help you to Predict your All India Rank & colleges for admission based on NEET-UG score. Also, you can select and apply directly to 150+ global medical universities in 17+ countries. Guaranteed Admission to MBBS with career plan right up to PG. *Here's my Referral code (" + inviteCode + ")*";
        var file = this.webAssetsPath + "mobility-app/invite-friend/img-invite.jpg";
        var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.linkAndroidApp;
        this.apiGeneralService.fnSocialShare(message, "", file, url, "whatsapp").then(resp => {
            if (resp == false) {
                this.toastr.toastError("Sorry! Unable to share.");
            }
            this.isWALoading = false;
        });
    }
    onClickRedeem(amount) {
        this.loader.presentLoading();
        let postData = { "AppLoginID": this.userData["appLoginID"], "Amount": amount };
        this.apiPredictorService.setRedeemVoucher(JSON.stringify(postData)).then(resp => {
            this.loader.loadingDismiss();
            if (resp.statusCode == 404) {
                this.alert.basciAlert(resp.status, "", "", ['OK']);
            }
            else if (resp.statusCode == 200) {
                this.alert.basciAlert(resp.status, "", "", ['OK']);
                this.router.navigate(["/home/user-profile/my-referrals/redeem-history"]);
            }
            else {
                this.alert.basciAlert("Oops! Something went wrong. Please contact our support team", "", "", ['OK']);
            }
        }).catch(err => {
            console.log("ERR => onClickRedeem: " + err);
            this.loader.loadingDismiss();
        });
    }
    onClickTab(customId) {
        this.selectedTab = customId;
        this.arrMyReferralsFiltered = this.arrMyReferrals;
        if (customId == 1) {
            this.arrMyReferralsFiltered = this.arrMyReferralsFiltered.filter(x => x.referralAmount != 0);
            this.countValidRef = Object.keys(this.arrMyReferralsFiltered).length;
        }
        else if (customId == 2) {
            this.arrMyReferralsFiltered = this.arrMyReferralsFiltered.filter(x => x.referralAmount == 0);
            this.countPendingRef = Object.keys(this.arrMyReferralsFiltered).length;
        }
    }
};
MyReferralsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTitleService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__.ApiPredictorService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
MyReferralsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-my-referrals',
        template: _raw_loader_my_referrals_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_referrals_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyReferralsPage);



/***/ }),

/***/ 86561:
/*!***********************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/my-referrals.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".amount {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.grid-info ion-row ion-col {\n  font-size: 0.9rem;\n}\n\nion-col > div.pkgname {\n  font-size: 0.859rem;\n  padding: 4px 5px;\n  border-radius: 5px;\n  background: #ddd;\n}\n\nion-col > div.pkgname.silver {\n  background: linear-gradient(to top right, #304352 0%, #969491 100%, #304352 100%);\n  color: #fff;\n}\n\nion-col > div.pkgname.gold {\n  background: linear-gradient(to top right, #FF8008 0%, #FFC837 100%, #FF8008 100%);\n  color: #fff;\n}\n\nion-col > div.pkgname.platinum {\n  background: linear-gradient(to top right, #c21500 0%, #ffc500 100%, #c21500 100%);\n  color: #fff;\n}\n\nion-col > div.pkgname.pro {\n  background: linear-gradient(to top right, #81ab2e 0%, #037750 100%, #81ab2e 100%);\n  color: #fff;\n}\n\n.pkg-cont {\n  box-shadow: none;\n  border-radius: 0px;\n}\n\n.footer-links ion-grid ion-row {\n  border-bottom: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXJlZmVycmFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxpQkFBQTtFQUFtQixnQkFBQTtBQUczQjs7QUFGQTtFQUEyQixpQkFBQTtBQU0zQjs7QUFKSTtFQUFlLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGdCQUFBO0FBVzlFOztBQVZRO0VBQVMsaUZBQUE7RUFBcUYsV0FBQTtBQWN0Rzs7QUFiUTtFQUFPLGlGQUFBO0VBQW9GLFdBQUE7QUFpQm5HOztBQWhCUTtFQUFXLGlGQUFBO0VBQW1GLFdBQUE7QUFvQnRHOztBQW5CUTtFQUFNLGlGQUFBO0VBQW9GLFdBQUE7QUF1QmxHOztBQXBCQTtFQUFVLGdCQUFBO0VBQWtCLGtCQUFBO0FBeUI1Qjs7QUF2QkE7RUFBK0IsNkJBQUE7QUEyQi9CIiwiZmlsZSI6Im15LXJlZmVycmFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1vdW50e2ZvbnQtc2l6ZTogMS4ycmVtOyBmb250LXdlaWdodDogNjAwOyB9XHJcbi5ncmlkLWluZm8gaW9uLXJvdyBpb24tY29se2ZvbnQtc2l6ZTogMC45cmVtO31cclxuaW9uLWNvbHtcclxuICAgID4gZGl2LnBrZ25hbWV7IGZvbnQtc2l6ZTogMC44NTlyZW07IHBhZGRpbmc6IDRweCA1cHg7IGJvcmRlci1yYWRpdXM6IDVweDsgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgICAmLnNpbHZlcntiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMzA0MzUyIDAlLCAjOTY5NDkxICAxMDAlLCAjMzA0MzUyICAxMDAlKTsgY29sb3I6ICNmZmY7fVxyXG4gICAgICAgICYuZ29sZHtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjRkY4MDA4IDAlLCAjRkZDODM3ICAxMDAlLCAjRkY4MDA4ICAxMDAlKTtjb2xvcjogI2ZmZn1cclxuICAgICAgICAmLnBsYXRpbnVte2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNjMjE1MDAgMCUsICNmZmM1MDAgMTAwJSwgI2MyMTUwMCAgMTAwJSk7Y29sb3I6ICNmZmZ9XHJcbiAgICAgICAgJi5wcm97YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzgxYWIyZSAwJSwgIzAzNzc1MCAgMTAwJSwgIzgxYWIyZSAgMTAwJSk7Y29sb3I6ICNmZmZ9XHJcbiAgICB9XHJcbn1cclxuLnBrZy1jb250e2JveC1zaGFkb3c6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDBweDt9XHJcblxyXG4uZm9vdGVyLWxpbmtzIGlvbi1ncmlkIGlvbi1yb3d7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7fVxyXG5cclxuIl19 */");

/***/ }),

/***/ 91528:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-profile/my-referrals/my-referrals.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"content-cont pb-4\">\n  <div class=\"main-cont\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-grid fixed class=\"service-list type3 mb-0\" *ngIf=\"arrMyReferrals?.length > 0\">\n      <ion-row class=\"pt-1\">\n        <ion-col size=\"6\"><span>My Package</span></ion-col>\n        <ion-col size=\"6\"><strong>{{arrRedeemInfo.packageName}} </strong></ion-col>\n      </ion-row>\n      <ion-row class=\"pt-2 mt-2\">\n        <ion-col size=\"6\"><span>Redeem Limit</span></ion-col>\n        <ion-col size=\"6\"><strong>{{arrRedeemInfo.redeemableAmount | currency:'INR':'symbol':'1.0'}}</strong></ion-col>\n      </ion-row>\n      <ion-row class=\"mt-2\">\n        <ion-col size=\"6\"><span>Redeemed Amount</span> </ion-col>\n        <ion-col size=\"3\"><strong> {{arrRedeemInfo.redeemedAmount | currency:'INR':'symbol':'1.0'}}</strong></ion-col>\n        <ion-col size=\"3\"> <ion-button [routerLink]=\"['redeem-history']\" routerLinkActive=\"router-link-active\"  expand=\"block\" size=\"small\">Vouchers</ion-button> </ion-col>\n      </ion-row>      \n    </ion-grid>\n\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button selected=\"{{selectedTab == 1 ? true : false}}\" (click)=\"onClickTab(1)\">\n        <ion-label>Valid Referral ({{countValidRef}})</ion-label>\n      </ion-tab-button>\n      <ion-tab-button  selected=\"{{selectedTab == 2 ? true : false}}\" (click)=\"onClickTab(2)\"\n        routerLinkActive=\"router-link-active\">\n        <ion-label>Pending Referral ({{countPendingRef}})</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar> \n\n    <ion-grid fixed class=\"grid-info table\" *ngIf=\"arrMyReferralsFiltered?.length > 0\">\n      <ion-row class=\"head\">\n        <ion-col size=\"2\" class=\"text-center\"><strong>Sr No.</strong></ion-col>\n        <ion-col size=\"7\" class=\"text-left\"><strong>Name</strong></ion-col>\n        <ion-col size=\"3\"><strong>Earned</strong></ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of arrMyReferralsFiltered; let i = index\">\n        <ion-col size=\"2\" class=\"text-center\"><span>{{ i+1 }}</span></ion-col>\n        <ion-col size=\"7\" class=\"text-left\">\n          <div class=\"ion-text-capitalize mb-1\"><h6 class=\"mb-0\"> {{item.firstName}} {{item.lastName}}</h6></div>          \n          <div class=\"mt-1\"><span>{{item.createdDate | date}}</span></div>\n        </ion-col>\n        <ion-col size=\"3\">\n          <div class=\"amount\" [ngClass]=\"{'text-success': item.referralAmount != '0'}\"> {{item.referralAmount | currency:'INR':'symbol':'1.0'}} </div>\n          <div class=\"pkgname mt-1\" [ngClass]=\"{'silver': item.packageName=='Silver', 'gold': item.packageName=='Gold', 'platinum': item.packageName=='Platinum','pro': item.packageName=='Pro'}\">{{item.packageName == '' ? 'Pending' : item.packageName}}</div>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ng-container *ngIf=\"arrMyReferralsFiltered?.length == 0\">\n      <div class=\"no-data text-center\">\n        <h3>You do not have any referrals</h3>\n        <br>\n        <img src=\"{{webAssetsPath}}mobility-app/invite-friend/giftbox.png\">\n        <br><br><br>\n        <h5>You will get rewards from MOKSH when your friend Register and Subscribe to Predictor Package on MOKSH Career Planner App. Remember to ask your friend to use your referral code.</h5>\n        <br>\n        <ion-button (click)=\"onClickSocialShare()\" expand=\"block\" class=\"ion-text-uppercase\">Invite Friends</ion-button>\n      </div>\n    </ng-container>\n\n    <br><br><br>\n  </div>\n\n  <section class=\"footer-links\">\n    <div class=\"main-cont\">\n      <ion-grid class=\"reedemable\">\n        <ion-row>\n          <ion-col><strong>Redeem Now</strong></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngFor=\"let item of arrRedeem\" >\n            <ion-button expand=\"block\" (click)=\"onClickRedeem(item.amount)\"  size=\"small\" [ngClass]=\"{disabled: !item.isActive}\" fill=\"outline\" >{{item.amount | currency:'INR':'symbol':'1.0'}}</ion-button>\n          </ion-col>         \n        </ion-row>\n      </ion-grid>  \n    </div>\n  </section>  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_user-profile_my-referrals_my-referrals_module_ts.js.map