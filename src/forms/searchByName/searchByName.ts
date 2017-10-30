import { Component } from '@angular/core';

@Component({
  selector: 'name-form',
  templateUrl: 'searchByName.html'
})

export class SearchByNameForm{
public formName = {name:""};
SubmitForm(){
  console.log(this.formName);
}
}
