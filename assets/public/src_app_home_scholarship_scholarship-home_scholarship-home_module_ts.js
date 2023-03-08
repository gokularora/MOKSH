(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_scholarship_scholarship-home_scholarship-home_module_ts"],{

/***/ 41373:
/*!**************************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-home/scholarship-home-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipHomePageRoutingModule": () => (/* binding */ ScholarshipHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scholarship_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholarship-home.page */ 25148);




const routes = [
    {
        path: '',
        component: _scholarship_home_page__WEBPACK_IMPORTED_MODULE_0__.ScholarshipHomePage
    }
];
let ScholarshipHomePageRoutingModule = class ScholarshipHomePageRoutingModule {
};
ScholarshipHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScholarshipHomePageRoutingModule);



/***/ }),

/***/ 37794:
/*!******************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-home/scholarship-home.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipHomePageModule": () => (/* binding */ ScholarshipHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scholarship_home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship-home-routing.module */ 41373);
/* harmony import */ var _scholarship_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scholarship-home.page */ 25148);








let ScholarshipHomePageModule = class ScholarshipHomePageModule {
};
ScholarshipHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _scholarship_home_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScholarshipHomePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_scholarship_home_page__WEBPACK_IMPORTED_MODULE_2__.ScholarshipHomePage]
    })
], ScholarshipHomePageModule);



/***/ }),

/***/ 25148:
/*!****************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-home/scholarship-home.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipHomePage": () => (/* binding */ ScholarshipHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scholarship_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scholarship-home.page.html */ 83972);
/* harmony import */ var _scholarship_home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship-home.page.scss */ 43467);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ 25970);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var _services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);











let ScholarshipHomePage = class ScholarshipHomePage {
    constructor(headerTitleService, apiLMSService, storage, router, loader, alert, platform) {
        this.headerTitleService = headerTitleService;
        this.apiLMSService = apiLMSService;
        this.storage = storage;
        this.router = router;
        this.loader = loader;
        this.alert = alert;
        this.platform = platform;
        this.isAgreed = false;
        this.isAgreedRules = false;
        this.arrUserData = [];
        this.headerTitleService.title = "Scholarship Test";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.getUserDataStorage();
    }
    onClickAgree() {
        this.isTncOpen = true;
    }
    onClickRules() {
        this.isRulesOpen = true;
    }
    PanelClose() {
        this.isTncOpen = false;
        this.isRulesOpen = false;
    }
    onChangeTnc() {
        this.isAgreed = !this.isAgreed;
        this.isTncOpen = (this.isAgreed == true) ? true : false;
    }
    onChangeRules() {
        this.isAgreedRules = !this.isAgreedRules;
        this.isRulesOpen = (this.isAgreedRules == true) ? true : false;
    }
    onClickSubmit() {
        this.setLMSStudentInfo();
    }
    getUserDataStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("userdata").then((resp) => {
                this.arrUserData = resp;
            });
        });
    }
    setLMSStudentInfo() {
        this.isLoading = true;
        var data = new FormData();
        var mobileNo = this.arrUserData["mobileNo"].replace('+91', '');
        data.append("xAction", "checkStudentStatus");
        data.append("studentFName", this.arrUserData["firstName"]);
        data.append("studentLName", this.arrUserData["lastName"]);
        data.append("emailID", this.arrUserData["emailId"]);
        data.append("studentMobileNo", mobileNo);
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        this.apiLMSService.setStudentInfo(data).then(resp => {
            console.log(resp);
            if (resp["err"] == 1) {
                //this.alert.basciAlert("Your email id is already registered with us. Sorry, you can participate only once." ,"","", ['OK']);  
                this.checkExamStatus(resp["studentID"]);
                this.isLoading = false;
            }
            else {
                this.getLMSStudentInfo(this.arrUserData["emailId"]);
            }
        });
    }
    getLMSStudentInfo(emailId) {
        var data = new FormData();
        data.append("xAction", "getStudentInfo");
        data.append("studentEmailID", emailId);
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        this.apiLMSService.getStudentInfo(data).then(resp => {
            var objData = resp;
            this.apiLMSService.arrLMSStudentData = objData.data[0];
            this.checkExamStatus(objData.data[0]["studentID"]);
        });
    }
    checkExamStatus(studentID) {
        var data = new FormData();
        data.append("xAction", "checkExamStatus");
        data.append("studentID", studentID);
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        this.apiLMSService.getExamStatus(data).then(resp => {
            console.log(resp);
            if (resp.data["examStatus"] == "Complete") {
                this.alert.basciAlert("You have already appeared for the MOKSH Online Scholarship Test (MOST) earlier. Sorry, you can participate only once.", "", "", ['OK']);
            }
            else if (resp.status == 202) {
                this.alert.basciAlert("You have already registered earlier. Sorry, you can participate only once.", "Please contact us for any queries.", "", ['OK']);
            }
            else if (resp.status == 203) {
                this.alert.basciAlert("Already you are a student of our LMS portal so we are not able to process your test", "Please contact us for any queries.", "", ['OK']);
            }
            else {
                this.router.navigate(["/home/scholarship/scholarship-test"]);
            }
            this.isLoading = false;
        });
    }
};
ScholarshipHomePage.ctorParameters = () => [
    { type: _services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_5__.ApiLMSService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform }
];
ScholarshipHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-scholarship-home',
        template: _raw_loader_scholarship_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scholarship_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScholarshipHomePage);



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

