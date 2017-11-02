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
import {FlightResolver} from "./flights/flight.resolver";
import {QuestionComponent} from "./questions/question.component";

export const appRoutes: Routes = [
    {path: 'flights/new', component: CreateFlightComponent, canDeactivate: ['canDeactivateCreateFlight']},
    {path: 'flights', component: FlightsListComponent, resolve: {flights: FlightListResolver}},
    {path: 'flights/:id', component: FlightDetailsComponent, resolve: {flight: FlightResolver}},
    {path: 'flights/session/new', component: CreateSessionComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: '', redirectTo: 'question', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: 'wishes', component: BaseWishComponent},
    {path: 'question', component: QuestionComponent}
]

@Component({
    selector: '<route-request></route-request>',
    templateUrl: '/app/flights/flight-details/flight-details.component.html'
})
export class RouteComponent {

}
