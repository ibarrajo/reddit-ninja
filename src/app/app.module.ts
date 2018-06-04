import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserComponent } from './components/browser/browser.component';
import {RedditService} from './services/reddit.service';
import { SubredditComponent } from './components/subreddit/subreddit.component';

const appRoutes: Routes = [
  {path: '', component: BrowserComponent},
  {path: 'browse/:id', component: BrowserComponent},
  {path: 'r/:id', component: SubredditComponent},
  {path: 'x', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BrowserComponent,
    SubredditComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppBootstrapModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
