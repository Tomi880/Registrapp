import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detbastian',
    loadChildren: () => import('./pages/detbastian/detbastian.module').then( m => m.DetbastianPageModule)
  },
  {
    path: 'dettomas',
    loadChildren: () => import('./pages/dettomas/dettomas.module').then( m => m.DettomasPageModule)
  },
  {
    path: 'detgonzalo',
    loadChildren: () => import('./pages/detgonzalo/detgonzalo.module').then( m => m.DetgonzaloPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'bienvenida-a',
    loadChildren: () => import('./pages/bienvenida-a/bienvenida-a.module').then( m => m.BienvenidaAPageModule)
  },
  {
    path: 'coversor',
    loadChildren: () => import('./pages/coversor/coversor.module').then( m => m.CoversorPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: '**',
    redirectTo: 'page404'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
