import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HomeInfo } from '../home-info';
import { InfoService } from '../home.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {
  @Input() info: HomeInfo;

  constructor(
    private route: ActivatedRoute,
    private infoService: InfoService,
    // private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.infoService.getData(id)
      .subscribe(info => this.info = info);
  }

  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.infoService.getHero(id)
  //     .subscribe(info => this.info = info);
  // }
}
