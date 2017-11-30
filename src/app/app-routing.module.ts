import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IonicModule} from "ionic-angular";

const routes: Routes=[
  {
    path:'', redirectTo:'login', pathMatch:'full'
  }

];
@NgModule({
  imports:[
    IonicModule.forRoot(routes),
  ],
  exports:[IonicModule]

})


export class AppRoutingModule{

}
