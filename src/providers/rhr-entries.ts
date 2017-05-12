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
          {day: "1494518", value: 63},
          {day: "1494519", value: 62},
          {day: "1494520", value: 62},
          {day: "1494521", value: 60}
        ]        
      }
    ];
  }

  setEntryToday(){    
    if(this.data[0].entries[this.data[0].entries.length - 1].day == this.getElapsedDays())
      this.entryToday = true;
    else
      this.entryToday = false;
  }

  addEntry(user, value){
    for(var i = 0; i < this.data.length; ++i)
      if(this.data[i].user == user){
        console.log('adding rhr entry');
        var entry = {
          "day": this.getElapsedDays(),
          "value": value
        };
        this.data[i].entries.push(entry);
      }
  }

  getElapsedDays(){
    return Math.floor((new Date).getTime() / 1000000);
  }

  

}
