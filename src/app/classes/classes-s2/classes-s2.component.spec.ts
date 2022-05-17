import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesS2Component } from './classes-s2.component';

describe('ClassesS2Component', () => {
  let component: ClassesS2Component;
  let fixture: ComponentFixture<ClassesS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
