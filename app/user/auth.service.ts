import {Injectable, Inject} from "@angular/core";
import {IUser} from "./user";
import {HttpClient} from "@angular/common/http"
import {Response, Headers, RequestOptions} from "@angular/http"

Injectable()
export class AuthService{

    currentUser:IUser;

    constructor(@Inject private http:HttpClient){
        //setTimeout(() => this.http = injector.get(HttpClient));
    }

    //private http:HttpClient;

    loginUser(userName:string, password:string){
        let request = {username: userName, password: password}
        console.info('Login Request' + request)
        return this.http.post<any>("http://localhost:8080/login", {username: userName, password: password}).subscribe((response)=>{
            console.info('Login Response' + response)
        })
        /*this.currentUser = {
            id:1,
            userName:userName,
            firstName:'Monica',
            lastName:'Girase',
            //picUrl: '/app/assets/images/angularconnect-shield.png'
            picUrl: 'https://lh4.googleusercontent.com/-_t-6M1IVX0o/AAAAAAAAAAI/AAAAAAAA2X0/6IlQ7PVKY1U/s96-c/photo.jpg'
        }*/
    }

    isAuthenticated():boolean{
        return !!this.currentUser;
        //return false;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    setCurrentUser(currentUser: IUser){
        this.currentUser = currentUser
    }
}