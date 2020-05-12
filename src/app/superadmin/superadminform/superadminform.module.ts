import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperadminformPageRoutingModule } from './superadminform-routing.module';

import { SuperadminformPage } from './superadminform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperadminformPageRoutingModule
  ],
  declarations: [SuperadminformPage]
})
export class SuperadminformPageModule {}
