import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Constants } from '../../../../shared/consts';

@Component({
  selector: 'ts-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {

    const searchBox: HTMLInputElement = document.querySelector('.search-box');

    const typeahead: Observable<any> = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > Constants.MIN_CHARACTERS),
      debounceTime(Constants.DEBOUNCE_TIME),
      distinctUntilChanged()
    );

    typeahead.subscribe(searchTerm => {
      this.router.navigate(['/search', searchTerm]);
    });
  }

}
