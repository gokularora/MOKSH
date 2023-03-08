(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_universities_university-filter_university-filter_module_ts"],{

/***/ 97417:
/*!*****************************************************************************************!*\
  !*** ./src/app/home/universities/university-filter/university-filter-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFilterPageRoutingModule": () => (/* binding */ UniversityFilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _university_filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-filter.page */ 38489);




const routes = [
    {
        path: '',
        component: _university_filter_page__WEBPACK_IMPORTED_MODULE_0__.UniversityFilterPage
    }
];
let UniversityFilterPageRoutingModule = class UniversityFilterPageRoutingModule {
};
UniversityFilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UniversityFilterPageRoutingModule);



/***/ }),

/***/ 66088:
/*!*********************************************************************************!*\
  !*** ./src/app/home/universities/university-filter/university-filter.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFilterPageModule": () => (/* binding */ UniversityFilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _university_filter_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-filter-routing.module */ 97417);
/* harmony import */ var _university_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./university-filter.page */ 38489);








let UniversityFilterPageModule = class UniversityFilterPageModule {
};
UniversityFilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _university_filter_routing_module__WEBPACK_IMPORTED_MODULE_1__.UniversityFilterPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_university_filter_page__WEBPACK_IMPORTED_MODULE_2__.UniversityFilterPage]
    })
], UniversityFilterPageModule);



/***/ }),

/***/ 38489:
/*!*******************************************************************************!*\
  !*** ./src/app/home/universities/university-filter/university-filter.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFilterPage": () => (/* binding */ UniversityFilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_university_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./university-filter.page.html */ 82176);
