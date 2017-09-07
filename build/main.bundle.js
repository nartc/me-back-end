webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <ng-progress\n    [positionUsing]=\"'marginLeft'\" \n    [minimum]=\"0.15\" \n    [maximum]=\"1\"\n    [speed]=\"200\" \n    [direction]=\"'leftToRightIncreased'\"\n    [color]=\"#67b021\" \n    [trickleSpeed]=\"250\"\n    [thick]=\"true\" \n    [ease]=\"'easeInSine'\"\n  ></ng-progress>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, clientService) {
        this.authService = authService;
        this.clientService = clientService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.loadCurrentAdmin();
        this.clientService.loadCurrentClient();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_product_add_productAdd_directive__ = __webpack_require__("../../../../../src/app/components/product-add/productAdd.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_coupon_add_coupon_add_directive__ = __webpack_require__("../../../../../src/app/components/coupon-add/coupon-add.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_coupon_service__ = __webpack_require__("../../../../../src/app/services/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_vendor_order_service__ = __webpack_require__("../../../../../src/app/services/vendor-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_login_guard__ = __webpack_require__("../../../../../src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_product_sale_product_sale_component__ = __webpack_require__("../../../../../src/app/components/product-sale/product-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_products_products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_product_add_product_add_component__ = __webpack_require__("../../../../../src/app/components/product-add/product-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_clients_clients_component__ = __webpack_require__("../../../../../src/app/components/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_client_detail_client_detail_component__ = __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_client_add_client_add_component__ = __webpack_require__("../../../../../src/app/components/client-add/client-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_client_edit_client_edit_component__ = __webpack_require__("../../../../../src/app/components/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/components/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_client_orders_client_orders_component__ = __webpack_require__("../../../../../src/app/components/client-orders/client-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_client_order_detail_client_order_detail_component__ = __webpack_require__("../../../../../src/app/components/client-order-detail/client-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_vendor_orders_vendor_orders_component__ = __webpack_require__("../../../../../src/app/components/vendor-orders/vendor-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_vendor_order_detail_vendor_order_detail_component__ = __webpack_require__("../../../../../src/app/components/vendor-order-detail/vendor-order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_coupon_coupon_component__ = __webpack_require__("../../../../../src/app/components/coupon/coupon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_coupon_detail_coupon_detail_component__ = __webpack_require__("../../../../../src/app/components/coupon-detail/coupon-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_coupon_add_coupon_add_component__ = __webpack_require__("../../../../../src/app/components/coupon-add/coupon-add.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Cores










//PrimeNG

//Services










//Guards



//Components


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_44__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'dashboard/:role/:id', component: __WEBPACK_IMPORTED_MODULE_27__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_32__components_clients_clients_component__["a" /* ClientsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'client-detail/:id', component: __WEBPACK_IMPORTED_MODULE_33__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'add-client', component: __WEBPACK_IMPORTED_MODULE_34__components_client_add_client_add_component__["a" /* ClientAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'edit-client/:id', component: __WEBPACK_IMPORTED_MODULE_35__components_client_edit_client_edit_component__["a" /* ClientEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'cart/:role/:id', component: __WEBPACK_IMPORTED_MODULE_38__components_cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sale/:role', component: __WEBPACK_IMPORTED_MODULE_28__components_product_sale_product_sale_component__["a" /* ProductSaleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_29__components_products_products_component__["a" /* ProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'product-detail/:id', component: __WEBPACK_IMPORTED_MODULE_30__components_product_detail_product_detail_component__["a" /* ProductDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'add-product', component: __WEBPACK_IMPORTED_MODULE_31__components_product_add_product_add_component__["a" /* ProductAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'edit-product/:id', component: __WEBPACK_IMPORTED_MODULE_36__components_product_edit_product_edit_component__["a" /* ProductEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'client-orders', component: __WEBPACK_IMPORTED_MODULE_39__components_client_orders_client_orders_component__["a" /* ClientOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'vendor-orders', component: __WEBPACK_IMPORTED_MODULE_41__components_vendor_orders_vendor_orders_component__["a" /* VendorOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'vendor-order-detail/:id', component: __WEBPACK_IMPORTED_MODULE_42__components_vendor_order_detail_vendor_order_detail_component__["a" /* VendorOrderDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'client-order-detail/:role/:id', component: __WEBPACK_IMPORTED_MODULE_40__components_client_order_detail_client_order_detail_component__["a" /* ClientOrderDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'coupons', component: __WEBPACK_IMPORTED_MODULE_47__components_coupon_coupon_component__["a" /* CouponComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'add-coupon', component: __WEBPACK_IMPORTED_MODULE_49__components_coupon_add_coupon_add_component__["a" /* CouponAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'coupon/:id', component: __WEBPACK_IMPORTED_MODULE_48__components_coupon_detail_coupon_detail_component__["a" /* CouponDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_43__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_product_sale_product_sale_component__["a" /* ProductSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_product_add_product_add_component__["a" /* ProductAddComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_client_add_client_add_component__["a" /* ClientAddComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_client_edit_client_edit_component__["a" /* ClientEditComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_product_edit_product_edit_component__["a" /* ProductEditComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_client_orders_client_orders_component__["a" /* ClientOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_client_order_detail_client_order_detail_component__["a" /* ClientOrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_vendor_orders_vendor_orders_component__["a" /* VendorOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_vendor_order_detail_vendor_order_detail_component__["a" /* VendorOrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_product_add_productAdd_directive__["a" /* FileValueAccessor */],
            __WEBPACK_IMPORTED_MODULE_47__components_coupon_coupon_component__["a" /* CouponComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_coupon_detail_coupon_detail_component__["a" /* CouponDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_coupon_add_coupon_add_component__["a" /* CouponAddComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_coupon_add_coupon_add_directive__["a" /* UppercaseDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["MenuModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["SplitButtonModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["RadioButtonModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataGridModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["ToggleButtonModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgressModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_13__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_14__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_15__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_16__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_17__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_18__services_coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_19__services_vendor_order_service__["a" /* VendorOrderService */],
            __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */],
            __WEBPACK_IMPORTED_MODULE_23__guards_login_guard__["a" /* LoginGuard */],
            __WEBPACK_IMPORTED_MODULE_20__services_activity_service__["a" /* ActivityService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_http__["BrowserXhr"], useClass: __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["b" /* NgProgressBrowserXhr */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-6 ui-md-6 ui-sm-12\">\r\n    <h2><i class=\"fa fa-shopping-cart\"> </i> Cart</h2>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <!-- TODO -->\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n<!-- Cart Entry -->\r\n<div class=\"ui-g\">\r\n  <table class=\"table table-responsive\">\r\n    <thead class=\"thead-default\">\r\n      <tr>\r\n        <th>Detail</th>\r\n        <th>Unit</th>\r\n        <th>Price</th>\r\n        <th>Quantity</th>\r\n        <th>Line Total</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"cart && cart.length > 0;else noCart\">\r\n      <tr *ngFor=\"let line of cart\">\r\n        <td>\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-2\"><img src=\"{{line.product.productDetails.image}}\" width=\"50\" height=\"50\"></div>\r\n            <div class=\"ui-g-10\">\r\n              <p>\r\n                {{line.product.productDetails.name}}<br>\r\n                <span style=\"font-style:italic\">{{line.product.productNumber}}</span> <br>\r\n                <span class=\"text-success\" *ngIf=\"role=='Client' && !line.backorder\">In Stock</span>\r\n                <span class=\"text-danger\" *ngIf=\"role=='Client' && line.backorder\">Backorder</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </td>\r\n        <td>{{line.product.productDetails.unit}}</td>\r\n        <td>\r\n          <span *ngIf=\"role == 'Client'\">{{line.product.productSellPrice | currency:'USD':true}}</span>\r\n          <span *ngIf=\"role == 'Admin'\">{{line.product.productBuyPrice | currency:'USD':true}}</span>\r\n        </td>\r\n        <td>x\r\n          <input \r\n            id=\"quantityInput\"\r\n            type=\"number\" \r\n            [(ngModel)]=\"line.quantity\" \r\n            name=\"quantity\" \r\n            min=\"1\" \r\n            [max]=\"line.product.inStock\"\r\n            (change)=\"onChange(line)\"\r\n          >\r\n        </td>\r\n        <td>\r\n          <span *ngIf=\"role == 'Client'\">{{line.quantity * line.product.productSellPrice | currency:'USD':true}}</span>\r\n          <span *ngIf=\"role == 'Admin'\">{{line.quantity * line.product.productBuyPrice | currency:'USD':true}}</span>\r\n        </td>\r\n        <td>\r\n          <button \r\n            pButton\r\n            type=\"button\"\r\n            label=\"Remove\"\r\n            icon=\"fa-close\"\r\n            class=\"ui-button-danger\"\r\n            (click)=\"onRemoveClick(line.product.productNumber)\"\r\n          >\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<ng-template #noCart>\r\n  <h5>Your cart is empty. Go add some products</h5>\r\n  <button \r\n      pButton\r\n      type=\"button\"\r\n      label=\"Go to Shop\"\r\n      class=\"ui-button-primary\"\r\n      icon=\"fa-arrow-circle-o-left\"\r\n      [routerLink]=\"['/sale/', role]\"\r\n    >\r\n  </button>\r\n</ng-template>\r\n<hr>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-6 ui-md-6 ui-sm-12 ui-xs-12\">\r\n      <span *ngIf=\"role == 'Admin'\"></span>\r\n    </div>\r\n    <div class=\"ui-g-3 ui-md-3\"></div>\r\n    <div class=\"ui-g-3 ui-md-3 ui-sm-12 ui-xs-12\">\r\n      <div class=\"ui-g-12\" id=\"totalBox\">\r\n          <div class=\"ui-g-6\" *ngIf=\"role == 'Client'\"><h5>Subtotal:</h5></div>\r\n          <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\" *ngIf=\"role == 'Client'\">{{subTotal | currency:'USD':true}}</div>\r\n          <div class=\"ui-g-12 ui-inputgroup\" *ngIf=\"role == 'Client'\">\r\n              <input \r\n                pInputText\r\n                pTooltip=\"You can only use one coupon at a time\" \r\n                tooltipPosition=\"bottom\"\r\n                size=\"16\"\r\n                type=\"text\"\r\n                placeholder=\"Enter coupon\"\r\n                [(ngModel)]=\"couponCode\"\r\n                name=\"couponCode\"\r\n                uppercase\r\n              >\r\n              <button \r\n                pButton\r\n                type=\"button\"\r\n                label=\"Submit\"\r\n                class=\"ui-button-success\"\r\n                (click)=\"onCouponSubmitClick(couponCode)\"\r\n              >\r\n              </button>\r\n          </div>\r\n          <div class=\"ui-g-12 animated fadeInUp\" *ngIf=\"couponSubmitted\">\r\n            <span *ngIf=\"couponAccepted\" class=\"ui-messages ui-corner-all ui-messages-success\">{{couponCode}} used <i class=\"fa fa-check-circle-o\"></i></span>\r\n            <span *ngIf=\"!couponAccepted\" class=\"ui-messages ui-corner-all ui-messages-error\">{{couponCode}} is inactive <i class=\"fa fa-times-circle-o\"></i></span>\r\n          </div>\r\n          <div class=\"ui-g-6\" *ngIf=\"role == 'Client'\"><h5>Discount:</h5></div>\r\n          <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\" *ngIf=\"role == 'Client'\">{{discount | currency:'USD':true}}</div>\r\n          <div class=\"ui-g-12\" id=\"totalFooter\">\r\n              <div class=\"ui-g-6\"><h5 class=\"h4\">Total:</h5></div>\r\n              <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\"><h5 class=\"h4\">{{cartTotal | currency:'USD':true}}</h5></div>\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" id=\"sendButton\">\r\n        <button \r\n          pButton\r\n          type=\"button\"\r\n          label=\"Send\"\r\n          icon=\"fa-paper-plane-o\"\r\n          class=\"btn-block\"\r\n          (click)=\"onSendClick()\"\r\n        >\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody input {\n  border-radius: 5px; }\n\n.ui-g-12#totalBox {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 0; }\n\n.ui-g-12#totalFooter {\n  padding: 0;\n  border-top: 1px solid #ccc;\n  background-color: #e9ecef; }\n\n.ui-g-12#sendButton {\n  padding: 0;\n  margin-top: 10px; }\n\ninput#quantityInput {\n  text-align: center; }\n\n::ng-deep .ui-messages {\n  display: block;\n  margin: 0;\n  padding: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_coupon_service__ = __webpack_require__("../../../../../src/app/services/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vendor_order_service__ = __webpack_require__("../../../../../src/app/services/vendor-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CartComponent = (function () {
    function CartComponent(router, aRoute, cartService, confirmationService, flashMessagesService, orderService, clientService, authService, localStorageService, couponService, vendorOrderService, activityService) {
        this.router = router;
        this.aRoute = aRoute;
        this.cartService = cartService;
        this.confirmationService = confirmationService;
        this.flashMessagesService = flashMessagesService;
        this.orderService = orderService;
        this.clientService = clientService;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.couponService = couponService;
        this.vendorOrderService = vendorOrderService;
        this.activityService = activityService;
        this.cart = [];
        this.subTotal = 0;
        this.discount = 0;
        this.cartTotal = 0;
        this.couponAccepted = false;
        this.couponSubmitted = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Role
        this.role = this.aRoute.snapshot.params['role'];
        //Get Id
        this.id = this.aRoute.snapshot.params['id'];
        //Get Current User ID
        if (this.role == 'Client') {
            this.userId = this.clientService.currentClient._id;
        }
        else if (this.role == 'Admin') {
            this.userId = this.authService.currentAdmin._id;
        }
        //Get CartEntries
        this.cartService.getAllCartEntries()
            .then(function (carts) {
            _this.cart = carts;
            _this.getTotal();
        });
        //Get Coupon Data
        this.couponService.getCoupons().subscribe(function (data) {
            _this.coupons = data.coupons;
        });
        //Get Activity
        this.activityService.getActivities().subscribe(function (data) {
            if (data.success) {
                _this.activity = data.activities[0];
                _this.activityId = _this.activity._id;
            }
        });
    };
    CartComponent.prototype.onChange = function (cartLine) {
        console.log(cartLine.quantity);
        var productNumber = cartLine.product.productNumber;
        var newQuantity = cartLine.quantity;
        var cartEntry = this.cart.find(function (cartEntry) { return cartEntry.product.productNumber == productNumber; });
        if (newQuantity > 0) {
            cartEntry.quantity = newQuantity;
            this.getTotal();
            this.cartService.saveListOfCartEntries(this.cart);
            if (cartEntry.quantity > cartEntry.product.inStock) {
                cartEntry.backOrder = true;
            }
            else {
                cartEntry.backOrder = false;
            }
        }
        console.log(this.cart);
    };
    CartComponent.prototype.onRemoveClick = function (productNumber) {
        this.cart = this.cart.filter(function (cartEntry) { return cartEntry.product.productNumber != productNumber; });
        this.cartService.saveListOfCartEntries(this.cart);
        this.getTotal();
    };
    CartComponent.prototype.onCouponSubmitClick = function (couponCode) {
        for (var i = 0; i < this.coupons.length; i++) {
            if (couponCode == this.coupons[i].code) {
                if (this.coupons[i].isActive) {
                    this.couponAccepted = true;
                    this.couponAmount = this.coupons[i].discountRate;
                }
            }
            else {
                this.couponAccepted = false;
            }
        }
        this.couponSubmitted = true;
        this.getTotal();
    };
    CartComponent.prototype.getTotal = function () {
        var _this = this;
        var _subTotal = 0;
        this.cart.forEach(function (cartEntry) {
            if (_this.role == 'Client') {
                _subTotal += (cartEntry.product.productSellPrice * cartEntry.quantity);
            }
            else if (_this.role == 'Admin') {
                _subTotal += (cartEntry.product.productBuyPrice * cartEntry.quantity);
            }
        });
        this.subTotal = _subTotal;
        var _discount = 0;
        var _total = 0;
        this.cartTotal = this.subTotal;
        if (this.couponAccepted) {
            _discount = this.couponAmount * this.subTotal;
            _total = this.subTotal - _discount;
            this.discount = _discount;
            this.cartTotal = _total;
        }
        else {
            this.discount = 0;
        }
    };
    CartComponent.prototype.onSendClick = function () {
        var _this = this;
        console.log(this.cart);
        if (this.role == 'Client') {
            console.log('I am in onSendClick');
            this.confirmationService.confirm({
                message: 'Are you sure to confirm this order?',
                accept: function () {
                    _this.orderService.saveOrder(_this.cart, _this.id, _this.userId, _this.cartTotal).subscribe(function (data) {
                        if (data.success) {
                            _this.flashMessagesService.show('New Order Added', {
                                cssClass: 'ui-messages-info',
                                timeout: 3000
                            });
                            _this.localStorageService.deleteValueWithKey('cart');
                            _this.router.navigate(['dashboard/' + _this.role + '/' + _this.userId]);
                        }
                        else {
                            _this.flashMessagesService.show('Failed to add new order', {
                                cssClass: 'ui-messages-danger',
                                timeout: 3000
                            });
                            _this.router.navigate(['cart/' + _this.role + '/' + _this.id]);
                        }
                    });
                    _this.clientService.updateBalance(_this.userId, _this.cartTotal).subscribe(function (data) {
                        if (data.success) {
                            console.log(data);
                        }
                    });
                    _this.activityService.updateRevenue(_this.activityId, _this.cartTotal).subscribe(function (data) {
                        console.log(data);
                    });
                }
            });
        }
        else if (this.role == 'Admin') {
            this.confirmationService.confirm({
                message: 'Are you confirming this order?',
                accept: function () {
                    _this.vendorOrderService.saveVendorOrder(_this.cart, _this.id, _this.cartTotal).subscribe(function (data) {
                        if (data.success) {
                            _this.flashMessagesService.show('New Vendor Order Placed', {
                                cssClass: 'ui-messages-info',
                                timeout: 3000
                            });
                            _this.localStorageService.deleteValueWithKey('cart');
                            _this.router.navigate(['/dashboard/' + _this.role + '/' + _this.userId]);
                        }
                        else {
                            _this.flashMessagesService.show('Failed to place vendor order', {
                                cssClass: 'ui-messages-info',
                                timeout: 3000
                            });
                            _this.router.navigate(['/cart/' + _this.role + '/' + _this.id]);
                        }
                    });
                    _this.activityService.updateExpense(_this.activityId, _this.cartTotal).subscribe(function (data) {
                        console.log(data);
                    });
                }
            });
        }
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__services_coupon_service__["a" /* CouponService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_coupon_service__["a" /* CouponService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6__services_vendor_order_service__["a" /* VendorOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_vendor_order_service__["a" /* VendorOrderService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_activity_service__["a" /* ActivityService */]) === "function" && _m || Object])
], CartComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-add/client-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-6\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-info\" \r\n      label=\"Back To Clients\" \r\n      icon=\"fa-arrow-circle-o-left\" \r\n      iconPos=\"left\" \r\n      (click)=\"onClick()\"\r\n    >\r\n    </button>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <!--TODO-->\r\n  </div>\r\n</div>\r\n\r\n<p-growl [value]=\"addClientMessages\" styleClass=\"addClientGrowl\"></p-growl>\r\n<form\r\n  [formGroup]=\"addClientForm\"\r\n  (ngSubmit)=\"onAddClientSubmit(addClientForm.value)\"\r\n>\r\n  <p-panel header=\"Add Client\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n\r\n      <!--EMAIL Input-->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Email *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input\r\n            pInputText \r\n            type=\"email\"\r\n            formControlName=\"email\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n            *ngIf=\"!addClientForm.controls['email'].valid && addClientForm.controls['email'].dirty\"\r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"addClientForm.controls['email'].errors['required']\">This field is required</span>\r\n            <span *ngIf=\"addClientForm.controls['email'].errors['pattern']\">Must enter a valid email</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--PASSWORD Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Password *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"password\"\r\n              formControlName=\"password\"\r\n              placeholder=\"Required\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div \r\n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n              *ngIf=\"!addClientForm.controls['password'].valid && addClientForm.controls['password'].dirty\"\r\n            >\r\n              <i class=\"fa fa-close\"></i>\r\n              <span *ngIf=\"addClientForm.controls['password'].errors['required']\">This field is required</span>\r\n              <span *ngIf=\"addClientForm.controls['password'].errors['minlength']\">Must be at least 6 characters</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <!--FIRSTNAME Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            First Name:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"firstName\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--LASTNAME Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Last Name:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"lastName\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--STREET Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Street:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"street\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--STREET2 Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Street 2 (<span style=\"font-style: italic;\">Apt, Suite, ...</span>):\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"street2\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--CITY Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            City:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"city\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--STATE Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            State:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <p-dropdown\r\n              [options]=\"states\"\r\n              formControlName=\"state\"\r\n              placeholder=\"Select a state\"\r\n              filter=\"filter\"\r\n              [style]=\"{'width':'35%'}\"\r\n            >\r\n            </p-dropdown>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--ZIP Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Zipcode:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <p-inputMask\r\n              type=\"text\"\r\n              formControlName=\"zip\"\r\n              placeholder=\"99999\"\r\n              mask=\"99999\"\r\n            >\r\n            </p-inputMask>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div \r\n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n              *ngIf=\"!addClientForm.controls.contact.controls.address.controls['zip'].valid &&\r\n                      addClientForm.controls.contact.controls.address.controls['zip'].dirty\" \r\n            >\r\n              <i class=\"fa fa-close\"></i>\r\n              <span *ngIf=\"addClientForm.controls.contact.controls.address.controls['zip'].errors['required']\">Must enter a valid zipcode</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--PHONE Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Phone:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"contact\">\r\n            <p-inputMask\r\n              type=\"text\"\r\n              formControlName=\"phone\"\r\n              placeholder=\"999-999-9999\"\r\n              mask=\"999-999-9999\"\r\n            >\r\n            </p-inputMask>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div \r\n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n              *ngIf=\"!addClientForm.controls.contact.controls['phone'].valid && addClientForm.controls.contact.controls['phone'].dirty\"\r\n            >\r\n              <i class=\"fa fa-close\"></i>\r\n              <span *ngIf=\"addClientForm.controls.contact.controls['phone'].errors['pattern']\">Must enter a valid phone number</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--BALANCE Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Balance:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"number\"\r\n              formControlName=\"balance\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n      </div>\r\n      <!--SUBMIT Button-->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"></div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!addClientForm.valid\"></button>\r\n        </div>\r\n      </div>\r\n    </div><!--UI Grid ends-->\r\n  </p-panel>\r\n\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/client-add/client-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\n  display: block;\n  margin: 0;\n  padding: 3px; }\n\ninput.ui-inputtext.ng-dirty.ng-invalid {\n  border-bottom-color: transparent;\n  border-color: red;\n  box-shadow: -1px 0px 20px 0px rgba(159, 60, 50, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-add/client-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientAddComponent = (function () {
    function ClientAddComponent(router, clientService, fB, flashMessagesService) {
        this.router = router;
        this.clientService = clientService;
        this.fB = fB;
        this.flashMessagesService = flashMessagesService;
        this.states = [];
        this.addClientMessages = [];
        this.emailRegex = "[^ @]*@[^ @]*";
        this.phoneRegex = "[1-9]{3}-[0-9]{3}-[0-9]{4}";
    }
    ClientAddComponent.prototype.ngOnInit = function () {
        this.addClientForm = this.fB.group({
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(this.emailRegex)
            ])),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)
            ])),
            'contact': this.fB.group({
                'address': this.fB.group({
                    'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'street2': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'zip': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
                }),
                'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(this.phoneRegex)
                ]))
            }),
            'balance': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: 0, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
        this.states = [];
        this.states.push({ label: 'Alabama', value: 'AL' });
        this.states.push({ label: 'Alaska', value: 'AK' });
        this.states.push({ label: 'Arizona', value: 'AZ' });
        this.states.push({ label: 'Arkansas', value: 'AR' });
        this.states.push({ label: 'California', value: 'CA' });
        this.states.push({ label: 'Colorado', value: 'CO' });
        this.states.push({ label: 'Connecticut', value: 'CT' });
        this.states.push({ label: 'Delaware', value: 'DE' });
        this.states.push({ label: 'Florida', value: 'FL' });
        this.states.push({ label: 'Georgia', value: 'GA' });
        this.states.push({ label: 'Hawaii', value: 'HI' });
        this.states.push({ label: 'Idaho', value: 'ID' });
        this.states.push({ label: 'Illinois', value: 'IL' });
        this.states.push({ label: 'Indiana', value: 'IN' });
        this.states.push({ label: 'Iowa', value: 'IA' });
        this.states.push({ label: 'Kansas', value: 'KS' });
        this.states.push({ label: 'Kentucky', value: 'KY' });
        this.states.push({ label: 'Louisiana', value: 'LA' });
        this.states.push({ label: 'Maine', value: 'ME' });
        this.states.push({ label: 'Maryland', value: 'MD' });
        this.states.push({ label: 'Massachusetts', value: 'MA' });
        this.states.push({ label: 'Michigan', value: 'MI' });
        this.states.push({ label: 'Minnesota', value: 'MN' });
        this.states.push({ label: 'Mississippi', value: 'MS' });
        this.states.push({ label: 'Missouri', value: 'MO' });
        this.states.push({ label: 'Montana', value: 'MT' });
        this.states.push({ label: 'Nebraska', value: 'NE' });
        this.states.push({ label: 'Nevada', value: 'NV' });
        this.states.push({ label: 'New Hampshire', value: 'NH' });
        this.states.push({ label: 'New Jersey', value: 'NJ' });
        this.states.push({ label: 'New Mexico', value: 'NM' });
        this.states.push({ label: 'New York', value: 'NY' });
        this.states.push({ label: 'North Carolina', value: 'NC' });
        this.states.push({ label: 'North Dakota', value: 'ND' });
        this.states.push({ label: 'Ohio', value: 'OH' });
        this.states.push({ label: 'Oklahoma', value: 'OK' });
        this.states.push({ label: 'Oregon', value: 'OR' });
        this.states.push({ label: 'Pennsylvania', value: 'PA' });
        this.states.push({ label: 'Rhode Island', value: 'RI' });
        this.states.push({ label: 'South Carolina', value: 'SC' });
        this.states.push({ label: 'South Dakota', value: 'SD' });
        this.states.push({ label: 'Tennessee', value: 'TN' });
        this.states.push({ label: 'Texas', value: 'TX' });
        this.states.push({ label: 'Utah', value: 'UT' });
        this.states.push({ label: 'Vermont', value: 'VT' });
        this.states.push({ label: 'Virginia', value: 'VA' });
        this.states.push({ label: 'Washington', value: 'WA' });
        this.states.push({ label: 'West Virginia', value: 'WV' });
        this.states.push({ label: 'Wisconsin', value: 'WI' });
        this.states.push({ label: 'Wyoming', value: 'WY' });
        this.states.push({ label: 'District of Columbia', value: 'DC' });
    };
    ClientAddComponent.prototype.onClick = function () {
        this.router.navigate(['/clients']);
    };
    ClientAddComponent.prototype.onAddClientSubmit = function (value) {
        var _this = this;
        value.balance = 0;
        this.client = value;
        console.log(this.client);
        this.clientService.addClient(this.client).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show('New Client Added', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/clients']);
            }
            else {
                _this.addClientMessages = [];
                _this.addClientMessages.push({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to add new client'
                });
                _this.router.navigate(['/add-client']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    return ClientAddComponent;
}());
ClientAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-add',
        template: __webpack_require__("../../../../../src/app/components/client-add/client-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-add/client-add.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ClientAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-6\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-info\" \r\n      label=\"Back To Clients\" \r\n      icon=\"fa-arrow-circle-o-left\" \r\n      iconPos=\"left\" \r\n      (click)=\"onClick()\"\r\n    >\r\n    </button>\r\n  </div>\r\n  <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">\r\n    <p-splitButton \r\n      label=\"Manage\" \r\n      [model]=\"buttonItems\" \r\n      styleClass=\"ui-button-secondary\" \r\n      menuStyleClass=\"clientDetailSplitBtnMenu\"\r\n    >\r\n    </p-splitButton>\r\n  </div>\r\n</div>\r\n<!-- Client Detail -->\r\n<div *ngIf=\"client\">\r\n  <p-panel styleClass=\"clientDetailPanel\">\r\n    <p-header>\r\n      <h3 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{client.firstName}} {{client.lastName}}</h3>\r\n    </p-header>\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-8 ui-sm-12\">\r\n        <h4 style=\"margin-top: 10px\">Client ID: {{id}}</h4>\r\n      </div>\r\n      <div class=\"ui-g-4 ui-sm-12\">\r\n        <h3 class=\"pull-right\">\r\n          Balance: \r\n          <span\r\n            [class.text-danger]=\"hasBalance\"\r\n            [class.text-success]=\"!hasBalance\"\r\n          >\r\n            {{client.balance | currency:'USD':true}}\r\n          </span>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Contact Email: {{client.email}}</li>\r\n      <li class=\"list-group-item\">Contact Phone: {{client.contact.phone}}</li>\r\n      <li class=\"list-group-item\">Contact Address: \r\n        {{client.contact.address.street}}\r\n        <span *ngIf=\"client.contact.address.street2 != ''\">{{client.contact.address.street2}}</span>\r\n        , {{client.contact.address.city}}\r\n        , {{client.contact.address.state}}\r\n        {{client.contact.address.zip}}\r\n      </li>\r\n    </ul>\r\n    <p-footer></p-footer>\r\n  </p-panel>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientDetailComponent = (function () {
    function ClientDetailComponent(router, aRoute, clientService, confirmationService, flashMessagesService) {
        this.router = router;
        this.aRoute = aRoute;
        this.clientService = clientService;
        this.confirmationService = confirmationService;
        this.flashMessagesService = flashMessagesService;
        this.buttonItems = [];
        this.hasBalance = false;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get ID
        this.id = this.aRoute.snapshot.params['id'];
        console.log(this.id);
        //Get Client by Id
        this.clientService.getClientById(this.id).subscribe(function (data) {
            if (data.client.balance > 0) {
                _this.hasBalance = true;
            }
            else {
                _this.hasBalance = false;
            }
            _this.client = data.client;
        });
        //Context Menu
        this.buttonItems = [
            {
                label: 'Edit',
                icon: 'fa-wrench',
                command: function () {
                    _this.router.navigate(['/edit-client/' + _this.id]);
                }
            },
            {
                label: 'Delete',
                icon: 'fa-close',
                command: function () {
                    _this.confirmationService.confirm({
                        message: 'This action will permanently delete Object "' + _this.id + '". Do you want to proceed?',
                        accept: function () {
                            _this.clientService.deleteClient(_this.id).subscribe(function (data) {
                                if (data.success) {
                                    _this.flashMessagesService.show('Client deleted', {
                                        cssClass: 'ui-messages-info',
                                        timeout: 3000
                                    });
                                    _this.router.navigate(['/clients']);
                                }
                                else {
                                    _this.flashMessagesService.show(data.msg, {
                                        cssClass: 'ui-messages-info',
                                        timeout: 3000
                                    });
                                    _this.router.navigate(['/client/' + _this.id]);
                                }
                            });
                        }
                    });
                }
            }
        ];
    };
    ClientDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/clients']);
    };
    return ClientDetailComponent;
}());
ClientDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-detail',
        template: __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], ClientDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=client-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-edit/client-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-6\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-info\" \r\n      label=\"Back To Client Details\" \r\n      icon=\"fa-arrow-circle-o-left\" \r\n      iconPos=\"left\" \r\n      (click)=\"onClick()\"\r\n    >\r\n    </button>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    \r\n  </div>\r\n</div>\r\n\r\n<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n<form\r\n  [formGroup]=\"editClientForm\"\r\n  (ngSubmit)=\"onEditClientSubmit(editClientForm.value)\"\r\n>\r\n  <p-panel header=\"Register\" *ngIf=\"client\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n\r\n      <!--EMAIL Input-->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Email *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input\r\n            pInputText \r\n            type=\"email\"\r\n            formControlName=\"email\"\r\n            [(ngModel)]=\"client.email\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n            *ngIf=\"!editClientForm.controls['email'].valid && editClientForm.controls['email'].dirty\"\r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"editClientForm.controls['email'].errors['required']\">This field is required</span>\r\n            <span *ngIf=\"editClientForm.controls['email'].errors['pattern']\">Must enter a valid email</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <hr>\r\n        <!--FIRSTNAME Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            First Name:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"firstName\"\r\n              [(ngModel)]=\"client.firstName\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--LASTNAME Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Last Name:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"lastName\"\r\n              [(ngModel)]=\"client.lastName\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--STREET Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Street:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"street\"\r\n              [(ngModel)]=\"client.contact.address.street\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--STREET2 Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Street 2 (<span style=\"font-style: italic;\">Apt, Suite, ...</span>):\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"street2\"\r\n              [(ngModel)]=\"client.contact.address.street2\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--CITY Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            City:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <input\r\n              pInputText \r\n              type=\"text\"\r\n              formControlName=\"city\"\r\n              [(ngModel)]=\"client.contact.address.city\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--STATE Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            State:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <p-dropdown\r\n              [options]=\"states\"\r\n              formControlName=\"state\"\r\n              [(ngModel)]=\"client.contact.address.state\"\r\n              placeholder=\"Select a state\"\r\n              filter=\"filter\"\r\n              [style]=\"{'width':'35%'}\"\r\n            >\r\n            </p-dropdown>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n        </div>\r\n        <!--ZIP Input-->\r\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Zipcode:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\r\n            <p-inputMask\r\n              [(ngModel)]=\"client.contact.address.zip\"\r\n              type=\"text\"\r\n              formControlName=\"zip\"\r\n              placeholder=\"99999\"\r\n              mask=\"99999\"\r\n            >\r\n            </p-inputMask>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div \r\n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n              *ngIf=\"!editClientForm.controls.contact.controls.address.controls['zip'].valid &&\r\n                      editClientForm.controls.contact.controls.address.controls['zip'].dirty\" \r\n            >\r\n              <i class=\"fa fa-close\"></i>\r\n              <span *ngIf=\"editClientForm.controls.contact.controls.address.controls['zip'].errors['required']\">Must enter a valid zipcode</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--PHONE Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Phone:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\" formGroupName=\"contact\">\r\n            <p-inputMask\r\n              [(ngModel)]=\"client.contact.phone\"\r\n              type=\"text\"\r\n              formControlName=\"phone\"\r\n              placeholder=\"999-999-9999\"\r\n              mask=\"999-999-9999\"\r\n            >\r\n            </p-inputMask>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div \r\n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\r\n              *ngIf=\"!editClientForm.controls.contact.controls['phone'].valid && editClientForm.controls.contact.controls['phone'].dirty\"\r\n            >\r\n              <i class=\"fa fa-close\"></i>\r\n              <span *ngIf=\"editClientForm.controls.contact.controls['phone'].errors['pattern']\">Must enter a valid phone number</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--BALANCE Input-->\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Balance:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"number\"\r\n              formControlName=\"balance\"\r\n              [(ngModel)]=\"client.balance\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n          </div>\r\n      </div>\r\n      <!--SUBMIT Button-->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"></div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!editClientForm.valid\"></button>\r\n        </div>\r\n      </div>\r\n    </div><!--UI Grid ends-->\r\n  </p-panel>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/client-edit/client-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\n  display: block;\n  margin: 0;\n  padding: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-edit/client-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientEditComponent = (function () {
    function ClientEditComponent(router, aRoute, clientService, flashMessagesService, confirmationService, fB) {
        this.router = router;
        this.aRoute = aRoute;
        this.clientService = clientService;
        this.flashMessagesService = flashMessagesService;
        this.confirmationService = confirmationService;
        this.fB = fB;
        this.states = [];
        this.emailRegex = "[^ @]*@[^ @]*";
        this.phoneRegex = "[1-9]{3}-[0-9]{3}-[0-9]{4}";
        this.disabledOnEdit = true;
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get ID
        this.id = this.aRoute.snapshot.params['id'];
        //Get Client
        this.clientService.getClientById(this.id).subscribe(function (data) {
            _this.client = data.client;
        });
        //Build Edit Form
        this.editClientForm = this.fB.group({
            'firstName': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            'lastName': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            'email': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(this.emailRegex)
            ])),
            'contact': this.fB.group({
                'address': this.fB.group({
                    'street': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                    'street2': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                    'city': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                    'state': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                    'zip': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required)
                }),
                'phone': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(this.phoneRegex)
                ]))
            }),
            'balance': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
        });
        this.states = [];
        this.states.push({ label: 'Alabama', value: 'AL' });
        this.states.push({ label: 'Alaska', value: 'AK' });
        this.states.push({ label: 'Arizona', value: 'AZ' });
        this.states.push({ label: 'Arkansas', value: 'AR' });
        this.states.push({ label: 'California', value: 'CA' });
        this.states.push({ label: 'Colorado', value: 'CO' });
        this.states.push({ label: 'Connecticut', value: 'CT' });
        this.states.push({ label: 'Delaware', value: 'DE' });
        this.states.push({ label: 'Florida', value: 'FL' });
        this.states.push({ label: 'Georgia', value: 'GA' });
        this.states.push({ label: 'Hawaii', value: 'HI' });
        this.states.push({ label: 'Idaho', value: 'ID' });
        this.states.push({ label: 'Illinois', value: 'IL' });
        this.states.push({ label: 'Indiana', value: 'IN' });
        this.states.push({ label: 'Iowa', value: 'IA' });
        this.states.push({ label: 'Kansas', value: 'KS' });
        this.states.push({ label: 'Kentucky', value: 'KY' });
        this.states.push({ label: 'Louisiana', value: 'LA' });
        this.states.push({ label: 'Maine', value: 'ME' });
        this.states.push({ label: 'Maryland', value: 'MD' });
        this.states.push({ label: 'Massachusetts', value: 'MA' });
        this.states.push({ label: 'Michigan', value: 'MI' });
        this.states.push({ label: 'Minnesota', value: 'MN' });
        this.states.push({ label: 'Mississippi', value: 'MS' });
        this.states.push({ label: 'Missouri', value: 'MO' });
        this.states.push({ label: 'Montana', value: 'MT' });
        this.states.push({ label: 'Nebraska', value: 'NE' });
        this.states.push({ label: 'Nevada', value: 'NV' });
        this.states.push({ label: 'New Hampshire', value: 'NH' });
        this.states.push({ label: 'New Jersey', value: 'NJ' });
        this.states.push({ label: 'New Mexico', value: 'NM' });
        this.states.push({ label: 'New York', value: 'NY' });
        this.states.push({ label: 'North Carolina', value: 'NC' });
        this.states.push({ label: 'North Dakota', value: 'ND' });
        this.states.push({ label: 'Ohio', value: 'OH' });
        this.states.push({ label: 'Oklahoma', value: 'OK' });
        this.states.push({ label: 'Oregon', value: 'OR' });
        this.states.push({ label: 'Pennsylvania', value: 'PA' });
        this.states.push({ label: 'Rhode Island', value: 'RI' });
        this.states.push({ label: 'South Carolina', value: 'SC' });
        this.states.push({ label: 'South Dakota', value: 'SD' });
        this.states.push({ label: 'Tennessee', value: 'TN' });
        this.states.push({ label: 'Texas', value: 'TX' });
        this.states.push({ label: 'Utah', value: 'UT' });
        this.states.push({ label: 'Vermont', value: 'VT' });
        this.states.push({ label: 'Virginia', value: 'VA' });
        this.states.push({ label: 'Washington', value: 'WA' });
        this.states.push({ label: 'West Virginia', value: 'WV' });
        this.states.push({ label: 'Wisconsin', value: 'WI' });
        this.states.push({ label: 'Wyoming', value: 'WY' });
        this.states.push({ label: 'District of Columbia', value: 'DC' });
        this.checkBoolean();
    };
    ClientEditComponent.prototype.onClick = function () {
        this.router.navigate(['/client-detail/' + this.id]);
    };
    ClientEditComponent.prototype.onEditClientSubmit = function (value) {
        var _this = this;
        this.client = value;
        this.confirmationService.confirm({
            message: 'Are you sure to make edit to this client?',
            accept: function () {
                _this.clientService.updateClient(_this.id, _this.client).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Client Info Updated', {
                            cssClass: 'ui-messages-info',
                            timeout: 3000
                        });
                        _this.router.navigate(['/client-detail/' + _this.id]);
                    }
                    else {
                        _this.flashMessagesService.show('Client Info Update Failed', {
                            cssClass: 'ui-messages-danger',
                            timeout: 3000
                        });
                        _this.router.navigate(['/edit-client/' + _this.id]);
                    }
                });
            }
        });
    };
    ClientEditComponent.prototype.checkBoolean = function () {
        if (this.disabledOnEdit) {
            this.editClientForm.reset({
                'balance': { value: '0', disabled: true }
            });
        }
        else {
            this.editClientForm.reset({
                'balance': { value: '0', disabled: false }
            });
        }
    };
    return ClientEditComponent;
}());
ClientEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-edit',
        template: __webpack_require__("../../../../../src/app/components/client-edit/client-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-edit/client-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], ClientEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=client-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-order-detail/client-order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-6\" *ngIf=\"role == 'Admin'\">\r\n      <button \r\n        pButton \r\n        type=\"button\" \r\n        class=\"ui-button-info\" \r\n        label=\"Back To Orders\" \r\n        icon=\"fa-arrow-circle-o-left\" \r\n        iconPos=\"left\" \r\n        (click)=\"onClick()\"\r\n      >\r\n      </button>\r\n    </div>\r\n    <div class=\"ui-g-6\" *ngIf=\"role == 'Client'\">\r\n        <button \r\n          pButton \r\n          type=\"button\" \r\n          class=\"ui-button-info\" \r\n          label=\"Back To Dashboard\" \r\n          icon=\"fa-arrow-circle-o-left\" \r\n          iconPos=\"left\" \r\n          (click)=\"onClick()\"\r\n        >\r\n        </button>\r\n      </div>\r\n    <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Order Detail -->\r\n<div *ngIf=\"order\">\r\n  <p-panel styleClass=\"clientOrderDetailPanel\">\r\n    <p-header>\r\n      <h3 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{order.orderNumber}}</h3>\r\n    </p-header>\r\n    <div class=\"ui-g\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-8 ui-sm-12\">\r\n          <h4 style=\"margin-top: 10px\">Total products: {{order.orderDetails.length}}</h4>\r\n        </div>\r\n        <div class=\"ui-g-4 ui-sm-12\">\r\n          <h3 class=\"pull-right text-muted\">\r\n            Order Balance: {{order.orderBalance | currency:'USD':true}}\r\n          </h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <p-panel header=\"Order Details\">\r\n          <p-dataTable\r\n            [value]=\"order.orderDetails\"\r\n            [responsive]=\"true\"\r\n            styleClass=\"orderDetailsTable\"\r\n          >\r\n            <p-column field=\"product.productNumber\" header=\"Prod. Number\" [style]=\"{'width':'12%'}\"></p-column>\r\n            <p-column field=\"product.productDetails.name\" header=\"Prod. Name\"></p-column>\r\n            <p-column header=\"Prod. Price\" [style]=\"{'width':'12%'}\">\r\n              <ng-template let-col let-item=\"rowData\"  pTemplate='body'>\r\n                <span>{{item.product.productSellPrice | currency:'USD':true}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"quantity\" header=\"Quantity\" [style]=\"{'width':'10%'}\"></p-column>\r\n            <p-column header=\"Sub Total\" [style]=\"{'width':'12%'}\">\r\n              <ng-template let-col let-item=\"rowData\" pTemplate='body' >\r\n                <span>{{item.product.productSellPrice * item.quantity | currency:'USD':true}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"Show Details\" [style]=\"{'width':'12%'}\">\r\n              <ng-template pTemplate=\"body\" let-col let-item=\"rowData\">\r\n                <button \r\n                  pButton\r\n                  type=\"button\"\r\n                  icon=\"fa-search\"\r\n                  class=\"ui-button-secondary\"\r\n                  data-toggle=\"modal\" \r\n                  data-target=\"#detailModal\"\r\n                  (click)=\"onShowDetailsClick(item)\"\r\n                >\r\n                </button>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </p-panel>\r\n      </div>\r\n    </div>\r\n\r\n    <p-footer></p-footer>\r\n  </p-panel>\r\n</div>\r\n\r\n<!-- Product Detail Modal -->\r\n<div class=\"modal fade\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\" id=\"modalContent\">\r\n      <div class=\"modal-header\" id=\"modalHeader\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Product Detail</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n            <div *ngIf=\"product\" class=\"ui-grid ui-grid-responsive ui-grid-pad\">\r\n                <div class=\"ui-g\">\r\n                    <p-panel>\r\n                      <p-header>\r\n                        <h4 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{product.productNumber}}</h4>\r\n                      </p-header>\r\n                      <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\"><h4 style=\"margin-top: 10px\">{{product.productDetails.name}}</h4></div>\r\n                        <div class=\"ui-g-6 ui-rtl text-muted\" dir=\"rtl\" *ngIf=\"role == 'Admin'\">\r\n                          <h3>Unit Price: {{product.productSellPrice | currency:'USD':true}}</h3>\r\n                          <h3>Vendor Price: {{product.productBuyPrice | currency:'USD':true}}</h3>\r\n                        </div>\r\n                        <div class=\"ui-g-12\" style=\"text-align: center;\"><img src=\"{{product.productDetails.image}}\" width=\"400px\" height=\"400px\"></div>\r\n                        <div class=\"ui-g-12\">\r\n                          <p>{{product.productDetails.description}}</p>\r\n                        </div>\r\n                      </div>\r\n                    </p-panel>\r\n                </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"modal-footer\" id=\"modalFooter\">\r\n        <button pButton type=\"button\" label=\"Close\" icon=\"fa-close\" class=\"ui-button-secondary\" data-dismiss=\"modal\"></button>\r\n        <span *ngIf=\"role == 'Admin'\">\r\n          <button \r\n            pButton \r\n            data-dismiss=\"modal\"\r\n            type=\"button\" \r\n            label=\"Edit Product Detail\" \r\n            icon=\"fa-pencil\" \r\n            class=\"ui-button-primary\"\r\n            (click)=\"onEditProductClick()\"\r\n          >    \r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client-order-detail/client-order-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#modalContent {\n  background: #f5f3e5; }\n\n#modalHeader, #modalFooter {\n  background: #ece8da;\n  border: 1px solid #e4dfce; }\n\nmodal hr {\n  color: #ece8da; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-order-detail/client-order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientOrderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientOrderDetailComponent = (function () {
    function ClientOrderDetailComponent(router, aRoute, orderService, clientService, confirmationService) {
        this.router = router;
        this.aRoute = aRoute;
        this.orderService = orderService;
        this.clientService = clientService;
        this.confirmationService = confirmationService;
    }
    ClientOrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Order Number
        this.orderNumber = this.aRoute.snapshot.params['id'];
        //Get Role
        this.role = this.aRoute.snapshot.params['role'];
        //Get ClientID
        if (this.clientService.currentClient) {
            this.clientId = this.clientService.currentClient._id;
        }
        //Get Order by Order Number
        this.orderService.getOrderByOrderNumber(this.orderNumber).subscribe(function (data) {
            console.log(data);
            _this.order = data.order;
        });
    };
    ClientOrderDetailComponent.prototype.onClick = function () {
        if (this.role == 'Admin') {
            this.router.navigate(['/client-orders']);
        }
        else if (this.role == 'Client') {
            this.router.navigate(['/dashboard/' + this.role + '/' + this.clientId]);
        }
    };
    ClientOrderDetailComponent.prototype.onShowDetailsClick = function (item) {
        console.log(item);
        this.product = item.product;
    };
    ClientOrderDetailComponent.prototype.onEditProductClick = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/edit-product/' + _this.product.productNumber]);
        }, 1000);
    };
    return ClientOrderDetailComponent;
}());
ClientOrderDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-order-detail',
        template: __webpack_require__("../../../../../src/app/components/client-order-detail/client-order-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-order-detail/client-order-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object])
], ClientOrderDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=client-order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-orders/client-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"clientOrderMessages\" styleClass=\"clientOrderGrowl\"></p-growl>\r\n\r\n<div class=\"ui-g\">\r\n  <!--MAIN Orders-->\r\n    <div class=\"ui-g-6\">\r\n      <h2><i class=\"fa fa-book\"></i> Orders</h2>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <h5 class=\"pull-right text-muted\">Total Revenue: \r\n        <span\r\n          [class.text-success]=\"hasRevenue\"\r\n          [class.text-danger]=\"!hasRevenue\"\r\n        >\r\n          {{totalRevenue | currency:'USD':true}}\r\n        </span>\r\n      </h5>\r\n    </div>\r\n    <!--Orders DATA-->\r\n\r\n\r\n    <!--Confirmation Dialog -->\r\n    <p-confirmDialog header=\"Confirmation\" key=\"onRowSelect\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"orders\">\r\n      <p-dataTable\r\n        [value]=\"orders\"\r\n        [responsive]=\"true\"\r\n        selectionMode=\"single\" \r\n        [(selection)]=\"selectedOrder\" \r\n        (onRowDblclick)=\"onRowSelect($event)\"\r\n        styleClass=\"ordersTable\"\r\n      >\r\n        <p-column header=\"Date\" [style]=\"{'width':'15%'}\">\r\n          <ng-template let-col let-order=\"rowData\" pTemplate='body'>\r\n            <span>{{order.orderDate | date:'short'}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"orderNumber\" header=\"ID\" [style]=\"{'width':'15%'}\"></p-column>\r\n        <p-column field=\"userId\" header=\"Client ID\" [style]=\"{'width':'20%'}\"></p-column>\r\n        <p-column header=\"No. of Products\" [style]=\"{'width':'12%'}\">\r\n          <ng-template pTemplate=\"body\" let-col let-order=\"rowData\">\r\n            <span>{{order.orderDetails.length}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Total\" [style]=\"{'width':'12%'}\">\r\n          <ng-template let-col let-order=\"rowData\" pTemplate='body'>\r\n            <span>{{order.orderBalance | currency:'USD':true}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Del. Status\" [style]=\"{'width':'16%'}\">\r\n          <ng-template pTemplate=\"body\" let-col let-order=\"rowData\" let-i=\"rowIndex\">\r\n            <p-toggleButton\r\n              [(ngModel)]=\"order.isDelivered\"\r\n              pTooltip=\"Delivery Status: Once checked, you cannot uncheck it\"\r\n              [disabled]=\"deliveredCheck[i]\"\r\n              tooltipPosition=\"bottom\"\r\n              (onChange)=\"onDeliveredChange(order, i)\"\r\n              id=\"deliveredChkBox\"\r\n              onLabel=\"Delivered\"\r\n              styleClass=\"ordersDeliveredToggleButton\"\r\n            >\r\n            </p-toggleButton>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Paid Status\" [style]=\"{'width':'10%'}\">\r\n          <ng-template pTemplate=\"body\" let-col let-order=\"rowData\" let-i=\"rowIndex\">\r\n            <p-toggleButton\r\n              [(ngModel)]=\"order.isPaid\"\r\n              pTooltip=\"Paid Status: Once checked, you cannot uncheck it\"\r\n              tooltipPosition=\"bottom\"\r\n              (onChange)=\"onPaidChange(order, i)\"\r\n              [disabled]=\"paidCheck[i]\"\r\n              onLabel=\"Paid\"\r\n              styleClass=\"ordersPaidToggleButton\"\r\n            >\r\n            </p-toggleButton>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-footer *ngIf=\"orders\">\r\n          Total orders: {{orders.length}} \r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div> <!--Orders DATA Ends-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client-orders/client-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-orders/client-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientOrdersComponent = (function () {
    function ClientOrdersComponent(router, confirmationService, orderService, authService, productService, clientService) {
        this.router = router;
        this.confirmationService = confirmationService;
        this.orderService = orderService;
        this.authService = authService;
        this.productService = productService;
        this.clientService = clientService;
        this.deliveredCheck = [];
        this.paidCheck = [];
        this.hasRevenue = false;
    }
    ClientOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get all orders
        this.orderService.getOrders().subscribe(function (data) {
            _this.orders = data.orders;
            for (var i = 0; i < _this.orders.length; i++) {
                if (_this.orders[i].isDelivered) {
                    _this.deliveredCheck[i] = true;
                }
                if (_this.orders[i].isPaid) {
                    _this.paidCheck[i] = true;
                }
            }
            _this.getTotal();
        });
        //Get Role
        this.role = this.authService.currentAdmin.role;
    };
    ClientOrdersComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.orders.length; i++) {
            total += this.orders[i].orderBalance;
        }
        this.totalRevenue = total;
        if (this.totalRevenue > 0) {
            this.hasRevenue = true;
        }
        else {
            this.hasRevenue = false;
        }
    };
    ClientOrdersComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        console.log(event);
        this.confirmationService.confirm({
            message: 'View details of "' + event.data.orderNumber + '" ?',
            key: 'onRowSelect',
            accept: function () {
                _this.router.navigate(['/client-order-detail/' + _this.role + '/' + event.data.orderNumber]);
            }
        });
    };
    ClientOrdersComponent.prototype.onDeliveredChange = function (order, i) {
        var _this = this;
        console.log('inDelivered');
        console.log(order);
        setTimeout(function () {
            _this.deliveredCheck[i] = true;
            _this.clientOrderMessages = [];
            _this.clientOrderMessages.push({
                severity: 'info',
                summary: 'Success',
                detail: 'Order ' + order.orderNumber + ' is set to Delivered'
            });
        }, 1000);
        var orderQuantity = 0;
        var productId = '';
        order.orderDetails.forEach(function (orderLine) {
            orderQuantity = -orderLine.quantity;
            productId = orderLine.product._id;
            _this.productService.updateProductInstock(productId, orderQuantity).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                }
            });
        });
        var deliveredStatus = order.isDelivered;
        var orderId = order._id;
        this.orderService.updateDeliveredStatus(orderId, deliveredStatus).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
        });
    };
    ClientOrdersComponent.prototype.onPaidChange = function (order, i) {
        var _this = this;
        console.log('inPaid');
        setTimeout(function () {
            _this.paidCheck[i] = true;
            _this.clientOrderMessages = [];
            _this.clientOrderMessages.push({
                severity: 'info',
                summary: 'Success',
                detail: 'Order ' + order.orderNumber + ' is set to Paid'
            });
        }, 1000);
        var balance = -order.orderBalance;
        var userId = order.userId;
        this.clientService.updateBalance(userId, balance).subscribe(function (data) {
            console.log(data);
        });
        var paidStatus = order.isPaid;
        var orderId = order._id;
        this.orderService.updatePaidStatus(orderId, paidStatus).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
        });
    };
    return ClientOrdersComponent;
}());
ClientOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-orders',
        template: __webpack_require__("../../../../../src/app/components/client-orders/client-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-orders/client-orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */]) === "function" && _f || Object])
], ClientOrdersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=client-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-g\">\r\n  <!--MAIN Clients-->\r\n  <div class=\"ui-g-10 ui-sm-12\">\r\n    <div class=\"ui-g-6\">\r\n      <h2><i class=\"fa fa-users\"></i> Clients</h2>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      \r\n    </div>\r\n    <!--Clients DATA-->\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable\r\n        [value]=\"clients\"\r\n        [responsive]=\"true\"\r\n        selectionMode=\"single\" \r\n        [(selection)]=\"selectedClient\" \r\n        (onRowSelect)=\"onRowSelect($event)\"\r\n        styleClass=\"clientsTable\"\r\n      >\r\n        <p-column field=\"_id\" header=\"ID\" [style]=\"{'width':'25%'}\"></p-column>\r\n        <p-column field=\"firstName\" header=\"First Name\" [style]=\"{'width':'21%'}\"></p-column>\r\n        <p-column field=\"lastName\" header=\"Last Name\" [style]=\"{'width':'21%'}\"></p-column>\r\n        <p-column field=\"email\" header=\"Email\" [style]=\"{'width':'21%'}\"></p-column>\r\n        <p-column header=\"Balance\" [style]=\"{'width':'12%'}\">\r\n          <ng-template let-col let-client=\"rowData\" pTemplate=\"body\">\r\n            <span>{{client.balance | currency:'USD':true}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-footer *ngIf=\"clients\">\r\n          Total clients: {{clients.length}} \r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div> <!--Clients DATA Ends-->\r\n  </div>\r\n  <!--Clients Sidebar-->\r\n  <div class=\"ui-g-2 ui-sm-12\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-success\" \r\n      icon=\"fa-plus\" \r\n      iconPos=\"left\" \r\n      label=\"Add Client\" \r\n      (click)=\"onAddClientClick()\" \r\n      id=\"addClientButton\"\r\n    >\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsComponent = (function () {
    function ClientsComponent(authService, router, clientService, confirmationService) {
        this.authService = authService;
        this.router = router;
        this.clientService = clientService;
        this.confirmationService = confirmationService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            if (data.success) {
                _this.clients = data.clients;
            }
        });
    };
    ClientsComponent.prototype.onAddClientClick = function () {
        this.router.navigate(['/add-client']);
    };
    ClientsComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        console.log(event);
        this.confirmationService.confirm({
            message: 'View details of "' + event.data._id + '" ?',
            accept: function () {
                _this.router.navigate(['/client-detail/' + event.data._id]);
            }
        });
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__("../../../../../src/app/components/clients/clients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/clients/clients.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object])
], ClientsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/coupon-add/coupon-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-6\">\n    <button \n      pButton \n      type=\"button\" \n      class=\"ui-button-info\" \n      label=\"Back To Coupons\" \n      icon=\"fa-arrow-circle-o-left\" \n      iconPos=\"left\" \n      (click)=\"onClick()\"\n    >\n    </button>\n  </div>\n  <div class=\"ui-g-6\">\n    <!--TODO-->\n  </div>\n</div>\n\n<form \n  [formGroup]=\"addCouponForm\"\n  (ngSubmit)=\"onAddCouponSubmit(addCouponForm.value)\"\n>\n  <p-panel header=\"Add Coupon\">\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\n      <!-- Coupon Code Input -->\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\">Code: </div>\n        <div class=\"ui-g-6\">\n          <input \n            pInputText\n            type=\"text\"\n            formControlName=\"code\"\n            [(ngModel)]=\"addCouponForm.value.code\"\n            uppercase\n          >\n        </div>\n        <div class=\"ui-g-4\">\n          <div \n            class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\n            *ngIf=\"!addCouponForm.controls['code'].valid && addCouponForm.controls['code'].dirty\"\n            >\n            <i class=\"fa fa-close\"></i>\n            <span *ngIf=\"addCouponForm.controls['code'].errors['required']\">This field is required</span>\n          </div>\n        </div>\n      </div> <!--Coupon Code Input ends-->\n      <!-- Coupon Description Input -->\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\">Description: </div>\n        <div class=\"ui-g-6\">\n          <textarea\n            pInputTextarea\n            [rows]=\"5\" \n            [cols]=\"60\"\n            autoResize=\"autoResize\"\n            formControlName=\"description\"\n          >\n          </textarea>\n        </div>\n        <div class=\"ui-g-4\"></div>\n      </div> <!--Coupon Desc Ends-->\n      <!-- Coupon Discount Rate Input -->\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\">Discount Rate</div>\n        <div class=\"ui-g-6\">\n          <input \n            pInputText\n            pTooltip=\"Enter Discount Rate in decimal number (E.g: enter 0.4 for 40% discount code)\"\n            tooltipPosition=\"bottom\"\n            type=\"number\"\n            formControlName=\"discountRate\"\n          >\n        </div>\n        <div class=\"ui-g-4\">\n          <div \n            class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\n            *ngIf=\"!addCouponForm.controls['discountRate'].valid && addCouponForm.controls['discountRate'].dirty\"\n          >\n            <i class=\"fa fa-close\"></i>\n            <span *ngIf=\"addCouponForm.controls['discountRate'].errors['required']\">This field is required</span>\n          </div>\n        </div>\n      </div> <!--Discount Rate Input ends-->\n      <!-- Coupon Status Input -->\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\">Status: </div>\n        <div class=\"ui-g-6\">\n          <p-checkbox\n            (onChange)=\"onStatusChange($event)\"\n            formControlName=\"isActive\"\n            binary=\"true\"\n            [label]=\"couponStatus\"\n            id=\"addCouponChkBox\"\n          >\n          </p-checkbox>\n        </div>\n        <div class=\"ui-g-4\"></div>\n      </div> <!--Status ends-->\n      <!-- SUBMIT button -->\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"></div>\n        <div class=\"ui-g-6\">\n          <button \n            pButton\n            type=\"submit\"\n            label=\"Submit\"\n            [disabled]=\"!addCouponForm.valid\"\n          >\n          </button>\n        </div>\n      </div>\n    </div>\n  </p-panel>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/coupon-add/coupon-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\n  display: block;\n  margin: 0;\n  padding: 3px; }\n\ninput.ui-inputtext.ng-dirty.ng-invalid {\n  border-bottom-color: transparent;\n  border-color: red;\n  box-shadow: -1px 0px 20px 0px rgba(159, 60, 50, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/coupon-add/coupon-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_coupon_service__ = __webpack_require__("../../../../../src/app/services/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponAddComponent = (function () {
    function CouponAddComponent(router, fB, couponService, flashMessagesService) {
        this.router = router;
        this.fB = fB;
        this.couponService = couponService;
        this.flashMessagesService = flashMessagesService;
        this.couponStatus = 'Inactive';
    }
    CouponAddComponent.prototype.ngOnInit = function () {
        this.addCouponForm = this.fB.group({
            'code': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            'discountRate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'isActive': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](false)
        });
    };
    CouponAddComponent.prototype.onClick = function () {
        this.router.navigate(['/coupons']);
    };
    CouponAddComponent.prototype.onStatusChange = function (event) {
        if (event) {
            this.couponStatus = 'Active';
        }
        else {
            this.couponStatus = 'Inactive';
        }
    };
    CouponAddComponent.prototype.onAddCouponSubmit = function (value) {
        var _this = this;
        console.log(value);
        this.coupon = value;
        this.couponService.addCoupon(this.coupon).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('New coupon added', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/coupons']);
            }
            else {
                _this.flashMessagesService.show('Failed to add new coupon', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/add-coupon']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    return CouponAddComponent;
}());
CouponAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coupon-add',
        template: __webpack_require__("../../../../../src/app/components/coupon-add/coupon-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/coupon-add/coupon-add.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_coupon_service__["a" /* CouponService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_coupon_service__["a" /* CouponService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], CouponAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=coupon-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/coupon-add/coupon-add.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UppercaseDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UppercaseDirective = (function () {
    function UppercaseDirective() {
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UppercaseDirective.prototype.onInputChange = function ($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    return UppercaseDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], UppercaseDirective.prototype, "ngModelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UppercaseDirective.prototype, "onInputChange", null);
UppercaseDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ngModel][uppercase]'
    })
], UppercaseDirective);

