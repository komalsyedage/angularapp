import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { warningComponent } from './warningAlert/warningAlert.component';
import { successAlertComponent } from './warningAlert/successAlert/successAlert.component';

import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DatabindingComponent } from './databinding/databinding.component';
import { HookPractiseComponent } from './hook-practise/hook-practise.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { ParentComponent } from './parent/parent.component';
import { PracticechildComponent } from './practicechild/practicechild.component';
import { FormAssComponent } from './form-ass/form-ass.component';
import { PractiseComponent } from './practise/practise.component';
import { PHooklifeComponent } from './p-hooklife/p-hooklife.component';

import { TFormAssignmentComponent } from './tform-assignment/tform-assignment.component';
import { RFormvalidationComponent } from './rformvalidation/rformvalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SFormComponent } from './s-form/s-form.component';




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
    DatabindingComponent,
    HookPractiseComponent,
    SimpletemplateformComponent,
    ParentComponent,
    PracticechildComponent,
    FormAssComponent,
    PractiseComponent,
    PHooklifeComponent,
    TFormAssignmentComponent,
    RFormvalidationComponent,
    ReactiveformComponent,
    ReactiveformComponent,
    SFormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  //form control for two way databinding form
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

