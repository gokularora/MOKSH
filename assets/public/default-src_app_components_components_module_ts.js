(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/modal/modal.component */ 10385);
/* harmony import */ var _top_links_predictor_top_links_predictor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-links-predictor/top-links-predictor.component */ 52754);
/* harmony import */ var _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counselling/counselling.component */ 30737);
/* harmony import */ var _top_links_top_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-links/top-links.component */ 78017);
/* harmony import */ var _nav_steps_nav_steps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-steps/nav-steps.component */ 51840);
/* harmony import */ var _footer_short_cut_footer_short_cut_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer-short-cut/footer-short-cut.component */ 54576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 64662);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ 43646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);














let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _footer_short_cut_footer_short_cut_component__WEBPACK_IMPORTED_MODULE_5__.FooterShortCutComponent, _nav_steps_nav_steps_component__WEBPACK_IMPORTED_MODULE_4__.NavStepsComponent, _top_links_top_links_component__WEBPACK_IMPORTED_MODULE_3__.TopLinksComponent, _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_2__.CounsellingComponent, _top_links_predictor_top_links_predictor_component__WEBPACK_IMPORTED_MODULE_1__.TopLinksPredictorComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule
        ],
        exports: [src_app_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _footer_short_cut_footer_short_cut_component__WEBPACK_IMPORTED_MODULE_5__.FooterShortCutComponent, _nav_steps_nav_steps_component__WEBPACK_IMPORTED_MODULE_4__.NavStepsComponent, _top_links_top_links_component__WEBPACK_IMPORTED_MODULE_3__.TopLinksComponent, _counselling_counselling_component__WEBPACK_IMPORTED_MODULE_2__.CounsellingComponent, _top_links_predictor_top_links_predictor_component__WEBPACK_IMPORTED_MODULE_1__.TopLinksPredictorComponent]
    })
], ComponentsModule);



/***/ }),

/***/ 30737:
/*!*****************************************************************!*\
  !*** ./src/app/components/counselling/counselling.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounsellingComponent": () => (/* binding */ CounsellingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_counselling_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./counselling.component.html */ 99786);
/* harmony import */ var _counselling_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counselling.component.scss */ 66461);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ 12013);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 39075);

















let CounsellingComponent = class CounsellingComponent {
    constructor(headerTitle, apiCRMService, storage, callNumber, alert, apiGeneralService, apiProgramsService, loader, toastr, notificationService, auth, sanitizer) {
        this.headerTitle = headerTitle;
        this.apiCRMService = apiCRMService;
        this.storage = storage;
        this.callNumber = callNumber;
        this.alert = alert;
        this.apiGeneralService = apiGeneralService;
        this.apiProgramsService = apiProgramsService;
        this.loader = loader;
        this.toastr = toastr;
        this.notificationService = notificationService;
        this.auth = auth;
        this.sanitizer = sanitizer;
        this.currentSelected = "t1";
        this.arrCounsellor = [];
        this.arrUserData = { 'address': null, 'appLoginID': null, 'applicationID': null, 'countryID': null, 'districtID': null, 'emailId': null, 'firstName': null, 'gender': null, 'isActive': null, 'lastName': null, 'leadID': null, 'mobileNo': null, 'rawLeadID': null, 'stateID': null };
        this.postData = { 'progInterestId': '', 'branchId': '', 'query': '' };
        this.arrSelection = [];
        this.arrInterestedPrograms = [];
        this.arrBranches = [];
        this.arrWebinarRegistered = [];
        this.selectedWebinarName = "";
        this.counsellorMobNo = "";
        this.counsellorWhatsAppNo = "";
        this.webAssetsPath = "";
        this.arrWebinarVideos = [];
        this.headerTitle.isBack = true;
        this.headerTitle.title = "Online Counselling";
        this.startTime();
        // this.plt.ready().then(()=>{
        //   this.localNotifications.on('trigger').subscribe(res=>{
        //     this.alert.basciAlert("triggered","","",['Ok']);
        //   })
        // })
    }
    ionViewWillEnter() {
        this.currentDateTime = new Date();
        this.currentSelected = "t1";
    }
    ngOnInit() {
        this.getUserData();
        this.getSelection();
        this.getCounsellor();
        this.getVideos();
    }
    doRefresh(event) {
        this.getCRMRawData();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    ionSelectProgram(index) {
        this.currentSelected = index;
        console.log("Selected:  " + index);
    }
    //#region Click to Call
    onClickCall() {
        this.callNumber.callNumber(this.arrCounsellor["empMob1"], true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    //#endregion
    //#region  Webinars start
    startTime() {
        var intervalVar = setInterval(function () {
            this.currentDateTime = new Date();
        }.bind(this), 500);
    }
    getUserData() {
        this.storage.getObject("userdata").then((resp) => {
            this.apiCRMService.arrUserData = resp;
            this.arrUserData = resp;
            this.getWebinars();
        });
    }
    getWebinars() {
        this.isDataLoading = true;
        let postData = {};
        this.apiCRMService.getWebinars(JSON.stringify(postData)).then((resp) => {
            this.arrWebinars = resp;
            this.arrWebinars.forEach(el => {
                el["endTime"] = new Date(el["endTime"]);
            });
            this.getRegisteredWebinars();
            this.isDataLoading = false;
        }).catch(ex => {
            this.toastr.toastError("Sorry! Unable to fetch Webinar List");
            console.log("getWebinars() => " + ex);
            this.isDataLoading = false;
        });
    }
    getRegisteredWebinars() {
        this.isDataLoading = true;
        let postData = { "rawLeadId": this.arrUserData["rawLeadID"], "isActive": true };
        this.apiCRMService.getRegisteredWebinar(JSON.stringify(postData)).then((resp) => {
            if (resp.length > 0) {
                this.arrRegisteredWebinars = resp;
                this.arrWebinars.forEach(el => {
                    var arrWebinars = this.arrRegisteredWebinars.filter(x => x.webinarId == el.webinarId);
                    el.joinUrl = (arrWebinars.length > 0) ? arrWebinars[0]["webinarJoinUrl"] : "";
                });
                this.isDataLoading = false;
            }
        }).catch(ex => {
            this.toastr.toastError("Sorry! Unable to fetch Registered Webinar List");
            console.log("getRegisteredWebinars() => " + ex);
            //this.getWebinars();
        });
    }
    onClickJoinWebinar(joinURL) {
        window.open(joinURL, '_system');
    }
    onRegister(webinarSysID, rawLeadID, webinarName, webinarId, webinarStartTime) {
        this.loader.presentLoading();
        this.selectedWebinarName = webinarName;
        console.log(webinarSysID, rawLeadID);
        let postdata = { 'WebinarSysID': webinarSysID, 'RawLeadID': rawLeadID };
        this.apiCRMService.SetGotoWebinarRegistrant(JSON.stringify(postdata)).then(resp => {
            this.arrWebinarRegistered = JSON.parse(resp.d);
            console.log(JSON.stringify(this.arrWebinarRegistered));
            if (this.arrWebinarRegistered["Status"] == "Success") {
                this.alert.basciAlert("Great! You are now registered for the popular MOKSH Career planning session.", "", "", ['Ok']);
                this.arrWebinarURL = { 'WebinarSysID': webinarSysID, 'RegistrantKey': this.arrWebinarRegistered["RegistrantKey"], 'JoinUrl': this.arrWebinarRegistered["JoinUrl"] };
                this.sendWhatsApp(webinarName, webinarId, webinarStartTime);
                this.getRegisteredWebinars();
                if (this.arrUserData["rawLeadID"] != 0 && this.arrUserData["rawLeadID"] != undefined && this.arrUserData["rawLeadID"] != null) {
                    this.apiCRMService.fnGetLeadByRawID(this.arrUserData["rawLeadID"]).then(respLead => {
                        if (this.arrUserData["leadID"] != respLead) {
                            this.updateAppRegistration(respLead);
                        }
                    });
                }
            }
            else if (this.arrWebinarRegistered["Status"] == "Error") {
                this.loader.loadingDismiss();
                this.alert.basciAlert("Oops! Webinar registration failed!", "", "Please try again after sometime", ['Ok']);
            }
        }).catch(ex => {
            console.log("onRegister()=== " + ex);
            this.toastr.toastError("Oops! Your registration request failed! Please try again.");
            this.isRegisterLoading = false;
        });
    }
    sendWhatsApp(webinarName, webinarId, webinarStartTime) {
        var d = new Date(webinarStartTime);
        webinarStartTime = d.getHours() + ":" + d.getMinutes();
        var webinarDate = d.toLocaleDateString('en-GB');
        let postData = { "type": "template", "sender_phone": this.apiCRMService.arrUserData["mobileNo"], "templateId": "webinar_wish_to_attend", "templateArgs": [this.arrUserData["firstName"] + " " + this.arrUserData["lastName"], webinarName, webinarDate, webinarStartTime, this.arrWebinarRegistered["JoinUrl"] + " (Webinar ID: " + webinarId + ")"] };
        this.notificationService.sendWhatsApp(JSON.stringify(postData)).then(resp => {
            if (resp.status == "200") {
                console.log("WA Success");
            }
        });
    }
    getCRMRawData() {
        if (this.arrUserData["rawLeadID"] == 0) {
            this.toastr.toastError("Something went wrong. Request you to logout and login again.");
            this.getWebinars();
            return false;
        }
        let postdata = { 'RawLeadID': this.arrUserData["rawLeadID"] };
        this.apiCRMService.getCRMRawData(JSON.stringify(postdata)).then((resp) => {
            if (resp.d != "[]") {
                this.apiCRMService.arrCRMRawData = JSON.parse(resp.d)[0];
                console.log();
                this.arrGetWebinarURL = JSON.parse("[" + this.apiCRMService.arrCRMRawData["WebinarNotes"] + "]");
                console.log(this.arrGetWebinarURL);
                this.getWebinars();
            }
        });
    }
    setCRMRawData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var currDateTime = new Date();
            var arrPostdata = this.apiCRMService.arrCRMRawData;
            arrPostdata["LeadPriorityID"] = "4"; // Hot
            arrPostdata["WebinarStatusID"] = "4"; // Registered    
            arrPostdata["ModifiedDate"] = this.apiGeneralService.CurrentDateTime;
            yield this.apiCRMService.setCRMRawData(JSON.stringify(arrPostdata)).then(resp => {
                console.log("Success: setCRMRawData");
                //this.getUserData();
            });
        });
    }
    //#endregion
    getSelection() {
        this.storage.getObject("arrSelection").then((resp) => {
            this.arrSelection = resp;
            this.apiCRMService.arrSelection = resp;
            this.getIntersetedProgram();
        });
    }
    getIntersetedProgram() {
        this.postData.progInterestId = "";
        var degreeID = (this.arrSelection == null) ? 0 : this.arrSelection["degreeID"];
        let postData = { "DegreeId": degreeID, "IsActive": true };
        this.apiProgramsService.getInterestedProgram(JSON.stringify(postData)).then(resp => {
            this.arrInterestedPrograms = resp;
        })
            .catch(err => {
            console.log("getInterestedPrograms: " + err);
        });
    }
    getCounsellor() {
        this.arrCounsellor = this.apiGeneralService.arrCounsellor;
        this.counsellorWhatsAppNo = this.arrCounsellor["empMob2"];
    }
    //#region  Video Section start
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'videoHeaderId': 33, 'isActive': true };
            yield this.apiGeneralService.getVideos(JSON.stringify(postData)).then(resp => {
                this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_13__.environment.webAssetsPath + "mobility-app/videothumbnails";
                this.arrWebinarVideos = resp;
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
    updateAppRegistration(leadID) {
        this.auth.getAppRegistration().then(resp => {
            if (resp) {
                resp["leadID"] = leadID;
                this.auth.putAppRegistration(JSON.stringify(resp)).then(respUpdate => {
                });
            }
        });
    }
};
CounsellingComponent.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTitleService },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_8__.ApiCRMService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__.StorageService },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__.CallNumber },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_11__.ApiGeneralService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_12__.ApiProgramsService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer }
];
CounsellingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-counselling-comp',
        template: _raw_loader_counselling_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_counselling_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CounsellingComponent);



