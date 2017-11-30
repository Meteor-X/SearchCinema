
import { Component } from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";
import * as firebase from "firebase";

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(public navCtrl: NavController) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);

      if (user) {
        console.log(true);
        //this.navCtrl.push('HomePage');
      //  if(navCtrl.length() >= 1)
        //  navCtrl.popAll();
        navCtrl.setRoot('HomePage');
        //navCtrl.goToRoot('');

      } else {
        console.log(false);


      }
    });

  }
}
