import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrinfoTablePage } from './rhrinfo-table';

@NgModule({
  declarations: [
    RhrinfoTablePage,
  ],
  imports: [
    IonicPageModule.forChild(RhrinfoTablePage),
  ],
  exports: [
    RhrinfoTablePage
  ]
})
export class RhrinfoTablePageModule {}
