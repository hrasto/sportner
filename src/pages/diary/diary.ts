import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutsService: WorkoutEntries) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Diary');
    this.workoutsService.load();
  }

}
