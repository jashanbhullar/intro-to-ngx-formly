(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2 d-flex flex-wrap\">\n  <div class=\"card col-12 p-2 my-2 bg-secondary text-white\">\n      <h1 class=\"text-center\"> ngx-formly</h1>\n      <p class=\"text-center\">\n        This is a demo code for demonstrating the basic functionality\n        of ngx-formly\n      </p>\n  </div>\n  <div class=\"card col-6 p-2 text-center my-2\">\n    <div class=\"card-header mb-2\">Basic form</div>\n      <app-basic-formly></app-basic-formly>\n  </div>\n  <div class=\"card col-6 p-2 text-center my-2\">\n      <div class=\"card-header mb-2\">Custom template form</div>\n      <app-custom-template-formly></app-custom-template-formly>\n  </div>\n  <div class=\"card col p-2 text-center my-2\">\n    <div class=\"card-header mb-2\">Custom Wrapper (accordion) form</div>\n    <app-custom-wrapper-formly></app-custom-wrapper-formly>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "./node_modules/@ngx-formly/bootstrap/fesm5/ngx-formly-bootstrap.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _basic_formly_basic_formly_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-formly/basic-formly.component */ "./src/app/basic-formly/basic-formly.component.ts");
/* harmony import */ var _custom_template_formly_custom_template_formly_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-template-formly/custom-template-formly.component */ "./src/app/custom-template-formly/custom-template-formly.component.ts");
/* harmony import */ var _custom_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-wrapper */ "./src/app/custom-wrapper.ts");
/* harmony import */ var _custom_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-types */ "./src/app/custom-types.ts");
/* harmony import */ var _custom_wrapper_formly_custom_wrapper_formly_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-wrapper-formly/custom-wrapper-formly.component */ "./src/app/custom-wrapper-formly/custom-wrapper-formly.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _basic_formly_basic_formly_component__WEBPACK_IMPORTED_MODULE_8__["BasicFormlyComponent"],
                _custom_template_formly_custom_template_formly_component__WEBPACK_IMPORTED_MODULE_9__["CustomTemplateFormlyComponent"],
                _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTextInputComponent"],
                _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTextSelectComponent"],
                _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTextDateComponent"],
                _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTexTimeComponent"],
                _custom_wrapper__WEBPACK_IMPORTED_MODULE_10__["FormlyWrapperAccordianComponent"],
                _custom_wrapper_formly_custom_wrapper_formly_component__WEBPACK_IMPORTED_MODULE_12__["CustomWrapperFormlyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //  Needed for formly as it creates reactive forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                // Initizalie the formly module
                // pass some custom configuration
                // This config can also be done per child with
                // FormlyModule.forChild()
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["FormlyModule"].forRoot({
                    //  These work on the 'type' keyword
                    types: [
                        {
                            name: 'custom-text',
                            component: _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTextInputComponent"]
                        },
                        {
                            name: 'custom-select',
                            component: _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTextSelectComponent"]
                        },
                        {
                            name: 'custom-date',
                            component: _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTextDateComponent"]
                        },
                        {
                            name: 'custom-time',
                            component: _custom_types__WEBPACK_IMPORTED_MODULE_11__["FormlyFieldTexTimeComponent"]
                        }
                    ],
                    wrappers: [
                        {
                            name: 'accordian',
                            component: _custom_wrapper__WEBPACK_IMPORTED_MODULE_10__["FormlyWrapperAccordianComponent"]
                        }
                    ]
                }),
                _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_4__["FormlyBootstrapModule"],
                // Some ngx-bootstrap to implement using formly
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic-formly/basic-formly.component.html":
/*!**********************************************************!*\
  !*** ./src/app/basic-formly/basic-formly.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\n    <div class=\"d-flex justify-content-around\">\n      <button type=\"submit\" class=\"btn btn-primary submit-button\">Submit</button>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"options.resetModel()\">Reset</button>\n    </div>\n  </formly-form>\n</form>\n"

/***/ }),

/***/ "./src/app/basic-formly/basic-formly.component.ts":
/*!********************************************************!*\
  !*** ./src/app/basic-formly/basic-formly.component.ts ***!
  \********************************************************/
/*! exports provided: BasicFormlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormlyComponent", function() { return BasicFormlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BasicFormlyComponent = /** @class */ (function () {
    function BasicFormlyComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {
            formState: {
                awesomeIsForced: false,
            },
        };
        this.fields = [
            {
                key: 'text',
                type: 'input',
                templateOptions: {
                    label: 'Text',
                    placeholder: 'Formly is terrific!',
                    required: true,
                },
            },
            {
                key: 'nested.story',
                type: 'textarea',
                templateOptions: {
                    label: 'Some sweet story',
                    placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
                    description: '',
                    rows: 5
                },
                expressionProperties: {
                    'templateOptions.focus': 'formState.awesomeIsForced',
                    'templateOptions.description': function (model, formState) {
                        if (formState.awesomeIsForced) {
                            return 'And look! This field magically got focus!';
                        }
                    },
                },
            },
            {
                key: 'awesome',
                type: 'checkbox',
                templateOptions: { label: '' },
                expressionProperties: {
                    'templateOptions.disabled': 'formState.awesomeIsForced',
                    'templateOptions.label': function (model, formState) {
                        if (formState.awesomeIsForced) {
                            return 'Too bad, formly is really awesome...';
                        }
                        else {
                            return 'Is formly totally awesome? (uncheck this and see what happens)';
                        }
                    },
                },
            },
            {
                key: 'whyNot',
                type: 'textarea',
                expressionProperties: {
                    'templateOptions.placeholder': function (model, formState) {
                        if (formState.awesomeIsForced) {
                            return 'Too bad... It really is awesome! Wasn\'t that cool?';
                        }
                        else {
                            return 'Type in here... I dare you';
                        }
                    },
                    'templateOptions.disabled': 'formState.awesomeIsForced',
                },
                hideExpression: 'model.awesome',
                templateOptions: {
                    label: 'Why Not?',
                    placeholder: 'Type in here... I dare you',
                },
            }
        ];
    }
    BasicFormlyComponent.prototype.submit = function () {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    };
    BasicFormlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-formly',
            template: __webpack_require__(/*! ./basic-formly.component.html */ "./src/app/basic-formly/basic-formly.component.html")
        })
    ], BasicFormlyComponent);
    return BasicFormlyComponent;
}());



/***/ }),

/***/ "./src/app/custom-template-formly/custom-template-formly.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/custom-template-formly/custom-template-formly.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\n    <button type=\"submit\" class=\"btn btn-primary submit-button\" [disabled]=\"!form.valid\">Submit</button>\n  </formly-form>\n</form>\n"

/***/ }),

/***/ "./src/app/custom-template-formly/custom-template-formly.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/custom-template-formly/custom-template-formly.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomTemplateFormlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTemplateFormlyComponent", function() { return CustomTemplateFormlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomTemplateFormlyComponent = /** @class */ (function () {
    function CustomTemplateFormlyComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {
            formState: {
                awesomeIsForced: false,
            },
        };
        this.fields = [
            {
                key: 'text',
                type: 'custom-text',
                templateOptions: {
                    label: 'Custom text field',
                    placeholder: 'Custom text placeholder',
                    required: true,
                },
            },
            {
                key: 'select',
                type: 'custom-select',
                templateOptions: {
                    label: 'Custom Select field with ng-select',
                    placeholder: 'Custom select placeholder',
                    required: true,
                    multiple: false,
                    options: [
                        { label: 'Value 1', value: 1 },
                        { label: 'Value 2', value: 2 }
                    ]
                },
            },
            {
                key: 'date',
                type: 'custom-date',
                templateOptions: {
                    label: 'Custom date field with ngx datepicker',
                    placeholder: 'Custom date placeholder',
                    required: true,
                },
            },
            {
                key: 'date',
                type: 'custom-time',
                templateOptions: {
                    label: 'Custom time picker field with ngx timepicker',
                    required: true
                },
            }
        ];
    }
    CustomTemplateFormlyComponent.prototype.submit = function () {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    };
    CustomTemplateFormlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-template-formly',
            template: __webpack_require__(/*! ./custom-template-formly.component.html */ "./src/app/custom-template-formly/custom-template-formly.component.html")
        })
    ], CustomTemplateFormlyComponent);
    return CustomTemplateFormlyComponent;
}());



/***/ }),

/***/ "./src/app/custom-types.ts":
/*!*********************************!*\
  !*** ./src/app/custom-types.ts ***!
  \*********************************/
/*! exports provided: FormlyFieldTextInputComponent, FormlyFieldTextSelectComponent, FormlyFieldTextDateComponent, FormlyFieldTexTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldTextInputComponent", function() { return FormlyFieldTextInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldTextSelectComponent", function() { return FormlyFieldTextSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldTextDateComponent", function() { return FormlyFieldTextDateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyFieldTexTimeComponent", function() { return FormlyFieldTexTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//  Custom text field with extra classes and all
var FormlyFieldTextInputComponent = /** @class */ (function (_super) {
    __extends(FormlyFieldTextInputComponent, _super);
    function FormlyFieldTextInputComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldTextInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formly-field-custom-input',
            template: "\n    <label>{{ to.label }}</label>\n    <input type=\"text\" class=\"form-control bg-secondary text-white\" [formControl]=\"formControl\" [placeholder]=\"to.placeholder\">\n  ",
        })
    ], FormlyFieldTextInputComponent);
    return FormlyFieldTextInputComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));

