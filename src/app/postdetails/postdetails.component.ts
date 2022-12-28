import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../services/post.service';
declare var  window: any;

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  arrPosts: any;
  formModal: any;

  constructor(private _postService: PostService, private route: ActivatedRoute) { }//id kadnysathi ActiveRoute
  
   ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this._postService.getPostById(id).subscribe(result => {
    console.log('get post by id',result);
     this.arrPosts=result;
   //this.arrPosts.push(result);
      // console.log('array',this.arrPost);
      this.formModal = new window.bootstrap.Modal(
        document.getElementById("myModal")
      )

       
    })
     
  }
 // show:boolean=true;
  // displayStyle = "none";
  
  // openPopup() {
  //   this.displayStyle = "block";
  //   //this.show=true;
  // }
  // closePopup() {
  //   this.displayStyle = "none";
  //   //this.show=false;
  // }
  openModal(){

    
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }

 
}
