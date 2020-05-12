import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowrulesPageRoutingModule } from './showrules-routing.module';

import { ShowrulesPage } from './showrules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowrulesPageRoutingModule
  ],
  declarations: [ShowrulesPage]
})
export class ShowrulesPageModule {}
