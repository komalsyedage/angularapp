import { Component, OnInit } from '@angular/core';
import { RapidServiceService } from '../services/rapid-service.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {
  //apinews:any[]= [];
  res:any;
  new1:any;

  constructor(private _rapidApiService: RapidServiceService) { }

  ngOnInit() {
    this._rapidApiService.getdataBBfinance().subscribe(res=>{
      console.log('rapid finance data',res);
      this.res=res;
    this.new1=this.res.news;
    console.log('news',this.new1);
    
    })
  }

}
