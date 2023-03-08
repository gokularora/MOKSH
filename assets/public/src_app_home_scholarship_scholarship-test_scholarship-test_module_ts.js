(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_scholarship_scholarship-test_scholarship-test_module_ts"],{

/***/ 79811:
/*!**************************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-test/scholarship-test-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipTestPageRoutingModule": () => (/* binding */ ScholarshipTestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scholarship_test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholarship-test.page */ 24644);




const routes = [
    {
        path: '',
        component: _scholarship_test_page__WEBPACK_IMPORTED_MODULE_0__.ScholarshipTestPage
    },
    {
        path: 'test-result/:studentId/:assignQbResultId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_home_scholarship_scholarship-test_test-result_test-result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./test-result/test-result.module */ 19933)).then(m => m.TestResultPageModule)
    }
];
let ScholarshipTestPageRoutingModule = class ScholarshipTestPageRoutingModule {
};
ScholarshipTestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScholarshipTestPageRoutingModule);



/***/ }),

/***/ 31073:
/*!******************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-test/scholarship-test.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipTestPageModule": () => (/* binding */ ScholarshipTestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scholarship_test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholarship-test-routing.module */ 79811);
/* harmony import */ var _scholarship_test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship-test.page */ 24644);







let ScholarshipTestPageModule = class ScholarshipTestPageModule {
};
ScholarshipTestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scholarship_test_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScholarshipTestPageRoutingModule
        ],
        declarations: [_scholarship_test_page__WEBPACK_IMPORTED_MODULE_1__.ScholarshipTestPage]
    })
], ScholarshipTestPageModule);



/***/ }),

/***/ 24644:
/*!****************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-test/scholarship-test.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScholarshipTestPage": () => (/* binding */ ScholarshipTestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scholarship_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scholarship-test.page.html */ 48546);
/* harmony import */ var _scholarship_test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scholarship-test.page.scss */ 92969);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);











