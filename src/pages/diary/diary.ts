import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { RhrEntries } from '../../providers/rhr-entries';
import { Activities } from '../../providers/activities';
import { NewworkoutPage } from '../newworkout/newworkout';
import { NewrhrPage } from '../newrhr/newrhr';
import { WorkoutDetails } from '../workout-details/workout-details';

/**
 * Generated class for the Diary page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html',
})
export class Diary {
  newworkoutPage = NewworkoutPage;
  newrhrPage=NewrhrPage;
  rhrEntries:any=[];
  entries: any = 'workout';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public workoutsService: WorkoutEntries,
    public rhrService: RhrEntries,
    public activities: Activities
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Diary');
    this.setRhrEntries();
    //this.workoutsService.load();
    
  }

  setRhrEntries(){
    for(var i = 0; i < this.rhrService.data[0].entries.length; ++i){
      this.rhrEntries.push({
        value: this.rhrService.data[0].entries[i].value,
        year: (new Date(this.rhrService.data[0].entries[i].day * 1000)).getFullYear(),
        month: (new Date(this.rhrService.data[0].entries[i].day * 1000)).getMonth(),
        day: (new Date(this.rhrService.data[0].entries[i].day * 1000)).getDay()
      });
    }
  }
    
  showWorkout(id){
    this.navCtrl.push(WorkoutDetails, id);
  }

}