var _a;
//# sourceMappingURL=coupon-add.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/coupon-detail/coupon-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\n\n<div class=\"ui-g\">\n  <div class=\"ui-g-6\">\n    <button \n      pButton \n      type=\"button\" \n      class=\"ui-button-info\" \n      label=\"Back To Coupons\" \n      icon=\"fa-arrow-circle-o-left\" \n      iconPos=\"left\" \n      (click)=\"onClick()\"\n    >\n    </button>\n  </div>\n  <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">\n    <button \n      pButton\n      type=\"button\"\n      label=\"Delete\"\n      icon=\"fa-close\"\n      class=\"ui-button-danger\"\n      (click)=\"onDeleteClick()\"\n    >\n    </button>\n  </div>\n</div>\n\n<!-- Coupon Detail -->\n<div *ngIf=\"coupon\">\n  <p-panel styleClass=\"couponDetailPanel\">\n    <p-header>\n      <h3 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{coupon.code}}</h3>\n    </p-header>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-8 ui-sm-12\">\n        <h4 style=\"margin-top: 10px\">Coupon ID: {{id}}</h4>\n      </div>\n      <div class=\"ui-g-4 ui-sm-12\">\n        <h3 class=\"pull-right\">\n          Status: \n          <span\n            [class.text-danger]=\"!coupon.isActive\"\n            [class.text-success]=\"coupon.isActive\"\n          >\n            {{couponStatus}}\n          </span>\n        </h3>\n      </div>\n    </div>\n    <hr>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Coupon Description: {{coupon.description}}</li>\n      <li class=\"list-group-item\">Discount Rate: {{coupon.discountRate | percent:'1.0-3'}}</li>\n    </ul>\n    <p-footer></p-footer>\n  </p-panel>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/coupon-detail/coupon-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/coupon-detail/coupon-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__ = __webpack_require__("../../../../../src/app/services/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponDetailComponent = (function () {
    function CouponDetailComponent(couponService, router, aRoute, confirmationService, flashMessagesService) {
        this.couponService = couponService;
        this.router = router;
        this.aRoute = aRoute;
        this.confirmationService = confirmationService;
        this.flashMessagesService = flashMessagesService;
    }
    CouponDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get ID
        this.id = this.aRoute.snapshot.params['id'];
        //Get Coupon by Id
        this.couponService.getCouponById(this.id).subscribe(function (data) {
            _this.coupon = data.coupon;
            console.log(_this.coupon);
            if (_this.coupon.isActive) {
                _this.couponStatus = 'Active';
            }
            else {
                _this.couponStatus = 'Inactive';
            }
        });
    };
    CouponDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/coupons']);
    };
    CouponDetailComponent.prototype.onDeleteClick = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Delete the coupon "' + this.coupon.code + '" ?',
            accept: function () {
                _this.couponService.deleteCoupon(_this.id).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Coupon ' + _this.coupon.code + ' deleted', {
                            cssClass: 'ui-messages-info',
                            timeout: 3000
                        });
                        _this.router.navigate(['/coupons']);
                    }
                    else {
                        _this.flashMessagesService.show('Failed to delete coupon ' + _this.coupon.code, {
                            cssClass: 'ui-messages-danger',
                            timeout: 3000
                        });
                        _this.router.navigate(['/coupon/' + _this.id]);
                    }
                });
            }
        });
    };
    return CouponDetailComponent;
}());
CouponDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coupon-detail',
        template: __webpack_require__("../../../../../src/app/components/coupon-detail/coupon-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/coupon-detail/coupon-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__["a" /* CouponService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__["a" /* CouponService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], CouponDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=coupon-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/coupon/coupon.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\n\n<!-- Growl -->\n<p-growl [value]=\"couponMessages\" styleClass=\"couponGrowl\"></p-growl>\n<div class=\"ui-g\">\n  <!--MAIN Coupons-->\n  <div class=\"ui-g-10 ui-sm-12\">\n    <div class=\"ui-g-6\">\n      <h2><i class=\"fa fa-chevron-down\"></i> Coupons</h2>\n    </div>\n    <div class=\"ui-g-6\">\n\n    </div>\n    <!--Coupons DATA-->\n    <div class=\"ui-g-12\">\n      <p-dataTable\n        [value]=\"coupons\"\n        [responsive]=\"true\"\n        selectionMode=\"single\" \n        [(selection)]=\"selectedCoupon\" \n        (onRowDblclick)=\"onRowSelect($event)\"\n        styleClass=\"couponsTable\"\n      >\n        <p-column field=\"_id\" header=\"ID\" [style]=\"{'width':'25%'}\"></p-column>\n        <p-column field=\"code\" header=\"Code\" [style]=\"{'width':'30%'}\"></p-column>\n        <p-column header=\"Discount Rate\" [style]=\"{'width':'15%'}\">\n          <ng-template pTemplate=\"body\" let-col let-coupon=\"rowData\">\n            <span>{{coupon.discountRate | percent:'1.0-3'}}</span>\n          </ng-template>\n        </p-column>\n        <p-column header=\"Status\" [style]=\"{'width':'30%'}\">\n          <ng-template pTemplate=\"body\" let-coupon=\"rowData\" let-i=\"rowIndex\">\n            <p-toggleButton\n              [(ngModel)]=\"coupon.isActive\"\n              onLabel=\"Active\" \n              offLabel=\"Inactive\"\n              styleClass=\"couponToggleButton\"\n              (onChange)=\"onStatusChange($event, coupon, i)\"\n            >\n            </p-toggleButton>\n          </ng-template>\n        </p-column>\n        <p-footer *ngIf=\"coupons\">\n          Total coupons: {{coupons.length}} \n        </p-footer>\n      </p-dataTable>\n    </div> <!--Clients DATA Ends-->\n  </div>\n  <!--Clients Sidebar-->\n  <div class=\"ui-g-2 ui-sm-12\">\n    <button \n      pButton \n      type=\"button\" \n      class=\"ui-button-success\" \n      icon=\"fa-plus\" \n      iconPos=\"left\" \n      label=\"Add Coupon\" \n      (click)=\"onAddCouponClick()\" \n      id=\"addCouponButton\"\n    >\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/coupon/coupon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/coupon/coupon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__ = __webpack_require__("../../../../../src/app/services/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CouponComponent = (function () {
    function CouponComponent(router, couponService, confirmationService) {
        this.router = router;
        this.couponService = couponService;
        this.confirmationService = confirmationService;
    }
    CouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponService.getCoupons().subscribe(function (data) {
            if (data.success) {
                _this.coupons = data.coupons;
            }
        });
    };
    CouponComponent.prototype.onAddCouponClick = function () {
        this.router.navigate(['/add-coupon']);
    };
    CouponComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'View details of "' + event.data.code + '" ?',
            accept: function () {
                _this.router.navigate(['/coupon/' + event.data._id]);
            }
        });
    };
    CouponComponent.prototype.onStatusChange = function (event, coupon, i) {
        var _this = this;
        if (event) {
            this.couponService.updateCouponStatus(coupon._id, coupon).subscribe(function (data) {
                if (data.success) {
                    _this.couponMessages = [];
                    _this.couponMessages.push({
                        severity: 'success',
                        summary: 'Success',
                        detail: data.msg
                    });
                    _this.router.navigate(['/coupons']);
                }
                else {
                    _this.couponMessages = [];
                    _this.couponMessages.push({
                        severity: 'error',
                        summary: 'Error',
                        detail: data.msg
                    });
                    _this.router.navigate(['/coupons']);
                }
            });
        }
        else {
            this.couponService.updateCouponStatus(coupon._id, coupon).subscribe(function (data) {
                if (data.success) {
                    _this.couponMessages = [];
                    _this.couponMessages.push({
                        severity: 'success',
                        summary: 'Success',
                        detail: data.msg
                    });
                    _this.router.navigate(['/coupons']);
                }
                else {
                    _this.couponMessages = [];
                    _this.couponMessages.push({
                        severity: 'error',
                        summary: 'Error',
                        detail: data.msg
                    });
                    _this.router.navigate(['/coupons']);
                }
            });
        }
    };
    return CouponComponent;
}());
CouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coupon',
        template: __webpack_require__("../../../../../src/app/components/coupon/coupon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/coupon/coupon.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__["a" /* CouponService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_coupon_service__["a" /* CouponService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], CouponComponent);

var _a, _b, _c;
//# sourceMappingURL=coupon.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog-->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div *ngIf=\"role == 'Client'\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-6\">\r\n        <h2><i class=\"fa fa-book\"></i> Orders</h2>\r\n    </div>\r\n    <div *ngIf=\"client\" class=\"ui-g-6 ui-rtl\" dir=\"rtl\">\r\n      <h5 class=\"text-muted\">Balance: \r\n        <span\r\n          [class.text-danger]=\"hasBalance\"\r\n          [class.text-success]=\"!hasBalance\"\r\n        >\r\n          {{client.balance | currency:'USD':true}}\r\n        </span>\r\n      </h5>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable\r\n        [value]=\"orders\"\r\n        [responsive]=\"true\"\r\n        selectionMode=\"single\" \r\n        [(selection)]=\"selectedOrder\" \r\n        (onRowSelect)=\"onRowSelect($event)\"\r\n        styleClass=\"clientOrdersTable\"\r\n      >\r\n        <p-column header=\"Date\" [style]=\"{'width':'17%'}\">\r\n          <ng-template let-col let-order=\"rowData\" pTemplate='body'>\r\n            <span>{{order.orderDate | date:'short'}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"orderNumber\" header=\"ID\"></p-column>\r\n        <p-column header=\"No. of Products\" [style]=\"{'width':'12%'}\">\r\n          <ng-template pTemplate=\"body\" let-col let-order=\"rowData\">\r\n            <span>{{order.orderDetails.length}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Total\" [style]=\"{'width':'10%'}\">\r\n          <ng-template let-col let-order=\"rowData\" pTemplate='body'>\r\n            <span>{{order.orderBalance | currency:'USD':true}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-footer *ngIf=\"orders\">\r\n          Total orders: {{orders.length}}\r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"role == 'Admin'\">\r\n  <div class=\"ui-g\">\r\n    <!--Main Dashboard-->\r\n    <div class=\"ui-g-10 ui-sm-12 ui-g-nopad\">\r\n        <div class=\"ui-g-6\">\r\n          <h2><i class=\"fa fa-dashcube\"></i> Dashboard</h2>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <h5 class=\"pull-right text-muted\">Today: {{todayDate | date:'short'}}</h5>\r\n        </div>\r\n        <!--Stats Panel-->\r\n        <div class=\"ui-g-12 ui-g-nopad\">\r\n          <p-panel header=\"Statistics\">\r\n            <div class=\"ui-g\">\r\n              <div class=\"ui-g-6\">\r\n                <p-panel header=\"Clients\" *ngIf=\"clients\" [toggleable]=\"true\" styleClass=\"dashboardPanels\">\r\n                  Total clients: {{clients.length}}\r\n                </p-panel>\r\n              </div>\r\n              <div class=\"ui-g-6\">\r\n                <p-panel header=\"Products\" *ngIf=\"products\" [toggleable]=\"true\" styleClass=\"dashboardPanels\">\r\n                  Total products: {{products.length}}\r\n                </p-panel>\r\n              </div>\r\n              <div class=\"ui-g-6\">\r\n                <p-panel header=\"Orders\" *ngIf=\"orders\" [toggleable]=\"true\" styleClass=\"dashboardPanels\">\r\n                  Total orders: {{orders.length}} <br>\r\n                  <span>Total Revenue: \r\n                    <span\r\n                      [class.text-success]=\"revenueGreaterThanExpenses\"\r\n                      [class.text-danger]=\"!revenueGreaterThanExpenses\"\r\n                    >\r\n                      {{totalRevenue | currency:'USD':true}}\r\n                    </span>\r\n                  </span>\r\n                </p-panel>\r\n              </div>\r\n              <div class=\"ui-g-6\">\r\n                <p-panel header=\"Vendor Orders\" *ngIf=\"vendorOrders\"[toggleable]=\"true\" styleClass=\"dashboardPanels\">\r\n                  Total vendor orders: {{vendorOrders.length}} <br>\r\n                  <span>Total Expenses: \r\n                    <span\r\n                      [class.text-success]=\"!hasExpenses\"\r\n                      [class.text-danger]=\"hasExpenses\"\r\n                    >\r\n                      {{totalExpenses | currency:'USD':true}}\r\n                    </span>\r\n                  </span>\r\n                </p-panel>\r\n              </div>\r\n            </div>\r\n          </p-panel>\r\n        </div>\r\n    </div>\r\n    <!--Sidebar-->\r\n    <div class=\"ui-g-2 ui-sm-12\">\r\n      <app-sidebar></app-sidebar>\r\n      <br><br>\r\n      <button \r\n        pButton \r\n        type=\"button\"\r\n        label=\"Pay Vendor\"\r\n        icon=\"fa-money\"\r\n        [disabled]=\"!payVendor\"\r\n        class=\"ui-messages-info\"\r\n        id=\"payVendorButton\"\r\n        (click)=\"onPayVendorClick()\"\r\n      >\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_vendor_order_service__ = __webpack_require__("../../../../../src/app/services/vendor-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = (function () {
    function DashboardComponent(router, aRoute, authService, clientService, productService, orderService, vendorOrderService, confirmationService, activityService) {
        this.router = router;
        this.aRoute = aRoute;
        this.authService = authService;
        this.clientService = clientService;
        this.productService = productService;
        this.orderService = orderService;
        this.vendorOrderService = vendorOrderService;
        this.confirmationService = confirmationService;
        this.activityService = activityService;
        this.hasBalance = false;
        this.role = '';
        this.totalRevenue = 0;
        this.totalExpenses = 0;
        this.hasExpenses = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Date
        this.todayDate = new Date();
        //Get Role
        this.role = this.aRoute.snapshot.params['role'];
        //GetId
        this.clientId = this.aRoute.snapshot.params['id'];
        //Get Stuffs
        if (this.role == 'Admin') {
            //Get Profile
            this.authService.getAdminProfile().subscribe(function (profile) {
                _this.admin = profile.admin;
            }, function (err) {
                console.log(err);
            });
            //Get Clients
            this.clientService.getClients().subscribe(function (data) {
                _this.clients = data.clients;
            });
            //Get Orders
            this.orderService.getOrders().subscribe(function (data) {
                _this.orders = data.orders;
            });
            //Get Vendor Orders
            this.vendorOrderService.getVendorOrders().subscribe(function (data) {
                _this.vendorOrders = data.vendorOrders;
            });
            //Get Products
            this.productService.getProducts().subscribe(function (data) {
                _this.products = data.products;
            });
            //Get Revenue and Expense
            this.activityService.getActivities().subscribe(function (data) {
                _this.totalRevenue = data.activities[0].revenue;
                _this.totalExpenses = data.activities[0].expense;
                _this.activityId = data.activities[0]._id;
                console.log(_this.totalRevenue, _this.totalExpenses);
            });
            setTimeout(function () {
                if (_this.totalExpenses > 0) {
                    _this.hasExpenses = true;
                    if (_this.totalRevenue > _this.totalExpenses) {
                        _this.revenueGreaterThanExpenses = true;
                        _this.payVendor = true;
                    }
                    else {
                        _this.revenueGreaterThanExpenses = false;
                    }
                }
                else {
                    _this.hasExpenses = false;
                    _this.payVendor = false;
                    _this.revenueGreaterThanExpenses = true;
                }
            }, 1000);
        }
        else if (this.role == 'Client') {
            //Get Profile
            this.clientService.getClientProfile().subscribe(function (profile) {
                _this.client = profile.client;
                if (_this.client.balance > 0) {
                    _this.hasBalance = true;
                }
                else {
                    _this.hasBalance = false;
                }
            }, function (err) {
                console.log(err);
            });
            console.log(this.clientId);
            //Get Orders by UserId
            this.orderService.getOrdersByUserId(this.clientId).subscribe(function (data) {
                _this.orders = data.orders;
            });
        }
    };
    DashboardComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'View details of "' + event.data.orderNumber + '" ?',
            accept: function () {
                _this.router.navigate(['/client-order-detail/' + _this.role + '/' + event.data.orderNumber]);
            }
        });
    };
    DashboardComponent.prototype.onPayVendorClick = function () {
        var _this = this;
        console.log(this.totalExpenses, this.totalRevenue);
        var _placeholder = 0;
        var _revenue = -this.totalExpenses;
        var _expense = -this.totalExpenses;
        _placeholder = this.totalRevenue - this.totalExpenses;
        this.confirmationService.confirm({
            message: 'Confirm payment to vendor?',
            accept: function () {
                _this.totalRevenue = _placeholder;
                _this.totalExpenses = 0;
                if (_this.activityId) {
                    _this.activityService.updateRevenue(_this.activityId, _revenue).subscribe(function (data) {
                        console.log(data);
                    });
                    _this.activityService.updateExpense(_this.activityId, _expense).subscribe(function (data) {
                        console.log(data);
                    });
                }
                else {
                    console.log('Activity ID is undefined');
                }
                _this.payVendor = false;
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_vendor_order_service__["a" /* VendorOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_vendor_order_service__["a" /* VendorOrderService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmationService"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_activity_service__["a" /* ActivityService */]) === "function" && _j || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"push\"></div>\n<footer class=\"footer\">\n  <div class=\"container\">\n          <h1 class=\"h3\">MEAN eCommerce</h1>\n          <p>Copyright &copy; 2017, CT</p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  opacity: 0.8;\n  height: 100px;\n  border-top: 2px solid #67b021;\n  background-color: #343a40; }\n\n.push {\n  height: 300px; }\n\n.container {\n  padding-top: 15px;\n  color: #67b021;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <header id=\"home-section\">\n    <div class=\"dark-overlay\">\n      <div class=\"home-inner\">\n        <div class=\"ui-g-12\">\n          <h1 class=\"display-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsum.</h1>\n        </div>\n        <div class=\"ui-g-12\" *ngIf=\"!authService.isLoggedIn() || !clientService.isLoggedIn()\" id=\"btnDiv\">\n          <button \n            pButton\n            type=\"button\"\n            label=\"SIGN UP\"\n            id=\"homeButton\"\n            (click)=\"onClick()\"\n          >\n          </button>\n        </div>    \n      </div>\n    </div>\n  </header>\n\n  <section class=\"section section-primary\">\n    <h2>Section One</h2>\n    <p>\n      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ut delectus ad error, eos a reiciendis soluta ex dolorum voluptatem assumenda aliquid in recusandae aut illum nihil id consequatur ullam deleniti cumque minima itaque fugit? Sit distinctio unde, a repellat hic perspiciatis veniam, nulla autem doloremque laboriosam debitis ex dicta soluta, quo quibusdam eius ad ut deleniti sed laudantium? Asperiores beatae a impedit culpa sapiente deserunt officia voluptate at unde. Nam, impedit, quo nobis repellat voluptates tenetur amet temporibus rem, nemo vitae optio id adipisci quis est reprehenderit! Blanditiis eaque itaque accusantium eos impedit nihil, natus distinctio quis deserunt quaerat.\n    </p>\n  </section>\n\n  <div class=\"pimg1\">\n    <div class=\"dark-overlay-1\">\n      <div class=\"ptext\">\n          <h1 class=\"display-4\">Lorem ipsum dolor sit amet. </h1> \n      </div>\n    </div>\n  </div>\n\n  <section class=\"section section-dark\">\n      <h2>Section Two</h2>\n      <p>\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ut delectus ad error, eos a reiciendis soluta ex dolorum voluptatem assumenda aliquid in recusandae aut illum nihil id consequatur ullam deleniti cumque minima itaque fugit? Sit distinctio unde, a repellat hic perspiciatis veniam, nulla autem doloremque laboriosam debitis ex dicta soluta, quo quibusdam eius ad ut deleniti sed laudantium? Asperiores beatae a impedit culpa sapiente deserunt officia voluptate at unde. Nam, impedit, quo nobis repellat voluptates tenetur amet temporibus rem, nemo vitae optio id adipisci quis est reprehenderit! Blanditiis eaque itaque accusantium eos impedit nihil, natus distinctio quis deserunt quaerat.\n      </p>\n    </section>\n\n    <div class=\"pimg2\">\n      <div class=\"dark-overlay-2\">\n        <div class=\"ptext\">\n            <h1 class=\"display-4\">Lorem ipsum dolor sit amet. </h1> \n        </div>\n      </div>\n    </div>\n\n    <section class=\"section section-primary\">\n      <h2>Section Three</h2>\n      <p>\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ut delectus ad error, eos a reiciendis soluta ex dolorum voluptatem assumenda aliquid in recusandae aut illum nihil id consequatur ullam deleniti cumque minima itaque fugit? Sit distinctio unde, a repellat hic perspiciatis veniam, nulla autem doloremque laboriosam debitis ex dicta soluta, quo quibusdam eius ad ut deleniti sed laudantium? Asperiores beatae a impedit culpa sapiente deserunt officia voluptate at unde. Nam, impedit, quo nobis repellat voluptates tenetur amet temporibus rem, nemo vitae optio id adipisci quis est reprehenderit! Blanditiis eaque itaque accusantium eos impedit nihil, natus distinctio quis deserunt quaerat.\n      </p>\n    </section>\n\n    <div class=\"pimg3\">\n      <div class=\"dark-overlay-3\">\n        <div class=\"ptext\">\n            <h1 class=\"h3\">MEAN eCommerce</h1>\n            <h1 class=\"h5\">Copyright &copy; 2017, CT</h1>\n        </div>\n      </div>\n    </div>\n\n</div>  \n  "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 1200px) {\n  .wrapper {\n    max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .wrapper {\n    max-width: 100%; } }\n\n@media (min-width: 768px) {\n  .wrapper {\n    max-width: 100%; } }\n\n@media (min-width: 576px) {\n  .wrapper {\n    max-width: 100%; } }\n\n.wrapper {\n  position: absolute;\n  top: 58px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 120px; }\n\n#home-section {\n  background: url(\"https://static.pexels.com/photos/75627/pexels-photo-75627.jpeg\") no-repeat;\n  min-height: 700px;\n  background-size: cover;\n  background-attachment: fixed; }\n\n.dark-overlay {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  left: 0;\n  width: 100%;\n  min-height: 700px; }\n\ndiv.home-inner h1 {\n  text-align: center;\n  margin-top: 270px; }\n\nh1 {\n  color: #67b021;\n  opacity: 0.8; }\n\n#btnDiv {\n  text-align: center; }\n\n.pimg3 {\n  background-image: url(\"https://static.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg\");\n  min-height: 100%; }\n\n.dark-overlay-3 {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  width: 100%;\n  min-height: 100%; }\n\n.pimg2 {\n  background-image: url(\"https://static.pexels.com/photos/157039/pexels-photo-157039.jpeg\");\n  min-height: 400px; }\n\n.dark-overlay-2 {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  width: 100%;\n  min-height: 400px; }\n\n.pimg1 {\n  background-image: url(\"https://static.pexels.com/photos/357577/pexels-photo-357577.jpeg\");\n  min-height: 400px; }\n\n.dark-overlay-1 {\n  background-color: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  width: 100%;\n  min-height: 400px; }\n\n.pimg1, .pimg2, .pimg3 {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  /*To remove Parallax, scroll instead of fixed */\n  background-attachment: fixed; }\n\n.section {\n  text-align: center;\n  padding: 50px 80px; }\n\n.section-primary {\n  background-color: #67b021;\n  color: #fff;\n  border-top: 1px solid #343a40;\n  border-bottom: 1px solid #343a40;\n  opacity: 0.8; }\n\n.section-dark {\n  background-color: #343a40;\n  color: #67b021;\n  border-top: 1px solid #67b021;\n  border-bottom: 1px solid #67b021;\n  opacity: 0.8; }\n\n.ptext {\n  position: absolute;\n  top: 40%;\n  width: 100%;\n  text-align: center; }\n\n.pimg3 .ptext {\n  top: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, authService, clientService) {
        this.router = router;
        this.authService = authService;
        this.clientService = clientService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onClick = function () {
        this.router.navigate(['/register']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\n  <div class=\"ui-grid-row\">\n    <div class=\"ui-grid-col-3\"></div>\n    <div class=\"ui-grid-col-6\">\n      <p-growl [value]=\"loginMessages\" styleClass=\"loginGrowl\"></p-growl>\n      <form (submit)=\"onLoginSubmit()\">\n        <p-panel header=\"Login\" styleClass=\"loginPanel\">\n          <div class=\"ui-grid-row\">\n            Email:\n          </div>\n          <div class=\"ui-grid-row\">\n            <input\n              pInputText \n              type=\"email\" \n              name=\"email\"\n              [(ngModel)]=\"email\" \n            >\n          </div>\n          <div class=\"ui-grid-row\">\n            Password:\n          </div>\n          <div class=\"ui-grid-row\">\n            <input\n              pInputText \n              type=\"password\" \n              name=\"password\"\n              [(ngModel)]=\"password\" \n            >\n          </div>\n          <div class=\"ui-grid-row\">\n            Login as:\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-6\">\n              <p-radioButton\n                name=\"role\"\n                value=\"Client\"\n                label=\"Client\"\n                [(ngModel)]=\"role\"\n                (onClick)=\"onClientClick($event)\"\n                id=\"loginRadioButton\"\n              >\n              </p-radioButton>\n            </div>\n            <div class=\"ui-grid-col-6\">\n              <p-radioButton\n                name=\"role\"\n                value=\"Admin\"\n                label=\"Admin\"\n                [(ngModel)]=\"role\"\n                (onClick)=\"onAdminClick($event)\"\n                id=\"loginRadioButton\"\n              >\n              </p-radioButton>\n            </div>\n          </div>\n          <p-footer>\n            <button pButton type=\"submit\" label=\"Submit\" id=\"loginButton\"></button>\n          </p-footer>\n        </p-panel>\n      </form>\n    </div>\n    <div class=\"ui-grid-col-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(router, httpService, authService, flashMessagesService, clientService) {
        this.router = router;
        this.httpService = httpService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.clientService = clientService;
        this.email = '';
        this.password = '';
        this.role = 'Client';
        this.loginMessages = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (this.role == 'Admin') {
            this.authService.authenticateAdmin(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeAdminData(data.token, data.admin);
                    _this.flashMessagesService.show('You are logged in', {
                        cssClass: 'ui-messages-info',
                        timeout: 3000
                    });
                    _this.router.navigate(['/dashboard/' + data.admin.role + '/' + data.admin._id]);
                }
                else {
                    _this.loginMessages = [];
                    _this.loginMessages.push({
                        severity: 'error',
                        summary: 'Login Error',
                        detail: data.msg
                    });
                    _this.router.navigate(['/login']);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.role == 'Client') {
            this.clientService.authenticateClient(user).subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.clientService.storeClientData(data.token, data.client);
                    _this.flashMessagesService.show('You are logged in', {
                        cssClass: 'ui-messages-info',
                        timeout: 3000
                    });
                    _this.router.navigate(['/dashboard/' + data.client.role + '/' + data.client._id]);
                }
                else {
                    _this.loginMessages = [];
                    _this.loginMessages.push({
                        severity: 'error',
                        summary: 'Login Error',
                        detail: data.msg
                    });
                    _this.router.navigate(['/login']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    LoginComponent.prototype.onClientClick = function (event) {
        this.role = 'Client';
        console.log(this.role);
    };
    LoginComponent.prototype.onAdminClick = function (event) {
        this.role = 'Admin';
        console.log(this.role);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menu #menu popup=\"popup\" [model]=\"menuItems\" styleClass=\"navMenu\"></p-menu>\r\n\r\n<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" key=\"navConfirm\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<!--Navbar-->\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">eCommerce.</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn() && authService.currentAdmin\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" style=\"cursor: pointer\" [routerLink]=\"['/dashboard/',authService.currentAdmin?.role, authService.currentAdmin?._id]\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn() && clientService.currentClient\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" style=\"cursor: pointer\" [routerLink]=\"['/dashboard/',clientService.currentClient?.role, clientService.currentClient?._id]\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn() && clientService.currentClient\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" style=\"cursor: pointer\" [routerLink]=\"['/sale/', clientService.currentClient?.role]\">Shop</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn() && authService.currentAdmin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a class=\"nav-link\" style=\"cursor: pointer\" [routerLink]=\"['/sale/', authService.currentAdmin?.role]\">Vendor</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!authService.isLoggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authService.currentAdmin\">\r\n          <a class=\"nav-link\" id=\"welcomeText\" style=\"cursor: pointer\">Welcome, {{authService.currentAdmin?.name}}</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"clientService.currentClient\">\r\n          <a class=\"nav-link\" id=\"welcomeText\" style=\"cursor: pointer\">Welcome, {{clientService.currentClient?.firstName}}</a>\r\n        </li>\r\n        <!-- <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"welcomeText\" (click)=\"onLogoutClick()\" style=\"cursor: pointer\">Logout</a>\r\n        </li> -->\r\n        <li  class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\">\r\n          <a class=\"nav-link\" (click)=\"menu.toggle($event)\" style=\"cursor: pointer\"><i class=\"fa fa-user-circle-o\"></i></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  opacity: 0.8;\n  border-bottom: 2px solid #67b021; }\n\n.navbar-dark .navbar-brand {\n  color: #67b021; }\n\n.navbar-dark .navbar-toggler {\n  color: #67b021;\n  border-color: #67b021;\n  cursor: pointer; }\n\n.navbar-dark .navbar-nav .active > .nav-link {\n  color: #67b021; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(authService, clientService, flashMessagesService, confirmationService, router) {
        this.authService = authService;
        this.clientService = clientService;
        this.flashMessagesService = flashMessagesService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.menuItems = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = [
            {
                label: 'Manage',
                items: [
                    {
                        label: 'Change Password',
                        icon: 'fa-wrench',
                        command: function (event) {
                            _this.router.navigate(['/password']);
                        }
                    },
                    {
                        label: 'Log Out',
                        icon: 'fa-minus',
                        command: function (event) {
                            _this.onLogoutClick();
                        }
                    }
                ]
            }
        ];
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure to log out?',
            key: "navConfirm",
            accept: function () {
                if (_this.clientService.currentClient) {
                    _this.clientService.logout();
                    _this.flashMessagesService.show('Logged Out (Client)', {
                        cssClass: 'ui-messages-info',
                        timeout: 3000
                    });
                    _this.router.navigate(['/login']);
                }
                if (_this.authService.currentAdmin) {
                    _this.authService.logout();
                    _this.flashMessagesService.show('Logged Out (Admin)', {
                        cssClass: 'ui-messages-info',
                        timeout: 3000
                    });
                    _this.router.navigate(['/login']);
                }
            }
        });
        return false;
    };
    NavbarComponent.prototype.loadCurrentUser = function () {
        this.admin = this.authService.currentAdmin;
        this.client = this.clientService.currentClient;
        console.log(this.admin);
        console.log(this.client);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-add/product-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-6\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-info\" \r\n      label=\"Back To Products\" \r\n      icon=\"fa-arrow-circle-o-left\" \r\n      iconPos=\"left\" \r\n      (click)=\"onClick()\"\r\n    >\r\n    </button>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <!--TODO-->\r\n  </div>\r\n</div>\r\n\r\n<p-growl [value]=\"addProductMessages\" styleClass=\"addProductGrowl\"></p-growl>\r\n<form \r\n  [formGroup]=\"addProductForm\"\r\n  (ngSubmit)=\"onAddProductSubmit(addProductForm.value)\"\r\n>\r\n  <p-panel header=\"Add Product\"> \r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <!-- Product Name Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Name:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\r\n          <input \r\n            pInputText\r\n            type=\"text\"\r\n            formControlName=\"name\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- Product Description Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Description:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\r\n          <textarea\r\n            pInputTextarea\r\n            [rows]=\"5\" \r\n            [cols]=\"60\"\r\n            autoResize=\"autoResize\"\r\n            formControlName=\"description\"\r\n          >\r\n          </textarea>\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- Product Unit Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Unit:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\r\n          <p-dropdown\r\n            [options]=\"units\"\r\n            formControlName=\"unit\"\r\n            placeholder=\"Select a unit\"\r\n            [style]=\"{'width':'35%'}\"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- Product Image Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Image:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\r\n          <!-- <p-fileUpload \r\n            mode=\"basic\"\r\n            name=\"image\"\r\n            customUpload=\"true\" \r\n            (uploadHandler)=\"imageUpload($event)\"\r\n          >\r\n          </p-fileUpload> -->\r\n            <input type=\"file\" formControlName=\"image\" accept=\"image/*\" (change)=\"onChange($event)\">\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- Product Sell Price Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Sell Price:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"number\"\r\n            formControlName=\"productSellPrice\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- Product Buy Price Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Buy Price:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"number\"\r\n            formControlName=\"productBuyPrice\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- Product Instock Input -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Quantity Instock:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"number\"\r\n            formControlName=\"inStock\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-4\"></div>\r\n      </div> <!--Ends-->\r\n      <!-- SUBMIT Button -->\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"></div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <button\r\n            pButton\r\n            type=\"submit\"\r\n            label=\"Submit\"\r\n            [disabled]=\"!addProductForm.valid\"\r\n          >\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div> <!--Grid-->\r\n  </p-panel>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/product-add/product-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-add/product-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductAddComponent = (function () {
    function ProductAddComponent(fB, router, productService, flashMessagesService) {
        this.fB = fB;
        this.router = router;
        this.productService = productService;
        this.flashMessagesService = flashMessagesService;
        this.units = [];
        this.addProductMessages = [];
        this.pickImage = false;
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.addProductForm = this.fB.group({
            'productDetails': this.fB.group({
                'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                'unit': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                'image': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
            }),
            'productSellPrice': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0),
            'productBuyPrice': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0),
            'inStock': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0)
        });
        this.units = [];
        this.units.push({ label: 'Each', value: 'EA' }),
            this.units.push({ label: 'Box', value: 'BX' }),
            this.units.push({ label: 'Case', value: 'CS' });
    };
    ProductAddComponent.prototype.onClick = function () {
        this.router.navigate(['/products']);
    };
    ProductAddComponent.prototype.onAddProductSubmit = function (value) {
        var _this = this;
        this.product = value;
        if (this.pickImage) {
            var img = value.productDetails.image[0];
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                console.log('RESULT', reader_1.result);
                _this.product.productDetails.image = reader_1.result;
                _this.postProduct(_this.product);
            };
            reader_1.readAsDataURL(img);
        }
        else {
            this.postProduct(this.product);
        }
    };
    ProductAddComponent.prototype.postProduct = function (product) {
        var _this = this;
        this.productService.addProduct(product).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show('New Product Added', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/products']);
            }
            else {
                _this.addProductMessages = [];
                _this.addProductMessages.push({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to add new Product'
                });
                _this.router.navigate(['/add-product']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductAddComponent.prototype.onChange = function (event) {
        this.pickImage = true;
    };
    return ProductAddComponent;
}());
ProductAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-add',
        template: __webpack_require__("../../../../../src/app/components/product-add/product-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-add/product-add.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ProductAddComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-add/productAdd.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileValueAccessor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileValueAccessor = FileValueAccessor_1 = (function () {
    function FileValueAccessor() {
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    FileValueAccessor.prototype.writeValue = function (value) { };
    FileValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FileValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    return FileValueAccessor;
}());
FileValueAccessor = FileValueAccessor_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: "input[type=file]",
        host: {
            "(change)": "onChange($event.target.files)",
            "(blur)": "onTouched()"
        },
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: FileValueAccessor_1, multi: true }
        ]
    })
], FileValueAccessor);