/***/ }),

/***/ 54576:
/*!***************************************************************************!*\
  !*** ./src/app/components/footer-short-cut/footer-short-cut.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterShortCutComponent": () => (/* binding */ FooterShortCutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_short_cut_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer-short-cut.component.html */ 86983);
/* harmony import */ var _footer_short_cut_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-short-cut.component.scss */ 37280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);






let FooterShortCutComponent = class FooterShortCutComponent {
    constructor(router, apiProgramsService) {
        this.router = router;
        this.apiProgramsService = apiProgramsService;
        this.categoryType = "";
    }
    ngOnInit() { }
    apply(categoryType) {
        // this.isOpen = true;    
        // this.categoryType=categoryType;
        this.router.navigateByUrl("/home/welcome");
    }
    tooglePanelClose() {
        this.isOpen = false;
    }
    applyNow(countryID, ProgramID, productDepartmentID) {
        this.apiProgramsService.filteredData.countryId = countryID;
        this.apiProgramsService.filteredData.programId = ProgramID;
        this.apiProgramsService.productDepartmentID = productDepartmentID;
        if (productDepartmentID == 1) {
            this.router.navigate(['/home/country-list']);
        }
        else if (productDepartmentID == 2) {
            this.router.navigate(['/home/program-list']);
        }
    }
};
FooterShortCutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_2__.ApiProgramsService }
];
FooterShortCutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-footer-short-cut',
        template: _raw_loader_footer_short_cut_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_short_cut_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterShortCutComponent);



/***/ }),

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 32517);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 82251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }
    logout() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 97911);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 64993);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);












let HeaderComponent = class HeaderComponent {
    constructor(headerTitleService, navCtrl, apiCRMService, router, apiGeneralService, auth, storage, firebaseAnalytics) {
        this.headerTitleService = headerTitleService;
        this.navCtrl = navCtrl;
        this.apiCRMService = apiCRMService;
        this.router = router;
        this.apiGeneralService = apiGeneralService;
        this.auth = auth;
        this.storage = storage;
        this.firebaseAnalytics = firebaseAnalytics;
        this.title = "";
        this.isBack = false;
        this.isMenu = true;
        this.arrNotifications = [];
        this.applicationId = 0;
        this.notificationCounter = 0;
        this.newNotificationCounter = 0;
        this.arrCounsellor = [];
        this.counsellorWhatsAppNo = "";
        this.title = this.headerTitleService.title;
        this.isBack = this.headerTitleService.isBack;
        this.isMenu = this.headerTitleService.isMenu;
    }
    ngOnInit() {
        this.firebaseAnalytics.setCurrentScreen(window.location.pathname);
        if (this.applicationId == 0) {
            this.getApplicatinID();
        }
        setTimeout(() => {
            this.getUserData();
        }, 2000);
    }
    navHome() {
        this.router.navigate(['home/welcome']);
    }
    navNotification() {
        if (this.notificationCounter != 0) {
            this.isOpen = !this.isOpen;
        }
    }
    back() {
        let animations = {
            animated: true,
            animationDirection: "back"
        };
        this.navCtrl.back(animations);
    }
    //#region Notification
    actionRead(notificationId) {
        let CurrentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
        this.arrNotifications.forEach(i => {
            if (i.notificationId == notificationId) {
                i["isRead"] = true;
                i["readDate"] = CurrentDateTime;
                this.apiGeneralService.setNotitifications(JSON.stringify(i), notificationId).then(resp => {
                    console.log("notification readed");
                });
            }
        });
    }
    getgetNotitifications() {
        if (this.applicationId == 0 || this.apiGeneralService.notificationCall > 0) {
            return false;
        }
        this.apiGeneralService.notificationCall++;
        var iconPath = "https://app.moksh16.in/images/icons/";
        let postdata = { 'UserId': this.applicationId, 'UserType': 'Student' };
        this.apiGeneralService.getNotitifications(postdata).then(resp => {
            //this.arrNotifications = resp;
            resp.forEach(i => {
                this.notificationCounter++;
                i.image = iconPath + i.image;
                if (i.isRead == false) {
                    this.newNotificationCounter++;
                }
                this.arrNotifications.push(i);
            });
        }).catch(err => {
            if (err.status == "401") {
                this.auth.logout();
            }
        });
    }
    //#endregion
    getApplicatinID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getApplicationID().then(res => {
                this.applicationId = parseInt(res);
                this.getgetNotitifications();
            });
        });
    }
    getUserData() {
        this.storage.getObject("userdata").then(res => {
            this.apiGeneralService.arrUserData = this.arrUserData = res;
            this.getCounsellorData();
        });
    }
    getCounsellorData() {
        this.storage.getObject("counsellorData").then(resp => {
            if (resp != null)
                this.counsellorWhatsAppNo = resp["empMob2"];
        });
        /**
        var leadType = "";
        var leadID = 0;
        if (this.arrUserData["leadID"] != 0) {
          leadType = "Lead"
          leadID = this.arrUserData["leadID"];
        }
        else {
          leadType = "Raw"
          leadID = this.arrUserData["rawLeadID"];
        }
        let postData = { "LeadID": leadID, "LeadType": leadType };
        this.apiCRMService.getLeadCounsellor(JSON.stringify(postData)).then(resp => {
          if(resp){
          var counsellorData = JSON.parse((resp.d));
          this.storage.setObject("counsellorData", counsellorData[0]);
          this.apiCRMService.arrCounsellor = this.apiGeneralService.arrCounsellor = counsellorData[0];
          this.counsellorWhatsAppNo =  counsellorData[0]["EmpMob2"];
        }
        else{
          this.counsellorWhatsAppNo =  environment.counsellorNo;
        }
        }).catch(ex=>{
        })
        */
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_4__.ApiCRMService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_2__.FirebaseAnalytics }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 10385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.component.html */ 41633);
/* harmony import */ var _modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.scss */ 97058);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 64687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-crm.service */ 77413);









