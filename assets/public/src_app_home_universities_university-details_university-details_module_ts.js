(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_universities_university-details_university-details_module_ts"],{

/***/ 22151:
/*!*******************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-details-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityDetailsPageRoutingModule": () => (/* binding */ UniversityDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _university_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-details.page */ 22294);




const routes = [
    {
        path: '',
        component: _university_details_page__WEBPACK_IMPORTED_MODULE_0__.UniversityDetailsPage
    },
    {
        path: 'university-gallery/:universityMainID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_universities_university-details_university-gallery_university-gallery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./university-gallery/university-gallery.module */ 97951)).then(m => m.UniversityGalleryPageModule)
    },
    {
        path: 'university-fees/:universityID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_universities_university-details_university-fees_university-fees_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./university-fees/university-fees.module */ 78126)).then(m => m.UniversityFeesPageModule)
    }
];
let UniversityDetailsPageRoutingModule = class UniversityDetailsPageRoutingModule {
};
UniversityDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UniversityDetailsPageRoutingModule);



/***/ }),

/***/ 6959:
/*!***********************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-details.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityDetailsPageModule": () => (/* binding */ UniversityDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _university_details_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-details-routing.module */ 22151);
/* harmony import */ var _university_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./university-details.page */ 22294);








let UniversityDetailsPageModule = class UniversityDetailsPageModule {
};
UniversityDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _university_details_routing_module__WEBPACK_IMPORTED_MODULE_1__.UniversityDetailsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_university_details_page__WEBPACK_IMPORTED_MODULE_2__.UniversityDetailsPage]
    })
], UniversityDetailsPageModule);



/***/ }),

/***/ 22294:
/*!*********************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-details.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityDetailsPage": () => (/* binding */ UniversityDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_university_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./university-details.page.html */ 85293);
/* harmony import */ var _university_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-details.page.scss */ 20912);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/modal/modal.component */ 10385);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 77370);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);





















