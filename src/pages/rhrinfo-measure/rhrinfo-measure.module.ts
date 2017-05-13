import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RhrinfoMeasurePage } from './rhrinfo-measure';

@NgModule({
  declarations: [
    RhrinfoMeasurePage,
  ],
  imports: [
    IonicPageModule.forChild(RhrinfoMeasurePage),
  ],
  exports: [
    RhrinfoMeasurePage
  ]
})
export class RhrinfoMeasurePageModule {}
