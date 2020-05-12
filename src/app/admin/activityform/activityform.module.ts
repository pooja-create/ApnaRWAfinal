import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityformPageRoutingModule } from './activityform-routing.module';

import { ActivityformPage } from './activityform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityformPageRoutingModule
  ],
  declarations: [ActivityformPage]
})
export class ActivityformPageModule {}
