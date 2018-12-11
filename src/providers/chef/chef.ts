import { Injectable } from '@angular/core';
import { settings } from '../../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ChefProvider {
  chefs: Array<any>;
  chefMicro: any;

  constructor(private http: HttpClient) {
  }

  getChefs(what: string, where: string) {
    var url = settings.chefService + "/api/chefs/search/" + what + "/" + where;
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getChefDetails(chefId: number) {
    var url = settings.chefService + "/api/chefs/" + chefId;
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  createChef(chef: any): Observable<any> {
    return this.http.post(settings.chefService + "/api/chef/create", chef)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        return Observable.throw({ "Errors": e });
      });
  }

  updateChef(chef: any): Observable<any> {
    return this.http.post(settings.chefService + "/api/chef/update", chef)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getChefAccount(userId: string) {
    var url = settings.chefService + "/api/chefs/" + userId + "/account";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getChefSpecialities(chefId: number) {
    var url = settings.chefService + "/api/chefs/" + chefId + "/specialities";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getChefPreferences(chefId: number) {
    var url = settings.chefService + "/api/chefs/" + chefId + "/preferences";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  updateChefPreference(preference: any) {
    return this.http.post(settings.chefService + "/api/chefs/preference/update", preference)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  getChefComments(chefId: number) {
    var url = settings.chefService + "/api/chefs/" + chefId + "/comments";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  addChefComment(comment: any) {
    return this.http.post(settings.chefService + "/api/chefs/comment/add", comment)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  updateChefComment(comment: any) {
    return this.http.post(settings.chefService + "/api/chefs/comment/update", comment)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  markBatchOrdersAsViewed(batchId: number) {
    return this.http.post(settings.chefService + "/api/chef/batchOrders/" + batchId + "/markAsViewed", null)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  removeChefComment(comment: any) {
    return this.http.put(settings.chefService + "/api/chefs/comment/remove", comment)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {
        console.log(e.status);
        return Observable.throw({ "Errors": e });
      });
  }

  isChefProfileComplete() {
    var url = settings.chefService + "/api/chef/profile/isComplete";
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
