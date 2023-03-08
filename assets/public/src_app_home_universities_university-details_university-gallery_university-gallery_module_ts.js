(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_universities_university-details_university-gallery_university-gallery_module_ts"],{

/***/ 45966:
/*!**************************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-gallery/university-gallery-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityGalleryPageRoutingModule": () => (/* binding */ UniversityGalleryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _university_gallery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./university-gallery.page */ 48004);




const routes = [
    {
        path: '',
        component: _university_gallery_page__WEBPACK_IMPORTED_MODULE_0__.UniversityGalleryPage
    }
];
let UniversityGalleryPageRoutingModule = class UniversityGalleryPageRoutingModule {
};
UniversityGalleryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UniversityGalleryPageRoutingModule);



/***/ }),

/***/ 97951:
/*!******************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-gallery/university-gallery.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityGalleryPageModule": () => (/* binding */ UniversityGalleryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _university_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-gallery-routing.module */ 45966);
/* harmony import */ var _university_gallery_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./university-gallery.page */ 48004);








let UniversityGalleryPageModule = class UniversityGalleryPageModule {
};
UniversityGalleryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _university_gallery_routing_module__WEBPACK_IMPORTED_MODULE_1__.UniversityGalleryPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_university_gallery_page__WEBPACK_IMPORTED_MODULE_2__.UniversityGalleryPage]
    })
], UniversityGalleryPageModule);



/***/ }),

/***/ 48004:
/*!****************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-gallery/university-gallery.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniversityGalleryPage": () => (/* binding */ UniversityGalleryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_university_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./university-gallery.page.html */ 78080);
/* harmony import */ var _university_gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./university-gallery.page.scss */ 11118);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);












let UniversityGalleryPage = class UniversityGalleryPage {
    constructor(headerTitle, route, apiProgramsService, auth, loader, navCtrl, apiGeneralService) {
        this.headerTitle = headerTitle;
        this.route = route;
        this.apiProgramsService = apiProgramsService;
        this.auth = auth;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.apiGeneralService = apiGeneralService;
        this.universityMainID = 0;
        this.universityID = 0;
        this.arrGallery = [];
        this.webAssetsPath = "";
        this.headerTitle.title = "University Gallery";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.universityMainID = parseInt(this.route.snapshot.params['universityMainID']);
        this.universityID = parseInt(this.route.snapshot.params['universityID']);
        this.getGalllery();
    }
    getGalllery() {
        this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.webAssetsPath + "university/gallery";
        this.loader.presentLoading();
        var uniID = this.universityMainID;
        let postData = '{"universityMainId": ' + uniID + ',"IsActive":true}';
        this.apiProgramsService.getGallery(postData).then(resp => {
            console.log(resp);
            this.arrGallery = resp;
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 100);
        })
            .catch(err => {
            console.log("getGallery: " + err);
            if (err.status == "401") {
                this.auth.logout();
            }
            this.loader.loadingDismiss();
        });
    }
    goBack() {
        this.navCtrl.back();
    }
};
UniversityGalleryPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_5__.ApiProgramsService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__.ApiGeneralService }
];
UniversityGalleryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-university-gallery',
        template: _raw_loader_university_gallery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_university_gallery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UniversityGalleryPage);



/***/ }),

/***/ 11118:
/*!******************************************************************************************************!*\
  !*** ./src/app/home/universities/university-details/university-gallery/university-gallery.page.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".gallery-cont figure {\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 5px;\n  border: 1px solid #eee;\n}\n.gallery-cont figure figcaption {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 2;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n}\n.gallery-cont figure:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  box-shadow: inset 0 -100px 35px -72px rgba(0, 0, 0, 0.8);\n}\n.gallery-cont figure img {\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXZlcnNpdHktZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBTyxXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLHNCQUFBO0FBTWhHO0FBTFE7RUFBVyxrQkFBQTtFQUFvQixTQUFBO0VBQVcsVUFBQTtFQUFZLFdBQUE7RUFBYSxVQUFBO0VBQVksV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFlBQUE7QUFleEg7QUFkUTtFQUFRLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsU0FBQTtFQUFXLE9BQUE7RUFBUyxZQUFBO0VBQWMsd0RBQUE7QUF1QmhHO0FBdEJRO0VBQUksWUFBQTtFQUFjLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxjQUFBO0FBNEIxRCIsImZpbGUiOiJ1bml2ZXJzaXR5LWdhbGxlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnktY29udHtcclxuICAgIGZpZ3VyZXttYXJnaW46IDBweDsgcGFkZGluZzogMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBmaWdjYXB0aW9ue3Bvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyByaWdodDogMHB4OyBib3R0b206IDBweDsgei1pbmRleDogMjsgY29sb3I6ICNmZmY7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNXB4O31cclxuICAgICAgICAmOmFmdGVye2NvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBib3R0b206IDA7IGxlZnQ6IDA7IGhlaWdodDogMTAwJTsgYm94LXNoYWRvdzogaW5zZXQgMCAtMTAwcHggMzVweCAtNzJweCByZ2JhKDAsIDAsIDAsIDAuOCkgfVxyXG4gICAgICAgIGltZ3toZWlnaHQ6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyOyB3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 78080:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/universities/university-details/university-gallery/university-gallery.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <div class=\"main-cont\">\r\n     <ion-grid class=\"gallery-cont\" *ngIf=\"arrGallery?.length > 0\">\r\n       <ion-row>\r\n         <ion-col size=\"12\" *ngFor=\"let item of arrGallery\">\r\n           <figure>\r\n          <img src=\"{{webAssetsPath}}/{{item.universityMainID}}/{{item.imageName}}\" />\r\n          <figcaption>{{item.imageTitle}}</figcaption>\r\n        </figure>\r\n         </ion-col>\r\n       </ion-row>\r\n     </ion-grid> \r\n\r\n     <ng-container *ngIf=\"arrGallery?.length == 0\">\r\n      <div class=\"no-data text-center\">\r\n        <h3>Oops! No data found.</h3>\r\n        <ion-icon name=\"sad-outline\"></ion-icon>\r\n        <h5>No any Gallery images are  available rite now.</h5>\r\n\r\n        <ion-button (click)=\"goBack()\" size=\"medium\" shape=\"round\" color=\"primary\">\r\n          Back\r\n        </ion-button>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_universities_university-details_university-gallery_university-gallery_module_ts.js.map