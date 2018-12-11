import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefDetailsPage } from './chef-details';

@NgModule({
  declarations: [
    ChefDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefDetailsPage),
  ],
})
export class ChefDetailsPageModule {}
