import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityformPage } from './activityform.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityformPageRoutingModule {}
