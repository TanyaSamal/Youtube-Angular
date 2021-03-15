import { Component} from '@angular/core';
import { Constants } from './shared/consts';

@Component({
  selector: 'ts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = Constants.TITLE;
}
