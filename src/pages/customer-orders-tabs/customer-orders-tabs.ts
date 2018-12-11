import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { CustomerOrdersPage } from '../customer-orders/customer-orders';

@IonicPage()
@Component({
  selector: 'page-customer-orders-tabs',
  templateUrl: 'customer-orders-tabs.html',
})
export class CustomerOrdersTabsPage {

  rootPage = CustomerOrdersPage;
  inQueueParams = { orderType: 'In Queue' };
  inProcessParams = { orderType: 'In Process' };
  completedParams = { orderType: 'Completed' };
  deletedParams = { orderType: 'Deleted' };
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
  }
}
