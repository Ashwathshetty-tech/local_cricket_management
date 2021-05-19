import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group ({
    name:[''],
    password:['']
  });
  constructor(private fb:FormBuilder,private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("login",this.loginForm.value);
    this.route.navigate(['/eventDetails']);
  }
}
