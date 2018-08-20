import { ModelsService } from '../services/models.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-permission-dialog',
  templateUrl: './permission-dialog.component.html',
  styleUrls: ['./permission-dialog.component.scss']
})
export class PermissionDialogComponent implements OnInit {
  private models:Array<any>=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private dialogRef:MatDialogRef<PermissionDialogComponent>,private modelHttp:ModelsService) { }

  ngOnInit() {
    this.modelHttp.index()
    .subscribe((data:Array<any>)=>{
      this.models=data;
      console.log(data[0]['name']);
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
