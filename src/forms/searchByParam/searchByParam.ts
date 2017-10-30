import { Component } from '@angular/core';

@Component({
  selector: 'search-by-param-form',
  templateUrl: 'searchByParam.html'
})
export class SearchByParamForm {
  public formSearchByParam = {country:"", actors:"", imdb_from:"", imdb_to:"", genre:"", datePremiere:"",director:""};
  SubmitForm(){
    console.log(this.formSearchByParam);
  }

}
