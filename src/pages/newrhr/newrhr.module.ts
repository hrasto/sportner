import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewrhrPage } from './newrhr';
import { RhrEntries } from '../../providers/rhr-entries';
@NgModule({
  declarations: [
    NewrhrPage,RhrEntries
  ],
  imports: [
    IonicPageModule.forChild(NewrhrPage),
  ],
  exports: [
    NewrhrPage,RhrEntries 
  ]
})
export class NewrhrPageModule {}
