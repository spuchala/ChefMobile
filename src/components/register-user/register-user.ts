import { Component, Input, Output, EventEmitter } from '@angular/core';
import {StatesProvider} from '../../providers/states/states';

@Component({
  selector: 'register-user',
  templateUrl: 'register-user.html',
  providers : [StatesProvider]
})
export class RegisterUserComponent {

  states: Array<any>;
  @Input() user: any;
  @Input() userType: string;
  @Input() disabled: boolean;
  @Input() mode: string;
  @Output() onRegistered = new EventEmitter<boolean>();
  phoneRegex: any;

  constructor(private _statesService: StatesProvider) {
    this.user = {};
    this.phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  }

  ngOnInit() {
    this.states = this._statesService.getStates();
  }
}
