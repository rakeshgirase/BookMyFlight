import {Routes} from "@angular/router";
import {Component} from "@angular/core";
import {PageNotFoundComponent} from "./errors/page-not-found.component";
import {
    FlightsListComponent,
    FlightDetailsComponent,
    CreateFlightComponent,
    FlightRouteActivator,
    FlightListResolver
} from './flights/index'
import{
    BaseWishComponent
} from './wishes/index'

import {CreateSessionComponent} from "./flights/flight-details/create-session.component";

export const appRoutes: Routes = [
    {path: 'flights/new', component: CreateFlightComponent, canDeactivate: ['canDeactivateCreateFlight']},
    {path: 'flights', component: FlightsListComponent},
    {path: 'flights/:id', component: FlightDetailsComponent, canActivate: [FlightRouteActivator]},
    {path: 'flights/session/new', component: CreateSessionComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: '', redirectTo: 'flights', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: 'wishes', component: BaseWishComponent}
]

@Component({
    selector: '<route-request></route-request>',
    templateUrl: '/app/flights/flight-details/flight-details.component.html'
})
export class RouteComponent {

}
