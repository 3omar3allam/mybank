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
        loadChildren: './login/login.module#LoginPageModule',
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
        loadChildren: './login/login.module#LoginPageModule',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
