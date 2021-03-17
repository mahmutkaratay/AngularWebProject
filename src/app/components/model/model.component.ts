import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Model } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  dataLoaded = false;
  models: Model[] = [];
  filterText = '';
  constructor(
    private modelService: ModelService,
    private activetedRoute: ActivatedRoute, //mevcut linki verir.
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getModelsByBrandId(params['brandId']);
      } else {
        this.getModels();
      }
    });
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response.Data;
      this.dataLoaded = true;
    });
  }

  getModelsByBrandId(brandId: number) {
    this.modelService.getModelsByBrandId(brandId).subscribe((response) => {
      this.models = response.Data;
      this.dataLoaded = true;
    });
  }

  addToCart(model: Model) {
    this.toastrService.success("sepete eklendi.", model.Name);
    this.cartService.addToCart(model);
  }
}
