import { async, TestBed } from '@angular/core/testing';
import {IonicModule, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PlatformMock, SplashScreenMock, StatusBarMock} from "../../../test-config/mocks-ionic";
import {LoginForm} from "../../forms/login/login";
import {By} from "@angular/platform-browser";
import {firebaseConfig} from "../../app/app.module";
import * as firebase from "firebase";
import {LoginPage} from "../../pages/login/login";


describe('LoginForm Component', () => {
  let fixture;
  let component;
  firebase.initializeApp(firebaseConfig);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginForm],
      imports: [
        IonicModule.forRoot(LoginPage)

      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        {provide:NavController, useClass: NavController}

      ]
    })
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForm);
    component = fixture.componentInstance;
  });
  /*
  it('should be created', () => {
    fixture.detectChanges();

    expect(component instanceof LoginForm).toBe(true);
  });
  it('enter ',()=>{
    let input = fixture.debugElement
      .query(By.css('ion-input[name=login]'));
    let el = input.nativeElement;
    el.value = 'frt@gmail.com';
    el.dispatchEvent(new Event('input'));
    expect(component.formLogin.login).toBe('frt@gmail.com');
  });
  /**/
});
