import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageRoutingModule } from './stage-routing.module';
import { StageComponent } from './stage.component';
import { MenuStageComponent } from './menu-stage/menu-stage.component';

@NgModule({
  imports: [
    CommonModule,
    StageRoutingModule
  ],
  declarations: [StageComponent, MenuStageComponent]
})
export class StageModule { }
