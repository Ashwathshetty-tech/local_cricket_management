import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../Services/image.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  events=[];
  constructor(private imageService: ImageService,private route:Router) { }
  asc=1;
  selected = 'startDate';
  searchText='';
  ngOnInit() {
    this.loadMockData();
  }
  loadMockData(): void {
    this.imageService.fetchImages()
     .subscribe(images =>
      {this.events = images;
       console.log("events",this.events)
      });
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
  onKeypressEvent(event){
    console.log(event.target.value);
  }
}
