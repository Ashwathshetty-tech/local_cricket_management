import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import {Events} from '../Model/events.model';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  readonly eventURL='http://localhost:3000/events';
  constructor(private http:HttpClient) { }
  postEvent(event: Events) {
    console.log("emp",event);
    const eventData = new FormData();
    const datestartstr = (new Date(event.startDate)).toDateString();
    const dateendstr = (new Date(event.endDate)).toDateString();
    eventData.append("eventName", event.eventName);
    eventData.append("place", event.place);
    eventData.append("organizer", event.organizer);
    eventData.append("contact", event.contact);
    eventData.append("entry",event.entry);
    eventData.append("winning",event.winning);
    eventData.append("email",event.email);
    eventData.append("approval",event.approval);
    eventData.append("image", event.poster, event.eventName);
    eventData.append("startDate",datestartstr);
    eventData.append("endDate",dateendstr);
    console.log("event data", eventData);
    return this.http.post(this.eventURL,eventData);
 }
 getEventList() {
  return this.http.get(this.eventURL);
}
getAdminEvents() {
  return this.http.get(this.eventURL+'/admin');
}
updateAdminEvents(events:Events){
  return this.http.put(this.eventURL+`/admin/${events._id}`,events);
}

}
