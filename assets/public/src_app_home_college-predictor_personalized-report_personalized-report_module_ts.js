(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_personalized-report_personalized-report_module_ts"],{

/***/ 24147:
/*!**************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/personalized-report/personalized-report-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalizedReportPageRoutingModule": () => (/* binding */ PersonalizedReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _personalized_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personalized-report.page */ 11441);




const routes = [
    {
        path: '',
        component: _personalized_report_page__WEBPACK_IMPORTED_MODULE_0__.PersonalizedReportPage
    }
];
let PersonalizedReportPageRoutingModule = class PersonalizedReportPageRoutingModule {
};
PersonalizedReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PersonalizedReportPageRoutingModule);



/***/ }),

/***/ 321:
/*!******************************************************************************************!*\
  !*** ./src/app/home/college-predictor/personalized-report/personalized-report.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalizedReportPageModule": () => (/* binding */ PersonalizedReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _personalized_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalized-report-routing.module */ 24147);
/* harmony import */ var _personalized_report_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personalized-report.page */ 11441);








let PersonalizedReportPageModule = class PersonalizedReportPageModule {
};
PersonalizedReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _personalized_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.PersonalizedReportPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_personalized_report_page__WEBPACK_IMPORTED_MODULE_2__.PersonalizedReportPage]
    })
], PersonalizedReportPageModule);



/***/ }),

/***/ 11441:
/*!****************************************************************************************!*\
  !*** ./src/app/home/college-predictor/personalized-report/personalized-report.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalizedReportPage": () => (/* binding */ PersonalizedReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_personalized_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./personalized-report.page.html */ 89001);
/* harmony import */ var _personalized_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personalized-report.page.scss */ 36998);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);















