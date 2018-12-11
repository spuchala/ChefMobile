import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { mergeMap } from 'rxjs/operators/mergeMap';

@Injectable()
export class ChefInterceptor implements HttpInterceptor {
    authData: any;

    constructor(public storage: Storage) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return fromPromise(this.getToken()).pipe(
            mergeMap(token => {
                req = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + token)
                });
                return next.handle(req);
            }));
    }

    getToken(): Promise<any> {
        return this.storage.get('access_token');
    }
}