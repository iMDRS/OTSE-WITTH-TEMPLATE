import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScolariteComponent } from './scolarite.component';
import { HomeComponent } from './home/home.component';
import { AttestationComponent } from './attestation/attestation.component';

const routes: Routes = [
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'all', component: AttestationComponent }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScolariteRoutingModule { }
