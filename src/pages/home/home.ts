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
<<<<<<< HEAD

  public lwActivity: any;
  public lwDuration: any;
  public lwNote: any;
  public lwDate: any;
bla= 'hello';
  public totalTime: any;
  public totalWorkouts: any;

=======
  
>>>>>>> 6aadbb4aa068a4615703b48e393932903015f693
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
    console.log(this.workoutsService.workouts);
    this.generateRandomQuote();
    this.rhrService.setEntryToday();
<<<<<<< HEAD
    
    storage.ready().then(() => {

       // set a key/value
       storage.set('name', this.bla);

       // Or to get a key/value pair
       /*
       storage.get('age').then((val) => {
         console.log('Your age is', val);
       })
       */
     });
=======
>>>>>>> 6aadbb4aa068a4615703b48e393932903015f693
  }

  ionViewDidLoad(){

<<<<<<< HEAD
    this.lwActivity = this.workoutsService.workouts[0].activity;
    this.lwDuration = this.workoutsService.workouts[0].duration;
    this.lwDate = this.workoutsService.workouts[0].date;
    this.lwNote = this.workoutsService.workouts[0].note;
    this.totalTime = this.workoutsService.getTotalTime();
    this.totalWorkouts = this.workoutsService.getTotalWorkouts();

    
    if(this.userdata.profileSetup == false){
      let myModal = this.modalCtrl.create(Intro);
      myModal.present();
    }
    if(this.userdata.profileSetup == true && this.rhrService.entryToday == false){
=======
    if(this.rhrService.entryToday == false){
>>>>>>> 6aadbb4aa068a4615703b48e393932903015f693
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
}
