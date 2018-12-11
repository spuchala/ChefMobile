import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefSpecialitiesPage } from './chef-specialities';

@NgModule({
  declarations: [
    ChefSpecialitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefSpecialitiesPage),
  ],
})
export class ChefSpecialitiesPageModule {}
