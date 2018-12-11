import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'add-chef-comment',
  templateUrl: 'add-chef-comment.html'
})
export class AddChefCommentComponent {
  constructor(public viewCtrl: ViewController) {
  }

  commentsForCustomer: String;
  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.viewCtrl.dismiss(this.commentsForCustomer);
  }

}
