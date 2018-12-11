import { Injectable } from '@angular/core';
import { settings } from '../../settings/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MenuProvider {
  constructor(private http: HttpClient) { }

  getChefMenu(chefId: number) {
    var url = settings.chefService + "/api/chefs/" + chefId + "/menu";
    return this.http.get(url)
      .map((response) => {
        return { response };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  editMenuItem(menuItem: any) {
    return this.http.post(settings.chefService + "/api/menu/update", menuItem)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  addMenuItem(menuItem: any) {
    return this.http.post(settings.chefService + "/api/menu/add", menuItem)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  addChefSpeciality(speciality: any) {
    return this.http.post(settings.chefService + "/api/menu/specialities/add", speciality)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  removeMenuItem(menuItem: any) {
    return this.http.post(settings.chefService + "/api/menu/remove", menuItem)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }

  removeChefSpeciality(speciality: any) {
    return this.http.post(settings.chefService + "/api/menu/specialities/remove", speciality)
      .map((res: Response) => {
        return { "res": res };
      })
      .catch((e: any) => {        
        return Observable.throw({ "Errors": e });
      });
  }
}
