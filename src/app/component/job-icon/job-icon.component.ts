import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobModel } from 'src/app/model/job';

@Component({
  selector: 'app-job-icon',
  templateUrl: './job-icon.component.html',
  styleUrls: ['./job-icon.component.css'],
})
export class JobIconComponent {
  @Input() jobList: JobModel[] = [];
  @Input() checkJobList: string[] = [];
  @Input() roll: string = '';
  @Input() rollIconUrl: string = '';
  @Output('jobIconClick') jobIconClick: EventEmitter<any> = new EventEmitter();

  public onJobIconClick(jobName: string) {
    this.jobIconClick.emit(jobName);
  }

  public isJobIconCheck(jobname: string) {
    return this.checkJobList.includes(jobname);
  }
}
