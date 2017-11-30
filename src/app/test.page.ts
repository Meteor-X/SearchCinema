import {LoginPage} from "../pages/login/login";
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
  entryComponents: [
    LoginPage
  ]
})
export class TestPage {}
