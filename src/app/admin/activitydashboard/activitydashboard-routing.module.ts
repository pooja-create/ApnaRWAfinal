import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitydashboardPage } from './activitydashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitydashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitydashboardPageRoutingModule {}
