import {Injectable} from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Response, Headers, RequestOptions} from "@angular/http"
import {HttpClient} from "@angular/common/http"

import {IFlight} from "./flight.module";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/empty";
import 'rxjs/Rx';

@Injectable()
export class FlightService {

    constructor(private http:HttpClient){
    }

    getFlights():Observable<IFlight[]>{
        return this.http.get<IFlight[]>("http://localhost:8080/bookmyflights/flights").map((response)=>{
            return response;
        })
    }

    private handleError(error:Response){
        return Observable.throw(error.statusText);
    }

    getFlight(id:number): Observable<IFlight>{
        return this.http.get<IFlight>("http://localhost:8080/bookmyflights/flights/" + id).map((response)=>{
            return response;
        })
    }

    saveFlight(flight: IFlight):Observable<IFlight> {
        let headers = new Headers({'content-type':'application/json'})
        let options = new RequestOptions({headers: headers});

        return this.http.post<any>('http://localhost:8080/bookmyflights/flights', flight).map((response)=>{
            return response;
        });
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