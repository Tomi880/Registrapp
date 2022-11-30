import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCrudPageRoutingModule } from './modal-crud-routing.module';

import { ModalCrudPage } from './modal-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCrudPageRoutingModule
  ],
  declarations: [ModalCrudPage]
})
export class ModalCrudPageModule {}
