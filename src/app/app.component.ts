import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
//import { NavController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { Intro } from '../pages/intro/intro';
//import { AuthService } from '../providers/auth-service';

//import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 rootPage:any =TabsPage;
  
/*
constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, nativestorage: NativeStorage) {
      platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
     // let env = this;
      //var nav = this.navCtrl;
      nativestorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        this.rootPage =TabsPage;
        splashScreen.hide();
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        this.rootPage =Intro;
        splashScreen.hide();
      });

      statusBar.styleDefault();
    });
     
      





  }   
  
 //loader:any;
 /* constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth:AuthService, public loading:LoadingController) {
  
  this.presentLoading();
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
     // if(true) {
        this.rootPage = TabsPage;
     // } else {
      //  this.rootPage = Intro;
      //}
      
      this.loader.dismiss();
    });
  }
  
  presentLoading(){
    this.loader = this.loading.create({
        content: "Authenticating... "
    });
    
    this.loader.present();
  }
  */
}
