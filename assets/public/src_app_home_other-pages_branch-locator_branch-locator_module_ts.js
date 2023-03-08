(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_other-pages_branch-locator_branch-locator_module_ts"],{

/***/ 44872:
/*!**********************************************************************************!*\
  !*** ./src/app/home/other-pages/branch-locator/branch-locator-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchLocatorPageRoutingModule": () => (/* binding */ BranchLocatorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _branch_locator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-locator.page */ 91342);




const routes = [
    {
        path: '',
        component: _branch_locator_page__WEBPACK_IMPORTED_MODULE_0__.BranchLocatorPage
    }
];
let BranchLocatorPageRoutingModule = class BranchLocatorPageRoutingModule {
};
BranchLocatorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BranchLocatorPageRoutingModule);



/***/ }),

/***/ 10961:
/*!**************************************************************************!*\
  !*** ./src/app/home/other-pages/branch-locator/branch-locator.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchLocatorPageModule": () => (/* binding */ BranchLocatorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _branch_locator_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-locator-routing.module */ 44872);
/* harmony import */ var _branch_locator_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-locator.page */ 91342);








let BranchLocatorPageModule = class BranchLocatorPageModule {
};
BranchLocatorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _branch_locator_routing_module__WEBPACK_IMPORTED_MODULE_1__.BranchLocatorPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_branch_locator_page__WEBPACK_IMPORTED_MODULE_2__.BranchLocatorPage]
    })
], BranchLocatorPageModule);



/***/ }),

/***/ 91342:
/*!************************************************************************!*\
  !*** ./src/app/home/other-pages/branch-locator/branch-locator.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchLocatorPage": () => (/* binding */ BranchLocatorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_branch_locator_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./branch-locator.page.html */ 97510);
/* harmony import */ var _branch_locator_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-locator.page.scss */ 32675);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/auth.service */ 37556);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/alert.service */ 25970);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);















