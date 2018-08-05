import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailProjectComponent} from '../detail-project.component';
import {ActivityComponent} from '../activity/activity.component';
import {LogFrameComponent} from '../log-frame/log-frame.component';
import {DetailRoutingModule} from './detail-routing/detail-routing.module';
import {MaterialModule} from '../../../../material.module';
import {OverviewComponent} from '../overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    MaterialModule
  ],
  declarations: [DetailProjectComponent, ActivityComponent, LogFrameComponent, OverviewComponent],
  exports: [DetailProjectComponent, ActivityComponent, LogFrameComponent, OverviewComponent]
})
export class DetailModule { }
