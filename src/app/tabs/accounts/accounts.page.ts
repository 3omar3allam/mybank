import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.changeTitle("Accounts");
  }

}
