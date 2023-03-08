(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_payment-selection_payment-selection_module_ts"],{

/***/ 55801:
/*!***********************************************************************************************!*\
  !*** ./src/app/home/application-center/payment-selection/payment-selection-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSelectionPageRoutingModule": () => (/* binding */ PaymentSelectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-selection.page */ 47864);




const routes = [
    {
        path: '',
        component: _payment_selection_page__WEBPACK_IMPORTED_MODULE_0__.PaymentSelectionPage
    }
];
let PaymentSelectionPageRoutingModule = class PaymentSelectionPageRoutingModule {
};
PaymentSelectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentSelectionPageRoutingModule);



/***/ }),

/***/ 45935:
/*!***************************************************************************************!*\
  !*** ./src/app/home/application-center/payment-selection/payment-selection.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSelectionPageModule": () => (/* binding */ PaymentSelectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_selection_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-selection-routing.module */ 55801);
/* harmony import */ var _payment_selection_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-selection.page */ 47864);








let PaymentSelectionPageModule = class PaymentSelectionPageModule {
};
PaymentSelectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _payment_selection_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaymentSelectionPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_payment_selection_page__WEBPACK_IMPORTED_MODULE_2__.PaymentSelectionPage]
    })
], PaymentSelectionPageModule);



/***/ }),

/***/ 47864:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/payment-selection/payment-selection.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSelectionPage": () => (/* binding */ PaymentSelectionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-selection.page.html */ 72062);
/* harmony import */ var _payment_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-selection.page.scss */ 63868);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_payment_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/payment-integration.service */ 64229);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);















