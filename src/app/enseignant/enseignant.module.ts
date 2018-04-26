import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';
import { MenuEnseignantComponent } from './menu-enseignant/menu-enseignant.component';

@NgModule({
  imports: [
    CommonModule,
    EnseignantRoutingModule
  ],
  declarations: [EnseignantComponent, MenuEnseignantComponent]
})
export class EnseignantModule { }
