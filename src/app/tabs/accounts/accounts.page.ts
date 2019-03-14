import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Subscription} from 'rxjs';
import {DataService} from '../../shared/data.service';
import {Account} from '../../shared/models/data.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit, OnDestroy {

  isAuthenticated = false;
  private authSubs: Subscription;

  isLoading = false;

  accounts: Account[];
  totalBalace: number;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getAuth();
    this.authSubs = this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.isLoading = true;
    this.dataService.getAccounts().subscribe(accounts => {
      if (accounts) {
        this.accounts = accounts;
        this.totalBalace = accounts.reduce((acc, cur) => acc + cur.balance, 0).toFixed(2);
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubs.unsubscribe();
  }
}
