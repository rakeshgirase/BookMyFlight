import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FlightsAppComponent} from "./flights-app.component";
import {FlightThumbnailComponent} from "./flights/flight-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {ToastrService} from "./common/toastr.service";
import {Router, RouterModule, Routes} from "@angular/router";
import {appRoutes, RouteComponent} from "./routes";
import {PageNotFoundComponent} from "./errors/page-not-found.component";
import{
    FlightsListComponent,
    FlightService,
    CreateFlightComponent,
    FlightListResolver,
    FlightDetailsComponent,
    FlightRouteActivator,
} from './flights/index';
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes, {
        enableTracing: false,
        useHash: true
    })],
    declarations: [NavBarComponent, FlightsAppComponent, FlightsListComponent, FlightThumbnailComponent, FlightDetailsComponent, RouteComponent, CreateFlightComponent, PageNotFoundComponent],
    providers: [FlightService,
        ToastrService,
        FlightRouteActivator,
        FlightsListComponent,
        FlightListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateFlight',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [FlightsAppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}

function checkDirtyState(component: CreateFlightComponent) {
    if (component.isDirty) {
        return window.confirm('You havent saved the flight data? Are you sure you want to navigate away from this page?');
    }
    return true;
}