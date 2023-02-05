import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    window.addEventListener('message', (response) => {
      if (response.data === 'endProgress') {
        this.isProgress = false;
      }
    });
  }

  title = 'mitigation_sheet_side_bar';
  isProgress = false;

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

  public contentClick(method: string) {
    this.isProgress = true;
    window?.parent?.postMessage(method, '*');
  }
}
