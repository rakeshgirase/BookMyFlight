import {Routes} from "@angular/router";
import {FlightsListComponent} from "./flights/FlightsListComponent";
import {FlightDetailsComponent} from "./flights/flight-details/flight-details.cmoponent";
import {Component} from "@angular/core";
import {CreateFlightComponent} from "./flights/create-flight.component";
import {PageNotFoundComponent} from "./errors/page-not-found.component";
import {FlightRouteActivator} from "./flights/flight-details/flight-routeactivator.service";
import {FlightListResolver} from "./flights/shared/flights-list.resolver";

export const appRoutes: Routes = [
    {path: 'flights/new', component: CreateFlightComponent, canDeactivate: ['canDeactivateCreateFlight']},
    {path: 'flights', component: FlightsListComponent, resolve: {flights: FlightListResolver}},
    {path: 'flights/:id', component: FlightDetailsComponent, canActivate: [FlightRouteActivator]},
    {path: '404', component: PageNotFoundComponent},
    {path: '', redirectTo: 'flights', pathMatch: 'full'}
]

@Component({
    selector: '<route-request></route-request>',
    templateUrl:'/app/flights/flight-details/flight-details.component.html'
})
export class RouteComponent {

}
