import {Routes} from "@angular/router";
import {FlightsListComponent} from "./flights/FlightsListComponent";
import {FlightDetailsComponent} from "./flights/flight-details/flight-details.cmoponent";
import {Component} from "@angular/core";
import {CreateFlightComponent} from "./flights/create-flight.component";

export const appRoutes: Routes = [
    {path: 'flights/new', component: CreateFlightComponent},
    {path: 'flights', component: FlightsListComponent},
    {path: 'flights/:id', component: FlightDetailsComponent},
    {path: '', redirectTo: 'flights', pathMatch: 'full'}
]

@Component({
    selector: '<route-request></route-request>',
    templateUrl:'/app/flights/flight-details/flight-details.component.html'
})
export class RouteComponent {

}