// You can edit all the fields of ng-select. Showing just one here.
var FormlyFieldTextSelectComponent = /** @class */ (function (_super) {
    __extends(FormlyFieldTextSelectComponent, _super);
    function FormlyFieldTextSelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldTextSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formly-field-custom-select',
            template: "\n    <label>{{ to.label }}</label>\n      <ng-select\n      [placeholder]=\"to.placeholder\"\n      [items]=\"to.options\"\n      [multiple]=\"to.multiple\"\n      [formControl]=\"formControl\"\n      >\n      </ng-select>\n    ",
        })
    ], FormlyFieldTextSelectComponent);
    return FormlyFieldTextSelectComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));

var FormlyFieldTextDateComponent = /** @class */ (function (_super) {
    __extends(FormlyFieldTextDateComponent, _super);
    function FormlyFieldTextDateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldTextDateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formly-field-custom-date',
            template: "\n    <label>{{ to.label }}</label>\n    <input type=\"text\" [placeholder]=\"to.placeholder\" [formControl]=\"formControl\" class=\"form-control\" bsDatepicker>\n    ",
        })
    ], FormlyFieldTextDateComponent);
    return FormlyFieldTextDateComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));

var FormlyFieldTexTimeComponent = /** @class */ (function (_super) {
    __extends(FormlyFieldTexTimeComponent, _super);
    function FormlyFieldTexTimeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormlyFieldTexTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formly-field-custom-timepicker',
            template: "\n    <label>{{ to.label }}</label>\n    <timepicker [formControl]=\"formControl\"></timepicker>\n    ",
        })
    ], FormlyFieldTexTimeComponent);
    return FormlyFieldTexTimeComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldType"]));



/***/ }),

/***/ "./src/app/custom-wrapper-formly/custom-wrapper-formly.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/custom-wrapper-formly/custom-wrapper-formly.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <formly-form [model]=\"model\" [fields]=\"fields\" [options]=\"options\" [form]=\"form\">\n      <button type=\"submit\" class=\"btn btn-primary submit-button\" [disabled]=\"!form.valid\">Submit</button>\n    </formly-form>\n  </form>\n  "

/***/ }),

/***/ "./src/app/custom-wrapper-formly/custom-wrapper-formly.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/custom-wrapper-formly/custom-wrapper-formly.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomWrapperFormlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomWrapperFormlyComponent", function() { return CustomWrapperFormlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomWrapperFormlyComponent = /** @class */ (function () {
    function CustomWrapperFormlyComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.model = {};
        this.options = {
            formState: {
                awesomeIsForced: false,
            },
        };
        this.fields = [
            {
                key: 'text',
                type: 'custom-text',
                wrappers: ['accordian'],
                templateOptions: {
                    label: 'Custom text field',
                    placeholder: 'Custom text placeholder',
                    required: true,
                },
            },
            {
                key: 'select',
                type: 'custom-select',
                wrappers: ['accordian'],
                templateOptions: {
                    label: 'Custom Select field with ng-select',
                    placeholder: 'Custom select placeholder',
                    required: true,
                    multiple: false,
                    options: [
                        { label: 'Value 1', value: 1 },
                        { label: 'Value 2', value: 2 }
                    ]
                },
            },
            {
                key: 'date',
                type: 'custom-date',
                wrappers: ['accordian'],
                templateOptions: {
                    label: 'Custom date field with ngx datepicker',
                    placeholder: 'Custom date placeholder',
                    required: true,
                },
            },
            {
                key: 'date',
                type: 'custom-time',
                wrappers: ['accordian'],
                templateOptions: {
                    label: 'Custom time picker field with ngx timepicker',
                    required: true
                },
            }
        ];
    }
    CustomWrapperFormlyComponent.prototype.submit = function () {
        if (this.form.valid) {
            alert(JSON.stringify(this.model));
        }
    };
    CustomWrapperFormlyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-wrapper-formly',
            template: __webpack_require__(/*! ./custom-wrapper-formly.component.html */ "./src/app/custom-wrapper-formly/custom-wrapper-formly.component.html")
        })
    ], CustomWrapperFormlyComponent);
    return CustomWrapperFormlyComponent;
}());



/***/ }),

/***/ "./src/app/custom-wrapper.ts":
/*!***********************************!*\
  !*** ./src/app/custom-wrapper.ts ***!
  \***********************************/
/*! exports provided: FormlyWrapperAccordianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormlyWrapperAccordianComponent", function() { return FormlyWrapperAccordianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormlyWrapperAccordianComponent = /** @class */ (function (_super) {
    __extends(FormlyWrapperAccordianComponent, _super);
    function FormlyWrapperAccordianComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fieldComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], FormlyWrapperAccordianComponent.prototype, "fieldComponent", void 0);
    FormlyWrapperAccordianComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <accordion>\n        <accordion-group [heading]=\"to.label\">\n            <ng-template #fieldComponent></ng-template>\n        </accordion-group>\n    </accordion>\n  ",
        })
    ], FormlyWrapperAccordianComponent);
    return FormlyWrapperAccordianComponent;
}(_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["FieldWrapper"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jashan/work/private/intro-tp-ngx-formly/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map