import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrinfoLowPage } from './rhrinfo-low';

@NgModule({
  declarations: [
    RhrinfoLowPage,
  ],
  imports: [
    IonicPageModule.forChild(RhrinfoLowPage),
  ],
  exports: [
    RhrinfoLowPage
  ]
})
export class RhrinfoLowPageModule {}
