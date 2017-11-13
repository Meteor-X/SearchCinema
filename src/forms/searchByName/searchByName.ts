import { Component } from '@angular/core';
import {Http} from "@angular/http";


class film{
  name: string;
  image: string;
}

@Component({
  selector: 'name-form',
  templateUrl: 'searchByName.html',

})

export class SearchByNameForm{

  public allfilms: film[];
public formName = {name:""};
SubmitForm(){
  this.http.get("http://31.131.20.33/univ/searchcinema/1.php?url=https://kinoafisha.ua/ajax/kinoafisha_load").subscribe(data =>{
    console.log(data["_body"]);
    this.allfilms = [];
   let film = JSON.parse(data["_body"]).result;
   for(var i=0; i<film.length;i++){
     if(film[i].name.search(this.formName.name) != -1 ){
       this.allfilms.push({name: film[i].name, image: film[i].image});

     }
    // this.allfilms.push(film[i].name);
      // console.log(film[i].name);

   }
    console.log(this.allfilms);
  } );
  console.log(this.formName);
}

constructor(private http:Http){

}
}
