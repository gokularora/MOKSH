(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_service-selection_service-selection_module_ts"],{

/***/ 93061:
/*!***********************************************************************************************!*\
  !*** ./src/app/home/application-center/service-selection/service-selection-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSelectionPageRoutingModule": () => (/* binding */ ServiceSelectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _service_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-selection.page */ 39101);




const routes = [
    {
        path: '',
        component: _service_selection_page__WEBPACK_IMPORTED_MODULE_0__.ServiceSelectionPage
    }
];
let ServiceSelectionPageRoutingModule = class ServiceSelectionPageRoutingModule {
};
ServiceSelectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiceSelectionPageRoutingModule);



/***/ }),

/***/ 77061:
/*!***************************************************************************************!*\
  !*** ./src/app/home/application-center/service-selection/service-selection.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSelectionPageModule": () => (/* binding */ ServiceSelectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _service_selection_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-selection-routing.module */ 93061);
/* harmony import */ var _service_selection_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-selection.page */ 39101);








let ServiceSelectionPageModule = class ServiceSelectionPageModule {
};
ServiceSelectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _service_selection_routing_module__WEBPACK_IMPORTED_MODULE_1__.ServiceSelectionPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_service_selection_page__WEBPACK_IMPORTED_MODULE_2__.ServiceSelectionPage]
    })
], ServiceSelectionPageModule);



/***/ }),

/***/ 39101:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/service-selection/service-selection.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSelectionPage": () => (/* binding */ ServiceSelectionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_service_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./service-selection.page.html */ 60349);
/* harmony import */ var _service_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-selection.page.scss */ 55967);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);













let ServiceSelectionPage = class ServiceSelectionPage {
    constructor(headerTitle, toastr, apiApplicationService, route, loader, router, apiGeneral, auth, navCtrl) {
        this.headerTitle = headerTitle;
        this.toastr = toastr;
        this.apiApplicationService = apiApplicationService;
        this.route = route;
        this.loader = loader;
        this.router = router;
        this.apiGeneral = apiGeneral;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.ipAddress = "";
        this.isAvailed = false;
        this.applicationID = "";
        this.arrServiceFees = [];
        this.arrMendServices = [];
        this.arrOptServices = [];
        this.arrSelectedService = [];
        this.webAssetsPath = "";
        this.FinalAmount = 0;
        this.totalServiceAmount = 0;
        this.totalGSTAmount = 0;
        this.totalGSTAmountOpt = 0;
        this.isOptional = false;
        this.arrAppUniversity = [];
        this.arrPersonalDeatails = [];
        this.paymentId = 0;
        this.totalFeesPaid = 0;
        this.isAvailedCount = 0;
        this.isServiceUpdated = false;
        this.arrSteps = { 'academicDetails': null, 'documentsUpload': null, 'payment': null, 'personalDetails': null, 'serviceSelection': null, 'universityDetails': null };
        this.headerTitle.title = "Service Selection";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.getIpAddress();
        this.applicationID = this.route.snapshot.params['appID'];
        this.getApplicationData();
    }
    ionViewWillEnter() {
        this.getAppUniversity();
        this.getApplicationSteps();
        this.isServiceUpdated = false;
    }
    getServiceSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            this.arrServiceFees = [];
            this.arrMendServices = [];
            this.arrOptServices = [];
            let postData = { "BranchId": 1, "UniversityID": this.arrAppUniversity["universityId"], "ApplicationID": this.applicationID };
            yield this.apiApplicationService.getServiceSelection(JSON.stringify(postData)).then(resp => {
                if (resp.length > 0) {
                    this.arrServiceFees = resp;
                    this.arrServiceFees.forEach(i => {
                        if (i.serviceType == "Mandatory") {
                            i.isAvailed = true;
                            this.arrMendServices.push(i);
                        }
                        else if (i.serviceType == "Optional") {
                            this.arrOptServices.push(i);
                        }
                    });
                    console.log(this.arrOptServices);
                    this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.webAssetsPath + "service-images/";
                    this.calcServiceAmount();
                    this.getPayment();
                }
            })
                .catch(err => {
                console.log(err);
                this.loader.loadingDismiss();
            });
        });
    }
    getApplicationSteps() {
        this.apiApplicationService.getApplicationSteps().then(resp => {
            this.arrSteps = resp;
        });
    }
    getPayment() {
        let postData = '{ "ApplicationId":' + this.applicationID + ',"IsActive":true}';
        this.apiApplicationService.getPayment(postData).then(resp => {
            this.loader.loadingDismiss();
            if (resp.length > 0) {
                //this.apiApplicationService.arrSetPayment = resp[0];  
                this.paymentId = resp[0]["paymentId"];
                this.totalFeesPaid = resp[0]["totalFeesPaidWithTax"];
                //this.getPaymentSub();
            }
        }).catch(err => console.log("getPayment: " + err));
    }
    getPaymentSub() {
        let postData = '{"PaymentId":null,"ApplicationId":' + this.applicationID + ',"status":"UnPaid","IsActive":true}';
        this.apiApplicationService.getPaymentSub(postData).then(resp => {
            if (resp.length > 0) {
                this.apiApplicationService.arrSetPaymentSub = resp;
                console.log('xxx' + this.apiApplicationService.arrSetPaymentSub);
            }
        }).catch(err => console.log("getPaymentSub: " + err));
    }
    calcServiceAmount() {
        this.totalServiceAmount = 0, this.totalGSTAmount = 0, this.totalGSTAmountOpt = 0, this.FinalAmount = 0, this.totalGSTAmountOpt = 0;
        var countOpt = 0;
        this.arrMendServices.forEach(i => {
            if (i.isAvailed === true) {
                this.totalServiceAmount += i.serviceAmount;
                this.totalGSTAmount += ((i.serviceAmount * i.taxPercent) / 100);
            }
        });
        this.arrOptServices.forEach(i => {
            if (i.isAvailed == true) {
                this.totalServiceAmount += i.serviceAmount;
                this.totalGSTAmountOpt += ((i.serviceAmount * i.taxPercent) / 100);
                countOpt++;
            }
        });
        if (countOpt > 0) {
            this.isOptional = true;
        }
        setTimeout(() => {
            this.FinalAmount = this.totalServiceAmount + this.totalGSTAmount + this.totalGSTAmountOpt;
        }, 100);
    }
    itemAdd(item, index) {
        this.arrOptServices[index]["isAvailed"] = true;
        this.calcServiceAmount();
        this.isOptional = true;
        this.isServiceUpdated = true;
    }
    itemRemove(item, index) {
        this.isServiceUpdated = true;
        this.arrOptServices[index]["isAvailed"] = false;
        if (this.arrOptServices[index]["paymentSubId"] != 0 && this.arrOptServices[index]["status"] == "UnPaid") {
            this.deletePaymentSub(index);
        }
        this.calcServiceAmount();
        this.arrOptServices.forEach(i => {
            if (i.isAvailed == true) {
                this.isAvailedCount++;
            }
            if (this.isAvailedCount == 0) {
                this.isOptional = false;
            }
        });
    }
    deletePaymentSub(index) {
        //this.toastr.toastSuccess(this.arrOptServices[index]["serviceName"] + "Deleted Successfully!");
        var paymentSubId = this.arrOptServices[index]["paymentSubId"];
        this.apiApplicationService.DeletePaymentSubID(paymentSubId).then(resp => {
            console.log(this.arrOptServices[index]["serviceName"] + "Deleted Successfully!");
        })
            .catch(err => {
            console.log("deletePaymentSub:" + err);
            this.toastr.toastError(err.error.status);
        });
    }
    submit() {
        var arrOptSelected = [];
        this.arrOptServices.forEach(i => {
            if (i.isAvailed == true) {
                arrOptSelected.push(i);
            }
        });
        // this.arrSelectedService = this.arrMendServices.concat(arrOptSelected);    
        // this.setPayment();
        if (this.isServiceUpdated == false && this.totalFeesPaid > 0) {
            this.router.navigate(["/home/application-center/payment-selection", this.applicationID]);
            return false;
        }
        else {
            this.arrSelectedService = this.arrMendServices.concat(arrOptSelected);
            this.setPayment();
        }
    }
    setPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var arrSetPayment = this.apiApplicationService.arrSetPayment;
            arrSetPayment["paymentId"] = this.paymentId;
            arrSetPayment["applicationId"] = parseInt(this.applicationID);
            arrSetPayment["appUniversityId"] = this.arrAppUniversity["appUniversityId"];
            arrSetPayment["programId"] = this.arrAppUniversity["programId"];
            arrSetPayment["countryId"] = this.arrAppUniversity["countryId"];
            arrSetPayment["universityId"] = this.arrAppUniversity["universityId"];
            arrSetPayment["serviceCost"] = this.totalServiceAmount;
            arrSetPayment["discountAmount"] = 0.00;
            arrSetPayment["totalFees"] = this.totalServiceAmount;
            arrSetPayment["totalFeesWithTax"] = this.FinalAmount;
            arrSetPayment["totalFeesPaidWithTax"] = 0.00;
            arrSetPayment["status"] = this.apiApplicationService.enumPaymentStatus[0];
            arrSetPayment["branchId"] = this.arrPersonalDeatails["branchId"];
            arrSetPayment["createdDate"] = this.apiGeneral.getCurrentDateTime();
            ;
            arrSetPayment["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
            ;
            arrSetPayment["createdBy"] = "MobileApp";
            arrSetPayment["modifiedBy"] = "MobileApp";
            arrSetPayment["createdIp"] = this.ipAddress;
            arrSetPayment["modifiedIp"] = this.ipAddress;
            arrSetPayment["isActive"] = true;
            yield this.apiApplicationService.setPayment(JSON.stringify(arrSetPayment), this.paymentId).then(resp => {
                if (this.paymentId == 0) {
                    this.paymentId = resp.result.paymentId;
                }
                console.log("Payment Saved Successfully!");
                this.setPaymentSub();
            })
                .catch(err => {
                console.log("setPayment:" + err);
                this.toastr.toastError(err.error.status);
            });
        });
    }
    setPaymentSub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var arrSetPaymentSub = this.apiApplicationService.arrSetPaymentSub;
            yield this.arrSelectedService.forEach((i) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                setTimeout(() => {
                    arrSetPaymentSub["paymentSubId"] = i["paymentSubId"];
                    arrSetPaymentSub["paymentId"] = this.paymentId;
                    arrSetPaymentSub["applicationId"] = parseInt(this.applicationID);
                    arrSetPaymentSub["feesId"] = i["feesID"];
                    arrSetPaymentSub["productDepartmentId"] = this.arrPersonalDeatails["productDepartmentId"];
                    arrSetPaymentSub["serviceId"] = i["serviceId"];
                    arrSetPaymentSub["parentServiceId"] = i["parentServiceId"];
                    arrSetPaymentSub["projectedAmount"] = 0;
                    arrSetPaymentSub["serviceCost"] = i["serviceAmount"];
                    arrSetPaymentSub["serviceDiscount"] = 0.00;
                    arrSetPaymentSub["serviceAmount"] = i["serviceAmount"];
                    arrSetPaymentSub["taxPercent"] = i["taxPercent"];
                    arrSetPaymentSub["serviceAmountWithTax"] = i["serviceAmount"] + ((i["serviceAmount"] * i["taxPercent"]) / 100);
                    arrSetPaymentSub["serviceAmountPaid"] = 0.00;
                    arrSetPaymentSub["serviceAmountPaidWithoutTax"] = 0.00;
                    arrSetPaymentSub["partPayment"] = 0.00;
                    arrSetPaymentSub["status"] = this.apiApplicationService.enumPaymentStatus[0];
                    arrSetPaymentSub["paymentMode"] = "";
                    arrSetPaymentSub["branchId"] = this.arrPersonalDeatails["branchId"];
                    arrSetPaymentSub["createdDate"] = this.apiGeneral.getCurrentDateTime();
                    arrSetPaymentSub["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
                    arrSetPaymentSub["createdBy"] = "MobileApp";
                    arrSetPaymentSub["modifiedBy"] = "MobileApp";
                    arrSetPaymentSub["createdIp"] = this.ipAddress;
                    arrSetPaymentSub["modifiedIp"] = this.ipAddress;
                    arrSetPaymentSub["isActive"] = true;
                    this.apiApplicationService.setPaymentSub(JSON.stringify(arrSetPaymentSub), i["paymentSubId"]).then(resp => {
                        this.isLoading = false;
                        this.router.navigate(["/home/application-center/payment-selection", this.applicationID]);
                    })
                        .catch(err => {
                        console.log("setPaymentSub:" + err);
                        this.isLoading = false;
                        this.toastr.toastError(err.error.status);
                    });
                });
            }), 200);
            setTimeout(() => {
                this.updatePaymentStatus();
            }, 2000);
            console.log("Sub Payment Saved Successfully!");
        });
    }
    updatePaymentStatus() {
        this.apiApplicationService.getPaymentStatus(this.applicationID).then(resp => {
        });
    }
    back() {
        this.navCtrl.back();
        //this.router.navigate(['/home/application-center/upload-documents', this.applicationID]);
    }
    doRefresh(event) {
        this.resetPayment();
        this.getServiceSelection();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    resetPayment() {
        this.totalGSTAmount = 0;
        this.totalGSTAmountOpt = 0;
        this.FinalAmount = 0;
        this.arrServiceFees = [];
        this.arrMendServices = [];
        this.arrOptServices = [];
        this.arrSelectedService = [];
        this.getPayment();
    }
    //== General Function start
    getAppUniversity() {
        let postData = '{ "ApplicationId":' + this.applicationID + ',"IsActive":true }';
        this.apiApplicationService.getAppUniversity(postData).then(resp => {
            if (resp.length > 0) {
                this.arrAppUniversity = resp[0];
                this.getServiceSelection();
            }
        });
    }
    getApplicationData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.apiApplicationService.getPersonalDetailsStorage().then(resp => {
                if (resp != null) {
                    this.arrPersonalDeatails = resp;
                }
                else {
                    this.toastr.toastError("Error occured while fecthing Personal Details");
                    console.log("Error occured while fecthing Personal Details");
                }
            });
        });
    }
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
ServiceSelectionPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTitleService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__.ApiApplicationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_2__.ApiGeneralService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController }
];
ServiceSelectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-service-selection',
        template: _raw_loader_service_selection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_service_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServiceSelectionPage);



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

