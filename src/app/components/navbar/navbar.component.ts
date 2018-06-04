import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import {RedditService} from '../../services/reddit.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean;

  toggleNavigation(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  browse(sub): any {
    this.router.navigate(['/browse/', sub]);
    return false;
  }

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.isCollapsed = true;
  }

  ngOnInit() {

  }

}
