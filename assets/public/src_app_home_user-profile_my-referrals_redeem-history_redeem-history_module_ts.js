(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_user-profile_my-referrals_redeem-history_redeem-history_module_ts"],{

/***/ 50676:
/*!************************************************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/redeem-history/redeem-history-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemHistoryPageRoutingModule": () => (/* binding */ RedeemHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _redeem_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-history.page */ 2825);




const routes = [
    {
        path: '',
        component: _redeem_history_page__WEBPACK_IMPORTED_MODULE_0__.RedeemHistoryPage
    }
];
let RedeemHistoryPageRoutingModule = class RedeemHistoryPageRoutingModule {
};
RedeemHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedeemHistoryPageRoutingModule);



/***/ }),

/***/ 26700:
/*!****************************************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/redeem-history/redeem-history.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemHistoryPageModule": () => (/* binding */ RedeemHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _redeem_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redeem-history-routing.module */ 50676);
/* harmony import */ var _redeem_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-history.page */ 2825);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let RedeemHistoryPageModule = class RedeemHistoryPageModule {
};
RedeemHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _redeem_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedeemHistoryPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_redeem_history_page__WEBPACK_IMPORTED_MODULE_1__.RedeemHistoryPage]
    })
], RedeemHistoryPageModule);



/***/ }),

/***/ 2825:
/*!**************************************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/redeem-history/redeem-history.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedeemHistoryPage": () => (/* binding */ RedeemHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_redeem_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./redeem-history.page.html */ 95442);
/* harmony import */ var _redeem_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redeem-history.page.scss */ 82156);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 69390);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);











let RedeemHistoryPage = class RedeemHistoryPage {
    constructor(headerTitleService, storage, apiPredictorService, clipboard, toastr, apiGeneralService) {
        this.headerTitleService = headerTitleService;
        this.storage = storage;
        this.apiPredictorService = apiPredictorService;
        this.clipboard = clipboard;
        this.toastr = toastr;
        this.apiGeneralService = apiGeneralService;
        this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath;
        this.userData = [];
        this.arrRedeemHistory = [];
        this.headerTitleService.title = "My Vouchers";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.getUserData();
    }
    doRefresh(event) {
        this.getUserData();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.userData = resp;
            this.getRedeemHistory();
        });
    }
    getRedeemHistory() {
        let postData = { "AppLoginID": this.userData["appLoginID"] };
        this.apiPredictorService.getCPRedeemVoucher(JSON.stringify(postData)).then(resp => {
            if (resp) {
                this.arrRedeemHistory = resp;
                //  this.arrRedeemHistory.push({"redeemId":2,"appLoginId":3572,"voucherId":1,"referralAppLoginId":"2746","referralCount":1,"amount":40.00,"status":"Failed","details":null,"redeemDate":null,"paymentDate":"2021-08-18T18:00:00","isActive":true,"voucherCode":"","expiryDate":"2022-07-29T00:00:00"});
                //  this.arrRedeemHistory.push({"redeemId":2,"appLoginId":3572,"voucherId":1,"referralAppLoginId":"2746","referralCount":1,"amount":40.00,"status":"InProgress","details":null,"redeemDate":null,"paymentDate":"2021-08-18T18:00:00","isActive":true,"voucherCode":"","expiryDate":"2022-07-29T00:00:00"});        
            }
        }).catch(err => {
            console.log("getRedeemInfo: " + err);
        });
    }
    onClickCopy(text) {
        this.clipboard.copy(text);
        this.toastr.toastSuccess("Code Copied!");
    }
    onClickSocialShare() {
        this.isWALoading = true;
        var inviteCode = this.userData["referralCode"];
        var message = "I’m inviting you to use MOKSH Career Planner, it will help you to Predict your All India Rank & colleges for admission based on NEET-UG score. Also, you can select and apply directly to 150+ global medical universities in 17+ countries. Guaranteed Admission to MBBS with career plan right up to PG. *Here's my Referral code (" + inviteCode + ")*";
        var file = this.webAssetsPath + "mobility-app/invite-friend/img-invite.jpg";
        var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.linkAndroidApp;
        this.apiGeneralService.fnSocialShare(message, "", file, url, "whatsapp").then(resp => {
            if (resp == false) {
                this.toastr.toastError("Sorry! Unable to share.");
            }
            this.isWALoading = false;
        });
    }
};
RedeemHistoryPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_5__.ApiPredictorService },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__.Clipboard },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_8__.ApiGeneralService }
];
RedeemHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-redeem-history',
        template: _raw_loader_redeem_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_redeem_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RedeemHistoryPage);



