import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetgonzaloPage } from './detgonzalo.page';

const routes: Routes = [
  {
    path: '',
    component: DetgonzaloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetgonzaloPageRoutingModule {}
