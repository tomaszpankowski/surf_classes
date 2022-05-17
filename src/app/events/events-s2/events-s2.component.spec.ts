import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsS2Component } from './events-s2.component';

describe('EventsS2Component', () => {
  let component: EventsS2Component;
  let fixture: ComponentFixture<EventsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
