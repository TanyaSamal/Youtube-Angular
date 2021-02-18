import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'ts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  public sub: Subscription;
  public response: ISearchResponse = Object.assign({});
  public id: string;
  public item: ISearchItem = Object.assign({});

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.sub = this.route.params
    .subscribe((params: Params) => {
      this.id = params.id;
      this.itemService.getResponse('js')
      .subscribe((data: ISearchResponse) => {
        this.response = { ...data };
        this.item = this.response.items.find(item => item.id.videoId === this.id);
      });
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public ngOnDestroy(): void {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }

}