/***/ 55967:
/*!***************************************************************************************!*\
  !*** ./src/app/home/application-center/service-selection/service-selection.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn-cont {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2Utc2VsZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLFdBQUE7QUFFViIsImZpbGUiOiJzZXJ2aWNlLXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbnR7bWFyZ2luOiAwcHg7fSJdfQ== */");

/***/ }),

/***/ 60349:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/service-selection/service-selection.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-nav-steps></app-nav-steps>\r\n  <div class=\"main-cont service-cont\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <section *ngIf=\"totalFeesPaid == 0\">\r\n      <h4>Summary of MOKSH charges</h4>\r\n      <div class=\"white-box pb-0\">\r\n\r\n        <ion-grid fixed class=\"service-list\">\r\n          <ion-row class=\"heading no-border\">\r\n            <ion-col size=\"12\">\r\n              <h5>MANDATORY SERVICES</h5>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row *ngFor=\"let item of arrMendServices\" class=\"no-border\">\r\n            <ion-col size=\"8\">\r\n              <h6>{{item.serviceName}}</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\">{{item.serviceAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"heading no-border\" *ngIf=\"isOptional\">\r\n            <ion-col size=\"12\">\r\n              <h5>Optional SERVICES</h5>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ng-container *ngFor=\"let item of arrOptServices; let index = index\">\r\n            <ion-row class=\"no-border\" *ngIf=\"item.isAvailed\">\r\n              <ion-col size=\"8\">\r\n                <h6>{{item.serviceName}} <small>(GST {{item.taxPercent}}%)</small></h6>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"text-right\">\r\n                <div class=\"price\">{{item.serviceAmount | currency:'INR'}} <ion-icon name=\"close-circle-outline\"\r\n                    color=\"primary\" (click)=\"itemRemove(item,index)\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n\r\n\r\n          <ion-row class=\"total mt-2\">\r\n            <ion-col size=\"8\">\r\n              <h6>SUB TOTAL</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\">{{totalServiceAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <!-- <ion-row class=\"total no-border\">\r\n            <ion-col size=\"8\">\r\n              <h6>GST on Mandatory Service</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\"> {{totalGSTAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"total no-border\" *ngIf=\"isOptional\">\r\n            <ion-col size=\"8\">\r\n              <h6>GST on Optional Service</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\"> {{totalGSTAmountOpt | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"total final\">\r\n            <ion-col size=\"8\">\r\n              <h6><strong>TOTAL</strong></h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\"> {{FinalAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row> -->\r\n        </ion-grid>\r\n      </div>\r\n    </section>\r\n    <section *ngIf=\"totalFeesPaid > 0 && isOptional\">\r\n      <h4>Summary of MOKSH charges</h4>\r\n      <div class=\"white-box\">\r\n\r\n        <ion-grid fixed class=\"service-list\">\r\n          <ion-row class=\"heading no-border\" *ngIf=\"isOptional\">\r\n            <ion-col size=\"12\">\r\n              <h5>Optional SERVICES</h5>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ng-container *ngFor=\"let item of arrOptServices; let index = index\">\r\n            <ion-row class=\"no-border\" *ngIf=\"item.isAvailed\">\r\n              <ion-col size=\"8\">\r\n                <h6>{{item.serviceName}} <small>(GST {{item.taxPercent}}%)</small></h6>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"text-right\">\r\n                <div class=\"price\">{{item.serviceAmount | currency:'INR'}} <ion-icon name=\"close-circle-outline\"\r\n                    color=\"primary\" (click)=\"itemRemove(item,index)\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n        </ion-grid>\r\n      </div>\r\n    </section>\r\n    <section class=\"mt-0\">\r\n      <div class=\"grey-box p-1 primary-light\" style=\"font-size: 14px;\">\r\n        GST as Applicable.\r\n      </div>\r\n    </section>\r\n    <section *ngIf=\"totalFeesPaid == 0\">\r\n      <div class=\"white-box p-2\">        \r\n        <h6 class=\"m-0\" style=\"font-weight: 500;\">You just have to pay only MOKSH Registration Charges to process your application.</h6>\r\n      </div>\r\n      <br><br>\r\n    </section>\r\n    <section *ngIf=\"totalFeesPaid > 0\">\r\n      <h4>Add Optional Services</h4>\r\n      <div class=\"white-box\">\r\n        <ion-grid fixed class=\"service-list type2\">\r\n          <ion-row *ngFor=\"let item of arrOptServices; let index = index\">\r\n            <ion-col size=\"3\">\r\n              <ion-avatar *ngIf=\"item.serviceImage; else elseBlock\">\r\n                <img #thenBlock src=\"{{this.webAssetsPath}}/{{item.serviceId}}/{{item.serviceImage}}\" alt=\"\">\r\n              </ion-avatar>\r\n              <ng-template #elseBlock>\r\n                <ion-avatar>\r\n                  <img #thenBlock src=\"../../assets/no-image.png\" alt=\"\">\r\n                </ion-avatar>\r\n              </ng-template>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <h6>{{item.serviceName}}</h6>\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"7\">\r\n                    <div class=\"price\">{{item.serviceAmount | currency:'INR' : 'symbol' : '1.0-0'}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"5\">\r\n                    <div class=\"btn-cont text-right\" *ngIf=\"item.isAvailed; else AddBlock\">\r\n                      <a class=\"btn btn-solid disabled\">\r\n                        <ion-icon name=\"checkmark-done\"></ion-icon> Added\r\n                      </a>\r\n                    </div>\r\n                    <ng-template #AddBlock>\r\n                      <div class=\"btn-cont text-right\">\r\n                        <a (click)=\"itemAdd(item,index)\" class=\"btn btn-outline success\">\r\n                          <ion-icon name=\"add-outline\"></ion-icon> Add\r\n                        </a>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </section>\r\n    \r\n    <br>\r\n  </div>\r\n  <section class=\"footer-links\">\r\n    <div class=\"main-cont\">  \r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>            \r\n            <ion-button expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"back()\">Back\r\n              <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <!-- <ion-col *ngIf=\"!isOptional\">\r\n            <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"submit()\">Skip\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>            \r\n          </ion-col> -->\r\n          <ion-col>\r\n            <ion-button expand=\"block\" color=\"primary\" (click)=\"submit()\">Book Now\r\n              <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>            \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  \r\n    </div>\r\n  </section>\r\n</ion-content>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_service-selection_service-selection_module_ts.js.map