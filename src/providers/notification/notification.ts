import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignalRConnection } from '../../../node_modules/ng2-signalr';

@Injectable()
export class NotificationProvider {

  public connection: SignalRConnection;
  constructor(public http: HttpClient) {
  }
}
