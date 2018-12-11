import { Input, Component } from '@angular/core';
import { StatesProvider } from '../../providers/states/states';

@Component({
  selector: 'address',
  templateUrl: 'address.html'
})

export class AddressComponent {

  @Input() user: any;
  states: Array<any>;

  constructor(private _statesService: StatesProvider) {
    this.states = this._statesService.getStates();
  }
}
