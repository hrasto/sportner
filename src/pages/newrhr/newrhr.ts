import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
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
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }
  
 showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewrhrPage');
  }

}
