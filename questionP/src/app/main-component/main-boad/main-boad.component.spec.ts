import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoadComponent } from './main-boad.component';

describe('MainBoadComponent', () => {
  let component: MainBoadComponent;
  let fixture: ComponentFixture<MainBoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
