import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Diary } from './diary';

@NgModule({
  declarations: [
    Diary,
  ],
  imports: [
    IonicPageModule.forChild(Diary),
  ],
  exports: [
    Diary
  ]
})
export class DiaryModule {}
