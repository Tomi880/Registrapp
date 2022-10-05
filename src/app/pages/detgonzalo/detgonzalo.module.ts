import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetgonzaloPageRoutingModule } from './detgonzalo-routing.module';

import { DetgonzaloPage } from './detgonzalo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetgonzaloPageRoutingModule
  ],
  declarations: [DetgonzaloPage]
})
export class DetgonzaloPageModule {}
