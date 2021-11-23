(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<router-outlet></router-outlet>\n<app-footbar></app-footbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/assistant/assistant.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/assistant/assistant.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-navbar></app-navbar>\n  <div class=\"content-container\" fxLayout=\"column\" fxLayoutAlign=\"stretch\" fxFlex=\"auto\">\n    <swiper class=\"swiper-container\" [config]=\"config\" (indexChange)=\"onIndexChange($event)\" fxFlex=\"auto\">\n      <div *ngFor=\"let slide of slides\" class=\"swiper-slide\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n          <img class=\"previewimg\" [src]=\"slide\" assept=\"img/*\">\n        </div>\n      </div>\n    </swiper>\n    <div class=\"swiper-button-prev swiper-button-white\"></div>\n    <div class=\"swiper-button-next swiper-button-white\"></div>\n  </div>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>行事曆</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <h5 class=\"card-title\">2021 / 08 / 09</h5>\n      <p class=\"card-text\">日本大阪三天兩夜</p>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n      <a mat-raised-button class=\"travelBtn\" [routerLink]=\"['/travel']\" routerLinkActive=\"active\">Go somewhere</a>\n    </mat-card-actions>\n    <mat-card-footer></mat-card-footer>\n  </mat-card>\n\n  <mat-card class=\"assistant\">\n    <mat-card-header>\n      <mat-card-title>今天想去哪裡？</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <img mat-card-image src=\"../../../assets/hot-air-balloon.svg\" width=\"200px\">\n    </mat-card-content>\n    <mat-card-footer></mat-card-footer>\n  </mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title >新增好友</h2>\n<form [formGroup]=\"form\" (ngSubmit)=\"searched()\" novalidate>\n  <mat-dialog-content>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"搜尋\" formControlName=\"search\" [(ngModel)]=\"searchWord\"  maxlength=\"100\">\n        </mat-form-field>\n        <!-- &nbsp;&nbsp; -->\n        <button mat-raised-button class=\"search-btn\" type=\"submit\"><mat-icon>search</mat-icon></button>\n      </div>\n      <div>\n        <mat-list *ngIf=\"searchWord\">\n          <mat-list-item>\n            <img matListAvatar src=\"assets/avatar1.jpeg\" />\n            <h3 matLine>{{searchWord}}</h3>\n            <button mat-icon-button class=\"add-btn\" type=\"button\"><mat-icon>person_add_alt_1</mat-icon></button>\n          </mat-list-item>\n          <!-- </mat-list-item> -->\n        </mat-list>\n      </div>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"btn-center\" align=\"end\">\n    <button mat-raised-button mat-dialog-close>取消</button>\n  </mat-dialog-actions>\n</form>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/communication.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/communication.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"searched()\" novalidate>\n    <div class=\"content\">\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"搜尋\" formControlName=\"search\" [(ngModel)]=\"searchWord\"  maxlength=\"120\">\n        </mat-form-field>\n        <!-- &nbsp;&nbsp; -->\n        <button mat-raised-button class=\"search-btn\" type=\"submit\"><mat-icon>search</mat-icon></button>\n      </div>\n    </div>\n  </form>\n  <mat-list>\n    <a\n      mat-list-item\n      *ngFor=\"let message of messages\"\n      routerLink=\"/room/{{ message.id }}\"\n    >\n      <img matListAvatar src=\"{{ message.avatar }}\" alt=\"{{ message.name }}\" />\n      <h3 matLine>{{ message.name }}</h3>\n      <p matLine>\n        <span class=\"demo-2\"> {{ message.content }} </span>\n        <!-- <span> -- {{ message.time }} </span> -->\n      </p>\n      <span align = \"end\">{{today | date:'hh:mm'}}</span>\n      <button mat-icon-button><mat-icon>chevron_right</mat-icon></button>\n    </a>\n    <!-- </mat-list-item> -->\n  </mat-list>\n  <button mat-icon-button class=\"add-btn\" (click)=\"addFriendDialog()\"><mat-icon>group_add</mat-icon></button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/friend-list/friend-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/friend-list/friend-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>friend-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title>\n  <p>新增記事\n    <button mat-icon-button class=\"add-btn\" type=\"button\" (click)=\"addImage()\">\n      <mat-icon>add_photo_alternate</mat-icon>\n    </button>\n  </p>\n</div>\n<input id=\"file\" [(ngModel)]=\"file\" style=\"display: none\" type=\"file\">\n<form [formGroup]=\"form\" (ngSubmit)=\"save()\" novalidate>\n  <mat-dialog-content>\n    <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n      <mat-label>標題</mat-label>\n      <input matInput type=\"text\" formControlName=\"title\" (change)=\"hasTitle()\" minlength=\"1\" maxlength=\"20\" required>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n      <mat-label>內容</mat-label>\n      <input matInput type=\"text\" formControlName=\"content\" (change)=\"hasContent()\" minlength=\"1\" maxlength=\"1000\" required>\n    </mat-form-field>\n    <mat-form-field [hidden]=\"true\">\n      <input matInput value=\"{{file}}\" formControlName=\"image\">\n    </mat-form-field>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"btn-center\" align=\"end\">\n    <button class=\"addBtn\" mat-raised-button type=\"submit\" [disabled]=\"!hascontent\">新增</button>\n    <button mat-raised-button mat-dialog-close>取消</button>\n  </mat-dialog-actions>\n</form>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>留言</h5>\n  <mat-list>\n    <mat-list-item>\n      <img matListAvatar src=\"assets/avatar1.jpeg\"  />\n      <h3 matLine>Martin</h3>\n      <p matLine>\n        <span class=\"demo-2\">還有忘記說這是從XX網站找的</span>\n      </p>\n        <!-- <span> -- {{ message.time }} </span> -->\n      <p matLine>\n        <span>{{today | date:'yyyy-MM-dd hh:mm:ss'}}</span>\n      </p>\n    </mat-list-item>\n  </mat-list>\n  <div class=\"input-group mb-3 input-area-in-messege\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"輸入留言\" aria-label=\"輸入留言\">\n    <button mat-icon-button class=\"icon-btn\" (click)=\"sendMessage()\"><mat-icon>arrow_circle_up</mat-icon></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/note/note.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/note/note.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <mat-tab-group>\n    <mat-tab label=\"記事本\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"searched()\" novalidate>\n        <div class=\"content\">\n          <div>\n            <mat-form-field appearance=\"outline\">\n              <input matInput placeholder=\"搜尋\" formControlName=\"search\" [(ngModel)]=\"searchWord\"  maxlength=\"120\">\n            </mat-form-field>\n            <!-- &nbsp;&nbsp; -->\n            <button mat-raised-button class=\"search-btn\" type=\"submit\"><mat-icon>search</mat-icon></button>\n          </div>\n        </div>\n      </form>\n      <div>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <img mat-card-avatar src=\"assets/avatar1.jpeg\">\n            <mat-card-title>Martin</mat-card-title>\n          </mat-card-header>\n          <img mat-card-image src=\"assets/a.jpg\">\n          <mat-card-content>\n            <h5>我找了一些風景在這裡</h5>\n            <p class=\"detail\">\n              大家可以參考一下，再加進行程...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-icon-button class=\"icon-btn\" (click)=\"openMessageBottomSheet()\"><mat-icon>textsms</mat-icon></button>\n            <button mat-icon-button class=\"icon-btn\"><mat-icon>thumb_up_off_alt</mat-icon></button>\n          </mat-card-actions>\n        </mat-card>\n        <button mat-icon-button class=\"add-btn\" (click)=\"addNoteDialog()\"><mat-icon>post_add</mat-icon></button>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"行程\"> 行程 </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/communication/room/room.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/communication/room/room.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-room></app-navbar-room>\n\n<div class=\"content-container\">\n  <!-- <h3 matSubheader>好友訊息</h3> -->\n  <div class=\"chat-box\">\n    <mat-list>\n      <mat-list-item class=\"chat-left\" *ngFor=\"let msg of messageList\" mat-line>\n        <div class=\"chat-avatar\"><img matListAvatar src=\"{{ message.avatar }}\" alt=\"{{ message.name }}\"></div>\n        <div class=\"chat-text\">{{msg}}</div>\n      </mat-list-item>\n\n      <mat-list-item class=\"chat-right\" *ngFor=\"let msg of messageList\" mat-line>\n        <div class=\"chat-text\">{{msg}}</div>\n        <div class=\"chat-avatar\"><img matListAvatar src=\"{{ message.avatar }}\" alt=\"{{ message.name }}\"></div>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"send-box bottom_wrapper\">\n    <div class=\"message_input_wrapper\">\n      <input class=\"message_input\" [(ngModel)]=\"newMessage\"\n        (keyup)=\"$event.keyCode == 13 && sendMessage()\"\n        placeholder=\"Type your message here...\"\n      >\n    </div>\n    <div class=\"send_message\">\n      <button mat-icon-button (click)=\"sendMessage()\" class=\"icon-btn sendbtn\"><mat-icon>send</mat-icon></button>\n      <button mat-icon-button class=\"icon-btn sendbtn\"><mat-icon>call</mat-icon></button>\n    </div>\n  \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/footbar/footbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/footbar/footbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf=\"(login$| async) && !(isHandset$ | async)\" class=\"footbar\">\n  <a mat-button *ngFor=\"let link of links\" routerLink=\"/{{link.route}}\" routerLinkActive=\"active\" class=\"row\" (click)=\"routeChange(link.route)\">\n    <!-- <div>{{link.route}}</div> -->\n    <div *ngIf=\"link.content\"><mat-icon class=\"activited\"> {{link.icon}} </mat-icon></div>\n    <div *ngIf=\"!link.content\"><mat-icon class=\"free\"> {{link.icon}} </mat-icon></div>\n  </a>\n</mat-toolbar>\n<!-- User sub menu -->\n<mat-menu x-position=\"before\" #userMenu=\"matMenu\">\n  <button mat-menu-item >帳號</button>\n  <button mat-menu-item (click)=\"logout()\" >會員登出</button>\n</mat-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/navbar-back/navbarHback.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/navbar-back/navbarHback.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\n  <div>\n    <button  mat-icon-button (click)=\"goBack()\">\n      <mat-icon class=\"menubtn\">arrow_back_ios</mat-icon>\n    </button>\n  </div>\n  <div *ngIf=\"!(isHandset$ | async)\" class=\"divlogo2\">\n    <a mat-button routerLink=\"/user/login\">\n      <img src=\"../../../assets/logo.png\" alt=\"LOGO\" class=\"logo\">\n    </a>\n  </div>\n  <div *ngIf=\"(isHandset$ | async)\" class=\"divlogo2\">\n    <a mat-button routerLink=\"/user/login\">\n      <img src=\"../../../assets/logo.png\" alt=\"LOGO\" class=\"logo\">\n    </a>\n  </div>\n  <span class=\"to-right\"></span>\n\n\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/navbar-room/navbar-room.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/navbar-room/navbar-room.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\n  <div>\n    <button  mat-icon-button (click)=\"goBack()\">\n      <mat-icon class=\"menubtn\">arrow_back_ios</mat-icon>\n    </button>\n  </div>\n  <div class=\"divlogo2\">{{roomName}}</div>\n  <div>\n    <button  mat-icon-button [matMenuTriggerFor]=\"chatMenu\">\n      <mat-icon class=\"menubtn-threedots\">more_vert</mat-icon>\n    </button>\n  </div>\n  <span class=\"to-right\"></span>\n</mat-toolbar>\n\n<mat-menu x-position=\"before\" yPosition=\"below\" #chatMenu=\"matMenu\">\n  <a mat-menu-item routerLink=\"/note/{{roomId}}\" routerLinkActive=\"active\" class=\"route\">\n    <mat-icon class=\"bi list-item\">menu_book</mat-icon>\n    <span class=\"sidebar-font\">記事本</span>\n  </a>\n  <!-- <div><mat-icon> {{link.icon}} </mat-icon></div> -->\n<!-- <button mat-menu-item >帳號</button> -->\n<!-- <button mat-menu-item (click)=\"logout()\" >會員登出</button> -->\n</mat-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf=\"(login$| async)\" class=\"navbar\">\n  <div>\n    <button *ngIf=\"(login$| async) && !(isHandset$ | async)\" mat-icon-button [matMenuTriggerFor]=\"routerMenu\">\n      <mat-icon class=\"menubtn\">menu</mat-icon>\n    </button>\n  </div>\n  <div *ngIf=\"!(isHandset$ | async)\" class=\"divlogo\">\n    <a mat-button routerLink=\"/user/login\">\n      <img src=\"../../../assets/logo.png\" alt=\"LOGO\" class=\"logo\">\n      <!-- <svg-icon src=\"../../../assets/logo.svg\" [svgStyle]=\"{ 'width.px':100 }\"></svg-icon> -->\n    </a>\n  </div>\n  <div *ngIf=\"(isHandset$ | async)\" class=\"divlogo2\">\n    <a mat-button routerLink=\"/user/login\">\n      <img src=\"../../../assets/logo.png\" alt=\"LOGO\" class=\"logo\">\n      <!-- <svg-icon src=\"../../../assets/logo.svg\" [svgStyle]=\"{ 'width.px':100 }\"></svg-icon> -->\n    </a>\n  </div>\n  <!-- <mat-label *ngIf=\"!(login$| async)\">Tripo</mat-label> -->\n  <span class=\"to-right\"></span>\n  <!-- <a mat-button *ngIf=\"!(login$| async)\" routerLink=\"/user/login\">會員登入</a> -->\n  <!-- <button *ngIf=\"!(login$| async) && currentUrl == 'personal'\" mat-button [matMenuTriggerFor]=\"userMenu\">\n    <mat-icon>settings</mat-icon>\n  </button> -->\n  <!-- <a mat-button *ngIf=\"!(login$ | async)\" routerLink=\"\">推播通知</a> -->\n  <div class=\"icon-text\">\n    <button *ngIf=\"(login$| async)\" mat-icon-button [matMenuTriggerFor]=\"massegeMenu\">\n      <mat-icon class=\"bellbtn\">notifications</mat-icon>\n    </button>\n  </div>\n\n</mat-toolbar>\n<!-- User sub menu -->\n<mat-menu x-position=\"before\" #massegeMenu=\"matMenu\">\n  <!-- <button mat-menu-item >帳號</button> -->\n  <!-- <button mat-menu-item (click)=\"logout()\" >會員登出</button> -->\n</mat-menu>\n<mat-menu x-position=\"before\" yPosition=\"below\" #routerMenu=\"matMenu\">\n    <a mat-menu-item *ngFor=\"let link of links\" routerLink=\"/{{link.route}}\" routerLinkActive=\"active\" class=\"route\">\n      <mat-icon class=\"bi list-item\">{{link.icon}}</mat-icon>\n      <span class=\"sidebar-font\">{{link.name}}</span>\n    </a>\n    <!-- <div><mat-icon> {{link.icon}} </mat-icon></div> -->\n  <!-- <button mat-menu-item >帳號</button> -->\n  <!-- <button mat-menu-item (click)=\"logout()\" >會員登出</button> -->\n</mat-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/about-tripo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/about-tripo/about-tripo.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <div>\n    <mat-label>版本</mat-label>\n    <mat-list>\n      <mat-list-item class=\"listitem\">\n        <span mat-line>Version 1.1.1</span>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <mat-label>相關資訊</mat-label>\n    <mat-list>\n      <a mat-list-item *ngFor=\"let link of linklist\" class=\"listitem\" routerLink=\"/about/{{link.route}}\" routerLinkActive=\"active\">\n        <span mat-line>{{link.name}}</span>\n        <mat-icon class=\"listitem\">chevron_right</mat-icon>\n        <mat-divider></mat-divider>\n      </a>\n    </mat-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        著作權聲明\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p class=\"detail\">\n        「Tripo旅遊規劃APP」刊載的所有內容，包括但不限於文字、圖片、影像、檔案、商標、標識、系統/網站介面等素材，均受中華民國著作權法及國際著作法律的保護。\n        相關智慧財產權包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。嚴禁任何未經事先同意的非法轉載和使用。若經查知，將採取必要之法律行動。\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/data-detail/data-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/about-tripo/data-detail/data-detail.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        資料政策\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p class=\"detail\">\n        您提供的資訊和內容。\n        我們會蒐集您使用我們平台時所提供的內容、與他人的交流和其他資訊，其中包含註冊帳號、建立或分享內容，還有發送訊息或與其他用戶交流。\n        這包括您所提供的內容或其相關資訊，例如用戶所在位置或個人資料以及檔案的建立日期。\n        我們的系統會自動處理您提供的內容，以及您與他人交流的資訊。<br>\n        本平台蒐集的資訊僅會在本平台上使用，不會另外作為商業用途。\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/service-detail/service-detail.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/about-tripo/service-detail/service-detail.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        服務條款\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p class=\"detail\">\n        歡迎來到「Tripo旅遊規劃APP」（下稱本平台）。<br>\n        請您於開始使用本平台各項服務前，務必詳細閱讀、了解並同意接受本平台之服務條款、資料政策及著作權聲明。\n        若您不同意，請立即停止使用本平台之各項服務當您開始使用本平台之各項服務，均視為已了解並同意本網站之各項條款、政策及聲明。\n        此外，本平台有部分特定功能依其性質，具有相關配合之其他服務條款或規定，該其他服務條款或規定均視為本平台之條款、政策及聲明。\n      </p>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/account.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/account/account.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <div>\n    <mat-label>帳號設定</mat-label>\n    <mat-list>\n      <a mat-list-item *ngFor=\"let link of linklist\" class=\"listitem\" routerLink=\"/account/{{link.route}}\" routerLinkActive=\"active\">\n        <span mat-line>{{link.name}}</span>\n        <span class=\"right-word\">{{link.data}}</span>\n        <mat-icon class=\"listitem\">chevron_right</mat-icon>\n        <mat-divider></mat-divider>\n      </a>\n    </mat-list>\n  </div>\n  <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\" novalidate> -->\n    <div class=\"list2\">\n      <mat-label>誰可以看到您目前位置</mat-label>\n      <mat-list>\n        <mat-list-item *ngFor=\"let item of Llist\" class=\"listitem\">\n          <span mat-line>{{ item.name }}</span>\n          <mat-slide-toggle aria-label=\"{{ item.name }}\" name=\"{{ item.control }}\" [(ngModel)]=\"item.content\" (change)=\"onToggleChange(item.control)\"></mat-slide-toggle>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n      </mat-list>\n    </div>\n  <!-- </form> -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/email-detail/email-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/account/email-detail/email-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"update()\" novalidate>\n    <div class=\"content\">\n      <h4>電子郵件</h4>\n      <mat-label>您目前的電子郵件地址為 {{initEmail}}</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"name@example.com\" formControlName=\"email\" maxlength=\"120\" required>\n          <div *ngIf=\"email.invalid && (email.dirty && email.touched)\">\n            <mat-error *ngIf=\"email.errors.required\">請輸入常用的E-mail</mat-error>\n            <mat-error *ngIf=\"email.errors.email\">請輸入正確的E-mail格式</mat-error>\n            <mat-error *ngIf=\"email.errors.maxlength\">請輸入正確的E-mail格式</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-raised-button class=\"finish-btn\" [disabled]=\"!form.valid\" type=\"submit\">修改</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/mobile-detail/mobile-detail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/account/mobile-detail/mobile-detail.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"update()\" novalidate>\n    <div class=\"content\">\n      <h4>行動電話</h4>\n      <mat-label>您目前的行動電話為 {{ initMobile }}</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"聯絡電話\" id=\"mobile\" name=\"mobile\" formControlName=\"mobile\" class=\"form-control mobile\" minlength=\"10\" maxlength=\"10\" required>\n          <div *ngIf=\"mobile.invalid && (mobile.dirty && mobile.touched)\">\n            <mat-error *ngIf=\"mobile.errors.required\">請輸入聯絡電話</mat-error>\n            <mat-error *ngIf=\"mobile.errors.maxlength\">請輸入正確的電話號碼格式</mat-error>\n            <mat-error *ngIf=\"mobile.errors.minlength\">請輸入正確的電話號碼格式</mat-error>\n            <mat-error *ngIf=\"mobile.errors.pattern\">請輸入正確的電話號碼格式</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-raised-button class=\"finish-btn\" [disabled]=\"!form.valid\" type=\"submit\">修改</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/name-detail/name-detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/account/name-detail/name-detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"update()\" novalidate>\n    <div class=\"content\">\n      <mat-label>名稱</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput formControlName=\"name\" placeholder=\"名稱\" >\n          <div *ngIf=\"name.invalid && (name.dirty && name.touched)\">\n            <mat-error *ngIf=\"name.errors.required\">請輸入名稱</mat-error>\n            <!-- <mat-error *ngIf=\"name.errors.pattern\"></mat-error> -->\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-raised-button class=\"finish-btn\" [disabled]=\"!form.valid\"  type=\"submit\">修改</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/pwd-detail/pwd-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/account/pwd-detail/pwd-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"update()\" novalidate>\n    <div class=\"content\">\n      <mat-label>目前密碼</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput type=\"password\" formControlName=\"password\" required>\n          <div *ngIf=\"password.invalid && (password.dirty && password.touched)\">\n            <mat-error *ngIf=\"password.errors.required\">請輸入密碼</mat-error>\n            <mat-error *ngIf=\"password.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <mat-label>新密碼</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput type=\"password\" formControlName=\"confirmpwd\" required (change)=\"chkPwd()\">\n          <div *ngIf=\"confirmpwd.invalid && (confirmpwd.dirty && confirmpwd.touched)\">\n            <mat-error *ngIf=\"confirmpwd.errors.required\">請輸入新密碼</mat-error>\n            <mat-error *ngIf=\"confirmpwd.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <mat-label>再輸入一次新密碼</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput type=\"password\" formControlName=\"confirmpwd2\" required (change)=\"chkPwd()\">\n          <div *ngIf=\"confirmpwd2.invalid && (confirmpwd2.dirty && confirmpwd2.touched)\">\n            <mat-error *ngIf=\"confirmpwd2.errors.required\">請輸入新密碼</mat-error>\n            <mat-error *ngIf=\"confirmpwd2.hasError('mismatch')\">密碼不相符，請重新輸入</mat-error>\n            <mat-error *ngIf=\"confirmpwd2.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-raised-button class=\"finish-btn\" [disabled]=\"!form.valid\" type=\"submit\">修改</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/username-detail/username-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/account/username-detail/username-detail.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"update()\" novalidate>\n    <div class=\"content\">\n      <mat-label>帳號名稱</mat-label>\n      <div>\n        <mat-form-field appearance=\"outline\">\n          <input matInput formControlName=\"username\" placeholder=\"帳號名稱\" >\n          <div *ngIf=\"username.invalid && (username.dirty && username.touched)\">\n            <mat-error *ngIf=\"username.errors.required\">請輸入使用者名稱</mat-error>\n            <mat-error *ngIf=\"username.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n      </div>\n      <div>\n        <button mat-raised-button class=\"finish-btn\" [disabled]=\"!form.valid\"  type=\"submit\">修改</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/avatar-dialog/avatar-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/avatar-dialog/avatar-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h2 mat-dialog-title >Avatar</h2>\n  <form [formGroup]=\"form\" (ngSubmit)=\"register()\" novalidate>\n    <mat-dialog-content>\n      <!-- 使用者大頭貼-->\n      <input type=\"file\" formControlName=\"avatar\" [(ngModel)]=\"data.avatar\" (change)=\"imgupload($event)\">\n      <div *ngIf=\"slideimage\">\n          <div class=\"imaged\">\n              <div *ngIf=\"allimages.length > 0\">\n                  <div *ngFor=\"let item of allimages; let index = index\">\n                      <img class=\"previewimg\" [src]=\"slideimage\">\n                  </div>\n              </div>\n          </div>\n      </div>\n    </mat-dialog-content>\n    <mat-dialog-actions class=\"btn-center\">\n      <button mat-raised-button color='primary' type=\"submit\" [disabled]=\"form.valid\">修改</button>\n      <button mat-raised-button mat-dialog-close>取消</button>\n    </mat-dialog-actions>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/chat/backup/backup.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/chat/backup/backup.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<p>backup works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/chat/chat.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/chat/chat.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <div>\n    <mat-label>聊天室</mat-label>\n    <mat-list>\n      <a mat-list-item *ngFor=\"let link of linklist\" class=\"listitem\" routerLink=\"/chat/{{link.route}}\" routerLinkActive=\"active\">\n        <span mat-line>{{link.name}}</span>\n        <span class=\"right-word\">{{link.data}}</span>\n        <mat-icon class=\"listitem\">chevron_right</mat-icon>\n        <mat-divider></mat-divider>\n      </a>\n    </mat-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/chat/font-size/font-size.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/chat/font-size/font-size.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\" novalidate>\n  <div>\n    <mat-label>手機預設</mat-label>\n    <mat-list>\n      <mat-list-item class=\"listitem\">\n        <span mat-line>按照手機預設</span>\n        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"deviceDef\" formControlName=\"default\" (change)=\"defaultChange()\"></mat-slide-toggle>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <mat-label>字體</mat-label>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of Flist\" class=\"listitem\" (click)=\"onToggleChange(item.control)\">\n        <span mat-line>{{ item.name }}</span>\n        <mat-icon *ngIf=\"item.content&&(!deviceDef)\">check</mat-icon>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <!-- <button (click)=\"onFormSubmit()\"></button> -->\n</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/edit-dialog/edit-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/edit-dialog/edit-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <h2 mat-dialog-title >\bEdit</h2>\n    <form [formGroup]=\"form\" (ngSubmit)=\"register()\" novalidate>\n      <mat-dialog-content>\n        <!-- 使用者名稱-->\n        <mat-form-field>\n          <input matInput placeholder=\"使用者名稱\" formControlName=\"name\" value=\"{{data.name}}\" [(ngModel)]=\"data.name\" required>\n          <div *ngIf=\"name.invalid && (name.dirty && name.touched)\">\n            <mat-error *ngIf=\"name.errors.required\">請輸入使用者名稱</mat-error>\n            <mat-error *ngIf=\"name.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n      </mat-dialog-content>\n      <mat-dialog-actions class=\"btn-center\">\n        <button mat-raised-button color='primary' type=\"submit\" [disabled]=\"!form.valid\">修改</button>\n        <button mat-raised-button mat-dialog-close (click)=\"onNoClick()\">取消</button>\n      </mat-dialog-actions>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/logout-dialog/logout-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/logout-dialog/logout-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title >{{ data.title }}</h2>\n  <mat-dialog-content>\n    <mat-label>{{ data.message }}</mat-label>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"btn-center\" align=\"end\">\n    <button class=\"addBtn\" mat-raised-button (click)=\"logout()\"> {{ data.buttonText.ok }} </button>\n    <button mat-raised-button mat-dialog-close> {{ data.buttonText.cancel }} </button>\n  </mat-dialog-actions>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/notice/notice.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/notice/notice.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\" novalidate>\n  <div>\n    <mat-label>應用程式通知</mat-label>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of Alist\" class=\"listitem\">\n        <span mat-line>{{ item.name }}</span>\n        <mat-slide-toggle color=\"primary\" ngModel formControlName=\"{{ item.control }}\" (change)=\"onToggleChange(item.control)\"></mat-slide-toggle>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <mat-label>訊息通知</mat-label>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of Mlist\" class=\"listitem\">\n        <span mat-line>{{ item.name }}</span>\n        <mat-slide-toggle ngModel aria-label=\"{{ item.name }}\" formControlName=\"{{ item.control }}\" (change)=\"onToggleChange(item.control)\"></mat-slide-toggle>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <mat-label>行程相關通知</mat-label>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of Tlist\" class=\"listitem\">\n        <span mat-line>{{ item.name }}</span>\n        <mat-slide-toggle ngModel aria-label=\"{{ item.name }}\" formControlName=\"{{ item.control }}\" (change)=\"onToggleChange(item.control)\"></mat-slide-toggle>\n        <small mat-line *ngIf=\"item.note\">{{ item.note }}</small>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/personal.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/personal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!-- <div class=\"main\">\n  <mat-label>{{name}}</mat-label>\n  <img class=\"previewimg\" src=\"{{avatar}}\">\n  <button mat-button (click)=\"editDialog()\">Edit</button>\n  <button mat-button (click)=\"avatarDialog()\">Avatar</button>\n  <button mat-button [matMenuTriggerFor]=\"userMenu\">\n    <mat-icon>settings</mat-icon>\n  </button>\n</div>\n\n<mat-menu x-position=\"before\" #userMenu=\"matMenu\">\n  <a mat-menu-item routerLink=\"/personal/profile\">帳號</a>\n  <button mat-menu-item (click)=\"logout()\" >會員登出</button>\n</mat-menu> -->\n<div class=\"content-container\">\n  <div *ngFor=\"let i of userInfo\">\n  <div class=\"avatar\">\n    <ngx-avatar src=\"{{ i.avatar }}\" size=\"200\"></ngx-avatar>\n    <!-- <ngx-avatar *ngIf=\"!avatar\" value=\"+\" size=\"200\" bgColor=\"gray\"></ngx-avatar> -->\n    <span class=\"notify-badge\">\n      <button mat-mini-fab class=\"avatarAddBtn\" (click)=\"avatarDialog()\">\n        <mat-icon>create</mat-icon>\n      </button>\n    </span>\n  </div>\n  <h2 class=\"name\">{{ i.name }}</h2>\n  </div>\n  <mat-list>\n    <a mat-list-item *ngFor=\"let link of linklist\" class=\"listitem\" routerLink=\"/personal/{{link.route}}\" routerLinkActive=\"active\">\n      <mat-icon mat-list-icon>{{link.icon}}</mat-icon>\n      <span mat-line>{{link.name}}</span>\n      <mat-divider></mat-divider>\n    </a>\n    <mat-list-item class=\"listitem\" (click)=\"logoutDialog()\">\n      <mat-icon mat-list-icon>logout</mat-icon>\n      <span mat-line>登出</span>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/private/private.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/private/private.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"onFormSubmit()\" novalidate>\n  <div>\n    <mat-label>誰可以加入您為朋友</mat-label>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of Flist\" class=\"listitem\">\n        <span mat-line>{{ item.name }}</span>\n        <mat-slide-toggle color=\"primary\" ngModel formControlName=\"{{ item.control }}\" (change)=\"onToggleChange(item.control)\"></mat-slide-toggle>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <mat-label>誰可以看到您目前位置</mat-label>\n    <mat-list>\n      <mat-list-item *ngFor=\"let item of Llist\" class=\"listitem\">\n        <span mat-line>{{ item.name }}</span>\n        <mat-slide-toggle ngModel aria-label=\"{{ item.name }}\" formControlName=\"{{ item.control }}\" (change)=\"onToggleChange(item.control)\"></mat-slide-toggle>\n        <mat-divider></mat-divider>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/personal/profile/profile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/personal/profile/profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/share/share.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/share/share.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-container\">\n  <img class=\"agm-map\" src=\"assets/mapSample.png\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title >加入行程</h2>\n  <form [formGroup]=\"form\" (ngSubmit)=\"save()\" novalidate>\n    <mat-dialog-content>\n      <mat-form-field *ngIf=\"hasDateSelected\" hidden>\n        <input matInput value=\"{{dayId}}\" formControlName=\"travel_route_day_id\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\" >\n        <mat-label>選擇地點</mat-label>\n        <input matInput value=\"{{data.location}}\" formControlName=\"location\" readonly>\n      </mat-form-field>\n      <mat-form-field hidden>\n        <input matInput value=\"{{data.placeId}}\" formControlName=\"place_id\" disabled>\n      </mat-form-field>\n      <mat-form-field hidden>\n        <input matInput value=\"{{data.lat}}\" formControlName=\"lat\" disabled>\n      </mat-form-field>\n      <mat-form-field hidden>\n        <input matInput value=\"{{data.lng}}\" formControlName=\"lng\" disabled>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n        <mat-label>選擇行程</mat-label>\n        <mat-select formControlName=\"id\">\n          <mat-option *ngFor=\"let schedule of schedules\" value=\"{{schedule.id}}\" (click)=\"getStartDate(schedule.start_day); getEndDate(schedule.end_day); campaignSelected();\">{{schedule.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n        <mat-label>選擇日期</mat-label>\n        <input [disabled]=\"!hasSelected\" matInput [matDatepicker]=\"picker\" [max]=\"endDate\" [min]=\"startDate\" formControlName=\"date\" (dateChange)=\"campaignDateSelected()\" readonly>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n      </mat-form-field>\n      <div class=\"timeSelect\">\n        <mat-form-field appearance=\"outline\" class=\"time\">\n          <mat-label>開始時間</mat-label>\n          <input matInput [disableClick]=\"!hasDateSelected\" [ngxTimepicker]=\"start\" [format]=\"24\" readonly formControlName=\"arrival_time\" (ngModelChange)=\"campaignStartTimeSelected()\">\n          <!-- <ngx-material-timepicker-toggle [for]=\"default\"></ngx-material-timepicker-toggle> -->\n          <ngx-material-timepicker [theme]=\"myTheme\" [cancelBtnTmpl]=\"cancelBtn\" [confirmBtnTmpl]=\"confirmBtn\" timepickerClass=\"timepicker\" #start></ngx-material-timepicker>\n        </mat-form-field>\n        &nbsp;到&nbsp;\n        <mat-form-field appearance=\"outline\" class=\"time\">\n          <mat-label>結束時間</mat-label>\n          <input matInput [disableClick]=\"!hasStartTimeSelected\" [ngxTimepicker]=\"end\" [format]=\"24\" formControlName=\"leave_time\" [min]=\"StartTime\" readonly (ngModelChange)=\"campaignEndTimeSelected()\">\n          <!-- <ngx-material-timepicker-toggle [for]=\"default\"></ngx-material-timepicker-toggle> -->\n          <ngx-material-timepicker [theme]=\"myTheme\" [cancelBtnTmpl]=\"cancelBtn\" [confirmBtnTmpl]=\"confirmBtn\" timepickerClass=\"timepicker\" #end></ngx-material-timepicker>\n        </mat-form-field>\n      </div>\n\n    </mat-dialog-content>\n    <mat-dialog-actions class=\"btn-center\" align=\"end\">\n      <button class=\"addBtn\" mat-raised-button type=\"submit\" [disabled]=\"!hasEndTimeSelected\">確認加入</button>\n      <button mat-raised-button mat-dialog-close>取消</button>\n    </mat-dialog-actions>\n  </form>\n\n  <ng-template #confirmBtn>\n    <button class=\"addBtn\" mat-raised-button>確認</button>\n  </ng-template>\n\n  <ng-template #cancelBtn>\n    <!-- <button mat-raised-button>取消</button> -->\n  </ng-template>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title >建立行程</h2>\n  <form [formGroup]=\"form\" (ngSubmit)=\"save()\" novalidate>\n    <mat-dialog-content>\n      <!-- <mat-form-field [hidden]=\"true\">\n        <input matInput type=\"number\" value=\"{{ schedules.length }}\" formControlName=\"id\" >\n      </mat-form-field> -->\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n        <mat-label>命名行程</mat-label>\n        <input matInput type=\"text\" formControlName=\"name\" (change)=\"campaignNamed()\" required>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n        <mat-label>行程說明</mat-label>\n        <input matInput type=\"text\" formControlName=\"description\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n        <mat-label>開始日期</mat-label>\n        <input [disabled]=\"!hasName\" matInput [matDatepicker]=\"startDatepicker\" [min]=\"today\" formControlName=\"start_day\" (dateChange)=\"campaignStartDateSelected();\" readonly>\n        <mat-datepicker-toggle matSuffix [for]=\"startDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker [dateClass]=\"dateClass\" #startDatepicker></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"schrduleSelect\">\n        <mat-label>結束日期</mat-label>\n        <input [disabled]=\"!hasStartDateSelected\" matInput [matDatepicker]=\"endDatepicker\" [min]=\"minDate\" formControlName=\"end_day\" (dateChange)=\"campaignEndDateSelected();\" readonly>\n        <mat-datepicker-toggle matSuffix [for]=\"endDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker [dateClass]=\"dateClass\" #endDatepicker></mat-datepicker>\n      </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-actions class=\"btn-center\" align=\"end\">\n      <button class=\"addBtn\" mat-raised-button type=\"submit\" [disabled]=\"!hasEndDateSelected\">建立</button>\n      <button mat-raised-button mat-dialog-close>取消</button>\n    </mat-dialog-actions>\n  </form>\n\n  <!-- <ng-template #confirmBtn>\n    <button class=\"addBtn\" mat-raised-button>確認</button>\n  </ng-template>\n\n  <ng-template #cancelBtn> -->\n    <!-- <button mat-raised-button>取消</button> -->\n  <!-- </ng-template> -->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/travel/schedule-detail/schedule-detail.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/travel/schedule-detail/schedule-detail.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-back></app-navbar-back>\n\n<div class=\"content-container\">\n  <agm-map style=\"height: 300px\" [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-snazzy-info-window [maxWidth]=\"200\" [closeWhenOthersOpen]=\"true\">\n        <ng-template>\n          Test\n        </ng-template>\n      </agm-snazzy-info-window>\n    </agm-marker>\n  </agm-map>\n  <div *ngFor=\"let schedule of schedules\">\n    <h2>{{schedule.name}}\n    <button mat-icon-button (click)=\"removeTravel(schedule.id);\"><mat-icon class=\"del\">delete</mat-icon></button></h2>\n    <small>{{schedule.start_day | date: \"yyyy/MM/dd\"}} - {{schedule.end_day | date: \"yyyy/MM/dd\"}}</small>\n  </div>\n  <div class=\"list\">\n    <mat-label>目前搜尋景點</mat-label>\n    <mat-list>\n      <mat-list-item class=\"listitem\">\n        <input mat-line matInput type=\"text\"\n        class=\"form-control\"\n        (keydown.enter)=\"$event.preventDefault()\"\n        placeholder=\"搜尋景點\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"off\"\n        #search>\n      <button mat-icon-button [disabled]=\"searchElementRef.nativeElement.value == ''\" (click)=\"addScheduleDialog();\"><mat-icon>add_circle</mat-icon></button>\n      <button mat-icon-button [disabled]=\"searchElementRef.nativeElement.value == ''\"><mat-icon>stars</mat-icon></button>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <div class=\"full\">\n      <mat-label mat-line>當前行程列表</mat-label>\n      <mat-icon class=\"right\" fontSet=\"material-icons-round\">person_add_alt</mat-icon>\n    </div>\n    <mat-accordion class=\"example-headers-align\">\n      <div *ngFor=\"let scheduleDetail of scheduleDetailAry; let i = index\">\n        <mat-expansion-panel [expanded]=\"step === i\" (opened)=\"setStep(i)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             第 {{ i + 1 }} 天\n            </mat-panel-title>\n            <mat-panel-description class=\"right-aligned\">\n              {{scheduleDetail.route_day | date: 'yyyy/MM/dd'}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n            <!-- <a mat-list-item *ngFor=\"let link of linklist\" class=\"listitem\" routerLink=\"/account/{{link.route}}\" routerLinkActive=\"active\">\n              <span mat-line>{{link.name}}</span>\n              <span class=\"right-word\">{{link.data}}</span>\n              <mat-icon class=\"listitem\">chevron_right</mat-icon>\n              <mat-divider></mat-divider>\n            </a> -->\n            <mat-list>\n              <div *ngFor=\"let scheduleDateDetail of scheduleDateDetailAry; let i = index\">\n                <div *ngFor=\"let item of scheduleDateDetailAry[i]; let e = last;\">\n                <div *ngIf=\"item.travel_route_day_id && scheduleDetail.travel_route_day_id === item.travel_route_day_id\">\n                  <mat-list-item class=\"listitem\">\n                    <span mat-line> <mat-icon class=\"title-icon\">place</mat-icon>{{ item.place.name }}</span>\n                    <span class=\"right-word\">{{ item.arrival_time | date: 'HH:mm'}} - {{ item.leave_time | date: 'HH:mm'}}</span>\n                    <mat-icon class=\"listitem\">chevron_right</mat-icon>\n                    <button mat-icon-button (click)=\"removeSchedule(item.route_place_id);\"><mat-icon class=\"del\">delete</mat-icon></button>\n                    <small mat-line class=\"card-text\">{{ item.place.description }}</small>\n                    <mat-divider></mat-divider>\n                  </mat-list-item>\n                  <mat-list-item class=\"listitem2\" *ngIf=\"!e\">\n                    <div class=\"line\"></div>\n                    <div class=\"tool\"><mat-icon class=\"tool-icon\">directions_car</mat-icon></div>\n                    <mat-label class=\"time\">10分鐘</mat-label>\n                    <button mat-raised-button class=\"nav-btn\"><mat-icon >near_me</mat-icon>導 航</button>\n                    <!-- <span class=\"right-word\">12:00 - 13:00</span> -->\n                    <!-- <small mat-line class=\"card-text\">看某某作家的展覽畫作</small> -->\n                  </mat-list-item>\n                </div>\n              </div>\n              </div>\n            </mat-list>\n          <mat-action-row>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n      </div>\n      </mat-accordion>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/travel/travel.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/travel/travel.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-container\">\n  <agm-map style=\"height: 300px\" [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-snazzy-info-window [maxWidth]=\"200\" [closeWhenOthersOpen]=\"true\">\n        <ng-template>\n          Test\n        </ng-template>\n      </agm-snazzy-info-window>\n    </agm-marker>\n  </agm-map>\n  <div class=\"list\">\n    <mat-label>目前搜尋景點</mat-label>\n    <mat-list>\n      <mat-list-item class=\"listitem\">\n        <input mat-line matInput type=\"text\"\n        class=\"form-control\"\n        (keydown.enter)=\"$event.preventDefault()\"\n        placeholder=\"搜尋景點\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"off\"\n        #search>\n      <button mat-icon-button [disabled]=\"!searchLocation\" (click)=\"addScheduleDialog();\"><mat-icon>add_circle</mat-icon></button>\n      <button mat-icon-button [disabled]=\"!searchLocation\"><mat-icon>stars</mat-icon></button>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div class=\"list2\">\n    <div class=\"full\">\n      <mat-label mat-line>當前行程列表</mat-label>\n      <mat-icon class=\"right\" fontSet=\"material-icons-round\">person_add_alt</mat-icon>\n    </div>\n    <mat-list>\n      <a mat-list-item *ngFor=\"let schedule of scheduleList[scheduleList.length - 1]\" class=\"listitem\"\n          routerLink=\"/travel/schedule/{{schedule.id}}/{{schedule.start_day | date: 'yyyy-MM-dd'}}/{{schedule.end_day | date: 'yyyy-MM-dd'}}/{{schedule.name}}\"\n          routerLinkActive=\"active\">\n        <span mat-line>{{schedule.name}}</span>\n        <mat-label class=\"right-word\">{{schedule.start_day | date: 'MM月dd日'}} - {{schedule.end_day | date: 'MM月dd日'}}</mat-label>\n        <mat-icon>chevron_right</mat-icon>\n        <mat-divider></mat-divider>\n      </a>\n    </mat-list>\n  </div>\n  <div class=\"addBtn\">\n    <button mat-icon-button (click)=\"createTripDialog();\">\n      <mat-icon fontSet=\"material-icons-outlined\">add_box</mat-icon>\n    </button>\n  </div>\n</div>\n\n<!-- <button (click)=\"getUserLocation()\">click</button> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/user/login/login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/user/login/login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card fxFlex class=\"login-card\">\n    <mat-card-title class=\"title\">登入</mat-card-title>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\" novalidate>\n      <mat-card-content>\n        <div>\n          <mat-form-field appearance=\"outline\">\n            <input matInput placeholder=\"使用者名稱\" formControlName=\"username\" required>\n            <div *ngIf=\"username.invalid && (username.dirty && username.touched)\">\n              <mat-error *ngIf=\"username.errors.required\">請輸入使用者名稱</mat-error>\n              <mat-error *ngIf=\"username.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n            </div>\n          </mat-form-field>\n        </div>\n        <div>\n          <mat-form-field appearance=\"outline\">\n            <input matInput type=\"password\" placeholder=\"密碼\" formControlName=\"password\" required>\n            <div *ngIf=\"password.invalid && (password.dirty && password.touched)\">\n              <mat-error *ngIf=\"password.errors.required\">請輸入密碼</mat-error>\n              <mat-error *ngIf=\"password.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n            </div>\n          </mat-form-field>\n        </div>\n        <div>\n          <!-- <mat-checkbox formControlName=\"rememberMe\" class=\"chk\">記得我</mat-checkbox> -->\n        </div>\n      </mat-card-content>\n      <mat-card-actions class=\"btn-center\">\n        <button mat-raised-button type=\"submit\" [disabled]=\"!form.valid\">登入</button>\n        <a mat-raised-button class=\"addBtn\" routerLink=\"/user/register\">註冊</a>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/user/register/register.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/user/register/register.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main container\">\n  <mat-card fxFlex class=\"login-card\">\n    <mat-card-title class=\"title\">註冊</mat-card-title>\n    <form [formGroup]=\"form\" (ngSubmit)=\"register()\" novalidate>\n      <mat-card-content>\n        <!-- 使用者帳號 -->\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"使用者帳號\" formControlName=\"username\" required>\n          <div *ngIf=\"username.invalid && (username.dirty && username.touched)\">\n            <mat-error *ngIf=\"username.errors.required\">請輸入使用者帳號</mat-error>\n            <mat-error *ngIf=\"username.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n\n        <!-- 使用者密碼 -->\n        <mat-form-field appearance=\"outline\">\n          <input matInput type=\"password\" placeholder=\"密碼\" formControlName=\"password\" required>\n          <div *ngIf=\"password.invalid && (password.dirty && password.touched)\">\n            <mat-error *ngIf=\"password.errors.required\">請輸入密碼</mat-error>\n            <mat-error *ngIf=\"password.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n\n        <!-- 使用者名稱-->\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"使用者名稱\" formControlName=\"name\" required>\n          <div *ngIf=\"name.invalid && (name.dirty && name.touched)\">\n            <mat-error *ngIf=\"name.errors.required\">請輸入使用者名稱</mat-error>\n            <mat-error *ngIf=\"name.errors.pattern\">請輸入至少五個字母，數字</mat-error>\n          </div>\n        </mat-form-field>\n\n        <!-- 使用者性別-->\n        <div>\n          <mat-label>生理性別</mat-label>&nbsp;\n          <mat-radio-group formControlName=\"gender\">\n            <mat-radio-button value=\"M\">男性</mat-radio-button>\n            <mat-radio-button value=\"F\">女性</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n        <!-- 使用者email-->\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"E-mail\" formControlName=\"email\" maxlength=\"120\" required>\n          <div *ngIf=\"email.invalid && (email.dirty && email.touched)\">\n            <mat-error *ngIf=\"email.errors.required\">請輸入常用的E-mail</mat-error>\n            <mat-error *ngIf=\"email.errors.email\">請輸入正確的E-mail格式</mat-error>\n            <mat-error *ngIf=\"email.errors.maxlength\">請輸入正確的E-mail格式</mat-error>\n          </div>\n        </mat-form-field>\n\n        <!-- 使用者電話-->\n        <mat-form-field appearance=\"outline\">\n          <input matInput placeholder=\"聯絡電話\" id=\"mobile\" name=\"mobile\" formControlName=\"mobile\" class=\"form-control mobile\" minlength=\"10\" maxlength=\"10\" required>\n          <div *ngIf=\"mobile.invalid && (mobile.dirty && mobile.touched)\">\n            <mat-error *ngIf=\"mobile.errors.required\">請輸入聯絡電話</mat-error>\n            <mat-error *ngIf=\"mobile.errors.maxlength\">請輸入正確的電話號碼格式</mat-error>\n            <mat-error *ngIf=\"mobile.errors.minlength\">請輸入正確的電話號碼格式</mat-error>\n            <mat-error *ngIf=\"mobile.errors.pattern\">請輸入正確的電話號碼格式</mat-error>\n          </div>\n        </mat-form-field>\n\n      </mat-card-content>\n      <mat-card-actions class=\"btn-center\">\n        <button mat-raised-button class=\"addBtn\" type=\"submit\" [disabled]=\"!form.valid\">註冊</button>\n        <a mat-raised-button class=\"addBtn\" routerLink=\"/user/login\">登入</a>\n      </mat-card-actions>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"logo\">\n    <img src=\"../../assets/logo.png\" alt=\"LOGO\">\n    <div><mat-label>Welcome Tripo</mat-label></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _main_assistant_assistant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/assistant/assistant.module */ "./src/app/main/assistant/assistant.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_assistant_assistant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/assistant/assistant.component */ "./src/app/main/assistant/assistant.component.ts");
/* harmony import */ var _main_communication_communication_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/communication/communication.component */ "./src/app/main/communication/communication.component.ts");
/* harmony import */ var _main_communication_communication_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/communication/communication.module */ "./src/app/main/communication/communication.module.ts");
/* harmony import */ var _main_travel_travel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/travel/travel.module */ "./src/app/main/travel/travel.module.ts");
/* harmony import */ var _main_share_share_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/share/share.module */ "./src/app/main/share/share.module.ts");
/* harmony import */ var _main_share_share_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/share/share.component */ "./src/app/main/share/share.component.ts");











const routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
    { path: 'user', redirectTo: '/user', pathMatch: 'full' },
    { path: 'assistant', component: _main_assistant_assistant_component__WEBPACK_IMPORTED_MODULE_5__["AssistantComponent"] },
    { path: 'travel', redirectTo: '/travel', pathMatch: 'full' },
    { path: 'share', component: _main_share_share_component__WEBPACK_IMPORTED_MODULE_10__["ShareComponent"] },
    { path: 'communication', component: _main_communication_communication_component__WEBPACK_IMPORTED_MODULE_6__["CommunicationComponent"] },
    { path: 'personal', redirectTo: '/personal', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
            _main_assistant_assistant_module__WEBPACK_IMPORTED_MODULE_2__["AssistantModule"],
            _main_travel_travel_module__WEBPACK_IMPORTED_MODULE_8__["TravelModule"],
            _main_communication_communication_module__WEBPACK_IMPORTED_MODULE_7__["CommunicationModule"],
            _main_share_share_module__WEBPACK_IMPORTED_MODULE_9__["ShareModule"]
            // PersonalModule
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-footbar {\n  margin-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWZvb3RiYXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/user/service/user.service */ "./src/app/main/user/service/user.service.ts");




let AppComponent = class AppComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.login$ = this.userService.getLoginStatus();
        console.log(this.login$);
        if (!this.login$) {
            this.router.navigate(['/assistant']);
        }
        else {
            this.router.navigate(['/welcome']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _main_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: startupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startupServiceFactory", function() { return startupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/navbar/navbar.module */ "./src/app/main/navbar/navbar.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/fesm2015/agm-snazzy-info-window.js");
/* harmony import */ var _main_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/common */ "./src/app/main/common/index.ts");
/* harmony import */ var _main_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/footbar/footbar.component */ "./src/app/main/footbar/footbar.component.ts");
/* harmony import */ var _main_personal_personal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/personal/personal.module */ "./src/app/main/personal/personal.module.ts");
/* harmony import */ var _main_servcies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/servcies */ "./src/app/main/servcies/index.ts");
/* harmony import */ var _main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _main_servcies_startup_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/servcies/startup.service */ "./src/app/main/servcies/startup.service.ts");
/* harmony import */ var _main_user_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/user/user.module */ "./src/app/main/user/user.module.ts");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm2015/angular-svg-icon.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");




















function startupServiceFactory(startupService) { return () => startupService.load(); }
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            // NavbarComponent,
            _main_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_12__["FootbarComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                // apiKey: 'AIzaSyCmVGb627S813Q5SoaiuY9UO0rdjBJATkY',
                apiKey: 'AIzaSyA0Nh_Q887yIVC0eK4PeDZT12ouAXyz6Y0',
                language: 'zh-TW',
                libraries: ['places']
            }),
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_10__["AgmSnazzyInfoWindowModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            // NoopAnimationsModule
            _main_common__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
            _main_user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"],
            _main_personal_personal_module__WEBPACK_IMPORTED_MODULE_13__["PersonalModule"],
            _main_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_1__["NavbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_18__["AngularSvgIconModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('access_token');
                    },
                    allowedDomains: ['http://192.168.192.10:5000'],
                }
            })
        ],
        exports: [],
        providers: [
            _main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_15__["NavService"],
            _main_servcies__WEBPACK_IMPORTED_MODULE_14__["UtilsService"],
            _main_servcies_startup_service__WEBPACK_IMPORTED_MODULE_16__["StartupService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                useFactory: startupServiceFactory,
                deps: [_main_servcies_startup_service__WEBPACK_IMPORTED_MODULE_16__["StartupService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/main/assistant/assistant.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/assistant/assistant.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 2400px){\n  .swiper-slide{\n    width: screen*0.3px;\n    height: 500px;\n    /* display: flex; */\n    justify-content: center;\n    /* border-style: solid;\n    border-color: rgb(255, 255, 255); */\n  }\n  .content-container {\n    text-align: center;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 15% 10% 0 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n\n  mat-card {\n    margin: 2rem 10%;\n    padding: 0;\n  }\n\n  mat-card-actions {\n    margin: 2px;\n  }\n\n  .assistant {\n    padding: 0;\n    outline: solid 3px #f19c18;;\n    margin-bottom: 20% !important;\n  }\n}\n\n@media screen and (max-width: 900px){\n  .swiper-slide{\n    width: screen*0.3px;\n    height: 500px;\n    /* display: flex; */\n    justify-content: center;\n    /* border-style: solid;\n    border-color: rgb(255, 255, 255); */\n  }\n  .content-container {\n    text-align: center;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 20% 10% 0 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n\n}\n\n@media screen and (max-width: 600px){\n  .swiper-slide{\n    width: screen*0.3px;\n    height: 500px;\n    /* display: flex; */\n    justify-content: center;\n    /* border-style: solid;\n    border-color: rgb(255, 255, 255); */\n  }\n  .content-container {\n    text-align: center;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 25% 10% 0 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n\n}\n\n@media screen and (max-width: 350px){\n  .swiper-slide{\n    width: screen*0.3px;\n    height: 500px;\n    /* display: flex; */\n    justify-content: center;\n    /* border-style: solid;\n    border-color: rgb(255, 255, 255); */\n  }\n  .content-container {\n    text-align: center;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 30% 10% 0 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\n\n.swiper-container {\n  /* position: absolute; */\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  color: gray;\n}\n\n.previewimg {\n  height: 100%;\n  width: 100%;\n}\n\n.assistant {\n  padding: 0;\n  outline: solid 3px #f19c18;;\n  margin-bottom: 10%;\n}\n\n.travelBtn {\n  background-color: #308fcc;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2lzdGFudC9hc3Npc3RhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCO3VDQUNtQztFQUNyQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCO3VDQUNtQztFQUNyQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qjt1Q0FDbUM7RUFDckM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztBQUVGOztBQUdBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7dUNBQ21DO0VBQ3JDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtBQUNGOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6Ii4uL2Fzc2lzdGFudC9hc3Npc3RhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MDBweCl7XG4gIC5zd2lwZXItc2xpZGV7XG4gICAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cbiAgfVxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogc2NyZWVuKjAuM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBtYXJnaW46IDE1JSAxMCUgMCAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAycmVtIDEwJTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cblxuICAuYXNzaXN0YW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG91dGxpbmU6IHNvbGlkIDNweCAjZjE5YzE4OztcbiAgICBtYXJnaW4tYm90dG9tOiAyMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG4gIC5zd2lwZXItc2xpZGV7XG4gICAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cbiAgfVxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogc2NyZWVuKjAuM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBtYXJnaW46IDIwJSAxMCUgMCAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIC5zd2lwZXItc2xpZGV7XG4gICAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgKi9cbiAgfVxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogc2NyZWVuKjAuM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBtYXJnaW46IDI1JSAxMCUgMCAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cblxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcbiAgLnN3aXBlci1zbGlkZXtcbiAgICB3aWR0aDogc2NyZWVuKjAuM3B4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xuICB9XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIG1hcmdpbjogMzAlIDEwJSAwIDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLnN3aXBlci1jb250YWluZXIge1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5wcmV2aWV3aW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFzc2lzdGFudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IHNvbGlkIDNweCAjZjE5YzE4OztcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4udHJhdmVsQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/assistant/assistant.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/assistant/assistant.component.ts ***!
  \*******************************************************/
/*! exports provided: AssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantComponent", function() { return AssistantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servcies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servcies */ "./src/app/main/servcies/index.ts");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");





let AssistantComponent = class AssistantComponent {
    constructor(route, nav, util) {
        this.route = route;
        this.nav = nav;
        this.util = util;
        this.slides = ['../../../assets/a.jpg', '../../../assets/b.jpg', '../../../assets/c.jpg'];
        this.config = {
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            direction: 'horizontal',
            slidesPerView: 1,
            // spaceBetween: 300,
            centeredSlides: false,
            navigation: {
                nextEl: '.swiper-button-next.swiper-button-white',
                prevEl: '.swiper-button-prev.swiper-button-white',
                hideOnClick: true,
            },
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                hideOnClick: false
            },
        };
    }
    ngOnInit() {
        this.route.url.subscribe(res => this.nav.setUrl(res[0].path));
        console.log(this.util.isTokenExpired());
        // console.log(this.nav.getUrl());
    }
    onIndexChange(index) {
        console.log('Swiper index: ', index);
    }
};
AssistantComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] },
    { type: _servcies__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] }
];
AssistantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assistant',
        template: __webpack_require__(/*! raw-loader!./assistant.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/assistant/assistant.component.html"),
        styles: [__webpack_require__(/*! ./assistant.component.css */ "./src/app/main/assistant/assistant.component.css")]
    })
], AssistantComponent);



/***/ }),

