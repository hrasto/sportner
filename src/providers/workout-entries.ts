import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the WorkoutEntries provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutEntries {

  workouts: any = [];

  nextId: any = 1;

  constructor(public st: Storage) {
    console.log('Hello WorkoutEntries Provider');
  }

  load(){
   this.st.ready().then(()=>{
      this.st.get("workout-entries").then((val)=>{
        if(val == null)
          this.generateWorkouts();
        else{
          console.log("loading data from storage");
          var data = JSON.parse(val);
          this.workouts = data.workouts;
          this.nextId = data.nextId;
        }
      });
    });
  }

  updateStorage(){
    this.st.ready().then(() => {
      console.log("updating storage");
      var data = {workouts: this.workouts, nextId: this.nextId};
      this.st.set('workout-entries', JSON.stringify(data));
    });
  }

  generateWorkouts(){
    console.log("generating workouts");
    this.workouts = [
      {id:10, date: (new Date).getTime(), activity: 10, note: 'Bla bla bla', duration: 30},
      {id:9, date: (new Date).getTime(), activity: 9, note: 'Bla bla bla', duration: 50},
      {id:8, date: (new Date).getTime(), activity: 8, note: 'Bla bla bla', duration: 50},
      {id:7, date: (new Date).getTime(), activity: 7, note: 'Bla bla bla', duration: 10},
      {id:6, date: (new Date).getTime(), activity: 6, note: 'Bla bla bla', duration: 10},
      {id:5, date: (new Date).getTime(), activity: 5, note: 'Bla bla bla', duration: 10},
      {id:4, date: (new Date).getTime(), activity: 4, note: 'Bla bla bla', duration: 40},
      {id:3, date: (new Date).getTime(), activity: 3, note: 'Bla bla bla', duration: 10},
      {id:2, date: (new Date).getTime(), activity: 2, note: 'Bla bla bla', duration: 10},
      {id:1, date: (new Date).getTime(), activity: 1, note: 'Morning run', duration: 10}
    ];    
    this.nextId = 11;
  }

  getItem(id){
    for(var i = 0; i < this.workouts.length; ++i)
      if(this.workouts[i].id == id)
        return this.workouts[i];
    return false;
  }

  addItem(activity, note, duration, date){
    if(activity == null)
      activity = 11; // other activity
    if(duration == null)
      duration = 0;
    let workout = {
      id: this.nextId,
      date: date.getTime(),
      activity: activity, 
      note: note,
      duration: duration
    };
    this.workouts.unshift(workout);
    ++this.nextId;
  }

  editItem(id, activity, note, duration, date){
    if(activity == null)
      activity = 11; // other activity
    if(duration == null)
      duration = 0;
    
    for(var i = 0; i < this.workouts.length; ++i){
      if(this.workouts[i].id == id){
        this.workouts[i].activity = activity;
        this.workouts[i].note = note;
        this.workouts[i].duration = duration;
        this.workouts[i].date = date.getTime();
        return true;
      }
    }
    return false;
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

  getLwActivity(){
    return this.workouts[0] != null ? this.workouts[0].activity : 11;
  }

  getLwDuration(){
    return this.workouts[0] != null ? this.workouts[0].duration : 0;
  }

  getLwDate(){
    if(this.workouts[0] != null){
      var date = new Date(this.workouts[0].date);
      return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    }else{
      return 'dd.mm.yyy';
    }
  }

  getLwNote(){
    return this.workouts[0] != null ?  this.workouts[0].note : '';
  }

  getFormatedWorkouts(){
    let workouts = [];
    for (var i = 0; i < this.workouts.length; ++i){
      var d = new Date(this.workouts[i].date);
      var formated_date = d.getDate() + "."+(d.getMonth()+1)+"."+d.getFullYear();
      workouts.push({
        id: this.workouts[i].id,
        date: formated_date,
        activity: this.workouts[i].activity,
        note: this.workouts[i].note,
        duration: this.workouts[i].id
      });
    }
    return workouts;
  }
}