let UniversityDetailsPage = class UniversityDetailsPage {
    constructor(headerTitle, apiProgramsService, apiGeneralService, loader, router, auth, sanitizer, route, storageService, previewFile, apiCRMService, modalController, alertController, screenOrientation, call, storage, toastr) {
        this.headerTitle = headerTitle;
        this.apiProgramsService = apiProgramsService;
        this.apiGeneralService = apiGeneralService;
        this.loader = loader;
        this.router = router;
        this.auth = auth;
        this.sanitizer = sanitizer;
        this.route = route;
        this.storageService = storageService;
        this.previewFile = previewFile;
        this.apiCRMService = apiCRMService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.screenOrientation = screenOrientation;
        this.call = call;
        this.storage = storage;
        this.toastr = toastr;
        this.item = { "universityId": 0, "countryId": 0, "programId": 0, "universityName": "", "universityCode": "", "universityType": "", "universityLanguage": "", "programLevel": "", "programType": "", "isOpen": true, "brochureLink": "", "applicationFormLink": "", "eligibilitiesNotes": "", "universityFeesNotes": "", "studyYear": "", "totalBudget": 0, "remarks": "", "documentEmail": "", "branchId": 0, "foreignBranchId": 0, "uploadedBy": "", "isActive": true, "universityMainID": 0, "bannerVideoLink": "", "bannerImage": "", "universityLogo": "", "isECFMGApproved": null, "programName": "", "addCountryName": "", "establishedYear": "", "indianStudents": "", "grade": "", "worldRank": 0, "mokshRecommended": "", };
        this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath;
        this.universityID = 0;
        this.arrApplicationYear = [];
        this.arrAppUniversity = { "appUniversityId": 0, "applicationId": 0, "progInterestId": 0, "programId": 0, "countryId": 0, "universityId": 0, "isPrimary": null, "isActive": true, "createdBy": "", "modifiedBy": "", "createdDate": null, "modifiedDate": null, "createdIp": "", "modifiedIp": "" };
        this.arrUserData = "";
        this.arrCRMRawData = [];
        this.arrUniversityFees = [];
        this.arrCounsellor = [];
        this.applicationId = 0;
        this.feesCont = "";
        this.slideUniOpts = {
            slidesPerView: 1.5
        };
        this.arrSimilarUniversities = [];
        this.arrSimRecommanded = [];
        this.arrSimBudget = [];
        this.mokshRating = 0;
        this.errorCount = 0;
        this.headerTitle.title = "University Details";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.universityID = parseInt(this.route.snapshot.params['universityID']);
        console.log("uniID: " + this.universityID);
        this.getUniversityDetails();
        this.getUserData();
    }
    ionViewWillEnter() {
        this.errorCount = 0;
    }
    ionViewWillLeave() {
        this.apiGeneralService.fnSetTracking("update", this.item["universityID"], this.item["universityMainID"], undefined, undefined, undefined, true);
    }
    //#region Display University Details
    getUniversityDetails() {
        this.loader.presentLoading();
        //this.universityID = this.apiProgramsService.universityID;    
        this.universityID = this.universityID;
        this.apiProgramsService.getUniversityDetails(this.universityID).then(resp => {
            this.item = resp[0];
            console.log(this.item);
            this.mokshRating = this.item["mokshRated"];
            this.dangerousVideoUrl = "https://www.youtube.com/embed/" + resp[0]["bannerVideoLink"];
            this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
            this.webAssetsPath = this.webAssetsPath + "university/";
            this.universityMainID = resp[0]["universityMainID"];
            var bannerpath = this.webAssetsPath + "/banner/" + this.item["universityMainID"] + "/" + this.item["bannerImage"];
            this.item["bannerImage"] = (this.item["bannerImage"] == "") ? "../../../assets/college-default.jpg" : bannerpath;
            this.loader.loadingDismiss();
            this.getSimilarUniversities();
            this.getRecommandedUniversities();
        })
            .catch(err => {
            console.log("getUniversities: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
            this.loader.loadingDismiss();
        });
    }
    actionModal(modalTitle, modalType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            var modalContent = "";
            modalContent = this.item[modalType];
            if (modalType == "brochureLink") {
                var brochureLink = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.webAssetsPath + "university/brochure/" + this.item["universityID"] + "/" + this.item["brochureLink"];
                this.setCRMLeadData();
                setTimeout(() => {
                    this.apiGeneralService.fnSetTracking("update", this.item["universityID"], this.item["universityMainID"], true);
                }, 1500);
                this.previewFile.preview(brochureLink)
                    .then((res) => console.log(res))
                    .catch((error) => console.error(error));
                this.apiCRMService.updateSysLeadPriority(this.arrUserData["leadID"]); //Exicute If Apply, download brochure and click on call
                return false;
            }
            // if (modalType == "aboutUniversity") {
            //   this.apiGeneralService.setTracking("Univerisity Details","View About Universities",null,this.universityID,this.universityMainID,"add");
            // }
            // if (modalType == "campusLife") {
            //   this.apiGeneralService.setTracking("Univerisity Details","View Campus Life",null,this.universityID,this.universityMainID,"add");
            // }
            // if (modalType == "hostelAndFacilities") {
            //   this.apiGeneralService.setTracking("Univerisity Details","View Hostel & Facilities",null,this.universityID,this.universityMainID,"add");
            // }   
            const modal = yield this.modalController.create({
                component: src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__.ModalComponent,
                componentProps: {
                    modalNotes: modalContent,
                    modalTitle: modalTitle
                },
                animated: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    modalPanelClose() {
        this.isFeesOpen = false;
        this.screenOrientation.unlock();
    }
    getFeesStructure() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.apiProgramsService.universityName = this.item["universityName"];
            this.router.navigate(['./university-fees', this.universityID], { relativeTo: this.route });
        });
    }
    //#endregion
    onClickCall() {
        this.apiGeneralService.fnSetTracking("update", this.item["universityID"], this.item["universityMainID"], undefined, true);
        this.call.callNumber(this.apiGeneralService.arrCounsellor["empMob1"], true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
        this.apiCRMService.updateSysLeadPriority(this.arrUserData["leadID"]); //Exicute If Apply, download brochure and click on call
    }
    onClickApply() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
                this.apiProgramsService.filteredData.countryId = this.item["countryID"];
                this.apiProgramsService.filteredData.programId = this.item["programID"];
                this.apiProgramsService.universityID = this.item["universityID"];
                this.arrAppUniversity["progInterestId"] = parseInt(this.apiProgramsService.filteredData.progInterestId);
                this.arrAppUniversity["programId"] = parseInt(this.item["programID"]);
                this.arrAppUniversity["countryId"] = parseInt(this.item["countryID"]);
                this.arrAppUniversity["universityId"] = parseInt(this.item["universityID"]);
                this.arrAppUniversity["isPrimary"] = true;
                this.storageService.setObject("arrAppUni", this.arrAppUniversity);
                this.setCRMLeadData();
                setTimeout(() => {
                    this.apiGeneralService.fnSetTracking("update", this.item["universityID"], this.item["universityMainID"], undefined, undefined, true);
                }, 1500);
                this.router.navigate(["/home/application-center/personal-details"]);
            }
        });
    }
    //#region Similar Universities
    getSimilarUniversities() {
        var programID = this.item["programID"];
        var universityType = (this.item["universityType"] == "Private") ? "" : this.item["universityType"];
        var universityLanguage = this.item["universityLanguage"];
        var budget = this.item["totalBudget"];
        let postData = { "programId": programID, "IsActive": true, "universityLanguage": universityLanguage, "recordcount": 10, "totalBudget": budget };
        this.apiProgramsService.getUniversities(JSON.stringify(postData)).then(resp => {
            if (resp.length != 0) {
                resp.forEach(el1 => {
                    if (el1.universityID == this.universityID) {
                        return false;
                    }
                    this.arrSimBudget.push(el1);
                });
            }
            else {
                this.arrSimBudget = [];
            }
        })
            .catch(err => {
            console.log("getSimilarUniversities: " + err);
        });
    }
    getRecommandedUniversities() {
        var programID = this.item["programID"];
        var universityLanguage = this.item["universityLanguage"];
        let postData = { "programId": programID, "IsActive": true, "universityLanguage": universityLanguage, "recordcount": 10, "mokshRated": 3 };
        this.apiProgramsService.getUniversities(JSON.stringify(postData)).then(resp => {
            if (resp.length != 0) {
                resp.forEach(el2 => {
                    if (el2.universityID == this.universityID) {
                        return false;
                    }
                    this.arrSimRecommanded.push(el2);
                });
            }
            else {
                this.arrSimRecommanded = [];
            }
        })
            .catch(err => {
            console.log("getRecommandedUniversities: " + err);
        });
    }
    onClickSimilarUni(universityId, progInterestId) {
        console.log(universityId, progInterestId);
        this.apiProgramsService.universityID = universityId;
        this.apiProgramsService.filteredData.progInterestId = progInterestId;
        this.router.navigate(['/home/universities/university-details', universityId]);
    }
    //#endregion
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.arrUserData = resp;
            this.apiCRMService.fnGetCRMRawData();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
                arrPostdata["LeadPriorityId"] = this.apiCRMService.enumPriority.Warm;
                arrPostdata["sysLeadPriorityID"] = this.apiCRMService.enumPriority.Hot;
                arrPostdata["leadSourceId"] = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__.environment.defaultLeadSourceId;
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
                            this.apiCRMService.arrCRMLeadData.sysLeadPriorityID = this.apiCRMService.enumPriority.Hot;
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
UniversityDetailsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_7__.HeaderTitleService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_6__.ApiProgramsService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_13__.ApiGeneralService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_10__.PreviewAnyFile },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_11__.ApiCRMService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_12__.ScreenOrientation },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_14__.ToastService }
];
UniversityDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-university-details',
        template: _raw_loader_university_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_university_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UniversityDetailsPage);



