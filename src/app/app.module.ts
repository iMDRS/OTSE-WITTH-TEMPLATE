import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EtudiantModule } from './etudiant/etudiant.module';
import { EnseignantModule } from './enseignant/enseignant.module';
import { LoginModule } from './login/login.module';
import { ScolariteModule } from './scolarite/scolarite.module';
import { StageModule } from './stage/stage.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EtudiantModule,
    EnseignantModule,
    LoginModule,
    ScolariteModule,
    StageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
