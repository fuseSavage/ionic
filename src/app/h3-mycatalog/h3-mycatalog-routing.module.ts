import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H3MycatalogPage } from './h3-mycatalog.page';

const routes: Routes = [
  {
    path: '',
    component: H3MycatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H3MycatalogPageRoutingModule {}
