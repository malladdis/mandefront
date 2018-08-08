import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DetailProjectComponent} from '../../detail-project.component';
import {ActivityComponent} from '../../activity/activity.component';
import {LogFrameComponent} from '../../log-frame/log-frame.component';
import {OverviewComponent} from '../../overview/overview.component';
import {AuthComponent} from '../../../../../auth/auth.component';

const detailRoutes: Routes = [{
  path: '', component: DetailProjectComponent, children: [
    {path: 'overview/:id', component: OverviewComponent},
    {path: 'activities/:id', component: ActivityComponent},
    {path: 'logframe/:id', component: LogFrameComponent},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(detailRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DetailRoutingModule {
}
