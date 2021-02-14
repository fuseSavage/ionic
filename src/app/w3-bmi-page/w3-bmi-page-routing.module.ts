import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W3BmiPagePage } from './w3-bmi-page.page';

const routes: Routes = [
  {
    path: '',
    component: W3BmiPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class W3BmiPagePageRoutingModule {}
