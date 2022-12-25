import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

registerForm= new FormGroup({
  firstname: new FormControl(""),
  lastname: new FormControl(""),
  email: new FormControl(""),
  mobile: new FormControl(""),
  gender: new FormControl("f"),
 
  pwd: new FormControl(""),
  rwd: new FormControl("")
})
registerSubmit(){
  console.log(this.registerForm);
  
}
}
