import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IFlight} from "./shared/flight.module";

@Component({
    selector: 'flight-thumbnail',
    templateUrl: 'app/flights/flights-list.component.html'
})
export class FlightThumbnailComponent {
    @Input() flight: IFlight
    @Output() bookRequest =  new EventEmitter()

    book(){
        console.log('Request for booking!!', this.flight.name)
        this.bookRequest.emit(this.flight.name)
    }

    logSomething(){
        console.log('Log Something!!')
    }
}