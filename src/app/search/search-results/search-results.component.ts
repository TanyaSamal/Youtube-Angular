import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemsService } from '../../shared/services/items.service';
import { ISearchResponse } from '../../shared/models/search-response.model';

@Component({
  selector: 'ts-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  sub: Subscription;
  response: ISearchResponse;

  constructor(private itemService: ItemsService) { }

  public ngOnInit(): void {
    this.sub = this.itemService.getResponse()
    .subscribe((data: ISearchResponse) => {
      this.response = { ...data }
      console.log(this.response.items);
      
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