let PersonalizedReportPage = class PersonalizedReportPage {
    constructor(headerTitleService, apiPredictorService, storage, toastr, apiGeneralService, sanitizer, apiProgramsService, router, alertController, firebaseAnalytics) {
        this.headerTitleService = headerTitleService;
        this.apiPredictorService = apiPredictorService;
        this.storage = storage;
        this.toastr = toastr;
        this.apiGeneralService = apiGeneralService;
        this.sanitizer = sanitizer;
        this.apiProgramsService = apiProgramsService;
        this.router = router;
        this.alertController = alertController;
        this.firebaseAnalytics = firebaseAnalytics;
        this.slideIndex = 0;
        //#region Management Type Variables
        this.arrManagementType = [];
        this.slideOpts = {
            slidesPerView: 3.1
        };
        this.sequence = null;
        this.currentSelected = null;
        //#endregion
        this.isChances = true;
        this.arrSummary = [];
        this.arrBudget = [];
        this.filterData = { 'budgetId': null };
        //#region Video Variables
        this.arrVideoMBBS = [];
        this.arrVideoCMP = [];
        this.arrVideoPersonlized = [];
        this.slideVideoOpts = {
            slidesPerView: 1.5
        };
        //#endregion
        this.arrCountry = [];
        this.AssetsPathCountry = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "coutry/flag";
        this.slideCountryOpts = { slidesPerView: 5.2 };
        this.noOfSeats = 0;
        this.counsellingId = "";
        this.counsellingName = "";
        this.counsellingNameOther = "";
        this.counsellingIdOther = 0;
        this.rank = "";
        this.lblRank = "";
        this.arrSavedPredictor = [];
        this.otherType = [
            { 'managementTypeId': 10, 'managementType': 'Summary', 'sequence': 6 },
            { 'managementTypeId': 11, 'managementType': 'MBBS Abroad', 'sequence': 7 },
            { 'managementTypeId': 12, 'managementType': 'Combo Medical Program', 'sequence': 8 },
            { 'managementTypeId': 13, 'managementType': 'Repeat NEET next year', 'sequence': 9 }
        ];
        this.headerTitleService.title = "Personilized Report";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.lblRank = this.apiPredictorService.lblRank;
        this.gerPredictorForm();
        this.getPersonalizedVideo();
        this.getBudget();
    }
    ionViewWillEnter() {
        console.log("Index: " + this.slideIndex);
        this.slides.slideTo(this.slideIndex, 0);
        this.firebaseAnalytics.logEvent("personalized_report_opened", { 'resp': 'success', 'page': 'personalized-report' });
    }
    doRefresh(event) {
        this.gerPredictorForm();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    slideChanged() {
        this.slides.getActiveIndex().then((index) => {
            this.slideIndex = index;
            console.log("Index: " + this.slideIndex);
        });
    }
    gerPredictorForm() {
        this.storage.getObject("predictorForm").then((res) => {
            if (res) {
                this.counsellingId = res.CounsellingID;
                if (res.CounsellingID == 1) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[0];
                    this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[1];
                    this.counsellingIdOther = 2;
                }
                else if (res.CounsellingID == 2) {
                    this.counsellingName = this.apiPredictorService.enumCounsellingType[1];
                    this.counsellingNameOther = this.apiPredictorService.enumCounsellingType[0];
                    this.counsellingIdOther = 1;
                }
                this.arrPredictorForm = res;
                this.getManagemnetType();
                this.getSavedPredictor();
            }
            else {
                this.toastr.toastError("Sorry, Unable to load Personalized Report. Please try after sometime.");
            }
        });
    }
    getManagemnetType() {
        let postData = { 'isActive': true };
        this.apiPredictorService.getManagementType(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                // if(this.arrPredictorForm["CounsellingID"] == 2){
                // resp.splice(0,2)  
                // }
                //this.otherType[0]['managementType'] = this.counsellingName + ' Summary';
                this.arrManagementType = resp.concat(this.otherType);
                this.currentSelected = resp[0]["sequence"];
                this.getCPPersonalisedReport(resp[0]["sequence"]);
                this.getRank();
            }
            else {
                this.arrManagementType = null;
                this.toastr.toastError("Sorry, something went wrong. Plese try after sometime.");
            }
        }).catch(ex => {
            this.toastr.toastError("Sorry, something went wrong. Plese try after sometime.");
            console.log("getManagemnetType()=> " + ex);
        });
    }
    getRank() {
        let postdata = { "score": this.arrPredictorForm["Score"], "ExamID": this.arrPredictorForm["ExamID"] };
        this.apiPredictorService.getRank(JSON.stringify(postdata)).then(resp => {
            if (resp) {
                this.rank = resp["maxRank"];
            }
            else {
                this.rank = "NA";
            }
        });
    }
    getCPPersonalisedReport(sequence) {
        this.isCountLoading = true;
        if (this.arrManagementType.length > 0) {
            if (sequence != null) {
                var managementTypeId = (this.arrManagementType.filter(x => x.sequence == sequence))[0]["managementTypeId"];
                this.arrPredictorForm["managementTypeId"] = JSON.parse("[" + managementTypeId + "]");
            }
            else {
                this.arrPredictorForm["managementTypeId"] = null;
            }
            this.apiPredictorService.getCPPersonalisedReport(JSON.stringify(this.arrPredictorForm)).then(resp => {
                if (resp.length > 0) {
                    this.arrSummary = resp;
                    this.firebaseAnalytics.logEvent("personalized_report_fetched", { 'resp': 'success', 'page': 'personalized-report' });
                    this.noOfSeats = this.arrSummary[0].count;
                    if (this.arrSummary[0].aicCount == 0 && this.arrSummary[0].scCount == 0) {
                        this.isChances = false;
                    }
                    else {
                        this.isChances = true;
                    }
                    this.isCountLoading = false;
                }
            })
                .catch(ex => {
                console.log("getCPPersonalisedReport() = > " + ex);
            });
        }
    }
    getSavedPredictor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.arrSavedPredictor.length == 0) {
                var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
                let postdata = { "ExamID": this.arrPredictorForm["ExamID"], "AppLoginId": this.arrPredictorForm["AppLoginId"], "IntakeYear": intakeYear };
                this.apiPredictorService.getSavedPredictor(JSON.stringify(postdata)).then(resp => {
                    if (resp) {
                        this.arrSavedPredictor = resp;
                        this.isDisabled = (this.arrSavedPredictor.length == 1) ? true : false;
                        var arrData = this.arrSavedPredictor.filter(x => x.counsellingId != this.arrPredictorForm["CounsellingID"]);
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
                        console.log("IsVisited " + this.isOtherCounselling);
                    }
                    else {
                        this.isDisabled = true;
                    }
                });
            }
        });
    }
    onClickSelect(sequence) {
        if (sequence == 1)
            this.firebaseAnalytics.logEvent("personalized_report_Autonomous_Institute", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 2)
            this.firebaseAnalytics.logEvent("personalized_report_Central_Institute", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 3)
            this.firebaseAnalytics.logEvent("personalized_report_Government_College", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 4)
            this.firebaseAnalytics.logEvent("personalized_report_Private_College", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 5)
            this.firebaseAnalytics.logEvent("personalized_report_Deemed_College", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 6)
            this.firebaseAnalytics.logEvent("personalized_report_Summary", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 7)
            this.firebaseAnalytics.logEvent("personalized_report_MBBS_Abroad", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 8)
            this.firebaseAnalytics.logEvent("personalized_report_CMP", { 'resp': 'success', 'page': 'personalized-report' });
        else if (sequence == 9)
            this.firebaseAnalytics.logEvent("personalized_report_Repeat_NEXT", { 'resp': 'success', 'page': 'personalized-report' });
        this.sequence = sequence;
        if (sequence < this.currentSelected) {
            this.slides.slidePrev();
        }
        else {
            if (sequence > 2) {
                this.slides.slideNext();
            }
        }
        this.currentSelected = sequence;
        sequence = (sequence == 6) ? null : sequence;
        if (sequence < 6) {
            this.getCPPersonalisedReport(sequence);
        }
        else if (sequence == 7) {
            this.getMBBSVideos();
            this.getCountry();
        }
        else if (sequence == 8) {
            this.getCMPVideos123();
        }
        this.content.scrollToPoint(0, 420, 500);
    }
    //#region  Budget
    onClickChangeBudget(opt) {
        if (opt == 'yes') {
            this.selectBudgetRef.open();
        }
        else {
            var msg = "With less than Rs. 25 Lacs as your budget, your main option is MBBS Abroad. Would you like to explore this option?";
            this.presentAlertConfirm(msg);
        }
    }
    presentAlertConfirm(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: msg,
                message: '',
                buttons: [
                    { text: 'No', role: 'cancel', cssClass: 'secondary' },
                    { text: 'Yes',
                        handler: () => {
                            this.onClickSelect(7);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertMBBS(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: msg,
                message: '',
                buttons: [
                    { text: 'No', role: 'cancel', cssClass: 'secondary' },
                    { text: 'Yes',
                        handler: () => {
                            this.onClickSelect(7);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateBudget($event) {
        let budgetId = parseInt($event.target.value);
        if (this.filterData.budgetId == budgetId) {
            return false;
        }
        this.filterData.budgetId = budgetId;
        this.arrPredictorForm["BudgetId"] = budgetId;
        delete this.arrPredictorForm["managementTypeId"];
        this.storage.setObject("predictorForm", this.arrPredictorForm);
        this.getCPPersonalisedReport(4);
        if (this.arrSummary.length > 0) {
            this.noOfSeats = this.arrSummary[0].count;
            if (this.arrSummary[0].aicCount == 0 && this.arrSummary[0].scCount == 0) {
                this.isChances = false;
            }
            else {
                this.isChances = true;
            }
            this.content.scrollToPoint(0, 420, 500);
        }
        if (budgetId == 3) { // Up to 50 Lacs
            this.presentAlertConfirm("In this budget, you can study MBBS Abroad + PG in USA. Would you like to check this option now?");
        }
        else if (budgetId >= 4) { // Up to 75 Lacs & More
            this.presentAlertConfirm("In this budget, you can study MBBS in Europe + PG in USA. Would you like to check this option now?");
        }
        this.updateCRMData();
    }
    getBudget() {
        if (this.arrBudget.length == 0) {
            let postData = { 'isActive': true };
            this.apiPredictorService.getBudget(JSON.stringify(postData)).then(resp => {
                this.arrBudget = (resp.length == 0) ? null : resp;
                this.filterData.budgetId = (this.arrPredictorForm == undefined) ? null : this.arrPredictorForm.BudgetId;
            }).catch(ex => {
                this.toastr.toastError("Oops! Something went wrong. Please try again after some time.");
                console.log("getBudget()=> " + ex);
            });
        }
    }
    //#endregion
    //#region Video Section start
    getCMPVideos123() {
        if (this.arrVideoCMP.length == 0) {
            this.arrVideoCMP = [];
            let postData = { 'videoHeaderId': 23, 'isActive': true };
            this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.arrVideoCMP = resp;
                this.arrVideoCMP.forEach(e => {
                    e.thumbnailImage = (e.universityLogo != "") ? src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/videothumbnails/" + e.videoId + "/" + e.thumbnailImage : "";
                });
            })
                .catch(err => {
                console.log("getCMPVideos: " + err);
            });
        }
    }
    getMBBSVideos() {
        if (this.arrVideoMBBS.length == 0) {
            this.arrVideoMBBS = [];
            let postData = { 'videoHeaderId': 1, 'isActive': true };
            this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                //this.webAssetsPath = environment.webAssetsPath+ "mobility-app/videothumbnails";
                this.arrVideoMBBS = resp;
                this.arrVideoMBBS.forEach(e => {
                    e.thumbnailImage = (e.universityLogo != "") ? src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/videothumbnails/" + e.videoId + "/" + e.thumbnailImage : "";
                });
            })
                .catch(err => {
                console.log("getVideos: " + err);
            });
        }
    }
    getPersonalizedVideo() {
        if (this.arrVideoPersonlized.length == 0) {
            this.arrVideoPersonlized = [];
            let postData = { 'videoHeaderId': 29, 'isActive': true };
            this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.arrVideoPersonlized = resp;
                this.arrVideoPersonlized.forEach(e => {
                    e.thumbnailImage = (e.universityLogo != "") ? src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "mobility-app/videothumbnails/" + e.videoId + "/" + e.thumbnailImage : "";
                });
            })
                .catch(err => {
                console.log("getVideos: " + err);
            });
        }
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
    //#endregion
    //#region Country Section
    getCountry() {
        if (this.arrCountry.length == 0) {
            this.arrCountry = [];
            let postData = { "ProgInterestId": this.apiGeneralService.arrSelection["progInterestId"], "IsActive": true };
            this.apiProgramsService.getCountryOnProg(JSON.stringify(postData)).then(resp => {
                this.arrCountry = resp;
            })
                .catch(err => {
                console.log("getCountry: " + err);
            });
        }
    }
    onClickCountry(countryId) {
        this.apiProgramsService.filteredData.countryId = countryId;
        this.apiGeneralService.arrSelection["countryId"] = countryId;
        this.storage.setObject("arrSelection", this.apiGeneralService.arrSelection);
        this.router.navigate(["/home/universities"]);
    }
    //#endregion
    updateCRMData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var intakeYear = yield this.storage.getObject("intakeYear").then(resp => resp["year"]);
            this.apiPredictorService.fnUpdateCRMData(this.arrPredictorForm["AppLoginId"], this.arrPredictorForm["ExamID"], intakeYear);
        });
    }
};
PersonalizedReportPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_7__.ApiPredictorService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_2__.ApiProgramsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__.FirebaseAnalytics }
];
PersonalizedReportPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent,] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['slidesReport', { static: true },] }],
    selectBudgetRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: ['selectBudget', { static: false },] }]
};
PersonalizedReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-personalized-report',
        template: _raw_loader_personalized_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_personalized_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PersonalizedReportPage);



