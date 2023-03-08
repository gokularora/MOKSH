(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_college-predictor_predictor-checkout_predictor-checkout_module_ts"],{

/***/ 97673:
/*!************************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-checkout/predictor-checkout-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorCheckoutPageRoutingModule": () => (/* binding */ PredictorCheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _predictor_checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predictor-checkout.page */ 82727);




const routes = [
    {
        path: '',
        component: _predictor_checkout_page__WEBPACK_IMPORTED_MODULE_0__.PredictorCheckoutPage
    }
];
let PredictorCheckoutPageRoutingModule = class PredictorCheckoutPageRoutingModule {
};
PredictorCheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PredictorCheckoutPageRoutingModule);



/***/ }),

/***/ 68528:
/*!****************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-checkout/predictor-checkout.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorCheckoutPageModule": () => (/* binding */ PredictorCheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-super-tabs/angular */ 94801);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _predictor_checkout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-checkout-routing.module */ 97673);
/* harmony import */ var _predictor_checkout_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predictor-checkout.page */ 82727);









let PredictorCheckoutPageModule = class PredictorCheckoutPageModule {
};
PredictorCheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _predictor_checkout_routing_module__WEBPACK_IMPORTED_MODULE_1__.PredictorCheckoutPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__.SuperTabsModule
        ],
        declarations: [_predictor_checkout_page__WEBPACK_IMPORTED_MODULE_2__.PredictorCheckoutPage]
    })
], PredictorCheckoutPageModule);



/***/ }),

/***/ 82727:
/*!**************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-checkout/predictor-checkout.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictorCheckoutPage": () => (/* binding */ PredictorCheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_predictor_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./predictor-checkout.page.html */ 38442);
/* harmony import */ var _predictor_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictor-checkout.page.scss */ 18249);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_payment_integration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/payment-integration.service */ 64229);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-predictor.service */ 8478);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ 3067);



//import { TopLinksPredictorComponent } from 'src/app/components/top-links-predictor/top-links-predictor.component';












