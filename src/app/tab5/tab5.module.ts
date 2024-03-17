import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';

//import * as PlotlyJS from 'plotly.js-dist-min';
//import { PlotlyModule } from 'angular-plotly.js';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { VeraComponent } from '../matrixVera/matrixVera.component';

//import { SharedMaterialModule } from '../matrixVera/shared-material/shared-material.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab5PageRoutingModule
    
    
  ],
  declarations: [Tab5Page, VeraComponent]
})
export class Tab5PageModule {}