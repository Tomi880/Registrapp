import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidaAPageRoutingModule } from './bienvenida-a-routing.module';

import { BienvenidaAPage } from './bienvenida-a.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaAPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BienvenidaAPage]
})
export class BienvenidaAPageModule {}
