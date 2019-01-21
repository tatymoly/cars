import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarCompareRoutingModule } from './car-compare-routing.module';
import { CarCompareComponent } from './car-compare.component';
import { CarsService } from '../shared/services/cars.service';

@NgModule({
  declarations: [CarCompareComponent],
  imports: [CommonModule, CarCompareRoutingModule],
  providers: [CarsService],
  exports: [CarCompareComponent],
})
export class CarCompareModule {}
