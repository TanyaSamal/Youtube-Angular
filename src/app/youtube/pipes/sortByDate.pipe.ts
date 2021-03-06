import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortByDate'})
export class SortByDatePipe implements PipeTransform {
  public transform(items: any, filtered: boolean): any {
    if (filtered) {
      return items.sort((a, b) => a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1);
    } else {
      return items.sort((a, b) => a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1);
    }
  }
}
