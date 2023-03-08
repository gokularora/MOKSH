(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_blog_blog_module_ts"],{

/***/ 1605:
/*!**************************************************!*\
  !*** ./src/app/home/blog/blog-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageRoutingModule": () => (/* binding */ BlogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.page */ 42122);




const routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_0__.BlogPage
    },
    {
        path: 'blog-detail/:postID',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_blog_blog-detail_blog-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./blog-detail/blog-detail.module */ 83994)).then(m => m.BlogDetailPageModule)
    }
];
let BlogPageRoutingModule = class BlogPageRoutingModule {
};
BlogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlogPageRoutingModule);



/***/ }),

/***/ 79876:
/*!******************************************!*\
  !*** ./src/app/home/blog/blog.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageModule": () => (/* binding */ BlogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-routing.module */ 1605);
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.page */ 42122);








let BlogPageModule = class BlogPageModule {
};
BlogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_1__.BlogPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_2__.BlogPage]
    })
], BlogPageModule);



/***/ }),

/***/ 42122:
/*!****************************************!*\
  !*** ./src/app/home/blog/blog.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPage": () => (/* binding */ BlogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./blog.page.html */ 53063);
/* harmony import */ var _blog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.page.scss */ 7035);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/loader.service */ 38555);
/* harmony import */ var _services_api_lms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api-lms.service */ 56783);
/* harmony import */ var _services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);








let BlogPage = class BlogPage {
    constructor(headerTitleService, apiLMSService, loader, router) {
        this.headerTitleService = headerTitleService;
        this.apiLMSService = apiLMSService;
        this.loader = loader;
        this.router = router;
        this.arrBlogs = [];
        this.arrBlogCategory = [];
        this.selectedCategory = "";
        this.headerTitleService.title = "News & Articles";
    }
    ngOnInit() {
        this.getBlogCategory();
    }
    doRefresh(event) {
        this.getBlogCategory();
        setTimeout(() => { event.target.complete(); }, 2000);
    }
    getBlogs(categoryID) {
        this.loader.presentLoading();
        this.arrBlogs = [];
        var data = new FormData();
        data.append("xAction", "getBlogList");
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        data.append("categoryID", categoryID);
        this.apiLMSService.getBlogs(data).then(resp => {
            this.arrBlogs = resp.data;
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 500);
        })
            .catch(err => {
            console.log("getBlogs(): " + err);
            this.loader.loadingDismiss();
        });
    }
    getBlogCategory() {
        var data = new FormData();
        data.append("xAction", "getBlogCategory");
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        this.apiLMSService.getBlogs(data).then(resp => {
            this.arrBlogCategory = resp.data;
            this.getBlogs(resp.data[1]["categoryID"]);
            this.selectedCategory = resp.data[1]["categoryID"];
        })
            .catch(err => {
            console.log("getBlogCategory(): " + err);
        });
    }
    onClickDetails(postID) {
        console.log(postID);
        this.router.navigate(['/home/blog/blog-detail', postID]);
    }
    ionChangeCategory($event) {
        let categoryID = $event.target.value;
        this.getBlogs(categoryID);
    }
};
BlogPage.ctorParameters = () => [
    { type: _services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: _services_api_lms_service__WEBPACK_IMPORTED_MODULE_3__.ApiLMSService },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
BlogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-blog',
        template: _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlogPage);



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

/***/ 7035:
/*!******************************************!*\
  !*** ./src/app/home/blog/blog.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 53063:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/blog/blog.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid class=\"filter-bar\">\n    <ion-row>     \n      <ion-col size=\"12\">\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\n          <ion-label>Category</ion-label>\n          <ion-select interface=\"action-sheet\" (ionChange)=\"ionChangeCategory($event)\" [value]=\"selectedCategory\">\n            <ion-select-option [value]=\"val.categoryID\" *ngFor=\"let val of arrBlogCategory\">{{val.categoryTitle}}</ion-select-option>            \n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n\n    \n    <ul class=\"custom-list\" *ngIf=\"arrBlogs?.length > 0\">\n      <ion-virtual-scroll [items]=\"arrBlogs\" approxItemHeight=\"80px\">\n      <li *virtualItem=\"let item\"  (click)=\"onClickDetails(item.postID)\">\n        <figure>\n          <img src=\"https://www.moksh16.com/blog/uploads/post/150_150_ratio/{{item.postImage}}\" alt=\"\" *ngIf=\"item.postImage; else elseBlock\">\n          <ng-template #elseBlock>\n            <img src=\"https://app.moksh16.in/images/default-img.jpg\" alt=\"\">\n          </ng-template>\n        </figure>\n        <div class=\"list-content\">\n          <h3>{{item.postTitle}}</h3>\n          <div class=\"btm-info\">\n            <em>{{item.datePublish | date:'mediumDate'}}</em>\n          </div>\n        </div>\n      </li>\n    </ion-virtual-scroll>\n    </ul>\n    <div class=\"main-cont\">\n    <ng-container *ngIf=\"arrBlogs.length == 0\">\n      <div class=\"no-data text-center\">\n        <h3>Oops! No data found.</h3>\n        <ion-icon name=\"sad-outline\"></ion-icon>\n        <h5>No any blog is available at this time. Please check after few time.</h5>       \n      </div>\n    </ng-container>\n  </div>\n<app-footer-short-cut></app-footer-short-cut>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_blog_blog_module_ts.js.map