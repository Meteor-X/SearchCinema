import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import {LoginPage} from "./login";
import {LoginForm} from "../../forms/login/login";


@NgModule({
  declarations: [
    LoginPage,
    LoginForm
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),

  ],
  entryComponents: [
    LoginPage
  ]
})
export class LoginModule { }
