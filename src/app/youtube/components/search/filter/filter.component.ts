import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit{

  @Output() public filterByDate: EventEmitter<any> = new EventEmitter<any>();
  @Output() public filterByViews: EventEmitter<any> = new EventEmitter<any>();
  @Output() public filterByWord: EventEmitter<any> = new EventEmitter<any>();

  public inputWord: string;

  constructor() { }

  public ngOnInit(): void {}

  public sortByDate(): void {
    this.filterByDate.emit();
  }

  public sortByViews(): void {
    this.filterByViews.emit();
  }

  public handleChangeWord(value: string): void {
    this.inputWord = value;
  }

  public sortByWord(): void {
    this.filterByWord.emit({
      word: this.inputWord
    });
  }

}
