import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefOrdersPage } from './chef-orders';

@NgModule({
  declarations: [
    ChefOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefOrdersPage),
  ],
})
export class ChefOrdersPageModule {}
