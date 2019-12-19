import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaNavComponent } from './media-nav.component';

describe('MediaNavComponent', () => {
  let component: MediaNavComponent;
  let fixture: ComponentFixture<MediaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
