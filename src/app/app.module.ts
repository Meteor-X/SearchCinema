import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { secondlist} from '../pages/secondlist/secondlist';
import {Test} from '../pages/Test/test';

import { FilmName} from '../pages/FilmName/name';
import {SearchByNameForm} from "../forms/searchByName/searchByName";

import {SeancePage} from "../pages/searchseance/searchseance";
import{SeanceForm} from "../forms/searchBySeance/searcheBySeance";

import{RegistrationPage} from "../pages/registration/registration";
import{RegistrationForm} from "../forms/registration/registration";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    secondlist,
    FilmName,
    Test,
    SearchByNameForm,
    SeanceForm,
    SeancePage,
    RegistrationPage,
    RegistrationForm
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    secondlist,
    FilmName,
    Test,
    SeancePage,
    RegistrationPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
