(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_college-list_college-list_module_ts"],{

/***/ 48118:
/*!************************************************************************************!*\
  !*** ./src/app/home/college-predictor/college-list/college-list-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollegeListPageRoutingModule": () => (/* binding */ CollegeListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _college_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./college-list.page */ 86477);




const routes = [
    {
        path: '',
        component: _college_list_page__WEBPACK_IMPORTED_MODULE_0__.CollegeListPage
    }
];
let CollegeListPageRoutingModule = class CollegeListPageRoutingModule {
};
CollegeListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CollegeListPageRoutingModule);



/***/ }),

/***/ 29023:
/*!****************************************************************************!*\
  !*** ./src/app/home/college-predictor/college-list/college-list.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollegeListPageModule": () => (/* binding */ CollegeListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _college_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./college-list-routing.module */ 48118);
/* harmony import */ var _college_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./college-list.page */ 86477);








let CollegeListPageModule = class CollegeListPageModule {
};
CollegeListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _college_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.CollegeListPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_college_list_page__WEBPACK_IMPORTED_MODULE_2__.CollegeListPage]
    })
], CollegeListPageModule);



/***/ }),

/***/ 86477:
/*!**************************************************************************!*\
  !*** ./src/app/home/college-predictor/college-list/college-list.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollegeListPage": () => (/* binding */ CollegeListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_college_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./college-list.page.html */ 85764);
/* harmony import */ var _college_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./college-list.page.scss */ 5650);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);










