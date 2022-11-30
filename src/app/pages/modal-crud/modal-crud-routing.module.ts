import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCrudPage } from './modal-crud.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCrudPageRoutingModule {}
