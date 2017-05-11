import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { RhrEntries } from '../../providers/rhr-entries';

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

  rhrEntry: any = 65;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public rhrEntries: RhrEntries
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RhrReminder');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveEnry(){
    console.log(this.rhrEntry);
    this.rhrEntries.addEntry("rasto", this.rhrEntry);
    console.log(this.rhrEntries.data);
    this.closeModal();
  }

}
