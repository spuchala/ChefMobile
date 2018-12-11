import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterUserComponent } from '../../components/register-user/register-user';

@IonicPage()
@Component({
  selector: 'page-register-chef',
  templateUrl: 'register-chef.html',
})
export class RegisterChefPage {

  states: Array<any>;
  userType: string;
  disabled: boolean;
  mode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterChefPage');
    this.userType = "chef";
    this.disabled = false;
    this.mode = "register";
  }

  ngOnInit() {
   
  }

  onRegistered(success: boolean) {
  }
}
