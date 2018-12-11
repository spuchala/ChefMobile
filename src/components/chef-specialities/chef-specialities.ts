import { Component, Input } from '@angular/core';
import { ToastProvider } from '../../providers/toast/toast';
import { MenuProvider } from '../../providers/menu/menu';
import { ChefProvider } from '../../providers/chef/chef';
import { ModalController } from 'ionic-angular';
import { AddChefSpecialityComponent } from '../../components/add-chef-speciality/add-chef-speciality';

@Component({
  selector: 'chef-specialities',
  templateUrl: 'chef-specialities.html'
})
export class ChefSpecialitiesComponent {

  @Input() chefId: number;
  @Input() disabled: boolean;
  @Input() specialities: any;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  constructor(private _toastService: ToastProvider, private _menuService: MenuProvider,
    private _chefService: ChefProvider, private _modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.getChefSpecialities();
  }

  getChefSpecialities() {
    this._chefService.getChefSpecialities(this.chefId)
      .subscribe(suc => {
        this.specialities = suc.response;
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  removeSpeciality(speciality: any) {
    this._menuService.removeChefSpeciality(speciality)
      .subscribe(suc => {
        this._toastService.presentToast("Specialities updated.");
      },
        err => {
          this._toastService.presentToast("Sorry! Something went wrong.");
        });

    let index = this.specialities.findIndex((item => item.id == speciality.id));
    if (index >= 0) {
      this.specialities.splice(index, 1);
    }
  }

  addSpeciality() {
    let addSpecialityModal = this._modalCtrl.create(AddChefSpecialityComponent);
    addSpecialityModal.onDidDismiss(data => {
      if (data && data != "") {
        var speciality = { id: null, title: data.trim(), description: data.trim() };
        this._menuService.addChefSpeciality(speciality)
          .subscribe(suc => {
            speciality.id = suc.res["id"];
            this.specialities.push(speciality);
            this._toastService.presentToast("Specialities updated.");
          },
            err => {
              this._toastService.presentToast("Sorry! Something went wrong.");
            });
      }
    });
    addSpecialityModal.present();
  }
}
