import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidServiceService {
url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';

  constructor(private httpClient: HttpClient) { }

  getdataBBfinance(){
let headers = new HttpHeaders({
  'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
  'X-RapidAPI-Key': 'b107d8c22cmshe652d6686c18307p1dad9cjsne7d8678028cf'
  ,
})
    return this.httpClient.get(this.url,{headers: headers })
   
  }
  
}
