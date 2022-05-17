import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsS3Component } from './sports-s3.component';

describe('SportsS3Component', () => {
  let component: SportsS3Component;
  let fixture: ComponentFixture<SportsS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
