import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsS2Component } from './sports-s2.component';

describe('SportsS2Component', () => {
  let component: SportsS2Component;
  let fixture: ComponentFixture<SportsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
