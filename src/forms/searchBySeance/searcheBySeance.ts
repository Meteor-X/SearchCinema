import { Component } from '@angular/core';
import {Http} from "@angular/http";
class film{
  name: string;
  sessions: string;

}

class sessions{
  sessions: string;
}

@Component({
  selector: 'seance-form',
  templateUrl: 'searchBySeance.html'
})

export class SeanceForm{
  public allfilms: film[];
  public sessions: sessions[];
  public formSeance = {timeseance:"",
                       cityseance:"",
                        visionseance:"",
                        cinemaseance:""};
  SubmitForm(){
    this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(data =>{

      this.allfilms = [];
      console.log(data["_body"]);
      let film = JSON.parse(data["_body"]).result;
      for(var i=0; i<film.length;i++) {
        this.allfilms.push(film[i].name);

        let sessions = film[i].sessions;

          sessions.push(film[i].sessions.sessions);

        console.log(this.sessions);

      }






  });

    console.log(this.formSeance);

  }

  constructor(private http:Http){
}
}
//activeEvent vkino-link\
//k_bron
