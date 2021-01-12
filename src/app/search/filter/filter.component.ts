import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{

  @Output() filterByDate = new EventEmitter<any>();
  @Output() filterByViews = new EventEmitter<any>();
  @Output() filterByWord = new EventEmitter<any>();

  inputWord: string;

  constructor() { }
  
  ngOnInit() {}

  sortByDate() {
    this.filterByDate.emit();
  }

  sortByViews() {
    this.filterByViews.emit();
  }

  handleChangeWord(value) {
    this.inputWord = value;
  }

  sortByWord() {
    this.filterByWord.emit({
      word: this.inputWord
    });
  }

}
