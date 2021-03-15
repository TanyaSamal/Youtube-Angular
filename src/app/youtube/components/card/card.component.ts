import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
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
  public item: ISearchItem = Object.assign({});

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.sub = this.route.params.pipe(
      map((params: Params) => {
        return params.id;
      }),
      mergeMap((id) => {
        const commonResponse: Observable<ISearchResponse> = this.itemService.getResponse('js');
        const statisticsResponse: Observable<ISearchResponse> = this.itemService.getStatistics(id);
        return forkJoin([commonResponse, statisticsResponse]);
      })
    ).subscribe((data) => {
      this.response = {...data[1]};
      this.item = this.response.items[0];
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
