import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W2SignInPage } from './w2-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: W2SignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class W2SignInPageRoutingModule {}
