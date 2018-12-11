import { Component, Input } from '@angular/core';
import { ToastProvider } from '../../providers/toast/toast';
import { ChefProvider } from '../../providers/chef/chef';

@Component({
  selector: 'chef-preferences',
  templateUrl: 'chef-preferences.html'
})
export class ChefPreferencesComponent {

  @Input() chefId: number;
  @Input() mode: string;
  chefPreferences: any;

  constructor(private _chefService: ChefProvider,
    private _toastService: ToastProvider) {
  }

  ngOnInit() {
    this.getChefPreferences();
  }

  getChefPreferences() {
    this._chefService.getChefPreferences(this.chefId)
      .subscribe(suc => {
        this.chefPreferences = suc.response;
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }

  updateChefPreferences(chefPreference: any, index) {
    this._chefService.updateChefPreference(chefPreference)
      .subscribe(suc => {
        chefPreference.Answer = !chefPreference.Answer;
        this._toastService.presentToast("Preferences Updated.");
      },
        err => {
          this._toastService.presentToast("Something went wrong.Sorry! Please try again.");
        });
  }
}
