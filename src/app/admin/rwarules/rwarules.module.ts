import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RwarulesPageRoutingModule } from './rwarules-routing.module';

import { RwarulesPage } from './rwarules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RwarulesPageRoutingModule
  ],
  declarations: [RwarulesPage]
})
export class RwarulesPageModule {}
