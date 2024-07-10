import { Injectable } from '@angular/core';
import { JobModel } from '../model/job';
import { JobUtil } from '../util/job.util';
import { Roll_JP } from '../enum/roll';

@Injectable()
export class JobStore {
  constructor() {}

  public get jobList(): JobModel[] {
    return JobUtil.jobList;
  }

  public get tankList(): JobModel[] {
    return JobUtil.jobList.filter((val) => val.roll == Roll_JP.TANK);
  }

  public get healerList(): JobModel[] {
    return JobUtil.jobList.filter((val) => val.roll == Roll_JP.HEALER);
  }

  public get meleeList(): JobModel[] {
    return JobUtil.jobList.filter((val) => val.roll == Roll_JP.MELEE);
  }

  public get physicalRangeList(): JobModel[] {
    return JobUtil.jobList.filter((val) => val.roll == Roll_JP.PHYSICAL_RANGE);
  }

  public get magicalRangeList(): JobModel[] {
    return JobUtil.jobList.filter((val) => val.roll == Roll_JP.MAGICAL_RANGE);
  }
}
