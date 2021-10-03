import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualBoothPageRoutingModule } from './virtual-booth-routing.module';

import { VirtualBoothPage } from './virtual-booth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualBoothPageRoutingModule
  ],
  declarations: [VirtualBoothPage]
})
export class VirtualBoothPageModule {}
