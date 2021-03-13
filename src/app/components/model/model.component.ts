import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  dataLoaded = false;
  models : Model[] = [];
  
  constructor(private modelService:ModelService) { }

  ngOnInit(): void {
    this.getModels();
  }

  getModels() {
    console.log('api request başladı');
    this.modelService.getModels().subscribe((response) => {
      this.models = response.Data;
      this.dataLoaded = true;
    });
    console.log('metod bitti');
  }


}
