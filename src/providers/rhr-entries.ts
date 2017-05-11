import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
          {day: "04.05.2017", value: "63"},
          {day: "05.05.2017", value: "62"},
          {day: "06.05.2017", value: "61"},
          {day: "07.05.2017", value: "61"},
          {day: "08.05.2017", value: "60"}
        ]        
      }
    ];
  }

  setEntryToday(){
    this.entryToday = false;
  }

  addEntry(user, value){
    for(var i = 0; i < this.data.length; ++i)
      if(this.data[i].user == user){
        var entry = {
          "day": Math.floor((new Date).getTime() / 1000),
          "value": value
        };
        this.data[i].entries.push();
      }
  }

}
