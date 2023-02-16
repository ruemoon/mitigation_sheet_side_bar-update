import { Component } from '@angular/core';
import { GasStore } from 'src/app/store/gas.store';

@Component({
  selector: 'app-hide-aa',
  templateUrl: './hide-aa.component.html',
  styleUrls: ['./hide-aa.component.css'],
})
export class HideAaComponent {
  constructor(private gasStore: GasStore) {}
  public clickHideAAButton() {
    this.gasStore.executeGasMethod('hiddenAARows', {});
  }
}
