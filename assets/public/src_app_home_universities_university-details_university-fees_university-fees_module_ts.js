(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_universities_university-details_university-fees_university-fees_module_ts"],{

/***/ 49387:
/*!********************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-fees/university-fees-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFeesPageRoutingModule": () => (/* binding */ UniversityFeesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _university_fees_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-fees.page */ 30443);




const routes = [
    {
        path: '',
        component: _university_fees_page__WEBPACK_IMPORTED_MODULE_0__.UniversityFeesPage
    }
];
let UniversityFeesPageRoutingModule = class UniversityFeesPageRoutingModule {
};
UniversityFeesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UniversityFeesPageRoutingModule);



/***/ }),

/***/ 78126:
/*!************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-fees/university-fees.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFeesPageModule": () => (/* binding */ UniversityFeesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _university_fees_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-fees-routing.module */ 49387);
/* harmony import */ var _university_fees_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-fees.page */ 30443);







let UniversityFeesPageModule = class UniversityFeesPageModule {
};
UniversityFeesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _university_fees_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniversityFeesPageRoutingModule
        ],
        declarations: [_university_fees_page__WEBPACK_IMPORTED_MODULE_1__.UniversityFeesPage]
    })
], UniversityFeesPageModule);



/***/ }),

/***/ 30443:
/*!**********************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-fees/university-fees.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityFeesPage": () => (/* binding */ UniversityFeesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_university_fees_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./university-fees.page.html */ 35830);
/* harmony import */ var _university_fees_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-fees.page.scss */ 19878);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ 77370);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);











let UniversityFeesPage = class UniversityFeesPage {
    constructor(screenOrientation, elementRef, apiProgramsService, apiGeneralService, navCtrl, route, platform, loader) {
        this.screenOrientation = screenOrientation;
        this.elementRef = elementRef;
        this.apiProgramsService = apiProgramsService;
        this.apiGeneralService = apiGeneralService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.platform = platform;
        this.loader = loader;
        this.universityID = 0;
        this.arrUniversityFees = [];
        this.universityName = "";
        this.currency = "";
        this.universityNotes = "";
        this.approximateCost = 0;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.back();
        });
    }
    ngOnInit() {
        this.universityName = this.apiProgramsService.universityName;
        this.universityID = parseInt(this.route.snapshot.params['universityID']);
        this.getFeesStructure();
        this.getUniversityDetails();
    }
    getFeesStructure() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loader.presentLoading();
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            var feesContModal = this.elementRef.nativeElement.querySelector('.feesContModal');
            feesContModal.innerHTML = '<ion-row class="yearHead" #yearHead> <ion-col>Services</ion-col> </ion-row>';
            var yearHead = this.elementRef.nativeElement.querySelector('.yearHead');
            let postData = { 'UniversityDetailsId': this.universityID };
            this.apiProgramsService.GetUniversityFees(JSON.stringify(postData)).then((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.arrUniversityFees = resp;
                this.universityNotes = resp[0]["universityFeesNotes"];
                this.currency = this.arrUniversityFees[0]["currency"];
                var arrYear = [];
                var arrTotalFees = [];
                var lookupYear = {};
                var lookupService = {};
                var serviceTotal = 0;
                yield this.arrUniversityFees.forEach(i => {
                    serviceTotal = i.serviceAmount;
                    //console.log(i.serviceAmount);
                    if (!(i.feesYear in lookupYear)) {
                        lookupYear[i.feesYear] = 1;
                        arrYear.push(i.feesYear);
                        //console.log(i.serviceAmount);                    
                    }
                    var serviceID = i.serviceID;
                    if (!(i.serviceID in lookupService)) {
                        lookupService[i.serviceID] = 1;
                        feesContModal.insertAdjacentHTML('beforeend', '<ion-row class="rowData' + serviceID + '" #"rowData' + serviceID + '><ion-col>' + i.serviceName + '</ion-col></ion-row>');
                    }
                    var feesAmount = this.elementRef.nativeElement.querySelector('.rowData' + serviceID);
                    var feesYear = i.feesYear.replace(" ", "");
                    feesAmount.insertAdjacentHTML('beforeend', '<ion-col class="' + feesYear + '" #' + feesYear + '>' + i.serviceAmount + '</ion-col>');
                });
                arrYear.forEach(i => {
                    var serviceTotal = 0;
                    yearHead.insertAdjacentHTML('beforeend', '<ion-col>' + i + '</ion-col>');
                    this.arrUniversityFees.forEach(el => {
                        if (i == el.feesYear) {
                            serviceTotal = serviceTotal + el.serviceAmount;
                        }
                    });
                    arrTotalFees.push(serviceTotal++);
                });
                feesContModal.insertAdjacentHTML('beforeend', '<ion-row class="rowTotal" #"rowTotal><ion-col>Total</ion-col></ion-row>');
                var totalMount = this.elementRef.nativeElement.querySelector('.rowTotal');
                arrTotalFees.forEach(elTotal => {
                    totalMount.insertAdjacentHTML('beforeend', '<ion-col>' + elTotal + '</ion-col>');
                });
                this.loader.loadingDismiss();
            }))
                .catch(err => {
                console.log("getFeesStructure: " + err);
                this.loader.loadingDismiss();
            });
        });
    }
    back() {
        this.screenOrientation.unlock();
        let animations = {
            animated: true,
            animationDirection: "back"
        };
        this.navCtrl.back(animations);
    }
    getUniversityDetails() {
        //this.universityID = this.apiProgramsService.universityID;    
        this.universityID = this.universityID;
        this.apiProgramsService.getUniversityDetails(this.universityID).then(resp => {
            this.approximateCost = resp[0]["totalBudget"];
        })
            .catch(err => {
            console.log("getUniversities: " + err);
        });
    }
};
UniversityFeesPage.ctorParameters = () => [
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__.ScreenOrientation },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_4__.ApiProgramsService },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_5__.ApiGeneralService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService }
];
UniversityFeesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-university-fees',
        template: _raw_loader_university_fees_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_university_fees_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UniversityFeesPage);



