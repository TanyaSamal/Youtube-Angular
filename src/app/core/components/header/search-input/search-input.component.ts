import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'ts-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {

    const searchBox = document.querySelector('.search-box');

    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 3),
      debounceTime(50),
      distinctUntilChanged()
    );

    typeahead.subscribe(searchTerm => {
      this.router.navigate(['/search', searchTerm])
    });
  }

}
