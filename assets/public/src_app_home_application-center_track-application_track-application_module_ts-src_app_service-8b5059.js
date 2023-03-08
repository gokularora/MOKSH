(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_track-application_track-application_module_ts-src_app_service-8b5059"],{

/***/ 14716:
/*!***********************************************************************************************!*\
  !*** ./src/app/home/application-center/track-application/track-application-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackApplicationPageRoutingModule": () => (/* binding */ TrackApplicationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _track_application_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track-application.page */ 23514);




const routes = [
    {
        path: '',
        component: _track_application_page__WEBPACK_IMPORTED_MODULE_0__.TrackApplicationPage
    }
];
let TrackApplicationPageRoutingModule = class TrackApplicationPageRoutingModule {
};
TrackApplicationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackApplicationPageRoutingModule);



/***/ }),

/***/ 40153:
/*!***************************************************************************************!*\
  !*** ./src/app/home/application-center/track-application/track-application.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackApplicationPageModule": () => (/* binding */ TrackApplicationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _track_application_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-application-routing.module */ 14716);
/* harmony import */ var _track_application_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track-application.page */ 23514);








let TrackApplicationPageModule = class TrackApplicationPageModule {
};
TrackApplicationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _track_application_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrackApplicationPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_track_application_page__WEBPACK_IMPORTED_MODULE_2__.TrackApplicationPage]
    })
], TrackApplicationPageModule);



/***/ }),

/***/ 23514:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/track-application/track-application.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackApplicationPage": () => (/* binding */ TrackApplicationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_track_application_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./track-application.page.html */ 58049);
/* harmony import */ var _track_application_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-application.page.scss */ 71729);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);







let TrackApplicationPage = class TrackApplicationPage {
    constructor(apiApplicationService, route, headerTitle) {
        this.apiApplicationService = apiApplicationService;
        this.route = route;
        this.headerTitle = headerTitle;
        this.applicationID = 0;
        this.arrTracker = [];
        this.headerTitle.title = "Track Application";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.applicationID = this.route.snapshot.params['appID'];
        this.getTracker();
    }
    getTracker() {
        let postData = '{"ApplicationId":' + this.applicationID + ',"IsActive":true }';
        this.apiApplicationService.GetStageTrackApplication(postData).then(resp => {
            if (resp.length > 0) {
                this.arrTracker = resp;
            }
        });
    }
};
TrackApplicationPage.ctorParameters = () => [
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_2__.ApiApplicationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_3__.HeaderTitleService }
];
TrackApplicationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-track-application',
        template: _raw_loader_track_application_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_track_application_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackApplicationPage);



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