/***/ "./src/app/main/assistant/assistant.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/assistant/assistant.module.ts ***!
  \****************************************************/
/*! exports provided: AssistantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantModule", function() { return AssistantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/material.module */ "./src/app/main/common/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _assistant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assistant.component */ "./src/app/main/assistant/assistant.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar.module */ "./src/app/main/navbar/navbar.module.ts");









const DEFAULT_SWIPER_CONFIG = {
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    direction: 'horizontal',
    slidesPerView: 1,
    // spaceBetween: 300,
    centeredSlides: true,
    navigation: true,
    loop: true,
    autoplay: true,
    speed: 3000,
    pagination: false
};
let AssistantModule = class AssistantModule {
};
AssistantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_assistant_component__WEBPACK_IMPORTED_MODULE_5__["AssistantComponent"]],
        imports: [
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _common_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            // NgxUsefulSwiperModule
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
        ],
        providers: [
            {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ]
    })
], AssistantModule);



/***/ }),

/***/ "./src/app/main/common/app.config.ts":
/*!*******************************************!*\
  !*** ./src/app/main/common/app.config.ts ***!
  \*******************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
class AppConfig {
    constructor() {
        // public readonly apiUrl = 'http://192.168.192.10:5000/api';
        this.apiUrl = 'https://tripo-backend-kdn66qm7uq-de.a.run.app/api';
    }
}


/***/ }),

/***/ "./src/app/main/common/index.ts":
/*!**************************************!*\
  !*** ./src/app/main/common/index.ts ***!
  \**************************************/
/*! exports provided: MaterialModule, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ "./src/app/main/common/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });

/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.config */ "./src/app/main/common/app.config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return _app_config__WEBPACK_IMPORTED_MODULE_1__["AppConfig"]; });





/***/ }),

/***/ "./src/app/main/common/material.module.ts":
/*!************************************************!*\
  !*** ./src/app/main/common/material.module.ts ***!
  \************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.config */ "./src/app/main/common/app.config.ts");








let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_6__["NgxMaterialTimepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"]
        ],
        exports: [
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_6__["NgxMaterialTimepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"]
        ],
        providers: [
            _app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfig"],
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"], useValue: 'zh-TW' },
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field{\n  width: 70%;\n  margin-right: 10px;\n}\n\na {\n  text-decoration: none;\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 60px 0;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.add-btn mat-icon{\n  color: #308fcc;\n  font-size: 1.8rem;\n  /* margin-left: 16px; */\n}\n\n.add-btn:hover mat-icon{\n  color: rgba(48, 143, 204, 0.5);\n  /* color: #fff; */\n}\n\n.search-btn{\n  background-color: #308fcc;\n  color: #fff;\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 1.8rem;\n}\n\n.search-btn:hover{\n  background-color: #f19c18;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mcmllbmQtZGlhbG9nL2FkZC1mcmllbmQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6ImFkZC1mcmllbmQtZGlhbG9nL2FkZC1mcmllbmQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggIzMwOGZjYyk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiA2MHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFkZC1idG4gbWF0LWljb257XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG59XG5cbi5hZGQtYnRuOmhvdmVyIG1hdC1pY29ue1xuICBjb2xvcjogcmdiYSg0OCwgMTQzLCAyMDQsIDAuNSk7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuXG4uc2VhcmNoLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgY29sb3I6ICNmZmY7XG4gIC8qIG1hcmdpbi1sZWZ0OiAxNnB4OyAqL1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5zZWFyY2gtYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjE5YzE4O1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddFriendDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendDialogComponent", function() { return AddFriendDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AddFriendDialogComponent = class AddFriendDialogComponent {
    constructor(dialogRef, fb, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
    }
    ngOnInit() {
        this.form = this.fb.group({
            search: [''],
        });
    }
    get content() { return this.form.get('search'); }
    searched() {
        console.log(this.searchWord);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AddFriendDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddFriendDialogComponent.prototype, "searchWord", void 0);
AddFriendDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-friend-dialog',
        template: __webpack_require__(/*! raw-loader!./add-friend-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.html"),
        styles: [__webpack_require__(/*! ./add-friend-dialog.component.css */ "./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], AddFriendDialogComponent);



/***/ }),

/***/ "./src/app/main/communication/communication-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/communication/communication-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CommunicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationRoutingModule", function() { return CommunicationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note/note.component */ "./src/app/main/communication/note/note.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication.component */ "./src/app/main/communication/communication.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room/room.component */ "./src/app/main/communication/room/room.component.ts");






const routes = [
    // { path: '', redirectTo: '/communication', pathMatch: 'full' },
    { path: 'communication', component: _communication_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComponent"] },
    { path: 'room/:id', component: _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"] },
    { path: 'note/:id', component: _note_note_component__WEBPACK_IMPORTED_MODULE_1__["NoteComponent"] },
];
let CommunicationRoutingModule = class CommunicationRoutingModule {
};
CommunicationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CommunicationRoutingModule);



/***/ }),

/***/ "./src/app/main/communication/communication.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/communication/communication.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 70px 0;\n  border-radius: 4px;\n  background-color: #fff;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n::ng-deep .mat-form-field{\n  width: 77%;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 0px;\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: .65em 0; /* Original top/bottom value was 1em. */\n  text-align: left;\n}\n::ng-deep .mat-input-element {\n  text-align: left;\n  position: relative;\n}\nmat-list {\n  margin: 0 0 !important;\n  padding: 0 0 !important;\n}\n.search-btn{\n  background-color: #308fcc;\n  color: #fff;\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 1.8rem;\n}\n.search-btn:hover{\n  background-color: #f19c18;\n  color: #fff;\n}\n.add-btn mat-icon{\n  position: fixed !important;\n  bottom: 90px;\n  right: 60px;\n  color: rgba(48, 143, 204, 0.5);\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 4rem !important;\n  z-index: 9999;\n}\n.add-btn:hover mat-icon{\n  color: rgba(48, 143, 204, 1);\n  /* color: #fff; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGdCQUFnQixFQUFFLHVDQUF1QztFQUN6RCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY29tbXVuaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiA3MHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogNzclO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IC42NWVtIDA7IC8qIE9yaWdpbmFsIHRvcC9ib3R0b20gdmFsdWUgd2FzIDFlbS4gKi9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1hdC1saXN0IHtcbiAgbWFyZ2luOiAwIDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnNlYXJjaC1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTljMTg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWJ0biBtYXQtaWNvbntcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogOTBweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIGNvbG9yOiByZ2JhKDQ4LCAxNDMsIDIwNCwgMC41KTtcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDRyZW0gIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmFkZC1idG46aG92ZXIgbWF0LWljb257XG4gIGNvbG9yOiByZ2JhKDQ4LCAxNDMsIDIwNCwgMSk7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/communication/communication.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/communication/communication.component.ts ***!
  \***************************************************************/
/*! exports provided: CommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function() { return CommunicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_friend_dialog_add_friend_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-friend-dialog/add-friend-dialog.component */ "./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _service_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/communication.service */ "./src/app/main/communication/service/communication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CommunicationComponent = class CommunicationComponent {
    constructor(fb, route, nav, communication, dialog) {
        this.fb = fb;
        this.route = route;
        this.nav = nav;
        this.communication = communication;
        this.dialog = dialog;
        this.today = new Date();
        this.nowT = new Date(Date.parse(new Date().toString()));
        this.nowTStr = this.getNowTH() + ':' + this.getNowTM() + ':' + this.getNowTS() + ' ' + this.getNowT();
        this.messages = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            search: ['']
        });
        this.route.url.subscribe(res => this.nav.setUrl(res[0].path));
        this.getMessages();
    }
    get search() { return this.form.get('search'); }
    searched() {
        console.log(this.searchWord);
    }
    getMessages() {
        this.communication.getMessages()
            .subscribe(messages => this.messages = messages);
    }
    getNowTH() {
        let nowTH = this.nowT.getHours();
        if (nowTH > 12) {
            nowTH = nowTH - 12;
        }
        if (nowTH >= 10) {
            return nowTH;
        }
        else {
            return '0' + nowTH;
        }
    }
    getNowTM() {
        const nowTM = this.nowT.getMinutes();
        if (nowTM >= 10) {
            return nowTM;
        }
        else {
            return '0' + nowTM;
        }
    }
    getNowTS() {
        const nowTS = this.nowT.getSeconds();
        if (nowTS >= 10) {
            return nowTS;
        }
        else {
            return '0' + nowTS;
        }
    }
    getNowT() {
        const nowTH = this.nowT.getHours();
        let now = '早上';
        if (nowTH > 12) {
            now = '下午';
            return now;
        }
        else {
            return now;
        }
    }
    addFriendDialog() {
        const dialogRef = this.dialog.open(_add_friend_dialog_add_friend_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AddFriendDialogComponent"], {
            width: '600px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                console.log(res);
                // this.travel.addPlace(res).subscribe(res2 => {
                //   if (res2) {
                //     this.snackbar.open('新增成功', 'OK', { duration: 3000});
                //     this.ngOnInit();
                //     // this.router.navigate(['/personal/account']);
                //     // this.userService.logout();
                //     // this.router.navigate(['/user/login']);
                //   } else {
                //     this.snackbar.open('新增失敗', 'OK', {duration: 3000});
                //   }
                // });
            }
        });
    }
};
CommunicationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] },
    { type: _service_communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], CommunicationComponent.prototype, "searchWord", void 0);
CommunicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-communication',
        template: __webpack_require__(/*! raw-loader!./communication.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/communication.component.html"),
        styles: [__webpack_require__(/*! ./communication.component.css */ "./src/app/main/communication/communication.component.css")]
    })
], CommunicationComponent);



/***/ }),

/***/ "./src/app/main/communication/communication.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/communication/communication.module.ts ***!
  \************************************************************/
/*! exports provided: CommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModule", function() { return CommunicationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note/note.component */ "./src/app/main/communication/note/note.component.ts");
/* harmony import */ var _navbar_room_navbar_room_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../navbar-room/navbar-room.module */ "./src/app/main/navbar-room/navbar-room.module.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../navbar/navbar.module */ "./src/app/main/navbar/navbar.module.ts");
/* harmony import */ var _service_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/communication.service */ "./src/app/main/communication/service/communication.service.ts");
/* harmony import */ var _communication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./communication-routing.module */ "./src/app/main/communication/communication-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./communication.component */ "./src/app/main/communication/communication.component.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./room/room.component */ "./src/app/main/communication/room/room.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/main/communication/friend-list/friend-list.component.ts");
/* harmony import */ var _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../navbar-back/navbarHback.module */ "./src/app/main/navbar-back/navbarHback.module.ts");
/* harmony import */ var _note_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./note/add-note-dialog/add-note-dialog.component */ "./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.ts");
/* harmony import */ var _note_massage_bottom_sheet_massage_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./note/massage-bottom-sheet/massage-bottom-sheet.component */ "./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.ts");
/* harmony import */ var _add_friend_dialog_add_friend_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-friend-dialog/add-friend-dialog.component */ "./src/app/main/communication/add-friend-dialog/add-friend-dialog.component.ts");



















const config = { url: ('http://localhost:4040'), options: {} };
let CommunicationModule = class CommunicationModule {
};
CommunicationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _communication_component__WEBPACK_IMPORTED_MODULE_8__["CommunicationComponent"],
            _room_room_component__WEBPACK_IMPORTED_MODULE_10__["RoomComponent"],
            _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_14__["FriendListComponent"],
            _note_note_component__WEBPACK_IMPORTED_MODULE_1__["NoteComponent"],
            _note_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AddNoteDialogComponent"],
            _note_massage_bottom_sheet_massage_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__["MassageBottomSheetComponent"],
            _add_friend_dialog_add_friend_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddFriendDialogComponent"]
        ],
        imports: [
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_3__["NavbarModule"],
            _navbar_room_navbar_room_module__WEBPACK_IMPORTED_MODULE_2__["NavbarRoomModule"],
            _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_15__["NavbarHbackModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _communication_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommunicationRoutingModule"],
            _common__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["SocketIoModule"].forRoot(config),
        ],
        providers: [
            _service_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"]
        ],
        entryComponents: [
            _note_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_16__["AddNoteDialogComponent"],
            _note_massage_bottom_sheet_massage_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_17__["MassageBottomSheetComponent"],
            _add_friend_dialog_add_friend_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AddFriendDialogComponent"]
        ]
    })
], CommunicationModule);



/***/ }),

/***/ "./src/app/main/communication/friend-list/friend-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/main/communication/friend-list/friend-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmllbmQtbGlzdC9mcmllbmQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/communication/friend-list/friend-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/communication/friend-list/friend-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FriendListComponent = class FriendListComponent {
    constructor() { }
    ngOnInit() {
    }
};
FriendListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friend-list',
        template: __webpack_require__(/*! raw-loader!./friend-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/friend-list/friend-list.component.html"),
        styles: [__webpack_require__(/*! ./friend-list.component.css */ "./src/app/main/communication/friend-list/friend-list.component.css")]
    })
], FriendListComponent);



/***/ }),

/***/ "./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field.schrduleSelect {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  text-align: center;\n}\n\n.add-btn mat-icon{\n  color: #308fcc;\n  font-size: 1.8rem;\n  margin-right: 5px;\n  right: 5px;\n  /* margin-left: 16px; */\n}\n\n.add-btn:hover mat-icon{\n  color: rgba(48, 143, 204, 0.5);\n  /* color: #fff; */\n}\n\n/* .mat-calendar-body-today:not(.mat-calendar-body-selected) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUvYWRkLW5vdGUtZGlhbG9nL2FkZC1ub3RlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFJQSw4REFBOEQiLCJmaWxlIjoibm90ZS9hZGQtbm90ZS1kaWFsb2cvYWRkLW5vdGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggIzMwOGZjYyk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQuc2NocmR1bGVTZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWRkLWJ0biBtYXQtaWNvbntcbiAgY29sb3I6ICMzMDhmY2M7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG59XG5cbi5hZGQtYnRuOmhvdmVyIG1hdC1pY29ue1xuICBjb2xvcjogcmdiYSg0OCwgMTQzLCAyMDQsIDAuNSk7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuXG5cblxuLyogLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddNoteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteDialogComponent", function() { return AddNoteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AddNoteDialogComponent = class AddNoteDialogComponent {
    constructor(dialogRef, fb, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
    }
    ngOnInit() {
        this.form = this.fb.group({
            title: [''],
            content: [''],
            image: ['']
        });
    }
    get title() { return this.form.get('title'); }
    get content() { return this.form.get('content'); }
    get image() { return this.form.get('image'); }
    save() {
        this.dialogRef.close(this.form.value);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    hasTitle() {
        this.hastitle = true;
    }
    hasContent() {
        this.hascontent = true;
    }
    addImage() {
    }
};
AddNoteDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddNoteDialogComponent.prototype, "file", void 0);
AddNoteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-note-dialog',
        template: __webpack_require__(/*! raw-loader!./add-note-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.html"),
        styles: [__webpack_require__(/*! ./add-note-dialog.component.css */ "./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], AddNoteDialogComponent);



/***/ }),

/***/ "./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-btn{\n  color: #308fcc;\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 1.8rem;\n}\n\n.icon-btn:hover {\n  color: #f19c18;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUvbWFzc2FnZS1ib3R0b20tc2hlZXQvbWFzc2FnZS1ib3R0b20tc2hlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoibm90ZS9tYXNzYWdlLWJvdHRvbS1zaGVldC9tYXNzYWdlLWJvdHRvbS1zaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tYnRue1xuICBjb2xvcjogIzMwOGZjYztcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmljb24tYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmMTljMTg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MassageBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassageBottomSheetComponent", function() { return MassageBottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MassageBottomSheetComponent = class MassageBottomSheetComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    ngOnInit() {
        this.today = new Date();
    }
    openLink(event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
    sendMessage() {
    }
};
MassageBottomSheetComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
];
MassageBottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-massage-bottom-sheet',
        template: __webpack_require__(/*! raw-loader!./massage-bottom-sheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.html"),
        styles: [__webpack_require__(/*! ./massage-bottom-sheet.component.css */ "./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.css")]
    })
], MassageBottomSheetComponent);



/***/ }),

/***/ "./src/app/main/communication/note/note.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/communication/note/note.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 60px 10px;\n  padding: 10px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 0;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field{\n  width: 77%;\n  margin-right: 10px;\n  margin-left: 10px;\n  margin-bottom: 0px;\n}\n\nmat-tab-group {\n  margin: 10px 0;\n}\n\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\n  color:#308fcc;\n  background-color: #fff;\n  }\n\n::ng-deep .mat-ink-bar {\n  background-color: var(--primary-color,#308fcc) !important;\n}\n\n.detail {\n  word-break:break-all;\n  text-align: justify;\n}\n\n.icon-btn{\n  color: #308fcc;\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 1.8rem;\n}\n\n.search-btn{\n  background-color: #308fcc;\n  color: #fff;\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 1.8rem;\n}\n\n.search-btn:hover{\n  background-color: #f19c18;\n  color: #fff;\n}\n\n.add-btn mat-icon{\n  position: fixed !important;\n  bottom: 90px;\n  right: 50px;\n  color: rgba(48, 143, 204, 0.5);\n  /* margin-left: 16px; */\n  display:inline-block;\n  font-size: 4rem !important;\n  z-index: 9999;\n}\n\n.add-btn:hover mat-icon{\n  color: rgba(48, 143, 204, 1);\n  /* color: #fff; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUvbm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEI7O0FBRUY7RUFDRSx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJub3RlL25vdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiA2MHB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggIzMwOGZjYyk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOiA3NyU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxubWF0LXRhYi1ncm91cCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6IzMwOGZjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwjMzA4ZmNjKSAhaW1wb3J0YW50O1xufVxuXG4uZGV0YWlsIHtcbiAgd29yZC1icmVhazpicmVhay1hbGw7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pY29uLWJ0bntcbiAgY29sb3I6ICMzMDhmY2M7XG4gIC8qIG1hcmdpbi1sZWZ0OiAxNnB4OyAqL1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5zZWFyY2gtYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogI2ZmZjtcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnNlYXJjaC1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMTljMTg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWRkLWJ0biBtYXQtaWNvbntcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogOTBweDtcbiAgcmlnaHQ6IDUwcHg7XG4gIGNvbG9yOiByZ2JhKDQ4LCAxNDMsIDIwNCwgMC41KTtcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDRyZW0gIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmFkZC1idG46aG92ZXIgbWF0LWljb257XG4gIGNvbG9yOiByZ2JhKDQ4LCAxNDMsIDIwNCwgMSk7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/communication/note/note.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/communication/note/note.component.ts ***!
  \***********************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-note-dialog/add-note-dialog.component */ "./src/app/main/communication/note/add-note-dialog/add-note-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _massage_bottom_sheet_massage_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./massage-bottom-sheet/massage-bottom-sheet.component */ "./src/app/main/communication/note/massage-bottom-sheet/massage-bottom-sheet.component.ts");







let NoteComponent = class NoteComponent {
    constructor(fb, userService, dialog, bottomSheet) {
        this.fb = fb;
        this.userService = userService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
    }
    ngOnInit() {
        this.form = this.fb.group({
            search: ['']
        });
    }
    get search() { return this.form.get('search'); }
    searched() {
        console.log(this.searchWord);
    }
    addNoteDialog() {
        console.log('AddNoteDialogComponent');
        const dialogRef = this.dialog.open(_add_note_dialog_add_note_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AddNoteDialogComponent"], {
            width: '600px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                console.log(res);
                // this.travel.addPlace(res).subscribe(res2 => {
                //   if (res2) {
                //     this.snackbar.open('新增成功', 'OK', { duration: 3000});
                //     this.ngOnInit();
                //     // this.router.navigate(['/personal/account']);
                //     // this.userService.logout();
                //     // this.router.navigate(['/user/login']);
                //   } else {
                //     this.snackbar.open('新增失敗', 'OK', {duration: 3000});
                //   }
                // });
            }
        });
    }
    openMessageBottomSheet() {
        this.bottomSheet.open(_massage_bottom_sheet_massage_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__["MassageBottomSheetComponent"]);
    }
};
NoteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], NoteComponent.prototype, "searchWord", void 0);
NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-note',
        template: __webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/note/note.component.html"),
        styles: [__webpack_require__(/*! ./note.component.css */ "./src/app/main/communication/note/note.component.css")]
    })
], NoteComponent);



/***/ }),

/***/ "./src/app/main/communication/room/room.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/communication/room/room.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 60px 0;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.chat-box {\n  height: 80%;\n}\n.send-box {\n  z-index: 2;\n  width: 100%;\n  position:fixed;\n  bottom:60px;\n  left:0px;\n  right: 0px;\n  height:30px;\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.bottom_wrapper .message_input_wrapper {\n  display: inline-block;\n  height: 40px;\n  border-radius: 25px;\n  border: 1px solid #bcbdc0;\n  width: 80%;\n  position: relative;\n  padding: 0 20px;\n}\n.bottom_wrapper .message_input_wrapper .message_input {\n  border: none;\n  height: 100%;\n  box-sizing: border-box;\n  width: 80%;\n  position: absolute;\n  outline-width: 0;\n  color: gray;\n}\n.bottom_wrapper .send_message {\n  width: 20%;\n  height: 40px;\n  display: inline-block;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: all 0.2s linear;\n  text-align:left;\n  float: right;\n}\n.sendbtn {\n  padding: 0;\n  margin: 0;\n  width: 30px;\n}\n.icon-btn{\n  color: #308fcc;\n  /* margin-left: 16px; */\n  display:inline-block;\n}\n.icon-btn:hover{\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n.chat {\n  width: 80%;\n  height: auto;\n}\n.chat-left .chat-text {\n  padding: .4rem 1rem;\n  border-radius: 10px;\n  background: #f2f2f2;\n  font-weight: 300;\n  line-height: 150%;\n  position: relative;\n}\n.chat-left .chat-text::before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border: 10px solid;\n  border-color: transparent #f2f2f2 transparent transparent;\n}\n.chat-right {\n  justify-content: flex-end !important;\n  text-align: right !important;\n  position: relative;\n  right: 0px;\n  display: grid !important;\n}\n.chat-avatar {\n  margin-right: 20px;\n}\n.chat-right .chat-avatar {\n  margin-left: 20px;\n  margin-right: 0;\n}\n.chat-right .chat-text {\n  text-align: right;\n  padding: .4rem 1rem;\n  border-radius: 10px;\n  background: #f2f2f2;\n  font-weight: 300;\n  line-height: 150%;\n  position: relative;\n}\n.chat-right .chat-text::before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  right: -20px;\n  border: 10px solid;\n  border-color: transparent transparent transparent #f2f2f2;\n}\n.mat-list-item-content{\n  display: inline-flex\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20vcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUdBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFHQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBRUE7RUFDRSxtQkFBbUI7RUFHbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlEQUF5RDtBQUMzRDtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUduQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseURBQXlEO0FBQzNEO0FBRUE7RUFDRTtBQUNGIiwiZmlsZSI6InJvb20vcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiA2MHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuXG4uY2hhdC1ib3gge1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLnNlbmQtYm94IHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICBib3R0b206NjBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDozMHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvdHRvbV93cmFwcGVyIC5tZXNzYWdlX2lucHV0X3dyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JjYmRjMDtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uYm90dG9tX3dyYXBwZXIgLm1lc3NhZ2VfaW5wdXRfd3JhcHBlciAubWVzc2FnZV9pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGNvbG9yOiBncmF5O1xufVxuLmJvdHRvbV93cmFwcGVyIC5zZW5kX21lc3NhZ2Uge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2VuZGJ0biB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cblxuLmljb24tYnRue1xuICBjb2xvcjogIzMwOGZjYztcbiAgLyogbWFyZ2luLWxlZnQ6IDE2cHg7ICovXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4uaWNvbi1idG46aG92ZXJ7XG4gIGNvbG9yOiAjZjE5YzE4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmNoYXQge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jaGF0LWxlZnQgLmNoYXQtdGV4dCB7XG4gIHBhZGRpbmc6IC40cmVtIDFyZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hhdC1sZWZ0IC5jaGF0LXRleHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjJmMmYyIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4uY2hhdC1yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XG59XG4uY2hhdC1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2hhdC1yaWdodCAuY2hhdC1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2hhdC1yaWdodCAuY2hhdC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IC40cmVtIDFyZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hhdC1yaWdodCAuY2hhdC10ZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAtMjBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmMmYyZjI7XG59XG5cbi5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4XG59Il19 */"

/***/ }),

/***/ "./src/app/main/communication/room/room.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/communication/room/room.component.ts ***!
  \***********************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/communication.service */ "./src/app/main/communication/service/communication.service.ts");





let RoomComponent = class RoomComponent {
    constructor(route, communication, location) {
        this.route = route;
        this.communication = communication;
        this.location = location;
        this.messageList = [];
    }
    ngOnInit() {
        this.getMessage();
        this.communication
            .getRoomMessages()
            .subscribe((message) => {
            this.messageList.push(message);
        });
        this.communication.setInroom(this.message.name, this.message.id);
    }
    sendMessage() {
        this.communication.sendRoomMessage(this.newMessage);
        console.log(this.newMessage);
        this.newMessage = '';
    }
    getMessage() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.communication.getMessage(id)
            .subscribe(message => this.message = message);
    }
    goBack() {
        this.location.back();
    }
};
RoomComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-room',
        template: __webpack_require__(/*! raw-loader!./room.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/communication/room/room.component.html"),
        styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/main/communication/room/room.component.css")]
    })
], RoomComponent);



/***/ }),

/***/ "./src/app/main/communication/service/communication.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/communication/service/communication.service.ts ***!
  \*********************************************************************/
/*! exports provided: Messages, CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const Messages = [
    { id: 1, name: 'Emma', avatar: '../../../assets/avatar1.jpeg', content: '嗨，好久不見', time: '06:11:26 上午' },
    { id: 2, name: 'Martin', avatar: '../../../assets/avatar2.jpeg', content: '找時間吃個飯吧？', time: '06:11:26 下午' },
    { id: 3, name: 'Amy', avatar: '../../../assets/avatar1.jpeg', content: '嗨，好久不見', time: '06:11:26 上午' },
    { id: 4, name: 'John', avatar: '../../../assets/avatar2.jpeg', content: '嗨，好久不見，找時間吃個飯吧？', time: '06:11:26 下午' },
];
let CommunicationService = class CommunicationService {
    constructor(socket) {
        this.socket = socket;
        this.isInRoom = false;
        //   this.headers = new HttpHeaders();
        //   this.headers.set('Content-Type', 'application/json');
    }
    //   public sendRoomMessage(message) {
    //     this.socket.emit('sendMessage', message);
    //   }
    //   public getRoomMessages = () => {
    //     return Observable.create((observer) => {
    //             this.socket.on('sendMessage', (message) => {
    //                 observer.next(message);
    //             });
    //     });
    // }
    getRoomMessages() {
        return this.socket
            .fromEvent('msg')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.msg));
    }
    sendRoomMessage(msg) {
        this.socket
            .emit('msg', msg);
    }
    getMessages() {
        const messages = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Messages);
        return messages;
    }
    getMessage(id) {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        // tslint:disable-next-line:no-non-null-assertion
        const message = Messages.find(m => m.id === id);
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(message);
    }
    setInroom(name, id) {
        this.isInRoom = true;
        this.roomName = name;
        this.roomId = id;
    }
    IsInRoom() {
        return this.isInRoom;
    }
    getRoomName() {
        return this.roomName;
    }
    getRoomId() {
        return this.roomId;
    }
};
CommunicationService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommunicationService);



/***/ }),

/***/ "./src/app/main/footbar/footbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/footbar/footbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".free{\n  font-size: 1.8rem;\n  color:#308fcc;;\n}\n\n.activited {\n  font-size: 1.8rem;\n  color:#f19c18;\n}\n\n.footbar {\n  z-index: 1;\n  width: 100%;\n  background-color:#b8dcfa;\n  color: white;\n  position:fixed;\n  bottom:0px;\n  left:0px;\n  right: 0px;\n  height:50px;\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.row {\n  width: 25%;\n  font-size: 36px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Zvb3RiYXIvZm9vdGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCIiwiZmlsZSI6Ii4uL2Zvb3RiYXIvZm9vdGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyZWV7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjojMzA4ZmNjOztcbn1cblxuLmFjdGl2aXRlZCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjojZjE5YzE4O1xufVxuXG5cbi5mb290YmFyIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6I2I4ZGNmYTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgYm90dG9tOjBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yb3cge1xuICB3aWR0aDogMjUlO1xuICBmb250LXNpemU6IDM2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/footbar/footbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/footbar/footbar.component.ts ***!
  \***************************************************/
/*! exports provided: FootbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbarComponent", function() { return FootbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/service/user.service */ "./src/app/main/user/service/user.service.ts");






