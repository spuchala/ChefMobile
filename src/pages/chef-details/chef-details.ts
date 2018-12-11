import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChefProvider } from '../../providers/chef/chef';
import { MenuProvider } from '../../providers/menu/menu';
import { ToastProvider } from '../../providers/toast/toast';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-chef-details',
  templateUrl: 'chef-details.html',
})
export class ChefDetailsPage {

  subscription: Subscription;
  chefDetails: any;
  chefId: any;
  chefName: string;
  menuMode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _chefService: ChefProvider, private _menuService: MenuProvider,
    private _toastService: ToastProvider, private _viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.chefId = this.navParams.get("chefId");
    this.getChefDetails(this.navParams.get("chefId"));
    this.menuMode = "order";
  }

  getChefDetails(chefId: number) {
    this._chefService.getChefDetails(chefId)
      .subscribe(suc => {
        this.chefDetails = suc.response;
        this.chefName = this.chefDetails.firstName +" "+ this.chefDetails.lastName;
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  dismiss() {
    this._viewCtrl.dismiss();
  }
}
