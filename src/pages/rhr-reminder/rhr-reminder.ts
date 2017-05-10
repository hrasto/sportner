import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the RhrReminder page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rhr-reminder',
  templateUrl: 'rhr-reminder.html',
})
export class RhrReminder {

  rhrEntry: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RhrReminder');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveEnry(){
    console.log(this.rhrEntry);
  }

}
