(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_top-links_contact_contact_module_ts"],{

/***/ 6616:
/*!******************************************************************!*\
  !*** ./src/app/home/top-links/contact/contact-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 1420);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 13:
/*!**********************************************************!*\
  !*** ./src/app/home/top-links/contact/contact.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-routing.module */ 6616);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.page */ 1420);








let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_2__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 1420:
/*!********************************************************!*\
  !*** ./src/app/home/top-links/contact/contact.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 98095);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 65015);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





let ContactPage = class ContactPage {
    constructor(headerTitle) {
        this.headerTitle = headerTitle;
        this.postData = {
            'progInterestId': '', 'branchId': '', 'query': ''
        };
        this.headerTitle.isBack = false;
        this.headerTitle.title = "Contact Us";
    }
    ngOnInit() {
    }
};
ContactPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleService }
];
ContactPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["map",] }]
};
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



/***/ }),

/***/ 65015:
/*!**********************************************************!*\
  !*** ./src/app/home/top-links/contact/contact.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box-prog ion-col img {\n  width: 70%;\n}\n\n.box-prog ion-col ion-label {\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.banner-sec img {\n  height: auto;\n}\n\n.content-cont .box-prog ion-col {\n  height: 100%;\n}\n\nion-slides ion-slide {\n  padding-bottom: 10px;\n}\n\n.content-cont .box-prog ion-col.selected:after {\n  height: 18px;\n  width: 18px;\n  bottom: -4px;\n}\n\n.white-box {\n  padding: 1rem;\n}\n\nion-item {\n  font-size: 1rem;\n}\n\n.map-cont {\n  margin-bottom: 1rem;\n}\n\n.map-cont iframe {\n  height: 13rem;\n  width: 100%;\n  border: 2px solid #fff;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNCLFVBQUE7QUFFdEI7O0FBREE7RUFBNEIsaUJBQUE7RUFBbUIsZ0JBQUE7QUFNL0M7O0FBTEE7RUFBZ0IsWUFBQTtBQVNoQjs7QUFSQTtFQUFnQyxZQUFBO0FBWWhDOztBQVZJO0VBQVUsb0JBQUE7QUFjZDs7QUFaQTtFQUErQyxZQUFBO0VBQWMsV0FBQTtFQUFZLFlBQUE7QUFrQnpFOztBQWpCQTtFQUFXLGFBQUE7QUFxQlg7O0FBcEJBO0VBQVMsZUFBQTtBQXdCVDs7QUF0QkE7RUFBVyxtQkFBQTtBQTBCWDs7QUF6Qkk7RUFBTyxhQUFBO0VBQWUsV0FBQTtFQUFhLHNCQUFBO0VBQXdCLGtCQUFBO0FBK0IvRCIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtcHJvZyBpb24tY29sIGltZ3t3aWR0aDogNzAlO31cclxuLmJveC1wcm9nIGlvbi1jb2wgaW9uLWxhYmVse2ZvbnQtc2l6ZTogMC44cmVtOyBmb250LXdlaWdodDogNTAwO31cclxuLmJhbm5lci1zZWMgaW1ne2hlaWdodDogYXV0bzt9XHJcbi5jb250ZW50LWNvbnQgLmJveC1wcm9nIGlvbi1jb2x7aGVpZ2h0OiAxMDAlO31cclxuaW9uLXNsaWRlc3tcclxuICAgIGlvbi1zbGlkZXtwYWRkaW5nLWJvdHRvbTogMTBweDt9XHJcbn1cclxuLmNvbnRlbnQtY29udCAuYm94LXByb2cgaW9uLWNvbC5zZWxlY3RlZDphZnRlcntoZWlnaHQ6IDE4cHg7IHdpZHRoOiAxOHB4O2JvdHRvbTogLTRweDt9XHJcbi53aGl0ZS1ib3h7cGFkZGluZzogMXJlbTt9XHJcbmlvbi1pdGVte2ZvbnQtc2l6ZTogMXJlbTt9XHJcblxyXG4ubWFwLWNvbnR7IG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBpZnJhbWV7aGVpZ2h0OiAxM3JlbTsgd2lkdGg6IDEwMCU7IGJvcmRlcjogMnB4IHNvbGlkICNmZmY7IGJvcmRlci1yYWRpdXM6IDVweDt9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 98095:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/top-links/contact/contact.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\n<ion-content>\n  <app-top-links></app-top-links>\n  <div class=\"main-cont content-cont\">\n    <section>\n      <h5>Head Office</h5>\n      <p>MOXSH Overseas Educon Private Limited <br>\n        159-160, Kaliandas Udyog Bhavan,<br>\n        Sadanand Tandel Marg,<br>\n        Prabhadevi, Mumbai – 400 025\n      </p>\n\n      <div class=\"map-cont\">\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.264828736405!2d72.82856630373536!3d19.005783080987587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaee67ff163ba0040!2sMOXSH%20Overseas%20Educon%20Private%20Limited!5e0!3m2!1sen!2sin!4v1617863683588!5m2!1sen!2sin\"\n          allowfullscreen=\"\" loading=\"lazy\"></iframe>\n      </div>\n\n      <h5>Execution Office: New Delhi</h5>\n      <p>C/o Innov8 Coworking, Above Madame Tussauds, <br>Regal Building, Connaught Place, <br>New Delhi</p>\n\n      <div class=\"offices d-none\">\n        <h5 class=\"mb-0\">Overseas Offices</h5>\n\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"3\"><img alt=\"\"\n                src=\"https://app.moksh16.in/application-centre/assets/coutry/flag/2/Russia.jpg\">\n\n            </ion-col>\n            <ion-col size=\"9\">\n              <h6>Russia</h6>\n              <div>\n                Office No.6:11, Vladimirsky lane, Belgorod, Russia.\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\"><img alt=\"\"\n                src=\"https://app.moksh16.in/application-centre/assets/coutry/flag/3/Ukraine.jpg\">\n            </ion-col>\n            <ion-col size=\"9\">\n              <h6>Ukraine</h6>\n              <div>\n                6th floor, office No.1:137, Moskovskyi, Kharkiv, Ukraine.\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\"><img alt=\"\"\n                src=\"https://app.moksh16.in/application-centre/assets/coutry/flag/6/Germany.jpg\"></ion-col>\n            <ion-col size=\"9\">\n              <h6>Germany</h6>\n              <div>\n                Gareis Strasse 13, 39106 Magdeburg, Germany\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <!-- <div class=\"quote-text\">\n          Call us on 9699-360-370 to fix an appointment at any of the branches across India.\n        </div> -->\n    </section>\n\n    <br>\n    <app-counselling-comp></app-counselling-comp>\n  </div>\n  <app-footer-short-cut></app-footer-short-cut>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_top-links_contact_contact_module_ts.js.map