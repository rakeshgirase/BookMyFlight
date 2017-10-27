import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {FlightService} from "./shared/flight.service";

@Injectable()
export class FlightListResolver implements Resolve<any> {

    constructor(private flightService: FlightService) {
    }

    resolve() {
        return this.flightService.getFlights();
    }

}