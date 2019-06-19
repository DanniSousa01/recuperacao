import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-tarefa', loadChildren: './lista-tarefa/lista-tarefa.module#ListaTarefaPageModule' },
  { path: 'tarefa-modal', loadChildren: './tarefa-modal/tarefa-modal.module#TarefaModalPageModule' },
  { path: 'tarefa-detail/:tarefa', loadChildren: './tarefa-detail/tarefa-detail.module#TarefaDetailPageModule' },
  { path: 'perfil-modal', loadChildren: './perfil-modal/perfil-modal.module#PerfilModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
