import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addremove',
  templateUrl: './addremove.component.html',
  styleUrls: ['./addremove.component.css']
})
export class AddremoveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userlist=[];

  onclick(prouser){
this.userlist.push(prouser.value);
prouser.value = '';
}
ondelete(deleteme){
this.userlist.splice(deleteme,1);// how value to delete pass value
}

}
