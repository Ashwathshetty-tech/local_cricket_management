import {Component,OnInit,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import{MAT_DIALOG_DATA} from '@angular/material'
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./admin-event.component.css']
})
export class DialogContentExampleDialog implements OnInit  {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
  ngOnInit(){
  console.log("data",this.data);
  }
}
