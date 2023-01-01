import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {
// in demoservice.component
  constructor( private httpClient: HttpClient) { }
  getPost(): Observable<any>{
    return this.httpClient.get(`${devAPIUrl}posts`);//api end point
  }
  getPostById(id){
     return this.httpClient.get(`${devAPIUrl}posts/` + id)
  }

  deletePostById(id){
    return this.httpClient.delete(`${devAPIUrl}posts/` + id)
  }
}

