import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {FlightService} from "../shared/flight.service";
@Injectable()
export class FlightRouteActivator implements CanActivate{

    constructor(private flightService: FlightService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const validFlight = !!this.flightService.getFlight(+route.params['id'])
        if(!validFlight){
            this.router.navigate(['/404'])
        }
        return validFlight;
    }

}