/***/ }),

/***/ 19878:
/*!************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-fees/university-fees.page.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  text-align: left;\n  position: relative;\n  padding-left: 20px;\n}\n\nion-back-button {\n  display: block;\n  color: #000 !important;\n}\n\n.fees-box {\n  background: var(--ion-color-success-light);\n  padding: 1rem;\n  padding-top: 2rem;\n  color: #000;\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  height: 100%;\n}\n\n.fees-box h4 {\n  background: var(--ion-color-success);\n  color: #fff;\n  padding: 2rem 1rem;\n  border-radius: 10px;\n  border: 1px double #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXZlcnNpdHktZmVlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixrQkFBQTtBQUloRDs7QUFIQTtFQUNJLGNBQUE7RUFBZ0Isc0JBQUE7QUFPcEI7O0FBSkE7RUFDSSwwQ0FBQTtFQUE0QyxhQUFBO0VBQWUsaUJBQUE7RUFBbUIsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLG9DQUFBO0VBQW1DLFlBQUE7QUFjMUs7O0FBYkk7RUFBSSxvQ0FBQTtFQUFzQyxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsbUJBQUE7RUFBcUIsdUJBQUE7QUFvQnBHIiwiZmlsZSI6InVuaXZlcnNpdHktZmVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7dGV4dC1hbGlnbjogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWxlZnQ6IDIwcHg7fVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcblxyXG4uZmVlcy1ib3h7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1saWdodCk7IHBhZGRpbmc6IDFyZW07IHBhZGRpbmctdG9wOiAycmVtOyBjb2xvcjogIzAwMDsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTsgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaDR7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTsgY29sb3I6ICNmZmY7IHBhZGRpbmc6IDJyZW0gMXJlbTsgYm9yZGVyLXJhZGl1czogMTBweDsgYm9yZGVyOiAxcHggZG91YmxlICNmZmY7IH1cclxufSAgICJdfQ== */");

/***/ }),

/***/ 35830:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/universities/university-details/university-fees/university-fees.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" (click)=\"back()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{universityName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main-cont\">\n    <div class=\"toogle-cont\">\n      <div>\n        <h5>University Fees Structure in {{currency}} - Approx budget = {{this.approximateCost / 100000 | currency:'INR':'symbol':'2.0'}} lacs</h5>\n      </div>\n      <ion-grid fixed class=\"feesContModal\" #feesContModal>\n        <ion-row class=\"yearHead\" #yearHead>\n          <ion-col>Services</ion-col>\n        </ion-row>\n      </ion-grid>\n      <br><br>\n      <div class=\"notes\" *ngIf=\"universityNotes!=''\">\n        <h5>Notes:</h5>\n        <div [innerHTML]=\"universityNotes\">\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_universities_university-details_university-fees_university-fees_module_ts.js.map