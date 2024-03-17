import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpageVeraRobotPageRoutingModule } from './subpageVeraRobot-routing.module';

import { SubpageVeraRobotPage } from './subpageVeraRobot.page';

import { VeraRobotComponent } from '../matrixVeraRobot/matrixVeraRobot.component';
import { VVeraRobotComponent } from '../matrixVeraRobot/matrix-vrobot-msg/matrix-vrobot-msg.component';

//import { TamarComponent } from '../matrixTamar/matrixTamar.component';
//import { WestPromenadeComponent } from '../matrixWestPromenade/matrixWestPromenade.component';
//import { PlayConsultantComponent } from '../matrixPlayConsultant/matrixPlayConsultant.component';
//import { PlayConsultant2Component } from '../matrixPlayConsultant2/matrixPlayConsultant2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpageVeraRobotPageRoutingModule
  ],
  declarations: [SubpageVeraRobotPage, VeraRobotComponent, VVeraRobotComponent]
})
export class SubpagePageModule {}