import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H3SumMycattalogPage } from './h3-sum-mycattalog.page';

const routes: Routes = [
  {
    path: '',
    component: H3SumMycattalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H3SumMycattalogPageRoutingModule {}
