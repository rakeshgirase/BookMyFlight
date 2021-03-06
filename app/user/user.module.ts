import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GoogleAuthComponent} from "./google-auth.component";
import {LoginComponent} from "./login.component";
import {ProfileComponent} from "./profile.component";
import {userRoutes} from "./user.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [ProfileComponent, LoginComponent, GoogleAuthComponent],
    providers: [GoogleAuthComponent]
})
export class UserModule {

}