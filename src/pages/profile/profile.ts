import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public userData: UserData) {
  
  }

  ionViewDidLoad() {
    this.userData.load();
    console.log('ionViewDidLoad Profile');
  }

}
