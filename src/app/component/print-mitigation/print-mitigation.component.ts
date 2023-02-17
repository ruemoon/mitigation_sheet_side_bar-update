import { Component } from '@angular/core';
import { GasStore } from 'src/app/store/gas.store';

@Component({
  selector: 'app-print-mitigation',
  templateUrl: './print-mitigation.component.html',
  styleUrls: ['./print-mitigation.component.css'],
})
export class PrintMitigationComponent {
  private _selectChat: string = '/p';
  private _selectChatOptions = [
    { label: 'none', value: '' },
    { label: '/party', value: '/p' },
    { label: '/echo', value: '/e' },
    { label: '/yell', value: '/y' },
  ];
  constructor(private gasStore: GasStore) {}
  public clickPrintMitigation() {
    this.gasStore.executeGasMethod('buffTimeLinePrintText', {
      selectChat: this.selectChat,
    });
  }

  public get selectChatOptions() {
    return this._selectChatOptions;
  }

  public get selectChat() {
    return this._selectChat;
  }

  public set selectChat(value) {
    this._selectChat = value;
  }
}
