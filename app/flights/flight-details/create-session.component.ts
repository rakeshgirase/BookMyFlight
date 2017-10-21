import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    templateUrl: "app/flights/flight-details/create-session.component.html"
})
export class CreateSessionComponent implements OnInit {
    private name: FormControl;
    private pilot: FormControl;
    private duration: FormControl;
    private level: FormControl;
    private abstract: FormControl;
    private newSessionForm: FormGroup;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.pilot = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);
        this.newSessionForm = new FormGroup({
            name: this.name,
            pilot: this.pilot,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract

        });
    }

    saveSession(formValues){
        console.log(formValues)
    }
}