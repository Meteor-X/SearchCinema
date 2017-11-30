import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthComponent} from "./auth.component";
import {LoginPage} from "../../pages/login/login";
import {IonicPageModule} from "ionic-angular";

const routes: Routes=[
  {path:'', component:AuthComponent, children:[
    {path:'login', component:LoginPage},
    {path:'registration', component:RegistrationComponent},
  ]},


];
@NgModule({
  imports:[
    IonicPageModule.forChild(routes),
  ],
  exports:[IonicPageModule]

})


export class AuthRoutingModule{

}
