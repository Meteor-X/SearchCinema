import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { secondlist} from '../pages/secondlist/secondlist';
import { FilmName} from '../pages/FilmName/name';
import {Test} from '../pages/Test/test';
import {SearchByNameForm} from "../forms/searchByName/searchByName";
import {SearchSeance} from "../pages/searchseance/searchseance";
import{SearchBySeanceForm} from "../forms/searchBySeance/searcheBySeance";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    secondlist,
    FilmName,
    Test,
    SearchByNameForm,
    SearchBySeanceForm,
    SearchSeance
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
    FilmName,
    Test,
    SearchSeance
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
