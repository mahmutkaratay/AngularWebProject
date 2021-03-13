import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './components/model/model.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component: ModelComponent},
  {path:"models", component: ModelComponent},
  {path:"models/brand/:brandId", component: ModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
