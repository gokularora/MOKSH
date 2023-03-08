(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/home.guard */ 3352);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/user-data.resolver */ 34442);






const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_0__.HomeGuard],
        resolve: {
            userData: _resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_2__.UserDataResolver
        },
        children: [
            {
                path: 'welcome',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_welcome_welcome_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 94309)).then(m => m.WelcomePageModule)
            },
            {
                path: 'country-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_country-list_country-list_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./country-list/country-list.module */ 42746)).then(m => m.CountryListPageModule)
            },
            {
                path: 'user-profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_user-profile_user-profile_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-profile/user-profile.module */ 41874)).then(m => m.UserProfilePageModule)
            },
            {
                path: 'application-center',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_application-center_application-center_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./application-center/application-center.module */ 39386)).then(m => m.ApplicationCenterPageModule)
            },
            {
                path: 'universities',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_universities_universities_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./universities/universities.module */ 88412)).then(m => m.UniversitiesPageModule)
            },
            {
                path: 'universities/:countryID',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_universities_universities_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./universities/universities.module */ 88412)).then(m => m.UniversitiesPageModule)
            },
            {
                path: 'landing-page',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_landing-page_landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing-page/landing-page.module */ 83281)).then(m => m.LandingPagePageModule)
            },
            {
                path: 'top-links',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_top-links_top-links_module_ts-src_app_services_header-title_service_ts-src_app_s-92b8c4")]).then(__webpack_require__.bind(__webpack_require__, /*! ./top-links/top-links.module */ 22064)).then(m => m.TopLinksPageModule)
            },
            {
                path: 'study-germany',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_study-germany_study-germany_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./study-germany/study-germany.module */ 66709)).then(m => m.StudyGermanyPageModule)
            },
            {
                path: 'other-pages',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_other-pages_other-pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./other-pages/other-pages.module */ 58215)).then(m => m.OtherPagesPageModule)
            },
            {
                path: 'counselling',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_counselling_counselling_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./counselling/counselling.module */ 17027)).then(m => m.CounsellingPageModule)
            },
            {
                path: 'college-predictor',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-src_app_services_api-predictor_service_ts"), __webpack_require__.e("default-src_app_home_college-predictor_college-predictor_module_ts-src_app_services_loader_se-272a7e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./college-predictor/college-predictor.module */ 70053)).then(m => m.CollegePredictorPageModule)
            },
            {
                path: 'scholarship',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_scholarship_scholarship_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./scholarship/scholarship.module */ 81826)).then(m => m.ScholarshipPageModule)
            },
            {
                path: 'online-coaching',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_online-coaching_online-coaching_module_ts-src_app_services_loader_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./online-coaching/online-coaching.module */ 22830)).then(m => m.OnlineCoachingPageModule)
            },
            {
                path: 'blog',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_blog_blog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./blog/blog.module */ 79876)).then(m => m.BlogPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login-new',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/toast.service */ 84465);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/alert.service */ 25970);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_api_programs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api-programs.service */ 7396);
/* harmony import */ var _services_api_application_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-application.service */ 73064);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _services_api_crm_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/api-crm.service */ 77413);















