import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: 'login.html'
})
export class LoginForm {
  public formLogin = {login:"", pass:""};
  SubmitForm(){
    console.log(this.formLogin);
  }

}
