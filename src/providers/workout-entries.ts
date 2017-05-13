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

  nextId: any = 1;

  constructor() {
    console.log('Hello WorkoutEntries Provider');
  }

  load(){
    this.nextId = 11;
    this.workouts = [
      {id:10, date: '9.5.2017', activity: 10, note: 'Bla bla bla', duration: 30},
      {id:9, date: '8.5.2017', activity: 9, note: 'Bla bla bla', duration: 50},
      {id:8, date: '7.5.2017', activity: 8, note: 'Bla bla bla', duration: 50},
      {id:7, date: '6.5.2017', activity: 7, note: 'Bla bla bla', duration: 10},
      {id:6, date: '5.5.2017', activity: 6, note: 'Bla bla bla', duration: 10},
      {id:5, date: '4.5.2017', activity: 5, note: 'Bla bla bla', duration: 10},
      {id:4, date: '3.5.2017', activity: 4, note: 'Bla bla bla', duration: 40},
      {id:3, date: '3.5.2017', activity: 3, note: 'Bla bla bla', duration: 10},
      {id:2, date: '2.5.2017', activity: 2, note: 'Bla bla bla', duration: 10},
      {id:1, date: '1.5.2017', activity: 1, note: 'Morning run', duration: 10}
    ];
  }

  getItem(id){
    for(var i = 0; i < this.workouts.length; ++i)
      if(this.workouts[i].id == id)
        return this.workouts[i];
    return false;
  }

  addItem(activity, note, duration){
    let today = new Date();
    let workout = {
      id: this.nextId,
      date: today.getDay()+"."+today.getMonth()+"."+today.getFullYear(),
      activity: activity, 
      note: note,
      duration: duration
    };
    this.workouts.unshift(workout);
    ++this.nextId;
  }

  getTotalTime(){
    var time = 0;
    for(var i = 0; i < this.workouts.length; ++i){
      time += this.workouts[i].duration;
    }
    return time;
  }

  getTotalWorkouts() {
    return this.workouts.length;
  }
}