/***/ 43467:
/*!******************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-home/scholarship-home.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("figure {\n  margin: 2rem;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.content {\n  text-align: center;\n}\n\n.content h3 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\n.content ion-text {\n  display: block;\n  font-size: 1rem;\n  color: #777;\n  line-height: 1.3rem;\n}\n\nsection ion-item {\n  font-size: 0.9rem;\n}\n\n.footerfixed {\n  bottom: 55px;\n}\n\n.chk-cont ion-label {\n  padding-left: 10px;\n  position: relative;\n  top: -7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9sYXJzaGlwLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sWUFBQTtFQUFjLGdCQUFBO0VBQWtCLG1CQUFBO0FBSXZDOztBQUZBO0VBQVcsa0JBQUE7QUFNWDs7QUFMSTtFQUFHLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLG1CQUFBO0FBVTVDOztBQVRJO0VBQVMsY0FBQTtFQUFpQixlQUFBO0VBQWlCLFdBQUE7RUFBYSxtQkFBQTtBQWU1RDs7QUFaSTtFQUFTLGlCQUFBO0FBZ0JiOztBQWJBO0VBQWEsWUFBQTtBQWlCYjs7QUFkSTtFQUFVLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLFNBQUE7QUFvQnREIiwiZmlsZSI6InNjaG9sYXJzaGlwLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmlndXJle21hcmdpbjogMnJlbTsgbWFyZ2luLXRvcDogMTBweDsgbWFyZ2luLWJvdHRvbTogMTVweDt9XHJcblxyXG4uY29udGVudHsgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBoM3tmb250LXNpemU6IDEuM3JlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogMXJlbTt9XHJcbiAgICBpb24tdGV4dHtkaXNwbGF5OiBibG9jazsgIGZvbnQtc2l6ZTogMXJlbTsgY29sb3I6ICM3Nzc7IGxpbmUtaGVpZ2h0OiAxLjNyZW07fVxyXG59XHJcbnNlY3Rpb257XHJcbiAgICBpb24taXRlbXtmb250LXNpemU6IDAuOXJlbTt9XHJcbn1cclxuXHJcbi5mb290ZXJmaXhlZHtib3R0b206IDU1cHg7fVxyXG5cclxuLmNoay1jb250e1xyXG4gICAgaW9uLWxhYmVse3BhZGRpbmctbGVmdDogMTBweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC03cHg7fVxyXG59Il19 */");

/***/ }),

/***/ 83972:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/scholarship/scholarship-home/scholarship-home.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <div class=\"main-cont\">\n    <figure>\n      <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/scholarship/scholarship-start1.jpg\" alt=\"\" class=\"w-100\">\n    </figure>\n\n\n      <section class=\"content\">\n        <h3>India's largest Scholarship for MBBS</h3>\n        <ion-text>\n          Genuine scholarship in collaboration with multiple universities. 377 students have benefitted since 2019. Try yourself :)\n        </ion-text>\n      </section>\n      <section>\n          <div class=\"chk-cont\">\n            <ion-checkbox slot=\"start\" (ionChange)=\"onChangeTnc()\"></ion-checkbox>\n            <ion-label (click)=\"onClickAgree()\">I agree to  <ion-text color=\"tertiary\">MOKSH Terms and Conditions</ion-text>\n            </ion-label>\n          </div>\n          <div class=\"chk-cont mt-2\">\n            <ion-checkbox slot=\"start\" (ionChange)=\"onChangeRules()\"></ion-checkbox>\n            <ion-label (click)=\"onClickRules()\">I have read <ion-text color=\"tertiary\">MOKSH Scholarship Rules</ion-text>\n            </ion-label>\n          </div>\n      </section>\n      <section class=\"mt-0\">\n        <div>          \n          <ion-button (click)=\"onClickSubmit()\"  expand=\"block\" color=\"primary\" [ngClass]=\"{disabled: !isAgreed || !isAgreedRules}\"> Start Scholarship Test            \n            <ion-spinner name=\"lines\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\n          </ion-button>\n        </div>\n      </section>\n  </div>\n\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isTncOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"PanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <div>\n        <h4>Terms & Conditions</h4>\n      </div>\n      <div>\n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n            The scholarship is exclusively available for Indian students availing of MOKSH services only.</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The Scholarship test is conducted online and the results are announced on the computer. The results of students\n            would be shared individually via mail within 72 hours. </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n            The scholarship would be allotted to the students appearing on the MOST-2022 on first cum first served basis.</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n            The FREE NEXT coaching for 1 or 2 years are subject to buying the full package of MOKSH NEXT coaching. In case the student has not bought the package, the scholarship would be wasted.</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n            The scholarship offer would be valid for maximum of 30 days. In case the student has not registered for MOKSH services within this period and has not sent a confirmatory mail towards acceptance of the scholarship would be discarded.</li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n            The MOKSH management reserves the right to accept or reject a student and no claims would be entertained under any circumstances from the student or the parents.</li>        \n            <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>\n              The scholarship is not transferable and is not en-cashable.</li>        \n        </ul>\n        \n      </div>\n    </div>\n  </section>\n\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isRulesOpen}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"PanelClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <div>\n        <h4>Rules & Regulation</h4>\n      </div>\n      <div>\n        <ul class=\"bullet-list\">\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The decision of MOKSH management would remain final and cannot be disputed by the test takers under any\n            circumstances. </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The Scholarship test is conducted online and the results are announced on the computer. The results of students\n            would be shared individually via mail within 72 hours. </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The Scholarship Test can be attempted by one student only once. The Online MOKSH Scholarship test would be based\n            on Biology with 45 questions in 40 minutes. </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>One student can avail of only one Scholarship out of all the mentioned above. </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>The Indian mess scholarship allows the student to avail of the food at an Indian mess. MOKSH is not responsible\n            for the quality, quantity, variety of the food provided there since the mess is run by the local contractors. </li>\n          <li><ion-icon name=\"chevron-forward-circle-outline\"></ion-icon>When the hostel stay is under Scholarship, the choice of the university hostel would remain with MOKSH. The\n            students would have to pay extra from their own pocket, just in case they wish to upgrade to another hostel. </li>        \n        </ul>\n        \n      </div>\n    </div>\n  </section>\n\n\n\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_scholarship_scholarship-home_scholarship-home_module_ts.js.map