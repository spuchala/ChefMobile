import { Component, Input } from '@angular/core';
import { MenuProvider } from '../../providers/menu/menu';
import { OrdersProvider } from '../../providers/orders/orders';
import { ToastProvider } from '../../providers/toast/toast';
import { StorageProvider } from '../../providers/storage/storage';
import { ModalController } from 'ionic-angular';
import { OrderComponent } from '../../components/order/order';
import { Storage } from '@ionic/storage';
import { AddChefMenuComponent } from '../../components/add-chef-menu/add-chef-menu';

@Component({
  selector: 'chef-menu',
  templateUrl: 'chef-menu.html'
})
export class ChefMenuComponent {

  @Input() chefId: number;
  @Input() chefName: string;
  @Input() mode: string;
  @Input() refresh: Array<boolean>;
  menu: Array<any>;
  orderData: any;

  constructor(private _menuService: MenuProvider,
    private _ordersService: OrdersProvider, private _toastService: ToastProvider,
    private _storageServ: StorageProvider, private _modalCtrl: ModalController,
    private _storage: Storage) {
  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this._menuService.getChefMenu(this.chefId)
      .subscribe(suc => {
        this.menu = suc.response["menu"];
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  openOrder(menuItem: any) {
    let orderModal = this._modalCtrl.create(OrderComponent, { chefId: this.chefId, menuItem: menuItem })
    orderModal.onDidDismiss(data => {
      if (data) {
        this.orderData = data;
        this._storage.get('userId').then((userId) => {
          if (userId) {
            this.orderData.menuItem = menuItem;
            this.orderData.chefId = this.chefId;
            this.orderData.chefName = this.chefName;
            this._ordersService.addOrderToCustomerCart(userId, this.orderData)
              .subscribe(suc => {
                this.orderData.id = suc.res["id"];
                this._ordersService.createOrder(this.orderData);
                this._toastService.presentToast("Item added to cart");
              },
                err => {
                  this._toastService.presentToast("Sorry! Something went wrong.");
                });
          }
          else {
            this._ordersService.createOrder(this.orderData);
            this._toastService.presentToast("Item added to cart");
          }
          menuItem.disabled = true;
        });
      }
    });
    orderModal.present();
  }

  editMenuItem(menuItem: any) {
    let editMenuModal = this._modalCtrl.create(AddChefMenuComponent,
      { data: { mode: "edit", menuItem: menuItem } });
    editMenuModal.onDidDismiss(data => {
      if (data && data != "") {
        var menu = data;
        this.editMenuItemSubscribe(menu);
      }
    });
    editMenuModal.present();
  }

  editMenuItemSubscribe(menuItem) {
    this._menuService.editMenuItem(menuItem)
      .subscribe(suc => {
        let menuItemIndex = this.menu.findIndex((item => item.id == menuItem.id));
        this.menu[menuItemIndex] = menuItem;
        this._toastService.presentToast("Menu updated.");
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });
  }

  addMenuItem() {
    let addMenuModal = this._modalCtrl.create(AddChefMenuComponent,
      { data: { mode: "edit", menuItem: {} } });
    addMenuModal.onDidDismiss(data => {
      if (data && data != "") {
        var menu = data;
        this.addMenuItemSubscribe(menu);
      }
    });
    addMenuModal.present();
  }

  addMenuItemSubscribe(menuItem) {
    this._menuService.addMenuItem(menuItem)
      .subscribe(suc => {
        menuItem = suc.res;
        this.menu.push(menuItem);
        this._toastService.presentToast("Menu added.");
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });
  }

  removeMenuItem(menuItem: any) {
    this._menuService.removeMenuItem(menuItem)
      .subscribe(suc => {
        let menuItemIndex = this.menu.findIndex((item => item.id == menuItem.id));
        this.menu.splice(menuItemIndex, 1);
        this._toastService.presentToast("Menu updated.");
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });
  }
}
