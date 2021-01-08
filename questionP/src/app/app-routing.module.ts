import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponentComponent} from './main-component/main-component.component';
import {QuestionAndAnswerSiteComponent} from './question-and-answer-site/question-and-answer-site.component';

const routes: Routes = [
  {path: '', component: MainComponentComponent},
  {path: 'question&answer/:id', component: QuestionAndAnswerSiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
