import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
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
   eventForm = this.fb.group ({
    name:[''],
    place:[''],
    organizer:[''],
    contact:[''],
    startDate:Date,
    endDate:Date,
    emailFormControl:[''],
    poster: new FormControl(null)
  });

  // matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder,private route:Router) { }

  ngOnInit() {
    this.minDate=new Date();
  }
  onSubmit() {
    console.log("forms",this.eventForm.value);
    if(this.eventForm.valid){


      console.log("forms",this.eventForm.value);

      this.route.navigate(['/login']);

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
}
