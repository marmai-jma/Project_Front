import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecosComponent } from './list-recos.component';

describe('ListRecosComponent', () => {
  let component: ListRecosComponent;
  let fixture: ComponentFixture<ListRecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
