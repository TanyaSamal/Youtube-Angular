import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'ts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  sub: Subscription;
  public response: ISearchResponse;
  id: string;
  public item: ISearchItem;

  constructor(private route: ActivatedRoute,
    private itemService: ItemsService,) { }

  ngOnInit(): void {
    this.sub = this.route.params
    .subscribe((params: Params) => {
      this.id = params['id'];
      this.itemService.getResponse()
      .subscribe((data: ISearchResponse) => {
        this.response = { ...data };
        this.item = this.response.items.find(item => item.id === this.id);
      });
    }); 

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
