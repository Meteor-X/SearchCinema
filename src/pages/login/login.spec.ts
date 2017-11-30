import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "./login";
import {PlatformMock, SplashScreenMock, StatusBarMock} from "../../../test-config/mocks-ionic";
import {LoginForm} from "../../forms/login/login";
import {By} from "@angular/platform-browser";


describe('LoginPage Component', () => {
  let fixture;
  let component;	beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage, LoginForm],
      imports: [
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    })
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });
  it('should be created', () => {
    expect(component instanceof LoginPage).toBe(true);
  });
 /* it('enter ',()=>{
    let input = fixture.debugElement
      .query(By.css('ion-input[name=login]'));
    let el = input.nativeElement;
    el.value = 'frt@gmail.com';
    el.dispatchEvent(new Event('input'));
    expect(component.formLogin.login).toBe('frt@gmail.com');
  });*/
 it('should conect loginpage from', ()=>{
   fixture.detectChanges();
   let de = fixture.debugElement.query(By.css('login-form'));
   const form = de.nativeElement;
   expect(form).toBeDefined();
 });
});
