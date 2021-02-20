import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem} from '../../models/search-item.model';

@Component({
  selector: 'ts-socials-block',
  templateUrl: './socials-block.component.html',
  styleUrls: ['./socials-block.component.scss']
})
export class SocialsBlockComponent implements OnInit {

  @Input() public item: ISearchItem = Object.assign({});

  constructor() { }

  public ngOnInit(): void {
  }

}
