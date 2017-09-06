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
var flight_service_1 = require("../shared/flight.service");
var router_1 = require("@angular/router");
var FlightDetailsComponent = (function () {
    function FlightDetailsComponent(flightService, route) {
        this.flightService = flightService;
        this.route = route;
    }
    FlightDetailsComponent.prototype.ngOnInit = function () {
        this.flight = this.flightService.getFlight(+this.route.snapshot.params['id']);
    };
    return FlightDetailsComponent;
}());
FlightDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: '/app/flights/flight-details/flight-details.component.html',
        styles: ["\n        .container { padding-left: 20px; padding-right: 20px;}\n        .flight-image { height: 100px}\n        "
        ]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, router_1.ActivatedRoute])
], FlightDetailsComponent);
exports.FlightDetailsComponent = FlightDetailsComponent;
//# sourceMappingURL=flight-details.cmoponent.js.map