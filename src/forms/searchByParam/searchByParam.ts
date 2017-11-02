import { Component } from '@angular/core';
//import { HTTP } from '@ionic-native/http';
import {Http} from '@angular/http';
/*class Contry{
  name:string;
  code:string;
}/**/

@Component({
  selector: 'search-by-param-form',
  templateUrl: 'searchByParam.html'
})
export class SearchByParamForm {
  public allList = {
    genres: [],
    rejisser: [],
    actors: [],
    countries: [],
    yearLimits: [
      {name: "G 0+", code: "0"},
      {name: "PG 6+", code: "6"},
      {name: "PG-13 12+", code: "12"},
      {name: "R 16+", code: "16"},
      {name: "NX-17 18+", code: "18"},
    ]
  };
  constructor(private http: Http) {
    this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(
      data => {
        let obj = JSON.parse(data['_body']);
        let films = obj.result;

        console.log(films);

        for(var i = 0 ; i < films.length;i++){
          if(films[i].rejisser.replace(/<[^>]+>/g,'') != '')
            this.allList.rejisser.push({name:films[i].rejisser.replace(/<[^>]+>/g,''), id:films[i].rejisser.replace(/<[^>]+>/g,'')});

          let arr_countries_janre = films[i].countries.split('(');
          let country = arr_countries_janre[0].split(',',1)[0].trim();
          if(country != '' && country != null) {
            //console.log("|"+country+"|");
            let flag_country: boolean = true;
            for (let j = 0; j < this.allList.countries.length; j++) {
              if (this.allList.countries[j].name == country) {
                flag_country = false;
                break;
              }
            }
            if (flag_country)
              this.allList.countries.push({name: country, code: country});
          }

          let arr_janre = arr_countries_janre[1].replace(')','').split(',');
          for(let k = 0; k < arr_janre.length; k++) {

            var janre = arr_janre[k].trim();
            let flag_janre: boolean = true;
            for (let j = 0; j < this.allList.genres.length; j++) {
              if (this.allList.genres[j].name == janre) {
                flag_janre = false;
                break;
              }
            }
            if (flag_janre)
              this.allList.genres.push({name: janre, id: janre});
          }


          let arr_actors = films[i].actors.replace(/<[^>]+>/g,'').split(',');
          for(let k = 0; k < arr_actors.length; k++) {
            var actor = arr_actors[k].trim();
            let flag_actor: boolean = true;
            for (let j = 0; j < this.allList.actors.length; j++) {
              if (this.allList.actors[j].name == actor) {
                flag_actor = false;
                break;
              }
            }
            if (flag_actor)
              this.allList.actors.push({name: actor, id: actor});
          }


          //console.log(arr_janre);

        }



        console.log(obj);



      },
      err => {
        console.log(err);
      });
  }


  public formSearchByParam = {
    country:"",
    imdb:{ lower: 0, upper: 10 },
    actors:[],
    genres:[],
    datePremiere:"",
    rejisser:[],
    yearLimit:[]
  };
  SubmitForm(){


    this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(
      data => {
        let obj = JSON.parse(data['_body']);
        let films = obj.result;

        console.log(films);

        for(var i = 0 ; i < films.length;i++){
          if(films[i].rejisser.replace(/<[^>]+>/g,'') != '')
            this.allList.rejisser.push({name:films[i].rejisser.replace(/<[^>]+>/g,''), id:films[i].rejisser.replace(/<[^>]+>/g,'')});

          let arr_countries_janre = films[i].countries.split('(');
          let country = arr_countries_janre[0].split(',',1)[0].trim();

          let arr_janre = arr_countries_janre[1].replace(')','').split(',');

          let arr_actors = films[i].actors.replace(/<[^>]+>/g,'').split(',');


        }



        console.log(obj);



      },
      err => {
        console.log(err);
      });






    console.log(this.formSearchByParam);
  }

}
