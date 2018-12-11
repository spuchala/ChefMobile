import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { settings } from '../../settings/settings';

@Injectable()
export class ConversationProvider {
  constructor(private http: HttpClient) { }

  getRejectedOrderComment(orderId: number) {
    var url = settings.chefService + "/api/conversations/orders/" + orderId + "/reject";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }
}
