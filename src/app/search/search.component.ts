import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../shared/services/items.service';
import { ISearchResponse } from '../shared/models/search-response.model';
import { Subscription } from 'rxjs';
import { SortByDatePipe } from '../shared/pipes/sortByDate.pipe';
import { SortByViewsPipe } from '../shared/pipes/sortByViews.pipe';
import { SortByWordPipe } from '../shared/pipes/sortByWord.pipe';

@Component({
  selector: 'ts-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SortByDatePipe, SortByViewsPipe, SortByWordPipe]
})

export class SearchComponent implements OnInit, OnDestroy {

  public response: ISearchResponse;
  public filteredResponse: ISearchResponse;
  public isFilterByDate: boolean = false;
  public isFilterByViews: boolean = false;
  public sub: Subscription;

  constructor(
    private itemService: ItemsService,
    private sortByDatePipe: SortByDatePipe,
    private sortByViewsPipe: SortByViewsPipe,
    private sortByWordPipe: SortByWordPipe
  ) { }

  private setOriginalResponse(): void {
    this.filteredResponse = Object.assign({}, this.response);
  }

  public ngOnInit(): void {
    this.itemService.getResponse()
    .subscribe((data: ISearchResponse) => {
      this.response = { ...data };
      this.setOriginalResponse();
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
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
