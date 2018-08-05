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
  icon = 'folder';
  constructor(private route: ActivatedRoute, private projectserivce: ProjectService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectserivce.show(+params['id']).subscribe(data => {
        this.project = data['data'];
        console.log(data['data']);
      });
    });
  }
  setIcon() {
    if (this.icon === 'folder') {
      this.icon = 'open-folder';
    }
    this.icon  = 'folder';
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
