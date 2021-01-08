import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {SessionListComponent} from './main-component/session-list/session-list.component';
import {MainBoadComponent} from './main-component/main-boad/main-boad.component';
import { FooterComponent } from './main-component/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { FirstSessionComponent } from './main-component/first-session/first-session.component';
import { ListModuleComponent } from './main-component/list-module/list-module.component';
import { NavBarComponent } from './main-component/nav-bar/nav-bar.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { QuestionAndAnswerSiteComponent } from './question-and-answer-site/question-and-answer-site.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionListComponent,
    MainBoadComponent,
    FooterComponent,
    FirstSessionComponent,
    ListModuleComponent,
    NavBarComponent,
    MainComponentComponent,
    QuestionAndAnswerSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
