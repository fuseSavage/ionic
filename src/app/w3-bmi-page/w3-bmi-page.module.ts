import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { W3BmiPagePageRoutingModule } from './w3-bmi-page-routing.module';

import { W3BmiPagePage } from './w3-bmi-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    W3BmiPagePageRoutingModule
  ],
  declarations: [W3BmiPagePage]
})
export class W3BmiPagePageModule {}
