import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';
import { ToastProvider } from '../../providers/toast/toast';
import { ConverseComponent } from '../../components/converse/converse';
import { ConversationProvider } from '../../providers/conversation/conversation';

@IonicPage()
@Component({
  selector: 'page-chef-orders',
  templateUrl: 'chef-orders.html',
})
export class ChefOrdersPage {

  rootPage = ChefOrdersPage;
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
    this.userType = "Chef";
    var orderType = this._navParams.get('orderType');
    this.getCustomerOrdersForChef(orderType);
    this.noOrders = true;
  }

  getCustomerOrdersForChef(type) {
    switch (type) {
      case "In Queue":
        this.getCustomerOrdersForChefInQueue();
        break;
      case "In Process":
        this.getCustomerOrdersForChefInProcess();
        break;
      case "Completed":
        this.getCustomerOrdersForChefCompleted();
        break;
      case "Deleted":
        this.getRejectedCustomerOrdersForChef();
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

  getCustomerOrdersForChefInQueue() {
    this.mode = null;
    this._ordersService.getCustomerOrdersForChefInQueue()
      .subscribe(suc => {
        this.batchOrders = suc.response;
        this.noOrders = this.anyOrders(this.batchOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getCustomerOrdersForChefInProcess() {
    this.mode = "readOnly";
    this._ordersService.getCustomerOrdersForChefInProcess()
      .subscribe(suc => {
        this.batchOrders = suc.response;
        this.noOrders = this.anyOrders(this.batchOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getCustomerOrdersForChefCompleted() {
    this.mode = "readOnly";
    this._ordersService.getCustomerOrdersForChefCompleted()
      .subscribe(suc => {
        this.batchOrders = suc.response;
        this.noOrders = this.anyOrders(this.batchOrders);
      },
        err => {
          this._toastMgr.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  getRejectedCustomerOrdersForChef() {
    this.mode = "readOnly";
    this._ordersService.getRejectedCustomerOrdersForChef()
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
