(self["webpackChunkmoksh_mobility_app"] = self["webpackChunkmoksh_mobility_app"] || []).push([["src_app_home_application-center_upload-documents_upload-documents_module_ts"],{

/***/ 27704:
/*!*********************************************************************************************!*\
  !*** ./src/app/home/application-center/upload-documents/upload-documents-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDocumentsPageRoutingModule": () => (/* binding */ UploadDocumentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _upload_documents_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-documents.page */ 14171);




const routes = [
    {
        path: '',
        component: _upload_documents_page__WEBPACK_IMPORTED_MODULE_0__.UploadDocumentsPage
    }
];
let UploadDocumentsPageRoutingModule = class UploadDocumentsPageRoutingModule {
};
UploadDocumentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadDocumentsPageRoutingModule);



/***/ }),

/***/ 22184:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/upload-documents/upload-documents.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDocumentsPageModule": () => (/* binding */ UploadDocumentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../components/components.module */ 45642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _upload_documents_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-documents-routing.module */ 27704);
/* harmony import */ var _upload_documents_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-documents.page */ 14171);








let UploadDocumentsPageModule = class UploadDocumentsPageModule {
};
UploadDocumentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _upload_documents_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadDocumentsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_upload_documents_page__WEBPACK_IMPORTED_MODULE_2__.UploadDocumentsPage]
    })
], UploadDocumentsPageModule);



/***/ }),

/***/ 14171:
/*!***********************************************************************************!*\
  !*** ./src/app/home/application-center/upload-documents/upload-documents.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDocumentsPage": () => (/* binding */ UploadDocumentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_upload_documents_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upload-documents.page.html */ 50246);
/* harmony import */ var _upload_documents_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-documents.page.scss */ 43870);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/auth.service */ 37556);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-application.service */ 73064);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loader.service */ 38555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/header-title.service */ 92708);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-general.service */ 7110);
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ 85838);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/api-programs.service */ 7396);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);

















