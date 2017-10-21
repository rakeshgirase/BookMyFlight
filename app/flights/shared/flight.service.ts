import {Injectable} from "@angular/core";
import {Subject} from "rxjs/RX";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {IFlight} from "./flight.module";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FlightService {

    getFlights():Observable<IFlight[]> {
        let subject = new Subject<IFlight[]>()
        setTimeout(()=> {subject.next(FLIGHTS); subject.complete();},100)
        return subject;
    }

    getFlight(id:number): IFlight{
        return FLIGHTS.filter(flight => flight.id === id).pop();
        //return new IFlight();
    }

    saveFlight(flight: IFlight) {
        flight.id=999
        FLIGHTS.push(flight)
    }
}

const FLIGHTS:IFlight[] = [{
    id: 1,
    name: 'Air India',
    date: new Date('15-Sep-2017'),
    time: '10 AM',
    from: 'BOM',
    to: 'GLA',
    price: 500,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    onlineUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
        address: '1057 DT',
        city: 'Glasgow',
        country: 'Scotland'
    },
    sessions: []
},
    {
        id: 2,
        name: 'Virgin Atlantic',
        date: new Date('16-Sep-2017'),
        time: '10 AM',
        from: 'LON',
        to: 'BOM',
        price: 1500,
        imageUrl: '/app/assets/images/basic-shield.png',
        onlineUrl: '/app/assets/images/basic-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    },
    {
        id: 3,
        name: 'Air France',
        date: new Date('17-Sep-2017'),
        time: '10 AM',
        from: 'PAR',
        to: 'LON',
        price: 300,
        imageUrl: '/app/assets/images/ng-conf.png',
        onlineUrl: '/app/assets/images/ng-conf.png',
        location: {
            address: '1057 DT',
            city: 'Paris',
            country: 'France'
        }
    },
    {
        id: 4,
        name: 'Kingfisher',
        date: new Date('19-Sep-2017'),
        time: '12 AM',
        from: 'BOM',
        to: 'BLR',
        price: 100,
        imageUrl: '/app/assets/images/ng-nl.png',
        onlineUrl: '/app/assets/images/ng-nl.png',
        location: {
            address: '1057 DT',
            city: 'Banglore',
            country: 'India'
        }
    }]