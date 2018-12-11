import { Component, Input } from '@angular/core';
import { ReviewsProvider } from '../../providers/reviews/reviews';
import { ToastProvider } from '../../providers/toast/toast';

@Component({
  selector: 'chef-reviews',
  templateUrl: 'chef-reviews.html'
})

export class ChefReviewsComponent {
  reviews: any;
  @Input() chefId: number;
  constructor(private _reviewsService: ReviewsProvider,
    private _snackBar: ToastProvider) {
  }

  ngOnInit() {
    this.getChefReviews(this.chefId);
  }

  getChefReviews(chefId: number) {
    this._reviewsService.getChefReviews(chefId)
      .subscribe(suc => {
        this.reviews = suc.response;
      },
        err => {
          this._snackBar.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }
}
