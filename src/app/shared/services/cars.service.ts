import { Injectable } from '@angular/core';

import { Car } from '../models/cars';
import { CARS } from '../mock/cars';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  compareList = [];
  constructor() {}

  getAllCars(): Observable<Car[]> {
    return of(CARS);
  }

  getCardDetails(carId) {
    let carDetails = {};
    carDetails = CARS.filter(car => car.id === carId);
    return carDetails;
  }

  getCarsByBrand(carBrand): Observable<Car[]> {
    return of(CARS.filter(car => car.brand === carBrand));
  }
}
