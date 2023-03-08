(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_predictor-form_predictor-form_module_ts"],{

/***/ 40353:
/*!****************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-form/predictor-form-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorFormPageRoutingModule": () => (/* binding */ PredictorFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _predictor_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predictor-form.page */ 99498);




const routes = [
    {
        path: '',
        component: _predictor_form_page__WEBPACK_IMPORTED_MODULE_0__.PredictorFormPage
    }
];
let PredictorFormPageRoutingModule = class PredictorFormPageRoutingModule {
};
PredictorFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PredictorFormPageRoutingModule);



/***/ }),

/***/ 7702:
/*!********************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-form/predictor-form.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorFormPageModule": () => (/* binding */ PredictorFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _predictor_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-form-routing.module */ 40353);
/* harmony import */ var _predictor_form_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predictor-form.page */ 99498);








let PredictorFormPageModule = class PredictorFormPageModule {
};
PredictorFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _predictor_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.PredictorFormPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_predictor_form_page__WEBPACK_IMPORTED_MODULE_2__.PredictorFormPage]
    })
], PredictorFormPageModule);



/***/ }),

/***/ 99498:
/*!******************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-form/predictor-form.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorFormPage": () => (/* binding */ PredictorFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_predictor_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./predictor-form.page.html */ 11830);
/* harmony import */ var _predictor_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-form.page.scss */ 36916);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);














