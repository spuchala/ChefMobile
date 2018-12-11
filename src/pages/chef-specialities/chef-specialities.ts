import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChefSpecialitiesComponent } from '../../components/chef-specialities/chef-specialities';

@IonicPage()
@Component({
  selector: 'page-chef-specialities',
  templateUrl: 'chef-specialities.html',
})
export class ChefSpecialitiesPage {

  @ViewChild(ChefSpecialitiesComponent)
  private specialitiesComponent: ChefSpecialitiesComponent;
  chefId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storageService: Storage) {
  }

  ionViewDidLoad() {
    this._storageService.get('id').then((id) => {
      if (id) {
        this.chefId = id;
      }
    });
  }

  addSpeciality() {
    this.specialitiesComponent.addSpeciality();
  }
}
