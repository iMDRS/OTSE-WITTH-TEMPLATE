import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path:'etudiant',
    loadChildren: 'app/etudiant/etudiant.module#EtudiantModule'
  },
  {
    path:'enseignant',
    loadChildren: 'app/enseignant/enseignant.module#EnseignantModule'

  },
  {
    path:'scolarite',
    loadChildren: 'app/scolarite/scolarite.module#ScolariteModule'

  },
  {
    path:'stage',
    loadChildren: 'app/stage/stage.module#StageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
