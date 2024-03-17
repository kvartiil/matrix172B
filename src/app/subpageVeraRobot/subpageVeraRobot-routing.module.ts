import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpageVeraRobotPage } from './subpageVeraRobot.page';

const routes: Routes = [
  {
    path: '',
    component: SubpageVeraRobotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpageVeraRobotPageRoutingModule {}