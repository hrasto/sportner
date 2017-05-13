import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrInfoPage } from './rhr-info';

@NgModule({
  declarations: [
    RhrInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RhrInfoPage),
  ],
  exports: [
    RhrInfoPage
  ]
})
export class RhrInfoPageModule {}
