(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_predictor-report_predictor-report_module_ts"],{

/***/ 93877:
/*!********************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-report-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorReportPageRoutingModule": () => (/* binding */ PredictorReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _predictor_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predictor-report.page */ 26311);




const routes = [
    {
        path: '',
        component: _predictor_report_page__WEBPACK_IMPORTED_MODULE_0__.PredictorReportPage
    },
    {
        path: 'predictor-filter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_college-predictor_predictor-report_predictor-filter_predictor-filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./predictor-filter/predictor-filter.module */ 20719)).then(m => m.PredictorFilterPageModule)
    }
];
let PredictorReportPageRoutingModule = class PredictorReportPageRoutingModule {
};
PredictorReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PredictorReportPageRoutingModule);



/***/ }),

/***/ 19388:
/*!************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-report.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorReportPageModule": () => (/* binding */ PredictorReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _predictor_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-report-routing.module */ 93877);
/* harmony import */ var _predictor_report_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predictor-report.page */ 26311);








let PredictorReportPageModule = class PredictorReportPageModule {
};
PredictorReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _predictor_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.PredictorReportPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_predictor_report_page__WEBPACK_IMPORTED_MODULE_2__.PredictorReportPage]
    })
], PredictorReportPageModule);



/***/ }),

/***/ 26311:
/*!**********************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-report.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorReportPage": () => (/* binding */ PredictorReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_predictor_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./predictor-report.page.html */ 33343);
/* harmony import */ var _predictor_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-report.page.scss */ 22654);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);












