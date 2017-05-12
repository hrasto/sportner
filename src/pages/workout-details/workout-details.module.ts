import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutDetails } from './workout-details';

@NgModule({
  declarations: [
    WorkoutDetails,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutDetails),
  ],
  exports: [
    WorkoutDetails
  ]
})
export class WorkoutDetailsModule {}
