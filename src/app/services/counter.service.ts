import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;
  
  constructor() { }

  addCountActive() {
    this.activeCounter++;
    console.log("Set to Active: "+this.inactiveCounter);
  }

  addCountInactive() {
    this.inactiveCounter++;
    console.log("Set to Inactive: "+this.inactiveCounter);
  }
}
