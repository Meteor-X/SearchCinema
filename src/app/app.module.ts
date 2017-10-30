import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { secondlist} from '../pages/secondlist/secondlist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginForm} from "../forms/login/login";
import {LoginPage} from "../pages/login/login";
import { SearchByParamPage} from "../pages/searchByParam/searchByParam";
import {SearchByParamForm} from "../forms/searchByParam/searchByParam";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    secondlist,
    LoginForm,
    LoginPage,
    SearchByParamPage,
    SearchByParamForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    secondlist,
    LoginPage,
    SearchByParamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
