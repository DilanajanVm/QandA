import {Component, OnInit} from '@angular/core';
import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-and-answer-site',
  templateUrl: './question-and-answer-site.component.html',
  styleUrls: ['./question-and-answer-site.component.css']
})
export class QuestionAndAnswerSiteComponent implements OnInit {

  constructor(private  route: ActivatedRoute) {
  }

  topic: string | null = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.topic);
    this.topic = id;
    console.log('-----------------------------------------');
    console.log(this.topic);
  }
}
