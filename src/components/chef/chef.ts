import { Component, Input } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ChefDetailsPage } from '../../pages/chef-details/chef-details';

@Component({
  selector: 'chef-info',
  templateUrl: 'chef.html'
})
export class ChefComponent {

  @Input()
  public chef: any;
  @Input()
  public interactWithChef: boolean;

  public starRating: number;

  constructor(private _navCtrl: NavController,
    private _modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.starRating = this.chef.rating;
  }

  showChefDetails() {
    this._navCtrl.push(ChefDetailsPage, { chefId: this.chef.id });
    //let chefDetailsModal = this._modalCtrl.create(ChefDetailsPage,{ chefId: this.chef.id });
    //chefDetailsModal.present();
  }
}
