import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import {AccountsPage} from './accounts.page';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../shared/auth.interceptor';
import {AccountDetailsPage} from './account-details/account-details.page';
import {SharedModule} from '../../shared/shared.module';

const routes = [
  {
    path: '',
    component: AccountsPage,
  },
  {
    path: ':id',
    component: AccountDetailsPage,
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
    AccountsPage,
    AccountDetailsPage,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class AccountsPageModule {}
