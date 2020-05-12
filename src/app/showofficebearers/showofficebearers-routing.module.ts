import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowofficebearersPage } from './showofficebearers.page';

const routes: Routes = [
  {
    path: '',
    component: ShowofficebearersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowofficebearersPageRoutingModule {}
