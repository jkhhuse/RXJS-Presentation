(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"什么是RxJs\">\n    <app-wir></app-wir>\n  </mat-tab>\n  <mat-tab label=\"为何选择Reactive Programming\">\n   <app-crp></app-crp>\n  </mat-tab>\n  <mat-tab label=\"实现双击事件\">\n  <app-dbc></app-dbc>\n  </mat-tab>\n  <mat-tab label=\"什么是Rxjs\">\n\n  </mat-tab>\n  <mat-tab label=\"什么是Rxjs\">\n\n  </mat-tab>\n  <mat-tab label=\"什么是Rxjs\">\n\n  </mat-tab>\n  <mat-tab label=\"什么是Rxjs\">\n\n  </mat-tab>\n  <mat-tab label=\"什么是Rxjs\">\n\n  </mat-tab>\n</mat-tab-group>\n\n\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _crp_crp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crp/crp.component */ "./src/app/crp/crp.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _wir_wir_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wir/wir.component */ "./src/app/wir/wir.component.ts");
/* harmony import */ var _dbc_dbc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dbc/dbc.component */ "./src/app/dbc/dbc.component.ts");
/* harmony import */ var _util_double_click_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/double-click.directive */ "./src/app/util/double-click.directive.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _crp_crp_component__WEBPACK_IMPORTED_MODULE_3__["CrpComponent"],
                _wir_wir_component__WEBPACK_IMPORTED_MODULE_9__["WirComponent"],
                _dbc_dbc_component__WEBPACK_IMPORTED_MODULE_10__["DbcComponent"],
                _util_double_click_directive__WEBPACK_IMPORTED_MODULE_11__["DoubleClickDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/crp/crp.component.css":
/*!***************************************!*\
  !*** ./src/app/crp/crp.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result {\n  width: 30%;\n  height: 500px;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-content: flex-start;\n}\n\n.result-value {\n  border-radius: 3px;\n  border: 1px solid gray;\n  margin-top: 20px;\n  width: 150px;\n  margin-left: 40px;\n}\n\n.explanation{\n  width: 70%;\n  height: 500px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JwL2NycC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NycC9jcnAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnJlc3VsdC12YWx1ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmV4cGxhbmF0aW9ue1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/crp/crp.component.html":
/*!****************************************!*\
  !*** ./src/app/crp/crp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"result\">\n    <div class=\"result-value\">Value of A is {{valueC$ | async}}</div>\n    <div class=\"result-value\">Value of B is {{valueD$ | async}}</div>\n    <div style=\"width: 250px; margin-top: 20px\">😇B 的值总是等于 A的值 * 10😇</div>\n  </div>\n  <div class=\"explanation\">\n    <markdown ngPreserveWhitespaces>\n      ## 为何使用Reactive Programming\n      ### 允许在声明阶段动态地定义变量\n\n      ```javascript\n      var a = 3;\n      var b = 10 * a;\n      console.log(b);\n\n      var a = 4;\n      console.log(b)\n      ```\n\n      - 当a发生变化时b的值并不会发生变化\n\n      _这不是所期待的动态定义变量_\n\n      ### 使用Reactive的方式实现\n\n      ```javascript\n      var streamA = of(3);\n      var streamB = streamA.pipe(map(a =>  10 * a));\n      // streamA = streamA.set(4);\n      // 在此处对streamA进行修改并不符合 在声明阶段动态地的原则😡\n      // 直接在变量的声明阶段保持动态才是我们希望实现的😎\n      // var streamA = of(3, 4, 5);\n      streamB.subscribe(b => console.log(b));\n      ```\n    </markdown>\n    <markdown ngPreserveWhitespaces>\n      ### 使用Reactive的概念利用Stream去实现🤩\n      ```javascript\n      this.valueC$ = interval(2000).pipe(take(10));\n      this.valueD$ = this.valueC$.pipe(\n      map((a: number) => 10 * a)\n      );\n      ```\n      - 虽然在这里我们仅仅使用简单的事件流进行处理\n      - 需要着眼的并不是在本例子中创建了什么样的流\n      - 而是使用了Reactive的event Stream的概念\n\n      _我们再来一个复杂一些的流的例子🧐_\n    </markdown>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/crp/crp.component.ts":
/*!**************************************!*\
  !*** ./src/app/crp/crp.component.ts ***!
  \**************************************/
/*! exports provided: CrpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrpComponent", function() { return CrpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrpComponent = /** @class */ (function () {
    function CrpComponent() {
    }
    CrpComponent.prototype.ngOnInit = function () {
        this.valueA$ = Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(3, 4, 5);
        this.valueB$ = this.valueA$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return 10 * a; }));
        this.subscription1 = this.valueB$.subscribe(function (b) {
            console.log('the value of b is' + b);
        });
        this.valueC$ = Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(10));
        this.valueD$ = this.valueC$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (a) { return 10 * a; }));
    };
    CrpComponent.prototype.ngOnDestroy = function () {
        this.subscription1.unsubscribe();
    };
    CrpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crp',
            template: __webpack_require__(/*! ./crp.component.html */ "./src/app/crp/crp.component.html"),
            styles: [__webpack_require__(/*! ./crp.component.css */ "./src/app/crp/crp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrpComponent);
    return CrpComponent;
}());



