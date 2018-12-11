import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { NotificationProvider } from '../../providers/notification/notification';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storage: Storage, private _events: Events,
    private _notificationService: NotificationProvider) {
  }

  ionViewDidLoad() {
    this.logOut();
  }

  logOut() {
    this._storage.get('userRole').then((role) => {
      if (role) {
        if (role && role.toLowerCase() === "chef" && this._notificationService.connection) {
          this._notificationService.connection.stop();
        }
        this._storage.clear();
        this._events.publish('user:logout');
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }
}
