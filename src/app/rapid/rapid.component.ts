import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
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
  res1:any;
  new2:any;

  constructor(private _rapidApiService: RapidServiceService,private _firabaseService: FirebaseService) { }

  ngOnInit() {
    this._rapidApiService.getdataBBfinance().subscribe(res=>{
      console.log('rapid finance data',res);
      this.res=res;
    this.new1=this.res.news;
    console.log('news',this.new1);
    //for quotes
    this.new2=this.res.quote;
console.log('quotes', this.new2);

    
    })
  }
  //firebase
  createPost(){
    this._firabaseService.createPost().subscribe(res =>{
      console.log('firebase post',res);
      
    })
    
  }

}
