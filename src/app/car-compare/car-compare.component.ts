import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-car-compare',
  templateUrl: './car-compare.component.html',
  styleUrls: ['./car-compare.component.scss'],
})
export class CarCompareComponent implements OnInit {
  carList = [];
  constructor(private carService: CarsService) {}

  ngOnInit() {
    this.getCompareList();
  }

  getCompareList() {
    const data = sessionStorage.getItem('compare');
    this.carList = JSON.parse(data);
  }
}
