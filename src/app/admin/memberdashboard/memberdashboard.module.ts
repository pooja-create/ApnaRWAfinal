import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberdashboardPageRoutingModule } from './memberdashboard-routing.module';

import { MemberdashboardPage } from './memberdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberdashboardPageRoutingModule
  ],
  declarations: [MemberdashboardPage]
})
export class MemberdashboardPageModule {}
