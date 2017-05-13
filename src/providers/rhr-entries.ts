import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RhrEntries provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RhrEntries {

  entryToday: any = false;

  data: any = [];

  constructor() {
    console.log('Hello RhrEntries Provider');
  }

  generateData(){
    this.data = [
      {
        user:"rasto",
        entries:[
          {day: "1494633600", value: 60},
          {day: "1494623600", value: 62},
          {day: "1494613600", value: 62},
          {day: "1494603600", value: 63}
        ]        
      }
    ];
  }

  getFormatedRHREntries(){
    let rhr = [];
    for(var i = 0; i < this.data[0].entries.length; ++i){
      rhr.push({
        value: this.data[0].entries[i].value,
        year: (new Date(this.data[0].entries[i].day * 1000)).getFullYear(),
        month: (new Date(this.data[0].entries[i].day * 1000)).getMonth()+1, // indexing starts at 0
        day: (new Date(this.data[0].entries[i].day * 1000)).getDate()
      });
    }
    return rhr;
  }

  setEntryToday(){    
    if(this.data[0].entries[this.data[0].entries.length - 1].day == this.getElapsedDays())
      this.entryToday = true;
    else
      this.entryToday = false;
  }

  addEntry(user, value, date = null){
    if (date == null)
      date = new Date();

    var days = this.getElapsedDays(date.getTime());

    for(var i = 0; i < this.data.length; ++i){
      if(this.data[i].user == user){

        for(var j = 0; j < this.data[i].entries.length; ++j){
          if(this.data[i].entries[j].day == days){
            this.data[i].entries[j].value = value;
            return false;
          }
        }

        var entry = {"day": days,"value": value};
        this.data[i].entries.unshift(entry);
        return true; 
      }
    }
  }

  getElapsedDays(timestamp){
    var secs = Math.floor(timestamp / 1000);
    console.log(secs);
    var days = secs - (secs % (60*60*24));
    console.log(days);
    return days;
  }
}