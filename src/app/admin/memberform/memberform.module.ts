import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberformPageRoutingModule } from './memberform-routing.module';

import { MemberformPage } from './memberform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberformPageRoutingModule
  ],
  declarations: [MemberformPage]
})
export class MemberformPageModule {}
