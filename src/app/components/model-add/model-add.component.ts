import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css'],
})
export class ModelAddComponent implements OnInit {
  modelAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modelService: ModelService,
    private toastrService:ToastrService
  ) {
    this.createModelAddForm();
  }

  ngOnInit(): void {}

  createModelAddForm() {
    this.modelAddForm = this.formBuilder.group({
      Name: ['', Validators.required],
      BrandId: ['', Validators.required],
    });
  }

  add() {
    //form daki alanları alıp model nesnesine atıyor

    if (this.modelAddForm.valid) {
      let model = Object.assign({}, this.modelAddForm.value);
      this.modelService.add(model).subscribe(response=>{
        
        this.toastrService.success(response.Message,"Başarılı");
      }, responseError=>
      {
        console.log(responseError.Message);
        this.toastrService.error(responseError.Message);
        
      });
     

    }else{

      this.toastrService.error("Formunuz eksik","Hata");
    }
  }
}
