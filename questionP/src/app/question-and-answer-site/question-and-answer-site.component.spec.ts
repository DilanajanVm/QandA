import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAndAnswerSiteComponent } from './question-and-answer-site.component';

describe('QuestionAndAnswerSiteComponent', () => {
  let component: QuestionAndAnswerSiteComponent;
  let fixture: ComponentFixture<QuestionAndAnswerSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAndAnswerSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAndAnswerSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
