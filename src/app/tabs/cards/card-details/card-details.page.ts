import {Component, OnChanges, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Card} from '../../../shared/models/data.model';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../shared/auth.service';
import {DataService} from '../../../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit, OnDestroy {

  isAuthenticated = false;
  private authSubs: Subscription;

  isLoading = false;

  card: Card;
  cardId: string;
  owner: string;
  backRef: string;

  showCvc = false;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.card = new Card();
    this.isAuthenticated = this.authService.getAuth();
    this.authSubs = this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.cardId = this.route.snapshot.params.id;
    if (this.cardId) {
      this.getCardDetails();
    }
    this.route.params.subscribe(params => {
      this.cardId = params.id;
      if (this.cardId) {
        this.getCardDetails();
      }
    });

    this.backRef = this.route.snapshot.queryParams.ref || 'accounts';
    this.route.queryParams.subscribe(params => {
      this.backRef = `/accounts/${params.ref}`;
    });
  }

  ngOnDestroy() {
    this.authSubs.unsubscribe();
    this.cardId = null;
  }

  getCardDetails() {
    this.isLoading = true;
    this.dataService.getCardDetails(this.cardId).subscribe(card => {
      if (card) {
        const {expireDate, ...rest} = card;
        const date = new Date(expireDate);
        const format = `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`;
        this.card = {
          expireDate: format,
          ...rest,
        };
        const {firstName, lastName} = this.authService.getLoggedUser();
        this.owner = `${firstName} ${lastName}`.toUpperCase();
        this.isLoading = false;
      }
    });
  }

  async viewAccount(id) {
    await this.router.navigate(
      ['accounts', id],
      {
        queryParams: {
          ref: `${this.cardId}`,
        }
      }
    );
  }
}
