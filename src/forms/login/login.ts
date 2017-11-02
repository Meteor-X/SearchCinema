import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SearchByParamPage} from "../../pages/searchByParam/searchByParam";

@Component({
  selector: 'login-form',
  templateUrl: 'login.html'
})
export class LoginForm {

  constructor(public navCtrl: NavController) {

  }



  public formLogin = {login:"", pass:""};
  SubmitForm(){
    this.navCtrl.push(SearchByParamPage);

    console.log(this.formLogin);

  }

}
