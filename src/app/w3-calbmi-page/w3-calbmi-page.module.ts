import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { W3CalbmiPagePageRoutingModule } from './w3-calbmi-page-routing.module';

import { W3CalbmiPagePage } from './w3-calbmi-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    W3CalbmiPagePageRoutingModule
  ],
  declarations: [W3CalbmiPagePage]
})
export class W3CalbmiPagePageModule {}
