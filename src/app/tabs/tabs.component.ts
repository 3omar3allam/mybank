import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../shared/common.service';
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
    private commonService: CommonService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.getAuth();
    this.authService.getAuthListener().subscribe(auth => {
      this.isAuthenticated = auth;
      if(!auth){
        this.commonService.changeTitle("");
        this.router.navigateByUrl('/');
      }
    });
  }
  changeTab(tab) {
    if(tab === 'home'){
      this.commonService.changeTitle("");
      this.router.navigateByUrl('/');
    }
    else {
      let pageName = `${tab[0].toUpperCase()}${tab.substr(1)}`
      this.commonService.changeTitle(pageName);
      this.router.navigateByUrl(tab);
    }
  }
}