let BranchLocatorPage = class BranchLocatorPage {
    constructor(headerTitle, apiGeneralService, callNumber, alertController, storage, apiCRMService, loader, toastr, alert, auth) {
        this.headerTitle = headerTitle;
        this.apiGeneralService = apiGeneralService;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
        this.loader = loader;
        this.toastr = toastr;
        this.alert = alert;
        this.auth = auth;
        this.arrBranches = [];
        this.arrfilteredBranches = [];
        this.arrBranchStates = [];
        this.arrStates = [];
        this.applicationId = 0;
        this.selectedBranchName = "";
        this.selectedBranchID = 0;
        this.postBranchVisit = { 'programType': '', 'subProgramType': '', 'branchVisitTime': '', };
        this.arrUserData = [];
        this.arrProductDepartment = [];
        this.arrSubProductDepartment = [];
        this.errorCount = 0;
        this.headerTitle.isBack = true;
        this.headerTitle.title = "MOKSH Branch Locator";
    }
    ionViewWillEnter() {
        this.errorCount = 0;
    }
    ngOnInit() {
        this.getBranches();
        this.getCRMDepartment();
        this.getUserData();
    }
    doRefresh(event) {
        this.errorCount = 0;
        this.getBranches();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    //== Branches Section Start
    getBranches() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            let postData = { "isAppActive": true };
            this.apiGeneralService.getBranches(JSON.stringify(postData)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                this.arrBranches = resp;
                this.arrfilteredBranches = resp;
                var lookupStates = {};
                yield this.arrBranches.forEach(i => {
                    if (!(i.stateId in lookupStates)) {
                        lookupStates[i.stateId] = 1;
                        this.arrBranchStates.push({ "stateId": i.stateId });
                    }
                });
                this.getStates();
                setTimeout(() => {
                    this.loader.loadingDismiss();
                }, 1000);
            }));
        });
    }
    getStates() {
        let postData = { "countryID": 102, "IsActive": true };
        this.apiGeneralService.getResState(JSON.stringify(postData)).then(resp => {
            this.arrStates = resp;
            this.arrBranchStates = this.arrBranchStates.map((bstate) => {
                var haveEqualId = (state) => state.stateId === bstate.stateId;
                var userWithEqualId = this.arrStates.find(haveEqualId);
                return Object.assign({}, bstate, userWithEqualId);
            });
        });
    }
    filterBranch($event) {
        let stateId = $event.target.value;
        this.arrfilteredBranches = this.arrBranches.filter(i => i.stateId === stateId);
    }
    getCRMDepartment() {
        let postData = { 'ProductDepartmentID': '' };
        this.apiCRMService.getProductDepartment(JSON.stringify(postData)).then(resp => {
            resp = JSON.parse((resp.d));
            if (resp.length > 0) {
                this.arrProductDepartment = resp;
            }
        });
    }
    getCRMSubDepartment($event) {
        let departmentId = $event.target.value;
        let postData = { 'ProductDepartmentID': departmentId, 'SubProductDepartmentID': '' };
        this.apiCRMService.getProductSubDepartment(JSON.stringify(postData)).then(resp => {
            resp = JSON.parse((resp.d));
            if (resp.length > 0) {
                this.arrSubProductDepartment = resp;
                if (resp.length == 1) {
                    this.postBranchVisit.subProgramType = resp[0]["SubProductDepartmentID"];
                }
            }
        });
    }
    onClickBookNow(branchId, branchName) {
        this.selectedBranchName = branchName;
        this.selectedBranchID = branchId;
        this.isModalOpen = true;
    }
    onClickBookNowSubmit() {
        if (this.postBranchVisit.programType == "" || this.postBranchVisit.subProgramType == "" || this.postBranchVisit.branchVisitTime == "") {
            this.toastr.toastError("Please select all mendatory details");
            return false;
        }
        this.isLoading = true;
        this.getSelection();
        this.setCRMLeadData();
    }
    onClickCallNow(branchMobileNo) {
        this.callNumber.callNumber(this.apiGeneralService.arrCounsellor["empMob1"], true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    //== Branches Section End
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("userdata").then((resp) => {
                this.apiCRMService.arrUserData = this.arrUserData = resp;
                this.apiCRMService.fnGetCRMRawData();
            });
        });
    }
    //#region  update App Registration
    updateAppRegistration(leadId) {
        this.storage.getObject("userdata").then(respUser => {
            respUser["leadID"] = leadId;
            this.storage.setObject("userdata", respUser);
        });
        this.auth.getAppRegistration().then(resp => {
            var regData = resp;
            regData["leadID"] = leadId;
            this.auth.putAppRegistration(JSON.stringify(regData));
        });
    }
    //#endregion
    //#region Update CRM Data
    setCRMLeadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.errorCount > 2) {
                this.toastr.toastError("Sorry, Unable to proceed your request. Kindly contact support team.");
                this.errorCount = 0;
                return false;
            }
            this.errorCount++;
            var leadId = (this.arrUserData["leadID"] == 0) ? "" : this.arrUserData["leadID"];
            if (leadId == "") {
                var arrPostdata = this.apiCRMService.arrCRMLeadData;
                var mobileNoCode = this.arrUserData["mobileNo"].substring(1, 3);
                var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
                arrPostdata["leadId"] = (this.arrUserData["leadID"] == 0) ? "" : this.arrUserData["leadID"];
                arrPostdata["rawLeadId"] = this.arrUserData["rawLeadID"];
                arrPostdata["productDepartmentId"] = this.postBranchVisit.programType;
                arrPostdata["subProductDepartmentId"] = this.postBranchVisit.subProgramType;
                arrPostdata["fname"] = this.arrUserData["firstName"];
                arrPostdata["lname"] = this.arrUserData["lastName"];
                arrPostdata["emailId1"] = this.arrUserData["emailId"];
                arrPostdata["contactWhatsappCode"] = mobileNoCode;
                arrPostdata["contactWhatsapp"] = mobileNo;
                arrPostdata["contactOtherCode"] = mobileNoCode;
                arrPostdata["contactOther"] = mobileNo;
                arrPostdata["sysLeadPriorityID"] = this.apiCRMService.enumPriority.Hot;
                arrPostdata["leadPriorityId"] = this.apiCRMService.enumPriority.Warm;
                arrPostdata["leadSourceId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_11__.environment.defaultLeadSourceId;
                arrPostdata["countryId"] = this.arrUserData["countryID"];
                arrPostdata["stateId"] = this.arrUserData["stateID"];
                arrPostdata["districtId"] = this.arrUserData["districtID"];
                arrPostdata["visitBranchId"] = this.selectedBranchID.toString();
                arrPostdata["visitDateTime"] = this.apiGeneralService.getCurrentDateTime(this.postBranchVisit.branchVisitTime);
                var arrRawData = Object.assign({}, this.apiCRMService.arrCRMRawData);
                arrPostdata["franchiseeId"] = arrRawData["FranchiseeID"];
                arrPostdata["sysProductDepartmentId"] = arrRawData["SysProductDepartmentID"];
                arrPostdata["sysSubProductDepartmentId"] = arrRawData["SysSubProductDepartmentID"];
                arrPostdata["studentEducationId"] = arrRawData["StudentEducationID"];
                arrPostdata["studentEducationYear"] = arrRawData["StudentEducationYear"];
                arrPostdata["isAcademyApp"] = arrRawData["IsAcademyApp"];
                arrPostdata["predictorPackage"] = arrRawData["PredictorPackage"];
                arrPostdata["isScholarshipTest"] = arrRawData["IsScholarshipTest"];
                arrPostdata["lmsCourse"] = arrRawData["LMSCourse"];
                //arrPostdata["VisitRemark"] = "This student wants to visit " + this.selectedBranchName+ " branch on " + this.branchVisitTime + " for program" + programType;
                this.apiCRMService.arrCRMLeadData = arrPostdata;
                this.apiCRMService.fnSetCRMLeadData().then((arrLeadData) => {
                    if (arrLeadData != 0) {
                        this.alert.basciAlert("Thank you! We have received your request", "Our branch manager will call you shortly", "", ['OK']);
                        this.isModalOpen = false;
                        this.isLoading = false;
                        this.errorCount = 0;
                        this.setCRMRawData(arrLeadData['leadId']);
                        this.updateAppRegistration(arrLeadData['leadId']);
                    }
                    else {
                        this.isLoading = false;
                        this.toastr.toastError("Sorry, Unable to proceed your request. Kindly contact support team.");
                    }
                }).catch(ex => {
                    this.isLoading = false;
                    this.toastr.toastError("Sorry, Unable to proceed your request. Kindly contact support team.");
                });
            }
            else {
                this.apiCRMService.fnGetCRMLeadData().then(resp => {
                    if (resp == true) {
                        this.errorCount = 0;
                        this.apiCRMService.arrCRMLeadData["productDepartmentId"] = this.postBranchVisit.programType;
                        this.apiCRMService.arrCRMLeadData["subProductDepartmentId"] = this.postBranchVisit.subProgramType;
                        this.apiCRMService.arrCRMLeadData["visitBranchId"] = this.selectedBranchID.toString();
                        this.apiCRMService.arrCRMLeadData["visitDateTime"] = this.apiGeneralService.getCurrentDateTime(this.postBranchVisit.branchVisitTime);
                        //this.apiCRMService.arrCRMLeadData["VisitRemark"] = "This student wants to visit " + this.selectedBranchName+ " branch on " + this.branchVisitTime + " for program" + programType;
                        if (this.apiCRMService.arrCRMLeadData.sysLeadPriorityID < 4 || this.apiCRMService.arrCRMLeadData.sysLeadPriorityID == null) {
                            this.apiCRMService.arrCRMLeadData["sysLeadPriorityID"] = this.apiCRMService.enumPriority.Hot;
                        }
                        this.apiCRMService.fnSetCRMLeadData().then((arrLeadData) => {
                            if (arrLeadData != 0) {
                                this.alert.basciAlert("Thank you! We have received your request", "Our branch manager will call you shortly", "", ['OK']);
                                this.isModalOpen = false;
                                this.isLoading = false;
                            }
                            else {
                                this.isLoading = false;
                                this.toastr.toastError("Sorry, Unable to proceed your request. Kindly contact support team.");
                            }
                        });
                    }
                    else {
                        this.arrUserData["leadID"] = 0;
                        this.storage.setObject("userdata", this.arrUserData);
                        this.setCRMLeadData();
                        //this.isLoading = false;
                    }
                }).catch(ex => {
                    this.alert.basciAlert("Sorry, We could not procees your request at this time. Kindly contact support", "", "", ['OK']);
                    this.isLoading = false;
                });
            }
        });
    }
    setCRMRawData(leadId) {
        this.apiCRMService.fnGetCRMRawData().then(resp => {
            if (resp == true) {
                this.apiCRMService.arrCRMRawData["productDepartmentId"] = this.postBranchVisit.programType;
                this.apiCRMService.arrCRMRawData["subProductDepartmentId"] = this.postBranchVisit.subProgramType;
                this.apiCRMService.arrCRMRawData["leadId"] = leadId;
                //this.apiCRMService.arrCRMRawData["IsActive"] = false;
                this.apiCRMService.fnSetCRMRawData();
            }
        });
    }
    //#endregion
    getSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("arrSelection").then((resp) => { this.apiCRMService.arrSelection = resp; });
        });
    }
    modalClose() {
        this.isModalOpen = false;
    }
};
BranchLocatorPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_8__.HeaderTitleService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__.ApiGeneralService },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__.CallNumber },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_10__.ApiCRMService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
BranchLocatorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-branch-locator',
        template: _raw_loader_branch_locator_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_branch_locator_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BranchLocatorPage);



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

