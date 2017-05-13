import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';
import { UserData} from '../../providers/user-data'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

  firstName:any;
  lastName: any;
  birthdate: any;
  weight: any;
  height: any;
  gender: any;
  notes:any;


  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public storage: Storage,
  public viewCtrl: ViewController,
  public alertCtrl: AlertController,
  public userdata: UserData) {
      
     
    
   //console.log('Hello Intro Provider');

}




ionViewDidLoad() {
    console.log('ionViewDidLoad IntroProvider');
  }
closeModal() {
    this.viewCtrl.dismiss();
  }

showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      subTitle: 'Your profile is set up!',
      buttons: ['OK']
    });
    alert.present();
    this.closeModal();
  }
setUpProfile(){
    //console.log(this.rhrEntry);
    console.log(this.firstName, this.lastName, this.gender, this.birthdate, this.height, this.weight, this.notes);
    this.userdata.setup(this.firstName, this.lastName, this.gender, this.birthdate, this.height, this.weight, this.notes);
    //console.log(this.rhrEntries.data);
    this.showAlert();
    //this.closeModal();
   // this.viewCtrl.dismiss();
  }


}


  // doFbLogin(){
  //   let permissions = new Array();
  //   let nav = this.navCtrl;
  //   permissions = ["public_profile"];

  //   this.facebook.login(permissions).then(function(response){
  //     let userId = response.authResponse.userID;
  //     let params = new Array();

  //     //name, gender, birthdate, picture

  //     this.facebook.api("/me?fields=name,gender",params)
  //     .then(function(user){
  //       user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";

  //       //save info into NativeStorage
  //       this.nativeStorage.setItem('user',
  //       {
  //         name: user.name,
  //         gender: user.gender,
  //         picture: user.picture
  //       }).then(function(){
  //         nav.push(TabsPage);
  //       }, function (error){
  //         console.log(error);
  //       })
  //     })
  //   }, function(error){
  //     console.log(error);
  //   });

  // }  
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }
*/
