import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScolariteRoutingModule } from './scolarite-routing.module';
import { ScolariteComponent } from './scolarite.component';
import { MenuScolariteComponent } from './menu-scolarite/menu-scolarite.component';
import { AttestationComponent } from './attestation/attestation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ScolariteRoutingModule
  ],
  declarations: [ScolariteComponent, MenuScolariteComponent, AttestationComponent, HomeComponent]
})
export class ScolariteModule { }