let CollegeListPage = class CollegeListPage {
    constructor(headerTitleService, apiPredictorService, route, alertService, loader) {
        this.headerTitleService = headerTitleService;
        this.apiPredictorService = apiPredictorService;
        this.route = route;
        this.alertService = alertService;
        this.loader = loader;
        this.managementId = 0;
        this.arrState = [];
        this.arrCollegeList = [];
        this.arrCollegeListAll = [];
        this.counsellingId = 0;
        this.count = 0;
        this.cousnellingName = "";
        this.stateId = 0;
        this.isloading = true;
        this.isData = true;
        this.intakeSeats = "";
        this.arrRanking = { 'collegeName': '', 'categoryName': '', 'subCategoryName': '', 'maxRank': null, 'maxRank2': null, 'totalBudget': null };
        this.arrCutOff = [];
        this.arrSeatFees = [];
        this.selectedCollege = { 'collegeName': '' };
        this.webAssetPath = "";
        this.heading = "";
        this.managementId = parseInt(this.route.snapshot.params["managementId"]);
        if (this.managementId == 4)
            this.headerTitleService.title = this.heading = "Govt. Colleges";
        else if (this.managementId == 5)
            this.headerTitleService.title = this.heading = "Private Colleges";
        else if (this.managementId == 3)
            this.headerTitleService.title = this.heading = "Deemed Universities";
        else
            this.headerTitleService.title = this.heading = "All Medical Colleges";
        //this.headerTitleService.title = "College List";
        this.headerTitleService.isBack = true;
    }
    ionViewWillEnter() {
        this.isModalOpen = false;
    }
    ngOnInit() {
        this.webAssetPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath;
        this.counsellingId = 1;
        this.getCollegeList();
        this.getState();
    }
    getCollegeList() {
        var managementId = "";
        if (this.managementId == 0)
            managementId = null;
        else {
            managementId = this.managementId.toString();
            if (this.managementId == 4)
                managementId = "1,2,4";
            managementId = JSON.parse("[" + managementId + "]");
        }
        var stateId = this.stateId;
        stateId = (stateId == 0) ? null : stateId;
        let postData = { "stateId": stateId, "managementTypeId": managementId, "examId": 1 };
        this.apiPredictorService.getCollegeListByCounselling(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                if (this.counsellingId == 1) {
                    this.cousnellingName = "All India Colleges";
                }
                else {
                    this.cousnellingName = "State Level Colleges";
                }
                this.count = 0;
                this.arrCollegeListAll = resp;
                this.arrCollegeList = resp;
                this.count = Object.keys(resp).length;
                this.isloading = false;
            }
            else {
                this.arrCollegeList = [];
                this.isloading = false;
                this.isData = false;
            }
        }).catch(x => {
            console.log("ERR==>  getCollegeList" + x);
            this.isloading = false;
        });
    }
    getState() {
        let postData = { "IsActive": true, "examId": 1, 'counsellingId': this.counsellingId };
        this.apiPredictorService.getCPState(JSON.stringify(postData)).then(resp => {
            this.arrState = resp;
        });
    }
    onClickTab(managmentId) {
        this.isloading = true;
        this.managementId = managmentId;
        if (this.managementId == 4)
            this.heading = "Govt. Colleges";
        else if (this.managementId == 5)
            this.heading = "Private Colleges";
        else if (this.managementId == 3)
            this.heading = "Deemed Universities";
        else
            this.heading = "All Medical Colleges";
        this.getCollegeList();
    }
    onChangeState(event) {
        this.stateId = event.target.value;
        this.getCollegeList();
    }
    //#region Search Start
    search(searchbar) {
        var q = searchbar.detail.value;
        if (q.length == 0) {
            this.arrCollegeList = this.arrCollegeListAll;
            return;
        }
        if (q.trim() == '') {
            return;
        }
        this.arrCollegeList = this.arrCollegeListAll;
        this.arrCollegeList = this.arrCollegeList.filter((x) => {
            let collegeName = x["collegeName"] == null ? "" : x["collegeName"];
            let districtName = x["districtName"] == null ? "" : x["districtName"];
            let stateName = x["stateName"] == null ? "" : x["stateName"];
            if (collegeName.toLowerCase().indexOf(q.toLowerCase()) > -1 || districtName.toLowerCase().indexOf(q.toLowerCase()) > -1 || stateName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            //this.dataCount = this.arrData.length;
            return false;
        });
    }
    clearSearch() {
        this.arrCollegeList = this.arrCollegeListAll;
    }
    //#endregion
    //#region Cut-off
    onClickCutOff(item, counsellingId) {
        this.loader.presentLoading();
        this.selectedCollege = item;
        var quotaId = null;
        var genderId = null;
        if (counsellingId == 2) {
            quotaId = 11;
            genderId = 1;
        }
        else {
            quotaId = 13;
        }
        let postdata = { "collegeId": item.collegeId, "examId": 1, "subcategoryId": 13, "counsellingId": counsellingId };
        this.apiPredictorService.getCPCutOffList(JSON.stringify(postdata)).then(res => {
            this.loader.loadingDismiss();
            if (res.length > 0) {
                this.isModalOpen = true;
                var arrCutOffOriginal = res.filter(x => x.seatId == 1);
                if (arrCutOffOriginal.length == 0 /*&& item.managementType == 'Deemed Universities'*/) {
                    arrCutOffOriginal = res.filter(x => x.seatId == 2);
                }
                var arrCutOff;
                arrCutOff = arrCutOffOriginal.filter(x => x.quotaId == 0);
                if (arrCutOff.length == 0) {
                    arrCutOff = arrCutOffOriginal.filter(x => x.quotaId == quotaId);
                }
                if (counsellingId == 2) {
                    if (arrCutOff.filter(x => x.genderId == genderId).length != 0) {
                        arrCutOff = arrCutOff.filter(x => x.genderId == genderId);
                    }
                }
                var quotaAU = arrCutOffOriginal.filter(x => x.quotaId == 3);
                var quotaSVU = arrCutOffOriginal.filter(x => x.quotaId == 5);
                if (quotaAU.length != 0) {
                    arrCutOff = quotaAU;
                    if (arrCutOff.length == 0)
                        arrCutOff = quotaSVU;
                }
                this.arrCutOff = arrCutOff;
                if (this.arrCutOff.length == 0) {
                    this.isModalOpen = false;
                    this.loader.loadingDismiss();
                    this.alertService.basciAlert("Sorry, Cut-off is not available for selected college", "", "", ['OK']);
                }
                // Seat wise fees
                this.arrSeatFees = [];
                var lookupSeats = {};
                res.forEach(i => {
                    i.services = [];
                    if (!(i.seatId in lookupSeats)) {
                        lookupSeats[i.seatId] = 1;
                        this.arrSeatFees.push({ "seatId": i.seatId, 'seatType': i.seatType, "totalBudget": i.totalBudget });
                    }
                });
            }
            else {
                this.loader.loadingDismiss();
                this.alertService.basciAlert("Sorry, Cut-off is not available for selected college", "", "", ['OK']);
            }
        }).catch(x => {
            this.loader.loadingDismiss();
        });
        this.getCPCollegeIntake(counsellingId);
    }
    onClickModalClose() {
        this.isModalOpen = false;
    }
    //Not using
    getCPCollegeIntake(counsellingId) {
        let postData = { "CounsellingId": counsellingId, "ExamId": 1, "CollegeID": 343 };
        this.apiPredictorService.getCollegeIntake(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.intakeSeats = resp[0]["intakeSeats"];
            }
        });
    }
};
CollegeListPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__.ApiPredictorService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
CollegeListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-college-list',
        template: _raw_loader_college_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_college_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CollegeListPage);



/***/ }),

/***/ 5650:
/*!****************************************************************************!*\
  !*** ./src/app/home/college-predictor/college-list/college-list.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".col-filter {\n  border-top: 1px solid #ddd;\n}\n\n.college-list-cont ion-label ion-button {\n  position: relative;\n  font-size: 1rem;\n}\n\n.colg-type img {\n  height: 45px;\n  width: auto;\n  margin: auto;\n  opacity: 0.8;\n}\n\n.colg-type h6 {\n  margin-bottom: 0px;\n  margin-top: 3px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  line-height: 15px;\n}\n\n.grid-cont-resp {\n  max-height: 206px;\n  overflow: auto;\n}\n\n.custom-scrollbar ::-webkit-scrollbar {\n  -webkit-appearance: none;\n}\n\n.custom-scrollbar ::-webkit-scrollbar:vertical {\n  width: 11px;\n}\n\n.custom-scrollbar ::-webkit-scrollbar:horizontal {\n  height: 11px;\n}\n\n.custom-scrollbar ::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  border: 2px solid white;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.custom-scrollbar ::-webkit-scrollbar-track {\n  background-color: #fff;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlZ2UtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSwwQkFBQTtBQUVaOztBQUlRO0VBQVcsa0JBQUE7RUFBb0IsZUFBQTtBQUN2Qzs7QUFPSTtFQUFJLFlBQUE7RUFBYyxXQUFBO0VBQWEsWUFBQTtFQUFjLFlBQUE7QUFBakQ7O0FBQ0k7RUFBRyxrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLGlCQUFBO0FBTWpGOztBQUpBO0VBQWdCLGlCQUFBO0VBQW1CLGNBQUE7QUFTbkM7O0FBTkE7RUFDSSx3QkFBQTtBQVNKOztBQU5BO0VBQ0ksV0FBQTtBQVNKOztBQU5BO0VBQ0ksWUFBQTtBQVNKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FBU0o7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBU0oiLCJmaWxlIjoiY29sbGVnZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtZmlsdGVye2JvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb2xsZWdlLWxpc3QtY29udHtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBpb24tYnV0dG9ue3Bvc2l0aW9uOiByZWxhdGl2ZTsgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAvLyAmOmFmdGVye2NvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTExcHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAzMHB4OyB0b3A6IDBweDsgdHJhbnNmb3JtOiBza2V3KCA0NWRlZyApOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uY29sZy10eXBle1xyXG4gICAgaW1ne2hlaWdodDogNDVweDsgd2lkdGg6IGF1dG87IG1hcmdpbjogYXV0bzsgb3BhY2l0eTogMC44O31cclxuICAgIGg2e21hcmdpbi1ib3R0b206IDBweDsgbWFyZ2luLXRvcDogM3B4OyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDAuOXJlbTsgbGluZS1oZWlnaHQ6IDE1cHg7fVxyXG59XHJcbi5ncmlkLWNvbnQtcmVzcHttYXgtaGVpZ2h0OiAyMDZweDsgb3ZlcmZsb3c6IGF1dG87fVxyXG5cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcclxuICAgIHdpZHRoOiAxMXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xyXG4gICAgaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufSJdfQ== */");

/***/ }),

