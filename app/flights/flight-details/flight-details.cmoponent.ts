import {Component, OnInit} from "@angular/core";
import {FlightService} from "../shared/flight.service";
import {ActivatedRoute} from "@angular/router";
@Component({
    templateUrl: '/app/flights/flight-details/flight-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .flight-image { height: 100px}
        `
    ]
})
export class FlightDetailsComponent implements OnInit{
    flight: any

    constructor(private flightService: FlightService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.flight = this.flightService.getFlight(+this.route.snapshot.params['id'])
    }
}