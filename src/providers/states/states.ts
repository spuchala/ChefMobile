import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatesData } from '../../data/states';

@Injectable()
export class StatesProvider {

  private statesData: StatesData = new StatesData();

  constructor() { }

  getStates() {
    return this.statesData.states;
  }

}
