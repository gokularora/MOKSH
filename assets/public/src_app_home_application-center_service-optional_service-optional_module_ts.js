(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_service-optional_service-optional_module_ts"],{

/***/ 96420:
/*!*********************************************************************************************!*\
  !*** ./src/app/home/application-center/service-optional/service-optional-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceOptionalPageRoutingModule": () => (/* binding */ ServiceOptionalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _service_optional_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-optional.page */ 21603);




const routes = [
    {
        path: '',
        component: _service_optional_page__WEBPACK_IMPORTED_MODULE_0__.ServiceOptionalPage
    }
];
let ServiceOptionalPageRoutingModule = class ServiceOptionalPageRoutingModule {
};
ServiceOptionalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiceOptionalPageRoutingModule);



/***/ }),

/***/ 4977:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/service-optional/service-optional.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceOptionalPageModule": () => (/* binding */ ServiceOptionalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _service_optional_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-optional-routing.module */ 96420);
/* harmony import */ var _service_optional_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-optional.page */ 21603);








let ServiceOptionalPageModule = class ServiceOptionalPageModule {
};
ServiceOptionalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _service_optional_routing_module__WEBPACK_IMPORTED_MODULE_1__.ServiceOptionalPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_service_optional_page__WEBPACK_IMPORTED_MODULE_2__.ServiceOptionalPage]
    })
], ServiceOptionalPageModule);



/***/ }),

/***/ 21603:
/*!***********************************************************************************!*\
  !*** ./src/app/home/application-center/service-optional/service-optional.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceOptionalPage": () => (/* binding */ ServiceOptionalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_service_optional_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./service-optional.page.html */ 74002);
/* harmony import */ var _service_optional_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-optional.page.scss */ 45905);
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













let ServiceOptionalPage = class ServiceOptionalPage {
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
        this.isAvailedCount = 0;
        this.isServiceUpdated = false;
        this.headerTitle.title = "Add-ons";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.getIpAddress();
        this.applicationID = this.route.snapshot.params['appID'];
        this.getServiceSelection();
        this.getAppUniversity();
        this.getApplicationData();
    }
    ionViewWillEnter() {
        this.isServiceUpdated = false;
    }
    getServiceSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            let postData = '{"ProductDepartmentId":null,"ServiceId":null,"ParentServiceId":null,"BranchId":1,"CountryId":null,"ProgramId":null,"UniversityID":3,"ServiceType":null,"IsActive":null,"ApplicationID":' + this.applicationID + '}';
            yield this.apiApplicationService.getServiceSelection(postData).then(resp => {
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
                    setTimeout(() => {
                        this.loader.loadingDismiss();
                    }, 100);
                }
            })
                .catch(err => {
                console.log(err);
                if (err.status == "401") {
                    this.auth.logout();
                }
                this.loader.loadingDismiss();
            });
        });
    }
    getPayment() {
        let postData = '{ "ApplicationId":' + this.applicationID + ',"IsActive":true}';
        this.apiApplicationService.getPayment(postData).then(resp => {
            if (resp.length > 0) {
                //this.apiApplicationService.arrSetPayment = resp[0];  
                this.paymentId = resp[0]["paymentId"];
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
        if (arrOptSelected.length > 0 && this.isServiceUpdated == false) {
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
            arrSetPayment["createdDate"] = this.apiApplicationService.dateTimeNow;
            arrSetPayment["modifiedDate"] = this.apiApplicationService.dateTimeNow;
            arrSetPayment["createdBy"] = "Student";
            arrSetPayment["modifiedBy"] = "Student";
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
                    arrSetPaymentSub["createdDate"] = this.apiApplicationService.dateTimeNow;
                    arrSetPaymentSub["modifiedDate"] = this.apiApplicationService.dateTimeNow;
                    arrSetPaymentSub["createdBy"] = "Student";
                    arrSetPaymentSub["modifiedBy"] = "Student";
                    arrSetPaymentSub["createdIp"] = this.ipAddress;
                    arrSetPaymentSub["modifiedIp"] = this.ipAddress;
                    arrSetPaymentSub["isActive"] = true;
                    this.apiApplicationService.setPaymentSub(JSON.stringify(arrSetPaymentSub), i["paymentSubId"]).then(resp => {
                        console.log(resp);
                        this.isLoading = false;
                        this.router.navigate(["/home/application-center/payment-selection", this.paymentId]);
                    })
                        .catch(err => {
                        console.log("setPaymentSub:" + err);
                        this.isLoading = false;
                        this.toastr.toastError(err.error.status);
                    });
                });
            }), 500);
            console.log("Sub Payment Saved Successfully!");
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
ServiceOptionalPage.ctorParameters = () => [
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
ServiceOptionalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-service-optional',
        template: _raw_loader_service_optional_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_service_optional_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServiceOptionalPage);



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

