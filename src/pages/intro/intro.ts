import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
import { NativeStorage} from '@ionic-native/native-storage';
import { Facebook} from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {
  FB_APP_ID: number = 1261414160638519;

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook, public nativestorage: NativeStorage) {
    facebook.browserInit(this.FB_APP_ID, "v2.8");
}

  doFbLogin(){
    let permissions = new Array();
    let nav = this.navCtrl;
    permissions = ["public_profile"];

    this.facebook.login(permissions).then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array();

      //name, gender, birthdate, picture

      this.facebook.api("/me?fields=name,gender",params)
      .then(function(user){
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";

        //save info into NativeStorage
        this.nativeStorage.setItem('user',
        {
          name: user.name,
          gender: user.gender,
          picture: user.picture
        }).then(function(){
          nav.push(TabsPage);
        }, function (error){
          console.log(error);
        })
      })
    }, function(error){
      console.log(error);
    });

  }  
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad Intro');
  }
*/
}
