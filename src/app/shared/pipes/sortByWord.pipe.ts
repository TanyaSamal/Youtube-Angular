import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortByWord'})
export class SortByWordPipe implements PipeTransform {
  public transform(items: any, word: string): any {
    return items.filter(a => a.snippet.title.toLowerCase().indexOf(word.toLowerCase()) !== -1);
  }
}
