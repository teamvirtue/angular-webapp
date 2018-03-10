import { Component, OnInit } from '@angular/core';

import { InfoService } from './home.service';
import { HomeInfo } from './home-info';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedInfo: HomeInfo;
  info: HomeInfo[];

  // eventTabIndex = 0;

  constructor(private infoService: InfoService) { } // public router: Router,
  ngOnInit() {
    this.getInfo();
  }

  onSelect(info: HomeInfo): void {
    this.selectedInfo = info;
    console.log(info.id * 100);
    $('.circle-image').css({'transform': 'translate3d(-' + info.id * 25 + '%, -' + info.id * 25 + '%, 0)'});
  }

  getInfo(): void {
    this.infoService.getInfo()
      .subscribe(info => this.info = info);
  }

  /*handleTabChange(event: { index: number, tab: any }) {
    this.eventTabIndex = event.index;
    console.log(event);
  }*/
}
