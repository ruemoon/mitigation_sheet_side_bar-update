import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { GasStore } from './store/gas.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private gasStore: GasStore
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    window.addEventListener('message', (response) => {
      if (response.data.method === 'endProgress') {
        this.gasStore.isProgress = false;
        this.gasStore.hasApiKey = response.data.option.hasApiKey;
        this.gasStore.existSettingSheet =
          response.data.option.existSettingSheet;
      } else if (response.data.type == 'webpackOk') {
        this.gasStore.executeGasMethod('initial', {});
      }
      console.log(response);
    });
  }

  public get isProgress(): boolean {
    return this.gasStore.isProgress;
  }

  public get existSettingSheet(): boolean {
    return this.gasStore.existSettingSheet;
  }

  title = 'mitigation_sheet_side_bar';
}
