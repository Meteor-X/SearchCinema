import { Component } from '@angular/core';

@Component({
  selector: 'searchBySeance',
  templateUrl: 'searchBySeance.html'
})

export class SearchBySeanceForm{
  public formSeance = {dataseance:"",
                       cityseance:"",
                        visionseance:"",
                        cinemaseance:""};
  SubmitForm(){
    console.log(this.formSeance);
  }
}
