import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModelAddComponent } from './components/model-add/model-add.component';
import { ModelComponent } from './components/model/model.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component: ModelComponent},
  {path:"models", component: ModelComponent},
  {path:"models/brand/:brandId", component: ModelComponent},
  {path:"model/add", component: ModelAddComponent, canActivate:[LoginGuard]},
  {path:"login", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
