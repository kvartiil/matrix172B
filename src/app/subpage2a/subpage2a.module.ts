import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subpage2aPageRoutingModule } from './subpage2a-routing.module';

import { Subpage2aPage } from './subpage2a.page';

import { SectorComponent } from '../matrixSector/matrixSector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subpage2aPageRoutingModule
  ],
  declarations: [Subpage2aPage, SectorComponent]
})
export class SubpagePageModule {}