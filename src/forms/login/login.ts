import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {SearchByParamPage} from "../../pages/searchByParam/searchByParam";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'login-form',
  templateUrl: 'login.html'
})
export class LoginForm {
  public statusLogin = null;
  public navCtrl: NavController;

  constructor(public alertCtrl: AlertController) {


  }



  public formLogin = {login:"", pass:""};
  SubmitForm(){
    //this.navCtrl.push(SearchByParamPage);
    console.log(this.formLogin);

    //let statusLogin=this.checkForm();
    let statusLogin = this.checkFormLogin(this.formLogin.login);

    if(statusLogin == false){
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Будь ласка, вкажіть валідний логін!',
        buttons: ['OK']
      });
      alert.present();
    }

    let statusForm = statusLogin




  }
  private checkFormLogin = function(login){
    if(login=="")
      return false;
  }

  public checkForm = function(){
    if(this.formLogin.login=="" || this.formLogin.pass=="")
      return false;


  }
}
