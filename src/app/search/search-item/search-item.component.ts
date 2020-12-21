import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem} from '../../shared/models/search-item.model';

@Component({
  selector: 'ts-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() item: ISearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