let PredictorReportPage = class PredictorReportPage {
    constructor(headerTitleService, apiPredictorService, storage, loader, router, toastr, alertController, firebaseAnalytics) {
        this.headerTitleService = headerTitleService;
        this.apiPredictorService = apiPredictorService;
        this.storage = storage;
        this.loader = loader;
        this.router = router;
        this.toastr = toastr;
        this.alertController = alertController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.arrPredictorAic = [];
        this.arrPredictorSlc = [];
        this.arrPredictor = [];
        this.arrPredictorAll = [];
        this.resultCount = null;
        this.resultTotalCount = 0;
        this.resultCountSTG = null;
        this.incrCountSTG = 0;
        this.counsellingType = "";
        this.counsellingName = "";
        this.rank = "NA";
        this.lblRank = "";
        this.arrPredictorForm = [];
        this.counsellingId = 0;
        this.arrSeatType = [];
        this.listOpts = { slidesPerView: 1.1, autoplay: true };
        this.arrIntakes = [];
        this.arrMoreData = { 'collegeName': '', 'noOfFaculty': 0, 'annualBudget': 0, 'yearOfInspection': 0, 'intakeSeats': 0, 'statusOfMCIRec': '' };
        this.arrActivatedpackage = { 'packageId': 0, 'limitAIC': 0, 'limitSIC': 0, 'packageCost': 0, 'packageName': "" };
        //#region saved variables
        this.arrSavedPredictor = [];
        this.counsellingIdOther = 0;
        this.counsellingNameOther = "";
        this.budgetId = 0;
        this.arrBudget = [];
        this.headerTitleService.title = "College Predictor";
        this.headerTitleService.isBack = true;
        // this.route.queryParams.subscribe(params => {
        //   if (this.router.getCurrentNavigation().extras.state) {
        //     this.getPredictorForm();
        //   }      
        // }); 
    }
    ionViewWillEnter() {
        this.isModal = false;
        this.lblRank = this.apiPredictorService.lblRank;
        this.comparePredictorForm();
    }
    ngOnInit() {
        //this.getChances();   
        this.getActivatedpackage();
        this.getPredictorForm();
        this.getSeatType();
        this.getBudget();
    }
    doRefresh(event) {
        this.getPredictedColleges();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getActivatedpackage() {
        this.storage.getObject("selectedPackage").then((resp) => {
            this.arrActivatedpackage = resp;
        });
    }
    getChances() {
        this.arrChances = [
            { 'id': 1, 'chanceName': 'Sure to Get' },
            { 'id': 2, 'chanceName': 'High Chance' },
            { 'id': 3, 'chanceName': 'Low Chance' },
            { 'id': 4, 'chanceName': 'Very Difficult' },
        ];
    }
    //#region Search Start
    search(searchbar) {
        var q = searchbar.detail.value;
        if (q.length == 0) {
            this.arrPredictor = this.arrPredictorAll;
            return;
        }
        if (q.trim() == '') {
            return;
        }
        this.arrPredictor = this.arrPredictorAll;
        this.arrPredictor = this.arrPredictor.filter((raw) => {
            let collegeName = raw["collegeName"] == null ? "" : raw["collegeName"];
            let stateName = raw["stateName"] == null ? "" : raw["stateName"];
            if (collegeName.toLowerCase().indexOf(q.toLowerCase()) > -1 || stateName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            //this.dataCount = this.arrData.length;
            return false;
        });
    }
    clearSearch() {
        this.arrPredictor = this.arrPredictorAll;
    }
    //#endregion
    comparePredictorForm() {
        if (this.apiPredictorService.arrPredictorFilter != null) {
            this.getPredictedColleges();
        }
        else {
            this.storage.getObject("predictorForm").then((res) => {
                var counter = 0;
                Object.keys(res).filter(a1 => {
                    Object.keys(this.arrPredictorForm).filter(a2 => {
                        if (a1 == a2) {
                            if (res[a1] != this.arrPredictorForm[a2]) {
                                counter++;
                                if (counter > 0) {
                                    this.isDataUpdated = false;
                                    return false;
                                }
                            }
                        }
                    });
                });
                if (counter > 0) {
                    this.isDataUpdated = true;
                    this.getPredictorForm();
                }
            });
        }
    }
    getPredictorForm() {
        this.storage.getObject("predictorForm").then((res) => {
            if (res) {
                this.arrPredictorForm = res;
                this.counsellingId = res.CounsellingID;
                if (res.CounsellingID == 1) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[0];
                    this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[1];
                    this.counsellingIdOther = 2;
                    this.firebaseAnalytics.logEvent("predictor_all_india_counselling", { 'resp': 'success', 'page': 'predictor-report' });
                }
                else if (res.CounsellingID == 2) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[1];
                    this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[0];
                    this.counsellingIdOther = 1;
                    this.firebaseAnalytics.logEvent("predictor_state_counselling", { 'resp': 'success', 'page': 'predictor-report' });
                }
                this.getPredictedColleges();
            }
            else {
                this.toastr.toastError("Oops! Something went wrong. Please start again.");
                this.router.navigate(['/home/college-predictor/predictor-form/1', this.counsellingIdOther]);
            }
        });
    }
    getPredictedColleges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            //await this.getEachCount();
            this.getRank();
            var arrPredictorForm = this.arrPredictorForm;
            var filterData = this.apiPredictorService.arrPredictorFilter;
            if (filterData != null) {
                arrPredictorForm["managementTypeId"] = filterData["managementTypeId"];
                arrPredictorForm["StateID"] = (filterData["stateId"] == null) ? arrPredictorForm["StateID"] : filterData["stateId"];
                arrPredictorForm["BudgetId"] = (filterData["budgetId"] == null) ? arrPredictorForm["BudgetId"] : filterData["budgetId"];
            }
            else {
                arrPredictorForm = this.arrPredictorForm;
            }
            this.apiPredictorService.getPredictor(JSON.stringify(arrPredictorForm)).then(resp => {
                if (resp.length > 0) {
                    this.getSavedPredictor();
                    this.resultTotalCount = resp[0]["totalCnt"];
                    if (this.counsellingId == 1)
                        this.arrPredictorAic = resp;
                    else if (this.counsellingId == 2)
                        this.arrPredictorSlc = resp;
                    this.arrPredictor = resp;
                    this.arrPredictorAll = resp;
                    this.apiPredictorService.arrPredictor = resp;
                    this.resultCount = Object.keys(this.arrPredictor).length;
                }
                else {
                    this.arrPredictor = [];
                    this.resultCount = 0;
                    this.resultCountSTG = 0;
                }
                this.loader.loadingDismiss();
                this.updateCRMData();
            }).catch(ex => {
                console.log("getPredictedColleges() = > " + ex);
                this.loader.loadingDismiss();
                this.toastr.toastError("Something went wrong. Please again later");
            });
        });
    }
    getSavedPredictor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
            let postdata = { "ExamID": this.arrPredictorForm["ExamID"], "AppLoginId": this.arrPredictorForm["AppLoginId"], "IntakeYear": intakeYear };
            this.apiPredictorService.getSavedPredictor(JSON.stringify(postdata)).then(resp => {
                this.arrSavedPredictor = resp;
                this.incrCountSTG = 0;
                resp.forEach(el => {
                    if (el.sureToget > 0) {
                        this.incrCountSTG++;
                    }
                });
                var arrData = this.arrSavedPredictor.filter(x => x.counsellingId != this.arrPredictorForm["CounsellingID"]);
                //this.getPredictedColleges();
                if (arrData.length > 0) {
                    this.isOtherCounselling = true;
                    this.counsellingIdOther = arrData[0]["counsellingId"];
                    if (arrData[0]["counsellingId"] == 1) {
                        this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[0];
                    }
                    else if (arrData[0]["counsellingId"] == 2) {
                        this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[1];
                    }
                }
                else {
                    this.isOtherCounselling = false;
                }
                //Bind Seats Type Count
                var arrSavedSeats = this.arrSavedPredictor.filter(x => x.counsellingId == this.arrPredictorForm["CounsellingID"]);
                this.arrSeatType.forEach(el => {
                    if (el["seatId"] == 0)
                        el["count"] = arrSavedSeats[0]["allCnt"];
                    if (el["seatId"] == 1)
                        el["count"] = arrSavedSeats[0]["govtCnt"];
                    if (el["seatId"] == 2)
                        el["count"] = arrSavedSeats[0]["mgmtCnt"];
                    if (el["seatId"] == 3)
                        el["count"] = arrSavedSeats[0]["nriCnt"];
                });
                this.loader.loadingDismiss();
            }).catch(ex => {
                this.loader.loadingDismiss();
                console.log("ERR => getSavedPredictor ==> " + JSON.stringify(ex));
            });
        });
    }
    getRank() {
        if (this.apiPredictorService.neetRank != 0) {
            this.rank = this.apiPredictorService.neetRank.toString();
            return false;
        }
        let postdata = { "score": this.arrPredictorForm["Score"], "ExamID": this.arrPredictorForm["ExamID"] };
        this.apiPredictorService.getRank(JSON.stringify(postdata)).then(resp => {
            if (resp) {
                if (resp.minRank == null || resp.minRank == "")
                    this.rank = resp["maxRank"];
                else
                    this.rank = resp["minRank"] + " to " + resp["maxRank"];
            }
            else {
                this.rank = "NA";
            }
        });
    }
    getSeatType() {
        this.arrSeatType = [];
        this.arrSeatType.push({ 'seatType': 'All', 'seatId': 0, 'count': 0, 'isActive': true }, { 'seatType': 'Govt', 'seatId': 1, 'count': 0, 'isActive': true }, { 'seatType': 'Mgmt', 'seatId': 2, 'count': 0, 'isActive': true }, { 'seatType': 'NRI', 'seatId': 3, 'count': 0, 'isActive': true });
    }
    getEachCount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apiPredictorService.getCPPersonalisedReport(JSON.stringify(this.arrPredictorForm)).then(resp => {
                if (resp.length > 0) {
                    this.arrChances = resp;
                }
            });
        });
    }
    onClickTab(counsellingId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.getSeatType();
            var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
            let postdata = { "ExamID": this.arrPredictorForm["ExamID"], "AppLoginId": this.arrPredictorForm["AppLoginId"], "IntakeYear": intakeYear };
            this.apiPredictorService.getSavedPredictor(JSON.stringify(postdata)).then(resp => {
                this.arrSavedPredictor = resp;
                var data = this.arrSavedPredictor.filter(x => x.counsellingId == counsellingId);
                if (data.length == 0) {
                    this.router.navigate(['/home/college-predictor/predictor-form/1', counsellingId]);
                    return false;
                }
                this.counsellingId = counsellingId;
                this.arrPredictorForm["BudgetId"] = data[0]["budgetId"];
                this.arrPredictorForm["StateID"] = data[0]["stateId"];
                this.arrPredictorForm["Categoryid"] = data[0]["categoryId"];
                this.arrPredictorForm["Subcategoryid"] = data[0]["subCategoryId"];
                this.arrPredictorForm["Quotaid"] = data[0]["quotaId"];
                this.arrPredictorForm["CounsellingID"] = data[0]["counsellingId"];
                if (counsellingId == 2) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[1];
                    this.arrPredictorForm["GenderID"] = data[0]["genderId"];
                    this.arrPredictorForm["RecordCount"] = this.arrActivatedpackage["limitSIC"];
                }
                else {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[0];
                    this.arrPredictorForm["GenderID"] = null;
                    this.arrPredictorForm["RecordCount"] = this.arrActivatedpackage["limitAIC"];
                }
                this.storage.setObject("predictorForm", this.arrPredictorForm);
                this.getPredictedColleges();
            });
        });
    }
    onClickChance(chanceName, id) {
        this.loader.presentLoading();
        setTimeout(() => {
            this.selectedChance = id;
            this.arrPredictor = this.arrPredictorAll;
            this.arrPredictor = this.arrPredictor.filter(f => f.admissionChances == chanceName);
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 500);
        }, 500);
    }
    onClickSeatType(seatId, id) {
        this.loader.presentLoading();
        setTimeout(() => {
            this.selectedChance = id;
            this.arrPredictor = this.arrPredictorAll;
            if (seatId != 0) {
                this.arrPredictor = this.arrPredictor.filter(f => f.seatId == seatId);
            }
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 500);
        }, 500);
    }
    onClickUpgrade() {
        this.router.navigate(["/home/college-predictor/predictor-checkout", 'upgrade']);
    }
    //#region Modal View More
    onClickModalClose() {
        this.isModal = false;
    }
    onClickViewMore(collegeId) {
        this.arrPredictor.forEach(el => {
            if (collegeId == el.collegeID) {
                this.arrMoreData = el;
            }
        });
        this.isModalMore = true;
    }
    modalClose() {
        this.isModalCutOffOpen = false;
        this.isModalIntake = false;
        this.isModalMore = false;
    }
    //#endregion
    //#region  Budget
    onClickChangeBudget(opt) {
        if (opt == 'yes') {
            this.isBudgetUpdate = true;
            this.selectBudgetRef.open();
        }
        else {
            var msg = "With less than Rs. 25 Lacs as your budget, your main option is MBBS Abroad. Would you like to explore this option?";
            this.presentAlertConfirm(msg);
        }
    }
    presentAlertConfirm(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: msg,
                message: '',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(["/home/welcome"]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateBudget($event) {
        if (this.isBudgetUpdate == true) {
            let budgetId = parseInt($event.target.value);
            this.budgetId = budgetId;
            this.arrPredictorForm["BudgetId"] = budgetId;
            this.storage.setObject("predictorForm", this.arrPredictorForm);
            this.getPredictorForm();
            //this.updateCRMData();
            this.isBudgetUpdate = false;
        }
    }
    updateCRMData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
            this.apiPredictorService.fnUpdateCRMData(this.arrPredictorForm["AppLoginId"], this.arrPredictorForm["ExamID"], intakeYear);
        });
    }
    getBudget() {
        if (this.arrBudget.length == 0) {
            let postData = { 'isActive': true };
            this.apiPredictorService.getBudget(JSON.stringify(postData)).then(resp => {
                this.arrBudget = (resp.length == 0) ? null : resp;
                this.budgetId = (this.arrPredictorForm == undefined) ? null : this.arrPredictorForm["BudgetId"];
            }).catch(ex => {
                this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
                console.log("getBudget()=> " + ex);
            });
        }
    }
};
PredictorReportPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_5__.ApiPredictorService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_7__.FirebaseAnalytics }
];
PredictorReportPage.propDecorators = {
    selectBudgetRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['selectBudget', { static: false },] }]
};
PredictorReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-predictor-report',
        template: _raw_loader_predictor_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_predictor_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PredictorReportPage);



