import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  dataLoaded = false;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    console.log('api request başladı');
    this.brandService.getBrands().subscribe(response=> {
      this.brands = response.Data;
      console.log('api request bitti:' + response.Success  + response.Message +response.Data.length);
      this.dataLoaded = true;
    });
    console.log('metod bitti');
  }
}
