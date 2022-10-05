import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettomasPageRoutingModule } from './dettomas-routing.module';

import { DettomasPage } from './dettomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettomasPageRoutingModule
  ],
  declarations: [DettomasPage]
})
export class DettomasPageModule {}
