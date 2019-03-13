import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomePageModule',
      },
      {
        path: 'accounts',
        loadChildren: './accounts/accounts.module#AccountsPageModule',
      },
      {
        path: 'cards',
        loadChildren: './cards/cards.module#CardsPageModule',
      },
      {
        path: '**',
        loadChildren: './home/home.module#HomePageModule',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
