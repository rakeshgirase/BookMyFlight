import {Component, OnInit, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {GoogleAuthComponent} from "./google-auth.component";
import {IUser} from "./user";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]
})
export class LoginComponent implements OnInit{
    private id: string = 'google-signin2';
    private _width: any = 250;
    private _height: any = 50;
    private _longTitle: any = 'Hi';
    private theme: any = 'None';
    private scope: string = 'profile email';
    ngOnInit(): void {
        gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: '274248048538-68s2da9kub9t30p6s7r2ph560slovbbh.apps.googleusercontent.com',
                scope: this.scope
            });
        });
    }

    constructor(@Inject(AuthService) private authService:AuthService, private router:Router, private googleAuth:GoogleAuthComponent){

    }
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['flights'])
    }

    cancel(){
        this.router.navigate(['flights'])
    }

    googleInit(){
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
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        var currentUser:IUser;
        currentUser = {
            id:1,
            userName:profile.getEmail(),
            firstName:profile.getGivenName(),
            lastName:profile.getFamilyName(),
            picUrl: profile.getImageUrl()
        }
        this.authService.setCurrentUser(currentUser);
        this.router.navigate(['flights'])
    }

    public handleFailure(){
        console.log("Failed Authentication")
        this.authService.currentUser = null;
    }
}