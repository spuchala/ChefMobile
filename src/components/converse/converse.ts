import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'converse',
  templateUrl: 'converse.html'
})
export class ConverseComponent {

  data: any;
  constructor(public viewCtrl: ViewController, private _navParams: NavParams) {
  }

  ngOnInit() {
    this.data = this._navParams.get("data");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.viewCtrl.dismiss(this.data);
  }
}