/***/ 32675:
/*!**************************************************************************!*\
  !*** ./src/app/home/other-pages/branch-locator/branch-locator.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-row {\n  margin: 0px -5px;\n}\n\nion-button {\n  font-size: 0.9rem;\n}\n\nion-item ion-col ion-label {\n  margin: 5px;\n  margin-left: 0px;\n  padding-right: 0px;\n}\n\n.ol-poster {\n  border-top: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5jaC1sb2NhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGdCQUFBO0FBRVI7O0FBREE7RUFBVyxpQkFBQTtBQUtYOztBQUhJO0VBQWtCLFdBQUE7RUFBYSxnQkFBQTtFQUFrQixrQkFBQTtBQVNyRDs7QUFQQTtFQUFXLDBCQUFBO0FBV1giLCJmaWxlIjoiYnJhbmNoLWxvY2F0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvd3ttYXJnaW46IDBweCAtNXB4O31cclxuaW9uLWJ1dHRvbntmb250LXNpemU6IDAuOXJlbTt9XHJcbmlvbi1pdGVte1xyXG4gICAgaW9uLWNvbCBpb24tbGFiZWx7bWFyZ2luOiA1cHg7IG1hcmdpbi1sZWZ0OiAwcHg7IHBhZGRpbmctcmlnaHQ6IDBweDt9XHJcbn1cclxuLm9sLXBvc3Rlcntib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDt9Il19 */");

