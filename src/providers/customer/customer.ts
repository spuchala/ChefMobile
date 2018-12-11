import { Injectable } from '@angular/core';
import { settings } from '../../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomerProvider {
  constructor(private http: HttpClient) { }

  createCustomer(customer: any): Observable<any> {
    return this.http.post(settings.chefService + "/api/customer/create", customer)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  updateCustomer(customer: any): Observable<any> {
    return this.http.post(settings.chefService + "/api/customer/update", customer)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  getCustomerAccount(userId: string) {
    var url = settings.chefService + "/api/customers/" + userId + "/account";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }
}
