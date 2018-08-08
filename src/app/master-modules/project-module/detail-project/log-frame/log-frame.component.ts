import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';
import {MatExpansionPanelState} from '@angular/material';

@Component({
  selector: 'app-log-frame',
  templateUrl: './log-frame.component.html',
  styleUrls: ['./log-frame.component.scss']
})
export class LogFrameComponent implements OnInit {

  project: any;
  step = 0;
  icon: string;
  outputs: Array<Object>;
  outcomeIndicators: Array<Object>;
  outputIndicators: Array<Object>;
  constructor(private route: ActivatedRoute, private projectserivce: ProjectService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.project = data['data'];
        console.log(data['data']);
      });
    });
    this.icon = 'folder_open';
  }
  getOutputs(id) {
    this.projectserivce.getOutputsByOutcome(id).subscribe(data => {
      this.outputs = data['data'];
      this.projectserivce.getIndicatorsByOutcome(id).subscribe(response => {
          this.outcomeIndicators = response['data'];
          console.log(response);
      });
      console.log(data);
    });
  }
  getIndicatorsByOutput(id) {
    this.projectserivce.getIndicatorsByOutput(id).subscribe(data => {
      this.outputIndicators = data['data'];
      console.log(data);
    });
  }
  toggleIcon() {
    if (this.icon === 'folder') {
      this.icon = 'folder_open';
    } else {
      this.icon = 'folder';
    }
    console.log(this.icon);
  }
}
