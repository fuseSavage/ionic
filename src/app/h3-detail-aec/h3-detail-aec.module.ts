import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H3DetailAecPageRoutingModule } from './h3-detail-aec-routing.module';

import { H3DetailAecPage } from './h3-detail-aec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H3DetailAecPageRoutingModule
  ],
  declarations: [H3DetailAecPage]
})
export class H3DetailAecPageModule {}
