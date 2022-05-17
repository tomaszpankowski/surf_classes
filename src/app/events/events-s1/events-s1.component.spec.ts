import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsS1Component } from './events-s1.component';

describe('EventsS1Component', () => {
  let component: EventsS1Component;
  let fixture: ComponentFixture<EventsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
