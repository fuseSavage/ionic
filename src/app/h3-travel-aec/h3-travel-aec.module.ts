import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H3TravelAecPageRoutingModule } from './h3-travel-aec-routing.module';

import { H3TravelAecPage } from './h3-travel-aec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H3TravelAecPageRoutingModule
  ],
  declarations: [H3TravelAecPage]
})
export class H3TravelAecPageModule {}
