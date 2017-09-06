"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FlightsAppComponent = (function () {
    function FlightsAppComponent() {
    }
    return FlightsAppComponent;
}());
FlightsAppComponent = __decorate([
    core_1.Component({
        selector: 'flights-app',
        template: "\n        <nav-bar></nav-bar>\n        <h1>Angular Router</h1>\n        <nav>\n          <a routerLink=\"/flights\" routerLinkActive=\"active\">Flights</a>\n          <a routerLink=\"/flights/3\" routerLinkActive=\"active\">Flight Details</a>\n        </nav>\n        <router-outlet></router-outlet>\n        "
    }),
    __metadata("design:paramtypes", [])
], FlightsAppComponent);
exports.FlightsAppComponent = FlightsAppComponent;
//# sourceMappingURL=flights-app.component.js.map