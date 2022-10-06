import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettomasPage } from './dettomas.page';

const routes: Routes = [
  {
    path: '',
    component: DettomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettomasPageRoutingModule {}
