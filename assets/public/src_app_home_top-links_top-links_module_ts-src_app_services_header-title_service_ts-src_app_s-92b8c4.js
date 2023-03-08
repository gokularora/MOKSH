(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_top-links_module_ts-src_app_services_header-title_service_ts-src_app_s-92b8c4"],{

/***/ 81883:
/*!************************************************************!*\
  !*** ./src/app/home/top-links/top-links-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLinksPageRoutingModule": () => (/* binding */ TopLinksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _top_links_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-links.page */ 94936);




const routes = [
    {
        path: '',
        component: _top_links_page__WEBPACK_IMPORTED_MODULE_0__.TopLinksPage
    },
    {
        path: 'career-plan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_career-plan_career-plan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./career-plan/career-plan.module */ 28915)).then(m => m.CareerPlanPageModule)
    },
    {
        path: 'services',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_services_services_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./services/services.module */ 9799)).then(m => m.ServicesPageModule)
    },
    {
        path: 'study-cost',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_study-cost_study-cost_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./study-cost/study-cost.module */ 79599)).then(m => m.StudyCostPageModule)
    },
    {
        path: 'scholarship',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_top-links_scholarship_scholarship_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./scholarship/scholarship.module */ 91062)).then(m => m.ScholarshipPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 13)).then(m => m.ContactPageModule)
    },
    {
        path: 'moksh-pro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_moksh-pro_moksh-pro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moksh-pro/moksh-pro.module */ 94011)).then(m => m.MokshProPageModule)
    },
    {
        path: 'moksh-plus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_moksh-plus_moksh-plus_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./moksh-plus/moksh-plus.module */ 9254)).then(m => m.MokshPlusPageModule)
    },
    {
        path: 'cmp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_cmp_cmp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cmp/cmp.module */ 39259)).then(m => m.CmpPageModule)
    },
    {
        path: 'vlogs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_top-links_vlogs_vlogs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vlogs/vlogs.module */ 64130)).then(m => m.VlogsPageModule)
    }
];
let TopLinksPageRoutingModule = class TopLinksPageRoutingModule {
};
TopLinksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopLinksPageRoutingModule);



/***/ }),

/***/ 22064:
/*!****************************************************!*\
  !*** ./src/app/home/top-links/top-links.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLinksPageModule": () => (/* binding */ TopLinksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _top_links_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-links-routing.module */ 81883);
/* harmony import */ var _top_links_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-links.page */ 94936);








let TopLinksPageModule = class TopLinksPageModule {
};
TopLinksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule,
            _top_links_routing_module__WEBPACK_IMPORTED_MODULE_1__.TopLinksPageRoutingModule
        ],
        declarations: [_top_links_page__WEBPACK_IMPORTED_MODULE_2__.TopLinksPage]
    })
], TopLinksPageModule);



/***/ }),

/***/ 94936:
/*!**************************************************!*\
  !*** ./src/app/home/top-links/top-links.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopLinksPage": () => (/* binding */ TopLinksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_top_links_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./top-links.page.html */ 34517);
/* harmony import */ var _top_links_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-links.page.scss */ 88459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TopLinksPage = class TopLinksPage {
    constructor() { }
    ngOnInit() {
    }
};
TopLinksPage.ctorParameters = () => [];
TopLinksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-top-links',
        template: _raw_loader_top_links_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_top_links_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopLinksPage);



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

/***/ 88459:
/*!****************************************************!*\
  !*** ./src/app/home/top-links/top-links.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtbGlua3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 34517:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/top-links.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>top-links</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_top-links_module_ts-src_app_services_header-title_service_ts-src_app_s-92b8c4.js.map