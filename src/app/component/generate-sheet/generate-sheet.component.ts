import { Component } from '@angular/core';
import { GasStore } from 'src/app/store/gas.store';

@Component({
  selector: 'app-generate-sheet',
  templateUrl: './generate-sheet.component.html',
  styleUrls: ['./generate-sheet.component.css'],
})
export class GenerateSheetComponent {
  constructor(private gasStore: GasStore) {}

  public get hasApiKey(): boolean {
    return this.gasStore.hasApiKey;
  }

  public settingApiKey() {
    this.gasStore.executeGasMethod('settingApiKey', {});
  }

  public generateMitigationSheet() {
    this.gasStore.executeGasMethod('generateMitigationSheet', {});
  }
}
