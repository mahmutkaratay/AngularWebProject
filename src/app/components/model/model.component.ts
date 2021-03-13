import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  dataLoaded = false;
  models: Model[] = [];

  constructor(
    private modelService: ModelService,
    private activetedRoute: ActivatedRoute //mevcut linki verir.
  ) {}

  ngOnInit(): void {

  
    this.activetedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getModelsByBrandId(params["brandId"]);
      }else{
        this.getModels();
      }
    })


  }

  getModels() {

    this.modelService.getModels().subscribe((response) => {
      this.models = response.Data;
      this.dataLoaded = true;
    });
 
  }

  getModelsByBrandId(brandId:number) {

    this.modelService.getModelsByBrandId(brandId).subscribe((response) => {
      this.models = response.Data;
      this.dataLoaded = true;
    });
 
  }
}
