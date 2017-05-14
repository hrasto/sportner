import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  nextId: any = 1;
  profileSetup: any = false;
  users: any = [];
  constructor(public storage: Storage, public alertCtrl: AlertController) {
    console.log('Hello UserData Provider');
  }
  load(){
    this.storage.ready().then(()=>{
      this.storage.get("user-data").then((val) =>{
        if(val == null)
          this.generateUser();
        else{
          console.log("loading user from storage");
          var data = JSON.parse(val);
          this.users = data.users;
          this.profileSetup = data.profileSetup;
          this.nextId = data.nextId;
        }
      });
    });
  }

  updateSt(){
    this.storage.ready().then(() => {
      console.log("updating storage");
      var data = {users: this.users, profileSetup: this.profileSetup,nextId: this.nextId};
      this.storage.set('user-data',JSON.stringify(data));
    });
  }
  
  generateUser(){
    this.users = [
      {id:1, firstName: 'Andrada', lastName: 'Colceriu', gender: 'female', birthdate: '10.08.1996', height: '178', weight: '68', notes: 'blabla'}
    ];
    this.profileSetup = false;
    this.nextId = 2;
  }

  getUser(id){
    for(var i = 0; i < this.users.length; ++i)
      if(this.users[i].id == id)
        return this.users[i];
    return false;
  }
  alertBirthday() {
      let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'Birthdate must be before todays date. Change it!',
        buttons: ['OK']
      });
      alert.present();
      
    }
  addUser(firstName, lastName, gender, birthdate, height, weight, notes){
    if(notes == null)
      notes = '';
    if(birthdate != null){
      var d = new Date();
      var today:any;
      today = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      var x = new Date(birthdate);
      var bday:any;
      bday= x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate();
      
      if(bday >= today )
        this.alertBirthday();
    }
    let newuser = {
      id: this.nextId,
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
  ++this.nextId;
}

  editUser(id,firstName, lastName, gender, birthdate, height, weight, notes){
    if(notes == null)
      notes = '';
    if(birthdate != null){
      var d = new Date();
      var today:any;
      today = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      var x = new Date(birthdate);
      var bday:any;
      bday= x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate();
      
      if(bday >= today )
        this.alertBirthday();
    }
    for(var i = 0; i < this.users.length; ++i){
      if(this.users[i].id == id){
        this.users[i].firstName = firstName;
        this.users[i].lastName = lastName;
        this.users[i].gender = gender;
        this.users[i].birthdate = birthdate;
        this.users[i].height = height;
        this.users[i].weight = weight;
        this.users[i].notes = notes;
        return true;
       }
    }
    return false;

  }
 /* setup(firstName, lastName, gender, birthdate, height, weight, notes){
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
     if(notes == null)
      notes = '';
    this.storage.ready().then(() => {
       this.storage.set('notes', notes);
     });
     this.profileSetup = true;

  }
  getUser(){
    this.storage.ready().then(() => {
      this.storage.get("firstName").then((val)=>{
        console.log(val);
      });
    });
  }

  */



 


}
