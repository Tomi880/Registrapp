import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettomasPageRoutingModule } from './dettomas-routing.module';

import { DettomasPage } from './dettomas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettomasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DettomasPage]
})
export class DettomasPageModule {}