let PaymentSelectionPage = class PaymentSelectionPage {
    constructor(route, headerTitle, toastr, apiApplicationService, apiGeneral, loader, formBuilder, paymentIntegrationService, alert, storage, router) {
        this.route = route;
        this.headerTitle = headerTitle;
        this.toastr = toastr;
        this.apiApplicationService = apiApplicationService;
        this.apiGeneral = apiGeneral;
        this.loader = loader;
        this.formBuilder = formBuilder;
        this.paymentIntegrationService = paymentIntegrationService;
        this.alert = alert;
        this.storage = storage;
        this.router = router;
        this.paymentId = 0;
        this.applicationID = "";
        this.arrSelectedServices = [];
        this.arrMendServices = [];
        this.arrOptServices = [];
        this.arrSelectedServicesPayment = [];
        this.totalServiceAmount = 0;
        this.totalGSTAmount = 0;
        this.totalGSTAmountOpt = 0;
        this.discount = 0;
        this.FinalAmount = 0;
        this.isOptional = false;
        this.arrAppUniversity = [];
        this.arrPersonalDeatails = [];
        this.arrPaymentMst = [];
        this.ipAddress = "";
        this.isLoading = false;
        this.txtPromocode = "";
        this.totalFeesPaidWithTax = "";
        this.paidPercentage = 0;
        this.isModeOnline = true;
        this.isPromoSuccess = false;
        this.isPaymentSuccess = false;
        this.arrTransaction = [];
        this.arrPaymentSuccess = { 'razorpay_order_id': '', 'razorpay_payment_id': '' };
        this.paymentStatus = "";
        this.arrOffers = [];
        this.headerTitle.title = "Make Payment";
        this.headerTitle.isBack = true;
    }
    ionViewWillEnter() {
        //this.isModalSuccess = false;
    }
    ngOnInit() {
        this.applicationID = this.route.snapshot.params['appID'];
        this.getPayment();
        this.getApplicationData();
        this.initForm();
        this.getSelection();
    }
    //#region  Get Payment Data Start
    getPayment() {
        this.loader.presentLoading();
        let postData = '{ "applicationId":' + this.applicationID + ', "IsActive":true}';
        this.apiApplicationService.getPayment(postData).then(resp => {
            if (resp.length > 0) {
                this.arrPaymentMst = resp[0];
                this.paymentStatus = resp[0]["status"];
                this.paymentId = resp[0]["paymentId"];
                this.totalFeesPaidWithTax = this.arrPaymentMst["totalFeesPaidWithTax"];
                this.paidPercentage = (this.arrPaymentMst["totalFeesPaidWithTax"] * 100) / this.arrPaymentMst["totalFeesWithTax"];
                this.getPaymentSub();
            }
            else {
                this.router.navigate(['/home/application-center/service-selection', this.applicationID]);
            }
        }).catch(err => {
            console.log("getPayment: " + err);
            this.loader.loadingDismiss();
        });
    }
    getPaymentSub() {
        this.arrSelectedServices = [], this.arrMendServices = [], this.arrOptServices = [];
        let postData = '{"PaymentId":' + this.paymentId + ',"IsActive":true}';
        this.apiApplicationService.GetPaymentSubList(postData).then(resp => {
            if (resp.length > 0) {
                this.arrSelectedServices = resp;
                this.arrSelectedServices.forEach(i => {
                    if (i.serviceType == "Mandatory") {
                        this.arrMendServices.push(i);
                    }
                    else if (i.serviceType == "Optional") {
                        this.arrOptServices.push(i);
                    }
                    i.isSelected = false;
                });
                this.loader.loadingDismiss();
                console.log("arrSelectedServices: " + this.arrSelectedServices);
            }
        }).catch(err => { console.log("getPaymentSub: " + err); this.loader.loadingDismiss(); });
    }
    getPaymentLog(paymentSubID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let postData = '{"PaymentSubId":' + paymentSubID + '}';
            yield this.apiApplicationService.getPaymentSubLogs(postData).then(resp => {
                return;
            });
        });
    }
    //#endregion
    //#region  Calculation Start
    calcServiceAmount() {
        this.totalServiceAmount = 0, this.totalGSTAmount = 0, this.totalGSTAmountOpt = 0, this.FinalAmount = 0, this.totalGSTAmountOpt = 0;
        var countOpt = 0;
        this.arrMendServices.forEach(i => {
            if (i.isSelected === true) {
                this.totalServiceAmount += i.serviceAmount;
                this.totalGSTAmount += ((i.serviceAmount * i.taxPercent) / 100);
            }
        });
        this.arrOptServices.forEach(i => {
            if (i.isSelected == true) {
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
        }, 10);
    }
    addService(paymentSubId, $event) {
        var isToggle = $event.target.checked;
        this.arrSelectedServices.forEach(i => {
            if (i.paymentSubId == paymentSubId) {
                i.isSelected = isToggle;
            }
        });
        this.calcServiceAmount();
    }
    //#endregion
    //=== Submit Payment Start
    submit(paymentMode) {
        this.arrSelectedServicesPayment = [];
        var countSelected = 0;
        this.arrSelectedServices.forEach(i => {
            if (i.isSelected == true) {
                countSelected++;
                this.arrSelectedServicesPayment.push(i);
            }
        });
        if (countSelected == 0) {
            this.toastr.toastError("Kindly select any one service to make payment.");
            return;
        }
        if (this.isPromoSuccess == true) {
            this.udpdatePaymentSub();
        }
        if (paymentMode == "Offline") {
            this.isModeOnline = false;
            return;
        }
        else if (paymentMode == "Online") {
            this.loader.presentLoading();
            this.createOrder(this.paymentId, this.FinalAmount);
        }
        //this.setPaymentLog(paymentMode);
        //this.router.navigate(["/home/application-center/payment-selection", this.paymentId])
    }
    payWithRazorpay(orderID, totalCost) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var razorDescription = Array.prototype.map.call(this.arrSelectedServicesPayment, function (item) { return item.serviceName; }).join(" AND ");
            // var success = { 'razorpay_payment_id': 'pixoxox', 'razorpay_order_id': 'ordxoxox', 'razorpay_signature': 'sigxoxoxo' }
            // this.onPaymentSuccess(success);
            // return false;
            var options = {
                description: razorDescription,
                image: 'https://app.moksh16.in/images/logo.png',
                order_id: orderID,
                prefill: { 'name': this.arrPersonalDeatails["firstName"] + " " + this.arrPersonalDeatails["lastName"], 'contact': this.arrPersonalDeatails["mobileNo"], 'email': this.arrPersonalDeatails["emailId"] },
                currency: 'INR',
                key: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__.environment.razor_key,
                amount: (totalCost * 100),
                name: this.arrPersonalDeatails["firstName"] + " " + this.arrPersonalDeatails["lastName"],
                theme: { color: '#ffc409' }
            };
            RazorpayCheckout.on('payment.success', onSuccess => {
                this.onPaymentSuccess(onSuccess);
            });
            RazorpayCheckout.on('payment.cancel', onError => {
                this.alert.basciAlert("Oops! Your payment is failed. Please try again.", "", "", ['OK']);
                this.loader.loadingDismiss();
            });
            RazorpayCheckout.open(options);
        });
    }
    onPaymentSuccess(success) {
        this.loader.presentLoading();
        //this.alert.basciAlert("Thank you!  We have received payment successfully","","",['OK']);
        this.arrPaymentSuccess = success;
        this.isPaymentSuccess = true;
        this.setTransactionLog(success["razorpay_order_id"]);
    }
    createOrder(memberPaymentId, totalCost) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let postdata = { 'OrderID': memberPaymentId, 'Amount': totalCost };
            yield this.paymentIntegrationService.createRazorOrder(JSON.stringify(postdata)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                var orderID = resp.d;
                yield this.setTransactionLog(orderID);
            })).catch(ex => {
                this.toastr.toastError("Something went wrong! Pleae try again after sometime.");
                console.log("ERR => createOrderID ==> " + ex);
                this.loader.loadingDismiss();
            });
        });
    }
    setPaymentLog(paymentMode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var arrSetPaymentLog = this.apiApplicationService.arrSetPyamentLog;
            this.arrSelectedServices.forEach((i) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (i.isSelected == false) {
                    return false;
                }
                var paymentLogId = 0;
                let postDataLog = '{"PaymentSubId":' + i["paymentSubId"] + '}';
                yield this.apiApplicationService.getPaymentSubLogs(postDataLog).then(resp => {
                    paymentLogId = (resp.length == 0) ? 0 : resp[0]["paymentLogId"];
                });
                arrSetPaymentLog["paymentLogId"] = (paymentLogId == undefined) ? 0 : paymentLogId;
                arrSetPaymentLog["paymentSubId"] = i["paymentSubId"];
                arrSetPaymentLog["projectedAmount"] = i["serviceAmountWithTax"];
                arrSetPaymentLog["projectedDate"] = this.apiApplicationService.dateTimeNow;
                arrSetPaymentLog["taxPercent"] = i["taxPercent"];
                arrSetPaymentLog["collectedAmount"] = (paymentMode == "Offline") ? 0 : i["serviceAmountWithTax"];
                arrSetPaymentLog["collectedWithoutTax"] = i["serviceAmount"];
                arrSetPaymentLog["collectedDate"] = (paymentMode == "Offline") ? this.ionicForm.value.collectedDate : this.apiApplicationService.dateTimeNow;
                arrSetPaymentLog["collectionStatus"] = (this.isPaymentSuccess == true) ? this.apiApplicationService.enumCollectionStatus[0] : this.apiApplicationService.enumCollectionStatus[1];
                arrSetPaymentLog["status"] = (this.isPaymentSuccess == true) ? this.apiApplicationService.enumPaymentStatus[2] : this.apiApplicationService.enumPaymentStatus[1];
                arrSetPaymentLog["paymentMode"] = paymentMode;
                arrSetPaymentLog["bankTransactionNo"] = (this.isPaymentSuccess == true) ? this.arrPaymentSuccess["razorpay_payment_id"] : this.ionicForm.value.bankTransactionNo;
                arrSetPaymentLog["offlinePaymentMode"] = this.ionicForm.value.offlinePaymentMode;
                arrSetPaymentLog["remarks"] = "";
                arrSetPaymentLog["paymentResponse"] = (this.isPaymentSuccess == true) ? JSON.stringify(this.arrPaymentSuccess) : "";
                arrSetPaymentLog["transactionId"] = (this.isPaymentSuccess == true) ? this.arrTransaction["transactionId"] : 0;
                arrSetPaymentLog["createdDate"] = this.apiGeneral.getCurrentDateTime();
                arrSetPaymentLog["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
                arrSetPaymentLog["createdBy"] = "MobileApp";
                arrSetPaymentLog["modifiedBy"] = "MobileApp";
                arrSetPaymentLog["createdIp"] = this.ipAddress;
                arrSetPaymentLog["modifiedIp"] = this.ipAddress;
                arrSetPaymentLog["isActive"] = true;
                yield this.apiApplicationService.setPaymentSubLogs(JSON.stringify(arrSetPaymentLog), paymentLogId).then(resp => {
                    setTimeout(() => {
                        this.reset();
                        this.resetPayment();
                        this.loader.loadingDismiss();
                    }, 100);
                    this.isModalSuccess = true;
                    this.isSubmitted = false;
                    //this.createOrder(this.arrSelectedServicesPayment[countSelected-1]["paymentSubId"], this.FinalAmount);
                })
                    .catch(err => {
                    console.log("ERR => setPaymentSub ==> " + err);
                    this.loader.loadingDismiss();
                    this.toastr.toastError(err.error.status);
                    this.isSubmitted = false;
                    this.reset();
                });
            }));
        });
    }
    udpdatePaymentSub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.arrSelectedServices.forEach((i) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (i.serviceDiscount != 0) {
                    i["modifiedDate"] = this.apiApplicationService.dateTimeNow;
                    i["modifiedBy"] = "MobileApp";
                    i["modifiedIp"] = this.ipAddress;
                    yield this.apiApplicationService.setPaymentSub(JSON.stringify(i), i.paymentSubId).then(resp => {
                        console.log("udpdatePaymentLog:" + resp);
                    })
                        .catch(err => {
                        console.log("Err udpdatePaymentLog:" + err);
                        this.loader.loadingDismiss();
                        this.toastr.toastError(err.error.status);
                    });
                }
            }));
        });
    }
    setTransactionLog(orderId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var serviceIds = Array.prototype.map.call(this.arrSelectedServicesPayment, function (item) { return item.serviceId; }).join(",");
            var trasactionId;
            var arrTransaction;
            if (this.arrTransaction.length == 0) {
                arrTransaction = this.apiApplicationService.arrSetTransaction;
                arrTransaction["paymentId"] = this.arrPaymentMst["paymentId"];
                arrTransaction["serviceIds"] = serviceIds;
                arrTransaction["paymentMode"] = "Online";
                arrTransaction["paymentStatus"] = this.apiApplicationService.enumPaymentStatus[1];
                arrTransaction["amount"] = this.FinalAmount;
                arrTransaction["orderId"] = orderId;
                //arrTransaction["txnId"] = "";
                //arrTransaction["paymentResponse"] = JSON.stringify(this.arrPaymentSuccess);
                arrTransaction["isActive"] = true;
                arrTransaction["createdDate"] = this.apiGeneral.getCurrentDateTime();
                arrTransaction["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
                arrTransaction["applicationId"] = this.arrPersonalDeatails["applicationId"];
                arrTransaction["createdBy"] = "MobileApp";
                arrTransaction["modifiedBy"] = "MobileApp";
                arrTransaction["createdIp"] = this.ipAddress;
                arrTransaction["modifiedIp"] = this.ipAddress;
                arrTransaction["productDepartmentId"] = this.arrSelection["productDepartmentId"];
                trasactionId = 0;
            }
            else {
                arrTransaction = this.arrTransaction;
                arrTransaction["paymentStatus"] = this.apiApplicationService.enumPaymentStatus[2];
                arrTransaction["txnId"] = this.arrPaymentSuccess["razorpay_payment_id"];
                arrTransaction["paymentResponse"] = JSON.stringify(this.arrPaymentSuccess);
                arrTransaction["modifiedBy"] = "MobileApp";
                arrTransaction["modifiedDate"] = this.apiGeneral.getCurrentDateTime();
                arrTransaction["modifiedIp"] = this.ipAddress;
                trasactionId = this.arrTransaction["transactionId"];
            }
            yield this.apiApplicationService.setTransactionLog(JSON.stringify(arrTransaction), trasactionId).then(resp => {
                if (this.isPaymentSuccess == true) {
                    this.arrTransaction = resp;
                    this.setPaymentLog("Online");
                }
                else {
                    this.arrTransaction = resp.result;
                    setTimeout(() => {
                        this.payWithRazorpay(this.arrTransaction["orderId"], this.arrTransaction["amount"]);
                    }, 500);
                }
            }).catch(err => {
                this.toastr.toastError("OOps! Something went wrong while saving trasaction");
                console.log("ERR ==> setTransactionLog ==> " + err);
                this.loader.loadingDismiss();
            });
        });
    }
    //=== Submit Payment End
    //#region Promocode Start
    applyPromocode() {
        var availedServiceID = "";
        this.isLoading == true;
        if (this.txtPromocode == "") {
            this.toastr.toastError("Please Enter Promocode");
            return;
        }
        else {
            var productDepartmentId = this.arrPersonalDeatails["productDepartmentId"];
            var applicationID = this.arrPersonalDeatails["applicationId"];
            let postPromoData = { "ProductDepartmentId": productDepartmentId, "PromoCode": this.txtPromocode, "IsActive": true };
            this.apiApplicationService.getPromoCode(JSON.stringify(postPromoData)).then(respPromo => {
                if (respPromo.length > 0) {
                    this.arrPromocode = respPromo[0];
                    availedServiceID = respPromo[0]["promoServices"];
                    let postData = { "ApplicationId": applicationID, "ProductDepartmentId": productDepartmentId, "PromoCode": this.txtPromocode, "TotalPayableAmount": this.FinalAmount, "AvailedServiceID": availedServiceID };
                    this.apiApplicationService.validatePromoCode(JSON.stringify(postData)).then(respValidate => {
                        if (respValidate.statusCode == 200) {
                            this.updateDiscount();
                        }
                        else {
                            this.alert.basciAlert("Promocode is not valid", "Sorry! Promo code used is not applicable at the moment", "", ['OK']);
                        }
                    }).catch(err => {
                        this.isLoading == false;
                        console.log("ERR => validatePromoCode ==> " + err);
                    });
                }
                else {
                    this.alert.basciAlert("Promocode is not valid", "Sorry! Promo code used is not applicable at the moment", "", ['OK']);
                }
            });
        }
    }
    updateDiscount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.isPromoSuccess = true;
            this.discount = this.arrPromocode.discount;
            var arrPromoServices = this.arrPromocode.promoServices;
            if (this.arrPromocode.discountType == "Percentage") {
                if (arrPromoServices.length > 1) {
                    var arrAmount = [];
                    arrPromoServices = arrPromoServices.split(',');
                    arrPromoServices.forEach(ipc => {
                        this.arrMendServices.forEach(i => {
                            if (i.serviceId == ipc) {
                                arrAmount.push({ 'serviceId': i.serviceId, 'serviceAmount': i.serviceAmount });
                                //i.serviceAmount = i.serviceAmount - this.arrPromocode.discount;
                            }
                        });
                    });
                }
            }
            this.arrMendServices.forEach(i => {
                if (i.serviceId == this.arrPromocode.promoServices) {
                    i.serviceAmount = i.serviceAmount - this.arrPromocode.discount;
                    i.serviceAmountWithTax = i.serviceAmount + ((i.serviceAmount * i.taxPercent) / 100);
                    i.serviceDiscount = this.arrPromocode.discount;
                    i.promocodeId = this.arrPromocode.promocodeId;
                    this.arrSelectedServices.forEach(el => {
                        if (i.serviceDiscount != 0 && i.serviceId == el.serviceId) {
                            el.serviceAmount = i.serviceAmount;
                            el.serviceAmountWithTax = i.serviceAmountWithTax;
                            el.serviceDiscount = i.serviceDiscount;
                            el.promocodeId = i.promocodeId;
                        }
                    });
                }
            });
            this.arrOptServices.forEach(i => {
                if (i.serviceId == this.arrPromocode.promoServices) {
                    i.serviceAmount = i.serviceAmount - this.arrPromocode.discount;
                    i.serviceAmountWithTax = i.serviceAmount + ((i.serviceAmount * i.taxPercent) / 100);
                    i.serviceDiscount = this.arrPromocode.discount;
                    i.promocodeId = this.arrPromocode.promocodeId;
                    this.arrSelectedServices.forEach(el => {
                        if (i.serviceDiscount != 0 && i.serviceId == el.serviceId) {
                            el.serviceAmount = i.serviceAmount;
                            el.serviceAmountWithTax = i.serviceAmountWithTax;
                            el.serviceDiscount = i.serviceDiscount;
                            el.promocodeId = i.promocodeId;
                        }
                    });
                }
            });
            this.calcServiceAmount();
            this.toastr.toastSuccess("Wow! Promocode applied successfully!");
        });
    }
    removePromocode() {
        this.arrMendServices.forEach(i => {
            if (this.arrPromocode.promoServices.includes(i.serviceId) || this.arrPromocode.promoServices == i.serviceId) {
                i.serviceAmount = i.serviceAmount + this.arrPromocode.discount;
                i.serviceAmountWithTax = i.serviceAmount + ((i.serviceAmount * i.taxPercent) / 100);
                i.serviceDiscount = 0;
                i.promocodeId = null;
                this.arrSelectedServices.forEach(el => {
                    if (i.serviceId == el.serviceId) {
                        el.serviceAmount = i.serviceAmount;
                        el.serviceAmountWithTax = i.serviceAmountWithTax;
                        el.serviceDiscount = i.serviceDiscount;
                        el.promocodeId = i.promocodeId;
                    }
                });
            }
        });
        this.arrOptServices.forEach(i => {
            if (this.arrPromocode.promoServices.includes(i.serviceId) || this.arrPromocode.promoServices == i.serviceId) {
                i.serviceAmount = i.serviceAmount + this.arrPromocode.discount;
                i.serviceAmountWithTax = i.serviceAmount + ((i.serviceAmount * i.taxPercent) / 100);
                i.serviceDiscount = 0;
                i.promocodeId = null;
                this.arrSelectedServices.forEach(el => {
                    if (i.serviceId == el.serviceId) {
                        el.serviceAmount = i.serviceAmount;
                        el.serviceAmountWithTax = i.serviceAmountWithTax;
                        el.serviceDiscount = i.serviceDiscount;
                        el.promocodeId = i.promocodeId;
                    }
                });
            }
        });
        this.arrPromocode = "";
        this.txtPromocode = "";
        this.discount = 0;
        this.isPromoSuccess = false;
        this.calcServiceAmount();
    }
    getUserOffers() {
        let postData = { "IsActive": true, "leadID": this.arrPersonalDeatails["leadId"] };
        this.apiApplicationService.getPromoCode(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrOffers = resp;
            }
        });
    }
    onClickPromo(promoCode) {
        this.txtPromocode = promoCode;
        this.applyPromocode();
    }
    //#endregion
    //#region Offline Form Start
    initForm() {
        this.ionicForm = this.formBuilder.group({
            offlinePaymentMode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            collectedDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            bankTransactionNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]]
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.isSubmitted = true;
            this.loader.presentLoading();
            this.isLoading = true;
            if (!this.ionicForm.valid) {
                console.log('Please provide all the required values!');
                this.isSubmitted = false;
                return false;
            }
            else {
                this.setPaymentLog('Offline');
                //this.arrUserData["firstName"] = this.ionicForm.value.FirstName;
            }
        });
    }
    cancelOffline() {
        this.isModeOnline = true;
    }
    //#endregion
    //#region Genearal Function Start
    reset() {
        this.isLoading = false;
        this.isModeOnline = true;
    }
    //#region Get App Universities
    getAppUniversity() {
        let postData = '{ "ApplicationId":' + this.applicationID + ',"IsActive":true }';
        this.apiApplicationService.getAppUniversity(postData).then(resp => {
            if (resp.length > 0) {
                this.arrAppUniversity = resp[0];
            }
        });
    }
    //#endregion
    //#region Get App Data
    getApplicationData() {
        this.apiApplicationService.getPersonalDetailsStorage().then(resp => {
            if (resp) {
                this.arrPersonalDeatails = resp;
                this.getUserOffers();
            }
        });
    }
    //#endregion
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
    doRefresh(event) {
        this.resetPayment();
        this.getUserOffers();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    //#endregion
    resetPayment() {
        this.isLoading = false;
        this.isModeOnline = true;
        this.isPaymentSuccess = false;
        this.discount = 0;
        this.totalGSTAmount = 0;
        this.totalGSTAmountOpt = 0;
        this.FinalAmount = 0;
        this.arrSelectedServices = [];
        this.arrMendServices = [];
        this.arrOptServices = [];
        this.arrSelectedServicesPayment = [];
        this.arrTransaction = [];
        this.getPayment();
        this.removePromocode();
        this.loader.loadingDismiss();
    }
    onClickModalClose() {
        this.isModalSuccess = false;
    }
    getSelection() {
        this.storage.getObject("arrSelection").then(resp => {
            this.arrSelection = resp;
        });
    }
};
PaymentSelectionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_8__.HeaderTitleService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_10__.ToastService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_6__.ApiApplicationService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__.ApiGeneralService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_9__.LoaderService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: src_app_services_payment_integration_service__WEBPACK_IMPORTED_MODULE_4__.PaymentIntegrationService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
PaymentSelectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-payment-selection',
        template: _raw_loader_payment_selection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentSelectionPage);



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