/***/ }),

/***/ "./src/app/dbc/dbc.component.css":
/*!***************************************!*\
  !*** ./src/app/dbc/dbc.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-content: space-around;\n}\n.action {\n  width: 50%;\n}\n.explanation {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGJjL2RiYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvZGJjL2RiYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYWN0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5leHBsYW5hdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dbc/dbc.component.html":
/*!****************************************!*\
  !*** ./src/app/dbc/dbc.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"action\">\n    <h4>使用Angular指令实现对双击事件的监控🦊</h4>\n    <button appDoubleClick mat-button color=\"warn\">点击我</button>\n    <div>\n      <h4>使用Rxjs指令实现对双击和单击事件的监控🦋</h4>\n      <button #button mat-button color=\"warn\" (click)=\"clickEvent()\">双击我</button>\n      <br>\n      <mat-chip-list>\n        <mat-chip>{{label}}</mat-chip>\n      </mat-chip-list>\n    </div>\n  </div>\n  <div class=\"explanation\">\n    <markdown ngPreserveWhitespaces>\n      ## 封装好的Angular双击事件订阅实现🌭\n      - 在Angular中有订阅双击事件可能有很多用途\n      - 在此仅以指令中的用法举例\n      ```typescript\n      import {{ '{' }} Directive, HostListener } from '@angular/core';\n\n      @Directive({{ '{' }}\n      selector: '[appDoubleClick]'\n      })\n      export class DoubleClickDirective {{ '{' }}\n      constructor(){{ '{' }} }\n\n      @HostListener('dblclick') onDoubleClicked(){{ '{' }}\n      console.log('onDoubleClicked ran!');\n      }\n\n      }\n      ```\n\n      ```html\n      <button appDoubleClick mat-button color=\"warn\">点击我</button>\n      ```\n      ## 开箱的rxjs双击事件订阅实现🍔\n\n      - 假设存在需求: 根据用户单击和双击分别触发异步方法，简单来说\n      1. 单击时记录触发单击事件\n      2. 双击时记录触发双击事件\n      3. 根据可能的需求只记录触发双击的事件\n\n      ```typescript\n      // 根据什么时间决定用户进行了双击操作\n      doubleClickDuration = 250;\n      // 获取模板中button的引用\n      @ViewChild('button', {{ '{' }}read: ElementRef})\n      button: ElementRef;\n      leftClick$: any;\n      label: string;\n      clickEvent() {{ '{' }}\n      // 从按钮点击事件中创建事件流\n      this.leftClick$ = fromEvent(this.button.nativeElement, 'click')\n        .pipe(\n        // 只选取左键点击的事件\n          filter((event: any) => event.button === 0)\n        );\n        // 对事件进行debounce处理保证在规定时间内触发过一次\n      const debounce$ = this.leftClick$\n        .pipe(debounceTime(this.doubleClickDuration));\n        // 确保事件在两次点击后终止\n      const clickLimit$ = this.leftClick$\n        .pipe(\n          bufferCount(2),\n        );\n      const bufferGate$ = race(debounce$, clickLimit$).pipe(\n      // 对于系列事件只保留第一个事件之后重启事件流\n        first(),\n        repeat(),\n      )\n      // 业务逻辑实现，根据用户点击决定buffer的次数(length)\n      this.leftClick$.pipe(\n        buffer(bufferGate$),\n        // Here we map the buffered events into the length of the buffer\n        // If the user clicked once, the buffer is 1. If he clicked twice it is 2\n        map((clicks: any) => clicks.length),\n        filter(length =>  length === 2)\n      ).subscribe(clicks => {{ '{' }}\n      console.log('double clicked');\n      this.label = 'double clicked';\n      });\n      }\n      ```\n    </markdown>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dbc/dbc.component.ts":
/*!**************************************!*\
  !*** ./src/app/dbc/dbc.component.ts ***!
  \**************************************/
