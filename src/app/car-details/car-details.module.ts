import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarDetailsRoutingModule } from './car-details-routing.module';

import { CarsService } from '../shared/services/cars.service';
import { CarDetailsComponent } from './car-details.component';

@NgModule({
  declarations: [CarDetailsComponent],
  imports: [CommonModule, CarDetailsRoutingModule],
  providers: [CarsService],
  exports: [CarDetailsComponent],
})
export class CarDetailsModule {}
