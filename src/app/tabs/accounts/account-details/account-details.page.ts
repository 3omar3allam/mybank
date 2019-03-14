import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Account} from '../../../shared/models/data.model';
import {DataService} from '../../../shared/data.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit, OnDestroy {

  isAuthenticated = false;
  private authSubs: Subscription;

  isLoading = false;

  account: Account;
  accountId: string;

  backRef: string;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.account = new Account();
    this.isAuthenticated = this.authService.getAuth();
    this.authSubs = this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.accountId = this.route.snapshot.params.id;
    if (this.accountId) {
      this.getAccountDetails();
    }
    this.route.params.subscribe(params => {
      this.accountId = params.id;
      if (this.accountId) {
        this.getAccountDetails();
      }
    });

    this.backRef = this.route.snapshot.queryParams.ref || 'accounts';
    this.route.queryParams.subscribe(params => {
      this.backRef = `/cards/${params.ref}`;
    });
  }

  ngOnDestroy() {
    this.authSubs.unsubscribe();
    this.accountId = null;
  }


  getAccountDetails() {
    this.isLoading = true;
    this.dataService.getAccountDetails(this.accountId).subscribe(account => {
      if (account) {
        const {startDate, ...rest} = account;
        const date = new Date(startDate);
        this.account = {
          startDate: `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`,
          ...rest
        };
        this.isLoading = false;
      }
    });
  }

  async viewCard(id) {
    await this.router.navigate(
      ['cards', id],
      {
        queryParams: {
          ref: `${this.accountId}`,
        }
      });
  }

}