let PredictorFormPage = class PredictorFormPage {
    constructor(headerTitleService, route, router, formBuilder, apiPredictorService, toastr, storage, alert, loader, alertController, firebaseAnalytics) {
        this.headerTitleService = headerTitleService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.apiPredictorService = apiPredictorService;
        this.toastr = toastr;
        this.storage = storage;
        this.alert = alert;
        this.loader = loader;
        this.alertController = alertController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.cousnellingType = 0;
        this.examId = 0;
        this.isSubmitted = false;
        this.arrState = [];
        this.arrCategory = [];
        this.arrSubCategory = null;
        this.arrQuota = null;
        this.arrSeatType = null;
        this.arrGender = null;
        this.arrBudget = null;
        this.stateId = null;
        this.categoryId = 0;
        this.subCategoryId = 0;
        this.quotaId = 0;
        this.seatId = 0;
        this.lblScore = "";
        this.arrUserData = [];
        this.limitAIC = null;
        this.limitSIC = null;
        this.recordCount = null;
        this.arrCPPayment = [];
        this.arrCRMRawData = [];
        this.arrSavedPredictor = [];
        this.infoMessage = "";
        this.infoTitle = "";
        this.initForm();
        this.headerTitleService.isBack = true;
        this.cousnellingType = parseInt(this.route.snapshot.params['CounsellingType']);
        if (this.cousnellingType == 1) {
            this.headerTitleService.title = "All India Counselling";
        }
        else {
            this.headerTitleService.title = "State Level Counselling";
        }
        this.examId = parseInt(this.route.snapshot.params['examId']);
    }
    ionViewWillEnter() {
        this.firebaseAnalytics.logEvent("predictor_form_opened", { 'resp': 'success', 'page': 'predictor-form' });
        //this.initForm();
        this.getUserDataStorage(); //GetCPPayment()    
    }
    ngOnInit() {
        if (this.cousnellingType == 2) {
            this.ionicForm.addControl("stateId", new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required));
            this.getState();
        }
        else {
            this.ionicForm.removeControl("stateId");
            this.getCategory();
        }
        this.getBudget();
        this.getExamdate();
        //this.FillForm();
    }
    //#region Form
    initForm() {
        this.ionicForm = this.formBuilder.group({
            //  rank: ['', [Validators.required, [Validators.pattern('^([0-9]{1,3})$')]]],
            //  category: ['', [Validators.required]],
            //  subcategory: ['', [Validators.required]]  
            // examScore: ['', [Validators.required, Validators.pattern('^([0-9]{1,3})$')]],
            categoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            subCategoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            stateId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            quotaId: [''],
            seatId: [''],
            genderId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            budgetId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            rank: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]],
            score: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(-180), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(720)]],
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        //this.isLoading = true;
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            var categoryId = (this.ionicForm.value.categoryId == "" || this.ionicForm.value.categoryId == undefined) ? 0 : this.ionicForm.value.categoryId;
            var subcategoryId = (this.ionicForm.value.subCategoryId == "" || this.ionicForm.value.subCategoryId == undefined) ? 0 : this.ionicForm.value.subCategoryId;
            let postdata = { 'ExamID': this.examId, 'IntakeYear': this.intakeYear, 'CategoryID': categoryId, 'SubCategoryID': subcategoryId };
            this.apiPredictorService.getCPExamCutoff(JSON.stringify(postdata)).then(resp => {
                if (resp) {
                    if (this.ionicForm.value.score >= resp["cutoffMarks"]) {
                        this.setPredictionForm();
                        this.firebaseAnalytics.logEvent("predictor_form_submitted", { 'resp': 'success', 'page': 'predictor-form' });
                    }
                    else {
                        this.presentAlertConfirm("Sorry, you are not quailified in the NEET-UG xam. However, you have one last option to pursue MBBS. Would you like to check that?");
                        this.firebaseAnalytics.logEvent("predictor_form_not_qualified", { 'resp': 'success', 'page': 'predictor-form' });
                        this.isSubmitted = false;
                        return false;
                    }
                }
            }).catch(x => {
                this.toastr.toastError("Error in fetching Cut-Off. Kindly contact to technical team.");
                this.isSubmitted = false;
            });
            //this.getCRMRawData();
            // this.updateCRMData();
        }
    }
    presentAlertConfirm(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class', header: msg, message: '', buttons: [
                    { text: 'No', role: 'cancel', cssClass: 'secondary' },
                    { text: 'Yes', handler: () => { this.router.navigate(["/home/top-links/cmp"]); } }
                ]
            });
            yield alert.present();
        });
    }
    setPredictionForm() {
        var recordCount = 0;
        if (this.cousnellingType == 1) {
            recordCount = this.limitAIC;
        }
        else if (this.cousnellingType == 2) {
            recordCount = this.limitSIC;
        }
        let postData = {
            "ExamID": (this.examId == 0) ? null : this.examId,
            "CounsellingID": (this.cousnellingType == 0) ? null : this.cousnellingType,
            "StateID": (this.ionicForm.value.stateId == undefined) ? null : this.ionicForm.value.stateId,
            "Score": this.ionicForm.value.score,
            "MaxRank": (this.ionicForm.value.rank == undefined) ? null : this.ionicForm.value.rank,
            "GenderID": (this.ionicForm.value.genderId == "") ? 0 : this.ionicForm.value.genderId,
            "BudgetId": (this.ionicForm.value.budgetId),
            //"SeatId": (this.ionicForm.value.seatId == "") ? 0 : this.ionicForm.value.seatId,        
            "Quotaid": (this.ionicForm.value.quotaId == "" ? 0 : this.ionicForm.value.quotaId),
            "Subcategoryid": (this.ionicForm.value.subCategoryId == "") ? 0 : this.ionicForm.value.subCategoryId,
            "Categoryid": (this.ionicForm.value.categoryId == "") ? 0 : this.ionicForm.value.categoryId,
            "RecordCount": recordCount,
            "AppLoginId": this.arrUserData["appLoginID"]
        };
        this.storage.setObject("predictorForm", postData);
        this.apiPredictorService.neetRank = (this.ionicForm.value.rank == undefined) ? 0 : this.ionicForm.value.rank;
        this.isSubmitted = false;
        //this.GetCPPayment();
        let navigationExtras = { state: { filter: '2' } };
        if (this.arrCPPayment.length > 0) {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            if (this.isPackageExpired == true) {
                this.router.navigate(['/home/college-predictor/predictor-checkout'], { queryParams: { "isfresh": true } });
            }
            else {
                this.router.navigate(['/home/college-predictor/predictor-report'], { queryParams: { "isfresh": true } });
            }
            //this.router.navigate(['/home/college-predictor/predictor-report'], navigationExtras);  
        }
        else {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate(['/home/college-predictor/predictor-checkout'], { queryParams: { "isfresh": true } });
        }
    }
    //#endregion
    //#region Form Fields Get
    getState() {
        let postData = { "IsActive": true, "examId": this.examId, 'counsellingId': this.cousnellingType };
        this.apiPredictorService.getCPState(JSON.stringify(postData)).then(resp => {
            this.arrState = resp;
        });
    }
    getStateId(stateId, $event) {
        this.arrCategory = null;
        this.arrSubCategory = null;
        this.arrQuota = null;
        this.arrSeatType = null;
        this.arrGender = null;
        this.stateId = (stateId == "") ? $event.target.value : stateId;
        if (this.stateId != '') {
            this.isSpinnerLoading = true;
            this.getCategory();
        }
    }
    getCategory() {
        let postData = { "ExamID": this.examId, "CounsellingID": this.cousnellingType, "StateID": this.stateId };
        this.apiPredictorService.getCategoryOnMapping(JSON.stringify(postData)).then(resp => {
            if (resp.length == 0) {
                this.ionicForm.removeControl("categoryId");
                this.ionicForm.removeControl("subCategoryId");
                this.arrCategory = null;
            }
            else {
                this.ionicForm.addControl("categoryId", new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required));
                this.ionicForm.addControl("subCategoryId", new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required));
                this.arrCategory = resp;
                this.ionicForm.controls.categoryId.setValue(resp[0]["categoryId"]);
                this.getSubCategory("", resp[0]["categoryId"]);
            }
            this.isSpinnerLoading = false;
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getCategory()=> " + ex);
            this.isSpinnerLoading = false;
        });
    }
    getSubCategory($event, categoryId) {
        this.isSpinnerLoading = true;
        this.categoryId = (categoryId == 0) ? $event.target.value : categoryId;
        let postData = { "ExamID": this.examId, "CounsellingID": this.cousnellingType, "StateID": this.stateId, "CategoryID": this.categoryId };
        this.apiPredictorService.getSubCategoryOnMapping(JSON.stringify(postData)).then(resp => {
            if (resp.length == 0) {
                this.arrSubCategory = null;
                this.ionicForm.removeControl("subCategoryId");
            }
            else {
                this.arrSubCategory = resp;
                this.ionicForm.controls.subCategoryId.setValue(resp[0]["subCategoryId"]);
                this.getQuoata("", resp[0]["subCategoryId"]);
            }
            this.isSpinnerLoading = false;
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getSubCategory()=> " + ex);
            this.isSpinnerLoading = false;
        });
    }
    getQuoata($event, subCategoryId) {
        this.isSpinnerLoading = true;
        this.subCategoryId = (subCategoryId == 0) ? $event.target.value : subCategoryId;
        let postData = { "ExamID": this.examId, "CounsellingID": this.cousnellingType, "StateID": this.stateId, "CategoryID": this.categoryId, "SubCategoryID": this.subCategoryId };
        this.apiPredictorService.getQuota(JSON.stringify(postData)).then(resp => {
            if (resp.length == 0) {
                this.arrQuota = null;
                this.getgender("", null);
                this.ionicForm.removeControl("quotaId");
            }
            else {
                this.ionicForm.addControl("quotaId", new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required));
                this.arrQuota = resp;
                this.ionicForm.controls.quotaId.setValue(resp[0]["quotaId"]);
                this.getgender("", resp[0]["quotaId"]);
            }
            this.isSpinnerLoading = false;
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getSubCategory()=> " + ex);
            this.isSpinnerLoading = false;
        });
    }
    /*
    getSeatType($event, quotaId) {
      this.isSpinnerLoading = true;
      this.quotaId = ($event == "") ? null : $event.target.value;
      let postData = { "ExamID": this.examId, "CounsellingID": this.cousnellingType, "StateID": this.stateId, "CategoryID": this.categoryId, "SubCategoryID": this.subCategoryId, "QuotaID": this.quotaId };
      this.apiPredictorService.getSeatType(JSON.stringify(postData)).then(resp => {
        if (resp.length == 0) {
          this.arrSeatType = null;
          this.getgender("", null);
          this.ionicForm.removeControl("genderId");
          this.ionicForm.get("seatId").disable();
        }
        else {
          this.ionicForm.addControl("genderId", new FormControl("", Validators.required));
          this.arrSeatType = resp;
          this.getgender("", resp[0]["seatId"])
        }
        this.isSpinnerLoading = false;
      }).catch(ex => {
        this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
        console.log("getSubCategory()=> " + ex);
        this.isSpinnerLoading = false;
      })
    }*/
    getgender($event, quotaId) {
        this.isSpinnerLoading = true;
        this.quotaId = (quotaId == 0) ? $event.target.value : quotaId;
        let postData = { "ExamID": this.examId, "CounsellingID": this.cousnellingType, "StateID": this.stateId, "CategoryID": this.categoryId, "SubCategoryID": this.subCategoryId, "QuotaID": this.quotaId };
        this.apiPredictorService.getGender(JSON.stringify(postData)).then(resp => {
            if (resp.length == 0) {
                this.arrGender = null;
                this.ionicForm.controls.genderId.setValue(0);
            }
            else {
                this.arrGender = resp;
            }
            this.isSpinnerLoading = false;
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getSubCategory()=> " + ex);
            this.isSpinnerLoading = false;
        });
    }
    getBudget() {
        this.loader.presentLoading();
        let postData = { 'isActive': true };
        this.apiPredictorService.getBudget(JSON.stringify(postData)).then(resp => {
            this.arrBudget = (resp.length == 0) ? null : resp;
            this.ionicForm.controls.budgetId.setValue(this.arrBudget[3]["budgetId"]);
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getBudget()=> " + ex);
        });
    }
    getExamdate() {
        let currentYear = new Date().getFullYear();
        this.currentDate = new Date();
        let postData = { 'intakeYear': currentYear, "isActive": true, "examId": this.examId };
        this.apiPredictorService.getExamDate(JSON.stringify(postData)).then(resp => {
            if (resp) {
                var arrData = resp[0];
                this.storage.setObject("intakeYear", { 'year': arrData.lastIntakeYear });
                this.intakeYear = arrData.intakeYear;
                this.lastIntakeYear = arrData.lastIntakeYear;
                this.resultDate = new Date(arrData.resultDate);
                if (this.currentDate < this.resultDate) {
                    this.lblScore = "Your NEET Predicted Score"; // Your Predicated Rank is
                    this.apiPredictorService.lblRank = "Your Predicted AIR";
                    this.ionicForm.removeControl("rank");
                }
                else {
                    this.lblScore = "Your NEET Score"; // Your Rank is
                    this.apiPredictorService.lblRank = "Your All India Rank";
                    this.ionicForm.removeControl("rank");
                    this.ionicForm.addControl("rank", new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1)]));
                }
            }
            else {
                this.toastr.toastError("No Exam data available! Please contact technical team.");
            }
        }).catch(ex => {
            this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
            console.log("getExamdate()=> " + ex);
        });
    }
    //#endregion
    FillForm() {
        this.storage.getObject("predictorForm").then(res => {
            if (res) {
                if (res["CounsellingID"] == this.cousnellingType) {
                    this.arrPredictorForm = res;
                    if (res["CounsellingID"] == 2) {
                        this.ionicForm.controls.stateId.setValue(res["StateID"]);
                        this.getStateId(res["StateID"], "");
                    }
                    this.ionicForm.controls.categoryId.setValue(res["Categoryid"]);
                    this.ionicForm.controls.subCategoryId.setValue(res["Subcategoryid"]);
                    this.ionicForm.controls.quotaId.setValue(res["Quotaid"]);
                    this.ionicForm.controls.budgetId.setValue(res["BudgetId"]);
                    this.ionicForm.controls.score.setValue(res["Score"]);
                    this.ionicForm.controls.rank.setValue(res["MaxRank"]);
                }
                else {
                    this.ionicForm.controls.budgetId.setValue(res["BudgetId"]);
                    this.ionicForm.controls.score.setValue(res["Score"]);
                    this.ionicForm.controls.rank.setValue(res["MaxRank"]);
                }
            }
            else {
                this.getSavedPredictor();
            }
        });
    }
    getSavedPredictor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.arrSavedPredictor.length == 0) {
                var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
                let postdata = { "ExamID": this.examId, "AppLoginId": this.arrUserData["appLoginID"], "IntakeYear": intakeYear };
                this.apiPredictorService.getSavedPredictor(JSON.stringify(postdata)).then(resp => {
                    if (resp.length > 0) {
                        if (resp.length == 1) {
                            this.arrSavedPredictor = resp[0];
                            this.ionicForm.controls.categoryId.setValue(this.arrSavedPredictor["categoryId"]);
                            setTimeout(() => {
                                this.ionicForm.controls.subCategoryId.setValue(this.arrSavedPredictor["subCategoryId"]);
                                setTimeout(() => {
                                    this.ionicForm.controls.quotaId.setValue(this.arrSavedPredictor["quotaId"]);
                                }, 100);
                            }, 100);
                            if (this.cousnellingType == 2) {
                                this.isScoreDisable = true;
                            }
                        }
                        else if (resp.length == 2) {
                            var data = resp.filter(x => x.counsellingId == this.cousnellingType);
                            this.arrSavedPredictor = data[0];
                            if (data[0]["counsellingId"] == 2) {
                                this.ionicForm.controls.stateId.setValue(this.arrSavedPredictor["stateId"]);
                                setTimeout(() => {
                                    this.ionicForm.controls.categoryId.setValue(this.arrSavedPredictor["categoryId"]);
                                    setTimeout(() => {
                                        this.ionicForm.controls.subCategoryId.setValue(this.arrSavedPredictor["subCategoryId"]);
                                        setTimeout(() => {
                                            if (this.arrSavedPredictor["quotaId"] != 0)
                                                this.ionicForm.controls.quotaId.setValue(this.arrSavedPredictor["quotaId"]);
                                            setTimeout(() => {
                                                this.ionicForm.controls.genderId.setValue(this.arrSavedPredictor["genderId"]);
                                            }, 100);
                                        }, 100);
                                    }, 100);
                                }, 100);
                                this.isScoreDisable = true;
                            }
                            else {
                                this.ionicForm.controls.categoryId.setValue(this.arrSavedPredictor["categoryId"]);
                                setTimeout(() => {
                                    this.ionicForm.controls.subCategoryId.setValue(this.arrSavedPredictor["subCategoryId"]);
                                    setTimeout(() => {
                                        this.ionicForm.controls.quotaId.setValue(this.arrSavedPredictor["quotaId"]);
                                    }, 100);
                                }, 100);
                                this.isScoreDisable = false;
                            }
                        }
                        if (this.ionicForm.controls.score != undefined)
                            this.ionicForm.controls.score.setValue(this.arrSavedPredictor["score"]);
                        if (this.ionicForm.controls.rank != undefined)
                            this.ionicForm.controls.rank.setValue(this.arrSavedPredictor["maxRank"]);
                        this.ionicForm.controls.budgetId.setValue(this.arrSavedPredictor["budgetId"]);
                    }
                    else {
                        this.isScoreDisable = false;
                    }
                    setTimeout(() => {
                        this.loader.loadingDismiss();
                    }, 500);
                });
            }
        });
    }
    getUserDataStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("userdata").then((resp) => {
                this.arrUserData = resp;
                setTimeout(() => {
                    this.getSavedPredictor();
                }, 500);
                this.GetCPPayment();
            });
        });
    }
    resetForm() {
        this.initForm();
        this.arrState = [];
        this.arrCategory = null;
        this.arrSubCategory = null;
        this.arrQuota = null;
        this.arrSeatType = null;
        this.arrGender = null;
        this.arrBudget = null;
        this.stateId = null;
        this.categoryId = 0;
        this.subCategoryId = 0;
        this.quotaId = 0;
        this.seatId = 0;
    }
    GetCPPayment() {
        this.storage.removeItem("selectedPackage");
        let postData = { 'isActive': true, 'paymentStatus': 'Paid', 'appLoginId': this.arrUserData["appLoginID"] };
        this.apiPredictorService.GetCPPayment(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrCPPayment = resp;
                var validTo = new Date(resp[0]["validTo"]).getTime();
                var todaydate = new Date().getTime();
                if (todaydate > validTo && resp[0]["packageId"] > 1) {
                    this.isPackageExpired = true;
                    //this.updateCPPayment(resp[0]);
                    this.alert.basciAlert("Whoops! Package Expired. Kindly renew to continue.", "", "", ['Ok']);
                    return false;
                }
                let postData = { 'packageId': resp[0]["packageId"] };
                this.apiPredictorService.getPackages(JSON.stringify(postData)).then(respPackage => {
                    this.limitAIC = (respPackage.filter(x => x.packageServiceId == 2))[0]["limit"];
                    // this.limitAIC = arrlimit[0]["limit"];          
                    this.limitSIC = (respPackage.filter(x => x.packageServiceId == 3))[0]["limit"];
                    // this.limitSIC = arrlimit[0]["limit"];
                    var selectedPackage = { 'packageId': respPackage[0]["packageId"], 'limitAIC': this.limitAIC, 'limitSIC': this.limitSIC, 'packageCost': respPackage[0]["packageCost"], 'packageName': respPackage[0]["packageName"] };
                    this.storage.setObject("selectedPackage", selectedPackage);
                });
            }
        }).catch(ex => {
            console.log("GetCPPayment() " + ex);
            this.toastr.toastError("Sorry! We are facing some difficulties to get your package information.");
        });
    }
    updateCPPayment(arrPackagePayment) {
        arrPackagePayment["isActive"] = false;
        this.apiPredictorService.setCPPayment(JSON.stringify(arrPackagePayment), arrPackagePayment["memberPaymentId"]);
    }
    onClickToolTip(fieldName) {
        if (fieldName == "categoryId") {
            this.infoTitle = "Category";
            this.infoMessage = "Around 50% of the medical seats are available for the General category while the balance 50% of the seats are distributed to the reserved category students in India. Also, the fee structures are different for general and reserved categories.<br><br>Due to this system, the admission option changes drastically based on the Caste Category defined by you.  It is very important to define your caste category correctly else the app would not be able to give you realistic predictions!<br><br>Unless you have an original caste certificate, you should not apply under that category.";
        }
        else if (fieldName == "subCategoryId") {
            this.infoTitle = "Sub Category";
            this.infoMessage = "As per the government policies, Physically handicapped / disabled persons would have special reserved quota for medical seat allocation. Those who fall into this category can specify accordingly and can avail of the medical seat reserved for them. <br><br>Unless you have an original valid certificate towards your disability, you should not apply under that category.";
        }
        else if (fieldName == "quotaId") {
            this.infoTitle = "Special Quota";
            this.infoMessage = "All India Quota is a default and general selection for all the students. This can be chosen by all the students with or without a special quota.<br><br>Just in case if you fall into a special category, you should choose a relevant quota. By choosing the right special category, you would enhance your admission options. The MOKSH mobile app has updated the reservation policies of the Government of India and would showcase the relevant options based on your NEET score!<br><br>Always input the correct information to get the realistic results!";
        }
        else if (fieldName == "budgetId") {
            this.infoTitle = "Budget";
            this.infoMessage = "While applying for a medical college in India, you must enter your correct budget to get the real picture on your options based on NEET score and category. You must note that MOKSH predictor helps you to segregate all your available options out of 564 medical colleges and universities. The Management Seats and NRI Seats are based majorly on your capacity to pay the fees. It means, as you enhance your budget, your spectrum of opportunities to get admission in India increase.<br><br> It also means that if you enter your budget wrongly, the final report generated would be drastically different from the reality. MOKSH recommends you to ensure you always enter the budget rightly. Of course, you can always change your budget and check all the possibilities!<br><br> When you have entered a budget for either All India or State level counselling, the app will consider the same budget for both while predicting the colleges.";
        }
        else if (fieldName == "score") {
            this.infoTitle = "NEET Score";
            this.infoMessage = "Till the NEET results are announced, the system asks you to input your predicted score. The predicted score should not be your fancy but based on your mock test results. In order to arrive at your predicted score, MOKSH Academy platform offers you to avail of the FREE NEET Crash course<i> (available for FREE for Predictor PRO package users)</i>. The MOKSH NEET Crash course consists of 97 hours of live conceptual lectures &amp; 22 Mock Test series and runs for 45 days before the NEET Exam. The system shall automatically predict your option of colleges in India based on your Mock Test. The accuracy level of MOKSH NEET predictor would be around 85% till this time.<br><br>Once the NEET-UG exam results are announced, you would be asked to enter your actual score and the rank. The accuracy level of MOKSH NEET predictor would be around 95% here onward.";
        }
        this.isPanelOpen = true;
    }
    panelClose() {
        this.isPanelOpen = false;
    }
};
PredictorFormPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__.HeaderTitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_6__.ApiPredictorService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_8__.FirebaseAnalytics }
];
PredictorFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-predictor-form',
        template: _raw_loader_predictor_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_predictor_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PredictorFormPage);



