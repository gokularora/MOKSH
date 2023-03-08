(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_universities_universities_module_ts"],{

/***/ 76077:
/*!******************************************************************!*\
  !*** ./src/app/home/universities/universities-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversitiesPageRoutingModule": () => (/* binding */ UniversitiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _universities_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universities.page */ 84954);




const routes = [
    {
        path: '',
        component: _universities_page__WEBPACK_IMPORTED_MODULE_0__.UniversitiesPage
    },
    {
        path: 'university-details/:universityID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_universities_university-details_university-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./university-details/university-details.module */ 6959)).then(m => m.UniversityDetailsPageModule)
    },
    {
        path: 'university-filter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_universities_university-filter_university-filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./university-filter/university-filter.module */ 66088)).then(m => m.UniversityFilterPageModule)
    }
];
let UniversitiesPageRoutingModule = class UniversitiesPageRoutingModule {
};
UniversitiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UniversitiesPageRoutingModule);



/***/ }),

/***/ 88412:
/*!**********************************************************!*\
  !*** ./src/app/home/universities/universities.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversitiesPageModule": () => (/* binding */ UniversitiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _universities_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universities-routing.module */ 76077);
/* harmony import */ var _universities_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universities.page */ 84954);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let UniversitiesPageModule = class UniversitiesPageModule {
};
UniversitiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _universities_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniversitiesPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_universities_page__WEBPACK_IMPORTED_MODULE_1__.UniversitiesPage]
    })
], UniversitiesPageModule);



/***/ }),

/***/ 84954:
/*!********************************************************!*\
  !*** ./src/app/home/universities/universities.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversitiesPage": () => (/* binding */ UniversitiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_universities_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./universities.page.html */ 59761);
/* harmony import */ var _universities_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universities.page.scss */ 54240);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);


















