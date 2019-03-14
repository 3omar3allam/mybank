import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  isAuthenticated;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.isAuthenticated = this.authService.getAuth();
    if (!this.isAuthenticated) {
      await this.router.navigate(['/']);
    }
    this.authService.getAuthListener().subscribe(async auth => {
      this.isAuthenticated = auth;
      if (!auth) {
        await this.router.navigate(['/']);
      }
    });
  }
  async changeTab(tab) {
    const route = tab === 'login' ? '/' : `/${tab}`;

    await this.router.navigate([route]);
  }
}
