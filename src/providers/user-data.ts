import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
 
  profileSetup: any = false;
  users: any = [];
  constructor(public storage: Storage) {
    console.log('Hello UserData Provider');
  }
  
  
  load(){
    this.users = [
      {firstName: 'Andrada', lastName: 'Colceriu', gender: 'female', birthdate: '10.08.1996', height: '178', weight: '68', notes: 'blabla'}
    ];
  }

  setup(firstName, lastName, gender, birthdate, height, weight, notes){
    this.storage.ready().then(() => {
       this.storage.set('firstName', firstName);
     });
     this.storage.ready().then(() => {
       this.storage.set('lastName', lastName);
     });
     this.storage.ready().then(() => {
       this.storage.set('gender', gender);
     });
     this.storage.ready().then(() => {
       this.storage.set('birthdate', birthdate);
     });
     this.storage.ready().then(() => {
       this.storage.set('height', height);
     });
     this.storage.ready().then(() => {
       this.storage.set('weight', weight);
     });
     this.profileSetup = true;

  }
  getUser(){
    this.storage.ready().then(() => {
      this.storage.get("name").then((val)=>{
        console.log(val);
      });
    });
  }
  addUser(firstName, lastName, gender, birthdate, height, weight, notes){
    let newuser = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      birthdate: birthdate,
      height: height,
      weight: weight,
      notes: notes
    }
  this.users.unshift(newuser);
  this.profileSetup = true;
}

 


}
