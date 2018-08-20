import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private aboutDialogref:MatDialogRef<AboutUsComponent>) { }

  ngOnInit() {

  }

  closeDialog(){
    this.aboutDialogref.close();
  }

}
