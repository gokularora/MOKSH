(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_predictor-report-stagewise_predictor-report-stagewise_module_ts"],{

/***/ 94553:
/*!****************************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report-stagewise/predictor-report-stagewise-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorReportStagewisePageRoutingModule": () => (/* binding */ PredictorReportStagewisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _predictor_report_stagewise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predictor-report-stagewise.page */ 57508);




const routes = [
    {
        path: '',
        component: _predictor_report_stagewise_page__WEBPACK_IMPORTED_MODULE_0__.PredictorReportStagewisePage
    }
];
let PredictorReportStagewisePageRoutingModule = class PredictorReportStagewisePageRoutingModule {
};
PredictorReportStagewisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PredictorReportStagewisePageRoutingModule);



/***/ }),

/***/ 85159:
/*!********************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report-stagewise/predictor-report-stagewise.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorReportStagewisePageModule": () => (/* binding */ PredictorReportStagewisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _predictor_report_stagewise_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-report-stagewise-routing.module */ 94553);
/* harmony import */ var _predictor_report_stagewise_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predictor-report-stagewise.page */ 57508);








let PredictorReportStagewisePageModule = class PredictorReportStagewisePageModule {
};
PredictorReportStagewisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _predictor_report_stagewise_routing_module__WEBPACK_IMPORTED_MODULE_1__.PredictorReportStagewisePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_predictor_report_stagewise_page__WEBPACK_IMPORTED_MODULE_2__.PredictorReportStagewisePage]
    })
], PredictorReportStagewisePageModule);



/***/ }),

/***/ 57508:
/*!******************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report-stagewise/predictor-report-stagewise.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorReportStagewisePage": () => (/* binding */ PredictorReportStagewisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_predictor_report_stagewise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./predictor-report-stagewise.page.html */ 60640);
/* harmony import */ var _predictor_report_stagewise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-report-stagewise.page.scss */ 36807);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/toast.service */ 84465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);










