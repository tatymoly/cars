import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  comparationList = [];
  isDisabled: Boolean = false;

  constructor(
    private carService: CarsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

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
  createComparationList(car): void {
    const position = this.comparationList.indexOf(car);
    if (position > -1) {
      this.comparationList.splice(position, 1);
    } else {
      this.comparationList.push(car);
    }
    console.log(this.comparationList);
  }
  setList() {
    sessionStorage.setItem('compare', JSON.stringify(this.comparationList));
    this.router.navigate(['car-compare']);
  }
  createSeachForm() {
    this.searchForm = this.fb.group({
      brand: [['']],
    });
  }
}
