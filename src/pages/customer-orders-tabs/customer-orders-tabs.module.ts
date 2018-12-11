import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerOrdersTabsPage } from './customer-orders-tabs';

@NgModule({
  declarations: [
    CustomerOrdersTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerOrdersTabsPage),
  ],
})
export class CustomerOrdersTabsPageModule {}