let UniversitiesPage = class UniversitiesPage {
    constructor(headerTitle, apiProgramsService, apiGeneralService, loader, router, route, auth, alertController, storage, previewFile, sanitizer, apiCRMService, toastr, firebaseAnalytics) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.apiGeneralService = apiGeneralService;
        this.loader = loader;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.alertController = alertController;
        this.storage = storage;
        this.previewFile = previewFile;
        this.sanitizer = sanitizer;
        this.apiCRMService = apiCRMService;
        this.toastr = toastr;
        this.firebaseAnalytics = firebaseAnalytics;
        this.webAssetsPath = "";
        this.arrApplicationYear = [];
        this.countryName = "";
        this.programName = "";
        this.countryID = "";
        this.ProgInterestId = "";
        this.programID = "";
        this.universityType = "";
        this.universityLanguage = "";
        this.applicationId = 0;
        this.universityCount = 0;
        this.arrAppUniversity = { "appUniversityId": 0, "applicationId": 0, "progInterestId": 0, "programId": 0, "countryId": 0, "universityId": 0, "isPrimary": null, "isActive": true, "createdBy": "", "modifiedBy": "", "createdDate": null, "modifiedDate": null, "createdIp": "", "modifiedIp": "" };
        this.errorCount = 0;
        //#region Video Variables
        this.webVideoPath = "";
        this.slideVideoOpts = { slidesPerView: 1 };
        //#endregion
        this.arrUserData = { 'address': null, 'appLoginID': null, 'applicationID': null, 'countryID': null, 'districtID': null, 'emailId': null, 'firstName': null, 'gender': null, 'isActive': null, 'lastName': null, 'leadID': null, 'mobileNo': null, 'rawLeadID': null, 'stateID': null };
        this.arrCRMRawData = [];
        this.filterCount = 0;
        this.headerTitle.isBack = true;
        // if(this.apiProgramsService.productDepartmentID == "1"){this.headerTitle.title = "MBBS Abroad"}
        // else if(this.apiProgramsService.productDepartmentID == "2"){this.headerTitle.title = "Study in Germany"}
        this.headerTitle.title = "Top Universities";
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.getUniversities();
            }
        });
    }
    ionViewWillLeave() {
        // setTimeout(() => {
        //   this.apiGeneralService.fnSetTracking("update");
        // }, 500);
        this.firebaseAnalytics.logEvent("universities_opened", { 'resp': 'success', 'page': 'universities' });
    }
    ionViewWillEnter() {
        this.filterCount = this.apiProgramsService.filterCount;
    }
    ngOnInit() {
        this.getUniversities();
        this.productDepartmentID = parseInt(this.apiProgramsService.productDepartmentID);
        this.getVideoTopic();
        this.getUserData();
    }
    doRefresh(event) {
        this.getUniversities();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getUniversities() {
        this.loader.presentLoading();
        this.countryID = (this.apiProgramsService.filteredData.countryId == "") ? null : this.apiProgramsService.filteredData.countryId;
        this.ProgInterestId = (this.apiProgramsService.filteredData.progInterestId == "") ? null : this.apiProgramsService.filteredData.progInterestId;
        this.universityType = (this.apiProgramsService.filteredData.universityType == "") ? null : this.apiProgramsService.filteredData.universityType;
        this.universityLanguage = (this.apiProgramsService.filteredData.universityLanguage == "") ? null : this.apiProgramsService.filteredData.universityLanguage;
        var budget = (this.apiProgramsService.filteredData.budget != null) ? (this.apiProgramsService.filteredData.budget * 100000) : this.apiProgramsService.filteredData.budget;
        var establishedYearFrom = null;
        var establishedYearTo = null;
        if (this.apiProgramsService.filteredData.establishedYear != null) {
            establishedYearFrom = (this.apiProgramsService.filteredData.establishedYear.lower == 0) ? null : this.apiProgramsService.filteredData.establishedYear.lower;
            establishedYearTo = (this.apiProgramsService.filteredData.establishedYear.upper == 0) ? null : this.apiProgramsService.filteredData.establishedYear.upper;
        }
        var mokshRating = this.apiProgramsService.filteredData.mokshRating;
        let postData = { "countryId": this.countryID, "ProgInterestId": this.ProgInterestId, "IsActive": true, "universityType": this.universityType, "universityLanguage": this.universityLanguage, "totalBudget": budget, "establishedYearFrom": establishedYearFrom, "establishedYearTo": establishedYearTo, "mokshRated": mokshRating };
        this.apiProgramsService.getUniversities(JSON.stringify(postData)).then(resp => {
            if (resp.length != 0) {
                this.arrUniversities = resp;
                this.arrUniversities.forEach(e => {
                    if (e.universityLogo == null || e.universityLogo == "") {
                        e.universityLogo = null;
                    }
                    else {
                        e.universityLogo = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.webAssetsPath + "university/logo/" + e.universityMainID + "/" + e.universityLogo;
                    }
                    //e.universityLogo = (e.universityLogo != "")? environment.webAssetsPath + "university/logo/"+e.universityMainID+"/"+e.universityLogo : "";
                });
                this.universityCount = Object.keys(this.arrUniversities).length;
                this.arrUniversitiesAll = resp;
                this.programName = this.arrUniversitiesAll[0]["programInterest"];
                this.countryName = this.arrUniversitiesAll[0]["countryName"];
                this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.webAssetsPath + "university/logo/";
            }
            else {
                this.arrUniversities = "";
            }
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 500);
        })
            .catch(err => {
            console.log("getUniversities: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
            this.loader.loadingDismiss();
        });
    }
    onClickNavFilter() {
        this.router.navigate(['/home/universities/university-filter'], { skipLocationChange: true });
    }
    ionClickApply(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.item = item;
            yield this.setCRMLeadData();
            setTimeout(() => {
                this.apiGeneralService.fnSetTracking("add", this.item.universityID, this.item.universityMainID, undefined, undefined, true, true);
            }, 1500);
            if (this.arrUserData["applicationID"] > 0) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'You have already applied for university!',
                    subHeader: 'You can apply for only 1 university. Kindly edit your application.',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                console.log("University Selected: " + this.item.universityID);
                this.apiProgramsService.universityID = this.item.universityID;
                this.apiProgramsService.filteredData.countryId = this.item.countryID;
                this.apiProgramsService.filteredData.progInterestId = this.item.programInteresetID;
                this.apiProgramsService.filteredData.programId = this.item.programID;
                this.arrAppUniversity["progInterestId"] = parseInt(this.item.programInteresetID);
                this.arrAppUniversity["programId"] = parseInt(this.item.programID);
                this.arrAppUniversity["countryId"] = parseInt(this.item.countryID);
                this.arrAppUniversity["universityId"] = parseInt(this.item.universityID);
                this.arrAppUniversity["isPrimary"] = true;
                this.storage.setObject("arrAppUni", this.arrAppUniversity);
                this.router.navigate(["/home/application-center/personal-details"]);
            }
        });
    }
    onClickDetails(universityMainID, universityID, programInteresetID) {
        this.apiGeneralService.arrSelection["universityId"] = universityID;
        this.storage.setObject("arrSelection", this.apiGeneralService.arrSelection);
        console.log("University Main Selected: " + universityID);
        this.apiProgramsService.universityID = universityID;
        this.apiProgramsService.filteredData.progInterestId = programInteresetID;
        this.apiGeneralService.fnSetTracking("update", universityID, universityMainID, undefined, undefined, undefined);
        this.router.navigate(['./university-details', universityID], { relativeTo: this.route });
    }
    previewBrochure(item) {
        this.item = item;
        this.setCRMLeadData();
        setTimeout(() => {
            this.apiGeneralService.fnSetTracking("add", item.universityID, item.universityMainID, true, undefined, undefined, true);
        }, 1500);
        var brochureLink = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.webAssetsPath + "university/brochure/" + item.universityID + "/" + item.brochureLink;
        this.previewFile.preview(brochureLink);
        this.apiCRMService.updateSysLeadPriority(this.arrUserData["leadID"]); //Exicute If download brouchure
    }
    changeCountry() {
        this.router.navigate(['/home/country-list'], { replaceUrl: true });
    }
    //#region Search University
    search(searchbar) {
        var q = searchbar.detail.value;
        console.log(q);
        if (q.length == 0) {
            this.arrUniversities = this.arrUniversitiesAll;
            return;
        }
        if (q.trim() == '') {
            return;
        }
        this.arrUniversities = this.arrUniversitiesAll;
        this.arrUniversities = this.arrUniversities.filter((raw) => {
            let universityName = raw["universityName"] == null ? "" : raw["universityName"];
            let countryName = raw["countryName"] == null ? "" : raw["countryName"];
            let programInterest = raw["programInterest"] == null ? "" : raw["programInterest"];
            if (universityName.toLowerCase().indexOf(q.toLowerCase()) > -1 || countryName.toLowerCase().indexOf(q.toLowerCase()) > -1 || programInterest.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            //this.dataCount = this.arrData.length;
            return false;
        });
    }
    clearSearch() {
        this.arrUniversities = this.arrUniversitiesAll;
    }
    //#endregion
    //#region  Get Application ID
    getApplicatinID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getApplicationID().then((res) => {
                console.log("appid:" + res);
                this.applicationId = res;
            });
        });
    }
    //#endregion
    //#region Video Section Start
    getVideoTopic() {
        let postData = { "countryId": this.apiProgramsService.filteredData.countryId, "progInterestId": this.apiProgramsService.filteredData.progInterestId, "isActive": true };
        this.apiGeneralService.getVideoTopic(JSON.stringify(postData)).then(resp => {
            if (resp) {
                this.getVideos(resp[0]["videoHeaderId"]);
            }
        })
            .catch(err => {
            console.log("getVideos: " + err);
        });
    }
    getVideos(headerId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': headerId, 'isActive': true };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webVideoPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.webAssetsPath + "mobility-app/videothumbnails";
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
    //#endregion
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.getObject("userdata").then((resp) => {
                this.arrUserData = resp;
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
            this.auth.putAppRegistration(JSON.stringify(regData)).then(resp => this.apiCRMService.updateSysLeadPriority(leadId));
        });
    }
    //#endregion
    //#region Update CRM Data
    setCRMLeadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (this.errorCount > 2) {
                this.toastr.toastError("Sorry, Unable to proceed your request. Kindly contact support team.");
                this.errorCount = 0;
                return false;
            }
            this.errorCount++;
            var leadId = (this.arrUserData["leadID"] == 0) ? "" : this.arrUserData["leadID"];
            if (leadId == "" || leadId == null) {
                var arrPostdata = this.apiCRMService.arrCRMLeadData;
                var mobileNoCode = this.arrUserData["mobileNo"].substring(1, 3);
                var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
                arrPostdata["leadId"] = (this.arrUserData["leadID"] == 0) ? "" : this.arrUserData["leadID"];
                arrPostdata["rawLeadId"] = this.arrUserData["rawLeadID"];
                arrPostdata["productDepartmentId"] = this.apiCRMService.ProductDepartmentMBBS;
                arrPostdata["subProductDepartmentId"] = this.apiCRMService.ProductSubDepartmentMBBS;
                arrPostdata["fname"] = this.arrUserData["firstName"];
                arrPostdata["lname"] = this.arrUserData["lastName"];
                arrPostdata["emailId1"] = this.arrUserData["emailId"];
                arrPostdata["ContactWhatsappCode"] = mobileNoCode;
                arrPostdata["contactWhatsapp"] = mobileNo;
                arrPostdata["contactWhatsappCode"] = mobileNoCode;
                arrPostdata["contactOther"] = mobileNo;
                arrPostdata["countryIds"] = this.item["countryID"].toString();
                arrPostdata["countryNames"] = this.item["countryName"];
                arrPostdata["programIds"] = this.item["programID"].toString();
                arrPostdata["programNames"] = this.item["programName"];
                arrPostdata["universityIds"] = this.item["universityID"].toString();
                arrPostdata["universityNames"] = this.item["universityName"];
                arrPostdata["sysLeadPriorityID"] = this.apiCRMService.enumPriority.Hot;
                arrPostdata["LeadPriorityId"] = this.apiCRMService.enumPriority.Warm;
                arrPostdata["leadSourceId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.defaultLeadSourceId;
                arrPostdata["countryId"] = this.arrUserData["countryID"];
                arrPostdata["stateId"] = this.arrUserData["stateID"];
                arrPostdata["districtId"] = this.arrUserData["districtID"];
                arrPostdata["appLoginId"] = this.arrUserData["appLoginID"];
                var arrRawData = Object.assign({}, this.apiCRMService.arrCRMRawData);
                arrPostdata["franchiseeId"] = arrRawData["franchiseeId"];
                arrPostdata["sysProductDepartmentId"] = arrRawData["sysProductDepartmentId"];
                arrPostdata["sysSubProductDepartmentId"] = arrRawData["sysSubProductDepartmentId"];
                arrPostdata["studentEducationId"] = arrRawData["studentEducationId"];
                arrPostdata["studentEducationYear"] = arrRawData["studentEducationYear"];
                arrPostdata["isAcademyApp"] = arrRawData["isAcademyApp"];
                arrPostdata["predictorPackage"] = arrRawData["PredictorPackage"];
                arrPostdata["isScholarshipTest"] = arrRawData["isScholarshipTest"];
                arrPostdata["lmsCourse"] = arrRawData["lmsCourse"];
                this.apiCRMService.arrCRMLeadData = arrPostdata;
                this.apiCRMService.fnSetCRMLeadData().then((arrLeadData) => {
                    if (arrLeadData != 0) {
                        this.errorCount = 0;
                        //this.setCRMRawData(respData);
                        this.updateAppRegistration(arrLeadData['leadId']);
                    }
                });
            }
            else {
                this.apiCRMService.fnGetCRMLeadData().then(resp => {
                    if (resp == true) {
                        this.errorCount = 0;
                        this.apiCRMService.arrCRMLeadData["countryIds"] = this.item["countryID"].toString();
                        this.apiCRMService.arrCRMLeadData["countryNames"] = this.item["countryName"];
                        this.apiCRMService.arrCRMLeadData["programIds"] = this.item["programID"].toString();
                        this.apiCRMService.arrCRMLeadData["programNames"] = this.item["programName"];
                        this.apiCRMService.arrCRMLeadData["universityIds"] = this.item["universityID"].toString();
                        this.apiCRMService.arrCRMLeadData["universityNames"] = this.item["universityName"];
                        if (this.apiCRMService.arrCRMLeadData.sysLeadPriorityID < 4 || this.apiCRMService.arrCRMLeadData.sysLeadPriorityID == null) {
                            this.apiCRMService.arrCRMLeadData["sysLeadPriorityID"] = this.apiCRMService.enumPriority.Hot;
                        }
                        this.apiCRMService.fnSetCRMLeadData();
                        this.apiCRMService.updateSysLeadPriority(this.arrUserData["leadID"]);
                    }
                    else {
                        this.arrUserData["leadID"] = 0;
                        this.storage.setObject("userdata", this.arrUserData);
                        this.setCRMLeadData();
                    }
                });
            }
        });
    }
};
UniversitiesPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_8__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_7__.ApiProgramsService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__.PreviewAnyFile },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_11__.ApiCRMService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_12__.FirebaseAnalytics }
];
UniversitiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-universities',
        template: _raw_loader_universities_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_universities_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UniversitiesPage);



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

