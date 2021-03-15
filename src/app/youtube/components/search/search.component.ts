import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { ItemsService } from '../../services/items.service';
import { ISearchResponse } from '../../models/search-response.model';
import { ISearchItem } from '../../models/search-item.model';
import { SortByDatePipe } from '../../pipes/sortByDate.pipe';
import { SortByViewsPipe } from '../../pipes/sortByViews.pipe';
import { SortByWordPipe } from '../../pipes/sortByWord.pipe';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'ts-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SortByDatePipe, SortByViewsPipe, SortByWordPipe]
})

export class SearchComponent implements OnInit, OnDestroy {

  public response: ISearchResponse = Object.assign({});
  public filteredResponse: ISearchResponse = Object.assign({});
  public nextResponse: ISearchResponse = Object.assign({});
  public statistics: ISearchResponse = Object.assign({});
  public nextStatistics: ISearchResponse = Object.assign({});

  public isFilterByDate: boolean = false;
  public isFilterByViews: boolean = false;
  public isLoaded: boolean = false;

  public searchedValue: string = '';
  public nextStr: string = '';

  public sub1: Subscription;
  public sub2: Subscription;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private sortByDatePipe: SortByDatePipe,
    private sortByViewsPipe: SortByViewsPipe,
    private sortByWordPipe: SortByWordPipe
  ) { }

  private setOriginalResponse(): void {
    this.filteredResponse = Object.assign({}, this.statistics);
  }

  public ngOnInit(): void {
    this.sub1 = this.route.params.pipe(
      map((params: Params) => {
        this.searchedValue = params.searchValue;
        return params.searchValue;
      }),
      mergeMap((searchValue) => {
        return this.itemService.getResponse(searchValue);
      }),
      mergeMap((data) => {
        let queryIds = '';
        this.response = { ...data };

        this.response.items.forEach( (item: ISearchItem) => {
          queryIds = '' + queryIds + item.id.videoId + ',';
        });

        this.nextStr = this.response.nextPageToken;

        return this.itemService.getStatistics(queryIds);
      })
    ).subscribe((data) => {
      this.statistics = { ...data };
      this.setOriginalResponse();
      this.isLoaded = true;
    });
  }

  public showNextResults(): void {
    this.sub2 = this.itemService.getNextPart(this.searchedValue, this.nextStr).pipe(
      mergeMap((data) => {
        let queryIds = '';
        this.nextResponse = { ...data };

        this.nextResponse.items.forEach((item: ISearchItem) => {
          queryIds = '' + queryIds + item.id.videoId + ',';
        });

        this.nextStr = this.nextResponse.nextPageToken;
        this.nextResponse = Object.assign({});
        return this.itemService.getStatistics(queryIds);
      })
    ).subscribe((data) => {
      this.nextStatistics = { ...data };
      this.statistics.items = this.statistics.items.concat(this.nextStatistics.items);
      this.setOriginalResponse();
      this.isLoaded = true;
    });
  }

  public filterByDate(): void {
    this.setOriginalResponse();
    this.isFilterByDate = !this.isFilterByDate;
    this.sortByDatePipe.transform(this.filteredResponse.items, this.isFilterByDate);
  }

  public filterByViews(): void {
    this.setOriginalResponse();
    this.isFilterByViews = !this.isFilterByViews;
    this.sortByViewsPipe.transform(this.filteredResponse.items, this.isFilterByViews);
  }

  public filterByWord(filterWord: { word: string }): void {
    this.setOriginalResponse();
    this.filteredResponse.items = this.sortByWordPipe.transform(this.filteredResponse.items, filterWord.word);
  }

  public ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
