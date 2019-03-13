import { Component, OnInit } from '@angular/core';
import {CommonService} from '../shared/common.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  title = "MyBank";
  isAuthenticated = false;

  constructor(
    private commonService: CommonService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.commonService.getTitleListener().subscribe(newTitle => {
      this.title = newTitle !== ""? newTitle : "MyBank";
    });

    this.isAuthenticated = this.authService.getAuth();
    this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }

  async login(){
    this.authService.login("asdjh");
  }

  async logout(){
    this.authService.logout();
  }

}
