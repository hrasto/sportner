import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RhrEntries } from '../../providers/rhr-entries';
import { ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { Diary } from '../diary/diary';

/**
 * Generated class for the NewrhrPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newrhr',
  templateUrl: 'newrhr.html',
})
export class NewrhrPage {

rhrEntry: any = 65;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public rhrEntries: RhrEntries
    //public diaryService: Diary
  ) { }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RhrReminder');
  }
   
  closeModal() {
    this.viewCtrl.dismiss();
  }
  
  saveEnry(){
    console.log(this.rhrEntry);
    this.rhrEntries.addEntry("rasto", this.rhrEntry);
    //this.diaryService.setRhrEntries();
    console.log(this.rhrEntries.data);
    this.showAlert();
    this.closeModal();
  }

 showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Notification',
    subTitle: 'New RHR is saved',
    buttons: ['OK']
  });
  alert.present();
  }
}
