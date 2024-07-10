import { Component } from '@angular/core';
import { Assign, Type } from 'src/app/enum/skillType';
import { JobModel } from 'src/app/model/job';
import { GasStore } from 'src/app/store/gas.store';
import { JobStore } from 'src/app/store/job.store';

interface AssignCheckbox {
  key: Assign;
  check: boolean;
}

interface TypeCheckbox {
  key: Type;
  check: boolean;
}

@Component({
  selector: 'app-select-job',
  templateUrl: './select-job.component.html',
  styleUrls: ['./select-job.component.css'],
})
export class SelectJobComponent {
  private _isAssignSelf: boolean = false;
  private _isAssignEnemy: boolean = true;
  private _isAssignSingleParty: boolean = false;
  private _isAssignRangeParty: boolean = true;
  private _isTypeMitigation: boolean = true;
  private _isTypeBarrier: boolean = true;
  private _isTypeHeal: boolean = false;

  constructor(private _jobStore: JobStore, private gasStore: GasStore) {}

  public get tankList(): JobModel[] {
    return this._jobStore.tankList;
  }

  public get healerList(): JobModel[] {
    return this._jobStore.healerList;
  }

  public get meleeList(): JobModel[] {
    return this._jobStore.meleeList;
  }

  public get physicalRangeList(): JobModel[] {
    return this._jobStore.physicalRangeList;
  }

  public get magicalRangeList(): JobModel[] {
    return this._jobStore.magicalRangeList;
  }

  public get isAssignSelf(): boolean {
    return this._isAssignSelf;
  }

  public set isAssignSelf(value: boolean) {
    this._isAssignSelf = value;
  }

  public get isAssignEnemy(): boolean {
    return this._isAssignEnemy;
  }

  public set isAssignEnemy(value: boolean) {
    this._isAssignEnemy = value;
  }

  public get isAssignSingleParty(): boolean {
    return this._isAssignSingleParty;
  }

  public set isAssignSingleParty(value: boolean) {
    this._isAssignSingleParty = value;
  }

  public get isAssignRangeParty(): boolean {
    return this._isAssignRangeParty;
  }

  public set isAssignRangeParty(value: boolean) {
    this._isAssignRangeParty = value;
  }

  public get isTypeMitigation(): boolean {
    return this._isTypeMitigation;
  }

  public set isTypeMitigation(value: boolean) {
    this._isTypeMitigation = value;
  }

  public get isTypeBarrier(): boolean {
    return this._isTypeBarrier;
  }

  public set isTypeBarrier(value: boolean) {
    this._isTypeBarrier = value;
  }

  public get isTypeHeal(): boolean {
    return this._isTypeHeal;
  }

  public set isTypeHeal(value: boolean) {
    this._isTypeHeal = value;
  }

  public onJobIconClick(jobName: string) {
    const job = this._jobStore.jobList.find((job) => job.name.jp === jobName);
    if (job) {
      job.check = !job.check;
    }
  }

  public clickHideColumnJobList() {
    this.gasStore.executeGasMethod('hideSelectJobColumn', {
      jobList: this._jobStore.jobList,
      assignList: this.createAssignChecboxes(),
      typeList: this.createTypeChecboxes(),
    });
  }

  public clickResetJobList() {
    this._jobStore.jobList.forEach((job) => (job.check = false));
  }

  private createAssignChecboxes(): AssignCheckbox[] {
    return [
      {
        key: Assign.SELF,
        check: this._isAssignSelf,
      },
      {
        key: Assign.SINGLE_ENEMY,
        check: this._isAssignEnemy,
      },
      {
        key: Assign.RANGE_ENEMY,
        check: this._isAssignEnemy,
      },
      {
        key: Assign.SINGLE_PARTY,
        check: this._isAssignSingleParty,
      },
      {
        key: Assign.RANGE_PARTY,
        check: this._isAssignRangeParty,
      },
    ] as AssignCheckbox[];
  }

  private createTypeChecboxes(): TypeCheckbox[] {
    return [
      {
        key: Type.MITIGATION,
        check: this._isTypeMitigation,
      },
      {
        key: Type.BARRIER,
        check: this._isTypeBarrier,
      },
      {
        key: Type.HEAL,
        check: this._isTypeHeal,
      },
    ] as TypeCheckbox[];
  }
}