let FootbarComponent = class FootbarComponent {
    constructor(userService, router, breakpointObserver) {
        this.userService = userService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.links = [{ route: 'assistant', icon: 'home', name: '主頁', content: true },
            { route: 'travel', icon: 'edit_road', name: '行程', content: false },
            { route: 'share', icon: 'travel_explore', name: '位置共享', content: false },
            { route: 'communication', icon: 'people', name: '旅伴', content: false },
            { route: 'personal', icon: 'settings', name: '設定', content: false }];
        this.activeLink = this.links[0];
    }
    ngOnInit() {
        this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Web]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(match => match.matches));
        // this.login$ = Observable.of(true);
        this.login$ = this.userService.getLoginStatus();
        this.user$ = this.userService.getCurrentUser();
    }
    logout() {
        // this.login$ = Observable.of(false);
        this.userService.logout();
        this.router.navigate(['/']);
    }
    routeChange(event) {
        if (event === 'assistant') {
            return this.links[0].content = true,
                this.links[1].content = false,
                this.links[2].content = false,
                this.links[3].content = false,
                this.links[4].content = false;
        }
        if (event === 'travel') {
            return this.links[1].content = true,
                this.links[0].content = false,
                this.links[2].content = false,
                this.links[3].content = false,
                this.links[4].content = false;
        }
        if (event === 'share') {
            return this.links[2].content = true,
                this.links[1].content = false,
                this.links[0].content = false,
                this.links[3].content = false,
                this.links[4].content = false;
        }
        if (event === 'communication') {
            return this.links[3].content = true,
                this.links[0].content = false,
                this.links[1].content = false,
                this.links[2].content = false,
                this.links[4].content = false;
        }
        if (event === 'personal') {
            return this.links[4].content = true,
                this.links[0].content = false,
                this.links[1].content = false,
                this.links[2].content = false,
                this.links[3].content = false;
        }
    }
};
FootbarComponent.ctorParameters = () => [
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }
];
FootbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footbar',
        template: __webpack_require__(/*! raw-loader!./footbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/footbar/footbar.component.html"),
        styles: [__webpack_require__(/*! ./footbar.component.css */ "./src/app/main/footbar/footbar.component.css")]
    })
], FootbarComponent);



/***/ }),

/***/ "./src/app/main/navbar-back/navbarHback.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/navbar-back/navbarHback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  vertical-align: middle;\n  font-size: 1.8rem;\n}\n\n.icon-text {\n  display: flex;\n  align-items: center;\n}\n\n.navbar {\n  z-index: 1;\n  width: 100%;\n  height:70px;\n  background-color:#b8dcfa;\n  color: white;\n  position:fixed;\n  top:0px;\n  left:0px;\n  right: 0px;\n  padding: 0 0;\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n}\n\n.divlogo {\n  width: 90%;\n  padding: 0 42.5%;\n}\n\n.divlogo2 {\n  width: 80%;\n  padding: 0 30%;\n}\n\n.logo{\n  display:block;\n  align-items: center;\n  margin-top: 5px;\n  /* margin: 0 0; */\n  padding: 0 0;\n  width: 80px;\n  /* text-align: center; */\n}\n\n.to-right {\n  flex: 1 1 auto;\n}\n\n.sidebar_category{ /*選單項目*/\n  display:flex;\n  align-items: center;\n  padding: 10px 10px;/*內邊距*/\n}\n\n.menubtn{ /*小漢堡*/\n  color: #308fcc;\n  margin-left: 16px;\n  display:inline-block;\n}\n\n.menubtn:hover{ /*小漢堡*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.list-item{ /*選單項目圖片的型*/\n  color:#f19c18;\n  font-size: 1.8rem;\n}\n\n.bellbtn{ /*小鈴鐺*/\n  color:#308fcc;\n  margin-right: 16px;\n  display:inline-block;\n}\n\n.bellbtn:hover{ /*小鈴鐺*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.bellbtn:target{ /*小鈴鐺*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.sidebar-font{ /*選單項目的型*/\n  font-size:1rem;/*將字體變小一點*/\n  margin-left:24px;/*將字與圖片的距離拉開*/\n  font-weight:bold;/*將字變粗體*/\n  color:#f19c18;\n}\n\n.route {\n  width: 150px;\n  /* margin: 8px 20px; */\n}\n\n.cdk-overlay-pane {width: 100%;}\n\n.mat-menu-panel {width: 100%;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdmJhci1iYWNrL25hdmJhckhiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLG1CQUFtQixPQUFPO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLENBQUMsTUFBTTtBQUMzQjs7QUFFQSxVQUFVLE1BQU07RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxnQkFBZ0IsTUFBTTtFQUNwQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLFlBQVksV0FBVztFQUNyQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBLFVBQVUsTUFBTTtFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBLGdCQUFnQixNQUFNO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsaUJBQWlCLE1BQU07RUFDckIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSxlQUFlLFNBQVM7RUFDdEIsY0FBYyxDQUFDLFVBQVU7RUFDekIsZ0JBQWdCLENBQUMsYUFBYTtFQUM5QixnQkFBZ0IsQ0FBQyxRQUFRO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUEsbUJBQW1CLFdBQVcsQ0FBQzs7QUFDL0IsaUJBQWlCLFdBQVcsQ0FBQyIsImZpbGUiOiIuLi9uYXZiYXItYmFjay9uYXZiYXJIYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmljb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I2I4ZGNmYTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOjBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHBhZGRpbmc6IDAgMDtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmRpdmxvZ28ge1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAwIDQyLjUlO1xufVxuLmRpdmxvZ28yIHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMCAzMCU7XG59XG5cbi5sb2dve1xuICBkaXNwbGF5OmJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8qIG1hcmdpbjogMCAwOyAqL1xuICBwYWRkaW5nOiAwIDA7XG4gIHdpZHRoOiA4MHB4O1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi50by1yaWdodCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc2lkZWJhcl9jYXRlZ29yeXsgLyrpgbjllq7poIXnm64qL1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDsvKuWFp+mCiui3nSovXG59XG5cbi5tZW51YnRueyAvKuWwj+a8ouWgoSovXG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5tZW51YnRuOmhvdmVyeyAvKuWwj+a8ouWgoSovXG4gIGNvbG9yOiAjZjE5YzE4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmxpc3QtaXRlbXsgLyrpgbjllq7poIXnm67lnJbniYfnmoTlnosqL1xuICBjb2xvcjojZjE5YzE4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmJlbGxidG57IC8q5bCP6Yi06ZC6Ki9cbiAgY29sb3I6IzMwOGZjYztcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLmJlbGxidG46aG92ZXJ7IC8q5bCP6Yi06ZC6Ki9cbiAgY29sb3I6ICNmMTljMTg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uYmVsbGJ0bjp0YXJnZXR7IC8q5bCP6Yi06ZC6Ki9cbiAgY29sb3I6ICNmMTljMTg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uc2lkZWJhci1mb250eyAvKumBuOWWrumgheebrueahOWeiyovXG4gIGZvbnQtc2l6ZToxcmVtOy8q5bCH5a2X6auU6K6K5bCP5LiA6bueKi9cbiAgbWFyZ2luLWxlZnQ6MjRweDsvKuWwh+Wtl+iIh+WclueJh+eahOi3nembouaLiemWiyovXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7LyrlsIflrZforornspfpq5QqL1xuICBjb2xvcjojZjE5YzE4O1xufVxuXG4ucm91dGUge1xuICB3aWR0aDogMTUwcHg7XG4gIC8qIG1hcmdpbjogOHB4IDIwcHg7ICovXG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHt3aWR0aDogMTAwJTt9XG4ubWF0LW1lbnUtcGFuZWwge3dpZHRoOiAxMDAlO31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/navbar-back/navbarHback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/navbar-back/navbarHback.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarHbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarHbackComponent", function() { return NavbarHbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let NavbarHbackComponent = class NavbarHbackComponent {
    constructor(breakpointObserver, location) {
        this.breakpointObserver = breakpointObserver;
        this.location = location;
        this.links = [{ route: 'assistant', icon: 'home', name: '主頁' }, { route: 'travel', icon: 'edit_road', name: '行程' },
            { route: 'communication', icon: 'people', name: '旅伴' }, { route: 'personal', icon: 'settings', name: '設定' }];
    }
    ngOnInit() {
        this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Tablet]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(match => match.matches));
    }
    goBack() {
        this.location.back();
    }
};
NavbarHbackComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
NavbarHbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-back',
        template: __webpack_require__(/*! raw-loader!./navbarHback.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/navbar-back/navbarHback.component.html"),
        styles: [__webpack_require__(/*! ./navbarHback.component.css */ "./src/app/main/navbar-back/navbarHback.component.css")]
    })
], NavbarHbackComponent);



/***/ }),

/***/ "./src/app/main/navbar-back/navbarHback.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/navbar-back/navbarHback.module.ts ***!
  \********************************************************/
/*! exports provided: NavbarHbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarHbackModule", function() { return NavbarHbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _navbarHback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbarHback.component */ "./src/app/main/navbar-back/navbarHback.component.ts");







let NavbarHbackModule = class NavbarHbackModule {
};
NavbarHbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _navbarHback_component__WEBPACK_IMPORTED_MODULE_6__["NavbarHbackComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ],
        exports: [
            _navbarHback_component__WEBPACK_IMPORTED_MODULE_6__["NavbarHbackComponent"]
        ],
        providers: []
    })
], NavbarHbackModule);



/***/ }),

/***/ "./src/app/main/navbar-room/navbar-room.component.css":
/*!************************************************************!*\
  !*** ./src/app/main/navbar-room/navbar-room.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  vertical-align: middle;\n  font-size: 1.8rem;\n}\n\n.icon-text {\n  display: flex;\n  align-items: center;\n}\n\n.navbar {\n  z-index: 1;\n  width: 100%;\n  height:70px;\n  background-color:#b8dcfa;\n  color: white;\n  position:fixed;\n  top:0px;\n  left:0px;\n  right: 0px;\n  padding: 0 0;\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n}\n\n.divlogo {\n  width: 90%;\n  padding: 0 42.5%;\n}\n\n.divlogo2 {\n  width: 75%;\n  padding: 0 33%;\n  color: black;\n}\n\n.logo{\n  display:block;\n  align-items: center;\n  margin-top: 5px;\n  /* margin: 0 0; */\n  padding: 0 0;\n  width: 80px;\n  /* text-align: center; */\n}\n\n.to-right {\n  flex: 0 0 auto;\n}\n\n.sidebar_category{ /*選單項目*/\n  display:flex;\n  align-items: center;\n  padding: 10px 10px;/*內邊距*/\n}\n\n.menubtn{ /*小漢堡*/\n  color: #308fcc;\n  margin-left: 28px;\n  display:inline-block;\n}\n\n.menubtn-threedots{ /*三點*/\n  color: #308fcc;\n  display:inline-block;\n}\n\n.menubtn:hover{ /*小漢堡*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.menubtn.menubtn-threedots{ /*小漢堡*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.list-item{ /*選單項目圖片的型*/\n  color:#f19c18;\n  font-size: 1.8rem;\n}\n\n.bellbtn{ /*小鈴鐺*/\n  color:#308fcc;\n  margin-right: 16px;\n  display:inline-block;\n}\n\n.bellbtn:hover{ /*小鈴鐺*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.bellbtn:target{ /*小鈴鐺*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.sidebar-font{ /*選單項目的型*/\n  font-size:1rem;/*將字體變小一點*/\n  margin-left:24px;/*將字與圖片的距離拉開*/\n  font-weight:bold;/*將字變粗體*/\n  color:#f19c18;\n}\n\n.route {\n  width: 150px;\n  /* margin: 8px 20px; */\n}\n\n.cdk-overlay-pane {width: 100%;}\n\n.mat-menu-panel {width: 100%;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdmJhci1yb29tL25hdmJhci1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLG1CQUFtQixPQUFPO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCLENBQUMsTUFBTTtBQUMzQjs7QUFFQSxVQUFVLE1BQU07RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxvQkFBb0IsS0FBSztFQUN2QixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBLGdCQUFnQixNQUFNO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsNEJBQTRCLE1BQU07RUFDaEMsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSxZQUFZLFdBQVc7RUFDckIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVLE1BQU07RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQSxnQkFBZ0IsTUFBTTtFQUNwQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLGlCQUFpQixNQUFNO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZSxTQUFTO0VBQ3RCLGNBQWMsQ0FBQyxVQUFVO0VBQ3pCLGdCQUFnQixDQUFDLGFBQWE7RUFDOUIsZ0JBQWdCLENBQUMsUUFBUTtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBLG1CQUFtQixXQUFXLENBQUM7O0FBQy9CLGlCQUFpQixXQUFXLENBQUMiLCJmaWxlIjoiLi4vbmF2YmFyLXJvb20vbmF2YmFyLXJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5pY29uLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNiOGRjZmE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHRvcDowcHg7XG4gIGxlZnQ6MHB4O1xuICByaWdodDogMHB4O1xuICBwYWRkaW5nOiAwIDA7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5kaXZsb2dvIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMCA0Mi41JTtcbn1cbi5kaXZsb2dvMiB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmc6IDAgMzMlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2dve1xuICBkaXNwbGF5OmJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8qIG1hcmdpbjogMCAwOyAqL1xuICBwYWRkaW5nOiAwIDA7XG4gIHdpZHRoOiA4MHB4O1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi50by1yaWdodCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4uc2lkZWJhcl9jYXRlZ29yeXsgLyrpgbjllq7poIXnm64qL1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweDsvKuWFp+mCiui3nSovXG59XG5cbi5tZW51YnRueyAvKuWwj+a8ouWgoSovXG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5tZW51YnRuLXRocmVlZG90c3sgLyrkuInpu54qL1xuICBjb2xvcjogIzMwOGZjYztcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5tZW51YnRuOmhvdmVyeyAvKuWwj+a8ouWgoSovXG4gIGNvbG9yOiAjZjE5YzE4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLm1lbnVidG4ubWVudWJ0bi10aHJlZWRvdHN7IC8q5bCP5ryi5aChKi9cbiAgY29sb3I6ICNmMTljMTg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4ubGlzdC1pdGVteyAvKumBuOWWrumgheebruWclueJh+eahOWeiyovXG4gIGNvbG9yOiNmMTljMTg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uYmVsbGJ0bnsgLyrlsI/piLTpkLoqL1xuICBjb2xvcjojMzA4ZmNjO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4uYmVsbGJ0bjpob3ZlcnsgLyrlsI/piLTpkLoqL1xuICBjb2xvcjogI2YxOWMxODtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5iZWxsYnRuOnRhcmdldHsgLyrlsI/piLTpkLoqL1xuICBjb2xvcjogI2YxOWMxODtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5zaWRlYmFyLWZvbnR7IC8q6YG45Zau6aCF55uu55qE5Z6LKi9cbiAgZm9udC1zaXplOjFyZW07LyrlsIflrZfpq5TororlsI/kuIDpu54qL1xuICBtYXJnaW4tbGVmdDoyNHB4Oy8q5bCH5a2X6IiH5ZyW54mH55qE6Led6Zui5ouJ6ZaLKi9cbiAgZm9udC13ZWlnaHQ6Ym9sZDsvKuWwh+Wtl+iuiueyl+mrlCovXG4gIGNvbG9yOiNmMTljMTg7XG59XG5cbi5yb3V0ZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgLyogbWFyZ2luOiA4cHggMjBweDsgKi9cbn1cblxuLmNkay1vdmVybGF5LXBhbmUge3dpZHRoOiAxMDAlO31cbi5tYXQtbWVudS1wYW5lbCB7d2lkdGg6IDEwMCU7fVxuIl19 */"

/***/ }),

/***/ "./src/app/main/navbar-room/navbar-room.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/navbar-room/navbar-room.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarRoomComponent", function() { return NavbarRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _communication_service_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../communication/service/communication.service */ "./src/app/main/communication/service/communication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let NavbarRoomComponent = class NavbarRoomComponent {
    constructor(breakpointObserver, location, Common) {
        this.breakpointObserver = breakpointObserver;
        this.location = location;
        this.Common = Common;
        this.links = [{ route: 'assistant', icon: 'home', name: '主頁' }, { route: 'travel', icon: 'edit_road', name: '行程' },
            { route: 'communication', icon: 'people', name: '旅伴' }, { route: 'personal', icon: 'settings', name: '設定' }];
    }
    ngOnInit() {
        this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Tablet]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(match => match.matches));
        if (this.Common.IsInRoom()) {
            this.roomName = this.Common.getRoomName();
            this.roomId = this.Common.getRoomId();
        }
    }
    goBack() {
        this.location.back();
    }
};
NavbarRoomComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _communication_service_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"] }
];
NavbarRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar-room',
        template: __webpack_require__(/*! raw-loader!./navbar-room.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/navbar-room/navbar-room.component.html"),
        styles: [__webpack_require__(/*! ./navbar-room.component.css */ "./src/app/main/navbar-room/navbar-room.component.css")]
    })
], NavbarRoomComponent);



/***/ }),

/***/ "./src/app/main/navbar-room/navbar-room.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/navbar-room/navbar-room.module.ts ***!
  \********************************************************/
/*! exports provided: NavbarRoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarRoomModule", function() { return NavbarRoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _navbar_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-room.component */ "./src/app/main/navbar-room/navbar-room.component.ts");







let NavbarRoomModule = class NavbarRoomModule {
};
NavbarRoomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _navbar_room_component__WEBPACK_IMPORTED_MODULE_6__["NavbarRoomComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ],
        exports: [
            _navbar_room_component__WEBPACK_IMPORTED_MODULE_6__["NavbarRoomComponent"]
        ],
        providers: []
    })
], NavbarRoomModule);



/***/ }),

/***/ "./src/app/main/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  vertical-align: middle;\n  font-size: 1.8rem;\n}\n\n.icon-text {\n  display: flex;\n  align-items: center;\n}\n\n.navbar {\n  z-index: 1;\n  width: 100%;\n  height:70px;\n  background-color:#b8dcfa;\n  color: white;\n  position:fixed;\n  top:0px;\n  left:0px;\n  right: 0px;\n  padding: 0 0;\n  display:flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n}\n\n.divlogo {\n  width: 90%;\n  padding: 0 42.5%;\n}\n\n.divlogo2 {\n  width: 80%;\n  padding: 0 40%;\n}\n\n.logo{\n  display:block;\n  align-items: center;\n  margin-top: 5px;\n  /* margin: 0 0; */\n  padding: 0 0;\n  width: 80px;\n  /* text-align: center; */\n}\n\n.to-right {\n  flex: 1 1 auto;\n}\n\n.sidebar_category{ /*選單項目*/\n  display:flex;\n  align-items: center;\n  padding: 10px 10px;/*內邊距*/\n}\n\n.menubtn{ /*小漢堡*/\n  color: #308fcc;\n  margin-left: 16px;\n  display:inline-block;\n}\n\n.menubtn:hover{ /*小漢堡*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.list-item{ /*選單項目圖片的型*/\n  color:#f19c18;\n  font-size: 1.8rem;\n}\n\n.bellbtn{ /*小鈴鐺*/\n  color:#308fcc;\n  margin-right: 16px;\n  display:inline-block;\n}\n\n.bellbtn:hover{ /*小鈴鐺*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.bellbtn:target{ /*小鈴鐺*/\n  color: #f19c18;\n  font-size: 1.8rem;\n}\n\n.sidebar-font{ /*選單項目的型*/\n  font-size:1rem;/*將字體變小一點*/\n  margin-left:24px;/*將字與圖片的距離拉開*/\n  font-weight:bold;/*將字變粗體*/\n  color:#f19c18;\n}\n\n.route {\n  width: 150px;\n  /* margin: 8px 20px; */\n}\n\n.cdk-overlay-pane {width: 100%;}\n\n.mat-menu-panel {width: 100%;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsbUJBQW1CLE9BQU87RUFDeEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0IsQ0FBQyxNQUFNO0FBQzNCOztBQUVBLFVBQVUsTUFBTTtFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBLGdCQUFnQixNQUFNO0VBQ3BCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUEsWUFBWSxXQUFXO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUEsVUFBVSxNQUFNO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUEsZ0JBQWdCLE1BQU07RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQSxpQkFBaUIsTUFBTTtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBLGVBQWUsU0FBUztFQUN0QixjQUFjLENBQUMsVUFBVTtFQUN6QixnQkFBZ0IsQ0FBQyxhQUFhO0VBQzlCLGdCQUFnQixDQUFDLFFBQVE7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQSxtQkFBbUIsV0FBVyxDQUFDOztBQUMvQixpQkFBaUIsV0FBVyxDQUFDIiwiZmlsZSI6Ii4uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5pY29uLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNiOGRjZmE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHRvcDowcHg7XG4gIGxlZnQ6MHB4O1xuICByaWdodDogMHB4O1xuICBwYWRkaW5nOiAwIDA7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5kaXZsb2dvIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMCA0Mi41JTtcbn1cbi5kaXZsb2dvMiB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDAgNDAlO1xufVxuXG4ubG9nb3tcbiAgZGlzcGxheTpibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICAvKiBtYXJnaW46IDAgMDsgKi9cbiAgcGFkZGluZzogMCAwO1xuICB3aWR0aDogODBweDtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG4udG8tcmlnaHQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnNpZGViYXJfY2F0ZWdvcnl7IC8q6YG45Zau6aCF55uuKi9cbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7Lyrlhafpgorot50qL1xufVxuXG4ubWVudWJ0bnsgLyrlsI/mvKLloKEqL1xuICBjb2xvcjogIzMwOGZjYztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4ubWVudWJ0bjpob3ZlcnsgLyrlsI/mvKLloKEqL1xuICBjb2xvcjogI2YxOWMxODtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5saXN0LWl0ZW17IC8q6YG45Zau6aCF55uu5ZyW54mH55qE5Z6LKi9cbiAgY29sb3I6I2YxOWMxODtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5iZWxsYnRueyAvKuWwj+mItOmQuiovXG4gIGNvbG9yOiMzMDhmY2M7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5iZWxsYnRuOmhvdmVyeyAvKuWwj+mItOmQuiovXG4gIGNvbG9yOiAjZjE5YzE4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmJlbGxidG46dGFyZ2V0eyAvKuWwj+mItOmQuiovXG4gIGNvbG9yOiAjZjE5YzE4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLnNpZGViYXItZm9udHsgLyrpgbjllq7poIXnm67nmoTlnosqL1xuICBmb250LXNpemU6MXJlbTsvKuWwh+Wtl+mrlOiuiuWwj+S4gOm7niovXG4gIG1hcmdpbi1sZWZ0OjI0cHg7LyrlsIflrZfoiIflnJbniYfnmoTot53pm6Lmi4nplosqL1xuICBmb250LXdlaWdodDpib2xkOy8q5bCH5a2X6K6K57KX6auUKi9cbiAgY29sb3I6I2YxOWMxODtcbn1cblxuLnJvdXRlIHtcbiAgd2lkdGg6IDE1MHB4O1xuICAvKiBtYXJnaW46IDhweCAyMHB4OyAqL1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7d2lkdGg6IDEwMCU7fVxuLm1hdC1tZW51LXBhbmVsIHt3aWR0aDogMTAwJTt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/service/user.service */ "./src/app/main/user/service/user.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let NavbarComponent = class NavbarComponent {
    constructor(userService, router, nav, breakpointObserver) {
        this.userService = userService;
        this.router = router;
        this.nav = nav;
        this.breakpointObserver = breakpointObserver;
        this.links = [{ route: 'assistant', icon: 'home', name: '主頁' }, { route: 'travel', icon: 'edit_road', name: '行程' },
            { route: 'communication', icon: 'people', name: '旅伴' }, { route: 'personal', icon: 'settings', name: '設定' }];
    }
    ngOnInit() {
        this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Tablet]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(match => match.matches));
        // this.login$ = Observable.of(true);
        this.login$ = this.userService.getLoginStatus();
        this.user$ = this.userService.getCurrentUser();
        // setTimeout(() => {
        //   this.chkURL();
        // }, 1);
        // setInterval(() => {
        //   this.chkURL();
        // }, 1);
    }
    // logout() {
    //     // this.login$ = Observable.of(false);
    //     this.userService.logout();
    //     this.router.navigate(['/user/login']);
    // }
    chkURL() {
        this.currentUrl = this.nav.currentUrl;
        // console.log(this.currentUrl);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/main/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/main/navbar/navbar.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/navbar/navbar.module.ts ***!
  \**********************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar.component */ "./src/app/main/navbar/navbar.component.ts");







let NavbarModule = class NavbarModule {
};
NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ],
        exports: [
            _navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]
        ],
        providers: []
    })
], NavbarModule);



/***/ }),

/***/ "./src/app/main/personal/about-tripo/about-tripo-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/about-tripo-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AboutTripoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTripoRoutingModule", function() { return AboutTripoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_tripo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-tripo.component */ "./src/app/main/personal/about-tripo/about-tripo.component.ts");
/* harmony import */ var _copyright_detail_copyright_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyright-detail/copyright-detail.component */ "./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.ts");
/* harmony import */ var _data_detail_data_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-detail/data-detail.component */ "./src/app/main/personal/about-tripo/data-detail/data-detail.component.ts");
/* harmony import */ var _service_detail_service_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-detail/service-detail.component */ "./src/app/main/personal/about-tripo/service-detail/service-detail.component.ts");







const routes = [
    {
        path: 'about',
        children: [
            { path: '', component: _about_tripo_component__WEBPACK_IMPORTED_MODULE_3__["AboutTripoComponent"], pathMatch: 'full' },
            { path: 'service_detail', component: _service_detail_service_detail_component__WEBPACK_IMPORTED_MODULE_6__["ServiceDetailComponent"] },
            { path: 'data_detail', component: _data_detail_data_detail_component__WEBPACK_IMPORTED_MODULE_5__["DataDetailComponent"] },
            { path: 'copyright_detail', component: _copyright_detail_copyright_detail_component__WEBPACK_IMPORTED_MODULE_4__["CopyrightDetailComponent"] },
        ]
    }
];
let AboutTripoRoutingModule = class AboutTripoRoutingModule {
};
AboutTripoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutTripoRoutingModule);



/***/ }),

/***/ "./src/app/main/personal/about-tripo/about-tripo.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/about-tripo.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  margin: 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\n\nmat-icon {\n  color: rgba(0, 0, 0, 0.4);\n  vertical-align: middle !important;\n}\n\nmat-label {\n  font-size: 0.8rem;\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n\n}\n\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.list2 {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2Fib3V0LXRyaXBvL2Fib3V0LXRyaXBvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9COztBQUV0Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiLi4vcGVyc29uYWwvYWJvdXQtdHJpcG8vYWJvdXQtdHJpcG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0IHtcbiAgbWFyZ2luOiAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiAxMDBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5saXN0aXRlbSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcblxufVxuLmxpc3RpdGVtOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmxpc3QyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/personal/about-tripo/about-tripo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/about-tripo.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutTripoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTripoComponent", function() { return AboutTripoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutTripoComponent = class AboutTripoComponent {
    constructor() {
        this.linklist = [{ route: 'service_detail', name: '服務條款' },
            { route: 'data_detail', name: '資料政策' },
            { route: 'copyright_detail', name: '著作權聲明' }];
    }
    ngOnInit() {
    }
};
AboutTripoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-tripo',
        template: __webpack_require__(/*! raw-loader!./about-tripo.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/about-tripo.component.html"),
        styles: [__webpack_require__(/*! ./about-tripo.component.css */ "./src/app/main/personal/about-tripo/about-tripo.component.css")]
    })
], AboutTripoComponent);



/***/ }),

/***/ "./src/app/main/personal/about-tripo/about-tripo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/about-tripo.module.ts ***!
  \*****************************************************************/
/*! exports provided: AboutTripoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTripoModule", function() { return AboutTripoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _about_tripo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-tripo-routing.module */ "./src/app/main/personal/about-tripo/about-tripo-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _copyright_detail_copyright_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./copyright-detail/copyright-detail.component */ "./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.ts");
/* harmony import */ var _data_detail_data_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-detail/data-detail.component */ "./src/app/main/personal/about-tripo/data-detail/data-detail.component.ts");
/* harmony import */ var _service_detail_service_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service-detail/service-detail.component */ "./src/app/main/personal/about-tripo/service-detail/service-detail.component.ts");
/* harmony import */ var _about_tripo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-tripo.component */ "./src/app/main/personal/about-tripo/about-tripo.component.ts");
/* harmony import */ var _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../navbar-back/navbarHback.module */ "./src/app/main/navbar-back/navbarHback.module.ts");














let AboutTripoModule = class AboutTripoModule {
};
AboutTripoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _about_tripo_component__WEBPACK_IMPORTED_MODULE_12__["AboutTripoComponent"],
            _data_detail_data_detail_component__WEBPACK_IMPORTED_MODULE_10__["DataDetailComponent"],
            _service_detail_service_detail_component__WEBPACK_IMPORTED_MODULE_11__["ServiceDetailComponent"],
            _copyright_detail_copyright_detail_component__WEBPACK_IMPORTED_MODULE_9__["CopyrightDetailComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_13__["NavbarHbackModule"],
            _about_tripo_routing_module__WEBPACK_IMPORTED_MODULE_1__["AboutTripoRoutingModule"],
            _common__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
        ],
        entryComponents: []
    })
], AboutTripoModule);



