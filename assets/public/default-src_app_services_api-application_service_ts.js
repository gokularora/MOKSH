(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["default-src_app_services_api-application_service_ts"],{

/***/ 73064:
/*!*****************************************************!*\
  !*** ./src/app/services/api-application.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiApplicationService": () => (/* binding */ ApiApplicationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 37556);






let ApiApplicationService = class ApiApplicationService {
    constructor(http, auth, storageService) {
        this.http = http;
        this.auth = auth;
        this.storageService = storageService;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.ipAddress = "";
        this.token = "";
        this.applicationID = "";
        this.applicationYearId = 0;
        this.arrSetPayment = { "paymentId": 0, "paymentNo": "", "applicationId": null, "appUniversityId": null, "programId": null, "countryId": null, "universityId": null, "promocodeId": null, "serviceCost": null, "discountAmount": null, "totalFees": null, "totalFeesWithTax": null, "totalFeesPaidWithTax": null, "lastTransactionDate": null, "status": "", "partnerId": null, "branchId": null, "foreignBranchId": null, "createdDate": null, "modifiedDate": null, "createdBy": null, "modifiedBy": null, "createdIp": "", "modifiedIp": "", "isActive": null };
        this.arrSetPaymentSub = { "paymentSubId": 0, "paymentId": null, "applicationId": null, "feesId": null, "productDepartmentId": null, "serviceId": null, "parentServiceId": null, "serviceCost": null, "serviceDiscount": null, "serviceAmount": null, "taxPercent": null, "serviceAmountWithTax": null, "serviceAmountPaid": null, "serviceAmountPaidWithoutTax": null, "promocodeId": null, "partPayment": null, "status": "", "paymentMode": "", "bankTransactionNo": "", "collectionStatus": null, "projectedDate": null, "projectedAmount": null, "offlinePaymentMode": null, "offlinePaymentDate": null, "partnerId": null, "branchId": null, "foreignBranchId": null, "remarks": "", "createdDate": null, "modifiedDate": null, "createdBy": "", "modifiedBy": "", "createdIp": "", "modifiedIp": "", "isActive": null, "payment": null };
        this.arrSetPyamentLog = { "paymentLogId": 0, "paymentSubId": null, "transactionId": null, "projectedAmount": null, "projectedDate": null, "taxPercent": null, "collectedAmount": null, "collectedWithoutTax": null, "collectedDate": null, "collectionStatus": "", "status": "", "paymentMode": "", "bankTransactionNo": "", "offlinePaymentMode": null, "remarks": "", "paymentResponse": null, "createdBy": "", "createdDate": null, "modifiedBy": "", "modifiedDate": null, "createdIp": "", "modifiedIp": "", "isActive": null };
        this.arrSetTransaction = { "transactionId": 0, "paymentId": 0, "serviceIds": "", "paymentMode": "", "paymentStatus": "", "amount": 0, "orderId": "", "mercUnqRef": "", "txnId": "", "bankTxnId": "", "bankName": "", "paymentResponse": "", "notes": "", "isActive": true, "agentId": null, "applicationId": null, "createdDate": null, "modifiedDate": null, "createdBy": "", "modifiedBy": "", "createdIp": "", "modifiedIp": "", "branchId": 0 };
        this.enumPaymentStatus = ["UnPaid", "InProgress", "Paid", "Failed", "PartialPaid"];
        this.enumCollectionStatus = ["Collected", "Not Collected"];
        this.arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.dateTimeNow = new Date().toJSON("yyyy/MM/dd HH:mm");
    }
    getApplicationYear(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            yield this.auth.getToken().then(resp => { token = resp; });
            const url = this.api + 'application/GetApplicationYear';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getApplicationField(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetApplicationField';
            return this.http.post(url, postData).toPromise();
        });
    }
    //= Personal Details
    /* #region   */
    getPersonalDetails(applicationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (applicationId == undefined) {
                yield this.auth.getApplicationID().then(res => { this.applicationID = res; });
            }
            else {
                this.applicationID = applicationId.toString();
            }
            const url = this.api + 'Application/GetApplicationID/' + this.applicationID;
            return this.http.get(url).toPromise();
        });
    }
    setPersonalDetails(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var url = "";
            yield this.auth.getToken().then(resp => { this.token = resp; });
            yield this.auth.getApplicationID().then(res => { this.applicationID = res; });
            if (this.applicationID == "0" || this.applicationID == "") {
                url = this.api + 'Application/AddApplication';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                url = this.api + 'Application/UpdateApplication';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    putPersonalDetails(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/UpdateApplication';
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
            return this.http.put(url, body.toString(), headerOption).toPromise();
        });
    }
    getPersonalDetailsStorage() {
        return this.storageService.getObject("appdata");
    }
    getApplicationSteps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            yield this.auth.getApplicationID().then(res => { this.applicationID = res; });
            var body = JSON.stringify({ "ApplicationID": this.applicationID });
            const url = this.api + 'Application/GetApplicationSteps';
            let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
            return this.http.post(url, body, headerOption).toPromise();
        });
    }
    /* #endregion */
    //= AcademicDetails
    /* #region   */
    getAcademicDetails(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetAcademic';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    setAcademicDetails(body, appAcademicId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (appAcademicId == 0) {
                const url = this.api + 'Application/AddAcademic';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                const url = this.api + 'Application/UpdateAcademic';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    /* #endregion */
    //= Application University Details
    /* #region   */
    setAppUniversity(body, AppUniversityId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (AppUniversityId == 0) {
                const url = this.api + 'Application/AddUniversity';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                const url = this.api + 'Application/UpdateUniversity';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    getAppUniversity(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetUniversity';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    /* #endregion */
    //= Documents
    /* #region   */
    getDocuments(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetDocument';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getUniversityDocumentList(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetUniversityDocumentList';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    AddDocument(body, appDocumentID) {
        this.auth.getToken().then(resp => { this.token = resp; });
        if (appDocumentID == 0) {
            const url = this.api + 'Application/AddDocument ';
            return this.http.post(url, body, { reportProgress: true, observe: 'events', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Authorization': 'bearer ' + this.token }) }).pipe();
        }
        else {
            const url = this.api + 'Application/UpdateDocument';
            return this.http.put(url, body, { observe: 'events', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Authorization': 'bearer ' + this.token }) }).pipe();
        }
    }
    sendFormData(formData) {
        const url = this.api + 'Application/AddDocument ';
        return this.http.post(url, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
    /* #endregion */
    //= Services
    getServiceSelection(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Service/GetServiceSelection';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getPayment(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Service/GetPayment';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    getPaymentSub(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Service/GetPaymentSub';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    GetPaymentSubList(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Service/GetPaymentSubList';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    setPayment(body, paymentId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (paymentId == 0) {
                const url = this.api + 'Service/AddPayment ';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                const url = this.api + 'Service/UpdatePayment';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    DeletePaymentSubID(paymentSubId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Service/DeletePaymentSubID/' + paymentSubId;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.delete(url, { headers }).toPromise();
        });
    }
    setPaymentSub(body, PaymentSubId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (PaymentSubId == 0) {
                const url = this.api + 'Service/AddPaymentSub';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                const url = this.api + 'Service/UpdatePaymentSub';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    getPaymentStatus(applicationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'Service/HandlePaymentStatus/' + applicationId;
            return this.http.get(url).toPromise();
        });
    }
    getPaymentSubLogs(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'Service/GetPaymentSubLogs';
            return this.http.post(url, postData).toPromise();
        });
    }
    setPaymentSubLogs(body, PaymentSubId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (PaymentSubId == 0) {
                const url = this.api + 'Service/AddPaymentSubLogs';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                const url = this.api + 'Service/UpdatePaymentSubLogs';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    setTransactionLog(body, TransactionId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            if (TransactionId == 0) {
                const url = this.api + 'Service/AddTransaction';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.post(url, body.toString(), headerOption).toPromise();
            }
            else {
                const url = this.api + 'Service/UpdateTransaction';
                let headerOption = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token }) };
                return this.http.put(url, body.toString(), headerOption).toPromise();
            }
        });
    }
    getPromoCode(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetPromoCode';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    validatePromoCode(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/ValidatePromoCode';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
    GetStageTrackApplication(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.auth.getToken().then(resp => { this.token = resp; });
            const url = this.api + 'Application/GetStageTrackApplication';
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token });
            return this.http.post(url, postData, { headers }).toPromise();
        });
    }
};
ApiApplicationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
ApiApplicationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ApiApplicationService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_api-application_service_ts.js.map