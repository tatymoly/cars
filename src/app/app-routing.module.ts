import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './car-list/car-list.module#CarListModule',
  },
  {
    path: '',
    loadChildren: './car-details/car-details.module#CarDetailsModule',
  },
  {
    path: 'car-compare',
    loadChildren: './car-compare/car-compare.module#CarCompareModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
