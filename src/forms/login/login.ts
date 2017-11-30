import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {SearchByParamPage} from "../../pages/searchByParam/searchByParam";
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';


@Component({
  selector: 'login-form',
  templateUrl: 'login.html'
})
export class LoginForm {
  public statusLogin = null;

  constructor() {//public alertCtrl: AlertController
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);

      if (user) {
        console.log(true);

      } else {
        console.log(false);
      }
    });

  }



  public formLogin = {login:"", pass:""};
  SubmitForm(){
    //this.navCtrl.push(SearchByParamPage);
    console.log(this.formLogin);

    firebase.auth()
      .signInWithEmailAndPassword(this.formLogin.login, this.formLogin.pass)
      .then(function(data) {
        console.log(data.uid);

      })
      .catch(function(error) {
      // Handle Errors here.
        console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    //let statusLogin=this.checkForm();
   /* let statusLogin = this.checkFormLogin(this.formLogin.login);

    if(statusLogin == false){
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Будь ласка, вкажіть валідний логін!',
        buttons: ['OK']
      });
      alert.present();
    }

    let statusForm = statusLogin
*/



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
