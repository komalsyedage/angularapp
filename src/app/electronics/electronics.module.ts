import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { MicrochipComponent } from './microchip/microchip.component';
import { RasberrypiComponent } from './rasberrypi/rasberrypi.component';
import { BuzzerComponent } from './buzzer/buzzer.component';


const products: Routes =[
  { path: 'electronics' ,component:ElectronicsComponent, children: [
   {path: 'arduino' ,component: ArduinoComponent},
  {path: 'microchip' , component: MicrochipComponent},
  {path: 'rasberrypi' ,component: RasberrypiComponent},
  {path: 'buzzer' ,component: BuzzerComponent}
]}]
@NgModule({

  declarations: [ElectronicsComponent,
    ArduinoComponent,
    MicrochipComponent,
    RasberrypiComponent,
    BuzzerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(products),
  ],
  exports: [RouterModule]
})
export class ElectronicsModule { }
