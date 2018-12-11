import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ChefProvider } from '../../providers/chef/chef';
import { ToastProvider } from '../../providers/toast/toast';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {

  chefs: any;
  showChefs: boolean;
  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _chefService: ChefProvider, private _toastProvider: ToastProvider,
    private view: ViewController, private _searchService: SearchProvider) {
  }

  ionViewWillEnter() {
    this.view.showBackButton(true);
  }

  ionViewDidLoad() {
    var search = this._searchService.search;
    // let what = this.navParams.get("what");
    // let where = this.navParams.get("where");
    let what = search.what;
    let where = search.where;
    this.getChefs(what, where);
  }

  getChefs(what: string, where: string) {
    this._chefService.getChefs(what, where)
      .subscribe(suc => {
        this.chefs = suc.response;
        if (this.chefs != null && this.chefs.length > 0)
          this.showChefs = true;
      },
        err => {
          this._toastProvider.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }
}
