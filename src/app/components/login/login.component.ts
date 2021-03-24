import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private toastr:ToastrService) {
    this.createLoginForm();
  }

  ngOnInit(): void {}

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      Email :["",Validators.required],
      Password:["",Validators.required]
    });
  }


  login()
  {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response=>{
        this.toastr.success(response.Message);
        localStorage.setItem("token",response.Data.Key);
      }, responseError =>{
        console.log(responseError);

      });
    }
  }
}
