import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {
  }

  async getItemAsync(source: string) {
    return await this.storage.get(source);
  }

  setItem(name: string, value: string) {
    this.storage.set(name, value);
  }

  logOutUser() {
    this.storage.remove("authorizationData");
  }

}
