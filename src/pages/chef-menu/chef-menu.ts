import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChefMenuComponent } from '../../components/chef-menu/chef-menu';

@IonicPage()
@Component({
  selector: 'page-chef-menu',
  templateUrl: 'chef-menu.html',
})
export class ChefMenuPage {

  @ViewChild(ChefMenuComponent)
  private menuComponent: ChefMenuComponent;
  chefId: any;
  chefName: string;
  menuMode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storageService: Storage) {
  }

  ionViewDidLoad() {
    this.menuMode = "account";
    this._storageService.get('id').then((id) => {
      if (id) {
        this.chefId = id;
      }
    });
  }

  addMenu()
  {
    this.menuComponent.addMenuItem();
  }
}
