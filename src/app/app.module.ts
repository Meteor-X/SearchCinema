import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {DeepLinkConfig, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';



import { MyApp } from './app.component';
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

import { SearchByParamPage} from "../pages/searchByParam/searchByParam";
import {SearchByParamForm} from "../forms/searchByParam/searchByParam";
import {LoginModule} from "../pages/login/login.module";

import * as firebase from "firebase";
import {HomeModule} from "../pages/home/home.module";

export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: LoginModule, name: "login-page", segment: ""},
    { component: HomeModule, name: "home", segment: "" }
  ]
};
export const firebaseConfig = {
  "apiKey": "AIzaSyBNlSXO3aXIYaEt_HTbVxHt06LQNz2mv9U",
  "authDomain": "search-cinema.firebaseapp.com"

};

@NgModule({  declarations: [
  MyApp,
  ListPage,
  secondlist,

  FilmName,
  Test,
  SearchByNameForm,
  SeanceForm,
  SeancePage,
  RegistrationPage,
  RegistrationForm,
  SearchByParamPage,
  SearchByParamForm,
],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, deepLinkConfig),
    LoginModule,
    HomeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    secondlist,
    FilmName,
    Test,
    SeancePage,
    RegistrationPage,
    SearchByParamPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {
  constructor (){
    firebase.initializeApp(firebaseConfig);
  }
}
