import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerOrdersPage } from './customer-orders';

@NgModule({
  declarations: [
    CustomerOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerOrdersPage),
  ],
})
export class CustomerOrdersPageModule {}