/***/ }),

/***/ 22654:
/*!************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report/predictor-report.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".college-list {\n  padding: 0px;\n}\n.college-list ion-slide {\n  padding: 0px 10px;\n  padding-bottom: 10px;\n  display: block;\n  font-size: 0.9rem;\n  text-align: left;\n}\n.college-list h5 {\n  font-size: 1rem;\n  margin: -15px;\n  padding: 10px 15px;\n  margin-bottom: 15px;\n  color: #fff;\n  background: var(--ion-color-primary);\n  font-weight: 500;\n}\n.college-list p {\n  color: #555;\n  margin-bottom: 5px;\n}\n.college-list section {\n  padding: 1.2rem 0px;\n  position: relative;\n}\n.college-list section:before {\n  content: \"\";\n  position: absolute;\n  background: #eee;\n  height: 10px;\n  width: calc(100% + 30px);\n  left: -15px;\n  top: -5px;\n}\n.college-list section ion-text {\n  display: block;\n  padding-left: 23px;\n  position: relative;\n}\n.college-list section ion-text .chances-cont {\n  padding: 0px;\n  background: none;\n  border: 0px;\n  color: #000;\n}\n.college-list section ion-text h6 {\n  margin: 0px;\n}\n.college-list section ion-text ion-icon {\n  position: absolute;\n  left: -4px;\n  top: 0px;\n  font-size: 1.6rem;\n}\n.college-list section ion-text + .active {\n  display: block;\n}\n.college-list section + section {\n  margin-top: 0px;\n}\n.college-list section:last-child {\n  padding-bottom: 0px;\n}\n.college-list ion-button {\n  height: 2.5rem;\n  font-size: 1rem;\n}\n.chances-cont {\n  font-size: 1rem;\n  font-weight: 500;\n  display: block;\n  border: 1px solid #b9cc95;\n  text-align: center;\n  border-radius: 5px;\n  padding: 4px;\n  background: #f5fbea;\n  margin-bottom: 15px;\n}\n.chances-cont > span {\n  display: inline-block;\n  background: var(--ion-color-success);\n  padding: 5px 8px;\n  color: #fff;\n  font-size: 90%;\n  border-radius: 5px;\n}\n.box-prog.chance-cont .count {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-top: 5px;\n  color: #000;\n}\n.box-prog.chance-cont ion-icon {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  bottom: -5px;\n  padding: 3px;\n  font-size: 1rem;\n}\n.box-prog.chance-cont ion-col > div {\n  color: #777;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 10px 11px;\n  padding-top: 6px;\n  line-height: 15px;\n  border-width: 2px;\n}\n.box-prog.chance-cont ion-col.selected:after {\n  border-right-width: 2px;\n  border-bottom-width: 2px;\n  height: 16px;\n  width: 16px;\n  bottom: -3px;\n}\n.main-stage-list + .main-stage-list {\n  margin-top: 2rem;\n}\n@keyframes animate {\n  0% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\nion-tab-bar {\n  margin: -12px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3Rvci1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWUsWUFBQTtBQUVmO0FBREk7RUFBVSxpQkFBQTtFQUFtQixvQkFBQTtFQUFzQixjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLGdCQUFBO0FBUTFGO0FBUEk7RUFBRyxlQUFBO0VBQWlCLGFBQUE7RUFBZSxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsb0NBQUE7RUFBc0MsZ0JBQUE7QUFnQm5JO0FBZlE7RUFBRSxXQUFBO0VBQWEsa0JBQUE7QUFtQnZCO0FBaEJJO0VBQVMsbUJBQUE7RUFBcUIsa0JBQUE7QUFvQmxDO0FBbkJRO0VBQVMsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyx3QkFBQTtFQUEwQixXQUFBO0VBQWEsU0FBQTtBQTRCekg7QUEzQlE7RUFBUyxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGtCQUFBO0FBZ0NyRDtBQS9CWTtFQUFjLFlBQUE7RUFBYyxnQkFBQTtFQUFrQixXQUFBO0VBQWEsV0FBQTtBQXFDdkU7QUFwQ1k7RUFBRyxXQUFBO0FBdUNmO0FBdENZO0VBQVMsa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFFBQUE7RUFBVSxpQkFBQTtBQTRDL0Q7QUExQ1E7RUFBbUIsY0FBQTtBQTZDM0I7QUE1Q1E7RUFBVyxlQUFBO0FBK0NuQjtBQTlDUTtFQUFhLG1CQUFBO0FBaURyQjtBQS9DSTtFQUFZLGNBQUE7RUFBZ0IsZUFBQTtBQW1EaEM7QUFoREE7RUFBYyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsWUFBQTtFQUFjLG1CQUFBO0VBQXFCLG1CQUFBO0FBNER2SztBQTNESTtFQUFPLHFCQUFBO0VBQXVCLG9DQUFBO0VBQXNDLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxjQUFBO0VBQWdCLGtCQUFBO0FBbUV2SDtBQS9ESTtFQUFPLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsV0FBQTtBQXNFakU7QUFyRUk7RUFBUyxrQkFBQTtFQUFvQixTQUFBO0VBQVcsVUFBQTtFQUFZLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxZQUFBO0VBQWMsZUFBQTtBQThFdEc7QUE1RVE7RUFBTSxXQUFBO0VBQWEsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixpQkFBQTtFQUFtQixpQkFBQTtBQXFGdkg7QUFwRlE7RUFBaUIsdUJBQUE7RUFBd0Isd0JBQUE7RUFBMEIsWUFBQTtFQUFjLFdBQUE7RUFBYSxZQUFBO0FBMkZ0RztBQXRGSTtFQUFtQixnQkFBQTtBQTBGdkI7QUFyRkE7RUFDSTtJQUNFLDBCQUFBO0VBd0ZKO0VBdEZFO0lBQ0UsNkJBQUE7RUF3Rko7RUF0RkU7SUFDRSwwQkFBQTtFQXdGSjtBQUNGO0FBckZFO0VBQVksYUFBQTtFQUFlLGtCQUFBO0FBeUY3QiIsImZpbGUiOiJwcmVkaWN0b3ItcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsZWdlLWxpc3R7IHBhZGRpbmc6IDBweDtcclxuICAgIGlvbi1zbGlkZXtwYWRkaW5nOiAwcHggMTBweDsgcGFkZGluZy1ib3R0b206IDEwcHg7IGRpc3BsYXk6IGJsb2NrOyBmb250LXNpemU6IDAuOXJlbTsgdGV4dC1hbGlnbjogbGVmdDt9XHJcbiAgICBoNXtmb250LXNpemU6IDFyZW07IG1hcmdpbjogLTE1cHg7IHBhZGRpbmc6IDEwcHggMTVweDsgbWFyZ2luLWJvdHRvbTogMTVweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgZm9udC13ZWlnaHQ6IDUwMDt9XHJcbiAgICAgICAgcHtjb2xvcjogIzU1NTsgbWFyZ2luLWJvdHRvbTogNXB4O31cclxuICAgIFxyXG4gICAgICBcclxuICAgIHNlY3Rpb257IHBhZGRpbmc6IDEuMnJlbSAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmJlZm9yZXtjb250ZW50OiBcIlwiOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJhY2tncm91bmQ6ICNlZWU7IGhlaWdodDogMTBweDsgd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpOyBsZWZ0OiAtMTVweDsgdG9wOiAtNXB4O30gICAgICAgIFxyXG4gICAgICAgIGlvbi10ZXh0e2Rpc3BsYXk6IGJsb2NrOyBwYWRkaW5nLWxlZnQ6IDIzcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLmNoYW5jZXMtY29udHtwYWRkaW5nOiAwcHg7IGJhY2tncm91bmQ6IG5vbmU7IGJvcmRlcjogMHB4OyBjb2xvcjogIzAwMDt9XHJcbiAgICAgICAgICAgIGg2e21hcmdpbjogMHB4O31cclxuICAgICAgICAgICAgaW9uLWljb257cG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtNHB4OyB0b3A6IDBweDsgZm9udC1zaXplOiAxLjZyZW07fVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdGV4dCArIC5hY3RpdmV7ZGlzcGxheTogYmxvY2s7fVxyXG4gICAgICAgICYrIHNlY3Rpb257bWFyZ2luLXRvcDogMHB4O31cclxuICAgICAgICAmOmxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206IDBweDt9ICAgICAgICBcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257IGhlaWdodDogMi41cmVtOyBmb250LXNpemU6IDFyZW07fVxyXG59XHJcblxyXG4uY2hhbmNlcy1jb250e2ZvbnQtc2l6ZTogMXJlbTsgZm9udC13ZWlnaHQ6IDUwMDsgZGlzcGxheTogYmxvY2s7IGJvcmRlcjogMXB4IHNvbGlkICNiOWNjOTU7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyLXJhZGl1czogNXB4OyBwYWRkaW5nOiA0cHg7IGJhY2tncm91bmQ6ICNmNWZiZWE7IG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICA+IHNwYW57ZGlzcGxheTogaW5saW5lLWJsb2NrOyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7IHBhZGRpbmc6IDVweCA4cHg7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDkwJTsgYm9yZGVyLXJhZGl1czogNXB4O31cclxufVxyXG5cclxuLmJveC1wcm9nLmNoYW5jZS1jb250e1xyXG4gICAgLmNvdW50e2ZvbnQtc2l6ZTogMS4xcmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tdG9wOiA1cHg7IGNvbG9yOiAjMDAwO31cclxuICAgIGlvbi1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyByaWdodDogMHB4OyBtYXJnaW46IDBweCBhdXRvOyBib3R0b206IC01cHg7IHBhZGRpbmc6IDNweDsgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgID4gZGl2e2NvbG9yOiAjNzc3OyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDE0cHg7IHBhZGRpbmc6IDEwcHggMTFweDsgcGFkZGluZy10b3A6IDZweDsgbGluZS1oZWlnaHQ6IDE1cHg7IGJvcmRlci13aWR0aDogMnB4O31cclxuICAgICAgICAmLnNlbGVjdGVkOmFmdGVye2JvcmRlci1yaWdodC13aWR0aDoycHg7IGJvcmRlci1ib3R0b20td2lkdGg6IDJweDsgaGVpZ2h0OiAxNnB4OyB3aWR0aDogMTZweDsgYm90dG9tOiAtM3B4O31cclxuICAgIH1cclxufVxyXG5cclxuLm1haW4tc3RhZ2UtbGlzdHtcclxuICAgICYrLm1haW4tc3RhZ2UtbGlzdHttYXJnaW4tdG9wOiAycmVtO31cclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV7XHJcbiAgICAwJXtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tdGFiLWJhcnttYXJnaW46IC0xMnB4OyBtYXJnaW4tYm90dG9tOiAwcHg7fSJdfQ== */");

