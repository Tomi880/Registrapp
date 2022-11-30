import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CrudPage } from './crud.page';
import { CrudPageRoutingModule } from './crud-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
