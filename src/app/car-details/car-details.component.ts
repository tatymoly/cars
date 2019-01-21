import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  car: Object = {};
  carId: string;

  constructor(private carService: CarsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carId = params['id'];
    });
    this.getCarDetails(this.carId);
  }

  getCarDetails(carId) {
    this.car = this.carService.getCardDetails(carId)[0];
  }
}
