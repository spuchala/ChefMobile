import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChefCommentsComponent } from '../../components/chef-comments/chef-comments';

@IonicPage()
@Component({
  selector: 'page-chef-comment',
  templateUrl: 'chef-comment.html',
})
export class ChefCommentPage {

  @ViewChild(ChefCommentsComponent)
  chefCommentsComponent: ChefCommentsComponent;
  chefId: number;
  commentsAdded: Array<boolean>;
  commentsMode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _storageService: Storage) {
  }

  ionViewDidLoad() {
    this.commentsMode = "account";
    this.commentsAdded = [];
    this._storageService.get('id').then((id) => {
      if (id) {
        this.chefId = id;
      }
    });
  }

  addComment() {
    this.chefCommentsComponent.addComment();
  }
}
