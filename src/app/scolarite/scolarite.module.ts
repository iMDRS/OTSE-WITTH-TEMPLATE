import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScolariteRoutingModule } from './scolarite-routing.module';
import { ScolariteComponent } from './scolarite.component';
import { MenuScolariteComponent } from './menu-scolarite/menu-scolarite.component';

@NgModule({
  imports: [
    CommonModule,
    ScolariteRoutingModule
  ],
  declarations: [ScolariteComponent, MenuScolariteComponent]
})
export class ScolariteModule { }