/***/ }),

/***/ "./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white ;\n  margin-left: 0 !important;\n  margin-right: 0;\n  margin-top: 90px;\n  max-width: 100%!important;\n  width: 100% !important;\n  height: 100vh;\n}\n\n.detail {\n  word-break:break-all;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2Fib3V0LXRyaXBvL2NvcHlyaWdodC1kZXRhaWwvY29weXJpZ2h0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiIuLi9wZXJzb25hbC9hYm91dC10cmlwby9jb3B5cmlnaHQtZGV0YWlsL2NvcHlyaWdodC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSA7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmRldGFpbCB7XG4gIHdvcmQtYnJlYWs6YnJlYWstYWxsO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CopyrightDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightDetailComponent", function() { return CopyrightDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CopyrightDetailComponent = class CopyrightDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
CopyrightDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-copyright-detail',
        template: __webpack_require__(/*! raw-loader!./copyright-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.html"),
        styles: [__webpack_require__(/*! ./copyright-detail.component.css */ "./src/app/main/personal/about-tripo/copyright-detail/copyright-detail.component.css")]
    })
], CopyrightDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/about-tripo/data-detail/data-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/data-detail/data-detail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white ;\n  margin-left: 0 !important;\n  margin-right: 0;\n  margin-top: 90px;\n  max-width: 100%!important;\n  width: 100% !important;\n  height: 100vh;\n}\n\n.detail {\n  word-break:break-all;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2Fib3V0LXRyaXBvL2RhdGEtZGV0YWlsL2RhdGEtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL2Fib3V0LXRyaXBvL2RhdGEtZGV0YWlsL2RhdGEtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5kZXRhaWwge1xuICB3b3JkLWJyZWFrOmJyZWFrLWFsbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/personal/about-tripo/data-detail/data-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/data-detail/data-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: DataDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDetailComponent", function() { return DataDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataDetailComponent = class DataDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
DataDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-detail',
        template: __webpack_require__(/*! raw-loader!./data-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/data-detail/data-detail.component.html"),
        styles: [__webpack_require__(/*! ./data-detail.component.css */ "./src/app/main/personal/about-tripo/data-detail/data-detail.component.css")]
    })
], DataDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/about-tripo/service-detail/service-detail.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/service-detail/service-detail.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white ;\n  margin-left: 0 !important;\n  margin-right: 0;\n  margin-top: 90px;\n  max-width: 100%!important;\n  width: 100% !important;\n  height: 100vh;\n}\n\n.detail {\n  word-break:break-all;\n  text-align: justify;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2Fib3V0LXRyaXBvL3NlcnZpY2UtZGV0YWlsL3NlcnZpY2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL2Fib3V0LXRyaXBvL3NlcnZpY2UtZGV0YWlsL3NlcnZpY2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5kZXRhaWwge1xuICB3b3JkLWJyZWFrOmJyZWFrLWFsbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/personal/about-tripo/service-detail/service-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/personal/about-tripo/service-detail/service-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ServiceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailComponent", function() { return ServiceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceDetailComponent = class ServiceDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-detail',
        template: __webpack_require__(/*! raw-loader!./service-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/about-tripo/service-detail/service-detail.component.html"),
        styles: [__webpack_require__(/*! ./service-detail.component.css */ "./src/app/main/personal/about-tripo/service-detail/service-detail.component.css")]
    })
], ServiceDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/account/account-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/personal/account/account-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pwd_detail_pwd_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pwd-detail/pwd-detail.component */ "./src/app/main/personal/account/pwd-detail/pwd-detail.component.ts");
/* harmony import */ var _mobile_detail_mobile_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-detail/mobile-detail.component */ "./src/app/main/personal/account/mobile-detail/mobile-detail.component.ts");
/* harmony import */ var _email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-detail/email-detail.component */ "./src/app/main/personal/account/email-detail/email-detail.component.ts");
/* harmony import */ var _username_detail_username_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./username-detail/username-detail.component */ "./src/app/main/personal/account/username-detail/username-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.component */ "./src/app/main/personal/account/account.component.ts");
/* harmony import */ var _name_detail_name_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./name-detail/name-detail.component */ "./src/app/main/personal/account/name-detail/name-detail.component.ts");









const routes = [
    {
        path: 'account',
        children: [
            { path: '', component: _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"], pathMatch: 'full' },
            { path: 'username', component: _username_detail_username_detail_component__WEBPACK_IMPORTED_MODULE_4__["UsernameDetailComponent"] },
            { path: 'name', component: _name_detail_name_detail_component__WEBPACK_IMPORTED_MODULE_8__["NameDetailComponent"] },
            { path: 'email', component: _email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_3__["EmailDetailComponent"] },
            { path: 'mobile', component: _mobile_detail_mobile_detail_component__WEBPACK_IMPORTED_MODULE_2__["MobileDetailComponent"] },
            { path: 'pwd', component: _pwd_detail_pwd_detail_component__WEBPACK_IMPORTED_MODULE_1__["PwdDetailComponent"] }
        ]
    }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/main/personal/account/account.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main/personal/account/account.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  margin: 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\n\nmat-icon {\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.5rem !important;\n  vertical-align: middle !important;\n}\n\nmat-label {\n  font-size: 0.8rem;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  -webkit-filter:drop-shadow(0px 0px 4px #308fcc);\n          filter:drop-shadow(0px 0px 4px #308fcc);\n  background-color: #308fcc;\n  border-color: #308fcc;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:white;\n  border-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-ripple .mat-ripple-element {\n  background-color: rgba(29, 135, 229, .2);\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n}\n\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.list2 {\n  margin-top: 30px;\n}\n\n.right-word{ /*帳號細節的列表右邊的灰色字*/\n  text-align: right !important;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.8rem;\n  width: 300px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQ0FBdUM7VUFBdkMsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxhQUFhLGdCQUFnQjtFQUMzQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2QiLCJmaWxlIjoiLi4vcGVyc29uYWwvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGlzdCB7XG4gIG1hcmdpbjogMCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMDtcbn1cblxubWF0LWljb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cblxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggNHB4ICMzMDhmY2MpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBib3JkZXItY29sb3I6ICMzMDhmY2M7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTM1LCAyMjksIC4yKTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3RpdGVtIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmxpc3RpdGVtOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmxpc3QyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnJpZ2h0LXdvcmR7IC8q5biz6Jmf57Sw56+A55qE5YiX6KGo5Y+z6YKK55qE54Gw6Imy5a2XKi9cbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/account/account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/personal/account/account.component.ts ***!
  \************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AccountComponent = class AccountComponent {
    constructor(userService, snackbar, router) {
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.member = [];
        this.userInfo = [];
        this.privacy = [];
        this.eventarr = ['friendCanGet', 'nobodyCanGet'];
        this.Llist = [{ id: 0, name: '不顯示', control: 'nobodyCanGet', content: false },
            { id: 1, name: '朋友，除了以下封鎖名單無法看到您位置', control: 'friendCanGet', content: true }];
    }
    ngOnInit() {
        this.privacy = [];
        this.getMembers();
        this.linklist = [{ route: 'username', name: '帳號名稱', data: this.username },
            { route: 'name', name: '名稱', data: this.name },
            { route: 'email', name: '電子郵件', data: this.email },
            { route: 'mobile', name: '電話', data: this.mobile },
            { route: 'pwd', name: '密碼' }];
        this.getPrivacy();
    }
    onToggleChange(event) {
        if (event === 'friendCanGet') {
            if (this.Llist[0].content === true) {
                // this.privacy[0] = {privacy: 1};
                this.newPrivacy = 1;
                console.log(event, ':', JSON.stringify(this.newPrivacy));
                // this.update(JSON.stringify(this.privacy[0]));
                this.update(this.newPrivacy);
                return this.Llist[0].content = false, this.Llist[1].content = true;
            }
            else {
                // this.privacy[0] = {privacy: 0};
                this.newPrivacy = 0;
                console.log(event, ':', JSON.stringify(this.newPrivacy));
                // this.update(JSON.stringify(this.privacy[0]));
                this.update(this.newPrivacy);
                return this.Llist[0].content = true, this.Llist[1].content = false;
            }
        }
        if (event === 'nobodyCanGet') {
            if (this.Llist[1].content === true) {
                // this.privacy[0] = {privacy: 0};
                this.newPrivacy = 0;
                console.log(event, ':', JSON.stringify(this.newPrivacy));
                // this.update(JSON.stringify(this.privacy[0]));
                this.update(this.newPrivacy);
                return this.Llist[0].content = true, this.Llist[1].content = false;
            }
            else {
                // this.privacy[0] = {privacy: 1};
                this.newPrivacy = 1;
                console.log(event, ':', JSON.stringify(this.newPrivacy));
                // this.update(JSON.stringify(this.privacy[0]));
                this.update(this.newPrivacy);
                return this.Llist[0].content = false, this.Llist[1].content = true;
            }
        }
    }
    getMembers() {
        // this.userService.getUserFromServer().subscribe(data => this.member.push(data));
        // this.userService.getMembers().subscribe(member => this.member = member);
        // // let i: any;
        // for (const i of this.member) {
        //   const info = {avatar: i.user_info.avatar, create_time: i.user_info.create_time,
        //     email: i.user_info.email, gender: i.user_info.gender, mobile: i.user_info.mobile,
        //     name: i.user_info.name, permission_id: i.user_info.permission_id, username: i.user_info.username};
        //   this.userInfo.push(info);
        // }
        // this.userService.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info));
        this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
        this.userService.getUser();
        this.userService.getUserInfo().subscribe(data => {
            this.userInfo = data;
            console.log(data);
            for (const i of this.userInfo) {
                this.username = i.username;
                this.name = i.name;
                this.email = i.email;
                this.mobile = i.mobile;
            }
        });
    }
    getPrivacy() {
        this.userService.getUserPrivacyServer().subscribe(data => this.privacy.push(data));
        // this.userService.getUserPrivacy().subscribe(data => this.privacy = data);
        this.userService.getUserPrivacy().subscribe(data => {
            this.privacy = data;
            console.log(data);
            for (const i of this.privacy) {
                if (this.privacy[this.privacy.length - 1].privacy_setting === 0) {
                    this.Llist[0].content = true;
                    this.Llist[1].content = false;
                }
                else {
                    this.Llist[1].content = true;
                    this.Llist[0].content = false;
                }
            }
        });
    }
    update(data) {
        console.log(data);
        this.userService.updateUserPrivacy(data)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('修改成功', 'OK', { duration: 3000 });
                this.router.navigate(['/personal/account']);
                // this.userService.logout();
                // this.router.navigate(['/user/login']);
            }
            else {
                this.snackbar.open('修改失敗', 'OK', { duration: 3000 });
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/main/personal/account/account.component.css")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/main/personal/account/account.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/personal/account/account.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/main/personal/account/account-routing.module.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account.component */ "./src/app/main/personal/account/account.component.ts");
/* harmony import */ var _email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email-detail/email-detail.component */ "./src/app/main/personal/account/email-detail/email-detail.component.ts");
/* harmony import */ var _mobile_detail_mobile_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mobile-detail/mobile-detail.component */ "./src/app/main/personal/account/mobile-detail/mobile-detail.component.ts");
/* harmony import */ var _pwd_detail_pwd_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pwd-detail/pwd-detail.component */ "./src/app/main/personal/account/pwd-detail/pwd-detail.component.ts");
/* harmony import */ var _username_detail_username_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./username-detail/username-detail.component */ "./src/app/main/personal/account/username-detail/username-detail.component.ts");
/* harmony import */ var _name_detail_name_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./name-detail/name-detail.component */ "./src/app/main/personal/account/name-detail/name-detail.component.ts");
/* harmony import */ var _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../navbar-back/navbarHback.module */ "./src/app/main/navbar-back/navbarHback.module.ts");
















let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
            _username_detail_username_detail_component__WEBPACK_IMPORTED_MODULE_13__["UsernameDetailComponent"],
            _email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_10__["EmailDetailComponent"],
            _mobile_detail_mobile_detail_component__WEBPACK_IMPORTED_MODULE_11__["MobileDetailComponent"],
            _pwd_detail_pwd_detail_component__WEBPACK_IMPORTED_MODULE_12__["PwdDetailComponent"],
            _name_detail_name_detail_component__WEBPACK_IMPORTED_MODULE_14__["NameDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_15__["NavbarHbackModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountRoutingModule"],
            _common__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ],
        entryComponents: []
    })
], AccountModule);



/***/ }),

/***/ "./src/app/main/personal/account/email-detail/email-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/main/personal/account/email-detail/email-detail.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n  font-size: 0.8rem;\n}\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 100%;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  text-align: center !important;\n}\nbutton {\n  width: 100%;\n}\n.content-container {\n  text-align: center;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.finish-btn{ /*完成按鈕的顏色*/\n  background-color: #308fcc !important;\n  color: white;\n}\n.finish-btn:hover{ /*完成按鈕的顏色的變色*/\n  background-color: #027bc7;\n  color: white;\n}\n.content {\n  width: 80%;\n  margin: auto;\n  text-align: left !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2FjY291bnQvZW1haWwtZGV0YWlsL2VtYWlsLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6QztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0EsYUFBYSxVQUFVO0VBQ3JCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFFQSxtQkFBbUIsYUFBYTtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QiIsImZpbGUiOiIuLi9wZXJzb25hbC9hY2NvdW50L2VtYWlsLWRldGFpbC9lbWFpbC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XG4gIGNvbG9yOiByZWQ7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDNweCByZWQpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5maW5pc2gtYnRueyAvKuWujOaIkOaMiemIleeahOmhj+iJsiovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhmY2MgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmluaXNoLWJ0bjpob3ZlcnsgLyrlrozmiJDmjInpiJXnmoTpoY/oibLnmoTororoibIqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3YmM3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/personal/account/email-detail/email-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/personal/account/email-detail/email-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDetailComponent", function() { return EmailDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/main/servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/user/service/user.service */ "./src/app/main/user/service/user.service.ts");







let EmailDetailComponent = class EmailDetailComponent {
    constructor(fb, userService, snackbar, router, route, nav) {
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.nav = nav;
        this.userInfo = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
        });
        this.getEmail();
    }
    get email() { return this.form.get('email'); }
    update() {
        console.log(this.form.value);
        this.userService.updateUserInfo(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('修改成功', 'OK', { duration: 3000 });
                this.router.navigate(['/personal/account']);
            }
            else {
                this.snackbar.open('重複的電子郵件', 'OK', { duration: 3000 });
            }
        });
    }
    getEmail() {
        // this.userService.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info));
        this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
        this.userService.getUser();
        this.userService.getUserInfo().subscribe(data => {
            this.userInfo = data;
            for (const i of this.userInfo) {
                this.initEmail = i.email;
            }
        });
    }
};
EmailDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] }
];
EmailDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-detail',
        template: __webpack_require__(/*! raw-loader!./email-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/email-detail/email-detail.component.html"),
        styles: [__webpack_require__(/*! ./email-detail.component.css */ "./src/app/main/personal/account/email-detail/email-detail.component.css")]
    })
], EmailDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/account/mobile-detail/mobile-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/main/personal/account/mobile-detail/mobile-detail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n  font-size: 0.8rem;\n}\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 100%;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  text-align: center !important;\n}\nbutton {\n  width: 100%;\n}\n.content-container {\n  text-align: center;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.finish-btn{ /*完成按鈕的顏色*/\n  background-color: #308fcc !important;\n  color: white;\n}\n.finish-btn:hover{ /*完成按鈕的顏色的變色*/\n  background-color: #027bc7;\n  color: white;\n}\n.content {\n  width: 80%;\n  margin: auto;\n  text-align: left !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2FjY291bnQvbW9iaWxlLWRldGFpbC9tb2JpbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQSxhQUFhLFVBQVU7RUFDckIsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUVBLG1CQUFtQixhQUFhO0VBQzlCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL2FjY291bnQvbW9iaWxlLWRldGFpbC9tb2JpbGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XG4gIGNvbG9yOiByZWQ7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDNweCByZWQpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5maW5pc2gtYnRueyAvKuWujOaIkOaMiemIleeahOmhj+iJsiovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhmY2MgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmluaXNoLWJ0bjpob3ZlcnsgLyrlrozmiJDmjInpiJXnmoTpoY/oibLnmoTororoibIqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3YmM3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/personal/account/mobile-detail/mobile-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/personal/account/mobile-detail/mobile-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: MobileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDetailComponent", function() { return MobileDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/main/user/service/user.service */ "./src/app/main/user/service/user.service.ts");









let MobileDetailComponent = class MobileDetailComponent {
    constructor(fb, el, userService, snackbar, router, route, nav) {
        this.fb = fb;
        this.el = el;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.nav = nav;
        this.userInfo = [];
    }
    ngOnInit() {
        this.mobile = this.el.nativeElement.querySelector('#mobile');
        this.iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_5__(this.mobile, {
            allowDropdown: true,
            initialCountry: 'tw',
            separateDialCode: true
        });
        this.form = this.fb.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]
        });
        this.getMobile();
    }
    get mobiles() { return this.form.get('mobile'); }
    update() {
        console.log(this.form.value);
        this.userService.updateUserInfo(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('修改成功', 'OK', { duration: 3000 });
                this.router.navigate(['/personal/account']);
            }
            else {
                this.snackbar.open('重複的電話號碼', 'OK', { duration: 3000 });
            }
        });
    }
    getMobile() {
        // this.userService.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info));
        this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
        this.userService.getUser();
        this.userService.getUserInfo().subscribe(data => {
            this.userInfo = data;
            for (const i of this.userInfo) {
                this.initMobile = i.mobile;
            }
        });
    }
};
MobileDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MobileDetailComponent.prototype, "mobile", void 0);
MobileDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mobile-detail',
        template: __webpack_require__(/*! raw-loader!./mobile-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/mobile-detail/mobile-detail.component.html"),
        styles: [__webpack_require__(/*! ./mobile-detail.component.css */ "./src/app/main/personal/account/mobile-detail/mobile-detail.component.css")]
    })
], MobileDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/account/name-detail/name-detail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main/personal/account/name-detail/name-detail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n  font-size: 0.8rem;\n}\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 100%;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  text-align: center !important;\n}\nbutton {\n  width: 100%;\n}\n.content-container {\n  text-align: center;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.finish-btn{ /*完成按鈕的顏色*/\n  background-color: #308fcc !important;\n  color: white;\n}\n.finish-btn:hover{ /*完成按鈕的顏色的變色*/\n  background-color: #027bc7;\n  color: white;\n}\n.content {\n  width: 80%;\n  margin: auto;\n  text-align: left !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2FjY291bnQvbmFtZS1kZXRhaWwvbmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7QUFFQTtFQUNFLFVBQVU7RUFDViwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBLGFBQWEsVUFBVTtFQUNyQixvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkO0FBRUEsbUJBQW1CLGFBQWE7RUFDOUIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoiLi4vcGVyc29uYWwvYWNjb3VudC9uYW1lLWRldGFpbC9uYW1lLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggIzMwOGZjYyk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcbiAgY29sb3I6IHJlZDtcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4IHJlZCk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogMTAwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmZpbmlzaC1idG57IC8q5a6M5oiQ5oyJ6YiV55qE6aGP6ImyKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5maW5pc2gtYnRuOmhvdmVyeyAvKuWujOaIkOaMiemIleeahOmhj+iJsueahOiuiuiJsiovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjdiYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/personal/account/name-detail/name-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/personal/account/name-detail/name-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: NameDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameDetailComponent", function() { return NameDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/main/servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/user/service/user.service */ "./src/app/main/user/service/user.service.ts");







let NameDetailComponent = class NameDetailComponent {
    constructor(fb, userService, snackbar, router, route, nav) {
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.nav = nav;
        this.member = [];
        this.userInfo = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,64}')],
        });
        // this.getUserName();
    }
    get name() { return this.form.get('name'); }
    update() {
        console.log(this.form.value);
        this.userService.updateUserInfo(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('修改成功', 'OK', { duration: 3000 });
                this.router.navigate(['/personal/account']);
                // this.userService.logout();
                // this.router.navigate(['/user/login']);
            }
            else {
                this.snackbar.open('重複的名稱', 'OK', { duration: 3000 });
            }
        });
    }
};
NameDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] }
];
NameDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-name-detail',
        template: __webpack_require__(/*! raw-loader!./name-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/name-detail/name-detail.component.html"),
        styles: [__webpack_require__(/*! ./name-detail.component.css */ "./src/app/main/personal/account/name-detail/name-detail.component.css")]
    })
], NameDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/account/pwd-detail/pwd-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main/personal/account/pwd-detail/pwd-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n  font-size: 0.8rem;\n}\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 100%;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  text-align: center !important;\n}\nbutton {\n  width: 100%;\n}\n.content-container {\n  text-align: center;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.finish-btn{ /*完成按鈕的顏色*/\n  background-color: #308fcc !important;\n  color: white;\n}\n.finish-btn:hover{ /*完成按鈕的顏色的變色*/\n  background-color: #027bc7;\n  color: white;\n}\n.content {\n  width: 80%;\n  margin: auto;\n  text-align: left !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2FjY291bnQvcHdkLWRldGFpbC9wd2QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQSxhQUFhLFVBQVU7RUFDckIsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUVBLG1CQUFtQixhQUFhO0VBQzlCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL2FjY291bnQvcHdkLWRldGFpbC9wd2QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMzMDhmY2M7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDNweCAjMzA4ZmNjKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xuICBjb2xvcjogcmVkO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggcmVkKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiAxMDBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZmluaXNoLWJ0bnsgLyrlrozmiJDmjInpiJXnmoTpoY/oibIqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpbmlzaC1idG46aG92ZXJ7IC8q5a6M5oiQ5oyJ6YiV55qE6aGP6Imy55qE6K6K6ImyKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN2JjNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/account/pwd-detail/pwd-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/personal/account/pwd-detail/pwd-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: PwdDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwdDetailComponent", function() { return PwdDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/main/servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/user/service/user.service */ "./src/app/main/user/service/user.service.ts");







let PwdDetailComponent = class PwdDetailComponent {
    constructor(fb, snackbar, userService, router, route, nav) {
        this.fb = fb;
        this.snackbar = snackbar;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.nav = nav;
    }
    ngOnInit() {
        this.form = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,20}')],
            confirmpwd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,20}')],
            confirmpwd2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,20}')],
        });
    }
    get password() { return this.form.get('password'); }
    get confirmpwd() { return this.form.get('confirmpwd'); }
    get confirmpwd2() { return this.form.get('confirmpwd2'); }
    chkPwd() {
        if (this.confirmpwd.value !== this.confirmpwd2.value) {
            this.confirmpwd2.setErrors({ mismatch: true });
        }
        else {
            this.confirmpwd2.setErrors(null);
        }
    }
    update() {
        console.log(this.form.value);
        const pwd = this.form.get('password').value;
        const newPwd = this.form.get('confirmpwd').value;
        // const newPWD = JSON.stringify({ password: pwd , new_password: newPwd});
        // const newPWD = JSON.parse('{"password":' && pwd && ', "new_password":' && newPwd && '}');
        // console.log(newPWD);
        this.userService.updateUserPwd(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('修改成功', 'OK', { duration: 3000 });
                // this.router.navigate(['/personal/account']);
                this.userService.logout();
                this.router.navigate(['/user/login']);
            }
            else {
                this.snackbar.open('密碼錯誤', 'OK', { duration: 3000 });
            }
        });
    }
};
PwdDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: src_app_main_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] }
];
PwdDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pwd-detail',
        template: __webpack_require__(/*! raw-loader!./pwd-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/pwd-detail/pwd-detail.component.html"),
        styles: [__webpack_require__(/*! ./pwd-detail.component.css */ "./src/app/main/personal/account/pwd-detail/pwd-detail.component.css")]
    })
], PwdDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/account/username-detail/username-detail.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main/personal/account/username-detail/username-detail.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-label {\n  font-size: 0.8rem;\n}\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 100%;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-infix {\n  text-align: center !important;\n}\nbutton {\n  width: 100%;\n}\n.content-container {\n  text-align: center;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.finish-btn{ /*完成按鈕的顏色*/\n  background-color: #308fcc !important;\n  color: white;\n}\n.finish-btn:hover{ /*完成按鈕的顏色的變色*/\n  background-color: #027bc7;\n  color: white;\n}\n.content {\n  width: 80%;\n  margin: auto;\n  text-align: left !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2FjY291bnQvdXNlcm5hbWUtZGV0YWlsL3VzZXJuYW1lLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6QztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0EsYUFBYSxVQUFVO0VBQ3JCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFFQSxtQkFBbUIsYUFBYTtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QiIsImZpbGUiOiIuLi9wZXJzb25hbC9hY2NvdW50L3VzZXJuYW1lLWRldGFpbC91c2VybmFtZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XG4gIGNvbG9yOiByZWQ7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDNweCByZWQpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5maW5pc2gtYnRueyAvKuWujOaIkOaMiemIleeahOmhj+iJsiovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhmY2MgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmluaXNoLWJ0bjpob3ZlcnsgLyrlrozmiJDmjInpiJXnmoTpoY/oibLnmoTororoibIqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3YmM3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/personal/account/username-detail/username-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/personal/account/username-detail/username-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: UsernameDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameDetailComponent", function() { return UsernameDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");







let UsernameDetailComponent = class UsernameDetailComponent {
    constructor(fb, userService, snackbar, router, route, nav) {
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.nav = nav;
        this.member = [];
        this.userInfo = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9-_]{5,64}')],
        });
        // this.getUserName();
    }
    get username() { return this.form.get('username'); }
    update() {
        console.log(this.form.value);
        this.userService.updateUserInfo(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('修改成功', 'OK', { duration: 3000 });
                // this.router.navigate(['/personal/account']);
                this.userService.logout();
                this.router.navigate(['/user/login']);
            }
            else {
                this.snackbar.open('重複的使用者名稱', 'OK', { duration: 3000 });
            }
        });
    }
};
UsernameDetailComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_main_servcies_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"] }
];
UsernameDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-username-detail',
        template: __webpack_require__(/*! raw-loader!./username-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/account/username-detail/username-detail.component.html"),
        styles: [__webpack_require__(/*! ./username-detail.component.css */ "./src/app/main/personal/account/username-detail/username-detail.component.css")]
    })
], UsernameDetailComponent);



/***/ }),

/***/ "./src/app/main/personal/avatar-dialog/avatar-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/personal/avatar-dialog/avatar-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wZXJzb25hbC9hdmF0YXItZGlhbG9nL2F2YXRhci1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/personal/avatar-dialog/avatar-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/personal/avatar-dialog/avatar-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: AvatarDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDialogComponent", function() { return AvatarDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");






let AvatarDialogComponent = class AvatarDialogComponent {
    constructor(dialogRef, data, fb, userService, snackbar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.allimages = [];
        this.slidedata = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            avatar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,64}')]
        });
    }
    get avatar() { return this.form.get('avatar'); }
    register() {
        // this.userService.register(this.form.value)
        //   .subscribe(res => {
        //     if (res) {
        //       this.snackbar.open('註冊成功', 'OK', { duration: 3000});
        //     } else {
        //       this.snackbar.open('請檢查使用者帳號', 'OK', {duration: 3000});
        //     }
        // });
        this.slideimage = [this.allimages];
        this.dialogRef.close(this.slideimage);
        // console.log(this.form.value.name);
        // this.data.name = this.form.value.name;
    }
    imgupload(event) {
        if (event.target.files && event.target.files.length >= 0) {
            let i;
            for (i = 0; i < event.target.files.length; i++) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]); // read file as data url
                reader.onload = () => {
                    this.slideimage = reader.result;
                    this.allimages.push(this.slideimage);
                    this.haveimg();
                    console.log(this.slideimage);
                };
            }
        }
    }
    //   deleteimg(index: number) {
    //     this.allimages.splice(index, 1);
    //     console.log('index:', index);
    //     this.haveimg();
    //     // this.slideimage = '';
    //     // if (this.slideimage) {
    //     //     this.allimages.splice(index, 1);
    //     //     this.slideimage = '';
    //     // }
    // }
    haveimg() {
        if (this.allimages.length === 0) {
            this.isimg = false;
        }
        else {
            this.isimg = true;
        }
        console.log(this.isimg);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AvatarDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AvatarDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avatar-dialog',
        template: __webpack_require__(/*! raw-loader!./avatar-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/avatar-dialog/avatar-dialog.component.html"),
        styles: [__webpack_require__(/*! ./avatar-dialog.component.css */ "./src/app/main/personal/avatar-dialog/avatar-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], AvatarDialogComponent);



/***/ }),

/***/ "./src/app/main/personal/chat/backup/backup.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main/personal/chat/backup/backup.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wZXJzb25hbC9jaGF0L2JhY2t1cC9iYWNrdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/personal/chat/backup/backup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/personal/chat/backup/backup.component.ts ***!
  \***************************************************************/
