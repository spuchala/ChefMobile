import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer';
import { ToastProvider } from '../../providers/toast/toast';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-customer-account',
  templateUrl: 'customer-account.html',
})
export class CustomerAccountPage {

  userType: string;
  user: any;
  disabled: boolean;
  mode: string;
  customerId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _customerService: CustomerProvider, private _toastServ: ToastProvider,
    private _storageService: Storage) {
  }

  ionViewDidLoad() {
    this.disabled = true;
    this.mode = "edit";
    this.userType = "customer";
    this.getCustomerAccount();
  }

  getCustomerAccount() {
    this._storageService.get('userId').then((userId) => {
      this.customerId = userId;
      this._customerService.getCustomerAccount(this.customerId)
        .subscribe(suc => {
          this.user = suc.response;
        },
          err => {
            this._toastServ.presentToast("Something went wrong.Sorry! Please try again.");
          });
    });
  }
}
