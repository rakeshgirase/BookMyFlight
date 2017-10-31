import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {FlightService} from "./shared/flight.service";

@Injectable()
export class FlightResolver implements Resolve<any> {

    constructor(private flightService: FlightService) {
    }

    resolve(route:ActivatedRouteSnapshot) {
        return this.flightService.getFlight(route.params['id']);
    }

}