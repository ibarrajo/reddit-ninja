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

const appRoutes: Routes = [
  {path: '', component: BrowserComponent},
  {path: 'x', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BrowserComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppBootstrapModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
