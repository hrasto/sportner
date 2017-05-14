import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { Activities } from '../../providers/activities';

/**
 * Generated class for the WorkoutDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
})
export class WorkoutDetails {

  workout: any;
  date: any;
  activity: any;
  activity_name: any;
  activity_icon: any;
  note: any;
  duration: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workouts: WorkoutEntries,
    public activities: Activities
  ) { }

  ionViewDidLoad() {
    this.workout = this.workouts.getItem(this.navParams.data);
    var d = new Date(this.workout.date);
    this.date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    this.activity = this.workout.activity;
   
    this.activity_name = this.activities.getItem(this.activity).name;
    this.activity_icon = this.activities.getItem(this.activity).icon;
    this.note = this.workout.note;
    this.duration = this.workout.duration;
  }

  ionViewDidLeave() {
    this.workout = this.workouts.getItem(this.navParams.data);
    var d = new Date(this.workout.date);
    this.date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    this.activity = this.workout.activity;
    this.activity_name = this.activities.getItem(this.activity).name;
    this.activity_icon = this.activities.getItem(this.activity).icon;
    this.note = this.workout.note;
    this.duration = this.workout.duration;
  }

  saveWorkout(){
    this.workouts.editItem(this.workout.id, this.activity, this.note, this.duration, (new Date(this.date)));
    this.workouts.updateStorage();
    this.navCtrl.pop();
  }
}
