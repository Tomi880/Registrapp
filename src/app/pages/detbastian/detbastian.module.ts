import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetbastianPageRoutingModule } from './detbastian-routing.module';

import { DetbastianPage } from './detbastian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetbastianPageRoutingModule
  ],
  declarations: [DetbastianPage]
})
export class DetbastianPageModule {}
