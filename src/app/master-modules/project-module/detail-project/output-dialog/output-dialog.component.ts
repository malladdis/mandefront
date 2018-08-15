import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-output-dialog',
  templateUrl: './output-dialog.component.html',
  styleUrls: ['./output-dialog.component.scss']
})
export class OutputDialogComponent implements OnInit {
  timePlans: Array<Object>;
  constructor(public dialogRef: MatDialogRef<OutputDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectservice: ProjectService) { }

  ngOnInit() {
    this.projectservice.getTimePlans().subscribe(data => {
      this.timePlans = data['data'];
    });
  }
  submitOutput(form) {}
}
