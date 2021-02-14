import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H3DetailAecPage } from './h3-detail-aec.page';

const routes: Routes = [
  {
    path: '',
    component: H3DetailAecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H3DetailAecPageRoutingModule {}
