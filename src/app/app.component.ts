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
      } else if (response.data.type == 'webpackOk') {
        this.gasStore.executeGasMethod('initial', {});
      }
      console.log(response);
    });
  }

  public get isProgress(): boolean {
    return this.gasStore.isProgress;
  }

  title = 'mitigation_sheet_side_bar';

  contents = [
    {
      title: '選択ジョブ列の一括表示',
      subTitle: 'bulk show column',
      method: 'hiddenColumnSelectJobs',
      image: '../assets/bulk_row.png',
    },
    {
      title: 'AA行の一括非表示',
      subTitle: 'Hide AA row',
      method: 'hiddenAARows',
      image: '../assets/bulk_row.png',
    },
    {
      title: '軽減一覧のテキスト表示',
      subTitle: 'perty buff list display',
      method: 'buffTimeLinePrintText',
      image: '../assets/bulk_row.png',
    },
    // {
    //   title: "logs API key の設定",
    //   subTitle: "setting logs api key",
    // method: "buffTimeLinePrintText",
    // image: "../assets/bulk_row.png",
    // },
    // {
    //   title: "logs タイムラインの読み込み",
    //   subTitle: "generate timeline from logs",
    // method: "buffTimeLinePrintText",
    // image: "../assets/bulk_row.png",
    // },
    {
      title: 'スペスペタイムラインファイルのダウンロード',
      subTitle: 'download xml act plugins "SpecialSpellTimer"',
      method: 'viewSpecialSpellTimerXmlDownloadDialog',
      image: '../assets/bulk_row.png',
    },
  ];
}
