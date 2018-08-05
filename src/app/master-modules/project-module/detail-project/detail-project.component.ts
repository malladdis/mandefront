import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../project.service';
import {OverviewComponent} from './overview/overview.component';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {
  id: number;
  pro: any;
  title: string;
  overviewLink: string;
  activityLink: string;
  logframLink: string;
  constructor(private route: ActivatedRoute, private projectserivce: ProjectService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.pro = data['data'];
        this.title = data['data']['title'];
        console.log(data['data']);
        this.overviewLink = `/auth/master-modules/project/detail/${data['data']['id']}/overview/${data['data']['id']}`;
        this.activityLink = `/auth/master-modules/project/detail/${data['data']['id']}/activities/${data['data']['id']}`;
        this.logframLink = `/auth/master-modules/project/detail/${data['data']['id']}/logframe/${data['data']['id']}`;
      });
    });
  }
}