let ModalComponent = class ModalComponent {
    constructor(modalController, navParams, call, storage, router, apiCRMService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.call = call;
        this.storage = storage;
        this.router = router;
        this.apiCRMService = apiCRMService;
        this.modalContent = null;
        this.modalTitle = null;
        this.wahtsAppNo = "";
        this.arrCounsellor = [];
    }
    ngOnInit() {
        if (this.navParams.get('modalNotes') == null || this.navParams.get('modalNotes') == "") {
            this.modalContent = `<div class='no-data text-center'> <h3>Oops! No data found.</h3> <ion-icon name='sad-outline'></ion-icon> <h5> ` + this.modalTitle + ` is not available!</h5> </div>`;
        }
        else {
            this.modalContent = this.navParams.get('modalNotes');
        }
        this.modalTitle = this.navParams.get('modalTitle');
    }
    dismissModal() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    onClickCall() {
        this.call.callNumber(this.arrCounsellor["empMob1"], true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    onClickWhatsApp() {
        this.wahtsAppNo = this.apiCRMService.arrCounsellor["empMob1"];
        window.open("https://wa.me/" + this.wahtsAppNo + "&amp;text=", "_blank");
    }
    onClickCounselling() {
        this.dismissModal();
        this.router.navigate(['/home/counselling']);
    }
    onClickBrnach() {
        this.dismissModal();
        this.router.navigate(['/home/other-pages/branch-locator']);
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__.CallNumber },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_api_crm_service__WEBPACK_IMPORTED_MODULE_4__.ApiCRMService }
];
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalComponent);



/***/ }),

/***/ 51840:
/*!*************************************************************!*\
  !*** ./src/app/components/nav-steps/nav-steps.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavStepsComponent": () => (/* binding */ NavStepsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_nav_steps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nav-steps.component.html */ 10722);
/* harmony import */ var _nav_steps_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-steps.component.scss */ 9912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);






let NavStepsComponent = class NavStepsComponent {
    constructor(apiApplicationService, auth) {
        this.apiApplicationService = apiApplicationService;
        this.auth = auth;
        this.arrSteps = { 'academicDetails': null, 'documentsUpload': null, 'payment': null, 'personalDetails': null, 'serviceSelection': null, 'universityDetails': null };
        this.applicationId = 0;
        this.arrAppUniversities = { 'universityName': '', 'countryName': '' };
    }
    ngOnInit() {
        this.getApplicatinID();
    }
    GetApplicationSteps() {
        this.apiApplicationService.getApplicationSteps().then(resp => {
            this.arrSteps = resp;
        }).catch(err => {
            if (err.error.error == "invalid_token") {
                //this.auth.logout();
            }
        });
    }
    getApplicatinID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getApplicationID().then(res => {
                this.applicationId = parseInt(res);
                if (this.applicationId != 0) {
                    this.GetApplicationSteps();
                    this.getAppUniverisityDetails();
                }
            });
        });
    }
    getAppUniverisityDetails() {
        let postData = '{"ApplicationId":' + this.applicationId + ',"IsActive":true }';
        this.apiApplicationService.getAppUniversity(postData).then(resp => {
            if (resp.length > 0) {
                this.arrAppUniversities = resp[0];
            }
        });
    }
};
NavStepsComponent.ctorParameters = () => [
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_2__.ApiApplicationService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
NavStepsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-nav-steps',
        template: _raw_loader_nav_steps_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nav_steps_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NavStepsComponent);



/***/ }),

/***/ 52754:
/*!*********************************************************************************!*\
  !*** ./src/app/components/top-links-predictor/top-links-predictor.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLinksPredictorComponent": () => (/* binding */ TopLinksPredictorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_top_links_predictor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./top-links-predictor.component.html */ 26567);
/* harmony import */ var _top_links_predictor_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-links-predictor.component.scss */ 69194);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/storage.service */ 71188);
/* harmony import */ var _services_api_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);








let TopLinksPredictorComponent = class TopLinksPredictorComponent {
    constructor(apiGeneralService, storage, router) {
        this.apiGeneralService = apiGeneralService;
        this.storage = storage;
        this.router = router;
        this.slideOpts = {
            slidesPerView: 3.8,
            freeMode: false,
            initialSlide: 7
        };
        this.imgPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.environment.webAssetsPath + "mobility-app";
        this.arrActivatedpackage = null;
        this.examId = null;
        this.counsellingId = null;
        this.counsellingIdOther = null;
        this.isModal = false;
        this.packageName = this.apiGeneralService.optedPackage;
        this.packageId = 0;
        this.selectedURL = "";
        this.getredictedForm();
    }
    ngOnInit() {
        this.getSelectedPackage();
    }
    ngAfterViewInit() {
        this.slides.slideTo(this.apiGeneralService.sliderTopLinksPredIndex, 0);
    }
    slideChanged() {
        this.slides.getActiveIndex().then((index) => {
            this.apiGeneralService.sliderTopLinksPredIndex = index;
        });
    }
    getredictedForm() {
        this.storage.getObject("predictorForm").then(resp => {
            this.arrPredictedForm = resp;
            this.examId = this.arrPredictedForm.ExamID;
            this.counsellingId = this.arrPredictedForm.CounsellingID;
            if (this.counsellingId == 1) {
                this.counsellingIdOther = 2;
            }
            else if (this.counsellingId == 2) {
                this.counsellingIdOther = 1;
            }
        });
    }
    getSelectedPackage() {
        this.storage.getObject("selectedPackage").then((resp) => {
            this.apiGeneralService.optedPackage = resp["packageName"];
            this.packageName = resp["packageName"];
            this.packageId = resp["packageId"];
        });
    }
    //#region Modal Start
    onClickUpgrade(packageId, urlRouter, urlID) {
        if (packageId < 4) {
            this.router.navigate(["/home/college-predictor/predictor-checkout", 'upgrade']);
        }
        else {
            this.router.navigate([urlRouter]);
            this.selectedURL = urlID;
        }
    }
    onClickModalClose() {
        this.isModal = false;
    }
};
TopLinksPredictorComponent.ctorParameters = () => [
    { type: _services_api_general_service__WEBPACK_IMPORTED_MODULE_3__.ApiGeneralService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
TopLinksPredictorComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slidesPredictor', { static: true },] }]
};
TopLinksPredictorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-top-links-predictor',
        template: _raw_loader_top_links_predictor_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_top_links_predictor_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopLinksPredictorComponent);



/***/ }),

/***/ 78017:
/*!*************************************************************!*\
  !*** ./src/app/components/top-links/top-links.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLinksComponent": () => (/* binding */ TopLinksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_top_links_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./top-links.component.html */ 36414);
/* harmony import */ var _top_links_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-links.component.scss */ 91007);
/* harmony import */ var _services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api-general.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





let TopLinksComponent = class TopLinksComponent {
    constructor(apiGeneralService) {
        this.apiGeneralService = apiGeneralService;
        this.slideOpts = {
            slidesPerView: 4.5,
            freeMode: true,
            initialSlide: 5
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.slides.slideTo(this.apiGeneralService.sliderTopLinksIndex + 1, 0);
    }
    slideChanged() {
        this.slides.getActiveIndex().then((index) => {
            this.apiGeneralService.sliderTopLinksIndex = index;
        });
    }
};
TopLinksComponent.ctorParameters = () => [
    { type: _services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService }
];
TopLinksComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides', { static: true },] }]
};
TopLinksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-top-links',
        template: _raw_loader_top_links_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_top_links_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopLinksComponent);



/***/ }),

/***/ 12013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);




let NotificationService = class NotificationService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.whatsappAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.whatsappAPI;
        this.headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }) };
    }
    sendSMS(body) {
        const url = this.api + 'CommunicationHandler/SMS';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    sendEmail(body) {
        const url = this.api + 'CommunicationHandler/Email';
        return this.http.post(url, body.toString(), this.headerOption).toPromise();
    }
    sendWhatsApp(body) {
        const url = this.whatsappAPI;
        return this.http.post(url, body.toString()).toPromise();
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 66461:
/*!*******************************************************************!*\
  !*** ./src/app/components/counselling/counselling.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".landing-steps-cont ion-item {\n  font-size: 0.9rem;\n}\n\n.offices > ion-grid > ion-row > ion-col img {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW5zZWxsaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQVMsaUJBQUE7QUFDYjs7QUFDQTtFQUE0QyxZQUFBO0FBRzVDIiwiZmlsZSI6ImNvdW5zZWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctc3RlcHMtY29udHtcclxuICAgIGlvbi1pdGVte2ZvbnQtc2l6ZTogMC45cmVtO31cclxufVxyXG4ub2ZmaWNlcyA+IGlvbi1ncmlkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW1ne2hlaWdodDogYXV0bzt9Il19 */");

/***/ }),

/***/ 37280:
/*!*****************************************************************************!*\
  !*** ./src/app/components/footer-short-cut/footer-short-cut.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXItc2hvcnQtY3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 82251:
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 64993:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  font-size: 2rem;\n  --padding-start:0px;\n}\n\nion-back-button {\n  display: block;\n  color: #000 !important;\n}\n\nion-back-button.noMenu {\n  width: 2rem;\n}\n\nion-back-button + ion-menu-button {\n  --padding-start:2px;\n}\n\nion-icon {\n  font-size: 1.8rem;\n}\n\nion-toolbar {\n  border: 0px !important;\n  --min-height:3rem;\n  padding: 0px 5px;\n}\n\nion-title {\n  text-align: left;\n  position: relative;\n  padding-left: initial;\n  font-size: 1.1rem;\n}\n\nion-header .nav-list {\n  position: absolute;\n  right: 0px;\n  top: -2px;\n  z-index: 2;\n  margin: 0px;\n}\n\nion-header .nav-list > li {\n  display: inline-block;\n  width: 2.6rem;\n  text-align: center;\n  position: relative;\n}\n\nion-header .nav-list > li.istrue {\n  position: relative;\n}\n\nion-header .nav-list > li.istrue:after {\n  content: \"\";\n  position: absolute;\n  bottom: -7px;\n  background: #fff;\n  height: 20px;\n  width: 20px;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  transform: rotate(45deg);\n}\n\nion-header .nav-list > li > a {\n  position: relative;\n  display: inline-block;\n  padding: 12px 5px;\n  color: #000;\n}\n\nion-header .nav-list > li.nav-whatsapp > a {\n  color: #3f9526;\n}\n\nion-header .nav-list > li.nav-home {\n  margin-left: 5px;\n  position: relative;\n  top: -5px;\n}\n\nion-header .nav-list > li.nav-home > a {\n  background-color: #fff;\n}\n\nion-header .nav-list ion-badge {\n  position: absolute;\n  z-index: 2;\n  right: 5px;\n  top: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFnQixlQUFBO0VBQWlCLG1CQUFBO0FBR2pDOztBQUZBO0VBQ0ksY0FBQTtFQUFnQixzQkFBQTtBQU1wQjs7QUFMSTtFQUFTLFdBQUE7QUFRYjs7QUFQSTtFQUFxQixtQkFBQTtBQVV6Qjs7QUFSQTtFQUFTLGlCQUFBO0FBWVQ7O0FBWEE7RUFBWSxzQkFBQTtFQUF3QixpQkFBQTtFQUFtQixnQkFBQTtBQWlCdkQ7O0FBaEJBO0VBQVUsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IscUJBQUE7RUFBdUIsaUJBQUE7QUF1QnZFOztBQXRCQTtFQUFzQixrQkFBQTtFQUFvQixVQUFBO0VBQWEsU0FBQTtFQUFVLFVBQUE7RUFBWSxXQUFBO0FBOEI3RTs7QUE3Qkk7RUFBTSxxQkFBQTtFQUF1QixhQUFBO0VBQWUsa0JBQUE7RUFBb0Isa0JBQUE7QUFtQ3BFOztBQWxDUTtFQUFTLGtCQUFBO0FBcUNqQjs7QUFwQ1k7RUFBUSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsWUFBQTtFQUFjLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxXQUFBO0VBQWEsU0FBQTtFQUFXLFVBQUE7RUFBWSxnQkFBQTtFQUFrQix3QkFBQTtBQWdEeko7O0FBOUNRO0VBQUksa0JBQUE7RUFBb0IscUJBQUE7RUFBdUIsaUJBQUE7RUFBa0IsV0FBQTtBQW9EekU7O0FBbERJO0VBQXNCLGNBQUE7QUFxRDFCOztBQXBESTtFQUFlLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLFNBQUE7QUF5RHpEOztBQXhEUTtFQUFLLHNCQUFBO0FBMkRiOztBQXpESTtFQUFVLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxVQUFBO0VBQVksUUFBQTtFQUFVLGlCQUFBO0VBQW1CLGtCQUFBO0FBaUV2RiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b257Zm9udC1zaXplOiAycmVtOyAtLXBhZGRpbmctc3RhcnQ6MHB4fVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgJi5ub01lbnV7d2lkdGg6IDJyZW07fVxyXG4gICAgJiArIGlvbi1tZW51LWJ1dHRvbnsgLS1wYWRkaW5nLXN0YXJ0OjJweH1cclxufVxyXG5pb24taWNvbntmb250LXNpemU6IDEuOHJlbTt9XHJcbmlvbi10b29sYmFye2JvcmRlcjogMHB4ICFpbXBvcnRhbnQ7IC0tbWluLWhlaWdodDozcmVtOyBwYWRkaW5nOiAwcHggNXB4O31cclxuaW9uLXRpdGxle3RleHQtYWxpZ246IGxlZnQ7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1sZWZ0OiBpbml0aWFsOyBmb250LXNpemU6IDEuMXJlbTt9XHJcbmlvbi1oZWFkZXIgLm5hdi1saXN0IHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwMHB4OyB0b3A6LTJweDsgei1pbmRleDogMjsgbWFyZ2luOiAwcHg7XHJcbiAgICA+IGxpIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAyLjZyZW07IHRleHQtYWxpZ246IGNlbnRlcjsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICYuaXN0cnVle3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjphZnRlcntjb250ZW50OiAnJzsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IC03cHg7IGJhY2tncm91bmQ6ICNmZmY7IGhlaWdodDogMjBweDsgd2lkdGg6IDIwcHg7IGxlZnQ6IDBweDsgcmlnaHQ6IDBweDsgbWFyZ2luOiAwcHggYXV0bzsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO31cclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICA+IGF7cG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6MTJweCA1cHg7IGNvbG9yOiAjMDAwfVxyXG4gICAgfVxyXG4gICAgPiBsaS5uYXYtd2hhdHNhcHAgPiBhe2NvbG9yOiAjM2Y5NTI2O31cclxuICAgID4gbGkubmF2LWhvbWV7IG1hcmdpbi1sZWZ0OiA1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAtNXB4O1xyXG4gICAgICAgID4gYXsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9ICAgICAgICBcclxuICAgIH1cclxuICAgIGlvbi1iYWRnZXtwb3NpdGlvbjogYWJzb2x1dGU7IHotaW5kZXg6IDI7IHJpZ2h0OiA1cHg7IHRvcDogOHB4OyBwYWRkaW5nLWxlZnQ6IDVweDsgcGFkZGluZy1yaWdodDogNXB4O31cclxufSJdfQ== */");

/***/ }),

/***/ 97058:
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 1.6rem;\n}\n\n.box-prog {\n  color: #fff;\n}\n\n.box-prog ion-col.call div {\n  background-color: #128c7e;\n}\n\n.box-prog ion-col.whatsapp div {\n  background-color: #46c254;\n}\n\n.box-prog ion-col.counselling div {\n  background-color: #c71919;\n}\n\n.box-prog ion-col.branch div {\n  background-color: #d49904;\n}\n\n.box-prog ion-col div {\n  border: 0px;\n}\n\n.box-prog ion-icon {\n  font-size: 2rem;\n}\n\n.box-prog ion-label {\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.8);\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n  padding-top: 6px;\n  padding-bottom: 0px;\n}\n\n.box-prog ion-col {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVMsaUJBQUE7QUFFVDs7QUFEQTtFQUFXLFdBQUE7QUFLWDs7QUFIUTtFQUFJLHlCQUFBO0FBTVo7O0FBSFE7RUFBSSx5QkFBQTtBQU1aOztBQUhRO0VBQUkseUJBQUE7QUFNWjs7QUFIUTtFQUFJLHlCQUFBO0FBTVo7O0FBSFE7RUFBSSxXQUFBO0FBTVo7O0FBSkk7RUFBUyxlQUFBO0FBT2I7O0FBSkE7RUFBb0IsaUJBQUE7RUFBb0IsK0JBQUE7RUFBOEIsOENBQUE7RUFBZ0QsZ0JBQUE7RUFBa0IsbUJBQUE7QUFZeEk7O0FBWEE7RUFBa0IsaUJBQUE7RUFBbUIsa0JBQUE7QUFnQnJDIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257Zm9udC1zaXplOiAxLjZyZW07fVxyXG4uYm94LXByb2d7IGNvbG9yOiAjZmZmO1xyXG4gICAgaW9uLWNvbC5jYWxse1xyXG4gICAgICAgIGRpdntiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4YzdlO31cclxuICAgIH1cclxuICAgIGlvbi1jb2wud2hhdHNhcHB7XHJcbiAgICAgICAgZGl2e2JhY2tncm91bmQtY29sb3I6ICM0NmMyNTQ7fVxyXG4gICAgfVxyXG4gICAgaW9uLWNvbC5jb3Vuc2VsbGluZ3tcclxuICAgICAgICBkaXZ7YmFja2dyb3VuZC1jb2xvcjogI2M3MTkxOTt9XHJcbiAgICB9XHJcbiAgICBpb24tY29sLmJyYW5jaHtcclxuICAgICAgICBkaXZ7YmFja2dyb3VuZC1jb2xvcjogI2Q0OTkwNDt9XHJcbiAgICB9XHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIGRpdntib3JkZXI6IDBweDt9XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntmb250LXNpemU6IDJyZW07fVxyXG59XHJcbiBcclxuLmJveC1wcm9nIGlvbi1sYWJlbHtmb250LXNpemU6IDAuOHJlbTsgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7IGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IHBhZGRpbmctdG9wOiA2cHg7IHBhZGRpbmctYm90dG9tOiAwcHg7fVxyXG4uYm94LXByb2cgaW9uLWNvbHtwYWRkaW5nLWxlZnQ6IDNweDsgcGFkZGluZy1yaWdodDogM3B4O30iXX0= */");

/***/ }),

