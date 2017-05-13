import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Activities provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Activities {

  data: any = [];

  constructor() {
    console.log('Hello Activities Provider');
  }

  load(){
    this.data = [
      {id:1, name:"Running", icon:"011-run.png"},
      {id:2, name:"Cycling", icon:"010-bicycle.png"},
      {id:3, name:"Mountain Biking", icon:"010-bicycle.png"},
      {id:4, name:"Walking", icon:"007-hiker.png"},
      {id:5, name:"Nordic Walking", icon:"007-hiker.png"},
      {id:6, name:"Nordic Skiing", icon:"005-skiing.png"},
      {id:7, name:"Skiing", icon:"005-skiing.png"},
      {id:8, name:"Swimming", icon:"009-swimming.png"},
      {id:9, name:"Gym", icon:"006-dumbbell.png"},
      {id:10, name:"Hiking", icon:"007-hiker.png"},
      {id:11, name:"Other", icon:"001-question.png"}
    ];
  }

  getItem(id){
    this.load();
    for(var i = 0; i < this.data.length; ++i)
      if(this.data[i].id == id)
        return this.data[i];
    return false;
  }

}
