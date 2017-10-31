import { Component } from '@angular/core';

@Component({
  selector: 'seance-form',
  templateUrl: 'searchBySeance.html'
})

export class SeanceForm{
  public formSeance = {dataseance:"",
                       cityseance:"",
                        visionseance:"",
                        cinemaseance:""};
  SubmitForm(){
    console.log(this.formSeance);
  }
}
