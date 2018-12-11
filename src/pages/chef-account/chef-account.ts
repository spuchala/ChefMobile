import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefProvider } from '../../providers/chef/chef';
import { ToastProvider } from '../../providers/toast/toast';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-chef-account',
  templateUrl: 'chef-account.html',
})
export class ChefAccountPage {

  userType: string;
  user: any;
  disabled: boolean;
  mode: string;
  chefId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _chefService: ChefProvider, private _toastServ: ToastProvider,
    private _storageService: Storage) {
    this.user = {};
  }

  ionViewDidLoad() {
    this.disabled = true;
    this.mode = "edit";
    this.chefId = this.navParams.get('chefId');
    this.userType = "chef";
    this.getChefAccount();
  }

  getChefAccount() {
    this._storageService.get('userId').then((userId) => {
      this.chefId = userId;
      this._chefService.getChefAccount(this.chefId)
        .subscribe(suc => {
          this.user = suc.response;
        },
          err => {
            this._toastServ.presentToast("Something went wrong.Sorry! Please try again.");
          });
    });
  }
}
