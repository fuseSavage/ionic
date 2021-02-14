import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W3CalbmiPagePage } from './w3-calbmi-page.page';

const routes: Routes = [
  {
    path: '',
    component: W3CalbmiPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class W3CalbmiPagePageRoutingModule {}
