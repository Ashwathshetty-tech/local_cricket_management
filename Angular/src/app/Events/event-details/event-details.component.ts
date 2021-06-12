import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../Services/image.service';
import {EventsService} from '../../Services/events.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  events:any;
  constructor(private imageService: ImageService,private route:Router,private eventservice:EventsService) { }
  asc=1;
  selected = 'startDate';
  searchText:String;
  ngOnInit() {
    // this.loadMockData();
    this.loadEventData();
  }
  // loadMockData(): void {
  //   this.imageService.fetchImages()
  //    .subscribe(images =>
  //     {this.events = images;
  //      console.log("events",this.events)
  //     });
  //  }
   loadEventData(){
    this.eventservice.getEventList().subscribe(res=>{
      this.events=res;
      console.log("EVENT DETAILS",this.events);
    })

   }
  openModal(event:any) {
    document.getElementById('myImg').setAttribute('src',event);
    document.getElementById('imgModal').style.display = "block";
   }
   closeModal() {
    document.getElementById('imgModal').style.display = "none";
   }
   Register(){
   this.route.navigate(['./eventRegister'])
   }

  onBookChange(selected){
    console.log("selected",selected);
    this.events.sort(this.compareValues(selected));
  }
  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  onKeypressEvent(){
    console.log("search Text",this.searchText)
    if(this.searchText==""){
      this.ngOnInit();
    }
    else if(this.searchText!="")
    {
      this.events=this.events.filter(res=>
        {
          return res.eventName.toLowerCase().match(this.searchText.toLowerCase());
        })
    }

  }
}
