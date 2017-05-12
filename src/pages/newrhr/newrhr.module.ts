import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewrhrPage } from './newrhr';

@NgModule({
  declarations: [
    NewrhrPage,
  ],
  imports: [
    IonicPageModule.forChild(NewrhrPage),
  ],
  exports: [
    NewrhrPage
  ]
})
export class NewrhrPageModule {}
