import {Component} from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: 'registration.html'
})


export class RegistrationForm{
  public formRegistration = {
    username:"", email:"", age:"", phone:"", password:""};
  SubmitForm(){
    console.log(this.formRegistration);
  }
}