/***/ }),

/***/ 36916:
/*!********************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-form/predictor-form.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-cont > ion-grid ion-col {\n  padding-right: 30px;\n  position: relative;\n}\n\n.info-icon {\n  position: absolute;\n  right: 0px;\n  top: 48%;\n  width: 30px;\n  height: 30px;\n  text-align: right;\n}\n\n.info-icon ion-icon {\n  color: #02287a;\n  font-size: 25px;\n  position: static;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3Rvci1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUFRLG1CQUFBO0VBQXFCLGtCQUFBO0FBRHJDOztBQUlBO0VBQVcsa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFFBQUE7RUFBVSxXQUFBO0VBQWEsWUFBQTtFQUFjLGlCQUFBO0FBS2hGOztBQUpJO0VBQVMsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLHFCQUFBO0FBVWhFIiwiZmlsZSI6InByZWRpY3Rvci1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZvcm0tY29udHtcclxuICAgID4gaW9uLWdyaWR7XHJcbiAgICAgICAgaW9uLWNvbHtwYWRkaW5nLXJpZ2h0OiAzMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gICAgfVxyXG59XHJcbi5pbmZvLWljb257cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMHB4OyB0b3A6IDQ4JTsgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBpb24taWNvbntjb2xvcjogIzAyMjg3YTsgZm9udC1zaXplOiAyNXB4OyBwb3NpdGlvbjogc3RhdGljOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG59Il19 */");