/*! exports provided: BackupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupComponent", function() { return BackupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackupComponent = class BackupComponent {
    constructor() { }
    ngOnInit() {
    }
};
BackupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backup',
        template: __webpack_require__(/*! raw-loader!./backup.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/chat/backup/backup.component.html"),
        styles: [__webpack_require__(/*! ./backup.component.css */ "./src/app/main/personal/chat/backup/backup.component.css")]
    })
], BackupComponent);



/***/ }),

/***/ "./src/app/main/personal/chat/chat-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/personal/chat/chat-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _backup_backup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backup/backup.component */ "./src/app/main/personal/chat/backup/backup.component.ts");
/* harmony import */ var _font_size_font_size_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font-size/font-size.component */ "./src/app/main/personal/chat/font-size/font-size.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "./src/app/main/personal/chat/chat.component.ts");






const routes = [
    {
        path: 'chat',
        children: [
            { path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], pathMatch: 'full' },
            { path: 'chat', component: _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"] },
            { path: 'font', component: _font_size_font_size_component__WEBPACK_IMPORTED_MODULE_2__["FontSizeComponent"] },
            { path: 'backup', component: _backup_backup_component__WEBPACK_IMPORTED_MODULE_1__["BackupComponent"] }
        ]
    }
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], ChatRoutingModule);



/***/ }),

/***/ "./src/app/main/personal/chat/chat.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main/personal/chat/chat.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  margin: 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\n\nmat-icon {\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.5rem !important;\n  vertical-align: middle !important;\n}\n\nmat-label {\n  font-size: 0.8rem;\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n}\n\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.right-word{ /*帳號細節的列表右邊的灰色字*/\n  text-align: right !important;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.8rem;\n  width: 300px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBLGFBQWEsZ0JBQWdCO0VBQzNCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiIuLi9wZXJzb25hbC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0IHtcbiAgbWFyZ2luOiAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuXG5tYXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3RpdGVtIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmxpc3RpdGVtOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnJpZ2h0LXdvcmR7IC8q5biz6Jmf57Sw56+A55qE5YiX6KGo5Y+z6YKK55qE54Gw6Imy5a2XKi9cbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/chat/chat.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main/personal/chat/chat.component.ts ***!
  \******************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() {
        this.linklist = [
            // {route: 'font', name: '字體大小', data: '按照手機預設'},
            { route: 'backup', name: '備份聊天紀錄', data: '' }
        ];
    }
    ngOnInit() {
    }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/main/personal/chat/chat.component.css")]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/main/personal/chat/chat.module.ts":
/*!***************************************************!*\
  !*** ./src/app/main/personal/chat/chat.module.ts ***!
  \***************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _font_size_font_size_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-size/font-size.component */ "./src/app/main/personal/chat/font-size/font-size.component.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ "./src/app/main/personal/chat/chat.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/main/personal/chat/chat-routing.module.ts");
/* harmony import */ var _backup_backup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./backup/backup.component */ "./src/app/main/personal/chat/backup/backup.component.ts");
/* harmony import */ var _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../navbar-back/navbarHback.module */ "./src/app/main/navbar-back/navbarHback.module.ts");













let ChatModule = class ChatModule {
};
ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
            _font_size_font_size_component__WEBPACK_IMPORTED_MODULE_1__["FontSizeComponent"],
            _backup_backup_component__WEBPACK_IMPORTED_MODULE_11__["BackupComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_12__["NavbarHbackModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_10__["ChatRoutingModule"],
            _common__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
        ],
        entryComponents: []
    })
], ChatModule);



/***/ }),

/***/ "./src/app/main/personal/chat/font-size/font-size.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/main/personal/chat/font-size/font-size.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  margin: 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\n\nmat-icon {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 4px #308fcc);\n          filter:drop-shadow(0px 0px 4px #308fcc);\n}\n\nmat-label {\n  font-size: 0.8rem;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  -webkit-filter:drop-shadow(0px 0px 4px #308fcc);\n          filter:drop-shadow(0px 0px 4px #308fcc);\n  background-color: #308fcc;\n  border-color: #308fcc;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:white;\n  border-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-ripple .mat-ripple-element {\n  background-color: rgba(29, 135, 229, 0.2);\n}\n\n::ng-deep .mat-list .mat-list-item .mat-line{\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nsmall {\n  font-size: 0.2rem !important;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n\n}\n\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.list2 {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2NoYXQvZm9udC1zaXplL2ZvbnQtc2l6ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQ0FBdUM7VUFBdkMsdUNBQXVDO0VBQ3ZDLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7O0FBRXRCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiIuLi9wZXJzb25hbC9jaGF0L2ZvbnQtc2l6ZS9mb250LXNpemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0IHtcbiAgbWFyZ2luOiAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCA0cHggIzMwOGZjYyk7XG59XG5cbm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDRweCAjMzA4ZmNjKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgYm9yZGVyLWNvbG9yOiAjMzA4ZmNjO1xufVxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDEzNSwgMjI5LCAwLjIpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3RpdGVtIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXG59XG4ubGlzdGl0ZW06aG92ZXIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubGlzdDIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/chat/font-size/font-size.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/personal/chat/font-size/font-size.component.ts ***!
  \*********************************************************************/
/*! exports provided: FontSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeComponent", function() { return FontSizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let FontSizeComponent = class FontSizeComponent {
    constructor(fb) {
        this.fb = fb;
        this.Flist = [{ id: 0, name: '小', control: 'small', content: false }, { id: 1, name: '普通', control: 'medium', content: false },
            { id: 2, name: '大', control: 'large', content: false }];
    }
    ngOnInit() {
        this.deviceDef = true;
        this.form = this.fb.group({
            default: '',
        });
    }
    get default() { return this.form.get('default'); }
    onFormSubmit() {
        console.log(JSON.stringify(this.form.value));
        console.log(JSON.stringify(this.Flist));
    }
    defaultChange() {
        this.deviceDef = this.form.get('default').value;
    }
    onToggleChange(event) {
        if (event === 'small') {
            return this.Flist[0].content = true,
                this.Flist[1].content = false,
                this.Flist[2].content = false;
        }
        if (event === 'medium') {
            return this.Flist[1].content = true,
                this.Flist[0].content = false,
                this.Flist[2].content = false;
        }
        if (event === 'large') {
            return this.Flist[2].content = true,
                this.Flist[1].content = false,
                this.Flist[0].content = false;
        }
    }
};
FontSizeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FontSizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-font-size',
        template: __webpack_require__(/*! raw-loader!./font-size.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/chat/font-size/font-size.component.html"),
        styles: [__webpack_require__(/*! ./font-size.component.css */ "./src/app/main/personal/chat/font-size/font-size.component.css")]
    })
], FontSizeComponent);



/***/ }),

/***/ "./src/app/main/personal/edit-dialog/edit-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/personal/edit-dialog/edit-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 600px;\n  /* background: url(https://images.pexels.com/photos/731658/pexels-photo-731658.jpeg?w=940&h=650&auto=compress&cs=tinysrgb) no-repeat center bottom; */\n  background-position: cover;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n}\n\n.container:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    height: 100vh;\n}\n\n.login-card {\n  text-align: center;\n  max-width: 350px;\n  width: 250px;\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.title {\n  text-align: center;\n}\n\n.btn-center {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2VkaXQtZGlhbG9nL2VkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUpBQXFKO0VBQ3JKLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiLi4vcGVyc29uYWwvZWRpdC1kaWFsb2cvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNzMxNjU4L3BleGVscy1waG90by03MzE2NTguanBlZz93PTk0MCZoPTY1MCZhdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTsgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxvZ2luLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/edit-dialog/edit-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/personal/edit-dialog/edit-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");






let EditDialogComponent = class EditDialogComponent {
    // initName: string;
    constructor(dialogRef, data, fb, userService, snackbar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,64}')],
        });
    }
    get name() { return this.form.get('name'); }
    // get avatar() { return this.form.get('avatar'); }
    register() {
        // this.userService.register(this.form.value)
        //   .subscribe(res => {
        //     if (res) {
        //       this.snackbar.open('註冊成功', 'OK', { duration: 3000});
        //     } else {
        //       this.snackbar.open('請檢查使用者帳號', 'OK', {duration: 3000});
        //     }
        // });
        this.dialogRef.close(this.form.value);
        // console.log(this.form.value.name);
        // this.data.name = this.form.value.name;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
EditDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-dialog',
        template: __webpack_require__(/*! raw-loader!./edit-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/edit-dialog/edit-dialog.component.html"),
        styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/main/personal/edit-dialog/edit-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], EditDialogComponent);



/***/ }),

/***/ "./src/app/main/personal/logout-dialog/logout-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main/personal/logout-dialog/logout-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addBtn {\n  background-color: #308fcc;\n  color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL2xvZ291dC1kaWFsb2cvbG9nb3V0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiIuLi9wZXJzb25hbC9sb2dvdXQtZGlhbG9nL2xvZ291dC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/personal/logout-dialog/logout-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/personal/logout-dialog/logout-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: LogoutDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDialogComponent", function() { return LogoutDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");





let LogoutDialogComponent = class LogoutDialogComponent {
    constructor(dialogRef, data, userService, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        // this.login$ = Observable.of(false);
        this.dialogRef.close();
        this.userService.logout();
        this.router.navigate(['/user/login']);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
LogoutDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout-dialog',
        template: __webpack_require__(/*! raw-loader!./logout-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/logout-dialog/logout-dialog.component.html"),
        styles: [__webpack_require__(/*! ./logout-dialog.component.css */ "./src/app/main/personal/logout-dialog/logout-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LogoutDialogComponent);



/***/ }),

/***/ "./src/app/main/personal/notice/notice.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/personal/notice/notice.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  margin: 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\n\nmat-icon {\n  color: rgba(0, 0, 0, 0.4);\n}\n\nmat-label {\n  font-size: 0.8rem;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  -webkit-filter:drop-shadow(0px 0px 4px #308fcc);\n          filter:drop-shadow(0px 0px 4px #308fcc);\n  background-color: #308fcc;\n  border-color: #308fcc;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:white;\n  border-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-ripple .mat-ripple-element {\n  background-color: rgba(29, 135, 229, 0.2);\n}\n\n::ng-deep .mat-list .mat-list-item .mat-line{\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\nsmall {\n  font-size: 0.2rem !important;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n\n}\n\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.list2 {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL25vdGljZS9ub3RpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtDQUF1QztVQUF2Qyx1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7QUFFdEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL25vdGljZS9ub3RpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0IHtcbiAgbWFyZ2luOiAwIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDRweCAjMzA4ZmNjKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgYm9yZGVyLWNvbG9yOiAjMzA4ZmNjO1xufVxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjksIDEzNSwgMjI5LCAwLjIpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZXtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjJyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3RpdGVtIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXG59XG4ubGlzdGl0ZW06aG92ZXIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubGlzdDIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/notice/notice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/personal/notice/notice.component.ts ***!
  \**********************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let NoticeComponent = class NoticeComponent {
    constructor(fb) {
        this.fb = fb;
        this.Alist = [{ id: 0, name: '最新消息', control: 'newNotice' }, { id: 2, name: '系統更新', control: 'systemUpdate' }];
        this.Mlist = [{ id: 0, name: '新訊息', control: 'newMessage' }, { id: 1, name: '群組邀請', control: 'groupInvite' },
            { id: 2, name: '加入好友', control: 'addFriend' }];
        this.Tlist = [{ id: 0, name: '行程修改', control: 'tripEdit' },
            { id: 1, name: '旅遊助理', control: 'tripAssistant', note: '當有天氣、突發路況等事件會影響旅程時，助理會發出通知提醒' }];
    }
    ngOnInit() {
        this.form = this.fb.group({
            newNotice: false,
            systemUpdate: false,
            newMessage: false,
            groupInvite: false,
            addFriend: false,
            tripEdit: false,
            tripAssistant: false,
        });
    }
    get newNotice() { return this.form.get('newNotice'); }
    get systemUpdate() { return this.form.get('systemUpdate'); }
    get newMessage() { return this.form.get('newMessage'); }
    get groupInvite() { return this.form.get('groupInvite'); }
    get addFriend() { return this.form.get('addFriend'); }
    get tripEdit() { return this.form.get('tripEdit'); }
    get tripAssistant() { return this.form.get('tripAssistant'); }
    onFormSubmit() {
        console.log(JSON.stringify(this.form.value));
    }
    onToggleChange(event) {
        console.log(event, ':', JSON.stringify(this.form.get(event).value));
    }
};
NoticeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
NoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice',
        template: __webpack_require__(/*! raw-loader!./notice.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/notice/notice.component.html"),
        styles: [__webpack_require__(/*! ./notice.component.css */ "./src/app/main/personal/notice/notice.component.css")]
    })
], NoticeComponent);



/***/ }),

/***/ "./src/app/main/personal/personal-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/personal/personal-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PersonalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalRoutingModule", function() { return PersonalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _about_tripo_about_tripo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-tripo/about-tripo.component */ "./src/app/main/personal/about-tripo/about-tripo.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/main/personal/chat/chat.component.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/main/personal/notice/notice.component.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private/private.component */ "./src/app/main/personal/private/private.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/main/personal/account/account.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal.component */ "./src/app/main/personal/personal.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/main/personal/profile/profile.component.ts");










const routes = [
    {
        path: 'personal',
        children: [
            { path: '', component: _personal_component__WEBPACK_IMPORTED_MODULE_8__["PersonalComponent"], pathMatch: 'full' },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
            { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], pathMatch: 'full' },
            { path: 'private', component: _private_private_component__WEBPACK_IMPORTED_MODULE_4__["PrivateComponent"] },
            { path: 'notice', component: _notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"] },
            { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"], pathMatch: 'full' },
            { path: 'about', component: _about_tripo_about_tripo_component__WEBPACK_IMPORTED_MODULE_1__["AboutTripoComponent"], pathMatch: 'full' },
        ]
    }
];
let PersonalRoutingModule = class PersonalRoutingModule {
};
PersonalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], PersonalRoutingModule);



/***/ }),

/***/ "./src/app/main/personal/personal.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/personal/personal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngx-avatar {\n  display:inline-block;\n}\nmat-list {\n  margin: 20px 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\nngx-avatar {\n  text-align: center !important;\n  vertical-align: middle !important;\n}\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 90px 5px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.avatar {\n  vertical-align: middle !important;\n  text-align: center !important;\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin:auto;\n}\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n  /* height: 2.8rem!important; */\n}\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.notify-badge{ /*為了讓大頭貼加號在右下角，以及背景為白色*/\n  position: absolute;\n  right:10px;\n  bottom:10px;\n  text-align: center;\n  border-radius: 50%;\n  padding:4px 4px;\n  font-size:20px;\n  background-color: white;\n}\n.avatarAddBtn {\n  background-color: #308fcc;\n}\n.name{ /*帳號名稱*/\n  font-weight: bold;\n  color: rgb(41, 41, 41);\n  text-align: center !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0QztBQUNBLGVBQWUsdUJBQXVCO0VBQ3BDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBLE9BQU8sT0FBTztFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3gtYXZhdGFyIHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5tYXQtbGlzdCB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMDtcbn1cblxubmd4LWF2YXRhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogc2NyZWVuKjAuM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogOTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOmF1dG87XG59XG4ubGlzdGl0ZW0ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIC8qIGhlaWdodDogMi44cmVtIWltcG9ydGFudDsgKi9cbn1cbi5saXN0aXRlbTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ubm90aWZ5LWJhZGdleyAvKueCuuS6huiuk+Wkp+mgreiyvOWKoOiZn+WcqOWPs+S4i+inku+8jOS7peWPiuiDjOaZr+eCuueZveiJsiovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6MTBweDtcbiAgYm90dG9tOjEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOjRweCA0cHg7XG4gIGZvbnQtc2l6ZToyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5hdmF0YXJBZGRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xufVxuXG4ubmFtZXsgLyrluLPomZ/lkI3nqLEqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/personal/personal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/personal/personal.component.ts ***!
  \*****************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-dialog/logout-dialog.component */ "./src/app/main/personal/logout-dialog/logout-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/service/user.service */ "./src/app/main/user/service/user.service.ts");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./avatar-dialog/avatar-dialog.component */ "./src/app/main/personal/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/main/personal/edit-dialog/edit-dialog.component.ts");









let PersonalComponent = class PersonalComponent {
    // public form: FormGroup;
    constructor(dialog, route, nav, userService, router
    // private fb: FormBuilder,
    ) {
        this.dialog = dialog;
        this.route = route;
        this.nav = nav;
        this.userService = userService;
        this.router = router;
        this.name = 'OH HI YO';
        this.member = [];
        this.UserInfo = [];
        // userInfo: UserInfo[] = [];
        this.linklist = [{ route: 'account', icon: 'folder', name: '帳號及隱私設定' },
            { route: 'notice', icon: 'campaign', name: '提醒' }, { route: 'chat', icon: 'chat', name: '聊天' },
            { route: 'about', icon: 'info', name: '關於Tripo' }];
        this.userInfo = [];
    }
    ngOnInit() {
        this.route.parent.url.subscribe(res => this.nav.setUrl(res[0].path));
        console.log(this.nav.getUrl());
        // this.userService.getUserFromServer().subscribe(data => this.member.push(data));
        this.getMembers();
        this.getUserInfo();
        // console.log(this.member);
        // this.name = this.member[0].user_info.name;
        // console.log(this.name);
        // this.avatar = '';
    }
    getMembers() {
        // this.userService.getUserFromServer().subscribe(data => this.member.push(data));
        this.userService.getMembers().subscribe(member => this.member = member);
    }
    getUserInfo() {
        // this.userService.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info));
        this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
    }
    editDialog() {
        const dialogRef = this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditDialogComponent"], {
            // width: '250px',
            hasBackdrop: true,
            data: {
                name: this.name
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            this.name = result.name;
        });
    }
    avatarDialog() {
        const dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AvatarDialogComponent"], {
            width: '600px',
            // height: '700px',
            data: {
                avatar: this.avatar
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.avatar = res[0];
            }
        });
    }
    logoutDialog() {
        const dialogRef = this.dialog.open(_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_1__["LogoutDialogComponent"], {
            width: '600px',
            height: '160px',
            data: {
                title: '即將登出',
                message: '是否確認登出?',
                buttonText: {
                    ok: '確認登出',
                    cancel: '取消'
                }
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
                this.logout();
            }
        });
    }
    logout() {
        // this.login$ = Observable.of(false);
        this.userService.logout();
        this.router.navigate(['/user/login']);
    }
};
PersonalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-personal',
        template: __webpack_require__(/*! raw-loader!./personal.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/personal.component.html"),
        styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/main/personal/personal.component.css")]
    })
], PersonalComponent);



/***/ }),

/***/ "./src/app/main/personal/personal.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/personal/personal.module.ts ***!
  \**************************************************/
/*! exports provided: PersonalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalModule", function() { return PersonalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/main/personal/chat/chat.module.ts");
/* harmony import */ var _about_tripo_about_tripo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-tripo/about-tripo.module */ "./src/app/main/personal/about-tripo/about-tripo.module.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.module */ "./src/app/main/personal/account/account.module.ts");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../common/material.module */ "./src/app/main/common/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal.component */ "./src/app/main/personal/personal.component.ts");
/* harmony import */ var _personal_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal-routing.module */ "./src/app/main/personal/personal-routing.module.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-dialog/edit-dialog.component */ "./src/app/main/personal/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/main/personal/profile/profile.component.ts");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./avatar-dialog/avatar-dialog.component */ "./src/app/main/personal/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./private/private.component */ "./src/app/main/personal/private/private.component.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/main/personal/notice/notice.component.ts");
/* harmony import */ var _logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logout-dialog/logout-dialog.component */ "./src/app/main/personal/logout-dialog/logout-dialog.component.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../navbar/navbar.module */ "./src/app/main/navbar/navbar.module.ts");





















let PersonalModule = class PersonalModule {
};
PersonalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalComponent"],
            _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AvatarDialogComponent"],
            _private_private_component__WEBPACK_IMPORTED_MODULE_17__["PrivateComponent"],
            _notice_notice_component__WEBPACK_IMPORTED_MODULE_18__["NoticeComponent"],
            _logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_19__["LogoutDialogComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ngx_avatar__WEBPACK_IMPORTED_MODULE_15__["AvatarModule"],
            _account_account_module__WEBPACK_IMPORTED_MODULE_3__["AccountModule"],
            _about_tripo_about_tripo_module__WEBPACK_IMPORTED_MODULE_2__["AboutTripoModule"],
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_1__["ChatModule"],
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_20__["NavbarModule"],
            _personal_routing_module__WEBPACK_IMPORTED_MODULE_8__["PersonalRoutingModule"],
            _common_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
        ],
        entryComponents: [
            _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"],
            _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AvatarDialogComponent"],
            _logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_19__["LogoutDialogComponent"]
        ]
    })
], PersonalModule);



/***/ }),

/***/ "./src/app/main/personal/private/private.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main/personal/private/private.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list {\n  margin: 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\n\nmat-icon {\n  color: rgba(0, 0, 0, 0.4);\n}\n\nmat-label {\n  font-size: 0.8rem;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  -webkit-filter:drop-shadow(0px 0px 4px #308fcc);\n          filter:drop-shadow(0px 0px 4px #308fcc);\n  background-color: #308fcc;\n  border-color: #308fcc;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color:white;\n  border-color: white;\n}\n\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-ripple .mat-ripple-element {\n  background-color: rgba(29, 135, 229, .2);\n}\n\n.content-container {\n  text-align: left;\n  width: screen*0.3px;\n  position: relative;\n  overflow: auto;\n  height: auto;\n  min-height: 0;\n  margin: 100px 10px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n\n}\n\n.listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.list2 {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0NBQXVDO1VBQXZDLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7QUFFdEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL3ByaXZhdGUvcHJpdmF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxpc3Qge1xuICBtYXJnaW46IDAgMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm1hdC1pY29uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggNHB4ICMzMDhmY2MpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBib3JkZXItY29sb3I6ICMzMDhmY2M7XG59XG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgMTM1LCAyMjksIC4yKTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDEwMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpc3RpdGVtIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuXG59XG4ubGlzdGl0ZW06aG92ZXIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubGlzdDIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/personal/private/private.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/personal/private/private.component.ts ***!
  \************************************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PrivateComponent = class PrivateComponent {
    constructor(fb) {
        this.fb = fb;
        this.Flist = [{ id: 0, name: '每個人', control: 'everyoneCanAdd' }, { id: 2, name: '朋友的朋友', control: 'friendsFCanAdd' }];
        this.Llist = [{ id: 0, name: '每個人', control: 'everyoneCanGet' }, { id: 1, name: '朋友', control: 'friendCanGet' },
            { id: 2, name: '朋友的朋友', control: 'friendsFCanGet' }, { id: 3, name: '當前旅遊群組朋友', control: 'groupCanGet' },
            { id: 4, name: '不顯示', control: 'nobodyCanGet' }];
    }
    ngOnInit() {
        this.form = this.fb.group({
            everyoneCanAdd: false,
            friendsFCanAdd: false,
            everyoneCanGet: false,
            friendCanGet: false,
            friendsFCanGet: false,
            groupCanGet: false,
            nobodyCanGet: false,
        });
    }
    get everyoneCanAdd() { return this.form.get('everyoneCanAdd'); }
    get friendsFCanAdd() { return this.form.get('friendsFCanAdd'); }
    get everyoneCanGet() { return this.form.get('everyoneCanGet'); }
    get friendCanGet() { return this.form.get('friendCanGet'); }
    get friendsFCanGet() { return this.form.get('friendsFCanGet'); }
    get groupCanGet() { return this.form.get('groupCanGet'); }
    get nobodyCanGet() { return this.form.get('nobodyCanGet'); }
    onFormSubmit() {
        console.log(JSON.stringify(this.form.value));
    }
    onToggleChange(event) {
        console.log(event, ':', JSON.stringify(this.form.get(event).value));
    }
};
PrivateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PrivateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private',
        template: __webpack_require__(/*! raw-loader!./private.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/private/private.component.html"),
        styles: [__webpack_require__(/*! ./private.component.css */ "./src/app/main/personal/private/private.component.css")]
    })
], PrivateComponent);



/***/ }),

/***/ "./src/app/main/personal/profile/profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main/personal/profile/profile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 600px;\n  /* background: url(https://images.pexels.com/photos/731658/pexels-photo-731658.jpeg?w=940&h=650&auto=compress&cs=tinysrgb) no-repeat center bottom; */\n  background-position: cover;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n}\n\n.container:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    height: 100vh;\n}\n\n.login-card {\n  text-align: center;\n  max-width: 350px;\n  width: 250px;\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.title {\n  text-align: center;\n}\n\n.btn-center {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BlcnNvbmFsL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFKQUFxSjtFQUNySiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsYUFBYTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Ii4uL3BlcnNvbmFsL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogNjAwcHg7XG4gIC8qIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy83MzE2NTgvcGV4ZWxzLXBob3RvLTczMTY1OC5qcGVnP3c9OTQwJmg9NjUwJmF1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2IpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tOyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/personal/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/personal/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user/service/user.service */ "./src/app/main/user/service/user.service.ts");






let ProfileComponent = class ProfileComponent {
    constructor(fb, userService, snackbar, router) {
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
    }
    ngOnInit() {
        this.userService.logout();
        this.router.navigate(['/user/login']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/personal/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/main/personal/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/main/servcies/index.ts":
/*!****************************************!*\
  !*** ./src/app/main/servcies/index.ts ***!
  \****************************************/
/*! exports provided: TOKEN, UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ "./src/app/main/servcies/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return _utils_service__WEBPACK_IMPORTED_MODULE_0__["UtilsService"]; });




/***/ }),

/***/ "./src/app/main/servcies/nav.service.ts":
/*!**********************************************!*\
  !*** ./src/app/main/servcies/nav.service.ts ***!
  \**********************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavService = class NavService {
    constructor() { }
    setUrl(path) {
        this.currentUrl = path;
    }
    getUrl() {
        return this.currentUrl;
    }
};
NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavService);



/***/ }),

/***/ "./src/app/main/servcies/startup.service.ts":
/*!**************************************************!*\
  !*** ./src/app/main/servcies/startup.service.ts ***!
  \**************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/main/servcies/index.ts");
/* harmony import */ var _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/service/user.service */ "./src/app/main/user/service/user.service.ts");





let StartupService = class StartupService {
    constructor(injector, utils, userService) {
        this.injector = injector;
        this.utils = utils;
        this.userService = userService;
    }
    load() {
        return new Promise((resolve, reject) => {
            return this.userService.checkUser()
                .subscribe(res => {
                if (res) {
                    setInterval(() => {
                        this.checkStatus();
                    }, 1000 * 60 * 5); // check current status every 5 min
                }
                resolve(res);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    checkStatus() {
        if (this.utils.isTokenExpired()) { // if token expired
            this.userService.logout();
            const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
            router.navigate(['/']);
            console.log('logout due to token expired');
        }
    }
};
StartupService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: ___WEBPACK_IMPORTED_MODULE_3__["UtilsService"] },
    { type: _user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
StartupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], StartupService);



/***/ }),

/***/ "./src/app/main/servcies/utils.service.ts":
/*!************************************************!*\
  !*** ./src/app/main/servcies/utils.service.ts ***!
  \************************************************/
/*! exports provided: TOKEN, UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");



const TOKEN = 'access_token';
let UtilsService = class UtilsService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    isTokenExpired(token = TOKEN) {
        const jwtStr = this.getToken(token);
        if (jwtStr) {
            console.log(jwtStr);
            return this.isTokenExpired(jwtStr); // token expired?
        }
        else {
            return true; // no token
        }
    }
    writeToken(value, token = TOKEN) {
        localStorage.setItem(token, value);
    }
    getToken(token = TOKEN) {
        return localStorage.getItem(token);
    }
    removeToken(token = TOKEN) {
        if (this.getToken(token)) {
            localStorage.removeItem(token);
        }
    }
};
UtilsService.ctorParameters = () => [
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"] }
];
UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UtilsService);



/***/ }),

/***/ "./src/app/main/share/share-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/share/share-routing.module.ts ***!
  \****************************************************/
/*! exports provided: ShareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareRoutingModule", function() { return ShareRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _share_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share.component */ "./src/app/main/share/share.component.ts");




const routes = [
    {
        path: 'share',
        children: [
            { path: '', component: _share_component__WEBPACK_IMPORTED_MODULE_3__["ShareComponent"], pathMatch: 'full' },
            { path: 'share', component: _share_component__WEBPACK_IMPORTED_MODULE_3__["ShareComponent"] },
        ]
    }
];
let ShareRoutingModule = class ShareRoutingModule {
};
ShareRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShareRoutingModule);



/***/ }),

