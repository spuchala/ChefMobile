import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { ChefProvider } from '../../providers/chef/chef';
import { Subscription } from 'rxjs/Subscription';
import { AuthProvider } from '../../providers/auth/auth';
import { ChefOrdersTabsPage } from '../../pages/chef-orders-tabs/chef-orders-tabs';
import { CustomerAccountPage } from '../../pages/customer-account/customer-account';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast';
import { ChefProfileTabsPage } from '../chef-profile-tabs/chef-profile-tabs';
import { IConnectionOptions, SignalR, BroadcastEventListener, SignalRConnection } from 'ng2-signalr';
import { NotificationProvider } from '../../providers/notification/notification';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  subscription: Subscription;
  user: any;
  message: string;
  private _connection: SignalRConnection;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _loginService: LoginProvider, private _chefService: ChefProvider,
    private _authService: AuthProvider, private _storage: Storage,
    private toastService: ToastProvider, private _events: Events,
    private _signalR: SignalR, private _notificationService: NotificationProvider, ) {
    this.user = {};
  }

  ionViewDidLoad() {
  }

  login() {
    this._authService.login(this.user)
      .subscribe(suc => {
        this.storeUserData(suc.response);
        this._events.publish("user:login");
        if (this._loginService.returnUrl && this._loginService.returnUrl != "") {
        }
        else {
          var role = suc.response.userRole;
          var userToken = suc.response.access_token;
          if (role === "Chef") {
            this._storage.ready().then(() => {
              this._chefService.isChefProfileComplete()
                .subscribe(suc => {
                  let chefProfileComplete = suc.response;
                  if (chefProfileComplete) {
                    this.startNotifyConnecForChef(userToken);
                    this.navCtrl.push(ChefOrdersTabsPage);
                  }
                  else {
                    this.navCtrl.push(ChefProfileTabsPage);
                  }
                },
                  err => {
                    this.toastService.presentToast("Something went wrong! Sorry");
                  });
            });
          } else if (role === "Customer") {
            this.navCtrl.setRoot(CustomerAccountPage);
          }
        }
      },
        err => {
          this.toastService.presentToast("Email or password is wrong.");
        });
  }

  storeUserData(data) {
    this._storage.set('access_token', data.access_token);
    this._storage.set('userId', data.userId);
    this._storage.set('id', data.id);
    this._storage.set('userRole', data.userRole);
  }

  startNotifyConnecForChef(userToken: string) {
    let options: IConnectionOptions = {
      hubName: "chefNotificationHub",
      qs: { access_token: userToken }
    };
    this._notificationService.connection = this._signalR.createConnection(options);
    this._notificationService.connection.start().then((c) => {
      this.listenForNotification();
    });
  }

  listenForNotification() {
    let onMessageSent$ = new BroadcastEventListener<any>('notifyChef');
    this._notificationService.connection.listen(onMessageSent$);
    onMessageSent$.subscribe((notification: any) => {
      this.toastService.presentToast(notification);
    });
  }
}