/***/ 45905:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/service-optional/service-optional.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLW9wdGlvbmFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 74002:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/service-optional/service-optional.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <app-nav-steps></app-nav-steps>\n  <div class=\"main-cont service-cont\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <section *ngIf=\"isOptional\">\n      <h4>Summary of MOKSH charges</h4>\n      <div class=\"white-box\">\n\n        <ion-grid fixed class=\"service-list\">          \n          <ion-row class=\"heading no-border\" *ngIf=\"isOptional\">\n            <ion-col size=\"12\">\n              <h5>Optional SERVICES</h5>\n            </ion-col>\n          </ion-row>\n          <ng-container *ngFor=\"let item of arrOptServices; let index = index\">\n            <ion-row class=\"no-border\" *ngIf=\"item.isAvailed\">\n              <ion-col size=\"8\">\n                <h6>{{item.serviceName}} <small>(GST {{item.taxPercent}}%)</small></h6>\n              </ion-col>\n              <ion-col size=\"4\" class=\"text-right\">\n                <div class=\"price\">{{item.serviceAmount | currency:'INR'}} <ion-icon name=\"close-circle-outline\"\n                    color=\"primary\" (click)=\"itemRemove(item,index)\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n\n\n          <!-- <ion-row class=\"total mt-2\">\n            <ion-col size=\"8\">\n              <h6>SUB TOTAL</h6>\n            </ion-col>\n            <ion-col size=\"4\" class=\"text-right\">\n              <div class=\"price\">{{totalServiceAmount | currency:'INR'}}</div>\n            </ion-col>\n          </ion-row>          -->\n        </ion-grid>\n      </div>\n    </section>\n\n    <section>\n      <h4>Add Optional Services</h4>\n      <div class=\"white-box\">\n        <ion-grid fixed class=\"service-list type2\">\n          <ion-row *ngFor=\"let item of arrOptServices; let index = index\">\n            <ion-col size=\"3\">\n              <ion-avatar *ngIf=\"item.serviceImage; else elseBlock\">\n                <img #thenBlock src=\"{{this.webAssetsPath}}/{{item.serviceId}}/{{item.serviceImage}}\" alt=\"\">\n              </ion-avatar>\n              <ng-template #elseBlock>\n                <ion-avatar>\n                  <img #thenBlock src=\"../../assets/no-image.png\" alt=\"\">\n                </ion-avatar>\n              </ng-template>\n            </ion-col>\n            <ion-col size=\"9\">\n              <h6>{{item.serviceName}}</h6>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"7\">\n                    <div class=\"price\">{{item.serviceAmount | currency:'INR'}}</div>\n                  </ion-col>\n                  <ion-col size=\"5\">\n                    <div class=\"btn-cont text-right\" *ngIf=\"item.isAvailed; else AddBlock\">\n                      <a class=\"btn btn-solid disabled\">\n                        <ion-icon name=\"checkmark-done\"></ion-icon> Added\n                      </a>\n                    </div>\n                    <ng-template #AddBlock>\n                      <div class=\"btn-cont text-right\">\n                        <a (click)=\"itemAdd(item,index)\" class=\"btn btn-outline success\">\n                          <ion-icon name=\"add-outline\"></ion-icon> Add\n                        </a>\n                      </div>\n                    </ng-template>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </section>\n  </div>\n</ion-content>\n\n<section class=\"footer-links\">\n  <div class=\"main-cont\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\n          <ion-button expand=\"block\" color=\"primary\" fill=\"outline\" (click)=\"back()\">Back\n            <ion-ripple-effect></ion-ripple-effect>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button expand=\"block\" color=\"primary\" (click)=\"submit()\" routerLinkActive=\"router-link-active\">Next\n            <ion-ripple-effect></ion-ripple-effect>\n          </ion-button>\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</section>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_service-optional_service-optional_module_ts.js.map