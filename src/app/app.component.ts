import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
//import { Intro } from '../pages/intro/intro';
//import { AuthService } from '../providers/auth-service';

//import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =TabsPage;
  

constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  
      statusBar.styleDefault();
      splashScreen.hide();
      
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
