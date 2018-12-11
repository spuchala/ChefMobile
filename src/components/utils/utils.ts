import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SearchComponent } from '../../components/search/search';
import { OrdersProvider } from '../../providers/orders/orders';
import { SearchResultsPage } from '../../pages/search-results/search-results';
import { CartPage } from '../../pages/cart/cart'

@Component({
  selector: 'utils',
  templateUrl: 'utils.html'
})
export class UtilsComponent {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    private _ordersService: OrdersProvider) {
  }

  openSearch() {
    let searchModal = this.modalCtrl.create(SearchComponent);
    searchModal.onDidDismiss(searchQuery => {
      this.navCtrl.setRoot(SearchResultsPage);
    });
    searchModal.present();
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }

  getOrdersInCartCount() {
    return this._ordersService.getOrdersCount();
  }
}
