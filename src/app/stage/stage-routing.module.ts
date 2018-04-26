import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageComponent } from './stage.component';

const routes: Routes = [
  {
    path:'esp_stage',
    component:StageComponent,
    //children: [{ path: '2', component: HomeComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageRoutingModule { }
