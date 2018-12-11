import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';
import { CustomerProvider } from '../../providers/customer/customer';
import { ToastProvider } from '../../providers/toast/toast';
import { Storage } from '@ionic/storage';
import { ConfirmationPage } from '../../pages/confirmation/confirmation';
import { ChefProvider } from '../../providers/chef/chef';
import { IConnectionOptions, SignalR, BroadcastEventListener, SignalRConnection } from 'ng2-signalr';

@IonicPage()
@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
})

export class CheckOutPage {

  cartMode: string;
  user: any;
  private _connection: SignalRConnection;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _custService: CustomerProvider, private _ordersService: OrdersProvider,
    private _toastService: ToastProvider, private _storage: Storage,
    private _chefService: ChefProvider, private _signalR: SignalR) {
    this.user = {
      address: {},
      city: "",
      state: "",
      zipCode: "",
      email: "",
      phone: ""
    };
  }

  ionViewDidLoad() {
    this.cartMode = "checkOut";
    this.getCustomerAddress();
  }

  checkOut() {
    this._ordersService.checkOutOrders(this._ordersService.orders)
      .subscribe(suc => {
        var confirmationId = suc.res;
        this._ordersService.orders = null;
        this.navCtrl.push(ConfirmationPage, { confirmationNbr: confirmationId });
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });
  }

  getCustomerAddress() {
    this._storage.get('userId').then((userId) => {
      if (userId) {
        this._custService.getCustomerAccount(userId)
          .subscribe(suc => {
            this.user = suc.response;
          },
            err => {
              this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
            });
      }
    });
  }

  startNotifyConnecForCustomer(userToken: string) {
    let options: IConnectionOptions = {
      hubName: "customerNotificationHub",
      qs: {
        access_token: userToken
      }
    };
    this._connection = this._signalR.createConnection(options);
    this._signalR.connect(options).then((c) => console.log("Connected"));
  }
}
