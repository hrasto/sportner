import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrinfoHighPage } from './rhrinfo-high';

@NgModule({
  declarations: [
    RhrinfoHighPage,
  ],
  imports: [
    IonicPageModule.forChild(RhrinfoHighPage),
  ],
  exports: [
    RhrinfoHighPage
  ]
})
export class RhrinfoHighPageModule {}
