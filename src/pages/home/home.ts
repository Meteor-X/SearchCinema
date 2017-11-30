import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import * as firebase from "firebase";

@IonicPage({
  name: 'HomePage'
})


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage{

  constructor(public navCtrl: NavController) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);

      if (user) {
        console.log(true);
      } else {
        console.log(false);
        navCtrl.push('LoginPage');
      }
    });





  }
  goToLogin() {
    // go to the MyPage component

    this.navCtrl.push('LoginPage');
  }
  goToExit() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

}
