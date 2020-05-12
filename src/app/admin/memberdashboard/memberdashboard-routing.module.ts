import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberdashboardPage } from './memberdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: MemberdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberdashboardPageRoutingModule {}
