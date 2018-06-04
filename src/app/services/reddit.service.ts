import { Injectable } from '@angular/core';

import * as Snoowrap from 'snoowrap';


@Injectable()

// { providedIn: 'root' }

export class RedditService {
  r: any;

  constructor() {
    this.r = new Snoowrap({userAgent: 'reddit-ninja v0.0.0'});
    this.r.noConflict();
    console.log(Snoowrap);
  }

  // searchSubreddits = () => this.r.searchSubreddits({query: 'cookies'});


}

