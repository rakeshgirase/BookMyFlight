import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'flight-thumbnail',
    templateUrl: 'app/flights/flights-list.component.html'
})
export class FlightThumbnailComponent {
    @Input() flight: any
    @Output() bookRequest =  new EventEmitter()

    book(){
        console.log('Request for booking!!', this.flight.name)
        this.bookRequest.emit(this.flight.name)
    }

    logSomething(){
        console.log('Log Something!!')
    }
}