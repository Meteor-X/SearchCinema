
import * as firebase from "firebase";

export class User{
  constructor(){

  }

  public getUser()
  {
    return firebase.auth().currentUser;

  }

}