/* harmony import */ var _university_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-filter.page.scss */ 2929);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let UniversityFilterPage = class UniversityFilterPage {
    constructor(apiProgramsService, auth, router, navCtrl, storage) {
        this.apiProgramsService = apiProgramsService;
        this.auth = auth;
        this.router = router;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.arrCountry = [];
        this.arrDegree = [];
        this.arrInterestedPrograms = [];
        this.arrPrograms = [];
        this.postData = this.apiProgramsService.filteredData;
        this.budget = { lower: 15, upper: 40 };
        this.establishedYear = { lower: 100, upper: 250 };
        this.mokshRating = { lower: 0, upper: 5 };
        this.arrSelection = [];
    }
    ionViewWillEnter() {
        this.fillFilteredData();
    }
    ngOnInit() {
        this.getSelection();
        this.getCountry();
        //this.getDegree();
    }
    fillFilteredData() {
        this.productDepartmentID = this.apiProgramsService.productDepartmentID;
        setTimeout(() => {
            this.postData = this.apiProgramsService.filteredData;
        }, 500);
    }
    onClickFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //this.setSelection();
            this.postData["budget"] = (Number.isNaN(this.postData["budget"])) ? null : this.postData["budget"];
            this.postData["establishedYear"] = (Number.isNaN(this.postData["establishedYear"])) ? null : this.postData["establishedYear"];
            this.postData["mokshRating"] = (Number.isNaN(this.postData["mokshRating"])) ? null : this.postData["mokshRating"];
            this.postData["universityType"] = (this.postData["universityType"] == "") ? null : this.postData["universityType"];
            this.postData["universityLanguage"] = (this.postData["universityLanguage"] == "") ? null : this.postData["universityLanguage"];
            this.postData["countryId"] = (this.postData["countryId"] == "") ? null : this.postData["countryId"];
            this.apiProgramsService.filterCount = 0;
            Object.keys(this.postData).filter(x => {
                if (this.postData[x] != null) {
                    this.apiProgramsService.filterCount++;
                }
                if (this.postData[x] == "") {
                    this.apiProgramsService.filterCount--;
                }
            });
            this.apiProgramsService.filterCount = this.apiProgramsService.filterCount - 2;
            if (this.arrSelection["countryId"] != this.postData["countryId"]) {
                this.apiProgramsService.filterCount++;
            }
            else if (this.postData["countryId"] == null) {
                this.apiProgramsService.filterCount++;
            }
            if (this.arrSelection["progInterestId"] != this.postData["progInterestId"]) {
                this.apiProgramsService.filterCount++;
            }
            console.log(this.apiProgramsService.filterCount);
            this.apiProgramsService.filteredData = this.postData;
            this.backReload();
        });
    }
    resetFilter() {
        this.apiProgramsService.resetUniversityFilter(this.arrSelection);
        this.backReload();
    }
    backReload() {
        let navigationExtras = {
            state: { filter: '1' }
        };
        this.router.navigate(['/home/universities'], navigationExtras);
    }
    goBack() { this.navCtrl.back(); }
    //#region Get Country, Degree, Program 
    getCountry() {
        if (this.arrCountry.length > 0) {
            return false;
        }
        let postData = { "IsActive": true };
        this.apiProgramsService.getCountry(JSON.stringify(postData)).then(resp => {
            this.arrCountry = resp;
        })
            .catch(err => {
            console.log("getCountry: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
        });
    }
    getDegree() {
        this.postData.degreeId = (this.apiProgramsService.filteredData.degreeId == "") ? "0" : this.apiProgramsService.filteredData.degreeId;
        let postData = { "IsActive": true };
        this.apiProgramsService.getDegree(JSON.stringify(postData)).then(resp => {
            this.arrDegree = resp;
            //this.fillFilteredData();             
        })
            .catch(err => {
            console.log("getDegree: " + err);
        });
    }
    getIntersetedProgram($event) {
        this.postData.progInterestId = "";
        this.postData.programId = "";
        var degreeID = ($event.target.value == "") ? null : $event.target.value;
        let postData = { "DegreeId": degreeID, "IsActive": true };
        this.apiProgramsService.getInterestedProgram(JSON.stringify(postData)).then(resp => {
            this.arrInterestedPrograms = resp;
            // this.fillFilteredData();      
        })
            .catch(err => {
            console.log("getInterestedPrograms: " + err);
        });
    }
    getProgramSpecialization($event) {
        this.postData.programId = "";
        var progInterestId = ($event.target.value == "") ? null : $event.target.value;
        var courseId = (this.apiProgramsService.filteredData.courseId == undefined) ? null : this.apiProgramsService.filteredData.courseId;
        let postData = { "ProgInterestId": progInterestId, "CourseId": courseId, "IsActive": true };
        this.apiProgramsService.getProgramSpecialization(JSON.stringify(postData)).then(resp => {
            this.arrPrograms = resp;
            //this.fillFilteredData();      
        })
            .catch(err => {
            console.log("getProgramSpecialization: " + err);
        });
    }
    //#endregion
    setSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var arrSelection = [];
            yield this.storage.getObject("arrSelection").then((resp) => {
                arrSelection = resp;
            });
            // if(this.postData.countryId == "6"){
            //   arrSelection["productDepartmentID"] = 2;
            //   this.apiProgramsService.productDepartmentID="2";
            // }
            // else{
            //   arrSelection["productDepartmentID"] = 1;
            //   this.apiProgramsService.productDepartmentID="1";
            // }
            arrSelection["countryId"] = parseInt(this.postData.countryId);
            this.storage.setObject("arrSelection", arrSelection);
        });
    }
    getSelection() {
        this.storage.getObject("arrSelection").then((resp) => {
            this.arrSelection = resp;
        });
    }
};
UniversityFilterPage.ctorParameters = () => [
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_4__.ApiProgramsService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
UniversityFilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-university-filter',
        template: _raw_loader_university_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_university_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UniversityFilterPage);



/***/ }),

