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
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
