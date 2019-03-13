import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {AuthService} from '../../shared/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  isAuthenticated = false;
  private authSubs: Subscription;

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.commonService.changeTitle("");
    this.isAuthenticated = this.authService.getAuth();
    this.authSubs = this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }

  ngOnDestroy(): void {
    this.authSubs.unsubscribe();
  }

  getUserData(){

  }
}