/*! exports provided: DbcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbcComponent", function() { return DbcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbcComponent = /** @class */ (function () {
    function DbcComponent() {
        this.doubleClickDuration = 250;
    }
    DbcComponent.prototype.ngOnInit = function () {
        this.label = 'no click';
    };
    DbcComponent.prototype.ngAfterViewInit = function () {
    };
    DbcComponent.prototype.clickEvent = function () {
        var _this = this;
        this.leftClick$ = Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.button.nativeElement, 'click')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event.button === 0; }));
        var debounce$ = this.leftClick$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.doubleClickDuration));
        var clickLimit$ = this.leftClick$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(2));
        var bufferGate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])(debounce$, clickLimit$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["repeat"])());
        this.leftClick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["buffer"])(bufferGate$), 
        // Here we map the buffered events into the length of the buffer
        // If the user clicked once, the buffer is 1. If he clicked twice it is 2
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (clicks) { return clicks.length; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (length) { return length === 2; })).subscribe(function (clicks) {
            console.log('double clicked');
            _this.label = 'double clicked';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('button', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DbcComponent.prototype, "button", void 0);
    DbcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbc',
            template: __webpack_require__(/*! ./dbc.component.html */ "./src/app/dbc/dbc.component.html"),
            styles: [__webpack_require__(/*! ./dbc.component.css */ "./src/app/dbc/dbc.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DbcComponent);
    return DbcComponent;
}());



/***/ }),

/***/ "./src/app/util/double-click.directive.ts":
/*!************************************************!*\
  !*** ./src/app/util/double-click.directive.ts ***!
  \************************************************/
/*! exports provided: DoubleClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoubleClickDirective", function() { return DoubleClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoubleClickDirective = /** @class */ (function () {
    function DoubleClickDirective() {
    }
    DoubleClickDirective.prototype.onDoubleClicked = function () {
        console.log('double clicked');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dblclick'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DoubleClickDirective.prototype, "onDoubleClicked", null);
    DoubleClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDoubleClick]'
        }),
        __metadata("design:paramtypes", [])
    ], DoubleClickDirective);
    return DoubleClickDirective;
}());



/***/ }),

