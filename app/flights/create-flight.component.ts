import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FlightService} from "./shared/flight.service";
import {IFlight} from "./shared/flight.module";

@Component({
    templateUrl: 'app/flights/create-flight.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
    `]
})
export class CreateFlightComponent implements OnInit {
    isDirty: Boolean = true;

    flight: IFlight;

    constructor(private router: Router, private flightService: FlightService) {

    }

    ngOnInit() {
        this.flight = {
            id: 5,
            name: 'British Airlines',
            date: new Date('19-Sep-2018'),
            time: '11 AM',
            from: 'LON',
            to: 'LGW',
            price: 150,
            imageUrl: '/app/assets/images/ng-nl.png',
            onlineUrl: '/app/assets/images/ng-nl.png',
            location: {
                address: '1057 DT',
                city: 'Banglore',
                country: 'India'
            }
        }
    }

    saveFlight(formValues) {
        this.flightService.saveFlight(formValues);
        this.isDirty = false;
        this.router.navigate(['/flights']);
    }

    cancel() {
        this.router.navigate(['/flights']);
    }
}