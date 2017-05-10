import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public workoutsService: WorkoutEntries) {

  }

  ionViewDidLoad(){
    this.workoutsService.load();
  }

}
