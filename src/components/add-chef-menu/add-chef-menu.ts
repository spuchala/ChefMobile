import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'add-chef-menu',
  templateUrl: 'add-chef-menu.html'
})
export class AddChefMenuComponent {
  menuItem: any;
  submitButtomTitle: String;
  title: String;
  constructor(public viewCtrl: ViewController, private _navParams: NavParams) {
    this.menuItem = {};
  }

  ionViewDidLoad() {
    let menuParamData = this._navParams.get("data");
    if (menuParamData) {
      if (menuParamData.mode === "edit") {
        this.submitButtomTitle = "Save";
        this.title = "Edit Menu";
        this.menuItem = menuParamData.menuItem;
      }
      else {
        this.submitButtomTitle = "Add";
        this.title = "Add Menu";
        this.menuItem = {};
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.viewCtrl.dismiss(this.menuItem);
  }
}
