import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details.component';

const routes: Routes = [
  {
    path: 'car-details/:id',
    component: CarDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarDetailsRoutingModule {}