/***/ 54240:
/*!**********************************************************!*\
  !*** ./src/app/home/universities/universities.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn-cont {\n  margin-top: 10px;\n}\n.btn-cont ion-button {\n  --padding-start:15px;\n  --padding-end:15px;\n}\nion-thumbnail {\n  height: auto;\n}\nion-thumbnail figure {\n  display: block;\n  margin-top: 10px !important;\n}\nion-item:after {\n  content: \"Open\";\n  font-family: inherit;\n  position: absolute;\n  left: -30px;\n  top: 10px;\n  /* height: 100px; */\n  width: 100px;\n  background: var(--ion-color-success);\n  color: #fff;\n  text-align: center;\n  display: inline-block;\n  z-index: 9;\n  padding: 3px;\n  font-size: 0.9rem;\n  transform: rotate(-45deg);\n}\nion-item.closed:after {\n  content: \"Closed\";\n  font-family: inherit;\n  position: absolute;\n  left: -30px;\n  top: 10px;\n  /* height: 100px; */\n  width: 100px;\n  background: red;\n  color: #fff;\n  text-align: center;\n  display: inline-block;\n  z-index: 9;\n  padding: 3px;\n  font-size: 0.9rem;\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXZlcnNpdGllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxnQkFBQTtBQUVYO0FBREk7RUFBVyxvQkFBQTtFQUFzQixrQkFBQTtBQUtyQztBQUZBO0VBQWUsWUFBQTtBQU1mO0FBTEk7RUFBTyxjQUFBO0VBQWdCLDJCQUFBO0FBUzNCO0FBTkE7RUFBZSxlQUFBO0VBQWlCLG9CQUFBO0VBQXNCLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxTQUFBO0VBQVcsbUJBQUE7RUFBcUIsWUFBQTtFQUFjLG9DQUFBO0VBQXNDLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixxQkFBQTtFQUF1QixVQUFBO0VBQVksWUFBQTtFQUFjLGlCQUFBO0VBQW1CLHlCQUFBO0FBd0JoUjtBQXZCQTtFQUFzQixpQkFBQTtFQUFtQixvQkFBQTtFQUFzQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLFlBQUE7RUFBYyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixxQkFBQTtFQUF1QixVQUFBO0VBQVksWUFBQTtFQUFjLGlCQUFBO0VBQW1CLHlCQUFBO0FBeUNwUSIsImZpbGUiOiJ1bml2ZXJzaXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jb250eyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaW9uLWJ1dHRvbnstLXBhZGRpbmctc3RhcnQ6MTVweDsgLS1wYWRkaW5nLWVuZDoxNXB4OyAgICBcclxuICAgIH1cclxufVxyXG5pb24tdGh1bWJuYWlseyBoZWlnaHQ6IGF1dG87XHJcbiAgICBmaWd1cmV7ZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDt9XHJcbn1cclxuXHJcbmlvbi1pdGVtOmFmdGVye2NvbnRlbnQ6IFwiT3BlblwiOyBmb250LWZhbWlseTogaW5oZXJpdDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAtMzBweDsgdG9wOiAxMHB4OyAvKiBoZWlnaHQ6IDEwMHB4OyAqLyB3aWR0aDogMTAwcHg7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTsgY29sb3I6ICNmZmY7IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB6LWluZGV4OiA5OyBwYWRkaW5nOiAzcHg7IGZvbnQtc2l6ZTogMC45cmVtOyB0cmFuc2Zvcm06IHJvdGF0ZSggLTQ1ZGVnICk7fVxyXG5pb24taXRlbS5jbG9zZWQ6YWZ0ZXJ7Y29udGVudDogXCJDbG9zZWRcIjsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTMwcHg7IHRvcDogMTBweDsgLyogaGVpZ2h0OiAxMDBweDsgKi8gd2lkdGg6IDEwMHB4OyBiYWNrZ3JvdW5kOiByZWQ7IGNvbG9yOiAjZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgei1pbmRleDogOTsgcGFkZGluZzogM3B4OyBmb250LXNpemU6IDAuOXJlbTsgdHJhbnNmb3JtOiByb3RhdGUoIC00NWRlZyApO31cclxuIl19 */");

