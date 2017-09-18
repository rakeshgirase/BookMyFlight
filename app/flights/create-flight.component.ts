import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FlightService} from "./shared/flight.service";

@Component({
    templateUrl:'app/flights/create-flight.component.html',
    styles:[`
        em {float:right; color:#E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
    `]
})
export class CreateFlightComponent {
    isDirty:Boolean = true;
    constructor(private router: Router, private flightService:FlightService){

    }

    saveFlight(formValues){
        this.flightService.saveFlight(formValues);
        this.isDirty = false;
        this.router.navigate(['/flights']);
    }
    cancel(){
        this.router.navigate(['/flights']);
    }
}