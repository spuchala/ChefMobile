import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ChefOrdersPage } from '../chef-orders/chef-orders';

@IonicPage()
@Component({
  selector: 'page-chef-orders-tabs',
  templateUrl: 'chef-orders-tabs.html',
})
export class ChefOrdersTabsPage {

  rootPage = ChefOrdersPage;
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
