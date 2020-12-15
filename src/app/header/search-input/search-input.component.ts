import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showResults() {
    const div = document.querySelector('.results');
    div.classList.add('show');
  }

}
