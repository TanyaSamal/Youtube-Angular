import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'ts-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {}

  public showResults(serchStr: string): void {
    this.router.navigate([serchStr]);
  }

}
