import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailProjectComponent} from '../detail-project.component';
import {OverviewComponent} from '../overview/overview.component';
import {LogFrameComponent} from '../log-frame/log-frame.component';
import {OutcomeTreeComponent} from '../log-frame/outcome-tree/outcome-tree.component';
import {IndicatorTreeComponent} from '../log-frame/indicator-tree/indicator-tree.component';
import {ActivityTreeComponent} from '../log-frame/activity-tree/activity-tree.component';
import {OutputTreeComponent} from '../log-frame/output-tree/output-tree.component';
import {ActivityComponent} from '../activity/activity.component';
import {MaterialModule} from '../../../../material.module';
import {DetailRoutingModule} from './detail-routing/detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DetailRoutingModule
  ],
  declarations: [DetailProjectComponent, OverviewComponent,
    ActivityComponent, LogFrameComponent, OutcomeTreeComponent,
    IndicatorTreeComponent, ActivityTreeComponent, OutputTreeComponent],
  exports: [DetailProjectComponent, OverviewComponent,
    ActivityComponent, LogFrameComponent, OutcomeTreeComponent,
    IndicatorTreeComponent, ActivityTreeComponent, OutputTreeComponent]
})
export class DetailModule { }
