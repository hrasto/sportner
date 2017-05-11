import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {

  constructor() {
    console.log('Hello UserData Provider');
  }
  users: any = [];

  
  load(){
    this.users = [
      {firstName: 'Andrada', lastName: 'Colceriu', email: 'andradaclr@yahoo.de', birthdate: '10.08.1996', height: '178', weight: '68' },
    ];
  }

  addItem(){

    // later

  }


}
