import { Component, OnInit, Input } from '@angular/core';
import { ISearchResponse } from '../../shared/models/search-response.model';
import { ISearchItem} from '../../shared/models/search-item.model';

@Component({
  selector: 'ts-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input('response') item: ISearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