/***/ 9912:
/*!***************************************************************!*\
  !*** ./src/app/components/nav-steps/nav-steps.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".step-list {\n  padding: 15px 8px;\n}\n.step-list > li {\n  padding: 0px 7px;\n  width: 100px;\n  text-align: center;\n  pointer-events: none;\n}\n.step-list > li:after {\n  z-index: -1;\n  top: 45%;\n}\n.step-list > li > div {\n  border-radius: 5px;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);\n  padding: 5px;\n  background: #fff;\n}\n.step-list > li > div a {\n  padding-top: 10px;\n  font-size: 13px;\n  white-space: normal;\n}\n.step-list > li > div a:after {\n  top: -10px;\n}\n.step-list > li > div ion-icon {\n  top: -9px;\n  border-radius: 50%;\n}\n.step-list > li.completed {\n  pointer-events: unset;\n}\n.step-list > li.completed + li {\n  pointer-events: unset;\n}\n.step-list > li.completed + li > div {\n  background: #f7f7e4;\n}\n.step-list > li.completed + li > div ion-icon {\n  animation: pulse 1s infinite;\n}\n.step-list > li.completed > div {\n  background: #f0f7e4 !important;\n}\n.step-list > li.completed > div ion-icon {\n  animation: none !important;\n}\n.top-summary {\n  background: var(--ion-color-secondary-light);\n  padding: 3px 0px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.top-summary > div {\n  margin: 8px 0px;\n  font-size: 0.9em;\n}\n.top-summary > div > strong {\n  font-weight: 500;\n  display: inline-block;\n  min-width: 70px;\n}\n.top-summary > div > span {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1zdGVwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUFZLGlCQUFBO0FBRFo7QUFFSTtFQUFNLGdCQUFBO0VBQWtCLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixvQkFBQTtBQUk5RDtBQUhRO0VBQVEsV0FBQTtFQUFhLFFBQUE7QUFPN0I7QUFOUTtFQUFNLGtCQUFBO0VBQW9CLDhDQUFBO0VBQTZDLFlBQUE7RUFBYyxnQkFBQTtBQVk3RjtBQVhZO0VBQUUsaUJBQUE7RUFBbUIsZUFBQTtFQUFpQixtQkFBQTtBQWdCbEQ7QUFmZ0I7RUFBUSxVQUFBO0FBa0J4QjtBQWhCWTtFQUFTLFNBQUE7RUFBVyxrQkFBQTtBQW9CaEM7QUFsQlE7RUFBYSxxQkFBQTtBQXFCckI7QUFwQlk7RUFBUSxxQkFBQTtBQXVCcEI7QUF0QmdCO0VBQ0ksbUJBQUE7QUF3QnBCO0FBdkJvQjtFQUFTLDRCQUFBO0FBMEI3QjtBQXZCWTtFQUNJLDhCQUFBO0FBeUJoQjtBQXhCZ0I7RUFBUywwQkFBQTtBQTJCekI7QUFwQkE7RUFBYSw0Q0FBQTtFQUE4QyxnQkFBQTtFQUFpQiwyQ0FBQTtBQTBCNUU7QUF6Qkk7RUFBUSxlQUFBO0VBQWlCLGdCQUFBO0FBNkI3QjtBQTVCUTtFQUFTLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXVCLGVBQUE7QUFpQzFEO0FBaENRO0VBQU8scUJBQUE7QUFtQ2YiLCJmaWxlIjoibmF2LXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLnN0ZXAtbGlzdHsgcGFkZGluZzogMTVweCA4cHg7XHJcbiAgICA+IGxpeyBwYWRkaW5nOiAwcHggN3B4OyB3aWR0aDogMTAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgJjphZnRlcnt6LWluZGV4OiAtMTsgdG9wOiA0NSU7fVxyXG4gICAgICAgID4gZGl2e2JvcmRlci1yYWRpdXM6IDVweDsgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4IHJnYmEoMCwwLDAsMC4yKTsgcGFkZGluZzogNXB4OyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBhe3BhZGRpbmctdG9wOiAxMHB4OyBmb250LXNpemU6IDEzcHg7IHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye3RvcDogLTEwcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29ue3RvcDogLTlweDsgYm9yZGVyLXJhZGl1czogNTAlO31cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jb21wbGV0ZWR7IHBvaW50ZXItZXZlbnRzOiB1bnNldDtcclxuICAgICAgICAgICAgJiArIGxpeyBwb2ludGVyLWV2ZW50czogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2U0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue2FuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGV9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmN2U0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbnthbmltYXRpb246IG5vbmUgIWltcG9ydGFudH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3Atc3VtbWFyeXtiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWxpZ2h0KTsgcGFkZGluZzozcHggMHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgPiBkaXYgeyBtYXJnaW46IDhweCAwcHg7IGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgPiBzdHJvbmd7Zm9udC13ZWlnaHQ6IDUwMDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBtaW4td2lkdGg6IDcwcHg7fVxyXG4gICAgICAgID4gc3BhbntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 69194:
/*!***********************************************************************************!*\
  !*** ./src/app/components/top-links-predictor/top-links-predictor.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sec-services {\n  padding: 0px;\n  margin-bottom: 2px;\n  position: relative;\n}\n.sec-services ion-slide {\n  margin: auto 0px;\n}\n.sec-services ion-slide > div {\n  padding: 5px;\n  border-right: 1px solid #ddd;\n  height: 100%;\n  width: 100%;\n}\n.sec-services ion-slide > div.router-link-active {\n  background: var(--ion-color-secondary-light);\n}\n.sec-services figure {\n  border-radius: 0px;\n  border: 0px;\n  background: 0px;\n  margin: 0px;\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: auto;\n}\n.sec-services figure img {\n  height: 40px;\n}\n.sec-services h6 {\n  font-weight: 500;\n}\n.sec-services .top-pkg-cont {\n  font-weight: 700;\n  position: fixed;\n  left: 0px;\n  width: 100%;\n  bottom: 0px;\n  z-index: 9;\n  background: #fff;\n  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);\n}\n.sec-services .top-pkg-cont ion-grid ion-col {\n  padding: 8px 12px;\n}\n.sec-services .top-pkg-cont ion-grid ion-col + ion-col {\n  border-left: 1px solid #ddd;\n}\n.sec-services .top-pkg-cont .pkg-name {\n  padding: 5px;\n  text-transform: uppercase;\n}\n.sec-services .top-pkg-cont .pkg-name span {\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.sec-services .top-pkg-cont .pkg-btn {\n  color: #fff;\n  border-radius: 5px;\n  background: var(--ion-color-success);\n  text-align: center;\n  padding: 5px;\n  text-transform: uppercase;\n  font-weight: 700;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1saW5rcy1wcmVkaWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBZSxZQUFBO0VBQWMsa0JBQUE7RUFBb0Isa0JBQUE7QUFHakQ7QUFGSTtFQUFXLGdCQUFBO0FBS2Y7QUFKUTtFQUFLLFlBQUE7RUFBYyw0QkFBQTtFQUE4QixZQUFBO0VBQWMsV0FBQTtBQVV2RTtBQVRRO0VBQXlCLDRDQUFBO0FBWWpDO0FBVkk7RUFBUSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsZUFBQTtFQUFpQixXQUFBO0VBQWEsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtBQW9CNUg7QUFuQlE7RUFBSSxZQUFBO0FBc0JaO0FBcEJJO0VBQUcsZ0JBQUE7QUF1QlA7QUFwQkk7RUFBYyxnQkFBQTtFQUFtQixlQUFBO0VBQWlCLFNBQUE7RUFBVyxXQUFBO0VBQWEsV0FBQTtFQUFhLFVBQUE7RUFBWSxnQkFBQTtFQUFrQiw4Q0FBQTtBQThCekg7QUE1Qlk7RUFBUSxpQkFBQTtBQStCcEI7QUE5Qlk7RUFBa0IsMkJBQUE7QUFpQzlCO0FBL0JRO0VBQVksWUFBQTtFQUFjLHlCQUFBO0FBbUNsQztBQWxDWTtFQUFLLGdCQUFBO0VBQWtCLDBCQUFBO0FBc0NuQztBQXBDUTtFQUFTLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixvQ0FBQTtFQUFzQyxrQkFBQTtFQUFvQixZQUFBO0VBQWMseUJBQUE7RUFBMkIsZ0JBQUE7RUFBa0IsWUFBQTtBQThDdksiLCJmaWxlIjoidG9wLWxpbmtzLXByZWRpY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VjLXNlcnZpY2VzeyBwYWRkaW5nOiAwcHg7IG1hcmdpbi1ib3R0b206IDJweDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW9uLXNsaWRleyBtYXJnaW46IGF1dG8gMHB4O1xyXG4gICAgICAgID5kaXZ7cGFkZGluZzogNXB4OyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlO31cclxuICAgICAgICA+IGRpdi5yb3V0ZXItbGluay1hY3RpdmV7YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1saWdodCk7fVxyXG4gICAgfVxyXG4gICAgZmlndXJleyBib3JkZXItcmFkaXVzOiAwcHg7IGJvcmRlcjogMHB4OyBiYWNrZ3JvdW5kOiAwcHg7IG1hcmdpbjogMHB4OyBkaXNwbGF5OiBibG9jazsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGltZ3toZWlnaHQ6IDQwcHh9XHJcbiAgICB9XHJcbiAgICBoNntmb250LXdlaWdodDogNTAwO31cclxuXHJcbiAgICBcclxuICAgIC50b3AtcGtnLWNvbnR7Zm9udC13ZWlnaHQ6IDcwMDsgIHBvc2l0aW9uOiBmaXhlZDsgbGVmdDogMHB4OyB3aWR0aDogMTAwJTsgYm90dG9tOiAwcHg7IHotaW5kZXg6IDk7IGJhY2tncm91bmQ6ICNmZmY7IGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgaW9uLWdyaWR7IFxyXG4gICAgICAgICAgICBpb24tY29se3BhZGRpbmc6IDhweCAxMnB4O31cclxuICAgICAgICAgICAgaW9uLWNvbCArIGlvbi1jb2x7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO31cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBrZy1uYW1leyAgcGFkZGluZzogNXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBzcGFue2ZvbnQtd2VpZ2h0OiA0MDA7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO30gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBrZy1idG57Y29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDVweDsgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDVweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgZm9udC13ZWlnaHQ6IDcwMDsgaGVpZ2h0OiAxMDAlO30gXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 91007:
/*!***************************************************************!*\
  !*** ./src/app/components/top-links/top-links.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slide figure {\n  margin: 0px;\n  padding: 0px 8px;\n}\nion-slide figure img {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n}\nion-slides {\n  margin: 0px -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFPLFdBQUE7RUFBYSxnQkFBQTtBQUV4QjtBQURJO0VBQUksV0FBQTtFQUFhLFlBQUE7RUFBYyxpQkFBQTtBQU1uQztBQUhBO0VBQVcsZ0JBQUE7QUFPWCIsImZpbGUiOiJ0b3AtbGlua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGV7XHJcbiAgICBmaWd1cmV7bWFyZ2luOiAwcHg7IHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgICBpbWd7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgb2JqZWN0LWZpdDogY292ZXI7fVxyXG4gICAgfVxyXG59XHJcbmlvbi1zbGlkZXN7bWFyZ2luOiAwcHggLThweDt9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 99786:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counselling/counselling.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section> \n  <ion-grid fixed class=\"box-prog\">\n    <ion-row class=\"m-0\">\n      <ion-col (click)=\"ionSelectProgram('t1')\" [ngClass]=\"{selected: 't1' === currentSelected}\">\n        <div>\n          <div>\n            <img\n              src=\"https://app.moksh16.in/application-centre/assets/mobility-app/category-contents/12/online-help.png\" />\n          </div>\n          <div>\n            <ion-label>FREE Online Counselling</ion-label>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"ionSelectProgram('t2')\" [ngClass]=\"{selected: 't2' === currentSelected}\">\n        <div>\n          <div>\n            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/category-contents/13/support.png\" />\n          </div>\n          <div>\n            <ion-label>Counselling over telephone</ion-label>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col (click)=\"ionSelectProgram('t3')\" [ngClass]=\"{selected: 't3' === currentSelected}\">\n        <div>\n          <div>\n            <img\n              src=\"https://app.moksh16.in/application-centre/assets/mobility-app/category-contents/15/help-(1).png\" />\n          </div>\n          <div>\n            <ion-label>Personal Counselling</ion-label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</section>\n\n<section class=\"tab-content white-box mt-2\">\n  <div [ngClass]=\"{active: currentSelected == 't1'}\">\n    <h6>Attend MOKSH FREE Online Counseling Session</h6>\n\n    <ion-grid fixed class=\"event-list\" *ngIf=\"arrWebinars?.length > 0\">\n      <ion-row *ngFor=\"let item of arrWebinars\" [ngClass]=\"{'hide': currentDateTime > item.endTime, 'live':(currentDateTime | date:'M/d/yy, H:mm:ss') > (item.startTime | date:'M/d/yy, H:mm:ss') && (currentDateTime | date:'M/d/yy, H:mm:ss') < (item.endTime | date:'M/d/yy, H:mm:ss')}\">\n\n        <ion-col size=\"12\" *ngIf=\"item.image\">\n          <h5 class=\"text-left\">{{item.subject}}</h5>          \n          <figure>\n            <img src=\"https://crm.moksh16.in/gotowebinar/banners/{{item.webinarSysId}}/{{item.image}}\" class=\"w-100\">\n          </figure>\n        </ion-col>\n        <ion-col class=\"event-date\">\n          <div class=\"date-cont\">\n            <div>{{item.startTime | date:'MMM'}}</div>\n            <h4>{{item.startTime | date:'d'}}</h4>\n            <ion-text>Live</ion-text>\n          </div>\n        </ion-col>  \n        <ion-col class=\"event-info\">          \n          \n          <h5 class=\"text-left\" *ngIf=\"!item.image\">{{item.subject}}</h5>\n          <p *ngIf=\"!item.image\">{{item.description}}</p>\n          <ion-text>\n            <ul class=\"border-list\">\n              <li><span class=\"event-time2\"> {{item.startTime | date:'EEEE'}}</span></li>\n              <li>{{item.startTime | date:'h:mm'}} - {{item.endTime | date:'h:mm a'}}</li>\n            </ul>            \n          </ion-text>\n          <div class=\"btn-cont\" *ngIf=\"!item.joinUrl; else elseBtn\">\n            <ion-button (click)=\"onRegister(item.webinarSysId, arrUserData.rawLeadID, item.subject, item.webinarId, item.startTime)\" color=\"secondary\" shape=\"round\">Register Now\n              \n            </ion-button>\n          </div>\n          <ng-template #elseBtn>\n            <div class=\"btn-cont\">              \n              <ion-button color=\"success\" shape=\"round\"  (click)=\"onClickJoinWebinar(item.joinUrl)\" >Join Now</ion-button>\n              <ion-button color=\"success\" fill=\"clear\">Registered</ion-button>\n            </div>\n          </ng-template>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"loader-cont\" *ngIf=\"isDataLoading\">\n      <ion-spinner name=\"lines-small\"></ion-spinner>\n    </div>\n\n    <ng-container *ngIf=\"arrWebinars?.length == 0\">\n      <div class=\"no-data text-center\">\n        <h3>No live sessions arranged!</h3>\n        <ion-icon name=\"sad-outline\"></ion-icon>\n        <h5>Most popular Live on-line counselling sessions of MOKSH are not scheduled for the day. You may opt for telephonic \n            sessions or visit our nearest branch for One to one academic counselling. .</h5>        \n      </div>\n    </ng-container>\n    <div>\n      <p>MOKSH CEO personally conducts online group counselling for all the students aspiring to become a globally\n        accepted Doctors. Till 2020, his webinars have been attended by more than whooping 67,000 students across\n        the country! You may also join for a live interaction with him!</p>\n      <p>\n        Our experts would soon give you call and explain you the system to join this highly sophisticated system.\n      </p>        \n      <div *ngIf=\"arrWebinarVideos?.length > 0\">\n      <h5>Watch latest MOKSH counselling sessions</h5>\n      <div class=\"offices\">\n        <ion-grid fixed>\n          <ion-row *ngFor=\"let item of arrWebinarVideos\" (click)=\"playVideo(item.videoLink)\">\n            <ion-col size=\"4\">\n              <img alt=\"\" src=\"{{this.webAssetsPath}}/{{item.videoId}}/{{item.thumbnailImage}}\">        \n            </ion-col>\n            <ion-col size=\"8\">\n              <h6>{{item.videoTitle}}</h6>              \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div [ngClass]=\"{active: currentSelected == 't2'}\">\n    <div>\n      <p>\n        In case you have attended the online counselling session and wish to take your exploration further or you are\n        connecting with MOKSH for the first time and need a quick guidance session, you may call on our COUNSELLING\n        HOTLINE:\n      </p>\n      <ion-button (click)=\"onClickCall()\" expand=\"block\" shape=\"round\">\n        Speak to Career Assistant\n      </ion-button>\n      <br>\n      <h5>Instant Support</h5>\n      <a href=\"https://wa.me/91{{counsellorWhatsAppNo}}&amp;text=\" target=\"_blank\" class=\"btn-whatsapp\">Chat on Whats App <ion-icon\n          name=\"logo-whatsapp\"></ion-icon></a>\n    </div>\n  </div>\n  <div [ngClass]=\"{active: currentSelected == 't3'}\">\n    <div>\n      <p>\n        Due to COVID 19 pandemic, most of the personal counselling sessions have been organized on Zoom application with\n        our expert counsellors. We advised 3000+ students on Zoom video calls in 2020 alone! However, just in case, you\n        wish to have a face to face counselling, you may visit our nearest MOKSH branch.\n      </p>\n      <p>\n        MOKSH offers the largest network of branches & counselling centres across the India in more than 50 cities. On\n        an average, every 15 days, a new MOKSH branch opens up. By the end of 2022, we are aiming to cover 100 cities in\n        India.\n      </p>\n      <p>\n        You are in a position to locate your nearest suitable branch and visit for personal counselling as well.\n      </p>\n    </div>   \n    <ion-button [routerLink]=\"['/home/other-pages/branch-locator']\" routerLinkActive=\"router-link-active\"  expand=\"block\" >\n      Select Nearby Branch & Book Slot\n    </ion-button>\n  </div>\n</section>");

/***/ }),

