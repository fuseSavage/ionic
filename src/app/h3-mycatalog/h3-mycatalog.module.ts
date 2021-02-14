import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H3MycatalogPageRoutingModule } from './h3-mycatalog-routing.module';

import { H3MycatalogPage } from './h3-mycatalog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H3MycatalogPageRoutingModule
  ],
  declarations: [H3MycatalogPage]
})
export class H3MycatalogPageModule {}
