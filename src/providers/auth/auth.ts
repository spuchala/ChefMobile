import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {settings} from '../../settings/settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthProvider {
  public user: any;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    var input = "grant_type=password&username=" + user.email + ';' + user.password + "&password=" + user.password;

    return this.http.post(settings.chefService + "/token", input,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  getUser(userId: string, role: string) {
    var url = "";
    if (role == "Chef")
      url = settings.chefService + "/api/chefs/" + userId + "/account";
    else if (role == "Customer")
      url = settings.chefService + "/api/customer/" + userId + "/account";

    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }
}
