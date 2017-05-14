import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { Activities } from '../../providers/activities';
import { RhrEntries } from '../../providers/rhr-entries';
import { RhrReminder } from '../rhr-reminder/rhr-reminder';
import { Storage } from '@ionic/storage';
import {UserData} from '../../providers/user-data';
import {Intro } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public quote: any = "";


  public lwActivity: any;
  public lwDuration: any;
  public lwNote: any;
  public lwDate: any;
  public totalTime: any;
  public totalWorkouts: any;


  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public workoutsService: WorkoutEntries,
    public rhrService: RhrEntries,  
    public activities: Activities,
    public storage: Storage,
    public userdata: UserData
  ) {
    rhrService.generateData();    
    this.workoutsService.load();
    //this.userdata.load();
    console.log(this.workoutsService.workouts);
    this.generateRandomQuote();
    this.rhrService.setEntryToday();

    
  }

  ionViewDidLoad(){


    // this.lwActivity = this.workoutsService.workouts[0].activity;
    // this.lwDuration = this.workoutsService.workouts[0].duration;
    // this.lwDate = this.workoutsService.workouts[0].date;
    // this.lwNote = this.workoutsService.workouts[0].note;
    // this.totalTime = this.workoutsService.getTotalTime();
    // this.totalWorkouts = this.workoutsService.getTotalWorkouts();

 
    if(this.userdata.profileSetup == false){
      let myModal = this.modalCtrl.create(Intro);
      myModal.present();
    }
    if(this.userdata.profileSetup == true && this.rhrService.entryToday == false){

        if(this.rhrService.entryToday == false){
          let myModal = this.modalCtrl.create(RhrReminder);
          myModal.present();
        }
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
}