/***/ }),

/***/ 11830:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/predictor-form/predictor-form.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <div class=\"main-cont\">\n    <form class=\"form-cont no-icon p-0\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\">\n      <ion-grid fixed>\n        <h6 class=\"mb-0 mt-2\">Fill below details to start NEET Predictor</h6>       \n        <ion-row>\n          <!-- <ion-col size=\"12\">\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.examScore.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">NEET Score</ion-label>\n              <ion-input maxlength=\"3\" size=\"large\" name=\"examScore\" type=\"number\" formControlName=\"examScore\" required>\n              </ion-input>\n            </ion-item>            \n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.examScore.errors?.pattern\">Please enter valid Score</span>\n          </ion-col> -->\n          <ion-col size=\"12\" *ngIf=\"cousnellingType == 2\">\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.stateId.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">State <ion-text color=\"primary\">*</ion-text> </ion-label>\n              <ion-select formControlName=\"stateId\" interface=\"action-sheet\" (ionChange)=\"getStateId('',$event)\">                   \n                <ion-select-option [value]=\"item.stateID\" *ngFor=\"let item of arrState\">{{item.stateName}}</ion-select-option>      \n              </ion-select>\n            </ion-item>\n          </ion-col>        \n          <ion-col size=\"12\" *ngIf=\"arrCategory\">\n            <div class=\"info-icon\" (click)=\"onClickToolTip('categoryId')\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.category.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">Caste Category <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-select formControlName=\"categoryId\" interface=\"action-sheet\" (ionChange)=\"getSubCategory($event,0)\">\n                <ion-select-option [value]=\"item.categoryId\" *ngFor=\"let item of arrCategory\">{{item.categoryName}}</ion-select-option>                \n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"arrSubCategory\">\n            <div class=\"info-icon\" (click)=\"onClickToolTip('subCategoryId')\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.subcategory.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">Sub Category <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-select formControlName=\"subCategoryId\" interface=\"action-sheet\" (ionChange)=\"getQuoata($event,0)\">\n                <ion-select-option [value]=\"item.subCategoryId\" *ngFor=\"let item of arrSubCategory\">{{item.subCategoryName}}</ion-select-option>                \n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"arrQuota\">       \n            <div class=\"info-icon\" (click)=\"onClickToolTip('quotaId')\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>     \n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">Special Quota <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-select formControlName=\"quotaId\" interface=\"action-sheet\" (ionChange)=\"getgender($event,0)\">  \n                <ion-select-option [value]=\"item.quotaId\" *ngFor=\"let item of arrQuota\">{{item.quotaName}}</ion-select-option>                              \n              </ion-select>\n            </ion-item>\n          </ion-col>          \n          <ion-col size=\"12\" *ngIf=\"arrGender\">                    \n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">Are you Female? <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-select formControlName=\"genderId\" interface=\"action-sheet\">  \n                <ion-select-option [value]=\"item.genderId\" *ngFor=\"let item of arrGender\">{{item.gender}}</ion-select-option>                                     \n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-spinner name=\"lines-small\" *ngIf=\"isSpinnerLoading\"></ion-spinner>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"arrBudget\">  \n            <div class=\"info-icon\" (click)=\"onClickToolTip('budgetId')\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div> \n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.budget.errors?.required\"></span>         \n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">Total budget to Study <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-select formControlName=\"budgetId\" interface=\"action-sheet\">   \n                  <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>                              \n              </ion-select>\n            </ion-item>\n          </ion-col>         \n\n          <ion-col size=\"12\" *ngIf=\"currentDate >= resultDate\">\n            <div class=\"info-icon\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.rank.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">Your NEET Rank <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-input  size=\"large\" name=\"rank\" type=\"number\" formControlName=\"rank\" required >\n              </ion-input>\n            </ion-item>            \n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.rank.errors?.min\">Please enter valid Rank</span>            \n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"info-icon\" (click)=\"onClickToolTip('score')\">\n              <ion-icon name=\"information-circle\"></ion-icon>\n            </div>\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.score.errors?.required\"></span>\n            <ion-item class=\"ion-no-padding\" lines=\"none\">              \n              <ion-label position=\"floating\">{{lblScore}} <ion-text color=\"primary\">*</ion-text></ion-label>\n              <ion-input maxlength=\"3\" size=\"large\" name=\"score\" type=\"number\" formControlName=\"score\" required [attr.disabled]=\"this.isScoreDisable\">\n              </ion-input>\n            </ion-item>            \n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.score.errors?.min\">Please enter valid Score</span>\n            <span class=\"error\" *ngIf=\"isSubmitted && errorControl.score.errors?.max\">Please enter valid Score</span>\n          </ion-col>\n          <ion-col size=\"12\" class=\"pt-2\" *ngIf=\"cousnellingType == 2\">\n            <div class=\"grey-box p-1 primary-light\">\n              <p class=\"m-0\">Your NEET score is locked as per your score entry in All India Counselling.</p>\n            </div>\n          </ion-col>\n          \n        </ion-row>\n      </ion-grid>\n      <br><br>\n      <section class=\"btn-cont footerfixed\">\n        <div class=\"main-cont\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n              <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">{{isPackageExpired ? 'Renew Now' : 'Predict My Admission Chances'}}                 \n                <ion-icon name=\"search-outline\" slot=\"end\"></ion-icon>\n                <!-- <ion-spinner name=\"dots\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner> -->\n              </ion-button>\n            </ion-col>         \n          </ion-row>\n        </ion-grid>\n      </div>\n      </section>\n    </form>\n  </div>\n\n\n    <!-- Video Panel Start -->\n    <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isPanelOpen}\">\n      <div class=\"toogle-cont\">\n        <ion-text class=\"btn-close\" (click)=\"panelClose()\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-text>  \n        <div><h4 class=\"text-left\">{{infoTitle}}</h4></div>\n\n        <div [innerHTML] = \"infoMessage\" class=\"text-justify\">\n          \n        </div>\n        <br><br>\n      </div>\n    </section>\n    <!-- Video Panel End -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_predictor-form_predictor-form_module_ts.js.map