import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { GasStore } from './store/gas.store';
import { JobStore } from './store/job.store';
import { Job_JP } from './enum/job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private gasStore: GasStore,
    private jobStore: JobStore
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    window.addEventListener('message', (response) => {
      console.log(response);
      if (response.data.method === 'endProgress') {
        this.gasStore.isProgress = false;
        this.gasStore.hasApiKey = response.data.option.hasApiKey;
        this.gasStore.existSettingSheet =
          response.data.option.existSettingSheet;
        response.data.option.viewJobList.forEach(
          (viewJob: { name: Job_JP; check: boolean }) => {
            const job = this.jobStore.jobList.find(
              (job) => job.name.jp === viewJob.name
            );
            if (job) {
              job.check = viewJob.check;
            }
          }
        );
        if (response.data.option.error) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: response.data.option.error.message,
            sticky: true,
          });
        }
      } else if (response.data.type == 'webpackOk') {
        this.gasStore.executeGasMethod('getInitialParam', {});
      }
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
