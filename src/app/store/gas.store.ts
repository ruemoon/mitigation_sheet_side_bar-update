import { Injectable } from '@angular/core';

@Injectable()
export class GasStore {
  private _isProgress = false;
  private _hasApiKey = false;
  private _existSettingSheet = false;

  constructor() {}

  public get isProgress(): boolean {
    return this._isProgress;
  }

  public set isProgress(value: boolean) {
    this._isProgress = value;
  }

  public get hasApiKey(): boolean {
    return this._hasApiKey;
  }

  public set hasApiKey(value: boolean) {
    this._hasApiKey = value;
  }

  public get existSettingSheet(): boolean {
    return this._existSettingSheet;
  }

  public set existSettingSheet(value: boolean) {
    this._existSettingSheet = value;
  }

  public executeGasMethod(method: string, option: Object) {
    this.isProgress = true;
    window?.parent?.postMessage({ method: method, param: option }, '*');
  }
}
