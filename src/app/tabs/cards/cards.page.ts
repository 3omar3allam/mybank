import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {DataService} from '../../shared/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Card} from '../../shared/models/data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit, OnDestroy {

  isAuthenticated = false;
  private authSubs: Subscription;

  isLoading = false;

  backRef: string;

  cards: Card[];

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getAuth();
    this.authSubs = this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.backRef = this.route.snapshot.queryParams.ref;
    this.route.queryParams.subscribe(params => {
      this.backRef = `/accounts/${params.ref}`;
    });

    this.isLoading = true;
    this.dataService.getCards().subscribe(cards => {
      if (cards) {
        this.cards = cards;
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.authSubs.unsubscribe();
  }

}
