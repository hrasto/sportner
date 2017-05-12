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

  date: any;
  activity: any;
  icon: any;
  note: any;
  duration: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workouts: WorkoutEntries,
    public activities: Activities
  ) { }

  ionViewDidLoad() {
    let workout = this.workouts.getItem(this.navParams.data);
    this.date = workout.date;
    this.activity = this.activities.getItem(workout.id).name;
    this.icon = this.activities.getItem(workout.id).icon;
    this.note = workout.note;
    this.duration = workout.duration;
  }

}
