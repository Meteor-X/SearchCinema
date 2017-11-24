import { Component } from '@angular/core';
//import { HTTP } from '@ionic-native/http';
import {Http} from '@angular/http';
/*class Contry{
  name:string;
  code:string;
}/**/
class List {
  genres: Genres[];
  rejisser: Rejisser[];
  actors: Actors[];
  countries: Countries[];
  yearLimits: YearLimits[];
}
class Genres{
  name: string;
  id: string;
}
class Rejisser{
  name: string;
  id: string;
}
class Actors{
  name: string;
  id: string;
}
class Countries{
  name: string;
  code: string;
}
class YearLimits{
  name: string;
  code: string;
}


@Component({
  selector: 'search-by-param-form',
  templateUrl: 'searchByParam.html'
})
export class SearchByParamForm {
  public allList: List;
     /* {name: "G 0+", code: "0"},
      {name: "PG 6+", code: "6"},
      {name: "PG-13 12+", code: "12"},
      {name: "R 16+", code: "16"},
      {name: "NX-17 18+", code: "18"},*/


  constructor(private http: Http) {
    this.allList.yearLimits = [{name: "G 0+", code: "0"},
      {name: "PG 6+", code: "6"},
      {name: "PG-13 12+", code: "12"},
      {name: "R 16+", code: "16"},
      {name: "NX-17 18+", code: "18"}];

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
  public filmForPrint=[];
  SubmitForm(){

    this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(
      data => {
        this.filmForPrint = [];
        let obj = JSON.parse(data['_body']);
        let films = obj.result;

        console.log(films);

        for(var i = 0 ; i < films.length;i++){
          let printThis:boolean = false;




          if(this.formSearchByParam.rejisser.length!=0){
            printThis = false;
            for (let k = 0; k < this.formSearchByParam.rejisser.length; k++){
              if(films[i].rejisser.replace(/<[^>]+>/g,'') .search(this.formSearchByParam.rejisser[k]) != -1)
                printThis = true;
            }
            if(printThis == false)
              continue;
          }

          if(this.formSearchByParam.datePremiere!=""){
            printThis = false;
            let dateStart = new Date(this.formSearchByParam.datePremiere);
            let dateFilm = new Date(films[i].premier_ua);
            if(dateFilm.toString() == "Invalid Date")
              continue;
            if(dateStart<=dateFilm) {
              printThis = true;
            }
          }




          let arr_countries_janre = films[i].countries.split('(');

          let country = arr_countries_janre[0].split(',',1)[0].trim();
          if(this.formSearchByParam.country == country)
            printThis = true;

          if(this.formSearchByParam.country!= "" && !printThis)
            continue;

          if(this.formSearchByParam.genres.length!=0){
            printThis = false;
            for (let k = 0; k < this.formSearchByParam.genres.length; k++){
              if(arr_countries_janre[1].search(this.formSearchByParam.genres[k]) != -1)
                printThis = true;
            }
            if(printThis == false)
              continue;
          }

          if(this.formSearchByParam.actors.length!=0){
            printThis = false;
            for (let k = 0; k < this.formSearchByParam.actors.length; k++){
              if(films[i].actors.replace(/<[^>]+>/g,'').search(this.formSearchByParam.actors[k]) != -1)
                printThis = true;
            }
            if(printThis == false)
              continue;
          }


          let film_age_limit = parseInt(films[i].age_limit);
          if(this.formSearchByParam.yearLimit.length!=0){
            printThis = false;
            for (let k = 0; k < this.formSearchByParam.yearLimit.length; k++){
              if(film_age_limit == this.formSearchByParam.yearLimit[k])
                printThis = true;
            }
            if(printThis == false)
              continue;
          }




          if(printThis)






    console.log(this.formSearchByParam);
  }

}
