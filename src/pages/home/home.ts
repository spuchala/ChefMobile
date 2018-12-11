import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  what: string;
  where: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
}
