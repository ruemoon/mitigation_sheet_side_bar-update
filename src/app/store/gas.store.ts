import { Injectable } from '@angular/core';

@Injectable()
export class GasStore {
  private _isProgress = false;

  constructor() {}

  public get isProgress(): boolean {
    return this._isProgress;
  }

  public set isProgress(value: boolean) {
    this._isProgress = value;
  }

  public executeGasMethod(method: string, option: Object) {
    this.isProgress = true;
    window?.parent?.postMessage({ method: method, option: option }, '*');
  }
}