let UploadDocumentsPage = class UploadDocumentsPage {
    constructor(headerTitle, route, loader, toastr, apiApplicationService, apiProgramsService, auth, formBuilder, router, apiGeneral, previewFile, navCtrl) {
        this.headerTitle = headerTitle;
        this.route = route;
        this.loader = loader;
        this.toastr = toastr;
        this.apiApplicationService = apiApplicationService;
        this.apiProgramsService = apiProgramsService;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiGeneral = apiGeneral;
        this.previewFile = previewFile;
        this.navCtrl = navCtrl;
        this.webAssetsPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.webAssetsPath;
        this.applicationID = 0;
        this.arrUniversityDocuments = [];
        this.ipAddress = "";
        this.isImageSelected = false;
        this.arrAppUniversity = [];
        this.postDataUniversity = {};
        this.isInProgress = false;
        this.files = [];
        this.documentID = 0;
        this.headerTitle.title = "Upload Documents";
        this.headerTitle.isBack = true;
    }
    ngOnInit() {
        this.applicationID = parseInt(this.route.snapshot.params['appID']);
        this.initForm();
        this.getAppUniversity();
        this.getIpAddress();
    }
    initForm() {
        this.ionicForm = this.formBuilder.group({});
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    getUniversityDocumentList(postData) {
        this.apiApplicationService.getUniversityDocumentList(JSON.stringify(postData)).then(resp => {
            if (resp.length > 0) {
                this.arrUniversityDocuments = resp;
                this.loader.loadingDismiss();
            }
        }).catch(err => {
            console.log("getUniversityDocumentList==> " + err);
            this.loader.loadingDismiss();
        });
    }
    getAppUniversity() {
        this.loader.presentLoading();
        let postData = '{ "ApplicationId":' + this.applicationID + ',"IsActive":true }';
        this.apiApplicationService.getAppUniversity(postData).then(resp => {
            if (resp.length > 0) {
                this.arrAppUniversity = resp[0];
                this.postDataUniversity = { "ApplicationId": this.applicationID, "UniversityId": this.arrAppUniversity["universityId"], "IsActive": true };
                this.getUniversityDocumentList(this.postDataUniversity);
            }
        }).catch(err => {
            console.log("getAppUniversity==> " + err);
            this.loader.loadingDismiss();
        });
    }
    sendFile($event, documentID, appDocumentID) {
        var files = $event.target.files;
        this.documentID = documentID;
        this.isInProgress = true;
        var formData = new FormData();
        formData.append('appDocumentId', appDocumentID);
        formData.append('DocumentFileName', files[0].name);
        formData.append('Document', files[0]);
        formData.append('applicationId', this.applicationID.toString());
        formData.append('DocumentID', documentID);
        formData.append('appUniversityId', this.arrAppUniversity["appUniversityId"]);
        formData.append('createdDate', this.apiGeneral.getCurrentDateTime());
        formData.append('modifiedDate', this.apiGeneral.getCurrentDateTime());
        formData.append('createdBy', "Student");
        formData.append('modifiedBy', "Student");
        formData.append('createdIp', this.ipAddress);
        formData.append('modifiedIp', this.ipAddress);
        formData.append('isActive', "true");
        this.isInProgress = true;
        this.apiApplicationService.AddDocument(formData, appDocumentID).subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpResponse) {
                this.uploadSuccess = true;
            }
        });
        setTimeout(() => {
            this.getUniversityDocumentList(this.postDataUniversity);
        }, 1000);
    }
    viewDocument(documentPath) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            documentPath = documentPath.replace('%2F', '/');
            documentPath = this.webAssetsPath + "student-documents/" + documentPath;
            this.previewFile.preview(documentPath)
                .then((res) => console.log(res))
                .catch((error) => console.error(error));
            // this.fileOpener.open(documentPath,'application/pdf').then(() => console.log('File is opened'))
            // .catch(e => console.log('Error opening file', e));
            //const browser = this.iab.create("https://www.google.com/",'_blank');    
        });
    }
    next() {
        var count = 0;
        this.arrUniversityDocuments.forEach(i => {
            if (i.isRequired == true && i.isDocumentUploaded == false) {
                i.isWarning = true;
                count++;
            }
        });
        if (count > 0) {
            this.toastr.toastError("Kindly upload all requried documents!");
            return false;
        }
        setTimeout(() => {
            this.router.navigate(["/home/application-center/service-selection", this.applicationID]);
        }, 500);
    }
    back() {
        this.navCtrl.back();
        //this.router.navigate(["/home/application-center/academic-details", this.applicationID]);
    }
    getIpAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () { yield this.apiGeneral.getIPAddress().then(ip => { this.ipAddress = ip.ip; }); });
    }
};
UploadDocumentsPage.ctorParameters = () => [
    { type: src_app_services_header_title_service__WEBPACK_IMPORTED_MODULE_6__.HeaderTitleService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: src_app_services_api_application_service__WEBPACK_IMPORTED_MODULE_4__.ApiApplicationService },
    { type: src_app_services_api_programs_service__WEBPACK_IMPORTED_MODULE_10__.ApiProgramsService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: src_app_services_api_general_service__WEBPACK_IMPORTED_MODULE_7__.ApiGeneralService },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_8__.PreviewAnyFile },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController }
];
UploadDocumentsPage.propDecorators = {
    fileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: ['fileUpload', { static: false },] }]
};
UploadDocumentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-upload-documents',
        template: _raw_loader_upload_documents_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_upload_documents_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UploadDocumentsPage);



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

