import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrinfoListPage } from './rhrinfo-list';

@NgModule({
  declarations: [
    RhrinfoListPage,
  ],
  imports: [
    IonicPageModule.forChild(RhrinfoListPage),
  ],
  exports: [
    RhrinfoListPage
  ]
})
export class RhrinfoListPageModule {}
