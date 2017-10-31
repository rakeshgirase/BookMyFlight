import {Component, OnInit, Inject} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {IFlight} from "./shared/flight.module";
import {Toastr, TOASTR_TOKEN} from "../common/toastr.service";
import {FlightService} from "./shared/flight.service";

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

    constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private route: ActivatedRoute, private flightService:FlightService) {
    }

    ngOnInit() {
        //Uncomment this when you are not using routing for getting the flights from FlightListRouter
        //this.flightService.getFlights().subscribe(flights=> this.flights = flights);
        this.flights = this.route.snapshot.data['flights'];
    }

    handleBookRequest(flightName) {
        this.toastr.success(flightName);
        //window.location.href = "/flights/1";
    }
}