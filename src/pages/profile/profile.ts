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
  //editprofile = Manageprofile;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public userData: UserData) {
  
  }

  ionViewDidLoad() {
   // this.userData.load();
    //this.userData.getUser();
    console.log('ionViewDidLoad Profile');
  }
  editProfile(id){
    this.navCtrl.push(Manageprofile,id);
  }
 

}
