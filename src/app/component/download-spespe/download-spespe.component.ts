import { Component } from '@angular/core';
import { GasStore } from 'src/app/store/gas.store';

@Component({
  selector: 'app-download-spespe',
  templateUrl: './download-spespe.component.html',
  styleUrls: ['./download-spespe.component.css'],
})
export class DownloadSpespeComponent {
  constructor(private gasStore: GasStore) {}
  public downloadXmlButton() {
    this.gasStore.executeGasMethod(
      'viewSpecialSpellTimerXmlDownloadDialog',
      {}
    );
  }
}
