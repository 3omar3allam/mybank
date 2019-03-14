import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardsPage } from './cards.page';
import {SharedModule} from '../../shared/shared.module';
import {CardDetailsPage} from './card-details/card-details.page';

const routes: Routes = [
  {
    path: '',
    component: CardsPage,
  },
  {
    path: ':id',
    component: CardDetailsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CardsPage,
    CardDetailsPage,
  ]
})
export class CardsPageModule {}
