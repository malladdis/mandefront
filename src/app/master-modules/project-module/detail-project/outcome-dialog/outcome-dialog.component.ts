import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../../project.service';

@Component({
  selector: 'app-outcome-dialog',
  templateUrl: './outcome-dialog.component.html',
  styleUrls: ['./outcome-dialog.component.scss']
})
export class OutcomeDialogComponent implements OnInit {

  timePlans: Array<Object>;
  tabs = ['Outcome', 'Output', 'Indicator'];
  comps = [''];
  constructor(public dialogRef: MatDialogRef<OutcomeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectservice: ProjectService) { }

  ngOnInit() {
    this.projectservice.getTimePlans().subscribe(data => {
      this.timePlans = data['data'];
    });
  }

  submit(form) {
    this.projectservice.addOutcome(form, this.data).subscribe(data => {
      console.log(data);
      form.resetForm();
    });
  }
  submitOutput(form) {}
}