/***/ }),

/***/ 36998:
/*!******************************************************************************************!*\
  !*** ./src/app/home/college-predictor/personalized-report/personalized-report.page.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box-list .box-col {\n  height: 93px;\n}\n.box-list .box-col .label {\n  position: absolute;\n  width: 100%;\n  padding: 0px 5px;\n  text-align: center;\n  top: 50%;\n  transform: translateY(-40%);\n  left: 0px;\n}\n.box-list .box-col .srno {\n  position: absolute;\n  top: -15px;\n  height: 30px;\n  line-height: 30px;\n  z-index: 2;\n  width: 30px;\n  text-align: center;\n  margin: 0px auto;\n  left: 0px;\n  right: 0px;\n  border-radius: 50%;\n  background: #eee;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.box-list .box-col.selected .srno {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n.box-list ion-slide {\n  padding-top: 30px;\n}\n.btn-cont ion-button + ion-button {\n  margin-top: 10px;\n}\n.grid-info ion-row ion-col {\n  text-align: center;\n}\n.grid-info.table ion-col {\n  padding: 8px !important;\n  font-size: 1rem;\n}\n.grid-info.table ion-row.head ion-col {\n  font-size: 0.85rem;\n  margin: auto;\n}\n.tab-content p {\n  line-height: 18px;\n}\n.sec-boxes {\n  position: relative;\n}\n.sec-boxes::after {\n  content: \"\";\n  position: absolute;\n  width: calc(100% + 24px);\n  height: 5px;\n  background: #eee;\n  top: 0px;\n  left: -12px;\n}\n.sec-countries ion-slide figure {\n  margin: 0px;\n  padding: 0px 8px;\n}\n.sec-countries ion-slide figure img {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n}\n.session-box {\n  margin: 1rem -12px;\n  padding: 20px 12px;\n  background-color: #ddd;\n  margin-top: 2rem;\n}\n.content-cont .tab-content > div {\n  display: none;\n}\n.content-cont .tab-content > div.active {\n  display: block;\n}\n.main-cont.blured {\n  position: relative;\n}\n.main-cont.blured > .grey-box {\n  position: fixed;\n  bottom: 100px;\n  z-index: 9;\n  left: 24px;\n  width: calc(100% - 48px);\n  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);\n}\n.report-cont.blured {\n  position: relative;\n  pointer-events: none;\n  cursor: default;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsaXplZC1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQVUsWUFBQTtBQUNkO0FBQVE7RUFBTyxrQkFBQTtFQUFtQixXQUFBO0VBQWEsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsUUFBQTtFQUFVLDJCQUFBO0VBQTZCLFNBQUE7QUFTNUg7QUFSUTtFQUFNLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxZQUFBO0VBQWMsaUJBQUE7RUFBbUIsVUFBQTtFQUFZLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixTQUFBO0VBQVcsVUFBQTtFQUFZLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGlCQUFBO0FBd0I3TjtBQXRCWTtFQUFNLG9DQUFBO0VBQXNDLFdBQUE7QUEwQnhEO0FBdkJJO0VBQVUsaUJBQUE7QUEwQmQ7QUFyQkk7RUFBd0IsZ0JBQUE7QUF5QjVCO0FBdEJBO0VBQTJCLGtCQUFBO0FBMEIzQjtBQXpCQTtFQUF5Qix1QkFBQTtFQUF5QixlQUFBO0FBOEJsRDtBQTdCQTtFQUFzQyxrQkFBQTtFQUFvQixZQUFBO0FBa0MxRDtBQWhDSTtFQUFFLGlCQUFBO0FBb0NOO0FBbENBO0VBQVcsa0JBQUE7QUFzQ1g7QUFyQ0k7RUFBUyxXQUFBO0VBQWEsa0JBQUE7RUFBb0Isd0JBQUE7RUFBMEIsV0FBQTtFQUFhLGdCQUFBO0VBQWtCLFFBQUE7RUFBVSxXQUFBO0FBOENqSDtBQXhDUTtFQUFPLFdBQUE7RUFBYSxnQkFBQTtBQTZDNUI7QUE1Q1E7RUFBSSxXQUFBO0VBQWEsWUFBQTtFQUFjLGlCQUFBO0FBaUR2QztBQTVDQTtFQUFhLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLHNCQUFBO0VBQXdCLGdCQUFBO0FBbUQ3RTtBQS9DUTtFQUFNLGFBQUE7QUFtRGQ7QUFsRFk7RUFBUyxjQUFBO0FBcURyQjtBQWpEQTtFQUFrQixrQkFBQTtBQXFEbEI7QUFwREk7RUFBWSxlQUFBO0VBQWlCLGFBQUE7RUFBZSxVQUFBO0VBQVksVUFBQTtFQUFZLHdCQUFBO0VBQTBCLCtDQUFBO0FBNERsRztBQXpESTtFQUFVLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGVBQUE7RUFBaUIsaUJBQUE7RUFBbUIseUJBQUE7QUFpRTVGIiwiZmlsZSI6InBlcnNvbmFsaXplZC1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1saXN0IHtcclxuICAgIC5ib3gtY29seyBoZWlnaHQ6IDkzcHg7XHJcbiAgICAgICAgLmxhYmVse3Bvc2l0aW9uOiBhYnNvbHV0ZTt3aWR0aDogMTAwJTsgcGFkZGluZzogMHB4IDVweDsgdGV4dC1hbGlnbjogY2VudGVyOyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpOyBsZWZ0OiAwcHg7IH1cclxuICAgICAgICAuc3Jub3twb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTE1cHg7IGhlaWdodDogMzBweDsgbGluZS1oZWlnaHQ6IDMwcHg7IHotaW5kZXg6IDI7IHdpZHRoOiAzMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMHB4IGF1dG87IGxlZnQ6IDBweDsgcmlnaHQ6IDBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjZWVlOyBmb250LXdlaWdodDogNTAwOyBmb250LXNpemU6IDAuOXJlbTt9XHJcbiAgICAgICAgJi5zZWxlY3RlZHtcclxuICAgICAgICAgICAgLnNybm97YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBjb2xvcjogI2ZmZjt9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIGlvbi1zbGlkZXtwYWRkaW5nLXRvcDogMzBweDt9XHJcbiAgICBcclxufVxyXG5cclxuLmJ0bi1jb250e1xyXG4gICAgaW9uLWJ1dHRvbiArIGlvbi1idXR0b257bWFyZ2luLXRvcDogMTBweDt9XHJcbn1cclxuXHJcbi5ncmlkLWluZm8gaW9uLXJvdyBpb24tY29se3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5ncmlkLWluZm8udGFibGUgaW9uLWNvbHtwYWRkaW5nOiA4cHggIWltcG9ydGFudDsgZm9udC1zaXplOiAxcmVtO31cclxuLmdyaWQtaW5mby50YWJsZSBpb24tcm93LmhlYWQgaW9uLWNvbHtmb250LXNpemU6IDAuODVyZW07IG1hcmdpbjogYXV0bzt9XHJcbi50YWItY29udGVudHtcclxuICAgIHB7bGluZS1oZWlnaHQ6IDE4cHg7fVxyXG59XHJcbi5zZWMtYm94ZXN7cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YWZ0ZXJ7Y29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IGNhbGMoMTAwJSArIDI0cHgpOyBoZWlnaHQ6IDVweDsgYmFja2dyb3VuZDogI2VlZTsgdG9wOiAwcHg7IGxlZnQ6IC0xMnB4O31cclxufVxyXG5cclxuXHJcbi5zZWMtY291bnRyaWVze1xyXG4gICAgaW9uLXNsaWRle1xyXG4gICAgICAgIGZpZ3VyZXttYXJnaW46IDBweDsgcGFkZGluZzogMHB4IDhweDtcclxuICAgICAgICBpbWd7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgb2JqZWN0LWZpdDogY292ZXI7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlc3Npb24tYm94e21hcmdpbjogMXJlbSAtMTJweDsgcGFkZGluZzogMjBweCAxMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyBtYXJnaW4tdG9wOiAycmVtOyB9XHJcblxyXG4uY29udGVudC1jb250IHtcclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgICAgPiBkaXZ7ZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgJi5hY3RpdmV7ZGlzcGxheTogYmxvY2s7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWFpbi1jb250LmJsdXJlZHtwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICA+IC5ncmV5LWJveHtwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMTAwcHg7IHotaW5kZXg6IDk7IGxlZnQ6IDI0cHg7IHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTsgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDNweCByZ2IoMCAwIDAgLyAyMCUpfVxyXG59XHJcbi5yZXBvcnQtY29udHtcclxuICAgICYuYmx1cmVkeyBwb3NpdGlvbjogcmVsYXRpdmU7IHBvaW50ZXItZXZlbnRzOiBub25lOyBjdXJzb3I6IGRlZmF1bHQ7IGZpbHRlcjogYmx1cigycHgpOyAtd2Via2l0LWZpbHRlcjogYmx1cigycHgpOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 89001:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/personalized-report/personalized-report.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"content-cont\">\n  <app-top-links-predictor></app-top-links-predictor>\n  <div class=\"main-cont\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <h5>Personalized Report</h5>\n    <section class=\"sec-videos\" *ngIf=\"arrVideoPersonlized?.length > 0\">         \n      <div *ngIf=\"arrVideoPersonlized?.length == 1\">\n        <figure class=\"m-0\" *ngFor=\"let item of arrVideoPersonlized\" (click)=\"playVideo(item.videoLink)\">\n          <ion-img [src]=\"item.thumbnailImage\" class=\"w-100\"></ion-img> \n        </figure>\n      </div>\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideoPersonlized?.length > 1\" >\n        <ion-slide *ngFor=\"let item of arrVideoPersonlized\" (click)=\"playVideo(item.videoLink)\">\n          <div>\n            <ion-img [src]=\"item.thumbnailImage\" class=\"w-100\"></ion-img> \n          </div>\n        </ion-slide>        \n      </ion-slides>\n    </section>\n\n    <section class=\"mt-2\">\n      <p>\n        Based on the results provided to you by MOKSH NEET Predictor, your personalized report for MBBS admission in\n        India is available here.\n      </p>\n    </section>\n    <section class=\"pt-0\">\n      <ion-text color=\"success\">\n        <h4 class=\"m-0\">{{lblRank}}: <strong> {{rank}}</strong></h4>\n      </ion-text>\n    </section>\n   \n  </div>\n\n  <div class=\"main-cont\" [ngClass]=\"{blured: isDisabled}\">\n    <div *ngIf=\"isDisabled\" class=\"grey-box p-2 secondary-light\">\n      <h6 style=\"font-weight: 500;\">Personalized Report will be activated after completing both {{counsellingName}} as well as {{counsellingNameOther}}.</h6>\n        <div>\n          <ion-button [routerLink]=\"['/home/college-predictor/predictor-form/1',counsellingIdOther]\"  expand=\"block\" color=\"secondary\">\n            Comlpete {{counsellingNameOther}}\n          </ion-button>\n        </div>\n    </div>\n    <div class=\"report-cont\" [ngClass]=\"{blured: isDisabled}\">    \n    <section class=\"mt-0 sec-boxes\">\n      <div class=\"box-list no-icon\">\n        <ion-slides [options]=\"slideOpts\" (ionSlideDidChange)=\"slideChanged()\" #slidesReport>\n          <ion-slide *ngFor=\"let item of arrManagementType; let i = index\">\n            <div (click)=\"onClickSelect(item.sequence)\" class=\"box-col\"\n              [ngClass]=\"{selected: item.sequence == currentSelected}\">\n              <div class=\"srno\">{{i+1}}</div>\n              <span class=\"label\">{{item.managementType}}</span>\n            </div>\n          </ion-slide>          \n        </ion-slides>\n      </div>\n    </section>\n    <section class=\"tab-content p-0\">\n\n      <!-- Autonoumous Institute -->\n      <div [ngClass]=\"{active: currentSelected == 1}\">\n        <h5 class=\"hdng-line\">\n          <span>Autonomous Institute</span>\n        </h5>\n        <p>These are the top medical institutions of India. Very few students are able to make it successfully. </p>\n        <br>\n      <h6 class=\"mb-1\">Admission Chance Table</h6>\n        <ion-grid fixed class=\"grid-info table mb-3\">\n          <ion-row class=\"head\">            \n            <ion-col size=\"6\"><strong>Chance of Admission</strong></ion-col>\n            <ion-col size=\"3\"><strong>All India Counselling</strong></ion-col>\n            <ion-col size=\"3\"><strong>State Counselling</strong></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let item of arrSummary; let i = index\" [ngClass]=\"{'text-danger': item.admissionChance == 'Very Difficult','text-warning': item.admissionChance == 'Low Chance', 'text-orange': item.admissionChance == 'High Chance','text-success': item.admissionChance == 'Sure to Get'}\">\n            <!-- <ion-col size=\"2\"><strong>{{i+1}} </strong></ion-col> -->\n            <ion-col size=\"6\"><strong>{{item.admissionChance}}</strong></ion-col>\n            <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.aicCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n            <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.scCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n          </ion-row>         \n        </ion-grid>\n\n        <article *ngIf=\"isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p> You are the best of India and you have cracked it! Anyone in India who has a chance to get admitted into\n            such\n            eminent institution, they would grab it both hands. Accordingly, there is absolutely no need to look beyond!\n            <strong>However, in case you wish to check further on your options of other medical colleges, you may\n              proceed further.</strong>\n            Now your next step in life is to ensure that you start preparing for the license exam cum PG entrance test\n            during MBBS namely NEXT for India or USMLE for USA and make the best out of this opportunity.\n          </p>\n          <div class=\"btn-cont\">\n            <ion-button (click)=\"onClickSelect(2)\" expand=\"block\" >\n              Explore Central University Seats\n              <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>                      \n          </div>\n          <div class=\"grey-box p-2 secondary-light mb-3\">\n            Since your MBBS admission is confirmed, you need to start preparing for the license cum PG entrance test such as NExT\n            for India or USMLE for USA. It is important for all doctors to start preparing for the license exam from the 1st year of MBBS.\n            <div class=\"mt-3\">\n              <ion-button [routerLink]=\"['/home/online-coaching']\" expand=\"block\" color=\"secondary\">\n                Know more about License Exam Coaching\n              </ion-button>\n            </div>\n          </div>\n        </article>\n        <article *ngIf=\"!isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p> You are predicted as <strong>not eligible</strong> for any of these eminent medical institutions in India.\n            But do not worry\n            since 99.5% of the students are never able to make to these institutions, though every student aspires to\n            become a doctor from here! More options are available. Let us check seats in Central Universities.</p>\n            <ion-button (click)=\"onClickSelect(2)\" expand=\"block\">\n              Explore Central University Colleges\n              <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </article>\n\n        <section class=\"session-box\">\n          <ion-text>\n            <h5><span>Book a FREE slot - Join Session on MBBS in India</span></h5>        \n          </ion-text>\n            <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n            </figure>\n        </section>\n\n      </div>\n\n\n    <!-- Central Institute -->\n    <div [ngClass]=\"{active: currentSelected == 2}\">\n      <h5 class=\"hdng-line\">\n        <span>Central Universities</span>\n      </h5>\n      <p>These are the next choices for most of the NEET aspirants after Autonomous Institutions ( such as AIIMS). The students want to know their options in Central Universities. \n        There are only 3 universities available in the \"Central Universities\"</p>\n                <ul class=\"bullet-list\">\n          <li><ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>Aligarh Muslim University</li>\n          <li><ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>Banaras Hindu University</li>\n          <li><ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>Delhi University (& all medical colleges affiliated with DU)</li>\n      </ul>\n      <p>\n        Around 500 medical seats are coming under this category of universities.\n      </p>\n      <br>\n      <h6 class=\"mb-1\">Admission Chance Table</h6>\n      <ion-grid fixed class=\"grid-info table mb-3\">\n        <ion-row class=\"head\">            \n          <ion-col size=\"6\"><strong>Chance of Admission</strong></ion-col>\n          <ion-col size=\"3\"><strong>All India Counselling</strong></ion-col>\n          <ion-col size=\"3\"><strong>State Counselling</strong></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of arrSummary; let i = index\" [ngClass]=\"{'text-danger': item.admissionChance == 'Very Difficult','text-warning': item.admissionChance == 'Low Chance', 'text-orange': item.admissionChance == 'High Chance','text-success': item.admissionChance == 'Sure to Get'}\">\n          <!-- <ion-col size=\"2\"><strong>{{i+1}} </strong></ion-col> -->\n          <ion-col size=\"6\"><strong>{{item.admissionChance}}</strong></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.aicCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.scCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n        </ion-row>         \n      </ion-grid>\n\n      <article *ngIf=\"isChances\">\n        \n      <h6 class=\"mb-1\">Conclusion</h6>\n        <p> You are the best of India and you have cracked it! Anyone in India who has a chance to get admitted into\n          such\n          eminent institution, they would grab it both hands. Accordingly, there is absolutely no need to look beyond!\n          <strong>However, in case you wish to check further on your options of other medical colleges, you may\n            proceed further.</strong>\n          Now your next step in life is to ensure that you start preparing for the license exam cum PG entrance test\n          during MBBS namely NEXT for India or USMLE for USA and make the best out of this opportunity.\n        </p>\n        <div class=\"btn-cont\">\n          <ion-button (click)=\"onClickSelect(3)\" expand=\"block\">\n            Explore Govt. MBBS Colleges\n            <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-button>           \n        </div>\n        <div class=\"grey-box p-2 secondary-light mb-3\">\n          Since your MBBS admission is confirmed, you need to start preparing for the license cum PG entrance test such as NExT\n          for India or USMLE for USA. It is important for all doctors to start preparing for the license exam from the 1st year of MBBS.\n          <div class=\"mt-3\">\n            <ion-button [routerLink]=\"['/home/online-coaching']\" expand=\"block\" color=\"secondary\">\n              Know more about License Exam Coaching\n            </ion-button>\n          </div>\n        </div>\n      </article>\n      <article *ngIf=\"!isChances\">\n        <h6 class=\"mb-1\">Conclusion</h6>\n        <p> You are predicted as <strong>not eligible</strong> for any of the Central Universities for medical course in India.\n          But do not worry since only NEET Toppers get seats here! There are more options for you to get admission. Keep your hopes\n          high and continue with the NEET Predictor ro search your chances in Government Medical colleges.!</p>\n\n        <ion-button (click)=\"onClickSelect(3)\" expand=\"block\" >\n          Check chances in Government Colleges\n        </ion-button>\n\n      </article>\n      <section class=\"session-box\">\n        <ion-text>\n          <h5><span>Book a FREE slot - Join Session on MBBS in India</span></h5>        \n        </ion-text>\n          <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n          </figure>\n      </section>\n    </div>\n\n\n\n      <!-- Government Medical Colleges -->\n      <div [ngClass]=\"{active: currentSelected == 3}\">\n        <h5 class=\"hdng-line\">\n          <span>Government Medical Colleges</span>\n        </h5>\n        <p>\n          Every government college has a cut-off every year and years of data would be analysed before this \n          personalized report is created for you. Please go through it carefully.         \n        </p>\n        <br>\n      <h6 class=\"mb-1\">Admission Chance Table</h6>\n      <ion-grid fixed class=\"grid-info table mb-3\">\n        <ion-row class=\"head\">            \n          <ion-col size=\"6\"><strong>Chance of Admission</strong></ion-col>\n          <ion-col size=\"3\"><strong>All India Counselling</strong></ion-col>\n          <ion-col size=\"3\"><strong>State Counselling</strong></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of arrSummary; let i = index\" [ngClass]=\"{'text-danger': item.admissionChance == 'Very Difficult','text-warning': item.admissionChance == 'Low Chance', 'text-orange': item.admissionChance == 'High Chance','text-success': item.admissionChance == 'Sure to Get'}\">\n          <!-- <ion-col size=\"2\"><strong>{{i+1}} </strong></ion-col> -->\n          <ion-col size=\"6\"><strong>{{item.admissionChance}}</strong></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.aicCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.scCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n        </ion-row>         \n      </ion-grid>\n\n        <article *ngIf=\"isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p> <strong>Hurray!</strong> You have made it! Get ready to become a doctor from a government medical college in India in the next 4.5\n            years and serve the patients. India needs you and you successfully beat those lacs of NEET aspirants competing with\n            you.\n        \n          </p>\n        \n          <div class=\"btn-cont\">\n            <ion-button (click)=\"onClickSelect(4)\" expand=\"block\">\n              Explore Private Medical Colleges\n              <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </div>\n        \n          <div class=\"grey-box p-2 secondary-light mb-3\">\n            Since your MBBS admission is confirmed, you need to start preparing for the license cum PG entrance test such as NExT\n            for India or USMLE for USA. It is important for all doctors to start preparing for the license exam from the 1st year of MBBS.\n            <div class=\"mt-3\">\n              <ion-button [routerLink]=\"['/home/online-coaching']\" expand=\"block\" color=\"secondary\">\n                Know more about License Exam Coaching\n              </ion-button>\n            </div>\n          </div>\n          <div class=\"grey-box p-2 primary-light\">\n            <p>You should now focus on selection of the colleges from the list and auto-generate the choice filling form. \n              Download the form to help you to fill up the online Choice filling form for both counselling sessions conducted in India by MCC.</p>\n            <ion-button [routerLink]=\"['/home/college-predictor/preferential-form']\" expand=\"block\" fill=\"outline\"\n              color=\"primary\">\n              Auto Generated Choice Filling Form\n            </ion-button>\n          </div>\n        </article>\n\n        <article *ngIf=\"!isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p>\n            After checking your NEET score & other parameters, the Admicssion Chance Table shows there is <strong> NO GUARANTEE</strong> for \n            any of the low cost Government medical colleges across India. MOKSH NEET predictor suggests you to further search for \n            <strong> Private Medical Colleges </strong>& check your chances. \n          </p>\n          <div class=\"btn-cont mb-2\">\n            <ion-button (click)=\"onClickSelect(4)\" expand=\"block\">\n              Explore Private Medical Colleges\n              <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </div>\n          <div class=\"grey-box p-1 primary-light\">\n            The Private Medical Colleges are expensive. The government allocated seats cost ranges between Rs. 35-50 Lacs while management seats range from Rs. 60 to 80 Lacs. Please set your budget in MOKSH App properly to get the best prediction.\n          </div>\n          <div class=\"budget-cont pt-0\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>Your current budget is:</ion-label>\n              <ion-select [value]=\"filterData.budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n                <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n  \n            <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\" >YES</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>          \n          </div>\n\n        </article>   \n        <section class=\"session-box\">\n          <ion-text>\n            <h5><span>Book a FREE slot - Join Session on MBBS in India</span></h5>        \n          </ion-text>\n            <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n            </figure>\n        </section>       \n      </div> \n      \n\n       <!-- Private Medical Colleges -->\n       <div [ngClass]=\"{active: currentSelected == 4}\">\n        <h5 class=\"hdng-line\">\n          <span>Private Medical colleges</span>\n        </h5>        \n        <p>\n          <strong>Let us check where can you get admission from this category but remember to also match your available budget. </strong>\n        </p>\n        <br>\n      <h6 class=\"mb-1\">Admission Chance Table</h6>\n      <ion-grid fixed class=\"grid-info table mb-3\">\n        <ion-row class=\"head\">            \n          <ion-col size=\"6\"><strong>Chance of Admission</strong></ion-col>\n          <ion-col size=\"3\"><strong>All India Counselling</strong></ion-col>\n          <ion-col size=\"3\"><strong>State Counselling</strong></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of arrSummary; let i = index\" [ngClass]=\"{'text-danger': item.admissionChance == 'Very Difficult','text-warning': item.admissionChance == 'Low Chance', 'text-orange': item.admissionChance == 'High Chance','text-success': item.admissionChance == 'Sure to Get'}\">\n          <!-- <ion-col size=\"2\"><strong>{{i+1}} </strong></ion-col> -->\n          <ion-col size=\"6\"><strong>{{item.admissionChance}}</strong></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.aicCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.scCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n        </ion-row>         \n      </ion-grid>\n\n        <article *ngIf=\"isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p class=\"mb-0\"> \n            So there are many options available for you to get the admission in Indian medical colleges. Around 50% of the colleges\n            in India are private and within them, around 50% of the seats are reserved as management and NRI quota! Your NEET score\n            is enough to get a seat but the question is do you have the budget to study MBBS with higher fees?\n        </p>\n       <br>\n        <p class=\"grey-box p-2\">\n          Private Medical Colleges are quite expensive. In case you increase your budget, you may get more options to choose MBBS seat from more colleges. \n        </p>\n        <div class=\"budget-cont pt-0\">\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label>Your current budget is:</ion-label>\n            <ion-select [value]=\"filterData.budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n              <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\" >YES</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>          \n        </div>\n      \n          <div class=\"btn-cont pt-4\">  \n            <ion-button (click)=\"onClickSelect(5)\" expand=\"block\">\n              Expore Expensive Deemed Universities\n              <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>          \n            <!-- <ion-button (click)=\"onClickSelect(6)\" expand=\"block\" fill=\"outline\" color=\"success\">\n              Check Summary\n            </ion-button> -->\n          </div>\n        </article>\n\n        <article *ngIf=\"!isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p> \n            After checking your NEET score & other parameters, the Admicssion Chance Table shows there is <strong> NO GUARANTEE</strong> in \n            Private medical colleges via both AIC & state level counselling. You would have to change your budget to see if you get any more\n            options in Managament or NRI seats.\n          </p>        \n          <p class=\"grey-box p-2\">\n            Private Medical Colleges are quite expensive. In case you increase your budget, you may get more options to choose MBBS seat from more colleges. \n          </p>\n          <div class=\"budget-cont pt-0\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>Your current budget is:</ion-label>\n              <ion-select [value]=\"filterData.budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n                <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n  \n            <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\" >YES</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>          \n          </div>\n          <div class=\"btn-cont pt-4\">\n            <ion-button (click)=\"onClickSelect(5)\" expand=\"block\">\n                Expore Expensive Deemed Universities\n                <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </div>\n        </article>\n        <section class=\"session-box\">\n          <ion-text>\n            <h5><span>Book a FREE slot - Join Session on MBBS in India</span></h5>        \n          </ion-text>\n            <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n            </figure>\n        </section>\n      </div> \n\n\n      <!-- Deemed Colleges -->\n      <div [ngClass]=\"{active: currentSelected == 5}\">\n        <h5 class=\"hdng-line\">\n          <span>Deemed Universities</span>\n        </h5>\n        <p>\n          Most of the students who qualified in NEET would more or less get admission into Deemed Universities. This is because\n          the MBBS seats are the most expensive ones here and most of the students cannot opt for it due to their low budget!\n        </p>   \n        <br>\n      <h6 class=\"mb-1\">Admission Chance Table</h6>    \n      <ion-grid fixed class=\"grid-info table mb-3\">\n        <ion-row class=\"head\">            \n          <ion-col size=\"6\"><strong>Chance of Admission</strong></ion-col>\n          <ion-col size=\"3\"><strong>All India Counselling</strong></ion-col>\n          <ion-col size=\"3\"><strong>State Counselling</strong></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of arrSummary; let i = index\" [ngClass]=\"{'text-danger': item.admissionChance == 'Very Difficult','text-warning': item.admissionChance == 'Low Chance', 'text-orange': item.admissionChance == 'High Chance','text-success': item.admissionChance == 'Sure to Get'}\">\n          <!-- <ion-col size=\"2\"><strong>{{i+1}} </strong></ion-col> -->\n          <ion-col size=\"6\"><strong>{{item.admissionChance}}</strong></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.aicCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n          <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.scCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n        </ion-row>         \n      </ion-grid>\n\n        <article *ngIf=\"isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p class=\"mb-0\"> \n            So there are many options for you to get the admission in very expensive deemed universities. Be sure of your budget.\n        </p> \n\n        <div class=\"budget-cont pt-0\">\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label>Your current budget is:</ion-label>\n            <ion-select [value]=\"filterData.budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n              <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\" >YES</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>          \n        </div>\n          <div class=\"btn-cont\">  \n            <ion-button (click)=\"onClickSelect(6)\" expand=\"block\">Check Summary <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-button>\n          </div>\n          <div>\n            <p>Your alternative is to study MBBS in abroad within Rs. 25 Lacs in the world ranked universities.</p>\n          </div>\n        </article>\n        <article *ngIf=\"!isChances\">\n          <h6 class=\"mb-1\">Conclusion</h6>\n          <p> \n            After checking your NEET score & other parameters, the Admicssion Chance Table shows there is <strong> NO GUARANTEE</strong> in \n            deemed universities in India via both AIC & state level counselling. You would have to increase your budget to see if you get any more\n            options in Managament or NRI seats.\n          </p>    \n          <div class=\"budget-cont pt-0\">\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\n              <ion-label>Your current budget is:</ion-label>\n              <ion-select [value]=\"filterData.budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n                <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n  \n            <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\" >YES</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                  <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>          \n          </div>\n          <div class=\"btn-cont\">\n            <ion-button (click)=\"onClickSelect(6)\" expand=\"block\">\n              Check Summary\n            </ion-button>\n          </div>\n        </article>\n        <section class=\"session-box\">\n          <ion-text>\n            <h5><span>Book a FREE slot - Join Session on MBBS Abroad</span></h5>        \n          </ion-text>\n            <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n            </figure>\n        </section>\n      </div> \n\n       <!-- Summary  -->\n       <div [ngClass]=\"{active: currentSelected == 6}\">\n        <h5 class=\"hdng-line\">\n          <span>Final Summary</span>\n        </h5>\n        <p>The below mentioned options provided to you leads to the final options as follows:</p>\n        <br>\n        <h6 class=\"mb-1\">Admission Chance Table</h6>  \n        <ion-grid fixed class=\"grid-info table mb-3\">\n          <ion-row class=\"head\">            \n            <ion-col size=\"6\"><strong>Chance of Admission</strong></ion-col>\n            <ion-col size=\"3\"><strong>All India Counselling</strong></ion-col>\n            <ion-col size=\"3\"><strong>State Counselling</strong></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let item of arrSummary; let i = index\" [ngClass]=\"{'text-danger': item.admissionChance == 'Very Difficult','text-warning': item.admissionChance == 'Low Chance', 'text-orange': item.admissionChance == 'High Chance','text-success': item.admissionChance == 'Sure to Get'}\">\n            <!-- <ion-col size=\"2\"><strong>{{i+1}} </strong></ion-col> -->\n            <ion-col size=\"6\"><strong>{{item.admissionChance}}</strong></ion-col>\n            <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.aicCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n            <ion-col size=\"3\"><strong *ngIf=\"!isCountLoading\">{{item.scCount}}</strong><ion-spinner name=\"dots\" *ngIf=\"isCountLoading\"></ion-spinner></ion-col>\n          </ion-row>         \n        </ion-grid>\n\n        <article *ngIf=\"isChances\">\n          <section>\n            <h6>Conclusion</h6>  \n            <div>\n              <p>\n                <strong>Congratulations!</strong> It is clear from the Admission chance table that you are sure to get admission in {{noOfSeats}} colleges. \n                You must understand that your entry to MBBS is successful and guaranteed. You are now ready to\n                publish the Auto Generated Choice Filling Form.                \n              </p>\n              <ion-button  [routerLink]=\"['/home/college-predictor/preferential-form']\"  expand=\"block\">\n                Auto Generated Choice Filling Form\n              </ion-button>               \n            </div>           \n          </section>\n        </article>  \n\n        <article article *ngIf=\"!isChances\">\n          <div>\n            <h6 class=\"mb-1\">Conclusion</h6>\n            <p>\n              Unfortunately, with your NEET score and budget, there is no guarantee that you would get a medical seat via\n              {{this.counsellingName}}. We have also checked the options\n              via {{this.counsellingNameOther}}. Based on your report till now, it looks difficult to get an admission for MBBS\n              in India unless, you increase your budget to opt for Management\n              or NRI seats. \n            </p> \n            \n            <h6 class=\"mb-1\">Your Best Option - GUARANTEED ADMISSION</h6>\n            <p>\n              You Rank is low and the budget is not enough for a guaranteed admission in India. Instead of spending higher, you must opt for MBBS in Abroad and study at a world ranked\n              university. Super options are available for you. You can immediately reserve a MBBS seat abroad. You can choose from 150+ top ranked universities from 17+ countries\n              from MOKSH App and start your dream career. \n            </p>\n            <div class=\"btn-cont\">             \n              <ion-button (click)=\"onClickSelect(7)\" expand=\"block\">\n                Explore MBBS Abroad Options\n                <ion-icon name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n              </ion-button>             \n            </div>\n          </div>         \n        </article>\n       \n        \n        <div class=\"grey-box p-2 secondary-light mb-3 mt-3\">\n          Since your MBBS admission is confirmed, you need to start preparing for the license cum PG entrance test such as NExT\n          for India or USMLE for USA. It is important for all doctors to start preparing for the license exam from the 1st year of MBBS.\n          <div class=\"mt-3\">\n            <ion-button [routerLink]=\"['/home/online-coaching']\" expand=\"block\" color=\"secondary\">\n              Know more about License Exam Coaching\n            </ion-button>\n          </div>\n        </div>\n\n        <section class=\"session-box\">\n          <ion-text>\n            <h5><span>Book a FREE slot - Plan your MBBS Career</span></h5>        \n          </ion-text>\n            <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n              <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n            </figure>\n        </section>\n      </div> \n\n      <!-- MBBS Abroad  -->\n      <div [ngClass]=\"{active: currentSelected == 7}\">\n        <h5 class=\"hdng-line\">\n          <span>MBBS Abroad</span>\n        </h5>\n\n        <div class=\"sec-videos\">\n          <h5>MOKSH CEO - Super Guidance Sessions</h5>\n          <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" class=\"pb-3\">\n            <ion-slide *ngFor=\"let item of arrVideoMBBS\" (click)=\"playVideo(item.videoLink)\">\n              <div>\n                <ion-img [src]=\"item.thumbnailImage\"></ion-img>                \n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n    <section>\n        <h5>Why 75,000 Indians are studying MBBS abroad?</h5>\n        <p>\n          Since your budget to study MBBS is limited to Rs. 25 Lacs and you are not sure to get medical seat in India, you must explore the option of MBBS Abroad. \n          You have a GUARANTEED ADMISSION to MBBS here ! Apply on MOKSH App to get admission in top ranked 150+ Medical universities in 17 countries. \n          Now you know your situation for MBBS admission in India so block your seat in abroad!\n        </p>\n      </section>\n      <section class=\"mt-3\">\n        <h5>Benefits to study MBBS Abroad</h5>\n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>NMC allows you to study in any university</li>\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>Low budget options from Rs. 15 Lacs to Rs. 30 Lacs</li>\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>Programs taught in English language</li>\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>Huge options of Government medical colleges</li>\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>Top ranked universities eastablished 100+ years</li>\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>Globally ranked colleges with huge infrastructure</li>\n          <li><ion-icon name=\"checkmark-circle\"></ion-icon>Guaranteed admission for all students qualified in NEET</li>          \n        </ul>\n    </section>\n        <section class=\"budget-cont pt-0 mt-4\">\n          <ion-item class=\"ion-no-padding\" lines=\"none\">\n            <ion-label>Your current budget is:</ion-label>\n            <ion-select [value]=\"filterData.budgetId\" interface=\"action-sheet\" (ionChange)=\"updateBudget($event)\" #selectBudget>\n              <ion-select-option [value]=\"item.budgetId\" *ngFor=\"let item of arrBudget\">{{item.budgetName}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <h6 class=\"mb-2 mt-3\">Would you like to change the budget now?</h6>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button (click)=\"onClickChangeBudget('yes')\" expand=\"block\" fill=\"outline\" color=\"medium\" >YES</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button (click)=\"onClickChangeBudget('no')\" expand=\"block\" fill=\"outline\" color=\"medium\">NO</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>          \n        </section>\n\n        <section class=\"sec-countries\">\n          <h5><span>Choose any country to study MBBS Abroad</span></h5>\n          <ion-slides [options]=\"slideCountryOpts\">\n            <ion-slide *ngFor=\"let item of arrCountry\" (click)=\"onClickCountry(item.countryId)\">\n              <figure>\n                <img src=\"{{this.AssetsPathCountry}}/{{item.countryId}}/{{item.flagImage}}\" alt=\"\"\n                  class=\"white-box border-radius-50\" *ngIf=\"item.flagImage; else elseBlock\">\n                <ng-template #elseBlock>\n                  <img #elseBlock src=\"../../assets/flag-default.png\" alt=\"\" class=\"border-radius-50 \">\n                </ng-template>\n                <h6>{{item.countryName}}</h6>\n              </figure>\n            </ion-slide>\n          </ion-slides>      \n        </section>\n\n        <section class=\"sec-quick-contact pt-4 pb-4\">\n          <ion-grid fixed class=\"w-100\">\n            <ion-row>\n              <ion-col size=\"3\" class=\"text-center\"> \n                <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/icon-consulting.png\">\n              </ion-col>\n              <ion-col size=\"9\"><h5>Would you like to know about MBBS Abroad in full details?</h5>\n                <p>MOKSH Career assistant would be happy to guide you about MBBS abroad options with Clinical PG in USA.</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button [routerLink]=\"['/home/welcome']\"  expand=\"block\">\n                  Know about MBBS Abroad + PG options\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </section>\n      <section class=\"session-box mt-0\">\n        <ion-text>\n          <h5><span>Book a FREE slot - Join Session on MBBS Abroad</span></h5>        \n        </ion-text>\n          <figure class=\"m-0\" [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\n            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/personal-counselling.jpg\" class=\"w-100\" style=\"border-radius: 10px;\">\n          </figure>\n      </section>\n      <section>\n        <div class=\"grey-box primary-light text-justify  p-2\">         \n\n          <div class=\"mt-2\">\n              <h6>Are you excited to go abroad & study MBBS in a world ranked university?</h6>\n              <ion-grid fixed class=\"mt-2\">\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-button [routerLink]=\"['/home/country-list']\" expand=\"block\" fill=\"outline\">YES</ion-button>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-button (click)=\"onClickSelect(8)\" expand=\"block\" fill=\"outline\">NO</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>    \n          </div>\n        </div>\n      </section>\n      </div>\n\n      <!-- CMP  -->\n      <div [ngClass]=\"{active: currentSelected == 8}\">\n        <h5 class=\"hdng-line\">\n          <span>Combo Medical Program (CMP)</span>\n        </h5>\n\n        <div class=\"sec-videos\">\n          <h5>MOKSH CEO - Super Guidance Sessions</h5>\n          <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" class=\"pb-3\">\n            <ion-slide *ngFor=\"let item of arrVideoCMP\" (click)=\"playVideo(item.videoLink)\">\n              <div>\n                <ion-img [src]=\"item.thumbnailImage\"></ion-img>                \n              </div>\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <p>\n          In case you feel, you cannot go abroad due to any of the reasons, you still have a very low cost option such as Combo Medical Program (CMP). Around 60% of the NEET aspirants join B.Sc. course in case they don’t get admission in India or cannot go to any foreign colleges. However, these students lose their interest to become a doctor and tend to forget their original career dream. Currently, 500+ students are going through this option and so can you!  The students going through this program did not have many options left due to:\n        </p>\n        \n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>NEET unqualified students</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Qualified students not getting MBBS seat in India and parents did not allow to go abroad</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Financial issues in the current year not allowing the students to study MBBS</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The students chose to pursue B.Sc. in India instead of expensive BS program in Philippines</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The students wished to utilize their B.Sc. degree to get into 3.8 Years of MBBS program</li>          \n        </ul>\n\n        <p>\n          If you are falling into any of these 5 categories, you must learn more about this program. This is probably the last option left for you to pursue medicine course this academic year.\n        </p>\n        <div class=\"btn-cont\">\n          <ion-button [routerLink]=\"['/home/top-links/cmp']\" routerLinkActive=\"router-link-active\"  expand=\"block\" fill=\"outline\" >\n            Know more about CMP \n          </ion-button>\n          <ion-button (click)=\"onClickSelect(9)\"  expand=\"block\" fill=\"outline\" color=\"success\" >\n            I will repeat NEET Next Year\n          </ion-button>\n        </div>\n     \n      </div>\n\n       <!-- Repeat NEET next year  -->\n       <div [ngClass]=\"{active: currentSelected == 9}\">\n        <h5 class=\"hdng-line\">\n          <span>Repeat NEET next year</span>\n        </h5>\n\n       \n\n        <p>\n          Due to COVID 19 situation, almost 55% of the students are expected to repeat NEET in 2022!  However, around 28% students repeat NEET every year! The main reason for this is the constant promotion of coaching classes in India to give hopes to the NEET aspirants. Since the medical career is quite long, especially, everyone wish to reach right up to PG (which is a 10 long year journey), it is important to repeat only if you have high chance to get. For example, out of 1,45,000 students scoring 300 or lesser in NEET score in their first attempt, when repeated, around 370 students could actually crack NEET the next year! They spent the whole year again with no result! \n        </p>\n        <p>\n          MOKSH has introduced an innovative solution for all the repeater students. They join a repeater batch for online NEET course coaching for the next year along with booking a seat for MBBS abroad for the next year as a backup!\n        </p>\n        \n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Live online class by top quality faculty</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Live online class by top quality faculty</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>India’s best test platform & assessment</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Career mentorship by doctors included</li>          \n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Personalized attention during coaching</li>          \n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>Back up admission guarantee to world class university abroad</li>          \n        </ul>\n\n        <ion-text color=\"success\">\n          <h6>This offer is available only for NEET repeaters only!</h6>\n        </ion-text>\n\n        <div class=\"btn-cont\">\n          <ion-button [routerLink]=\"['/home/online-coaching']\" routerLinkActive=\"router-link-active\"  expand=\"block\" fill=\"outline\" >\n            I wish to know more  \n          </ion-button>          \n        </div>\n     \n      </div>\n    </section>\n  </div>\n</div>\n\n  <!-- Video Panel Start -->\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>        \n      <ion-grid fixed class=\"padding-md\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <div [innerHTML]=\"iframe\" ></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n  <!-- Video Panel End -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_personalized-report_personalized-report_module_ts.js.map