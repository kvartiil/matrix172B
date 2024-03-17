import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpageVeraCardPage } from './subpageVeraCard.page';

const routes: Routes = [
  {
    path: '',
    component: SubpageVeraCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpageVeraCardPageRoutingModule {}