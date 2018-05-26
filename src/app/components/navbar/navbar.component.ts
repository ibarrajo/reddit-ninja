import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean;

  toogleNavigation(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