/***/ "./src/app/main/share/share.component.css":
/*!************************************************!*\
  !*** ./src/app/main/share/share.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 2400px){\n  agm-map {\n    height: 450px !important;\n    width: 100%;\n  }\n  .content-container {\n    text-align: left;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 90px 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\n@media screen and (max-width: 600px){\n  agm-map {\n    height: auto !important;\n    max-width: 100%;\n  }\n  .content-container {\n    text-align: left;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 60px 0 50px 0;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NoYXJlL3NoYXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoiLi4vc2hhcmUvc2hhcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MDBweCl7XG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiA5MHB4IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIG1hcmdpbjogNjBweCAwIDUwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/share/share.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/share/share.component.ts ***!
  \***********************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShareComponent = class ShareComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share',
        template: __webpack_require__(/*! raw-loader!./share.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/share/share.component.html"),
        styles: [__webpack_require__(/*! ./share.component.css */ "./src/app/main/share/share.component.css")]
    })
], ShareComponent);



/***/ }),

/***/ "./src/app/main/share/share.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/share/share.module.ts ***!
  \********************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _share_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share-routing.module */ "./src/app/main/share/share-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/fesm2015/agm-snazzy-info-window.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../navbar-back/navbarHback.module */ "./src/app/main/navbar-back/navbarHback.module.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../navbar/navbar.module */ "./src/app/main/navbar/navbar.module.ts");
/* harmony import */ var _share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./share.component */ "./src/app/main/share/share.component.ts");














let ShareModule = class ShareModule {
};
ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _share_component__WEBPACK_IMPORTED_MODULE_13__["ShareComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _common__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _share_routing_module__WEBPACK_IMPORTED_MODULE_1__["ShareRoutingModule"],
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"],
            _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_11__["NavbarHbackModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"],
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_5__["AgmSnazzyInfoWindowModule"]
        ],
        providers: [],
        entryComponents: []
    })
], ShareModule);



/***/ }),

/***/ "./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field.schrduleSelect {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field.time {\n  width: 43.5%;\n}\n\n.timeSelect {\n  width: 100%;\n  margin: auto !important;\n  text-align: center;\n}\n\n.addBtn {\n  background-color: #308fcc;\n  color: white;\n}\n\n::ng-deep .mat-calendar-header{\n  background-color: #308fcc !important;\n  color: white !important;\n}\n\n::ng-deep .mat-calendar-body-selected{\n  border-color: #308fcc !important;\n  background-color: #fff!important;\n  color: #000!important;\n  /* color: white !important; */\n}\n\n/* .mat-calendar-body-today:not(.mat-calendar-body-selected) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RyYXZlbC9hZGQtc2NoZWR1bGUtZGlhbG9nL2FkZC1zY2hlZHVsZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQSw4REFBOEQiLCJmaWxlIjoiLi4vdHJhdmVsL2FkZC1zY2hlZHVsZS1kaWFsb2cvYWRkLXNjaGVkdWxlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLnNjaHJkdWxlU2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQudGltZSB7XG4gIHdpZHRoOiA0My41JTtcbn1cblxuLnRpbWVTZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhmY2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2FsZW5kYXItaGVhZGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke1xuICBib3JkZXItY29sb3I6ICMzMDhmY2MgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwIWltcG9ydGFudDtcbiAgLyogY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7ICovXG59XG5cbi8qIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddScheduleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleDialogComponent", function() { return AddScheduleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_travel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/travel.service */ "./src/app/main/travel/service/travel.service.ts");





let AddScheduleDialogComponent = class AddScheduleDialogComponent {
    constructor(dialogRef, fb, travel, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.travel = travel;
        this.data = data;
        this.myTheme = {
            container: {
                // bodyBackgroundColor: '#ffff',
                buttonColor: '#308fcc'
            },
            dial: {
                dialBackgroundColor: '#308fcc',
            },
            clockFace: {
                clockHandColor: '#308fcc',
            }
        };
        this.scheduleDetail = [];
        this.scheduleDetails = [];
        this.dayDetail = [];
        this.dateClass = (d) => {
            const date = d;
            return date === this.startDate ? 'dateClass' : undefined;
        };
    }
    ngOnInit() {
        this.hasSelected = false;
        this.hasDateSelected = false;
        this.hasStartTimeSelected = false;
        this.hasEndTimeSelected = false;
        this.activeteDate = this.startDate;
        this.form = this.fb.group({
            id: [''],
            place_id: [this.data.placeId],
            place_name: [this.data.location],
            lat: [this.data.lat],
            lng: [this.data.lng],
            date: [''],
            travel_route_day_id: [''],
            arrival_time: [''],
            leave_time: [''],
        });
        console.log(this.data.placeId);
    }
    get schedules() {
        return this.data.schedules;
    }
    // get id() { return this.form.get('location'); }
    get place_id() { return this.form.get('place_id'); }
    get place_name() { return this.form.get('place_name'); }
    get lat() { return this.form.get('lat'); }
    get lng() { return this.form.get('lng'); }
    get id() { return this.form.get('id'); }
    get travel_route_day_id() { return this.form.get('travel_route_day_id'); }
    get date() { return this.form.get('date'); }
    get arrival_time() { return this.form.get('arrival_time'); }
    get leave_time() { return this.form.get('leave_time'); }
    // get avatar() { return this.form.get('avatar'); }
    save() {
        // this.userService.register(this.form.value)
        //   .subscribe(res => {
        //     if (res) {
        //       this.snackbar.open('註冊成功', 'OK', { duration: 3000});
        //     } else {
        //       this.snackbar.open('請檢查使用者帳號', 'OK', {duration: 3000});
        //     }
        // });
        this.dialogRef.close(this.form.value);
        // console.log(this.form.value.name);
        // this.data.name = this.form.value.name;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    change() {
        console.log(this.test);
    }
    campaignSelected() {
        this.hasSelected = true;
        console.log(this.form.get('id').value);
        return this.hasSelected;
    }
    campaignDateSelected() {
        this.hasDateSelected = true;
        this.activeteDate = new Date(this.form.get('date').value);
        this.getTravel_route_day_id();
        console.log(this.form.get('date').value);
        console.log(this.form.get('travel_route_day_id').value);
        return this.hasDateSelected && this.activeteDate;
    }
    campaignStartTimeSelected() {
        this.hasStartTimeSelected = true;
        this.StartTime = this.form.get('arrival_time').value;
        console.log(this.form.get('arrival_time').value);
        return this.hasStartTimeSelected && this.arrival_time;
    }
    campaignEndTimeSelected() {
        this.hasEndTimeSelected = true;
        this.EndTime = this.form.get('leave_time').value;
        console.log(this.form.get('leave_time').value);
        return this.hasEndTimeSelected && this.EndTime;
    }
    getStartDate(start) {
        this.startDate = new Date(start);
        console.log(this.startDate);
        return this.startDate;
    }
    getEndDate(end) {
        this.endDate = new Date(end);
        console.log(this.endDate);
        return this.endDate;
    }
    getTravel_route_day_id() {
        const id = this.form.get('id').value;
        console.log('working', id);
        this.travel.getScheduleDetailsServer(id).subscribe(data => {
            this.scheduleDetail.push(data);
            this.dayDetail.push(this.scheduleDetail[this.scheduleDetail.length - 1].travel_route.travel_route_day);
            let i = 0;
            let j = 0;
            for (i; i < this.dayDetail.length; i++) {
                for (j; j < this.dayDetail[i].length; j++) {
                    console.log(this.dayDetail[i][j]);
                    console.log(new Date(this.activeteDate));
                    console.log(new Date(this.dayDetail[i][j].route_day));
                    console.log(new Date(this.activeteDate).getDate());
                    console.log(new Date(this.dayDetail[i][j].route_day).getDate());
                    if (new Date(this.activeteDate).getTime() === new Date(this.dayDetail[i][j].route_day).getTime()) {
                        this.dayId = this.dayDetail[i][j].travel_route_day_id;
                        this.form.get('travel_route_day_id').setValue(this.dayId);
                        break;
                    }
                }
            }
        });
        // this.travel.getScheduleDetailss(id).
        //   subscribe(data => {
        //       this.scheduleDetails = data;
        //       this.scheduleDetails.map( item =>
        //         console.log(Object.values(item)));
        //     });
        // this.travel.getScheduleDetailss(id)
        //   .subscribe(data => {
        //     this.scheduleDetail = data;
        //     console.log(this.scheduleDetail);
        //   });
    }
};
AddScheduleDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_travel_service__WEBPACK_IMPORTED_MODULE_4__["TravelService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddScheduleDialogComponent.prototype, "cancelBtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddScheduleDialogComponent.prototype, "confirmBtn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddScheduleDialogComponent.prototype, "test", void 0);
AddScheduleDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-schedule-dialog',
        template: __webpack_require__(/*! raw-loader!./add-schedule-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.html"),
        styles: [__webpack_require__(/*! ./add-schedule-dialog.component.css */ "./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], AddScheduleDialogComponent);



/***/ }),

/***/ "./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field.schrduleSelect {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field.time {\n  width: 43.5%;\n}\n\n.timeSelect {\n  width: 100%;\n  margin: auto !important;\n  text-align: center;\n}\n\n.addBtn {\n  background-color: #308fcc;\n  color: white;\n}\n\n::ng-deep .mat-calendar-header{\n  background-color: #308fcc !important;\n  color: white !important;\n}\n\n::ng-deep .mat-calendar-body-selected{\n  border-color: #308fcc !important;\n  background-color: #fff!important;\n  color: #000!important;\n  /* color: white !important; */\n}\n\n/* .mat-calendar-body-today:not(.mat-calendar-body-selected) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RyYXZlbC9jcmVhdGUtdHJpcC1kaWFsb2cvY3JlYXRlLXRyaXAtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUEsOERBQThEIiwiZmlsZSI6Ii4uL3RyYXZlbC9jcmVhdGUtdHJpcC1kaWFsb2cvY3JlYXRlLXRyaXAtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggIzMwOGZjYyk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQuc2NocmR1bGVTZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC50aW1lIHtcbiAgd2lkdGg6IDQzLjUlO1xufVxuXG4udGltZVNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWRkQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYWxlbmRhci1oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDhmY2MgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7XG4gIGJvcmRlci1jb2xvcjogIzMwOGZjYyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xuICAvKiBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgKi9cbn1cblxuLyogLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateTripDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripDialogComponent", function() { return CreateTripDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let CreateTripDialogComponent = class CreateTripDialogComponent {
    constructor(dialogRef, fb, data) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.data = data;
        this.myTheme = {
            container: {
                // bodyBackgroundColor: '#ffff',
                buttonColor: '#308fcc'
            },
            dial: {
                dialBackgroundColor: '#308fcc',
            },
            clockFace: {
                clockHandColor: '#308fcc',
            }
        };
        this.today = new Date();
        this.schedule = [];
        this.dateClass = (d) => {
            const date = d;
            const stDate = new Date(this.form.get('start_day').value);
            return date === stDate ? 'dateClass' : undefined;
        };
    }
    ngOnInit() {
        this.hasName = false;
        this.hasStartDateSelected = false;
        this.hasEndDateSelected = false;
        this.form = this.fb.group({
            // id: [this.schedules.length],
            name: [''],
            description: [''],
            start_day: [''],
            end_day: [''],
        });
    }
    get schedules() {
        return this.data.schedules;
    }
    // get id() { return this.form.get('id'); }
    get name() { return this.form.get('name'); }
    get description() { return this.form.get('description'); }
    get start_day() { return this.form.get('start_day'); }
    get end_day() { return this.form.get('end_day'); }
    // get avatar() { return this.form.get('avatar'); }
    save() {
        // const id = this.data.schedules.length;
        // const newName = this.form.get('name').value;
        // const startY = new Date(this.form.get('startDate').value).getFullYear();
        // const startM =  new Date(this.form.get('startDate').value).getMonth();
        // const startD = new Date(this.form.get('startDate').value).getDate();
        // const endY = new Date(this.form.get('endDate').value).getFullYear();
        // const endM =  new Date(this.form.get('endDate').value).getMonth();
        // const endD = new Date(this.form.get('endDate').value).getDate();
        // const startDate = startY + ',' + startM + ',' + startD;
        // const endDate = endY + ',' + endM + ',' + endD;
        // this.userService.register(this.form.value)
        //   .subscribe(res => {
        //     if (res) {
        //       this.snackbar.open('註冊成功', 'OK', { duration: 3000});
        //     } else {
        //       this.snackbar.open('請檢查使用者帳號', 'OK', {duration: 3000});
        //     }
        // });
        this.dialogRef.close(this.form.value);
        // console.log(this.form.value.name);
        // this.data.name = this.form.value.name;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    campaignNamed() {
        this.hasName = true;
        console.log(this.form.get('name').value);
        return this.hasName;
    }
    campaignStartDateSelected() {
        this.hasStartDateSelected = true;
        this.minDate = this.form.get('start_day').value;
        console.log(this.form.get('start_day').value);
        return this.hasStartDateSelected && this.minDate;
    }
    campaignEndDateSelected() {
        this.hasEndDateSelected = true;
        // this.EndTime = this.form.get('endTime').value;
        // console.log(this.form.get('endTime').value);
        return this.hasEndDateSelected;
    }
};
CreateTripDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
CreateTripDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-trip-dialog',
        template: __webpack_require__(/*! raw-loader!./create-trip-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.html"),
        styles: [__webpack_require__(/*! ./create-trip-dialog.component.css */ "./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], CreateTripDialogComponent);



/***/ }),

/***/ "./src/app/main/travel/schedule-detail/schedule-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main/travel/schedule-detail/schedule-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 2400px){\n  agm-map {\n    height: 450px !important;\n    width: 100%;\n  }\n  .content-container {\n    text-align: left;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 90px 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\n@media screen and (max-width: 600px){\n  agm-map {\n    height: 300px !important;\n    width: 100%;\n  }\n  .content-container {\n    text-align: left;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 90px 3%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\n::nd-deep .mat-card.mat-card-title {\n  margin: 0;\n  padding: 0;\n}\nmat-label {\n  font-size: 0.8rem;\n  width: 150px;\n  line-height: 2.3rem;\n}\nmat-list-item {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\nmat-icon {\n  color: #308fcc;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n  vertical-align: middle !important;\n}\nmat-icon:hover {\n  color: #f19c18;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n  vertical-align: middle !important;\n}\nbutton:disabled mat-icon{\n  color: gray;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n}\nmat-panel-description.right-aligned {\n  flex-grow: 0;\n}\n.title {\n  font-size: 1.8rem !important;\n}\n.title-icon {\n  font-size: 1.5rem !important;\n  color: #f19c18 !important;\n  vertical-align: middle !important;\n}\n.title-icon:hover {\n  font-size: 1.5rem !important;\n  color: #f19c18 !important;\n  vertical-align: middle !important;\n}\n.full {\n  width: 100%;\n}\n.list2 {\n  margin-top: 30px;\n}\n.list2 .full .right{\n  text-align: right !important;\n  position: absolute;\n  right: 1rem;\n}\n.listitem {\n  line-height: 1.5rem;\n  font-size: 1.5rem;\n  text-decoration:none;\n  vertical-align: middle !important;\n  /* height: 2.8rem!important; */\n}\n.del{\n  color: rgb(250, 3, 3) !important;\n}\nmat-icon.listitem  {\n  color: rgba(0, 0, 0, 0.4) !important;\n  font-size: 1.5rem !important;\n  vertical-align: middle !important;\n}\n/* .listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n} */\nmat-list-item.listitem2 {\n  border: none !important;\n  /* border-radius: 3px; */\n  padding: 0;\n}\n.right-word{ /*帳號細節的列表右邊的灰色字*/\n  text-align: right !important;\n  vertical-align: middle !important;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.8rem;\n  width: 100%;\n}\n.addBtn {\n margin: auto!important;\n text-align: center!important;\n}\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\nsmall {\n  font-size: 0.2rem !important;\n  color: rgba(0, 0, 0, 0.5);\n}\n.line{ /*景點跟景點之間的線條*/\n  width:8px;\n  height: 100%;\n  background-color: #308fcc;\n  margin-left:0.3rem;\n}\n.tool {\n  margin: 5px;\n  width: 40px;\n  height: 40px;\n}\n.tool-icon {\n  color: #308fcc;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n  vertical-align: middle !important;\n  /* margin: 1px !important; */\n}\n.time {\n  width: 80px;\n  text-align: center;\n  font-size: 1rem !important;\n}\n.nav-btn {\n  background-color: #308fcc!important;\n  font-size: 1rem !important;\n  color: #fff!important;\n  padding:0 12px;\n  margin: 1.2rem !important;\n  vertical-align: middle !important;\n}\n.nav-btn mat-icon {\n  /* background-color: #308fcc!important; */\n  color: #fff!important;\n  font-size: 1.2rem !important;\n  vertical-align: middle !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RyYXZlbC9zY2hlZHVsZS1kZXRhaWwvc2NoZWR1bGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7QUFDRjtBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkNBQTZDO0VBQzdDLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsV0FBVztFQUNYLDZDQUE2QztFQUM3Qyw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQztBQUNBOzs7R0FHRztBQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7QUFFQSxhQUFhLGdCQUFnQjtFQUMzQiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsNEJBQTRCO0FBQzdCO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7QUFFQSxPQUFPLGFBQWE7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLDZDQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixpQ0FBaUM7QUFDbkMiLCJmaWxlIjoiLi4vdHJhdmVsL3NjaGVkdWxlLWRldGFpbC9zY2hlZHVsZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MDBweCl7XG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiA5MHB4IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIG1hcmdpbjogOTBweCAzJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuXG46Om5kLWRlZXAgLm1hdC1jYXJkLm1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxubWF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAxNTBweDtcbiAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICAvKiBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCA0cHggIzMwOGZjYyk7ICovXG4gIGZvbnQtc2l6ZTogMi4zcmVtICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxubWF0LWljb246aG92ZXIge1xuICBjb2xvcjogI2YxOWMxODtcbiAgLyogZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggNHB4ICMzMDhmY2MpOyAqL1xuICBmb250LXNpemU6IDIuM3JlbSAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCBtYXQtaWNvbntcbiAgY29sb3I6IGdyYXk7XG4gIC8qIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDRweCAjMzA4ZmNjKTsgKi9cbiAgZm9udC1zaXplOiAyLjNyZW0gIWltcG9ydGFudDtcbn1cblxubWF0LXBhbmVsLWRlc2NyaXB0aW9uLnJpZ2h0LWFsaWduZWQge1xuICBmbGV4LWdyb3c6IDA7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmMTljMTggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtaWNvbjpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjE5YzE4ICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cblxuLmZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxpc3QyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmxpc3QyIC5mdWxsIC5yaWdodHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbn1cblxuLmxpc3RpdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIC8qIGhlaWdodDogMi44cmVtIWltcG9ydGFudDsgKi9cbn1cblxuLmRlbHtcbiAgY29sb3I6IHJnYigyNTAsIDMsIDMpICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1pY29uLmxpc3RpdGVtICB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuLyogLmxpc3RpdGVtOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn0gKi9cblxubWF0LWxpc3QtaXRlbS5saXN0aXRlbTIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgLyogYm9yZGVyLXJhZGl1czogM3B4OyAqL1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucmlnaHQtd29yZHsgLyrluLPomZ/ntLDnr4DnmoTliJfooajlj7PpgornmoTngbDoibLlrZcqL1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZEJ0biB7XG4gbWFyZ2luOiBhdXRvIWltcG9ydGFudDtcbiB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDAuMnJlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubGluZXsgLyrmma/pu57ot5/mma/pu57kuYvplpPnmoTnt5rmop0qL1xuICB3aWR0aDo4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgbWFyZ2luLWxlZnQ6MC4zcmVtO1xufVxuXG4udG9vbCB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnRvb2wtaWNvbiB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICAvKiBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCA0cHggIzMwOGZjYyk7ICovXG4gIGZvbnQtc2l6ZTogMi4zcmVtICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luOiAxcHggIWltcG9ydGFudDsgKi9cbn1cblxuLnRpbWUge1xuICB3aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm5hdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcbiAgcGFkZGluZzowIDEycHg7XG4gIG1hcmdpbjogMS4ycmVtICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cbi5uYXYtYnRuIG1hdC1pY29uIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYyFpbXBvcnRhbnQ7ICovXG4gIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/travel/schedule-detail/schedule-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/travel/schedule-detail/schedule-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScheduleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDetailComponent", function() { return ScheduleDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-schedule-dialog/add-schedule-dialog.component */ "./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.ts");
/* harmony import */ var _service_travel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/travel.service */ "./src/app/main/travel/service/travel.service.ts");








let ScheduleDetailComponent = class ScheduleDetailComponent {
    constructor(dialog, mapsAPILoader, ngZone, route, nav, travel, snackbar, router) {
        this.dialog = dialog;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.route = route;
        this.nav = nav;
        this.travel = travel;
        this.snackbar = snackbar;
        this.router = router;
        this.scheduleDetail = [];
        this.scheduleDetails = [];
        // scheduleDateDetails: TravelRouteDetail[] = [];
        this.schedules = [{ id: this.route.snapshot.paramMap.get('id'),
                start_day: this.route.snapshot.paramMap.get('start'),
                end_day: this.route.snapshot.paramMap.get('end'),
                name: this.route.snapshot.paramMap.get('name') }];
        this.scheduleDetailAry = [];
        this.scheduleDateDetailAry = [];
        this.dayDetail = [];
        this.step = 0;
        this.dayCampaign = [];
    }
    ngOnInit() {
        this.schedules.forEach(item => this.currentUrl = item.id + '/' + item.start_day + '/' + item.end_day + '/' + item.name);
        console.log(this.currentUrl);
        this.scheduleDetailAry = [];
        this.scheduleDateDetailAry = [];
        this.getSchedule();
        this.getScheduleDetail();
        console.log(this.scheduleDetails);
        // this.ScheduleDetail();
        // this.ScheduleDateDetails();
        // const currentSchedules = {id: this.schedule.id,
        //                           name: this.schedule.name,
        //                           start: this.schedule.start_day, end: this.schedule.end_day};
        // if ( this.schedules.length === 0) {
        //   this.schedules.push(currentSchedules);
        // }
        // this.countDays();
        this.getUserLocation();
        this.mapsAPILoader.load().then(() => {
            this.getUserLocation();
            this.geoCoder = new google.maps.Geocoder();
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.placeId = place.place_id;
                    this.zoom = 12;
                });
            });
        });
        console.log(this.days);
    }
    getUserLocation() {
        // get Users current position
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 16;
                console.log('position', position);
            });
        }
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    addScheduleDialog() {
        console.log('AddScheduleDialogComponent');
        const dialogRef = this.dialog.open(_add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddScheduleDialogComponent"], {
            width: '600px',
            // height: '700px',
            data: {
                schedules: this.schedules,
                // id: this.scheduleDateDetails.length,
                location: this.searchElementRef.nativeElement.value,
                placeId: this.placeId,
                lat: this.lat,
                lng: this.lng
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                console.log(res);
                this.travel.addPlace(res).subscribe(res2 => {
                    if (res2) {
                        this.snackbar.open('新增成功', 'OK', { duration: 3000 });
                        this.ngOnInit();
                        this.router.navigate(['/travel/schedule/' + this.currentUrl]);
                        // this.userService.logout();
                        // this.router.navigate(['/user/login']);
                    }
                    else {
                        this.snackbar.open('新增失敗', 'OK', { duration: 3000 });
                    }
                });
            }
        });
    }
    removeTravel(id) {
        this.travel.removeSchedule(id).subscribe(res => {
            if (res) {
                this.snackbar.open('刪除成功', 'OK', { duration: 3000 });
                this.ngOnInit();
                this.router.navigate(['/travel']);
            }
            else {
                this.snackbar.open('刪除失敗', 'OK', { duration: 3000 });
            }
        });
    }
    getSchedule() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.travel.getSchedule(id)
            .subscribe(schedule => this.schedule = schedule);
    }
    getScheduleDetail() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        console.log('working', id);
        this.travel.getScheduleDetailsServer(id).subscribe(data => {
            console.log('all detail:', data);
            this.scheduleDetail.push(data);
            this.dayDetail.push(this.scheduleDetail[this.scheduleDetail.length - 1].travel_route.travel_route_day);
            let i = 0;
            let j = 0;
            // let k = 0;
            // let m = 0;
            for (i; i < this.dayDetail.length; i++) {
                for (j; j < this.dayDetail[i].length; j++) {
                    this.scheduleDetailAry.push(this.dayDetail[i][j]);
                    if (this.dayDetail[i][j].place.length > 0) {
                        // for (k ; k < this.scheduleDetailAry.length ; k++) {
                        this.scheduleDateDetailAry.push(this.dayDetail[i][j].place);
                        // }
                    }
                }
            }
            console.log('routeday detail:', this.scheduleDetailAry);
            console.log('place:', this.scheduleDateDetailAry);
        });
    }
    removeSchedule(id) {
        this.travel.removePlace(id).subscribe(res => {
            if (res) {
                this.snackbar.open('刪除成功', 'OK', { duration: 3000 });
                this.ngOnInit();
                this.router.navigate(['/travel/schedule/' + this.currentUrl]);
            }
            else {
                this.snackbar.open('刪除失敗', 'OK', { duration: 3000 });
            }
        });
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
ScheduleDetailComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] },
    { type: _service_travel_service__WEBPACK_IMPORTED_MODULE_7__["TravelService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('search', { static: true })
], ScheduleDetailComponent.prototype, "searchElementRef", void 0);
ScheduleDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-schedule-detail',
        template: __webpack_require__(/*! raw-loader!./schedule-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/travel/schedule-detail/schedule-detail.component.html"),
        styles: [__webpack_require__(/*! ./schedule-detail.component.css */ "./src/app/main/travel/schedule-detail/schedule-detail.component.css")]
    })
], ScheduleDetailComponent);



/***/ }),

/***/ "./src/app/main/travel/service/travel.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/travel/service/travel.service.ts ***!
  \*******************************************************/
/*! exports provided: Schedules, SchedulesIn, SchedulesDetails, SchedulesDetailss, TravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedules", function() { return Schedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesIn", function() { return SchedulesIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesDetails", function() { return SchedulesDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesDetailss", function() { return SchedulesDetailss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelService", function() { return TravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/app/main/common/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _servcies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servcies */ "./src/app/main/servcies/index.ts");







const Schedules = [];
const SchedulesIn = [];
const SchedulesDetails = [];
const SchedulesDetailss = [];
// export const TravelRouteDetails: TravelRouteDetail[] = [];
let TravelService = class TravelService {
    constructor(http, appConfig, utils) {
        this.http = http;
        this.appConfig = appConfig;
        this.utils = utils;
        this.schedule = [];
        this.scheduleList = [];
        this.scheduleDetail = [];
        this.scheduleDetails = [];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': this.appConfig.apiUrl,
            // 'https://netcoretri30days.azurewebsites.net',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Max-Age': '86400',
        });
    }
    setToken(data) {
        this.token = data;
    }
    getToken() {
        return this.token;
    }
    getSchedulesListServer() {
        const token = this.token;
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/travel_route/list', { headers: this.headers });
    }
    getSchedules() {
        this.getSchedulesListServer().subscribe(data => this.schedule.push(data)); // test
        const schedule = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Schedules);
        return schedule;
    }
    getSchedulesList() {
        this.getSchedulesListServer().subscribe(data => this.scheduleList.push(data.travelRoutes)); // test
        const scheduleList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(SchedulesIn);
        return scheduleList;
    }
    getScheduleDetailsServer(id) {
        const token = this.token;
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/travel_route?id=' + id, { headers: this.headers });
    }
    getScheduleDetails(id) {
        this.getScheduleDetailsServer(id).subscribe(data => this.scheduleDetail.push(data)); // test
        const scheduleDateDetails = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(SchedulesDetails);
        return scheduleDateDetails;
    }
    getScheduleDetailss(id) {
        this.getScheduleDetailsServer(id).subscribe(data => this.scheduleDetails.push(data.travel_route)); // test
        const scheduleDateDetails = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(SchedulesDetailss);
        return scheduleDateDetails;
    }
    // getScheduleDateDetails(id): Observable<TravelRouteDetail[]> {
    //   this.getScheduleDateDetailsServer(id).subscribe(data => this.scheduleDetail.push(data)); // test
    //   const scheduleDateDetails = of(TravelRouteDetails);
    //   return scheduleDateDetails;
    // }
    getSchedule(id) {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        // tslint:disable-next-line:no-non-null-assertion
        const schedule = SchedulesIn.find(m => m.id === id);
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(schedule);
    }
    getScheduleDetail(name) {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        // tslint:disable-next-line:no-non-null-assertion
        const scheduleDetail = SchedulesDetails.find(m => m.travel_route.name === name);
        // this.messageService.add(`HeroService: fetched hero id=${id}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(scheduleDetail);
    }
    createScheduleServer(newData) {
        // const username = newData.username.trim();
        const token = this.getToken();
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.post(this.appConfig.apiUrl + '/travel_route/create', newData, {
            headers: this.headers
        });
    }
    createSchedule(newData) {
        return this.createScheduleServer(newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (!res.error) {
                    // this.getSchedulesList().subscribe(data => this.scheduleList = data); // test
                    // this.getUserInfo().subscribe(userInfo => this.userInfo = userInfo); // test
                    return true;
                }
                else {
                    console.log(res.error);
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    }
    removeScheduleServer(id) {
        // const username = newData.username.trim();
        const token = this.getToken();
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/travel_route/remove?id=' + id, { headers: this.headers });
    }
    removeSchedule(id) {
        return this.removeScheduleServer(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (res) {
                    // this.getSchedulesList().subscribe(data => this.scheduleList = data); // test
                    // this.getUserInfo().subscribe(userInfo => this.userInfo = userInfo); // test
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    }
    addPlaceServer(newData) {
        // const username = newData.username.trim();
        const token = this.getToken();
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.post(this.appConfig.apiUrl + '/travel_route/day/place/add?travel_route_day_id=' +
            newData.travel_route_day_id, newData, { headers: this.headers });
    }
    addPlace(newData) {
        return this.addPlaceServer(newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (!res.error) {
                    // this.getSchedulesList().subscribe(data => this.scheduleList = data); // test
                    // this.getUserInfo().subscribe(userInfo => this.userInfo = userInfo); // test
                    return true;
                }
                else {
                    console.log(res.error);
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    }
    removePlaceServer(id) {
        // const username = newData.username.trim();
        const token = this.getToken();
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/travel_route/day/place/remove?id=' + id, { headers: this.headers });
    }
    removePlace(id) {
        return this.removePlaceServer(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (res) {
                    // this.getSchedulesList().subscribe(data => this.scheduleList = data); // test
                    // this.getUserInfo().subscribe(userInfo => this.userInfo = userInfo); // test
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
    }
};
TravelService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _common__WEBPACK_IMPORTED_MODULE_4__["AppConfig"] },
    { type: _servcies__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
];
TravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TravelService);



/***/ }),

/***/ "./src/app/main/travel/travel-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/travel/travel-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TravelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRoutingModule", function() { return TravelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _schedule_detail_schedule_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-detail/schedule-detail.component */ "./src/app/main/travel/schedule-detail/schedule-detail.component.ts");
/* harmony import */ var _travel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel.component */ "./src/app/main/travel/travel.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    {
        path: 'travel',
        children: [
            { path: '', component: _travel_component__WEBPACK_IMPORTED_MODULE_2__["TravelComponent"], pathMatch: 'full' },
            { path: 'travel', component: _travel_component__WEBPACK_IMPORTED_MODULE_2__["TravelComponent"] },
            { path: 'schedule/:id/:start/:end/:name', component: _schedule_detail_schedule_detail_component__WEBPACK_IMPORTED_MODULE_1__["ScheduleDetailComponent"] },
        ]
    }
];
let TravelRoutingModule = class TravelRoutingModule {
};
TravelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], TravelRoutingModule);