/***/ 2929:
/*!*********************************************************************************!*\
  !*** ./src/app/home/universities/university-filter/university-filter.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  width: 100%;\n}\n\nion-item ion-label {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXZlcnNpdHktZmlsdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLFdBQUE7QUFFWDs7QUFEQTtFQUFtQixpQkFBQTtBQUtuQiIsImZpbGUiOiJ1bml2ZXJzaXR5LWZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue3dpZHRoOiAxMDAlO31cclxuaW9uLWl0ZW0gaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC45cmVtO31cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 82176:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/universities/university-filter/university-filter.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\t<ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" ios=\"filter-outline\" md=\"filter-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Filter</ion-title>\r\n    <ion-buttons fill=\"outline\" slot=\"end\">\r\n\t\t\t<ion-button [routerLink]=\"['/home/universities']\" >\r\n\t\t\t\tCancel\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row>      \r\n      <ion-col size=\"12\" *ngIf=\"productDepartmentID != 2\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label>Interested Country</ion-label>\r\n          <ion-select [(ngModel)]=\"postData.countryId\" interface=\"action-sheet\">\r\n            <ion-select-option value=\"\">All Countries</ion-select-option>\r\n            <ion-select-option [value]=\"item.countryId\" *ngFor=\"let item of arrCountry\">\r\n              {{item.countryName}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>  \r\n      <ion-col size=\"12\" *ngIf=\"productDepartmentID != 1\" class=\"d-none\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label>Degree</ion-label>\r\n          <ion-select [(ngModel)]=\"postData.degreeId\" interface=\"action-sheet\" (ionChange)=\"getIntersetedProgram($event)\">\r\n            <ion-select-option [value]=\"item.degreeId\" *ngFor=\"let item of arrDegree\">\r\n              {{item.degreeName}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>  \r\n      <ion-col size=\"12\" *ngIf=\"productDepartmentID != 1\" class=\"d-none\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label>Interested Programs</ion-label>\r\n          <ion-select [(ngModel)]=\"postData.progInterestId\" interface=\"action-sheet\" (ionChange)=\"getProgramSpecialization($event)\">\r\n            <ion-select-option [value]=\"item.progInterestId\" *ngFor=\"let item of arrInterestedPrograms\">\r\n              {{item.programInterest}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\" *ngIf=\"productDepartmentID != 1\" class=\"d-none\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label>Program Specialization</ion-label>\r\n          <ion-select [(ngModel)]=\"postData.programId\" interface=\"action-sheet\">\r\n            <ion-select-option [value]=\"item.programId\" *ngFor=\"let item of arrPrograms\">\r\n              {{item.programName}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label>University Type</ion-label>\r\n          <ion-select [(ngModel)]=\"postData.universityType\" interface=\"action-sheet\">\r\n            <ion-select-option value=\"\">Select</ion-select-option>\r\n            <ion-select-option value=\"Public\">Public</ion-select-option>\r\n            <ion-select-option value=\"Private\">Private</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item class=\"ion-no-padding\">\r\n          <ion-label>Teaching Language</ion-label>\r\n          <ion-select [(ngModel)]=\"postData.universityLanguage\" interface=\"action-sheet\">\r\n            <ion-select-option value=\"\">Any</ion-select-option>\r\n            <ion-select-option value=\"English\">English</ion-select-option>\r\n            <ion-select-option value=\"German\">German</ion-select-option>\r\n            <ion-select-option value=\"Russian\">Russian</ion-select-option>\r\n            <ion-select-option value=\"Mandarin\">Mandarin</ion-select-option>\r\n            <ion-select-option value=\"Ukranian\">Ukranian</ion-select-option>\r\n            <ion-select-option value=\"Bilingual\">Bilingual</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"range-cont\">\r\n        <div><ion-label>My approx budget for entire course</ion-label></div>\r\n        <div>\r\n          <ion-range color=\"secondary\" min=\"15\" max=\"200\"  pin [(ngModel)]=\"postData.budget\" class=\"lacs\"></ion-range>\r\n        </div>      \r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"range-cont\">\r\n        <div><ion-label>How old university you want</ion-label></div>\r\n        <div>\r\n          <ion-range dualKnobs=\"true\" color=\"secondary\" min=\"0\" max=\"250\" pin [(ngModel)]=\"postData.establishedYear\" class=\"years\"></ion-range>\r\n        </div>      \r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"range-cont\">\r\n        <div><ion-label>MOKSH Rating</ion-label></div>\r\n        <div>\r\n          <ion-range color=\"secondary\" min=\"0\" max=\"4\" snaps=\"true\" step=\"1\" pin [(ngModel)]=\"postData.mokshRating\" class=\"star\"></ion-range>\r\n        </div>      \r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <section class=\"btn-cont\">\r\n          <ion-button color=\"medium\" size=\"medium\" extend=\"block\" (click)=\"resetFilter()\">\r\n            <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\r\n            Reset</ion-button>\r\n        </section>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <section class=\"btn-cont\">\r\n          <ion-button color=\"primary\" size=\"medium\" extend=\"block\" (click)=\"onClickFilter()\">\r\n            <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon> Search</ion-button>\r\n        </section>\r\n      </ion-col>    \r\n    </ion-row>\r\n  </ion-grid>  \r\n</ion-content>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_universities_university-filter_university-filter_module_ts.js.map