let PredictorCheckoutPage = class PredictorCheckoutPage {
    constructor(headerTitleService, route, rotuer, storage, apiPredictorService, laoder, paymentIntegrationService, apiGeneralService, toastr, alert, firebaseAnalytics
    //private topLinksPredictorComponent : TopLinksPredictorComponent
    ) {
        this.headerTitleService = headerTitleService;
        this.route = route;
        this.rotuer = rotuer;
        this.storage = storage;
        this.apiPredictorService = apiPredictorService;
        this.laoder = laoder;
        this.paymentIntegrationService = paymentIntegrationService;
        this.apiGeneralService = apiGeneralService;
        this.toastr = toastr;
        this.alert = alert;
        this.firebaseAnalytics = firebaseAnalytics;
        this.arrUserData = null;
        this.arrPackageName = [];
        this.collegeCount = 0;
        this.ipAddress = "";
        this.arrPackagePayment = null;
        this.memberPaymentId = 0;
        this.arrPaymentSuccess = null;
        this.upgradeType = "";
        this.arrCRMRawData = [];
        this.paymentPackageId = 4;
        this.upgradeType = this.route.snapshot.params["type"];
        this.headerTitleService.isBack = true;
        this.headerTitleService.title = "Select Package";
        if (this.upgradeType == 'upgrade') {
            this.headerTitleService.title = "Upgrade";
        }
    }
    ionViewWillEnter() {
        this.arrPackagePayment = null;
        this.isModalSuccess = false;
        this.getUserDataStorage();
        this.getPredictorForm();
        this.getPackages();
    }
    ngOnInit() {
        this.getIpAddress();
        this.getCollegeCount();
    }
    doRefresh(event) {
        this.getPredictorForm();
        this.getPackages();
        this.getCollegeCount();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getPackages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.arrPackageName = [];
            this.laoder.presentLoading();
            if (this.upgradeType == 'upgrade') {
                this.firebaseAnalytics.logEvent("predictor_upgrade_checkout", { 'resp': 'success', 'page': 'predictor-checkout' });
                yield this.storage.getObject("selectedPackage").then(resp => {
                    this.arrActivatedPackage = resp;
                });
            }
            else {
                this.firebaseAnalytics.logEvent("predictor_checkout", { 'resp': 'success', 'page': 'predictor-checkout' });
            }
            let postdata = {};
            this.apiPredictorService.getPackages(postdata).then(resp => {
                var lookupYear = {};
                var index = -1;
                if (this.upgradeType == 'upgrade') {
                    resp = resp.filter(x => x.packageId > this.arrActivatedPackage.packageId);
                    resp.forEach(el => {
                        el.packageCost -= this.arrActivatedPackage["packageCost"];
                    });
                }
                resp.forEach(i => {
                    i.services = [];
                    if (!(i.packageId in lookupYear)) {
                        index++;
                        lookupYear[i.packageId] = 1;
                        this.arrPackageName.push({ "packageId": i.packageId, "packageName": i.packageName, "packageCost": i.packageCost, "packageCostOld": i.packageCostOld, "services": [], "limit": null });
                    }
                    this.arrPackageName.forEach(e => {
                        if (e.packageId == i.packageId) {
                            e["services"].push({ "serviceName": i.serviceName, "displayText": i.displayText, "packageServiceId": i.packageServiceId, "isOffered": i.isOffered });
                            if (this.arrPredictorForm["CounsellingID"] == 1) { // Add Limit For AIQ
                                if (i.packageServiceId == 2) {
                                    e["limit"] = i.limit;
                                }
                            }
                            else if (this.arrPredictorForm["CounsellingID"] == 2) { // Add Limit For State
                                if (i.packageServiceId == 3) {
                                    e["limit"] = i.limit;
                                }
                            }
                        }
                    });
                });
                setTimeout(() => {
                    console.log(this.arrPackageName);
                    this.laoder.loadingDismiss();
                }, 1000);
            }).catch(ex => {
                console.log("getPackages()=> " + ex);
            });
        });
    }
    getCollegeCount() {
        this.storage.getObject("predictorForm").then((res) => {
            if (res) {
                var filterData = this.apiPredictorService.arrPredictorFilter;
                if (filterData != null) {
                    res["universityTypeId"] = filterData["universityTypeId"];
                    res["StateID"] = (filterData["stateId"] == null) ? res["StateID"] : filterData["stateId"];
                    res["BudgetId"] = (filterData["budgetId"] == null) ? res["BudgetId"] : filterData["budgetId"];
                }
                this.apiPredictorService.getPredictorCount(JSON.stringify(res)).then(resp => {
                    if (resp) {
                        this.collegeCount = resp.collegeCount;
                    }
                })
                    .catch(ex => {
                    console.log("getPredictedCollegesRank() = > " + ex);
                });
            }
        })
            .catch(ex => {
            console.log("getPredictedCollegesRank() = > " + ex);
        });
    }
    //#region Payment Start
    onClickPackage(arrSelectedPackage) {
        this.firebaseAnalytics.logEvent("predictor_" + arrSelectedPackage.packageName + "_package_selected", { 'resp': 'success', 'page': 'predictor-checkout' });
        //arrSelectedPackage.services = null;
        this.arrSelectedPackage = arrSelectedPackage;
        this.laoder.presentLoading();
        this.setCPPayment("");
    }
    setCPPayment(action) {
        let postData = { 'packageId': this.arrSelectedPackage.packageId, 'appLoginId': this.arrUserData["appLoginID"], 'isActive': true };
        this.apiPredictorService.GetCPPayment(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrPackagePayment = resp[0];
                this.memberPaymentId = resp[0]["memberPaymentId"];
                if (this.arrPaymentSuccess != null) {
                    this.arrPackagePayment["paymentStatus"] = this.arrPaymentSuccess["paymentStatus"];
                    this.arrPackagePayment["paymentResponse"] = this.arrPaymentSuccess["paymentResponse"];
                    this.arrPackagePayment["razorpayPaymentId"] = this.arrPaymentSuccess["razorpay_payment_id"];
                    this.arrPackagePayment["razorpayOrderId"] = this.arrPaymentSuccess["razorpay_order_id"];
                    this.arrPackagePayment["razorpaySignature"] = this.arrPaymentSuccess["razorpay_signature"];
                    this.arrPackagePayment["validFrom"] = this.apiGeneralService.getCurrentDateTime();
                    var nextYear = new Date().getFullYear() + 1;
                    var validTo = new Date("04/01/" + new Date().getFullYear());
                    if ((new Date().getMonth() + 1) > 3) {
                        validTo = new Date("04/01/" + nextYear);
                    }
                    this.arrPackagePayment["isActive"] = true;
                }
                if (action == 'failure') {
                    this.arrPackagePayment["isActive"] = false;
                }
                this.arrPackagePayment["modifiedBy"] = this.arrUserData["firstName"];
                this.arrPackagePayment["modifiedDate"] = this.apiGeneralService.getCurrentDateTime();
                this.arrPackagePayment["modifiedIp"] = this.ipAddress;
                if (this.upgradeType == "upgrade") {
                    this.arrPackagePayment["status"] = "Upgrade";
                }
            }
            else {
                this.arrPackagePayment = this.apiPredictorService.arrPackagePayment;
                this.memberPaymentId = 0;
                this.arrPackagePayment["appLoginId"] = this.arrUserData["appLoginID"];
                this.arrPackagePayment["packageId"] = this.arrSelectedPackage.packageId;
                this.arrPackagePayment["packageCost"] = Math.round(this.arrSelectedPackage.packageCost * (100 / (100 + 18)));
                this.arrPackagePayment["discount"] = 0;
                this.arrPackagePayment["offeredCost"] = this.arrPackagePayment["packageCost"] - this.arrPackagePayment["discount"];
                this.arrPackagePayment["taxPercent"] = 18;
                this.arrPackagePayment["totalCost"] = this.arrSelectedPackage.packageCost;
                this.arrPackagePayment["paymentStatus"] = (this.arrSelectedPackage.packageCost == 0) ? "Paid" : "InProgress";
                this.arrPackagePayment["validFrom"] = this.apiGeneralService.getCurrentDateTime();
                var nextYear = new Date().getFullYear() + 1;
                var validTo = new Date("04/01/" + new Date().getFullYear());
                if ((new Date().getMonth() + 1) > 3) {
                    validTo = new Date("04/01/" + nextYear);
                }
                this.arrPackagePayment["validTo"] = this.apiGeneralService.getCurrentDateTime(validTo);
                this.arrPackagePayment["isActive"] = true;
                this.arrPackagePayment["createdBy"] = this.arrUserData["firstName"];
                this.arrPackagePayment["modifiedBy"] = this.arrUserData["firstName"];
                this.arrPackagePayment["createdDate"] = this.apiGeneralService.getCurrentDateTime();
                this.arrPackagePayment["modifiedDate"] = this.apiGeneralService.getCurrentDateTime();
                this.arrPackagePayment["createdIp"] = this.ipAddress;
                this.arrPackagePayment["modifiedIp"] = this.ipAddress;
                if (this.upgradeType == "upgrade") {
                    this.arrPackagePayment["status"] = "Upgrade";
                }
            }
            this.apiPredictorService.setCPPayment(JSON.stringify(this.arrPackagePayment), this.memberPaymentId).then(resp => {
                this.memberPaymentId = (resp.result["memberPaymentId"] == undefined) ? resp["memberPaymentId"] : resp.result["memberPaymentId"];
                if (this.arrSelectedPackage.packageCost == 0) {
                    //#region set storage
                    this.arrPredictorForm["RecordCount"] = this.arrSelectedPackage.limit;
                    this.storage.setObject("predictorForm", this.arrPredictorForm);
                    this.storage.setObject("selectedPackage", this.arrSelectedPackage);
                    //#endregion
                    this.laoder.loadingDismiss();
                    this.resetPayment();
                    this.rotuer.navigate(["/home/college-predictor/predictor-report"], { replaceUrl: true });
                }
                else {
                    if (action == "failure") {
                        return false;
                    }
                    if (action != 'update') {
                        this.createOrder(this.memberPaymentId, this.arrPackagePayment["totalCost"]);
                    }
                    else {
                        this.storage.setObject("selectedPackage", this.arrSelectedPackage);
                        this.apiGeneralService.optedPackage = this.arrSelectedPackage["packageName"];
                        this.resetPayment();
                        //this.topLinksPredictorComponent.getSelectedPackage();
                        this.laoder.loadingDismiss();
                    }
                }
            }).catch(ex => {
                this.toastr.toastError("Something went wrong! Pleae try again after sometime.");
                console.log("setCPPayment() " + ex);
                this.laoder.loadingDismiss();
            });
        });
    }
    getCPPayment() {
        //this.storage.removeItem("selectedPackage");
        let postData = { 'isActive': true, 'paymentStatus': 'Paid', 'appLoginId': this.arrUserData["appLoginID"] };
        this.apiPredictorService.GetCPPayment(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.paymentPackageId = resp[0]["packageId"];
            }
        }).catch(ex => {
            console.log("GetCPPayment() " + ex);
            this.toastr.toastError("Sorry! We are facing some difficulties to get your package information.");
        });
    }
    createOrder(memberPaymentId, totalCost) {
        let postdata = { 'OrderID': memberPaymentId, 'Amount': totalCost };
        this.paymentIntegrationService.createRazorOrder(JSON.stringify(postdata)).then(resp => {
            var orderID = resp.d;
            setTimeout(() => {
                this.payWithRazorpay(orderID, totalCost);
            }, 500);
        }).catch(ex => {
            this.toastr.toastError("Something went wrong! Pleae try again after sometime.");
            console.log("createOrderID() " + ex);
            this.laoder.loadingDismiss();
        });
    }
    payWithRazorpay(orderID, totalCost) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            var razorDescription = this.arrSelectedPackage["packageName"] + " - NEET Predictor";
            // var success = {'razorpay_payment_id':'pixoxox','razorpay_order_id':'ordxoxox','razorpay_signature':'sigxoxoxo'}
            // this.onPaymentSuccess(success);
            // return false;
            var options = {
                description: razorDescription,
                image: 'https://app.moksh16.in/images/logo.png',
                order_id: orderID,
                prefill: { 'name': this.arrUserData["firstName"] + " " + this.arrUserData["lastName"], 'contact': this.arrUserData["mobileNo"], 'email': this.arrUserData["emailId"] },
                currency: 'INR',
                key: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.razor_key,
                amount: (totalCost * 100),
                name: this.arrUserData["firstName"] + " " + this.arrUserData["lastName"],
                theme: { color: '#ffc409' }
            };
            RazorpayCheckout.on('payment.success', onSuccess => {
                this.onPaymentSuccess(onSuccess);
            });
            RazorpayCheckout.on('payment.cancel', onError => {
                // alert("Error " + JSON.stringify(onError));
                this.setCPPayment("failure");
                this.alert.basciAlert("Your payment couldn't completed", "", "An error occured while processing the payment. Any amount debited will be automatically refunded in 4-7 days.", ['OK']);
                this.laoder.loadingDismiss();
            });
            RazorpayCheckout.open(options);
        });
    }
    onPaymentSuccess(success) {
        //this.alert.basciAlert("Thank you!  We have received payment successfully","","",['OK']);
        this.isModalSuccess = true;
        this.arrPaymentSuccess = success;
        this.arrPaymentSuccess["paymentStatus"] = "Paid";
        this.arrPaymentSuccess["paymentResponse"] = JSON.stringify(success);
        //#region set storage
        this.arrPredictorForm["RecordCount"] = this.arrSelectedPackage.limit;
        this.storage.setObject("predictorForm", this.arrPredictorForm);
        this.storage.setObject("selectedPackage", this.arrSelectedPackage);
        //#endregion
        this.setCPPayment("update");
        this.firebaseAnalytics.logEvent("predictor_" + this.arrSelectedPackage.packageName + "_package_paid", { 'resp': 'success', 'page': 'predictor-checkout' });
    }
    resetPayment() {
        this.memberPaymentId = null;
        this.arrSelectedPackage = null;
    }
    onClickProcess() {
        this.rotuer.navigate(["/home/college-predictor/predictor-report"], { queryParams: { "isfresh": true }, replaceUrl: true });
    }
    //#endregion
    getPredictorForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("predictorForm").then(resp => {
                this.arrPredictorForm = resp;
            });
        });
    }
    getUserDataStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.getObject("userdata").then((resp) => {
                this.arrUserData = resp;
                this.getCPPayment();
            });
        });
    }
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneralService.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
PredictorCheckoutPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: src_app_services_api_predictor_service__WEBPACK_IMPORTED_MODULE_7__.ApiPredictorService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_6__.LoaderService },
    { type: src_app_services_payment_integration_service__WEBPACK_IMPORTED_MODULE_5__.PaymentIntegrationService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_4__.ApiGeneralService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_11__.FirebaseAnalytics }
];
PredictorCheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-predictor-checkout',
        template: _raw_loader_predictor_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_predictor_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PredictorCheckoutPage);



