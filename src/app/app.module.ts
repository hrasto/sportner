import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Intro } from '../pages/intro/intro';
import { RhrReminder } from '../pages/rhr-reminder/rhr-reminder';
import { Diary } from '../pages/diary/diary';
import { Profile } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { Statistics } from '../pages/statistics/statistics';
import { Settings } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WorkoutEntries } from '../providers/workout-entries';
import { UserData } from '../providers/user-data';
import { AuthService } from '../providers/auth-service';
import { RhrEntries } from '../providers/rhr-entries';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Diary,
    Profile,
    Statistics,
    Settings,
    TabsPage,
    Intro,
    RhrReminder
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Profile,
    Diary,
    Statistics,
    Settings,
    TabsPage,
    Intro,
    RhrReminder
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkoutEntries,
    AuthService,
    RhrEntries,
    UserData
  ]
})
export class AppModule {}
