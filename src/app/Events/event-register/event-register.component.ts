import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EventsService} from '../../Services/events.service';
// import {ErrorStateMatcher} from '@angular/material/core';


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }


@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {
   minDate:Date;
   imageData:string;
   submitted:boolean=false;
   eventForm = this.fb.group ({
    eventName:new FormControl('', [Validators.required]),
    place:new FormControl('', [Validators.required]),
    organizer:new FormControl('', [Validators.required]),
    contact:new FormControl('', [Validators.required]),
    startDate:Date,
    endDate:Date,
    entry:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    winning:new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    email:new FormControl(''),
    poster: new FormControl(null),
    approval:['']
  });
  Errors={
    eventrReqError:'Please Enter Event Name',
    placeReqError:'Please Enter Place',
    organizerReqError:'Please Enter Organizer Name',
    contactReqError:'Please Enter Contact Details',
    entryrReqError:' Entry Fees is Required',
    entryValidError:'Please enter valid Amount',
    winningReqError:'  Winning Price is Required',
    winningValidErrorr:'Please enter valid Amount',

  }
  // matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder,private route:Router,private eventservice:EventsService) { }

  ngOnInit() {
    this.minDate=new Date();
  }
  onSubmit() {
    console.log(this.eventForm);
    this.submitted=true;
    if(this.eventForm.valid){
      this.submitted=true;
    console.log("forms",this.eventForm.value);
    this.eventForm.value.approval="pending";
    if(this.eventForm.valid){

    this.eventservice.postEvent(this.eventForm.value).subscribe((events) => {
      console.log(events);
    })
      console.log("forms",this.eventForm.value);

      this.route.navigate(['/eventDetails']);

    }
    }

//     else
// {    M.toast({ html: 'Please fill all the required fields', classes: 'rounded' });
//   }


  }
  handleFileInput(files: Event) {
    const file = (files.target as HTMLInputElement).files[0];
    console.log("files",file);
    this.eventForm.value.poster=file;
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }

}
Back(){
  this.route.navigate(['/eventDetails']);
}
}
