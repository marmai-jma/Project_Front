import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalReviewComponent } from './personal-review.component';

describe('PersonalReviewComponent', () => {
  let component: PersonalReviewComponent;
  let fixture: ComponentFixture<PersonalReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
