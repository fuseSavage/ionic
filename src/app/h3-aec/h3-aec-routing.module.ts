import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H3AecPage } from './h3-aec.page';

const routes: Routes = [
  {
    path: '',
    component: H3AecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H3AecPageRoutingModule {}