let PredictorReportStagewisePage = class PredictorReportStagewisePage {
    constructor(headerTitleService, apiPredictorService, alert, storage, loader, toastr) {
        this.headerTitleService = headerTitleService;
        this.apiPredictorService = apiPredictorService;
        this.alert = alert;
        this.storage = storage;
        this.loader = loader;
        this.toastr = toastr;
        this.arrPredictor = [];
        this.arrPredictorAll = [];
        this.resultCount = 0;
        this.counsellingType = "";
        this.counsellingName = "";
        this.listOpts = { slidesPerView: 1.1 };
        this.arrIntakes = [];
        this.sequence = 1;
        this.stepNo = 0;
        this.arrManagementType = null;
        this.stepName = '';
        this.nextStepName = '';
        this.prevStepName = '';
        this.stepDesc = null;
        this.arrPredictorForm = [];
        this.lblRank = "";
        this.arrMoreData = { 'collegeName': '', 'noOfFaculty': 0, 'annualBudget': 0, 'yearOfInspection': 0, 'intakeSeats': 0, 'statusOfMCIRec': '' };
        this.headerTitleService.title = "College Predictor";
    }
    ngOnInit() {
        this.lblRank = this.apiPredictorService.lblRank;
        this.stepNo = 0;
        this.sequence = 1;
        this.getManagemnetType();
        this.getActivatedpackage();
        setTimeout(() => {
            this.getRank();
        }, 1000);
    }
    doRefresh(event) {
        this.stepNo = 0;
        this.sequence = 1;
        this.getPredictedColleges();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getActivatedpackage() {
        this.storage.getObject("selectedPackage").then(resp => {
            this.activatedPackage = resp;
        });
    }
    getManagemnetType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let postData = { 'isActive': true };
            yield this.storage.getObject("predictorForm").then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (res) {
                    this.arrPredictorForm = res;
                    if (res.CounsellingID == 1) {
                        this.counsellingName = "All India Counselling";
                    }
                    else if (res.CounsellingID == 2) {
                        this.counsellingName = "State Level Counselling";
                    }
                    yield this.apiPredictorService.getManagementType(JSON.stringify(postData)).then(resp => {
                        if (resp.length > 0) {
                            if (this.arrPredictorForm["CounsellingID"] == 2) {
                                resp.splice(0, 2);
                            }
                            this.arrManagementType = resp;
                            this.getPredictedColleges();
                        }
                        else {
                            this.arrManagementType = [];
                        }
                    }).catch(ex => {
                        console.log("getManagemnetType()=> " + ex);
                    });
                }
                else {
                    this.toastr.toastError("Sorry, Something went wrong. Please try again after sometime");
                }
            }));
        });
    }
    getPredictedColleges() {
        // this.arrManagementType.forEach(el => {
        //   if (this.sequence == el.sequence) {
        //     this.stepName = el.managementType;
        //     this.stepDesc = el.description;
        //   }
        //   if ((this.sequence + 1) == el.sequence) {
        //     this.nextStepName = el.managementType;
        //   }
        //   if ((this.sequence - 1) == el.sequence) {
        //     this.prevStepName = el.managementType;
        //   }
        // });
        this.loader.presentLoading();
        var managementTypeId = this.arrManagementType[this.stepNo].managementTypeId;
        this.stepName = this.arrManagementType[this.stepNo].managementType;
        this.nextStepName = (this.arrManagementType[this.stepNo + 1] == undefined) ? "" : this.arrManagementType[this.stepNo + 1].managementType;
        this.prevStepName = (this.stepNo > 0) ? this.arrManagementType[this.stepNo - 1].managementType : "";
        this.arrPredictorForm["managementTypeId"] = JSON.parse("[" + managementTypeId + "]");
        this.apiPredictorService.getPredictor(JSON.stringify(this.arrPredictorForm)).then(resp => {
            this.arrPredictor = resp;
            this.apiPredictorService.arrPredictor = resp;
            this.resultCount = Object.keys(this.arrPredictor).length;
            //this.counsellingName = this.arrPredictor[0]["counsellingName"];            
            this.loader.loadingDismiss();
        })
            .catch(ex => {
            console.log("getPredictedColleges() = > " + ex);
            this.loader.loadingDismiss();
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
    nextOptions() {
        if (this.sequence > 5) {
            return false;
        }
        this.sequence++;
        this.stepNo++;
        this.getPredictedColleges();
    }
    previousOptions() {
        if (this.stepNo == 0) {
            return false;
        }
        this.sequence--;
        this.stepNo--;
        this.getPredictedColleges();
    }
    onClickUpgrade() {
        this.isModal = true;
    }
    onClickCutOff(round) {
        this.isModalCutOffOpen = true;
    }
    modalClose() {
        this.isModalCutOffOpen = false;
        this.isModalIntake = false;
        this.isModalMore = false;
    }
    onClickAddToPreferential() {
        this.isModal = true;
    }
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
};
PredictorReportStagewisePage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_4__.ApiPredictorService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
PredictorReportStagewisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-predictor-report-stagewise',
        template: _raw_loader_predictor_report_stagewise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_predictor_report_stagewise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PredictorReportStagewisePage);



/***/ }),

