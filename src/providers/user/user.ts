import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../../pages/register/register';
import { LoginPage } from '../../pages/login/login';
import { ChefAccountPage } from '../../pages/chef-account/chef-account';
import { ChefOrdersTabsPage } from '../../pages/chef-orders-tabs/chef-orders-tabs';
import { ChefProfileTabsPage } from '../../pages/chef-profile-tabs/chef-profile-tabs';
import { CustomerAccountPage } from '../../pages/customer-account/customer-account';
import { LogoutPage } from '../../pages/logout/logout';

@Injectable()
export class UserProvider {

  public pages: Array<any>;

  constructor(public http: HttpClient, private _storageService: Storage) {
    this.pages = [];
    this.buildMenu();
  }

  buildMenu() {
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
        }
        this.pages.push({ title: 'LogOut', component: LogoutPage });
      }
    });
  }
}