/***/ 43870:
/*!*************************************************************************************!*\
  !*** ./src/app/home/application-center/upload-documents/upload-documents.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-cont {\n  padding: 0px;\n}\n\n.document-list {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n\n.document-list ion-text {\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.document-list .file-input {\n  font-size: 0.9rem;\n  visibility: hidden;\n  display: none;\n}\n\n.document-list .file-input + label {\n  display: inline-block;\n  line-height: 20px;\n  color: white;\n  border-radius: 0.3rem;\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n\n.document-list .file-input + label ion-icon {\n  position: static;\n  color: var(--ion-color-tertiary);\n}\n\n.document-list .file-view {\n  display: inline-block;\n  font-size: 1.8rem;\n  margin-right: 10px;\n  border-right: 1px solid #ddd;\n  padding-right: 10px;\n  pointer-events: none;\n}\n\n.document-list .file-view ion-icon {\n  position: static;\n  color: var(--ion-color-medium);\n}\n\n.document-list .file-view.active {\n  pointer-events: unset;\n}\n\n.document-list .file-view.active ion-icon {\n  color: var(--ion-color-success);\n}\n\n.document-list ion-row {\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 1rem;\n  position: relative;\n}\n\n.document-list ion-row ion-col {\n  margin: auto 0px;\n}\n\n.document-list ion-row ion-col small {\n  color: var(--ion-color-success);\n}\n\n.document-list ion-row.warning:after {\n  content: \"\";\n  position: absolute;\n  left: -12px;\n  top: -18px;\n  height: calc(100% + 18px);\n  width: calc(100% + 24px);\n  background: #fde7e7;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1kb2N1bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsWUFBQTtBQUVYOztBQUFBO0VBQWdCLHNCQUFBO0VBQXdCLHVCQUFBO0FBS3hDOztBQUpJO0VBQVMsaUJBQUE7RUFBbUIsZ0JBQUE7QUFRaEM7O0FBUEk7RUFBWSxpQkFBQTtFQUFtQixrQkFBQTtFQUFvQixhQUFBO0FBWXZEOztBQVhJO0VBQVkscUJBQUE7RUFBd0IsaUJBQUE7RUFBbUIsWUFBQTtFQUFlLHFCQUFBO0VBQXVCLGVBQUE7RUFBaUIsaUJBQUE7QUFtQmxIOztBQWxCUTtFQUFTLGdCQUFBO0VBQWtCLGdDQUFBO0FBc0JuQzs7QUFuQkk7RUFBVyxxQkFBQTtFQUF1QixpQkFBQTtFQUFvQixrQkFBQTtFQUFvQiw0QkFBQTtFQUE4QixtQkFBQTtFQUFxQixvQkFBQTtBQTJCakk7O0FBMUJRO0VBQVMsZ0JBQUE7RUFBbUIsOEJBQUE7QUE4QnBDOztBQTdCUTtFQUFXLHFCQUFBO0FBZ0NuQjs7QUEvQlk7RUFBUywrQkFBQTtBQWtDckI7O0FBL0JJO0VBQVEsbUJBQUE7RUFBcUIsNkJBQUE7RUFBK0Isb0JBQUE7RUFBc0Isa0JBQUE7QUFxQ3RGOztBQXBDUTtFQUFRLGdCQUFBO0FBdUNoQjs7QUF0Q1k7RUFBTSwrQkFBQTtBQXlDbEI7O0FBdkNRO0VBQWdCLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsVUFBQTtFQUFZLHlCQUFBO0VBQTJCLHdCQUFBO0VBQTBCLG1CQUFBO0VBQXFCLFdBQUE7QUFpRDVKIiwiZmlsZSI6InVwbG9hZC1kb2N1bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHtwYWRkaW5nOiAwcHg7fVxyXG5cclxuLmRvY3VtZW50LWxpc3R7IG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLXRleHR7Zm9udC1zaXplOiAwLjlyZW07IGZvbnQtd2VpZ2h0OiA1MDA7fVxyXG4gICAgLmZpbGUtaW5wdXR7Zm9udC1zaXplOiAwLjlyZW07IHZpc2liaWxpdHk6IGhpZGRlbjsgZGlzcGxheTogbm9uZTtcclxuICAgICYgKyBsYWJlbCB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgIGxpbmUtaGVpZ2h0OiAyMHB4OyBjb2xvcjogd2hpdGU7ICBib3JkZXItcmFkaXVzOiAwLjNyZW07IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgaW9uLWljb257cG9zaXRpb246IHN0YXRpYzsgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7fVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLmZpbGUtdmlld3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMS44cmVtOyAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBpb24taWNvbntwb3NpdGlvbjogc3RhdGljOyAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO31cclxuICAgICAgICAmLmFjdGl2ZXsgIHBvaW50ZXItZXZlbnRzOiB1bnNldDsgXHJcbiAgICAgICAgICAgIGlvbi1pY29ue2NvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1yb3d7bWFyZ2luLWJvdHRvbTogMXJlbTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7IHBhZGRpbmctYm90dG9tOiAxcmVtOyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW9uLWNvbHttYXJnaW46IGF1dG8gMHB4O1xyXG4gICAgICAgICAgICBzbWFsbHtjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO31cclxuICAgICAgICB9XHJcbiAgICAgICAgJi53YXJuaW5nOmFmdGVye2NvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTEycHg7IHRvcDogLTE4cHg7IGhlaWdodDogY2FsYygxMDAlICsgMThweCk7IHdpZHRoOiBjYWxjKDEwMCUgKyAyNHB4KTsgYmFja2dyb3VuZDogI2ZkZTdlNzsgei1pbmRleDogLTE7fVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 50246:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/application-center/upload-documents/upload-documents.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content>\r\n  <app-nav-steps></app-nav-steps>\r\n\r\n  \r\n  <form class=\"form-cont\" [formGroup]=\"ionicForm\" novalidate>\r\n    <div class=\"main-cont\">\r\n      <ion-text class=\"notes\" *ngIf=\"applicationID == 0\">Just upload Mandatory Documents (<ion-text color=\"danger\">*</ion-text>). Other Documents to be submitted after your application.</ion-text>\r\n      <ion-grid fixed class=\"document-list\">\r\n        <ion-row *ngFor=\"let item of arrUniversityDocuments\" [ngClass]=\"{warning: item.isWarning}\">\r\n          <ion-col size=\"8\">\r\n            <ion-icon name=\"document-outline\" slot=\"start\"></ion-icon>\r\n            <ion-text>{{item.documentName}} <ion-text *ngIf=\"item.isRequired\" color=\"danger\">*</ion-text>\r\n            </ion-text>            \r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"text-right\">\r\n            <ion-text class=\"file-view\" [ngClass]=\"{active: item.isDocumentUploaded}\" (click)=\"viewDocument(item.documentPath)\">\r\n              <ion-icon name=\"eye-sharp\"></ion-icon>\r\n            </ion-text>\r\n            <input type=\"file\" class=\"file-input\" (change)=\"sendFile($event, item.documentID, item.appDocumentID)\"\r\n              id=\"upload{{item.documentID}}\" />\r\n            <label for=\"upload{{item.documentID}}\">\r\n              <ion-icon name=\"cloud-upload-sharp\"></ion-icon>\r\n            </label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" *ngIf=\"documentID == item.documentID\">\r\n            <div style=\"height: 10px;\">\r\n            <ion-progress-bar color=\"success\" value=\"{{percentDone / 100}}\"></ion-progress-bar></div>\r\n            <ng-container *ngIf=\"uploadSuccess\">\r\n              <small>(Uploaded)</small>\r\n            </ng-container>     \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </form>\r\n  <section class=\"btn-cont footerfixed\">\r\n    <div class=\"main-cont\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"5\">\r\n            <ion-button expand=\"block\" fill=\"outline\"  (click)=\"back()\">Back\r\n              <ion-icon name=\"chevron-back-outline\" slot=\"start\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"7\">              \r\n            <ion-button expand=\"block\" color=\"primary\" [routerLink]=\"['//home/application-center/track-application',applicationID]\" routerLinkActive=\"router-link-active\" >\r\n              Track Application\r\n              <ion-icon name=\"navigate-circle-outline\" slot=\"end\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_application-center_upload-documents_upload-documents_module_ts.js.map