/***/ 86983:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-short-cut/footer-short-cut.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<section class=\"footer-links\">\r\n  <div class=\"main-cont\">        \r\n      <!-- <ion-grid>\r\n          <ion-row>\r\n              <ion-col>\r\n                  <ion-button expand=\"block\" color=\"success\" (click)=\"apply()\" routerLinkActive=\"router-link-active\" >Apply Now\r\n                      <ion-ripple-effect></ion-ripple-effect>\r\n                    </ion-button>\r\n              </ion-col>\r\n              <ion-col>\r\n                  <ion-button expand=\"block\" color=\"primary\">Get free Counselling\r\n                      <ion-ripple-effect></ion-ripple-effect>\r\n                    </ion-button>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid> -->\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <!-- <ion-col [routerLink]=\"['/home/welcome']\" routerLinkActive=\"router-link-active\" >\r\n                <div><ion-icon name=\"home\"></ion-icon></div>\r\n                <div><ion-label>Home</ion-label></div>\r\n            </ion-col> -->\r\n            <ion-col [routerLink]=\"['/home/college-predictor']\" routerLinkActive=\"router-link-active\" >\r\n                <div><ion-icon name=\"fitness-outline\"></ion-icon></div>\r\n                <div><ion-label>Predictor</ion-label></div>\r\n            </ion-col>\r\n            <ion-col [routerLink]=\"['/home/counselling']\" routerLinkActive=\"router-link-active\" >\r\n                <div><ion-icon name=\"play-circle\"></ion-icon></div>\r\n                <div><ion-label>Counselling</ion-label></div>\r\n            </ion-col>         \r\n            <ion-col [routerLink]=\"['/home/welcome']\" routerLinkActive=\"router-link-active\">\r\n                <div><ion-icon name=\"medkit\"></ion-icon></div>\r\n                <!-- <div><ion-icon name=\"rocket\"></ion-icon></div> -->\r\n                <div><ion-label>MBBS Abroad</ion-label></div>\r\n            </ion-col>\r\n            <ion-col [routerLink]=\"['/home/online-coaching']\" routerLinkActive=\"router-link-active\" >\r\n                <div><ion-icon name=\"school\"></ion-icon></div>\r\n                <div><ion-label>Coaching</ion-label></div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isOpen}\">\r\n    <div class=\"toogle-cont\">\r\n        <ion-text class=\"btn-close\" (click)=\"tooglePanelClose()\"><ion-icon name=\"close-outline\"></ion-icon></ion-text>\r\n        <div *ngIf=\"categoryType=='abroad'\">\r\n            <div><h4>Choose your desired career</h4></div>\r\n            <ion-grid fixed class=\"padding-md\">\r\n                <ion-row>\r\n                    <ion-col size=\"6\" (click)=\"applyNow(null,1,1)\">\r\n                        <div class=\"white-box\">\r\n                            <img src=\"../../assets/welcome/img-mbbs-abroad.jpg\" alt=\"\">\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\" (click)=\"applyNow(6,null,2)\">\r\n                        <div class=\"white-box\">\r\n                            <img src=\"../../assets/welcome/img-study-germany.jpg\" alt=\"\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n        <div *ngIf=\"categoryType=='predictor'\">\r\n            <div><h4>Choose your desired career</h4></div>\r\n            <ion-grid fixed class=\"padding-md\">\r\n                <ion-row>\r\n                    <ion-col size=\"6\" [routerLink]=\"['/home/college-predictor/predictor']\" routerLinkActive=\"router-link-active\" >\r\n                        <div class=\"white-box\">\r\n                            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/NEET-Image.jpg\" alt=\"\">\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\">\r\n                        <div class=\"white-box\">\r\n                            <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/home/JEE-Image.jpg\" alt=\"\">\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ 32517:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer>\r\n    <div class=\"main-cont\">\r\n        <div class=\"text-center\">\r\n      <small>  © 2012-{{currentYear}} MOXSH OVERSEAS EDUCON PRIVATE LIMITED</small>\r\n    </div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ 97911:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\" (click)=\"back()\" *ngIf=\"isBack\" [ngClass]=\"{noMenu: isMenu==false}\"></ion-back-button>\r\n      <ion-menu-button auto-hide=\"false\" *ngIf=\"isMenu\" color=\"dark\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ul class=\"nav-list\">\r\n      <li class=\"nav-whatsapp\"><a href=\"https://wa.me/91{{counsellorWhatsAppNo}}&amp;text=\" target=\"_blank\">\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n        </a></li>\r\n      <li class=\"is{{isOpen}}\" (click)=\"navNotification()\">\r\n        <ion-badge color=\"danger\">{{newNotificationCounter}}</ion-badge>\r\n        <a><ion-icon name=\"notifications-outline\"></ion-icon></a>\r\n      </li>\r\n      <li><a (click) = \"navHome()\"> <ion-icon name=\"home-outline\"></ion-icon></a></li>\r\n      <!-- <li class=\"nav-home\"><a (click)=\"navHome()\"> <img src=\"../../assets/moksh-logo-header.png\" /> </a></li> -->\r\n    </ul>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<section class=\"toogle-panel top notification-cont\" [ngClass]=\"{isOpen: isOpen}\">\r\n  <div class=\"toogle-cont\">\r\n    <ion-text class=\"btn-close\" [ngClass]=\"{'active': isOpen}\">\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ion-text>\r\n    <ion-list>      \r\n      <ion-item class=\"ion-no-padding mod{{item.moduleId}} read{{item.isRead}}\" lines=\"none\" *ngFor=\"let item of arrNotifications\" (click)=\"actionRead(item.notificationId)\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-img [src]=\"item.image\"></ion-img>\r\n        </ion-avatar>\r\n        <ion-label>                 \r\n          <p [innerHTML]=item.message></p>\r\n        </ion-label>\r\n      </ion-item>            \r\n    </ion-list>\r\n  </div>\r\n</section>\r\n\r\n\r\n");

/***/ }),

/***/ 41633:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\r\n    <ion-title>{{modalTitle}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"ion-padding\">\r\n  <section class=\"text-justify modal-text-scroll\" [innerHTML] = \"modalContent\"></section>\r\n\r\n  <section class=\"quick-contact\">\r\n    <h6 class=\"hdng-line\"><span>Get in touch with us</span></h6>\r\n    <ion-grid fixed class=\"box-prog\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" class=\"call\" (click)=\"onClickCall()\">\r\n          <div>\r\n            <div><ion-icon name=\"call-outline\"></ion-icon></div>\r\n            <div>\r\n              <ion-label>Quick Connect</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"whatsapp\" (click)=\"onClickWhatsApp()\">\r\n          <div>\r\n            <div><ion-icon name=\"logo-whatsapp\"></ion-icon></div>\r\n            <div>\r\n              <ion-label>Whatsapp Chat</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"counselling\" (click)=\"onClickCounselling()\" >\r\n          <div>\r\n            <div><ion-icon name=\"laptop-outline\"></ion-icon></div>\r\n            <div>\r\n              <ion-label>Live Counselling</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"branch\"   (click)=\"onClickBrnach()\" >\r\n          <div>\r\n            <div><ion-icon name=\"location-outline\"></ion-icon></div>\r\n            <div>\r\n              <ion-label>Locate Branch</ion-label>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </section>\r\n  \r\n</ion-content>");

/***/ }),

/***/ 10722:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-steps/nav-steps.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<section class=\"top-summary pl-main\" *ngIf=\"arrAppUniversities.universityName!=''\">\r\n  <div> <strong>University</strong>  <span>: {{arrAppUniversities.universityName}}</span> </div>\r\n  <div> <strong>Country</strong>  <span>: {{arrAppUniversities.countryName}}</span> </div>\r\n</section>\r\n\r\n  <ul class=\"step-list\">\r\n    <li [ngClass]=\"{completed: arrSteps.personalDetails}\">\r\n      <div>\r\n        <a [routerLink]=\"['/home/application-center/personal-details']\" routerLinkActive=\"router-link-active\">\r\n          <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.personalDetails; else elsepd\"></ion-icon>\r\n          <ng-template #elsepd>\r\n            <ion-icon name=\"ellipse\"></ion-icon>\r\n          </ng-template>\r\n          <span>Personal Details</span>\r\n        </a>\r\n      </div>\r\n    </li>\r\n    <li [ngClass]=\"{completed: arrSteps.academicDetails}\">\r\n      <div>\r\n      <a [routerLink]=\"['/home/application-center/academic-details',applicationId]\"\r\n        routerLinkActive=\"router-link-active\">\r\n        <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.academicDetails; else elsepd\"></ion-icon>\r\n        <ng-template #elsepd>\r\n          <ion-icon name=\"ellipse\"></ion-icon>\r\n        </ng-template>\r\n        <span>Academic Details</span>\r\n      </a>\r\n    </div>\r\n    </li>    \r\n    <li [ngClass]=\"{completed: arrSteps.serviceSelection}\">\r\n      <div>\r\n      <a [routerLink]=\"['/home/application-center/service-selection',applicationId]\"\r\n        routerLinkActive=\"router-link-active\">\r\n        <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.serviceSelection; else elsepd\"></ion-icon>\r\n        <ng-template #elsepd>\r\n          <ion-icon name=\"ellipse\"></ion-icon>\r\n        </ng-template>\r\n        <span>Service Selection</span>\r\n      </a>\r\n      </div>\r\n    </li>\r\n    <li [ngClass]=\"{completed: arrSteps.payment}\">\r\n      <div>\r\n      <a [routerLink]=\"['/home/application-center/payment-selection',applicationId]\"\r\n        routerLinkActive=\"router-link-active\">\r\n        <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.payment; else elsepd\"></ion-icon>\r\n        <ng-template #elsepd>\r\n          <ion-icon name=\"ellipse\"></ion-icon>\r\n        </ng-template>\r\n        <span>Make Payment</span>\r\n      </a>\r\n      </div>\r\n    </li>\r\n    <!-- <li [ngClass]=\"{completed: arrSteps.payment}\">\r\n      <div>\r\n        <a>\r\n          <ion-icon name=\"ellipse\"></ion-icon>\r\n          <span>Make Payment</span>\r\n        </a>\r\n      </div>\r\n    </li> -->\r\n    <li [ngClass]=\"{completed: arrSteps.documentsUpload}\">\r\n      <div>\r\n      <a [routerLink]=\"['/home/application-center/upload-documents',applicationId]\"\r\n        routerLinkActive=\"router-link-active\">\r\n        <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.documentsUpload; else elsepd\"></ion-icon>\r\n        <ng-template #elsepd>\r\n          <ion-icon name=\"ellipse\"></ion-icon>\r\n        </ng-template>\r\n        <span>Documents Upload</span>\r\n      </a>\r\n    </div>\r\n    </li>\r\n  </ul>\r\n");

/***/ }),

/***/ 26567:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-links-predictor/top-links-predictor.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"sec-services\">\n  <div class=\"top-pkg-cont\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"7\"><div class=\"pkg-name Silver\"><span>Predictor </span>{{packageName}} <span>User</span></div></ion-col>\n        <ion-col size=\"5\" *ngIf=\"packageId < 4\"><div class=\"pkg-btn\" [ngClass]=\"{disabled: packageId > 3}\" (click)=\"onClickUpgrade(packageId,'','')\">Upgrade</div></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-slides [options]=\"slideOpts\" (ionSlideTap)=\"slideChanged()\" #slidesPredictor>\n    <ion-slide>\n      <div [routerLink]=\"['/home/college-predictor/counselling-type',examId]\"  routerDirection=\"root\" routerLinkActive=\"router-link-active\" >\n        <figure >\n          <img src=\"{{imgPath}}/predictor/icons/home.png\">\n        </figure>\n        <h6>Predictor <br>Home</h6>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div [routerLink]=\"['/home/college-predictor/predictor-report']\"  routerLinkActive=\"router-link-active\">\n        <figure >\n          <img src=\"{{imgPath}}/predictor/icons/compass.png\">\n        </figure>\n        <h6>College <br>Predictor</h6>\n      </div>\n    </ion-slide>\n   \n    <ion-slide>\n      <div [routerLink]=\"['/home/college-predictor/personalized-report']\" routerDirection=\"forward\" routerLinkActive=\"router-link-active\">\n        <figure >\n          <img src=\"{{imgPath}}/predictor/icons/icon-report.png\">\n        </figure>\n        <h6>Personalized <br>report</h6>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div [routerLink]=\"['/home/college-predictor/preferential-form']\"  routerDirection=\"forward\" routerLinkActive=\"router-link-active\">\n        <figure >\n          <img src=\"{{imgPath}}/predictor/icons/icon-filling-form.png\">\n        </figure>\n        <h6>Choice <br>Filling Form</h6>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div [routerLink]=\"['/home/college-predictor/predictor-report-stagewise']\" routerLinkActive=\"router-link-active\">\n        <figure >\n          <img src=\"{{imgPath}}/predictor/icons/icon-edit.png\">\n        </figure>\n        <h6>Structured College List</h6>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div [routerLink]=\"['/home/college-predictor/admission-guidance']\" routerLinkActive=\"router-link-active\" >\n        <figure >\n          <img src=\"{{imgPath}}/predictor/icons/desktop-computer.png\">\n        </figure>\n        <h6>Live Admission Guide</h6>\n      </div>\n    </ion-slide>\n    <ion-slide (click)=\"onClickUpgrade(packageId,'/home/college-predictor/mbbs-foundation-course','mfc')\">\n      <div [ngClass]=\"{'router-link-active': selectedURL=='mfc'}\">\n        <figure>\n          <img src=\"{{imgPath}}/predictor/icons/doctor.png\">\n        </figure>\n        <h6>MBBS Foundation Course</h6>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</section>\n\n\n<div class=\"modal-cont modal-poster\" [ngClass]=\"{active: isModal}\">\n  <div class=\"modal-wrapper\">\n    <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>\n    <div class=\"modal-body\">\n      <ion-card class=\"m-0\">\n        <div class=\"modal-text\">\n          <h3>Unlock Premium Plan</h3>\n          <div>To access this feature</div>\n        </div>      \n        <ion-card-content class=\"pt-0\">        \n          <ul class=\"pkg-info mb-0\">\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>National Rank Predictor</span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Full list of AIQ Based College Prediction </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Full list of State Level College Prediction </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Complete Personalized Report </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>AIQ & SLQ based Choice Filling Form </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Hand holding & guidance throughout Indian counseling Sessions </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span> Free Access to MBBS Foundation Course </span> </li>\n          </ul>          \n          <div class=\"btn-cont mt-2 mb-0\">\n            <ion-button [routerLink]=\"['/home/college-predictor/predictor-checkout','upgrade']\" routerLinkActive=\"router-link-active\"  expand=\"block\">Upgrade Plan</ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 36414:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-links/top-links.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"sec-services\">\r\n  <ion-slides [options]=\"slideOpts\" (ionSlideTap)=\"slideChanged()\" #slides>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/top-links/career-plan']\"  routerLinkActive=\"router-link-active\" >\r\n        <figure class=\"border-radius-50\">\r\n          <ion-icon name=\"trail-sign-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Career Plan</h6>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/country-list']\"  routerLinkActive=\"router-link-active\">\r\n        <figure class=\"border-radius-50\">\r\n          <ion-icon name=\"globe-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Countries</h6>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide >\r\n      <div [routerLink]=\"['/home/top-links/services']\"  routerLinkActive=\"router-link-active\">\r\n        <figure class=\"border-radius-50\">\r\n          <ion-icon name=\"shield-checkmark-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Services</h6>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/top-links/study-cost']\"  routerLinkActive=\"router-link-active\">\r\n        <figure class=\"border-radius-50\">\r\n          <ion-icon name=\"wallet-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Study Cost</h6>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/top-links/scholarship']\"  routerLinkActive=\"router-link-active\">\r\n        <figure class=\"border-radius-50\">\r\n          <ion-icon name=\"school-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Scholarships</h6>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/top-links/cmp']\"  routerLinkActive=\"router-link-active\" >\r\n        <figure class=\"border-radius-50\">\r\n          <ion-icon name=\"book-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>CMP</h6>\r\n      </div>\r\n    </ion-slide>  \r\n  <ion-slide>\r\n    <div [routerLink]=\"['/home/top-links/moksh-pro']\"  routerLinkActive=\"router-link-active\">\r\n      <figure class=\"border-radius-50\">\r\n        <ion-icon name=\"ribbon-outline\"></ion-icon>\r\n      </figure>\r\n      <h6>MOKSH-PRO</h6>\r\n    </div>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <div [routerLink]=\"['/home/top-links/moksh-plus']\"  routerLinkActive=\"router-link-active\">\r\n      <figure class=\"border-radius-50\">\r\n        <ion-icon name=\"bag-add-outline\"></ion-icon>\r\n      </figure>\r\n      <h6>MOKSH-PLUS</h6>\r\n    </div>\r\n  </ion-slide>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/top-links/contact']\"  routerLinkActive=\"router-link-active\">\r\n        <figure class=\"border-radius-50 fig-contact\">\r\n          <ion-icon name=\"call-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Contact</h6>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div [routerLink]=\"['/home/top-links/vlogs']\"  routerLinkActive=\"router-link-active\">\r\n        <figure class=\"border-radius-50 fig-contact\">\r\n          <ion-icon name=\"play-outline\"></ion-icon>\r\n        </figure>\r\n        <h6>Vlogs</h6>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</section>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map