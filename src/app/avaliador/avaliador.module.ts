import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliadorPageRoutingModule } from './avaliador-routing.module';

import { AvaliadorPage } from './avaliador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliadorPageRoutingModule
  ],
  declarations: [AvaliadorPage]
})
export class AvaliadorPageModule {}