/***/ }),

/***/ 82156:
/*!****************************************************************************************!*\
  !*** ./src/app/home/user-profile/my-referrals/redeem-history/redeem-history.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".offer-list {\n  margin-top: 10px;\n}\n.offer-list .amnt-cont {\n  font-weight: 700;\n  font-size: 1.6rem;\n}\n.offer-list ion-row {\n  margin-bottom: 20px;\n}\n.offer-list ion-row ion-col .offer-code {\n  font-size: 16px;\n  font-weight: 500;\n  width: 140px;\n  text-align: center;\n}\n.offer-list ion-row ion-col .pr-name {\n  font-weight: 500;\n  font-size: 13px;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n}\n.offer-list ion-row.InProgress {\n  background: var(--ion-color-secondary-light);\n}\n.offer-list ion-row.InProgress ion-col .offer-code {\n  background: var(--ion-color-secondary);\n  color: #000;\n}\n.offer-list ion-row.Failed {\n  background: var(--ion-color-light-tint);\n}\n.offer-list ion-row.Failed ion-col .offer-code {\n  background: var(--ion-color-medium-light);\n}\n.offer-list ion-row.Paid ion-col .offer-code {\n  display: block;\n  width: 100%;\n  text-align: left;\n  position: relative;\n  background: #fff;\n  color: var(--ion-color-primary);\n  border: 1px dashed var(--ion-color-primary);\n}\n.offer-list ion-row.Paid ion-col .offer-code .offer-btn {\n  position: absolute;\n  right: -1px;\n  top: -1px;\n  width: 65px;\n  text-align: center;\n  background: var(--ion-color-primary);\n  color: #fff;\n  padding: 7px 10px;\n  border-radius: 0px 5px 5px 0px;\n}\n.offer-list ion-row.Paid ion-col .amnt-cont a {\n  font-size: 13px;\n  color: #032e8e;\n  position: absolute;\n  right: 10px;\n  top: 14px;\n  font-weight: normal;\n  text-decoration: none;\n}\n.offer-list figure > img {\n  height: 65px;\n  display: block;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGVlbS1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLGdCQUFBO0FBRWI7QUFESTtFQUFXLGdCQUFBO0VBQWtCLGlCQUFBO0FBS2pDO0FBSkk7RUFBUyxtQkFBQTtBQU9iO0FBTFk7RUFBYSxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxrQkFBQTtBQVcxRTtBQVJZO0VBQVMsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGtCQUFBO0FBZTdGO0FBYlE7RUFBYSw0Q0FBQTtBQWdCckI7QUFkZ0I7RUFBWSxzQ0FBQTtFQUF3QyxXQUFBO0FBa0JwRTtBQWZRO0VBQVMsdUNBQUE7QUFrQmpCO0FBaEJnQjtFQUFZLHlDQUFBO0FBbUI1QjtBQWRnQjtFQUFZLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLCtCQUFBO0VBQWlDLDJDQUFBO0FBdUJsSjtBQXRCb0I7RUFBVyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsU0FBQTtFQUFXLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixvQ0FBQTtFQUFzQyxXQUFBO0VBQWEsaUJBQUE7RUFBbUIsOEJBQUE7QUFpQ2xMO0FBOUJvQjtFQUFFLGVBQUE7RUFBaUIsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLHFCQUFBO0FBdUN4SDtBQWhDUTtFQUFNLFlBQUE7RUFBYSxjQUFBO0VBQWdCLGdCQUFBO0FBcUMzQyIsImZpbGUiOiJyZWRlZW0taGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2ZmZXItbGlzdHsgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIC5hbW50LWNvbnR7Zm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAxLjZyZW07fVxyXG4gICAgaW9uLXJvd3sgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAub2ZmZXItY29kZXsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNTAwOyB3aWR0aDogMTQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByLW5hbWV7Zm9udC13ZWlnaHQ6IDUwMDsgZm9udC1zaXplOiAxM3B4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDVweDsgbWFyZ2luLWJvdHRvbTogMHB4O31cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5JblByb2dyZXNze2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktbGlnaHQpO1xyXG4gICAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgICAgLm9mZmVyLWNvZGV7YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7IGNvbG9yOiAjMDAwO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICYuRmFpbGVke2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgIC5vZmZlci1jb2Rle2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tbGlnaHQpO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLlBhaWR7XHJcbiAgICAgICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgICAgICAub2ZmZXItY29kZXtkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGxlZnQ7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYmFja2dyb3VuZDogI2ZmZjsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgYm9yZGVyOjFweCBkYXNoZWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC5vZmZlci1idG57cG9zaXRpb246IGFic29sdXRlOyByaWdodDogLTFweDsgdG9wOiAtMXB4OyB3aWR0aDogNjVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGNvbG9yOiAjZmZmOyBwYWRkaW5nOiA3cHggMTBweDsgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbW50LWNvbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgYXtmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjMDMyZThlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAxMHB4OyB0b3A6IDE0cHg7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IHRleHQtZGVjb3JhdGlvbjogbm9uZTt9ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBmaWd1cmV7XHJcbiAgICAgICAgPiBpbWd7aGVpZ2h0OjY1cHg7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDBweCBhdXRvO31cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 95442:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/user-profile/my-referrals/redeem-history/redeem-history.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"content-cont\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<div class=\"main-cont\">\n \n\n  <ion-grid fixed class=\"offer-list\">\n    <ion-row *ngFor=\"let item of arrRedeemHistory\" [ngClass]=\"{'Paid': item.status == 'Paid','InProgress': item.status == 'InProgress', 'Failed': item.status == 'Failed'}\">\n      <ion-col size=\"3\">\n        <figure class=\"m-0\" *ngIf=\"item.status=='Paid'\">\n          <img src=\"{{webAssetsPath}}mobility-app/invite-friend/img-amazon-gift-card1.jpg\" *ngIf=\"item.voucherType == 'Amazon'; else elseimg\">\n          <ng-template #elseimg>\n            <img src=\"{{webAssetsPath}}mobility-app/invite-friend/giftbox.png\">\n          </ng-template>\n        </figure>\n        <figure *ngIf=\"item.status=='InProgress'\">\n          <img src=\"{{webAssetsPath}}mobility-app/invite-friend/hourglass.png\">\n        </figure>  \n        <figure *ngIf=\"item.status=='Failed'\">\n          <img src=\"{{webAssetsPath}}mobility-app/invite-friend/remove.png\">\n        </figure>\n        <h6 class=\"pr-name\" *ngIf=\"item.voucherType == 'Amazon'\">Amazon Pay Gift Card</h6>\n      </ion-col>\n      <ion-col size=\"9\">\n        <!-- <div>{{item.description}}</div> -->\n        <div>\n          <div class=\"amnt-cont\">{{item.amount | currency:'INR':'symbol':'1.0'}} \n            <a href=\"http://amzn.to/21kt4iE\" target=\"_blank\" *ngIf=\"item.voucherType == 'Amazon'\">T&C</a>\n          </div>         \n        </div>\n        <div class=\"offer-code mt-1\" *ngIf=\"item.voucherCode; else elseBlock\" (click)=\"onClickCopy(item.voucherCode)\" >{{item.voucherCode}} \n          <div class=\"offer-btn\">Copy</div> \n        </div>\n\n        <ng-template #elseBlock><div class=\"offer-code mt-1\">{{item.status}}</div></ng-template>\n        <div class=\"expiry\" *ngIf=\"item.voucherCode!=''\"><strong>Expiry date:</strong> {{item.expiryDate | date: 'dd/MM/yyyy'}}</div>\n        <div class=\"expiry mt-1\" *ngIf=\"item.referenceID\"><strong>Reference Id:</strong> {{item.referenceID}}</div>        \n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <ng-container *ngIf=\"arrRedeemHistory?.length == 0\">\n    <div class=\"no-data text-center\">\n      <h3>You do not have any vouchers</h3>\n      <br>\n      <img src=\"{{webAssetsPath}}mobility-app/invite-friend/giftbox.png\">\n      <br><br><br>\n      <h5>You will get rewards from MOKSH when your friend Register and Subscribe to Predictor Package on MOKSH Career Planner App. Remember to ask your friend to use your referral code.</h5>\n      <br>\n      <ion-button (click)=\"onClickSocialShare()\" expand=\"block\" class=\"ion-text-uppercase\">Invite Friends</ion-button>\n    </div>\n  </ng-container>\n</div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_user-profile_my-referrals_redeem-history_redeem-history_module_ts.js.map