import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpagePrgnAnalPageRoutingModule } from './subpagePrgnAnal-routing.module';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SubpagePrgnAnalPage } from './subpagePrgnAnal.page';

//import { PrgnRbtComponent } from '../matrixPrgnRbt/matrixPrgnRbt.component';
//import { PPrgnRbtComponent } from '../matrixPrgnRbt/matrix-probot-msg/matrix-probot-msg.component';

import { MiraPlaceComponent } from '../matrixMiraPlace/matrixMiraPlace.component';
import { MiraPlace1Component } from '../matrixMiraPlace1/matrixMiraPlace1.component';
import { BoxComponent } from '../matrixMiraPlace1/box/box.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpagePrgnAnalPageRoutingModule
    
  ],
  declarations: [SubpagePrgnAnalPage, MiraPlace1Component, BoxComponent]
})
export class SubpagePageModule {}