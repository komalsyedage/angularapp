import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name:string='CodemindTechnology';
  serverId:number=30;
  serverStatus:string='Offline';
  allownewServer=false;
 serverCreationStatus: string = 'server is not creted'
 serverName:string='codemindTechnolgy';
 nameLabel:string='Komal';
clear:string='clear'
  constructor() {
    setTimeout(()=>{
      this.allownewServer=true
    } ,5000)
   }

  getserverStatus(){
    return this.serverStatus;
  }
 
  onCeeateServer(){
    this.serverCreationStatus='server created';
  }
  
  ngOnInit() {
  }

}
