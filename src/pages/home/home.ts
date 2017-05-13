import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { Activities } from '../../providers/activities';
import { RhrEntries } from '../../providers/rhr-entries';
import { RhrReminder } from '../rhr-reminder/rhr-reminder';
import { WorkoutDetails } from '../workout-details/workout-details';
import { Storage } from '@ionic/storage';

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
    public storage: Storage
  ) {
    rhrService.generateData();    
    this.workoutsService.load();
    this.generateRandomQuote();
    this.rhrService.setEntryToday();

    storage.ready().then(() => {

       // set a key/value
       storage.set('name', 'Max');

       // Or to get a key/value pair
       /*
       storage.get('age').then((val) => {
         console.log('Your age is', val);
       })
       */
     });
  }

  ionViewDidLoad(){

    this.lwActivity = this.workoutsService.workouts[0].activity;
    this.lwDuration = this.workoutsService.workouts[0].duration;
    this.lwDate = this.workoutsService.workouts[0].date;
    this.lwNote = this.workoutsService.workouts[0].note;
    this.totalTime = this.workoutsService.getTotalTime();
    this.totalWorkouts = this.workoutsService.getTotalWorkouts();

    if(this.rhrService.entryToday == false){
      let myModal = this.modalCtrl.create(RhrReminder);
      myModal.present();
    }

    this.storage.ready().then(() => {
      this.storage.get("name").then((val)=>{
        console.log(val);
      });
    });
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
