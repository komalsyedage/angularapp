import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
arrPosts: Post[]= []; //take one class
//apiData: any= {};
  constructor(private _postService: PostService) { }

  ngOnInit() {//only call Api here 
    this._postService.getPost().subscribe(res =>{
     
      this.arrPosts= res;
      console.log('Data',  this.arrPosts);
    })
  }

}
