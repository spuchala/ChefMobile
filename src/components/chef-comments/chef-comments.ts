import { Component, Input } from '@angular/core';
import { ChefProvider } from '../../providers/chef/chef';
import { ToastProvider } from '../../providers/toast/toast';
import { ModalController } from 'ionic-angular';
import { AddChefCommentComponent } from '../../components/add-chef-comment/add-chef-comment';

@Component({
  selector: 'chef-comments',
  templateUrl: 'chef-comments.html'
})
export class ChefCommentsComponent {

  @Input() chefId: number;
  @Input() mode: string;
  @Input() refresh: Array<boolean>;
  comments: any;

  constructor(private _chefService: ChefProvider,
    private _toastService: ToastProvider, private _modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.getComments();
  }

  ngOnChanges() {
    this.getComments();
  }

  getComments() {
    this._chefService.getChefComments(this.chefId)
      .subscribe(suc => {
        this.comments = suc.response;
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  editComment(comment: any) {

  }

  addComment() {
    let addCommentsModal = this._modalCtrl.create(AddChefCommentComponent);
    addCommentsModal.onDidDismiss(data => {
      if (data && data != "") {
        var comments = data;
        this.addCommentSubscribe(comments);
      }
    });
    addCommentsModal.present();
  }

  addCommentSubscribe(comments: string) {
    var commentsData = { comment: comments };
    this._chefService.addChefComment(commentsData)
      .subscribe(suc => {
        var commentResponse = suc.res;
        this.comments.push(commentResponse);
        this._toastService.presentToast("Comments added.");
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });
  }

  removeComment(comment: any, index: number) {
    this._chefService.removeChefComment(comment)
      .subscribe(suc => {
        this.comments.splice(index, 1);
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }
}
