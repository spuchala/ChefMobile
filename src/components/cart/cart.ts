import { Input, Component } from '@angular/core';
import { ChefProvider } from '../../providers/chef/chef';
import { OrdersProvider } from '../../providers/orders/orders';
import { ToastProvider } from '../../providers/toast/toast';
import { ModalController } from 'ionic-angular';
import { OrderComponent } from '../../components/order/order';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})
export class CartComponent {
  @Input() mode: string;
  orders: Array<any>;

  constructor(private _chefService: ChefProvider,
    private _ordersService: OrdersProvider, private _toastService: ToastProvider,
    private _modalCtrl: ModalController, private _storageService: Storage,
    private _navCtrl: NavController) {
      this.orders = this._ordersService.getOrders();
  }

  editOrder(order: any) {
    order.mode = "edit";
    let orderModal = this._modalCtrl.create(OrderComponent, { data: order });
    orderModal.present();

    orderModal.onDidDismiss(result => {
      if (result) {
        order = result;
        this._storageService.get('userId').then((userId) => {
          if (userId) {
            this._ordersService.updateOrderInCustomerCart(userId, order)
              .subscribe(suc => {
              },
                err => {
                  this._toastService.presentToast("Sorry! Something went wrong.");
                });
          }
        });
      }
    });
  }

  removeOrder(order: any) {
    this.orders = this._ordersService.removeOrder(order.id);
    this._storageService.get('userId').then((userId) => {
      if (userId) {
        this._ordersService.removeOrderFromCustomerCart(userId, order)
          .subscribe(suc => {
          },
            err => {
              this._toastService.presentToast("Sorry! Something went wrong.");
            });
      }
      if (this.orders.length === 0) {
        this._navCtrl.pop();
      }
    });
  }

  getTotalPrice() {
    var total = 0.00;
    this.orders.forEach(function (order) {
      total += parseFloat(order.menuItem.price);
    });
    return total;
  }

  getChefName(chefId: number) {
    return "test";
  }
}
