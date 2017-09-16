import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FlightsAppComponent} from "./flights-app.component";
import {FlightsListComponent} from "./flights/FlightsListComponent";
import {FlightThumbnailComponent} from "./flights/flight-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {FlightService} from "./flights/shared/flight.service";
import {ToastrService} from "./common/toastr.service";
import {FlightDetailsComponent} from "./flights/flight-details/flight-details.cmoponent";
import {Router, RouterModule, Routes} from "@angular/router";
import {appRoutes, RouteComponent} from "./routes";
import {CreateFlightComponent} from "./flights/create-flight.component";
import {PageNotFoundComponent} from "./errors/page-not-found.component";
import {FlightRouteActivator} from "./flights/flight-details/flight-routeactivator.service";
import {FlightListResolver} from "./flights/shared/flights-list.resolver";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true})],
    declarations: [NavBarComponent, FlightsAppComponent, FlightsListComponent, FlightThumbnailComponent, FlightDetailsComponent, RouteComponent, CreateFlightComponent, PageNotFoundComponent],
    providers: [FlightService,
        ToastrService,
        FlightRouteActivator,
        FlightsListComponent,
        FlightListResolver,
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

function checkDirtyState(component:CreateFlightComponent){
    if(component.isDirty){
        return window.confirm('You havent saved the flight data? Are you sure you want to navigate away from this page?');
    }
    return true;
}