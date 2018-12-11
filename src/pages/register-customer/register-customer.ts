import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register-customer',
  templateUrl: 'register-customer.html',
})
export class RegisterCustomerPage {

  userType: string;
  disabled: boolean;
  mode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCustomerPage');
  }

  ngOnInit() {
    this.userType = "customer";
    this.disabled = false;
    this.mode = "register";
  }

  onRegistered(success: boolean) {

  }
}