/***/ 85764:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/college-list/college-list.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n\n  <div>\n    <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher> -->\n\n    <!-- <ion-tab-bar slot=\"top\">\n      <ion-tab-button (click)=\"onClickTab(1)\" selected=\"{{counsellingId == 1 ? true : false}}\">\n        <ion-label>All India Colleges</ion-label>\n      </ion-tab-button>\n      <ion-tab-button (click)=\"onClickTab(2)\" selected=\"{{counsellingId == 2 ? true : false}}\">\n        <ion-label>State Level Colleges </ion-label>\n      </ion-tab-button>\n    </ion-tab-bar> -->\n\n    <div class=\"main-cont content-cont\">\n      <ion-grid fixed class=\"mb-1 mt-1 text-center colg-type padding-sm\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"white-box p-1\" [ngClass]=\"{active: managementId==4}\" (click)=\"onClickTab(4)\">\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/icon-govt.png\">\n              <h6>Government Colleges</h6>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"white-box p-1\" [ngClass]=\"{active: managementId==5}\" (click)=\"onClickTab(5)\">\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/icon-private.png\">\n              <h6>Private Colleges</h6>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"white-box p-1\" [ngClass]=\"{active: managementId==3}\" (click)=\"onClickTab(3)\">\n              <img src=\"{{webAssetPath}}/mobility-app/predictor/icon-deemed.png\">\n              <h6>Deemed Universities</h6>\n            </div>\n          </ion-col>       \n        </ion-row>\n      </ion-grid>    \n    </div>\n\n    <ion-grid class=\"filter-bar\">\n      <ion-row>\n         \n        <ion-col size=\"7\">\n          <ion-searchbar (ionChange)=\"search($event)\" (ionClear)=\"clearSearch()\" placeholder=\"Search college, state etc\" class=\"p-0\">\n          </ion-searchbar>\n        </ion-col>\n        <ion-col size=\"5\" class=\"pl-main\">\n          <ion-item class=\"ion-no-padding\" lines=\"none\" style=\"font-size: 1rem;\">           \n            <ion-select [(ngModel)]=\"stateId\" interface=\"action-sheet\" (ionChange)=\"onChangeState($event)\">\n              <ion-select-option [value]=\"0\">All States</ion-select-option>\n              <ion-select-option [value]=\"item.stateID\" *ngFor=\"let item of arrState\">{{item.stateName}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col> \n      </ion-row>\n      <!-- <ion-row class=\"col-filter\">\n        <ion-col size=\"3\">\n          <ion-text> <strong> State </strong></ion-text>\n        </ion-col>\n        \n      </ion-row> -->\n    </ion-grid>\n\n    \n    <section *ngIf=\"arrCollegeList?.length > 0\">\n      <div class=\"main-cont college-list-cont pt-3\">\n        <h5 class=\"hdng-line mb-0\">\n          <span>{{heading}} ({{count}})</span>\n        </h5>\n        <ion-virtual-scroll [items]=\"arrCollegeList\">\n          <ion-item *virtualItem=\"let item\" class=\"ion-no-padding\" lines=\"none\">\n            <ion-label>\n             \n              <div class=\"grey-box secondary-light p-1 mb-1\">\n                <h5>{{ item.collegeName }}, {{item.stateName}}</h5>              \n              <ul class=\"border-list mt-2 mb-2\">   \n                <li><span> Since {{item.yearOfInspection}}</span></li>             \n                <li><span>{{item.managementType}}</span></li>\n                <!-- <li><strong>Seats: </strong> <span>{{item.intakeSeats}}</span></li> -->\n              </ul>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"12\" class=\"mb-1\">\n                    <ion-button (click)=\"onClickCutOff(item,1)\" expand=\"block\" color=\"secondary\" shape=\"round\" class=\"m-0\" [ngClass]=\"{disabled: !item.isAllCounselling}\">\n                      All India Cut Off {{!item.isAllCounselling ? '- Do Not Participate' : ''}}\n                    </ion-button>\n                  </ion-col>\n                  <ion-col size=\"12\">\n                    <ion-button (click)=\"onClickCutOff(item,2)\" expand=\"block\" color=\"secondary\" shape=\"round\" class=\"m-0\" [ngClass]=\"{disabled: !item.isStateCounselling}\">\n                      State Level Cut-Off\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n           \n            </ion-label>\n            <!-- <ion-note slot=\"end\">\n              <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n            </ion-note>       -->\n          </ion-item>\n        </ion-virtual-scroll>\n      </div>\n    </section>\n\n    <ng-container *ngIf=\"stateId == 0 && counsellingId == 2\">\n      <div class=\"main-cont\">\n        <div class=\"grey-box p-2 primary-light mt-4\">\n          <strong>Plese select your State</strong>\n        </div>\n      </div>      \n    </ng-container>\n    <section>\n      <ng-container *ngIf=\"arrCollegeList?.length == 0 && stateId != 0\">\n        <div class=\"no-data text-center\">\n          <h3>Oops! No any colleges available for selected state</h3>\n          <ion-icon name=\"sad-outline\"></ion-icon>\n          <h5>Kindly modify your filter.</h5>\n        </div>\n      </ng-container>\n      <!-- Skeleton screen -->\n      <div *ngIf=\"isloading == true\">\n        <br><br>\n        <ion-list>\n          <ion-item>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>    \n        </ion-list>\n      </div>\n    </section>\n  </div>\n\n  <section class=\"footer-links\">\n    <div class=\"main-cont\">\n      <div class=\"pt-2 pb-2\">\n        <ion-button [routerLink]=\"['/home/college-predictor/predictor-form',1,1]\" expand=\"block\"\n          class=\"ion-text-uppercase\">\n          Know your admission chances\n        </ion-button>\n      </div>\n    </div>\n  </section>\n\n</ion-content>\n\n<div class=\"modal-cont modal-reminder\" [ngClass]=\"{active: isModalOpen}\">\n  <div class=\"modal-wrapper\">\n    <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>   \n    <div class=\"modal-body\">\n        <h5 class=\"text-left mb-1\">\n          {{selectedCollege.collegeName}}\n        </h5>\n        <div class=\"custom-scrollbar\">\n        <ion-grid fixed class=\"grid-info table grid-cont-resp \">\n          <ion-row class=\"head\">\n            <ion-col size=\"9\"><strong>Category</strong></ion-col>\n            \n            <ion-col size=\"3\"><strong>Cut-off</strong></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let item of arrCutOff\">\n            <ion-col size=\"9\">{{item.categoryName}}</ion-col>            \n            <ion-col size=\"3\"><span>{{item.maxRank}}</span></ion-col>            \n          </ion-row>\n        </ion-grid>\n      </div>\n      <div>\n        <ion-grid fixed class=\"grid-info mt-2\" *ngIf=\"intakeSeats != ''\">\n          <ion-row>\n            <ion-col size=\"9\"><strong>Seat matrix</strong></ion-col>            \n            <ion-col size=\"3\"> {{intakeSeats}}</ion-col>\n          </ion-row>          \n        </ion-grid>\n      </div>\n      <ion-grid fixed class=\"grid-info table grid-cont-resp mt-2\" *ngIf=\"arrSeatFees?.length > 0\">\n        <ion-row class=\"head\">\n          <ion-col size=\"6\"><strong>Seat Type</strong></ion-col>          \n          <ion-col size=\"6\"><strong>Total Course Fee</strong></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of arrSeatFees\">\n          <ion-col size=\"6\"><span>{{item.seatType}}</span></ion-col>            \n          <ion-col size=\"6\"><span>{{(item.totalBudget/100000) | currency:'INR':'symbol':'1.0'}} Lacs</span></ion-col>            \n        </ion-row>\n      </ion-grid>\n        <!-- <ion-grid fixed class=\"grid-info\">\n          <ion-row>\n            <ion-col size=\"7\"><strong>Category</strong></ion-col>\n            <ion-col size=\"5\">{{arrRanking.categoryName}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"7\"><strong>Sub-Category</strong></ion-col>\n            <ion-col size=\"5\">{{arrRanking.subCategoryName}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"7\"><strong>All India Cut-Off Rank</strong></ion-col>\n            <ion-col size=\"5\">{{arrRanking.maxRank == '' ? 'Do Not Participate' : arrRanking.maxRank}}</ion-col>\n          </ion-row>  \n          <ion-row>\n            <ion-col size=\"7\"><strong>State Level Cut-Off Rank</strong></ion-col>\n            <ion-col size=\"5\">{{arrRanking.maxRank2 == ''? 'Do Not Participate' : arrRanking.maxRank2}}</ion-col>\n          </ion-row>                \n          <ion-row>\n            <ion-col size=\"7\"><strong>Total Course Fee</strong></ion-col>\n            <ion-col size=\"5\">{{(arrRanking.totalBudget/100000) | currency:'INR':'symbol':'1.0'}} Lacs</ion-col>\n          </ion-row>                    \n        </ion-grid> -->\n        <br>\n        <ion-button [routerLink]=\"['/home/college-predictor/predictor-form',1,1]\" expand=\"block\"\n        class=\"ion-text-uppercase\">\n        Know your admission chances\n      </ion-button>\n      \n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_college-list_college-list_module_ts.js.map