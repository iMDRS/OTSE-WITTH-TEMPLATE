import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScolariteComponent } from './scolarite.component';
import { HomeComponent } from './home/home.component';
import { AttestationComponent } from './attestation/attestation.component';
import { NewComponent } from './attestation/new/new.component';
import { NowComponent } from './attestation/now/now.component';
import { DoneComponent } from './attestation/done/done.component';
import { BanComponent } from './attestation/ban/ban.component';
import { AllComponent } from './attestation/all/all.component';
import { DiplomeComponent } from './diplome/diplome.component';
import { NewDipmComponent } from './diplome/new-dipm/new-dipm.component';
import { NowDipmComponent } from './diplome/now-dipm/now-dipm.component';
import { DoneDipmComponent } from './diplome/done-dipm/done-dipm.component';
import { BanDipmComponent } from './diplome/ban-dipm/ban-dipm.component';
import { AllDipmComponent } from './diplome/all-dipm/all-dipm.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'profile', component: ProfileComponent }],
  },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'attestation',
                  component: AttestationComponent,
                    children : [{path: 'new', component: NewComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'attestation',
                  component: AttestationComponent,
                    children : [{path: 'now', component: NowComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'attestation',
                  component: AttestationComponent,
                    children : [{path: 'ban', component: BanComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'attestation',
                  component: AttestationComponent,
                    children : [{path: 'all', component: AllComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'attestation',
                  component: AttestationComponent,
                    children : [{path: 'done', component: DoneComponent}]
   }],
  },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'diplome',
                  component: AttestationComponent,
                    children : [{path: 'new', component: NewDipmComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'diplome',
                  component: AttestationComponent,
                    children : [{path: 'now', component: NowDipmComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'diplome',
                  component: AttestationComponent,
                    children : [{path: 'ban', component: BanDipmComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'diplome',
                  component: AttestationComponent,
                    children : [{path: 'all', component: AllDipmComponent}]
   }],
 },
  {
    path:'esp_scolarite',
    component:ScolariteComponent,
    children: [{ path: 'diplome',
                  component: AttestationComponent,
                    children : [{path: 'done', component: DoneDipmComponent}]
   }],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScolariteRoutingModule { }
