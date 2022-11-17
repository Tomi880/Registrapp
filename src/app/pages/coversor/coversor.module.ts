import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CoversorPageRoutingModule } from './coversor-routing.module';

import { CoversorPage } from './coversor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoversorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CoversorPage]
})
export class CoversorPageModule {}