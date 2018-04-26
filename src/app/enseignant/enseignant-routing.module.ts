import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent } from './enseignant.component';

const routes: Routes = [
  {
    path:'esp_enseignant',
    component:EnseignantComponent,
    //children: [{ path: '2', component: HomeComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
