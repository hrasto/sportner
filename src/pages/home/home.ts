import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { RhrEntries } from '../../providers/rhr-entries';
import { RhrReminder } from '../rhr-reminder/rhr-reminder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public workoutsService: WorkoutEntries,
    public rhrService: RhrEntries  
  ) {

  }

  ionViewDidLoad(){
    this.workoutsService.load();

    this.rhrService.setEntryToday();

    if(this.rhrService.entryToday == false){
      let myModal = this.modalCtrl.create(RhrReminder);
      myModal.present();
    }
  }

}
