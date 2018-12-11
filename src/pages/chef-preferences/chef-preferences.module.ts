import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefPreferencesPage } from './chef-preferences';

@NgModule({
  declarations: [
    ChefPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefPreferencesPage),
  ],
})
export class ChefPreferencesPageModule {}
