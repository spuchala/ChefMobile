import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChefProvider } from '../../providers/chef/chef';
import { OrdersProvider } from '../../providers/orders/orders';
import { ToastProvider } from '../../providers/toast/toast';
import { ModalController } from 'ionic-angular';
import { OrderComponent } from '../../components/order/order';
import { Storage } from '@ionic/storage';
import { CheckOutPage } from '../../pages/check-out/check-out';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  @Input() mode: string;
  orders: Array<any>;

  constructor(private _chefService: ChefProvider,
    private _ordersService: OrdersProvider, private _toastService: ToastProvider,
    private _modalCtrl: ModalController, private _storageService: Storage,
    private _navCtrl: NavController) {
  }
  
  checkOut() {
    this._navCtrl.push(CheckOutPage);
  }

  cancel() {
    this._navCtrl.pop();
  }
}