var FileValueAccessor_1;
//# sourceMappingURL=productAdd.directive.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\n\n<div class=\"ui-g\">\n  <div class=\"ui-g-6\">\n    <button \n      pButton \n      type=\"button\" \n      class=\"ui-button-info\" \n      label=\"Back To Products\" \n      icon=\"fa-arrow-circle-o-left\" \n      iconPos=\"left\" \n      (click)=\"onClick()\"\n    >\n    </button>\n  </div>\n  <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">\n    <p-splitButton \n      label=\"Manage\" \n      [model]=\"buttonItems\" \n      styleClass=\"ui-button-secondary\" \n      menuStyleClass=\"productDetailSplitBtnMenu\"\n    >\n    </p-splitButton> \n  </div>\n</div>\n\n<!-- Product Detail -->\n<div *ngIf=\"product\"> \n  <p-panel styleClass=\"productDetailPanel\">\n    <p-header>\n      <h3 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{product.productDetails.name}}</h3>\n    </p-header>\n    <div class=\"ui-g\">\n      <div class=\"ui-g-8 ui-sm-12\">\n        <h4 style=\"margin-top: 10px\">Product Number: {{id}}</h4>\n      </div>\n      <div class=\"ui-g-4 ui-sm-12\">\n        <h3 class=\"pull-right\">\n          In Stock: \n          <span\n            [class.text-danger]=\"outOfStock\"\n            [class.text-success]=\"!outOfStock\"\n          >\n            {{product.inStock}}\n          </span>\n        </h3>\n      </div>\n    </div>\n    <hr>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" style=\"text-align: center\"><img src=\"{{product.productDetails.image}}\"></li>\n      <li class=\"list-group-item\">Description: {{product.productDetails.description}}</li>\n    </ul>\n    <p-footer></p-footer>\n  </p-panel>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(router, aRoute, productService, confirmationService, flashMessagesService) {
        this.router = router;
        this.aRoute = aRoute;
        this.productService = productService;
        this.confirmationService = confirmationService;
        this.flashMessagesService = flashMessagesService;
        this.buttonItems = [];
        this.outOfStock = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Id (Product Number)
        this.id = this.aRoute.snapshot.params['id'];
        console.log(this.id);
        //Get Product by Product Number
        this.productService.getProductByProductNumber(this.id).subscribe(function (data) {
            if (data.success) {
                if (data.product.inStock <= 0) {
                    _this.outOfStock = true;
                }
                else {
                    _this.outOfStock = false;
                }
                _this.product = data.product;
                _this._id = _this.product._id;
            }
        });
        //Context Menu
        this.buttonItems = [
            {
                label: 'Edit',
                icon: 'fa-wrench',
                command: function () {
                    _this.router.navigate(['/edit-product/' + _this.id]);
                }
            },
            {
                label: 'Delete',
                icon: 'fa-close',
                command: function () {
                    _this.confirmationService.confirm({
                        message: 'This action will permanently delete Object "' + _this.id + '". Do you want to proceed?',
                        accept: function () {
                            _this.productService.deleteProduct(_this._id).subscribe(function (data) {
                                if (data.success) {
                                    _this.flashMessagesService.show('Product deleted', {
                                        cssClass: 'ui-messages-info',
                                        timeout: 3000
                                    });
                                    _this.router.navigate(['/products']);
                                }
                                else {
                                    _this.flashMessagesService.show(data.msg, {
                                        cssClass: 'ui-messages-info',
                                        timeout: 3000
                                    });
                                    _this.router.navigate(['/product-detail/' + _this.id]);
                                }
                            });
                        }
                    });
                }
            }
        ];
    };
    ProductDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/products']);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-detail/product-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], ProductDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-6\">\n      <button \n        pButton \n        type=\"button\" \n        class=\"ui-button-info\" \n        label=\"Back To Product Details\" \n        icon=\"fa-arrow-circle-o-left\" \n        iconPos=\"left\" \n        (click)=\"onClick()\"\n      >\n      </button>\n    </div>\n    <div class=\"ui-g-6\">\n      \n    </div>\n  </div>\n\n  <!--Confirmation Dialog -->\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\n<form \n  [formGroup]=\"editProductForm\"\n  (ngSubmit)=\"onEditProductSubmit(editProductForm.value)\"\n>\n  <p-panel header=\"Edit Product\" *ngIf=\"product\"> \n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\n      <!-- Product Name Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Name:\n        </div>\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\n          <input \n            pInputText\n            type=\"text\"\n            formControlName=\"name\"\n            [(ngModel)]=\"product.productDetails.name\"\n          >\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- Product Description Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Description:\n        </div>\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\n          <textarea\n            pInputTextarea\n            [rows]=\"5\" \n            [cols]=\"60\"\n            autoResize=\"autoResize\"\n            formControlName=\"description\"\n            [(ngModel)]=\"product.productDetails.description\"\n          >\n          </textarea>\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- Product Unit Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Unit:\n        </div>\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\n          <p-dropdown\n            [options]=\"units\"\n            formControlName=\"unit\"\n            placeholder=\"Select a unit\"\n            [(ngModel)]=\"product.productDetails.unit\"\n            [style]=\"{'width':'35%'}\"\n          >\n          </p-dropdown>\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- Product Image Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Image:\n        </div>\n        <div class=\"ui-grid-col-6\" formGroupName=\"productDetails\">\n          <!-- <p-fileUpload \n            mode=\"basic\"\n            name=\"image\"\n            customUpload=\"true\" \n            (uploadHandler)=\"imageUpload($event)\"\n          >\n          </p-fileUpload> -->\n            <input \n              type=\"file\" \n              formControlName=\"image\" \n              [(ngModel)]=\"product.productDetails.image\"\n              accept=\"image/*\"\n              (change)=\"onChange($event)\">\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- Product Sell Price Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Sell Price:\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input \n            pInputText\n            type=\"number\"\n            formControlName=\"productSellPrice\"\n            [(ngModel)]=\"product.productSellPrice\"\n          >\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- Product Buy Price Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Buy Price:\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input \n            pInputText\n            type=\"number\"\n            formControlName=\"productBuyPrice\"\n            [(ngModel)]=\"product.productBuyPrice\"\n          >\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- Product Instock Input -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Quantity Instock:\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input \n            pInputText\n            type=\"number\"\n            formControlName=\"inStock\"\n            [(ngModel)]=\"product.inStock\"\n          >\n        </div>\n        <div class=\"ui-grid-4\"></div>\n      </div> <!--Ends-->\n      <!-- SUBMIT Button -->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\"></div>\n        <div class=\"ui-grid-col-6\">\n          <button\n            pButton\n            type=\"submit\"\n            label=\"Submit\"\n            [disabled]=\"!editProductForm.valid\"\n          >\n          </button>\n        </div>\n      </div>\n    </div> <!--Grid-->\n  </p-panel>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/product-edit/product-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductEditComponent = (function () {
    function ProductEditComponent(router, aRoute, productService, fB, confirmationService, flashMessagesService) {
        this.router = router;
        this.aRoute = aRoute;
        this.productService = productService;
        this.fB = fB;
        this.confirmationService = confirmationService;
        this.flashMessagesService = flashMessagesService;
        this.changeImage = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get ID
        this.id = this.aRoute.snapshot.params['id'];
        //Get Product by Product Number
        this.productService.getProductByProductNumber(this.id).subscribe(function (data) {
            if (data.success) {
                _this.product = data.product;
                _this._id = _this.product._id;
            }
        });
        //Build Edit form
        this.editProductForm = this.fB.group({
            'productDetails': this.fB.group({
                'name': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                'description': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                'unit': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
                'image': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('')
            }),
            'productSellPrice': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](0),
            'productBuyPrice': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](0),
            'inStock': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](0)
        });
        this.units = [];
        this.units.push({ label: 'Each', value: 'EA' }),
            this.units.push({ label: 'Box', value: 'BX' }),
            this.units.push({ label: 'Case', value: 'CS' });
    };
    ProductEditComponent.prototype.onClick = function () {
        this.router.navigate(['/product-detail/' + this.id]);
    };
    ProductEditComponent.prototype.onEditProductSubmit = function (value) {
        var _this = this;
        console.log(this.changeImage);
        this.product = value;
        this.confirmationService.confirm({
            message: 'Are you sure to make edit to this product?',
            accept: function () {
                console.log(_this.changeImage);
                if (_this.changeImage) {
                    console.log('I am in here even though changeImage is false');
                    var img = value.productDetails.image[0];
                    var reader_1 = new FileReader();
                    reader_1.onloadend = function () {
                        value.productDetails.image[0] = reader_1.result;
                        _this.product.productDetails.image = reader_1.result;
                        _this.updateProduct(_this._id, _this.product);
                    };
                    reader_1.readAsDataURL(img);
                }
                else {
                    console.log('I am in here as I should be');
                    _this.updateProduct(_this._id, _this.product);
                }
            }
        });
    };
    ProductEditComponent.prototype.onChange = function (event) {
        this.changeImage = true;
    };
    ProductEditComponent.prototype.updateProduct = function (id, product) {
        var _this = this;
        this.productService.updateProduct(id, product).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Product Info Updated', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/product-detail/' + _this.id]);
            }
            else {
                _this.flashMessagesService.show('Product Info Update Failed', {
                    cssClass: 'ui-messages-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/edit-product/' + _this.id]);
            }
        });
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-edit',
        template: __webpack_require__("../../../../../src/app/components/product-edit/product-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-edit/product-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], ProductEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-sale/product-sale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-6 ui-lg-6 ui-md-6 ui-sm-12\"></div>\r\n    <div class=\"ui-g-6 ui-lg-6 ui-md-6 ui-sm-12 ui-rtl\" dir=\"rtl\">\r\n        <button \r\n            pButton \r\n            type=\"button\"\r\n            label=\"Go to cart\"\r\n            icon=\"fa-shopping-cart\"\r\n            (click)=\"onGoToCartClick()\"\r\n        >\r\n        </button>\r\n    </div>\r\n</div>\r\n<!-- Client View -->\r\n<div *ngIf=\"role == 'Client'\">\r\n    <p-dataGrid\r\n        *ngIf=\"products\" \r\n        [value]=\"products\"\r\n        [paginator]=\"true\" \r\n        [rows]=\"6\"\r\n        [alwaysShowPaginator]=\"false\"\r\n    >\r\n        <p-header>\r\n            Products\r\n        </p-header>\r\n\r\n        <ng-template let-product pTemplate=\"item\" let-i=\"index\">\r\n            <div class=\"ui-g-12 ui-md-4 ui-sm-12 ui-xs-12\" style=\"padding:3px\">\r\n                <p-panel\r\n                    [header]=\"product.productNumber\"\r\n                    [style]=\"{'text-align':'center'}\"\r\n                >\r\n                    <img src=\"{{product.productDetails.image}}\" width=\"150\" height=\"150\" alt=\"product{{i}} placeholder\">\r\n                    <div class=\"ui-g\" style=\"height:80px\">\r\n                        <div class=\"ui-g-12 ui-md-12 ui-sm-12\">\r\n                            <h4>{{product.productDetails.name}}</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\"><h5>{{product.productSellPrice | currency:'USD':true}}</h5></div>\r\n                        <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">Sold by: {{product.productDetails.unit}}</div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6 ui-lg-6 ui-md-12 d-none d-lg-block\">\r\n                            Quantity:\r\n                        </div>\r\n                        <div class=\"ui-g-6 ui-lg-6 ui-md-12 ui-sm-12\">\r\n                            <p-spinner\r\n                                placeholder=\"0\"\r\n                                size=\"10\"\r\n                                [min]=\"0\"\r\n                                [max]=\"product.inStock\"\r\n                                [(ngModel)]=\"quantitySelect[i]\"\r\n                                name=\"quantitySelect\"\r\n                            >\r\n                            </p-spinner>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6 ui-lg-6 ui-md-12 ui-sm-12\">\r\n                            <button \r\n                                pButton \r\n                                type=\"button\"\r\n                                label=\"Details\"\r\n                                icon=\"fa-info-circle\"\r\n                                class=\"ui-button-info\"\r\n                                (click)=\"displayDetail(product)\"\r\n                            >\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"ui-g-6 ui-lg-6 ui-md-12 ui-sm-12 rtl\" dir=\"rtl\">\r\n                            <button\r\n                                pButton\r\n                                type=\"button\"\r\n                                label=\"Add to Cart\"\r\n                                icon=\"fa-cart-plus\"\r\n                                data-toggle=\"modal\" \r\n                                data-target=\"#reviewModal\"\r\n                                (click)=\"addToCartClick(product, quantitySelect[i])\"\r\n                            >\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </p-panel>\r\n            </div>\r\n        </ng-template>\r\n    </p-dataGrid>\r\n</div>\r\n<!-- Admin View  -->\r\n<div *ngIf=\"role == 'Admin'\">\r\n    <p-dataGrid\r\n        *ngIf=\"products\" \r\n        [value]=\"products\"\r\n        [paginator]=\"true\" \r\n        [rows]=\"6\"\r\n        [alwaysShowPaginator]=\"false\"\r\n    >\r\n        <p-header>\r\n            Products\r\n        </p-header>\r\n\r\n        <ng-template let-product pTemplate=\"item\" let-i=\"index\">\r\n                <div class=\"ui-g-12 ui-md-4 ui-sm-12 ui-xs-12\" style=\"padding:3px\">\r\n                    <p-panel\r\n                        [header]=\"product.productNumber\"\r\n                        [style]=\"{'text-align':'center'}\"\r\n                    >\r\n                        <img src=\"{{product.productDetails.image}}\" width=\"150\" height=\"150\" alt=\"product{{i}} placeholder\">\r\n                        <div class=\"ui-g\" style=\"height:80px\">\r\n                            <div class=\"ui-g-12 ui-md-12 ui-sm-12\">\r\n                                <h4>{{product.productDetails.name}}</h4>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-6\"><h5>{{product.productBuyPrice | currency:'USD':true}}</h5></div>\r\n                            <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">Sold by: {{product.productDetails.unit}}</div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-6 ui-lg-6 ui-md-12 d-none d-lg-block\">\r\n                                Quantity:\r\n                            </div>\r\n                            <div class=\"ui-g-6 ui-lg-6 ui-md-12 ui-sm-12\">\r\n                                <p-spinner\r\n                                    placeholder=\"0\"\r\n                                    size=\"10\"\r\n                                    [min]=\"0\"\r\n                                    [(ngModel)]=\"quantitySelect[i]\"\r\n                                    name=\"quantitySelect\"\r\n                                >\r\n                                </p-spinner>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-6 ui-lg-6 ui-md-12 ui-sm-12\">\r\n                                <button \r\n                                    pButton \r\n                                    type=\"button\"\r\n                                    label=\"Details\"\r\n                                    icon=\"fa-info-circle\"\r\n                                    class=\"ui-button-info\"\r\n                                    (click)=\"displayDetail(product)\"\r\n                                >\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"ui-g-6 ui-lg-6 ui-md-12 ui-sm-12 rtl\" dir=\"rtl\">\r\n                                <button\r\n                                    pButton\r\n                                    type=\"button\"\r\n                                    label=\"Add to Cart\"\r\n                                    icon=\"fa-cart-plus\" \r\n                                    data-toggle=\"modal\" \r\n                                    data-target=\"#reviewModal\"                            \r\n                                    (click)=\"addToCartClick(product, quantitySelect[i])\"\r\n                                >\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </p-panel>\r\n                </div>\r\n        </ng-template>\r\n    </p-dataGrid>\r\n</div>\r\n\r\n<!-- Details Dialog  -->\r\n<p-dialog\r\n    header=\"Product Details\"\r\n    [(visible)]=\"displayDetailDialog\"\r\n    [responsive]=\"true\"\r\n    showEffect=\"fade\"\r\n    modal=\"modal\"\r\n    [width]=\"850\"\r\n    [breakpoint]=\"850\"\r\n>\r\n    <div *ngIf=\"selectedProduct\" class=\"ui-grid ui-grid-responsive ui-grid-pad\">\r\n        <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\" style=\"text-align: center;\"><h4>{{selectedProduct.productDetails.name}}</h4></div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-12 ui-md-3\">\r\n                        <div class=\"ui-g-12\">\r\n                            <img src=\"{{selectedProduct.productDetails.image}}\" width=\"200\" height=\"200\">\r\n                        </div>\r\n                        <div class=\"ui-g-12\">\r\n                            Blah Blah Blah\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                        <ul class=\"list-group\">\r\n                            <li class=\"list-group-item\"><h5>Unit:</h5> {{selectedProduct.productDetails.unit}}</li>\r\n                            <li class=\"list-group-item\"><h5>Quantity OH:</h5> {{selectedProduct.inStock}}</li>\r\n                            <li class=\"list-group-item\"><h5>Desription:</h5> {{selectedProduct.productDetails.description}}</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            <div class=\"ui-g-12\">\r\n                Footer\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- Add To Cart Modal -->\r\n<div class=\"modal fade\" id=\"reviewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\" id=\"modalContent\">\r\n      <div class=\"modal-header\" id=\"modalHeader\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Review Cart</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n            <div *ngIf=\"carts\" class=\"ui-grid ui-grid-responsive ui-grid-pad\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th>Product#</th>\r\n                                    <th>Name</th>\r\n                                    <th>Unit</th>\r\n                                    <th>Quantity</th>\r\n                                    <th>Sub Total</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody style=\"font-style:italic\">\r\n                                <tr *ngFor=\"let item of carts\">\r\n                                    <td><img src=\"{{item.product.productDetails.image}}\" width=\"25\" height=\"25\"></td>\r\n                                    <td>{{item.product.productNumber}}</td>\r\n                                    <td>{{item.product.productDetails.name}}</td>\r\n                                    <td>{{item.product.productDetails.unit}}</td>\r\n                                    <td>x{{item.quantity}}</td>\r\n                                    <span *ngIf=\"role == 'Client'\"><td>{{item.quantity * item.product.productSellPrice | currency:'USD':true}}</td></span>\r\n                                    <span *ngIf=\"role == 'Admin'\"><td>{{item.quantity * item.product.productBuyPrice | currency:'USD':true}}</td></span>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <p style=\"font-style: italic; font-size:small\">**You can finalize order before Checking Out.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"modal-footer\" id=\"modalFooter\">\r\n        <button pButton type=\"button\" label=\"Continue Shopping\" icon=\"fa-arrow-circle-o-left\" class=\"ui-button-secondary\" data-dismiss=\"modal\"></button>\r\n        <button \r\n            pButton \r\n            data-dismiss=\"modal\"\r\n            type=\"button\" \r\n            label=\"Proceed to Checkout\" \r\n            icon=\"fa-arrow-circle-o-right\" \r\n            class=\"ui-button-primary\"\r\n            (click)=\"onGoToCartClick()\"\r\n        >    \r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/product-sale/product-sale.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p-dataGrid div.ui-g {\n  text-align: center; }\n\n#modalContent {\n  background: #f5f3e5; }\n\n#modalHeader, #modalFooter {\n  background: #ece8da;\n  border: 1px solid #e4dfce; }\n\nmodal hr {\n  color: #ece8da; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product-sale/product-sale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductSaleComponent = (function () {
    function ProductSaleComponent(productService, aRoute, cartService, localStorageService, router) {
        this.productService = productService;
        this.aRoute = aRoute;
        this.cartService = cartService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.quantitySelect = [];
    }
    ProductSaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Role
        this.role = this.aRoute.snapshot.params['role'];
        //Get all Products
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data.products;
        });
        //Init Cart
        this.cartService.initCart();
    };
    ProductSaleComponent.prototype.displayDetail = function (product) {
        this.selectedProduct = product;
        this.displayDetailDialog = true;
    };
    ProductSaleComponent.prototype.addToCartClick = function (product, quantitySelect) {
        var _this = this;
        this.cartService.getCartEntryByProductProductNumber(product.productNumber)
            .then(function (cartEntry) {
            this.cartService.addProductToCart(product, quantitySelect);
        }.bind(this));
        setTimeout(function () {
            _this.cartService.getAllCartEntries()
                .then(function (cartEntries) {
                _this.carts = cartEntries;
            });
        }, 1000);
    };
    ProductSaleComponent.prototype.onTestClick = function () {
    };
    ProductSaleComponent.prototype.onQuantitySpinnerBlur = function (event) {
        console.log(event.target);
    };
    ProductSaleComponent.prototype.onGoToCartClick = function () {
        var _this = this;
        this.randomGeneratedString = this.genIdString();
        setTimeout(function () {
            _this.router.navigate(['/cart/' + _this.role + '/' + _this.randomGeneratedString]);
        }, 500);
    };
    ProductSaleComponent.prototype.genIdString = function () {
        var identifier = "MEC";
        var identifierVendor = "VEN";
        var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var Id = '';
        for (var i = 0; i < 9; i++) {
            Id += possibleChars.charAt(Math.random() * possibleChars.length);
        }
        ;
        if (this.role == 'Client') {
            Id = identifier + "-" + Id;
        }
        else if (this.role == 'Admin') {
            Id = identifierVendor + "-" + Id;
        }
        return Id;
    };
    return ProductSaleComponent;
}());
ProductSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-sale',
        template: __webpack_require__("../../../../../src/app/components/product-sale/product-sale.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product-sale/product-sale.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], ProductSaleComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-sale.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog-->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-g\">\r\n  <!--MAIN Products-->\r\n  <div class=\"ui-g-10 ui-sm-12\">\r\n    <div class=\"ui-g-6\">\r\n      <h2><i class=\"fa fa-product-hunt\"></i> Products</h2>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <!--TODO-->\r\n    </div>\r\n    <!--PRODUCTS Data-->\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable\r\n        [value]=\"products\"\r\n        [responsive]=\"true\"\r\n        selectionMode=\"single\" \r\n        [(selection)]=\"selectedProduct\" \r\n        (onRowSelect)=\"onRowSelect($event)\"\r\n        styleClass=\"productsTable\"\r\n      >\r\n        <p-column field=\"productNumber\" header=\"ID\" [style]=\"{'width':'15%'}\"></p-column>\r\n        <p-column field=\"productDetails.name\" header=\"Name\" [style]=\"{'width':'35%'}\"></p-column>\r\n        <p-column field=\"productDetails.unit\" header=\"Unit\" [style]=\"{'width':'13%'}\"></p-column>\r\n        <p-column header=\"Unit Price\" [style]=\"{'width':'12%'}\">\r\n          <ng-template let-col let-product=\"rowData\" pTemplate=\"body\">\r\n            <span>{{product.productSellPrice | currency:'USD':true}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Vendor Price\" [style]=\"{'width':'12%'}\">\r\n          <ng-template let-col let-product=\"rowData\" pTemplate=\"body\">\r\n            <span>{{product.productBuyPrice | currency:'USD':true}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"inStock\" header=\"Quantity\" [style]=\"{'width':'13%'}\"></p-column>\r\n        <p-footer *ngIf=\"products\">\r\n          Total products: {{products.length}} \r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div> <!--Ends Products Data-->\r\n  </div>\r\n  <!--PRODUCT Sidebar-->\r\n  <div class=\"ui-g-2 ui-sm-12\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-success\" \r\n      icon=\"fa-plus\" \r\n      iconPos=\"left\" \r\n      label=\"Add Product\" \r\n      (click)=\"onAddProductClick()\" \r\n      id=\"addProductButton\"\r\n    >\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(router, confirmationService, productService) {
        this.router = router;
        this.confirmationService = confirmationService;
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            if (data.success) {
                _this.products = data.products;
            }
        });
    };
    ProductsComponent.prototype.onAddProductClick = function () {
        this.router.navigate(['/add-product']);
    };
    ProductsComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        console.log(event);
        this.confirmationService.confirm({
            message: 'View details of "' + event.data.productNumber + '" ?',
            accept: function () {
                _this.router.navigate(['/product-detail/' + event.data.productNumber]);
            }
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object])
], ProductsComponent);

