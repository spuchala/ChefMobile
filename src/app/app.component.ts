import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { ChefAccountPage } from '../pages/chef-account/chef-account';
import { CustomerAccountPage } from '../pages/customer-account/customer-account';
import { ChefProfileTabsPage } from '../pages/chef-profile-tabs/chef-profile-tabs';
import { ChefOrdersTabsPage } from '../pages/chef-orders-tabs/chef-orders-tabs';
import { LogoutPage } from '../pages/logout/logout';
import { UserProvider } from '../providers/user/user'
import { CustomerOrdersTabsPage } from '../pages/customer-orders-tabs/customer-orders-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private _storageService: Storage, private _events: Events,
    private _menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];
  }

  ngOnInit() {
    this.listenForLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.buildMenu();
      this.splashScreen.hide();
    });
  }

  listenForLoginEvents() {
    this._events.subscribe('user:login', () => {
      this.reDrawMenu();
    });

    this._events.subscribe('user:signup', () => {
      this.reDrawMenu();
    });

    this._events.subscribe('user:logout', () => {
      this.reDrawMenu();
    });
  }

  reDrawMenu() {
    setTimeout(() => {
      this.buildMenu();
    }, 300);
  }

  buildMenu() {
    this.pages = [];
    this._storageService.get('userRole').then((userRole) => {
      if (!userRole) {
        this.pages.push(
          { title: 'Register', component: RegisterPage });
        this.pages.push(
          { title: 'Login', component: LoginPage }
        );
      }
      else {
        if (userRole.toLowerCase() === "chef") {
          this.pages.push({ title: 'Account', component: ChefAccountPage });
          this.pages.push({ title: 'Orders', component: ChefOrdersTabsPage });
          this.pages.push({ title: 'Profile', component: ChefProfileTabsPage });
        }
        else if (userRole.toLowerCase() === "customer") {
          this.pages.push({ title: 'Account', component: CustomerAccountPage });
          this.pages.push({ title: 'Orders', component: CustomerOrdersTabsPage });
        }
        this.pages.push({ title: 'LogOut', component: LogoutPage });
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
