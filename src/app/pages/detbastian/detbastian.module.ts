import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetbastianPageRoutingModule } from './detbastian-routing.module';

import { DetbastianPage } from './detbastian.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetbastianPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetbastianPage]
})
export class DetbastianPageModule {}
