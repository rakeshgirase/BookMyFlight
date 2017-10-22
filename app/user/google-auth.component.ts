import {AfterViewInit, Component, OnInit} from "@angular/core";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]
})
export class GoogleAuthComponent implements OnInit{
    ngOnInit(): void {
        gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: '274248048538-68s2da9kub9t30p6s7r2ph560slovbbh.apps.googleusercontent.com',
                scope: this.scope
            });
            //this.attachSignin(document.getElementById('googleBtn2'));
        });

    }
    auth2: any;
    private id: string = 'google-signin2';
    private scope: string = 'profile email';
    private _width: any = 250;
    private _height: any = 50;
    private _longTitle: any = 'Hi';
    private theme: any = 'None';

    public googleInit() {
        gapi.signin2.render(
            this.id, {
                scope: this.scope,
                width: this._width,
                height: this._height,
                longtitle: this._longTitle,
                theme: this.theme,
                onsuccess: (googleUser: gapi.auth2.GoogleUser) => this.handleSuccess(googleUser),
                onfailure: () => this.handleFailure()
            });
    }

    public handleSuccess(googleUser){
        alert('Got GoogleUser Auth');
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    }

    public handleFailure(){
        console.log("Failed Authentication")
    }

    /*public attachSignin(element) {
        gapi.signin2.render()
        auth2.attachClickHandler(element, {},
            (googleUser) => {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                //YOUR CODE HERE
            }, (error) => {
                alert(JSON.stringify(error, undefined, 2));
            });
    }*/
}