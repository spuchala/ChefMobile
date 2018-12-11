import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RegisterChefPage } from '../pages/register-chef/register-chef';
import { RegisterCustomerPage } from '../pages/register-customer/register-customer';
import { RegisterUserComponent } from '../components/register-user/register-user';
import { StatesProvider } from '../providers/states/states';
import { AuthProvider } from '../providers/auth/auth';
import { ChefProvider } from '../providers/chef/chef';
import { ConversationProvider } from '../providers/conversation/conversation';
import { CustomerProvider } from '../providers/customer/customer';
import { ChefInterceptor } from '../providers/interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { MenuProvider } from '../providers/menu/menu';
import { OrdersProvider } from '../providers/orders/orders';
import { ReviewsProvider } from '../providers/reviews/reviews';
import { StorageProvider } from '../providers/storage/storage';
import { SearchComponent } from '../components/search/search';
import { IonicStorageModule } from '@ionic/storage';
import { ToastProvider } from '../providers/toast/toast';
import { ChefOrdersPage } from '../pages/chef-orders/chef-orders';
import { ChefOrdersTabsPage } from '../pages/chef-orders-tabs/chef-orders-tabs';
import { BatchOrdersComponent } from '../components/batch-orders/batch-orders';
import { Ionic2RatingModule } from 'ionic2-rating';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { ChefComponent } from '../components/chef/chef';
import { ChefDetailsPage } from '../pages/chef-details/chef-details';
import { ChefSpecialitiesComponent } from '../components/chef-specialities/chef-specialities';
import { ChefMenuComponent } from '../components/chef-menu/chef-menu';
import { ChefReviewsComponent } from '../components/chef-reviews/chef-reviews';
import { CustomerAccountPage } from '../pages/customer-account/customer-account';
import { OrderComponent } from '../components/order/order';
import { SearchProvider } from '../providers/search/search';
import { UtilsComponent } from '../components/utils/utils';
import { CartPage } from '../pages/cart/cart';
import { AddressComponent } from '../components/address/address';
import { CheckOutPage } from '../pages/check-out/check-out';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { CartComponent } from '../components/cart/cart';
import { ChefAccountPage } from '../pages/chef-account/chef-account';
import { ChefSpecialitiesPage } from '../pages/chef-specialities/chef-specialities';
import { ChefProfileTabsPage } from '../pages/chef-profile-tabs/chef-profile-tabs';
import { AddChefSpecialityComponent } from '../components/add-chef-speciality/add-chef-speciality';
import { AddChefMenuComponent } from '../components/add-chef-menu/add-chef-menu';
import { ChefMenuPage } from '../pages/chef-menu/chef-menu';
import { ChefPreferencesPage } from '../pages/chef-preferences/chef-preferences';
import { ChefPreferencesComponent } from '../components/chef-preferences/chef-preferences';
import { ChefCommentsComponent } from '../components/chef-comments/chef-comments';
import { ChefCommentPage } from '../pages/chef-comment/chef-comment';
import { AddChefCommentComponent } from '../components/add-chef-comment/add-chef-comment';
import { LogoutPage } from '../pages/logout/logout';
import { ConverseComponent } from '../components/converse/converse';
import { UserProvider } from '../providers/user/user';
import { CustomerOrdersTabsPage } from '../pages/customer-orders-tabs/customer-orders-tabs';
import { CustomerOrdersPage } from '../pages/customer-orders/customer-orders';
import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
import { settings } from '../settings/settings';
import { NotificationProvider } from '../providers/notification/notification';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    RegisterChefPage,
    RegisterCustomerPage,
    RegisterUserComponent,
    BatchOrdersComponent,
    SearchComponent,
    ChefOrdersPage,
    ChefOrdersTabsPage,
    CustomerOrdersTabsPage,
    CustomerOrdersPage,
    SearchResultsPage,
    ChefComponent,
    ChefDetailsPage,
    ChefSpecialitiesComponent,
    ChefMenuComponent,
    ChefReviewsComponent,
    CustomerAccountPage,
    OrderComponent,
    UtilsComponent,
    CartPage,
    AddressComponent,
    CheckOutPage,
    ConfirmationPage,
    CartComponent,
    ChefAccountPage,
    ChefSpecialitiesPage,
    ChefProfileTabsPage,
    AddChefSpecialityComponent,
    AddChefMenuComponent,
    ChefMenuPage,
    ChefPreferencesComponent,
    ChefPreferencesPage,
    ChefCommentsComponent,
    ChefCommentPage,
    AddChefCommentComponent,
    LogoutPage,
    ConverseComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    Ionic2RatingModule,
    SignalRModule.forRoot(createConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    RegisterChefPage,
    RegisterCustomerPage,
    SearchComponent,
    ChefOrdersPage,
    ChefOrdersTabsPage,
    CustomerOrdersTabsPage,
    CustomerOrdersPage,
    SearchResultsPage,
    ChefComponent,
    ChefDetailsPage,
    ChefSpecialitiesComponent,
    ChefMenuComponent,
    ChefReviewsComponent,
    CustomerAccountPage,
    OrderComponent,
    UtilsComponent,
    CartPage,
    AddressComponent,
    CheckOutPage,
    ConfirmationPage,
    CartComponent,
    ChefAccountPage,
    ChefSpecialitiesPage,
    ChefProfileTabsPage,
    AddChefSpecialityComponent,
    AddChefMenuComponent,
    ChefMenuPage,
    ChefPreferencesComponent,
    ChefPreferencesPage,
    ChefCommentPage,
    ChefCommentsComponent,
    AddChefCommentComponent,
    LogoutPage,
    ConverseComponent,
    RegisterUserComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatesProvider,
    StatesProvider,
    AuthProvider,
    ChefProvider,
    ConversationProvider,
    CustomerProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ChefInterceptor, multi: true
    },
    LoginProvider,
    MenuProvider,
    OrdersProvider,
    ReviewsProvider,
    StorageProvider,
    StorageProvider,
    ToastProvider,
    SearchProvider,
    UserProvider,
    SignalRConfiguration,
    NotificationProvider
  ]
})
export class AppModule { }

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'notificationHub';
  c.url = settings.chefService;
  c.logging = true;

  // >= v5.0.0
  c.executeEventsInZone = true; // optional, default is true
  c.executeErrorsInZone = false; // optional, default is false
  c.executeStatusChangeInZone = true; // optional, default is true
  return c;
}
