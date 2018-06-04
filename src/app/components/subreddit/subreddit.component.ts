import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RedditService} from '../../services/reddit.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private reddit: RedditService) {
    route.params.subscribe(p => this.load(p['id']));
  }
   load(subrredit: string) {
    console.log('now loading', subrredit, 'data');
    console.log(this.reddit);
  }

  ngOnInit() {
  }


}
