import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { ItemsService } from '../../services/items.service';
import { ISearchResponse } from '../../models/search-response.model';
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
  public statistics: ISearchResponse = Object.assign({});

  public isFilterByDate: boolean = false;
  public isFilterByViews: boolean = false;
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
        return params.searchValue;
      }),
      mergeMap((searchValue) => {
        console.log(searchValue);
        
        return this.itemService.getResponse(searchValue);
      }),
      mergeMap((data) => {
        let queryIds: string = '';
        console.log(data);
        
        this.response = { ...data };

        this.response.items.forEach(function (item) {
          queryIds = '' + queryIds + item.id.videoId + ',';
        });

        return this.itemService.getStatistics(queryIds);
      })
    ).subscribe((data) => {
      console.log(data);
      
      this.statistics = { ...data };
      this.setOriginalResponse();
    });
    // this.sub1 = this.itemService.getResponse('').pipe(
    //   mergeMap((data) => {
    //     let queryIds: string = '';
    //     this.response = { ...data };

    //     this.response.items.forEach(function (item) {
    //       queryIds = '' + queryIds + item.id.videoId + ',';
    //     });

    //     return this.itemService.getStatistics(queryIds);
    //   })
    // ).subscribe((data) => {
    //   this.statistics = { ...data };
    //   this.setOriginalResponse();
    // });
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