/***/ }),

/***/ 33343:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/predictor-report/predictor-report.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content class=\"pb-0 content-cont\">\n  <app-top-links-predictor></app-top-links-predictor>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"main-cont\">\n\n    <!-- <h6 class=\"hdng-line\">\n      <span>{{counsellingName}} Prediction</span>\n    </h6> -->\n\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button selected=\"{{counsellingId == 1 ? true : false}}\" (click)=\"onClickTab(1)\">\n        <ion-label>All India Counselling</ion-label>\n      </ion-tab-button>\n      <ion-tab-button  selected=\"{{counsellingId == 2 ? true : false}}\" (click)=\"onClickTab(2)\"\n        routerLinkActive=\"router-link-active\">\n        <ion-label>State Counselling</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n    <section class=\"pt-2\">\n      <ion-text color=\"success\">\n        <h4 class=\"m-0\">{{lblRank}} is <strong> {{rank}}</strong></h4>\n      </ion-text>\n    </section>\n  </div>\n  <section>\n    <ion-grid class=\"filter-bar mb-2\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-text> <strong> Filter </strong></ion-text>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-searchbar (ionChange)=\"search($event)\" (ionClear)=\"clearSearch()\"\n            placeholder=\"Search College, State etc.\"></ion-searchbar>\n        </ion-col>\n        <!-- <ion-col size=\"2\">\n          <a href=\"\" [routerLink]=\"['predictor-filter']\" routerDirection=\"forward\">\n            <ion-icon name=\"filter\"></ion-icon>\n          </a>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n    \n    <ng-container *ngIf=\"arrActivatedpackage.packageId < 3\">\n      <div class=\"pl-main mb-2 text-justify\">\n        <!-- You are sure to get admission in <strong> {{resultTotalCount}} colleges</strong>.  -->\n     <ion-text color=\"primary\"> Only {{counsellingId == 1 ? arrActivatedpackage.limitAIC : arrActivatedpackage.limitSIC}} colleges can\n        be viewed under {{arrActivatedpackage.packageName}} package. Upgrade if needed.</ion-text>  \n      </div>\n    </ng-container>   \n  <ng-container *ngIf=\"arrActivatedpackage.packageId > 2\">\n  <h6 class=\"pl-main\" *ngIf=\"resultCount > 0\"><ion-icon name=\"happy-outline\" color=\"success\"></ion-icon>  You can get admission in {{resultCount}} Colleges</h6> \n  </ng-container>\n\n    <ion-grid fixed class=\"box-prog chance-cont main-cont pt-0\">\n      <ion-row class=\"m-0\">\n        <ion-col size=\"3\" *ngFor=\"let item of arrSeatType; let i = index\" (click)=\"onClickSeatType(item.seatId, i+1)\" [ngClass]=\"{selected: i+1 == selectedChance}\">\n          <div>\n            <ion-label class=\"mt-0\">\n              <div>{{item.seatType}} <br>Seats <div class=\"count\">{{item.count}}</div>\n              </div>\n            </ion-label>\n            <ion-icon name=\"filter\"></ion-icon>\n          </div>\n        </ion-col>       \n      </ion-row>\n    </ion-grid>\n\n    <div *ngIf=\"arrActivatedpackage.packageId < 3 && arrPredictor?.length==0\" class=\"main-cont\">\n      <div class=\"grey-box primary-light text-justify p-2\">\n        <h6 style=\"font-weight: 500;\">Only {{counsellingId == 1 ? arrActivatedpackage.limitAIC : arrActivatedpackage.limitSIC}} colleges can be viewed under <strong> {{arrActivatedpackage.packageName}} package</strong>. Upgrade if needed.</h6>\n        <ion-button (click)=\"onClickUpgrade()\" expand=\"block\" class=\"ion-text-uppercase\">Upgrade Now</ion-button>\n      </div>\n    </div>\n\n    <ion-slides [options]=\"listOpts\" class=\"college-list\" *ngIf=\"arrPredictor?.length > 0\">\n      <ion-slide *ngFor=\"let item of arrPredictor\">\n        <div class=\"white-box p-2\">\n          <h5>{{item.collegeName}}</h5>\n          <span class=\"chances-cont mb-2\">You {{item.admissionChances == 'Sure to Get' ? 'are' : 'have'}} <span [ngClass]=\"{'bg-dark': item.admissionChances == 'No Chance','bg-danger': item.admissionChances == 'Very Difficult','bg-warning': item.admissionChances == 'Low Chance', 'bg-orange': item.admissionChances == 'High Chance','bg-success': item.admissionChances == 'Sure to Get'}\">{{item.admissionChances}}</span> here</span>\n          <ion-grid fixed class=\"grid-info\">\n            <ion-row>\n              <ion-col size=\"4\"><strong>District</strong></ion-col>\n              <ion-col size=\"8\"><span>{{item.districtName}}, {{item.stateName}}</span></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\"><strong>Managed by</strong></ion-col>\n              <ion-col size=\"8\"><span>{{item.managementType}}</span></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\"><strong>University</strong></ion-col>\n              <ion-col size=\"8\"><span>{{item.universityName}}</span></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\"><strong>University Type</strong></ion-col>\n              <ion-col size=\"8\"><span>{{item.universityType}}</span></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"4\"><strong>Course Fee</strong></ion-col>\n              <ion-col size=\"8\"><span>{{(item.totalBudget / 100000) | currency:'INR' : 'symbol' : '1.0'}} Lacs</span> <span class=\"seat-type\">{{item.seatType}} Seat</span> </ion-col>\n            </ion-row>           \n            <ion-row>\n              <ion-col size=\"4\"><strong>Closing Rank</strong></ion-col>\n              <ion-col size=\"8\"><span>{{item.maxRank}}</span></ion-col>\n            </ion-row>  \n            <ion-row>\n              <ion-col size=\"4\"><strong>Last year <br>cut-off Marks</strong></ion-col>\n              <ion-col size=\"8\"><span>{{item.prevYearScore}}</span></ion-col>\n            </ion-row>                   \n          </ion-grid>  \n          <div class=\"btn-cont mb-3\">\n            <ion-button (click)=\"onClickViewMore(item.collegeID)\" expand=\"block\" color=\"primary\" fill=\"outline\">View More</ion-button>\n          </div>\n          <section class=\"pb-0\" *ngIf=\"arrActivatedpackage.packageId < 3\">\n            <ion-button (click)=\"onClickUpgrade()\" expand=\"block\" color=\"secondary\">Get full list of Colleges</ion-button>\n          </section>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    \n    <ng-container *ngIf=\"resultCount == 0\">\n      <div class=\"no-data text-center pb-2\">\n        <h3>NEET score is too Low!</h3>\n        <ion-icon name=\"sad-outline\"></ion-icon>        \n      </div>\n    </ng-container>\n\n    <div class=\"main-cont\"> \n          \n      <section *ngIf=\"arrPredictor?.length == 0\">\n        <div class=\"grey-box primary-light text-justify p-2\" *ngIf=\"isOtherCounselling\">\n          <p class=\"mb-0\">\n            Unfortunately, your NEET score for your category does not guarantee a medical seat in India via {{counsellingName}}.            \n          </p>\n        </div>        \n        <div class=\"grey-box primary-light text-justify p-2 d-none\" *ngIf=\"!isOtherCounselling\">\n          <p>\n            Unfortunately, your NEET score for your category does not guarantee a medical seat in India via {{counsellingName}}. \n            Please note that all the colleges do not participate via {{counsellingName}} rounds. Accordingly, we\n            suggest you to check {{counsellingNameOther}} predictor to understand more options for admission to MBBS.\n          </p> \n          <ion-button [routerLink]=\"['/home/college-predictor/predictor-form/1/',counsellingIdOther]\" expand=\"block\" fill=\"outline\">\n            Predict colleges Via {{counsellingNameOther}} \n          </ion-button>          \n        </div>        \n        <div>\n          <br>\n          <div class=\"text-justify\">\n          <strong>In case you increase your budget, you may get more options of MBBS seat under the Management or NRI quota. If you cannot increase your budget with your low NEET score, this app shall help you apply to a world ranked university to study MBBS in Abroad </strong>\n        </div>\n          <div class=\"budget-cont pt-0\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>Your current budget is:</ion-label>\n              <ion-select [value]=\"budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n                <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\">YES</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      <div *ngIf=\"isOtherCounselling\">\n        <ion-button [routerLink]=\"['/home/college-predictor/personalized-report']\" expand=\"block\">\n          Publish Your Personalized Report\n        </ion-button>\n      </div>\n      </section>\n     \n      <section *ngIf=\"resultCountSTG > 0\">\n        <div class=\"grey-box secondary-light text-justify p-2\" *ngIf=\"isOtherCounselling\" style=\"font-weight: 400;\">\n          <strong>Congratulations!</strong> You have made it! You are sure to get admission into {{resultTotalCount}} medical colleges\n          in India via {{this.counsellingName}}. \n          <div class=\"mt-2 d-none\">\n            <strong>Would you like to check your MBBS seat options via All India Counselling?</strong>\n            <ion-grid fixed class=\"mt-2\">\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button [routerLink]=\"['/home/college-predictor/predictor-form/1/1']\" expand=\"block\" fill=\"outline\">YES</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button [routerLink]=\"['/home/welcome']\" expand=\"block\" fill=\"outline\">NO</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>    \n        </div>\n        <div class=\"mt-2\">\n          <ion-button [routerLink]=\"['/home/college-predictor/personalized-report']\" routerLinkActive=\"router-link-active\"  expand=\"block\" shape=\"round\">\n            Check Personalized Report\n          </ion-button>\n        </div>\n        </div>       \n      </section>\n\n      <!-- <section *ngIf=\"incrCountSTG == 0 && resultCountSTG == 0\">\n        <h5>Your MBBS Abroad Program right up to MD/MS!</h5>      \n        <figure class=\"m-0\" [routerLink]=\"['/home/country-list']\">\n          <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/img-welcome2.jpg\" alt=\"\">\n        </figure>\n      </section> -->\n    </div>\n  </section>\n  \n \n\n\n  <br><br>\n\n<section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isModalMore}\">\n  <div class=\"toogle-cont\">\n    <ion-text class=\"btn-close\" (click)=\"modalClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>\n    <div class=\"inner-section college-list\">    \n      <h4 class=\"text-left\">{{arrMoreData.collegeName}}</h4>          \n      <ion-grid fixed class=\"grid-info\">\n        <ion-row>\n          <ion-col size=\"4\"><strong>No of Faculty</strong></ion-col>\n          <ion-col size=\"8\"><span>{{arrMoreData.noOfFaculty == null ? 'NA' : arrMoreData.noOfFaculty}}</span></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\"><strong>Annual Fees</strong></ion-col>\n          <ion-col size=\"8\"><span>{{arrMoreData.annualBudget | currency:'INR' : 'symbol' : '1.0-0'}}</span></ion-col>\n        </ion-row> \n        <ion-row>\n          <ion-col size=\"4\"><strong>Establishment year</strong></ion-col>\n          <ion-col size=\"8\"><span>{{arrMoreData.yearOfInspection}}</span></ion-col>\n        </ion-row>   \n        <ion-row>\n          <ion-col size=\"4\"><strong>College Intake</strong></ion-col>\n          <ion-col size=\"8\"><span>{{arrMoreData.intakeSeats}}</span></ion-col>\n        </ion-row>  \n        <ion-row>\n          <ion-col size=\"4\"><strong>Notes</strong></ion-col>\n          <ion-col size=\"8\"><span>{{arrMoreData.statusOfMCIRec == '' ? 'NA' : arrMoreData.statusOfMCIRec}}</span></ion-col>\n        </ion-row>        \n      </ion-grid>\n      <br>\n    </div>\n  </div>\n</section>\n\n</ion-content>\n\n\n<div class=\"modal-cont modal-poster\" [ngClass]=\"{active: isModal}\">\n  <div class=\"modal-wrapper\">\n    <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>\n    <div class=\"modal-body\">\n      <ion-card class=\"m-0\">\n        <div class=\"modal-text\">\n          <h3>Unlock Premium Plan</h3>\n          <div>To access this feature</div>\n        </div>      \n        <ion-card-content>        \n          <ul class=\"bullet-list md\">\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>National Rank Predictor</span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Full list of AIQ Based College Prediction </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Full list of State Level College Prediction </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Complete Personalized Report </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>AIQ & SLQ based Choice Filling Form </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Hand holding & guidance throughout Indian counseling Sessions </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span> Free Access to MBBS Foundation Course </span> </li>\n          </ul>          \n          <div class=\"btn-cont mt-3 mb-0\">\n            <ion-button [routerLink]=\"['/home/college-predictor/predictor-checkout','upgrade']\" routerLinkActive=\"router-link-active\"  expand=\"block\">Upgrade Plan</ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_predictor-report_predictor-report_module_ts.js.map