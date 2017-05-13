import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { WorkoutEntries } from '../../providers/workout-entries';
import { Activities } from '../../providers/activities';

/**
 * Generated class for the NewworkoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newworkout',
  templateUrl: 'newworkout.html',
})
export class NewworkoutPage {

  activity: any;
  date: any;
  duration: any;
  note: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public workouts: WorkoutEntries,
    public activities: Activities
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewworkoutPage');
    this.activities.load();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      subTitle: 'New workout is saved',
      buttons: ['OK']
    });
    alert.present();
  }

  saveWorkout(){
    var date;
    if(this.date == null)
      date = new Date();
    else
      date = new Date(this.date); // create date obj. from a string
    
    this.workouts.addItem(this.activity, this.note, this.duration, date);
    this.workouts.updateStorage();
    this.showAlert();
    this.closeModal();
  }

}
