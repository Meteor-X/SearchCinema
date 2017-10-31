import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {SeancePage} from '../pages/searchseance/searchseance';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { secondlist} from '../pages/secondlist/secondlist';
import { FilmName} from '../pages/FilmName/name';
import{Test} from '../pages/Test/test';
import{RegistrationPage} from "../pages/registration/registration";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title:'Home' , component: HomePage },
      { title: 'Пошук сеансів ', component: ListPage },
      { title: 'Пошук фільму за параметрами', component: secondlist},
      { title: 'Пошук конткретного фільму', component:FilmName},
      {title: 'Test', component: Test},
      {title: 'Пошук фільму за сеансом', component: SeancePage},
      {title: 'Реєстрація', component: RegistrationPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
