import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'add-chef-speciality',
  templateUrl: 'add-chef-speciality.html'
})
export class AddChefSpecialityComponent {

  speciality: string;
  constructor(public viewCtrl: ViewController) {
    this.speciality = "";
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addSpeciality() {
    this.viewCtrl.dismiss(this.speciality);
  }
}
