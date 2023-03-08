(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_blog_blog-detail_blog-detail_module_ts"],{

/***/ 41788:
/*!*********************************************************************!*\
  !*** ./src/app/home/blog/blog-detail/blog-detail-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailPageRoutingModule": () => (/* binding */ BlogDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _blog_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-detail.page */ 36220);




const routes = [
    {
        path: '',
        component: _blog_detail_page__WEBPACK_IMPORTED_MODULE_0__.BlogDetailPage
    }
];
let BlogDetailPageRoutingModule = class BlogDetailPageRoutingModule {
};
BlogDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlogDetailPageRoutingModule);



/***/ }),

/***/ 83994:
/*!*************************************************************!*\
  !*** ./src/app/home/blog/blog-detail/blog-detail.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailPageModule": () => (/* binding */ BlogDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _blog_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-detail-routing.module */ 41788);
/* harmony import */ var _blog_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-detail.page */ 36220);








let BlogDetailPageModule = class BlogDetailPageModule {
};
BlogDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _blog_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.BlogDetailPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_blog_detail_page__WEBPACK_IMPORTED_MODULE_2__.BlogDetailPage]
    })
], BlogDetailPageModule);



/***/ }),

/***/ 36220:
/*!***********************************************************!*\
  !*** ./src/app/home/blog/blog-detail/blog-detail.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailPage": () => (/* binding */ BlogDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_blog_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./blog-detail.page.html */ 32028);
/* harmony import */ var _blog_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-detail.page.scss */ 39524);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/toast.service */ 84465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/loader.service */ 38555);
/* harmony import */ var _services_header_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-lms.service */ 56783);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);










let BlogDetailPage = class BlogDetailPage {
    constructor(headerTitleService, apiLMSService, loader, route, socialSharing, toastr) {
        this.headerTitleService = headerTitleService;
        this.apiLMSService = apiLMSService;
        this.loader = loader;
        this.route = route;
        this.socialSharing = socialSharing;
        this.toastr = toastr;
        this.arrBlogs = { 'postImage': '', 'datePublish': null, 'postTitle': '', 'postDesc': '' };
        this.postID = "";
        this.shareURL = "";
        this.imgBlogPath = "";
        this.isShareLoading = false;
        this.isFBLoading = false;
        this.isWALoading = false;
        this.isTWLoading = false;
        this.isIGLoading = false;
        this.headerTitleService.title = "Blog Details";
        this.headerTitleService.isBack = true;
    }
    ngOnInit() {
        this.postID = this.route.snapshot.params['postID'];
        console.log(this.postID);
        this.getBlogDetails();
    }
    getBlogDetails() {
        var data = new FormData();
        data.append("xAction", "getBlogDetail");
        data.append("apiKey", "U0NJVFlSRVdBUkRa");
        data.append("postID", this.postID);
        this.apiLMSService.getBlogs(data).then(resp => {
            this.arrBlogs = resp.data[0];
            this.imgBlogPath = "https://www.moksh16.com/blog/uploads/post/500_500_ratio/" + resp.data[0]["postImage"];
            this.shareURL = "https://www.moksh16.com/blog/" + this.arrBlogs["seoUri"];
            setTimeout(() => {
                this.loader.loadingDismiss();
            }, 500);
        })
            .catch(err => {
            console.log("getBlogDetails(): " + err);
            this.loader.loadingDismiss();
        });
    }
    ShareGeneric() {
        this.isShareLoading = true;
        this.socialSharing.share(this.arrBlogs["postTitle"], '', this.imgBlogPath, this.shareURL).then(resp => {
            this.isShareLoading = false;
        }).catch((ex) => {
            console.log("ShareGeneric() " + ex);
            //this.toastr.toastError("Sorry! Unable to share. We are facing some chalanges");
            this.isShareLoading = false;
        });
    }
    ShareWhatsapp() {
        this.isWALoading = true;
        this.socialSharing.shareViaWhatsApp(this.arrBlogs["postTitle"], this.imgBlogPath, this.shareURL).then(resp => {
            this.isWALoading = false;
        })
            .catch((ex) => {
            console.log("ShareWhatsapp() " + ex);
            this.toastr.toastError("Sorry! Unable to share. Please check if Whatsapp app is installed correctly");
            this.isWALoading = false;
        });
    }
    ShareFacebook() {
        this.isFBLoading = true;
        this.socialSharing.shareViaFacebook(this.arrBlogs["postTitle"], this.imgBlogPath, this.shareURL).then(resp => {
            this.isFBLoading = false;
        })
            .catch((ex) => {
            console.log("ShareFacebook() " + ex);
            this.toastr.toastError("Sorry! Unable to share. Please check if Facebook app is installed correctly");
            this.isFBLoading = false;
        });
    }
    SendTwitter() {
        this.isTWLoading = true;
        this.socialSharing.shareViaTwitter(this.arrBlogs["postTitle"], this.imgBlogPath, this.shareURL).then(resp => {
            this.isTWLoading = false;
        })
            .catch((ex) => {
            console.log("SendTwitter() " + ex);
            this.toastr.toastError("Sorry! Unable to share. Please check if Twitter app is installed correctly");
            this.isTWLoading = false;
        });
    }
    SendInstagram() {
        this.isIGLoading = true;
        this.socialSharing.shareViaInstagram(this.arrBlogs["postTitle"], this.imgBlogPath).then(resp => {
            this.isIGLoading = false;
        })
            .catch((ex) => {
            console.log("SendInstagram() " + ex);
            this.toastr.toastError("Sorry! Unable to share. Please check if Instagram app is installed correctly");
            this.isIGLoading = false;
        });
    }
};
BlogDetailPage.ctorParameters = () => [
    { type: _services_header_title_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTitleService },
    { type: src_app_services_api_lms_service__WEBPACK_IMPORTED_MODULE_5__.ApiLMSService },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__.SocialSharing },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService }
];
BlogDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-blog-detail',
        template: _raw_loader_blog_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blog_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlogDetailPage);



/***/ }),

/***/ 39524:
/*!*************************************************************!*\
  !*** ./src/app/home/blog/blog-detail/blog-detail.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blog-details h3 {\n  font-size: 1.2rem;\n}\n.blog-details .blogtime {\n  font-size: 0.9rem;\n  color: #999;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 1rem;\n  margin-top: 8px;\n}\n.blog-details figure {\n  margin: 0px;\n}\n.blog-details figure img {\n  width: 100%;\n}\n.blog-details .blog-content {\n  text-align: justify;\n}\n.social-icons ion-icon {\n  font-size: 2rem;\n}\n.social-icons ion-col {\n  padding-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFHLGlCQUFBO0FBQ1A7QUFBSTtFQUFVLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxrQkFBQTtFQUFvQiw2QkFBQTtFQUErQixvQkFBQTtFQUFzQixlQUFBO0FBUXZIO0FBUEk7RUFBTyxXQUFBO0FBVVg7QUFUUTtFQUFJLFdBQUE7QUFZWjtBQVRJO0VBQWUsbUJBQUE7QUFZbkI7QUFSSTtFQUFTLGVBQUE7QUFZYjtBQVhJO0VBQVEsZ0JBQUE7QUFjWiIsImZpbGUiOiJibG9nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1kZXRhaWxze1xyXG4gICAgaDN7Zm9udC1zaXplOiAxLjJyZW07fVxyXG4gICAgLmJsb2d0aW1le2ZvbnQtc2l6ZTogMC45cmVtOyBjb2xvcjogIzk5OTsgbWFyZ2luLWJvdHRvbTogOHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgcGFkZGluZy1ib3R0b206IDFyZW07IG1hcmdpbi10b3A6IDhweDt9XHJcbiAgICBmaWd1cmV7bWFyZ2luOiAwcHg7XHJcbiAgICAgICAgaW1ne3dpZHRoOiAxMDAlO31cclxuICAgIH1cclxuXHJcbiAgICAuYmxvZy1jb250ZW50eyB0ZXh0LWFsaWduOiBqdXN0aWZ5O31cclxufVxyXG5cclxuLnNvY2lhbC1pY29uc3tcclxuICAgIGlvbi1pY29ue2ZvbnQtc2l6ZTogMnJlbTt9XHJcbiAgICBpb24tY29se3BhZGRpbmctdG9wOiA4cHg7fVxyXG59Il19 */");

/***/ }),

/***/ 32028:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/blog/blog-detail/blog-detail.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n\n<ion-content>\n  <div class=\"main-cont\">\n    <div class=\"blog-details\">\n      <figure>\n        <ion-img [src]=\"imgBlogPath\" *ngIf=\"arrBlogs.postImage; else elseBlock\"></ion-img>        \n        <ng-template #elseBlock>\n          <img src=\"https://app.moksh16.in/images/default-img.jpg\" alt=\"\">\n        </ng-template>\n      </figure>\n      <div class=\"blogtime\"><em> <strong>Posted on: </strong> {{arrBlogs.datePublish | date:'mediumDate'}} </em></div>\n    \n      <h3>{{arrBlogs.postTitle}}</h3>\n\n      <div class=\"blog-content\" [innerHTML] = \"arrBlogs.postDesc\">\n        \n      </div>\n    </div>\n  </div>\n\n  <section class=\"footer-links\">\n    <ion-grid class=\"social-icons\">  \n      <ion-row class=\"ion-align-items-center\">\n        <ion-col>\n          <strong>Share: </strong>         \n        </ion-col>   \n        <ion-col (click)=\"ShareGeneric()\">\n          <ion-icon name=\"share-social-outline\" class=\"share\" *ngIf=\"!isShareLoading\"></ion-icon>\n          <ion-spinner class=\"share\" name=\"lines\" *ngIf=\"isShareLoading\"></ion-spinner>\n        </ion-col>             \n        <!-- <ion-col  (click)=\"ShareFacebook()\">          \n          <ion-icon class=\"fb\" name=\"logo-facebook\" *ngIf=\"!isFBLoading\"></ion-icon>\n          <ion-spinner class=\"fb\" name=\"lines\" *ngIf=\"isFBLoading\"></ion-spinner>\n        </ion-col>\n        <ion-col size=\"2\" (click)=\"ShareWhatsapp()\">            \n            <ion-icon class=\"wa\" name=\"logo-whatsapp\" *ngIf=\"!isWALoading\"></ion-icon>\n            <ion-spinner class=\"wa\" name=\"lines\" *ngIf=\"isWALoading\"></ion-spinner>\n        </ion-col>\n        <ion-col size=\"2\" (click)=\"SendTwitter()\" >          \n          <ion-icon class=\"tw\" name=\"logo-twitter\" *ngIf=\"!isTWLoading\"></ion-icon>\n          <ion-spinner class=\"tw\" name=\"lines\" *ngIf=\"isTWLoading\"></ion-spinner>\n        </ion-col>   \n        <ion-col (click)=\"SendInstagram()\">          \n          <ion-icon class=\"ig\" name=\"logo-instagram\" *ngIf=\"!isIGLoading\"></ion-icon>\n          <ion-spinner class=\"ig\" name=\"lines\" *ngIf=\"isIGLoading\"></ion-spinner>\n        </ion-col>     -->\n      </ion-row>\n    </ion-grid>  \n  </section>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_blog_blog-detail_blog-detail_module_ts.js.map