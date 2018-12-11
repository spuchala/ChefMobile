import { Injectable } from '@angular/core';
import { settings } from '../../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReviewsProvider {
  constructor(private http: HttpClient) { }

  getChefReviews(chefId: number) {
    var url = settings.chefService + "/api/chefs/" + chefId + "/reviews";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }
}
