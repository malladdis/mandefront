import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../../../project.service';

@Component({
  selector: 'app-outcome-tree',
  templateUrl: './outcome-tree.component.html',
  styleUrls: ['./outcome-tree.component.scss'],
})
export class OutcomeTreeComponent implements OnInit {
  @Input() id;
  outcome: any;
  icon: string;
  constructor(private projectservice: ProjectService) { }

  ngOnInit() {
    this.icon = 'folder';
    this.getOutcomes(this.id);
  }

  getOutcomes(id) {
    this.projectservice.getOutcomes(id).subscribe(data => {
      this.outcome = data['data'];
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
