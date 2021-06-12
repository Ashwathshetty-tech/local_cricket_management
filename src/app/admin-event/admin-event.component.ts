import { Component, AfterViewInit,ViewChild,OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {EventsService} from '../Services/events.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialog} from '../admin-event/dialog.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
      `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
      `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit{
  events : any = [];
  // allEvents : any = [];
  displayedColumns=['eventName','organizer','place','startDate','contact','approval'];
  dataSource:MatTableDataSource<any>;
  constructor(private eventservice:EventsService,public dialog: MatDialog,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.loadEventData();
  }
  loadEventData(){
    this.eventservice.getAdminEvents().subscribe(res=>{
      console.log('Email details',res);
      this.events = res;

      // this.mails.forEach(element => {
      //   if(element.from === this.currentUser.email){
      //     this.userMails.push(element);
      //   }
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      });
  }
  openDialog(id:any) {
    console.log("id",id);
    const dialogRef = this.dialog.open(DialogContentExampleDialog,
    { width:'600px',
      height:'600px',
      data:{events:this.events[id]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result==true){
        console.log("true");
        this.eventservice.updateAdminEvents(this.events[id]).subscribe(res=>{
          this.loadEventData();
        })

      }
      else{
        console.log("false");
      }
    });

  }
}
