import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrReminder } from './rhr-reminder';

@NgModule({
  declarations: [
    RhrReminder,
  ],
  imports: [
    IonicPageModule.forChild(RhrReminder),
  ],
  exports: [
    RhrReminder
  ]
})
export class RhrReminderModule {}
