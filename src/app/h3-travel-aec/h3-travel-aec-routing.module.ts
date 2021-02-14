import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H3TravelAecPage } from './h3-travel-aec.page';

const routes: Routes = [
  {
    path: '',
    component: H3TravelAecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H3TravelAecPageRoutingModule {}
