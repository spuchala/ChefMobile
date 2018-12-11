import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefAccountTabsPage } from './chef-account-tabs';

@NgModule({
  declarations: [
    ChefAccountTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefAccountTabsPage),
  ],
})
export class ChefAccountTabsPageModule {}
