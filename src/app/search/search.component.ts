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
export class SearchComponent implements OnInit, OnDestroy{

  public response: ISearchResponse;
  public filteredResponse: ISearchResponse;
  public isFilterByDate: boolean = false;
  public isFilterByViews: boolean = false;
  sub: Subscription;

  constructor(
    private itemService: ItemsService,
    private sortByDatePipe: SortByDatePipe, 
    private sortByViewsPipe: SortByViewsPipe,
    private sortByWordPipe: SortByWordPipe
  ) { }

  ngOnInit() {
    this.itemService.getResponse()
    .subscribe((data: ISearchResponse) => {
      this.response = { ...data };
      this.setOriginalResponse();
    });
  }

  private setOriginalResponse() {
    this.filteredResponse = Object.assign({}, this.response);
  }

  filterByDate() {
    this.setOriginalResponse();
    this.isFilterByDate = !this.isFilterByDate;
    this.sortByDatePipe.transform(this.filteredResponse.items, this.isFilterByDate);
  }

  filterByViews() {
    this.setOriginalResponse();
    this.isFilterByViews = !this.isFilterByViews;
    this.sortByViewsPipe.transform(this.filteredResponse.items, this.isFilterByViews);
  }

  filterByWord(filterWord) {
    this.setOriginalResponse();
    this.filteredResponse.items = this.sortByWordPipe.transform(this.filteredResponse.items, filterWord.word);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
