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
var flight_service_1 = require("./shared/flight.service");
var toastr_service_1 = require("../common/toastr.service");
var FlightsListComponent = (function () {
    function FlightsListComponent(flightService, toastrService) {
        this.flightService = flightService;
        this.toastrService = toastrService;
    }
    FlightsListComponent.prototype.ngOnInit = function () {
        this.flights = this.flightService.getFlights();
    };
    FlightsListComponent.prototype.handleBookRequest = function (flightName) {
        this.toastrService.success(flightName);
        //window.location.href = "/flights/1";
    };
    return FlightsListComponent;
}());
FlightsListComponent = __decorate([
    core_1.Component({
        template: "\n        <div>\n            <h1>\n            Your Flights:\n            </h1>\n            <hr/>\n        <div class=\"row\">\n        <div class=\"col-md-5\" *ngFor=\"let flight of flights\">\n            <flight-thumbnail #thumbnail (bookRequest)= \"handleBookRequest(flight.name)\" [flight]=\"flight\"></flight-thumbnail>\n            <button class=\"btn btn-primary\" (click)=\"thumbnail.logSomething()\">Call Child Item</button>\n        </div>\n        </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService, toastr_service_1.ToastrService])
], FlightsListComponent);
exports.FlightsListComponent = FlightsListComponent;
//# sourceMappingURL=FlightsListComponent.js.map