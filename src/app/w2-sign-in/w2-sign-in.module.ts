import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { W2SignInPageRoutingModule } from './w2-sign-in-routing.module';

import { W2SignInPage } from './w2-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    W2SignInPageRoutingModule
  ],
  declarations: [W2SignInPage]
})
export class W2SignInPageModule {}