/***/ 63868:
/*!***************************************************************************************!*\
  !*** ./src/app/home/application-center/payment-selection/payment-selection.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-label > h6 {\n  padding-left: 10px;\n}\n\n.service-list ion-row + ion-row.no-border {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\n.service-list > ion-row.UnPaid:first-child ion-toggle {\n  transform: scale(1);\n  animation: pulse 1.5s infinite;\n  border-radius: 30px;\n}\n\n.service-list ion-col .price.Paid {\n  color: var(--ion-color-success);\n}\n\n.service-list ion-col small {\n  display: inline-block;\n  padding: 2px 4px;\n  border-radius: 5px;\n  background-color: #ddd;\n}\n\n.service-list ion-col small.Paid {\n  background: var(--ion-color-success);\n  color: #fff;\n}\n\n.service-list ion-col small.UnPaid {\n  background: var(--ion-color-danger);\n  color: #fff;\n}\n\n.service-list ion-col small.InProgress {\n  background: var(--ion-color-warning);\n  color: #fff;\n}\n\n.footer-links {\n  transition: ease all 0.5s;\n}\n\n.footer-links ion-text {\n  display: block;\n  margin-top: 10px;\n  font-weight: 600;\n}\n\n.footer-links.offlform {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  left: 0px;\n  z-index: 9999;\n  background: #fff;\n  border-top: 2px solid var(--ion-color-warning);\n}\n\n.footer-links.hide {\n  bottom: calc(-100vh + 200px);\n}\n\n.section-promocode .white-box {\n  padding: 1px 1rem;\n  padding-right: 5px;\n}\n\n.section-promocode ion-item {\n  font-size: 1rem;\n}\n\n.section-promocode ion-button {\n  font-size: 1rem;\n  --padding-bottom:10px;\n  --padding-top:10px;\n}\n\n.section-promocode .service-list ion-row ion-col {\n  margin-top: 0px;\n}\n\n.section-promocode .service-list ion-row ion-col:first-child {\n  max-width: 42px;\n  text-align: center;\n}\n\nion-content {\n  --padding-bottom: 6rem;\n}\n\n.payment-cont {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtc2VsZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFLLGtCQUFBO0FBQ1Q7O0FBR0k7RUFBNEIsZUFBQTtFQUFpQixnQkFBQTtBQUVqRDs7QUFESTtFQUF3QyxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxtQkFBQTtBQU1qRzs7QUFEQTtFQUFrQywrQkFBQTtBQUtsQzs7QUFKQTtFQUE0QixxQkFBQTtFQUF1QixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixzQkFBQTtBQVd6Rjs7QUFWQTtFQUFpQyxvQ0FBQTtFQUFzQyxXQUFBO0FBZXZFOztBQWJBO0VBQW1DLG1DQUFBO0VBQXFDLFdBQUE7QUFrQnhFOztBQWpCQTtFQUF1QyxvQ0FBQTtFQUFzQyxXQUFBO0FBc0I3RTs7QUFwQkE7RUFBYyx5QkFBQTtBQXdCZDs7QUF2Qkk7RUFBUyxjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGdCQUFBO0FBNEIvQzs7QUEzQkk7RUFBVyxlQUFBO0VBQWlCLFdBQUE7RUFBYSxXQUFBO0VBQWEsU0FBQTtFQUFXLGFBQUE7RUFBZSxnQkFBQTtFQUFrQiw4Q0FBQTtBQW9DdEc7O0FBbkNJO0VBQVEsNEJBQUE7QUFzQ1o7O0FBbENJO0VBQVcsaUJBQUE7RUFBbUIsa0JBQUE7QUF1Q2xDOztBQXRDSTtFQUFTLGVBQUE7QUF5Q2I7O0FBeENJO0VBQVcsZUFBQTtFQUFpQixxQkFBQTtFQUF1QixrQkFBQTtBQTZDdkQ7O0FBMUNZO0VBQVEsZUFBQTtBQTZDcEI7O0FBNUNZO0VBQW9CLGVBQUE7RUFBaUIsa0JBQUE7QUFnRGpEOztBQTNDQTtFQUFZLHNCQUFBO0FBK0NaOztBQTdDQTtFQUFjLGtCQUFBO0FBaURkIiwiZmlsZSI6InBheW1lbnQtc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcclxuICAgID4gaDZ7cGFkZGluZy1sZWZ0OiAxMHB4O31cclxufVxyXG5cclxuLnNlcnZpY2UtbGlzdHtcclxuICAgIGlvbi1yb3cgKyBpb24tcm93Lm5vLWJvcmRlcnttYXJnaW4tdG9wOiAwcHg7IHBhZGRpbmctdG9wOiAwcHg7fVxyXG4gICAgPiBpb24tcm93LlVuUGFpZDpmaXJzdC1jaGlsZCBpb24tdG9nZ2xle3RyYW5zZm9ybTogc2NhbGUoMSk7IGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTsgYm9yZGVyLXJhZGl1czogMzBweDt9XHJcbn1cclxuXHJcblxyXG5cclxuLnNlcnZpY2UtbGlzdCBpb24tY29sIC5wcmljZS5QYWlke2NvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7IH1cclxuLnNlcnZpY2UtbGlzdCBpb24tY29sIHNtYWxse2Rpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMnB4IDRweDsgYm9yZGVyLXJhZGl1czogNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuLnNlcnZpY2UtbGlzdCBpb24tY29sIHNtYWxsLlBhaWR7YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpOyBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLnNlcnZpY2UtbGlzdCBpb24tY29sIHNtYWxsLlVuUGFpZHtiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgY29sb3I6ICNmZmY7IH1cclxuLnNlcnZpY2UtbGlzdCBpb24tY29sIHNtYWxsLkluUHJvZ3Jlc3N7YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpOyBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLmZvb3Rlci1saW5rc3t0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjVzO1xyXG4gICAgaW9uLXRleHR7ZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDEwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7fVxyXG4gICAgJi5vZmZsZm9ybXtwb3NpdGlvbjogZml4ZWQ7IHdpZHRoOiAxMDAlOyBib3R0b206IDBweDsgbGVmdDogMHB4OyB6LWluZGV4OiA5OTk5OyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO31cclxuICAgICYuaGlkZXsgYm90dG9tOiBjYWxjKC0xMDB2aCArIDIwMHB4KSB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXByb21vY29kZXtcclxuICAgIC53aGl0ZS1ib3h7cGFkZGluZzogMXB4IDFyZW07IHBhZGRpbmctcmlnaHQ6IDVweDt9XHJcbiAgICBpb24taXRlbXtmb250LXNpemU6IDFyZW07fVxyXG4gICAgaW9uLWJ1dHRvbntmb250LXNpemU6IDFyZW07IC0tcGFkZGluZy1ib3R0b206MTBweDsgLS1wYWRkaW5nLXRvcDoxMHB4fVxyXG4gICAgLnNlcnZpY2UtbGlzdHtcclxuICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICBpb24tY29se21hcmdpbi10b3A6IDBweDt9XHJcbiAgICAgICAgICAgIGlvbi1jb2w6Zmlyc3QtY2hpbGR7bWF4LXdpZHRoOiA0MnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7LS1wYWRkaW5nLWJvdHRvbTogNnJlbTt9XHJcblxyXG4ucGF5bWVudC1jb250e3BhZGRpbmctbGVmdDogMTBweDt9XHJcbiJdfQ== */");

