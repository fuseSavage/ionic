import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H3SumMycattalogPageRoutingModule } from './h3-sum-mycattalog-routing.module';

import { H3SumMycattalogPage } from './h3-sum-mycattalog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H3SumMycattalogPageRoutingModule
  ],
  declarations: [H3SumMycattalogPage]
})
export class H3SumMycattalogPageModule {}
