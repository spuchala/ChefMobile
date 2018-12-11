import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { settings } from '../../settings/settings';

@Injectable()
export class OrdersProvider {
  public orders: Array<any>;

  constructor(private http: HttpClient) {
  }

  createOrder(order: any) {
    if (!this.orders)
      this.orders = [];
    if (!order.id)
      order.id = this.orders.length + 1;
    this.orders.push(order);
  }

  addOrderToCustomerCart(customerId: string, order: any) {
    return this.http.post(settings.chefService + "/api/customer/cart/add", order)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        return Observable.throw({ "Errors": e });
      });
  }

  updateOrderInCustomerCart(customerId: string, order: any) {
    return this.http.post(settings.chefService + "/api/customer/cart/update", order)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        return Observable.throw({ "Errors": e });
      });
  }

  checkOutOrders(orders: any) {
    return this.http.post(settings.chefService + "/api/customer/orders/checkout", orders)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        return Observable.throw({ "Errors": e });
      });
  }

  removeOrderFromCustomerCart(customerId: string, order: any) {
    return this.http.delete(settings.chefService + "/api/customer/cart/" + order.id + "/remove")
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getOrders() {
    return this.orders;
  }

  getOrdersCount() {
    if (this.orders)
      return this.orders.length;
    else
      return 0;
  }

  removeOrder(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
    return this.orders;
  }

  getCustomerOrdersForChefInQueue() {
    var url = settings.chefService + "/api/chef/orders/inqueue";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getCustomerOrdersInQueue() {
    var url = settings.chefService + "/api/customer/orders/inqueue";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getCustomerOrdersForChefInProcess() {
    var url = settings.chefService + "/api/chef/orders/inprocess";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getCustomerOrdersInProcess() {
    var url = settings.chefService + "/api/customer/orders/inprocess";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getCustomerOrdersForChefCompleted() {
    var url = settings.chefService + "/api/chef/orders/completed";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getCustomerOrdersCompleted() {
    var url = settings.chefService + "/api/customer/orders/completed";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getRejectedCustomerOrdersForChef() {
    var url = settings.chefService + "/api/chef/orders/rejected";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getRejectedCustomerOrders() {
    var url = settings.chefService + "/api/customer/orders/rejected";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  rejectCustomerOrder(orderId: number, reason: string) {
    return this.http.post(settings.chefService + "/api/chef/orders/" + orderId + "/reject", { message: reason })
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        return Observable.throw({ "Errors": e });
      });
  }
}
