import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoItemComponent } from './reco-item.component';

describe('RecoItemComponent', () => {
  let component: RecoItemComponent;
  let fixture: ComponentFixture<RecoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
