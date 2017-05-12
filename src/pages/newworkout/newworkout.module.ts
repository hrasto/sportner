import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewworkoutPage } from './newworkout';

@NgModule({
  declarations: [
    NewworkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(NewworkoutPage),
  ],
  exports: [
    NewworkoutPage
  ]
})
export class NewworkoutPageModule {}
