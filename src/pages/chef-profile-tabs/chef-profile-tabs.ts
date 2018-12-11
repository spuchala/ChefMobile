import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChefSpecialitiesPage } from '../chef-specialities/chef-specialities';
import { ChefMenuPage } from '../../pages/chef-menu/chef-menu';
import { ChefPreferencesPage } from '../../pages/chef-preferences/chef-preferences';
import { ChefCommentPage } from '../chef-comment/chef-comment';

@IonicPage()
@Component({
  selector: 'page-chef-profile-tabs',
  templateUrl: 'chef-profile-tabs.html',
})
export class ChefProfileTabsPage {

  chefParams: any;
  isAndroid: boolean = false;
  chefSpecialitiesPage = ChefSpecialitiesPage;
  chefMenuPage = ChefMenuPage;
  chefPreferencesPage = ChefPreferencesPage;
  chefCommentsPage = ChefCommentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storageService: Storage, platform: Platform) {
    this.isAndroid = platform.is('android');
    this.chefParams = null;
  }

  ionViewDidLoad() {
    this._storageService.get('id').then((id) => {
      if (id) {
        this.chefParams = { chefId: id };
      }
    });
  }
}
