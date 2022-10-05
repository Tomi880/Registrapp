import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetgonzaloPageRoutingModule } from './detgonzalo-routing.module';

import { DetgonzaloPage } from './detgonzalo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetgonzaloPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetgonzaloPage]
})
export class DetgonzaloPageModule {}