let ScholarshipTestPage = class ScholarshipTestPage {
    constructor(headerTitleService, apiLMSService, navCtrl, alertController, loader, storage, rotuer, toastr, platform) {
        this.headerTitleService = headerTitleService;
        this.apiLMSService = apiLMSService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loader = loader;
        this.storage = storage;
        this.rotuer = rotuer;
        this.toastr = toastr;
        this.platform = platform;
        this.arrQuestions = [];
        this.t1 = new Date(0);
        this.timer = 0;
        this.timerSec = 0;
        this.currentQuestion = 1;
        this.qstnNo = 1;
        this.qstnCount = 0;
        this.selectedAnswer = "";
        this.selectedQuestionBankDetailsID = "";
        this.assignQbResultID = "";
        this.totalQuestions = 0;
        this.isPanelOpen = false;
    }
    ngOnInit() {
        this.getQuestions();
        this.getUserDataStorage();
    }
    initTimer() {
        var seconds = (this.timerSec == 0) ? 60 : this.timerSec;
        this.t1.setHours(0, 0, seconds, 0);
        this.timer = this.t1.getTime();
        this.timerInterval = setInterval(() => {
            this.timer = this.timer - 1000;
        }, 1000);
        setTimeout(() => {
            this.submitTest();
        }, (seconds * 1000));
    }
    getQuestions() {
        this.loader.presentLoading();
        var data = new FormData();
        data.append("xAction", "getQuestion");
        data.append("questionBankID", "334");
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        this.apiLMSService.getTestQuestions(data).then(resp => {
            var objData = resp;
            this.arrQuestions = objData.data;
            this.totalQuestions = this.arrQuestions.length;
            this.timerSec = this.arrQuestions.length * 60;
            this.initTimer();
            //this.ques = objData.data;
            this.qstnCount = this.arrQuestions.length;
            this.loadQuestion();
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 1000);
        });
    }
    loadQuestion() {
        this.qstnNo = this.currentQuestion;
        this.activeID = this.arrQuestions[this.currentQuestion - 1]["questionBankDetailsID"];
    }
    nextQuestion() {
        if (this.currentQuestion < this.arrQuestions.length) {
            ++this.currentQuestion;
            this.loadQuestion();
            var arrSelectedQuestion = this.arrQuestions[this.currentQuestion - 2];
            if (arrSelectedQuestion.selectedAns != undefined) {
                this.saveAnswer(arrSelectedQuestion);
            }
        }
    }
    previousQuestion() {
        if (this.currentQuestion > 1) {
            --this.currentQuestion;
            this.loadQuestion();
        }
    }
    onClickSelect(ans, questionBankDetailsID) {
        this.selectedAnswer = ans;
        this.selectedQuestionBankDetailsID = questionBankDetailsID;
        this.arrQuestions.forEach(el => {
            if (el.questionBankDetailsID == questionBankDetailsID) {
                el["selectedAns"] = ans;
            }
        });
    }
    saveAnswer(arrSelectedQuestion) {
        var data = new FormData();
        data.append("xAction", "saveAnswer");
        data.append("questionBankDetailsID", arrSelectedQuestion.questionBankDetailsID);
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        data.append("ans", this.selectedAnswer);
        data.append("studentID", this.apiLMSService.arrLMSStudentData["studentID"]);
        this.apiLMSService.setAnswer(data).then(resp => {
            if (resp.status == 200) {
                this.assignQbResultID = resp["assignQbResultID"];
            }
            else if (resp.status == 202) {
                this.toastr.toastError("Oops... Something went wrong. Sorry, We are not able to process your test. Please try after sometime.");
                return false;
            }
            else {
                this.toastr.toastError("Oops... Something went wrong. Sorry, We are not able to process your test. Please try after sometime.");
            }
        });
    }
    submitTest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var arrSelectedQuestion = this.arrQuestions[this.currentQuestion - 1];
            console.log(arrSelectedQuestion);
            if (arrSelectedQuestion.selectedAns != undefined) {
                yield this.saveAnswer(arrSelectedQuestion);
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Are you sure you want to submit?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.endTest();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    endTest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var data = new FormData();
            data.append("xAction", "endTest");
            data.append("questionBankDetailsID", this.selectedQuestionBankDetailsID);
            data.append("apiKey", "U0NJVFlSRVdBUkRa");
            data.append("assignQbResultID", this.assignQbResultID);
            data.append("studentID", this.apiLMSService.arrLMSStudentData["studentID"]);
            this.apiLMSService.setAnswer(data).then(resp => {
                console.log("endTest() " + resp);
                this.rotuer.navigate(['/home/scholarship/scholarship-test/test-result', this.apiLMSService.arrLMSStudentData["studentID"], this.assignQbResultID]);
            });
        });
    }
    onClickGoToQuestion(index) {
        this.currentQuestion = this.qstnNo = index + 1;
        this.activeID = this.arrQuestions[index]["questionBankDetailsID"];
        this.isPanelOpen = false;
    }
    //#region  Exit test
    onClickBack() {
        this.presentAlertExit();
    }
    presentAlertExit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Are you sure you want to cancel the Test?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //#endregion
    ngOnDestroy() {
        window.clearInterval(this.timerInterval);
    }
    getUserDataStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("userdata").then((resp) => {
                this.getLMSStudentInfo(resp["emailId"]);
            });
        });
    }
    getLMSStudentInfo(emailId) {
        if (emailId == "" || emailId == null) {
            this.navCtrl.back();
        }
        else {
            var data = new FormData();
            data.append("xAction", "getStudentInfo");
            data.append("studentEmailID", emailId);
            data.append("apiKey", "U0NJVFlSRVdBUkRa");
            this.apiLMSService.getStudentInfo(data).then(resp => {
                var objData = resp;
                this.apiLMSService.arrLMSStudentData = objData.data[0];
            });
        }
    }
};
ScholarshipTestPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_5__.ApiLMSService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform }
];
ScholarshipTestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-scholarship-test',
        template: _raw_loader_scholarship_test_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scholarship_test_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScholarshipTestPage);



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

/***/ 92969:
/*!******************************************************************************!*\
  !*** ./src/app/home/scholarship/scholarship-test/scholarship-test.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mcq-cont {\n  background: #eee;\n  padding: 1.2rem;\n  height: 100%;\n}\n.mcq-cont header {\n  text-align: center;\n  display: block;\n  position: relative;\n}\n.mcq-cont header ion-icon {\n  font-size: 1.6rem;\n  position: absolute;\n  left: -5px;\n  top: -3px;\n}\n.mcq-cont header .timer-cont {\n  display: inline-block;\n  font-weight: 500;\n  font-size: 1rem;\n  position: relative;\n  padding-left: 20px;\n}\n.mcq-cont header .timer-cont ion-icon {\n  left: 0px;\n  top: -1px;\n  font-size: 1.2rem;\n}\n.right-side {\n  left: inherit !important;\n  right: 0px;\n  top: -5px !important;\n}\n.qstn-box {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n}\n.qstn-box ion-col div {\n  text-align: center;\n  padding: 2px 0px;\n  font-weight: 500;\n  position: relative;\n  text-align: center;\n}\n.qstn-box ion-col div .icons {\n  position: absolute;\n  top: -12px;\n  font-size: 1.3rem;\n  display: flex;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.grid-legend ion-icon {\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9sYXJzaGlwLXRlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQVUsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixZQUFBO0FBRzdDO0FBRkk7RUFBUSxrQkFBQTtFQUFvQixjQUFBO0VBQWdCLGtCQUFBO0FBT2hEO0FBTlE7RUFBUyxpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixVQUFBO0VBQVksU0FBQTtBQVlwRTtBQVhRO0VBQVkscUJBQUE7RUFBdUIsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQixrQkFBQTtBQWtCbEc7QUFqQlk7RUFBUyxTQUFBO0VBQVcsU0FBQTtFQUFXLGlCQUFBO0FBc0IzQztBQWpCQTtFQUFZLHdCQUFBO0VBQTBCLFVBQUE7RUFBWSxvQkFBQTtBQXVCbEQ7QUFyQkE7RUFBVSwrQkFBQTtFQUFpQyxnQkFBQTtBQTBCM0M7QUF4QlE7RUFBSSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixrQkFBQTtBQStCeEY7QUE5Qlk7RUFBTyxrQkFBQTtFQUFvQixVQUFBO0VBQVksaUJBQUE7RUFBbUIsYUFBQTtFQUFlLFNBQUE7RUFBVywyQkFBQTtBQXNDaEc7QUFqQ0k7RUFBUyxpQkFBQTtBQXFDYiIsImZpbGUiOiJzY2hvbGFyc2hpcC10ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWNxLWNvbnR7YmFja2dyb3VuZDogI2VlZTsgcGFkZGluZzogMS4ycmVtOyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWFkZXJ7IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgaW9uLWljb257Zm9udC1zaXplOiAxLjZyZW07IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTVweDsgdG9wOiAtM3B4O31cclxuICAgICAgICAudGltZXItY29udHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtd2VpZ2h0OiA1MDA7IGZvbnQtc2l6ZTogMXJlbTsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29ue2xlZnQ6IDBweDsgdG9wOiAtMXB4OyBmb250LXNpemU6IDEuMnJlbTt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtc2lkZXtsZWZ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7IHJpZ2h0OiAwcHg7IHRvcDogLTVweCAhaW1wb3J0YW50O31cclxuXHJcbi5xc3RuLWJveHttYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpOyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBkaXZ7dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAycHggMHB4OyBmb250LXdlaWdodDogNTAwOyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLmljb25ze3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMTJweDsgZm9udC1zaXplOiAxLjNyZW07IGRpc3BsYXk6IGZsZXg7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO31cclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbi5ncmlkLWxlZ2VuZHtcclxuICAgIGlvbi1pY29ue2ZvbnQtc2l6ZTogMS4zcmVtO31cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 48546:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/scholarship/scholarship-test/scholarship-test.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"mcq-cont\">\n    <header>\n      <ion-icon name=\"chevron-back-outline\" (click)=\"onClickBack()\"></ion-icon>\n      <div class=\"timer-cont\">\n        <ion-icon name=\"stopwatch-outline\"></ion-icon>\n        {{timer|date:'HH:mm:ss'}}\n      </div>\n      <ion-icon name=\"ellipsis-vertical\" class=\"right-side\" (click)=\"isPanelOpen = true\"></ion-icon>\n    </header>\n\n    <section>\n      <ul class=\"mcq-list\">\n        <li *ngFor=\"let item of arrQuestions\" [ngClass]=\"{active: item.questionBankDetailsID == activeID}\">\n          <div class=\"header\">\n            <span class=\"qstn-no\">Question {{qstnNo}}. <small>out of {{qstnCount}}</small></span>\n            <div class=\"qstn\" [innerHTML]=\"item.questionName\"></div>\n          </div>\n          <ol class=\"opt-list\">\n            <li *ngIf=\"item.ansA\" (click)=\"onClickSelect(1,item.questionBankDetailsID)\"\n              [ngClass]=\"{selected: item.selectedAns == 1}\"><span>A.</span>\n              <div [innerHTML]= item.ansA></div>\n            </li>\n            <li *ngIf=\"item.ansB\" (click)=\"onClickSelect(2,item.questionBankDetailsID)\"\n              [ngClass]=\"{selected: item.selectedAns == 2}\"><span>B.</span>\n              <div [innerHTML] = item.ansB></div>\n            </li>\n            <li *ngIf=\"item.ansC\" (click)=\"onClickSelect(3,item.questionBankDetailsID)\"\n              [ngClass]=\"{selected: item.selectedAns == 3}\"><span>C.</span>\n              <div [innerHTML]= item.ansC></div>\n            </li>\n            <li *ngIf=\"item.ansD\" (click)=\"onClickSelect(4,item.questionBankDetailsID)\"\n              [ngClass]=\"{selected: item.selectedAns == 4}\"><span>D.</span>\n              <div [innerHTML]= item.ansD></div>\n            </li>\n            <li *ngIf=\"item.ansE\" (click)=\"onClickSelect(5,item.questionBankDetailsID)\"\n              [ngClass]=\"{selected: item.selectedAns == 5}\"><span>E.</span>\n              <div [innerHTML]= item.ansE></div>\n            </li>\n            <li *ngIf=\"item.ansF\" (click)=\"onClickSelect(6,item.questionBankDetailsID)\"\n              [ngClass]=\"{selected: item.selectedAns == 6}\"><span>F.</span>\n              <div [innerHTML]= item.ansF></div>\n            </li>\n          </ol>\n        </li>\n      </ul>\n    </section>\n    <!-- <button ion-button color=\"secondary\" (click)=\"previousQuestion()\" outline>Previous</button>\n    <button ion-button color=\"secondary\" (click)=\"nextQuestion()\" outline>Next</button> -->\n    <!-- <button ion-button color=\"success\" (click)=\"completeTest()\" outline>Submit</button> -->\n  </div>\n\n  <section class=\"toogle-panel right\" [ngClass]=\"{isOpen: isPanelOpen}\">\n    <div class=\"toogle-backdrop\" (click)=\"isPanelOpen = false\"></div>\n    <div class=\"toogle-cont pt-3\">\n      <ion-text class=\"btn-close\" (click)=\"isPanelOpen = false\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <h3 class=\"heading underline\">Question Card</h3>\n     <ion-grid fixed class=\"grid-legend mt-2\">\n       <ion-row class=\"mb-1\">\n         <ion-col size=\"2\"><ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon> </ion-col>\n         <ion-col size=\"10\">Answered</ion-col>\n       </ion-row>\n       <ion-row>\n        <ion-col size=\"2\"><ion-icon name=\"flag\" color=\"danger\"></ion-icon> </ion-col>\n        <ion-col size=\"10\">Mark for Review</ion-col>\n      </ion-row>\n      \n     </ion-grid>\n      <ion-grid fixed class=\"qstn-box padding-sm\">\n        <ion-row>\n          <ion-col size=\"3\" *ngFor=\"let item of arrQuestions; let i = index\" class=\"pt-3\" (click)=\"onClickGoToQuestion(i)\">\n            <div class=\"bg-light-grey p-1\" [ngClass]=\"{bgsuccesslight: item.selectedAns != undefined}\">\n              <span class=\"icons\">\n              <ion-icon name=\"checkmark-circle\" color=\"success\" *ngIf=\"item.selectedAns != undefined\"></ion-icon> \n              <ion-icon name=\"flag\" color=\"danger\" *ngIf=\"item.isFlag\"></ion-icon>\n            </span>\n              Q. {{i+1}}</div>\n          </ion-col>          \n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n\n  <section class=\"btn-cont footerfixed\">\n    <div class=\"main-cont\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"previousQuestion()\" disabled=\"{{currentQuestion == 1}}\">Prev\n              <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"block\" color=\"primary\" (click)=\"submitTest()\">End Test</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"nextQuestion()\" disabled =\"{{currentQuestion == totalQuestions}}\">Next\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </section>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_scholarship_scholarship-test_scholarship-test_module_ts.js.map