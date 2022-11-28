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
import { PractiseComponent } from './practise/practise.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
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
    PractiseComponent,
    AttriComponent,
    CustdirDirective,
   
    
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
