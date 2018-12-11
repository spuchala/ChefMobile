import { Component } from '@angular/core';
import { App,ViewController, NavController } from 'ionic-angular';
import { SearchResultsPage } from '../../pages/search-results/search-results';
import { SearchProvider } from '../../providers/search/search';

@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  search: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController,
    private _searchService: SearchProvider,public appCtrl: App) {
    this.search = {};
  }

  searchChefs() {
    this._searchService.search = this.search;
    // this.navCtrl.push(SearchResultsPage, {
    //   what: this.search.what,
    //   where: this.search.where
    // });
    this.viewCtrl.dismiss(this.search);
    //this.navCtrl.setRoot(SearchResultsPage);
    //this.appCtrl.getRootNav().push(SearchResultsPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