/***/ }),

/***/ 20912:
/*!***********************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-details.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background: #eee;\n}\n\nion-col.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.bullet-list li {\n  margin-bottom: 5px;\n}\n\n.toogle-panel .toogle-cont {\n  padding: 0px;\n  padding-top: 0.8rem;\n}\n\n.sim-univesities-sec ion-slides {\n  margin-bottom: 10px;\n}\n\n.pr-content {\n  padding: 10px;\n  text-align: left;\n  font-size: 0.85rem;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  margin-right: 10px;\n  width: 100%;\n}\n\n.pr-content figure {\n  margin: 0px;\n  text-align: center;\n  position: relative;\n}\n\n.pr-content figure img.img-banner {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 5px 5px 0px 0px;\n}\n\n.pr-content figure img.img-logo {\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.pr-content .pr-info {\n  margin-top: 6px;\n}\n\n.pr-content .pr-info h5 {\n  font-size: 0.9rem;\n}\n\n.pr-content .pr-info p {\n  font-size: 0.85rem;\n  margin: 0px;\n  margin-top: 7px;\n}\n\n.wl-icon {\n  position: absolute;\n  display: inline-block;\n  left: 0px;\n  top: 10px;\n  border-radius: 0ox 5-x 5px 0px;\n  background: #fff;\n}\n\n.wl-icon ion-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXZlcnNpdHktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxnQkFBQTtBQUVaOztBQURBO0VBQWlCLG9CQUFBO0VBQXNCLFlBQUE7QUFNdkM7O0FBTEE7RUFBZ0Isa0JBQUE7QUFTaEI7O0FBUEE7RUFBMkIsWUFBQTtFQUFjLG1CQUFBO0FBWXpDOztBQVRJO0VBQVcsbUJBQUE7QUFhZjs7QUFYQTtFQUFhLGFBQUE7RUFBZSxnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixzQkFBQTtFQUF3QixtQkFBQTtFQUFxQixrQkFBQTtFQUFvQixXQUFBO0FBc0JySjs7QUFyQkk7RUFBUyxXQUFBO0VBQWEsa0JBQUE7RUFBb0Isa0JBQUE7QUEwQjlDOztBQXpCUTtFQUFlLFdBQUE7RUFBYSxhQUFBO0VBQWUsaUJBQUE7RUFBbUIsOEJBQUE7QUErQnRFOztBQTlCUTtFQUFhLFlBQUE7RUFBYyxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFNBQUE7QUFxQ2pGOztBQW5DSTtFQUFVLGVBQUE7QUFzQ2Q7O0FBckNRO0VBQUcsaUJBQUE7QUF3Q1g7O0FBdkNRO0VBQUUsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGVBQUE7QUE0QzNDOztBQXhDQTtFQUFTLGtCQUFBO0VBQW9CLHFCQUFBO0VBQXVCLFNBQUE7RUFBVyxTQUFBO0VBQVcsOEJBQUE7RUFBZ0MsZ0JBQUE7QUFpRDFHOztBQWhESTtFQUFTLGVBQUE7QUFtRGIiLCJmaWxlIjoidW5pdmVyc2l0eS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e2JhY2tncm91bmQ6ICNlZWU7fVxyXG5pb24tY29sLmRpc2FibGVke3BvaW50ZXItZXZlbnRzOiBub25lOyBvcGFjaXR5OiAwLjU7fVxyXG4uYnVsbGV0LWxpc3QgbGl7bWFyZ2luLWJvdHRvbTogNXB4O31cclxuXHJcbi50b29nbGUtcGFuZWwgLnRvb2dsZS1jb250e3BhZGRpbmc6IDBweDsgcGFkZGluZy10b3A6IDAuOHJlbTt9XHJcblxyXG4uc2ltLXVuaXZlc2l0aWVzLXNlY3tcclxuICAgIGlvbi1zbGlkZXN7bWFyZ2luLWJvdHRvbTogMTBweDt9XHJcbn1cclxuLnByLWNvbnRlbnR7IHBhZGRpbmc6IDEwcHg7IHRleHQtYWxpZ246IGxlZnQ7IGZvbnQtc2l6ZTogMC44NXJlbTsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgYm9yZGVyLXJhZGl1czogMTBweDsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB3aWR0aDogMTAwJTtcclxuICAgIGZpZ3VyZSB7IG1hcmdpbjogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcuaW1nLWJhbm5lcnt3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDBweDsgb2JqZWN0LWZpdDogY292ZXI7IGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDt9XHJcbiAgICAgICAgaW1nLmltZy1sb2dve2hlaWdodDogNTBweDsgd2lkdGg6IDUwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDEwcHg7IHRvcDogMTBweDt9XHJcbiAgICB9XHJcbiAgICAucHItaW5mb3sgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIGg1e2ZvbnQtc2l6ZTogMC45cmVtO31cclxuICAgICAgICBwe2ZvbnQtc2l6ZTogMC44NXJlbTsgbWFyZ2luOiAwcHg7IG1hcmdpbi10b3A6IDdweDt9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53bC1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBsZWZ0OiAwcHg7IHRvcDogMTBweDsgYm9yZGVyLXJhZGl1czogMG94IDUteCA1cHggMHB4OyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaW9uLXRleHR7Zm9udC1zaXplOiAxMnB4O31cclxufSJdfQ== */");

