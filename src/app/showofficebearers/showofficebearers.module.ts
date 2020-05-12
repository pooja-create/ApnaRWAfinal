import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowofficebearersPageRoutingModule } from './showofficebearers-routing.module';

import { ShowofficebearersPage } from './showofficebearers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowofficebearersPageRoutingModule
  ],
  declarations: [ShowofficebearersPage]
})
export class ShowofficebearersPageModule {}