var _a, _b, _c;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"registerClientMessages\" styleClass=\"addClientGrowl\"></p-growl>\n<form\n  [formGroup]=\"clientForm\"\n  (ngSubmit)=\"onAddSubmit(clientForm.value)\"\n>\n  <p-panel header=\"Register\">\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\n\n      <!--EMAIL Input-->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\">\n          Email *:\n        </div>\n        <div class=\"ui-grid-col-6\">\n          <input\n            pInputText \n            type=\"email\"\n            formControlName=\"email\"\n            [(ngModel)]=\"client.email\"\n            placeholder=\"Required\"\n          >\n        </div>\n        <div class=\"ui-grid-col-4\">\n          <div \n            class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\n            *ngIf=\"!clientForm.controls['email'].valid && clientForm.controls['email'].dirty\"\n          >\n            <i class=\"fa fa-close\"></i>\n            <span *ngIf=\"clientForm.controls['email'].errors['required']\">This field is required</span>\n            <span *ngIf=\"clientForm.controls['email'].errors['pattern']\">Must enter a valid email</span>\n          </div>\n        </div>\n      </div>\n      <!--PASSWORD Input-->\n      <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            Password *:\n          </div>\n          <div class=\"ui-grid-col-6\">\n            <input\n              pInputText \n              type=\"password\"\n              formControlName=\"password\"\n              [(ngModel)]=\"client.password\"\n              placeholder=\"Required\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n            <div \n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\n              *ngIf=\"!clientForm.controls['password'].valid && clientForm.controls['password'].dirty\"\n            >\n              <i class=\"fa fa-close\"></i>\n              <span *ngIf=\"clientForm.controls['password'].errors['required']\">This field is required</span>\n              <span *ngIf=\"clientForm.controls['password'].errors['minlength']\">Must be at least 6 characters</span>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <!--FIRSTNAME Input-->\n      <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            First Name:\n          </div>\n          <div class=\"ui-grid-col-6\">\n            <input\n              pInputText \n              type=\"text\"\n              formControlName=\"firstName\"\n              [(ngModel)]=\"client.firstName\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n        </div>\n        <!--LASTNAME Input-->\n      <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            Last Name:\n          </div>\n          <div class=\"ui-grid-col-6\">\n            <input\n              pInputText \n              type=\"text\"\n              formControlName=\"lastName\"\n              [(ngModel)]=\"client.lastName\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n        </div>\n        <!--STREET Input-->\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\n          <div class=\"ui-grid-col-2\">\n            Street:\n          </div>\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\n            <input\n              pInputText \n              type=\"text\"\n              formControlName=\"street\"\n              [(ngModel)]=\"client.contact.address.street\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n        </div>\n        <!--STREET2 Input-->\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\n          <div class=\"ui-grid-col-2\">\n            Street 2 (<span style=\"font-style: italic;\">Apt, Suite, ...</span>):\n          </div>\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\n            <input\n              pInputText \n              type=\"text\"\n              formControlName=\"street2\"\n              [(ngModel)]=\"client.contact.address.street2\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n        </div>\n        <!--CITY Input-->\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\n          <div class=\"ui-grid-col-2\">\n            City:\n          </div>\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\n            <input\n              pInputText \n              type=\"text\"\n              formControlName=\"city\"\n              [(ngModel)]=\"client.contact.address.city\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n        </div>\n        <!--STATE Input-->\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\n          <div class=\"ui-grid-col-2\">\n            State:\n          </div>\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\n            <p-dropdown\n              [options]=\"states\"\n              formControlName=\"state\"\n              [(ngModel)]=\"client.contact.address.state\"\n              placeholder=\"Select a state\"\n              filter=\"filter\"\n              [style]=\"{'width':'35%'}\"\n            >\n            </p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n        </div>\n        <!--ZIP Input-->\n      <div class=\"ui-grid-row\" formGroupName=\"contact\">\n          <div class=\"ui-grid-col-2\">\n            Zipcode:\n          </div>\n          <div class=\"ui-grid-col-6\" formGroupName=\"address\">\n            <p-inputMask\n              [(ngModel)]=\"client.contact.address.zip\"\n              type=\"text\"\n              formControlName=\"zip\"\n              placeholder=\"99999\"\n              mask=\"99999\"\n            >\n            </p-inputMask>\n          </div>\n          <div class=\"ui-grid-col-4\">\n            <div \n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\n              *ngIf=\"!clientForm.controls.contact.controls.address.controls['zip'].valid &&\n                      clientForm.controls.contact.controls.address.controls['zip'].dirty\" \n            >\n              <i class=\"fa fa-close\"></i>\n              <span *ngIf=\"clientForm.controls.contact.controls.address.controls['zip'].errors['required']\">Must enter a valid zipcode</span>\n            </div>\n          </div>\n        </div>\n        <!--PHONE Input-->\n      <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            Phone:\n          </div>\n          <div class=\"ui-grid-col-6\" formGroupName=\"contact\">\n            <p-inputMask\n              [(ngModel)]=\"client.contact.phone\"\n              type=\"text\"\n              formControlName=\"phone\"\n              placeholder=\"999-999-9999\"\n              mask=\"999-999-9999\"\n            >\n            </p-inputMask>\n          </div>\n          <div class=\"ui-grid-col-4\">\n            <div \n              class=\"ui-messages ui-messages-error ui-corner-all animated bounceInLeft\"\n              *ngIf=\"!clientForm.controls.contact.controls['phone'].valid && clientForm.controls.contact.controls['phone'].dirty\"\n            >\n              <i class=\"fa fa-close\"></i>\n              <span *ngIf=\"clientForm.controls.contact.controls['phone'].errors['pattern']\">Must enter a valid phone number</span>\n            </div>\n          </div>\n        </div>\n        <!--BALANCE Input-->\n      <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            Balance:\n          </div>\n          <div class=\"ui-grid-col-6\">\n            <input\n              pInputText \n              type=\"number\"\n              formControlName=\"balance\"\n              [(ngModel)]=\"client.balance\"\n            >\n          </div>\n          <div class=\"ui-grid-col-4\">\n          </div>\n      </div>\n      <!--SUBMIT Button-->\n      <div class=\"ui-grid-row\">\n        <div class=\"ui-grid-col-2\"></div>\n        <div class=\"ui-grid-col-6\">\n          <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!clientForm.valid\"></button>\n        </div>\n      </div>\n    </div><!--UI Grid ends-->\n  </p-panel>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\n  display: block;\n  margin: 0;\n  padding: 3px; }\n\ninput.ui-inputtext.ng-dirty.ng-invalid {\n  border-bottom-color: transparent;\n  border-color: red;\n  box-shadow: -1px 0px 20px 0px rgba(159, 60, 50, 0.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(fB, authService, clientService, router, flashMessagesService) {
        this.fB = fB;
        this.authService = authService;
        this.clientService = clientService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.client = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            contact: {
                address: {
                    street: '',
                    street2: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                phone: ''
            },
            balance: 0,
            _id: '',
            role: ''
        };
        this.states = [];
        this.registerMessages = [];
        this.emailRegex = "[^ @]*@[^ @]*";
        this.phoneRegex = "[1-9]{3}-[0-9]{3}-[0-9]{4}";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.clientForm = this.fB.group({
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(this.emailRegex)
            ])),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)
            ])),
            'contact': this.fB.group({
                'address': this.fB.group({
                    'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'street2': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
                    'zip': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
                }),
                'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(this.phoneRegex)
                ]))
            }),
            'balance': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: 0, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
        console.log(this.clientForm.value);
        this.states = [];
        this.states.push({ label: 'Alabama', value: 'AL' });
        this.states.push({ label: 'Alaska', value: 'AK' });
        this.states.push({ label: 'Arizona', value: 'AZ' });
        this.states.push({ label: 'Arkansas', value: 'AR' });
        this.states.push({ label: 'California', value: 'CA' });
        this.states.push({ label: 'Colorado', value: 'CO' });
        this.states.push({ label: 'Connecticut', value: 'CT' });
        this.states.push({ label: 'Delaware', value: 'DE' });
        this.states.push({ label: 'Florida', value: 'FL' });
        this.states.push({ label: 'Georgia', value: 'GA' });
        this.states.push({ label: 'Hawaii', value: 'HI' });
        this.states.push({ label: 'Idaho', value: 'ID' });
        this.states.push({ label: 'Illinois', value: 'IL' });
        this.states.push({ label: 'Indiana', value: 'IN' });
        this.states.push({ label: 'Iowa', value: 'IA' });
        this.states.push({ label: 'Kansas', value: 'KS' });
        this.states.push({ label: 'Kentucky', value: 'KY' });
        this.states.push({ label: 'Louisiana', value: 'LA' });
        this.states.push({ label: 'Maine', value: 'ME' });
        this.states.push({ label: 'Maryland', value: 'MD' });
        this.states.push({ label: 'Massachusetts', value: 'MA' });
        this.states.push({ label: 'Michigan', value: 'MI' });
        this.states.push({ label: 'Minnesota', value: 'MN' });
        this.states.push({ label: 'Mississippi', value: 'MS' });
        this.states.push({ label: 'Missouri', value: 'MO' });
        this.states.push({ label: 'Montana', value: 'MT' });
        this.states.push({ label: 'Nebraska', value: 'NE' });
        this.states.push({ label: 'Nevada', value: 'NV' });
        this.states.push({ label: 'New Hampshire', value: 'NH' });
        this.states.push({ label: 'New Jersey', value: 'NJ' });
        this.states.push({ label: 'New Mexico', value: 'NM' });
        this.states.push({ label: 'New York', value: 'NY' });
        this.states.push({ label: 'North Carolina', value: 'NC' });
        this.states.push({ label: 'North Dakota', value: 'ND' });
        this.states.push({ label: 'Ohio', value: 'OH' });
        this.states.push({ label: 'Oklahoma', value: 'OK' });
        this.states.push({ label: 'Oregon', value: 'OR' });
        this.states.push({ label: 'Pennsylvania', value: 'PA' });
        this.states.push({ label: 'Rhode Island', value: 'RI' });
        this.states.push({ label: 'South Carolina', value: 'SC' });
        this.states.push({ label: 'South Dakota', value: 'SD' });
        this.states.push({ label: 'Tennessee', value: 'TN' });
        this.states.push({ label: 'Texas', value: 'TX' });
        this.states.push({ label: 'Utah', value: 'UT' });
        this.states.push({ label: 'Vermont', value: 'VT' });
        this.states.push({ label: 'Virginia', value: 'VA' });
        this.states.push({ label: 'Washington', value: 'WA' });
        this.states.push({ label: 'West Virginia', value: 'WV' });
        this.states.push({ label: 'Wisconsin', value: 'WI' });
        this.states.push({ label: 'Wyoming', value: 'WY' });
        this.states.push({ label: 'District of Columbia', value: 'DC' });
    };
    RegisterComponent.prototype.onAddSubmit = function (value) {
        var _this = this;
        value.balance = 0;
        this.client = value;
        console.log(this.client);
        this.clientService.addClient(this.client).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<button \n  pButton \n  type=\"button\" \n  class=\"ui-button-success\" \n  icon=\"fa-users\" \n  iconPos=\"left\" \n  label=\"View Clients\" \n  (click)=\"onViewClientsClick()\" \n  id=\"viewClientsButton\"\n>\n</button>\n<button \n  pButton \n  type=\"button\" \n  class=\"ui-button-success\" \n  icon=\"fa-product-hunt\" \n  iconPos=\"left\" \n  label=\"View Products\" \n  (click)=\"onViewProductsClick()\" \n  id=\"viewProductsButton\"\n>\n</button>\n<button \n  pButton \n  type=\"button\" \n  class=\"ui-button-success\" \n  icon=\"fa-book\" \n  iconPos=\"left\" \n  label=\"View Orders\" \n  (click)=\"onViewOrdersClick()\" \n  id=\"viewOrdersButton\"\n>\n</button>\n<button \n  pButton \n  type=\"button\" \n  class=\"ui-button-success\" \n  icon=\"fa-refresh\" \n  iconPos=\"left\" \n  label=\"View Vendor Orders\" \n  (click)=\"onViewVendorOrdersClick()\" \n  id=\"viewVendorOrdersButton\"\n>\n</button>\n<button \n  pButton \n  type=\"button\" \n  class=\"ui-button-success\" \n  icon=\"fa-chevron-down\" \n  iconPos=\"left\" \n  label=\"View Coupons\" \n  (click)=\"onViewCouponsClick()\" \n  id=\"viewCouponsButton\"\n>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.onViewClientsClick = function () {
        this.router.navigate(['/clients']);
    };
    SidebarComponent.prototype.onViewProductsClick = function () {
        this.router.navigate(['/products']);
    };
    SidebarComponent.prototype.onViewOrdersClick = function () {
        this.router.navigate(['/client-orders']);
    };
    SidebarComponent.prototype.onViewVendorOrdersClick = function () {
        this.router.navigate(['/vendor-orders']);
    };
    SidebarComponent.prototype.onViewCouponsClick = function () {
        this.router.navigate(['/coupons']);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vendor-order-detail/vendor-order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-6\">\r\n    <button \r\n      pButton \r\n      type=\"button\" \r\n      class=\"ui-button-info\" \r\n      label=\"Back To Vendor Orders\" \r\n      icon=\"fa-arrow-circle-o-left\" \r\n      iconPos=\"left\" \r\n      (click)=\"onClick()\"\r\n    >\r\n    </button>\r\n  </div>\r\n  <div class=\"ui-g-6 ui-rtl\" dir=\"rtl\">\r\n  </div>\r\n</div>\r\n\r\n  <!-- Vendor Order Detail -->\r\n  <div *ngIf=\"vendorOrder\">\r\n    <p-panel styleClass=\"vendorOrderDetailPanel\">\r\n      <p-header>\r\n        <h3 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{vendorOrder.vendorOrderNumber}}</h3>\r\n      </p-header>\r\n      <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-4 ui-sm-12\">\r\n            <h4 style=\"margin-top: 10px\">Total products: {{vendorOrder.vendorOrderDetails.length}}</h4>\r\n          </div>\r\n          <div class=\"ui-g-8 ui-sm-12\">\r\n            <h3 class=\"pull-right text-muted\">\r\n              Order Balance: {{vendorOrder.vendorOrderBalance | currency:'USD':true}}\r\n            </h3>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <p-panel header=\"Vendor Order Details\">\r\n            <p-dataTable\r\n              [value]=\"vendorOrder.vendorOrderDetails\"\r\n              [responsive]=\"true\"\r\n              styleClass=\"vendorOrderDetailsTable\"\r\n            >\r\n              <p-column field=\"product.productNumber\" header=\"Prod. Number\" [style]=\"{'width':'12%'}\"></p-column>\r\n              <p-column field=\"product.productDetails.name\" header=\"Prod. Name\"></p-column>\r\n              <p-column header=\"Prod. Price\" [style]=\"{'width':'12%'}\">\r\n                <ng-template let-col let-item=\"rowData\"  pTemplate='body'>\r\n                  <span>{{item.product.productBuyPrice | currency:'USD':true}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"quantity\" header=\"Quantity\" [style]=\"{'width':'10%'}\"></p-column>\r\n              <p-column header=\"Sub Total\" [style]=\"{'width':'12%'}\">\r\n                <ng-template let-col let-item=\"rowData\" pTemplate='body' >\r\n                  <span>{{item.product.productBuyPrice * item.quantity | currency:'USD':true}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"Show Details\" [style]=\"{'width':'12%'}\">\r\n                <ng-template pTemplate=\"body\" let-col let-item=\"rowData\">\r\n                  <button \r\n                    pButton\r\n                    type=\"button\"\r\n                    icon=\"fa-search\"\r\n                    class=\"ui-button-secondary\"\r\n                    data-toggle=\"modal\" \r\n                    data-target=\"#detailModal\"\r\n                    (click)=\"onShowDetailsClick(item)\"\r\n                  >\r\n                  </button>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </p-panel>\r\n        </div>\r\n      </div>\r\n  \r\n      <p-footer></p-footer>\r\n    </p-panel>\r\n  </div>\r\n  \r\n  <!-- Product Detail Modal -->\r\n  <div class=\"modal fade\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\" id=\"modalContent\">\r\n        <div class=\"modal-header\" id=\"modalHeader\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Product Detail</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n              <div *ngIf=\"product\" class=\"ui-grid ui-grid-responsive ui-grid-pad\">\r\n                  <div class=\"ui-g\">\r\n                      <p-panel>\r\n                        <p-header>\r\n                          <h4 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{product.productNumber}}</h4>\r\n                        </p-header>\r\n                        <div class=\"ui-g\">\r\n                          <div class=\"ui-g-6\"><h4 style=\"margin-top: 10px\">{{product.productDetails.name}}</h4></div>\r\n                          <div class=\"ui-g-6 ui-rtl text-muted\" dir=\"rtl\">\r\n                            <h3>Unit Price: {{product.productSellPrice | currency:'USD':true}}</h3>\r\n                            <h3>Vendor Price: {{product.productBuyPrice | currency:'USD':true}}</h3>\r\n                          </div>\r\n                          <div class=\"ui-g-12\" style=\"text-align: center;\"><img src=\"{{product.productDetails.image}}\" width=\"400px\" height=\"400px\"></div>\r\n                          <div class=\"ui-g-12\">\r\n                            <p>{{product.productDetails.description}}</p>\r\n                          </div>\r\n                        </div>\r\n                      </p-panel>\r\n                  </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"modal-footer\" id=\"modalFooter\">\r\n          <button pButton type=\"button\" label=\"Close\" icon=\"fa-close\" class=\"ui-button-secondary\" data-dismiss=\"modal\"></button>\r\n          <span>\r\n            <button \r\n              pButton \r\n              data-dismiss=\"modal\"\r\n              type=\"button\" \r\n              label=\"Edit Product Detail\" \r\n              icon=\"fa-pencil\" \r\n              class=\"ui-button-primary\"\r\n              (click)=\"onEditProductClick()\"\r\n            >    \r\n            </button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/vendor-order-detail/vendor-order-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vendor-order-detail/vendor-order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vendor_order_service__ = __webpack_require__("../../../../../src/app/services/vendor-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorOrderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendorOrderDetailComponent = (function () {
    function VendorOrderDetailComponent(vendorOrderService, confirmationService, router, aRoute) {
        this.vendorOrderService = vendorOrderService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.aRoute = aRoute;
    }
    VendorOrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Vendor Order Number
        this.vendorOrderNumber = this.aRoute.snapshot.params['id'];
        //Get Vendor Order by Vendor Order Number
        this.vendorOrderService.getVendorOrderByVendorOrderNumber(this.vendorOrderNumber).subscribe(function (data) {
            console.log(data);
            _this.vendorOrder = data.vendorOrder;
        });
    };
    VendorOrderDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/vendor-orders']);
    };
    VendorOrderDetailComponent.prototype.onShowDetailsClick = function (item) {
        console.log(item);
        this.product = item.product;
    };
    VendorOrderDetailComponent.prototype.onEditProductClick = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/edit-product/' + _this.product.productNumber]);
        }, 1000);
    };
    return VendorOrderDetailComponent;
}());
VendorOrderDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vendor-order-detail',
        template: __webpack_require__("../../../../../src/app/components/vendor-order-detail/vendor-order-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vendor-order-detail/vendor-order-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_vendor_order_service__["a" /* VendorOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_vendor_order_service__["a" /* VendorOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _d || Object])
], VendorOrderDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vendor-order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vendor-orders/vendor-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"vendorOrderMessages\" styleClass=\"vendorOrderGrowl\"></p-growl>\r\n\r\n<div class=\"ui-g\">\r\n  <!--Vendor Orders-->\r\n    <div class=\"ui-g-6\">\r\n      <h2><i class=\"fa fa-refresh\"></i> Vendor Orders</h2>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <h5 class=\"pull-right text-muted\">Total Expenses: \r\n        <span\r\n          [class.text-success]=\"!hasExpense\"\r\n          [class.text-danger]=\"hasExpense\"\r\n        >\r\n          {{totalExpenses | currency:'USD':true}}\r\n        </span>\r\n      </h5>\r\n    </div>\r\n    <!--Vendor Orders DATA-->\r\n\r\n\r\n    <!--Confirmation Dialog -->\r\n    <p-confirmDialog header=\"Confirmation\" key=\"onRowSelect\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"vendorOrders\">\r\n      <p-dataTable\r\n        [value]=\"vendorOrders\"\r\n        [responsive]=\"true\"\r\n        selectionMode=\"single\" \r\n        [(selection)]=\"selectedVendorOrder\" \r\n        (onRowDblclick)=\"onRowSelect($event)\"\r\n        styleClass=\"vendorOrdersTable\"\r\n      >\r\n        <p-column header=\"Date\" [style]=\"{'width':'15%'}\">\r\n          <ng-template let-col let-vorder=\"rowData\" pTemplate='body'>\r\n            <span>{{vorder.vendorOrderDate | date:'short'}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"vendorOrderNumber\" header=\"ID\" [style]=\"{'width':'15%'}\"></p-column>\r\n        <p-column header=\"No. of Products\" [style]=\"{'width':'12%'}\">\r\n          <ng-template pTemplate=\"body\" let-col let-vorder=\"rowData\">\r\n            <span>{{vorder.vendorOrderDetails.length}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Total\" [style]=\"{'width':'12%'}\">\r\n          <ng-template let-col let-vorder=\"rowData\" pTemplate='body'>\r\n            <span>{{vorder.vendorOrderBalance | currency:'USD':true}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"Rec. Status\" [style]=\"{'width':'12%'}\">\r\n          <ng-template pTemplate=\"body\" let-col let-vorder=\"rowData\" let-i=\"rowIndex\">\r\n            <p-toggleButton\r\n              [(ngModel)]=\"vorder.isReceived\"\r\n              pTooltip=\"Receipt Status: Once checked, you cannot uncheck it\"\r\n              [disabled]=\"receivedCheck[i]\"\r\n              tooltipPosition=\"bottom\"\r\n              (onChange)=\"onReceivedChange(vorder, i)\"\r\n              onLabel=\"Received\"\r\n              styleClass=\"vendorOrdersReceivedToggleButton\"\r\n            >\r\n            </p-toggleButton>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-footer *ngIf=\"vendorOrders\">\r\n          Total vendor orders: {{vendorOrders.length}} \r\n        </p-footer>\r\n      </p-dataTable>\r\n    </div> <!--Vendor Orders DATA Ends-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/vendor-orders/vendor-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vendor-orders/vendor-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vendor_order_service__ = __webpack_require__("../../../../../src/app/services/vendor-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VendorOrdersComponent = (function () {
    function VendorOrdersComponent(router, vendorOrderService, productService, authService, confirmationService) {
        this.router = router;
        this.vendorOrderService = vendorOrderService;
        this.productService = productService;
        this.authService = authService;
        this.confirmationService = confirmationService;
        this.receivedCheck = [];
        this.hasExpense = false;
    }
    VendorOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get All Vendor Orders
        this.vendorOrderService.getVendorOrders().subscribe(function (data) {
            _this.vendorOrders = data.vendorOrders;
            for (var i = 0; i < _this.vendorOrders.length; i++) {
                if (_this.vendorOrders[i].isReceived) {
                    _this.receivedCheck[i] = true;
                }
            }
            _this.getTotalExpense();
        });
        //Get Role
        this.role = this.authService.currentAdmin.role;
    };
    VendorOrdersComponent.prototype.getTotalExpense = function () {
        var total = 0;
        for (var i = 0; i < this.vendorOrders.length; i++) {
            total += this.vendorOrders[i].vendorOrderBalance;
        }
        this.totalExpenses = total;
        if (this.totalExpenses > 0) {
            this.hasExpense = true;
        }
        else {
            this.hasExpense = false;
        }
    };
    VendorOrdersComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        console.log(event);
        this.confirmationService.confirm({
            message: 'View details of "' + event.data.vendorOrderNumber + '" ?',
            key: 'onRowSelect',
            accept: function () {
                _this.router.navigate(['/vendor-order-detail/' + event.data.vendorOrderNumber]);
            }
        });
    };
    VendorOrdersComponent.prototype.onReceivedChange = function (vendorOrder, i) {
        var _this = this;
        console.log(vendorOrder, i);
        setTimeout(function () {
            _this.receivedCheck[i] = true;
            _this.vendorOrderMessages = [];
            _this.vendorOrderMessages.push({
                severity: 'info',
                summary: 'Success',
                detail: 'Order ' + vendorOrder.vendorOrderNumber + ' is set to Delivered'
            });
        }, 1000);
        var orderQuantity = 0;
        var productId = '';
        vendorOrder.vendorOrderDetails.forEach(function (orderLine) {
            orderQuantity = orderLine.quantity;
            productId = orderLine.product._id;
            _this.productService.updateProductInstock(productId, orderQuantity).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                }
            });
        });
        var receivedStatus = vendorOrder.isReceived;
        var orderId = vendorOrder._id;
        this.vendorOrderService.updateReceivedStatus(orderId, receivedStatus).subscribe(function (data) {
            if (data.success) {
                console.log(data);
            }
        });
    };
    return VendorOrdersComponent;
}());
VendorOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vendor-orders',
        template: __webpack_require__("../../../../../src/app/components/vendor-orders/vendor-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vendor-orders/vendor-orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_vendor_order_service__["a" /* VendorOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_vendor_order_service__["a" /* VendorOrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object])
], VendorOrdersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vendor-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = (function () {
    function AdminGuard(authService, clientService, router) {
        this.authService = authService;
        this.clientService = clientService;
        this.router = router;
        if (this.authService.currentAdmin) {
            this.role = this.authService.currentAdmin.role;
        }
        else if (this.clientService.currentClient) {
            this.role = this.clientService.currentClient.role;
        }
        console.log(this.role);
    }
    AdminGuard.prototype.ngOnInit = function () {
    };
    AdminGuard.prototype.canActivate = function () {
        if (this.role == 'Admin') {
            return true;
        }
        else if (this.role == 'Client') {
            this.router.navigate(['/dashboard/' + this.role + '/' + this.clientService.currentClient._id]);
            return false;
        }
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
], AdminGuard);

var _a, _b, _c;
//# sourceMappingURL=admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, clientService) {
        this.authService = authService;
        this.router = router;
        this.clientService = clientService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn() || this.clientService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGuard = (function () {
    function LoginGuard(authService, router, clientService) {
        this.authService = authService;
        this.router = router;
        this.clientService = clientService;
    }
    LoginGuard.prototype.canActivate = function () {
        // return !this.authService.isLoggedIn() || !this.clientService.isLoggedIn();
        if (this.authService.isLoggedIn()) {
            console.log('logged in', this.authService.isLoggedIn());
            if (this.authService.currentAdmin) {
                this.router.navigate(['/dashboard/' + this.authService.currentAdmin.role + '/' + this.authService.currentAdmin._id]);
            }
            else if (this.clientService.currentClient) {
                this.router.navigate(['/dashboard/' + this.clientService.currentClient.role + '/' + this.clientService.currentClient._id]);
            }
            return false;
        }
        else {
            console.log('not logged in');
            return true;
        }
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object])
], LoginGuard);

