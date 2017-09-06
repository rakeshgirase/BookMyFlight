import {Component, OnInit} from "@angular/core";
import {FlightService} from "./shared/flight.service";
import {ToastrService} from "../common/toastr.service";
import {Router} from "@angular/router";

@Component({
    template: `
        <div>
            <h1>
            Your Flights:
            </h1>
            <hr/>
        <div class="row">
        <div class="col-md-5" *ngFor="let flight of flights">
            <flight-thumbnail #thumbnail (bookRequest)= "handleBookRequest(flight.name)" [flight]="flight"></flight-thumbnail>
            <button class="btn btn-primary" (click)="thumbnail.logSomething()">Call Child Item</button>
        </div>
        </div>
        </div>
    `
})
export class FlightsListComponent implements OnInit{
    flights: any[]
    constructor(private flightService: FlightService, private toastrService: ToastrService) {
    }

    ngOnInit() {
        this.flights = this.flightService.getFlights();
    }

    handleBookRequest(flightName) {
        this.toastrService.success(flightName);
        //window.location.href = "/flights/1";
    }
}