/***/ }),

/***/ "./src/app/main/travel/travel.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/travel/travel.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 2400px){\n  agm-map {\n    height: 450px !important;\n    width: 100%;\n  }\n  .content-container {\n    text-align: left;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 90px 10%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\n@media screen and (max-width: 600px){\n  agm-map {\n    height: 300px !important;\n    width: 100%;\n  }\n  .content-container {\n    text-align: left;\n    width: screen*0.3px;\n    position: relative;\n    overflow: auto;\n    height: auto;\n    min-height: 0;\n    margin: 90px 3%;\n    border-radius: 4px;\n    background-color: #fff;\n  }\n}\nmat-label {\n  font-size: 0.8rem;\n  width: 150px;\n  line-height: 2.3rem;\n}\nmat-list {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0;\n}\nmat-icon {\n  color: #308fcc;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n}\nmat-icon:hover {\n  color: #f19c18;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n}\nbutton:disabled mat-icon{\n  color: gray;\n  /* filter:drop-shadow(0px 0px 4px #308fcc); */\n  font-size: 2.3rem !important;\n}\n.full {\n  width: 100%;\n}\n.list2 {\n  margin-top: 30px;\n}\n.list2 .full .right{\n  text-align: right !important;\n  position: absolute;\n  right: 1rem;\n}\n.listitem {\n  font-size: 1.2rem;\n  text-decoration:none;\n  width: 100%;\n  /* height: 2.8rem!important; */\n}\n.list2 .listitem mat-icon {\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 1.5rem !important;\n}\n.del{\n  color: rgb(250, 3, 3) !important;\n  font-size: 1.5rem !important;\n}\n/* .listitem:hover {\n  font-size: 1.2rem;\n  background-color: rgba(0, 0, 0, 0.2);\n} */\n.right-word{ /*帳號細節的列表右邊的灰色字*/\n  text-align: right !important;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.8rem;\n  width: 100%;\n}\n.addBtn {\n margin: auto!important;\n text-align: center!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RyYXZlbC90cmF2ZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkNBQTZDO0VBQzdDLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsV0FBVztFQUNYLDZDQUE2QztFQUM3Qyw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBQ0E7OztHQUdHO0FBRUgsYUFBYSxnQkFBZ0I7RUFDM0IsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsNEJBQTRCO0FBQzdCIiwiZmlsZSI6Ii4uL3RyYXZlbC90cmF2ZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MDBweCl7XG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogNDUwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IHNjcmVlbiowLjNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgbWFyZ2luOiA5MHB4IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBzY3JlZW4qMC4zcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIG1hcmdpbjogOTBweCAzJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuXG5tYXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgd2lkdGg6IDE1MHB4O1xuICBsaW5lLWhlaWdodDogMi4zcmVtO1xufVxuXG5tYXQtbGlzdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICAvKiBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCA0cHggIzMwOGZjYyk7ICovXG4gIGZvbnQtc2l6ZTogMi4zcmVtICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNmMTljMTg7XG4gIC8qIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDRweCAjMzA4ZmNjKTsgKi9cbiAgZm9udC1zaXplOiAyLjNyZW0gIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOmRpc2FibGVkIG1hdC1pY29ue1xuICBjb2xvcjogZ3JheTtcbiAgLyogZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggNHB4ICMzMDhmY2MpOyAqL1xuICBmb250LXNpemU6IDIuM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uZnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdDIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGlzdDIgLmZ1bGwgLnJpZ2h0e1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4ubGlzdGl0ZW0ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDIuOHJlbSFpbXBvcnRhbnQ7ICovXG59XG5cbi5saXN0MiAubGlzdGl0ZW0gbWF0LWljb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4uZGVse1xuICBjb2xvcjogcmdiKDI1MCwgMywgMykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cbi8qIC5saXN0aXRlbTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59ICovXG5cbi5yaWdodC13b3JkeyAvKuW4s+iZn+e0sOevgOeahOWIl+ihqOWPs+mCiueahOeBsOiJsuWtlyovXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZEJ0biB7XG4gbWFyZ2luOiBhdXRvIWltcG9ydGFudDtcbiB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/travel/travel.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/travel/travel.component.ts ***!
  \*************************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_trip_dialog_create_trip_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-trip-dialog/create-trip-dialog.component */ "./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.ts");
/* harmony import */ var _service_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/travel.service */ "./src/app/main/travel/service/travel.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-schedule-dialog/add-schedule-dialog.component */ "./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.ts");









let TravelComponent = class TravelComponent {
    constructor(dialog, mapsAPILoader, ngZone, route, router, nav, travel, snackbar) {
        this.dialog = dialog;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        this.nav = nav;
        this.travel = travel;
        this.snackbar = snackbar;
        this.schedules = [];
        this.scheduleList = [];
        this.scheduleDetail = [];
        this.scheduleDateDetails = [];
    }
    ngOnInit() {
        this.route.url.subscribe(res => this.nav.setUrl(res[0].path));
        this.getSchedules();
        this.getUserLocation();
        this.searchLocation = false;
        this.mapsAPILoader.load().then(() => {
            this.getUserLocation();
            this.geoCoder = new google.maps.Geocoder();
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        this.searchLocation = false;
                        return this.searchLocation;
                    }
                    else {
                        this.searchLocation = true;
                        this.lat = place.geometry.location.lat();
                        this.lng = place.geometry.location.lng();
                        this.placeId = place.place_id;
                        console.log(place.place_id);
                        this.zoom = 12;
                        return this.searchLocation;
                    }
                });
            });
        });
        this.getSchedules();
        this.getSchedulesList();
    }
    getSchedules() {
        this.schedules = [];
        this.travel.getSchedulesListServer().subscribe(data => this.schedules.push(data));
        this.travel.getSchedules()
            .subscribe(schedules => this.schedules = schedules);
        console.log(this.schedules);
    }
    getSchedulesList() {
        this.scheduleList = [];
        this.travel.getSchedulesListServer().subscribe(data => this.scheduleList.push(data.travelRoutes));
        this.travel.getSchedulesList().subscribe(schedulesList => this.scheduleList = schedulesList);
        console.log(this.scheduleList);
    }
    // getScheduleDateDetails() {
    //   this.travel.getScheduleDateDetails()
    //     .subscribe(scheduleDateDetails => this.scheduleDateDetails = scheduleDateDetails);
    // }
    getUserLocation() {
        // get Users current position
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 16;
                console.log('position', position);
            });
        }
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    console.log('No results found');
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    }
    addScheduleDialog() {
        console.log('AddScheduleDialogComponent');
        const dialogRef = this.dialog.open(_add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddScheduleDialogComponent"], {
            width: '600px',
            // height: '700px',
            data: {
                schedules: this.scheduleList[this.scheduleList.length - 1],
                // id: this.scheduleDateDetails.length,
                location: this.searchElementRef.nativeElement.value,
                placeId: this.placeId,
                lat: this.lat,
                lng: this.lng
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                console.log(res);
                this.travel.addPlace(res).subscribe(res2 => {
                    if (res2) {
                        this.snackbar.open('新增成功', 'OK', { duration: 3000 });
                        this.ngOnInit();
                        // this.router.navigate(['/personal/account']);
                        // this.userService.logout();
                        // this.router.navigate(['/user/login']);
                    }
                    else {
                        this.snackbar.open('新增失敗', 'OK', { duration: 3000 });
                    }
                });
            }
        });
    }
    createTripDialog() {
        const dialogRef = this.dialog.open(_create_trip_dialog_create_trip_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CreateTripDialogComponent"], {
            width: '600px',
            // height: '700px',
            data: {
                schedules: this.schedules
            }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                console.log(res);
                this.travel.createSchedule(res).subscribe(res2 => {
                    if (res2) {
                        this.snackbar.open('新增成功', 'OK', { duration: 3000 });
                        this.ngOnInit();
                        // this.router.navigate(['/personal/account']);
                        // this.userService.logout();
                        // this.router.navigate(['/user/login']);
                    }
                    else {
                        this.snackbar.open('新增失敗', 'OK', { duration: 3000 });
                    }
                });
                // console.log(this.schedules);
                // const sTime = new Date(res.start).getTime();
                // const eTime = new Date(res.end).getTime();
                // this.countDays = ((eTime - sTime) / (1000 * 60 * 60 * 24)) + 1;
                // for (let i = 0 ; i < this.countDays; i++) {
                //   const addDays = (1000 * 60 * 60 * 24) * i;
                //   const addedDate = new Date(sTime + addDays);
                //   console.log('起始日期:', res.start, '期間:', addedDate, '天數:', this.countDays);
                //   const newScheduleDetail = {id: this.scheduleDetail.length, name: res.name, date: addedDate};
                //   this.scheduleDetail.push(newScheduleDetail);
                // }
            }
        });
    }
};
TravelComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"] },
    { type: _service_travel_service__WEBPACK_IMPORTED_MODULE_2__["TravelService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('search', { static: true })
], TravelComponent.prototype, "searchElementRef", void 0);
TravelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-travel',
        template: __webpack_require__(/*! raw-loader!./travel.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/travel/travel.component.html"),
        styles: [__webpack_require__(/*! ./travel.component.css */ "./src/app/main/travel/travel.component.css")]
    })
], TravelComponent);



/***/ }),

/***/ "./src/app/main/travel/travel.module.ts":
/*!**********************************************!*\
  !*** ./src/app/main/travel/travel.module.ts ***!
  \**********************************************/
/*! exports provided: TravelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelModule", function() { return TravelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _travel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-routing.module */ "./src/app/main/travel/travel-routing.module.ts");
/* harmony import */ var _schedule_detail_schedule_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-detail/schedule-detail.component */ "./src/app/main/travel/schedule-detail/schedule-detail.component.ts");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/material.module */ "./src/app/main/common/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _travel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel.component */ "./src/app/main/travel/travel.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/snazzy-info-window */ "./node_modules/@agm/snazzy-info-window/fesm2015/agm-snazzy-info-window.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _service_travel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/travel.service */ "./src/app/main/travel/service/travel.service.ts");
/* harmony import */ var _add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-schedule-dialog/add-schedule-dialog.component */ "./src/app/main/travel/add-schedule-dialog/add-schedule-dialog.component.ts");
/* harmony import */ var _create_trip_dialog_create_trip_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-trip-dialog/create-trip-dialog.component */ "./src/app/main/travel/create-trip-dialog/create-trip-dialog.component.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../navbar/navbar.module */ "./src/app/main/navbar/navbar.module.ts");
/* harmony import */ var _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../navbar-back/navbarHback.module */ "./src/app/main/navbar-back/navbarHback.module.ts");


















let TravelModule = class TravelModule {
};
TravelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _travel_component__WEBPACK_IMPORTED_MODULE_6__["TravelComponent"],
            _schedule_detail_schedule_detail_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleDetailComponent"],
            _add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AddScheduleDialogComponent"],
            _create_trip_dialog_create_trip_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CreateTripDialogComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _common_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _travel_routing_module__WEBPACK_IMPORTED_MODULE_1__["TravelRoutingModule"],
            _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_16__["NavbarModule"],
            _navbar_back_navbarHback_module__WEBPACK_IMPORTED_MODULE_17__["NavbarHbackModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"],
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_8__["AgmSnazzyInfoWindowModule"]
        ],
        providers: [
            _service_travel_service__WEBPACK_IMPORTED_MODULE_13__["TravelService"]
        ],
        entryComponents: [
            _add_schedule_dialog_add_schedule_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AddScheduleDialogComponent"],
            _create_trip_dialog_create_trip_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CreateTripDialogComponent"],
        ]
    })
], TravelModule);



/***/ }),

/***/ "./src/app/main/user/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main/user/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container {\n  width: 100%;\n  height: 100%;\n  background-color: #308fcc;\n  background-position: cover;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n} */\n\n.container {\n  background-color: #b8dcfa ;\n  margin-left: 0 !important;\n  margin-right: 0;\n  max-width: 100%!important;\n  width: 100% !important;\n  height: 100vh;\n}\n\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 70%;\n}\n\n::ng-deep .mat-form-field-appearance-outline:hover .mat-form-field-outline-thick{\n  border-color: #308fcc;\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n\n/* .container:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    height: 100vh;\n} */\n\n.login-card {\n  border-color: #308fcc;\n  text-align: center;\n  max-width: 70%;\n  width: 70%;\n  position: absolute;\n  top: 180px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.title {\n  text-align: center;\n}\n\n.btn-center {\n  display: flex;\n  justify-content: center;\n}\n\n.addBtn {\n  background-color: #308fcc;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRzs7QUFFSDtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJDQUFtQztVQUFuQyxtQ0FBbUM7QUFDckM7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiIuLi91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOGZjYztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0gKi9cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRjZmEgO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xuICB3aWR0aDogNzAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcbiAgYm9yZGVyLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMzA4ZmNjO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggIzMwOGZjYyk7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcbiAgY29sb3I6IHJlZDtcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4IHJlZCk7XG59XG5cbi8qIC5jb250YWluZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgIGhlaWdodDogMTAwdmg7XG59ICovXG5cbi5sb2dpbi1jYXJkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzA4ZmNjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5hZGRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/user/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main/user/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servcies/nav.service */ "./src/app/main/servcies/nav.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/user.service */ "./src/app/main/user/service/user.service.ts");







let LoginComponent = class LoginComponent {
    constructor(fb, userService, snackbar, router, route, nav) {
        this.fb = fb;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
        this.route = route;
        this.nav = nav;
        this.member = [];
        this.userInfo = [];
    }
    ngOnInit() {
        this.route.url.subscribe(res => this.nav.setUrl(res[0].path));
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{1,20}')],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{1,20}')],
            rememberMe: [true]
        });
    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get rememberMe() { return this.form.get('rememberMe'); }
    login() {
        this.userService.login(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('登入成功', 'OK', { duration: 3000 });
                this.router.navigate(['/assistant']);
                this.getMembers();
                this.getUserInfo();
            }
            else {
                this.snackbar.open('請檢查使用者名稱及密碼', 'OK', { duration: 3000 });
            }
        });
    }
    getMembers() {
        this.userService.getUserFromServer().subscribe(data => this.member.push(data));
        this.userService.getMembers().subscribe(member => this.member = member);
    }
    getUserInfo() {
        this.userService.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info));
        this.userService.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _servcies_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/main/user/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main/user/register/register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/main/user/register/register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container {\n  height: 600px;\n  background-position: cover;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n}\n\n.container:before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    height: 100vh;\n} */\n\n::ng-deep .mat-form-field {\n  text-align: center!important;\n  width: 70%;\n  height: 50%;\n}\n\n::ng-deep .mat-form-field-appearance-outline:hover .mat-form-field-outline-thick{\n  border-color: #308fcc;\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #308fcc;\n  -webkit-filter:drop-shadow(0px 0px 3px #308fcc);\n          filter:drop-shadow(0px 0px 3px #308fcc);\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{\n  color: red;\n  -webkit-filter:drop-shadow(0px 0px 3px red);\n          filter:drop-shadow(0px 0px 3px red);\n}\n\n::ng-deep.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{\n  border-color:#308fcc;\n}\n\n::ng-deep.mat-radio-button.mat-accent .mat-radio-inner-circle{\n  color:r#308fcc;\n  background-color:#308fcc;\n}\n\n::ng-deep.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color:#308fcc !important;;\n}\n\n.container {\n  background-color: #b8dcfa;\n  margin-left: 0 !important;\n  margin-right: 0;\n  max-width: 100%!important;\n  width: 100% !important;\n  height: 100vh;\n}\n\n.login-card {\n  text-align: center;\n  max-width: 70%;\n  width: 70%;\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.title {\n  text-align: center;\n}\n\n.btn-center {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n.addBtn {\n  background-color: #308fcc;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUdBO0VBQ0UsY0FBYztFQUNkLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiIuLi91c2VyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0gKi9cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcbiAgYm9yZGVyLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogIzMwOGZjYztcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggM3B4ICMzMDhmY2MpO1xufVxuXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMzMDhmY2M7XG4gIGZpbHRlcjpkcm9wLXNoYWRvdygwcHggMHB4IDNweCAjMzA4ZmNjKTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre1xuICBjb2xvcjogcmVkO1xuICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAzcHggcmVkKTtcbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtcbiAgYm9yZGVyLWNvbG9yOiMzMDhmY2M7XG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGV7XG4gIGNvbG9yOnIjMzA4ZmNjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMzMDhmY2M7XG59XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IzMwOGZjYyAhaW1wb3J0YW50Oztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRjZmE7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxvZ2luLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNzAlO1xuICB3aWR0aDogNzAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5hZGRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4ZmNjO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/user/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/user/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/user.service */ "./src/app/main/user/service/user.service.ts");







let RegisterComponent = class RegisterComponent {
    constructor(fb, el, userService, snackbar, router) {
        this.fb = fb;
        this.el = el;
        this.userService = userService;
        this.snackbar = snackbar;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,64}')],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,20}')],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9-_]{5,64}')],
            gender: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]
        });
        this.mobiles = this.el.nativeElement.querySelector('#mobile');
        this.iti = intl_tel_input__WEBPACK_IMPORTED_MODULE_5__(this.mobiles, {
            allowDropdown: true,
            initialCountry: 'tw',
            separateDialCode: true
        });
    }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get name() { return this.form.get('name'); }
    get gender() { return this.form.get('gender'); }
    get email() { return this.form.get('email'); }
    get mobile() { return this.form.get('mobile'); }
    register() {
        this.userService.register(this.form.value)
            .subscribe(res => {
            if (res) {
                this.snackbar.open('註冊成功', 'OK', { duration: 3000 });
                this.router.navigate(['/user/login']);
            }
            else {
                this.snackbar.open('帳號已存在', 'OK', { duration: 3000 });
            }
        });
        console.log(this.form.value);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RegisterComponent.prototype, "mobiles", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/user/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/main/user/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/main/user/service/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/main/user/service/user.service.ts ***!
  \***************************************************/
/*! exports provided: Members, Privacys, UserInfos, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Privacys", function() { return Privacys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfos", function() { return UserInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _travel_service_travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../travel/service/travel.service */ "./src/app/main/travel/service/travel.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./src/app/main/common/index.ts");
/* harmony import */ var _servcies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../servcies */ "./src/app/main/servcies/index.ts");








const Members = [];
const Privacys = [];
const UserInfos = [];
let UserService = class UserService {
    constructor(http, appConfig, utils, travel) {
        this.http = http;
        this.appConfig = appConfig;
        this.utils = utils;
        this.travel = travel;
        this.token = [];
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.registerStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.privacy = [];
        this.member = [];
        this.userInfo = [];
        this.Token = [];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': this.appConfig.apiUrl,
            // 'https://netcoretri30days.azurewebsites.net',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Max-Age': '86400',
        });
    }
    registerServer(registerData) {
        const username = registerData.username.trim();
        const password = registerData.password.trim();
        const gender = registerData.gender.trim();
        const name = registerData.name.trim();
        const email = registerData.email.trim();
        const mobile = registerData.mobile.trim();
        return this.http.post(this.appConfig.apiUrl + '/register', {
            headers: this.headers,
            username,
            password,
            gender,
            name,
            email,
            mobile,
        });
    }
    register(registerData) {
        return this.registerServer(registerData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                this.registerStatus.next(true);
                this.currentUser.next(registerData.username);
                // if (registerData.rememberMe) {
                this.utils.writeToken(res.payload);
                // }
                console.log(res);
                return true;
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    }
    loginServer(loginData) {
        const username = loginData.username.trim();
        const password = loginData.password.trim();
        return this.http.post(this.appConfig.apiUrl + '/login', {
            headers: this.headers,
            username,
            password,
        });
    }
    login(loginData) {
        return this.loginServer(loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (!res.error) {
                    this.loginStatus.next(true);
                    this.currentUser.next(loginData.username);
                    // if (loginData.rememberMe) {
                    this.utils.writeToken(res.payload);
                    // }
                    this.Token.push(res.payload);
                    console.log(res);
                    this.token.push(res);
                    this.travel.setToken(this.token[0].access_token);
                    console.log(this.token);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    }
    logout() {
        this.loginStatus.next(false);
        this.currentUser.next(null);
        this.token = [];
        Members.splice(0, Members.length);
        UserInfos.splice(0, UserInfos.length);
    }
    getLoginStatus() {
        return this.loginStatus;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    checkUser() {
        if (!this.utils.isTokenExpired()) {
            this.loginStatus.next(true);
            this.getUser();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        else {
            console.log('no token or token is expired');
            this.utils.removeToken();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
    }
    getUserFromServer() {
        // console.log(this.token[0].access_token);
        // if (this.utils.isTokenExpired()) {
        const token = this.token[0].access_token;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/self/info', { headers: this.headers });
        // }
        // if (this.utils.isTokenExpired()) {
        //   const token = this.token[0].access_token;
        //   return this.http
        //     .get(this.appConfig.apiUrl + '/user_info')
        //     .pipe(
        //       map((res: Response) => {
        //         if (res.success) {
        //           return res.payload;
        //         } else {
        //           return null;
        //         }
        //       })
        //     );
        // } else {
        //   return of(null);
        // }
    }
    getMembers() {
        this.getUserFromServer().subscribe(data => this.member.push(data)); // test
        const members = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Members);
        return members;
    }
    getUserInfo() {
        this.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info)); // test
        const userInfo = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(UserInfos);
        return userInfo;
    }
    // getMemberInfo() {
    //   this.member = [];
    //   this.getUserFromServer().subscribe(data => this.member.push(data));
    //   this.getMembers().subscribe(member => this.member = member);
    // }
    // getUserInfoDetail() {
    //   this.userInfo = [];
    //   this.getUserFromServer().subscribe(data => this.userInfo.push(data.user_info));
    //   this.getUserInfo().subscribe(userInfo => this.userInfo = userInfo);
    // }
    getUser() {
        this.getUserFromServer().subscribe((res) => {
            this.currentUser.next(res.user_info);
            // UserInfos.push(res.user_info);
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
        });
    }
    getUserPrivacyServer() {
        const token = this.token[0].access_token;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/self/privacy', { headers: this.headers });
    }
    getUserPrivacy() {
        this.getUserPrivacyServer().subscribe(data => this.privacy.push(data)); // test
        const privacy = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Privacys);
        return privacy;
    }
    getUserNoticeServer() {
        const token = this.token[0].access_token;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.get(this.appConfig.apiUrl + '/self/privacy', { headers: this.headers });
    }
    getUserNotice() {
        this.getUserPrivacyServer().subscribe(data => this.privacy.push(data)); // test
        const privacy = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Privacys);
        return privacy;
    }
    getUserName() {
        let username;
        this.getUserFromServer().subscribe((res) => {
            username = res.user_info.username;
            return username;
        });
    }
    getUserEmail() {
        let email;
        this.getUserFromServer().subscribe((res) => {
            email = res.user_info.email;
            return email;
        });
    }
    updateUserInfoServer(newData) {
        // const username = newData.username.trim();
        const token = this.token[0].access_token;
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.post(this.appConfig.apiUrl + '/self/info', newData, {
            headers: this.headers
        });
    }
    updateUserInfo(newData) {
        return this.updateUserInfoServer(newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (!res.error) {
                    this.member = []; // test
                    this.userInfo = []; // test
                    this.getMembers().subscribe(member => this.member = member); // test
                    this.getUserInfo().subscribe(userInfo => this.userInfo = userInfo); // test
                    return true;
                }
                else {
                    console.log(res.error);
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    }
    updateUserPwdServer(newData) {
        // const username = newData.username.trim();
        const token = this.token[0].access_token;
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.post(this.appConfig.apiUrl + '/self/password', newData, {
            headers: this.headers
        });
    }
    updateUserPwd(newData) {
        return this.updateUserPwdServer(newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (!res.error) {
                    // this.getUser();
                    return true;
                }
                else {
                    console.log(res.error);
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    }
    updateUserPrivacyServer(newData) {
        // const username = newData.username.trim();
        const token = this.token[0].access_token;
        // console.log(username);
        console.log(token);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', `Bearer ${token}`);
        console.log(this.headers);
        return this.http.post(this.appConfig.apiUrl + '/self/privacy', newData, {
            headers: this.headers
        });
    }
    updateUserPrivacy(newData) {
        return this.updateUserPrivacyServer(newData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            if (res) {
                if (!res.error) {
                    return true;
                }
                else {
                    console.log(res.error);
                    return false;
                }
            }
            else {
                return false;
            }
        }, (err) => {
            if (err.error instanceof Error) {
                console.log('client-side error');
            }
            else {
                console.log('server-side error');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _common__WEBPACK_IMPORTED_MODULE_6__["AppConfig"] },
    { type: _servcies__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
    { type: _travel_service_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/main/user/user-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/user/user-routing.module.ts ***!
  \**************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/main/user/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/main/user/register/register.component.ts");





const routes = [
    {
        path: 'user',
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] }
        ]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/main/user/user.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/user/user.module.ts ***!
  \******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/material.module */ "./src/app/main/common/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/main/user/user-routing.module.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/user.service */ "./src/app/main/user/service/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/main/user/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/main/user/register/register.component.ts");
/* harmony import */ var _servcies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../servcies */ "./src/app/main/servcies/index.ts");










let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            _common_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [
            _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _servcies__WEBPACK_IMPORTED_MODULE_9__["UtilsService"],
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #b8dcfa ;\n  margin: auto;\n  max-width: 100%!important;\n  width: 100% !important;\n  height: 100vh;\n}\n\n.logo {\n  text-align: center;\n  /* max-width: 350px; */\n  position: absolute;\n  top: 200px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: #308fcc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCIiwiZmlsZSI6Ii4uLy4uL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRjZmEgO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBtYXgtd2lkdGg6IDM1MHB4OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBjb2xvcjogIzMwOGZjYztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/user/service/user.service */ "./src/app/main/user/service/user.service.ts");




let WelcomeComponent = class WelcomeComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.login$ = this.userService.getLoginStatus();
        console.log(this.login$);
        setTimeout(() => {
            this.nav();
        }, 3000);
    }
    nav() {
        if (!this.login$) {
            this.router.navigate(['/assistant']);
        }
        else {
            this.router.navigate(['/user/login']);
        }
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _main_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
    })
], WelcomeComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





// import * as Socket from 'socket.io';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yuchiehkuan/Documents/Tripo-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map