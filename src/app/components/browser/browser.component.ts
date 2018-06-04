import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {RedditService} from '../../services/reddit.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reddit: RedditService) {
    route.params.subscribe(params => this.id = params['id'] ? params['id'] : 'all');
  }


  ngOnInit() {
    // console.log('was:',this.id);
    // const id = this.route.snapshot.paramMap.get('id');
    // this.id = (id) ? id : 'all';
    // console.log('Browser searching for:', this.id);
  }

}
