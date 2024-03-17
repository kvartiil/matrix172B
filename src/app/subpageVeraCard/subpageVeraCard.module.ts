import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpageVeraCardPageRoutingModule } from './subpageVeraCard-routing.module';

import { SubpageVeraCardPage } from './subpageVeraCard.page';

//import { VeraRobotComponent } from '../matrixVeraRobot/matrixVeraRobot.component';
//import { VVeraRobotComponent } from '../matrixVeraRobot/matrix-vrobot-msg/matrix-vrobot-msg.component';

import { VeraFlashComponent } from '../matrixVeraFlash/matrixVeraFlash.component';
import { VeraFlash2Component } from '../matrixVeraFlash2/matrixVeraFlash2.component';
import { VeraFlash3Component } from '../matrixVeraFlash3/matrixVeraFlash3.component';
//import { TamarComponent } from '../matrixTamar/matrixTamar.component';
//import { WestPromenadeComponent } from '../matrixWestPromenade/matrixWestPromenade.component';
//import { PlayConsultantComponent } from '../matrixPlayConsultant/matrixPlayConsultant.component';
//import { PlayConsultant2Component } from '../matrixPlayConsultant2/matrixPlayConsultant2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpageVeraCardPageRoutingModule
  ],
  declarations: [SubpageVeraCardPage, VeraFlashComponent, VeraFlash2Component, VeraFlash3Component]
})
export class SubpagePageModule {}