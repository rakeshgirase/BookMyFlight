import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FlightsAppComponent} from "./flights-app.component";
import {FlightThumbnailComponent} from "./flights/flight-thumbnail.component";
import {Toastr, TOASTR_TOKEN} from "./common/toastr.service";
import {Router, RouterModule, Routes} from "@angular/router";
import {appRoutes, RouteComponent} from "./routes";
import {PageNotFoundComponent} from "./errors/page-not-found.component";
import {
    CreateFlightComponent,
    FlightDetailsComponent,
    FlightListResolver,
    FlightResolver,
    FlightRouteActivator,
    FlightService,
    FlightsListComponent
} from "./flights/index";
import {QuestionComponent, QuestionService} from "./questions/index";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./flights/flight-details/create-session.component";
import {BaseWishComponent} from "./wishes/base-wish.component";
import {NavBarComponent} from "./nav/navbar.component";
import {AuthService} from "./user/auth.service";

declare let toastr: Toastr;

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes, {
        enableTracing: false,
        useHash: true
    })],
    declarations: [NavBarComponent, FlightsAppComponent, QuestionComponent, FlightsListComponent, FlightThumbnailComponent, FlightDetailsComponent, RouteComponent, CreateFlightComponent, PageNotFoundComponent, CreateSessionComponent, BaseWishComponent],
    providers: [FlightService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        FlightRouteActivator,
        FlightsListComponent,
        FlightListResolver,
        FlightResolver,
        QuestionService,
        AuthService,
        /*{
            provide: AuthService,
            //useClass: AuthService,
            useValue: AuthService,
            depends: HttpClientModule
        },*/
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