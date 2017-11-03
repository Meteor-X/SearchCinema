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

import {LoginForm} from "../forms/login/login";
import {LoginPage} from "../pages/login/login";
import { SearchByParamPage} from "../pages/searchByParam/searchByParam";
import {SearchByParamForm} from "../forms/searchByParam/searchByParam";
//import { HTTP } from '@ionic-native/http';


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
    RegistrationForm,

    LoginForm,
    LoginPage,
    SearchByParamPage,
    SearchByParamForm,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
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
    RegistrationPage,
    LoginPage,
    SearchByParamPage

  ],
  providers: [

    StatusBar,
    SplashScreen,
 //   HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
