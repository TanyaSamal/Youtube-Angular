import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortByViews'})
export class SortByViewsPipe implements PipeTransform {
  public transform(items: any, filtered: boolean): any {
    if (filtered) {
      return items.sort((a, b) => +a.statistics.viewCount < +b.statistics.viewCount ? 1 : -1);
    } else {
      return items.sort((a, b) => +a.statistics.viewCount > +b.statistics.viewCount ? 1 : -1);
    }
  }
}
