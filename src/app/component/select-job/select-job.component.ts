import { Component } from '@angular/core';
import { GasStore } from 'src/app/store/gas.store';
import { JobStore } from 'src/app/store/job.store';

@Component({
  selector: 'app-select-job',
  templateUrl: './select-job.component.html',
  styleUrls: ['./select-job.component.css'],
})
export class SelectJobComponent {
  private _isContainsSoloSkill: boolean = false;

  constructor(private _jobStore: JobStore, private gasStore: GasStore) {}

  public get checkJobList(): string[] {
    return this.jobStore.checkJobList;
  }

  public set checkJobList(value: string[]) {
    this.jobStore.checkJobList = value;
  }

  public get isContainsSoloSkill(): boolean {
    return this._isContainsSoloSkill;
  }

  public set isContainsSoloSkill(value: boolean) {
    this._isContainsSoloSkill = value;
  }

  public get jobStore(): JobStore {
    return this._jobStore;
  }

  public jobIconClick(jobName: string) {
    if (this.checkJobList.includes(jobName)) {
      this.checkJobList = this.checkJobList.filter((val) => val != jobName);
    } else {
      this.checkJobList.push(jobName);
    }
  }

  public clickHideColumnJobList() {
    const hideJobList: string[] = [];
    if (this._jobStore.checkJobList.length) {
      this._jobStore.jobList.forEach((job) => {
        if (!this._jobStore.checkJobList.includes(job.name_jp)) {
          hideJobList.push(job.name_jp);
        }
      });
    }
    this.gasStore.executeGasMethod('hideSelectJobColumn', {
      jobList: hideJobList,
      skillList: this.isContainsSoloSkill ? [] : this._jobStore.soloSkillList,
      isNotChecked: this._jobStore.checkJobList.length === 0,
    });
  }

  public clickResetJobList() {
    this.jobStore.checkJobList = [];
  }
}
