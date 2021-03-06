import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem} from '../../../models/search-item.model';

@Component({
  selector: 'ts-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public item: ISearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
