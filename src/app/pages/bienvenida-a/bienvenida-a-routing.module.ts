import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaAPage } from './bienvenida-a.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidaAPageRoutingModule {}