let HomePage = class HomePage {
    constructor(auth, router, apiProgramsService, apiApplicationService, apiGeneralService, alert, appVersion, toastr, storage, apiCRMService) {
        this.auth = auth;
        this.router = router;
        this.apiProgramsService = apiProgramsService;
        this.apiApplicationService = apiApplicationService;
        this.apiGeneralService = apiGeneralService;
        this.alert = alert;
        this.appVersion = appVersion;
        this.toastr = toastr;
        this.storage = storage;
        this.apiCRMService = apiCRMService;
        this.userName = "";
        this.appLoginID = "";
        this.arrPages = [];
        this.applicationId = 0;
        this.arrSteps = { 'academicDetails': '', 'documentsUpload': '', 'payment': '', 'personalDetails': '', 'serviceSelection': '', 'universityDetails': '' };
        this.arrInterestedPrograms = { 'progInterestId': 0, 'progInterestImage': null, 'programInterest': null };
        this.appCodeVersion = "";
        this.arrCounsellor = [];
        this.counsellorWhatsAppNo = "";
        this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.webAssetsPath;
    }
    ngOnInit() {
        this.appVersion.getVersionNumber().then(resp => { this.appCodeVersion = "v " + resp; });
        this.getNav();
        this.getUserData();
        setTimeout(() => {
            this.getCounsellor();
        }, 1000);
        setTimeout(() => {
            this.GetApplicationSteps();
        }, 1000);
        this.getIntersetedProgram();
    }
    getNav() {
        this.arrPages = [
            { title: 'My Profile', url: '/home/welcome', icon: 'settings-outline', children: [
                    { title: 'Edit Profile', url: '/home/user-profile/edit-profile', icon: '', cid: '4' },
                    { title: 'Change Course Preference', url: '/home/landing-page', icon: '', cid: '4' },
                    { title: 'Change Password', url: '/home/user-profile/change-password', icon: '', cid: '4' },
                ] }
        ];
    }
    onClickApply(countryID, progInterestId, productDepartmentID) {
        this.apiProgramsService.filteredData.countryId = countryID;
        this.apiGeneralService.arrSelection["progInterestId"] = progInterestId;
        if (progInterestId == 1 || progInterestId == 4) {
            this.apiGeneralService.arrSelection["productDepartmentId"] = 1;
        }
        else if (progInterestId == 3 || progInterestId == 5) {
            this.apiGeneralService.arrSelection["productDepartmentId"] = 2;
        }
        this.router.navigate(['/home/country-list']);
        // if(productDepartmentID == 1){
        //   this.router.navigate(['/home/country-list']);  
        // }
        // else if(productDepartmentID == 2){
        //   this.router.navigate(['/home/program-list']);  
        // }    
    }
    getUserData() {
        this.storage.getObject("userdata").then((res) => {
            this.userData = res;
            this.userName = res.firstName + " " + res.lastName;
            this.appLoginID = res.appLoginID;
            this.applicationId = res.applicationID;
            this.apiGeneralService.arrUserData = res;
        });
    }
    logout() {
        this.auth.logout();
    }
    //#region Application Steps Start
    GetApplicationSteps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.applicationId == 0 || this.applicationId == null) {
                this.arrSteps = { 'academicDetails': '', 'documentsUpload': '', 'payment': '', 'personalDetails': '', 'serviceSelection': '', 'universityDetails': '' };
            }
            else {
                yield this.apiApplicationService.getApplicationSteps().then(resp => {
                    this.arrSteps = resp;
                }).catch(err => {
                    console.log("GetApplicationSteps==>" + err);
                    if (err.status == "401") {
                        this.auth.logout();
                    }
                });
            }
        });
    }
    onClickApplication(navUrl) {
        if (this.applicationId == 0) {
            this.presentAlert();
        }
        else {
            this.router.navigate(navUrl);
        }
    }
    onClickPersonalDetails() {
        if (this.applicationId == 0) {
            this.presentAlert();
        }
        else {
            this.router.navigate(['/home/application-center/personal-details']);
        }
    }
    onClickAcademicDetails() {
        if (this.applicationId == 0) {
            this.presentAlert();
        }
        else {
            this.router.navigate(['/home/application-center/academic-details', this.applicationId]);
        }
    }
    onClickDocuments() {
        if (this.applicationId == 0) {
            this.presentAlert();
        }
        else {
            this.router.navigate(['/home/application-center/upload-documents', this.applicationId]);
        }
    }
    onClickServiceSelection() {
        if (this.applicationId == 0) {
            this.presentAlert();
        }
        else {
            this.router.navigate(['/home/application-center/service-selection', this.applicationId]);
        }
    }
    onClickPayment() {
        if (this.applicationId == 0) {
            this.presentAlert();
        }
        else {
            this.router.navigate(['/home/application-center/payment-selection', this.applicationId]);
        }
    }
    //#endregion
    getIntersetedProgram() {
        var degreeID = (this.apiGeneralService.arrSelection == null ? 1 : this.apiGeneralService.arrSelection["degreeId"]);
        var progInterestId = (this.apiGeneralService.arrSelection == null ? 1 : this.apiGeneralService.arrSelection["progInterestId"]);
        let postData = { "degreeId": degreeID, "progInterestId": progInterestId, "IsActive": true };
        this.apiProgramsService.getInterestedProgram(JSON.stringify(postData)).then(resp => {
            this.arrInterestedPrograms = resp[0];
            console.log(this.arrInterestedPrograms);
        })
            .catch(err => {
            console.log("getInterestedPrograms: " + err);
        });
    }
    presentAlert() {
        this.alert.basciAlert("You have not applied for STUDY ABROAD!", "", "Apply now for STUDY ABROAD & complete your dream", ['OK']);
    }
    getCounsellor() {
        if (this.userData["leadID"] == 0 && this.userData["rawLeadID"] == 0) {
            return false;
        }
        var leadId = null;
        var rawLeadId = null;
        if (this.userData["leadID"] != 0 && this.userData["leadID"] != null && this.userData["leadID"] != "") {
            leadId = this.userData["leadID"];
        }
        else {
            rawLeadId = this.userData["rawLeadID"];
        }
        let postData = { "leadId": leadId, "rawLeadId": rawLeadId };
        this.apiCRMService.getLeadCounsellor(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrCounsellor = resp[0];
                this.counsellorWhatsAppNo = this.arrCounsellor["empMob2"];
                this.storage.setObject("counsellorData", this.arrCounsellor);
                this.apiCRMService.arrCounsellor = this.apiGeneralService.arrCounsellor = this.arrCounsellor;
            }
        });
    }
    //#region Share and Rate
    ShareWhatsapp() {
        this.isWALoading = true;
        var inviteCode = this.userData["referralCode"];
        var message = "I’m inviting you to use MOKSH Career Planner, it will help you to Predict your All India Rank & colleges for admission based on NEET-UG score. Also, you can select and apply directly to 150+ global medical universities in 17+ countries. Guaranteed Admission to MBBS with career plan right up to PG. *Here's my Referral code (" + inviteCode + ")*";
        var file = this.webAssetsPath + "mobility-app/invite-friend/img-invite.jpg";
        var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.linkAndroidApp;
        this.apiGeneralService.fnSocialShare(message, "", file, url, "whatsapp").then(resp => {
            if (resp == false) {
                this.toastr.toastError("Sorry! Unable to share.");
            }
            this.isWALoading = false;
        });
    }
    onClickRate() {
        window.open('https://play.google.com/store/apps/details?id=com.moksh16.mobility', '_system');
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _services_api_programs_service__WEBPACK_IMPORTED_MODULE_7__.ApiProgramsService },
    { type: _services_api_application_service__WEBPACK_IMPORTED_MODULE_8__.ApiApplicationService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__.AppVersion },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _services_api_crm_service__WEBPACK_IMPORTED_MODULE_11__.ApiCRMService }
];
HomePage.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 34442:
/*!*************************************************!*\
  !*** ./src/app/resolvers/user-data.resolver.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataResolver": () => (/* binding */ UserDataResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 37556);



