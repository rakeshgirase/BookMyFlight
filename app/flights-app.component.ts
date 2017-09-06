import {Component} from "@angular/core";

@Component({
    selector: 'flights-app',
    template: `
        <nav-bar></nav-bar>
        <h1>Angular Router</h1>
        <nav>
          <a routerLink="/flights" routerLinkActive="active">Flights</a>
          <a routerLink="/flights/3" routerLinkActive="active">Flight Details</a>
        </nav>
        <router-outlet></router-outlet>
        `
})
export class FlightsAppComponent {
}