import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs";

import { EtudiantService } from './etudiant.service';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { MenuEtudiantComponent } from './menu-etudiant/menu-etudiant.component';


@NgModule({
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    HttpClientModule
  ],
  providers: [
    EtudiantService
  ],
  declarations: [EtudiantComponent, MenuEtudiantComponent],
  exports :[EtudiantComponent]
})
export class EtudiantModule { }
