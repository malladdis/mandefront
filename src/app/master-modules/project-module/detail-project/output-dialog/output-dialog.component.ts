import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-output-dialog',
  templateUrl: './output-dialog.component.html',
  styleUrls: ['./output-dialog.component.scss']
})
export class OutputDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OutputDialogComponent>) { }

  ngOnInit() {
  }

}
