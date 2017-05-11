import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

export class User{
   // id: number;
   // password: string;
    email: string;
    firstName: string;
   // lastName: string;

constructor (email: string, firstName: string){
   // this.id = this.id++;
   // this.password = password;
    this.firstName = firstName;
   // this.lastName = lastName;
    this.email = email;
}
    

}
@Injectable()
export class AuthService {
    constructor() {
    console.log('Hello AuthService Provider');
  }
  currentUser: User;
  public login (credentials)
  {
        if(credentials.email === null || credentials.password === null)
            return Observable.throw("Please insert email / password");
        else{
        return Observable.create( observer => {
         let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
        
        })
            
        
        }
  }
  
  
   public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
