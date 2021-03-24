import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css'],
})
export class ModelAddComponent implements OnInit {
  modelAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createModelAddForm();
  }

  ngOnInit(): void {}

  createModelAddForm() {
    this.modelAddForm = this.formBuilder.group({
     
      Name : ["",Validators.required],
      BrandId: ["",Validators.required]
    });
  }
}
