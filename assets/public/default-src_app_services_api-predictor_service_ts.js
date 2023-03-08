(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["default-src_app_services_api-predictor_service_ts"],{

/***/ 8478:
/*!***************************************************!*\
  !*** ./src/app/services/api-predictor.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiPredictorService": () => (/* binding */ ApiPredictorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);





let ApiPredictorService = class ApiPredictorService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.api = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.arrPredictor = [];
        this.arrPredictorFilter = null;
        this.lblRank = "Your Predicted Rank is";
        this.neetRank = 0;
        this.arrPackagePayment = { "appLoginId": null, "createdBy": null, "createdDate": null, "createdIp": null, "discount": null, "isActive": null, "modifiedBy": null, "modifiedDate": null, "modifiedIp": null, "offeredCost": null, "packageCost": null, "packageId": null, "paymentGateway": null, "paymentResponse": null, "paymentStatus": null, "promocodeId": null, "razorpayOrderId": null, "razorpayPaymentId": null, "razorpaySignature": null, "status": null, "taxPercent": null, "totalCost": null, "validFrom": null, "validTo": null };
        this.enumCounsellingType = ['All India Counselling', 'State Level Counselling'];
    }
    getExamMaster(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPExam';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCousellingType(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var token = "";
            //await this.auth.getToken().then(resp => {token = resp});
            const url = this.api + 'predictor/GetCPCounselling';
            //const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token });
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPState(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPState';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCategoryOnMapping(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCategoryOnMapping';
            return this.http.post(url, postData).toPromise();
        });
    }
    getSubCategoryOnMapping(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPSubCategoryOnMapping';
            return this.http.post(url, postData).toPromise();
        });
    }
    getQuota(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPQuotaOnMapping';
            return this.http.post(url, postData).toPromise();
        });
    }
    getSeatTypeOnMapping(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPSeatTypeOnMapping';
            return this.http.post(url, postData).toPromise();
        });
    }
    getSeatType(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/getCPSeatType';
            return this.http.post(url, postData).toPromise();
        });
    }
    getGender(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPGenderOnMapping';
            return this.http.post(url, postData).toPromise();
        });
    }
    getBudget(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPBudget';
            return this.http.post(url, postData).toPromise();
        });
    }
    getExamDate(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPExamDate';
            return this.http.post(url, postData).toPromise();
        });
    }
    getPredictor(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCollegePrediction';
            return this.http.post(url, postData).toPromise();
        });
    }
    getPredictorCount(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCollegePredictionCnt';
            return this.http.post(url, postData).toPromise();
        });
    }
    getRank(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPRankOnScore';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCollegeIntake(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCollegeIntake';
            return this.http.post(url, postData).toPromise();
        });
    }
    getUniversitype(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPUniversityType';
            return this.http.post(url, postData).toPromise();
        });
    }
    getManagementType(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPManagementType';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPPersonalisedReport(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPPersonalisedReport';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPChoiceForm(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/getCPChoiceForm';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPExamCutoff(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPExamCutoff';
            return this.http.post(url, postData).toPromise();
        });
    }
    getSavedPredictor(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPStudentPredictorConfig  ';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPRedeemableAmount(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/getCPRedeemableAmount';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPRedeemInfo(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/getCPRedeemInfo';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPRedeemVoucher(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPRedeemVoucher';
            return this.http.post(url, postData).toPromise();
        });
    }
    setRedeemVoucher(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/redeemVoucher';
            return this.http.post(url, postData).toPromise();
        });
    }
    updateCRMData(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/UpdateCRMDepartment';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCPCutOffList(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCutOffList';
            return this.http.post(url, postData).toPromise();
        });
    }
    fnUpdateCRMData(AppLoginId, ExamID, IntakeYear) {
        let postdata = { 'AppLoginId': AppLoginId, 'ExamID': ExamID, 'IntakeYear': IntakeYear };
        this.updateCRMData(JSON.stringify(postdata)).then(resp => {
            console.log("updateCRMData()==" + resp);
        });
    }
    //#region Package Section
    getPackages(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPPredictorPackage';
            return this.http.post(url, postData).toPromise();
        });
    }
    GetCPPayment(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPPayment';
            return this.http.post(url, postData).toPromise();
        });
    }
    setCPPayment(postData, memberPaymentId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (memberPaymentId == 0) {
                const url = this.api + 'predictor/AddCPPayment';
                return this.http.post(url, postData).toPromise();
            }
            else {
                const url = this.api + 'predictor/UpdateCPPayment';
                return this.http.put(url, postData).toPromise();
            }
        });
    }
    //#endregion
    getCollegeListByCounselling(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCollegeList';
            return this.http.post(url, postData).toPromise();
        });
    }
    getCollegeList(postData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const url = this.api + 'predictor/GetCPCollege';
            return this.http.post(url, postData).toPromise();
        });
    }
};
ApiPredictorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
ApiPredictorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ApiPredictorService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_api-predictor_service_ts.js.map