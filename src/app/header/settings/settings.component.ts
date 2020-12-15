import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter() {
    document.querySelector('.filter').classList.toggle('visible');
  }

}
