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
var platform_browser_1 = require("@angular/platform-browser");
var flights_app_component_1 = require("./flights-app.component");
var FlightsListComponent_1 = require("./flights/FlightsListComponent");
var flight_thumbnail_component_1 = require("./flights/flight-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var flight_service_1 = require("./flights/shared/flight.service");
var toastr_service_1 = require("./common/toastr.service");
var flight_details_cmoponent_1 = require("./flights/flight-details/flight-details.cmoponent");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var create_flight_component_1 = require("./flights/create-flight.component");
var AppModule = (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes_1.appRoutes, { enableTracing: true })],
        declarations: [navbar_component_1.NavBarComponent, flights_app_component_1.FlightsAppComponent, FlightsListComponent_1.FlightsListComponent, flight_thumbnail_component_1.FlightThumbnailComponent, flight_details_cmoponent_1.FlightDetailsComponent, routes_1.RouteComponent, create_flight_component_1.CreateFlightComponent],
        providers: [flight_service_1.FlightService, toastr_service_1.ToastrService],
        bootstrap: [flights_app_component_1.FlightsAppComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map