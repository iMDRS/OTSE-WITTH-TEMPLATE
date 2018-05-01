import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScolariteService } from './scolarite.service';

import { ScolariteRoutingModule } from './scolarite-routing.module';
import { ScolariteComponent } from './scolarite.component';
import { MenuScolariteComponent } from './menu-scolarite/menu-scolarite.component';
import { AttestationComponent } from './attestation/attestation.component';
import { HomeComponent } from './home/home.component';
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

@NgModule({
  imports: [
    CommonModule,
    ScolariteRoutingModule
  ],
  declarations: [ScolariteComponent, MenuScolariteComponent, AttestationComponent, HomeComponent, NewComponent, NowComponent, DoneComponent, BanComponent, AllComponent, DiplomeComponent, NewDipmComponent, NowDipmComponent, DoneDipmComponent, BanDipmComponent, AllDipmComponent, ProfileComponent],
  providers:[ScolariteService]
})
export class ScolariteModule { }
