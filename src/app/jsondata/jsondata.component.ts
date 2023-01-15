import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
commentData:any[]=[];
  data:any[]=[];
  count
  constructor(private _service:CommentsService) { }

  ngOnInit() {
    this._service.getPost().subscribe(res=>{
      console.log('Comment data==>',res);
     this.commentData.push(res[0]);
  
    this.data=this.commentData;
      console.log('arrdata==>',this.data);
       })
          
       //Todo Data
       this._service.getTodo().subscribe(resl=>{
        console.log('Todo Data====>>',resl);
        
       })
  }


}
