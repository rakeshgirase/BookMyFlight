import {Injectable} from "@angular/core";
import {Subject} from "rxjs/RX";

@Injectable()
export class FlightService {

    getFlights() {
        let subject = new Subject()
        setTimeout(()=> {subject.next(FLIGHTS); subject.complete();},2000)
        return subject;
    }



    getFlight(id:number){
        return FLIGHTS.find(flight => flight.id === id);
    }
}

const FLIGHTS = [{
    id: 1,
    name: 'Air India',
    date: '15-Sep-2017',
    time: '10 AM',
    from: 'BOM',
    to: 'GLA',
    price: '500 USD',
    imageUrl: '/app/asset/images/angularconnect-shield.png',
    location: {
        address: '1057 DT',
        city: 'Glasgow',
        country: 'Scotland'
    }
},
    {
        id: 2,
        name: 'Virgin Atlantic',
        date: '16-Sep-2017',
        time: '10 AM',
        from: 'LON',
        to: 'BOM',
        price: '1500 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    },
    {
        id: 3,
        name: 'Air France',
        date: '17-Sep-2017',
        time: '10 AM',
        from: 'PAR',
        to: 'LON',
        price: '300 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Paris',
            country: 'France'
        }
    },
    {
        id: 4,
        name: 'Kingfisher',
        date: '19-Sep-2017',
        time: '12 AM',
        from: 'BOM',
        to: 'BLR',
        price: '100 USD',
        imageUrl: '/app/asset/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'Banglore',
            country: 'India'
        }
    }]