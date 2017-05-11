import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { Activities } from '../../providers/activities';
import { RhrEntries } from '../../providers/rhr-entries';
import { RhrReminder } from '../rhr-reminder/rhr-reminder';
import { WorkoutDetails } from '../workout-details/workout-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public quote: any = "";

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public workoutsService: WorkoutEntries,
    public rhrService: RhrEntries,  
    public activities: Activities  
  ) {
    rhrService.generateData();
  }

  ionViewDidLoad(){
    this.workoutsService.load();
    this.generateRandomQuote();
    this.rhrService.setEntryToday();

    if(this.rhrService.entryToday == false){
      let myModal = this.modalCtrl.create(RhrReminder);
      myModal.present();
    }
  }

  generateRandomQuote(){
    var quotes = [
      "Sweat is just fat crying.",
      "Fit is not a destination, it is a way of life.",
      "Wake up. Work out. Kick ass. Repeat.",
      "The hardest lift of all is lifting your butt off the couch.",
      "One of the greatest moments in life is realizing that two weeks ago, your body could not do what it just did.",
      "The best way to predict the future is to create it."
    ];

    var index = (new Date).getMilliseconds() % quotes.length;
    this.quote = quotes[index];
  }

  showWorkout(id){
    this.navCtrl.push(WorkoutDetails, id);
  }

}