/***/ }),

/***/ 59761:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/universities/universities.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-cont\" *ngIf=\"arrVideos\">\r\n    <section class=\"sec-videos mt-2\" *ngIf=\"arrVideos\">\r\n      <h5>How to choose a university</h5>\r\n      <div *ngIf=\"arrVideos?.length == 1\">\r\n        <figure class=\"m-0\" *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\r\n          <ion-img [src]=\"item.src\"></ion-img>\r\n          <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\" class=\"w-100\">\r\n        </figure>\r\n      </div>      \r\n      <ion-slides [options]=\"slideVideoOpts\" pager=\"true\" *ngIf=\"arrVideos?.length > 1\">\r\n        <ion-slide *ngFor=\"let item of arrVideos\" (click)=\"playVideo(item.videoLink)\">\r\n          <div>\r\n            <img src=\"{{this.webVideoPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </section>\r\n  </div>\r\n\r\n  <ion-grid class=\"filter-bar\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <ion-text> <strong> Filter </strong></ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-searchbar (ionChange)=\"search($event)\" (ionClear)=\"clearSearch()\"\r\n          placeholder=\"Search University, Coutry, Program etc.\"></ion-searchbar>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <a (click)=\"onClickNavFilter()\">\r\n          <ion-badge color=\"primary\" *ngIf=\"filterCount > 0\">{{filterCount}}</ion-badge>\r\n          <ion-icon name=\"filter\"></ion-icon>\r\n        </a>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid fixed class=\"selection-cont\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">        \r\n          <!-- <ion-chip color=\"danger\"  outline *ngIf=\"programID != null\">            \r\n            <ion-label>{{programName}}</ion-label>\r\n            <ion-icon name=\"create-outline\" [routerLink]=\"['/home/landing-page']\" routerLinkActive=\"router-link-active\" ></ion-icon>\r\n          </ion-chip> -->\r\n          <ion-chip color=\"danger\" outline *ngIf=\"countryID != null\">            \r\n            <ion-label>{{countryName}}</ion-label>\r\n            <ion-icon name=\"create-outline\" [routerLink]=\"['/home/country-list']\" routerLinkActive=\"router-link-active\" ></ion-icon>\r\n          </ion-chip>\r\n          <ion-chip color=\"danger\" (click)=\"changeCountry()\">            \r\n            <ion-label>Change Country</ion-label>            \r\n          </ion-chip>\r\n        </ion-col>        \r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"main-cont\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <h5 class=\"hdng-line\">\r\n      <span>Choose a University ({{universityCount}})</span>\r\n    </h5>\r\n    <ion-list class=\"item-list\" *ngIf=\"arrUniversities != ''\">\r\n      <!-- <ion-virtual-scroll [items]=\"arrUniversities\" approxItemHeight=\"182px\"> -->\r\n        <ion-item class=\"ion-no-padding\" lines=\"none\" *ngFor=\"let item of arrUniversities\" [ngClass]=\"{closed: item.isOpen == false}\">\r\n          <ion-thumbnail slot=\"start\" (click)=\"onClickDetails(item.universityMainID, item.universityID, item.progInterestId)\">\r\n            <ion-img [src]=\"item.universityLogo\" *ngIf=\"item.universityLogo; else elseBlock\" class=\"white-box img-avatar border-radius-50 \"></ion-img>            \r\n            <ng-template #elseBlock>\r\n              <ion-img src=\"../../assets/university-default.png\" alt=\"\" class=\"white-box border-radius-50 \"></ion-img>    \r\n            </ng-template>\r\n            <figure class=\"m-0\" *ngIf=\"item.isECFMGApproved\">\r\n              <img src=\"../../assets/logo-ecfmg.png\" alt=\"\" class=\"\">\r\n            </figure>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <ion-text (click)=\"onClickDetails(item.universityMainID, item.universityID, item.progInterestId)\"><h2>{{item.universityName}}</h2></ion-text>\r\n            <div class=\"sub-details\" (click)=\"onClickDetails(item.universityMainID, item.universityID, item.progInterestId)\">\r\n              <ng-container *ngIf=\"productDepartmentID != 1\">             \r\n            </ng-container>\r\n              <ul class=\"border-list\">  \r\n                <ng-container *ngIf=\"item.grade != ''\">\r\n                  <li>\r\n                    <ion-icon name=\"ribbon-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-text>{{item.grade}} Grade</ion-text>\r\n                  </li>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"item.universityLanguage != ''\">\r\n                  <li>\r\n                    <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-text>{{item.universityLanguage}}</ion-text>\r\n                  </li>\r\n                </ng-container>                            \r\n              </ul>\r\n              <ng-container *ngIf=\"item.studyYear\">\r\n                <ul class=\"border-list\">\r\n                  <li>\r\n                    <ion-icon name=\"time-outline\" slot=\"start\"></ion-icon>\r\n                    <ion-text>{{item.studyYear}}</ion-text>\r\n                  </li>\r\n                </ul>\r\n              </ng-container>\r\n\r\n              <ul class=\"border-list\">\r\n                <ng-container *ngIf=\"item.serviceAmount != 0\">\r\n                  <li>\r\n                    <!-- <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon> -->\r\n                    <ion-text>Annual Fees: <strong> {{item.currency}} {{item.serviceAmount}}</strong></ion-text>\r\n                  </li>\r\n                </ng-container>  \r\n                <ng-container *ngIf=\"item.totalBudget\">\r\n                  <li>\r\n                    <!-- <ion-icon name=\"wallet-outline\" slot=\"start\"></ion-icon> -->\r\n                    <ion-text>Budget: <strong> {{item.totalBudget/100000 | currency:'INR':'symbol':'2.0'}} Lacs</strong></ion-text>\r\n                  </li>\r\n                </ng-container>              \r\n              </ul>\r\n            </div>\r\n            <div class=\"btn-cont mb-0\">\r\n              <ion-button shape=\"round\" fill=\"outline\" color=\"success\" *ngIf=\"item.brochureLink\" (click)=\"previewBrochure(item)\"> Brochure</ion-button>\r\n              <ion-button shape=\"round\" fill=\"outline\" color=\"success\" class=\"btn-more-info\"\r\n              (click)=\"onClickDetails(item.universityMainID, item.universityID, item.progInterestId)\">More Info</ion-button>\r\n              <ion-button (click)=\"ionClickApply(item)\"\r\n                fill=\"outline\" shape=\"round\" color=\"primary\">\r\n                <ion-icon name=\"paper-plane-outline\" slot=\"end\"></ion-icon>Apply</ion-button>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      <!-- </ion-virtual-scroll> -->\r\n    </ion-list>\r\n    <ng-container *ngIf=\"arrUniversities == ''\">\r\n      <div class=\"no-data text-center\">\r\n        <h3>Oops! No data found.</h3>\r\n        <ion-icon name=\"sad-outline\"></ion-icon>\r\n        <h5>No any university is available for selected country or program. Kindly modify your selection.</h5>       \r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <section class=\"footer-links\">\r\n    <div class=\"main-cont\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['/home/counselling']\">Get FREE counselling to choose university\r\n              <ion-icon name=\"headset-outline\" slot=\"start\"></ion-icon>\r\n              <ion-ripple-effect></ion-ripple-effect>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n  <!-- Video Panel Start -->\r\n  <section class=\"video-play-cont toogle-panel bottom\" [ngClass]=\"{isOpen: isVideoOpen}\">\r\n    <div class=\"toogle-cont\">\r\n      <ion-text class=\"btn-close\" (click)=\"videoPanelClose()\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-text>      \r\n      <ion-grid fixed class=\"padding-md\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div [innerHTML]=\"iframe\"></div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n  <!-- Video Panel End -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_universities_universities_module_ts.js.map