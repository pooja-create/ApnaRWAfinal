import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowrulesPage } from './showrules.page';

const routes: Routes = [
  {
    path: '',
    component: ShowrulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowrulesPageRoutingModule {}
