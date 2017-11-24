import { Component } from '@angular/core';
import {Http} from "@angular/http";
import * as moment from 'moment';

class Film{
  name: string;
  sessions: Sessions[];
  cityceance: string;
}

class Sessions{
  sessions: string;
  name: string;
  url: string;
  address: string;


};

@Component({
  selector: 'seance-form',
  templateUrl: 'searchBySeance.html'
})

export class SeanceForm {
  public FilmForPrint: Film[];
  public sessionsG: Sessions[];


  public formSeance = {
    timeseance: "",
    cityseance: " ",
    visionseance: "",
    cinemaseance: ""
  };


  SubmitForm() {
    this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(data => {
      //get data from user in input
      let specificFilm = moment(this.formSeance.timeseance, "HH.mm.ss");
      /*.split(':');
            let dateSpecificFilm = new Date();
            dateSpecificFilm.setMinutes(parseInt(specificFilm[1]));

      */
      //get data from api
      {
        this.FilmForPrint = [];

        // console.log(data["_body"]);
        let film = JSON.parse(data["_body"]).result;


        let exist = " ";
        let date = new Date();
        for (var i = 0; i < film.length; i++) {
          let flag: boolean = false;

          if (this.formSeance.timeseance != "") {
            flag = false;

            let sessions_l = film[i].sessions;
            for (var j = 0; j < sessions_l.length; j++) {
              let kname = sessions_l[j].k_name;
              let date1 = sessions_l[j].sessions.replace(/<[^>]+>/g, '').toString();
              let date = moment(date1, "HH.mm.ss");

              if (((date.diff(specificFilm)) <= 3600000) && (date.diff(specificFilm)) >= 0) {
                /*  console.log(date);
                  console.log(film[i].name);
                  console.log(film[i].countries);
                  console.log("Кінотеатр: " + kname);
                    */

                flag = true;
              }
            }
            if (flag == false) {
              continue;
            }

            if (this.formSeance.cityseance != "") {
              flag = false;
              if(this.formSeance.cityseance == sessions_l[j].address){
                flag = true;
              }
            }
            if(flag== false){
              continue;
            }

            if (flag)
              this.FilmForPrint.push({sessions: this.sessionsG, name: film[i].name, cityceance: sessions_l[j].address });

            /*  let dSeparate = d.split(':');

              let date = new Date();
              date.setHours(parseInt(dSeparate[0]));
              date.setMinutes(parseInt(dSeparate[1]));



              // console.log(data);


    /////////////////////////
              if ((date = dateSpecificFilm) && (exist != film[i].name)) {
                exist = film[i].name;
                console.log(date + film[i].name);

                // }else{
                // if((dateHours = dateSpecificFilmHours + 1)| (dateHours = dateSpecificFilmHours - 1)){
                //console.log("Знайдено такі сеанси на найближчий час:" + date + film[i].name);
                //}
              }*/

          }
          console.log(this.FilmForPrint);
        }

      }


    });
  }
   public sessionC = [];
  constructor(private http: Http) {
    this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(
      data => {
        let films = JSON.parse(data["_body"]).result;
        for(let i = 0; i<films.length; i++) {
          let sessionL = films[i].sessions;
          for (let j = 0; j < sessionL.length; j++) {
            this.sessionC.push(sessionL[j]);
          }
        }

      }, error2 => {
        console.log("err");
      });

  }
}



