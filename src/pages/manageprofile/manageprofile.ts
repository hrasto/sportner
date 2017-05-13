import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

/**
 * Generated class for the Manageprofile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manageprofile',
  templateUrl: 'manageprofile.html',
})
export class Manageprofile {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public userData: UserData) {
  
  }

   ionViewDidLoad() {
    this.userData.load();
    console.log('ionViewDidLoad Manageprofile');
  }
 

}
