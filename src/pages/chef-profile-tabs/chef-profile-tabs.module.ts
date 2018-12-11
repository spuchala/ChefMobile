import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefProfileTabsPage } from './chef-profile-tabs';

@NgModule({
  declarations: [
    ChefProfileTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefProfileTabsPage),
  ],
})
export class ChefProfileTabsPageModule {}
