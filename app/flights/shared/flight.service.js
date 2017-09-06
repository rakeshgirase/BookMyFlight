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
var FlightService = (function () {
    function FlightService() {
    }
    FlightService.prototype.getFlights = function () {
        return FLIGHTS;
    };
    FlightService.prototype.getFlight = function (id) {
        return FLIGHTS.find(function (flight) { return flight.id === id; });
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FlightService);
exports.FlightService = FlightService;
var FLIGHTS = [{
        id: 1,
        name: 'Air India',
        date: '15-Sep-2017',
        time: '10 AM',
        from: 'BOM',
        to: 'GLA',
        price: '500 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Glasgow',
            country: 'Scotland'
        }
    },
    {
        id: 2,
        name: 'Virgin Atlantic',
        date: '16-Sep-2017',
        time: '10 AM',
        from: 'LON',
        to: 'BOM',
        price: '1500 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    },
    {
        id: 3,
        name: 'Air France',
        date: '17-Sep-2017',
        time: '10 AM',
        from: 'PAR',
        to: 'LON',
        price: '300 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Paris',
            country: 'France'
        }
    },
    {
        id: 4,
        name: 'Kingfisher',
        date: '19-Sep-2017',
        time: '12 AM',
        from: 'BOM',
        to: 'BLR',
        price: '100 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Banglore',
            country: 'India'
        }
    }];
//# sourceMappingURL=flight.service.js.map