/***/ }),

/***/ 85293:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/universities/university-details/university-details.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n    <div class=\"main-cont uni-cont\" *ngIf=\"item\">\r\n        <section class=\"sec-video white-box\" style=\"padding: 0px;\">\r\n            <!-- <div class=\"wl-icon\">\r\n            <ion-icon name=\"heart-outline\"></ion-icon>\r\n            <ion-text>Add to Wishlist</ion-text>\r\n        </div> -->\r\n            <div *ngIf=\"item.bannerVideoLink; else imgBlock\">\r\n                <iframe [src]=\"videoURL\"></iframe>\r\n            </div>\r\n            <ng-template #imgBlock>\r\n                <div>\r\n                    <ion-img [src]=\"item.bannerImage\"></ion-img>\r\n                </div>\r\n            </ng-template>\r\n        </section>\r\n        <section class=\"white-box uni-highlights\" [ngClass]=\"{closed: item.isOpen == false}\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"3\">\r\n                        <!-- <ion-avatar class=\"img-avatar\" *ngIf=\"item.universityLogo; else elseBlock\">\r\n                            <img src=\"{{this.webAssetsPath}}/logo/{{item.universityMainID}}/{{item.universityLogo}}\">\r\n                        </ion-avatar>\r\n                        <ng-template #elseBlock>\r\n                            <ion-avatar slot=\"start\" class=\"img-avatar\">\r\n                            <img #thenBlock src=\"../../assets/university-default.png\" alt=\"\" class=\"white-box border-radius-50 \">\r\n                            </ion-avatar>\r\n                            </ng-template> -->\r\n                        <ion-thumbnail class=\"uni-logo\">\r\n                            <img src=\"{{this.webAssetsPath}}/logo/{{item.universityMainID}}/{{item.universityLogo}}\"\r\n                                alt=\"\" *ngIf=\"item.universityLogo; else elseBlock\"\r\n                                class=\"white-box p-0 border-radius-50 \">\r\n                            <ng-template #elseBlock>\r\n                                <img src=\"../../assets/university-default.png\" alt=\"\"\r\n                                    class=\"white-box p-0 border-radius-50 \">\r\n                            </ng-template>\r\n\r\n                            <figure class=\"m-0\" *ngIf=\"item.isECFMGApproved\">\r\n                                <img src=\"../../assets/logo-ecfmg.png\" alt=\"\" class=\"\">\r\n                            </figure>\r\n                        </ion-thumbnail>\r\n                    </ion-col>\r\n                    <ion-col size=\"9\">\r\n                        <h3>{{item.universityName}}</h3>\r\n                        <ion-text color=\"primary\">\r\n                            <p>{{item.programName}} &nbsp;|&nbsp; {{item.addCountryName}}</p>\r\n                        </ion-text>\r\n                        <ul class=\"bullet-list\">\r\n                            <li>\r\n                                <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\r\n                                <ion-text>{{item.universityType}} University</ion-text>\r\n                            </li>\r\n                            <li>\r\n                                <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\r\n                                <ion-text>Establised in {{item.establishedYear}}</ion-text>\r\n                            </li>\r\n                            <li>\r\n                                <ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\r\n                                <ion-text>Indian Students: {{item.indianStudents}}</ion-text>\r\n                            </li>\r\n                        </ul>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </section>\r\n\r\n        <section class=\"white-box\">\r\n            <ion-grid class=\"grid-info\">\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>Eligibilities</strong></ion-col>\r\n                    <ion-col size=\"7\"><span [innerHTML]=\"item.eligibilitiesNotes\"></span></ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>University Grade</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.grade}}</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>Program Type</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.programType}}</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>Total Budget</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.totalBudget/100000 | currency:'INR':'symbol':'2.0'}} Lacs</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>Taught Language</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.universityLanguage}}</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>University Type</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.universityType}}</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>World Rank</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.worldRank}}</ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"5\"><strong>Study Year</strong></ion-col>\r\n                    <ion-col size=\"7\">{{item.studyYear}}</ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </section>\r\n\r\n        <section class=\"white-box uni-grid\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"4\" (click)=\"actionModal('About University', 'aboutUniversity')\">\r\n                        <figure>\r\n                            <img src=\"../../../assets/icons/icon-introduction.png\" alt=\"Introduction\">\r\n                        </figure>\r\n                        <h5>About University</h5>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" (click)=\"getFeesStructure()\">\r\n                        <figure>\r\n                            <img src=\"../../../assets/icons/icon-fees.png\" alt=\"Fees Structure\">\r\n                        </figure>\r\n                        <h5>Fees Structure</h5>\r\n                    </ion-col>\r\n                    <ion-col [ngClass]=\"{disabled: item.brochureLink == ''}\" size=\"4\"\r\n                        (click)=\"actionModal('Brochure', 'brochureLink')\">\r\n                        <figure>\r\n                            <img src=\"../../../assets/icons/icon-brochure.png\" alt=\"Brochure\">\r\n                        </figure>\r\n                        <h5>Get Brochure</h5>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"4\" (click)=\"actionModal('Campus Life', 'campusLife')\">\r\n                        <figure>\r\n                            <img src=\"../../../assets/icons/icon-campus.png\" alt=\"Campus Life\">\r\n                        </figure>\r\n                        <h5>Campus Life</h5>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" (click)=\"actionModal('Hostel & Facilities', 'hostelAndFacilities')\">\r\n                        <figure>\r\n                            <img src=\"../../assets/icons/icon-university.png\" alt=\"hostel-facilities\">\r\n                        </figure>\r\n                        <h5>Hostel & Facilities</h5>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" [routerLink]=\"['university-gallery', universityMainID]\">\r\n                        <figure>\r\n                            <img src=\"../../../assets/icons/icon-gallery.png\" alt=\"Gallery\">\r\n                        </figure>\r\n                        <h5>Gallery</h5>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </section>\r\n\r\n        <section class=\"white-box uni-grid ratings\" *ngIf=\"mokshRating\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"4\"><strong>Student Rating</strong></ion-col>\r\n                    <ion-col size=\"8\" class=\"rating-col\">\r\n                        <span class=\"rating-no\">{{mokshRating | number : '1.1-1'}}</span>\r\n                        <div class=\"star\">\r\n                            <span *ngFor=\"let num of [0,1,2,3,4]\">\r\n                                <ion-icon name=\"star\" color=\"secondary\" *ngIf=\"(mokshRating - num) > 0.5\"></ion-icon>\r\n                                <ion-icon name=\"star-half-outline\" color=\"secondary\" *ngIf=\"(mokshRating - num) == 0.5\">\r\n                                </ion-icon>\r\n                                <ion-icon name=\"star-outline\" color=\"secondary\" *ngIf=\"(mokshRating - num) < 0.5\">\r\n                                </ion-icon>\r\n                            </span>\r\n                            <strong class=\"rating {{mokshRating}}\"></strong>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"item.mokshRecommended\">\r\n                    <ion-col size=\"4\" class=\"text-center\"><strong>MOKSH Review</strong>\r\n                        <div class=\"text-center\">\r\n                            <figure class=\"thumb-cont {{mokshRating >= 3 ? 'success' : 'danger'}}\">\r\n                                <ion-icon name=\"{{mokshRating >= 3 ? 'thumbs-up' : 'thumbs-down'}}\"></ion-icon>\r\n                            </figure>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                        <div [innerHTML]=\"item.mokshRecommended\" class=\"text-justify\"></div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </section>\r\n        <section class=\"sim-univesities-sec\" *ngIf=\"arrSimBudget?.length > 0\">\r\n            <h5 class=\"hdng-line\">\r\n                <span>Similar universities in your Budget</span>\r\n            </h5>\r\n            <ion-slides [options]=\"slideUniOpts\" pager=\"true\">\r\n                <ion-slide *ngFor=\"let uni of arrSimBudget | slice:0:10; let i=index\"\r\n                    (click)=\"onClickSimilarUni(uni.universityID, uni.progInterestId)\">\r\n                    <div class=\"white-bg pr-content\">\r\n                        <figure>\r\n                            <img class=\"img-banner\"\r\n                                src=\"{{this.webAssetsPath}}/banner/{{uni.universityMainID}}/{{uni.bannerImage}}\"\r\n                                *ngIf=\"uni.bannerImage; else elseSimb\">\r\n                            <ng-template #elseSimb>\r\n                                <img src=\"../../assets/college-default.jpg\" alt=\"\" class=\"img-banner\">\r\n                            </ng-template>\r\n\r\n                            <img class=\"img-logo white-box p-0 border-radius-50\"\r\n                                src=\"{{this.webAssetsPath}}/logo/{{uni.universityMainID}}/{{uni.universityLogo}}\"\r\n                                *ngIf=\"uni.universityLogo; else elseSiml\">\r\n                            <ng-template #elseSiml>\r\n                                <img src=\"../../assets/university-default.png\" alt=\"\"\r\n                                    class=\"img-logo white-box p-0 border-radius-50 \">\r\n                            </ng-template>\r\n                        </figure>\r\n                        <div class=\"pr-info\">\r\n                            <h5>{{uni.universityName}}</h5>\r\n                            <ul class=\"border-list\">\r\n                                <ng-container *ngIf=\"uni.grade\">\r\n                                    <li>\r\n                                        <ion-icon name=\"ribbon-outline\"\r\n                                            style=\"position: relative; top: 2px; margin-right: 3px;\"></ion-icon>\r\n                                        <ion-text>{{uni.grade}} Grade</ion-text>\r\n                                    </li>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"uni.universityLanguage != ''\">\r\n                                    <li>\r\n                                        <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>\r\n                                        <ion-text>{{uni.universityLanguage}}</ion-text>\r\n                                    </li>\r\n                                </ng-container>\r\n                            </ul>\r\n                            <p *ngIf=\"uni.serviceAmount\">Annual Fees : <strong> {{uni.currency}}\r\n                                    {{uni.serviceAmount}}</strong></p>\r\n                            <p>Budget: <strong>{{uni.totalBudget/100000 | currency:'INR':'symbol':'2.0'}} Lacs</strong>\r\n                            </p>\r\n                            <p>Country : <strong>{{uni.countryName}}</strong></p>\r\n                        </div>\r\n                    </div>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </section>\r\n        <section class=\"sim-univesities-sec\" *ngIf=\"arrSimRecommanded?.length > 0\">\r\n            <h5 class=\"hdng-line\">\r\n                <span>Student also viewed this</span>\r\n            </h5>\r\n            <ion-slides [options]=\"slideUniOpts\" pager=\"true\">\r\n                <ion-slide *ngFor=\"let mr of arrSimRecommanded | slice:0:10; let i=index\"\r\n                    (click)=\"onClickSimilarUni(mr.universityID, mr.progInterestId)\">\r\n                    <div class=\"white-bg pr-content\">\r\n                        <figure>\r\n                            <img class=\"img-banner\"\r\n                                src=\"{{this.webAssetsPath}}/banner/{{mr.universityMainID}}/{{mr.bannerImage}}\"\r\n                                *ngIf=\"mr.bannerImage; else elseSimb\">\r\n                            <ng-template #elseSimb>\r\n                                <img src=\"../../assets/college-default.jpg\" alt=\"\" class=\"img-banner\">\r\n                            </ng-template>\r\n\r\n                            <img class=\"img-logo white-box p-0 border-radius-50\"\r\n                                src=\"{{this.webAssetsPath}}/logo/{{mr.universityMainID}}/{{mr.universityLogo}}\"\r\n                                *ngIf=\"mr.universityLogo; else elseSiml\">\r\n                            <ng-template #elseSiml>\r\n                                <img src=\"../../assets/university-default.png\" alt=\"\"\r\n                                    class=\"img-logo white-box p-0 border-radius-50 \">\r\n                            </ng-template>\r\n\r\n                        </figure>\r\n                        <div class=\"pr-info\">\r\n                            <h5>{{mr.universityName}}</h5>\r\n                            <ul class=\"border-list\">\r\n                                <ng-container *ngIf=\"mr.grade != '' || mr.grade != null\">\r\n                                    <li>\r\n                                        <ion-icon name=\"ribbon-outline\"\r\n                                            style=\"position: relative; top: 2px; margin-right: 3px;\"></ion-icon>\r\n                                        <ion-text>{{mr.grade}} Grade</ion-text>\r\n                                    </li>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"mr.universityLanguage != ''\">\r\n                                    <li>\r\n                                        <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>\r\n                                        <ion-text>{{mr.universityLanguage}}</ion-text>\r\n                                    </li>\r\n                                </ng-container>\r\n                            </ul>\r\n                            <p>Budget: <strong>{{mr.totalBudget/100000 | currency:'INR':'symbol':'2.0'}} Lacs</strong>\r\n                            </p>\r\n                            <p>Country : <strong>{{mr.countryName}}</strong></p>\r\n                        </div>\r\n                    </div>\r\n                </ion-slide>\r\n            </ion-slides>\r\n        </section>\r\n    </div>\r\n    <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isFeesOpen}\">\r\n        <div class=\"toogle-cont\">\r\n            <ion-text class=\"btn-close\" (click)=\"modalPanelClose()\">\r\n                <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-text>\r\n            <div>\r\n                <h4>Fees</h4>\r\n            </div>\r\n            <ion-grid fixed class=\"feesContModal\" #feesContModal>\r\n                <ion-row class=\"yearHead\" #yearHead>\r\n                    <ion-col>Services</ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </section>\r\n    <section class=\"footer-links\">\r\n        <div class=\"main-cont\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <ion-button expand=\"block\" color=\"primary\" (click)=\"onClickApply()\"\r\n                            routerLinkActive=\"router-link-active\">Apply Now\r\n                            <ion-ripple-effect></ion-ripple-effect>\r\n                            <ion-icon name=\"rocket-outline\" slot=\"start\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                        <ion-button expand=\"block\" color=\"secondary\" (click)=\"onClickCall()\">Request a Call\r\n                            <ion-ripple-effect></ion-ripple-effect>\r\n                            <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </section>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_universities_university-details_university-details_module_ts.js.map