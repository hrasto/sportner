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

  constructor() {
    console.log('Hello RhrEntries Provider');
  }

  setEntryToday(){
    this.entryToday = false;
  }

}
