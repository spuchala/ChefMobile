import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-chef-preferences',
  templateUrl: 'chef-preferences.html',
})
export class ChefPreferencesPage {

  preferencesMode: string;
  chefId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storageService: Storage) {
  }

  ionViewDidLoad() {
    this.preferencesMode = "account";
    this._storageService.get('id').then((id) => {
      if (id) {
        this.chefId = id;
      }
    });
  }

}
