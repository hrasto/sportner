import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewworkoutPage');
  }
  
   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      subTitle: 'New workout is saved',
      buttons: ['OK']
    });
    alert.present();
  }

}
