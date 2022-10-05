import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetbastianPage } from './detbastian.page';

const routes: Routes = [
  {
    path: '',
    component: DetbastianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetbastianPageRoutingModule {}
