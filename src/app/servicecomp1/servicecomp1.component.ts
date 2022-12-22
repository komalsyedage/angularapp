import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
products={};
apiData={};
//my servicecomp1 is depend on Demoservice
  constructor(private _demoService:DemoService) {
  
   }

  ngOnInit() {
   // this.products=this._demoService.products;
   this._demoService.getUsersData().subscribe(data=>{
  console.log('getting data from API',data);
  this.apiData=(data);
  console.log('getting data from array',this.apiData);
  
  
})
  }
//   Onsubscribe(){
//   this._demoService.display();
// }
}
