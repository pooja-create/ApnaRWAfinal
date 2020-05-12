import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RwarulesPage } from './rwarules.page';

const routes: Routes = [
  {
    path: '',
    component: RwarulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RwarulesPageRoutingModule {}
