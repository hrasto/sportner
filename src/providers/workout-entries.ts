import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorkoutEntries provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutEntries {

  workouts: any = [];

  constructor() {
    console.log('Hello WorkoutEntries Provider');
  }

  load(){
    this.workouts = [
      {date: '5.5.2017', activity: 'running', note: '', duration: ''},
      {date: '6.5.2017', activity: 'gym', note: '', duration: ''},
      {date: '6.5.2017', activity: 'running', note: '', duration: ''},
      {date: '9.5.2017', activity: 'cycling', note: '', duration: ''}
    ];
  }

  addItem(){

    // later

  }

}
