import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScolariteComponent } from './scolarite.component';

const routes: Routes = [
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    //children: [{ path: '2', component: HomeComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScolariteRoutingModule { }
