import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficebearersPage } from './officebearers.page';

const routes: Routes = [
  {
    path: '',
    component: OfficebearersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficebearersPageRoutingModule {}
