import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CrudPage } from './crud.page';
import { CrudPageRoutingModule } from './crud-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
