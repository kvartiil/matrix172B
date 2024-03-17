import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpagePrgnAnalPage } from './subpagePrgnAnal.page';

const routes: Routes = [
  {
    path: '',
    component: SubpagePrgnAnalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpagePrgnAnalPageRoutingModule {}