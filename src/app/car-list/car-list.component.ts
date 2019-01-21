import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../shared/models/cars';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  cars: Car[];
  searchForm: FormGroup;
  carBrand = '';

  constructor(private carService: CarsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createSeachForm();
    this.getAllCars();
  }

  onChange(): void {
    this.carBrand = this.searchForm
      .get('brand')
      .value.toString()
      .toLowerCase();
    if (this.carBrand === '') {
      this.getAllCars();
    } else {
      this.getCarsByBrand();
    }
  }
  getAllCars(): void {
    this.carService.getAllCars().subscribe(res => {
      this.cars = res;
    });
  }

  getCarsByBrand(): void {
    this.carService.getCarsByBrand(this.carBrand).subscribe(res => {
      this.cars = res;
    });
  }
  createSeachForm() {
    this.searchForm = this.fb.group({
      brand: [['']],
    });
  }
}
