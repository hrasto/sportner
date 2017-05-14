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
  firstName:any;
  lastName: any;
  birthdate: any;
  weight: any;
  height: any;
  gender: any;
  notes:any;

  user:any;
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public userData: UserData) {
    this.userData.load();
  
  }

   ionViewDidLoad() {
    this.userData.load();
    this.user = this.userData.getUser(this.navParams.data);
    //var d = new Date(this.user.birthdate);
    //this.birthdate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    this.firstName = this.user.firstName;
    console.log(this.firstName);
    this.lastName = this.user.lastName;
    console.log(this.lastName);
    this.birthdate = this.user.birthdate;
    this.weight = this.user.weight;
    this.height = this.user.height;
    this.gender = this.user.gender;
    this.notes = this.user.notes;
    console.log('ionViewDidLoad ViewManageprofile');
  }

  ionViewDidLeave() {
     this.user = this.userData.getUser(this.navParams.data);
  // var d = new Date(this.user.birthdate);
   // this.birthdate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.birthdate = this.user.birthdate;
    this.weight = this.user.weight;
    this.height = this.user.height;
    this.gender = this.user.gender;
    this.notes = this.user.notes;
    console.log('ionViewDidLoad LeaveManageprofile');
  }
 
  saveWorkout(){
    this.userData.editUser(this.user.id, this.firstName, this.lastName, this.gender, this.birthdate, this.height, this.weight, this.notes);
    this.userData.updateSt();
    this.navCtrl.pop();
  }
}
