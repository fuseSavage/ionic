import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H3AecPageRoutingModule } from './h3-aec-routing.module';

import { H3AecPage } from './h3-aec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H3AecPageRoutingModule
  ],
  declarations: [H3AecPage]
})
export class H3AecPageModule {}
