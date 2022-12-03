import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { warningComponent } from './warningAlert/warningAlert.component';
import { successAlertComponent } from './warningAlert/successAlert/successAlert.component';

import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgifForSwitchComponent } from './ngif-for-switch/ngif-for-switch.component';

import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';
import { HooksComponent } from './hooks/hooks.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { AddremoveComponent } from './addremove/addremove.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    warningComponent,
    successAlertComponent,
    ServersComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    NgifForSwitchComponent,
  
    AttriComponent,
    CustdirDirective,
    DemoComponent,
    HooksComponent,
    DirassignComponent,
    AddremoveComponent,
    ChildComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   //form contron for two way databinding
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

