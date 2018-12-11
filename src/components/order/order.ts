import { Input, Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'order',
  templateUrl: 'order.html'
})
export class OrderComponent {
  order: any;
  addButtonTitle : string;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController,
    private _navParams: NavParams) {
    this.order = {};
  }

  ionViewDidLoad() {
    let orderParamData = this._navParams.get("data");
    if (orderParamData)
      this.order = orderParamData;
      this.addButtonTitle = this.order.mode === "edit" ? "Save" : "Add To Cart";
  }

  addOrder() {
    this.viewCtrl.dismiss(this.order);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
