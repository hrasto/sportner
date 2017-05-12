import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { Manageprofile } from '../../pages/manageprofile/manageprofile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {
  g: any;
  editprofile = Manageprofile;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public userData: UserData) {
  
  }

  ionViewDidLoad() {
    this.userData.load();
    this.gender();
    console.log('ionViewDidLoad Profile');
  }

  gender(){
    this.userData.load();
    if (this.userData.users.gender == 1)
      var ge = "female";
    else if (this.userData.users.gender == 0)
      var ge = "male";
    this.g = ge;
  }

}
