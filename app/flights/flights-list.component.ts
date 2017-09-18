import {Component, OnInit} from "@angular/core";
import {FlightService} from "./shared/flight.service";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IFlight} from "./shared/flight.module";

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
    flights: IFlight[]
    constructor(private toastrService: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        //Uncomment this when you are not using routing for getting the flights from FlightListRouter
        //this.flightService.getFlights().subscribe(flights=> this.flights = flights);
        this.flights = this.route.snapshot.data['flights'];
    }

    handleBookRequest(flightName) {
        this.toastrService.success(flightName);
        //window.location.href = "/flights/1";
    }
}