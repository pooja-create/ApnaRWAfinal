import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivitydashboardPageRoutingModule } from './activitydashboard-routing.module';

import { ActivitydashboardPage } from './activitydashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivitydashboardPageRoutingModule
  ],
  declarations: [ActivitydashboardPage]
})
export class ActivitydashboardPageModule {}