let UserDataResolver = class UserDataResolver {
    constructor(authService) {
        this.authService = authService;
    }
    resolve() {
        console.log('Hello');
        return this.authService.getUserData();
    }
};
UserDataResolver.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
UserDataResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserDataResolver);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menu-pane-visible {\n  display: flex;\n  position: relative;\n}\n\nion-router-outlet {\n  display: flex;\n  position: relative;\n  flex: 1;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n  --padding-bottom:0px ;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-light);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.header {\n  padding: 15px 20px;\n  line-height: 20px;\n  background: #eee;\n  margin-bottom: 5px;\n  position: relative;\n}\n\n.header figure {\n  display: inline-block;\n  width: 50px;\n  margin: 0px;\n  position: relative;\n  top: 3px;\n}\n\n.header img {\n  width: 100%;\n}\n\n.header .header-info {\n  display: inline-block;\n  padding-left: 10px;\n  font-size: 0.9em;\n}\n\n.header small {\n  display: block;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.header ion-icon {\n  position: absolute;\n  right: 10px;\n  font-size: 1.2rem;\n  color: #999;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.header .app-version {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  font-size: 10px;\n  color: #999;\n}\n\n.detais-cont {\n  margin-top: 2em;\n}\n\n.detais-cont > description {\n  display: block;\n}\n\n.detais-cont > description + description {\n  margin-top: 2rem;\n}\n\n.custom-menu {\n  position: relative;\n  margin-left: 15px;\n  color: #fff;\n  display: block;\n}\n\n.custom-menu .item-heading {\n  margin: 0px;\n  --padding-start: 12px !important;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.custom-menu .item-heading .menu-icon {\n  font-size: 1.4rem;\n  margin-right: 10px;\n}\n\n.custom-menu .item-heading ion-icon + ion-icon {\n  transition: ease all 0.3s;\n  margin-right: 2px;\n}\n\n.custom-menu .item-heading + ion-menu-toggle > div {\n  max-height: 0px;\n  visibility: hidden;\n  transition: ease all 0.5s;\n}\n\n.custom-menu .item-heading.active-parent + ion-menu-toggle > div {\n  max-height: 240px;\n  visibility: visible;\n  transition: ease all 0.5s;\n}\n\n.custom-menu .item-heading.active-parent ion-icon + ion-icon {\n  transition: ease all 0.3s;\n  transform: rotate(-180deg);\n}\n\n.custom-menu ion-label {\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin: 0px;\n  font-size: 0.9rem;\n}\n\n.custom-menu ion-label.highlight {\n  background: var(--ion-color-secondary);\n  color: #000;\n  padding: 5px 8px;\n  border-radius: 3px;\n  display: inline-block !important;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.custom-menu ion-item {\n  --min-height: 35px !important;\n  --padding-start:45px !important;\n  --background:transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.custom-menu ion-list {\n  background: transparent;\n}\n\n.custom-menu .custom-menu-wrapper {\n  min-height: 100%;\n}\n\n.custom-menu .custom-menu-wrapper ion-list {\n  padding: 10px 0px;\n  border-bottom: 1px solid #eee;\n}\n\n.custom-menu .custom-menu-wrapper ion-list ion-item {\n  --padding-end:8px;\n}\n\n.custom-menu .custom-menu-wrapper ion-list ion-item.router-link-active {\n  color: var(--ion-color-primary);\n}\n\n.custom-menu .other ion-item {\n  --padding-start:12px !important;\n}\n\n.custom-menu .other ion-icon {\n  margin-right: 10px;\n}\n\n.social-icons-cont {\n  margin-bottom: 0px;\n  background: #fff;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  left: 0px;\n  padding: 7px 0px;\n  border-top: 1px solid #eee;\n}\n\n.step-list.vert > li {\n  pointer-events: none;\n}\n\n.step-list.vert > li.completed {\n  pointer-events: unset;\n}\n\n.step-list.vert > li.completed + li {\n  pointer-events: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0U7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBSkY7O0FBT0U7RUFDSSwyRUFBQTtFQUE2RSxxQkFBQTtBQUhuRjs7QUFLSTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBRk47O0FBSUk7RUFDRSxpQ0FBQTtBQUROOztBQUdJO0VBQVEsa0JBQUE7RUFBbUIsaUJBQUE7RUFBbUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0Isa0JBQUE7QUFLeEY7O0FBSk07RUFBTyxxQkFBQTtFQUF1QixXQUFBO0VBQVksV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFFBQUE7QUFXakY7O0FBVk07RUFBSSxXQUFBO0FBYVY7O0FBWk07RUFBYSxxQkFBQTtFQUF1QixrQkFBQTtFQUFvQixnQkFBQTtBQWlCOUQ7O0FBaEJNO0VBQU0sY0FBQTtFQUFnQixnQkFBQTtFQUFrQix5QkFBQTtBQXFCOUM7O0FBcEJNO0VBQVMsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxRQUFBO0VBQVUsMkJBQUE7QUE0QjFGOztBQTNCTTtFQUFhLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxZQUFBO0VBQWMsZUFBQTtFQUFpQixXQUFBO0FBa0NuRjs7QUFoQ0k7RUFBYSxlQUFBO0FBb0NqQjs7QUFuQ007RUFBZSxjQUFBO0FBc0NyQjs7QUFyQ007RUFBNEIsZ0JBQUE7QUF3Q2xDOztBQXJDSTtFQUFhLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxjQUFBO0FBNENyRTs7QUEzQ007RUFBYyxXQUFBO0VBQWEsZ0NBQUE7RUFBa0Msa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IseUJBQUE7QUFrRHpHOztBQWpEUTtFQUFXLGlCQUFBO0VBQW1CLGtCQUFBO0FBcUR0Qzs7QUFwRFE7RUFBa0IseUJBQUE7RUFBMkIsaUJBQUE7QUF3RHJEOztBQXZEUTtFQUEwQixlQUFBO0VBQWtCLGtCQUFBO0VBQW9CLHlCQUFBO0FBNER4RTs7QUEzRFE7RUFBeUMsaUJBQUE7RUFBbUIsbUJBQUE7RUFBcUIseUJBQUE7QUFnRXpGOztBQTlEVTtFQUFrQix5QkFBQTtFQUEyQiwwQkFBQTtBQWtFdkQ7O0FBL0RNO0VBQVUsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBaUIsV0FBQTtFQUFhLGlCQUFBO0FBcUVuRTs7QUFwRU07RUFBWSxzQ0FBQTtFQUF3QyxXQUFBO0VBQWEsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsZ0NBQUE7RUFBaUMsMkJBQUE7RUFBQSxzQkFBQTtBQTRFOUk7O0FBMUVNO0VBQVMsNkJBQUE7RUFBK0IsK0JBQUE7RUFBaUMsd0JBQUE7RUFBMEIsZ0JBQUE7RUFBa0IseUJBQUE7QUFpRjNIOztBQWhGTTtFQUFTLHVCQUFBO0FBbUZmOztBQWxGSztFQUFxQixnQkFBQTtBQXFGMUI7O0FBcEZNO0VBQVMsaUJBQUE7RUFBa0IsNkJBQUE7QUF3RmpDOztBQXZGUTtFQUFTLGlCQUFBO0FBMEZqQjs7QUF6RlE7RUFBcUIsK0JBQUE7QUE0RjdCOztBQXZGTztFQUFTLCtCQUFBO0FBMEZoQjs7QUF6Rk87RUFBUyxrQkFBQTtBQTRGaEI7O0FBekZJO0VBQW1CLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLFFBQUE7RUFBVSxXQUFBO0VBQWEsU0FBQTtFQUFXLGdCQUFBO0VBQWtCLDBCQUFBO0FBb0dySTs7QUFsR0k7RUFBcUIsb0JBQUE7QUFzR3pCOztBQXJHTTtFQUFZLHFCQUFBO0FBd0dsQjs7QUF2R007RUFBUSxxQkFBQTtBQTBHZCIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kcHJpbWFyeS1jb2xvcjogI2UzMWUyNDtcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZlY2MwMDtcclxuJGxpbmstY29sb3I6ICMwNDQ3YTM7XHJcblxyXG4ubWVudS1wYW5lLXZpc2libGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBpb24tcm91dGVyLW91dGxldCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpOyAtLXBhZGRpbmctYm90dG9tOjBweFxyXG4gICAgfSAgICAgIFxyXG4gICAgaW9uLW5vdGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICBcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tbGlnaHQpO1xyXG4gICAgfSAgICAgIFxyXG4gICAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVye3BhZGRpbmc6MTVweCAyMHB4OyBsaW5lLWhlaWdodDogMjBweDsgYmFja2dyb3VuZDogI2VlZTsgbWFyZ2luLWJvdHRvbTogNXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGZpZ3VyZXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOjUwcHg7IG1hcmdpbjogMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDozcHh9XHJcbiAgICAgIGltZ3t3aWR0aDogMTAwJTt9XHJcbiAgICAgIC5oZWFkZXItaW5mb3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmctbGVmdDogMTBweDsgZm9udC1zaXplOiAwLjllbTt9XHJcbiAgICAgIHNtYWxse2Rpc3BsYXk6IGJsb2NrOyBmb250LXdlaWdodDogNDAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjcpO31cclxuICAgICAgaW9uLWljb257cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTBweDsgZm9udC1zaXplOiAxLjJyZW07IGNvbG9yOiAjOTk5OyB0b3A6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO31cclxuICAgICAgLmFwcC12ZXJzaW9ue3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDEwcHg7IGJvdHRvbTogMTBweDsgZm9udC1zaXplOiAxMHB4OyBjb2xvcjogIzk5OTt9XHJcbiAgICB9XHJcbiAgICAuZGV0YWlzLWNvbnR7bWFyZ2luLXRvcDoyZW07XHJcbiAgICAgID4gZGVzY3JpcHRpb24ge2Rpc3BsYXk6IGJsb2NrfVxyXG4gICAgICA+IGRlc2NyaXB0aW9uICsgZGVzY3JpcHRpb257bWFyZ2luLXRvcDogMnJlbTt9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1tZW51e3Bvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLWxlZnQ6IDE1cHg7IGNvbG9yOiAjZmZmOyBkaXNwbGF5OiBibG9jazs7XHJcbiAgICAgIC5pdGVtLWhlYWRpbmd7bWFyZ2luOiAwcHg7IC0tcGFkZGluZy1zdGFydDogMTJweCAhaW1wb3J0YW50OyBmb250LXNpemU6IDAuOTVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAgICAgLm1lbnUtaWNvbntmb250LXNpemU6IDEuNHJlbTsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuICAgICAgICBpb24taWNvbitpb24taWNvbnt0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzOyBtYXJnaW4tcmlnaHQ6IDJweDt9XHJcbiAgICAgICAgJiArIGlvbi1tZW51LXRvZ2dsZSA+IGRpdnttYXgtaGVpZ2h0OiAwcHg7ICB2aXNpYmlsaXR5OiBoaWRkZW47IHRyYW5zaXRpb246IGVhc2UgYWxsIDAuNXM7fVxyXG4gICAgICAgICYuYWN0aXZlLXBhcmVudCArIGlvbi1tZW51LXRvZ2dsZSA+IGRpdiB7bWF4LWhlaWdodDogMjQwcHg7IHZpc2liaWxpdHk6IHZpc2libGU7IHRyYW5zaXRpb246IGVhc2UgYWxsIDAuNXM7fVxyXG4gICAgICAgICYuYWN0aXZlLXBhcmVudHtcclxuICAgICAgICAgIGlvbi1pY29uK2lvbi1pY29ue3RyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7IHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO31cclxuICAgICAgICB9XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgaW9uLWxhYmVse3BhZGRpbmctYm90dG9tOiA1cHg7IHBhZGRpbmctdG9wOjVweDsgbWFyZ2luOiAwcHg7IGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAmLmhpZ2hsaWdodHtiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTsgY29sb3I6ICMwMDA7IHBhZGRpbmc6IDVweCA4cHg7IGJvcmRlci1yYWRpdXM6IDNweDsgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7bWF4LXdpZHRoOiBmaXQtY29udGVudDt9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWl0ZW17LS1taW4taGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7IC0tcGFkZGluZy1zdGFydDo0NXB4ICFpbXBvcnRhbnQ7IC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgZm9udC13ZWlnaHQ6IDUwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC44KTt9IFxyXG4gICAgICBpb24tbGlzdHtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fVxyXG4gICAgIC5jdXN0b20tbWVudS13cmFwcGVye21pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGlvbi1saXN0e3BhZGRpbmc6IDEwcHggMHB4O2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGlvbi1pdGVtey0tcGFkZGluZy1lbmQ6OHB4O1xyXG4gICAgICAgICYucm91dGVyLWxpbmstYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KX1cclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgLm90aGVye1xyXG4gICAgICAgaW9uLWl0ZW17LS1wYWRkaW5nLXN0YXJ0OjEycHggIWltcG9ydGFudDt9XHJcbiAgICAgICBpb24taWNvbnttYXJnaW4tcmlnaHQ6IDEwcHg7fVxyXG4gICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtaWNvbnMtY29udHttYXJnaW4tYm90dG9tOiAwcHg7IGJhY2tncm91bmQ6ICNmZmY7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwcHg7IHdpZHRoOiAxMDAlOyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDdweCAwcHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO31cclxuXHJcbiAgICAuc3RlcC1saXN0LnZlcnQgPiBsaXtwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgJi5jb21wbGV0ZWR7cG9pbnRlci1ldmVudHM6IHVuc2V0O1xyXG4gICAgICAmICsgbGkge3BvaW50ZXItZXZlbnRzOiB1bnNldDt9XHJcbiAgICAgIH1cclxuICAgIH0iXX0= */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-split-pane>\r\n  <ion-menu contentId=\"admincontent\" side=\"start\" type=\"push\">\r\n    <ion-content class=\"custom-menu\">\r\n      <div class=\"custom-menu-wrapper\">\r\n        <ion-menu-toggle>\r\n        <section class=\"header\" [routerLink]=\"['/home/user-profile']\" routerLinkActive=\"router-link-active\" >\r\n          <figure><img src='../../assets/man.png'> </figure>\r\n          <div class=\"header-info\"><small>Welcome</small>\r\n            <div style=\"text-transform: capitalize;\"><strong>{{userName}}</strong></div>\r\n            <ul class=\"border-list\">\r\n              <li>ID: <strong>{{appLoginID}}</strong> </li>\r\n              <ng-container *ngIf=\"applicationId != 0\">\r\n                <li>| App ID: <strong>{{applicationId}}</strong></li>\r\n              </ng-container>\r\n            </ul>\r\n          </div>\r\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n          <div class=\"app-version\">{{appCodeVersion}}</div>\r\n        </section>\r\n      </ion-menu-toggle>\r\n          <ion-list class=\"pt-0\">\r\n            <ion-item lines=\"none\" class=\"ion-no-padding item-heading active-parent\">\r\n              <ion-icon name=\"home-outline\" slot=\"start\" class=\"menu-icon\"></ion-icon> Programs\r\n              <!-- <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon> -->\r\n            </ion-item>\r\n            <ion-menu-toggle>\r\n              <div> \r\n                <ion-item lines=\"none\" [routerLink]=\"['/home/college-predictor']\" routerLinkActive=\"router-link-active\">\r\n                  <ion-label class=\"highlight\">Plan A : MBBS in India</ion-label>\r\n                </ion-item>\r\n                <!-- <ion-item lines=\"none\" (click)=\"onClickApply('',arrInterestedPrograms.progInterestId,'')\" [routerLink]=\"\">\r\n                  <ion-label>{{arrInterestedPrograms.programInterest}} Abroad</ion-label>                  \r\n                </ion-item>   -->\r\n                <ion-item lines=\"none\" [routerLink]=\"['/home/country-list']\" routerLinkActive=\"router-link-active\" *ngIf=\"arrInterestedPrograms.progInterestId == 1 || arrInterestedPrograms.progInterestId == 4\">\r\n                  <ion-label>Plan B : MBBS in Abroad</ion-label>\r\n                </ion-item>       \r\n                <ion-item lines=\"none\" [routerLink]=\"['/home/top-links/cmp']\" routerLinkActive=\"router-link-active\" *ngIf=\"arrInterestedPrograms.progInterestId == 1 || arrInterestedPrograms.progInterestId == 4\">\r\n                  <ion-label>Plan C : Combo Medical Program</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" [routerLink]=\"['/home/welcome/medical-pg']\" routerLinkActive=\"router-link-active\" *ngIf=\"arrInterestedPrograms.progInterestId == 1 || arrInterestedPrograms.progInterestId == 4\">\r\n                  <ion-label>MBBS + Medical PG</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" [routerLink]=\"['/home/blog']\" routerLinkActive=\"router-link-active\">\r\n                  <ion-label>News & Articles</ion-label>\r\n                </ion-item>\r\n               \r\n              </div>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n\r\n          <ion-list>\r\n            <ion-item  lines=\"none\" class=\"ion-no-padding item-heading\" (click)=\"isMenuApplicationOpen = !isMenuApplicationOpen\" [class.active-parent]=\"isMenuApplicationOpen\" detail=\"false\">\r\n              <ion-icon name=\"document-outline\" slot=\"start\" class=\"menu-icon\"></ion-icon> My Application\r\n              <ion-icon name=\"remove-circle-outline\" *ngIf=\"isMenuApplicationOpen; else elseAppln\" slot=\"end\"></ion-icon>           \r\n              <ng-template #elseAppln>\r\n                <ion-icon name=\"add-circle-outline\" slot=\"end\"></ion-icon>           \r\n              </ng-template>\r\n            </ion-item>\r\n            <ion-menu-toggle>\r\n              <div>\r\n              <ion-item lines=\"none\" (click)=\"onClickApplication(['/home/application-center/track-application',applicationId])\">\r\n                <ion-label>Track Application</ion-label>\r\n              </ion-item>\r\n              <ul class=\"step-list vert\">\r\n                <li [ngClass]=\"{completed: arrSteps.personalDetails}\" (click)=\"applicationId==0\">\r\n                  <a (click)=\"onClickPersonalDetails()\">\r\n                    <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.personalDetails; else elsepd\"></ion-icon>\r\n                    <ng-template #elsepd>\r\n                      <ion-icon name=\"ellipse\"></ion-icon>\r\n                    </ng-template>\r\n                    <span>Personal Details</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{completed: arrSteps.academicDetails}\">\r\n                  <a (click)=\"onClickAcademicDetails()\">\r\n                    <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.academicDetails; else elsead\"></ion-icon>\r\n                    <ng-template #elsead>\r\n                      <ion-icon name=\"ellipse\"></ion-icon>\r\n                    </ng-template>\r\n                    <span>Academic Details</span>\r\n                  </a>\r\n                </li>                \r\n                <li [ngClass]=\"{completed: arrSteps.serviceSelection}\">\r\n                  <a (click)=\"onClickServiceSelection()\">\r\n                    <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.serviceSelection; else elsess\"></ion-icon>\r\n                    <ng-template #elsess>\r\n                      <ion-icon name=\"ellipse\"></ion-icon>\r\n                    </ng-template>\r\n                    <span>Service Selection</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{completed: arrSteps.payment}\">\r\n                  <a (click)=\"onClickPayment()\">\r\n                    <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.payment; else elseps\"></ion-icon>\r\n                    <ng-template #elseps>\r\n                      <ion-icon name=\"ellipse\"></ion-icon>\r\n                    </ng-template>\r\n                    <span>Payment</span>\r\n                  </a>\r\n                </li>\r\n                <li [ngClass]=\"{completed: arrSteps.documentsUpload}\">\r\n                  <a (click)=\"onClickDocuments()\">\r\n                    <ion-icon name=\"checkmark-circle\" *ngIf=\"arrSteps.documentsUpload; else elsedu\"></ion-icon>\r\n                    <ng-template #elsedu>\r\n                      <ion-icon name=\"ellipse\"></ion-icon>\r\n                    </ng-template>\r\n                    <span>Documents Upload</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n              </div>\r\n            </ion-menu-toggle>\r\n          </ion-list>          \r\n          <ion-list class=\"other\">\r\n            <ion-menu-toggle>\r\n              <ion-item lines=\"none\" [routerLink]=\"['/home/other-pages/branch-locator']\" routerLinkActive=\"router-link-active\" >\r\n                <ion-label>Branch Near You</ion-label>\r\n                <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"none\" [routerLink]=\"['/home/other-pages/special-offers']\" routerLinkActive=\"router-link-active\" >\r\n                <ion-label>Special offers</ion-label>\r\n                <ion-icon name=\"gift-outline\" slot=\"start\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" [routerLink]=\"['/home/other-pages/help-and-support']\" routerLinkActive=\"router-link-active\" >\r\n                <ion-label>Help & Support</ion-label>\r\n                <ion-icon name=\"help-circle-outline\" slot=\"start\"></ion-icon>\r\n              </ion-item>    \r\n              <ion-item lines=\"none\" (click)=\"onClickRate()\" >\r\n                <ion-label>Rate us</ion-label>\r\n                <ion-icon name=\"star-half-outline\" slot=\"start\"></ion-icon>\r\n              </ion-item>         \r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n      </div>\r\n    </ion-content>\r\n    <div class=\"invite-cont\">\r\n      <div class=\"social-icons-cont\">        \r\n      <ion-grid fixed class=\"social-icons\">\r\n        <ion-row>          \r\n          <ion-col>\r\n            <a href=\"https://www.facebook.com/MOKSHOverseasEducationConsultants/\" target=\"_blank\"><ion-icon class=\"fb\" name=\"logo-facebook\"></ion-icon></a>\r\n          </ion-col>\r\n          <ion-col>\r\n            <a href=\"https://www.instagram.com/mokshoverseas/\" target=\"_blank\"><ion-icon class=\"ig\" name=\"logo-instagram\"></ion-icon></a>\r\n          </ion-col>\r\n          <ion-col>\r\n            <a href=\"https://www.youtube.com/channel/UCVacszcofTfkuBPtZZ_RICA\" target=\"_blank\"><small>MBBS</small><ion-icon class=\"yt\" name=\"logo-youtube\"></ion-icon></a>\r\n          </ion-col>\r\n          <ion-col>\r\n            <a href=\"https://www.youtube.com/channel/UC9xH80RNwh-tbcgBc9E5scA\" target=\"_blank\"><small>Coaching</small> <ion-icon class=\"yt\" name=\"logo-youtube\"></ion-icon></a>\r\n          </ion-col>\r\n          <ion-col>\r\n            <a href=\"https://twitter.com/moksheducation\" target=\"_blank\"><ion-icon class=\"tw\" name=\"logo-twitter\"></ion-icon></a>\r\n          </ion-col>\r\n          <!-- <ion-col>\r\n            <a href=\"https://www.linkedin.com/company/moxsh-overseas-educom-pvt-ltd/\" target=\"_blank\"><ion-icon class=\"in\" name=\"logo-linkedin\"></ion-icon></a>\r\n          </ion-col>   -->\r\n          <ion-col>\r\n            <a href=\"https://wa.me/91{{counsellorWhatsAppNo}}&amp;text=\" target=\"_blank\"><ion-icon class=\"wa\" name=\"logo-whatsapp\"></ion-icon></a>\r\n          </ion-col>               \r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n      <div class=\"invite-inner\">\r\n        <figure>\r\n          <img src=\"../../assets/avatar-doctor.png\">\r\n        </figure>\r\n        <div>\r\n          <ion-text> <h3>Invite your friends</h3></ion-text>\r\n          <ion-text><span>Get exclusive offers & <br>Discount</span></ion-text>\r\n        </div>\r\n      </div>\r\n      <ion-button (click)=\"ShareWhatsapp()\" expand=\"block\" size=\"medium\" color=\"success\">\r\n        <ion-icon name=\"logo-whatsapp\" slot=\"start\"></ion-icon> Invite via Whatsapp\r\n      </ion-button>      \r\n    </div>\r\n  </ion-menu>\r\n  \r\n  <ion-router-outlet id=\"admincontent\" main [swipeGesture]=\"false\"></ion-router-outlet>\r\n  \r\n</ion-split-pane>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map