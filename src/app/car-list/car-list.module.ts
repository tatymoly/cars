import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarListComponent } from './car-list.component';
import { CarListRoutingModule } from './car-list-routing.module';
import { CarsService } from '../shared/services/cars.service';

@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule,
    CarListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CarsService],
  exports: [CarListComponent],
})
export class CarListModule {}
