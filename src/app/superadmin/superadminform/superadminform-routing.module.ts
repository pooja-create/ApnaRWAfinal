import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminformPage } from './superadminform.page';

const routes: Routes = [
  {
    path: '',
    component: SuperadminformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminformPageRoutingModule {}
