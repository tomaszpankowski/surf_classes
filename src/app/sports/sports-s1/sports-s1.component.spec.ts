import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsS1Component } from './sports-s1.component';

describe('SportsS1Component', () => {
  let component: SportsS1Component;
  let fixture: ComponentFixture<SportsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
