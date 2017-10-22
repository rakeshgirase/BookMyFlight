import {ProfileComponent} from "./profile.component";
import {LoginComponent} from "./login.component";

export const userRoutes = [
    {path: '', redirectTo: 'auth'},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]