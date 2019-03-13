import { Component, OnInit } from '@angular/core';
import {CommonService} from '../shared/common.service';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {}

  doRefresh(event) {
    this.commonService.refresh(event);
  }
}