/***/ }),

/***/ 18249:
/*!****************************************************************************************!*\
  !*** ./src/app/home/college-predictor/predictor-checkout/predictor-checkout.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@keyframes zoom-in-zoom-out {\n  0% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(1.3, 1.2);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n.sec-result {\n  text-align: center;\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  border: 5px solid var(--ion-color-secondary-light);\n}\n.sec-result figure {\n  margin: 1rem 1.7rem;\n}\n.sec-result figure img {\n  animation: zoom-in-zoom-out 1s ease-out infinite;\n}\n.sec-result figure ion-icon {\n  font-size: 3.5rem;\n}\n.sec-result h3 {\n  color: var(--ion-color-primary);\n  font-weight: 700;\n  font-size: 1.3rem;\n}\n.sec-result h5 {\n  font-size: 1rem;\n  font-weight: 500;\n}\nsuper-tabs {\n  padding: 12px;\n  background: #f5f5f5;\n  min-height: auto;\n}\nsuper-tabs super-tabs-toolbar {\n  background: none;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);\n}\nsuper-tabs super-tabs-toolbar super-tab-button {\n  background: #fff;\n  color: #000;\n  position: relative;\n  background-size: 200% auto;\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active {\n  z-index: 2;\n  color: #fff;\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active ion-label {\n  position: relative;\n  z-index: 2;\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: calc(100% + 0px);\n  height: 91%;\n  background: var(--ion-color-success);\n  border-radius: 25px;\n  z-index: 1;\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active.Silver:after {\n  background: linear-gradient(to top right, #304352 0%, #969491 100%, #304352 100%);\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active.Gold:after {\n  background: linear-gradient(to top right, #FF8008 0%, #FFC837 100%, #FF8008 100%);\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active.Platinum:after {\n  background: linear-gradient(to top right, #c21500 0%, #ffc500 100%, #c21500 100%);\n}\nsuper-tabs super-tabs-toolbar super-tab-button.active.Pro:after {\n  background: linear-gradient(to top right, #81ab2e 0%, #037750 100%, #81ab2e 100%);\n}\nsuper-tabs super-tabs-container {\n  margin-top: 10px;\n  margin-left: -5px;\n}\nsuper-tabs super-tabs-container super-tab {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3Rvci1jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNFLHNCQUFBO0VBQ0o7RUFHRTtJQUNFLDBCQUFBO0VBREo7RUFJRTtJQUNFLHNCQUFBO0VBRko7QUFDRjtBQU9BO0VBQWEsa0JBQUE7RUFBcUIsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsYUFBQTtFQUFlLGtEQUFBO0FBQXZGO0FBQ0k7RUFBTyxtQkFBQTtBQUVYO0FBRFE7RUFBSSxnREFBQTtBQUlaO0FBSFE7RUFBUyxpQkFBQTtBQU1qQjtBQUpJO0VBQUcsK0JBQUE7RUFBaUMsZ0JBQUE7RUFBa0IsaUJBQUE7QUFTMUQ7QUFSSTtFQUFHLGVBQUE7RUFBaUIsZ0JBQUE7QUFZeEI7QUFMQTtFQUFXLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixnQkFBQTtBQVcvQztBQVZJO0VBQW1CLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLDhDQUFBO0FBZ0JoRjtBQWZRO0VBQWlCLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxrQkFBQTtFQUFvQiwwQkFBQTtBQXFCNUU7QUFwQlk7RUFBUyxVQUFBO0VBQVksV0FBQTtBQXdCakM7QUF2QmdCO0VBQVUsa0JBQUE7RUFBb0IsVUFBQTtBQTJCOUM7QUF6Qlk7RUFBZSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsU0FBQTtFQUFXLFFBQUE7RUFBVSx1QkFBQTtFQUF5QixXQUFBO0VBQWEsb0NBQUE7RUFBc0MsbUJBQUE7RUFBcUIsVUFBQTtBQW9DbEw7QUFuQ1k7RUFBc0IsaUZBQUE7QUFzQ2xDO0FBckNZO0VBQW9CLGlGQUFBO0FBd0NoQztBQXZDWTtFQUF3QixpRkFBQTtBQTBDcEM7QUF6Q1k7RUFBbUIsaUZBQUE7QUE0Qy9CO0FBeENJO0VBQXFCLGdCQUFBO0VBQWtCLGlCQUFBO0FBNEMzQztBQTNDUTtFQUFVLFlBQUE7QUE4Q2xCIiwiZmlsZSI6InByZWRpY3Rvci1jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHpvb20taW4tem9vbS1vdXQge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMik7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuLnNlYy1yZXN1bHR7IHRleHQtYWxpZ246IGNlbnRlcjsgIGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDVweDsgcGFkZGluZzogMTBweDsgYm9yZGVyOiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1saWdodCk7ICAgXHJcbiAgICBmaWd1cmV7bWFyZ2luOiAxcmVtIDEuN3JlbTtcclxuICAgICAgICBpbWd7YW5pbWF0aW9uOiB6b29tLWluLXpvb20tb3V0IDFzIGVhc2Utb3V0IGluZmluaXRlO31cclxuICAgICAgICBpb24taWNvbntmb250LXNpemU6IDMuNXJlbTt9XHJcbiAgICB9XHJcbiAgICBoM3tjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDEuM3JlbTt9XHJcbiAgICBoNXtmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA1MDA7fVxyXG59XHJcblxyXG4uY29udGVudC1jb250e1xyXG4gICAgc2VjdGlvbnt9XHJcbn1cclxuXHJcbnN1cGVyLXRhYnN7cGFkZGluZzogMTJweDsgYmFja2dyb3VuZDogI2Y1ZjVmNTsgbWluLWhlaWdodDogYXV0bztcclxuICAgIHN1cGVyLXRhYnMtdG9vbGJhcntiYWNrZ3JvdW5kOiBub25lOyBib3JkZXItcmFkaXVzOiAyMHB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgIHN1cGVyLXRhYi1idXR0b257YmFja2dyb3VuZDogI2ZmZjsgY29sb3I6ICMwMDA7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgICAgICAgICAgICYuYWN0aXZle3otaW5kZXg6IDI7IGNvbG9yOiAjZmZmOyBcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWN0aXZlOmFmdGVye2NvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyB0b3A6IDBweDsgd2lkdGg6IGNhbGMoMTAwJSArIDBweCk7IGhlaWdodDogOTElOyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7IGJvcmRlci1yYWRpdXM6IDI1cHg7IHotaW5kZXg6IDE7fVxyXG4gICAgICAgICAgICAmLmFjdGl2ZS5TaWx2ZXI6YWZ0ZXJ7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzMwNDM1MiAwJSwgIzk2OTQ5MSAgMTAwJSwgIzMwNDM1MiAgMTAwJSl9XHJcbiAgICAgICAgICAgICYuYWN0aXZlLkdvbGQ6YWZ0ZXJ7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgI0ZGODAwOCAwJSwgI0ZGQzgzNyAgMTAwJSwgI0ZGODAwOCAgMTAwJSl9XHJcbiAgICAgICAgICAgICYuYWN0aXZlLlBsYXRpbnVtOmFmdGVye2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNjMjE1MDAgMCUsICNmZmM1MDAgMTAwJSwgI2MyMTUwMCAgMTAwJSl9XHJcbiAgICAgICAgICAgICYuYWN0aXZlLlBybzphZnRlcntiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjODFhYjJlIDAlLCAjMDM3NzUwICAxMDAlLCAjODFhYjJlICAxMDAlKX1cclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1cGVyLXRhYnMtY29udGFpbmVye21hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1sZWZ0OiAtNXB4OyBcclxuICAgICAgICBzdXBlci10YWJ7aGVpZ2h0OiBhdXRvO30gICAgICBcclxuICAgIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 38442:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/college-predictor/predictor-checkout/predictor-checkout.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content class=\"pb-0\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <div class=\"main-cont content-cont\">\n    <section class=\"sec-result\" *ngIf=\"upgradeType != 'upgrade'\">\n      <div *ngIf=\"collegeCount > 0\">\n        <figure>\n          <img src=\"https://app.moksh16.in/application-centre/assets/mobility-app/predictor/icon-fireworks.png\" alt=\"\">\n        </figure>\n        <h3>{{collegeCount}} Top Colleges Predicted</h3>\n        <h5>Wow! You have chances in {{collegeCount}} colleges based on your Rank through NEET All India Counselling</h5>\n      </div>\n      <div *ngIf=\"collegeCount == 0\">\n        <figure>\n          <ion-icon name=\"sad-outline\" color=\"dark\"></ion-icon>\n        </figure>\n        <h3>Looks like NEET score is too low!</h3>\n        <h5 >\n          Just go for FREE Silver package and check for chance of admission by increasing your budget for more college options or opt for <br>\n          <ion-chip [routerLink]=\"['/home/welcome']\" color=\"tertiary\" outline>\n            <ion-label>MBBS Abroad</ion-label>\n          </ion-chip>\n        </h5>\n      </div>\n    </section>  \n    <!-- <h6>Choose Plan</h6>  -->\n  </div>\n\n  <!-- <div>\n    <ion-text color=\"primary\">\n      <h3>You are having Silver Package</h3>\n    </ion-text>\n  </div> -->\n\n  <super-tabs>   \n    <super-tabs-toolbar>\n      <super-tab-button class=\"{{item.packageName}}\" *ngFor=\"let item of arrPackageName\">\n        <ion-label>{{item.packageName}}</ion-label>\n      </super-tab-button>      \n    </super-tabs-toolbar>\n  \n    <super-tabs-container *ngIf=\"arrPackageName\">\n      <super-tab *ngFor=\"let item of arrPackageName\">\n        <div class=\"pkg-cont {{item.packageName}}\">\n          <h6>{{item.packageName}}</h6>\n          <div class=\"pkg-price\">\n            <div class=\"price-old\" *ngIf=\"item.packageCostOld > 0\">{{item.packageCostOld | currency:'INR':'symbol':'2.0'}}</div>\n             <div> {{item.packageCost == 0 ? 'FREE' : (item.packageCost | currency:'INR':'symbol':'2.0')}}</div>\n          </div>\n          <ul class=\"pkg-info\">\n            <li *ngFor=\"let sub of item.services\">\n              <ion-icon color=\"{{sub.isOffered == false ? 'danger' : 'success'}}\" name=\"{{sub.isOffered == false ? 'close-circle' : 'shield-checkmark'}}\"></ion-icon>{{sub.displayText}}\n            </li>            \n          </ul>\n          <div class=\"btn-cont mb-0\">\n            <ion-button (click)=\"onClickPackage(item)\" expand=\"block\" [class]=\"item.packageName\">Select</ion-button>\n          </div>\n        </div>\n      </super-tab>     \n    </super-tabs-container>\n  </super-tabs>\n\n\n  <div class=\"modal-cont modal-reminder pt-4 pb-4\" [ngClass]=\"{active: isModalSuccess}\">\n    <div class=\"modal-wrapper\">\n      <!-- <ion-text class=\"modal-close-btn\" (click)=\"onClickModalClose()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-text> -->\n      <div class=\"modal-body\">\n\n        <div class=\"success-checkmark\">\n          <div class=\"check-icon\">\n            <span class=\"icon-line line-tip\"></span>\n            <span class=\"icon-line line-long\"></span>\n            <div class=\"icon-circle\"></div>\n            <div class=\"icon-fix\"></div>\n          </div>\n        </div>\n        <h5>\n          Thank you!  We have received payment successfully.\n        </h5>   \n        <br>       \n        <ion-button (click)=\"onClickProcess()\"  expand=\"block\" shape=\"round\">\n          Proceed\n        </ion-button>       \n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>  \n</ion-content>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_college-predictor_predictor-checkout_predictor-checkout_module_ts.js.map