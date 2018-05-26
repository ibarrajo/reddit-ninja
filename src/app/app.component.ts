import { Component, ViewEncapsulation } from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  constructor() {
    setTheme('bs4');
  }
}
