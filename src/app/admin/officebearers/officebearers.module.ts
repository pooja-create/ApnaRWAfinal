import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficebearersPageRoutingModule } from './officebearers-routing.module';

import { OfficebearersPage } from './officebearers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficebearersPageRoutingModule
  ],
  declarations: [OfficebearersPage]
})
export class OfficebearersPageModule {}