/***/ 36807:
/*!********************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-report-stagewise/predictor-report-stagewise.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".college-list {\n  padding: 0px;\n}\n.college-list ion-slide {\n  padding: 0px 10px;\n  padding-bottom: 10px;\n  display: block;\n  font-size: 0.9rem;\n  text-align: left;\n}\n.college-list h5 {\n  font-size: 1rem;\n  margin: -15px;\n  padding: 10px 15px;\n  margin-bottom: 15px;\n  color: #fff;\n  background: var(--ion-color-primary);\n  font-weight: 400;\n}\n.college-list p {\n  color: #555;\n  margin-bottom: 5px;\n}\n.college-list .grid-info {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.college-list .grid-info ion-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.college-list .grid-info ion-row ion-col {\n  padding: 0.5rem 7px;\n  font-size: 0.89rem;\n}\n.college-list .grid-info ion-row ion-col strong {\n  font-weight: 500;\n}\n.college-list .grid-info ion-row ion-col:first-child {\n  background: #fff3f3;\n  text-align: left;\n}\n.college-list .grid-info ion-row ion-col + ion-col {\n  padding-left: 10px;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n.college-list .grid-info ion-row:last-child {\n  border-bottom: 0px;\n}\n.college-list .grid-info.table ion-row.head {\n  background: #fff3f3;\n}\n.college-list .grid-info.table ion-col {\n  text-align: center;\n  padding: 1rem 7px !important;\n}\n.college-list .grid-info + section {\n  margin-top: 1.5rem;\n}\n.college-list section {\n  padding: 1.2rem 0px;\n  position: relative;\n}\n.college-list section:before {\n  content: \"\";\n  position: absolute;\n  background: #eee;\n  height: 10px;\n  width: calc(100% + 30px);\n  left: -15px;\n  top: -5px;\n}\n.college-list section ion-text {\n  display: block;\n  padding-left: 23px;\n  position: relative;\n}\n.college-list section ion-text .chances-cont {\n  padding: 0px;\n  background: none;\n  border: 0px;\n  color: #000;\n}\n.college-list section ion-text h6 {\n  margin: 0px;\n}\n.college-list section ion-text ion-icon {\n  position: absolute;\n  left: -4px;\n  top: 0px;\n  font-size: 1.6rem;\n}\n.college-list section ion-text + .active {\n  display: block;\n}\n.college-list section + section {\n  margin-top: 0px;\n}\n.college-list section:last-child {\n  padding-bottom: 0px;\n}\n.college-list ion-button {\n  height: 2.5rem;\n  font-size: 1rem;\n}\n.chances-cont {\n  font-size: 1rem;\n  font-weight: 500;\n  display: block;\n  border: 1px solid #b9cc95;\n  text-align: center;\n  border-radius: 5px;\n  padding: 4px;\n  background: #f5fbea;\n  margin-bottom: 15px;\n}\n.chances-cont > span {\n  display: inline-block;\n  background: var(--ion-color-success);\n  padding: 5px 8px;\n  color: #fff;\n  font-size: 90%;\n  border-radius: 5px;\n}\n.box-prog .count {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-top: 5px;\n  color: #000;\n}\n.box-prog ion-icon {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  margin: 0px auto;\n  bottom: -5px;\n  padding: 3px;\n  font-size: 1rem;\n}\n.box-prog ion-col > div {\n  color: #777;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 10px 11px;\n  padding-top: 6px;\n  line-height: 15px;\n  border-width: 2px;\n}\n.box-prog ion-col.selected:after {\n  border-right-width: 2px;\n  border-bottom-width: 2px;\n  height: 16px;\n  width: 16px;\n  bottom: -3px;\n}\n.modal-text {\n  background: linear-gradient(-45deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);\n  background-size: 400% 400%;\n  background-repeat: no-repeat;\n  background-position: 0% 0%, 100% 0%;\n  animation: animate 4.5s ease-in-out infinite;\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #fff;\n}\n.modal-text h3 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-top: 0px;\n}\n.modal-text div {\n  font-size: 1.1rem;\n}\n@keyframes animate {\n  0% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\nion-tab-bar {\n  margin: -12px;\n  margin-bottom: 0px;\n}\n.btn-cont.footerfixed {\n  bottom: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3Rvci1yZXBvcnQtc3RhZ2V3aXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFlLFlBQUE7QUFFZjtBQURJO0VBQVUsaUJBQUE7RUFBbUIsb0JBQUE7RUFBc0IsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixnQkFBQTtBQVExRjtBQVBJO0VBQUcsZUFBQTtFQUFpQixhQUFBO0VBQWUsa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIsV0FBQTtFQUFhLG9DQUFBO0VBQXNDLGdCQUFBO0FBZ0JuSTtBQWZRO0VBQUUsV0FBQTtFQUFhLGtCQUFBO0FBbUJ2QjtBQWpCSTtFQUFZLG9DQUFBO0VBQXFDLGtCQUFBO0VBQW9CLGdCQUFBO0FBc0J6RTtBQXJCUTtFQUFRLDJDQUFBO0FBd0JoQjtBQXZCWTtFQUFTLG1CQUFBO0VBQXFCLGtCQUFBO0FBMkIxQztBQTFCZ0I7RUFBTyxnQkFBQTtBQTZCdkI7QUE1QmdCO0VBQWMsbUJBQUE7RUFBcUIsZ0JBQUE7QUFnQ25EO0FBL0JnQjtFQUFZLGtCQUFBO0VBQW9CLHlDQUFBO0FBbUNoRDtBQWpDWTtFQUFhLGtCQUFBO0FBb0N6QjtBQWpDWTtFQUFhLG1CQUFBO0FBb0N6QjtBQW5DWTtFQUFRLGtCQUFBO0VBQW9CLDRCQUFBO0FBdUN4QztBQXJDUTtFQUFXLGtCQUFBO0FBd0NuQjtBQXRDSTtFQUFTLG1CQUFBO0VBQXFCLGtCQUFBO0FBMENsQztBQXpDUTtFQUFTLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixZQUFBO0VBQWMsd0JBQUE7RUFBMEIsV0FBQTtFQUFhLFNBQUE7QUFrRHpIO0FBakRRO0VBQVMsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixrQkFBQTtBQXNEckQ7QUFyRFk7RUFBYyxZQUFBO0VBQWMsZ0JBQUE7RUFBa0IsV0FBQTtFQUFhLFdBQUE7QUEyRHZFO0FBMURZO0VBQUcsV0FBQTtBQTZEZjtBQTVEWTtFQUFTLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxRQUFBO0VBQVUsaUJBQUE7QUFrRS9EO0FBaEVRO0VBQW1CLGNBQUE7QUFtRTNCO0FBbEVRO0VBQVcsZUFBQTtBQXFFbkI7QUFwRVE7RUFBYSxtQkFBQTtBQXVFckI7QUFyRUk7RUFBWSxjQUFBO0VBQWdCLGVBQUE7QUF5RWhDO0FBdEVBO0VBQWMsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxtQkFBQTtFQUFxQixtQkFBQTtBQWtGdks7QUFqRkk7RUFBTyxxQkFBQTtFQUF1QixvQ0FBQTtFQUFzQyxnQkFBQTtFQUFrQixXQUFBO0VBQWEsY0FBQTtFQUFnQixrQkFBQTtBQXlGdkg7QUFwRkk7RUFBTyxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLFdBQUE7QUEyRmpFO0FBMUZJO0VBQVMsa0JBQUE7RUFBb0IsU0FBQTtFQUFXLFVBQUE7RUFBWSxnQkFBQTtFQUFrQixZQUFBO0VBQWMsWUFBQTtFQUFjLGVBQUE7QUFtR3RHO0FBakdRO0VBQU0sV0FBQTtFQUFhLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsaUJBQUE7QUEwR3ZIO0FBekdRO0VBQWlCLHVCQUFBO0VBQXdCLHdCQUFBO0VBQTBCLFlBQUE7RUFBYyxXQUFBO0VBQWEsWUFBQTtBQWdIdEc7QUF6R0E7RUFBYSx3SkFBQTtFQUNULDBCQUFBO0VBQ0YsNEJBQUE7RUFDQSxtQ0FBQTtFQUFvQyw0Q0FBQTtFQUE4QyxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixXQUFBO0FBaUg1SDtBQWhISTtFQUFHLGlCQUFBO0VBQW1CLGdCQUFBO0VBQWtCLGVBQUE7QUFxSDVDO0FBcEhJO0VBQUksaUJBQUE7QUF1SFI7QUFwSEE7RUFDSTtJQUNFLDBCQUFBO0VBdUhKO0VBckhFO0lBQ0UsNkJBQUE7RUF1SEo7RUFySEU7SUFDRSwwQkFBQTtFQXVISjtBQUNGO0FBcEhFO0VBQVksYUFBQTtFQUFlLGtCQUFBO0FBd0g3QjtBQXRIRTtFQUFzQixZQUFBO0FBMEh4QiIsImZpbGUiOiJwcmVkaWN0b3ItcmVwb3J0LXN0YWdld2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVnZS1saXN0eyBwYWRkaW5nOiAwcHg7XHJcbiAgICBpb24tc2xpZGV7cGFkZGluZzogMHB4IDEwcHg7IHBhZGRpbmctYm90dG9tOiAxMHB4OyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAwLjlyZW07IHRleHQtYWxpZ246IGxlZnQ7fVxyXG4gICAgaDV7Zm9udC1zaXplOiAxcmVtOyBtYXJnaW46IC0xNXB4OyBwYWRkaW5nOiAxMHB4IDE1cHg7IG1hcmdpbi1ib3R0b206IDE1cHg7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IGZvbnQtd2VpZ2h0OiA0MDA7fVxyXG4gICAgICAgIHB7Y29sb3I6ICM1NTU7IG1hcmdpbi1ib3R0b206IDVweDt9XHJcbiAgICBcclxuICAgIC5ncmlkLWluZm97IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTsgICBib3JkZXItcmFkaXVzOiA1cHg7IG92ZXJmbG93OiBoaWRkZW47ICAgICAgXHJcbiAgICAgICAgaW9uLXJvd3tib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICBpb24tY29seyBwYWRkaW5nOiAwLjVyZW0gN3B4OyBmb250LXNpemU6IDAuODlyZW07XHJcbiAgICAgICAgICAgICAgICBzdHJvbmd7Zm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtiYWNrZ3JvdW5kOiAjZmZmM2YzOyB0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgICAgICAgICAgICAgICYgKyBpb24tY29se3BhZGRpbmctbGVmdDogMTBweDsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOiAwcHg7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRhYmxle1xyXG4gICAgICAgICAgICBpb24tcm93LmhlYWR7YmFja2dyb3VuZDogI2ZmZjNmMzt9XHJcbiAgICAgICAgICAgIGlvbi1jb2x7dGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAxcmVtIDdweCAhaW1wb3J0YW50O31cclxuICAgICAgICB9XHJcbiAgICAgICAgJisgc2VjdGlvbnttYXJnaW4tdG9wOiAxLjVyZW07fVxyXG4gICAgfSAgIFxyXG4gICAgc2VjdGlvbnsgcGFkZGluZzogMS4ycmVtIDBweDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6YmVmb3Jle2NvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYmFja2dyb3VuZDogI2VlZTsgaGVpZ2h0OiAxMHB4OyB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7IGxlZnQ6IC0xNXB4OyB0b3A6IC01cHg7fSAgICAgICAgXHJcbiAgICAgICAgaW9uLXRleHR7ZGlzcGxheTogYmxvY2s7IHBhZGRpbmctbGVmdDogMjNweDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuY2hhbmNlcy1jb250e3BhZGRpbmc6IDBweDsgYmFja2dyb3VuZDogbm9uZTsgYm9yZGVyOiAwcHg7IGNvbG9yOiAjMDAwO31cclxuICAgICAgICAgICAgaDZ7bWFyZ2luOiAwcHg7fVxyXG4gICAgICAgICAgICBpb24taWNvbntwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IC00cHg7IHRvcDogMHB4OyBmb250LXNpemU6IDEuNnJlbTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi10ZXh0ICsgLmFjdGl2ZXtkaXNwbGF5OiBibG9jazt9XHJcbiAgICAgICAgJisgc2VjdGlvbnttYXJnaW4tdG9wOiAwcHg7fVxyXG4gICAgICAgICY6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbTogMHB4O30gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbnsgaGVpZ2h0OiAyLjVyZW07IGZvbnQtc2l6ZTogMXJlbTt9XHJcbn1cclxuXHJcbi5jaGFuY2VzLWNvbnR7Zm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogNTAwOyBkaXNwbGF5OiBibG9jazsgYm9yZGVyOiAxcHggc29saWQgI2I5Y2M5NTsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOiA1cHg7IHBhZGRpbmc6IDRweDsgYmFja2dyb3VuZDogI2Y1ZmJlYTsgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgID4gc3BhbntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTsgcGFkZGluZzogNXB4IDhweDsgY29sb3I6ICNmZmY7IGZvbnQtc2l6ZTogOTAlOyBib3JkZXItcmFkaXVzOiA1cHg7fVxyXG59XHJcblxyXG4uYm94LXByb2d7XHJcbiAgICBcclxuICAgIC5jb3VudHtmb250LXNpemU6IDEuMXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLXRvcDogNXB4OyBjb2xvcjogIzAwMDt9XHJcbiAgICBpb24taWNvbntwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDBweDsgcmlnaHQ6IDBweDsgbWFyZ2luOiAwcHggYXV0bzsgYm90dG9tOiAtNXB4OyBwYWRkaW5nOiAzcHg7IGZvbnQtc2l6ZTogMXJlbTsgfVxyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICA+IGRpdntjb2xvcjogIzc3NzsgZm9udC13ZWlnaHQ6IDUwMDsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOiAxMHB4IDExcHg7IHBhZGRpbmctdG9wOiA2cHg7IGxpbmUtaGVpZ2h0OiAxNXB4OyBib3JkZXItd2lkdGg6IDJweDt9XHJcbiAgICAgICAgJi5zZWxlY3RlZDphZnRlcntib3JkZXItcmlnaHQtd2lkdGg6MnB4OyBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7IGhlaWdodDogMTZweDsgd2lkdGg6IDE2cHg7IGJvdHRvbTogLTNweDt9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4ubW9kYWwtdGV4dHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzNmNTFiMSAwJSwgIzVhNTVhZSAxMyUsICM3YjVmYWMgMjUlLCAjOGY2YWFlIDM4JSwgI2E4NmFhNCA1MCUsICNjYzZiOGUgNjIlLCAjZjE4MjcxIDc1JSwgI2YzYTQ2OSA4NyUsICNmN2M5NzggMTAwJSk7O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCUsIDEwMCUgMCU7YW5pbWF0aW9uOiBhbmltYXRlIDQuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogM3JlbSAxcmVtOyBjb2xvcjogI2ZmZjtcclxuICAgIGgze2ZvbnQtc2l6ZTogMS42cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tdG9wOiAwcHg7fVxyXG4gICAgZGl2e2ZvbnQtc2l6ZTogMS4xcmVtO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRle1xyXG4gICAgMCV7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXRhYi1iYXJ7bWFyZ2luOiAtMTJweDsgbWFyZ2luLWJvdHRvbTogMHB4O31cclxuXHJcbiAgLmJ0bi1jb250LmZvb3RlcmZpeGVke2JvdHRvbTogMzhweDt9Il19 */");

/***/ }),

/***/ 60640:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/predictor-report-stagewise/predictor-report-stagewise.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content class=\"content-cont\">\n  <app-top-links-predictor></app-top-links-predictor>\n  <div class=\"main-cont\">\n    <h6 class=\"hdng-line\">\n      <span>Structured College List</span>\n    </h6>\n  </div>\n  <section class=\"main-cont pt-0\">\n    <ion-text color=\"success\">\n      <h4 class=\"m-0\">{{lblRank}}: <strong> {{rank}}</strong></h4>\n    </ion-text>\n  </section>\n  <div class=\"main-stage-list\">\n    <div class=\"main-cont\">\n      <h5 class=\"hdng-stage\">\n        <strong>{{sequence}}.</strong><span>{{stepName}} ({{resultCount}}) </span>\n      </h5>      \n    </div>\n    <section>  \n      <ng-container *ngIf=\"arrPredictor?.length == 0\">\n        <div class=\"no-data text-center pb-0\">\n          <h3>Your NEET Score is too low</h3>\n          <ion-icon name=\"sad-outline\"></ion-icon>\n          <h5 class=\"mb-2\">Based on your NEET Score, Predicted Rank & your specified Budget, you are not getting any options from {{stepName}}</h5>                  \n        </div>\n      </ng-container>\n      \n      <ion-slides [options]=\"listOpts\" class=\"college-list\" *ngIf=\"arrPredictor?.length > 0\">\n        <ion-slide *ngFor=\"let item of arrPredictor\">\n          <div class=\"white-box p-2\">\n            <h5>{{item.collegeName}}</h5>\n            <span class=\"chances-cont mb-2\">You {{item.admissionChances == 'Sure to Get' ? 'are' : 'have'}} <span [ngClass]=\"{'bg-dark': item.admissionChances == 'No Chance','bg-danger': item.admissionChances == 'Very Difficult','bg-warning': item.admissionChances == 'Low Chance', 'bg-orange': item.admissionChances == 'High Chance','bg-success': item.admissionChances == 'Sure to Get'}\">{{item.admissionChances}}</span> here</span>\n            <ion-grid fixed class=\"grid-info\">\n              <ion-row>\n                <ion-col size=\"4\"><strong>District</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.districtName}}, {{item.stateName}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>Managed by</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.managementType}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>University</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.universityName}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>University Type</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.universityType}}</span></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"4\"><strong>Course Budget</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.totalBudget | currency:'INR' : 'symbol' : '1.0-0'}}</span> <span class=\"seat-type\">{{item.seatType}} Seat</span> </ion-col>\n              </ion-row>           \n              <ion-row>\n                <ion-col size=\"4\"><strong>Closing Rank</strong></ion-col>\n                <ion-col size=\"8\"><span>{{item.maxRank}}</span></ion-col>\n              </ion-row>          \n            </ion-grid>  \n            <div class=\"btn-cont mb-3\">\n              <ion-button (click)=\"onClickViewMore(item.collegeID)\" expand=\"block\" color=\"primary\" fill=\"outline\">View More</ion-button>\n            </div>\n            <!-- <section class=\"pb-0\" *ngIf=\"arrActivatedpackage.packageId < 3\">\n              <ion-button (click)=\"onClickUpgrade()\" expand=\"block\" color=\"secondary\">Get full list of Colleges</ion-button>\n            </section> -->\n          </div>\n        </ion-slide>\n      </ion-slides>\n      <div class=\"main-cont\">\n        <ion-button (click)=\"nextOptions()\" expand=\"block\" shape=\"round\" *ngIf=\"nextStepName\">\n          Explore {{nextStepName}}\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n         </ion-button>\n\n         <ion-button [routerLink]=\"['/home/college-predictor/personalized-report']\"  expand=\"block\" shape=\"round\" *ngIf=\"sequence > 4\">\n          Publish My Personalized Report\n         </ion-button>\n\n         <ion-button (click)=\"previousOptions()\" expand=\"block\" fill=\"outline\" *ngIf=\"prevStepName\">\n         Back to {{prevStepName}}\n         <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n         </ion-button>\n      </div>\n    </section>\n\n  \n    \n    <section class=\"main-cont d-none\">\n      <div class=\"white-box p-2 mb-3 text-justify hdng-content\">\n      <div [innerHTML] = \"stepDesc\"></div>        \n    </div>\n    </section>\n    <br><br>\n    <section class=\"footerfixed d-none\">    \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">          \n            <ion-button expand=\"block\" color=\"primary\" fill=\"clear\" (click)=\"previousOptions()\" [ngClass]=\"{'disabled': sequence < 2}\">\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>            \n          <ion-col size=\"10\" class=\"text-right\">          \n            <ion-button expand=\"block\" color=\"primary\" fill=\"clear\" (click)=\"nextOptions()\" [ngClass]=\"{'disabled': sequence > 4}\">Check {{nextStepName}}\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>          \n            </ion-button>\n          </ion-col>        \n        </ion-row>\n      </ion-grid>\n    </section>\n  </div>\n\n  <section class=\"toogle-panel bottom\" [ngClass]=\"{isOpen: isModalMore}\">\n    <div class=\"toogle-cont\">\n      <ion-text class=\"btn-close\" (click)=\"modalClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text>\n      <div class=\"inner-section college-list\">    \n        <h4 class=\"text-left\">{{arrMoreData.collegeName}}</h4>          \n        <ion-grid fixed class=\"grid-info\">\n          <ion-row>\n            <ion-col size=\"4\"><strong>No of Faculty</strong></ion-col>\n            <ion-col size=\"8\"><span>{{arrMoreData.noOfFaculty == null ? 'NA' : arrMoreData.noOfFaculty}}</span></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\"><strong>Annual Fees</strong></ion-col>\n            <ion-col size=\"8\"><span>{{arrMoreData.annualBudget | currency:'INR'}}</span></ion-col>\n          </ion-row> \n          <ion-row>\n            <ion-col size=\"4\"><strong>Establishment year</strong></ion-col>\n            <ion-col size=\"8\"><span>{{arrMoreData.yearOfInspection}}</span></ion-col>\n          </ion-row>   \n          <ion-row>\n            <ion-col size=\"4\"><strong>College Intake</strong></ion-col>\n            <ion-col size=\"8\"><span>{{arrMoreData.intakeSeats}}</span></ion-col>\n          </ion-row>  \n          <ion-row>\n            <ion-col size=\"4\"><strong>Notes</strong></ion-col>\n            <ion-col size=\"8\"><span>{{arrMoreData.statusOfMCIRec == '' ? 'NA' : arrMoreData.statusOfMCIRec}}</span></ion-col>\n          </ion-row>        \n        </ion-grid>\n        <br>\n      </div>\n    </div>\n  </section>\n\n</ion-content>\n\n<div class=\"modal-cont modal-poster\" [ngClass]=\"{active: isModal}\">\n  <div class=\"modal-wrapper\">\n    <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\n      <ion-icon name=\"close-outline\"></ion-icon>\n    </ion-text>\n    <div class=\"modal-body\">\n      <ion-card class=\"m-0\">\n        <div class=\"modal-text\">\n          <h3>Unlock Premium Plan</h3>\n          <div>To access this feature</div>\n        </div>      \n        <ion-card-content>        \n          <ul class=\"bullet-list md\">\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>National Rank Predictor</span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Full list of AIQ Based College Prediction </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Full list of State Level College Prediction </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Complete Personalized Report </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>AIQ & SLQ based Choice Filling Form </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span>Hand holding & guidance throughout Indian counseling Sessions </span> </li>\n            <li> <ion-icon name=\"shield-checkmark\" color=\"success\"></ion-icon> <span> Free Access to MBBS Foundation Course </span> </li>\n          </ul>          \n          <div class=\"btn-cont mt-3 mb-0\">\n            <ion-button [routerLink]=\"['/home/college-predictor/predictor-checkout','upgrade']\" routerLinkActive=\"router-link-active\"  expand=\"block\">Upgrade Plan</ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_predictor-report-stagewise_predictor-report-stagewise_module_ts.js.map