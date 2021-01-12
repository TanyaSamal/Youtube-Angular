import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {}

  public showResults(): void {
    const div: HTMLElement = document.querySelector('.results');
    div.classList.add('show');
  }

}
