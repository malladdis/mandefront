import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-output-tree',
  templateUrl: './output-tree.component.html',
  styleUrls: ['./output-tree.component.scss']
})
export class OutputTreeComponent implements OnInit {
  icon: string;
  @Input() id;
  output: any;
  constructor(private projectservice: ProjectService) { }

  ngOnInit() {
    this.icon = 'folder';
    this.getOutputs(this.id);
  }
  getOutputs(id) {
    this.projectservice.getOutputs(id).subscribe(data => {
      this.output = data['data'];
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