/***/ "./src/app/wir/wir.component.css":
/*!***************************************!*\
  !*** ./src/app/wir/wir.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".explanation {\n  width: 70%;\n  height: auto;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-content: space-around;\n}\n\n.container {\n  width: 100%;\n  height:  100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lyL3dpci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qiw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvd2lyL3dpci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGxhbmF0aW9uIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogIDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/wir/wir.component.html":
/*!****************************************!*\
  !*** ./src/app/wir/wir.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"explanation\">\n    <markdown ngPreserveWhitespaces>\n      ## 什么是RxJs\n      - 很多人都听说过Reactive，但听起来先进却有神秘\n      - 你经常会看到类似于`flatMap`和`Observable`的文档\n\n      _Documentation_\n\n      `Projects each source value to an Observable which is merged in the output Observable.`\n      ```javascript\n      flatMap< T, I, R>(project: (value: T, index: number) => ObservableInput< I >,\n      resultSelector?: ((outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R) |\n      number, concurrent: number = Number.POSITIVE_INFINITY): OperatorFunction< T, I | R>\n      ```\n\n      - 类似于这种对于刚接触RxJs的人员不友好的文档说明\n      - Rx(reactive programming)是以事件流(event streams)的方式进行编程\n      - 事件流(event streams)是随着时间的推移发生的一系列事件，可以将其视为异步数组\n      ![event streams](../../assets/1.png)\n      - 事件随着时间的推移而发生，我们可以为整个序列添加一个事件监听器\n      - 每当事件发生时都可以触发异步事件\n      ## 在JavaScript中看到的另一种类型的序列是数组，数组的内容是存在内存中的\n\n      ```javascript\n      var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];\n\n      var result = source;\n\n      console.log(result);\n      ```\n\n      - 对于事件流而言，事件流可能会随着时间的推移而发生，流的内容是不可预估的(不要从我们的上帝视角看待)\n\n      ```javascript\n      var source = interval(400).pipe(\n      take(9),\n      map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i])\n      )\n      var result = source;\n      result.subscribe(x => console.log(x));\n      ```\n\n      - 事件流每400s发出一次事件\n      - 通过调用subscribe向源事件流添加事件监听器\n      - 每当事件发生时调用方法观察其`行为`\n\n      _事件流与数组不同，但是使用的方法却十分类似_\n\n      - 现在假设需要在不依赖`for`循环的条件下将源数组转化为纯数字的数组\n\n      ```javascript\n      var result = source\n      .map(x => parseInt(x));\n      // [1, 1, NaN, 2, 3, 5, NaN, 8, 13]\n      ```\n\n      - 剔除那些不是数字的字符\n\n      ```javascript\n      var result = source\n      .map(x => parseInt(x))\n      .filter(x => !isNaN(x));\n      // [1,1,2,3,5,8,13]\n      ```\n\n      - 假设我们想求得数组之和\n\n      ```javascript\n      var result = source\n      .map(x => parseInt(x))\n      .filter(x => !isNaN(x))\n      .reduce((x, y) => x + y);\n      // 33\n      ```\n\n      - 对事件流应用同样的需求\n\n      ```javascript\n      var result = source.pipe(\n      map(x => parseInt(x)),\n      filter(x => !isNaN(x)),\n      reduce((x, y) => x + y)\n      )\n      ```\n    </markdown>\n  </div>\n  <div class=\"code\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wir/wir.component.ts":
/*!**************************************!*\
  !*** ./src/app/wir/wir.component.ts ***!
  \**************************************/
/*! exports provided: WirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WirComponent", function() { return WirComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WirComponent = /** @class */ (function () {
    function WirComponent() {
    }
    WirComponent.prototype.ngOnInit = function () {
        this.source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
        this.result = this.source;
        console.log('Array result is ' + this.result);
        this.source$ = Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_2__["interval"])(400).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(9), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (i) { return ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]; }));
        this.result$ = this.source$;
        this.subscription = this.result$.subscribe(function (x) {
            console.log(x);
        });
    };
    WirComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wir',
            template: __webpack_require__(/*! ./wir.component.html */ "./src/app/wir/wir.component.html"),
            styles: [__webpack_require__(/*! ./wir.component.css */ "./src/app/wir/wir.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WirComponent);
    return WirComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/admin/Github/RXJS-Presentation/sample/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/admin/Github/RXJS-Presentation/sample/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map