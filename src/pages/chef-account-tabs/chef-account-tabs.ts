import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ChefAccountPage } from '../../pages/chef-account/chef-account';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-chef-account-tabs',
  templateUrl: 'chef-account-tabs.html',
})
export class ChefAccountTabsPage {

  chefParams: any;
  chefAccountPage = ChefAccountPage;
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storageService: Storage, platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    this._storageService.get('userId').then((userId) => {
      if (userId) {
        this.chefParams = { chefId: userId };
      }
    });
  }
}
