import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Manageprofile } from './manageprofile';

@NgModule({
  declarations: [
    Manageprofile,
  ],
  imports: [
    IonicPageModule.forChild(Manageprofile),
  ],
  exports: [
    Manageprofile
  ]
})
export class ManageprofileModule {}
