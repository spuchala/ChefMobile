import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterChefPage } from '../register-chef/register-chef';
import { RegisterCustomerPage } from '../register-customer/register-customer';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerAsChef() {
    this.navCtrl.push(RegisterChefPage);
  }

  registerAsCustomer() {
    this.navCtrl.push(RegisterCustomerPage);
  }
}
