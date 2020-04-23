import { Injectable } from '@angular/core';
import { user_model } from './user_model';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user_arr:user_model[]=[
    new user_model("John123@gmail.com","John"),
    new user_model("Jack123@gmail.com","Jack"),
    new user_model("Jinal123@gmail.com","Jinal")
  ];
  getAllUsers(){
    const source= from(this.user_arr)
    // console.log(source)
    return source;
  }
  constructor() { }
}
