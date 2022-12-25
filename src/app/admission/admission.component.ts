import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  
@Input() user:string;
  constructor() { }

  ngOnInit() {
  }

}
