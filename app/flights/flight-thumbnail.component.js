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
var FlightThumbnailComponent = (function () {
    function FlightThumbnailComponent() {
        this.bookRequest = new core_1.EventEmitter();
    }
    FlightThumbnailComponent.prototype.book = function () {
        console.log('Request for booking!!', this.flight.name);
        this.bookRequest.emit(this.flight.name);
    };
    FlightThumbnailComponent.prototype.logSomething = function () {
        console.log('Log Something!!');
    };
    return FlightThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlightThumbnailComponent.prototype, "flight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FlightThumbnailComponent.prototype, "bookRequest", void 0);
FlightThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'flight-thumbnail',
        templateUrl: 'app/flights/flights-list.component.html'
    }),
    __metadata("design:paramtypes", [])
], FlightThumbnailComponent);
exports.FlightThumbnailComponent = FlightThumbnailComponent;
//# sourceMappingURL=flight-thumbnail.component.js.map