/***/ }),

/***/ 72062:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/payment-selection/payment-selection.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-nav-steps></app-nav-steps>\r\n  <div class=\"main-cont service-cont\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <section class=\"white-box\">\r\n      <ion-grid fixed class=\"service-list\">\r\n        <ion-row>\r\n          <ion-col size=\"8\"><h6>Paid till now</h6></ion-col>\r\n          <ion-col size=\"4\" class=\"text-right\"><div class=\"price Paid\">{{totalFeesPaidWithTax | currency: 'INR'}}</div></ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n      <ion-progress-bar color=\"success\" value=\"{{paidPercentage / 100}}\" buffer=\"0.1\"></ion-progress-bar>\r\n    </section>\r\n    <section class=\"mt-2\">\r\n      <h4>Book your seat now</h4>\r\n      <div class=\"white-box payment-cont pb-0\">\r\n        <ion-grid fixed class=\"service-list\">\r\n          <ion-row *ngFor=\"let item of arrMendServices; let index = index\" class=\"no-border {{item.status}} mb-2\">\r\n            <ion-col size=\"9\">\r\n              <ion-item class=\"ion-no-padding\" lines=\"none\" >\r\n                <ion-toggle color=\"success\" checked=\"true\" disabled=\"true\" *ngIf=\"item.status=='Paid'; else elseToggle\"></ion-toggle>              \r\n                <ng-template #elseToggle>\r\n                  <ion-toggle color=\"success\" (ionChange)=\"addService(item.paymentSubId, $event)\" ></ion-toggle>    \r\n                </ng-template>\r\n              <ion-label><h6>{{item.serviceName}}</h6></ion-label>\r\n            </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"text-right\">\r\n              <div class=\"price old ion-color-danger\" *ngIf=\"item.serviceAmount != item.serviceCost\"> <ion-text color=\"danger\">{{item.serviceCost | currency: 'INR':'symbol':'1.0-0'}}</ion-text></div>\r\n              <div class=\"price {{item.status}}\">{{item.serviceAmount | currency: 'INR':'symbol':'1.0-0'}}</div>\r\n              <small class=\"{{item.status}}\">{{item.status}}</small>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"heading no-border\" *ngIf=\"arrOptServices?.length > 0\">\r\n            <ion-col size=\"12\">\r\n              <h5>Optional SERVICES</h5>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ng-container *ngFor=\"let item of arrOptServices; let index = index\">\r\n            <ion-row class=\"no-border mb-2\">\r\n              <ion-col size=\"9\">\r\n                <ion-item class=\"ion-no-padding\" lines=\"none\" >\r\n                  <ion-toggle color=\"success\" checked=\"true\" disabled=\"true\" *ngIf=\"item.status=='Paid'; else elseToggle\"></ion-toggle>              \r\n                  <ng-template #elseToggle>\r\n                    <ion-toggle color=\"success\" (ionChange)=\"addService(item.paymentSubId, $event)\" ></ion-toggle>    \r\n                  </ng-template>\r\n                <ion-label><h6>{{item.serviceName}}</h6></ion-label>\r\n              </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"text-right\">\r\n                <div class=\"price {{item.status}}\">{{item.serviceAmount | currency: 'INR':'symbol':'1.0-0'}}</div>\r\n                <small class=\"{{item.status}}\">{{item.status}}</small>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n          <ion-row class=\"total discount\" *ngIf=\"discount != 0\">\r\n            <ion-col size=\"8\">\r\n              <h6>Discount</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\" color=\"success\">\r\n              <div class=\"price\">- {{discount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"total\">\r\n            <ion-col size=\"8\">\r\n              <h6>SUB TOTAL</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\">{{totalServiceAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n         \r\n          <ion-row class=\"total no-border\">\r\n            <ion-col size=\"8\">\r\n              <h6>GST on Mandatory Service</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\"> {{totalGSTAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"total no-border\" *ngIf=\"isOptional\">\r\n            <ion-col size=\"8\">\r\n              <h6>GST on Optional Service</h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\"> {{totalGSTAmountOpt | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>          \r\n          <ion-row class=\"total final\">\r\n            <ion-col size=\"8\">\r\n              <h6><strong>TOTAL PAY</strong></h6>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"text-right\">\r\n              <div class=\"price\"> {{FinalAmount | currency:'INR'}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n    </section>\r\n    <section class=\"section-promocode\">\r\n      <h6 class=\"mt-0\">Offers & Promo Codes</h6>\r\n\r\n      <div class=\"white-box\">\r\n        <ion-item lines=\"none\" class=\"ion-no-padding\">          \r\n          <ion-input [(ngModel)]=\"txtPromocode\" placeholder=\"Enter Promocode\"></ion-input>\r\n          <ion-note>\r\n            <ion-button (click)=\"applyPromocode()\" shape=\"round\"  color=\"success\" *ngIf=\"isPromoSuccess == false\">Apply <ion-icon name=\"log-in-outline\" slot=\"end\" ></ion-icon></ion-button>\r\n            <ion-button (click)=\"removePromocode()\" shape=\"round\"  color=\"danger\" *ngIf=\"isPromoSuccess == true\">Remove <ion-icon name=\"close-circle-outline\" slot=\"end\"></ion-icon></ion-button>\r\n          </ion-note>\r\n        </ion-item>\r\n      </div>\r\n      <div class=\"grey-box success-light p-1 mt-1\" *ngIf=\"isPromoSuccess == true\">\r\n        <small>Congratulation! Promocode applied successfully.</small>\r\n      </div>\r\n\r\n      <div class=\"white-box p-1 mt-2\" *ngIf=\"isPromoSuccess != true && this.arrOffers?.length > 0\">\r\n        <ion-grid fixed class=\"service-list\">\r\n          <ion-row *ngFor=\"let item of arrOffers\" (click)=\"onClickPromo(item.promoCode)\">\r\n            <ion-col><ion-icon name=\"ellipse-outline\" style=\"font-size: 20px;\"></ion-icon></ion-col>\r\n            <ion-col>\r\n              <h5 class=\"mb-1\">{{item.promoCode}}</h5>\r\n              <p class=\"m-0\" style=\"font-size: 13px; color: #555;\">{{item.description}}</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>      \r\n      \r\n      <br>\r\n    </section>\r\n  </div>\r\n\r\n  <section class=\"footer-links\">\r\n    <div class=\"main-cont text-center\">    \r\n      <ion-text *ngIf=\"paymentStatus != 'Paid'\" class=\"text-center\">You dream it, now book it. </ion-text>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!-- <ion-col>          \r\n            <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"submit('Offline')\" routerLinkActive=\"router-link-active\">Offline\r\n              <ion-ripple-effect></ion-ripple-effect>\r\n            </ion-button>\r\n          </ion-col> -->\r\n          <ion-col *ngIf=\"paymentStatus != 'Paid'\">\r\n            <ion-button expand=\"block\" color=\"primary\" (click)=\"submit('Online')\" routerLinkActive=\"router-link-active\">MAKE PAYMENT\r\n              <ion-ripple-effect></ion-ripple-effect>\r\n            </ion-button>          \r\n          </ion-col>\r\n          <ion-col *ngIf=\"paymentStatus == 'Paid'\">\r\n            <ion-button expand=\"block\" color=\"primary\" (click)=\"submit('Online')\" routerLinkActive=\"router-link-active\" class=\"ion-text-uppercase\">Track Application              \r\n              <ion-icon name=\"navigate-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>          \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n\r\n  <section class=\"footer-links offlform d-none\">\r\n    <form class=\"form-cont no-icon\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n      <div class=\"text-right\"><small style=\"color: var(--ion-color-danger);\">(All fields are mandatory)</small></div>\r\n      <h6 class=\"m-0\">Please enter details for offline payment.</h6>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <span class=\"error error-outline\" *ngIf=\"isSubmitted && errorControl.FirstName.errors?.required\"></span>\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon name=\"person-outline\"></ion-icon>\r\n              <ion-label position=\"floating\">Mode of Payment</ion-label>\r\n              <ion-select formControlName=\"offlinePaymentMode\" interface=\"action-sheet\">\r\n                <ion-select-option value=\"Cash_deposit_in_Bank\">Cash deposit in Bank</ion-select-option>\r\n                <ion-select-option value=\"Cash_deposit_in_Branch\">Cash deposit in Branch</ion-select-option>\r\n                <ion-select-option value=\"Internet_Banking\">Internet Banking</ion-select-option>\r\n                <ion-select-option value=\"Wallet_Payment\">Wallet Payment</ion-select-option>\r\n                <ion-select-option value=\"On_Moksh_Site\">On Moksh Site</ion-select-option>\r\n                <ion-select-option value=\"Cheque_deposit_in_Bank\">Cheque deposit in Bank</ion-select-option>\r\n                <ion-select-option value=\"Cheque_deposit_in_Branch\">Cheque deposit in Branch</ion-select-option>\r\n                <ion-select-option value=\"Razorpay_Direct_Link\">Razorpay Direct Link</ion-select-option>              \r\n                <ion-select-option value=\"Other\">Other</ion-select-option>              \r\n              </ion-select>              \r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n              <ion-label position=\"floating\">Date of Payment</ion-label>              \r\n              <ion-datetime displayFormat=\"DD MMM YYYY\" formControlName=\"collectedDate\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n              <ion-icon name=\"call-outline\"></ion-icon>\r\n              <ion-label position=\"floating\">Payment Ref No./Cheque No.</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"bankTransactionNo\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>       \r\n        </ion-row>\r\n        <ion-row class=\"btn-cont mb-0\">\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" Fill=\"outline\" color=\"primary\" (click)=\"cancelOffline()\">Cancel\r\n              <ion-ripple-effect></ion-ripple-effect>              \r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"!ionicForm.valid\">Submit\r\n              <ion-ripple-effect></ion-ripple-effect>\r\n              <ion-spinner name=\"dots\" slot=\"end\" *ngIf=\"isLoading\"></ion-spinner>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>    \r\n    </form>\r\n  </section>\r\n\r\n  <!-- [ngClass]=\"{active: isModalSuccess}\" -->\r\n  <div class=\"modal-cont modal-reminder pt-4 pb-4\" [ngClass]=\"{active: isModalSuccess}\">\r\n    <div class=\"modal-wrapper\">      \r\n      <div class=\"modal-body\">\r\n        <div class=\"success-checkmark\">\r\n          <div class=\"check-icon\">\r\n            <span class=\"icon-line line-tip\"></span>\r\n            <span class=\"icon-line line-long\"></span>\r\n            <div class=\"icon-circle\"></div>\r\n            <div class=\"icon-fix\"></div>\r\n          </div>\r\n        </div>\r\n        <ion-text color=\"success\"><h3 style=\"font-weight: bold;\" >Success!</h3></ion-text>\r\n        <h6 style=\"font-weight: 500;\">\r\n          Thank you!  We have received payment successfully.\r\n        </h6> \r\n        <ion-grid fixed class=\"grid-info mt-3\">\r\n          <ion-row>\r\n            <ion-col size=\"4\"><strong>Order ID</strong></ion-col>\r\n            <ion-col size=\"8\">{{arrPaymentSuccess.razorpay_order_id}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4\"><strong>Payment ID</strong></ion-col>\r\n            <ion-col size=\"8\">{{arrPaymentSuccess.razorpay_payment_id}}</ion-col>\r\n          </ion-row>\r\n        </ion-grid>        \r\n        <br>   \r\n        <ion-grid fixed>\r\n          <ion-row>\r\n            <ion-col size=\"5\">\r\n              <ion-button (click)=\"onClickModalClose()\" expand=\"block\" fill=\"outline\" >Close</ion-button> </ion-col>\r\n            <ion-col size=\"7\">\r\n              <ion-button [routerLink]=\"['/home/application-center/upload-documents',applicationID]\" expand=\"block\" >Upload Documents</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n              \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_payment-selection_payment-selection_module_ts.js.map