/***/ 71729:
/*!***************************************************************************************!*\
  !*** ./src/app/home/application-center/track-application/track-application.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".white-box {\n  padding: 20px;\n  padding-left: 0px;\n}\n\n.step-list.vert {\n  margin: 0px;\n  padding-top: 0px;\n}\n\n.step-list.vert li:after {\n  background-color: #ddd;\n  left: 15px;\n}\n\n.step-list.vert > li {\n  white-space: normal;\n}\n\n.step-list.vert > li h4 {\n  margin: 0px;\n  font-size: 1rem;\n  text-transform: capitalize;\n}\n\n.step-list.vert > li p {\n  margin: 0px;\n  font-size: 0.9rem;\n  color: #999;\n  margin-top: 0.8rem;\n  font-weight: 400;\n  text-transform: none;\n  font-style: italic;\n}\n\n.step-list.vert > li > a {\n  padding-left: 40px;\n}\n\n.step-list.vert > li > a ion-icon {\n  font-size: 1.7rem;\n  top: 7px;\n  left: 2px;\n  color: #999;\n  border-radius: 50%;\n}\n\n.step-list.vert > li > a:after {\n  height: 22px;\n  width: 22px;\n  left: 5px;\n  top: 10px;\n  background: #fff;\n}\n\n.step-list.vert > li > a ion-text {\n  display: block;\n  text-transform: none;\n  font-size: 0.8rem;\n  margin-top: 5px;\n}\n\n.step-list.vert > li.completed h4 {\n  color: var(--ion-color-success);\n}\n\n.step-list.vert > li.completed:after {\n  background-color: var(--ion-color-success);\n}\n\n.step-list.vert > li.completed > a ion-icon {\n  font-size: 2rem;\n  left: 0px;\n  color: var(--ion-color-success);\n}\n\n.step-list.vert > li.completed > a:after {\n  height: 26px;\n  width: 26px;\n  left: 3px;\n}\n\n.step-list.vert > li.completed + li:not(.completed) ion-icon {\n  transform: scale(1);\n  animation: pulse 1.5s infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLWFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGFBQUE7RUFBZSxpQkFBQTtBQUcxQjs7QUFBQTtFQUFpQixXQUFBO0VBQVksZ0JBQUE7QUFLN0I7O0FBSks7RUFBUyxzQkFBQTtFQUF3QixVQUFBO0FBUXRDOztBQVBLO0VBQU8sbUJBQUE7QUFVWjs7QUFUUztFQUFHLFdBQUE7RUFBWSxlQUFBO0VBQWlCLDBCQUFBO0FBY3pDOztBQWJTO0VBQUUsV0FBQTtFQUFZLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixvQkFBQTtFQUFzQixrQkFBQTtBQXNCbkg7O0FBckJTO0VBQUcsa0JBQUE7QUF3Qlo7O0FBdkJZO0VBQVMsaUJBQUE7RUFBbUIsUUFBQTtFQUFVLFNBQUE7RUFBVSxXQUFBO0VBQWEsa0JBQUE7QUE4QnpFOztBQTdCWTtFQUFRLFlBQUE7RUFBYyxXQUFBO0VBQWEsU0FBQTtFQUFXLFNBQUE7RUFBVyxnQkFBQTtBQW9DckU7O0FBbkNZO0VBQVMsY0FBQTtFQUFnQixvQkFBQTtFQUFzQixpQkFBQTtFQUFtQixlQUFBO0FBeUM5RTs7QUF0Q2E7RUFBRywrQkFBQTtBQXlDaEI7O0FBeENZO0VBQVEsMENBQUE7QUEyQ3BCOztBQXpDZ0I7RUFBUyxlQUFBO0VBQWlCLFNBQUE7RUFBVywrQkFBQTtBQThDckQ7O0FBN0NnQjtFQUFRLFlBQUE7RUFBYyxXQUFBO0VBQVksU0FBQTtBQWtEbEQ7O0FBL0NnQjtFQUFTLG1CQUFBO0VBQXFCLDhCQUFBO0FBbUQ5QyIsImZpbGUiOiJ0cmFjay1hcHBsaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUtYm94e3BhZGRpbmc6IDIwcHg7IHBhZGRpbmctbGVmdDogMHB4O31cclxuXHJcblxyXG4uc3RlcC1saXN0LnZlcnR7IG1hcmdpbjowcHg7IHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgbGk6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjogI2RkZDsgbGVmdDogMTVweDt9XHJcbiAgICAgPiBsaSB7IHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgIGg0e21hcmdpbjowcHg7IGZvbnQtc2l6ZTogMXJlbTsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cclxuICAgICAgICAgcHttYXJnaW46MHB4OyBmb250LXNpemU6IDAuOXJlbTsgY29sb3I6ICM5OTk7IG1hcmdpbi10b3A6IDAuOHJlbTsgZm9udC13ZWlnaHQ6IDQwMDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IGZvbnQtc3R5bGU6IGl0YWxpYzt9XHJcbiAgICAgICAgID5he3BhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgICAgaW9uLWljb257Zm9udC1zaXplOiAxLjdyZW07IHRvcDogN3B4OyBsZWZ0OiAycHg7Y29sb3I6ICM5OTk7IGJvcmRlci1yYWRpdXM6IDUwJTt9XHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7aGVpZ2h0OiAyMnB4OyB3aWR0aDogMjJweDsgbGVmdDogNXB4OyB0b3A6IDEwcHg7IGJhY2tncm91bmQ6ICNmZmY7fVxyXG4gICAgICAgICAgICBpb24tdGV4dHtkaXNwbGF5OiBibG9jazsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IGZvbnQtc2l6ZTogMC44cmVtOyBtYXJnaW4tdG9wOiA1cHg7fVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgICYuY29tcGxldGVke1xyXG4gICAgICAgICAgICAgaDR7Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKX1cclxuICAgICAgICAgICAgJjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7fVxyXG4gICAgICAgICAgICA+YXtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29ue2ZvbnQtc2l6ZTogMnJlbTsgbGVmdDogMHB4OyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO31cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7aGVpZ2h0OiAyNnB4OyB3aWR0aDogMjZweDtsZWZ0OiAzcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYgKyBsaTpub3QoLmNvbXBsZXRlZCl7IFxyXG4gICAgICAgICAgICAgICAgaW9uLWljb257dHJhbnNmb3JtOiBzY2FsZSgxKTsgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 58049:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/track-application/track-application.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-cont\">\r\n    <div class=\"white-box\">\r\n      <ul class=\"step-list vert\" *ngIf=\"arrTracker?.length > 0\">\r\n        <li *ngFor=\"let item of arrTracker\" [ngClass]=\"{completed: item.isCompleted}\">\r\n          <a>\r\n          <ion-icon name=\"checkmark-circle\" *ngIf=\"item.isCompleted; else elsepd\"></ion-icon>\r\n          <ng-template #elsepd>\r\n            <ion-icon name=\"ellipse-outline\"></ion-icon>\r\n          </ng-template>\r\n          <h4>{{item.stageName}}</h4>\r\n          <p *ngIf=\"item.notes\">{{item.notes}}</p>\r\n          <ion-text *ngIf=\"item.expectedDate\">Expected on:  {{item.expectedDate | date:'dd/M/yy'}}</ion-text>\r\n        </a>\r\n        </li>\r\n      </ul>\r\n      <ng-container *ngIf=\"arrTracker?.length == 0\">\r\n        <div class=\"no-data text-center\">\r\n          <h3>Tracker will update soon!</h3>\r\n          <ion-icon name=\"navigate-circle-outline\"></ion-icon>\r\n          <h5>Track application is not initiated yet. It will take 2-3 working days to update after success payment.</h5>\r\n          <p>Contact us in case any query.</p>\r\n          <div class=\"btn-cont\">\r\n            <ion-button [routerLink]=\"['/home/welcome']\" size=\"medium\" shape=\"round\" color=\"primary\">\r\n              Back to Home\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    \r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_track-application_track-application_module_ts-src_app_service-8b5059.js.map