/***/ }),

/***/ 97510:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/other-pages/branch-locator/branch-locator.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <!-- <app-top-links></app-top-links> -->\n\n\n  \n  <section class=\"banner-sec\">    \n      <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/branch-locator/banner.jpg\" class=\"w-100\">    \n  </section>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <div>\n    <ion-grid class=\"filter-bar\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-text> <strong>Select State </strong></ion-text>\n        </ion-col>\n        <ion-col size=\"8\" class=\"text-left\">\n          <ion-select interface=\"action-sheet\" placeholder=\"Select State\" (ionChange)=\"filterBranch($event)\">\n            <ion-select-option [value]=\"item.stateId\" *ngFor=\"let item of arrBranchStates\">{{item.stateName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"main-cont\">\n    <ion-list class=\"item-list\">\n      <ion-item class=\"ion-no-padding\" lines=\"none\" *ngFor=\"let item of arrfilteredBranches\">\n        <ion-avatar slot=\"start\" class=\"img-avatar\">\n          <img #elseBlock\n            src=\"https://app.moksh16.in/application-centre/assets/mobility-app/branch-locator/icon-branch-pin.png\"\n            alt=\"\" class=\"\">\n        </ion-avatar>\n        <ion-label class=\"content\">\n          <h2>{{item.branchName}}</h2>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"7\">\n                <ion-button (click)=\"onClickBookNow(item.branchId, item.branchName)\" expand=\"block\" shape=\"round\" fill=\"outline\"\n                  color=\"primary\">Book an appointment\n                  <ion-icon name=\"bookmark-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"5\">\n                <ion-button (click)=\"onClickCallNow(item.branchMobileNo)\" expand=\"block\" shape=\"round\" fill=\"outline\"\n                  color=\"success\">Call Now\n                  <ion-icon name=\"call-outline\" slot=\"end\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <!-- <ion-text *ngIf=\"item.branchAddress\">\n            <p>  {{item.branchAddress}}</p>\n          </ion-text>           -->\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  \n\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isModalOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"modalClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n     \n      <div class=\"form-cont no-icon\">\n\n        <div class=\"text-center\">\n          <h6>{{selectedBranchName}}</h6>\n          <ion-text color=\"primary\">\n            <h6 class=\"m-0\">Book an Appointment for free career guidance session with our expert counsellor</h6>\n          </ion-text>\n        </div>  \n\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label position=\"floating\">Program Type <ion-text color=\"primary\">*</ion-text> </ion-label>\n          <ion-select interface=\"action-sheet\" [(ngModel)]=\"postBranchVisit.programType\" (ionChange)=\"getCRMSubDepartment($event)\">\n            <ion-select-option value=\"\">Select</ion-select-option>\n            <ion-select-option *ngFor=\"let item of arrProductDepartment\" [value] = item.ProductDepartmentID>{{item.ProductName}}</ion-select-option>           \n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" lines=\"none\" *ngIf=\"arrSubProductDepartment?.length > 1\">\n          <ion-label position=\"floating\">Sub Program <ion-text color=\"primary\">*</ion-text></ion-label>\n          <ion-select interface=\"action-sheet\" [(ngModel)]=\"postBranchVisit.subProgramType\">\n            <ion-select-option value=\"\">Select</ion-select-option>\n            <ion-select-option *ngFor=\"let item of arrSubProductDepartment\" [value] = item.SubProductDepartmentID>{{item.SubProductName}}</ion-select-option>           \n          </ion-select>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label position=\"floating\">Schedule your visit <ion-text color=\"primary\">*</ion-text></ion-label>\n          <ion-datetime displayFormat=\"D MMM YYYY h:mm a\"  [(ngModel)]=\"postBranchVisit.branchVisitTime\"></ion-datetime>\n        </ion-item>\n        <div class=\"btn-cont\">\n          <ion-button (click)=\"onClickBookNowSubmit()\" expand=\"block\">BOOK NOW\n            <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n          </ion-button>\n        </div>\n\n        <div class=\"ol-poster\">\n          \n          <ion-text color=\"primary\">\n            <h6>Book a FREE online session with counsellor</h6>\n          </ion-text>\n          <figure class=\"m-0 mb-4\">\n            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n          </figure>\n        </div>\n      </div>  \n    </div>\n  </section>\n\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_other-pages_branch-locator_branch-locator_module_ts.js.map