var _a, _b, _c;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityService = (function () {
    function ActivityService(httpService) {
        this.httpService = httpService;
    }
    ActivityService.prototype.getActivities = function () {
        return this.httpService.get('/activities/getActivity', {});
    };
    ActivityService.prototype.updateRevenue = function (id, revenue) {
        var body = { revenue: revenue };
        return this.httpService.put('/activities/updateRevenue/' + id, body, { 'Content-Type': 'application/json' });
    };
    ActivityService.prototype.updateExpense = function (id, expense) {
        var body = { expense: expense };
        return this.httpService.put('/activities/updateExpense/' + id, body, { 'Content-Type': 'application/json' });
    };
    return ActivityService;
}());
ActivityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ActivityService);

var _a;
//# sourceMappingURL=activity.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(httpService, localStorageService) {
        this.httpService = httpService;
        this.localStorageService = localStorageService;
    }
    AuthService.prototype.authenticateAdmin = function (admin) {
        return this.httpService.post('/admins/authenticate', admin, { 'Content-Type': 'application/json' });
    };
    AuthService.prototype.getAdminProfile = function () {
        this.loadToken();
        this.loadCurrentAdmin();
        return this.httpService.get('/admins/profile', { 'Authorization': this.authToken });
    };
    AuthService.prototype.storeAdminData = function (token, admin) {
        this.localStorageService.saveValueWithKey('id_token', token);
        this.localStorageService.saveValueWithKey('admin', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = this.localStorageService.fetchValueFromKey('id_token');
    };
    AuthService.prototype.loadCurrentAdmin = function () {
        return this.currentAdmin = JSON.parse(this.localStorageService.fetchValueFromKey('admin'));
    };
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.admin = null;
        this.currentAdmin = null;
        this.localStorageService.clearAll();
    };
    AuthService.prototype.changePassword = function (admin, candidatePassword, newPassword) {
        var data = { admin: admin, candidatePassword: candidatePassword, newPassword: newPassword };
        return this.httpService.put('/admins/password', data, { 'Content-Type': 'application/json' });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    CartService.prototype.initCart = function () {
        if (!this.localStorageService.fetchValueFromKey('cart')) {
            var emptyMap = {};
            this.localStorageService.saveValueWithKey('cart', JSON.stringify(emptyMap));
        }
    };
    CartService.prototype.saveListOfCartEntries = function (listOfCartEntries) {
        var cartMap = listOfCartEntries.reduce(function (map, cartEntry, i) {
            map[cartEntry.product.productNumber] = cartEntry;
            return map;
        }, {});
        this.localStorageService.saveValueWithKey('cart', JSON.stringify(cartMap));
    };
    CartService.prototype.getCartEntryByProductProductNumber = function (productNumber) {
        var myCartMap = JSON.parse(this.localStorageService.fetchValueFromKey('cart'));
        return Promise.resolve(myCartMap[productNumber]);
    };
    CartService.prototype.addProductToCart = function (product, quantity) {
        if (quantity == undefined) {
            quantity = 1;
        }
        var cartMap = JSON.parse(this.localStorageService.fetchValueFromKey('cart'));
        if (cartMap[product.productNumber] != undefined) {
            var cartInstance = cartMap[product.productNumber];
            cartInstance.quantity = cartInstance.quantity + quantity;
            cartMap[product.productNumber] = cartInstance;
        }
        else {
            cartMap[product.productNumber] = {
                'product': product,
                'quantity': quantity
            };
        }
        this.localStorageService.saveValueWithKey('cart', JSON.stringify(cartMap));
    };
    CartService.prototype.getAllCartEntries = function () {
        var myCartMap = JSON.parse(this.localStorageService.fetchValueFromKey('cart'));
        var cartEntries = [];
        for (var key in myCartMap) {
            if (myCartMap[key].quantity > myCartMap[key].product.inStock) {
                myCartMap[key].backOrder = true;
            }
            var value = myCartMap[key];
            cartEntries.push(value);
        }
        return Promise.resolve(cartEntries);
    };
    CartService.prototype.genCartId = function () {
        var id = '';
        var identifier = 'MEC';
        var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++) {
            id += possibleChars.charAt(Math.random() * possibleChars.length);
        }
        id = identifier + "-" + id;
        console.log(id);
        return id;
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientService = (function () {
    function ClientService(httpService, localStorageService) {
        this.httpService = httpService;
        this.localStorageService = localStorageService;
        this.clients = [];
    }
    ClientService.prototype.addClient = function (client) {
        return this.httpService.post('/clients/addClient', client, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.authenticateClient = function (client) {
        return this.httpService.post('/clients/authenticateClient', client, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.getClientProfile = function () {
        this.loadToken();
        this.loadCurrentClient();
        return this.httpService.get('/clients/profile', { 'Authorization': this.authToken });
    };
    ClientService.prototype.storeClientData = function (token, client) {
        this.localStorageService.saveValueWithKey('id_token', token);
        this.localStorageService.saveValueWithKey('client', JSON.stringify(client));
        this.authToken = token;
        this.client = client;
    };
    ClientService.prototype.loadToken = function () {
        this.authToken = this.localStorageService.fetchValueFromKey('id_token');
    };
    ClientService.prototype.loadCurrentClient = function () {
        return this.currentClient = JSON.parse(this.localStorageService.fetchValueFromKey('client'));
    };
    ClientService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    ClientService.prototype.logout = function () {
        this.authToken = null;
        this.client = null;
        this.currentClient = null;
        this.localStorageService.clearAll();
    };
    ClientService.prototype.changePassword = function (client, candidatePassword, newPassword) {
        var data = { client: client, candidatePassword: candidatePassword, newPassword: newPassword };
        return this.httpService.put('/clients/password', data, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.getClients = function () {
        return this.httpService.get('/clients/clients', {});
    };
    ClientService.prototype.getClientById = function (id) {
        return this.httpService.get('/clients/client/' + id, {});
    };
    ClientService.prototype.updateClient = function (id, client) {
        console.log(client);
        return this.httpService.put('/clients/update/' + id, client, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.updateBalance = function (id, balance) {
        var body = { balance: balance };
        return this.httpService.put('/clients/balanceUpdate/' + id, body, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.httpService.delete('/clients/delete/' + id, {});
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
], ClientService);

var _a, _b;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/coupon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CouponService = (function () {
    function CouponService(httpService) {
        this.httpService = httpService;
    }
    CouponService.prototype.getCoupons = function () {
        return this.httpService.get('/coupons/coupons', {});
    };
    CouponService.prototype.addCoupon = function (coupon) {
        return this.httpService.post('/coupons/addCoupon', coupon, { 'Content-Type': 'application/json' });
    };
    CouponService.prototype.updateCouponStatus = function (id, coupon) {
        return this.httpService.put('/coupons/updateCoupon/' + id, coupon, { 'Content-Type': 'application/json' });
    };
    CouponService.prototype.getCouponById = function (id) {
        return this.httpService.get('/coupons/coupon/' + id, {});
    };
    CouponService.prototype.deleteCoupon = function (id) {
        return this.httpService.delete('/coupons/deleteCoupon/' + id, {});
    };
    return CouponService;
}());
CouponService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], CouponService);

var _a;
//# sourceMappingURL=coupon.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = HttpService_1 = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (endpoint, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.get(HttpService_1.url + endpoint, options)
            .map(function (res) {
            return res.json();
        });
    };
    ;
    HttpService.prototype.post = function (endpoint, body, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        console.log(HttpService_1.url + endpoint);
        return this.http.post(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HttpService.prototype.put = function (endpoint, body, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.put(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HttpService.prototype.delete = function (endpoint, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.delete(HttpService_1.url + endpoint, options)
            .map(function (res) {
            return res.json();
        });
    };
    return HttpService;
}());
HttpService.host = "localhost";
HttpService.port = 8080;
HttpService.domain = "me-commerce.herokuapp.com";
//   public static url = "http://" + HttpService.host + ":" + HttpService.port;  
HttpService.url = "https://" + HttpService_1.domain;
HttpService = HttpService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], HttpService);

var HttpService_1, _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.saveValueWithKey = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.fetchValueFromKey = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.deleteValueWithKey = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clearAll = function () {
        localStorage.clear();
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(httpService) {
        this.httpService = httpService;
    }
    OrderService.prototype.saveOrder = function (cartEntry, orderId, userId, subTotal) {
        var body = { cartEntry: cartEntry, orderId: orderId, userId: userId, subTotal: subTotal };
        return this.httpService.post('/orders/saveOrder', body, { 'Content-Type': 'application/json' });
    };
    OrderService.prototype.getOrders = function () {
        return this.httpService.get('/orders/orders', {});
    };
    OrderService.prototype.getOrdersByUserId = function (userId) {
        return this.httpService.get('/orders/orders/' + userId, {});
    };
    OrderService.prototype.getOrderByOrderNumber = function (orderNumber) {
        return this.httpService.get('/orders/order/' + orderNumber, {});
    };
    OrderService.prototype.updateDeliveredStatus = function (id, deliveredStatus) {
        var body = { deliveredStatus: deliveredStatus };
        return this.httpService.put('/orders/updateDelivery/' + id, body, { 'Content-Type': 'application/json' });
    };
    OrderService.prototype.updatePaidStatus = function (id, paidStatus) {
        var body = { paidStatus: paidStatus };
        return this.httpService.put('/orders/updatePayment/' + id, body, { 'Content-Type': 'application/json' });
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(httpService) {
        this.httpService = httpService;
    }
    ProductService.prototype.addProduct = function (product) {
        return this.httpService.post('/products/addProduct', product, { 'Content-Type': 'application/json' });
    };
    ProductService.prototype.getProducts = function () {
        return this.httpService.get('/products/products', {});
    };
    ProductService.prototype.getProductByProductNumber = function (id) {
        return this.httpService.get('/products/product/' + id, {});
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.httpService.delete('/products/delete/' + id, {});
    };
    ProductService.prototype.updateProduct = function (id, product) {
        console.log(product);
        return this.httpService.put('/products/edit/' + id, product, { 'Content-Type': 'application/json' });
    };
    ProductService.prototype.updateProductInstock = function (id, quantity) {
        console.log(id, quantity);
        var body = { quantity: quantity };
        return this.httpService.put('/products/editInstock/' + id, body, { 'Content-Type': 'application/json' });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/vendor-order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorOrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendorOrderService = (function () {
    function VendorOrderService(httpService) {
        this.httpService = httpService;
    }
    VendorOrderService.prototype.saveVendorOrder = function (cartEntry, vendorOrderId, subTotal) {
        var body = { cartEntry: cartEntry, vendorOrderId: vendorOrderId, subTotal: subTotal };
        return this.httpService.post('/vendor-orders/saveOrder', body, { 'Content-Type': 'application/json' });
    };
    VendorOrderService.prototype.getVendorOrders = function () {
        return this.httpService.get('/vendor-orders/orders', {});
    };
    VendorOrderService.prototype.getVendorOrderByVendorOrderNumber = function (vendorOrderNumber) {
        return this.httpService.get('/vendor-orders/order/' + vendorOrderNumber, {});
    };
    VendorOrderService.prototype.updateReceivedStatus = function (id, receivedStatus) {
        var body = { receivedStatus: receivedStatus };
        return this.httpService.put('/vendor-orders/updateReceipt/' + id, body, { 'Content-Type': 'application/json' });
    };
    return VendorOrderService;
}());
VendorOrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], VendorOrderService);

var _a;
//# sourceMappingURL=vendor-order.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map