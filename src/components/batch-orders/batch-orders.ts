import { Component, Input } from '@angular/core';
import { ConverseComponent } from '../../components/converse/converse';
import { OrdersProvider } from '../../providers/orders/orders';
import { ChefProvider } from '../../providers/chef/chef';
import { ToastProvider } from '../../providers/toast/toast';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { OrderComponent } from '../order/order';

@Component({
  selector: 'batch-orders',
  templateUrl: 'batch-orders.html'
})
export class BatchOrdersComponent {

  @Input()
  batches: Array<any>;

  @Input()
  mode: string;

  @Input()
  ordersFor: string;

  allowActions: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    private _ordersService: OrdersProvider, private _chefService: ChefProvider,
    private _toastService: ToastProvider) {
  }

  ngOnInit() {
    if (this.mode === 'readOnly')
      this.allowActions = false;
    else
      this.allowActions = true;
  }

  viewOrder(batchId: number, order: any) {
    order.mode = "readOnly";
    var whenOldFormat = order.when;
    var when = new Date(order.when);
    order.when = when.toISOString();
    let orderModal = this.modalCtrl.create(OrderComponent, { data: order });
    orderModal.onDidDismiss(result => {
      order.when = whenOldFormat;
    });
    orderModal.present();
  }

  deleteOrder(batchId: number, order: any) {
    let converseModal = this.modalCtrl.create(ConverseComponent, {
      data: { batchId: batchId, mode: "", orderId: order.id, comments: "", heading: "Reason for Rejection", submitButtonText: "Reject" }
    });
    converseModal.onDidDismiss(result => {
      if (result) {
        this._ordersService.rejectCustomerOrder(result.orderId, result.comments)
          .subscribe(suc => {
            for (let batch of this.batches) {
              var index = batch.orders.map(o => o["id"]).indexOf(result.orderId);
              if (index >= 0) {
                batch.orders.splice(index, 1);

                break;
              }
            }

            this._toastService.presentToast("Order Rejected");
          },
            err => {
              this._toastService.presentToast("Sorry! Something went wrong.");
            });
      }
    });
    converseModal.present();
  };

  markBatchOrdersAsViewed(batch: any) {
    this._chefService.markBatchOrdersAsViewed(batch.id)
      .subscribe(suc => {
        batch.state.chefViewed = true;
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });
  }
}
