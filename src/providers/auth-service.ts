import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

export class User{
name: string;
email: string;
username: string;

constructor (name: string, email: string, username: string){
    this.name = name;
    this.email = email;
    this.username = username;
}
    

}
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

}
