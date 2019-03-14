import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()title = 'MyBank';
  @Input()baseHref = '';
  isAuthenticated = false;
  constructor(
    private authService: AuthService) { }

  ngOnInit() {

    this.isAuthenticated = this.authService.getAuth();
    this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }

  async logout() {
    await this.authService.logout();
  }

}
