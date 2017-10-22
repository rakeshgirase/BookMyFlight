import {Injectable} from "@angular/core";
import {IUser} from "./user";

Injectable()
export class AuthService{

    currentUser:IUser;

    loginUser(userName:string, password:string){
        this.currentUser = {
            id:1,
            userName:userName,
            firstName:'Monica',
            lastName:'Girase',
            //picUrl: '/app/assets/images/angularconnect-shield.png'
            picUrl: 'https://lh4.googleusercontent.com/-_t-6M1IVX0o/AAAAAAAAAAI/AAAAAAAA2X0/6IlQ7PVKY1U/s96-c/photo.jpg'
        }
    }

    isAuthenticated():boolean{
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    setCurrentUser(currentUser: IUser){
        this.currentUser = currentUser
    }
}