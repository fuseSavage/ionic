import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'h3-aec',
    loadChildren: () => import('./h3-aec/h3-aec.module').then( m => m.H3AecPageModule)
  },
  {
    path: 'h3-travel-aec/:sendAEC',
    loadChildren: () => import('./h3-travel-aec/h3-travel-aec.module').then( m => m.H3TravelAecPageModule)
  },
  {
    path: 'h3-sum-mycattalog/:sendproduct/:sendprice/:sendsumprice',
    loadChildren: () => import('./h3-sum-mycattalog/h3-sum-mycattalog.module').then( m => m.H3SumMycattalogPageModule)
  },
  {
    path: 'h3-mycatalog',
    loadChildren: () => import('./h3-mycatalog/h3-mycatalog.module').then( m => m.H3MycatalogPageModule)
  },
  {
    path: 'w2-sign-in',
    loadChildren: () => import('./w2-sign-in/w2-sign-in.module').then( m => m.W2SignInPageModule)
  },
  {
    path: 'w3-bmi-page',
    loadChildren: () => import('./w3-bmi-page/w3-bmi-page.module').then( m => m.W3BmiPagePageModule)
  },
  {
    path: 'w3-calbmi-page/:sendw/:sendh',
    loadChildren: () => import('./w3-calbmi-page/w3-calbmi-page.module').then( m => m.W3CalbmiPagePageModule)
  },
  {
    path: 'h3-detail-aec/:sendAEC',
    loadChildren: () => import('./h3-detail-aec/h3-detail-aec.module').then( m => m.H3DetailAecPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
