import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.changeTitle("Cards")
  }

}
