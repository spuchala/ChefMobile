import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefOrdersTabsPage } from './chef-orders-tabs';

@NgModule({
  declarations: [
    ChefOrdersTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefOrdersTabsPage),
  ],
})
export class ChefOrdersTabsPageModule {}
