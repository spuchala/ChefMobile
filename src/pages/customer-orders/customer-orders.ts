import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';
import { ToastProvider } from '../../providers/toast/toast';
import { ConverseComponent } from '../../components/converse/converse';
import { ConversationProvider } from '../../providers/conversation/conversation';

@IonicPage()
@Component({
  selector: 'page-customer-orders',
  templateUrl: 'customer-orders.html',
})
export class CustomerOrdersPage {

  batchOrders: any;
  deletedOrders: any;
  noOrders: boolean;

  userType: string;
  mode: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    private _ordersService: OrdersProvider,
    private _toastMgr: ToastProvider, private _convService: ConversationProvider,
    private _navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.userType = "Customer";
    var orderType = this._navParams.get('orderType');
    this.getCustomerOrdersForCustomer(orderType);
    this.noOrders = true;
    this.mode = "readOnly";
  }

  getCustomerOrdersForCustomer(type) {
    switch (type) {
      case "In Queue":
        this.getCustomerOrdersInQueue();
        break;
      case "In Process":
        this.getCustomerOrdersInProcess();
        break;
      case "Completed":
        this.getCustomerOrdersCompleted();
        break;
      case "Deleted":
        this.getRejectedCustomerOrders();
        break;
      default:
        break;
    }
  }

  anyOrders(orders: any): boolean {
    if (orders && orders.length > 0) {
      return false;
    }
    return true;
  }

  getCustomerOrdersInQueue() {
    this._ordersService.getCustomerOrdersInQueue()
      .subscribe(suc => {
        this.batchOrders = suc.response;
        this.noOrders = this.anyOrders(this.batchOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getCustomerOrdersInProcess() {
    this._ordersService.getCustomerOrdersInProcess()
      .subscribe(suc => {
        this.batchOrders = suc.response;
        this.noOrders = this.anyOrders(this.batchOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getCustomerOrdersCompleted() {
    this._ordersService.getCustomerOrdersCompleted()
      .subscribe(suc => {
        this.batchOrders = suc.response;
        this.noOrders = this.anyOrders(this.batchOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getRejectedCustomerOrders() {
    this._ordersService.getRejectedCustomerOrders()
      .subscribe(suc => {
        this.deletedOrders = suc.response;
        this.noOrders = this.anyOrders(this.deletedOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getOrderRejectedComment(orderId: number) {
    this._convService.getRejectedOrderComment(orderId)
      .subscribe(suc => {
        var data = suc.response["message"];
        this.displayOrderRejectedReason(data);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  displayOrderRejectedReason(message: string) {
    let converseModal = this.modalCtrl.create(ConverseComponent, {
      data: {
        comments: message, mode: "readOnly",
        heading: "Reason for Rejection", submitButtonText: "Reject"
      }
    });
    converseModal.present();
  }
}
